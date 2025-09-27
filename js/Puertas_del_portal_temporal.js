// Reto: Puertas del portal temporal

function portalFueraDeFase(portales) {
    const conteo = {};
  
    for (let p of portales) {
      conteo[p] = (conteo[p] || 0) + 1;
    }
  
    for (let i = 0; i < portales.length; i++) {
      if (conteo[portales[i]] === 1) {
        return i;
      }
    }
  
    return -1; // Si todos se repiten
  }
  
  console.log(portalFueraDeFase("xyxyyx"));     // -1
  console.log(portalFueraDeFase("quasar"));     // 0  (la 'q' es única)
  console.log(portalFueraDeFase("aabbccddeefg"));// 12 (la 'g' es única)
  