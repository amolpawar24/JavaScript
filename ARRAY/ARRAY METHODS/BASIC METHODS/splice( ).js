//!  Splice()  
//* The splice() method can be used to add new items to an array 
//* The first parameter (2) defines the position where new elements should be added (spliced in). 
//* The second parameter (0) defines how many elements should be removed. 
//* The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added. 
//* The splice() method returns an array with the deleted items: 
//* splice method change the original array  

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits);
    
    fruits.splice(2, 0, "Lemon", "kiwi")
    console.log("fruits : ",fruits);

    const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
    console.log("fruits1 : ",fruits1);
    fruits1.splice(2, 2, "Lemon", "kiwi");
    console.log("fruits1 : ",fruits1);
    
    

    