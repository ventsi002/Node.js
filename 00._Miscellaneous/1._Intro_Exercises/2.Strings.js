// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

function math(a, b) {
    return parseFloat(a) + parseFloat(b);
}

console.log(math(numberOne, numberTwo));

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const result = ((Number(anotherNumberOne) + Number(anotherNumberTwo)).toFixed(2));

console.log(result);


// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

function math3(a, b, c, n) {
    let answer = (a + b + c) / n
    parseFloat(answer);
    return answer;
}

console.log(math3(one, two, three, 3));



// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"


console.log(letters.charAt(2));


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const J = fact.replace("j", "J");
console.log(J);

// --------------------------------------



