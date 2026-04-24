// ── State ───────────────────────────────────────────────────────────────────
const STORAGE_KEY = 'aicf_progress';
let episode = null;
let narrator = null;
let contentSections = [];

// ── Progress helpers ────────────────────────────────────────────────────────
function getProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}
function saveProgress(p) { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); }
function markComplete(id) {
  const p = getProgress();
  p[id] = 'complete';
  saveProgress(p);
}
function getCompletedCount() {
  return Object.values(getProgress()).filter(v => v === 'complete').length;
}

// ── Routing ─────────────────────────────────────────────────────────────────
function getEpisodeId() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('ep')) || 1;
}

function getEpisode(id) {
  return EPISODES.find(e => e.id === id) || null;
}

function getSiblings(id) {
  const avail = EPISODES.filter(e => !e.stub);
  const idx = avail.findIndex(e => e.id === id);
  return {
    prev: idx > 0 ? avail[idx - 1] : null,
    next: idx < avail.length - 1 ? avail[idx + 1] : null
  };
}

// ── Render header/nav ───────────────────────────────────────────────────────
function renderHeader(ep) {
  const done = getCompletedCount();
  const pct = Math.round((done / 30) * 100);
  document.getElementById('header-progress').textContent = `Day ${done} / 30`;
  document.getElementById('progress-bar').style.width = pct + '%';
  document.title = `Case #${ep.id}: ${ep.title} — AI Crime Files`;

  const phase = PHASES[ep.phase];
  const badge = document.getElementById('nav-phase-badge');
  badge.textContent = `${phase.name}: ${phase.title}`;
  const colorMap = { 1:'--phase-1',2:'--phase-2',3:'--phase-3',4:'--phase-4',5:'--phase-5',6:'--phase-6' };
  badge.style.background = `rgba(var(--phase-${ep.phase}-rgb, 99,179,237), 0.12)`;
  badge.style.color = `var(${colorMap[ep.phase]})`;
  badge.style.border = `1px solid var(${colorMap[ep.phase]})`;

  const { prev, next } = getSiblings(ep.id);
  const navNext = document.getElementById('nav-next');
  if (next) { navNext.href = `reader.html?ep=${next.id}`; navNext.textContent = 'Next Case →'; }
  else { navNext.style.opacity = '0.3'; navNext.style.pointerEvents = 'none'; }
}

// ── Render episode meta ─────────────────────────────────────────────────────
function renderMeta(ep) {
  document.getElementById('case-number').textContent =
    `CASE FILE #${String(ep.id).padStart(2,'0')} · ${PHASES[ep.phase].name.toUpperCase()}: ${PHASES[ep.phase].title.toUpperCase()}`;
  document.getElementById('episode-title').textContent = ep.title;
  document.getElementById('episode-subtitle').textContent = ep.subtitle;
  document.getElementById('episode-stats').innerHTML =
    `<span>▶ ${ep.listenTime} MIN LISTEN</span><span>◉ ${ep.readTime} MIN READ</span><span>📋 1 ASSIGNMENT</span>`;
}

// ── Render footer nav ───────────────────────────────────────────────────────
function renderFooter(ep) {
  const { prev, next } = getSiblings(ep.id);
  const prevBtn = document.getElementById('footer-prev');
  const nextBtn = document.getElementById('footer-next');

  if (prev) prevBtn.href = `reader.html?ep=${prev.id}`;
  else { prevBtn.style.opacity = '0.3'; prevBtn.style.pointerEvents = 'none'; }

  if (next) nextBtn.href = `reader.html?ep=${next.id}`;
  else { nextBtn.textContent = '← Back to All Cases'; nextBtn.href = 'index.html'; }

  const p = getProgress();
  const completeBtn = document.getElementById('btn-complete');
  if (p[ep.id] === 'complete') {
    completeBtn.textContent = '✓ Completed';
    completeBtn.classList.add('done');
  }
  completeBtn.addEventListener('click', () => {
    markComplete(ep.id);
    completeBtn.textContent = '✓ Completed';
    completeBtn.classList.add('done');
    renderHeader(ep);
    if (next) {
      setTimeout(() => { window.location.href = `reader.html?ep=${next.id}`; }, 800);
    }
  });
}

// ── Content rendering ───────────────────────────────────────────────────────
function textToParas(str) {
  return str.trim().split('\n\n').map(p => `<p>${p.replace(/\n/g,'<br>')}</p>`).join('');
}

