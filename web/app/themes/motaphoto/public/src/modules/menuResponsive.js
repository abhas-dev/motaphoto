const burger = document.querySelector('.header__burger');
const closeBtn = document.querySelector('.header__navigation__close');
const navigationMenu = document.querySelector('.header__navigation');

burger.addEventListener('click', e => {
    navigationMenu.classList.add('open');
});

closeBtn.addEventListener('click', e => {
    navigationMenu.classList.remove('open');
})