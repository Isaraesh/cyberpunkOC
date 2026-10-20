/** AFTERIMAGE — UI LOGIC. Edit js/data.js for ordinary character/lore updates. */
(() => {
  'use strict';
  const {characters, connections} = window.ARCHIVE_DATA;
  const $ = (selector) => document.querySelector(selector);
  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (ch) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const card = (c) => `
    <button class="character-card" type="button" data-person="${escapeHTML(c.id)}" aria-label="Open dossier for ${escapeHTML(c.name)}">
      <div class="character-image"><img loading="lazy" src="${escapeHTML(c.image)}" alt="Portrait of ${escapeHTML(c.name)}"><span class="file-number">FILE ${escapeHTML(c.number)}</span></div>
      <div class="character-info"><div class="character-meta">${escapeHTML(c.codename)}</div><h3>${escapeHTML(c.name)}</h3><p>${escapeHTML(c.summary)}</p><div class="character-footer"><span>${escapeHTML(c.job)}</span><span aria-hidden="true"><svg class="ui-arrow" viewBox="0 0 24 24" fill="none"><path d="M5 19 19 5M7 5h12v12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div></div>
    </button>`;
  const grid = $('#character-grid');
  function renderCards(query = '') {
    const q = query.trim().toLowerCase();
    const visible = characters.filter(c => [c.name,c.codename,c.job,c.affiliation,...c.specialties].join(' ').toLowerCase().includes(q));
    grid.innerHTML = visible.map(card).join('');
    $('#empty-message').hidden = visible.length > 0;
  }
  renderCards();
  $('#character-search').addEventListener('input', e => renderCards(e.target.value));
  $('#connections-list').innerHTML = connections.map(c => `<article class="connection-row"><div class="connection-people">${c.people.map(escapeHTML).join(' / ')}</div><div><div class="relation-type">${escapeHTML(c.type)} ${c.status === 'suggested' ? '· <span class="connection-proposal">PROPOSED / NOT CANON</span>' : ''}</div><p>${escapeHTML(c.description)}</p></div></article>`).join('');
  $('#motivation-list').innerHTML = characters.map(c => `<div class="motivation-row"><strong>${escapeHTML(c.name.split(' ')[0].toUpperCase())}</strong><p>${escapeHTML(c.motivation)}</p></div>`).join('');
  const dialog = $('#profile-dialog');
  const content = $('#profile-content');
  function openProfile(id, updateHash = true) {
    const c = characters.find(p => p.id === id);
    if (!c) return;
    content.innerHTML = `<div class="profile-inner">
      <aside class="profile-side"><div class="side-index">PERSONNEL RECORD // ${escapeHTML(c.number)}</div><div class="profile-portrait"><img src="${escapeHTML(c.image)}" alt="Portrait of ${escapeHTML(c.name)}"></div><h3>${escapeHTML(c.name)}</h3><p>${escapeHTML(c.job)}<br>${escapeHTML(c.affiliation)}</p><div class="side-note">THREAT LEVEL: ${escapeHTML(c.threat.toUpperCase())}</div></aside>
      <div class="profile-main"><button class="profile-close" type="button" aria-label="Close dossier">×</button><div class="mono-label" style="color:#a65a56">DECLASSIFIED // CHARACTER DOSSIER</div><h2>${escapeHTML(c.name)}</h2><div class="profile-tagline">${escapeHTML(c.tagline)}</div><div class="profile-pill-row">${c.specialties.map(x=>`<span class="profile-pill">${escapeHTML(x)}</span>`).join('')}</div><div class="profile-section-title">BACKGROUND</div>${c.paragraphs.map(p=>`<p>${escapeHTML(p)}</p>`).join('')}<div class="profile-section-title">PERSONALITY</div><p>${escapeHTML(c.personality || '')}</p><div class="profile-section-title">EVERYDAY DETAILS</div><ul class="profile-list">${(c.everyday || []).map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ul><div class="profile-section-title">PERSONAL CONNECTIONS</div><ul class="profile-list">${(c.personalRelationships || []).map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ul><div class="profile-section-title">PHOTO STORY HOOKS</div><ul class="profile-list">${(c.sceneHooks || []).map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ul><div class="profile-section-title">CORE CONTRADICTION</div><div class="profile-fact"><strong>PERSONAL FILE / OBSERVATION</strong>${escapeHTML(c.contradiction)}</div><div class="profile-section-title">CURRENT OBJECTIVE</div><p>${escapeHTML(c.motivation)}</p></div></div>`;
    dialog.showModal(); document.body.classList.add('dialog-open');
    if (updateHash) history.replaceState(null,'',`#profile-${c.id}`);
    content.querySelector('.profile-close').addEventListener('click',()=>dialog.close());
  }
  grid.addEventListener('click',e=>{const button=e.target.closest('[data-person]');if(button)openProfile(button.dataset.person)});
  dialog.addEventListener('click', e=>{if(e.target===dialog)dialog.close()});
  dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');if(location.hash.startsWith('#profile-'))history.replaceState(null,'','#characters')});
  function routeHash(){ const match=location.hash.match(/^#profile-([\w-]+)$/); if(match&&!dialog.open)openProfile(match[1],false); }
  window.addEventListener('hashchange',routeHash);routeHash();
  const toggle=$('.nav-toggle'),nav=$('.main-nav');
  toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});
  nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}});
  // Back to top: actively scroll, rather than relying on browser hash navigation.
  document.querySelectorAll('.back-top').forEach(link => link.addEventListener('click', (event) => {
    event.preventDefault();
    if (dialog.open) dialog.close();
    window.scrollTo({top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
    history.replaceState(null, '', location.pathname + location.search + '#home');
  }));
  const links=[...document.querySelectorAll('.main-nav a')];
  const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){links.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${entry.target.id}`))}}},{rootMargin:'-20% 0px -70% 0px'});
  ['home','characters','connections','story','dossier'].forEach(id=>{const el=document.getElementById(id);if(el)observer.observe(el)});
})();
