if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));}

// A single entry point for the imported Flutter app's non-duplicated features.
// It is added only to the global platform hero, so existing sections are not repeated.
window.addEventListener('DOMContentLoaded',()=>{
  if(!/\/platform(?:\.html)?$/.test(location.pathname))return;
  const top=document.querySelector('.top');
  if(top&&!document.querySelector('[data-visitor-counter]')){
    const counter=document.createElement('div');
    counter.className='visitor-counter';
    counter.dataset.visitorCounter='true';
    counter.setAttribute('aria-live','polite');
    counter.innerHTML='<span aria-hidden="true">👥</span><span>الزوار</span><strong>—</strong>';
    const base=1248,key='ap-visitor-seen',extra='ap-visitor-extra';
    let total=base;
    try{if(!localStorage.getItem(key)){localStorage.setItem(key,'1');localStorage.setItem(extra,String((Number(localStorage.getItem(extra))||0)+1))}total+=Number(localStorage.getItem(extra))||0}catch(e){}
    counter.querySelector('strong').textContent=new Intl.NumberFormat('ar').format(total);
    const style=document.createElement('style');
    style.textContent='.top{display:grid!important;grid-template-columns:1fr auto 1fr;align-items:center}.top>.actions{justify-self:end}.visitor-counter{display:flex;align-items:center;gap:7px;justify-self:center;padding:7px 13px;border:1px solid #8fc4ef;border-radius:22px;background:linear-gradient(135deg,#fff,#e5f4ff);color:#062e5f;font-size:14px;font-weight:800;white-space:nowrap;box-shadow:0 5px 16px #0874df1f}.visitor-counter strong{font-size:17px;color:#075cb7}@media(max-width:760px){.top{grid-template-columns:1fr!important;justify-items:center}.top>.actions{justify-self:center}.brand{justify-self:center}.visitor-counter{order:-1}}';
    document.head.append(style);
    top.insertBefore(counter,top.children[1]||null);
  }
  const actions=document.querySelector('.hero .actions');
  if(!actions||document.querySelector('[data-app-workspace]'))return;
  const link=document.createElement('a');
  link.className='btn primary';
  link.href='app-workspace.html';
  link.dataset.appWorkspace='true';
  link.textContent='بدء استخدام المنصة';
  actions.prepend(link);
});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));}

// A single entry point for the imported Flutter app's non-duplicated features.
// It is added only to the global platform hero, so existing sections are not repeated.
window.addEventListener('DOMContentLoaded',()=>{
  if(!location.pathname.endsWith('/platform.html'))return;
  const actions=document.querySelector('.hero .actions');
  if(!actions||document.querySelector('[data-app-workspace]'))return;
  const link=document.createElement('a');
  link.className='btn primary';
  link.href='app-workspace.html';
  link.dataset.appWorkspace='true';
  link.textContent='بدء استخدام المنصة';
  actions.prepend(link);
});
