let array = [];
let increment = 0;

let container = document.querySelector('.container');

while (increment < 10000) {
    array.push(++increment);
}

container.innerHTML = array.join(' ');

// while (increment < 10000) {
//     increment++;
//     container.innerHTML += ' ' + increment;
// }