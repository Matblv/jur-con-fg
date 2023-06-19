//dom hamburguesa 
const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.headerLista');
const barras = document.querySelectorAll('.ham span');

//dom


ham.addEventListener('click', () => {
    ham.classList.toggle('rotate')
    enlaces.classList.toggle('activado')
    barras.forEach(child => {
        child.classList.toggle('animado')
    })
})