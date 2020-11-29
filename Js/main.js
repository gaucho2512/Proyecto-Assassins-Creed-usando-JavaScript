
 /* PRIMERA MANERA DE MOSTRAR LA TABLA */


/* transformacion de mi objeto JSON */


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
 











  





