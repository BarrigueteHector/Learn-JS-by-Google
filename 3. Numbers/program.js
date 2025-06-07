// Number object
console.log(Number ("10")); // 10
console.log(Number (null)); // 0
console.log(Number (false)); // 0
console.log(Number (true)); // 1
console.log(Number (undefined)); // NaN
console.log(Number ("The number 3")); // NaN

let n = Number("12")
console.log(typeof n); // number

let numObject = new Number(12);
console.log(numObject); // [Number: 12]

let tenObject = new Number (10);
console.log(tenObject + 5); // 15
console.log(tenObject === 10)
