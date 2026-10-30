//! ARRAY USING LITERALS

    let array = [10,20,30,40,50,60,70];
    console.log(typeof array);
    console.log(array[0]);
    console.log(array[2]);
    console.log(array[3]);
    console.log(array[4]);
    console.log(array[5]);
    console.log(array[6]);
    console.log(array[7]);
    
//* We can also initialize the after Indexed in the Array & those array index we have not defined it will consider as Empty Element
//* After printed that array that it show empty and type of undefined.
//! After adding values it will updated in first printed array also in Console
//* Because the browser console read the whole code and then updated.
//* If you want check the Correct output then you have to use the Document.write() 

    let arr = [10, true, null, 'apple'];
    console.log(arr);
    console.log(arr.length);
    arr[7]="Amol";//Here we can directly define the array index after index value
    console.log(arr);
    console.log(arr.length);

//! In this if you add value after some indexes then that index is considered as undefined [ Which is Datatype in Javascript ]
    console.log("arr[9] : ",arr[9]);
    arr[9] = "Banana";
    console.log("arr[9] : ",arr[9]);
    console.log(arr);
    console.log(arr.length2);

//! Here we can Delete the value present in Array Indexes using the delete Keyword  -->
//* The delete keyword deleted the value but after deleted value the Array Length remains same.  -->
//* That deleted position the Js Engine or Interpreter adds the undefined value  -->
//! The delete keyword does not delete the Array Index Value it will deleted the value inside the index  -->

    let arrRef = [10, 20, 30, {name : "Amol", age: 24, proff : "SOftware Devloper"}, 50];
    arrRef[8] = {name : "Mango"};
    console.log("arrRef : ", arrRef);
    console.log(arrRef.length);
    delete arrRef[3];
    console.log(arrRef[3]);
    console.log(arrRef[6]);
    
    
    
    
    
    
    
    


