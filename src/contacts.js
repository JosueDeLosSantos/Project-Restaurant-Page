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

const main = document.createElement('main');
const contacts = document.createElement('div');
contacts.classList.add('contactsCard');
const contactsTitle = document.createElement('div');
contactsTitle.classList.add('contactsTitle');
contactsTitle.innerText = 'Contacts';
const manager = document.createElement('div');
manager.classList.add('manager');
const managerTitle = document.createElement('div');
managerTitle.classList.add('managerTitle');
managerTitle.innerText = 'Manager';
const managerList = document.createElement('ul');
managerList.classList.add('managerList');
const customerService = document.createElement('div');
customerService.classList.add('customerService');
const customerServiceTitle = document.createElement('div');
customerServiceTitle.classList.add('customerServiceTitle');
customerServiceTitle.innerText = 'Customer Service';
const customerServiceList = document.createElement('ul');
customerServiceList.classList.add('customerServiceList');
const location = document.createElement('div');
location.classList.add('location');
const locationTitle = document.createElement('div');
locationTitle.classList.add('locationTitle');
locationTitle.innerText = 'Location';
const locationList = document.createElement('div');
locationList.classList.add('locationList');
locationList.innerText =
  'Av Ing Roberto Pastoriza 110, Santo Domingo, Dominican Republic';

const managerArr = {
  Email: 'somemanager@outlook.com',
  Fax: '555-333-4555',
};

const customerServiceArr = {
  Email: 'customerServiceCoffeJ@outlook.com',
  Fax: '555-333-4555',
  Telephone: '809-685-4555',
};

function ManagerListArr(obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      const tempProp = document.createElement('li');
      tempProp.classList.add('tempProp');
      const span = document.createElement('span');
      span.classList.add('header');
      const span2 = document.createElement('span');
      span2.classList.add('response');
      managerList.appendChild(tempProp);
      tempProp.appendChild(span);
      tempProp.appendChild(span2);

      span.innerHTML = prop + ': ';
      span2.innerHTML = obj[prop];
    }
  }
}

function customerServiceListArr(obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      const tempProp = document.createElement('li');
      tempProp.classList.add('tempProp');
      const span = document.createElement('span');
      span.classList.add('header');
      const span2 = document.createElement('span');
      span2.classList.add('response');
      customerServiceList.appendChild(tempProp);
      tempProp.appendChild(span);
      tempProp.appendChild(span2);

      span.innerHTML = prop + ': ';
      span2.innerHTML = obj[prop];
    }
  }
}

ManagerListArr(managerArr);
customerServiceListArr(customerServiceArr);

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
  contacts.appendChild(contactsTitle);
  contacts.appendChild(manager);
  manager.appendChild(managerTitle);
  manager.appendChild(managerList);
  contacts.appendChild(customerService);
  customerService.appendChild(customerServiceTitle);
  customerService.appendChild(customerServiceList);
  contacts.appendChild(location);
  location.appendChild(locationTitle);
  location.appendChild(locationList);
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
