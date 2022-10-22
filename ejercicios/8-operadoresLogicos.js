//Operadores de comparación

const ciudades = new Array("Bogotá","Lima","Santiago", "Montevideo");
const ciudadDestino = "Bogotá";

//Palabra reservada if que evalua una condicion

if (ciudades.indexOf(ciudadDestino) >= 0) {
    console.log('Si se encuentra disponible');
}
else{
    console.log('No se encuentra disponible')
}

//Operadores logicos
// Y (AND) - O (OR) - NO (NOT)
// AND = && SE DEBEN CUMPLIR LAS DOS CONDICIONES
// OR = || SE DEBE CUMPLIR AL MENOS UNA CONDICION 
// NOT = | QUE NO SE CUMPLA LA CONDICION EXPRESADA

const edadPasajero = 19;

if ((ciudades.indexOf(ciudadDestino) >= 0) && edadPasajero >= 18) {
    console.log('SI se encuentra disponible');
}   
else{
    console.log('NO se encuentra disponible');
}