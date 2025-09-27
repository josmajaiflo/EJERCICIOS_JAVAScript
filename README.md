 Ejercicios de Programación en JavaScript
Este repositorio contiene una serie de retos de lógica y programación implementados en JavaScript (Node.js).
Cada ejercicio aborda problemas de algoritmos, estructuras de datos y manipulación de strings.

📖 Contenido

🧙 El códice de Arkanus
🤖 Archivos comprometidos
✍️ Frases plagiadas
🧃 Frutas envasadas
👩‍💻 Habilidades compatibles
⏳ Puertas del portal temporal
🔤 Anagramas

⚙️ Instalación

Clona este repositorio en tu máquina local:

git clone https://github.com/tuusuario/ejercicios-js.git
cd ejercicios-js
🧙 El códice de Arkanus
Sistema numérico mágico con símbolos:

Símbolo	Valor
☽	1
☾	5
♁	10
⚕	50
⚡	100
Reglas
Si un símbolo menor aparece antes de uno mayor, se resta.
Símbolos desconocidos → NaN.
Ejemplo
console.log(decodeSpell('☽☾'));    // 4
console.log(decodeSpell('☾☽'));    // 6
console.log(decodeSpell('⚕.♒'));  // NaN
🤖 Archivos comprometidos
Detectar archivos modificados después de la última descarga segura.

Ejemplo
const lastSafeDownload = 1670000000;
const droneLogs = [
  [42, 1670000500],
  [13, 1670000000],
  [8, 1670000700],
  [8, 1670000001],
  [99, 1669999999],
];

console.log(getCompromisedFiles(lastSafeDownload, droneLogs));
// ➞ [8, 42]
✍️ Frases plagiadas
Comparar frases del estudiante con una base de frases sospechosas.

Ejemplo
const base = [
  'El conocimiento es poder.',
  'Aprender nunca es una pérdida de tiempo!',
  'Programar es divertido',
];

const frases = [
  'el conocimiento es poder',
  ' Aprender nunca es una pérdida de tiempo ',
  'programar es divertido.',
  'La práctica hace al maestro',
];

console.log(detectarPlagio(base, frases));
// ➞ ["el conocimiento es poder", " Aprender nunca es una pérdida de tiempo ", "programar es divertido."]
🧃 Frutas envasadas
Validar si la salida de frutas es posible usando una pila (LIFO).

Ejemplo
console.log(frutaEmpacadaCorrectamente(
  ['manzana', 'banana', 'kiwi'],
  ['kiwi', 'banana', 'manzana']
)); // true

console.log(frutaEmpacadaCorrectamente(
  ['manzana', 'banana', 'kiwi'],
  ['banana', 'kiwi', 'manzana']
)); // false
👩‍💻 Habilidades compatibles
Verificar candidatos que cumplen con al menos el 70% de las habilidades requeridas.

Ejemplo
const oferta = ['JavaScript', 'React', 'Node', 'CSS', 'Git'];
const candidatos = [
  { id: 'juan', skills: ['JavaScript', 'React', 'Node', 'Git'] },
  { id: 'ana', skills: ['JavaScript', 'CSS', 'React', 'Node', 'Git'] },
  { id: 'leo', skills: ['HTML', 'CSS'] },
  { id: 'lu', skills: ['JavaScript', 'Node'] },
];

console.log(candidatosCompatibles(oferta, candidatos));
// ➞ ["ana", "juan"]
⏳ Puertas del portal temporal
Encuentra el primer portal fuera de fase (que no se repite).

Ejemplo
console.log(portalFueraDeFase('quasar')); // 0
console.log(portalFueraDeFase('xyxyxy')); // -1
🔤 Anagramas
Determinar si dos palabras son anagramas.
