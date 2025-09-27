// Reto: Anagramas


function esAnagrama(palabra1, palabra2) {
    // Normalizamos a minúsculas
    palabra1 = palabra1.toLowerCase();
    palabra2 = palabra2.toLowerCase();
  
    // Si no tienen la misma longitud, no son anagramas
    if (palabra1.length !== palabra2.length) {
      return false;
    }
  
    // Ordenamos y comparamos
    const ordenada1 = palabra1.split("").sort().join("");
    const ordenada2 = palabra2.split("").sort().join("");
  
    return ordenada1 === ordenada2;
  }
  
  console.log(esAnagrama("cinema", "iceman"));   // true
  console.log(esAnagrama("hello", "world"));     // false
  console.log(esAnagrama("Listen", "Silent"));   // true
  console.log(esAnagrama("evil", "vile"));       // true
  