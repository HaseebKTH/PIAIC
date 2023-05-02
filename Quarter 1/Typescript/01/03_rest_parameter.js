"use strict";
function Greet(greeting, ...names) {
    return greeting + " " + names.join(", ") + "!";
}
console.log(Greet("Hello", "Amir", "Ali", "Umar")); // returns "Hello Steve, Bill!"
console.log(Greet("Hello")); // returns "Hello !"
