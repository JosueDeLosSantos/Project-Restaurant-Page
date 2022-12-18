import coffe from './coffee.svg';

const body = document.querySelector('body');
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
export const menu = document.createElement('a');
menu.classList.add('menu');
menu.innerText = 'Menu';
export const contact = document.createElement('a');
contact.classList.add('contact');
contact.innerText = 'Contact';
export const hours = document.createElement('a');
hours.classList.add('hours');
hours.innerText = 'Hours';
export const main = document.createElement('main');
export const center = document.createElement('div');
center.classList.add('center');
const welcome = document.createElement('div');
welcome.classList.add('welcome');
welcome.innerText = 'Welcome!';
const centerLogo = document.createElement('div');
centerLogo.classList.add('centerLogo');
const logoBody = new Image();
logoBody.src = coffe;
const logoBodyTitle = document.createElement('div');
logoBodyTitle.innerText = 'COFFE J';
const motto = document.createElement('div');
motto.classList.add('motto');
motto.innerText = 'Serving the best coffe in the Dominican Republic!';
const menuLink = document.createElement('a');
menuLink.classList.add('menuLink');
menuLink.innerText = 'CHECK OUT OUR MENU';

export function homePage() {
  body.appendChild(nav);
  nav.appendChild(section1);
  nav.appendChild(section2);
  section1.appendChild(divLogo);
  divLogo.appendChild(logo);
  divLogo.appendChild(logoTitle);
  logoTitle.appendChild(logoTitleP);
  section2.appendChild(home);
  section2.appendChild(menu);
  section2.appendChild(contact);
  section2.appendChild(hours);
  body.appendChild(main);
  main.appendChild(center);
  center.appendChild(welcome);
  center.appendChild(centerLogo);
  centerLogo.appendChild(logoBody);
  centerLogo.appendChild(logoBodyTitle);
  center.appendChild(motto);
  center.appendChild(menuLink);
}

export function homePageClear() {
  body.removeChild(main);
  main.removeChild(center);
  center.removeChild(welcome);
  center.removeChild(centerLogo);
  centerLogo.removeChild(logoBody);
  centerLogo.removeChild(logoBodyTitle);
  center.removeChild(motto);
  center.removeChild(menuLink);
}
