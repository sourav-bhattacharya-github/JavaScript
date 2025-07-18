// ================================String Operations================================
let str1 = "Double quotes";
let str2 = 'Single quotes';
let str3 = `Backticks (template literals)`;

const firstName = "Sourav";
const lastName = 'Bhattacharya';
const fullName = `${firstName} ${lastName}`; // Using template literals


// ✅ JavaScript String Methods – Practical Example

// Length
console.log(fullName.length); // 17

// toUpperCase
console.log(fullName.toUpperCase()); // "SOURAV BHATTACHARYA"

// toLowerCase
console.log(fullName.toLowerCase()); // "sourav bhattacharya"

// charAt
console.log(fullName.charAt(2)); // "u"

// indexOf
console.log(fullName.indexOf("r")); // 3
console.log(fullName.indexOf("z")); // -1 (not found)

// includes
console.log(fullName.includes("rav")); // true
console.log(fullName.includes("js")); // false


const str = "  Hello JavaScript  ";

// trim
console.log(str.trim()); // "Hello JavaScript"

// slice
console.log(fullName.slice(1, 4)); // "our"

// replace
console.log(fullName.replace("rav", "raj")); // "Souraj"

// split
const fruits = "apple, banana, cherry";
console.log(fruits.split(",")); // ["apple", "banana", "cherry"]

// concat
console.log("Hello".concat(" ", "World!")); // "Hello World!"

// startsWith
console.log(fullName.startsWith("Sou")); // true

// endsWith
console.log(fullName.endsWith("av")); // true

// repeat
console.log("JS ".repeat(3)); // "JS JS JS "

// padStart & padEnd (used for formatting)
console.log("5".padStart(3, "0")); // "005"
console.log("5".padEnd(3, "0"));   // "500"

// Template Literals
const a = 10, b = 20;
console.log(`Sum of ${a} and ${b} is ${a + b}`); // "Sum of 10 and 20 is 30"


// Preferred
if (fullName.includes("Sour")) { console.log("Found!"); }

// Old way (still valid)
if (fullName.indexOf("Sour") !== -1) { console.log("Found!"); }

// --------------------------------------------------------------------------------------------------













const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));