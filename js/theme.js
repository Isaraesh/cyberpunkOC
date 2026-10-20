/** Shared theme across pages. Edit colour palettes in css/styles.css. */
(() => {
  'use strict';
  const root = document.documentElement;
  const toggles = document.querySelectorAll('.theme-toggle');
  const theme = () => root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  function sync() {
    const dark = theme() === 'dark';
    toggles.forEach(button => {
      button.setAttribute('aria-label', dark ? 'Activate light theme' : 'Activate dark theme');
      button.setAttribute('aria-pressed', String(dark));
      button.setAttribute('title', dark ? 'Switch to light mode' : 'Switch to dark mode');
      const label = button.querySelector('.theme-label'); if(label) label.textContent = dark ? 'LIGHT' : 'DARK';
      const icon = button.querySelector('.theme-icon'); if(icon) icon.innerHTML = dark
        ? '<path d="M20.5 13.3A8.5 8.5 0 0 1 10.7 3.5 8.6 8.6 0 1 0 20.5 13.3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>'
        : '<circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.7"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>';
    });
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0b1118' : '#f4f3ef');
  }
  toggles.forEach(button => button.addEventListener('click', () => {
    const next = theme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('afterimage-theme', next); } catch(e) {}
    sync();
  }));
  sync();
})();
