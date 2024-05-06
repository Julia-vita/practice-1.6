let open = document.querySelector('.open')
let close = document.querySelector('.close')
let menu = document.querySelector('.burger-menu')
let main = document.querySelector('.main')

open.addEventListener('click', function (e) {
  e.stopPropagation()
  main.classList.toggle('transparent')
  menu.classList.toggle('burger-menu__visible')
})

close.addEventListener('click', function () {
  main.classList.toggle('transparent')
  menu.classList.toggle('burger-menu__visible')
})

let chat = document.querySelector('.chat')
let chatHeader = document.querySelector('header .chat')
let feedback = document.querySelector('.feedback')
let closeFeedback = document.querySelector('.feedback__close')
let call = document.querySelector('.call')
let callHeader = document.querySelector('header .call')
let callback = document.querySelector('.callback')
let closeCallback = document.querySelector('.callback__close')
let body = document.querySelector('.body')

chatHeader.addEventListener('click', function (e) {
  e.preventDefault()
  e.stopPropagation()
  main.classList.add('transparent')
  feedback.classList.toggle('modal__visible')
})

callHeader.addEventListener('click', function (e) {
  e.preventDefault()
  e.stopPropagation()
  main.classList.add('transparent')
  callback.classList.toggle('modal__visible')
})

main.addEventListener('click', function () {
  main.classList.remove('transparent')
  menu.classList.remove('burger-menu__visible')
  feedback.classList.remove('modal__visible')
  callback.classList.remove('modal__visible')
})

if (window.innerWidth >= 1366) {
  chat.addEventListener('click', function (e) {
    e.preventDefault()
    main.classList.add('transparent')
    body.classList.add('no-scroll')
    feedback.classList.toggle('modal__visible')
  })

  call.addEventListener('click', function (e) {
    e.preventDefault()
    main.classList.add('transparent')
    body.classList.add('no-scroll')
    callback.classList.toggle('modal__visible')
  })
  closeFeedback.addEventListener('click', function (e) {
    main.classList.remove('transparent')
    e.preventDefault()
    body.classList.remove('no-scroll')
    feedback.classList.toggle('modal__visible')
  })
  closeCallback.addEventListener('click', function (e) {
    main.classList.remove('transparent')
    e.preventDefault()
    body.classList.remove('no-scroll')
    callback.classList.toggle('modal__visible')
  })
}

if (window.innerWidth <= 1366) {
  chat.addEventListener('click', function (e) {
    e.preventDefault()
    main.classList.add('transparent')
    feedback.classList.toggle('modal__visible')
  })

  call.addEventListener('click', function (e) {
    e.preventDefault()
    main.classList.add('transparent')
    callback.classList.toggle('modal__visible')
  })
  closeFeedback.addEventListener('click', function (e) {
    e.preventDefault()
    main.classList.remove('transparent')
    feedback.classList.toggle('modal__visible')
    menu.classList.remove('burger-menu__visible')
  })
  closeCallback.addEventListener('click', function (e) {
    e.preventDefault()
    main.classList.remove('transparent')
    callback.classList.toggle('modal__visible')
    menu.classList.remove('burger-menu__visible')
  })
}