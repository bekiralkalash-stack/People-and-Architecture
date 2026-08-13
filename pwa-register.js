if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));}

const configureBackNavigation=()=>{
  let links=[...document.querySelectorAll('.global-back-nav')];
  if(!links.length){
    const link=document.createElement('a');
    link.className='global-back-nav';
    link.href='navigation.html';
    link.style.cssText='position:fixed;z-index:9999;bottom:16px;left:16px;background:#062e5f;color:#fff;border:2px solid #fff;border-radius:24px;padding:9px 14px;text-decoration:none;font-family:Tajawal,Tahoma,Arial;font-weight:700;box-shadow:0 5px 16px #062e5f66';
    document.body.append(link);
    links=[link];
  }
  links.forEach(link=>{
    link.textContent='↩ رجوع';
    link.setAttribute('aria-label','رجوع إلى الصفحة السابقة');
    link.title='رجوع إلى الصفحة السابقة';
    link.addEventListener('click',event=>{
      if(history.length>1){
        event.preventDefault();
        history.back();
      }
    });
  });
};

if(document.readyState==='loading') window.addEventListener('DOMContentLoaded',configureBackNavigation);
else configureBackNavigation();

// Shared site-wide visitor counter. CounterAPI stores one total for the public GitHub Pages site.
const mountVisitorCounter=()=>{
  if(document.querySelector('[data-visitor-counter]'))return;
  const counter=document.createElement('div');
  counter.className='global-visitor-counter';
  counter.dataset.visitorCounter='true';
  counter.setAttribute('aria-live','polite');
  counter.innerHTML='<span aria-hidden="true">👥</span><span>زوار المنصة</span><strong>…</strong>';
  const number=counter.querySelector('strong');
  const endpoint='https://api.counterapi.dev/v1/architecture-people-github-pages-bekir-2026/site-visits';
  const showCount=data=>{
    const value=Number(data?.value??data?.count);
    if(Number.isFinite(value)) number.textContent=new Intl.NumberFormat('ar').format(value);
  };
  const readCount=()=>fetch(endpoint,{cache:'no-store'}).then(response=>response.ok?response.json():Promise.reject()).then(showCount);
  fetch(`${endpoint}/up`,{cache:'no-store'})
    .then(response=>response.ok?response.json():Promise.reject())
    .then(showCount)
    .catch(()=>{number.textContent='—';counter.title='يتعذر الاتصال بخدمة العداد مؤقتاً.';});
  window.setInterval(()=>readCount().catch(()=>{}),30000);
  const style=document.createElement('style');
  style.textContent='.global-visitor-counter{position:fixed;z-index:10000;top:12px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:7px;padding:8px 14px;border:1px solid #8fc4ef;border-radius:22px;background:linear-gradient(135deg,#fff,#e5f4ff);color:#062e5f;font:800 14px Tajawal,Tahoma,Arial;white-space:nowrap;box-shadow:0 5px 16px #0874df2b}.global-visitor-counter strong{font-size:17px;color:#075cb7}@media(max-width:600px){.global-visitor-counter{top:8px;font-size:13px;padding:7px 11px}}';
  document.head.append(style);
  document.body.append(counter);
};

if(document.readyState==='loading') window.addEventListener('DOMContentLoaded',mountVisitorCounter);
else mountVisitorCounter();

// A single entry point for the imported Flutter app's non-duplicated features.
// It is added only to the global platform hero, so existing sections are not repeated.
const mountPlatformExtras=()=>{
  if(!/\/platform(?:\.html)?$/.test(location.pathname))return;
  const actions=document.querySelector('.hero .actions');
  if(!actions||document.querySelector('[data-app-workspace]'))return;
  const link=document.createElement('a');
  link.className='btn primary';
  link.href='app-workspace.html';
  link.dataset.appWorkspace='true';
  link.textContent='بدء استخدام المنصة';
  actions.prepend(link);
};

if(document.readyState==='loading') window.addEventListener('DOMContentLoaded',mountPlatformExtras);
else mountPlatformExtras();
