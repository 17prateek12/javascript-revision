'use strict'; // treat all JS code as newer version

//alert(3+3) we are using node js run time not browser so error will be: ReferenceError: alert is not defined

// console.log(3
//     +
//     3
// ) //not good for readability


// JavaScript supports various datatypes, which can be broadly categorized into primitive and non-primitive types.

// Primitive Datatypes
// Primitive datatypes represent single values and are immutable.
// Type of Primitive dataType:

let username = "Prateek" 
console.log(typeof(username));  //String: represent text in single or double quotes
let age = 25 
console.log(typeof(age)) // Number: represent numeric value(integer and decimals)
let isLoggedIn = true
console.log(typeof(isLoggedIn)) // Boolean: represent logic value (true or false)
let state 
console.log(typeof(state)) // Undefined: A variable has been declared but not assigned a value
let empty = null
console.log(typeof(empty)) //null: represent an intentional absence of any value. Return an object as type on console log, it is stand alone value.

// symbol => unique 

