// Reto: Habilidades Compatibles

// Función principal
function candidatosCompatibles(oferta, candidatos) {
    const ofertaNormalizada = oferta.map(h => h.toLowerCase());
  
    const minHabilidades = Math.floor(oferta.length * 0.7);
  
    const compatibles = candidatos.filter(candidato => {
      const skillsNormalizadas = candidato.skills.map(s => s.toLowerCase());
  
      const coincidencias = ofertaNormalizada.filter(h =>
        skillsNormalizadas.includes(h)
      ).length;
  
      return coincidencias >= minHabilidades;
    });
  
    // Devolver los IDs ordenados alfabéticamente
    return compatibles.map(c => c.id).sort();
  }
  
  const oferta = ['JavaScript', 'React', 'Node', 'CSS', 'Git'];
  
  const candidatos = [
    { id: 'juan', skills: ['JavaScript', 'React', 'Node', 'Git'] },
    { id: 'ana', skills: ['JavaScript', 'CSS', 'React', 'Node', 'Git'] },
    { id: 'leo', skills: ['HTML', 'CSS'] },
    { id: 'lu', skills: ['JavaScript', 'Node'] }
  ];
  
  console.log(candidatosCompatibles(oferta, candidatos));
  // 👉 ["ana", "juan"]
  