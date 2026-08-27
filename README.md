# JavaScript

A comprehensive JavaScript learning repository covering **JavaScript fundamentals, ES6+, DOM manipulation, asynchronous programming, modern JavaScript features, and advanced concepts** with practical examples.

This repository is designed as a structured reference for learning, practicing, and revising JavaScript from **beginner to advanced level**.

---

## 📚 Table of Contents

* [Introduction](#-introduction)
* [What is JavaScript?](#-what-is-javascript)
* [Features of JavaScript](#-features-of-javascript)
* [JavaScript Environment](#-javascript-environment)
* [JavaScript Syntax](#-javascript-syntax)
* [Variables](#-variables)

  * [`var`](#var)
  * [`let`](#let)
  * [`const`](#const)
* [Data Types](#-data-types)

  * [Primitive Data Types](#primitive-data-types)
  * [Non-Primitive Data Types](#non-primitive-data-types)
* [Type Conversion](#-type-conversion)
* [Type Coercion](#-type-coercion)
* [Operators](#-operators)
* [Conditional Statements](#-conditional-statements)
* [Loops](#-loops)
* [Functions](#-functions)
* [Arrow Functions](#-arrow-functions)
* [Scope](#-scope)

  * [Global Scope](#global-scope)
  * [Function Scope](#function-scope)
  * [Block Scope](#block-scope)
  * [Lexical Scope](#lexical-scope)
* [Hoisting](#-hoisting)
* [Temporal Dead Zone](#-temporal-dead-zone)
* [Closures](#-closures)
* [Strings](#-strings)
* [String Methods](#-string-methods)
* [Arrays](#-arrays)
* [Array Methods](#-array-methods)

  * [`map()`](#map)
  * [`filter()`](#filter)
  * [`reduce()`](#reduce)
  * [`forEach()`](#foreach)
  * [`find()`](#find)
  * [`findIndex()`](#findindex)
  * [`some()`](#some)
  * [`every()`](#every)
  * [`sort()`](#sort)
  * [`slice()`](#slice)
  * [`splice()`](#splice)
* [Objects](#-objects)
* [Object Methods](#-object-methods)
* [Destructuring](#-destructuring)
* [Spread Operator](#-spread-operator)
* [Rest Parameter](#-rest-parameter)
* [Template Literals](#-template-literals)
* [Default Parameters](#-default-parameters)
* [Optional Chaining](#-optional-chaining)
* [Nullish Coalescing](#-nullish-coalescing)
* [Short-Circuit Evaluation](#-short-circuit-evaluation)
* [Date and Time](#-date-and-time)
* [Math Object](#-math-object)
* [JSON](#-json)
* [Error Handling](#-error-handling)
* [Callbacks](#-callbacks)
* [Higher-Order Functions](#-higher-order-functions)
* [Functional Programming](#-functional-programming)
* [Execution Context](#-execution-context)
* [Call Stack](#-call-stack)
* [Event Loop](#-event-loop)
* [Synchronous vs Asynchronous JavaScript](#-synchronous-vs-asynchronous-javascript)
* [Promises](#-promises)
* [Promise Methods](#-promise-methods)
* [Async/Await](#-asyncawait)
* [Fetch API](#-fetch-api)
* [DOM](#-dom)
* [DOM Selection](#-dom-selection)
* [DOM Manipulation](#-dom-manipulation)
* [Events](#-events)
* [Event Bubbling](#-event-bubbling)
* [Event Capturing](#-event-capturing)
* [Event Delegation](#-event-delegation)
* [Forms](#-forms)
* [ES6+ Features](#-es6-features)
* [Classes](#-classes)
* [Inheritance](#-inheritance)
* [Getters and Setters](#-getters-and-setters)
* [Modules](#-modules)
* [Map](#-map-object)
* [Set](#-set-object)
* [WeakMap](#-weakmap)
* [WeakSet](#-weakset)
* [Regular Expressions](#-regular-expressions)
* [Local Storage](#-local-storage)
* [Session Storage](#-session-storage)
* [Cookies](#-cookies)
* [Strict Mode](#-strict-mode)
* [this Keyword](#-this-keyword)
* [call, apply and bind](#-call-apply-and-bind)
* [Prototypes](#-prototypes)
* [Prototype Chain](#-prototype-chain)
* [Memory Management](#-memory-management)
* [Debouncing](#-debouncing)
* [Throttling](#-throttling)
* [JavaScript Best Practices](#-javascript-best-practices)
* [Folder Structure](#-folder-structure)
* [Learning Roadmap](#-learning-roadmap)
* [Resources](#-resources)
* [Author](#-author)
* [License](#-license)

---

# 🚀 Introduction

JavaScript is a high-level, dynamically typed programming language primarily used to create interactive and dynamic web applications.

JavaScript can run in:

* Web browsers
* Node.js
* Deno
* Bun
* Serverless environments
* Desktop applications
* Mobile applications

JavaScript is one of the core technologies of the web:

```text
HTML        → Structure
CSS         → Styling
JavaScript  → Behavior & Interactivity
```

---

# 📖 What is JavaScript?

JavaScript is a programming language that allows developers to add:

* Dynamic behavior
* User interactions
* Form validation
* Animations
* API communication
* DOM manipulation
* Asynchronous operations
* Web application logic

Example:

```javascript
const name = "Amol";

console.log(`Hello, ${name}!`);
```

Output:

```text
Hello, Amol!
```

---

# ✨ Features of JavaScript

* Lightweight
* Dynamically typed
* Interpreted/JIT compiled
* Object-oriented
* Functional programming support
* Event-driven
* Single-threaded execution model
* Asynchronous programming
* Prototype-based inheritance
* First-class functions
* Cross-platform
* Supports ES6+ modern features

---

# ⚙️ JavaScript Environment

JavaScript execution depends on a JavaScript engine.

Examples:

| Environment | Engine         |
| ----------- | -------------- |
| Chrome      | V8             |
| Edge        | V8             |
| Firefox     | SpiderMonkey   |
| Safari      | JavaScriptCore |
| Node.js     | V8             |

---

# 📝 JavaScript Syntax

```javascript
const message = "Hello JavaScript";

console.log(message);
```

Comments:

```javascript
// Single-line comment

/*
   Multi-line comment
*/
```

---

# 📦 Variables

Variables are used to store data.

JavaScript provides:

```javascript
var
let
const
```

---

## `var`

```javascript
var name = "Amol";
var age = 25;
```

Characteristics:

* Function scoped
* Can be redeclared
* Can be reassigned
* Hoisted and initialized with `undefined`

```javascript
var x = 10;
var x = 20;

console.log(x);
```

Output:

```text
20
```

---

## `let`

```javascript
let age = 25;

age = 26;
```

Characteristics:

* Block scoped
* Cannot be redeclared in the same scope
* Can be reassigned
* Hoisted but remains in the Temporal Dead Zone until declaration

---

## `const`

```javascript
const country = "India";
```

Characteristics:

* Block scoped
* Cannot be redeclared
* Cannot be reassigned
* Must be initialized during declaration

```javascript
const PI = 3.14;
```

### Important

`const` prevents reassignment of the variable binding, not mutation of an object or array.

```javascript
const user = {
    name: "Amol"
};

user.name = "Rahul";

console.log(user.name);
```

---

# 🔢 Data Types

JavaScript data types are divided into:

```text
Primitive
    ↓
Non-Primitive
```

---

## Primitive Data Types

JavaScript has seven traditional primitive types plus `BigInt`:

### 1. String

```javascript
const name = "Amol";
```

### 2. Number

```javascript
const age = 25;
const price = 99.99;
```

### 3. BigInt

```javascript
const bigNumber = 12345678901234567890n;
```

### 4. Boolean

```javascript
const isLoggedIn = true;
```

### 5. Undefined

```javascript
let value;

console.log(value);
```

### 6. Null

```javascript
const data = null;
```

### 7. Symbol

```javascript
const id = Symbol("id");
```

---

## Non-Primitive Data Types

The main reference type is:

```javascript
Object
```

Examples:

```javascript
const user = {
    name: "Amol",
    age: 25
};
```

```javascript
const numbers = [10, 20, 30];
```

Functions are also objects in JavaScript.

---

# 🔄 Type Conversion

Converting one data type into another.

### String

```javascript
const number = 100;

const result = String(number);
```

### Number

```javascript
const value = "100";

const result = Number(value);
```

### Boolean

```javascript
const value = 1;

const result = Boolean(value);
```

---

# 🔀 Type Coercion

JavaScript can automatically convert values during operations.

```javascript
console.log("5" + 2);
```

Output:

```text
52
```

But:

```javascript
console.log("5" - 2);
```

Output:

```text
3
```

---

# ➕ Operators

## Arithmetic Operators

```text
+
-
*
/
%
**
++
--
```

Example:

```javascript
let a = 10;
let b = 3;

console.log(a + b);
console.log(a % b);
console.log(a ** b);
```

---

## Assignment Operators

```text
=
+=
-=
*=
/=
%=
**=
```

---

## Comparison Operators

```text
==
===
!=
!==
>
<
>=
<=
```

Prefer strict equality:

```javascript
5 === "5"; // false
```

---

## Logical Operators

```text
&&
||
!
```

---

## Ternary Operator

```javascript
const age = 20;

const result = age >= 18 ? "Adult" : "Minor";
```

---

# 🔀 Conditional Statements

## if

```javascript
if (age >= 18) {
    console.log("Adult");
}
```

## if...else

```javascript
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

## else if

```javascript
if (marks >= 90) {
    console.log("A");
} else if (marks >= 75) {
    console.log("B");
} else {
    console.log("C");
}
```

## switch

```javascript
switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid day");
}
```

---

# 🔁 Loops

## for

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

## while

```javascript
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}
```

## do...while

```javascript
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 5);
```

## for...of

Used to iterate over iterable values.

```javascript
const numbers = [10, 20, 30];

for (const number of numbers) {
    console.log(number);
}
```

## for...in

Used to iterate over enumerable property keys.

```javascript
const user = {
    name: "Amol",
    age: 25
};

for (const key in user) {
    console.log(key, user[key]);
}
```

---

# 🧩 Functions

Functions are reusable blocks of code.

```javascript
function greet(name) {
    return `Hello ${name}`;
}

console.log(greet("Amol"));
```

---

# ➡️ Arrow Functions

```javascript
const add = (a, b) => {
    return a + b;
};
```

Short form:

```javascript
const add = (a, b) => a + b;
```

---

# 🎯 Scope

Scope determines where variables can be accessed.

JavaScript has several important scope concepts:

```text
Global Scope
Function Scope
Block Scope
Lexical Scope
Module Scope
```

---

## Global Scope

```javascript
const name = "Amol";

function greet() {
    console.log(name);
}
```

---

## Function Scope

```javascript
function test() {
    var value = 100;

    console.log(value);
}
```

`value` cannot be accessed outside the function.

---

## Block Scope

`let` and `const` are block scoped.

```javascript
if (true) {
    let name = "Amol";
    const age = 25;
}
```

The variables cannot be accessed outside the block.

---

## Lexical Scope

Inner functions can access variables from their outer lexical environment.

```javascript
function outer() {
    const message = "Hello";

    function inner() {
        console.log(message);
    }

    inner();
}
```

---

# 🚀 Hoisting

Hoisting is the behavior where declarations are processed before code execution within their scope.

### `var`

```javascript
console.log(x);

var x = 10;
```

Output:

```text
undefined
```

### `let`

```javascript
console.log(x);

let x = 10;
```

This causes a `ReferenceError` because `x` is in the Temporal Dead Zone.

### Function Declaration

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

Function declarations can be called before their declaration.

---

# ⏳ Temporal Dead Zone

The Temporal Dead Zone (TDZ) is the period between entering a scope and the point where a `let`, `const`, or `class` declaration is initialized.

```javascript
console.log(name);

let name = "Amol";
```

Result:

```text
ReferenceError
```

---

# 🔒 Closures

A closure occurs when a function retains access to variables from its surrounding lexical environment.

```javascript
function counter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const increment = counter();

console.log(increment());
console.log(increment());
```

Output:

```text
1
2
```

Closures are commonly used for:

* Data privacy
* Function factories
* Callbacks
* Event handlers
* Memoization

---

# 🔤 Strings

Strings represent textual data.

```javascript
const name = "JavaScript";
```

String literals:

```javascript
"Hello"
'Hello'
`Hello`
```

---

# 🔤 String Methods

```javascript
const text = "JavaScript";
```

Common methods:

```javascript
text.length
text.toUpperCase()
text.toLowerCase()
text.charAt(0)
text.includes("Script")
text.startsWith("Java")
text.endsWith("Script")
text.indexOf("Script")
text.slice(0, 4)
text.substring(0, 4)
text.replace("Java", "Type")
text.trim()
text.split("")
```

---

# 📚 Arrays

Arrays store multiple values.

```javascript
const numbers = [10, 20, 30, 40];
```

Access:

```javascript
console.log(numbers[0]);
```

Modify:

```javascript
numbers[0] = 100;
```

---

# 🛠️ Array Methods

## `push()`

Adds elements to the end.

```javascript
numbers.push(50);
```

## `pop()`

Removes the last element.

```javascript
numbers.pop();
```

## `shift()`

Removes the first element.

```javascript
numbers.shift();
```

## `unshift()`

Adds elements to the beginning.

```javascript
numbers.unshift(5);
```

---

## `map()`

Creates a new array by transforming every element.

```javascript
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(number => number * 2);

console.log(doubled);
```

Output:

```text
[2, 4, 6, 8]
```

---

## `filter()`

Creates a new array containing elements that satisfy a condition.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);
```

Output:

```text
[2, 4, 6]
```

---

## `reduce()`

Reduces an array to a single accumulated value.

```javascript
const numbers = [1, 2, 3, 4];

const total = numbers.reduce(
    (sum, number) => sum + number,
    0
);

console.log(total);
```

Output:

```text
10
```

Common uses:

* Sum
* Product
* Counting
* Grouping
* Creating objects
* Calculating totals

---

## `forEach()`

Executes a function for each array element.

```javascript
numbers.forEach(number => {
    console.log(number);
});
```

Unlike `map()`, `forEach()` is generally used for side effects and does not create a transformed array.

---

## `find()`

Returns the first matching element.

```javascript
const users = [
    { id: 1, name: "Amol" },
    { id: 2, name: "Rahul" }
];

const user = users.find(user => user.id === 2);
```

---

## `findIndex()`

Returns the index of the first matching element.

```javascript
const index = numbers.findIndex(number => number === 30);
```

---

## `some()`

Checks whether at least one element satisfies a condition.

```javascript
const result = numbers.some(number => number > 10);
```

---

## `every()`

Checks whether all elements satisfy a condition.

```javascript
const result = numbers.every(number => number > 0);
```

---

## `sort()`

Sorts an array in place.

For numbers:

```javascript
const numbers = [30, 5, 100, 20];

numbers.sort((a, b) => a - b);
```

Descending:

```javascript
numbers.sort((a, b) => b - a);
```

---

## `slice()`

Returns a shallow copy of a portion of an array without changing the original.

```javascript
const numbers = [10, 20, 30, 40];

const result = numbers.slice(1, 3);
```

---

## `splice()`

Adds, removes, or replaces elements and mutates the original array.

```javascript
numbers.splice(1, 1);
```

---

# 🧱 Objects

Objects store data using key-value pairs.

```javascript
const user = {
    name: "Amol",
    age: 25,
    role: "Developer"
};
```

Access properties:

```javascript
console.log(user.name);
console.log(user["age"]);
```

Modify:

```javascript
user.age = 26;
```

Add:

```javascript
user.city = "Pune";
```

Delete:

```javascript
delete user.city;
```

---

# 🛠️ Object Methods

## `Object.keys()`

```javascript
Object.keys(user);
```

## `Object.values()`

```javascript
Object.values(user);
```

## `Object.entries()`

```javascript
Object.entries(user);
```

## `Object.assign()`

```javascript
const result = Object.assign({}, user);
```

## `Object.freeze()`

Prevents modifications to an object.

```javascript
Object.freeze(user);
```

## `Object.seal()`

Prevents adding or deleting properties but allows modification of existing properties.

```javascript
Object.seal(user);
```

---

# 🎁 Destructuring

## Array Destructuring

```javascript
const numbers = [10, 20, 30];

const [a, b, c] = numbers;
```

## Object Destructuring

```javascript
const user = {
    name: "Amol",
    age: 25
};

const { name, age } = user;
```

---

# 📦 Spread Operator

The spread operator expands iterable elements or object properties.

### Arrays

```javascript
const first = [1, 2];
const second = [3, 4];

const combined = [...first, ...second];
```

### Objects

```javascript
const user = {
    name: "Amol"
};

const updatedUser = {
    ...user,
    age: 25
};
```

---

# ♻️ Rest Parameter

Rest collects multiple arguments into an array.

```javascript
function sum(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}
```

---

# 📝 Template Literals

```javascript
const name = "Amol";
const age = 25;

console.log(`My name is ${name} and I am ${age} years old.`);
```

Supports:

* String interpolation
* Multi-line strings
* Embedded expressions

---

# ⚙️ Default Parameters

```javascript
function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet();
```

---

# ❓ Optional Chaining

Prevents errors when accessing nested properties that may not exist.

```javascript
const city = user?.address?.city;
```

---

# 🔶 Nullish Coalescing

Uses a fallback only when the value is `null` or `undefined`.

```javascript
const username = null;

const result = username ?? "Guest";
```

---

# ⚡ Short-Circuit Evaluation

### AND

```javascript
isLoggedIn && showDashboard();
```

### OR

```javascript
const name = username || "Guest";
```

---

# 📅 Date and Time

```javascript
const date = new Date();

console.log(date);
```

Common methods:

```javascript
date.getFullYear()
date.getMonth()
date.getDate()
date.getDay()
date.getHours()
date.getMinutes()
date.getSeconds()
```

---

# 🧮 Math Object

```javascript
Math.round(4.6);
Math.floor(4.9);
Math.ceil(4.1);
Math.random();
Math.max(10, 20, 30);
Math.min(10, 20, 30);
Math.pow(2, 3);
Math.sqrt(25);
```

---

# 📄 JSON

JSON stands for **JavaScript Object Notation**.

Convert object to JSON:

```javascript
const jsonData = JSON.stringify(user);
```

Convert JSON to object:

```javascript
const objectData = JSON.parse(jsonData);
```

JSON is commonly used for:

* APIs
* Configuration
* Data storage
* Client-server communication

---

# 🚨 Error Handling

## try...catch

```javascript
try {
    riskyOperation();
} catch (error) {
    console.error(error);
}
```

## finally

```javascript
try {
    console.log("Try");
} catch (error) {
    console.log(error);
} finally {
    console.log("Always executes");
}
```

## throw

```javascript
throw new Error("Something went wrong");
```

---

# 📞 Callbacks

A callback is a function passed to another function.

```javascript
function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

greet("Amol", () => {
    console.log("Welcome!");
});
```

---

# 🔝 Higher-Order Functions

A higher-order function either:

* Accepts a function as an argument
* Returns a function

Example:

```javascript
function calculate(a, b, operation) {
    return operation(a, b);
}

const result = calculate(10, 5, (a, b) => a + b);
```

Examples in JavaScript:

```text
map()
filter()
reduce()
forEach()
find()
some()
every()
```

---

# 🧠 Functional Programming

Important concepts:

* Pure functions
* Immutability
* First-class functions
* Higher-order functions
* Function composition
* Avoiding unnecessary side effects

Example:

```javascript
const add = (a, b) => a + b;
```

---

# 🧩 Execution Context

JavaScript creates an execution context when code executes.

Important types:

```text
Global Execution Context
Function Execution Context
Eval Execution Context
```

Each execution context contains concepts such as:

* Variable environment
* Lexical environment
* `this` binding

---

# 📚 Call Stack

JavaScript uses a call stack to track function execution.

```javascript
function one() {
    two();
}

function two() {
    three();
}

function three() {
    console.log("Hello");
}

one();
```

Execution:

```text
one()
 ↓
two()
 ↓
three()
```

---

# 🔄 Event Loop

JavaScript uses an event loop to coordinate synchronous execution with asynchronous tasks.

Important components include:

```text
Call Stack
Web APIs / Host APIs
Task Queue
Microtask Queue
Event Loop
```

---

# ⚡ Synchronous vs Asynchronous JavaScript

### Synchronous

Operations execute sequentially.

```javascript
console.log("A");
console.log("B");
console.log("C");
```

### Asynchronous

Some operations complete later.

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

console.log("C");
```

Output:

```text
A
C
B
```

---

# 🤝 Promises

A Promise represents the eventual completion or failure of an asynchronous operation.

Promise states:

```text
Pending
Fulfilled
Rejected
```

Example:

```javascript
const promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});
```

---

# 🔗 Promise Methods

## `then()`

```javascript
promise.then(result => {
    console.log(result);
});
```

## `catch()`

```javascript
promise.catch(error => {
    console.error(error);
});
```

## `finally()`

```javascript
promise.finally(() => {
    console.log("Completed");
});
```

---

# 🚀 Async/Await

`async` and `await` provide a cleaner syntax for working with Promises.

```javascript
async function getData() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

---

# 🌐 Fetch API

Fetch is used to make HTTP requests.

```javascript
fetch("https://api.example.com/users")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

Using async/await:

```javascript
async function getUsers() {
    const response = await fetch(
        "https://api.example.com/users"
    );

    const data = await response.json();

    console.log(data);
}
```

HTTP methods:

```text
GET
POST
PUT
PATCH
DELETE
```

---

# 🌐 DOM

DOM stands for **Document Object Model**.

The browser represents HTML as a tree of objects.

```text
Document
   │
   └── HTML
       ├── HEAD
       └── BODY
```

JavaScript can use the DOM to:

* Select elements
* Change content
* Change styles
* Add/remove elements
* Handle events

---

# 🔍 DOM Selection

```javascript
document.getElementById("title");

document.getElementsByClassName("box");

document.getElementsByTagName("p");

document.querySelector(".box");

document.querySelectorAll(".box");
```

---

# 🛠️ DOM Manipulation

Change content:

```javascript
element.textContent = "Hello";
```

HTML:

```javascript
element.innerHTML = "<strong>Hello</strong>";
```

Attributes:

```javascript
element.setAttribute("class", "active");
```

Classes:

```javascript
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");
```

Create element:

```javascript
const div = document.createElement("div");

div.textContent = "Hello";

document.body.appendChild(div);
```

---

# 🖱️ Events

Common events:

```text
click
dblclick
mouseover
mouseout
mousemove
keydown
keyup
submit
change
input
focus
blur
load
```

Example:

```javascript
button.addEventListener("click", () => {
    console.log("Button clicked");
});
```

---

# 🫧 Event Bubbling

Events normally propagate from the target element upward through its ancestors.

```text
Child
  ↑
Parent
  ↑
Grandparent
```

---

# 🎯 Event Capturing

Capturing occurs from the outer ancestor toward the target.

```javascript
element.addEventListener(
    "click",
    handler,
    true
);
```

---

# 🧩 Event Delegation

Event delegation uses event bubbling to handle events from multiple child elements using one parent listener.

```javascript
list.addEventListener("click", event => {
    if (event.target.matches("li")) {
        console.log(event.target.textContent);
    }
});
```

Useful for dynamically created elements.

---

# 📝 Forms

JavaScript can handle:

* Input values
* Form submission
* Validation
* Error messages
* Reset operations

Example:

```javascript
form.addEventListener("submit", event => {
    event.preventDefault();

    console.log(input.value);
});
```

---

# 🌟 ES6+ Features

ECMAScript 2015 (ES6) introduced many modern JavaScript features.

Important ES6+ features include:

* `let`
* `const`
* Arrow functions
* Template literals
* Default parameters
* Destructuring
* Spread operator
* Rest parameters
* Classes
* Modules
* Promises
* `for...of`
* Symbols
* `Map`
* `Set`
* Generators
* Async/await
* Optional chaining
* Nullish coalescing

---

# 🏛️ Classes

Classes provide syntax for creating objects and defining methods.

```javascript
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

const user = new User("Amol", 25);

user.greet();
```

---

# 🧬 Inheritance

```javascript
class Animal {
    speak() {
        console.log("Animal speaks");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog barks");
    }
}

const dog = new Dog();

dog.speak();
dog.bark();
```

---

# 🔐 Getters and Setters

```javascript
class User {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}
```

---

# 📦 Modules

Modules allow JavaScript code to be separated into reusable files.

### Export

```javascript
export const name = "Amol";

export function greet() {
    console.log("Hello");
}
```

### Import

```javascript
import { name, greet } from "./user.js";
```

Default export:

```javascript
export default function greet() {
    console.log("Hello");
}
```

Import:

```javascript
import greet from "./user.js";
```

---

# 🗺️ Map Object

`Map` stores key-value pairs.

```javascript
const users = new Map();

users.set("name", "Amol");
users.set("age", 25);

console.log(users.get("name"));
```

Useful methods:

```javascript
set()
get()
has()
delete()
clear()
keys()
values()
entries()
```

---

# 🔹 Set Object

`Set` stores unique values.

```javascript
const numbers = new Set([1, 2, 2, 3, 3]);

console.log(numbers);
```

Output contains unique values:

```text
1, 2, 3
```

Methods:

```javascript
add()
has()
delete()
clear()
```

---

# 🧷 WeakMap

`WeakMap` stores weakly held object keys.

```javascript
const weakMap = new WeakMap();

const user = {};

weakMap.set(user, "Private Data");
```

---

# 🧷 WeakSet

`WeakSet` stores objects weakly.

```javascript
const weakSet = new WeakSet();

const user = {};

weakSet.add(user);
```

---

# 🔎 Regular Expressions

Regular expressions are used for pattern matching.

```javascript
const pattern = /javascript/i;

console.log(pattern.test("JavaScript"));
```

Common methods:

```javascript
test()
exec()
match()
replace()
search()
```

---

# 💾 Local Storage

Local Storage stores data in the browser.

```javascript
localStorage.setItem("name", "Amol");

const name = localStorage.getItem("name");

localStorage.removeItem("name");

localStorage.clear();
```

Objects must be serialized:

```javascript
localStorage.setItem(
    "user",
    JSON.stringify(user)
);
```

---

# 💾 Session Storage

Session Storage stores data for the current browser session.

```javascript
sessionStorage.setItem("name", "Amol");

sessionStorage.getItem("name");

sessionStorage.removeItem("name");

sessionStorage.clear();
```

---

# 🍪 Cookies

Cookies store small pieces of data associated with a web page.

```javascript
document.cookie = "username=Amol";
```

Cookies are commonly used for:

* Sessions
* Preferences
* Authentication-related state
* Tracking

---

# 🔒 Strict Mode

Strict mode enables stricter JavaScript behavior.

```javascript
"use strict";
```

It helps catch certain common programming mistakes.

---

# 🎯 `this` Keyword

The value of `this` depends on how a function is called.

Example:

```javascript
const user = {
    name: "Amol",

    greet() {
        console.log(this.name);
    }
};

user.greet();
```

Arrow functions do not create their own `this`; they capture it lexically from the surrounding scope.

---

# 📞 call(), apply() and bind()

## call()

```javascript
function greet(city) {
    console.log(this.name, city);
}

const user = {
    name: "Amol"
};

greet.call(user, "Pune");
```

## apply()

```javascript
greet.apply(user, ["Pune"]);
```

## bind()

```javascript
const boundFunction = greet.bind(user, "Pune");

boundFunction();
```

---

# 🧬 Prototypes

JavaScript uses prototype-based inheritance.

```javascript
const user = {
    name: "Amol"
};

console.log(Object.getPrototypeOf(user));
```

Objects can inherit properties and methods through their prototype chain.

---

# 🔗 Prototype Chain

When JavaScript cannot find a property directly on an object, it looks up the prototype chain.

```text
Object
   ↓
Prototype
   ↓
Object.prototype
   ↓
null
```

---

# 🧠 Memory Management

JavaScript automatically manages memory using garbage collection.

Basic lifecycle:

```text
Allocate Memory
       ↓
Use Memory
       ↓
No Longer Reachable
       ↓
Garbage Collection
       ↓
Memory Reclaimed
```

Avoid unnecessary references that keep objects reachable.

---

# ⏱️ Debouncing

Debouncing delays execution until a specified amount of time has passed without another event.

Common uses:

* Search inputs
* API calls
* Window resize
* Form validation

Concept:

```text
User types → wait → execute
```

---

# 🚦 Throttling

Throttling limits how frequently a function can execute.

Common uses:

* Scroll events
* Mouse movement
* Resize events
* Continuous user interactions

Concept:

```text
Many Events → Controlled Execution
```

---

# 🧪 Common JavaScript Concepts to Practice

Practice these concepts regularly:

```text
Variables
Data Types
Operators
Conditions
Loops
Functions
Scope
Hoisting
Closures
Arrays
Objects
String Methods
Array Methods
map()
filter()
reduce()
forEach()
find()
some()
every()
Destructuring
Spread
Rest
Callbacks
Promises
Async/Await
Fetch API
DOM
Events
Classes
Modules
Prototypes
this
```

---

# 📁 Recommended Folder Structure

```text
JavaScript/
│
├── 01-Basics/
│   ├── Introduction/
│   ├── Variables/
│   ├── Data-Types/
│   ├── Operators/
│   ├── Conditions/
│   └── Loops/
│
├── 02-Functions/
│   ├── Function-Declaration/
│   ├── Function-Expression/
│   ├── Arrow-Functions/
│   ├── Callback/
│   ├── Higher-Order-Functions/
│   └── Closures/
│
├── 03-Strings/
│   ├── String-Basics/
│   └── String-Methods/
│
├── 04-Arrays/
│   ├── Array-Basics/
│   ├── Array-Methods/
│   ├── map/
│   ├── filter/
│   ├── reduce/
│   ├── find/
│   └── sort/
│
├── 05-Objects/
│   ├── Object-Basics/
│   ├── Object-Methods/
│   ├── Destructuring/
│   └── Spread-Rest/
│
├── 06-ES6/
│   ├── let-const/
│   ├── Arrow-Functions/
│   ├── Template-Literals/
│   ├── Destructuring/
│   ├── Spread-Rest/
│   ├── Classes/
│   └── Modules/
│
├── 07-DOM/
│   ├── Selection/
│   ├── Manipulation/
│   ├── Events/
│   └── Forms/
│
├── 08-Asynchronous-JavaScript/
│   ├── Callbacks/
│   ├── Promises/
│   ├── Async-Await/
│   ├── Fetch-API/
│   └── Event-Loop/
│
├── 09-Advanced/
│   ├── Execution-Context/
│   ├── Hoisting/
│   ├── Scope/
│   ├── Closures/
│   ├── Prototypes/
│   ├── this/
│   ├── Call-Apply-Bind/
│   ├── Debouncing/
│   └── Throttling/
│
└── README.md
```

---

# 🛣️ JavaScript Learning Roadmap

```text
JavaScript Basics
       ↓
Variables & Data Types
       ↓
Operators
       ↓
Conditions & Loops
       ↓
Functions
       ↓
Arrays & Objects
       ↓
String & Array Methods
       ↓
Scope & Hoisting
       ↓
Closures
       ↓
ES6+
       ↓
DOM
       ↓
Events
       ↓
Callbacks
       ↓
Promises
       ↓
Async/Await
       ↓
Fetch API
       ↓
Event Loop
       ↓
Classes
       ↓
Modules
       ↓
Prototypes
       ↓
Advanced JavaScript
       ↓
Projects
       ↓
React / Node.js
```

---

# 💡 Best Practices

### Use `const` by default

```javascript
const name = "Amol";
```

Use `let` when reassignment is required.

```javascript
let count = 0;

count++;
```

Avoid unnecessary `var` in modern JavaScript.

---

### Use meaningful variable names

Bad:

```javascript
const x = 25;
```

Better:

```javascript
const userAge = 25;
```

---

### Prefer strict equality

```javascript
value === expectedValue;
```

instead of:

```javascript
value == expectedValue;
```

---

### Write reusable functions

```javascript
function calculateTotal(price, quantity) {
    return price * quantity;
}
```

---

### Avoid unnecessary mutation

Prefer creating new arrays/objects when appropriate.

```javascript
const updatedUser = {
    ...user,
    age: 26
};
```

---

### Handle asynchronous errors

```javascript
try {
    const data = await fetchData();
} catch (error) {
    console.error(error);
}
```

---

# 🧪 Practice Projects

Recommended projects for this repository:

* Calculator
* Digital Clock
* Counter
* To-Do List
* Quiz Application
* Weather Application
* Password Generator
* Form Validation
* Expense Tracker
* Notes Application
* Random Quote Generator
* GitHub User Search
* Movie Search Application
* Image Gallery
* Shopping Cart
* CRUD Application

---

# 🛠️ Technologies

This repository focuses on:

```text
JavaScript
ECMAScript
HTML
CSS
DOM
Browser APIs
Fetch API
ES6+
```

---

# 📚 Resources

Recommended resources:

* MDN Web Docs
* ECMAScript Specification
* JavaScript.info
* Node.js Documentation
* Web.dev

---

# 👨‍💻 Author

**Amol Pawar**

Computer Engineer | Frontend Developer | MERN Stack Developer

Focused on learning, building, and documenting modern web development.

---

# 🌱 Learning Philosophy

> Learn → Practice → Build → Document → Improve

This repository is part of my continuous journey of learning and practicing JavaScript and modern web development.

---

# ⭐ Support

If you find this repository useful:

* ⭐ Star the repository
* 🍴 Fork the repository
* 🧑‍💻 Practice the examples
* 📚 Use it as a JavaScript reference
* 🚀 Build projects using these concepts

---

# 📄 License

This project is licensed under the **MIT License**.

---

## 📌 Repository Status

🚧 **Actively Learning & Updating**

New JavaScript concepts, examples, exercises, and projects will be added regularly.

---

**Made with ❤️ while learning JavaScript.**
