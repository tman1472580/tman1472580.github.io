/* =========================================================
   Tanzim Islam — personal site
   Theme toggle, smooth scroll, reveal-on-scroll, current year.
   No dependencies. Runs as a single IIFE.
   ========================================================= */

(() => {
  const STORAGE_KEY = 'ti-theme';
  const root = document.documentElement;
  const toggle = document.querySelector('[data-theme-toggle]');
  const label = document.querySelector('[data-theme-label]');

  /* ---------- Theme ---------- */
  const systemPrefersLight = () =>
    window.matchMedia('(prefers-color-scheme: light)').matches;

  const resolveInitialTheme = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    return systemPrefersLight() ? 'light' : 'dark';
  };

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    if (label) label.textContent = theme;
  };

  applyTheme(resolveInitialTheme());

  toggle?.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch {}
  });

  /* ---------- Current year in footer ---------- */
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---------- Smooth in-page anchor scroll ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', id);
    });
  });

  /* ---------- Reveal sections on scroll ---------- */
  const revealTargets = document.querySelectorAll('.hero, .section');
  revealTargets.forEach((el) => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }
})();
