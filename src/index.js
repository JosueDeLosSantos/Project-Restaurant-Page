import './style.css';
import * as home from './home';
import * as menu from './menu';

home.homePage();

home.menu.addEventListener('click', () => {
  home.homePageClear();
  menu.menuCard();
});

home.contact.addEventListener('click', () => {
  home.homePageClear();
});

home.hours.addEventListener('click', () => {
  home.homePageClear();
});

home.home.addEventListener('click', () => {
  location.reload();
});
