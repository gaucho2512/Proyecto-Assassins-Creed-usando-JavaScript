/*  Datos de los personajes  */

/* Objetos en fotmato JSON */

const tablaDinamica = document.getElementById("tablaDinamica");

let datos = ` {

    "personajes" : [ 
     { 
    
        " Nombre": "Ragnar Lodblok",
        " Origen": "Northumbria , Reino Unido",
        " Edad" : "41" ,
        " Caracteristica": "Guerrero Vikingo",
        " Habilidad": "Ojo de Odin" 
      
      
       
       
},
{
        "nombre": "Alfredo el Grande",
        "origen": "Winchester , Wessex",
        "edad" : "65" , 
        "caracteristica": "Rey de Wessex",
        "habilidad": "Cruz de Wincher"
        
        
},
{
        "nombre": "Eivor",
        "origen": "Noruega , Inglaterra",
        "edad" : "23" , 
        "caracteristica": "Guerrero Vikingo",
        "habilidad": "Sigilio del cuervo"
       
        
},
{
        "nombre": "Sigurd Styrbjornsson",
        "origen": "Noruega , Reino Unido",
        "edad" : "38" , 
        "caracteristica": "Guerrero Vikingo",
        "habilidad": "Death Knife"
      
       
},

{
        "nombre": "Osvaldo de Estanglia",
        "origen": "Estanglia , Inglaterra",
        "edad" : "39" , 
        "caracteristica": "Rey de Estanglia",
        "habilidad": "Tropa sajona"
        
        
},

{
        "nombre": "Halfdan Ragnarsson",
        "origen": "Northumbria , Reino Unido",
        "edad" : "26" ,
        "caracteristica": "Guerrero Vikingo",
        "habilidad": "Espada sesgo"
     
        
}

]
} `


/* Parseo de formato JSON a Javascript  */

let datosParseados = JSON.parse(datos);
let keyObjects = Object.keys(datosParseados.personajes[0]);






 
 


  



 



 







  





