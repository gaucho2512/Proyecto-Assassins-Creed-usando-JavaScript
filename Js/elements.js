
/* Constante de la tabla dinamica */
const tableEl = document.getElementById("tablaDinamica");




/* Evento de la tabla dinamica*/
window.addEventListener("DOMContentLoaded", () => {
   cargarTabla()
  });



  //Boton agregar personaje // SPINNER
  const agregar = document.getElementById("agregar");
  agregar.addEventListener("click" , agregarPersonaje);
  
  
  
  
  
  
  // BOTON EDITAR
          /*  esto todavia me falta */
  const btnEditar = document.getElementById("boton-editar")
  btnEditar.addEventListener("click", editar );
  
  
  
  // BOTON ELIMINAR
     /*  esto todavia me falta */
  const btnEliminar = document.getElementById("boton-eliminar"); 
  btnEliminar.addEventListener("click" , eliminar );
  


























 