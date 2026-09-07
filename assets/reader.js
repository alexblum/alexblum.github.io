/* ---------- generischer Reader ----------
 * Erwartet window.STORY = {
 *   title: "Titel",
 *   subtitle: "Untertitel (optional)",
 *   emoji: "🦔",
 *   chapters: [
 *     { title: "Kapitel 1", pages: [ {svg, text} ... ] },
 *     ...
 *   ]
 * }
 * Flacht alle Seiten der Kapitel zu einem Lese-Flow; Kapitel-Titel
 * werden als Überschriften-Seite eingefügt.
 */
document.addEventListener('DOMContentLoaded', function () {
  const S = window.STORY;
  if (!S || !S.chapters || !S.chapters.length) return;

  const pages = [];
  pages.push({ cover: true });
  S.chapters.forEach((ch, ci) => {
    pages.push({ chapterTitle: true, num: ci + 1, title: ch.title });
    (ch.pages || []).forEach(p => pages.push({ ...p, chapter: ci + 1 }));
  });

  const idx0 = 0;
  let idx = idx0;
  const stage = document.getElementById('stage');
  const storyText = document.getElementById('storyText');
  const card = document.getElementById('card');
  const pagenum = document.getElementById('pagenum');
  const dotsEl = document.getElementById('dots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const fontBtn = document.getElementById('fontBtn');
  const bookTitle = document.querySelector('.topbar h1');
  if (bookTitle) bookTitle.textContent = `${S.emoji || '📖'} ${S.title}`;

  function buildDots() {
    dotsEl.innerHTML = pages.map((p, i) =>
      `<span class="dot ${i === idx ? 'active' : ''} ${p.chapterTitle ? 'chdot' : ''}" data-i="${i}"></span>`
    ).join('');
    dotsEl.querySelectorAll('.dot').forEach(d => {
      d.addEventListener('click', () => { idx = parseInt(d.dataset.i, 10); render(); });
    });
  }

  function setStoryEl(cls) {
    let el = document.getElementById('storyText');
    if (!el) {
      el = document.createElement('div');
      el.id = 'storyText';
      card.appendChild(el);
    }
    el.className = cls;
    return el;
  }

  function render() {
    const p = pages[idx];
    card.querySelectorAll('.cover-only').forEach(n => n.remove());
    if (p.cover) {
      stage.innerHTML = S.coverSvg || '';
      pagenum.textContent = '';
      const el = setStoryEl('');
      el.innerHTML = '';
      const wrap = document.createElement('div');
      wrap.className = 'cover-only';
      wrap.innerHTML = `
        <div class="cover-title">${S.title}</div>
        <div class="cover-sub">${S.subtitle || ''}</div>
        <div class="chapters">${S.chapters.map((c, i) =>
          `<div class="chrow">Kapitel ${i + 1} · ${c.title}</div>`).join('')}</div>
        <button class="startbtn" id="startBtn">Los geht's! 📖</button>`;
      card.appendChild(wrap);
      document.getElementById('startBtn').addEventListener('click', () => { idx = 1; render(); });
      prevBtn.disabled = true;
      nextBtn.disabled = false;
    } else if (p.chapterTitle) {
      stage.innerHTML = S.chapterSvg || '';
      const el = setStoryEl('story-text chapter-title');
      el.innerHTML = `<div class="chlabel">Kapitel ${p.num}</div><div>${p.title}</div>`;
      pagenum.textContent = '';
      prevBtn.disabled = false;
      nextBtn.disabled = idx === pages.length - 1;
    } else {
      stage.innerHTML = p.svg;
      const el = setStoryEl('story-text');
      el.textContent = p.text;
      pagenum.textContent = `Seite ${idx} von ${pages.length - 1}`;
      prevBtn.disabled = false;
      nextBtn.disabled = idx === pages.length - 1;
    }
    buildDots();
  }

  prevBtn.addEventListener('click', () => { if (idx > 0) { idx--; render(); } });
  nextBtn.addEventListener('click', () => { if (idx < pages.length - 1) { idx++; render(); } });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.key === 'ArrowLeft') prevBtn.click();
  });

  let bigFont = false;
  fontBtn.addEventListener('click', () => {
    bigFont = !bigFont;
    const el = document.getElementById('storyText');
    if (el) el.style.fontSize = bigFont ? 'clamp(23px, 5.6vw, 31px)' : '';
    fontBtn.classList.toggle('on', bigFont);
    fontBtn.textContent = bigFont ? '🔡 Kleiner' : '🔠 Größer';
  });

  render();
});
