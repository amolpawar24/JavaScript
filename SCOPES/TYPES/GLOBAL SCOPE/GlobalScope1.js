// =========================================================
//! GLOBAL SCOPE
// =========================================================

//todo: Global Scope means a variable declared outside
//todo: a function or block can be accessed throughout
//todo: its surrounding script or module.


// =========================================================
//! Example 1 - var
// =========================================================

var name = "Amol";

console.log("Global var:", name);

function varExample() {
    console.log("Inside Function:", name);
}

varExample();


// =========================================================
//! Example 2 - let
// =========================================================

let age = 25;

console.log("Global let:", age);

function letExample() {
    console.log("Inside Function:", age);
}

letExample();


// =========================================================
//! Example 3 - const
// =========================================================

const city = "Solapur";

console.log("Global const:", city);

function constExample() {
    console.log("Inside Function:", city);
}

constExample();