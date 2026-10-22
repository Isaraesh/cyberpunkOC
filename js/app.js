/* AFTERIMAGE — archive interactions. Lore stays in data.js. */
(() => {
 'use strict';
 const {characters,connections}=window.ARCHIVE_DATA;
 const $=s=>document.querySelector(s),esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 let saved=[];try{saved=JSON.parse(localStorage.getItem('afterimage-characters')||'[]');if(!Array.isArray(saved))saved=[]}catch{}
 let collection='all',currentId=null,opener=null;
 const grid=$('#character-grid'),dialog=$('#profile-dialog'),content=$('#profile-content');
 const arrow='<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
 function render(){
  const q=$('#character-search').value.trim().toLowerCase();
  let list=characters.filter(c=>(collection!=='saved'||saved.includes(c.id))&&[c.name,c.codename,c.job,c.affiliation,c.summary,...c.specialties].join(' ').toLowerCase().includes(q));
  if($('#character-sort').value==='name')list.sort((a,b)=>a.name.localeCompare(b.name));
  grid.innerHTML=list.map(c=>`<article class="character-wrapper"><button class="character-card" type="button" data-person="${c.id}" aria-label="Open dossier for ${esc(c.name)}"><div class="character-image"><img loading="lazy" decoding="async" width="900" height="1200" src="${esc(c.image)}" alt="Portrait of ${esc(c.name)}"><span class="file-number">FILE ${c.number}</span></div><div class="character-info"><div class="character-meta">${esc(c.codename)}</div><h3>${esc(c.name)}</h3><p>${esc(c.summary)}</p><div class="character-footer"><span>${esc(c.job)}</span><span>${arrow}</span></div></div></button><button class="pin-character" type="button" data-save="${c.id}" aria-pressed="${saved.includes(c.id)}" aria-label="${saved.includes(c.id)?'Remove':'Save'} ${esc(c.name)} ${saved.includes(c.id)?'from':'to'} your collection">${saved.includes(c.id)?'♥':'♡'}</button></article>`).join('');
  $('#empty-message').hidden=list.length>0;$('#directory-count').textContent=`${list.length} dossier${list.length===1?'':'s'}`;$('#saved-count').textContent=saved.length;
 }
 $('#character-search').addEventListener('input',render);$('#character-sort').addEventListener('change',render);
 document.querySelectorAll('[data-collection]').forEach(b=>b.addEventListener('click',()=>{collection=b.dataset.collection;document.querySelectorAll('[data-collection]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});render()}));
 grid.addEventListener('click',e=>{const pin=e.target.closest('[data-save]');if(pin){const id=pin.dataset.save;saved=saved.includes(id)?saved.filter(x=>x!==id):[...saved,id];try{localStorage.setItem('afterimage-characters',JSON.stringify(saved))}catch{}render();window.afterimageToast?.(saved.includes(id)?'Added to your collection':'Removed from your collection');return}const b=e.target.closest('[data-person]');if(b){opener=b;openProfile(b.dataset.person)}});
 $('#connections-list').innerHTML=connections.map(c=>`<article class="connection-row"><div class="connection-people">${c.people.map(esc).join(' / ')}</div><div><div class="relation-type">${esc(c.type)} ${c.status==='suggested'?'<span class="connection-proposal">· PROPOSED / NOT CANON</span>':''}</div><p>${esc(c.description)}</p></div></article>`).join('');
 $('#motivation-list').innerHTML=characters.map(c=>`<div class="motivation-row"><strong>${esc(c.name.split(' ')[0].toUpperCase())}</strong><p>${esc(c.motivation)}</p></div>`).join('');
 const section=(label,body)=>`<div class="profile-section-title">${label}</div>${body}`,list=xs=>`<ul class="profile-list">${(xs||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;
 function openProfile(id,hash=true){
  const index=characters.findIndex(c=>c.id===id),c=characters[index];if(!c)return;currentId=id;
  content.innerHTML=`<div class="profile-inner"><aside class="profile-side"><div class="side-index">PERSONNEL RECORD / ${c.number}</div><div class="profile-portrait"><img src="${esc(c.image)}" width="900" height="1200" alt="Portrait of ${esc(c.name)}"></div><h3>${esc(c.name)}</h3><p>${esc(c.job)}<br>${esc(c.affiliation)}</p><div class="side-note">THREAT LEVEL / ${esc(c.threat.toUpperCase())}</div><div class="profile-tools">${id==='vaessa'?'<a href="studio.html">Explore in 3D ↗</a>':''}<button type="button" id="copy-profile">Copy dossier link ↗</button></div></aside><div class="profile-main"><button class="profile-close" type="button" aria-label="Close dossier">×</button><div class="mono-label">THE PERSON BEHIND THE FILE</div><h2>${esc(c.name)}</h2><div class="profile-tagline">${esc(c.tagline)}</div><div class="profile-pill-row">${c.specialties.map(x=>`<span class="profile-pill">${esc(x)}</span>`).join('')}</div>${section('BACKGROUND',c.paragraphs.map(x=>`<p>${esc(x)}</p>`).join(''))}${section('PERSONALITY',`<p>${esc(c.personality)}</p>`)}${section('EVERYDAY DETAILS',list(c.everyday))}${section('PERSONAL CONNECTIONS',list(c.personalRelationships))}${section('PHOTO STORY HOOKS',list(c.sceneHooks))}${section('CORE CONTRADICTION',`<div class="profile-fact"><strong>A PERSONAL OBSERVATION</strong>${esc(c.contradiction)}</div>`)}${section('CURRENT OBJECTIVE',`<p>${esc(c.motivation)}</p>`)}<div class="profile-nav"><button type="button" data-next="${characters[(index-1+characters.length)%characters.length].id}">← Previous dossier</button><button type="button" data-next="${characters[(index+1)%characters.length].id}">Next dossier →</button></div></div></div>`;
  if(!dialog.open)dialog.showModal();document.body.classList.add('dialog-open');if(hash)history.replaceState(null,'',`#profile-${id}`);
  content.querySelector('.profile-main').scrollTop=0;dialog.scrollTop=0;
  content.querySelector('.profile-close').addEventListener('click',()=>dialog.close());
  content.querySelectorAll('[data-next]').forEach(b=>b.addEventListener('click',()=>openProfile(b.dataset.next)));
  content.querySelector('#copy-profile').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);window.afterimageToast?.('Dossier link copied')}catch{window.afterimageToast?.('The address bar contains this dossier’s link')}});
 }
 dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
 dialog.addEventListener('close',()=>{currentId=null;document.body.classList.remove('dialog-open');if(location.hash.startsWith('#profile-'))history.replaceState(null,'','#characters');if(opener?.isConnected)opener.focus()});
 dialog.addEventListener('keydown',e=>{if(!['ArrowRight','ArrowLeft'].includes(e.key)||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;e.preventDefault();const i=characters.findIndex(c=>c.id===currentId);openProfile(characters[(i+(e.key==='ArrowRight'?1:-1)+characters.length)%characters.length].id)});
 function route(){const match=location.hash.match(/^#profile-([\w-]+)$/);if(match)openProfile(match[1],false)}window.addEventListener('hashchange',route);render();route();
})();
