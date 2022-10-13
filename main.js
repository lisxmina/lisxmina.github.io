
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


let prevBtn = document.querySelector('.prev-btn');
let nextBtn = document.querySelector(".next-btn");
let slider = document.querySelector('.slide');

let indicatorParent = document.querySelector('.control ul');
let indicators = document.querySelectorAll('.control li');
index = 0;

indicators.forEach((indicator, i) => {
indicator.addEventListener('click', () => {
document.querySelector('.control .selected').classList.remove('selected');
indicator.classList.add('selected');
slider.style.transform = 'translateX(' + (i) * 100 + '%)';
index = i;

});
});

prevBtn.addEventListener("click", () => {
index = (index > 0) ? index - 1 : 0;
document.querySelector('.control .selected').classList.remove('selected');
indicatorParent.children[index].classList.add('selected');
slider.style.transform = 'translateX(' + (index) * -50 + '%)';
});

nextBtn.addEventListener("click", () => {
  index = (index < 2 - 1) ? index + 1 : 1
document.querySelector(".control .selected").classList.remove("selected")
indicatorParent.children[index].classList.add("selected")
slider.style.transform = "translateX(" + (index) * -50 + "%)"
})





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



