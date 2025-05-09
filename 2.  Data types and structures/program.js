// ************ Numbers ************ //
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

// ************* Strings ************ //
console.log("Hello World")
console.log('Hello World')
console.log(`Hello World`)

console.log("I'm a string")
console.log('"A string" I said') // "A string" I said

console.log('"I\'m a string" I said') // "I'm a string" I said

let myString = String(10)
console.log(myString); // "10"
console.log(typeof myString); // string

let stringObj = new String("My new string")
console.log(typeof stringObj); // object
console.log(stringObj); // [String: 'My new string']

console.log("My" + " string") // My string

const anotherString = `This
is a string`;

console.log(anotherString); 
// This 
// is a string

console.log("The result is " + (2+6) + ".") // The result is 8
console.log(`The result is ${2+6}.`) // The result is 8

const myNoun = "template literal"
function myTagFunction (myStrings, myPlaceholder){
    
    // console.log(myStrings); // [ 'I\'m a ', ' ' ]
    // console.log(myStrings[0]); // I'm a
    // Un arreglo con los textos antes, entre y después de los ${}.
    // Los valores que reemplazan ${...}.

    // Antes del ${}: "I'm a "
    // Después del ${}: "" (porque no hay nada después)

    // Entonces la función recibe:

    // myStrings = ["I'm a ", ""];
    // myPlaceholder = "template literal";

    // myStrings contiene todo lo que no está dentro de ${} (antes, entre, después).
    // Lo que está dentro de ${} se pasa como parámetros separados.

    const myInitialString = myStrings[0]
    console.log(`${myInitialString}modified ${myPlaceholder}`)
}

myTagFunction`I'm a ${myNoun}`
