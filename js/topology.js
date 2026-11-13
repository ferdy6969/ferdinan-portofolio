/* topology.js: canvas map of environments. Needs data.js. */

/* ---- Topology canvas ---- */
const N=Object.fromEntries(NODES.map(n=>[n.id,n]));
const cv=$('#cv'),cx=cv.getContext('2d'),tip=$('#tip');
let W=0,H=420,raf=0,pk=[],hov=null;
function size(){const d=devicePixelRatio||1;W=cv.parentElement.clientWidth-3;cv.width=W*d;cv.height=H*d;cv.style.height=H+'px';cx.setTransform(d,0,0,d,0,0)}
function draw(){
  cx.clearRect(0,0,W,H);cx.lineWidth=1;cx.strokeStyle='#30363d';
  EDGES.forEach(([a,b])=>{cx.beginPath();cx.moveTo(N[a].x*W,N[a].y*H);cx.lineTo(N[b].x*W,N[b].y*H);cx.stroke()});
  if(!reduce){
    if(Math.random()<.07&&pk.length<24)pk.push({e:EDGES[Math.random()*EDGES.length|0],p:0});
    pk=pk.filter(k=>(k.p+=.008)<1);
    cx.fillStyle='#58a6ff';
    pk.forEach(k=>{const a=N[k.e[0]],b=N[k.e[1]];cx.beginPath();cx.arc((a.x+(b.x-a.x)*k.p)*W,(a.y+(b.y-a.y)*k.p)*H,3,0,6.3);cx.fill()});
  }
  cx.font='12px ui-monospace,Menlo,Consolas,monospace';cx.textBaseline='top';
  NODES.forEach(n=>{
    const x=n.x*W,y=n.y*H,r=n.r||5,h=n===hov;
    cx.beginPath();cx.arc(x,y,r,0,6.3);cx.fillStyle='#161b22';cx.fill();
    cx.lineWidth=h?2:1.5;cx.strokeStyle=h?'#58a6ff':n.id==='core'?'#58a6ff':'#3fb950';cx.stroke();
    const tw=cx.measureText(n.t).width,tx=Math.min(Math.max(x-tw/2,4),W-tw-4);
    cx.fillStyle=h?'#c9d1d9':'#8b949e';cx.fillText(n.t,tx,y+r+6);
  });
}
function loop(){draw();raf=requestAnimationFrame(loop)}
function start(){stop();reduce?draw():loop()}
function stop(){cancelAnimationFrame(raf)}
function probe(e){
  const r=cv.getBoundingClientRect(),mx=e.clientX-r.left,my=e.clientY-r.top;
  hov=NODES.find(n=>Math.hypot(n.x*W-mx,n.y*H-my)<20)||null;
  tip.style.display=hov?'block':'none';
  if(hov){tip.textContent=hov.t+': '+hov.d;tip.style.left=(cv.offsetLeft+Math.min(Math.max(mx-100,4),W-204))+'px';tip.style.top=(cv.offsetTop+hov.y*H+28)+'px'}
  if(reduce)draw();
}
cv.addEventListener('pointermove',probe);cv.addEventListener('click',probe);
cv.addEventListener('pointerleave',()=>{hov=null;tip.style.display='none';if(reduce)draw()});
addEventListener('resize',()=>{if($('#topology').classList.contains('on')){size();if(reduce)draw()}});
