"use strict";
// boolean: Represents true or false values.
let isDone = false;
console.log(typeof (isDone));
console.log(isDone);
// number: Represents both integer and floating-point numbers.
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
console.log(decimal, hex, binary, octal);
// string: Represents text data.
let color = "blue";
color = 'red';
console.log(typeof color);
// null and undefined: Represent the absence of value. null and undefined are subtypes of all other types.
let u = undefined;
let n = null;
console.log(u, typeof u, n, typeof n);
//symbol: Represents unique and immutable values.
let sym1 = Symbol();
let sym2 = Symbol("key");
console.log(sym2, sym1);
