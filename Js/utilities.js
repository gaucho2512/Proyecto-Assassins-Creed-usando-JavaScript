
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
window.addEventListener("load", () => {
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
   const mostrarFila = () => {
   
    let newRow = document.createElement("tr");
    
    let newCellNombre = document.createElement("td");
    newCellNombre.classList.add("td-Elementos")
    newCellNombre.innerHTML = nombreModal.value;

    let newCellOrigen = document.createElement("td");
    newCellOrigen.classList.add("td-Elementos")
    newCellOrigen.innerHTML = origenModal.value;

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
    newRow.appendChild(newCellCaracteristica)
    newRow.appendChild(newCellHabilidad)
    newRow.appendChild(newCellBtnEditar)
    newRow.appendChild(newCellBtnEliminar) 

    barraSpinner = document.getElementById("boton-cargar")
    barraSpinner.classList.remove("visible");
   };
  
   /* Evento agregar personaje */
  let btnAgregar = document.getElementById("agregar");
  btnAgregar.addEventListener("click", agregarPersonaje);

 



/* Funcion MODAL ELIMINAR PERSONAJE */                                     // falta a medias
const btnEliminarModal = document.getElementById("btn-eliminar-modal");
eliminarPersonaje = () => {

document.getElementById("tablaDinamica").deleteRow(-1);
}
/* evento eliminar */
btnEliminarModal.addEventListener("click" , eliminarPersonaje );





/* Funcion MODAL EDITAR PERSONAJE */                                    // todavia falta
const btnEditarModal = document.getElementById("btn-editar-modal");

editarPersonaje = () => {

  
  

 
}
/* evento editar */                                         
btnEditarModal.addEventListener("click" , editarPersonaje );




/* Funcion mostrar filtro */                                            // a medias

const mostrarFiltro = () => {
   const buscadorFiltro = document.getElementById("buscador-filtro");
   buscadorFiltro.classList.remove("hidden-filtro");
}
const checkboxFiltro = document.getElementById("checkbox-filtro");
checkboxFiltro.addEventListener("click" , mostrarFiltro);


/* Buscar por filtrado */

const btnFiltro = document.getElementById("btn-filtro");
btnFiltro.addEventListener("click" , () => {
  alert("se esta buscando")
} )







