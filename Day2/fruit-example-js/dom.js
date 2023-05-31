// console.dir(Array);

const display = document.getElementById('fruits');
const button = document.querySelector('#button');

let fruits = ['mango', 'guava', 'apple', 'orange'];

const init = function () {
    display.innerHTML = '';
    fruits.sort().forEach(fruit => {
        let item = document.createElement('li');
        item.textContent = fruit;
        display.appendChild(item);
    });
}

const addItem = function () {
    fruits.myPush(document.getElementById('input').value);
}

Array.prototype.myPush = function (...a) {
    this.push(a[0]);
    init();
}

fruits.myPush('banana');

init();