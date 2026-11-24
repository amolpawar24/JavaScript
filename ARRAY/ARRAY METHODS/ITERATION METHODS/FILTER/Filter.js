//! ====================================================== FILTER METHOD =============================================
//* filter method is used to classify the data (filter the data)
//! filter method cannot modify Array 
//* filter method returns a new array with all elements that pass the test implemented by the provided function. -->
//* filter method does not change the original array. -->
//* filter method takes one argument : callback function. -->
//* callback function takes three arguments : currentValue, index, array  -->
//* callback function should return a boolean value. If true, the currentValue will be included in the new array. -->
//? Example : filter([1, 2, 3, 4, 5], (num) => num > 3) will return [4, 5]  -->
//! Notes : -->
// filter() method raises TypeError when called on null or undefined. -->
// filter() method does not change the original array.
//? Syntax : filter(Element,index)  -->
