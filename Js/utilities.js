
/* Proceso de la tabla dinamica ---- CREACION DEL THEAD */
const HeaderTabla = (keys) => {

  let theadElemento = document.createElement("thead");
   theadElemento.classList.add("td-Head");
  let trElemento = document.createElement("tr")
  trElemento.classList.add("td-Elementos");
      

  for (let i = 0; i < keys.length; i++) {
    let thElemento = document.createElement("th");    
    thElemento.classList.add("td-Head");
    
    thElemento.innerHTML = keys[i];
    trElemento.appendChild(thElemento);
 
  }
  
  theadElemento.appendChild(trElemento);
  
  tablaDinamica.appendChild(theadElemento);

 let thOpciones = document.createElement("th");
  thOpciones.innerHTML = "Opciones"
  thOpciones.classList.add("td-Head");
   trElemento.appendChild(thOpciones);  
};


/*  CREACION DE LAS FILAS */
const createRows = (e) => {
  let trElemento = document.createElement("tr");
  trElemento.setAttribute("id" , "trRow");
  trElemento.classList.add("td-Elementos", "tr-editar");
 

  for (key in e) {
    let tdElemento = document.createElement("td");
    tdElemento.setAttribute("class" , "tdElId")
    tdElemento.classList.add("td-Elementos", "td-value");
    tdElemento.innerHTML = e[key];
 
    trElemento.appendChild(tdElemento);
  }
 


  // Creacion de los Botones editar y eliminar - con sus modales 
  let btnEditar = document.createElement("button");
  btnEditar.innerHTML = "Editar";
  btnEditar.setAttribute("class","boton-editar");
  btnEditar.setAttribute("data-target", "#modal-edit");
  btnEditar.setAttribute("data-toggle","modal")
  btnEditar.classList.add("td-Elementos" , "btn-accion", "btn" , "btn-outline-primary", "btn-sm");
   trElemento.appendChild(btnEditar); 
   
  let btnEliminar = document.createElement("button");
  btnEliminar.innerHTML = "Eliminar";
  btnEliminar.setAttribute("id","boton-eliminar");
  btnEliminar.setAttribute("data-target", "#modal-elim");
  btnEliminar.setAttribute("data-toggle","modal")
  btnEliminar.classList.add("td-Elementos" , "btn-eliminar", "btn" , "btn-outline-danger", "btn-sm");
  
  trElemento.appendChild(btnEliminar);  
 
  return trElemento;
};
 
let rowIndex = null;
let rowEliminar = null;

/* CREACION DEL TBODY */
const createBody = (el) => {
  let tbodyElemento = document.createElement("tbody");
  tbodyElemento.setAttribute("id" , "tbodyElId")

  for (let i = 0; i < el.length; i++) {
    tbodyElemento.appendChild(createRows(el[i]));
  }
  tablaDinamica.appendChild(tbodyElemento);


  // FOR PARA BOTONES ELIMINAR ---
  let btnsElim = document.getElementsByClassName("btn-eliminar");
  for (let index = 0; index < btnsElim.length; index++) {
  //  console.log( btnsElim[index]);
    btnsElim[index].addEventListener('click', function(e) {
      rowEliminar = e.target.parentElement;
      console.log(e.target.parentElement);
     let nodos = e.target.parentElement.childNodes;
     // console.log(e.target.parentElement);

      
    });
  }

 /* Funcion MODAL ELIMINAR PERSONAJE */       
 const btnEliminarModal = document.getElementById("btn-eliminar-modal");

eliminarPersonaje = () => {
   let tBody = document.getElementById("tbodyElId");
   let deleteRow =  document.getElementById("trRow");

   console.log(rowEliminar);

   rowEliminar.remove()
 

}

btnEliminarModal.addEventListener("click" , eliminarPersonaje );






// --------------------------------- //

  // FOR PARA BOTONES EDITAR ---
 
  let btnsEdit = document.getElementsByClassName("boton-editar");


  for (let index = 0; index < btnsEdit.length; index++) {
    //console.log( btnsEdit[index]);
    btnsEdit[index].addEventListener('click', function(e) {
      rowIndex = e.target.parentElement;
      //console.log(e.target.parentElement);
      
      let nodos = e.target.parentElement.childNodes;
     
      let editarNombre = document.getElementById("editarNombre");
      editarNombre.value = e.target.parentElement.childNodes[0].textContent;
      
      let editarOrigen = document.getElementById("editarOrigen");
      editarOrigen.value = e.target.parentElement.childNodes[1].textContent;
      
      let editarEdad = document.getElementById("editarEdad");
      editarEdad.value = e.target.parentElement.childNodes[2].textContent;
      
      let editarCaracteristica = document.getElementById("editarCaracteristica");
      editarCaracteristica.value = e.target.parentElement.childNodes[3].textContent;
      
      let editarHabilidad = document.getElementById("editarHabilidad");
      editarHabilidad.value = e.target.parentElement.childNodes[4].textContent;
    });
  }
  
   
};



