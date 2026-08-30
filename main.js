 const productCard = document.querySelector('.product-card');
 const changeCardColorButton = document.querySelector('.change-card-color-button');
 const greenColorHash = '#00ff00';
 
 changeCardColorButton.addEventListener('click', () => {
 productCard.style.backgroundColor = greenColorHash;
 })


 const productCards = document.querySelectorAll('.product-card');
 const changeColorButtonCard = document.querySelector('.change-color-button-card');
 const redColorHash = 'red';
 changeColorButtonCard.addEventListener('click', () => {
 productCards.forEach((cards) => cards.style.backgroundColor = redColorHash)
 }) 


 const openGoogl = document.querySelector('#open-google')
 openGoogl.addEventListener('click' , openGoogle)
 function openGoogle() {
 const answer = confirm('Вы действительно хотите открыть Google');
 if (answer === true) {
 window.open('https://google.com')
 } else {
 return;
 }
}

const outputConsoleButton = document.querySelector('#output-console-log');
outputConsoleButton.addEventListener('click' , () => outputConsoleLog ('ДЗ №4'));
function outputConsoleLog(message) {
alert(message)
console.log(message)
}

const carTitle = document.querySelector('.card-title')
carTitle.addEventListener('mouseover' , () => {
console.log(carTitle.textContent);
});

const myButton = document.getElementById('color-btn');
const myText = document.getElementById('color-btn');
let isRed = false;
myButton.addEventListener('click' , function () {
if(isRed) {
myText.style.backgroundColor = 'blue';
myText.textContent = 'цвет текста синий';
isRed = false;
} else {
myText.style.backgroundColor = 'red';
myText.textContent = 'цвет текста красный';

isRed = true;
}
})


var y = 20;

function tipe() {
 var x = 10;
 
}
console.log(x);

tipe();

let brand = "acer";
let model = "Aspire 5";
let ram = "16г";

let info = `Ноутбук ${brand} ${model} имеет ${ram} оперативной памяти`;

console.log(info);