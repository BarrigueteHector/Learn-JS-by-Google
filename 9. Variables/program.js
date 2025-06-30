// * A variable is declared using the let, const or var keywords

let myVariable = 5
console.log(myVariable)

/* 
* Declare a variable without initializing it right away
let myVariable;
> undefined
*/

// * Use the const keyword to declare a constant, a type of variable that be immediately initialized, and then can't be cahnged.

const myConstant = true
console.log(myConstant)

const constantObject = {"firstvalue": true}
console.log(constantObject) // >  { firstvalue: true }
constantObject.secondvalue = false;
console.log(constantObject) // { firstvalue: true, secondvalue: false }
