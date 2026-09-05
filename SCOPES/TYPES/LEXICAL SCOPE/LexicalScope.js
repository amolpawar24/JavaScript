// =========================================================
//! LEXICAL SCOPE
// =========================================================
//
//todo: Lexical Scope means an inner scope can access variables from its outer scope.
//
//todo: Lexical Scope is determined by where the code is written, not where the function is called.
//
//* Inner Scope can access Outer Scope.
//* Outer Scope cannot directly access Inner Scope.
//
// =========================================================


// =========================================================
//! 1. BASIC LEXICAL SCOPE
// =========================================================
//
//todo: innerFunction() is written inside outerFunction().
//
//todo: Because of Lexical Scope, innerFunction() can access
//todo: variables declared inside outerFunction().
//
// =========================================================

function outerFunction() {

    let outerName = "Amol";

    function innerFunction() {

        //todo: innerFunction can access outerName because
        //todo: outerName belongs to its Outer Scope.
        console.log("Inner Function:", outerName);
    }

    innerFunction();
}

outerFunction();



// =========================================================
//! 2. MULTIPLE LEVELS OF LEXICAL SCOPE
// =========================================================
//
//todo: Lexical Scope can work through multiple levels.
//
//todo: The innermost function can access variables from
//todo: its parent scope and further outer scopes.
//
// =========================================================

let globalName = "Amol";

function outerLevel() {

    let outerName = "Pawar";

    function middleLevel() {

        let middleName = "JavaScript";

        function innerLevel() {

            //todo: innerLevel can access its own variable.
            console.log("Inner:", middleName);

            //todo: innerLevel can access the variable
            //todo: from its Parent Scope.
            console.log("Outer:", outerName);

            //todo: innerLevel can also access the Global
            //todo: variable from the outermost scope.
            console.log("Global:", globalName);
        }

        innerLevel();
    }

    middleLevel();
}

outerLevel();



// =========================================================
//! 3. LEXICAL SCOPE WITH BLOCK
// =========================================================
//
//todo: A block creates its own scope.
//
//todo: Code inside the block can access variables from
//todo: the outer scope.
//
// =========================================================

let outsideName = "Amol";

{
    let insideName = "Pawar";

    //todo: The block can access the variable from
    //todo: its Outer Scope.
    console.log("Outer Variable:", outsideName);

    //todo: The block can access its own variable.
    console.log("Block Variable:", insideName);
}

//todo: outsideName is accessible because it belongs to
//todo: the outer scope.
console.log("Outside Block:", outsideName);

//todo: insideName is NOT accessible outside the block.
//
// console.log(insideName);
// ❌ ReferenceError: insideName is not defined



// =========================================================
//! 4. LEXICAL SCOPE - OUTER CANNOT ACCESS INNER
// =========================================================
//
//todo: Lexical Scope works from Inner Scope to Outer Scope.
//
//todo: An Outer Scope cannot directly access variables
//todo: declared inside an Inner Scope.
//
// =========================================================

function parentFunction() {

    let parentName = "Amol";

    function childFunction() {

        let childName = "Pawar";

        //todo: Child can access Parent variable.
        console.log("Parent Variable:", parentName);

        //todo: Child can access its own variable.
        console.log("Child Variable:", childName);
    }

    childFunction();

    //todo: Parent cannot directly access Child variable.
//
//  console.log(childName);
//  ❌ ReferenceError: childName is not defined
}

parentFunction();



// =========================================================
//! 5. LEXICAL SCOPE AND CLOSURE
// =========================================================
//
//todo: Lexical Scope is one of the concepts that makes
//todo: Closures possible.
//
//todo: An inner function can remember and access variables
//todo: from its outer function even after the outer function
//todo: has finished executing.
//
// =========================================================

function createGreeting() {

    let name = "Amol";

    function greeting() {

        //todo: greeting() remembers the variable name
        //todo: from its Lexical Scope.
        console.log("Hello", name);
    }

    return greeting;
}

const greet = createGreeting();

greet();



// =========================================================
//! QUICK SUMMARY
// =========================================================
//
//? Lexical Scope
//
//todo: Lexical Scope determines variable accessibility
//todo: based on where the code is written.
//
//* Inner Scope can access Outer Scope.
//* Outer Scope cannot directly access Inner Scope.
//* Lexical Scope works through multiple nested levels.
//* Functions remember their Lexical Scope.
//* Lexical Scope is an important concept behind Closures.
//
// =========================================================