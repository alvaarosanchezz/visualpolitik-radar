/* ══════════════════════════════════════════════════════════════
   VP RADAR DASHBOARD — dashboard.js v6.0
   Reads RADAR_DATA from data_YYYY-MM-DD.js and optionally
   TEAM_PROPOSALS from team_proposals.js.
   Renders all sections into the HTML shell.
══════════════════════════════════════════════════════════════ */

// ── HELPERS ───────────────────────────────────────────────────
const $ = id => document.getElementById(id);

/* ── localStorage helpers for team interaction ─────────────── */
function getStorageKey(prefix) {
  const d = (window.RADAR_DATA || {}).meta || {};
  return `vp_${prefix}_${d.date || 'unknown'}`;
}
function loadInterest() {
  try { return JSON.parse(localStorage.getItem(getStorageKey('interest')) || '{}'); } catch { return {}; }
}
function saveInterest(obj) {
  try { localStorage.setItem(getStorageKey('interest'), JSON.stringify(obj)); } catch {}
}

/* ── Status badge helpers ──────────────────────────────────── */
const STATUS_MAP = {
  'libre':             { cls: 'st-libre',       label: 'Libre',             icon: '⚪' },
  'interesante':       { cls: 'st-interesante', label: 'Interesante',       icon: '💡' },
  'reservado':         { cls: 'st-reservado',   label: 'Reservado',         icon: '🔒' },
  'en-investigacion':  { cls: 'st-invest',      label: 'En investigacion',  icon: '🔍' },
  'en-guion':          { cls: 'st-guion',       label: 'En guion',          icon: '✍️' },
  'en-revision':       { cls: 'st-revision',    label: 'En revision',       icon: '📝' },
  'descartado':        { cls: 'st-descartado',  label: 'Descartado',        icon: '❌' }
};

function statusBadge(status) {
  const s = STATUS_MAP[status] || STATUS_MAP['libre'];
  return `<span class="assign-status ${s.cls}">${s.icon} ${s.label}</span>`;
}

// ── RENDER FUNCTIONS (existing) ──────────────────────────────

function renderTicker(items) {
  const html = items.map(i => `<span class="ticker-item ${i.cls}">${i.text}</span>`).join('');
  return `<div class="ticker-inner">${html}${html}</div>`;
}

function renderHero(meta, hero) {
  return `
    <div class="hero-top">
      <span class="vp-logo">VISUALPOLITIK</span>
      <span class="live-badge">● EN VIVO</span>
      <span class="hero-date">📡 RADAR EDITORIAL · ${meta.dateLabel} · ${meta.brisbane}</span>
    </div>
    <div class="hero-title">INTELIGENCIA EDITORIAL <span>DIARIA</span></div>
    <div class="hero-subtitle">Dashboard premium v6.0 — Geopolitica · Economia · Poder · Mesa editorial VPK</div>
    <div class="hero-grid">
      ${hero.map(b => `
        <div class="hero-box">
          <div class="hero-box-label">${b.label}</div>
          <div class="hero-box-content">${b.content}</div>
        </div>`).join('')}
    </div>`;
}

function renderCoveredBar(videos) {
  return `
    <div class="covered-bar-title">⚠️ VIDEOS VP PUBLICADOS ESTE MES — NO REPETIR</div>
    <div class="covered-tags">${videos.map(v => `<span class="ctag">${v}</span>`).join('')}</div>`;
}

function renderSources(sources) {
  return sources.map(s => `
    <div class="source-item">
      <a class="source-link" href="${s.url}" target="_blank" rel="noopener noreferrer">${s.headline}</a>
      <div class="source-meta">
        <span class="source-medium">${s.medium}</span>
        <span class="source-date">${s.date}</span>
      </div>
      <div class="source-desc">${s.desc}</div>
    </div>`).join('');
}

