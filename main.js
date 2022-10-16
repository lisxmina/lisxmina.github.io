
/* NAVIGATION*/

let menuBtn = document.querySelector(".menu-btn")
let closeBtn = document.querySelector(".close-btn")
let navMenu = document.querySelector(".nav-menu")
let navLinks = document.querySelector(".nav-links")

menuBtn.addEventListener("click", () => {
  navMenu.classList.add("show-menu")
})

closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("show-menu")
})

let closeMenu = () => {
  navMenu.classList.remove("show-menu")
}
navLinks.addEventListener("click", (e) => e.stopPropagation())
navMenu.addEventListener("click", closeMenu)




/*SLIDER*/

function Slider() {
  const carouselSlides = document.querySelectorAll('.slide');
  const btnPrev = document.querySelector('.prev');
  const btnNext = document.querySelector('.next');
  const dotsSlide = document.querySelector('.dots-container');
  let currentSlide = 0;

  const activeDot = function (slide) {
      document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('show-slide'));
      document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('show-slide');
  };
  activeDot(currentSlide);

  const changeSlide = function (slides) {
      carouselSlides.forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index - slides)}%)`));
  };
  changeSlide(currentSlide);

  btnNext.addEventListener('click', function () {
      currentSlide++; 
      if (carouselSlides.length - 1 < currentSlide) {
          currentSlide = 0;
      };
      changeSlide(currentSlide);
      activeDot(currentSlide);
});
  btnPrev.addEventListener('click', function () {
      currentSlide--;
      if (0 >= currentSlide) {
          currentSlide = 0;
      }; 
      changeSlide(currentSlide);
      activeDot(currentSlide);
  });

  dotsSlide.addEventListener('click', function (e) {
      if (e.target.classList.contains('dot')) {
          const slide = e.target.dataset.slide;
          changeSlide(slide);
          activeDot(slide);
      }
  });
};
Slider();






/*SLIDER 2*/

function Slider2() {
  const carouselSlides2 = document.querySelectorAll('.slide2');
  const btnPrev2 = document.querySelector('.prev2');
  const btnNext2 = document.querySelector('.next2');
  const dotsSlide2 = document.querySelector('.dots-container2');
  let currentSlide2 = 0;

  const activeDot2 = function (slide) {
      document.querySelectorAll('.dot2').forEach(dot => dot.classList.remove('show-slide'));
      document.querySelector(`.dot2[data-slide="${slide}"]`).classList.add('show-slide');
  };
  activeDot2(currentSlide2);

  const changeSlide2 = function (slides) {
      carouselSlides2.forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index - slides)}%)`));
  };
  changeSlide2(currentSlide2);

  btnNext2.addEventListener('click', function () {
      currentSlide2++; 
      if (carouselSlides2.length - 1 < currentSlide2) {
          currentSlide2 = 0;
      };
      changeSlide2(currentSlide2);
      activeDot2(currentSlide2);
});
  btnPrev2.addEventListener('click', function () {
      currentSlide2--;
      if (0 >= currentSlide2) {
          currentSlide2 = 0;
      }; 
      changeSlide2(currentSlide2);
      activeDot2(currentSlide2);
  });

  dotsSlide2.addEventListener('click', function (e) {
      if (e.target.classList.contains('dot2')) {
          const slide2 = e.target.dataset.slide;
          changeSlide2(slide2);
          activeDot2(slide2);
      }
  });
};
Slider2();
