//Paso numero 1
const items = document.getElementById("items");
const templateCard = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment(); //Memoria volatil

//Creamos el let carrito para ir llenandolo poco a poco
let carrito = {};

document.addEventListener("DOMContentLoaded", ()=> {
    fetchData();
});

// para que los items o elementos dectecten el clik cuarto paso
items.addEventListener("click", e =>{
    addCarrito(e);
})


//Funcion para conectarse al json , paso numero dos
const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json();
        //console.log(data)
        pintarCards(data)
    } catch (error){
        console.log(error)
    }
};

//Paso numero tres
const pintarCards = data =>{
    //Recorremos el array data, de nuestro json, para separarlos y leerlo uno por uno, con sus respectivos elementos... precios, img, titulo.
    //ForEach porque esta en un json 
    data.forEach(producto => {

        templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl); //Agregamos la imagen
        templateCard.querySelector('h5').textContent = producto.title; //Agregamos los titulos
        templateCard.querySelector('p').textContent = producto.precio; //Agregamos los precios
        templateCard.querySelector('.btn-dark').dataset.id = producto.id; //Agregamos el botom de compra, con el respectivo id del producto
       
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)

    });

    //Pasamos el fragmen al items, que es nuestro contenedor...
    items.appendChild(fragment);
} 

//Paso cinco, para saber si el elemento al que le damos clik contiene la clase que queremos
//Para buscar la clase del botom
const addCarrito = e =>{
    //console.log(e.target)
    //console.log(e.target.classList.contains("btn-dark"))
    if(e.target.classList.contains("btn-dark")){
        //Console para selecionar todo nuestra card
        //console.log(e.target.parentElement) //compramos lo que selecionamos
        //Metemos toda la informacion en 
        setCarrito(e.target.parentElement)
    }

    //Para detener cualquier otro evento en nuestros items
    e.stopPropagation()
}

//Paso 7 para seleccinar todos mis elementos y crearlo de forma de un objeto
const setCarrito = objeto =>{
    //Arriba tenemos una coleccion de objetos entonces, hacemos un producto. es decir un solo el
    const producto = {
        //Obtenemos el id del respectivo producto
        id:objeto.querySelector(".btn-dark").dataset.id,
        //Obtenemos el titulo respectivo del producto
        title: objeto.querySelector("h5").textContent,
        //Obtenemos el precio del producto. 
        precio: objeto.querySelector("p").textContent,
        //Cantidad de producto y partimos en 1
        cantidad: 1    
    };
    //Si el producto existe, se le suma uno 
    if (carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad +1
    };
    //Esplicacion Carrito, nuestro elemento

    carrito[producto.id] ={...producto};
    
    //Mostrar el producto con sus elementos.
    //console.log(producto)

    //Mostrar el carrito con los productos agregados
    console.log(carrito)
    
}