//Usamos DOOM para selecionar resultado a mostrar
const result = document.querySelector(".result");
//Selecionamos mediante DOOM el formulario con su clase
const form = document.querySelector(".get-weather");
//Selecionamos el input con su respectivo id
const nameCity = document.querySelector("#city");
//Selecionamos el input con su respectivo id
const nameCountry = document.querySelector("#country");


form.addEventListener("submit", (e) => {
    //Quitarle el funcionamiento normal del formulario
    e.preventDefault()

    //si ambos campos estan vacios, le mandamos un mensaje
    if(nameCity.value === "" || nameCountry.value === ""){
        showError("Ambos campos son obligatorios...");
        return;
    }
    //Obtener en consola el valor que escribimos en el input
    //console.log(nameCity.value)

    //Paso cuarto
    //Crear la funcion para llamar a la API
    llamarApi(nameCity.value, nameCountry.value);
});

//Paso cuarto llamar la API
function llamarApi(city, country){
    //Nuestra lla de la API, se nos da a registrarnos
    const apiId = '670c083ced35708779306dc319c1ca96';
    //La url con los parametros a utilizar
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}`;

    //Creamos una promesa, que recibe unos datos, y esos datos los convierte a formato JSON
    fetch(url).then(data =>{
        return data.json()
    })
    .then(dataJSON => {
        //En el json hay un atributo llamado cod, es como un codigo
        //Y el condigo cuando no se encuentra la ciudad es 404
        if(dataJSON.cod === "404"){
            showError("Ciudad no encontrada...")
        }else{
            clearHmtl();
            showWeather(dataJSON)
        }
        //console.log(dataJSON)
    });

};


//Paso cinco

function showWeather(data){
    //En nuestro data que es nuestro json, buscamos los datos a mostrar. 
    const {name, main:{temp, temp_min, temp_max}, weather:[arr]} = data;

    const degress = kelvinToCentigrade(temp);
    const min = kelvinToCentigrade(temp_min);
    const max = kelvinToCentigrade(temp_max);

    //Creamos el conten que va guardar la informacion a consultar.
    const content = document.createElement('div');
    content.innerHTML = `
    <h5>Clima en ${name}:</h5>
    <img src="http://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="icono">
    <h2>${degress}°C</h2>
    <p>Max: ${min}°C</p>
    <p>Min: ${max}°C</p>
    `;

    //resulta es el padre de los resultados, entonces le pasamos el contesn
    result.appendChild(content)

    //console.log(name);
    //console.log(temp);
    //console.log(temp_min);
    //console.log(temp_max);
    //console.log(arr.icon); buscamos el icono mediante su nombre icon
}



//Paso Tres de tres
function showError(message){
    // Mostramos en la consola el mensaje ya colocado arriba cuando le pasamos el parametro a la funcion
    //console.log(message)
    //Creamos un elemento html, mediante js
    const alert = document.createElement('p');
    //Le agregamos la clase nuestro elemnto html, se encuentra en estilos.
    alert.classList.add('alert-message');
    //Mediante innerHTML, le pasamos el mensaje, que es el parametro de la funcion showError
    alert.innerHTML = message;
    //Le pasamos el elemento creado el padre que es formulario. 
    form.appendChild(alert);

    //Los mensajes se crean infinitamente entonces para elimincarlos lo con lo siguiente

    setTimeout(()=>{ //Elimina el alerta despues de 3 segundos
        alert.remove();
    }, 3000);
};

//Funcion para convertir de centigrados a grados kelvin
function kelvinToCentigrade(temp){
    return parseInt(temp - 273.15);
};

//Funtion limpiar

function clearHmtl(){
    result.innerHTML="";
}