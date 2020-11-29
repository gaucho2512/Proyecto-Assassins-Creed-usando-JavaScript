
/*  Iterar el arreglo con un ciclo FOR
    (primera forma de mostrar la tabla) */
                                         


let TablaDinamica = (Objetos) => {
   
    let theadEl = document.createElement("thead");
    let trEl = document.createElement("tr");

   

    
    for (let i = 0; i < Objetos.length; i++) {
         let thEl = document.createElement("th");
         thEl.innerHTML = Objetos[i];
        
      
         trEl.appendChild(thEl);
    }
    
         theadEl.appendChild(trEl);
        
    
  };
  
  let crearFila = (elemento) => {
     let trEl = document.createElement("tr");
    
    for (clave in elemento) {
     let tdEl = document.createElement("td");
     tdEl.classList.add("td-Elementos")
     tdEl.innerHTML = elemento[clave];
     
      trEl.appendChild(tdEl);
    }
   
    return trEl;
  };

  
  let crearCuerpo = (elementos) => {
    let tbodyEl = document.createElement("tbody");
    for (let i = 0; i < elementos.length; i++) {
      tbodyEl.appendChild(crearFila(elementos[i]));
    }
   
    tableEl.appendChild(tbodyEl);
  };

 















