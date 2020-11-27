/*  Iterar el arreglo con un ciclo FOR
    (primera forma de mostrar la tabla) */
                                         



let contenedor = (clavesObjeto) => {
   
    let theadEl = document.createElement("thead");
    let trEl = document.createElement("tr");
   
    for (let i = 0; i < clavesObjeto.length; i++) {
  
      let thEl = document.createElement("th");
     
      thEl.innerHTML = clavesObjeto[i];
      
      trEl.appendChild(thEl);
    }
    
    theadEl.appendChild(trEl);
    
    tableEl.appendChild(theadEl);
  };
  
  let crearFila = (elemento) => {
    
    let trEl = document.createElement("tr");
    
    for (clave in elemento) {
     
      let tdEl = document.createElement("td");
     
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
  
  window.addEventListener("load", () => {
    contenedor(KeysProducto);
    crearCuerpo(dataParseada.personajes);
  });
  
















/*  creacion de los datos de los personajes

    Iterar con un ciclo FOREACH (segunda forma de mostrar la tabla)  */

                                                                           


/* personajes.forEach( personaje => {

   
    const tHead = document.createElement("thead");



    let tdNombre = document.createElement("td");
    tdNombre.innerHTML = personaje.Nombre;
    tr.appendChild(tdNombre);
    tdNombre.classList.add("td-Elementos");

    let tdOrigen = document.createElement("td")
    tdOrigen.innerHTML = personaje.Origen;
    tr.appendChild(tdOrigen);
    tdOrigen.classList.add("td-Elementos");

    let tdCaracteristica = document.createElement("td");
    tdCaracteristica.innerHTML = personaje.Caracteristica;
    tr.appendChild(tdCaracteristica);
    tdCaracteristica.classList.add("td-Elementos");

    let tdHabilidadPrincipal = document.createElement("td");
    tdHabilidadPrincipal.innerHTML = personaje.Habilidad;
    tr.appendChild(tdHabilidadPrincipal);
    tdHabilidadPrincipal.classList.add("td-Elementos");

    let tdAccion = document.createElement("button");
    tdAccion.innerHTML = personaje.Accion;
    tr.appendChild(tdAccion);
    tdAccion.classList.add("td-Elementos");
    tdAccion.classList.add("btn-accion");

    
    let tdOpcion = document.createElement("button");
    tdOpcion.innerHTML = personaje.Opcion;
    tr.appendChild(tdOpcion);
    tdOpcion.classList.add("td-Elementos");
    tdOpcion.classList.add("btn-accion");



    tHead.appendChild(tr);


})

 */








 