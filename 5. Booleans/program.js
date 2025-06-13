console.log("1.", Boolean("A string literal")); //True
console.log("2.", Boolean(NaN)) //False
console.log("3.", Boolean(-0)) //False
console.log("4.", Boolean(5)) //True
console.log("5.", Boolean("false")) //True

const falseBoolean = Boolean(0)
const falseObject = new Boolean(0)
console.log(`fb: ${falseBoolean}\nfo: ${falseObject}\nfo.valueOf: ${falseObject.valueOf()}`)

console.log("1.", falseBoolean == true) //False
console.log("2.", falseObject == true) //False
console.log("3.", !!falseObject) //True
/* 
The first exclamation mark (!falseObject) converts the object to false (because the object is truthy, so ! makes it false). The second exclamation mark (!!falseObject) negates it again, resulting in true.

Si el objeto hubiera sido inicializado con 1 (o cualquier otro número positivo) ¿con ! sería falso y con !! verdadero?

Sí, el resultado sería el mismo.
Si inicializas el objeto así:

const trueObject = new Boolean(1);

o con cualquier otro número distinto de cero, sigue siendo un objeto, y todos los objetos en JavaScript son "truthy".

!trueObject será false (porque el objeto es truthy, y el operador ! lo invierte).
!!trueObject será true (porque el operador !! lo convierte a booleano, y cualquier objeto es truthy).
Esto ocurre sin importar el valor interno del objeto Boolean.
Solo los valores primitivos (true, false, 0, 1, etc.) se comportan como esperarías con ! y !!. Los objetos siempre son truthy.
*/
