let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

   
    currentSlide = (index + totalSlides) % totalSlides; 

    const offset = -currentSlide * 100; 
    slides.style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}


showSlide(currentSlide);