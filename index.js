// /reviews
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

  for (i = (slideIndex - 1) * 3; i < slideIndex * 3 && i < slides.length; i++) {
    slides[i].style.display = "block";
  }
  dots[slideIndex - 1].className += " active";
}

// /Tag section
document.addEventListener("DOMContentLoaded", function () {
  const spans = Array.from(document.querySelectorAll(".menu span"));

  const showSection = (clickedSpan) => {
    let sectionId = "";
    switch (clickedSpan.textContent.trim().toLowerCase()) {
      case "register":
        sectionId = "section-register";
        break;
      case "apply":
        sectionId = "section-apply";
        break;
      case "receive":
        sectionId = "section-receive";
        break;
      default:
        return;
    }

    document.querySelectorAll(".menusection").forEach((section) => {
      if (section.id === sectionId) {
        section.style.display = "flex";
      } else {
        section.style.display = "none";
      }
    });
  };

  spans.forEach((span) => {
    span.addEventListener("click", function () {
      showSection(this);
    });
  });
});

// /Scroll
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".navlinks a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
