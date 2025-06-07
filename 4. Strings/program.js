console.log("Hello world")
console.log('Hello world')
console.log("I'm a string")
console.log('"A string," I said')

let myString = String(10)
console.log(typeof myString) 
console.log(myString)

let stringObj = new String("My new string (it's an object!)")
console.log(typeof stringObj)
console.log(stringObj)

const myString2 = `This
is a string`
console.log(myString2)

console.log("The resuls is " + (2 + 4) + ".")
console.log(`The result is ${2 + 4}.`)

const myNoun = "template literal"

// This is a tag function for a template literal.
// myStrings: array of string parts from the template
// myPlaceholder: value(s) interpolated in the template
function myTagFunction(myStrings, myPlaceholder){
    const myInitialString = myStrings[0] // First part of the template string
    // Log the first string part, add "modified", then the placeholder value
    console.log(`${myInitialString}modified ${myPlaceholder}`)
}

// Call the tag function with a template literal.
// myStrings will be ["I'm a ", "."], myPlaceholder will be "template literal"
myTagFunction`I'm a ${myNoun}.`
