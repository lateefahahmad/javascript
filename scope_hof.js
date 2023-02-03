//Activity 1
const codeNation = (sayHello) => {
    console.log("Hello Code Nation");
}

const greet = () => {
    for (let i = 0; i < 5; i++) {
        codeNation();
    }
}

greet();

// Activity 2
// but loop through the array
let numbers = [2, 21, 19, 53, 48]

const numArray = numbers.map(multiply)

const multiply = (num) => {
    return num * 3
}

