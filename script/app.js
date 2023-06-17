//dom hamburguesa 
const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.headerLista');
const barras = document.querySelectorAll('.ham span');


console.log(barras);



ham.addEventListener('click', () => {
    ham.classList.toggle('rotate')
    enlaces.classList.toggle('activado')
    barras.forEach(child => {
        console.log(child);
        child.classList.toggle('animado')
    })
})