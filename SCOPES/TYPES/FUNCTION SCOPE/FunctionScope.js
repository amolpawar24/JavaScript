// =========================================================
//! FUNCTION SCOPE
// =========================================================
//
//todo: Function Scope determines where a variable can be
//todo: accessed within a function.
//
//todo: A variable declared inside a function can be accessed
//todo: only inside that function.
//
//* var follows Function Scope.
//* let and const are also accessible only within the
//* function when they are declared inside the function.
//
// =========================================================


// =========================================================
//! 1. var - FUNCTION SCOPED
// =========================================================
//
//todo: A variable declared using var inside a function
//todo: can be accessed anywhere inside that function.
//
//* var is Function Scoped.
//
// =========================================================

function varFunctionScope() {

    var name = "Amol";

    //todo: name can be accessed inside the function.
    console.log("var - Inside Function:", name);

}

varFunctionScope();

//todo: name cannot be accessed outside the function.
//
// console.log(name);
// ❌ ReferenceError: name is not defined



// =========================================================
//! 2. let - LOCAL TO FUNCTION
// =========================================================
//
//todo: A variable declared using let inside a function
//todo: can be accessed only within that function.
//
//* let is Block Scoped.
//* A function body is also a block.
//
// =========================================================

function letFunctionScope() {

    let age = 25;

    //todo: age can be accessed inside the function.
    console.log("let - Inside Function:", age);

}

letFunctionScope();

//todo: age cannot be accessed outside the function.
//
// console.log(age);
// ❌ ReferenceError: age is not defined



// =========================================================
//! 3. const - LOCAL TO FUNCTION
// =========================================================
//
//todo: A variable declared using const inside a function
//todo: can be accessed only within that function.
//
//* const is Block Scoped.
//* A function body is also a block.
//
// =========================================================

function constFunctionScope() {

    const city = "Solapur";

    //todo: city can be accessed inside the function.
    console.log("const - Inside Function:", city);

}

constFunctionScope();

//todo: city cannot be accessed outside the function.
//
// console.log(city);
// ❌ ReferenceError: city is not defined



// =========================================================
//! FUNCTION SCOPE WITH BLOCK
// =========================================================
//
//todo: var ignores the inner block and remains accessible
//todo: throughout the function.
//
//todo: let and const are limited to the block in which
//todo: they are declared.
//
// =========================================================

function scopeExample() {

    if (true) {

        var varValue = "var";
        let letValue = "let";
        const constValue = "const";

        console.log("Inside Block:", varValue);
        console.log("Inside Block:", letValue);
        console.log("Inside Block:", constValue);
    }

    //todo: varValue is accessible because var is
    //todo: Function Scoped.
    console.log("Outside Block - var:", varValue);

    //todo: letValue and constValue are NOT accessible
    //todo: because they are Block Scoped.

    // console.log("Outside Block - let:", letValue);
    // ❌ ReferenceError

    // console.log("Outside Block - const:", constValue);
    // ❌ ReferenceError
}

scopeExample();



// =========================================================
//! QUICK SUMMARY
// =========================================================
//
//? Function Scope
//
//todo: Function Scope means a variable is accessible
//todo: within the function where it is declared.
//
//? var
//* → Function Scoped.
//* → Accessible throughout the function.
//* → NOT limited to inner blocks.
//
//? let
//* → Block Scoped.
//* → If declared inside a function, accessible within
//*   that function's block.
//
//? const
//* → Block Scoped.
//* → If declared inside a function, accessible within
//*   that function's block.
//
// =========================================================