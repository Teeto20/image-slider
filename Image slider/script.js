let slides = document.querySelectorAll('.slide');
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');
let currentSlide = 0;

 function next() {
    let nextSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'none';
    slides[nextSlide].style.display = 'flex';
    slides[nextSlide].style.justifyContent = 'center';    
    currentSlide = nextSlide;
}
nextButton.addEventListener('click',next);

function prev() {
    let prevSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].style.display = 'none';
    slides[prevSlide].style.display = 'flex';
    slides[prevSlide].style.justifyContent = 'center';  
    currentSlide = prevSlide;
}
prevButton.addEventListener('click',prev);

// setInterval(next, 5000); // Change slide every 5 seconds

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        next(); // Move to the next slide
    }
    else if (event.key === 'ArrowLeft') {
        prev(); // Move to the previous slide
    }
});