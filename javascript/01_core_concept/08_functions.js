// function in javascript are reusable block of scope that perform a specific task

console.log("----------------function declaration & statement-----------------------------------")
function xyz() {
    console.log("a regular function is being made");
    return function(){

    }
}

console.log(xyz());

/**
 a regular function is being made
 ƒ (){
        
    }
 */


console.log("----------------function expression-----------------------------------")

//console.log(b);
//console.log(b());
//This will give reference error because of hoisting

let b = function(){
    return function abc(){
        console.log("fucntion expression");
    }
}

console.log(b);
console.log(b());
console.log(b()());

/*
ƒ (){
    return function abc(){
        console.log("fucntion expression");
    }
}
08_functions.js:30 ƒ abc(){
        console.log("fucntion expression");
    }
*/

//console.log(c); undefined
//console.log(c()); 08_functions.js:48 Uncaught TypeError: c is not a function

var c = function(){
    return function abc(){
        console.log("fucntion expression");
    }
}

console.log(c);
console.log(c());


/**
 ƒ (){
    return function abc(){
        console.log("fucntion expression");
    }
}
08_functions.js:57 ƒ abc(){
        console.log("fucntion expression");
    }
 */


console.log("----------------Name function expression-----------------------------------")

let d = function efd(){
    console.log("Name expression function");
}

console.log(d);
//console.log(efd);

/**
 ƒ efd(){
    console.log("Name expression function");
}
08_functions.js:80 Uncaught ReferenceError: efd is not defined
    at 08_functions.js:80:13
 */
console.log("-----------------------------------------try")
let e = function efd(){
    console.log("local value",efd);
}

e();
console.log("gloabal value",e());
console.log("gloabal value as variable",e);

/**
local value ƒ efd(){
    console.log("local value",efd);
}
08_functions.js:91 local value ƒ efd(){
    console.log("local value",efd);
}
08_functions.js:95 gloabal value undefined
08_functions.js:96 gloabal value as variable ƒ efd(){
    console.log("local value",efd);
}
 */


console.log("----------------Arrow Function-----------------------------------")
let arrowfun = () => console.log("hello, this is arrow function");
arrowfun();
console.log(arrowfun);
console.log(arrowfun());

/*
hello, this is arrow function
08_functions.js:115 () => console.log("hello, this is arrow function")
08_functions.js:113 hello, this is arrow function
*/


console.log('-------------------------------------------- arrow function with block scope------------------------------');
console.log(aa); // get hoisted
// console.log(aa()); TypeError: aa is not a function

var aa = () => console.log("arrow function with var");
console.log(aa());



console.log("----------------------------------------------some random exp--------------------------");

function abxc(){
    console.log("let see what does it print");
    return function(){
        console.log("return function");
    }
}

abxc();  // let see what does it print
abxc()(); /*
let see what does it print
return function
*/
console.log("----------------------------------------------let see what console print--------------------------");

console.log(abxc());  /*
let see what does it print
[Function (anonymous)]
*/
console.log(abxc()()); 
/*
let see what does it print
return function
undefined
*/

console.log("----------------------------------------------try with name function--------------------------");
function abxcd(){
    console.log("let see what does it print");
    return function mna(){
        console.log("return function");
    }
}

abxcd(); // let see what does it print
abxcd()();
/*
let see what does it print
return function
*/


console.log("----------------------------------------------try with function expression--------------------------");
let bnd = function(){
    console.log("See what return with function expression");
    return function(){
        console.log("See what return with return");
    } 
}

console.log(bnd); // [Function: bnd]
console.log(bnd());
/*
See what return with function expression
[Function (anonymous)]
 */
console.log(bnd()()); // undefined

bnd(); // See what return with function expression