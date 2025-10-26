// console.log(pi); ReferenceError: Cannot access 'pi' before initialization (hoisting same let)

const pi = 3.14;
// pi = 3.14543;  TypeError: Assignment to constant variable.

// const px; SyntaxError: Missing initializer in const declaration


const arr = [1,2,3,4];
arr.push(5);
console.log(arr); // [ 1, 2, 3, 4, 5 ]
