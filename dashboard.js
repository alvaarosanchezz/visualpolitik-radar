/* ══════════════════════════════════════════════════════════════
   VP RADAR DASHBOARD — dashboard.js v6.1
   Reads RADAR_DATA from data_YYYY-MM-DD.js and optionally
   TEAM_PROPOSALS from team_proposals.js.
   Renders all sections + collaborative assignment system.
══════════════════════════════════════════════════════════════ */

// ── HELPERS ───────────────────────────────────────────────────
const $ = id => document.getElementById(id);

/* ── localStorage helpers ──────────────────────────────────── */
function getRadarDate() {
  const d = (window.RADAR_DATA || {}).meta || {};
  return d.date || 'unknown';
}

function getUserName() {
  return localStorage.getItem('vp_user_name') || '';
}
function setUserName(name) {
  localStorage.setItem('vp_user_name', name.trim());
}

// Assignments stored globally (not per-radar) so they persist across days
function loadAssignments() {
  try { return JSON.parse(localStorage.getItem('vp_assignments') || '{}'); } catch { return {}; }
}
function saveAssignments(obj) {
  try { localStorage.setItem('vp_assignments', JSON.stringify(obj)); } catch {}
}
function getAssignment(proposalId) {
  const all = loadAssignments();
  return all[proposalId] || null;
}
function setAssignment(proposalId, data) {
  const all = loadAssignments();
  all[proposalId] = { ...data, updatedAt: new Date().toISOString() };
  saveAssignments(all);
}
function clearAssignment(proposalId) {
  const all = loadAssignments();
  delete all[proposalId];
  saveAssignments(all);
}

// Merge: data_*.js assignment (official) < localStorage (instant local override)
function getEffectiveAssignment(proposal) {
  const official = proposal.assignment || {};
  const local = getAssignment(proposal.number);
  // If official has a non-libre status, it takes precedence (set by radar generator)
  if (official.status && official.status !== 'libre' && !local) {
    return official;
  }
  // Local override if it exists
  if (local) {
    return local;
  }
  return official;
}

/* ── URL params: import assignments from shared links ──────── */
function importFromURL() {
  const params = new URLSearchParams(window.location.search);
  const shared = params.get('assign');
  if (shared) {
    try {
      const decoded = JSON.parse(atob(shared));
      if (decoded && decoded.id && decoded.status) {
        const current = getAssignment(decoded.id);
        // Only import if newer or no local data
        if (!current || (decoded.updatedAt && (!current.updatedAt || decoded.updatedAt > current.updatedAt))) {
          setAssignment(decoded.id, decoded);
        }
      }
    } catch {}
    // Clean URL
    const url = new URL(window.location);
    url.searchParams.delete('assign');
    window.history.replaceState({}, '', url);
  }
}

/* ── Status definitions ────────────────────────────────────── */
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

function statusOptions(currentStatus) {
  return Object.entries(STATUS_MAP).map(([key, val]) =>
    `<option value="${key}" ${key === currentStatus ? 'selected' : ''}>${val.icon} ${val.label}</option>`
  ).join('');
}

