/** AFTERIMAGE Ideas / view only. Edit concept text in js/ideas.js. */
(() => {
  'use strict';
  const entries = window.AFTERIMAGE_IDEAS || [];
  const grid = document.getElementById('ideas-grid');
  const escapeHTML = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const count = (id, n) => { const node = document.getElementById(id); if(node) node.textContent = n; };
  count('ideas-total', entries.length); count('count-all', entries.length);
  count('count-photo', entries.filter(e => e.category === 'PHOTO COMIC').length);
  count('count-connections', entries.filter(e => e.category === 'PROPOSED CONNECTION').length);
  function render(filter = 'ALL') {
    grid.innerHTML = entries.map((item, index) => ({...item, number: index + 1})).filter(item => filter === 'ALL' || filter === item.category).map(item => `
      <details class="board-item">
        <summary><span class="board-item-number">${String(item.number).padStart(2,'0')}</span><span class="board-item-body"><span class="board-item-kind">${item.category === 'PHOTO COMIC' ? 'VISUAL STORY' : 'POSSIBLE CONNECTION'}</span><strong>${escapeHTML(item.title)}</strong><span class="board-item-pitch">${escapeHTML(item.pitch)}</span></span><span class="board-item-cast">${item.cast.map(escapeHTML).join(' · ')}</span><span class="board-item-frames">${escapeHTML(item.frames)}</span><span class="board-item-action" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg></span></summary>
        <div class="board-item-detail"><div><span class="board-detail-kicker">SHOT LIST / OPTIONAL DIRECTION</span><p>Visual beats you can adjust, replace or discard.</p></div><ol>${item.shots.map(s => `<li>${escapeHTML(s)}</li>`).join('')}</ol></div>
      </details>`).join('');
  }
  render();
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(b => { const active = b === button; b.classList.toggle('active', active); b.setAttribute('aria-pressed', String(active)); });
    render(button.dataset.filter);
  }));
  const toggle = document.querySelector('.nav-toggle'), nav = document.querySelector('.main-nav');
  toggle?.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); });
})();
