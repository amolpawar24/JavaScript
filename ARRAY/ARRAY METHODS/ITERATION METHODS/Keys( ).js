//!  key()  
//*  It returns the Key of the element 
//*  The key() method returns the index of the element in the array. 
//*  The key() method does not take any arguments. 
//?  Notes: 
//?  The key() method raises TypeError when called on null or undefined. 
//?  The key() method does not change the original array. 
//*  The key() method does not take any arguments. 

    console.log("*************** This is Example 1 **************")
    const array1 = ['a', 'b', 'c'];
    const arr1 = array1.keys();
    for(const key of arr1){
        console.log(key);
    }

    console.log("*************** This is Example 2 **************")
    let languages = ["JavaScript", "Java", "C++", "Python"];

    let iterator = languages.keys();
    for(let key of iterator){
        console.log(key);
        
    }
