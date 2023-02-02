
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
// console.log(`my pets name is ${petName}, he is a ${typeOfPet}. ${petName} is ${age}, he has ${colour} and is very ${catBehaviour}!`)

// Activity 2 
// pet.colour["pink"];
// console.log(pet.colour);

//----------------------------------------------
//PSUEDO CODE COFFEE SHOP ACTIVITY 5 
// object called coffee shop 
// inside have branch, drinks, prices, food
// create a method inside called drinksOrdered, foodOrdered.
// methods should return strings saying [Your order] is... 
//^showing items chosen with prices and total cost.

// const coffeeShop = {
//     branch: false,
//     drinks: ["late", "mocha", "hot chocolate", "black coffee", "water", "mango fruit cooler", "caprisun"],
//     food: ["tuna baguette", "pasta", "eggs with salad"],
//     prices: [10, 5.99, 1.50, 3.20, 8.10, 4.50, 2.50, 9.36, 6, 7.38]
// //do array in array
//     shopInfo () {
        
//     }
// }

// const person2 = {
//     firstName: "Arben",
//     occupation: "dev"
// }

// let newArray = [{}, {}]

// newArray[0];