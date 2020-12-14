
/* Proceso de la tabla dinamica ---- CREACION DEL THEAD */
const HeaderTabla = (claves) => {

  let theadEl = document.createElement("thead");
   theadEl.classList.add("td-Head");
  let trEl = document.createElement("tr")
  trEl.classList.add("td-Elementos");
      

  for (let i = 0; i < claves.length; i++) {
    let thEl = document.createElement("th");
    thEl.classList.add("td-Head");
    
    thEl.innerHTML = claves[i];
    trEl.appendChild(thEl);
 
  }
  
  theadEl.appendChild(trEl);
  
  tablaDinamica.appendChild(theadEl);

 let thOpciones = document.createElement("th");
  thOpciones.innerHTML = "Opciones"
  thOpciones.classList.add("td-Head");
   trEl.appendChild(thOpciones);  
};


/*  CREACION DE LAS FILAS */
const createRows = (elemento) => {
  let trEl = document.createElement("tr");
  trEl.setAttribute("id" , "trRow");
  trEl.classList.add("td-Elementos");
 

  for (clave in elemento) {
    let tdEl = document.createElement("td");
    tdEl.setAttribute("id" , "tdElId")
    tdEl.classList.add("td-Elementos");
    tdEl.innerHTML = elemento[clave];
 
    trEl.appendChild(tdEl);
  }
 


  // Creacion de los Botones editar y eliminar - con sus modales 
  let btnEditar = document.createElement("button");
  btnEditar.innerHTML = "Editar";
  btnEditar.setAttribute("id","boton-editar");
  btnEditar.setAttribute("data-target", "#modal-edit");
  btnEditar.setAttribute("data-toggle","modal")
  btnEditar.classList.add("td-Elementos" , "btn-accion", "btn" , "btn-outline-primary", "btn-sm");
  
   trEl.appendChild(btnEditar); 
   
  let btnEliminar = document.createElement("button");
  btnEliminar.innerHTML = "Eliminar";
  btnEliminar.setAttribute("id","boton-eliminar");
  btnEliminar.setAttribute("data-target", "#modal-elim");
  btnEliminar.setAttribute("data-toggle","modal")
  btnEliminar.classList.add("td-Elementos" , "btn-eliminar", "btn" , "btn-outline-danger", "btn-sm");
  
  trEl.appendChild(btnEliminar);  
 
  return trEl;
};
 

/* CREACION DEL TBODY */
const createBody = (elementos) => {
  let tbodyEl = document.createElement("tbody");
  tbodyEl.setAttribute("id" , "tbodyElId")

  for (let i = 0; i < elementos.length; i++) {
    tbodyEl.appendChild(createRows(elementos[i]));
  }
  
  tablaDinamica.appendChild(tbodyEl);
};


/*  Evento de cargar pagina */
window.addEventListener("DOMContentLoaded", () => {
  HeaderTabla(clavesProducto);
  createBody(dataParseada.personajes);
});



  //  funcion del SPINNER...
  let agregarPersonaje = () => {
   const barraSpinner = document.getElementById("boton-cargar")
    barraSpinner.classList.add("visible");
   
    setTimeout(mostrarFila, 2000);   
   
    }



/*  Funcion del BOTON AGREGAR personaje */
 let btnAgregar = document.getElementById("agregar");

   const mostrarFila = () => {
  
    let newRow = document.createElement("tr");
    
     let newCellNombre = document.createElement("td");
    newCellNombre.classList.add("td-Elementos")
    newCellNombre.innerHTML = nombreModal.value;

    let newCellOrigen = document.createElement("td");
    newCellOrigen.classList.add("td-Elementos")
    newCellOrigen.innerHTML = origenModal.value;

    let newCellEdad = document.createElement("td");
    newCellEdad.classList.add("td-Elementos")
    newCellEdad.innerHTML = edadModal.value;

    let newCellCaracteristica = document.createElement("td");
    newCellCaracteristica.classList.add("td-Elementos")
    newCellCaracteristica.innerHTML = caracteristicaModal.value

    let newCellHabilidad = document.createElement("td");
    newCellHabilidad.classList.add("td-Elementos")
    newCellHabilidad.innerHTML = habilidadModal.value;

    let newCellBtnEditar = document.createElement("button")
    newCellBtnEditar.setAttribute("id","boton-editar")
    newCellBtnEditar.classList.add("td-Elementos" ,"btn-accion", "btn" , "btn-outline-primary", "btn-sm")
    newCellBtnEditar.innerHTML = "Editar"
    newCellBtnEditar.setAttribute("data-target", "#modal-edit");
    newCellBtnEditar.setAttribute("data-toggle","modal")
    


    let  newCellBtnEliminar = document.createElement("button")
    newCellBtnEliminar.setAttribute("id","boton-eliminar")
    newCellBtnEliminar.classList.add("td-Elementos" , "btn-eliminar", "btn" , "btn-outline-danger", "btn-sm")
    newCellBtnEliminar.innerHTML = "Eliminar"
    newCellBtnEliminar.setAttribute("data-target", "#modal-elim");
    newCellBtnEliminar.setAttribute("data-toggle","modal")
   

    tablaDinamica.appendChild(newRow)
    newRow.appendChild(newCellNombre)
    newRow.appendChild(newCellOrigen)
    newRow.appendChild(newCellEdad)
    newRow.appendChild(newCellCaracteristica)
    newRow.appendChild(newCellHabilidad)
    newRow.appendChild(newCellBtnEditar)
    newRow.appendChild(newCellBtnEliminar) 

    barraSpinner = document.getElementById("boton-cargar")
    barraSpinner.classList.remove("visible");
   };
  
  
  btnAgregar.addEventListener("click", agregarPersonaje);

 
 


/* Funcion MODAL ELIMINAR PERSONAJE */                                     // falta a medias
const btnEliminarModal = document.getElementById("btn-eliminar-modal");

eliminarPersonaje = () => {
document.getElementById("tablaDinamica").deleteRow(-1);
}

btnEliminarModal.addEventListener("click" , eliminarPersonaje );





/* Funcion MODAL EDITAR PERSONAJE */                                    // todavia falta
const btnEditarModal = document.getElementById("btn-editar-modal");

editarPersonaje = () => {

}
                                       
btnEditarModal.addEventListener("click" , editarPersonaje );




/* Funcion boton filtro */ 
const btnFiltro = document.getElementById("checkbox-filtro")

const esconderDiv = () => {
  let div = document.getElementById("inputTabla");
  if(div.className === "visible"){
    div.className = "hidden";

} else {
    div.className = "visible"; 
   
}
  
}

btnFiltro.addEventListener("click",esconderDiv)




/* Filtrar Personajes */
const busqueda = document.getElementById("inputTabla");
const tabla = document.getElementById("tablaDinamica");

const filtrarTabla = () => {
  filtro = busqueda.value.toLowerCase();
 
  for (  let i=0; row = tabla.rows[i++]; )
  {
    if ( row.innerHTML.toLowerCase().indexOf(filtro) !== -1 )
      row.className = null;
    else
    row.className = "none";
  }
}

  busqueda.addEventListener("keyup", filtrarTabla);








