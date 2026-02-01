// console.log(z); ReferenceError: Cannot access 'z' before initialization (hoisted but cannot initialized to tdz)


let z; // can declare variable with initializing

let x = 20;
x=30; // can reassigned it also

// let x = 40;// Cannot redeclare block-scoped variable 'x' SyntaxError: Identifier 'x' has already been declared

{
    let c = 2;
}
// console.log(c);  ReferenceError: c is not defined, because is not global scope, and let c is in child scope which cannot access by parent scope.
