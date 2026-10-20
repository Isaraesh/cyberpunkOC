/** Renders js/ideas.js — edit idea content there, not here. */
(() => {
  const grid = document.getElementById('ideas-grid');
  const escapeHTML = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const entries = window.AFTERIMAGE_IDEAS || [];
  function render(filter = 'ALL') {
    grid.innerHTML = entries.filter(item => filter === 'ALL' || item.category === filter).map((item, i) => `<details class="idea-card"><summary><span class="idea-category">${escapeHTML(item.category)} · ${escapeHTML(item.frames)}</span><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.pitch)}</p><span class="idea-cast">${item.cast.map(escapeHTML).join(' / ')}</span><span class="idea-expand">SHOT NOTES <svg class="ui-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span></summary><div class="idea-details"><div class="mono-label">POSSIBLE FRAME SEQUENCE</div><ol>${item.shots.map(s => `<li>${escapeHTML(s)}</li>`).join('')}</ol></div></details>`).join('');
  }
  render();
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button)); });
    render(button.dataset.filter);
  }));
  const toggle = document.querySelector('.nav-toggle'), nav = document.querySelector('.main-nav');
  toggle?.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
  document.querySelector('.back-top')?.addEventListener('click', e => {e.preventDefault(); window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});
})();
