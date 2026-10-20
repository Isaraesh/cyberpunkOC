/** AFTERIMAGE — shared theme control. No dependencies. */
(() => {
  'use strict';
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  const update = () => {
    const dark = root.dataset.theme === 'dark';
    if (button) {
      button.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
      button.setAttribute('aria-pressed', String(dark));
      button.querySelector('.theme-label').textContent = dark ? 'LIGHT' : 'DARK';
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0b1118' : '#f4f3ef');
  };
  button?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('afterimage-theme', root.dataset.theme); } catch (e) { /* storage may be disabled */ }
    update();
  });
  update();
})();
