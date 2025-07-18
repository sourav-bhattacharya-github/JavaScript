//  ============================================ Variables Declaration ============================================
//  JavaScript Variables: `var`, `let`, and `const`
//  - `var` is function-scoped and can lead to hoisting issues.
//  - `let` and `const` are block-scoped, with `const` being immutable.

// var
function test() {
  if (true) {
    var x = 10;
  }
  console.log(x); // ✅ 10 (function scoped)
}

// let
function test() {
  if (true) {
    let x = 10;
    console.log(x); // ✅ 10
  }
  //console.log(x); // ❌ ReferenceError
}

// const
const pi = 3.14;
//pi = 3.15; // ❌ TypeError: Assignment to constant variable











//----------------------------------------------------------------------------------------------------------------------
const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])