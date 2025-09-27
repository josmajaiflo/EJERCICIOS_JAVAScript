

//📌 Reto: Archivos comprometidos

function getCompromisedFiles(lastSafeDownload, droneLogs) {
    // Usamos un Set para evitar duplicados
    const compromised = new Set();
  
    for (const [fileId, timestamp] of droneLogs) {
      if (timestamp > lastSafeDownload) {
        compromised.add(fileId);
      }
    }
  
    // Convertimos el Set en Array y ordenamos ascendente
    return Array.from(compromised).sort((a, b) => a - b);
  }
  
  // ---------------------------
  // 🔹 Ejemplo de uso en consola
  // ---------------------------
  const lastSafeDownload = 1670000000;
  const droneLogs = [
    [42, 1670000500],
    [13, 1670000000],
    [8, 1670000700],
    [8, 1670000001],
    [99, 1669999999],
  ];
  
  console.log("👉 Archivos comprometidos:");
  console.log(getCompromisedFiles(lastSafeDownload, droneLogs)); // [8, 42]
  