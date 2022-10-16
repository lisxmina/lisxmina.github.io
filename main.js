
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
      document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
      document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('active');
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




/* SLIDER 2 */ 

let btnPrev = document.querySelector('.btn-prev');
let btnNext = document.querySelector('.btn-next');

let slider2 = document.querySelector('.slide2');

let indicatorParent2 = document.querySelector('.control2 ul');
let indicators2 = document.querySelectorAll('.control2 li');
index = 0;

indicators2.forEach((indicator2, i) => {
indicator2.addEventListener('click', () => {
document.querySelector('.control2 .selected2').classList.remove('selected2');
indicator2.classList.add('selected2');
slider2.style.transform = 'translateX(' + (i) * 100 + '%)';
index = i;

});
});

btnPrev.addEventListener('click', () => {
index = (index > 0) ? index - 1 : 0;
document.querySelector('.control2 .selected2').classList.remove('selected2');
indicatorParent2.children[index].classList.add('selected2');
slider2.style.transform = 'translateX(' + (index) * -100 + '%)';
});

btnNext.addEventListener('click', () => {
index = (index < 2 - 1) ? index + 1 : 1;
document.querySelector('.control2 .selected2').classList.remove('selected2');
indicatorParent2.children[index].classList.add('selected2');
slider2.style.transform = 'translateX(' + (index) * -100 + '%)';
});



