// Reto: Frutas Envasadas

// Función principal
function frutaEmpacadaCorrectamente(entrada, salida) {
    const pila = [];
    let i = 0; 
  
    for (const fruta of entrada) {
      pila.push(fruta); 
  
      while (pila.length > 0 && pila[pila.length - 1] === salida[i]) {
        pila.pop();
        i++;
      }
    }
  
    // Si logramos vaciar la pila, es válido
    return pila.length === 0;
  }
  
  console.log(frutaEmpacadaCorrectamente(
    ['manzana', 'banana', 'kiwi'],
    ['kiwi', 'banana', 'manzana']
  )); 

  
  console.log(frutaEmpacadaCorrectamente(
    ['manzana', 'banana', 'kiwi'],
    ['banana', 'kiwi', 'manzana']
  )); 
  //  false → no se puede lograr con una pila
  