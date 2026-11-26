//! Yes, map() can return undefined, but only when your callback function does not return a value.
//! Important point:
//* 👉 map() itself does not return undefined.
//* 👉 It always returns a new array.
//* 👉 But each element inside the array can be undefined if you don’t return anything for that iteration.
    let fname=["Ajay","Vijay","Sanjay","Dhanajay","Digvijay","Jay"]

    let nameIndex = fname.map((data, index)=>{
        if(index %2 == 0){
            return data + "Chavan"
        }
    })
    console.log("nameIndex : ", nameIndex);
    