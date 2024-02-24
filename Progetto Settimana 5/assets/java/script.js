const nav = document.getElementById('navbar'); 
const pulsante = document.getElementById('primoBottone');

window.addEventListener('scroll', function() {
    if (window.scrollY > 380) {
        nav.style.backgroundColor = 'white'; 
        pulsante.style.backgroundColor = '#538724';
    } else {
        nav.style.backgroundColor = '#FFC017';
        pulsante.style.backgroundColor = '#191919';
    }
});
