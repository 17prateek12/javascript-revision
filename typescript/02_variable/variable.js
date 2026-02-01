"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greeting = "Hello Prateek";
//greeting = 6 Type 'number' is not assignable to type 'string'
//greeting = true Type 'boolean' is not assignable to type 'string'.
var mynum = 6;
// mynum.toLowerCase;  Property 'toLowerCase' does not exist on type 'number'
// greeting.toLowerase  Property 'toLowerase' does not exist on type 'string'. Did you mean 'toLowerCase'?
greeting.toLowerCase;
console.log(greeting);
/** So this how typscript protect us from so much error */
// number
var userId = 444343.3;
var anotherNum = 3332;
anotherNum.toFixed();
// anotherNum = "Prateek" Type 'string' is not assignable to type 'number'
// we always not need to put column with type, typscript can predict its own.
//boolean
var isloggin = false;
