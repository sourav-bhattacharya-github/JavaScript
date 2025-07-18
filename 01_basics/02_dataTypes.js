//  **treat all JS code as newer version**
"use strict";

// ===================================🧠 Data Types in JavaScript===================================

//  **Primitive**

//  **7 types : String, Number, Boolean, null, undefined, Symbol, BigInt**
// ✨ JavaScript Primitive Types (Stored by value)

let str = "Hello";              // String
let num = 42;                   // Number
let isTrue = true;              // Boolean
let und;                        // Undefined (variable declared, not assigned)
let nothing = null;             // Null (explicitly empty)
let sym = Symbol("id");         // Symbol (unique identifier)
let big = 1234567890123456789n; // BigInt (for large numbers)

// typeof checks
console.log(typeof str);       // "string"
console.log(typeof num);       // "number"
console.log(typeof isTrue);    // "boolean"
console.log(typeof und);       // "undefined"
console.log(typeof nothing);   // "object"  ← JavaScript bug
console.log(typeof sym);       // "symbol"
console.log(typeof big);       // "bigint"


// Symbols are unique
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false (different symbols)





// **Reference Types** (Stored by reference)

//  **Array, Object, Function**
// ✅ Reference Types (copied by reference)
let user = { name: "Sourav", age: 25 };  // Object
let scores = [95, 88, 76];               // Array
let greet = function () {                // Function
  console.log("Hello!");
};

// 🧪 Type Check Quirks
console.log(typeof null);         // "object" ← Bug
console.log(typeof []);           // "object"
console.log(typeof function(){}); // "function"
console.log(typeof NaN);          // "number"


// 🔁 Behavior Differences
let a = 10;
let b = a;
b++;
console.log(a, b); // 10 11 (primitive)



// Reference types behave differently
let obj1 = { val: 1 };
let obj2 = obj1;
obj2.val = 2;
console.log(obj1.val); // 2 (reference)






// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object
