
/* Constante de la tabla dinamica */
const tableEl = document.getElementById("tablaDinamica");




/* Evento de la tabla dinamica*/
window.addEventListener("DOMContentLoaded", () => {
   cargarTabla()
   
  });



  //Boton agregar personaje // SPINNER
  const agregar = document.getElementById("btn-agregar-modal");
  agregar.addEventListener("click" , agregarPersonaje);
  
  
  
  
  
  
  // BOTON EDITAR


 const btnEditar = document.getElementById("boton-editar")
 btnEditar.addEventListener("click", editarPersonaje)



  
  // BOTON ELIMINAR

  const btnEliminar = document.getElementById("boton-eliminar"); 
  btnEliminar.addEventListener("click" , eliminarPersonaje);
  
 


  


























 