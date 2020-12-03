
/* Constante de la tabla dinamica */
const tableEl = document.getElementById("tablaDinamica");




/* Evento de la tabla dinamica*/
window.addEventListener("DOMContentLoaded", () => {
   cargarTabla()
  });



  //Boton agregar personaje // SPINNER
  const agregar = document.getElementById("agregar");
  agregar.addEventListener("click" , spinner);
  
  
  
  
  
  
  // BOTON EDITAR
  const btnEditar = document.getElementById("boton-editar");          /*  esto todavia me falta */
  btnEditar.addEventListener("click", editar );
  
  
  
  // BOTON ELIMINAR
  const btnEliminar = document.getElementById("boton-eliminar");    /*  esto todavia me falta */
  btnEliminar.addEventListener("click" , eliminar );
  


























 