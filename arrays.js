let favFilms = [
    "Avengers",
    "Bad Boys",
    "John Wick"
]

//updates index 0 to new value
favFilms[0] = "Iron Man";
console.log(favFilms);
console.log(favFilms.length);

// gets last element of list and removes it 
console.log(favFilms.pop());
console.log(favFilms);

// gets first element from array returns it, then removes it
console.log(favFilms.shift());
console.log(favFilms);

// returns selected elements in array and makes it as a new array so 0 & 2 are removed and 1 is left.
console.log(favFilms.slice(0,2));
console.log(favFilms);

// console.log(favFilms.map());
// console.log(favFilms);


//slices list depending on where you've chosen the index to start. adds new array too if you replace with new values
console.log(favFilms.splice(0, 2, "Coraline", "Spirited Away"));
console.log(favFilms);

//adds new values to start of array list
console.log(favFilms.unshift("iRobot", "ip Man"));
console.log(favFilms);

