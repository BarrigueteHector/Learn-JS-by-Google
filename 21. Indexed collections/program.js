const myArray = []
const myArray2 = new Array()
const myArray3 = [true, false, 12, "Hello world"]
console.log(myArray3[0])
console.log(myArray3[1])
console.log(myArray3[2])
console.log(myArray3[3])
console.log(myArray3[4])


const myArray4 = new Array(true, true, 29, "what's up")

console.log(myArray4)

const myArray10 = new Array(10)
console.log(myArray10)

const myArray5 = [1,, 3, 4]
console.log(myArray5)
console.log(myArray5.length)

function myFunction( ...myParameters ) {
    let result = 0;
    myParameters.forEach( ( myParam ) => {
        result += myParam;
    });
    return result;
};
console.log(myFunction(2, 2))
console.log(myFunction(2, 9, 2, 3, 1))
console.log(myFunction(2, 0, 2, 2, 7))
