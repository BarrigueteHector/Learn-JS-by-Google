switch (2 + 2 === 4){
    case false: console.log("False")
                break
    case true: console.log("True")
                break
}       

switch (2 + 2 === 7){
    case false: console.log("False")
                break
    case true: console.log("True")
                break
}

switch (20){
    case 5: console.log("Five")
            break
    case 10: console.log("Ten")
            break
    default: console.log("Unexpected")
            break
}

let iterationCount = 0
while (iterationCount < 3){
    iterationCount++
    // console.log("Loop iteration")
    console.log(`Loop ${iterationCount}`)
}

iterationCount = 0
while (iterationCount <= 5){
    iterationCount++
    
    if (iterationCount === 3){
        continue
    }
    
    console.log(`(2) Loop ${iterationCount}`)
}

iterationCount = 0
while (iterationCount <= 5){
    iterationCount++

    if (iterationCount === 3){
        console.log("Break loop")
        break
    }

    console.log(`(3) Loop ${iterationCount}`)
}

iterationCount = 0
do{
    console.log(`(dw) Loop ${iterationCount}`)
    iterationCount++
}while(iterationCount < 3)

for (let i = 0; i < 3; i++){
    console.log(`For iteration ${i}`)
}

var myArray = ["Naranja", "Sandia", "Platano", "Mango", "Fresa"]
for (let i = 0; i < myArray.length; i++){
    console.log(`Fruta: ${myArray[i]}`)
}

var letters = ["A", "S", "W", "D", "X"] 
for (const letter of letters){
    console.log(`Letter: ${letter}`);
}

const myObject = {"myProperty": true, "anotherProperty": false}
for (const myKey in myObject){
    myValue = myObject[myKey]
    console.log(`Key: ${myKey} -> Value: ${myValue}`)
}
