import './style.css';
import * as home from './home';
import * as menu from './menu';
import * as contacts from './contacts';
import * as hours from './hours';

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
  hours.hoursCard();
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

menu.hours.addEventListener('click', () => {
  menu.menuCardClear();
  hours.hoursCard();
});

contacts.home.addEventListener('click', () => {
  location.reload();
});

contacts.menu2.addEventListener('click', () => {
  contacts.contactsCardClear();
  menu.menuCard();
});

contacts.hours.addEventListener('click', () => {
  contacts.contactsCardClear();
  hours.hoursCard();
});

hours.home.addEventListener('click', () => {
  location.reload();
});

hours.menu.addEventListener('click', () => {
  hours.hoursCardClear();
  menu.menuCard();
});

hours.contact.addEventListener('click', () => {
  hours.hoursCardClear();
  contacts.contactsCard();
});
