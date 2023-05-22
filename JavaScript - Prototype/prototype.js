// Here we are creating simple object

// let person = {};

// person.name = 'Rabib';
// person.age = 32;

// person.eat = function () {
//     console.log('Person is eating.');
// }

// person.sleep = function () {
//     console.log('Person is sleeping');
// }

function Person(name, age) {
    let person = Object.create(Person.prototype);
    person.name = name;
    person.age = age;

    return person;
}

function PersonWithNew(name, age) {
    this.name = name;
    this.age = age;
}

PersonWithNew.prototype = {
    eat() {
        console.log('Person is eating.');
    },
    sleep() {
        console.log('Person is sleeping');
    },
    play() {
        console.log('Person is playing');
    }
}

Person.prototype = {
    eat() {
        console.log('Person is eating.');
    },
    sleep() {
        console.log('Person is sleeping');
    },
    play() {
        console.log('Person is playing');
    }
}

const rabib = Person("Rabib", 32);
rabib.play();
const tamim = Person("Tamim", 30);

const newUser = new PersonWithNew("My Name", 32);
newUser.play();

// const captain = {
//     name: 'Mashrafe',
//     age: 36,
//     country: 'Bangladesh'
// }

// const player = Object.create(captain);

// console.log(player.name);

// function test() {}

// console.dir(test);