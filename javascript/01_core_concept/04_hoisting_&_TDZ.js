/**--------------------------------------------------- --------------------------------------------------- */
/*
console.log(a);  // undefined
var a=9;

*/


/**--------------------------------------------------- --------------------------------------------------- */
/*
console.log(b); // hoisting.js:7 Uncaught ReferenceError: Cannot access 'b' before initialization at hoisting.js:7:13
let b=20;

This is because of TDZ, b got hoisted but cannot get initialized. Same case with const also 
*/



/**--------------------------------------------------- --------------------------------------------------- */
// getName(); // Print function to learn hoisting
// console.log(a); // undefined
// console.log(x); // Uncaught ReferenceError: x is not defined. x does not get any memory allocated.
// console.log(getName) /* 
// ƒ getName(){
//     console.log("Print function to learn hoisting");
// }
// */

// function getName(){
//     console.log("Print function to learn hoisting");
// }

// var a;


/**--------------------------------------------------- --------------------------------------------------- */

console.log(getName); // undefined
console.log(getName2); //
// ƒ getName2() {
//     console.log("Just normal function")
// }
console.log(getName3); // undefined

var getName3 = function(){
    console.log("function  declare with function keyword")
}

function getName2() {
    console.log("Just normal function")
}

var getName = () =>{
    console.log("function decalre with arrow keyword")
}


// getName: undefined - js treat it as variable that's why it got undefined in memory stack
// getName2:ƒ getName2() - js treat it as function
// getName3:undefined  - js treat it as variable that's why it got undefined in memory stack