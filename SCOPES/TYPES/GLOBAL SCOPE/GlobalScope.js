// =========================================================
//! GLOBAL SCOPE
// =========================================================
//
//todo: Global Scope means a variable can be accessed from
//todo: different parts of a JavaScript program.
//
//todo: A variable declared outside any function or block
//todo: is in the Global Scope.
//
//* Global variables are accessible from other scopes,
//* such as Function Scope and Block Scope.
//
// =========================================================


// =========================================================
//! 1. var - GLOBAL SCOPE
// =========================================================
//
//todo: A var variable declared outside any function or block
//todo: becomes globally accessible.
//
// =========================================================

var globalVar = "Amol";

console.log("Global var:", globalVar);


//todo: The Global variable can be accessed inside a function.

function varGlobalExample() {

    console.log("Inside Function:", globalVar);

}

varGlobalExample();


//todo: The Global variable can also be accessed inside a block.

{
    console.log("Inside Block:", globalVar);
}



// =========================================================
//! 2. let - GLOBAL SCOPE
// =========================================================
//
//todo: A let variable declared outside any function or block
//todo: is also available throughout its surrounding script/module
//todo: scope.
//
//* let is Global Scoped here.
//* However, let does NOT become a property of the global
//* object in a browser like var does.
//
// =========================================================

let globalLet = "JavaScript";

console.log("Global let:", globalLet);


//todo: The Global let variable can be accessed inside
//todo: a function.

function letGlobalExample() {

    console.log("Inside Function:", globalLet);

}

letGlobalExample();


//todo: The Global let variable can also be accessed
//todo: inside a block.

{
    console.log("Inside Block:", globalLet);
}



// =========================================================
//! 3. const - GLOBAL SCOPE
// =========================================================
//
//todo: A const variable declared outside any function or block
//todo: is available throughout its surrounding script/module.
//
//* const is Global Scoped here.
//* const cannot be reassigned.
//
// =========================================================

const globalConst = "JavaScript";

console.log("Global const:", globalConst);


//todo: The Global const variable can be accessed inside
//todo: a function.

function constGlobalExample() {

    console.log("Inside Function:", globalConst);

}

constGlobalExample();


//todo: The Global const variable can also be accessed
//todo: inside a block.

{
    console.log("Inside Block:", globalConst);
}



// =========================================================
//! GLOBAL SCOPE WITH LOCAL VARIABLES
// =========================================================
//
//todo: A Global variable can be accessed inside a function,
//todo: but a Local variable cannot be accessed outside
//todo: its function.
//
// =========================================================

let globalName = "Amol";

function localExample() {

    let localName = "Pawar";

    //todo: Function can access the Global variable.
    console.log("Global Variable:", globalName);

    //todo: Function can access its own Local variable.
    console.log("Local Variable:", localName);
}

localExample();


//todo: Global variable can be accessed here.
console.log("Outside Function:", globalName);

//todo: Local variable cannot be accessed here.
//
// console.log(localName);
// ❌ ReferenceError: localName is not defined



// =========================================================
//! GLOBAL SCOPE WITH BLOCK SCOPE
// =========================================================
//
//todo: A Global variable can be accessed inside a block.
//
//todo: A variable declared using let or const inside the
//todo: block cannot be accessed outside that block.
//
// =========================================================

let globalCity = "Solapur";

{
    let blockCity = "Pune";

    //todo: Global variable is accessible inside the block.
    console.log("Global:", globalCity);

    //todo: Block variable is accessible inside the block.
    console.log("Block:", blockCity);
}

//todo: Global variable is still accessible outside the block.
console.log("Outside Block:", globalCity);

//todo: blockCity cannot be accessed outside the block.
//
// console.log(blockCity);
// ❌ ReferenceError: blockCity is not defined



// =========================================================
//! QUICK SUMMARY
// =========================================================
//
//? Global Scope
//
//todo: A variable declared outside any function or block
//todo: is available throughout its surrounding script/module.
//
//? var
//* → Can be declared in Global Scope.
//* → In a browser classic script, creates a property on
//*   the global object.
//
//? let
//* → Can be declared in Global Scope.
//* → Does NOT create a global-object property.
//
//? const
//* → Can be declared in Global Scope.
//* → Does NOT create a global-object property.
//* → Cannot be reassigned.
//
// =========================================================