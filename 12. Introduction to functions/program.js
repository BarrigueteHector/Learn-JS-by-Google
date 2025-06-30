function myFunction(){
    console.log("This is a function")
}

myFunction()

// * Otra forma de hacer funciones
{
    anotherFunction()
    function anotherFunction(){
        console.log("This is another function")
    }
}

function functionOne(){
    function functionTwo(){
        console.log("Hello from functionTwo")
    }

    functionTwo()
}

functionOne()

function functionWithParam(myParameter){
    console.log(`myParameter: ${myParameter}`)
}

functionWithParam() // myParameter: undefined
functionWithParam("computadora") // myParameter: computadora

function functionWithParam2(myParameter = "default"){
    console.log(`myParameter: ${myParameter}`)
}

functionWithParam2();
functionWithParam2("New")

function myFunctionArguments(){
    console.log(arguments)
}

myFunctionArguments(12, true, "Hello world")

function myFunctionArguments2(){
    let result = ""
    for(let i = 0; i < arguments.length; i++){
        result += arguments[i] + " - "
    }

    console.log(result)
}

myFunctionArguments2("Python", "Java", "C", "Ruby", "Go")

function myFunctionArguments3(separator, ...myStrings){
    console.log(myStrings.join(separator))
}

myFunctionArguments3(" | ", "Fresa", "Mango", "Naranja", "Sandia", "Uva")

// * Imprime el primer parametro
function myOuterFunction() {
    let myInnerArrowFunction = ( ...myParams ) => {
        console.log(myParams[0]);
    }
    myInnerArrowFunction(true);
};

myOuterFunction(false); // true

let myArrowFunction = ( ...myParams ) => {
    console.log(myParams[ 0 ])
};

myArrowFunction("Hello world", true) // true
