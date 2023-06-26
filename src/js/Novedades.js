
// Obtenemos los elementos del DOM
var prevButton = document.getElementById("prevBtn");
var nextButton = document.getElementById("nextBtn");
var sliderInner = document.querySelector(".slider-inner");
var sliderItems = document.querySelectorAll(".slider-item");

// Variables para el control del slider
var currentIndex = 0;
var totalItems = sliderItems.length;
var itemWidth = sliderItems[0].offsetWidth;



function nextSlide() {
  currentIndex++;
  if (currentIndex >= totalItems) {
    currentIndex = 0;
  }
  sliderInner.style.transform = "translateX(-" + currentIndex * itemWidth + "px)";
}

// Función para mover el slider al elemento anterior
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  }
  sliderInner.style.transform = "translateX(-" + currentIndex * itemWidth + "px)";
}

// Asignamos los eventos a los botones
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);