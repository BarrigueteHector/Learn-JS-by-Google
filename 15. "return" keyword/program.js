const myFunction = function(){
    return 2 + 2
}

console.log(myFunction())
console.log(myFunction() + myFunction())

const myFunction2 = function(myParam){
    if (myParam === undefined){
        return "Undefined"
    }
    return "myParam isn't undefined"
}

console.log(myFunction2())
console.log(myFunction2("Hola"))

const myFunction3 = () => 2 + 2
console.log(myFunction3())

const myFunction4 = () => { 2 + 2 }
console.log(myFunction4())

const myFunction5 = () => { return 2 + 2 }
console.log(myFunction5())
