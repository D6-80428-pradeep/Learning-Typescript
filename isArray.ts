type IsArray<T> = T extends Array<any> ? true : false;

const arr: number[] = [1, 2, 3];
const isArr: IsArray<typeof arr> = true; // true

const str: string = 'Hello';
const isStrArr: IsArray<typeof str> = false; // false


console.log(isStrArr);
console.log(isArr);