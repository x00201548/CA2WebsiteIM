const nav = document.querySelectorAll('.nav-link');
const navbutton = document.querySelector('.navbar-toggler');

nav.forEach(link => {link.addEventListener('click',close);});

function close() {
    const navbuttonshow = window.getComputedStyle(navbutton).display !== 'none';
    if (navbuttonshow){
        navbutton.click();
    }
}
