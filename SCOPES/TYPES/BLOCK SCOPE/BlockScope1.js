// =========================================================
//! BLOCK SCOPE
// =========================================================

//todo: Block Scope means a variable declared inside { }
//todo: can be accessed only within that block.

//* let and const are Block Scoped.
//* var is NOT Block Scoped.


// =========================================================
//! Example 1 - var
// =========================================================

{
    var name = "Amol";

    console.log("Inside Block:", name);
}

console.log("Outside Block:", name);


// =========================================================
//! Example 2 - let
// =========================================================

{
    let age = 25;

    console.log("Inside Block:", age);
}

// console.log("Outside Block:", age);
// ❌ ReferenceError


// =========================================================
//! Example 3 - const
// =========================================================

{
    const city = "Solapur";

    console.log("Inside Block:", city);
}

// console.log("Outside Block:", city);
// ❌ ReferenceError