let myVariable = 4;

console.log(myVariable); // 4
console.log(typeof myVariable); // "number"
myVariable = myVariable.toString(); // Convert to string
console.log(typeof myVariable); // "4"

let anotherVariable = 10;

if (typeof anotherVariable === "number"){
    console.log("This variable is a number")

    if (anotherVariable > 5){
        console.log("This variable is greater than 5")
    }
}
