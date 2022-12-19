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
contact.innerText = 'Contacts';
export const hours = document.createElement('a');
hours.classList.add('hours');
hours.innerText = 'Hours';

const main = document.createElement('main');
const Hours = document.createElement('div');
Hours.classList.add('hoursCard');
const HoursTitle = document.createElement('div');
HoursTitle.classList.add('HoursTitle');
HoursTitle.innerText = 'Hours';
const HoursList = document.createElement('ul');
HoursList.classList.add('HoursList');

const hoursArr = {
  Monday: '07 AM - 07 PM',
  Tuesday: '07 AM - 07 PM',
  Wednesday: '07 AM - 07 PM',
  Thursday: '07 AM - 07 PM',
  Friday: '07 AM - 07 PM',
  Saturday: '08 AM - 12 PM',
  Sunday: '08 AM - 12 PM',
};

function HoursListChecker(obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      const tempProp = document.createElement('li');
      tempProp.classList.add('tempProp');
      const span = document.createElement('span');
      span.classList.add('header');
      const span2 = document.createElement('span');
      span2.classList.add('response');
      HoursList.appendChild(tempProp);
      tempProp.appendChild(span);
      tempProp.appendChild(span2);

      span.innerHTML = prop + ': ';
      span2.innerHTML = obj[prop];
    }
  }
}

HoursListChecker(hoursArr);

export function hoursCard() {
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
  main.appendChild(Hours);
  Hours.appendChild(HoursTitle);
  Hours.appendChild(HoursList);
}

export function hoursCardClear() {
  body.removeChild(nav);
  nav.removeChild(section1);
  nav.removeChild(section2);
  section1.removeChild(divLogo);
  divLogo.removeChild(logo);
  divLogo.removeChild(logoTitle);
  logoTitle.removeChild(logoTitleP);
  section2.removeChild(home);
  section2.removeChild(menu);
  section2.removeChild(contact);
  section2.removeChild(hours);

  body.removeChild(main);
  main.removeChild(Hours);
}
