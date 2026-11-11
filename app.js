const $=id=>document.getElementById(id);
const grid=$("grid"),q=$("q"),sortSel=$("sort"),count=$("count"),collsEl=$("colls"),tagsEl=$("tags"),clearBtn=$("clear"),empty=$("empty");
const lb=$("lb"),stage=$("stage"),st=$("st"),mtags=$("mtags");
const RM=matchMedia("(prefers-reduced-motion: reduce)");
const IAB=/Instagram|FBAN|FBAV|FB_IAB/i.test(navigator.userAgent);
const SORTS={curated:"Curated order",new:"Newest first",old:"Oldest first",az:"A to Z",random:"Surprise me"};
sortSel.innerHTML=Object.entries(SORTS).map(([k,v])=>`<option value="${k}">${v}</option>`).join("");
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
WORKS.forEach((w,i)=>{w._i=i;w.description=w.desc||"";w.tags=w.tags||[];w._h=[w.title,w.collection,w.description,w.tags.join(" ")].join(" ").toLowerCase();});
const TAGN={};WORKS.forEach(w=>w.tags.forEach(t=>TAGN[t]=(TAGN[t]||0)+1));
const ALLTAGS=Object.keys(TAGN).filter(t=>TAGN[t]>1).sort((a,b)=>TAGN[b]-TAGN[a]||a.localeCompare(b));
let S={q:"",type:"all",coll:"All",tags:[],sort:"curated",seed:1},shown=[],idx=0,opener=null,openId=null,savedY=0,note="";

const nv=WORKS.filter(w=>w.type==="video").length;
$("stats").innerHTML=`<div><b>${WORKS.length}</b>pieces</div><div><b>${nv}</b>videos</div><div><b>${WORKS.length-nv}</b>images</div><div><b>${COLLECTIONS.length}</b>collections</div>`;

/* featured rail and hero */
$("rail").innerHTML=WORKS.filter(w=>w.featured).map(w=>`<button type="button" class="tile" data-id="${esc(w.id)}" aria-label="Open ${esc(w.title)}"><img loading="lazy" decoding="async" width="${w.w}" height="${w.h}" alt="" src="${esc(w.thumb)}"><span>${esc(w.title)}</span></button>`).join("");
$("rail").onclick=e=>{const t=e.target.closest(".tile");if(t)openById(t.dataset.id,true,t);};
$("heroPlay").onclick=e=>openById("spotlight-gown",true,e.currentTarget);

/* URL state */
function url(id){
  const p=new URLSearchParams();
  if(S.q)p.set("q",S.q);if(S.type!=="all")p.set("type",S.type);if(S.coll!=="All")p.set("c",S.coll);
  S.tags.forEach(t=>p.append("tag",t));if(S.sort!=="curated")p.set("sort",S.sort);if(S.sort==="random")p.set("seed",S.seed);
  const s=p.toString();return location.pathname+(s?"?"+s:"")+(id?"#"+encodeURIComponent(id):"");
}
const put=id=>history.replaceState(history.state,"",url(id));
function readURL(){
  const p=new URLSearchParams(location.search),sort=p.get("sort"),type=p.get("type"),c=p.get("c");
  S={q:p.get("q")||"",type:["video","image"].includes(type)?type:"all",coll:COLLECTIONS.includes(c)?c:"All",
     tags:p.getAll("tag").filter(t=>TAGN[t]),sort:SORTS[sort]?sort:"curated",seed:parseInt(p.get("seed"))||1};
}
const hashId=()=>{try{return decodeURIComponent(location.hash.slice(1));}catch(e){return "";}};
const active=()=>!!(S.q||S.type!=="all"||S.coll!=="All"||S.tags.length);
function clearAll(){S.q="";S.type="all";S.coll="All";S.tags=[];render();q.focus({preventScroll:true});}

