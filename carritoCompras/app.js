const items = document.getElementById("items");
const card = document.getElementById("template-card").contentEditable;
const fragment = document.createDocumentFragment();

document.addEventListener("DOMContentLoaded", ()=> {
    fetchData();
});

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
        template
    });
} 
