// =========================================================
//! SCOPE IN JAVASCRIPT
// =========================================================
//
//todo: Scope determines where a variable can be accessed
//todo: in a JavaScript program.
//
// =========================================================
//! TYPES OF SCOPE
// =========================================================
//
//? 1. Block Scope
//? 2. Function Scope
//? 3. Global Scope
//? 4. Local Scope
//? 5. Lexical Scope
//
// =========================================================


// =========================================================
//! 1. BLOCK SCOPE
// =========================================================
//
//todo: A variable declared inside a block { } can be accessed
//todo: only within that block.
//
//todo: A block is created using curly braces { }.
//
//* let is Block Scoped.
//* const is Block Scoped.
//* var is NOT Block Scoped.
//
// =========================================================

{
    let blockName = "Amol";
    const blockAge = 25;

    //todo: let and const can be accessed inside the block.
    console.log("Block Scope:", blockName);
    console.log("Block Scope:", blockAge);
}

//* let and const cannot be accessed outside the block.

// console.log(blockName); // ❌ ReferenceError
// console.log(blockAge);  // ❌ ReferenceError



// =========================================================
//! 2. FUNCTION SCOPE
// =========================================================
//
//todo: A variable declared inside a function can be accessed
//todo: only within that function.
//
//* var is Function Scoped.
//
//todo: A function creates its own scope.
//
// =========================================================

function functionScopeExample() {

    var functionName = "Amol";

    //todo: functionName can be accessed inside the function.
    console.log("Function Scope:", functionName);
}

functionScopeExample();

//* functionName cannot be accessed outside the function.

// console.log(functionName); // ❌ ReferenceError



// =========================================================
//! 3. GLOBAL SCOPE
// =========================================================
//
//todo: A variable declared outside any function or block
//todo: is called a Global variable.
//
//todo: A Global variable can be accessed from different
//todo: parts of the program.
//
//* Global Scope is the outermost scope.
//
// =========================================================

var globalName = "Amol";

function globalScopeExample() {

    //todo: The function can access the Global variable.
    console.log("Global Scope:", globalName);
}

globalScopeExample();

//todo: The Global variable can also be accessed here.
console.log("Global Scope:", globalName);



// =========================================================
//! 4. LOCAL SCOPE
// =========================================================
//
//todo: A variable that can be accessed only within a
//todo: particular function or block is called a Local variable.
//
//todo: Local Scope is a general term used for variables
//todo: that are limited to a particular area of the program.
//
//* Function Scope is a type of Local Scope.
//* Block Scope is also a type of Local Scope.
//
// =========================================================

function localScopeExample() {

    let localName = "Amol";

    //todo: localName can be accessed inside the function.
    console.log("Local Scope:", localName);
}

localScopeExample();

//* localName cannot be accessed outside the function.

// console.log(localName); // ❌ ReferenceError



// =========================================================
//! 5. LEXICAL SCOPE
// =========================================================
//
//todo: Lexical Scope means an inner function can access
//todo: variables from its outer or parent scope.
//
//todo: Lexical Scope is determined by where the code is
//todo: written in the program.
//
//* Inner Scope can access Outer Scope.
//* Outer Scope cannot directly access Inner Scope.
//
//todo: Lexical Scope is also the foundation of Closures.
//
// =========================================================

let outerName = "Amol";

function outerFunction() {

    let outerAge = 25;

    function innerFunction() {

        //todo: innerFunction can access variables from
        //todo: its outer function.
        console.log("Lexical Scope:", outerName);
        console.log("Lexical Scope:", outerAge);
    }

    innerFunction();
}

outerFunction();



// =========================================================
//! QUICK SUMMARY
// =========================================================
//
//? Block Scope
//* → Scope limited to { } block.
//* → let and const are Block Scoped.
//* → var is NOT Block Scoped.
//
//? Function Scope
//* → Scope limited to a function.
//* → var follows Function Scope.
//
//? Global Scope
//* → Variable declared outside functions and blocks.
//* → Can be accessed throughout the program.
//
//? Local Scope
//* → Variable accessible only within its local area.
//* → Function Scope and Block Scope are examples.
//
//? Lexical Scope
//* → Inner scope can access variables from Outer Scope.
//* → Based on where the code is written.
//
// =========================================================