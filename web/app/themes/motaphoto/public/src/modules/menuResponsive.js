const burger = document.querySelector('.header__burger');
const closeBtn = document.querySelector('.header__close');
const navigationMenu = document.querySelector('.header__navigation');

burger.addEventListener('click', e => {
    navigationMenu.classList.add('open');
    burger.style.display = 'none';
    closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', e => {
    burger.style.display = 'block';
    closeBtn.style.display = 'none';
    navigationMenu.classList.remove('open');

});


document.addEventListener('DOMContentLoaded', function () {
    const headerNavigation = document.querySelector('.header__navigation');
    const wpAdminBar = document.getElementById('wpadminbar');

    function adjustNavigationPosition()
    {
        if (wpAdminBar) {
            const adminBarHeight = wpAdminBar.clientHeight;
            headerNavigation.style.top = `calc(80px + ${adminBarHeight}px)`;
        }
    }

    adjustNavigationPosition();
    window.addEventListener('resize', adjustNavigationPosition);
});
