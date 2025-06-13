/* 
BigInt primitives are a relatively new addition to JavaScript, allowing mathematical operations on numbers outside the range allowed by Number. To create a BigInt, append n to the end of a number literal, or pass an integer or numeric string value to the BigInt() function.
*/

const myNumber = 9999999999999999;
const myBigInt = 9999999999999999n;

console.log(typeof myNumber) // number
console.log(typeof myBigInt) // bigint

console.log( 9999999999999999 + 10 );
console.log( 9999999999999999n + 10n );
