//! JavaScript — Why Is It Called Lightweight?

//* 1. What does "Lightweight" mean?
//todo: Lightweight means JavaScript is relatively simple and easy to execute.
//todo: It does not require a lot of code for performing common tasks.
//todo: JavaScript was designed to work efficiently, especially inside web browsers.

//* 2. Simple Syntax
//todo: JavaScript has a simple and easy-to-understand syntax.
var name = "Amol";
console.log(name);
//todo: Less code is required.
//todo: No complicated syntax is needed for basic operations.

//* 3. Dynamically Typed
//todo: In JavaScript, you don't need to specify the data type of a variable.

let value = 10;
value = "Hello";

//todo: The same variable can hold different types of values.

let age = 25;
let name = "Amol";
let isDeveloper = true;

//todo: So, JavaScript requires less boilerplate code.

//* 4. Automatic Memory Management
//todo:  JavaScript has Garbage Collection.
//todo:  You don't manually have to free memory.

let user = {
  name: "Amol"
};

user = null;
//todo: When an object is no longer needed or reachable, JavaScript's Garbage Collector can remove it from memory.

//* 5. JIT Compilation
//todo: Modern JavaScript engines use JIT (Just-In-Time) compilation.

//* For example:
//? JavaScript Code
    //   ↓
//? JavaScript Engine
    //   ↓
//? Optimization / JIT
    //   ↓
//? Machine Code
    //   ↓
//? Execution

//todo: This allows JavaScript to execute code efficiently.

//* 6. Runs Directly in the Browser
//todo: JavaScript engines are already built into modern browsers.

// Examples:
//? Chrome → V8
//? Firefox → SpiderMonkey
//? Safari → JavaScriptCore
//? Edge → V8

// todo :Therefore, users normally don't need to install a separate JavaScript runtime to execute JavaScript in a browser.

//* 7. Asynchronous Programming
//todo: JavaScript can perform tasks asynchronously.
//todo: For example:

fetch("/api/users");
console.log("Hello");

//todo: The browser can start the network request and continue executing other JavaScript instead of waiting for the request to finish.
//todo: This helps JavaScript build responsive web applications.

//* 8. Event-Driven

//todo: JavaScript works heavily with events.

// Examples:
//? Click
//? Keyboard input
//? Mouse movement
//? Form submission
//? API response
button.addEventListener("click", () => {
  console.log("Button clicked");
});

//todo: This makes JavaScript suitable for interactive websites.

//* 9. Less Boilerplate Code
//todo: JavaScript can accomplish many things with relatively little code.

// For example:

const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);
//todo: You don't need to write a large amount of code for this operation.

//* 10. Important: Lightweight ≠ Low Memory Usage

//todo: This is very important.
//todo: Lightweight does NOT mean JavaScript always uses very little RAM.

//? For example:

//todo: A small JavaScript program may use little memory.
//todo: A large React/Next.js application can use significant memory.
//todo: Node.js applications can also consume considerable RAM.
//todo: So, lightweight refers more to the language's simplicity and execution model, not a guarantee of low memory consumption.