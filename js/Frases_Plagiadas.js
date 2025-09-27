// Reto: Frases Plagiadas

function normalizar(frase) {
    return frase
      .trim() // quitar espacios al inicio y al final
      .toLowerCase() // pasar a minúsculas
      .replace(/[.!?]$/, ""); // quitar puntuación final si existe
  }
  
  function detectarPlagio(base, frasesEstudiante) {
    const baseNormalizada = base.map(normalizar);
    const plagiadas = [];
  
    for (const frase of frasesEstudiante) {
      const fraseNorm = normalizar(frase);
      if (baseNormalizada.includes(fraseNorm)) {
        plagiadas.push(frase);
      }
    }
  
    return plagiadas;
  }
  

  //  Ejemplo de uso en consola

  const base = [
    "El conocimiento es poder.",
    "Aprender nunca es una pérdida de tiempo!",
    "Programar es divertido",
  ];
  
  const frasesEstudiante = [
    " el conocimiento es poder",
    " Aprender nunca es una pérdida de tiempo ",
    "programar es divertido.",
    "La práctica hace al maestro",
  ];
  
  console.log("👉 Frases plagiadas:");
  console.log(detectarPlagio(base, frasesEstudiante));
  //  [" el conocimiento es poder", " Aprender nunca es una pérdida de tiempo ", "programar es divertido."]
  