// boolean: Represents true or false values.
let isDone: boolean = false;
console.log(typeof(isDone));
console.log(isDone);

// number: Represents both integer and floating-point numbers.
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(decimal,hex,binary,octal);

// string: Represents text data.
let color: string = "blue";
color = 'red';
console.log(typeof color)

// null and undefined: Represent the absence of value. null and undefined are subtypes of all other types.
let u: undefined = undefined;
let n: null = null;
console.log(u,typeof u,n,typeof n);

//symbol: Represents unique and immutable values.
let sym1 =Symbol();
let sym2 = Symbol("key");
console.log(sym2,sym1);
// bigint
let big: bigint = 100n;
console.log(big)


