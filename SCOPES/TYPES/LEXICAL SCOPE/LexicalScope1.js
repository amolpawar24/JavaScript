// =========================================================
//! LEXICAL SCOPE
// =========================================================

//todo: Lexical Scope means an inner scope can access
//todo: variables from its outer scope.

//* Inner Scope can access Outer Scope.
//* Outer Scope cannot directly access Inner Scope.


// =========================================================
//! Example 1 - Outer Function
// =========================================================

function outerExample() {
    let name = "Amol";

    function innerExample() {
        console.log("Name:", name);
    }

    innerExample();
}

outerExample();


// =========================================================
//! Example 2 - Multiple Outer Scopes
// =========================================================

let country = "India";

function outerFunction() {
    let city = "Solapur";

    function innerFunction() {
        let language = "JavaScript";

        console.log("Language:", language);
        console.log("City:", city);
        console.log("Country:", country);
    }

    innerFunction();
}

outerFunction();