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
