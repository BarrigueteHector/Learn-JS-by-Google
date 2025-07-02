const myMap = new Map()

console.log(myMap)

myMap.set("myKey", "My value")
console.log(myMap)
console.log(myMap.has("myKey"))
console.log(myMap.has("key"))
console.log(myMap.get("myKey"))

myMap.set("myKey", 120)
console.log(myMap.get("myKey"))

myMap.delete("myKey")
console.log(myMap)

const myMap2 = new Map([
    ["myKey", "A string value"],
    ["mySecondKey", 500],
    ["myThirdKey", true]
])

console.log(myMap2)

const myWeakMap = new WeakMap()
console.log(myWeakMap)
