/*
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}
x();
var z = x();
console.log(z);

o/p
7
7
undefined

*/

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// var z = x();
// console.log(z); // [Function: y]


// function z() {
//   var b = 900;
//   function x() {
//     var aa = 7;
//     function y() {
//       console.log(aa, b);
//     }
//     y();
//   }
//   x();
// }
// z(); // 7 900


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function x(){
//     for(var i=0;i<=5;i++){
//         //console.log(i); 0 1 2 3 4 5
//         setTimeout(function (){
//             console.log(i);
//         },i*1000) // 6 6 6 6 6 6
//     }
//     console.log("Namaste Javascript");
// }

// x();

/**
 The loop runs instantly (in milliseconds).
At the end of the loop, i = 6.

Now, 6 timer callbacks are waiting to execute (after 0s, 1s, 2s, 3s, 4s, 5s).

When each setTimeout’s callback runs, it checks the value of i —
but by then, the loop is already finished, and i = 6.

So all six callbacks print the same shared variable value → 6.
 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function y(){
//     for(let i=0;i<=5;i++){
//         //console.log(i); 0 1 2 3 4 5
//         setTimeout(function (){
//             console.log(i);
//         },i*1000) // 0 1 2 3 4 5
//     }
//     console.log("Namaste Javascript");
// }

// y();

// let is block-scoped, meaning each iteration of the loop gets its own new copy of i.

// So every callback closes over a separate i — not the same one.



///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function y(){
    for(var i=0;i<=5;i++){
        //console.log(i); 0 1 2 3 4 5
        setTimeout(function (){
            console.log(i);
        },i*1000) // 0 1 2 3 4 5
    }
    console.log("Namaste Javascript");
}

y();

function y(){
    for(let i=0;i<=5;i++){
        //console.log(i); 0 1 2 3 4 5
        setTimeout(function (){
            console.log(i);
        },i*1000) // 0 1 2 3 4 5
    }
    console.log("Namaste Javascript");
}

y();
*/
// In this, Both functions are named y. Function declarations are hoisted — meaning JS moves their definitions (not just names) to the top.
// But when there are multiple functions with the same name, the last one overrides the previous ones.


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function counter() {
  var count = 0;
  return function increment(){
    count++;
    console.log("let see the count ",count);
  }
}
var counter1 = counter(); //counter function has closure with count var.
console.log("practice ques for closure 1",counter1);
console.log("practice ques for closure 2",counter1());


console.log("");
console.log("--------------------------------- Maintaining State Between Function Calls ---------------------------------------------------");

function createCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const counter12 = createCounter();
console.log(counter12()); // 1
console.log(counter12()); //2

const counter2 = createCounter();
console.log(counter2()); // 1  (separate memory)

console.log("");
console.log("-----------------------------------async function without closure---------");

  let data = "Server Response";

  setTimeout(function () {
    console.log(data); //new, data got destroyed
  }, 2000);

data = "new"

// new without closure variable get override


console.log("-----------------------------------async function with closure---------");
function funcClose(){
  let data = "Server Response";

  setTimeout(function () {
    console.log(data); // Server Response, save variable due to closure, also example of shadowing
  }, 2000);
}

funcClose();