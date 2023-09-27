
import './style.css';
import image from './pexels-rene-strgar-10406184.jpg';
import populateIndexPage from './a';
import populateMenu from './b';
import populateContact from './c';



const menuChoices = ['home', 'menu', 'contact'];
const contentDiv = document.querySelector('#content');

const header = document.createElement('header');
header.setAttribute('id', 'header');





const h1 = document.createElement('h1');
h1.textContent = 'Pizza Palace';

const ul = document.createElement('ul');

const tabContent = document.createElement('div');
tabContent.classList.add('tabContent');

menuChoices.forEach((choice, i) => {
    const li = document.createElement('li');
    li.textContent = choice;
    li.setAttribute('id', menuChoices[i]);
    li.addEventListener('click', switchTab)
    ul.append(li);
    
    
});

const backgroundPage = new Image();
backgroundPage.src = image

document.body.appendChild(backgroundPage);
contentDiv.append(header, tabContent);
header.append(h1, ul);
populateIndexPage(contentDiv, tabContent);

function switchTab(e) {

    tabContent.innerHTML = '';
    
    let buttonClicked = e.target.textContent
    console.log(buttonClicked)
    if (buttonClicked == 'home') {
        populateIndexPage(contentDiv, tabContent);
    }
    if (buttonClicked =='menu') {
        populateMenu(tabContent)
    }
    if (buttonClicked =='contact') {
        populateContact(tabContent)
    }
    

}




