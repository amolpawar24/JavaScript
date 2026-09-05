// ==========================================
// var, let and const - Block Scope Example
// ==========================================

// ------------------------------------------
// 1. var
// ------------------------------------------

{
    var varName = "Amol";

    console.log("var - Inside Block:", varName);
}

// var is NOT block-scoped.
// Therefore, it can be accessed outside the block.
console.log("var - Outside Block:", varName);


// ------------------------------------------
// 2. let
// ------------------------------------------

{
    let letName = "Amol";

    console.log("let - Inside Block:", letName);
}

// let IS block-scoped.
// Therefore, it cannot be accessed outside the block.

// console.log("let - Outside Block:", letName);
// ❌ ReferenceError: letName is not defined


// ------------------------------------------
// 3. const
// ------------------------------------------

{
    const constName = "Amol";

    console.log("const - Inside Block:", constName);
}

// const IS block-scoped.
// Therefore, it cannot be accessed outside the block.

// console.log("const - Outside Block:", constName);
// ❌ ReferenceError: constName is not defined