/* ══════════════════════════════════════════════════════════════
   VP RADAR DASHBOARD — dashboard.js v5.0
   Reads VP_DATA from data_YYYY-MM-DD.js (loaded before this file)
   and renders all sections into the HTML shell.
══════════════════════════════════════════════════════════════ */

// ── HELPERS ───────────────────────────────────────────────────
const $ = id => document.getElementById(id);

function renderTicker(items) {
  const html = items.map(i => `<span class="ticker-item ${i.cls}">${i.text}</span>`).join('');
  return `<div class="ticker-inner">${html}${html}</div>`; // duplicate for infinite scroll
}

function renderHero(meta, hero) {
  return `
    <div class="hero-top">
      <span class="vp-logo">VISUALPOLITIK</span>
      <span class="live-badge">● EN VIVO</span>
      <span class="hero-date">📡 RADAR EDITORIAL · ${meta.dateLabel} · ${meta.brisbane}</span>
    </div>
    <div class="hero-title">INTELIGENCIA EDITORIAL <span>DIARIA</span></div>
    <div class="hero-subtitle">Dashboard premium v5.0 — Geopolítica · Economía · Poder · Uso interno VisualPolitik</div>
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
    <div class="covered-bar-title">⚠️ VÍDEOS VP PUBLICADOS ESTE MES — NO REPETIR</div>
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
        <div class="why-box"><strong>🎯 Por qué importa:</strong> ${item.why}</div>
        <div class="viral-bar"><div class="viral-fill ${item.viralCls}" style="width:${item.viralPct}%"></div></div>
        <div class="viral-label">Viralidad: ${item.viralPct}% · ${item.viralSources}</div>
      </div>
      <details class="news-details">
        <summary>
          📰 Ver ${d.sources.length} fuentes + análisis editorial
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
         <div class="pfield-label">🔬 Fuentes investigación</div>
         <div class="pfield-value">${renderProposalSources(p.sources)}</div>
       </div>`
    : '';
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
      <div class="watch-trigger">⚡ Cuándo escalaría: ${v.trigger}</div>
      <div class="watch-source">🔗 <a href="${v.sourceUrl}" target="_blank" rel="noopener">${v.sourceText}</a></div>
    </div>`).join('');
}

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (typeof VP_DATA === 'undefined') {
    document.body.innerHTML = '<p style="color:red;padding:32px">Error: no se encontró el archivo de datos. Abre el dashboard desde la misma carpeta.</p>';
    return;
  }
  const d = VP_DATA;
  document.title = `Radar Editorial VP · ${d.meta.dateLabel}`;

  $('ticker-wrap').innerHTML        = renderTicker(d.ticker);
  $('hero').innerHTML               = renderHero(d.meta, d.hero);
  $('covered-bar').innerHTML        = renderCoveredBar(d.coveredVideos);
  $('news-grid').innerHTML          = d.news.map(renderNewsCard).join('');
  $('proposals').innerHTML          = d.proposals.map(renderProposal).join('');
  $('ranking-wrap').innerHTML       = renderRanking(d.ranking);
  $('vigilar-grid').innerHTML       = renderVigilar(d.vigilar);
  $('footer-date').textContent      = d.meta.dateLabel;
  $('footer-version').textContent   = 'v5.0 · ' + d.news.length + ' noticias · ' + d.proposals.length + ' propuestas';
});
