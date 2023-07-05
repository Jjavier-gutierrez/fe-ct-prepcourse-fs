/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   
   return string;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
 var x;
 var y;
 var r;
 var r =(x+y);
 return r;
   
}

function resta(x, y) {
  var x;
  var y;
  var r;
  var r = (x-y);
  return r;
 
}

function divide(x, y) {
  var x;
  var y;
  var r;
  var r = (x/y);
  return r;
}

function multiplica(x, y) {
  var x; 
  var y;
  var r;
  var r = (x*y);
  return r;
}

function obtenerResto(x, y) {
   var x;
   var y;
   var r;
   var r = (x%y);
   return r;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