function renderNewsCard(item) {
  const tags = item.tags.map(t => `<span class="tag ${t.cls}">${t.text}</span>`).join('');
  const pills = item.pills.map(p => `<span class="data-pill">${p}</span>`).join('');
  const d = item.detail;
  return `
    <article class="news-card">
      <div class="news-card-img-wrap">
        <img class="news-card-img" src="${item.image}" alt="${item.imageAlt}"
             onerror="this.src='${item.imageFallback}'">
        ${item.imageCredit ? `<div class="img-credit">📷 ${item.imageCredit}</div>` : ''}
      </div>
      <div class="news-card-body">
        <div class="news-card-header">${tags}</div>
        <div class="news-card-title">${item.title}</div>
        <div class="news-data">${pills}</div>
        <div class="why-box"><strong>🎯 Por que importa:</strong> ${item.why}</div>
        <div class="viral-bar"><div class="viral-fill ${item.viralCls}" style="width:${item.viralPct}%"></div></div>
        <div class="viral-label">Viralidad: ${item.viralPct}% · ${item.viralSources}</div>
      </div>
      <details class="news-details">
        <summary>
          📰 Ver ${d.sources.length} fuentes + analisis editorial
          <span class="expand-icon">▼</span>
        </summary>
        <div class="detail-inner">
          <div class="detail-summary">${d.summary}</div>
          <div class="detail-block detail-context">
            <span class="block-label">Contexto</span>
            <p>${d.context}</p>
          </div>
          <div class="detail-block detail-vp">
            <span class="block-label">Para VisualPolitik</span>
            <p>${d.vp}</p>
          </div>
          <div class="sources-label">📋 Fuentes verificadas</div>
          ${renderSources(d.sources)}
          <div class="verif-note">✓ ${d.verification}</div>
        </div>
      </details>
    </article>`;
}

function renderProposalSources(sources) {
  return sources.map(s => `
    <div class="rsource">
      <a class="rsource-link" href="${s.url}" target="_blank" rel="noopener noreferrer">${s.headline}</a>
      <div class="rsource-meta">
        <span class="rsource-medium">${s.medium}</span>
        <span class="rsource-date">${s.date}</span>
      </div>
      <div class="rsource-desc">${s.desc}</div>
    </div>`).join('');
}

function renderProposal(p) {
  const chips = p.chips.map(c => `<span class="chip ${c.cls}">${c.text}</span>`).join('');
  const tags  = p.tags.map(t => `<span class="tag ${t.cls}">${t.text}</span>`).join('');
  const fields = p.fields.map(f => `
    <div class="pfield">
      <div class="pfield-label">${f.label}</div>
      <div class="pfield-value">${f.value}</div>
    </div>`).join('');
  const sourceBlock = p.sources && p.sources.length
    ? `<div class="pfield">
         <div class="pfield-label">🔬 Fuentes investigacion</div>
         <div class="pfield-value">${renderProposalSources(p.sources)}</div>
       </div>`
    : '';

  // Assignment info (from data file or default)
  const assign = p.assignment || {};
  const status = assign.status || 'libre';
  const assignee = assign.assignee || '';
  const targetDate = assign.targetDate || '';
  const assignNotes = assign.notes || '';

  const assignRow = `
    <div class="assign-row" data-proposal="${p.number}">
      ${statusBadge(status)}
      ${assignee ? `<span class="assign-who">👤 ${assignee}</span>` : ''}
      ${targetDate ? `<span class="assign-date">📅 ${targetDate}</span>` : ''}
      ${assignNotes ? `<span class="assign-notes">📝 ${assignNotes}</span>` : ''}
      <button class="btn-interest" data-id="${p.number}" title="Marcar interes personal (solo tu navegador)">
        💡 Me interesa
      </button>
    </div>`;

  return `
    <div class="proposal${p.golden ? ' golden' : ''}">
      <img class="prop-banner" src="${p.banner}" alt="${p.bannerAlt}"
           onerror="this.src='${p.bannerFallback}'">
      <div class="prop-header">
        <div class="prop-header-left">
          <div class="prop-number">${p.number}</div>
          <div class="prop-region">${tags}${p.flag ? `<img src="https://flagcdn.com/16/${p.flag}.png" alt="${p.flag.toUpperCase()}" style="height:12px">` : ''}</div>
          <div class="prop-title">${p.title}</div>
          <div class="signal-row">${chips}</div>
        </div>
        <span class="pot-badge ${p.potCls}">${p.potText}</span>
      </div>
      ${assignRow}
      <div class="prop-body">
        <div class="tesis-box">${p.tesis}</div>
        <hr class="prop-divider">
        ${fields}
        ${sourceBlock}
      </div>
    </div>`;
}

