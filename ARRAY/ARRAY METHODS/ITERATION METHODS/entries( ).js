//!  entries() 
//*  The entries() method returns an Array Iterator object with key/value pairs. 

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const res = fruits.entries();
    console.log("res : ",res);
    
    for ( let x of res){
        console.log(x);
        
    }