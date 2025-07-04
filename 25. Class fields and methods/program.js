class MyClass {
    myResult = 10
    #myPrivateField = true
    #myPrivateMethod () {
        console.log("Esto es privado")
    }

    set setValue(myValue){
        this.myResult = myValue
    }

    static myStaticField
    static myStaticMethod(){
        console.log("Método estático")
    }
}

const myClassInstance = new MyClass()

console.log(myClassInstance)

myClassInstance.setValue = 12

console.log(myClassInstance)

// myClassInstance.myStaticMethod() // ! ERROR
MyClass.myStaticMethod
