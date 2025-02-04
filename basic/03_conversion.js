let score = 33
//console.log(typeof score);  //number
//console.log(typeof(score)); //number

let scores = "33"
//console.log(typeof scores); //string
let valueNumber = Number(scores)
//console.log(typeof valueNumber); //number

let strnum = "33abc"
let valueNumbers = Number(strnum)
//console.log(typeof valueNumbers); //number
//console.log(valueNumbers); //NaN

let valnull = null
let convternull = Number(valnull);
//console.log(convternull); // 0
//console.log(typeof convternull); //number

let valundefine = undefined
let convertundefine = Number(valundefine);
//console.log(convertundefine) //NaN
//console.log(typeof convertundefine) //number


let boolval = true
let convertbooltonum = Number(boolval)
//console.log(convertbooltonum) // true => 1

let boolvalf = false
let convertbooltonumf = Number(boolvalf)
//console.log(convertbooltonumf) // false => 0

let isboolIn = 1
let convertnumtobool = Boolean(isboolIn)
//console.log(convertnumtobool) // true

let isboolInother = 26^10
let convertnumtoboolother = Boolean(isboolInother)
//console.log(convertnumtoboolother) // true

let isboolInzero = 0
let convertnumtoboolzero = Boolean(isboolInzero)
//console.log(convertnumtoboolzero) // false

let isboolInneg = -5
let convertnumtoboolneg = Boolean(isboolInneg)
//console.log(convertnumtoboolneg) // true

let isStringempty = ""
let convertstringtobool = Boolean(isStringempty)
//console.log(convertstringtobool) // false

let isString = "prateek"
let convertfullstringtobool = Boolean(isString)
//console.log(convertfullstringtobool) // true

let strnumempty = ""
let convertemptystringtonum = Number(strnumempty)
//console.log(convertemptystringtonum) // 0

let stringnum = "prateek"
let convertstringtonumber = Number(stringnum)
//console.log(convertstringtonumber) //NaN

// ******************************************** OPERATIONS ******************************************** //

let value = 3
let negativevalue = -value
//console.log(negativevalue)

//console.log(2+2); // 4
//console.log(2-2); // 0
//console.log(2*2); // 4
//console.log(2**3); // 8
//console.log(2/3); // 0.6666666666666666
//console.log(2%3); // 2

let str1 = "hello"
let str2 = " Prateek"
let str3 = str1 + str2
//console.log(str3)   // hello Prateek

//console.log("1"+2); // 12
//console.log(1+"2"); // 12
//console.log("1"+2+2); // 122
//console.log(1+2+"2"); // 32
//console.log("1"+"2"); // 12
//console.log("1"*"2"); // 2
//console.log(1+" mango"); // 1 mango

//console.log(3+4*5%3) // 5
//console.log((3+4)*5%3) // 2


{/* Not recommend for production
//console.log(+true); // 1
//console.log(true+); // SyntaxError: Unexpected token ')'
//console.log(true+""); // true
//console.log(+"") // 0
*/}


// ******************************************************** INCREMENT (++)
{/*
 The increment (++) operator increments (adds one to) its operand and 
 returns the value before or after the increment, depending on where the operator is placed.  
 
 If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
*/} 

// ********** Prefix increment
let x = 3
let y = ++x
//console.log(`value of x is ${x} and value of y is ${y}`)  // value of x is 4 and value of y is 4

// ********** Postfix increment
let x2 = 3
let y2 = x2++
//console.log(`value of x is ${x2} and value of y is ${y2}`) // value of x is 4 and value of y is 3