/* ── Name modal ────────────────────────────────────────────── */
function showNameModal() {
  const existing = getUserName();
  const overlay = document.createElement('div');
  overlay.id = 'name-modal-overlay';
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-card">
      <div class="modal-icon">👤</div>
      <div class="modal-title">${existing ? 'Cambiar nombre' : 'Bienvenido al Radar VP'}</div>
      <div class="modal-desc">${existing ? 'Tu nombre actual: <strong>' + existing + '</strong>' : 'Introduce tu nombre para que el equipo sepa quien se asigna cada tema.'}</div>
      <input type="text" id="modal-name-input" class="modal-input" placeholder="Tu nombre (ej: Carlos, Ana)"
             value="${existing}" autofocus>
      <div class="modal-buttons">
        <button class="modal-btn modal-btn-primary" id="modal-name-save">Guardar</button>
        ${existing ? '<button class="modal-btn modal-btn-secondary" id="modal-name-cancel">Cancelar</button>' : ''}
      </div>
    </div>`;
  document.body.appendChild(overlay);

  const input = document.getElementById('modal-name-input');
  const saveBtn = document.getElementById('modal-name-save');
  const cancelBtn = document.getElementById('modal-name-cancel');

  function save() {
    const name = input.value.trim();
    if (!name) { input.style.borderColor = 'var(--red)'; input.focus(); return; }
    setUserName(name);
    overlay.remove();
    updateUserBadge();
  }

  saveBtn.addEventListener('click', save);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') save(); });
  if (cancelBtn) cancelBtn.addEventListener('click', () => overlay.remove());
}

function updateUserBadge() {
  const el = $('user-badge');
  const name = getUserName();
  if (el) {
    el.innerHTML = name
      ? `<span class="user-badge-name" title="Clic para cambiar nombre">👤 ${name}</span>`
      : `<span class="user-badge-login" title="Clic para identificarte">👤 Identificarse</span>`;
    el.onclick = showNameModal;
  }
}

/* ── Telegram message generator ────────────────────────────── */
function generateTelegramMsg(proposalId, title, status, assignee, notes) {
  const statusLabel = (STATUS_MAP[status] || STATUS_MAP['libre']).label;
  const icon = (STATUS_MAP[status] || STATUS_MAP['libre']).icon;
  const date = getRadarDate();
  const lines = [
    `${icon} *ASIGNACION DE TEMA*`,
    ``,
    `*Tema:* ${proposalId} — ${title}`,
    `*Estado:* ${statusLabel}`,
    `*Guionista:* ${assignee}`,
  ];
  if (notes) lines.push(`*Notas:* ${notes}`);
  lines.push(`*Radar:* ${date}`);
  lines.push(``);
  lines.push(`_Actualizado desde el dashboard VP_`);
  return lines.join('\n');
}

function showTelegramToast(proposalId, title, status, assignee, notes) {
  // Remove existing toast
  const old = document.getElementById('tg-toast');
  if (old) old.remove();

  const msg = generateTelegramMsg(proposalId, title, status, assignee, notes);
  const toast = document.createElement('div');
  toast.id = 'tg-toast';
  toast.className = 'tg-toast';
  toast.innerHTML = `
    <div class="tg-toast-header">
      <span>📋 Copia y envia al grupo de Telegram:</span>
      <button class="tg-toast-close" onclick="this.closest('.tg-toast').remove()">✕</button>
    </div>
    <pre class="tg-toast-msg">${msg}</pre>
    <div class="tg-toast-actions">
      <button class="btn-copy-tg" onclick="copyTgMsg(this)">📋 Copiar mensaje</button>
      <span class="tg-copy-ok" style="display:none">✓ Copiado</span>
    </div>`;
  document.body.appendChild(toast);
  // Auto-scroll toast into view
  toast.scrollIntoView({ behavior: 'smooth', block: 'end' });
  // Auto-dismiss after 15s
  setTimeout(() => { if (toast.parentNode) toast.remove(); }, 15000);
}

function copyTgMsg(btn) {
  const pre = btn.closest('.tg-toast').querySelector('.tg-toast-msg');
  navigator.clipboard.writeText(pre.textContent).then(() => {
    const ok = btn.nextElementSibling;
    ok.style.display = 'inline';
    setTimeout(() => { ok.style.display = 'none'; }, 2000);
  });
}

// ── RENDER FUNCTIONS ─────────────────────────────────────────

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
      <span id="user-badge" class="user-badge"></span>
    </div>
    <div class="hero-title">INTELIGENCIA EDITORIAL <span>DIARIA</span></div>
    <div class="hero-subtitle">Dashboard premium v6.1 — Geopolitica · Economia · Poder · Mesa editorial VPK</div>
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
    <div class="covered-section-header">
      <span class="covered-section-icon">📺</span>
      <div>
        <div class="covered-section-title">VIDEOS VP PUBLICADOS — NO REPETIR ESTOS TEMAS</div>
        <div class="covered-section-subtitle">Ultimos ${videos.length} videos del canal · Datos reales de YouTube · Actualizado a ${(window.RADAR_DATA || {}).meta?.dateLabel || 'hoy'}</div>
      </div>
    </div>
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

  const a = getEffectiveAssignment(p);
  const status = a.status || 'libre';
  const assignee = a.assignee || '';

  return `
    <div class="proposal${p.golden ? ' golden' : ''}" id="prop-${p.number}">
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
      <div class="assign-row" data-proposal="${p.number}" data-title="${p.title.replace(/"/g, '&quot;')}">
        <div class="assign-controls">
          <select class="assign-select" data-id="${p.number}" title="Cambiar estado">
            ${statusOptions(status)}
          </select>
          ${assignee ? `<span class="assign-who">👤 ${assignee}</span>` : ''}
        </div>
        <div class="assign-actions">
          <button class="btn-interest" data-id="${p.number}" title="Asignarme este tema">
            ${status !== 'libre' && assignee === getUserName() ? '✅ Asignado a ti' : '🙋 Asignarmelo'}
          </button>
          ${status !== 'libre' ? `<button class="btn-free" data-id="${p.number}" title="Liberar tema">↩️ Liberar</button>` : ''}
        </div>
      </div>
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

