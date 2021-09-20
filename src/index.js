const BURGER_BUTTON = document.querySelector('.burger-button');
const BURGER_MENU = document.querySelector('.burger-nav');
const BURGER_LIST = document.querySelector('.burger-list');

BURGER_BUTTON.addEventListener('click', () => {
  BURGER_BUTTON.classList.toggle('burger-rotate');
  BURGER_MENU.classList.toggle('hide-menu');
});

BURGER_LIST.addEventListener('click', (e) => {
  if (e.target.classList.contains('menu-link')) {
    BURGER_MENU.classList.toggle('hide-menu');
  }
});