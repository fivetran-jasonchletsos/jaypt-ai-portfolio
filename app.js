const grid=document.getElementById("grid"), q=document.getElementById("q"), sortSel=document.getElementById("sort");
const count=document.getElementById("count"), collsEl=document.getElementById("colls");
let type="all", coll="All", shown=[], idx=0, opener=null;

const nv=WORKS.filter(w=>w.type==="video").length, ni=WORKS.length-nv;
document.getElementById("stats").innerHTML=`<div><b>${WORKS.length}</b>pieces</div><div><b>${nv}</b>videos</div><div><b>${ni}</b>images</div><div><b>${COLLECTIONS.length}</b>collections</div>`;

document.querySelectorAll("[data-type]").forEach(b=>b.onclick=()=>{type=b.dataset.type;document.querySelectorAll("[data-type]").forEach(x=>x.classList.toggle("on",x===b));render();});
function renderColls(){
  collsEl.innerHTML="";
  ["All",...COLLECTIONS].forEach(c=>{
    const n=c==="All"?WORKS.length:WORKS.filter(w=>w.collection===c).length;
    const b=document.createElement("button");b.type="button";b.className="chip"+(c===coll?" on":"");b.textContent=c+" ("+n+")";
    b.onclick=()=>{coll=c;renderColls();render();};collsEl.appendChild(b);
  });
}
function render(){
  const s=q.value.trim().toLowerCase();
  shown=WORKS.filter(w=>(type==="all"||w.type===type)&&(coll==="All"||w.collection===coll)&&(!s||(w.title+" "+w.collection).toLowerCase().includes(s)));
  if(sortSel.value==="az")shown.sort((a,b)=>a.title.localeCompare(b.title));
  else shown.sort((a,b)=>b.date.localeCompare(a.date));
  grid.innerHTML="";
  shown.forEach((w,i)=>{
    const c=document.createElement("button");c.type="button";c.className="card";c.setAttribute("aria-label","Open "+w.title);
    c.innerHTML=(w.type==="video"?'<span class="badge">VIDEO</span>':"")+`<img loading="lazy" alt="${w.title.replace(/"/g,"&quot;")}" src="${w.thumb}"><span class="cap">${w.title}<small>${w.collection}</small></span>`;
    c.onclick=()=>openAt(i);grid.appendChild(c);
  });
  count.textContent=shown.length?`Showing ${shown.length} of ${WORKS.length}`:"Nothing matches. Try a different word or filter.";
}
q.oninput=render;sortSel.onchange=render;

const lb=document.getElementById("lb"),stage=document.getElementById("stage"),st=document.getElementById("st");
function fmt(d){return new Date(d+"T12:00:00").toLocaleDateString(undefined,{year:"numeric",month:"long",day:"numeric"});}
function show(){
  const w=shown[idx];
  stage.innerHTML=w.type==="video"?`<video src="${w.file}" poster="${w.thumb}" controls autoplay loop muted playsinline></video>`:`<img src="${w.file}" alt="${w.title.replace(/"/g,"&quot;")}">`;
  document.getElementById("mt").textContent=w.title;
  document.getElementById("ms").textContent=w.collection+", "+fmt(w.date)+(w.type==="video"?", video":"");
  const dl=document.getElementById("dl");dl.href=w.file;dl.setAttribute("download",w.id+(w.type==="video"?".mp4":".jpg"));
  document.getElementById("copyimg").hidden=w.type==="video";
  document.getElementById("share").hidden=!navigator.share;
  st.textContent="";history.replaceState(null,"","#"+w.id);
}
function openAt(i){opener=document.activeElement;idx=i;show();lb.hidden=false;document.body.style.overflow="hidden";document.getElementById("close").focus();}
function closeLb(){lb.hidden=true;stage.innerHTML="";document.body.style.overflow="";history.replaceState(null,"",location.pathname);if(opener)opener.focus();}
function step(d){idx=(idx+d+shown.length)%shown.length;show();}
document.getElementById("close").onclick=closeLb;
document.getElementById("prev").onclick=()=>step(-1);
document.getElementById("next").onclick=()=>step(1);
document.addEventListener("keydown",e=>{if(lb.hidden)return;if(e.key==="Escape")closeLb();else if(e.key==="ArrowLeft")step(-1);else if(e.key==="ArrowRight")step(1);});
let sx=null;lb.addEventListener("touchstart",e=>{sx=e.touches[0].clientX;},{passive:true});
lb.addEventListener("touchend",e=>{if(sx===null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>60)step(dx<0?1:-1);sx=null;});

document.getElementById("copylink").onclick=async()=>{
  const url=location.origin+location.pathname+"#"+shown[idx].id;
  try{await navigator.clipboard.writeText(url);st.textContent="Link copied. Anyone with it will see this piece.";}catch(e){st.textContent=url;}
};
document.getElementById("share").onclick=()=>{const w=shown[idx];navigator.share({title:w.title+" by jaypt.ai",url:location.origin+location.pathname+"#"+w.id}).catch(()=>{});};
document.getElementById("copyimg").onclick=async()=>{
  try{
    const blob=await new Promise((res,rej)=>{const im=new Image();im.onload=()=>{const c=document.createElement("canvas");c.width=im.naturalWidth;c.height=im.naturalHeight;c.getContext("2d").drawImage(im,0,0);c.toBlob(b=>b?res(b):rej(),"image/png");};im.onerror=rej;im.src=shown[idx].file;});
    await navigator.clipboard.write([new ClipboardItem({"image/png":blob})]);st.textContent="Image copied.";
  }catch(e){st.textContent="Copy is not available here. Use Download instead.";}
};

renderColls();render();
const h=location.hash.slice(1);
if(h){const i=shown.findIndex(w=>w.id===h);if(i>=0)openAt(i);}
