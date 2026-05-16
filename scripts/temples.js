const hamburger = document.getElementById('hamburger');

const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('active');
});
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('open');
        navMenu.classList.remove('active');
    });
    
});

document.addEventListener('click', function(event) {
    const isClickInsideNav = navMenu.contains(event.target);
    const isClickInsideHamburger = hamburger.contains(event.target);
    
    if (!isClickInsideNav && !isClickInsideHamburger) {
        hamburger.classList.remove('open');
        navMenu.classList.remove('active');
    }
});

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;