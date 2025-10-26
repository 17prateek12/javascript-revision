//-------------------------------------Understanding scope-----------------------------------------------//

var globalVar = "I am a global variable";

function test () {
    var localVar = "I am local Variable";
    console.log("Print global variable in function ",globalVar);
    console.log("Print local variable in function ",localVar);
   // Print global variable in function  I am a global variable
   // Print local variable in function  I am local Variable
}
 
test();
//console.log("Print local variable outside block ",localVar); // ReferenceError: localVar is not defined

{
    var localVar = "I am local Variable";
    console.log("Print global variable in block ",globalVar); // Print global variable in block  I am a global variable
    console.log("Print local variable in block ",localVar); // Print local variable in block  I am local Variable
}

console.log("Print local variable outside block ",localVar); // Print local variable outside block  I am local Variable


/**
 Why This Happens

Because before ES6, JavaScript only had:

Global scope

Function scope

Blocks {} didn’t create new scopes for var.
ES6 introduced let and const, which are block-scoped and behave more intuitively.
this example proves var is function-scoped, not block-scoped.


Global Scope
│
├── globalVar  → Accessible everywhere
│
├── test() Function
│    └── localVar (exists only inside this function)
│
└── Block { } with var localVar → Adds/overwrites global localVar

 */


//---------------------------------------------------------for let and const block scoope --------------------------------------------------//

let scope_a = 20;

{
    let scope_b = 30;
    console.log('Let see scope for global let in block ',scope_a);
    console.log('Let see scope for local let in block ',scope_b);
}

// console.log('Let see scope for local let outside block ',scope_b); // ReferenceError: scope_b is not defined


//-------------------------------------------------Lexical enviroment chain or scope chain----------------------------------//

var chain_a=10;

function outer() {
    var chain_b = 20;
    function inner(){
        var chain_c = 30;
        console.log("Let see chain,",chain_a," ",chain_b," ",chain_c); // Let see chain, 10   20   30
        //console.log("let see variable which is not present in any scope", taz); // ReferenceError: taz is not defined
    }
    inner();
}
outer();
