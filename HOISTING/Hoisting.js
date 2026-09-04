// =========================================================
//! HOISTING IN JAVASCRIPT
// =========================================================
//
//todo: Hoisting is JavaScript's behavior where declarations
//todo: are processed before the code is executed.
//
//* var declarations are hoisted and initialized with undefined.
//* let and const declarations are hoisted but remain in the
//*   Temporal Dead Zone (TDZ) until their declaration is reached.
//* Function declarations are hoisted with their function body.
//
// =========================================================


// =========================================================
//! Example 1 - var Hoisting
// =========================================================

console.log(varName); // undefined

var varName = "Amol";

console.log(varName); // Amol



// =========================================================
//! Example 2 - let Hoisting
// =========================================================

// console.log(letName);
// ❌ ReferenceError: Cannot access 'letName' before initialization

let letName = "Amol";

console.log(letName); // Amol



// =========================================================
//! Example 3 - const Hoisting
// =========================================================

// console.log(constName);
// ❌ ReferenceError: Cannot access 'constName' before initialization

const constName = "Amol";

console.log(constName); // Amol



// =========================================================
//! Example 4 - Function Hoisting
// =========================================================

sayHello();

function sayHello() {
    console.log("Hello Amol");
}



// =========================================================
//! Example 5 - Combined Example
// =========================================================

console.log(user); // undefined

var user = "Amol";

showMessage();

function showMessage() {
    console.log("JavaScript Hoisting");
}

let age = 25;
const city = "Solapur";

console.log(user);
console.log(age);
console.log(city);



// =========================================================
//! QUICK SUMMARY
// =========================================================
//
//? var
//* → Declaration is hoisted.
//* → Initialized with undefined.
//* → Can be accessed before declaration without ReferenceError.
//
//? let
//* → Declaration is hoisted.
//* → Remains in Temporal Dead Zone (TDZ).
//* → Cannot be accessed before declaration.
//
//? const
//* → Declaration is hoisted.
//* → Remains in Temporal Dead Zone (TDZ).
//* → Cannot be accessed before declaration.
//
//? Function Declaration
//* → Function declaration and body are hoisted.
//* → Can be called before its declaration.
//
// =========================================================