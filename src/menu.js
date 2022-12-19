import coffe from './coffee.svg';

const nav = document.createElement('nav');
const section1 = document.createElement('section');
section1.classList.add('section1');
const section2 = document.createElement('section');
section2.classList.add('section2');
const divLogo = document.createElement('div');
const logo = new Image();
logo.src = coffe;
const logoTitle = document.createElement('div');
const logoTitleP = document.createElement('p');
logoTitleP.innerText = 'Coffe J';
export const home = document.createElement('a');
home.classList.add('home');
home.innerText = 'Home';
export const menu2 = document.createElement('a');
menu2.classList.add('menu');
menu2.innerText = 'Menu';
export const contact = document.createElement('a');
contact.classList.add('contact');
contact.innerText = 'Contacts';
export const hours = document.createElement('a');
hours.classList.add('hours');
hours.innerText = 'Hours';

const body = document.querySelector('body');
const main = document.createElement('main');
const menu = document.createElement('div');
menu.classList.add('menuCard');
const menuTitle = document.createElement('div');
menuTitle.classList.add('menuTitle');
menuTitle.innerText = 'Coffe Menu';
const hot = document.createElement('div');
hot.classList.add('hot');
const hotTitle = document.createElement('div');
hotTitle.classList.add('hotTitle');
hotTitle.innerText = 'Hot';
const hotList = document.createElement('ul');
hotList.classList.add('hotList');
const cold = document.createElement('div');
cold.classList.add('cold');
const coldTitle = document.createElement('div');
coldTitle.classList.add('coldTitle');
coldTitle.innerText = 'Cold';
const coldList = document.createElement('ul');
coldList.classList.add('coldList');

const hotArr = [
  'Americano .............................................................................. 60 RD$',
  'Brewed Coffees ...................................................................... 80 RD$',
  'Cappuccino ............................................................................. 100 RD$',
  'Espresso .................................................................................. 80 RD$',
  'Flat White ............................................................................... 90 RD$',
  'Latte ........................................................................................ 80 RD$',
  'Macchiato ............................................................................... 120 RD$',
  'Mochas .................................................................................... 110 RD$',
];

const coldArr = [
  'Refresher ................................................................................ 60 RD$',
  'Juice ........................................................................................ 80 RD$',
  'Milk ........................................................................................ 100 RD$',
  'Sparkling Water ....................................................................... 80 RD$',
  'Water ........................................................................................ 90 RD$',
];

function HotarrLister(Arr) {
  Arr.forEach((element) => {
    hotList.innerHTML += `<li> ${element} </li>`;
  });
}

function ColdarrLister(Arr) {
  Arr.forEach((element) => {
    coldList.innerHTML += `<li> ${element} </li>`;
  });
}

HotarrLister(hotArr);
ColdarrLister(coldArr);

export function menuCard() {
  body.appendChild(nav);
  nav.appendChild(section1);
  nav.appendChild(section2);
  section1.appendChild(divLogo);
  divLogo.appendChild(logo);
  divLogo.appendChild(logoTitle);
  logoTitle.appendChild(logoTitleP);
  section2.appendChild(home);
  section2.appendChild(menu2);
  section2.appendChild(contact);
  section2.appendChild(hours);

  body.appendChild(main);
  main.appendChild(menu);
  menu.appendChild(menuTitle);
  menu.appendChild(hot);
  hot.appendChild(hotTitle);
  hot.appendChild(hotList);
  menu.appendChild(cold);
  cold.appendChild(coldTitle);
  cold.appendChild(coldList);
}

export function menuCardClear() {
  body.removeChild(nav);
  nav.removeChild(section1);
  nav.removeChild(section2);
  section1.removeChild(divLogo);
  divLogo.removeChild(logo);
  divLogo.removeChild(logoTitle);
  logoTitle.removeChild(logoTitleP);
  section2.removeChild(home);
  section2.removeChild(menu2);
  section2.removeChild(contact);
  section2.removeChild(hours);
  body.removeChild(main);
  main.removeChild(menu);
}