function renderRanking(rows) {
  const ths = ['Tema','Viral 🔴','Profundidad','Timing','Encaje VP','Veredicto'];
  const header = ths.map(h => `<th>${h}</th>`).join('');
  const body = rows.map(r => `
    <tr>
      <td><strong>${r.tema}</strong><br><span style="font-size:11px;color:var(--muted)">${r.subtema}</span></td>
      <td><div class="bar-cell"><div class="bar-f" style="width:${r.viral}px;background:var(--red)"></div><span>${r.viral}%</span></div></td>
      <td><div class="bar-cell"><div class="bar-f" style="width:${r.depth}px;background:var(--blue)"></div><span>${r.depth}%</span></div></td>
      <td><div class="bar-cell"><div class="bar-f" style="width:${r.timing}px;background:var(--orange)"></div><span>${r.timing}%</span></div></td>
      <td><div class="bar-cell"><div class="bar-f" style="width:${r.fit}px;background:var(--green)"></div><span>${r.fit}%</span></div></td>
      <td><span class="${r.verdCls}">${r.verdText}</span></td>
    </tr>`).join('');
  return `<table class="ranking"><thead><tr>${header}</tr></thead><tbody>${body}</tbody></table>`;
}

function renderVigilar(items) {
  return items.map(v => `
    <div class="watch-card">
      <div class="watch-card-title">${v.title}</div>
      <div class="watch-card-body">${v.body}</div>
      <div class="watch-trigger">⚡ Cuando escalaria: ${v.trigger}</div>
      <div class="watch-source">🔗 <a href="${v.sourceUrl}" target="_blank" rel="noopener">${v.sourceText}</a></div>
    </div>`).join('');
}

// ── NEW: Assignment table ────────────────────────────────────

function renderAssignmentTable(proposals) {
  const rows = proposals.map(p => {
    const a = p.assignment || {};
    const status = a.status || 'libre';
    const s = STATUS_MAP[status] || STATUS_MAP['libre'];
    return `
      <tr class="assign-table-row ${status === 'libre' ? 'row-libre' : ''}">
        <td>
          <strong>${p.number}</strong>
          ${p.golden ? '<span class="assign-golden-tag">DORADO</span>' : ''}
        </td>
        <td class="assign-tema-cell">
          <div class="assign-tema-title">${p.title.length > 70 ? p.title.substring(0, 70) + '...' : p.title}</div>
          <div class="assign-tema-pot"><span class="pot-badge-sm ${p.potCls}">${p.potText}</span></div>
        </td>
        <td>${statusBadge(status)}</td>
        <td>${a.assignee || '<span class="assign-empty">—</span>'}</td>
        <td>${a.targetDate || '<span class="assign-empty">—</span>'}</td>
        <td>${a.notes || '<span class="assign-empty">—</span>'}</td>
      </tr>`;
  }).join('');

  return `
    <div class="assign-how">
      <div class="assign-how-title">Como funciona</div>
      <div class="assign-how-text">
        1. Revisa las propuestas y elige un tema.<br>
        2. Usa el boton "💡 Me interesa" en cada propuesta para marcarlo en tu navegador.<br>
        3. Comunica tu eleccion por el grupo de Telegram/chat del equipo.<br>
        4. El estado oficial se actualiza en el proximo radar.
      </div>
    </div>
    <div class="assign-table-wrap">
      <table class="assign-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Tema</th>
            <th>Estado</th>
            <th>Guionista</th>
            <th>Fecha obj.</th>
            <th>Notas</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    <div class="assign-legend">
      ${Object.entries(STATUS_MAP).map(([k, v]) => `<span class="legend-item">${v.icon} ${v.label}</span>`).join('')}
    </div>`;
}

