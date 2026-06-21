// Hero load-in animation trigger
window.addEventListener('load', function(){
  requestAnimationFrame(function(){ document.body.classList.add('go'); });
});
setTimeout(function(){ document.body.classList.add('go'); }, 1200);

// Scroll-reveal observer
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('vis') });
}, {threshold:0.06});
document.querySelectorAll('.rv').forEach(el => obs.observe(el));
