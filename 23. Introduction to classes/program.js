class MyClass {
    /* 
    * Si no se define un constructor, JS tomará el constructor vacio
    constructor() {}
    */

    constructor (myPassedValue){
        console.log(`myPassedValue: ${myPassedValue}`)
    }

    classMethod(){
        console.log("Esto es un método de clase")
    }
}

console.log(typeof myClass)

// const myClassInstance = new MyClass()
const myClassInstance = new MyClass(125)

console.log(typeof myClassInstance)
myClassInstance.classMethod()
