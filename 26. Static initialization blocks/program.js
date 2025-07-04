class MyClass {
    static {
        console.log( "Static initialization block." );
    }
    constructor() {
        console.log( "Constructor." );
    }
}

const myClassInstance = new MyClass();
