let a = [
    { first_name: "Raj", last_name: "Sharma", age: 25 },
    { first_name: "Rama", last_name: "Gupta", age: 33 },
    { first_name: "Aman", last_name: "Bansal", age: 19 },
    { first_name: "Rajesh", last_name: "Sharma", age: 45 },
    { first_name: "Raj", last_name: "Kumar", age: 25 }
]

console.log("");
console.log("--------------------Let see working of map--------------------");
console.log("");
let b = a.map((a) => a.first_name + " " + a.last_name)

console.log(b);
/*
[
  'Raj Sharma',
  'Rama Gupta',
  'Aman Bansal',
  'Rajesh Sharma',
  'Raj Kumar'
]
*/
console.log("");
console.log("--------------------Let see working of filter--------------------");
console.log("");
let c = a.filter((a) => {
    console.log(a);
    return a.age > 30;
});
console.log(c);
/* This is to show working of filter function that it will iterate over every value in array
{ first_name: 'Raj', last_name: 'Sharma', age: 25 }
{ first_name: 'Rama', last_name: 'Gupta', age: 33 }
{ first_name: 'Aman', last_name: 'Bansal', age: 19 }
{ first_name: 'Rajesh', last_name: 'Sharma', age: 45 }
{ first_name: 'Raj', last_name: 'Kumar', age: 25 }

And here filter return value as per condition
[
  { first_name: 'Rama', last_name: 'Gupta', age: 33 },
  { first_name: 'Rajesh', last_name: 'Sharma', age: 45 }
]
*/
console.log("");
console.log("--------------------Let see working of find--------------------");
console.log("");
let d = a.find((a) => {
    console.log(a);
    return a.age > 30;
});
console.log("output", d);

/*
1. In case of find, it will not iterate over all value in array, once it find 1st occurance value it will immediately break and return the result
unlike the filter which iterate over all value then return result on matching condition.
2. Find has better performance then filter because it does not iterate over all value, thats why find is faster then filter, but it return
only 1st find value not all value present in array.
{ first_name: 'Raj', last_name: 'Sharma', age: 25 }
{ first_name: 'Rama', last_name: 'Gupta', age: 33 }
output { first_name: 'Rama', last_name: 'Gupta', age: 33 }
*/

console.log("");
console.log("--------------------Let see working of some--------------------");
console.log("");

let olderthan30 = a.some(a => {
    console.log(a);
    return a.age > 30
});

console.log("result", olderthan30);
/**
{ first_name: 'Raj', last_name: 'Sharma', age: 25 }
{ first_name: 'Rama', last_name: 'Gupta', age: 33 }
result true
 */

console.log("");
console.log("--------------------Let see working of every--------------------");
console.log("");

let allolderthan20 = a.every(a => {
    console.log(a);
    return a.age > 20
});

console.log("result", allolderthan20);
/*
{ first_name: 'Raj', last_name: 'Sharma', age: 25 }
{ first_name: 'Rama', last_name: 'Gupta', age: 33 }
{ first_name: 'Aman', last_name: 'Bansal', age: 19 }
result false
*/

// Both iterate through the array and stop early once the final result is known (short-circuiting).
// some() stops and returns true on the first element that meets the condition.
// every() stops and returns false on the first element that fails the condition.

console.log("");
console.log("--------------------Let see working of reduce--------------------");
console.log("");
/**
reduce() is one of the most powerful and flexible array methods — it can be used to:
1. sum numbers,
2. flatten arrays,
3. group data,
4. count occurrences,
5. find min/max values,
6. even build new objects or arrays!

SYNTAX:
array.reduce((accumulator, currentValue, index, array) => {
  return newAccumulator;
}, initialValue);

accumulator:	The ongoing result (starts with initialValue)
currentValue:	The current element in the iteration
initialValue:	The starting value (required for predictable results)

*/

let ageCount = a.reduce((acc, curr) => {
    if (acc[curr.age]) {
        console.log("✅ Existing age found:", curr.age);
        console.log("Before increment:", acc);
        acc[curr.age]++;
        console.log("After increment:", acc);
    } else {
        console.log("🆕 New age found:", curr.age);
        acc[curr.age] = 1;
        console.log("After adding new age:", acc);
    }

    console.log("---------------");
    return acc; // ✅ Always return accumulator
}, {});

console.log("Final answer", ageCount);

/*
🆕 New age found: 25
After adding new age: { '25': 1 }
---------------
🆕 New age found: 33
After adding new age: { '25': 1, '33': 1 }
---------------
🆕 New age found: 19
After adding new age: { '19': 1, '25': 1, '33': 1 }
---------------
🆕 New age found: 45
After adding new age: { '19': 1, '25': 1, '33': 1, '45': 1 }
---------------
✅ Existing age found: 25
Before increment: { '19': 1, '25': 1, '33': 1, '45': 1 }
After increment: { '19': 1, '25': 2, '33': 1, '45': 1 }
---------------
Final answer { '19': 1, '25': 2, '33': 1, '45': 1 }
*/

let maxAge = a.reduce((acc, curr) => acc > curr.age ? acc : curr.age, a[0].age);

console.log(maxAge);
//45

let sumallage = a.reduce((acc, curr)=>acc+=curr.age,0);
console.log(sumallage); // 147