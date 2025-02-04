//Chatper 01: Variables

//The var keyword is used to declare a variable. It has a function-scoped or globally-scoped behaviour.

//The let keyword is introduced in ES6, has block scope and cannot be re-declared in the same scope.

//The const keyword declares variables that cannot be reassigned. It’s block-scoped as well.


const accountId = 498398
let emailId = "prateeksharma1885@gmail.com"
var accountPassword = 'ddddds'
CurrentLocation = 'Delhi'  // can assign a variable like this but not recommend a good a practice
let details

//console.log(accountId); // 498398
//console.log(emailId);  // prateeksharma1885@gmail.com
//console.log(accountPassword);  // ddddds
//console.log(CurrentLocation); //   Delhi
//console.log(details); // undefined

//accountId = 3333 This method is not allowed as it give error TypeError: Assignment to constant variable. We cannot change value of const
//console.log("Account Id After", accountId);

emailId = "17prateek12@gmail.com"
//console.log("Email Id after update",emailId); // Email Id after update 17prateek12@gmail.com

accountPassword="123222"
//console.log("Account password after update", accountPassword); //123222

CurrentLocation = 'Gurgoan'
//console.log("Current location after update", CurrentLocation); // Current location after update Gurgoan

details = 'Hello'
//console.log('Detail after assigning some value', details); // Detail after assigning some value Hello
details = 'Hello World'
//console.log('Detail after updating some value',details); // Detail after updating some value Hello World

//const a;  // 'const' declarations must be initialized.

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, emailId, accountPassword, CurrentLocation, details]);

//│ (index) │ Values                  │
//├─────────┼─────────────────────────┤
//│ 0       │ 498398                  │
//│ 1       │ '17prateek12@gmail.com' │
//│ 2       │ '123222'                │
//│ 3       │ 'Gurgoan'               │
//│ 4       │ 'Hello World'           │
//└─────────┴─────────────────────────┘