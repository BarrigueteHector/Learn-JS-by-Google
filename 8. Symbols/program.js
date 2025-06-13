/* 
A symbol primitive represents a unique value that never collides with any other value, including the value of other symbol primitives

Symbols are primitive values that are guaranteed to be unique, even if they have the same description.

Su característica principal es que cada símbolo es único e inmutable, incluso si tienen la misma descripción. Se crean usando la función Symbol()

Los Symbols se usan principalmente como claves de propiedades en objetos cuando quieres asegurarte de que esa propiedad no colisione con ninguna otra, ni siquiera si otra parte del código usa el mismo nombre de propiedad. Esto es útil para agregar propiedades "privadas" o internas a objetos, o para definir constantes únicas.

----- EJEMPLO -----
const id = Symbol("id");
const user = {};
user[id] = 123;
console.log(user[id]); // 123
*/

const mySymbol = Symbol("Desc") //creates a new unique symbol with the description "Desc"
console.log(mySymbol)
/*
When you log mySymbol, you'll see something like Symbol(Desc) in the console, indicating it's a symbol with the given description.
*/

const myObject = {} 
myObject[mySymbol] = "propSymbol" //assigns the value "propSymbol" to a property of myObject using the symbol mySymbol as the key

console.log(myObject)

let mySymbol2 = Symbol("My symbol 2")
console.log(mySymbol2.description)

// Symbol.for checks a global symbol registry to see if a symbol with the key "My key" already exists. If it does, it returns that existing symbol; if not, it creates a new one and registers it under that key.
let sharedSymbol = Symbol.for("My key")
console.log(sharedSymbol === Symbol.for("My key"))
