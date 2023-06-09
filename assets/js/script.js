// todo: normalizacion de barra header para cambiar transparencia y color segun scroll

const div = document.querySelector( 'header > div');
let prevY = window.scrollY;

console.log(div.innerHTML); // *consula al dom de la existencia de objetos dentro del div

window.addEventListener('scroll', function(){
    prevY = window.scrollY;
})