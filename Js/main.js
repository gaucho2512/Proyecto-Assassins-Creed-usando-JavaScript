/*  Datos de los personajes  */

/* Objetos en fotmato JSON */

const tablaDinamica = document.getElementById("tablaDinamica");

let data = ` {

    "personajes" : [ 
     { 
    
        " Nombre": "Ragnar Lodblok",
        " Origen": "Northumbria , Reino Unido",
        " Caracteristica": "Guerrero Vikingo",
        " Habilidad": "Ojo de Odin" 
      
       
       
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

]
} `


/* Parseo de formato JSON a Javascript  */

let dataParseada = JSON.parse(data);
let clavesProducto = Object.keys(dataParseada.personajes[0]);
   



 
 


  



 



 







  





