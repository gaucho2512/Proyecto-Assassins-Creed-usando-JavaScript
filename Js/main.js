/* PRIMERA FORMA DE MOSTRAR LA TABLA 
creacion de los datos de los personajes  */

/* Array de objetos de personajes */

const tablaDinamica = document.getElementById("tablaDinamica");

const personajes = [{
    
    Nombre: "Ragnar Lodblok",
    Origen: "Northumbria , Reino Unido",
    Caracteristica: "Guerrero Vikingo",
    Habilidad: "Ojo de Odin",
    Accion : "Editar",
    Opcion: "Eliminar" 
},
{
    Nombre: "Alfredo el Grande",
    Origen: "Winchester , Wessex",
    Caracteristica: "Rey de Wessex",
    Habilidad: "Cruz de Wincher",
    Accion : "Editar",
    Opcion: "Eliminar" 
},
{
    Nombre: "Eivor",
    Origen: "Noruega , Inglaterra",
    Caracteristica: "Guerrero Vikingo",
    Habilidad: "Sigilio del cuervo",
    Accion : "Editar",
    Opcion: "Eliminar" 
},
{
    Nombre: "Sigurd Styrbjornsson",
    Origen: "Noruega , Reino Unido",
    Caracteristica: "Guerrero Vikingo",
    Habilidad: "Death Knife",
    Accion : "Editar",
    Opcion: "Eliminar" 
},

{
    Nombre: "Osvaldo de Estanglia",
    Origen: "Estanglia , Inglaterra",
    Caracteristica: "Rey de Estanglia",
    Habilidad: "Tropa sajona",
    Accion : "Editar",
    Opcion: "Eliminar" 
},

{
    Nombre: "Halfdan Ragnarsson",
    Origen: "Northumbria , Reino Unido",
    Caracteristica: "Guerrero Vikingo",
    Habilidad: "Espada sesgo",
    Accion : "Editar",
    Opcion: "Eliminar" 
},

];







/* transformacion de mi objeto JSON ---- SEGUNDA FORMA DE MOSTRAR LA TABLA


 let data = ` {
    "personajes" : [
        {
    "Nombre": "Ragnar Lodblok",
    "Origen": "Northumbria , Reino Unido",
    "Caracteristica": "Guerrero Vikingo",
    "Habilidad": "Ojo de Odin"
    
},
{
    "Nombre": "Alfredo el Grande",
    "Origen": "Winchester , Wessex",
    "Caracteristica": "Rey de Wessex",
    "Habilidad": "Cruz de Wincher"
     
},
{
    "Nombre": "Eivor",
    "Origen": "Noruega , Inglaterra",
    "Caracteristica": "Guerrero Vikingo",
    "Habilidad": "Sigilio del cuervo"
    
},
{
    "Nombre": "Sigurd Styrbjornsson",
    "Origen": "Noruega , Reino Unido",
    "Caracteristica": "Guerrero Vikingo",
    "Habilidad": "Death Knife"
   
},

{
    "Nombre": "Osvaldo de Estanglia",
    "Origen": "Estanglia , Inglaterra",
    "Caracteristica": "Rey de Estanglia",
    "Habilidad": "Tropa sajona"
    
},

{
    "Nombre": "Halfdan Ragnarsson",
    "Origen": "Northumbria , Reino Unido",
    "Caracteristica": "Guerrero Vikingo",
    "Habilidad": "Espada sesgo"
    
        }
    ]  }
    `
  
let dataParseada = JSON.parse(data);


let KeysProducto = Object.keys(dataParseada.personajes[0]);
 



 */







  





