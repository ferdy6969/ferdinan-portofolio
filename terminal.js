/* terminal.js: terminal drawer. Needs data.js and main.js (go). */

/* ---- Terminal drawer ---- */
const term=$('#term'),tout=$('#tout'),tin=$('#tin'),tbtn=$('#tbtn'),hist=[];let hi=0;
function toggle(on){on=on===undefined?!term.classList.contains('open'):on;term.classList.toggle('open',on);tbtn.setAttribute('aria-expanded',on);if(on)tin.focus()}
function out(t,c){const d=el('div','ol '+(c||''),t);tout.append(d);tout.scrollTop=tout.scrollHeight}
const CMD={
 help:()=>"Commands: about, skills, experience, certs, projects, contact, whoami, readme, topology, clear, exit",
 about:()=>CV.about,skills:()=>CV.skills,experience:()=>CV.exp,certs:()=>CV.certs,projects:()=>CV.projects,contact:()=>CV.contact,
 whoami:()=>"guest",
 readme:()=>{toggle(false);go('readme');return 'Opened README.'},
 topology:()=>{toggle(false);go('topology');return 'Opened topology.'},
 clear:()=>{tout.textContent='';return null},
 exit:()=>{toggle(false);return null}
};
out("Welcome to Ferdinan's terminal. Type 'help' for commands. Press ` to open or close.");
tin.onkeydown=e=>{
  if(e.key==='Enter'){
    const raw=tin.value.trim(),c=raw.toLowerCase();tin.value='';if(!raw)return;
    hist.push(raw);hi=hist.length;out('guest@ferdinan:~$ '+raw,'c');
    if(Object.hasOwn(CMD,c)){const r=CMD[c]();if(r)out(r)}else out("command not found: "+c+". Type 'help'.",'e');
  }else if(e.key==='ArrowUp'){e.preventDefault();if(hi>0)tin.value=hist[--hi]}
  else if(e.key==='ArrowDown'){e.preventDefault();tin.value=hi<hist.length-1?hist[++hi]:(hi=hist.length,'')}
};
tbtn.onclick=()=>toggle();
term.onclick=()=>tin.focus();
addEventListener('keydown',e=>{
  if(e.key==='Escape')toggle(false);
  else if(e.key==='`'&&(e.target===tin||!/INPUT|TEXTAREA/.test(e.target.tagName))){e.preventDefault();toggle()}
});
