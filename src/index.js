import './style.css';


const menuChoices = ['Home', 'Menu', 'Contact'];
const contentDiv = document.querySelector('#content');

const header = document.createElement('header');
header.setAttribute('id', 'header');

const h1 = document.createElement('h1');
h1.textContent = 'real pizzeria';

const ul = document.createElement('ul');

const content = document.createElement('div');
content.classList.add('tab-content');

menuChoices.forEach((choice, i) => {
    const li = document.createElement('li');
    li.textContent = choice;
    li.setAttribute('id', i);
    ul.append(li);
});
const background =

contentDiv.append(header, content);
header.append(h1, ul);


