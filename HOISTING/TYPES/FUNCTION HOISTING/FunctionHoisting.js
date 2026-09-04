// =========================================================
//! FUNCTION HOISTING
// =========================================================

//todo: Function declarations are completely hoisted.
//todo: Therefore, a function can be called before
//todo: its declaration.


// =========================================================
//! Example 1
// =========================================================

sayHello();

function sayHello() {
    console.log("Hello Amol");
}


// =========================================================
//! Example 2
// =========================================================

calculateSum(10, 20);

function calculateSum(a, b) {
    console.log("Sum:", a + b);
}