/* controls */
function chip(label,on,fn){const b=document.createElement("button");b.type="button";b.className="chip"+(on?" on":"");b.setAttribute("aria-pressed",on);b.textContent=label;b.onclick=()=>{fn();const a=document.querySelector("#colls .chip.on,#tags .chip.on");};return b;}
function renderColls(){
  collsEl.innerHTML="";
  ["All",...COLLECTIONS].forEach(c=>{const n=c==="All"?WORKS.length:WORKS.filter(w=>w.collection===c).length;
    collsEl.appendChild(chip((c==="All"?"All collections":c)+" ("+n+")",c===S.coll,()=>{S.coll=c;render();const on=collsEl.querySelector(".on");if(on)on.focus({preventScroll:true});}));});
}
function renderTags(){
  tagsEl.hidden=!ALLTAGS.length;tagsEl.innerHTML="";
  ALLTAGS.forEach(t=>{const on=S.tags.includes(t);
    tagsEl.appendChild(chip(t,on,()=>{S.tags=on?S.tags.filter(x=>x!==t):[...S.tags,t];render();}));});
}
document.querySelectorAll("[data-type]").forEach(b=>b.onclick=()=>{S.type=b.dataset.type;render();});
let qt;q.oninput=()=>{S.q=q.value;clearTimeout(qt);qt=setTimeout(()=>render(true),200);};
sortSel.onchange=()=>{S.sort=sortSel.value;if(S.sort==="random")S.seed=1+Math.floor(Math.random()*1e6);render();};
$("surprise").onclick=()=>{S.sort="random";S.seed=1+Math.floor(Math.random()*1e6);render();};
clearBtn.onclick=clearAll;$("emptyclear").onclick=clearAll;

/* filtering and sorting */
function rank(id){let h=2166136261;const s=id+":"+S.seed;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0;}
function filtered(){
  const toks=S.q.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const r=WORKS.filter(w=>(S.type==="all"||w.type===S.type)&&(S.coll==="All"||w.collection===S.coll)&&S.tags.every(t=>w.tags.includes(t))&&toks.every(t=>w._h.includes(t)));
  if(S.sort==="new")r.sort((a,b)=>b.date.localeCompare(a.date)||a._i-b._i);
  else if(S.sort==="old")r.sort((a,b)=>a.date.localeCompare(b.date)||b._i-a._i);
  else if(S.sort==="az")r.sort((a,b)=>a.title.localeCompare(b.title));
  else if(S.sort==="random")r.sort((a,b)=>rank(a.id)-rank(b.id));
  else r.sort((a,b)=>a.order-b.order);
  return r;
}
const rev=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("vis");rev.unobserve(e.target);}}),{rootMargin:"0px 0px -4% 0px"});
function render(typing){
  rev.disconnect();
  shown=filtered();
  document.querySelectorAll("[data-type]").forEach(b=>{const on=b.dataset.type===S.type;b.classList.toggle("on",on);b.setAttribute("aria-pressed",on);});
  if(q.value!==S.q)q.value=S.q;sortSel.value=S.sort;
  clearBtn.hidden=!active();
  if(!typing){renderColls();renderTags();}
  $("blurb").textContent=S.coll!=="All"?(BLURBS[S.coll]||""):"";
  grid.innerHTML=shown.map((w,i)=>`<button type="button" class="card" data-id="${esc(w.id)}" style="--d:${(i%6)*60}ms;background:${esc(w.color||"#15151b")}" aria-label="Open ${esc(w.title)}, ${esc(w.collection)}${w.type==="video"?", video":""}">${w.type==="video"?'<span class="badge" aria-hidden="true">VIDEO</span>':""}<span class="imgwrap"><img ${i<6?'fetchpriority="'+(i<2?"high":"auto")+'"':'loading="lazy"'} decoding="async" width="${w.w}" height="${w.h}" alt="" src="${esc(w.thumb)}"></span><span class="cap">${esc(w.title)}<small>${esc(w.collection)}</small></span></button>`).join("");
  grid.querySelectorAll(".card").forEach(c=>{rev.observe(c);const im=c.querySelector("img");if(im.complete)im.classList.add("in");else im.onload=()=>im.classList.add("in");});
  empty.hidden=shown.length>0;
  count.textContent=shown.length?`Showing ${shown.length} of ${WORKS.length} pieces`:"No pieces match.";
  if(lb.hidden)put(null);
}
grid.onclick=e=>{const c=e.target.closest(".card");if(c)openById(c.dataset.id,true,c);};

