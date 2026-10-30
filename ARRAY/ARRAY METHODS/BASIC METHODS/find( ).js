//!  find()  
//*  The find() returns only one element in the array  
//*  It checks according to the conditions weather it is first index or last index  

    let arr1 = [1,2,3,4,5,7,8,55,6,6,5,4,6,4,688,5,55];

    let num = arr1.find(myFunction)

    function myFunction(value, index, arr){
        return value > 5;
    }
    console.log(num);
    
