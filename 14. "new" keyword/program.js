function myFunction() {}

const myObject = new myFunction();
console.log(typeof myObject) //object

function myFunction2 (myArgument) {
    this.myValue = myArgument
    this.doubleMyValue = () => myArgument * 2 
}

const myObject2 = new myFunction2(10)
console.log(myObject2.myValue)
console.log(myObject2.doubleMyValue())