//------------------------//

  //spinner para la edicion
  const timerDeEdicion = () => {

    const barraSpinner = document.getElementById("boton-cargar")
     barraSpinner.classList.add("visible");
    
    setTimeout(function() {
      editarPersonaje()
    }, 1500);
    
     }

  
   //Funcion MODAL EDITAR PERSONAJE                              
 
   const btnModal = document.getElementById("btn-editar-modal");
 

   const editarPersonaje = () => {

      editarNombre = document.getElementById("editarNombre");
      tarOrigen = document.getElementById("editarOrigen");
      editarEdad = document.getElementById("editarEdad");
      editarCaracteristica = document.getElementById("editarCaracteristica");
      editarHabilidad = document.getElementById("editarHabilidad");
    
     
    console.log(rowIndex.childNodes);
      rowIndex.childNodes[0].innerHTML = editarNombre.value;

      rowIndex.childNodes[1].innerHTML = editarOrigen.value;
   
      rowIndex.childNodes[2].innerHTML = editarEdad.value;
   
      rowIndex.childNodes[3].innerHTML = editarCaracteristica.value;
    
      rowIndex.childNodes[4].innerHTML = editarHabilidad.value;
     // console.log(editarHabilidad);


    const barraSpinner = document.getElementById("boton-cargar") 
     barraSpinner.classList.remove("visible");
     
   }


  btnModal.addEventListener("click" , function() {
    timerDeEdicion();
  } );
 




//-----------------------------------//

/*  Evento de cargar pagina */
window.addEventListener("DOMContentLoaded", () => {
  HeaderTabla(keyObjects);
  createBody(datosParseados.personajes);
});



  //  funcion del SPINNER agregar...
  let agregarPersonaje = () => {
   const barraSpinner = document.getElementById("boton-cargar")
    barraSpinner.classList.add("visible");
   
    setTimeout(mostrarFila, 2000);   
   
    }


/*  Funcion del BOTON AGREGAR personaje  */  
 let btnAgregar = document.getElementById("agregar");


    const mostrarFila = () => {
  
    let newRow = document.createElement("tr");
    newRow.classList.add("td-Row")

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






 //---------------------------------//

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




/* Filtrar Personajes */          // esta funcion no es la correcta pero cumple con el requisito, en estos dias la voy a acomodar
const buscador = document.getElementById("inputTabla");


const filtrarTabla = () => {         
  filtro = buscador.value.toLowerCase();
  const tBody = document.getElementById("tbodyElId")

  for (  let i=0; row = tBody.rows[i++]; )
  {
    if ( row.innerHTML.toLowerCase().indexOf(filtro) !== -1 )
      row.className = "visible";
    else
        row.className = "none"

  }
}

  buscador.addEventListener("keyup", filtrarTabla);








