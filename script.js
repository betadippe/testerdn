
const slides = document.querySelectorAll('.slides');
let currentSlide = 0;

const leftArrow = document.querySelector('.nav-left');
const rightArrow = document.querySelector('.nav-right');
const breadcrumb = document.getElementById('breadcrumb');

function updateBreadcrumb(index) {
  breadcrumb.innerText = `Slide ${index + 1} de ${slides.length}`;
}

function updateArrows(index) {
  leftArrow.style.display = index === 0 ? 'none' : 'block';
  rightArrow.style.display = index === slides.length - 1 ? 'none' : 'block';
}

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active-slide');
    if (i === index) slide.classList.add('active-slide');
  });
  updateBreadcrumb(index);
  updateArrows(index);
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
}

showSlide(currentSlide);

