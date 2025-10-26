var shad_a = 10;

{
    var shad_a = 20;
    console.log('shad_a getting shadows by inner scope',shad_a);
    
}

console.log('shad_a outter scope',shad_a);

/**
 var has function scope, not block scope

That means:

Declaring var inside {} does not create a new variable limited to that block.

The variable is hoisted to the nearest function scope (or global scope if no function exists).

In your example, there’s no function, only the global scope.
So both var shad_a declarations refer to the same global variable.
 */


//----------------------------------- This type of shadowing is legal-------------------------------------------------//
var shad_b = 10;
{
    let shad_b = 20;
    console.log('shad_b getting shadows by inner scope',shad_b); // shad_b getting shadows by inner scope 20
}

console.log('shad_b in outter scope',shad_b);  // shad_b in outter scope 10


let shad_d = 10;
{
   const shad_d = 20;
   console.log('shad_d getting shadows by inner scope',shad_d); // shad_d getting shadows by inner scope 20
}

console.log('shad_d outter scope',shad_d); // shad_d outter scope 10


//---------------------------------------This type of shadowing is illegal-----------------------------------------//
let shad_c = 10;
{
   // var shad_c = 20;
   // console.log('shad_c getting shadows by inner scope',shad_c); SyntaxError: Identifier 'shad_c' has already been declared
}
