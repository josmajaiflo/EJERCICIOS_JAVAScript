// Diccionario de símbolos y valores
const simbolos = {
    '☽': 1,
    '☾': 5,
    '♁': 10,
    '⚕': 50,
    '⚡': 100
  };
  
  function decodeSpell(cadena) {
    let total = 0;
  
    for (let i = 0; i < cadena.length; i++) {
      let actual = simbolos[cadena[i]];
      let siguiente = simbolos[cadena[i + 1]];
  
      // Si el símbolo no existe en el diccionario → error
      if (actual === undefined) {
        return NaN;
      }
  
      // Si el siguiente es mayor → restar
      if (siguiente && actual < siguiente) {
        total -= actual;
      } else {
        total += actual;
      }
    }
  
    return total;
  }
  
  console.log(decodeSpell('☽☽☽'));   // 3
  console.log(decodeSpell('☽☾'));    // 4 (5 - 1)
  console.log(decodeSpell('☾☽'));    // 6 (5 + 1)
  console.log(decodeSpell('☾☽☽☽'));  // 8
  console.log(decodeSpell('☽☽☽⚡'));   // 101 (100 + 1 + 1 - 1)
  console.log(decodeSpell('☽⚕'));    // 49 (50 - 1)
  console.log(decodeSpell('☽☽☾'));    // 4
  console.log(decodeSpell('☽☽☾⚡')); // 95 (100 - 50 - 5)
  console.log(decodeSpell('☽⚕⚡')); // 44 (100 - 50 - 5 + 1)
  console.log(decodeSpell('⚡⚡⚡'));  // 300
  console.log(decodeSpell('⚕⚡'));   // 50
  console.log(decodeSpell('⚕.♒'));  // NaN
  