const items = document.getElementById("items");
const templateCard = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();

document.addEventListener("DOMContentLoaded", ()=> {
    fetchData();
});

items.addEventListener("click", e =>{
    addCarrito(e)
})

const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        //console.log(data)
        pintarCards(data)
    } catch (error){
        console.log(error)
    }
};

const pintarCards = data =>{
    //Recorremos el array data, de nuestro json, para separarlos y leerlo uno por uno, con sus respectivos elementos... precios, img, titulo.
    data.forEach(producto => {
        templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
        templateCard.querySelector('h5').textContent = producto.title
        templateCard.querySelector('p').textContent = producto.precio
        templateCard.querySelector('.btn-dark').dataset.id = producto.id


        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    });
    items.appendChild(fragment)
} 


const addCarrito = e =>{

}