function renderSection(s, index) {
  const div = document.createElement('div');
  div.className = 'content-section';
  div.dataset.index = index;

  switch (s.type) {
    case 'scene':
      div.innerHTML = `
        <div class="section-heading">${s.heading}</div>
        <div class="section-text">${textToParas(s.text)}</div>`;
      break;

    case 'case-intro':
      div.innerHTML = `
        <div class="case-file-card">
          <div class="case-file-header">
            <span class="case-number">${s.caseNumber}</span>
            <span class="case-location">📍 ${s.location}</span>
            <span class="case-status">ACTIVE CASE</span>
          </div>
          <div class="case-file-body">
            <div class="case-file-heading">${s.heading}</div>
            <div class="section-text">${textToParas(s.text)}</div>
          </div>
        </div>`;
      break;

    case 'quote':
      div.innerHTML = `
        <div class="pull-quote">
          <div class="pull-quote-text">${s.text}</div>
          <div class="pull-quote-attr">— ${s.attribution}</div>
        </div>`;
      break;

    case 'finding':
      div.innerHTML = `
        <div class="finding-box">
          <div class="finding-label">${s.label}</div>
          <div class="finding-text">${s.text}</div>
        </div>`;
      break;

    case 'icm':
      div.innerHTML = `
        <div class="icm-box">
          <div class="icm-label">ICM COLD CASE FILE</div>
          <div class="icm-text">${textToParas(s.text)}</div>
        </div>`;
      break;

    case 'terms':
      div.innerHTML = `
        <div class="terms-section">
          <div class="section-heading">KEY TERMS FROM THIS EPISODE</div>
          <div class="terms-list">
            ${s.terms.map(t => `
              <div class="term-item">
                <div class="term-word">${t.term}</div>
                <div class="term-def">${t.definition}</div>
              </div>`).join('')}
          </div>
        </div>`;
      break;

    case 'assignment':
      div.innerHTML = `
        <div class="assignment-box">
          <div class="assignment-label">◆ YOUR INVESTIGATION</div>
          <div class="assignment-heading">${s.heading}</div>
          <div class="assignment-text">${s.text}</div>
        </div>`;
      break;
  }

  return div;
}

function renderBody(ep) {
  const body = document.getElementById('reader-body');

  if (!ep.content || ep.content.length === 0) {
    body.innerHTML = `
      <div class="stub-message">
        <div class="stub-badge">CONTENT LOADING</div>
        <div class="stub-title">Case #${ep.id}: ${ep.title}</div>
        <p class="stub-text">
          This episode's content is being prepared. Check back soon — new case files
          are added as research is completed. Episodes 1–3 are fully available now.
        </p>
        <a href="index.html" class="btn btn-ghost">← Return to All Cases</a>
      </div>`;
    document.getElementById('audio-player').style.display = 'none';
    document.getElementById('reader-footer').style.display = 'none';
    return;
  }

  contentSections = [];
  ep.content.forEach((section, i) => {
    const el = renderSection(section, i);
    body.appendChild(el);
    contentSections.push(el);
  });
}

// ── Scroll animations (IntersectionObserver) ────────────────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  contentSections.forEach(el => observer.observe(el));
}

// ── Narration (Web Speech API) ──────────────────────────────────────────────
class Narrator {
  constructor() {
    this.synth = window.speechSynthesis;
    this.utterances = [];
    this.currentIndex = 0;
    this.isPlaying = false;
    this.rate = 1.0;
    this.voice = null;
    this.onSectionChange = null;
  }

  buildScript(ep) {
    this.utterances = [];
    if (!ep.content) return;

    ep.content.forEach((section, i) => {
      const texts = [];

      if (section.type === 'scene' || section.type === 'finding') {
        if (section.heading) texts.push(section.heading + '.');
        texts.push(section.text);
      } else if (section.type === 'case-intro') {
        texts.push('Case file. ' + section.heading + '. ' + section.location + '.');
        texts.push(section.text);
      } else if (section.type === 'quote') {
        texts.push(section.text + '. — ' + section.attribution);
      } else if (section.type === 'icm') {
        texts.push('I.C.M. Cold Case File.');
        texts.push(section.text);
      } else if (section.type === 'terms') {
        texts.push('Key terms from this episode.');
        section.terms.forEach(t => texts.push(t.term + '. ' + t.definition));
      } else if (section.type === 'assignment') {
        texts.push('Your investigation. ' + section.heading + '.');
        texts.push(section.text);
      }

      texts.forEach(text => {
        this.utterances.push({ sectionIndex: i, text: text.trim() });
      });
    });
  }

