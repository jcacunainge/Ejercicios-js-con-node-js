
//forma numero para declarar arrays o listas 
const ciudades = new Array("Bogota","Lima","Santiago");

//forma numero para declarar arrays o listas 
const paisesDisponibles = ["Colombia", "Peru", "Chile", "Argentina", "Brasil"];


paisesDisponibles.push("Uruguay"); //Agrega elemento al final de la lista
ciudades.push("Montevideo"); //Agrega elemento al final de la lista
paisesDisponibles.unshift("Ecuador"); //Agrega elemento al inicio de la lista
ciudades.unshift("Quito"); //Agrega elemento al inicio de la lista

//paisesDisponibles.shift() //Elimina el primer Elemento de una lista
ciudades.pop() //Elimina el ultimo elemento de una lista

//paisesDisponibles.splice(1,1, "Venezuela", "Paraguay") //Agregar o eliminar desde un punto especifico de la lista
//Para mostrar un elementoen especifico se usa: [numero indece a acceder partiendo desde 0]

//Funcion para conocer el tamaño total de 
const cantidadDePaises = paisesDisponibles.length;

//Forma normales de imprimir o de mostrar listas
console.log(ciudades);
console.log(paisesDisponibles);

//Forma 1 de llamar o de imprimir con string
console.log(`En la lista tenemos: ${cantidadDePaises} paises disponibles`);

//Forma 2 de llamar o imprimir con string
console.log("En la lista tenemos:" + " " + cantidadDePaises + " paises disponibles");


//Filtrar elementos de una lista filter
const filtroDePaises = paisesDisponibles.filter((a) => a == "Brasil");
console.log(filtroDePaises);


//Encontrar la posicion de un elemento de una lista
 console.log(paisesDisponibles.indexOf('Peru'));

 //Unir dos listas 
 const ciudadesYPaises = paisesDisponibles.concat(ciudades);
 console.log(ciudadesYPaises);

