const arr = [10, 24, 84];
//arr = [5];
arr.push(5);
console.log(arr)

const a = {name:"prateek", age:26, "address":"Delhi"}
console.log(a);
a.address = "blr";
console.log(a);
//a={name:"mansi", age:26, "address":"Delhi"}
const b = a;
b.name="mansi"
console.log(a)
console.log("check for equality a==b ", a==b)
console.log("");
console.log("");

const aa = [10,8,9,7];
const bb = aa;
console.log("aa orignal", aa)
bb[0]=7;
console.log ("bb ", bb)
console.log("aa after modified ",aa)
const cc = aa.slice();
cc[0]=5;
console.log("cc ",cc)

console.log("aa after cc ",aa)
console.log("check for array equality aa and bb ",aa==bb)
console.log("check for array equality aa and cc ",aa==cc)
console.log("");
console.log("");

const dd =[{x:1},{y:2}];
const ee = dd;
console.log("original array ", dd);
ee[0].x= 99;
console.log("dd after ee",dd);
console.log("ee ",ee)
console.log("check == for dd and ee ", dd==ee)
const ff = dd.slice();
ff[0].x=101;
console.log("dd after ff",dd);
console.log("ff ",ff)
console.log("check == for dd and ee ", dd==ff)
console.log("");
console.log("");
