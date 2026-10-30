//!  slice  -->
//*  The slice() method slices out a piece of an array into a new array: 
//*  The slice() method does not change the original array. 
//*  The slice() method can take two parameters: 
//*  start (optional): The zero-based index at which to start extracting from the array. 
//*  end (optional): The zero-based index before which to end extracting. 


    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const citrus = fruits.slice(1);
    console.log("fruits : ",fruits);
    
    console.log("citrus: ",citrus);

    const arr1 = fruits.slice(1,3);
    console.log("arr1 : ",arr1);
    
    