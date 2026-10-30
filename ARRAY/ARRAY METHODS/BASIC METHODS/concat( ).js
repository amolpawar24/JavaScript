//!  concat()  
//todo :  It is used to concat (Merge) the more than one array into a Single Array.  
//?  arrayName1.concat(arrayName2)  
//*  First you need to declare the array then call the concat() method pass the second array to merge    

    let arr1 = [10, 20, 30, 40, 50];
    let arr2 = [60, 70, 80, 90, 100];

    console.log("arr1 + arr2: ",arr1.concat(arr2));

    let arr3 = [110, 120, 130, 140, 150];
    console.log("arr1 + arr2 + arr3: ",arr1.concat(arr2, arr3));
    
    