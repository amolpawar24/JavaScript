//****************************************************************************************************************************************** 
//! ====================================================== MAP METHOD =====================================================================
//******************************************************************************************************************************************* 

//! Map() method is used to iterate the Array Element along with we can Modify the Array element
//* The for loop is only iterate the elements it does not modify the Array Elements
//? Syntax : map(elements,Index value)
//* The map() method accept only two parameter 1.Elements 2.Index Value    
//! Inside the map method we have pass the Arrow Function  
//* The map() method does not execute the function for array elements that are undefined or null.  
//* The map() method does not execute the function for array elements that are of primitive data types (such as numbers, strings, booleans, etc.).  
//* The map() method does not execute the function for array elements that are functions.  
//* The map() method does not execute the function for array elements that are objects (including those created using the Object() constructor).  
//* The map() method does not execute the function for array elements that are arrays.  
//* The map() method does not execute the function for array elements that are sparse (i.e., with non-integer indices). 

    let fname = ["Ajay","Vijay","Sanjay","Dhanjay","Digvijay","Jay"]
    console.log("fname : ",fname);

    let fullName = fname.map((data) =>{
        return data + "Chavan";
    })
    console.log("FullName : ",fullName);
    
    
