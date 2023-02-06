const myHeading = document.getElementById("heading")
const myButton = document.getElementById("button")
const myInput = document.getElementById("input")
const drinks = document.getElementById("drinks")



myButton.addEventListener("click", () => {
    myHeading.style.color =  myInput.value;
})


