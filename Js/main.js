 /* Constante de la tabla */

 const tableEl = document.getElementById("tablaDinamica")






 /* PRIMERA MANERA DE MOSTRAR LA TABLA */


/* transformacion de mi objeto JSON */


 let data = ` {
    "personajes" : [
        {
    "Nombre": "Ragnar Lodblok",
    "Origen": "Northumbria , Reino Unido",
    "Caracteristica": "Guerrero Vikingo",
    "Habilidad": "Ojo de Odin",
    "Accion" : "editar",
    "Opcion": "eliminar" 
},
{
    "Nombre": "Alfredo el Grande",
    "Origen": "Winchester , Wessex",
    "Caracteristica": "Rey de Wessex",
    "Habilidad": "Cruz de Wincher",
    "Accion" : "editar",
    "Opcion": "eliminar" 
},
{
    "Nombre": "Eivor",
    "Origen": "Noruega , Inglaterra",
    "Caracteristica": "Guerrero Vikingo",
    "Habilidad": "Sigilio del cuervo",
    "Accion" : "editar",
    "Opcion": "eliminar" 
},
{
    "Nombre": "Sigurd Styrbjornsson",
    "Origen": "Noruega , Reino Unido",
    "Caracteristica": "Guerrero Vikingo",
    "Habilidad": "Death Knife",
    "Accion" : "editar",
    "Opcion": "eliminar" 
},

{
    "Nombre": "Osvaldo de Estanglia",
    "Origen": "Estanglia , Inglaterra",
    "Caracteristica": "Rey de Estanglia",
    "Habilidad": "Tropa sajona",
    "Accion" : "editar",
    "Opcion": "eliminar" 
},

{
    "Nombre": "Halfdan Ragnarsson",
    "Origen": "Northumbria , Reino Unido",
    "Caracteristica": "Guerrero Vikingo",
    "Habilidad": "Espada sesgo",
    "Accion" : "editar",
    "Opcion": "eliminar" 
        }
    ]  }
    `
  
let dataParseada = JSON.parse(data);


let KeysProducto = Object.keys(dataParseada.personajes[0]);
 






/* ARREGLO DE OBJETOS ---- segunda forma de mostrar la tabla */


/* let personajes =  [
       

      
  {  Nombre: "Ragnar Lodblok",
    Origen: "Northumbria , Reino Unido",
    Caracteristica: "Guerrero Vikingo",
    Habilidad: "Ojo de Odin",
    Accion : "editar",
    Opcion: "eliminar" 
},
{
    Nombre: "Alfredo el Grande",
    Origen: "Winchester , Wessex",
    Caracteristica: "Rey de Wessex",
    Habilidad: "Cruz de Wincher",
    Accion : "editar",
    Opcion: "eliminar" 
},
{
    Nombre: "Eivor",
    Origen: "Noruega , Inglaterra",
    Caracteristica: "Guerrero Vikingo",
    Habilidad: "Sigilio del cuervo",
    Accion : "editar",
    Opcion: "eliminar" 
},
{
    Nombre: "Sigurd Styrbjornsson",
    Origen: "Noruega , Reino Unido",
    Caracteristica: "Guerrero Vikingo",
    Habilidad: "Death Knife",
    Accion : "editar",
    Opcion: "eliminar" 
},

{
    Nombre: "Osvaldo de Estanglia",
    Origen: "Estanglia , Inglaterra",
    Caracteristica: "Rey de Estanglia",
    Habilidad: "Tropa sajona",
    Accion : "editar",
    Opcion: "eliminar" 
},

{
    Nombre: "Halfdan Ragnarsson",
    Origen: "Northumbria , Reino Unido",
    Caracteristica: "Guerrero Vikingo",
    Habilidad: "Espada sesgo",
    Accion : "editar",
    Opcion: "eliminar" 
       }
    
 ] 
        
     
     */





  





