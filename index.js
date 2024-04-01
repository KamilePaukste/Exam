let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("review-card");
  let dots = document.getElementsByClassName("nav-dot");
  if (n > Math.ceil(slides.length / 3)) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = Math.ceil(slides.length / 3);
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // Show 3 slides for the current index
  for (i = (slideIndex - 1) * 3; i < slideIndex * 3 && i < slides.length; i++) {
    slides[i].style.display = "block";
  }
  dots[slideIndex - 1].className += " active";
}
