// =========================================================
//! LOCAL SCOPE
// =========================================================

//todo: Local Scope means a variable can be accessed only
//todo: within the scope where it is declared.

//* Function Scope and Block Scope are examples of Local Scope.


// =========================================================
//! Example 1 - Function
// =========================================================

function userExample() {
    let name = "Amol";

    console.log("Name:", name);
}

userExample();

// console.log(name);
// ❌ ReferenceError



// =========================================================
//! Example 2 - Block
// =========================================================

{
    let age = 25;

    console.log("Age:", age);
}

// console.log(age);
// ❌ ReferenceError