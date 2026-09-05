// =========================================================
//! BLOCK SCOPE
// =========================================================
//
//todo: Block Scope determines where a variable can be
//todo: accessed within a block { }.
//
//todo: A block is created using curly braces { }.
//
//* let and const are Block Scoped.
//* var is NOT Block Scoped.
//
// =========================================================


// =========================================================
//! 1. var - NOT BLOCK SCOPED
// =========================================================
//
//todo: A variable declared using var inside a block
//todo: can be accessed outside that block.
//
//* var does NOT follow Block Scope.
//
// =========================================================

{
    var varName = "Amol";

    //todo: varName can be accessed inside the block.
    console.log("var - Inside Block:", varName);
}

//todo: varName can also be accessed outside the block.
console.log("var - Outside Block:", varName);



// =========================================================
//! 2. let - BLOCK SCOPED
// =========================================================
//
//todo: A variable declared using let inside a block
//todo: can be accessed only within that block.
//
//* let follows Block Scope.
//
// =========================================================

{
    let letName = "Amol";

    //todo: letName can be accessed inside the block.
    console.log("let - Inside Block:", letName);
}

//todo: letName cannot be accessed outside the block.
//
//* Uncomment the line below to see the error.

// console.log("let - Outside Block:", letName);
// ❌ ReferenceError: letName is not defined



// =========================================================
//! 3. const - BLOCK SCOPED
// =========================================================
//
//todo: A variable declared using const inside a block
//todo: can be accessed only within that block.
//
//* const follows Block Scope.
//
// =========================================================

{
    const constName = "Amol";

    //todo: constName can be accessed inside the block.
    console.log("const - Inside Block:", constName);
}

//todo: constName cannot be accessed outside the block.
//
//* Uncomment the line below to see the error.

// console.log("const - Outside Block:", constName);
// ❌ ReferenceError: constName is not defined



// =========================================================
//! QUICK SUMMARY
// =========================================================
//
//? var
//* → NOT Block Scoped.
//* → Can be accessed outside the block.
//
//? let
//* → Block Scoped.
//* → Cannot be accessed outside the block.
//
//? const
//* → Block Scoped.
//* → Cannot be accessed outside the block.
//
// =========================================================