class Pet {
    constructor(name, age, type, breed, colour, time) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.breed = breed;
        this.colour = colour;
        this.time = time;
    }
    feedPet (time) {
        this.lastFed = time;
        return `Last feed updated to: ${this.lastFed} for ${this.name}`;
    }
}

// //extending from the parent class Pet
class PetMeds extends Pet {
    constructor(name, age, type, breed, colour, time, mtime) {
        super(name, age, type, breed, colour, time);
        this.lastMeds = mtime;
    }
    giveMeds (time) {
        this.lastMeds = time;
        return `Last meds updated to: ${this.lastMeds} for ${this.name}`;
    }
}

// an instance of the class. = object. Instantiating new object
// const Bella = new Pet("Bella", 2, "Dog", "GS", "B&T", "08:00");
// console.log(Bella.feedPet("15:00"));

const Mez = new Pet("Mez", 5, "Cat", "BS", "Brown mix", "5:00");
console.log(Mez.feedPet("11:00"));

// Activity 1 

class Pet {
    constructor(firstname, surname, age, type, breed, colour, time) {
        this.firstname = firstname;
        this.surname = surname;
        this.age = age;
        this.type = type;
        this.breed = breed;
        this.colour = colour;
        this.lastFed = time;
    }
    get petInfo () {
        return `${this.firstname} is a ${this.type}, ${this.age} year(s) old`;
    }
    set fullName (name) {
        const array = name.split(' ');
        this.firstname = array[0];
        this.surname = array[1];
    }
    get fullName() {
        return `${this.firstname} ${this.surname}`
    }
    feedPet (time) {
        this.lastFed = time;
        return `Last feed updated to: ${this.lastFed} for ${this.firstname}`;
    }
}

const Bella = new Pet("Bella", "", 2, "Dog", "GS", "B&T", "08:00");
console.log(Bella);
Bella.fullName = "Bella Crompton"
console.log(Bella);
console.log(Bella.fullName)


class Pet {
    constructor(firstname, surname, age, type, breed, colour, time) {
        this.firstname = firstname;
        this.surname = surname;
        this.age = age;
        this.type = type;
        this.breed = breed;
        this.colour = colour;
        this.lastFed = time;
    }
    get petInfo () {
        return `${this.firstname} is a ${this.type}, ${this.age} year(s) old`;
    }
    set fullName (name) {
        const array = name.split(' ');
        this.firstname = array[0];
        this.surname = array[1];
    }
    get fullName() {
        return `${this.firstname} ${this.surname}`
    }
    feedPet (time) {
        this.lastFed = time;
        return `Last feed updated to: ${this.lastFed} for ${this.firstname}`;
    }
}

const Bella = new Pet("Bella", "", 2, "Dog", "GS", "B&T", "08:00");
console.log(Bella);
Bella.fullName = "Bella Crompton"
console.log(Bella);
console.log(Bella.fullName)