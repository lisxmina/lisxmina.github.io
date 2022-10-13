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



/* VALIDATION */

let validEmail = (email) => {
  let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLocaleLowerCase())
}

let form = document.querySelector("form")
let merci = document.querySelector(".merci")
let nameInput = document.querySelector("input[name='name']")
let emailInput = document.querySelector("input[name='email']")
let messageInput = document.querySelector("textarea[name='message']")

let formValid = false
let validationEnCours = false


let resetInput = (elm) => {
  elm.classList.remove("invalid")
  elm.nextElementSibling.classList.add ("hidden")
}


let invalidateInputs = (elm) => {
  elm.classList.add("invalid")
  elm.nextElementSibling.classList.remove("hidden")
}


let validateInputs = () => {
  if (!validationEnCours) return
  formValid = true
  resetInput(nameInput)
  resetInput(emailInput)

  if (!nameInput.value) {
    formValid = false
    invalidateInputs(nameInput)
  }

  if (!validEmail(emailInput.value)) {
    formValid = false
    invalidateInputs(emailInput)
  }

  if (!messageInput.value) {
    formValid = false
    invalidateInputs(messageInput)
  }
}


form.addEventListener("submit", (e) => {
  e.preventDefault()
  validationEnCours = true
  validateInputs()
  if (formValid) {
    form.remove()
    merci.classList.remove("hidden")
  }
})

nameInput.addEventListener("input", () => {
  validateInputs()
})
emailInput.addEventListener("input", () => {
  validateInputs()
})
messageInput.addEventListener("input", () => {
  validateInputs()
})


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


