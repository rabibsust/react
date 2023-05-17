let number1 = 0;
let number2 = 0;

let button1 = document.querySelector('#button1');
let display1 = document.querySelector('#display1');
let button2 = document.querySelector('#button2');
let display2 = document.querySelector('#display2');

button1.addEventListener('click', () => {
    number1++;
    display1.textContent = number1;
});

button2.addEventListener('click', () => {
    number2++;
    display2.textContent = number2;
});