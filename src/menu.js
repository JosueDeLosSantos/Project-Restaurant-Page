const body = document.querySelector('body');
const main = document.createElement('main');
export const menu = document.createElement('div');
menu.classList.add('menuCard');
export const menuTitle = document.createElement('div');
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

export function menuCard() {
  body.appendChild(main);
  main.appendChild(menu);
  menu.appendChild(menuTitle);
  menu.appendChild(hot);
  hot.appendChild(hotTitle);
  hot.appendChild(hotList);
  menu.appendChild(cold);
  cold.appendChild(coldTitle);
  cold.appendChild(coldList);
  HotarrLister(hotArr);
  ColdarrLister(coldArr);
}
