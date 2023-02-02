
//using functions inside objects we call them methods
const person = {
    firstName: "Sally",
    lastName: "Evans",
    age: 27,
    occupation: "Sales Assistant",
    married: false,
    homeOwner: false,
    hobbies: ["tennis", "gardening", "bungee jumping"],
    marketingOp () {
        if (this.homeOwner == false && this.age > 25) {
           return "Send mortgage offer email." 
        }
        else if (this.homeOwner == false && this.age < 25) {
            return "Send summer holiday fun credit card offer."
        }
        else if (this.homeOwner == true && this.age > 25) {
            return "Pension investment offer."
        }
        else {
            return "Send sensible savings offer."
        }
    }
}

console.log(person.marketingOp());

// Activity 1
// dot notation / bracket notation to access data within the object

const pet = {
    petName: "Simba",
    typeOfPet: "Cat",
    age: 10,
    colour: "brown patterns",
    catBehaviour: "loving",
    hobbies: ["running around", "eating dreamies", "sleeping"]
}
console.log(`my pets name is ${petName}, he is a ${typeOfPet}. ${petName} is ${age}, he has ${colour} and is very ${catBehaviour}!`)

//Activity 2 
pet.colour["pink"];
console.log(pet.colour);

//----------------------------------------------
const coffeeShop = {
    branch: false,
    drinks: ["latte", "mocha", "hot chocolate", "black coffee", "water"],
    food: ["tuna baguette", "pasta", "eggs with salad"],
    foodPrices: [7.46, 9.85, 10.64],
    drinkPrices: [10, 5.99, 1.50, 3.20, 8.10],

    drinksOrdered () {
        //let drink1 = this.drink
        //let drink2 = this.drink
        //choose random math . random
        //console.log(`Your order is ${}`)
    },
    
    foodOrdered() {
        //let food1 = this.food
        //let food2 = this.food
        //choose random math . random
        //console.log(`Your order is ${}`)
    }
}

