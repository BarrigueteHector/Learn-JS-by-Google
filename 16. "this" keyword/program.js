/* 
    * THIS
    Valor del objeto que está vinculado a la función en el momento de su llamada
*/

let myObject = {
    myValue: "This is a string",
    myMethod() {
        console.log(this.myValue)
    }
}

myObject.myMethod()