// ── NEW: Team proposals section ──────────────────────────────

function renderTeamProposals(proposals) {
  if (!proposals || proposals.length === 0) {
    return `
      <div class="team-empty">
        <div class="team-empty-icon">📭</div>
        <div class="team-empty-title">No hay propuestas del equipo esta semana</div>
        <div class="team-empty-text">Usa el formulario de abajo para proponer un tema que el radar no haya recogido.</div>
      </div>`;
  }

  return proposals.map(tp => {
    const urgencyMap = {
      'baja':    { cls: 'urg-baja',    label: 'Baja' },
      'media':   { cls: 'urg-media',   label: 'Media' },
      'alta':    { cls: 'urg-alta',    label: 'Alta' },
      'urgente': { cls: 'urg-urgente', label: 'Urgente' }
    };
    const urg = urgencyMap[tp.urgency] || urgencyMap['media'];
    const st = STATUS_MAP[tp.status] || STATUS_MAP['pendiente'];

    const detailFields = [
      tp.secondDerivative && { label: '🔬 Segunda derivada', value: tp.secondDerivative },
      tp.bigQuestion      && { label: '❓ Gran pregunta',     value: tp.bigQuestion },
      tp.conflict         && { label: '⚔️ Conflicto',         value: tp.conflict },
      tp.viralMotor       && { label: '🚀 Motor viral',       value: tp.viralMotor },
      tp.competitionSignal&& { label: '🔍 Competencia',       value: tp.competitionSignal },
      tp.investigateMore  && { label: '🔎 Investigar mas',    value: tp.investigateMore },
      tp.notes            && { label: '📝 Notas',             value: tp.notes }
    ].filter(Boolean);

    const sourcesHtml = (tp.sources || []).map(s => `
      <div class="tp-source">
        <a href="${s.url}" target="_blank" rel="noopener">${s.title}</a>
        <span class="tp-source-medium">${s.medium || ''}</span>
      </div>`).join('');

    return `
      <div class="team-proposal">
        <div class="tp-header">
          <div class="tp-meta">
            <span class="tp-author">👤 ${tp.author}</span>
            <span class="tp-date">📅 ${tp.date}</span>
            ${tp.region ? `<span class="tp-region">${tp.region}</span>` : ''}
            <span class="tp-urgency ${urg.cls}">⚡ ${urg.label}</span>
            ${statusBadge(tp.status)}
          </div>
          <div class="tp-title">${tp.flag ? `<img src="https://flagcdn.com/16/${tp.flag}.png" style="height:13px;vertical-align:middle"> ` : ''}${tp.title}</div>
        </div>
        <div class="tp-body">
          <div class="tp-section">
            <div class="tp-section-label">🗞️ Noticia</div>
            <div class="tp-section-value">${tp.news}</div>
          </div>
          <div class="tp-section">
            <div class="tp-section-label">💡 Por que puede interesar</div>
            <div class="tp-section-value">${tp.whyInteresting}</div>
          </div>
          ${tp.vpAngle ? `
          <div class="tp-section">
            <div class="tp-section-label">🎯 Enfoque VP</div>
            <div class="tp-section-value">${tp.vpAngle}</div>
          </div>` : ''}
          ${detailFields.map(f => `
          <div class="tp-section">
            <div class="tp-section-label">${f.label}</div>
            <div class="tp-section-value">${f.value}</div>
          </div>`).join('')}
          ${sourcesHtml ? `
          <div class="tp-section">
            <div class="tp-section-label">🔗 Fuentes</div>
            <div class="tp-section-value">${sourcesHtml}</div>
          </div>` : ''}
        </div>
      </div>`;
  }).join('');
}

// ── NEW: Proposal form (generates JSON for copy-paste) ───────

