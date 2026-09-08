//! Non-Primitive Datatypes in JavaScript
//* In JavaScript, there are three non-primitive data types: objects, arrays, and functions. These data types are mutable, meaning that their values can be changed after they are created.
//* Non-primitive data types are stored as references. When you assign a non-primitive value to a variable, the variable holds a reference to the value rather than the actual value itself. This means that when you modify a non-primitive value, you are modifying the original value that the variable references.
//* Non-Primitive values are mutable, which means that they can be changed. When you assign a non-primitive value to a variable, the variable holds a reference to the value, not the actual value itself. When you perform operations on non-primitive values, you are modifying the original value that the variable references.

    let obj1 = { name: "Amol" };
    let obj2 = obj1; // obj2 is assigned the reference to obj1
    obj2.name = "Pawar"; // This modifies the original object that obj1 references
    console.log(obj1);

    let obj3 ={
        name: "Amol",
        age: 25
    }

    let obj4 ={
        name: "Amol",
        age: 25
    }

    console.log("obj3 == obj4 : ",obj3 == obj4)
    console.log("obj3 === obj4 : ",obj3 === obj4)