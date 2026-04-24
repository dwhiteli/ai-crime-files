const STORAGE_KEY = 'aicf_progress';

function getProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}

function saveProgress(p) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

function getCompletedCount(p) {
  return Object.values(p).filter(v => v === 'complete').length;
}

function getNextEpisode(p) {
  for (const ep of EPISODES) {
    if (ep.stub) continue;
    if (p[ep.id] !== 'complete') return ep;
  }
  return null;
}

function renderProgress() {
  const p = getProgress();
  const done = getCompletedCount(p);
  const pct = Math.round((done / 30) * 100);
  document.getElementById('progress-label').textContent = `Day ${done} / 30`;
  document.getElementById('progress-bar').style.width = pct + '%';
}

function renderContinueBanner() {
  const p = getProgress();
  const next = getNextEpisode(p);
  if (!next || getCompletedCount(p) === 0) return;

  const banner = document.getElementById('continue-banner');
  const phase = PHASES[next.phase];
  banner.classList.add('visible');
  document.getElementById('continue-title').textContent = `Case #${String(next.id).padStart(2,'0')}: ${next.title}`;
  document.getElementById('continue-meta').textContent = `${phase.name} — ${phase.title} · ${next.readTime} min read`;
  document.getElementById('continue-link').href = `reader.html?ep=${next.id}`;

  // Also update start btn
  const startBtn = document.getElementById('start-btn');
  startBtn.textContent = 'CONTINUE →';
  startBtn.href = `reader.html?ep=${next.id}`;
}

function phaseColor(phase) {
  const map = { 1:'--phase-1', 2:'--phase-2', 3:'--phase-3', 4:'--phase-4', 5:'--phase-5', 6:'--phase-6' };
  return `var(${map[phase]})`;
}

function renderGrid() {
  const p = getProgress();
  const container = document.getElementById('episodes-section');
  let html = '';

  for (const [phaseId, phase] of Object.entries(PHASES)) {
    const eps = EPISODES.filter(e => e.phase === parseInt(phaseId));
    const color = phaseColor(parseInt(phaseId));

    html += `<div class="phase-block">
      <div class="phase-header">
        <div class="phase-dot" style="background:${color}"></div>
        <span class="phase-name">${phase.name}</span>
        <span class="phase-title">${phase.title}</span>
      </div>
      <div class="episode-grid">`;

    for (const ep of eps) {
      const status = ep.stub ? 'stub' : (p[ep.id] === 'complete' ? 'complete' : '');
      const isNext = !ep.stub && p[ep.id] !== 'complete' && getNextEpisode(p)?.id === ep.id;
      const classes = ['ep-card', status ? `ep-${status}` : '', isNext ? 'ep-active' : ''].filter(Boolean).join(' ');
      const href = ep.stub ? '#' : `reader.html?ep=${ep.id}`;
      const timeText = `▶ ${ep.listenTime}m · ◉ ${ep.readTime}m`;

      html += `<a href="${href}" class="${classes}" style="--phase-color:${color}" ${ep.stub ? 'tabindex="-1" aria-disabled="true"' : ''}>
        <div class="ep-number">CASE FILE #${String(ep.id).padStart(2,'0')} ${ep.stub ? '· LOADING' : ''}</div>
        <div class="ep-title">${ep.title}</div>
        <div class="ep-teaser">${ep.teaser}</div>
        <div class="ep-meta">${timeText}</div>
      </a>`;
    }

    html += `</div></div>`;
  }

  container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
  renderProgress();
  renderContinueBanner();
  renderGrid();
});
