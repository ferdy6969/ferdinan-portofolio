/* main.js: tabs, career timeline, Ask NOC. Load last. */

/* ---- Tabs ---- */
const tabs=document.querySelectorAll('nav button'),panels=document.querySelectorAll('.panel');
function go(id){
  tabs.forEach(b=>b.classList.toggle('on',b.dataset.t===id));
  panels.forEach(p=>p.classList.toggle('on',p.id===id));
  if(id==='topology'){size();start()}else stop();
  if(id==='ask')$('#ci').focus();
}
tabs.forEach(b=>b.onclick=()=>go(b.dataset.t));

/* ---- Career timeline matrix ---- */
const YRS=[];for(let y=2013;y<=2026;y++)YRS.push(y);
const tl=$('#tl');tl.style.gridTemplateColumns='auto repeat('+YRS.length+',18px)';
tl.append(el('span'),...YRS.map(y=>el('span','yl',"'"+String(y).slice(2))));
ROLES.forEach(([n,a,b,l,d])=>{
  tl.append(el('span','rl',n));
  YRS.forEach(y=>{const on=y>=a&&y<=b,c=el('span','tc'+(on?' l'+l:''));if(on)c.title=n+' | '+y+' | '+d;tl.append(c)});
});

/* ---- Ask NOC ---- */
const log=$('#log'),ci=$('#ci');
function say(who,t){const m=el('div','m '+who),b=el('div','bub',t);m.append(b);log.append(m);log.scrollTop=log.scrollHeight}
function ask(t){t=t.trim();if(!t)return;say('u',t);setTimeout(()=>say('b',(KB.find(k=>k[0].test(t.toLowerCase()))||[0,"I only know what is in Ferdinan's CV. Try BGP, Mikrotik, Proxmox, certifications or projects."])[1]),450)}
['Tell me about BGP','Mikrotik experience','Proxmox','Certifications','Projects'].forEach(q=>{const b=el('button','',q);b.onclick=()=>ask(q);$('#chips').append(b)});
$('#cs').onclick=()=>{ask(ci.value);ci.value=''};
ci.onkeydown=e=>{if(e.key==='Enter'){ask(ci.value);ci.value=''}};
