const home = document.querySelector(".home")
const quiz = document.querySelector(".quiz")
const create = document.querySelector(".create")
const profile = document.querySelector(".profile")

home.addEventListener('click', () => {
    quiz.classList.remove("invisible")
    create.classList.add("invisible")
    profile.classList.add("invisible")
})