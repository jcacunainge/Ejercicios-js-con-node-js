const ciudades = new Array("Bogotá","Lima","Santiago", "Montevideo");
const ciudadDestino = "Lima";
let valorPasaje = 0;

switch(ciudadDestino){
    case "Bogotá": 
        valorPasaje = 500;
        break // Es para que no evalue los otros casos
    case "Lima": 
        valorPasaje = 400;
        break // Es para que no evalue los otros casos
    case "Santiago": 
        valorPasaje = 300;
        break // Es para que no evalue los otros casos
    case "Montevideo": 
        valorPasaje = 200;
        break // Es para que no evalue los otros casos
    default:
        valorPasaje = 0;
        break // Es para que no evalue los otros casos
}
console.log(`El valor del pasaje es: ${valorPasaje}`)