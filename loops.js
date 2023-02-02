// Activity 2 
let evenNumbers = []

for (let n = 20; n > 0; n--) {
    if (n % 2 == 0) {
        (evenNumbers.push(n));
    }
}
console.log(`The even numbers between 0 and 20 are; ${evenNumbers}`);
console.log(evenNumbers);


// Activity 3
let oddNumbers = []

for (let n = 2; n < 30; n++) {
    if(n % 2 != 0) {
        (oddNumbers.push(n));
    }
}
console.log(oddNumbers);
console.log(`The odd numbers between 1 and 30 are; ${oddNumbers}`);


// Activity 3 WHILE LOOPS


// while(age != 18) {
//     console.log("You're a child!");
//     age = Math.floor(Math.random()* 18 + 1)
//    if (age <= 18) {
//         console.log("You're an adult!");
//     }
// }


// while(age != 18) {
//     console.log("You're a child!");
//     age = 10;
//    if (age <= 18) {
//         console.log("You're an adult!");
//     }
// }


//Activity 4
for (let i = 0; i < 6; i++) {
randomNumbers = Math.floor(Math.random()* 100)
console.log(randomNumbers);
}

// Activity 5

let favFilms = [
    "Avengers",
    "Bad Boys",
    "Ghostbusters",
    "John Wick"
]

for (let i = 0; i < favFilms.length; i++) {
    console.log(favFilms[i]);
    if(favFilms[2] == "Ghostbusters") {
        console.log("Yay it's Ghostbusters!")
        return "Boo! We want Ghostbusters!";
    }
}

// Activity 6