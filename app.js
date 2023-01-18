const menuToggle = document.querySelector('#hamburgerButton');
const list = document.querySelector('#list');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    list.classList.toggle('active')
})


const toggleHeaderLogin = document.querySelector('#login')
const toggleHeaderRegister = document.querySelector('#register')
const loginForm = document.querySelector('#loginForm')
const registerForm = document.querySelector('#registerForm')


toggleHeaderLogin.addEventListener('click', () => {
    toggleHeaderLogin.classList.toggle('border')
    toggleHeaderRegister.classList.toggle('border-none')
    loginForm.classList.toggle('showForm')

})

toggleHeaderRegister.addEventListener('click', () => {
    toggleHeaderLogin.classList.toggle('border-none')
    toggleHeaderRegister.classList.toggle('border')
    registerForm.classList.toggle('showForm')
    loginForm.classList.toggle('hideForm')

})