  loadVoices() {
    return new Promise(resolve => {
      const voices = this.synth.getVoices();
      if (voices.length) { resolve(voices); return; }
      this.synth.onvoiceschanged = () => resolve(this.synth.getVoices());
    });
  }

  speak(index) {
    if (index >= this.utterances.length) {
      this.isPlaying = false;
      this.updateUI('▶', 'EPISODE COMPLETE');
      return;
    }

    const { sectionIndex, text } = this.utterances[index];
    this.currentIndex = index;

    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = this.rate;
    if (this.voice) utter.voice = this.voice;

    if (this.onSectionChange) this.onSectionChange(sectionIndex);

    const heading = contentSections[sectionIndex]?.querySelector('.section-heading, .case-file-heading, .icm-label, .assignment-label');
    const sectionName = heading ? heading.textContent : `Section ${sectionIndex + 1}`;
    document.getElementById('player-section').textContent = sectionName;
    document.getElementById('player-status').textContent = `${index + 1} / ${this.utterances.length} segments`;

    utter.onend = () => {
      if (this.isPlaying) this.speak(index + 1);
    };
    utter.onerror = () => {
      if (this.isPlaying) this.speak(index + 1);
    };

    this.synth.speak(utter);
  }

  play() {
    if (this.synth.paused) {
      this.synth.resume();
    } else if (!this.isPlaying) {
      this.speak(this.currentIndex);
    }
    this.isPlaying = true;
    this.updateUI('⏸', 'NOW PLAYING');
  }

  pause() {
    this.synth.pause();
    this.isPlaying = false;
    this.updateUI('▶', 'PAUSED');
  }

  toggle() {
    if (this.isPlaying) this.pause();
    else this.play();
  }

  setRate(r) {
    this.rate = parseFloat(r);
    if (this.isPlaying) {
      this.synth.cancel();
      this.isPlaying = false;
      this.play();
    }
  }

  setVoice(name) {
    this.voice = this.synth.getVoices().find(v => v.name === name) || null;
  }

  updateUI(playIcon, status) {
    document.getElementById('player-btn').textContent = playIcon;
    document.getElementById('player-status').textContent = status;
  }
}

// ── Section highlight tracking ──────────────────────────────────────────────
function initSectionHighlight() {
  if (!narrator) return;
  narrator.onSectionChange = (idx) => {
    contentSections.forEach((el, i) => {
      el.classList.toggle('reading', i === idx);
      if (i === idx) {
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  };
}

// ── Voice picker ────────────────────────────────────────────────────────────
async function populateVoices() {
  const voices = await narrator.loadVoices();
  const select = document.getElementById('player-voice');
  select.innerHTML = '';

  const preferred = ['Samantha', 'Karen', 'Moira', 'Victoria', 'Fiona', 'Alex', 'Daniel'];
  const sorted = [
    ...preferred.map(n => voices.find(v => v.name === n)).filter(Boolean),
    ...voices.filter(v => v.lang.startsWith('en') && !preferred.includes(v.name))
  ];

  sorted.slice(0, 12).forEach(v => {
    const opt = document.createElement('option');
    opt.value = v.name;
    opt.textContent = v.name.replace(/\s*\(.*\)/, '');
    if (v.name === 'Samantha' || (!sorted.find(x => x.name === 'Samantha') && opt === sorted[0])) {
      opt.selected = true;
      narrator.setVoice(v.name);
    }
    select.appendChild(opt);
  });

  select.addEventListener('change', () => narrator.setVoice(select.value));
}

// ── Boot ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  const id = getEpisodeId();
  episode = getEpisode(id);

  if (!episode) {
    document.getElementById('reader-body').innerHTML = '<p style="text-align:center;padding:4rem;color:var(--text-muted)">Episode not found. <a href="index.html">Return to all cases →</a></p>';
    return;
  }

  renderHeader(episode);
  renderMeta(episode);
  renderBody(episode);
  renderFooter(episode);

  if (!episode.stub && episode.content.length > 0) {
    initScrollAnimations();

    narrator = new Narrator();
    narrator.buildScript(episode);
    initSectionHighlight();
    await populateVoices();

    document.getElementById('player-btn').addEventListener('click', () => narrator.toggle());
    document.getElementById('player-speed').addEventListener('change', e => narrator.setRate(e.target.value));
  }
});

// Stop speech when leaving
window.addEventListener('beforeunload', () => {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
});
