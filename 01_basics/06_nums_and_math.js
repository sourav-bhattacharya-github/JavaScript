// =====================Numbers and Math in JavaScript========================
// 🔢 JavaScript Numbers Overview
const age = 25;      // integer
const price = 99.99; // float
const big = 1e6;     // 1000000


// 🔍 1. Common Number Methods
let num = 123.456;

// toFixed(n): returns string with n digits after decimal
console.log(num.toFixed(2));  // "123.46"

// toPrecision(n): total number of digits
console.log(num.toPrecision(5)); // "123.46"

// toString(): converts number to string
console.log(num.toString()); // "123.456"

// isNaN(): checks if value is NaN (Not-a-Number)
console.log(isNaN("abc"));   // true


// isFinite(): checks if value is a finite number
console.log(isFinite(123));   // true


// parseInt() & parseFloat()
console.log(parseInt("42px"));    // 42
console.log(parseFloat("42.73kg")); // 42.73



// 🧮 3. Math Object
console.log(Math.abs(-7));        // 7
console.log(Math.round(4.6));     // 5
console.log(Math.floor(4.9));     // 4
console.log(Math.ceil(4.1));      // 5
console.log(Math.sqrt(16));       // 4
console.log(Math.pow(2, 3));      // 8
console.log(Math.min(5, 3, 9));   // 3
console.log(Math.max(5, 3, 9));   // 9
console.log(Math.random());       // random between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1); // random 1 to 10



// **Random Number Generation**:
// 🎲 Dice Roll Simulation so we want 1 to 6
// Formula to generate a random number between min = 1 and max = 6:
// Math.floor(Math.random() * (max - min + 1)) + min
min = 1
max = 6
// Function to roll a dice
function rollDice(min = 1, max = 6) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// calling the function
console.log(rollDice()); // e.g., 4


// 🧠 Key Notes:
// Always use parseInt or Number() for conversion from strings to numbers.
// Use Math.floor(Math.random() * N) to generate random integers.
// Avoid direct float comparison due to precision issues:

// Example
console.log(0.1 + 0.2 === 0.3) // false (due to floating-point rounding)













// ==================================================================================================
const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)