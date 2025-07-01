let carAttributes = {
    "color": "red",

    "marca": "Nissan",
    
    "key": {
        "subkey": true,
        "otherSubkey": false
    },

    myMethod() {
        console.log("This is a method")
    }
}

console.log(carAttributes)
console.log(carAttributes.marca)
console.log(carAttributes.myMethod())

let myObject = new Object()
myObject.numberProp = 12
myObject.stringProp = "Hello world"

console.log(myObject)

let otherObject = new Object({myValue: 18})
console.log(otherObject)
