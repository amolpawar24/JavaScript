//!  charAt()
//todo : The charAt() method returns the character at a specified index in a string. 
//todo : The index of the first character is 0, the second character is 1, and so on. 
//todo : If the index is out of range, it returns an empty string.  
//? Syntax: string.charAt(index)

    let str = "Hello World";
    console.log("str : ", str);// Output: Hello World
    console.log("Character at index 0 : ", str.charAt(0));// Output: H

//? It cannot accepts negative index and index greater than or equal to the length of the string.
//? It return the empty string when value is out of range or Negative. 
    let text = "Amol Pawar";
    console.log("text : ", text); // Output: Amol Pawar
    console.log("length of text: ",text.length);
    console.log("Character at index 0 : ", text.charAt(0)); // Output: A
    console.log("Character at index -1 : ", text.charAt(-1)); // Output: "" (empty string)
    console.log("Character at index 11 : ", text.charAt(11));// Output: "" (empty string) because the length of the string is 11