console.log("[] + []",[] + []);// Output: "" (an empty string)
console.log("[] + {}",[] + {});// Output: "[object Object]"
console.log("{} + []",{}+[]);// Output : "[Object Object]"
console.log("{} + {}",{}+{});// Output: "[Object Object][Object Object]"
console.log("[] == ![]",[] == ![]);// Output: true
console.log("[] === ![]",[] === ![]);// Output: false

console.log("true == 1",true == 1);// Output: true
console.log("true === 1",true === 1);// Output: false
console.log("true + true",true+true);// Output: 2
console.log("true + false",true+false);// Output: 1

console.log("false == 0",false == 0);// Output: true
console.log("false === 0",false === 0);// Output: false
console.log("false + false",false + false);// Output: 0
console.log("false + true",false + true);// Output: 1
console.log("false == null",false == null);// Output: false
console.log("false === null",false === null); // Output: false
console.log("false == undefined",false == undefined); // Output: false
console.log("false === undefined",false === undefined); // Output: false
console.log("false != 0",false != 0);// Output: false
console.log("false !== 0",false !== 0);//Output: true
console.log("false !== 1",false !== 1);// Output: true

console.log("false !== false",false !== false);// Output: false

console.log("[] == false",[] == false);// Output: true
console.log("[] === false",[] === false);// Output: false
console.log("{} == false",{} == false);// Output: false
console.log("{} === false",{} === false);// Output: false

console.log("null == undefined",null == undefined);// Output: true
console.log("null === undefined",null === undefined);// Output: false
console.log("null == 0",null == 0);// Output: false
console.log("null === 0",null === 0); // Output: false
console.log("undefined == null",undefined == null);// Output: true
console.log("undefined === null",undefined === null);// Output: false
console.log("null + 1",null + 1);// Output: 1
console.log("undefined + 1",undefined + 1);// Output: NaN

console.log("undefined == 0",undefined == 0);// Output: false
console.log("undefined === 0",undefined === 0);// Output: false

console.log("NaN == NaN",NaN == NaN);
console.log("NaN === NaN",NaN === NaN);

console.log("5 + '5'",5 + '5');// Output: "55"
console.log("'5' - 2",'5' - 2);// Output: 3
console.log("'5' * 2",'5' * 2);// Output: 10


