document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu_item'),
        hamburger = document.querySelector('.hamburger');

    const toggleMenu = () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    };

    hamburger.addEventListener('click', toggleMenu);

    menuItem.forEach(item => {
        item.addEventListener('click', toggleMenu);
    });
});
