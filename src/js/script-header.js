// todo: normalizacion de barra HEADER para cambiar transparencia y color segun scroll

const div = document.querySelector('header > div');
let prevY = window.scrollY;

console.log(div.innerHTML); // *consula al dom de la existencia de objetos dentro del div

window.addEventListener('scroll', function () {
  // ! verificar posicion del header durante el scroll
  if (prevY > window.scrollY) {
    div.classList.remove('off');
  } else {
    div.classList.add('off');
  }
  prevY = window.scrollY;


  // // ! verificar el color de fondo durante scroll
  // if (window.scrollY > 100) {
  //   div.classList.add('solid');
  // } else {
  //   div.classList.remove('solid');
  // }
  // prevY = window.scrollY;

});