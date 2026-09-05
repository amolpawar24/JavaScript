// =========================================================
//! FUNCTION SCOPE
// =========================================================

//todo: Function Scope means a variable declared inside
//todo: a function can be accessed only within that function.

//* var is Function Scoped.
//* let and const are Block Scoped.


// =========================================================
//! Example 1 - var
// =========================================================

function varExample() {
    var name = "Amol";

    console.log("Inside Function:", name);
}

varExample();

// console.log(name);
// ❌ ReferenceError



// =========================================================
//! Example 2 - let
// =========================================================

function letExample() {
    let age = 25;

    console.log("Inside Function:", age);
}

letExample();

// console.log(age);
// ❌ ReferenceError



// =========================================================
//! Example 3 - const
// =========================================================

function constExample() {
    const city = "Solapur";

    console.log("Inside Function:", city);
}

constExample();

// console.log(city);
// ❌ ReferenceError