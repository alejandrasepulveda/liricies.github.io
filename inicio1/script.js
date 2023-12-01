document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.querySelector('.navbar__text');

    if (menuIcon && navList) {
        menuIcon.addEventListener('click', function () {
            navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
        });
    }
});
