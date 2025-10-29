// Glattes Scrollen für alle internen Navigations-Links
document.querySelectorAll('nav a[href^="#"], a.btn-outline[href^="#"], a.btn-primary[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Ignoriert externe Links oder Links mit '#' als href
        if (this.getAttribute('href').length > 1) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Tiny entrance animations for feature cards (Produkte)
window.addEventListener('load', ()=>{
  document.querySelectorAll('.product-card').forEach((el,i)=>{
    el.style.opacity = 0;
    el.style.transform = 'translateY(8px)';
    setTimeout(()=>{ 
      // Setzt die Transition erst, nachdem die Anfangszustände gesetzt wurden
      el.style.transition = 'all 420ms cubic-bezier(.2,.9,.2,1)'; 
      el.style.opacity = 1; 
      el.style.transform = 'translateY(0)'; 
    }, 120*i + 200);
  });
});