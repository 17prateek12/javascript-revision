console.log("This is to show hoisting in js of var ",a); // This is to show hoisting in js of var  undefined
var a = 10;

var x = 10;
var x = 20; // Redeclaration allowed
x=30 // Reassignment allowed


// No block scope, so it can cause accidental overwriting
if(true)
{
    var cc=1000;
}

console.log("value of cc which is declare in block which we access outside of block",cc) // value of cc which is declare in block  1000


////
var b = 55;
function dosomething() {
    var b= 66;
    console.log("Let see which value of var be got print inside function ", b); 
}
dosomething()
console.log("Let see which value of var be got print ", b); // 55, because it was present in nearest scope


console.log("-------------------understanding var scope--------------------");

function abss(){
    if(true){
       var xxx=10;
    }
    console.log("value of xxx ",xxx);
}
abss();

// console.log("value of xxx trying to access outside ", xxx); //ReferenceError: xxx is not defined
