
/* Constante de la tabla */
const tableEl = document.getElementById("tablaDinamica");


/* Evento de la tabla dinamica*/
window.addEventListener("DOMContentLoaded", () => {
    TablaDinamica(KeysProducto);
    crearCuerpo(dataParseada.personajes);
  });
  


/* Boton agregar personaje */
const agregar = document.getElementById("agregar");
agregar.classList.add("agregar");
agregar.addEventListener("click" , () => {

    let timer = setTimeout(bang , 5000)

   
    
    let nuevaFila = document.createElement("tr");
    nuevaFila.classList.add("td-Elementos")
    nuevaFila.innerHTML = tableEl
   

    let nuevaCelda = document.createElement("th");
    nuevaFila.classList.add("tr-Elementos")
    nuevaCelda.innerHTML = nuevaFila

    let nuevaCelda2 = document.createElement("th");
    nuevaCelda2.innerHTML = nuevaFila

    let nuevaCelda3 = document.createElement("th");
    nuevaCelda3.innerHTML = nuevaFila

   
    tableEl.appendChild(nuevaFila)
    nuevaFila.appendChild(nuevaCelda)
    nuevaFila.appendChild(nuevaCelda2)
    nuevaFila.appendChild(nuevaCelda3)
   
    })

 


btn = document.getElementById("btn")









 