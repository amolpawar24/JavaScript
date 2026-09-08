//! Primitive Datatypes in JavaScript
//* In JavaScript, there are six primitive data types: string, number, boolean, null, undefined, and symbol. 
//* Primitive means single value, and they are not objects. They are stored directly in the variable and accessed by value.
//* Primitive values are Immutable, which means that they cannot be changed. 
    let a=10; // a is assigned the value 10
    let b= a; // b is assigned the value of a, which is 10
    b=20; // b is now assigned a new value, which is 20
    console.log("a :",a); // Output: 10
    console.log("b :",b); // Output: 20

//* Primitives values are replaced when you try to change them. When you perform an operation on a primitive value, it creates a new value rather than modifying the existing one.

    let str = "Hello";
    str[0] = "a"; // This does not change the original string
    console.log("str :",str); // Output: "Hello" 