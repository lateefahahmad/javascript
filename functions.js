const holidayDestination = (country, month) => {
    console.log(`Yay, we're going on holiday to ${country} in ${month}. I can't wait!!`);
}

holidayDestination("Spain", "June"); // calling on your function

// Activity 1 -------------------------------------
const sayHello = (myName, drink) => {
    console.log(`Hi there, my name is ${myName} and my favourite drink is ${drink}.`)
}

sayHello("Lateefah", "Lucozade");

//-------------------------------------
const multiply = (num1, num2) => {
    return num1 * num2 
}
console.log(multiply(3,8));

// -------------------------------------

const inventory = (productCode, departmentName, quantity) => {
    console.log(`${quantity} of ${productCode} sold from ${departmentName} department, need to update stock by ${quantity}.`)
}

inventory(412345, "baked goods", 65);

//---------------------------------------

const replenishStock = (productCode) => {
    console.log(`Order product number ${productCode}, stock is LOW!`)
}

const reducePrice = (productCode, originalPrice) => {
    let salePrice = originalPrice /= 2
    console.log(`The price of product ${productCode} is now reduced to ${salePrice}`);
}

const checkStock = (productCode, quantity, originalPrice) => {
    if (quantity <= 10) {
        replenishStock(productCode)
    }
    else if (quantity > 100) {
        reducePrice(productCode, originalPrice)
    } else {
        console.log("Don't order stock")
    }
}
checkStock(384959, 9, 100)
reducePrice(387483, 10.99)