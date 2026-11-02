(() => {
  const KEY = 'rag-learn-done';
  let done = [];
  try { done = JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (e) {} };
  const count = document.getElementById('done');
  const paint = () => {
    count.textContent = done.length;
    document.querySelectorAll('.got').forEach(b => b.setAttribute('aria-pressed', done.includes(b.dataset.got)));
  };

  // deck: one card open at a time
  document.querySelectorAll('.row').forEach(row => {
    const btn = row.querySelector('.row-btn');
    btn.addEventListener('click', () => {
      const open = row.dataset.open !== 'true';
      document.querySelectorAll('.row[data-open="true"]').forEach(r => { r.dataset.open = 'false'; r.querySelector('.row-btn').setAttribute('aria-expanded', 'false'); });
      row.dataset.open = String(open);
      btn.setAttribute('aria-expanded', String(open));
    });
  });
  document.querySelectorAll('.got').forEach(b => b.addEventListener('click', () => {
    const id = b.dataset.got;
    done = done.includes(id) ? done.filter(x => x !== id) : [...done, id];
    save(); paint();
  }));
  paint();

  // pipeline: horizontal accordion
  document.querySelectorAll('.stage').forEach(st => {
    st.querySelector('.stage-btn').addEventListener('click', () => {
      document.querySelectorAll('.stage').forEach(s => { s.dataset.open = String(s === st); s.querySelector('.stage-btn').setAttribute('aria-expanded', String(s === st)); });
    });
  });

  // entrances, staggered, once
  const els = [...document.querySelectorAll('[data-rise]')];
  els.forEach((el, i) => el.style.setProperty('--d', (i % 4) * 70 + 'ms'));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    els.forEach(el => io.observe(el));
  } else els.forEach(el => el.classList.add('in'));

  // scroll-linked drift on the big pictures
  const par = [...document.querySelectorAll('[data-par] img')];
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!still && par.length) {
    let tick = false;
    const run = () => {
      tick = false;
      par.forEach(img => {
        const r = img.parentElement.getBoundingClientRect();
        const p = (r.top + r.height / 2 - innerHeight / 2) / innerHeight; // -1..1
        img.style.transform = 'translate3d(0,' + (p * -48).toFixed(1) + 'px,0) scale(1.14)';
      });
    };
    addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(run); } }, { passive: true });
    addEventListener('resize', run); run();
  }
})();
