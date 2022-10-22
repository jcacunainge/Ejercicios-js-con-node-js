const ciudades = new Array("Bogotá","Lima","Santiago", "Montevideo");
const ciudadDestino = "Lima";
let edadPasajero = 17;
let estaAcompañado = false;

console.log('Verificando pasaje para la ciudad'+ciudadDestino)
//Verificamos la reglas de viaje
if (edadPasajero >= 18 || estaAcompañado){
    //Evaluamos si la ciudad esta disponible
    if(ciudades.indexOf(ciudadDestino) >=0){
        console.log('Pasaje disponible para venta');
    }
    else{
        console.log('Ciudad no disponible o el pasajero no esta acomañado')
    }
}
else{
    if (edadPasajero >= 16 && ciudadDestino == 'Lima' ){
        console.log('Puede viajar a lima si es mayor de 16 años')
    }
}






