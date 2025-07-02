/* 
* Data descriptors: objetos que describen las características de una propiedad de un objeto. Definen cómo se comporta esa propiedad cuando se accede, modifica, enumera o elimina

Hay de dos tipos:
1. Data descriptos: propeidades que tienen un valor asociado (como variables normales) -> value, writable, enumerable, configurable

2. Accessor descriptors: propiedades que usan funciones get y set para controlar el acceso a su valor -> get, set, enumerable y configurable

No hay propiedades que sean de los dos tipos

Value: valor (de cualquier tipo) asociado a la propiedad
Writable: indica si el valor puede ser modificado (true, false)
Get: función que se ejecuta al leer la propiedad
Set: función que se ejecuta al asignar un nuevo valor a la propiedad
Configurable: indica si la propiedad aparece en los bucles (for ... in)y en Objects.keys
Enumerable: indica si se puede borrar la propiedad o cambiar sus descriptores
*/

const myObj = {}

Object.defineProperty(myObj, 'myProperty', {
    value: true,
    writable: false
})

console.log("myObj")
console.log(myObj.myProperty)
myObj.myProperty = false
console.log(myObj.myProperty)

const myObj2 = {}

Object.defineProperty(myObj2, 'myProperty', {
    value: true,
    writable: true
})

console.log("myObj2")
console.log(myObj2.myProperty)
myObj2.myProperty = false
console.log(myObj2.myProperty)