/* viewer */
const fmt=d=>new Date(d+"T12:00:00").toLocaleDateString(undefined,{year:"numeric",month:"long",day:"numeric"});
function prefetch(i){const w=shown[(i+shown.length)%shown.length];if(w&&w.type!=="video"){const im=new Image();im.src=w.file;}}
const tagLine=w=>["aiart",w.type==="video"?"aivideo":"aiartwork","jayptai",...w.tags.map(t=>t.replace(/[^a-z0-9]/gi,""))].filter(Boolean).map(t=>"#"+t).join(" ");
const capOf=w=>(w.description||(w.title+". From the "+w.collection+" collection."))+" By jaypt.ai.";
const shareUrl=w=>new URL("share/"+w.id+".html",location.href.split("#")[0].split("?")[0]).href;
function show(){
  const w=shown[idx];openId=w.id;
  const v=w.type==="video";
  stage.innerHTML=v?`<video src="${esc(w.file)}" poster="${esc(w.thumb)}" controls ${RM.matches?"":"autoplay loop"} muted playsinline preload="metadata" aria-label="${esc(w.description||w.title)}"></video>`:`<img src="${esc(w.file)}" decoding="async" alt="${esc(w.description||w.title)}">`;
  $("mt").textContent=w.title;
  $("ms").textContent=w.collection+", "+fmt(w.date)+(v?", video":"");
  $("md").textContent=w.description;$("md").hidden=!w.description;
  mtags.innerHTML=w.tags.map(t=>`<button type="button" class="chip" data-tag="${esc(t)}">${esc(t)}</button>`).join("");
  const dl=$("dl");dl.href=w.file;dl.setAttribute("download",w.id+(v?".mp4":".jpg"));dl.hidden=IAB;
  $("full").href=w.file;
  $("copyimg").hidden=v||IAB;$("share").hidden=!navigator.share;
  st.textContent=note||(IAB?(v?"Tap Open full size, then use the browser menu to save.":"To save, press and hold the image, then choose Save."):"");note="";
  $("lbann").textContent=`${w.title}, ${w.collection}, ${v?"video":"image"}, ${idx+1} of ${shown.length}`;
  put(w.id);prefetch(idx+1);prefetch(idx-1);
}
function setInert(on){document.querySelectorAll("header.top,main,footer,#up").forEach(e=>{e.inert=on;});}
function openById(id,push,from){
  let i=shown.findIndex(w=>w.id===id);
  if(i<0){
    if(!WORKS.some(w=>w.id===id)){if(!lb.hidden)closeView();put(null);return;}
    S.q="";S.type="all";S.coll="All";S.tags=[];render();i=shown.findIndex(w=>w.id===id);
    note="Filters were cleared to show this piece.";
  }
  idx=i;
  if(lb.hidden){
    opener=from||document.activeElement;savedY=window.scrollY;
    if(push)history.pushState({v:1},"",url(id));
    lb.hidden=false;setInert(true);document.body.style.overflow="hidden";
  }
  show();$("close").focus();
}
function closeView(){
  if(lb.hidden)return;
  lb.hidden=true;const v=stage.querySelector("video");if(v){v.pause();v.removeAttribute("src");v.load();}
  stage.innerHTML="";setInert(false);document.body.style.overflow="";
  const card=openId&&grid.querySelector(`[data-id="${CSS.escape(openId)}"]`);
  const moved=card&&opener&&opener.dataset&&opener.dataset.id!==openId;
  window.scrollTo(0,savedY);
  if(moved)card.focus();else if(opener&&opener.isConnected)opener.focus({preventScroll:true});
}
function closeLb(){
  if(lb.hidden)return;
  if(history.state&&history.state.v)history.back();else{closeView();put(null);}
}
const step=d=>{if(!shown.length)return;idx=(idx+d+shown.length)%shown.length;show();};
$("close").onclick=closeLb;$("prev").onclick=()=>step(-1);$("next").onclick=()=>step(1);
mtags.onclick=e=>{const t=e.target.dataset&&e.target.dataset.tag;if(!t)return;
  S.q="";S.type="all";S.coll="All";S.tags=[t];closeView();history.replaceState(null,"",url(null));render();};
