let button = document.querySelector('.showAll')
let icon = button.querySelector('.showAll__ic')
let textBtn = button.querySelector('.showAll__text')
let container = document.querySelector('.swiper')

button.addEventListener('click', function () {
  textBtn.textContent =
    textBtn.textContent === 'Показать все' ? 'Скрыть' : 'Показать все'
  icon.classList.toggle('showAll__ic__active')
  container.classList.toggle('swiper__more')
  button.classList.toggle('showAll__active')
})

let buttonTypes = document.querySelector('.technics .showAll')
let iconTypes = buttonTypes.querySelector('.technics .showAll__ic')
let textBtnTypes = buttonTypes.querySelector('.technics .showAll__text')
let containerTypes = document.querySelector('.technics .swiper')

buttonTypes.addEventListener('click', function () {
  textBtnTypes.textContent =
    textBtnTypes.textContent === 'Показать все' ? 'Скрыть' : 'Показать все'
  iconTypes.classList.toggle('showAll__ic__active')
  containerTypes.classList.toggle('swiper__more')
  buttonTypes.classList.toggle('showAll__active')
})

let buttonServises = document.querySelector('.readmore')
let iconServises = buttonServises.querySelector('.readmore__ic')
let textBtnServises = buttonServises.querySelector('.readmore__text')
let containerArticle = document.querySelector('.article__container')

buttonServises.addEventListener('click', function () {
  textBtnServises.textContent =
    textBtnServises.textContent === 'Читать далее' ? 'Скрыть' : 'Читать далее'
  iconServises.classList.toggle('readmore__ic__active')
  containerArticle.classList.toggle('article__container__more')
  buttonServises.classList.toggle('readmore__active')
})