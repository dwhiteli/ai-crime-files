#!/usr/bin/env node
// Generates clean per-episode text files for NotebookLM podcast generation.
// Output: notebooklm/ep-01.md through ep-30.md

const fs = require('fs');
const path = require('path');

// Load episodes.js by extracting PHASES and EPISODES
const src = fs.readFileSync(path.join(__dirname, 'episodes.js'), 'utf8');
const wrapped = src + '\nmodule.exports = { PHASES, EPISODES };';
const tmpFile = path.join(__dirname, '_tmp_episodes.js');
fs.writeFileSync(tmpFile, wrapped);
const { PHASES, EPISODES } = require(tmpFile);
fs.unlinkSync(tmpFile);

const outDir = path.join(__dirname, 'notebooklm');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

function sectionToText(s) {
  const lines = [];
  switch (s.type) {
    case 'scene':
      if (s.heading) lines.push(`[${s.heading}]\n`);
      lines.push(s.text);
      break;
    case 'case-intro':
      lines.push(`[CASE FILE — ${s.caseNumber} — ${s.location}]\n`);
      if (s.heading) lines.push(s.heading + '\n');
      lines.push(s.text);
      break;
    case 'quote':
      lines.push(`"${s.text}"\n— ${s.attribution}`);
      break;
    case 'finding':
      lines.push(`[${s.label}]\n${s.text}`);
      break;
    case 'icm':
      lines.push(`[INTERPRETABLE CONTEXT METHODOLOGY — COLD CASE FILE]\n`);
      lines.push(s.text);
      break;
    case 'terms':
      lines.push(`[KEY TERMS]\n`);
      s.terms.forEach(t => lines.push(`${t.term}: ${t.definition}`));
      break;
    case 'assignment':
      lines.push(`[YOUR INVESTIGATION — ${s.heading}]\n`);
      lines.push(s.text);
      break;
  }
  return lines.join('\n');
}

EPISODES.filter(ep => !ep.stub && ep.content && ep.content.length > 0).forEach(ep => {
  const pad = String(ep.id).padStart(2, '0');
  const phase = PHASES[ep.phase];

  const blocks = [
    `AI CRIME FILES`,
    `${phase.name}: ${phase.title}`,
    `Case #${pad}: ${ep.title}`,
    ep.subtitle,
    `Listen time: ${ep.listenTime} minutes\n`,
    '---',
    ...ep.content.map(sectionToText),
    '---',
    `End of Case #${pad}.`
  ];

  const out = blocks.join('\n\n');
  fs.writeFileSync(path.join(outDir, `ep-${pad}.md`), out, 'utf8');
  console.log(`✓ ep-${pad}.md — ${ep.title}`);
});

console.log(`\nDone. Files in: ${outDir}`);