lb.addEventListener("click",e=>{if(e.target===lb||e.target===stage)closeLb();});
addEventListener("popstate",()=>{const id=hashId();readURL();render();if(id&&WORKS.some(w=>w.id===id))openById(id,false);else closeView();});

document.addEventListener("keydown",e=>{
  if(e.ctrlKey||e.metaKey||e.altKey)return;
  const tag=e.target.tagName,typing=tag==="INPUT"||tag==="TEXTAREA"||tag==="SELECT";
  if(lb.hidden){
    if(e.key==="/"&&!typing){e.preventDefault();q.focus();q.select();}
    else if(e.key==="Escape"&&e.target===q&&q.value){S.q="";render();}
    return;
  }
  if(e.key==="Escape"){e.preventDefault();closeLb();}
  else if(e.key==="ArrowLeft"&&tag!=="VIDEO")step(-1);
  else if(e.key==="ArrowRight"&&tag!=="VIDEO")step(1);
  else if(e.key==="Tab"){
    const f=[...lb.querySelectorAll("button,a[href],video[controls]")].filter(x=>x.getClientRects().length);
    if(!f.length)return;
    const a=document.activeElement,first=f[0],last=f[f.length-1];
    if(!lb.contains(a)){e.preventDefault();first.focus();}
    else if(e.shiftKey&&a===first){e.preventDefault();last.focus();}
    else if(!e.shiftKey&&a===last){e.preventDefault();first.focus();}
  }
});
let sx=null,sy=0;
lb.addEventListener("touchstart",e=>{sx=(e.touches.length===1&&!e.target.closest("video,.acts,.lbtop"))?e.touches[0].clientX:null;sy=e.touches[0].clientY;},{passive:true});
lb.addEventListener("touchend",e=>{if(sx===null)return;const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;sx=null;
  if(dy>90&&dy>Math.abs(dx)*1.5)closeLb();else if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.5)step(dx<0?1:-1);});

/* actions */
function fallbackCopy(text,msg){
  const i=document.createElement("input");i.value=text;i.readOnly=true;i.style.cssText="width:90%;font:inherit;text-align:center";
  st.textContent="";st.appendChild(i);i.focus();i.select();i.setSelectionRange(0,9999);
  try{document.execCommand("copy");st.prepend(msg+" ");}catch(_){}
}
$("copylink").onclick=async()=>{const u=shareUrl(shown[idx]);
  try{await navigator.clipboard.writeText(u);st.textContent="Link copied. Anyone with it will see this piece.";}catch(e){fallbackCopy(u,"Copied.");}};
$("share").onclick=()=>{const w=shown[idx];navigator.share({title:w.title+" by jaypt.ai",url:shareUrl(w)}).catch(()=>{});};
$("copycap").onclick=async()=>{const w=shown[idx],t=capOf(w)+"\n\n"+tagLine(w)+"\n\n"+shareUrl(w);
  try{await navigator.clipboard.writeText(t);st.textContent="Caption, tags and link copied.";}catch(e){fallbackCopy(t,"Copied.");}};
$("copyimg").onclick=async()=>{
  try{
    const blob=await new Promise((res,rej)=>{const im=new Image();im.onload=()=>{const c=document.createElement("canvas");c.width=im.naturalWidth;c.height=im.naturalHeight;c.getContext("2d").drawImage(im,0,0);c.toBlob(b=>b?res(b):rej(),"image/png");};im.onerror=rej;im.src=shown[idx].file;});
    await navigator.clipboard.write([new ClipboardItem({"image/png":blob})]);st.textContent="Image copied.";
  }catch(e){st.textContent="Copy is not available here. Use Download or Open full size instead.";}
};

/* back to top */
const up=$("up");
new IntersectionObserver(([e])=>{up.hidden=e.isIntersecting;}).observe($("hero"));
up.onclick=()=>scrollTo({top:0,behavior:RM.matches?"auto":"smooth"});

/* boot */
const h0=hashId();
readURL();render();
if(h0){if(WORKS.some(w=>w.id===h0))openById(h0,false);else put(null);}
