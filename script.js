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


/*GALERIE */

let gridImg = [...document.getElementsByClassName("grid-img")]
let popup = document.getElementById("popup")
let popupImg = document.getElementById("popup-img")

let openPopup = (e) => {
  let gridImgCliked = e.target.closest(".grid-img")
  let clickedImg = gridImgCliked.id
  popup.classList.add("show-galerie")
  popupImg.src = `/images/${clickedImg}.jpeg`
}

let closePopup = () => {
  popup.classList.remove("show-galerie")
}

gridImg.forEach((el) => el.addEventListener("click", openPopup))
popupImg.addEventListener("click", (e) => e.stopPropagation())
popup.addEventListener("click", closePopup)