class MyClass {
    constructor(value){
        this.instanceProp = value
    }

    classMethod(){
        console.log(`Value: ${this.instanceProp}`)
    }
}

class ChildClass extends MyClass {
    subClassMethod(){
        super.classMethod()
        console.log(`Type: ${typeof this.instanceProp}`)
    }
}

const firstInstance = new MyClass("Hello world")
firstInstance.classMethod()

const secondInstance = new ChildClass("Hey world")
secondInstance.subClassMethod()
