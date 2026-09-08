console.log(0/0); // Output: NaN
console.log(Math.sqrt(-1)); // Output: NaN
console.log(parseInt("Hello")); // Output: NaN
console.log("abc" * 3);// Output: NaN

//! NaN === NaN
//* In JavaScript, NaN is not equal to itself. This means that if you compare NaN with NaN using the equality operator (==) or the strict equality operator (===), it will return false.

console.log("NaN === NaN",NaN === NaN);

// ! Checking for NaN
//* To check if a value is NaN, you can use the built-in function isNaN() or the Number.isNaN() method.

//? 1. Using isNaN()
//* The isNaN() function checks if a value is NaN or can be coerced to NaN. It returns true for values that are not numbers or cannot be converted to numbers.
// * However, it can sometimes give unexpected results because it tries to convert the value to a number before checking if it's NaN. 
console.log("isNaN('Hello')",isNaN('Hello')); 

// ? 2. Using Number.isNaN()
//* The Number.isNaN() method is a more reliable way to check for NaN. It returns true only if the value is actually NaN and does not perform any type coercion.
//* This means that it will return false for values that are not numbers, even if they cannot be converted to numbers.  
console.log("Number.isNaN('Hello')",Number.isNaN('Hello'));

