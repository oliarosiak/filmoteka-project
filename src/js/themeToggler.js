const toggler = document.querySelector('.header__toggle');
const wrapper = document.querySelector('.wrapper');
const day = document.querySelector('.header__toggle--day-img');
const night = document.querySelector('.header__toggle--night-img')

toggler.addEventListener('click', themeChange);

function themeChange(e) {
    wrapper.classList.toggle('wrapper__dark');
    day.classList.toggle('visually-hidden')
    night.classList.toggle('visually-hidden')
}