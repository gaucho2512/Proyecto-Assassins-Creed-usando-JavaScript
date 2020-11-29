
/* Proceso de la tabla dinamica ---- primera manera, a traves de un FOReach */

const cargarTabla = () => {

personajes.forEach( personaje => {

  const tHead = document.createElement("thead");
  

  const tr = document.createElement("tr");                       /* no me muestra los titulos ( nombre , origen , caracteristica , etc) */
  tr.innerHTML = ""
  tHead.appendChild(tr)
 

  let tdNombre = document.createElement("td");
  tdNombre.innerHTML = personaje.Nombre;

  tdNombre.classList.add("td-Elementos");
  tr.appendChild(tdNombre);

  let tdOrigen = document.createElement("td")
  tdOrigen.innerHTML = personaje.Origen;
  tdOrigen.classList.add("td-Elementos");
  tr.appendChild(tdOrigen);

  let tdCaracteristica = document.createElement("td");
  tdCaracteristica.innerHTML = personaje.Caracteristica;
 tdCaracteristica.classList.add("td-Elementos");
   tr.appendChild(tdCaracteristica);
  

  let tdHabilidadPrincipal = document.createElement("td");
  tdHabilidadPrincipal.innerHTML = personaje.Habilidad;
  tdHabilidadPrincipal.classList.add("td-Elementos");
  tr.appendChild(tdHabilidadPrincipal);

  let tdAccion = document.createElement("button")     /* no me deja ponerle un setAttribute a los 2 botones */
  tdAccion.innerHTML = personaje.Accion;
  tdAccion.classList.add("td-Elementos");
  tdAccion.classList.add("btn-accion");
   tr.appendChild(tdAccion);

  let tdOpcion = document.createElement("button");
  tdOpcion.innerHTML = personaje.Opcion;
  tdOpcion.classList.add("td-Elementos");
  tdOpcion.classList.add("btn-accion");
  tr.appendChild(tdOpcion);

  tablaDinamica.appendChild(tr);
})
}


/*  funcion del evento BOTON DE AGREGAR + tiempo con un progress bar */
   
let progressBar = () => {

  const barra = document.getElementById("barra");
barra.classList.toggle("final");


  tiempo = setTimeout(mostrarFila, 2000);    /*  me queda la barra siempre fija , no se como hacer para que se oculte */
}


  
    let mostrarFila = () =>{     /*  quiero que se agrege una nueva fila pero no aparece como quiero */

 

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

    let nuevaCelda4 = document.createElement("button")
    nuevaCelda4.innerHTML = nuevaFila
    let nuevaCelda5 = document.createElement("button")
    nuevaCelda5.innerHTML = nuevaFila

    tableEl.appendChild(nuevaFila)
    nuevaFila.appendChild(nuevaCelda)
    nuevaFila.appendChild(nuevaCelda2)
    nuevaFila.appendChild(nuevaCelda3)
    nuevaFila.appendChild(nuevaCelda4)
    nuevaFila.appendChild(nuevaCelda5)
   }


 










































/*  Iterar el arreglo con un ciclo FOR
    (segunda forma de mostrar la tabla)
                                         


let TablaDinamica = (Objetos) => {
   
    let theadEl = document.createElement("thead");
    let trEl = document.createElement("tr");

   

    
    for (let i = 0; i < Objetos.length; i++) {
         let thEl = document.createElement("th");
         thEl.innerHTML = Objetos[i];
        
      
         trEl.appendChild(thEl);
    }
    
         theadEl.appendChild(trEl);
        
    
  };
  
  let crearFila = (elemento) => {
     let trEl = document.createElement("tr");
    
    for (clave in elemento) {
     let tdEl = document.createElement("td");
     tdEl.classList.add("td-Elementos")
     tdEl.innerHTML = elemento[clave];
     
      trEl.appendChild(tdEl);
    }
   
    return trEl;
  };

  
  let crearCuerpo = (elementos) => {
    let tbodyEl = document.createElement("tbody");
    for (let i = 0; i < elementos.length; i++) {
      tbodyEl.appendChild(crearFila(elementos[i]));
    }
   
    tableEl.appendChild(tbodyEl);
  };

 

 */













