// =========================================================
//! LOCAL SCOPE
// =========================================================
//
//todo: Local Scope means a variable can be accessed only
//todo: within the specific scope where it is declared.
//
//todo: A Local variable is not directly accessible outside
//todo: its local scope.
//
//* Function Scope can create Local Scope.
//* Block Scope can create Local Scope.
//
// =========================================================


// =========================================================
//! 1. LOCAL SCOPE INSIDE A FUNCTION
// =========================================================
//
//todo: A variable declared inside a function is local to
//todo: that function.
//
// =========================================================

function localFunctionExample() {

    let name = "Amol";

    //todo: name can be accessed inside the function.
    console.log("Inside Function:", name);
}

localFunctionExample();

//todo: name cannot be accessed outside the function.
//
// console.log(name);
// ❌ ReferenceError: name is not defined



// =========================================================
//! 2. LOCAL SCOPE WITH var
// =========================================================
//
//todo: A var variable declared inside a function is
//todo: Function Scoped.
//
//todo: It can be accessed anywhere inside that function.
//
// =========================================================

function varLocalExample() {

    var age = 25;

    //todo: age is accessible inside the function.
    console.log("var Local Variable:", age);
}

varLocalExample();

//todo: age cannot be accessed outside the function.
//
// console.log(age);
// ❌ ReferenceError: age is not defined



// =========================================================
//! 3. LOCAL SCOPE WITH let
// =========================================================
//
//todo: A let variable declared inside a function is local
//todo: to the function and follows Block Scope.
//
// =========================================================

function letLocalExample() {

    let city = "Solapur";

    //todo: city is accessible inside the function.
    console.log("let Local Variable:", city);
}

letLocalExample();

//todo: city cannot be accessed outside the function.
//
// console.log(city);
// ❌ ReferenceError: city is not defined



// =========================================================
//! 4. LOCAL SCOPE WITH const
// =========================================================
//
//todo: A const variable declared inside a function is local
//todo: to the function and follows Block Scope.
//
// =========================================================

function constLocalExample() {

    const country = "India";

    //todo: country is accessible inside the function.
    console.log("const Local Variable:", country);
}

constLocalExample();

//todo: country cannot be accessed outside the function.
//
// console.log(country);
// ❌ ReferenceError: country is not defined



// =========================================================
//! 5. LOCAL SCOPE INSIDE A BLOCK
// =========================================================
//
//todo: A block can also create a Local Scope.
//
//todo: Variables declared using let and const inside a block
//todo: are accessible only within that block.
//
// =========================================================

{
    let blockName = "Amol";
    const blockCity = "Solapur";

    //todo: Both variables are accessible inside the block.
    console.log("Block Local Variable:", blockName);
    console.log("Block Local Variable:", blockCity);
}

//todo: Variables declared inside the block cannot be
//todo: accessed outside the block.
//
// console.log(blockName);
// ❌ ReferenceError: blockName is not defined
//
// console.log(blockCity);
// ❌ ReferenceError: blockCity is not defined



// =========================================================
//! 6. LOCAL SCOPE WITH GLOBAL VARIABLE
// =========================================================
//
//todo: A Local Scope can access variables from its
//todo: Outer or Global Scope.
//
// =========================================================

let globalName = "Amol";

function localWithGlobalExample() {

    let localName = "Pawar";

    //todo: Local Scope can access the Global variable.
    console.log("Global Variable:", globalName);

    //todo: Local variable can also be accessed here.
    console.log("Local Variable:", localName);
}

localWithGlobalExample();



// =========================================================
//! 7. LOCAL VARIABLE CANNOT BE ACCESSED OUTSIDE
// =========================================================
//
//todo: A variable belongs to the scope in which it is
//todo: declared.
//
//todo: Code outside that scope cannot directly access
//todo: the Local variable.
//
// =========================================================

function employeeExample() {

    let employeeName = "Amol";

    console.log("Employee Name:", employeeName);
}

employeeExample();

//todo: employeeName is Local to employeeExample().
//
// console.log(employeeName);
// ❌ ReferenceError: employeeName is not defined



// =========================================================
//! QUICK SUMMARY
// =========================================================
//
//? Local Scope
//
//todo: Local Scope means a variable is accessible only
//todo: within its specific local scope.
//
//? Function Local Scope
//* → Variables declared inside a function.
//* → Accessible only inside that function.
//
//? Block Local Scope
//* → let and const declared inside a block.
//* → Accessible only inside that block.
//
//? var
//* → Function Scoped when declared inside a function.
//
//? let
//* → Block Scoped.
//
//? const
//* → Block Scoped.
//
//* Local Scope is a general concept.
//* Function Scope and Block Scope are specific forms
//* of local scope.
//
// =========================================================