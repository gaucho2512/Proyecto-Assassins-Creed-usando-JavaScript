/*  Datos de los personajes  */

/* Objetos en fotmato JSON */

const tablaDinamica = document.getElementById("tablaDinamica");

let data = ` {

    "personajes" : [ 
     { 
    
        " Nombre": "Ragnar Lodblok",
        " Origen": "Northumbria , Reino Unido",
        " Edad" : "41" ,
        " Caracteristica": "Guerrero Vikingo",
        " Habilidad": "Ojo de Odin" 
      
      
       
       
},
{
        "Nombre": "Alfredo el Grande",
        "Origen": "Winchester , Wessex",
        " Edad" : "65" , 
        "Caracteristica": "Rey de Wessex",
        "Habilidad": "Cruz de Wincher"
        
        
},
{
        "Nombre": "Eivor",
        "Origen": "Noruega , Inglaterra",
        " Edad" : "23" , 
        "Caracteristica": "Guerrero Vikingo",
        "Habilidad": "Sigilio del cuervo"
       
        
},
{
        "Nombre": "Sigurd Styrbjornsson",
        "Origen": "Noruega , Reino Unido",
        " Edad" : "38" , 
        "Caracteristica": "Guerrero Vikingo",
        "Habilidad": "Death Knife"
      
       
},

{
        "Nombre": "Osvaldo de Estanglia",
        "Origen": "Estanglia , Inglaterra",
        " Edad" : "39" , 
        "Caracteristica": "Rey de Estanglia",
        "Habilidad": "Tropa sajona"
        
        
},

{
        "Nombre": "Halfdan Ragnarsson",
        "Origen": "Northumbria , Reino Unido",
        " Edad" : "26" ,
        "Caracteristica": "Guerrero Vikingo",
        "Habilidad": "Espada sesgo"
     
        
}

]
} `


/* Parseo de formato JSON a Javascript  */

let dataParseada = JSON.parse(data);
let clavesProducto = Object.keys(dataParseada.personajes[0]);


/* Filtrar Personajes */

let arrayPersonajes = clavesProducto.filter(function(persona)  {
        return persona.caracteristica === "Guerrero Vikingo";
   })
      .map(function(persona){
          return persona.caracteristica;
      });
          
      
 
   console.log(arrayPersonajes)


 
 


  



 



 







  





