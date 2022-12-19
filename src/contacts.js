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
export const menu2 = document.createElement('a');
menu2.classList.add('menu');
menu2.innerText = 'Menu';
export const contact = document.createElement('a');
contact.classList.add('contact');
contact.innerText = 'Contacts';
export const hours = document.createElement('a');
hours.classList.add('hours');
hours.innerText = 'Hours';

export const main = document.createElement('main');
export const contacts = document.createElement('div');
contacts.classList.add('contactsCard');

export function contactsCard() {
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
  main.appendChild(contacts);
}

export function contactsCardClear() {
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
  main.removeChild(contacts);
}
