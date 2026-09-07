//! STRICT MODE
//todo:- Strict Mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode". It intentionally has different semantics from normal code. Strict mode eliminates some JavaScript silent errors by changing them to throw errors. 
//todo:- It fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode. It also prohibits some syntax likely to be defined in future versions of ECMAScript.
//todo:- Strict mode applies to entire scripts or to individual functions. It doesn't apply to block statements enclosed in {} braces. Strict mode is declared by adding "use strict"; to the beginning of a script or a function. 
//todo:- It can be applied to the entire script or to individual functions. When applied to a function, it only affects that function's code and not the code outside of it.   
//todo:- Strict mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode". It intentionally has different semantics from normal code. 
//todo:- Strict mode eliminates some JavaScript silent errors by changing them to throw errors. 

//? Example of Strict Mode
"use strict"; // Enable strict mode
    
myVariable = 10; // This will throw an error because myVariable is not declared