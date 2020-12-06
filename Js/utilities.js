
/* Proceso de la tabla dinamica ---- primera manera, a traves de un FOReach */

const cargarTabla = () => {

  const tHead = document.createElement("thead");
  let TR = document.createElement("tr")
  let td1 = document.createElement("td")
  td1.classList.add("td-Head");
  td1.innerHTML = "NOMBRE";
  let td2  = document.createElement("td")
  td2.classList.add("td-Head");
  td2.innerHTML = "ORIGEN";
  let td3 = document.createElement("td")
  td3.classList.add("td-Head");
  td3.innerHTML = "CARACTERISTICA";
  let td4 = document.createElement("td")
  td4.classList.add("td-Head");
  td4.innerHTML = "HABILIDAD";
  let td5 = document.createElement("td")
  td5.classList.add("td-Head");
  td5.innerHTML = "OPCION";
 

  tHead.appendChild(TR);
  TR.appendChild(td1)
  TR.appendChild(td2)
  TR.appendChild(td3)
  TR.appendChild(td4)
  TR.appendChild(td5)


  // recorro los datos con un FOReach...
 
  personajes.forEach( personaje => {

  tablaDinamica.appendChild(tHead)

  let tr = document.createElement("tr")
  tr.classList.add("td-Elementos");

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

  let tdAccion = document.createElement("button")   
  tdAccion.innerHTML = personaje.Accion;
  tdAccion.setAttribute("id","boton-editar")
  tdAccion.classList.add("td-Elementos" , "btn-accion", "btn" , "btn-outline-primary", "btn-sm")
  tr.appendChild(tdAccion);

  let tdOpcion = document.createElement("button");
  tdOpcion.innerHTML = personaje.Opcion;
  tdOpcion.setAttribute("id","boton-eliminar")
  tdOpcion.classList.add("td-Elementos" , "btn-eliminar", "btn" , "btn-outline-danger", "btn-sm")
  tr.appendChild(tdOpcion);

    
})
}


  //  funcion del SPINNER...
   
  let agregarPersonaje = () => {
   const barraSpinner = document.getElementById("boton-cargar")
    barraSpinner.classList.add("visible");
   
    setTimeout(mostrarFila, 2000);   
   
    }


/*  Funcion para mostrar los datos agregados en la tabla */

    let mostrarFila = () =>{  

   nombreModal = document.getElementById("nombreModal");
   origenModal = document.getElementById("origenModal");
   caracteristicaModal = document.getElementById("caracteristicaModal");
   habilidadModal = document.getElementById("habilidadModal");
    

      
      let nuevaFila = document.createElement("tr");
    nuevaFila.classList.add("td-Elementos")

    let nuevaCelda = document.createElement("td");
    nuevaCelda.classList.add("td-Elementos")
    nuevaCelda.innerHTML = nombreModal.value;

    let nuevaCelda2 = document.createElement("td");
    nuevaCelda2.classList.add("td-Elementos")
    nuevaCelda2.innerHTML = origenModal.value;

    let nuevaCelda3 = document.createElement("td");
    nuevaCelda3.classList.add("td-Elementos")
    nuevaCelda3.innerHTML = caracteristicaModal.value

    let nuevaCelda4 = document.createElement("td");
    nuevaCelda4.classList.add("td-Elementos")
    nuevaCelda4.innerHTML = habilidadModal.value;

    let nuevaCelda5 = document.createElement("button")
    nuevaCelda5.setAttribute("id","boton-editar")
    nuevaCelda5.classList.add("td-Elementos" , "btn-accion", "btn" , "btn-outline-primary", "btn-sm")
    nuevaCelda5.innerHTML = "Editar"

    let nuevaCelda6 = document.createElement("button")
    nuevaCelda6.setAttribute("id","boton-eliminar")
    nuevaCelda6.classList.add("td-Elementos" , "btn-eliminar", "btn" , "btn-outline-danger", "btn-sm")
    nuevaCelda6.innerHTML = "Eliminar"

    tableEl.appendChild(nuevaFila)
    nuevaFila.appendChild(nuevaCelda)
    nuevaFila.appendChild(nuevaCelda2)
    nuevaFila.appendChild(nuevaCelda3)
    nuevaFila.appendChild(nuevaCelda4)
    nuevaFila.appendChild(nuevaCelda5)
    nuevaFila.appendChild(nuevaCelda6)

    barraSpinner = document.getElementById("boton-cargar").classList.remove("visible");

   }



   // FUNCION EDITAR ---->
  

  const editarPersonaje = () => {
    const mostrarModalEliminar = document.getElementById("modal-editar");
 
  
    
   console.log("se puede editar")

}

  
  




  // FUNCION ELIMINAR ---->



  const eliminarPersonaje = () => {
  const mostrarModalEliminar = document.getElementById("modal-eliminar");
 
  console.log("se elimino")
} 











