// =========================================================
//! VARIABLE HOISTING
// =========================================================

//todo: Variable declarations are processed before
//todo: code execution.

//* var → Hoisted and initialized with undefined.
//* let → Hoisted but remains in Temporal Dead Zone.
//* const → Hoisted but remains in Temporal Dead Zone.


// =========================================================
//! Example 1 - var
// =========================================================

console.log(name); // undefined

var name = "Amol";

console.log(name); // Amol



// =========================================================
//! Example 2 - let
// =========================================================

// console.log(age);
// ❌ ReferenceError

let age = 25;

console.log(age); // 25



// =========================================================
//! Example 3 - const
// =========================================================

// console.log(city);
// ❌ ReferenceError

const city = "Solapur";

console.log(city); // Solapur