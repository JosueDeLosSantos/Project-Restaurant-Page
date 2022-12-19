import './style.css';
import * as home from './home';
import * as menu from './menu';
import * as contacts from './contacts';

home.homePage();

home.menu.addEventListener('click', () => {
  home.homePageClear();
  menu.menuCard();
});

home.contact.addEventListener('click', () => {
  home.homePageClear();
  contacts.contactsCard();
});

home.hours.addEventListener('click', () => {
  home.homePageClear();
});

home.home.addEventListener('click', () => {
  location.reload();
});

menu.contact.addEventListener('click', () => {
  menu.menuCardClear();
  contacts.contactsCard();
});

menu.home.addEventListener('click', () => {
  location.reload();
});

contacts.home.addEventListener('click', () => {
  location.reload();
});

contacts.menu2.addEventListener('click', () => {
  contacts.contactsCardClear();
  menu.menuCard();
});