// ── Assignment table ─────────────────────────────────────────

function renderAssignmentTable(proposals) {
  const rows = proposals.map(p => {
    const a = getEffectiveAssignment(p);
    const status = a.status || 'libre';
    return `
      <tr class="assign-table-row ${status === 'libre' ? 'row-libre' : ''}" data-prop="${p.number}">
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
        1. Identificate con tu nombre (arriba a la derecha, junto a "EN VIVO").<br>
        2. Pulsa <strong>"🙋 Asignarmelo"</strong> en la propuesta que quieras trabajar.<br>
        3. Se generara un mensaje para Telegram — copialo y envialo al grupo del equipo.<br>
        4. La tabla se actualiza al instante en tu navegador. Tus companeros veran el cambio al abrir el dashboard.
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

// ── Team proposals — localStorage persistence ───────────────

function loadLocalProposals() {
  try { return JSON.parse(localStorage.getItem('vp_team_proposals') || '[]'); } catch { return []; }
}
function saveLocalProposals(arr) {
  try { localStorage.setItem('vp_team_proposals', JSON.stringify(arr)); } catch {}
}
function addLocalProposal(proposal) {
  const all = loadLocalProposals();
  proposal._id = 'local-' + Date.now();
  proposal._local = true;
  all.unshift(proposal);
  saveLocalProposals(all);
  return proposal;
}
function removeLocalProposal(id) {
  const all = loadLocalProposals();
  saveLocalProposals(all.filter(p => p._id !== id));
}

// Merge: team_proposals.js (official) + localStorage (instant local)
function getAllTeamProposals() {
  const official = (window.TEAM_PROPOSALS || []).map(p => ({ ...p, _local: false }));
  const local = loadLocalProposals();
  return [...local, ...official];
}

// ── Team proposals render ────────────────────────────────────

function renderSingleTeamProposal(tp) {
  const urgencyMap = {
    'baja':    { cls: 'urg-baja',    label: 'Baja' },
    'media':   { cls: 'urg-media',   label: 'Media' },
    'alta':    { cls: 'urg-alta',    label: 'Alta' },
    'urgente': { cls: 'urg-urgente', label: 'Urgente' }
  };
  const urg = urgencyMap[tp.urgency] || urgencyMap['media'];

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

  const deleteBtn = tp._local && tp._id
    ? `<button class="tp-delete" data-tpid="${tp._id}" title="Eliminar propuesta">🗑️</button>`
    : '';
  const localBadge = tp._local
    ? '<span class="tp-local-badge">LOCAL</span>'
    : '';

  return `
    <div class="team-proposal ${tp._local ? 'tp-local' : ''}" data-tpid="${tp._id || ''}">
      <div class="tp-header">
        <div class="tp-meta">
          <span class="tp-author">👤 ${tp.author}</span>
          <span class="tp-date">📅 ${tp.date}</span>
          ${tp.region ? `<span class="tp-region">${tp.region}</span>` : ''}
          <span class="tp-urgency ${urg.cls}">⚡ ${urg.label}</span>
          ${statusBadge(tp.status || 'pendiente')}
          ${localBadge}
          ${deleteBtn}
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
}

function renderTeamProposals(proposals) {
  if (!proposals || proposals.length === 0) {
    return `
      <div class="team-empty">
        <div class="team-empty-icon">📭</div>
        <div class="team-empty-title">No hay propuestas del equipo esta semana</div>
        <div class="team-empty-text">Usa el formulario de abajo para proponer un tema.</div>
      </div>`;
  }
  return proposals.map(renderSingleTeamProposal).join('');
}

function refreshTeamProposalsSection() {
  const el = $('team-proposals-grid');
  if (!el) return;
  const all = getAllTeamProposals();
  el.innerHTML = renderTeamProposals(all);
  // Bind delete buttons
  el.querySelectorAll('.tp-delete').forEach(btn => {
    btn.addEventListener('click', function() {
      const id = this.dataset.tpid;
      if (confirm('Eliminar esta propuesta?')) {
        removeLocalProposal(id);
        refreshTeamProposalsSection();
      }
    });
  });
}

// ── Proposal form ────────────────────────────────────────────

function renderProposalForm() {
  const userName = getUserName();
  return `
    <div class="form-card">
      <div class="form-title">Proponer un tema</div>
      <div class="form-desc">Rellena los campos y pulsa enviar. Tu propuesta aparecera al instante arriba y se generara un mensaje para Telegram.</div>
      <div class="form-grid">
        <div class="form-group">
          <label>Tu nombre *</label>
          <input type="text" id="f-author" placeholder="Ej: Ana Garcia" value="${userName}">
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
      <button class="btn-generate" onclick="generateProposalJSON()">🚀 Enviar propuesta</button>
      <div id="form-output" class="form-output" style="display:none">
        <div class="form-output-label">Copia este texto y envialo por Telegram:</div>
        <pre id="form-json"></pre>
        <button class="btn-copy" onclick="copyFormJSON()">📋 Copiar al portapapeles</button>
        <span id="copy-confirm" class="copy-confirm" style="display:none">✓ Copiado</span>
      </div>
    </div>`;
}

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
    author, date: new Date().toISOString().split('T')[0],
    region: document.getElementById('f-region').value,
    title, news, whyInteresting: why,
    vpAngle: document.getElementById('f-angle').value.trim(),
    urgency: document.getElementById('f-urgency').value,
    status: 'pendiente', sources: []
  };

  const srcUrl = document.getElementById('f-source-url').value.trim();
  const srcMed = document.getElementById('f-source-medium').value.trim();
  if (srcUrl) proposal.sources.push({ title, url: srcUrl, medium: srcMed });

  // 1. Save to localStorage and refresh section INSTANTLY
  addLocalProposal(proposal);
  refreshTeamProposalsSection();

  // 2. Generate Telegram message
  const tgMsg = [
    '💡 *PROPUESTA DEL EQUIPO VPK*',
    '',
    `*Autor:* ${author}`,
    `*Tema:* ${title}`,
    `*Region:* ${proposal.region || 'Sin especificar'}`,
    `*Urgencia:* ${proposal.urgency}`,
    '',
    `*Noticia:* ${news}`,
    '',
    `*Por que interesa:* ${why}`,
    proposal.vpAngle ? `\n*Enfoque VP:* ${proposal.vpAngle}` : '',
    srcUrl ? `\n*Fuente:* ${srcUrl} (${srcMed})` : '',
    '',
    `_Propuesta enviada desde el dashboard VP — ${proposal.date}_`
  ].filter(Boolean).join('\n');

  // 3. Show combined output: JSON + Telegram toast
  document.getElementById('form-json').textContent = JSON.stringify(proposal, null, 2);
  document.getElementById('form-output').style.display = 'block';

  // Show Telegram toast
  showTeamProposalToast(tgMsg);

  // 4. Clear form
  document.getElementById('f-title').value = '';
  document.getElementById('f-news').value = '';
  document.getElementById('f-why').value = '';
  document.getElementById('f-angle').value = '';
  document.getElementById('f-source-url').value = '';
  document.getElementById('f-source-medium').value = '';
  document.getElementById('f-region').value = '';
  document.getElementById('f-urgency').value = 'media';

  // 5. Scroll to the new proposal
  const grid = $('team-proposals-grid');
  if (grid && grid.firstElementChild) {
    grid.firstElementChild.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function showTeamProposalToast(msg) {
  const old = document.getElementById('tg-toast');
  if (old) old.remove();

  const toast = document.createElement('div');
  toast.id = 'tg-toast';
  toast.className = 'tg-toast';
  toast.innerHTML = `
    <div class="tg-toast-header">
      <span>✅ Propuesta anadida · Copia y envia al grupo de Telegram:</span>
      <button class="tg-toast-close" onclick="this.closest('.tg-toast').remove()">✕</button>
    </div>
    <pre class="tg-toast-msg">${msg}</pre>
    <div class="tg-toast-actions">
      <button class="btn-copy-tg" onclick="copyTgMsg(this)">📋 Copiar mensaje</button>
      <span class="tg-copy-ok" style="display:none">✓ Copiado</span>
    </div>`;
  document.body.appendChild(toast);
  setTimeout(() => { if (toast.parentNode) toast.remove(); }, 20000);
}

function copyFormJSON() {
  navigator.clipboard.writeText(document.getElementById('form-json').textContent).then(() => {
    const el = document.getElementById('copy-confirm');
    el.style.display = 'inline';
    setTimeout(() => { el.style.display = 'none'; }, 2000);
  });
}

// ── Re-render assignment row for a specific proposal ─────────
function refreshProposalAssignRow(proposalId) {
  const row = document.querySelector(`.assign-row[data-proposal="${proposalId}"]`);
  if (!row) return;
  const a = getAssignment(proposalId) || {};
  const status = a.status || 'libre';
  const assignee = a.assignee || '';
  const userName = getUserName();

  row.querySelector('.assign-select').value = status;
  const whoEl = row.querySelector('.assign-who');
  if (whoEl) whoEl.textContent = assignee ? `👤 ${assignee}` : '';
  else if (assignee) {
    const span = document.createElement('span');
    span.className = 'assign-who';
    span.textContent = `👤 ${assignee}`;
    row.querySelector('.assign-controls').appendChild(span);
  }

  const btn = row.querySelector('.btn-interest');
  if (btn) {
    if (status !== 'libre' && assignee === userName) {
      btn.textContent = '✅ Asignado a ti';
    } else {
      btn.textContent = '🙋 Asignarmelo';
    }
  }

  // Show/hide free button
  let freeBtn = row.querySelector('.btn-free');
  if (status !== 'libre' && !freeBtn) {
    freeBtn = document.createElement('button');
    freeBtn.className = 'btn-free';
    freeBtn.dataset.id = proposalId;
    freeBtn.title = 'Liberar tema';
    freeBtn.textContent = '↩️ Liberar';
    freeBtn.addEventListener('click', handleFree);
    row.querySelector('.assign-actions').appendChild(freeBtn);
  } else if (status === 'libre' && freeBtn) {
    freeBtn.remove();
  }

  // Refresh the assignment table too
  refreshAssignmentTableRow(proposalId);
}

function refreshAssignmentTableRow(proposalId) {
  const tr = document.querySelector(`.assign-table-row[data-prop="${proposalId}"]`);
  if (!tr) return;
  const a = getAssignment(proposalId) || {};
  const status = a.status || 'libre';
  const cells = tr.querySelectorAll('td');
  if (cells.length >= 6) {
    cells[2].innerHTML = statusBadge(status);
    cells[3].innerHTML = a.assignee || '<span class="assign-empty">—</span>';
    cells[4].innerHTML = a.targetDate || '<span class="assign-empty">—</span>';
    cells[5].innerHTML = a.notes || '<span class="assign-empty">—</span>';
  }
  tr.className = `assign-table-row ${status === 'libre' ? 'row-libre' : ''}`;
}

// ── Event handlers ───────────────────────────────────────────

function handleAssignToMe(e) {
  const id = e.target.dataset.id;
  const userName = getUserName();
  if (!userName) { showNameModal(); return; }

  const row = e.target.closest('.assign-row');
  const title = row.dataset.title;

  setAssignment(id, { status: 'reservado', assignee: userName, targetDate: '', notes: '' });
  refreshProposalAssignRow(id);
  showTelegramToast(id, title, 'reservado', userName, '');
}

function handleFree(e) {
  const id = e.target.dataset.id;
  const row = e.target.closest('.assign-row');
  const title = row.dataset.title;
  const userName = getUserName() || 'Alguien';

  clearAssignment(id);
  refreshProposalAssignRow(id);
  showTelegramToast(id, title, 'libre', userName, 'Tema liberado');
}

function handleStatusChange(e) {
  const id = e.target.dataset.id;
  const newStatus = e.target.value;
  const row = e.target.closest('.assign-row');
  const title = row.dataset.title;
  const userName = getUserName();

  if (newStatus === 'libre') {
    clearAssignment(id);
  } else {
    const current = getAssignment(id) || {};
    setAssignment(id, {
      status: newStatus,
      assignee: current.assignee || userName || '',
      targetDate: current.targetDate || '',
      notes: current.notes || ''
    });
  }
  refreshProposalAssignRow(id);

  if (userName) {
    const assignee = (getAssignment(id) || {}).assignee || userName;
    showTelegramToast(id, title, newStatus, assignee, '');
  }
}

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Import assignments from shared URL
  importFromURL();

  const radarData = window.RADAR_DATA || (typeof VP_DATA !== 'undefined' ? VP_DATA : undefined);
  if (!radarData) {
    const scripts = document.querySelectorAll('script[src*="data_"]');
    const dataFile = scripts.length ? scripts[0].src.split('/').pop() : '(no data script found)';
    document.body.innerHTML = `<div style="color:#f44;padding:32px;font-family:monospace;background:#111;min-height:100vh">
      <h2>⚠️ Error de carga del dashboard</h2>
      <p><strong>Archivo de datos esperado:</strong> ${dataFile}</p>
      <p>Posibles causas: error de sintaxis, archivo no cargado, variable incorrecta.</p>
      <p style="color:#888;margin-top:16px">Pulsa F12 → Console para ver el error exacto.</p>
    </div>`;
    return;
  }
  const d = radarData;
  document.title = `Radar Editorial VP · ${d.meta.dateLabel}`;

  // ── Render sections ──
  $('ticker-wrap').innerHTML   = renderTicker(d.ticker);
  $('hero').innerHTML          = renderHero(d.meta, d.hero);
  $('covered-bar').innerHTML   = renderCoveredBar(d.coveredVideos);
  $('news-grid').innerHTML     = d.news.map(renderNewsCard).join('');
  $('proposals').innerHTML     = d.proposals.map(renderProposal).join('');
  $('ranking-wrap').innerHTML  = renderRanking(d.ranking);
  $('vigilar-grid').innerHTML  = renderVigilar(d.vigilar);

  const assignEl = $('assignment-table');
  if (assignEl) assignEl.innerHTML = renderAssignmentTable(d.proposals);

  // Team proposals: merge official (team_proposals.js) + local (localStorage)
  refreshTeamProposalsSection();

  const formEl = $('proposal-form');
  if (formEl) formEl.innerHTML = renderProposalForm();

  $('footer-date').textContent    = d.meta.dateLabel;
  $('footer-version').textContent = 'v6.1 · ' + d.news.length + ' noticias · ' + d.proposals.length + ' propuestas · Mesa editorial VPK';

  // ── User badge ──
  updateUserBadge();
  if (!getUserName()) {
    // Prompt for name on first visit (slight delay for page to render)
    setTimeout(showNameModal, 800);
  }

  // ── Event listeners: "Asignarmelo" buttons ──
  document.querySelectorAll('.btn-interest').forEach(btn => {
    btn.addEventListener('click', handleAssignToMe);
  });

  // ── Event listeners: "Liberar" buttons ──
  document.querySelectorAll('.btn-free').forEach(btn => {
    btn.addEventListener('click', handleFree);
  });

  // ── Event listeners: Status dropdowns ──
  document.querySelectorAll('.assign-select').forEach(sel => {
    sel.addEventListener('change', handleStatusChange);
  });
});
