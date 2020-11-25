/* creacion de los datos de los personajes  */
personajes.forEach( personaje => {

  
    const tr = document.createElement("tr");

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



    tbodyID.appendChild(tr);


})




