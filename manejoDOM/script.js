
import deleteIcon from "./componets/deleteIcon.js";
import checkComplete from "./componets/checkComplete.js";

const btn = document.querySelector('[data-form-btn]');
//Arrow functions o funciones anonimas

const createTask = (evento) => {
    evento.preventDefault() //Borrar lo que agreguemos en el input 
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li'); //se crea el elemento li, que contiene la tarea e iconos
    task.classList.add("card"); //Se le agrega la clase a el elemnto li
    input.value = ""; 
    const taskContent = document.createElement("div"); //Se crea el contenedor div

    const titleTask = document.createElement('span');
    titleTask.classList.add("task");
    titleTask.innerText = value; // Lo que se coloca en el input
    taskContent.appendChild(checkComplete()); // se creo anteriormente la funcion y se coloca dentro del div, con la funcion indicada al inicio
    taskContent.appendChild(titleTask);

    task.appendChild(taskContent);
    list.appendChild(task);
    task.appendChild(deleteIcon());
};

btn.addEventListener("click", createTask); //crea la tarea al darle cl
