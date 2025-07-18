// ================================Conversion Operations================================

let num = Number(score);        // 42 (number)
let str = String(100);          // "100" (string)
let bool = Boolean("hello");    // true
let empty = Boolean("");        // false

console.log("5" + 2);    // "52" (number 2 is coerced into string)
console.log("5" - 2);    // 3   (string "5" coerced into number)
console.log(true + 1);   // 2   (true => 1)
console.log(false + "3"); // "false3"


console.log(Boolean(0));       // false
console.log(Boolean("0"));     // true
console.log(Number(null));     // 0
console.log(Number(undefined));// NaN


console.log(null > 0);          // false
console.log(null == 0);         // false
console.log(null >= 0);        // true

console.log(undefined == 0);    // false
console.log(undefined > 0);     // false
console.log(undefined < 0);     // false

console.log("2" === 2);         // false (strict equality, different types)
console.log("2" == 2);          // true (loose equality, type coercion)
console.log("2" !== 2);         // true (strict inequality)
console.log("2" != 2);          // false (loose inequality, type coercion)

console.log("2" > 1);           // true (string "2" coerced into number)
console.log("02" > 1);          // true (string "02" coerced into number)
console.log("2" < 1);           // false (string "2" coerced into number)
console.log("2" >= 1);          // true (string "2" coerced into number)
console.log("2" <= 1);          // false (string "2" coerced into number)
console.log("2" == 1);          // false (string "2" coerced into number)



// ---------------------------------------------------------------------------------------------------

let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion