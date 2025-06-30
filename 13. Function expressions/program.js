const myVariable = function(){
    console.log("This is a variable initialize like a function")
}

myVariable();

const myVariable2 = function myFunction2(){
    console.log(`myFunction2 is a ${typeof myFunction2}`)
}

myVariable2()
console.log(`myVariable2 is a ${typeof myVariable2}`)
console.log(`myFunction2 is a ${typeof myFunction2}`)

const myArrowFunction = () => 2 + 2
console.log(myArrowFunction())

function myParentFunction() {
    this.myProperty = true;
    let myFunction = () => {
            console.log( this );
    }
    myFunction();
};

let myInstance = new myParentFunction();

function myFunction() {
    let myArrowFunction = () => {
            console.log( arguments[ 0 ] );
    }
    myArrowFunction( true );
};

myFunction("Hello");
