//  unShift()  
// todo : unShift() method is adds the element from the Starting (First) Index  
//*  It can add multiple elements at the starting 
//*  It returns the new length of the array  
//*  The original array remains unchanged 
//*  If you want to modify the original array then use push() method instead of unshift() 
//*  unshift() method is faster than push() method for adding elements at the starting 
//*  unshift() method is useful when you want to add elements at the starting of an array 
//*  It is useful when you want to add elements at the starting of an array 
//*  It is exact opposite of push() method 

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.unshift("Lemon");
    console.log(fruits);
    fruits.unshift("Pinapple", "Sapota")
    console.log(fruits);
    