function renderProposalForm() {
  return `
    <div class="form-card">
      <div class="form-title">Proponer un tema</div>
      <div class="form-desc">Rellena los campos y copia el JSON generado. Envialo por Telegram al grupo del equipo para que se incluya en el proximo radar.</div>
      <div class="form-grid">
        <div class="form-group">
          <label>Tu nombre *</label>
          <input type="text" id="f-author" placeholder="Ej: Ana Garcia">
        </div>
        <div class="form-group">
          <label>Region</label>
          <select id="f-region">
            <option value="">— Seleccionar —</option>
            <option>ORIENTE MEDIO</option>
            <option>EUROPA</option>
            <option>LATAM</option>
            <option>ASIA-PACIFICO</option>
            <option>AFRICA</option>
            <option>EEUU</option>
            <option>ESPANA</option>
            <option>ECONOMIA</option>
            <option>GLOBAL</option>
          </select>
        </div>
        <div class="form-group form-full">
          <label>Tema propuesto *</label>
          <input type="text" id="f-title" placeholder="Ej: Como el cartel de Sinaloa controla el litio mexicano">
        </div>
        <div class="form-group form-full">
          <label>Noticia que lo justifica *</label>
          <textarea id="f-news" rows="2" placeholder="Hecho concreto con fecha y fuente"></textarea>
        </div>
        <div class="form-group form-full">
          <label>Por que puede ser interesante *</label>
          <textarea id="f-why" rows="2" placeholder="La conexion oculta, la paradoja, la segunda derivada"></textarea>
        </div>
        <div class="form-group form-full">
          <label>Posible enfoque VP</label>
          <textarea id="f-angle" rows="2" placeholder="Que video haria VisualPolitik con esto?"></textarea>
        </div>
        <div class="form-group">
          <label>Urgencia</label>
          <select id="f-urgency">
            <option value="media">Media</option>
            <option value="baja">Baja</option>
            <option value="alta">Alta</option>
            <option value="urgente">Urgente</option>
          </select>
        </div>
        <div class="form-group">
          <label>URL de fuente principal</label>
          <input type="url" id="f-source-url" placeholder="https://...">
        </div>
        <div class="form-group">
          <label>Medio de la fuente</label>
          <input type="text" id="f-source-medium" placeholder="Ej: Reuters, WaPo, Al Jazeera">
        </div>
      </div>
      <button class="btn-generate" onclick="generateProposalJSON()">📋 Generar JSON para copiar</button>
      <div id="form-output" class="form-output" style="display:none">
        <div class="form-output-label">Copia este texto y envialo por Telegram:</div>
        <pre id="form-json"></pre>
        <button class="btn-copy" onclick="copyProposalJSON()">📋 Copiar al portapapeles</button>
        <div id="copy-confirm" class="copy-confirm" style="display:none">✓ Copiado</div>
      </div>
    </div>`;
}

// ── Form logic ───────────────────────────────────────────────

function generateProposalJSON() {
  const author = document.getElementById('f-author').value.trim();
  const title  = document.getElementById('f-title').value.trim();
  const news   = document.getElementById('f-news').value.trim();
  const why    = document.getElementById('f-why').value.trim();

  if (!author || !title || !news || !why) {
    alert('Rellena al menos: nombre, tema, noticia y por que interesa.');
    return;
  }

  const proposal = {
    author: author,
    date: new Date().toISOString().split('T')[0],
    region: document.getElementById('f-region').value,
    title: title,
    news: news,
    whyInteresting: why,
    vpAngle: document.getElementById('f-angle').value.trim(),
    urgency: document.getElementById('f-urgency').value,
    status: 'pendiente',
    sources: []
  };

  const srcUrl = document.getElementById('f-source-url').value.trim();
  const srcMed = document.getElementById('f-source-medium').value.trim();
  if (srcUrl) {
    proposal.sources.push({ title: title, url: srcUrl, medium: srcMed });
  }

  const json = JSON.stringify(proposal, null, 2);
  document.getElementById('form-json').textContent = json;
  document.getElementById('form-output').style.display = 'block';
  document.getElementById('form-output').scrollIntoView({ behavior: 'smooth' });
}

