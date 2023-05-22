class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is eating.`);
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
    play() {
        console.log(`${this.name} is playing`);
    }
}

const rabib = new Person("Rabib", 32);
const sakib = new Person("Sakib", 31);
sakib.play();
sakib.sleep();