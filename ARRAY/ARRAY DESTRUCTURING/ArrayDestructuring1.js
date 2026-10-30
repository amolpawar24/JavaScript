//! Array DESTRUCTURING
//? Steps To Array Destructuring  
//*  1.First we have to create the array and assign to the ArrayReference Variable  
//*  2.Then we have Create a values take inside the Square Brackets and Assign to the Variable[ var,let,const]. That considered as one Variable
//*  3.That Variable have initialized with Array Reference Variable
//!  To Access That Array Values
//todo :  To access that Array Value we have to direct print that value  
//?  For e.g.:- console.log(value1) 
    

    let arr = ["Amol", 24, true, null, 'a'];

    let [value1, value2, value3, value4, value5, value6] = arr;
    // That considered as One Variable = arr 
    //That Array Values is initialized with Inside [Value1,Value2,Value3,Value4] values.
    //We can directly print that values inside the console.

    console.log("value1 : ",value1);
    console.log("value2 : ",value2);
    console.log("value3 : ",value3);
    console.log("value4 : ",value4);
    console.log("value5 : ",value5);
    console.log("value6 : ",value6);
    