function copyProposalJSON() {
  const text = document.getElementById('form-json').textContent;
  navigator.clipboard.writeText(text).then(() => {
    const el = document.getElementById('copy-confirm');
    el.style.display = 'inline';
    setTimeout(() => { el.style.display = 'none'; }, 2000);
  });
}

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Support both window.RADAR_DATA (v5.0+) and legacy VP_DATA
  const radarData = window.RADAR_DATA || (typeof VP_DATA !== 'undefined' ? VP_DATA : undefined);
  if (!radarData) {
    const scripts = document.querySelectorAll('script[src*="data_"]');
    const dataFile = scripts.length ? scripts[0].src.split('/').pop() : '(no data script found)';
    document.body.innerHTML = `<div style="color:#f44;padding:32px;font-family:monospace;background:#111;min-height:100vh">
      <h2>⚠️ Error de carga del dashboard</h2>
      <p><strong>Archivo de datos esperado:</strong> ${dataFile}</p>
      <p><strong>Variable global:</strong> ni window.RADAR_DATA ni VP_DATA estan definidas</p>
      <p>Posibles causas:</p>
      <ul>
        <li>Error de sintaxis en el archivo de datos (abrir la consola del navegador F12 → Console)</li>
        <li>El archivo no se cargo (comprobar pestana Network)</li>
        <li>El archivo cargo pero la variable se llama de otra forma</li>
      </ul>
      <p style="color:#888;margin-top:16px">Consejo: pulsa F12 → Console para ver el error exacto.</p>
    </div>`;
    return;
  }
  const d = radarData;
  document.title = `Radar Editorial VP · ${d.meta.dateLabel}`;

  // ── Existing sections ──
  $('ticker-wrap').innerHTML        = renderTicker(d.ticker);
  $('hero').innerHTML               = renderHero(d.meta, d.hero);
  $('covered-bar').innerHTML        = renderCoveredBar(d.coveredVideos);
  $('news-grid').innerHTML          = d.news.map(renderNewsCard).join('');
  $('proposals').innerHTML          = d.proposals.map(renderProposal).join('');
  $('ranking-wrap').innerHTML       = renderRanking(d.ranking);
  $('vigilar-grid').innerHTML       = renderVigilar(d.vigilar);

  // ── NEW: Assignment table ──
  const assignEl = $('assignment-table');
  if (assignEl) {
    assignEl.innerHTML = renderAssignmentTable(d.proposals);
  }

  // ── NEW: Team proposals ──
  const teamEl = $('team-proposals-grid');
  if (teamEl) {
    const teamData = window.TEAM_PROPOSALS || [];
    teamEl.innerHTML = renderTeamProposals(teamData);
  }

  // ── NEW: Proposal form ──
  const formEl = $('proposal-form');
  if (formEl) {
    formEl.innerHTML = renderProposalForm();
  }

  // ── Footer ──
  $('footer-date').textContent      = d.meta.dateLabel;
  $('footer-version').textContent   = 'v6.0 · ' + d.news.length + ' noticias · ' + d.proposals.length + ' propuestas · Mesa editorial VPK';

  // ── "Me interesa" buttons ──
  const interest = loadInterest();
  document.querySelectorAll('.btn-interest').forEach(btn => {
    const id = btn.dataset.id;
    if (interest[id]) {
      btn.classList.add('interested');
      btn.textContent = '✅ Te interesa';
    }
    btn.addEventListener('click', () => {
      const curr = loadInterest();
      if (curr[id]) {
        delete curr[id];
        btn.classList.remove('interested');
        btn.textContent = '💡 Me interesa';
      } else {
        curr[id] = true;
        btn.classList.add('interested');
        btn.textContent = '✅ Te interesa';
      }
      saveInterest(curr);
    });
  });
});
