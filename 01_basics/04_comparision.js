// =====================Comparison Operators=========================
// 🧪 Weird Coercion Cases (Interview-Worthy)

console.log(false == 0);        // true
console.log(false === 0);       // false

console.log(null == undefined); // true
console.log(null === undefined);// false

console.log(" " == 0);          // true
console.log("" == false);       // true
console.log(" " === 0);         // false
console.log("" === false);      // false


// ---------------------------------------------------------------------------------------------------

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);