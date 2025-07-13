const cursos = [
  // 1er ciclo
  {
    ciclo: "1er ciclo",
    codigo: "100000I0N2",
    nombre: "Matemática I",
    creditos: 3,
    prerequisito: "NIVELACIÓN DE MATEMÁTICA"
  },
  {
    ciclo: "1er ciclo",
    codigo: "100000N07C",
    nombre: "Ciudadanía y Reflexión Ética",
    creditos: 3,
    prerequisito: "-"
  },
  {
    ciclo: "1er ciclo",
    codigo: "100000IN06",
    nombre: "Introducción a la Ingeniería Industrial",
    creditos: 2,
    prerequisito: "-"
  },
  {
    ciclo: "1er ciclo",
    codigo: "100000VU01",
    nombre: "Introducción a la Vida Universitaria",
    creditos: 2,
    prerequisito: "-"
  },
  {
    ciclo: "1er ciclo",
    codigo: "100000N03I",
    nombre: "Inglés I",
    creditos: 3,
    prerequisito: "-"
  },
  {
    ciclo: "1er ciclo",
    codigo: "100000N01I",
    nombre: "Comprensión y Redacción de Textos I",
    creditos: 4,
    prerequisito: "NIVELACIÓN DE REDACCIÓN"
  },
  // 2do ciclo
  {
    ciclo: "2do ciclo",
    codigo: "100000I0N3",
    nombre: "Matemática II",
    creditos: 4,
    prerequisito: "Matemática I"
  },
  {
    ciclo: "2do ciclo",
    codigo: "100000L02Q",
    nombre: "Laboratorio de Química General",
    creditos: 0.28,
    prerequisito: "-"
  },
  {
    ciclo: "2do ciclo",
    codigo: "100000Q01G",
    nombre: "Química General",
    creditos: 2.72,
    prerequisito: "-"
  },
  {
    ciclo: "2do ciclo",
    codigo: "100000I07N",
    nombre: "Principios de Algoritmos",
    creditos: 2,
    prerequisito: "-"
  },
  {
    ciclo: "2do ciclo",
    codigo: "100000N09I",
    nombre: "Individuo y Medio Ambiente",
    creditos: 2,
    prerequisito: "NIVELACIÓN DE REDACCIÓN"
  },
  {
    ciclo: "2do ciclo",
    codigo: "100000N05I",
    nombre: "Inglés II",
    creditos: 3,
    prerequisito: "Inglés I"
  },
  {
    ciclo: "2do ciclo",
    codigo: "100000I05N",
    nombre: "Dibujo para Ingeniería",
    creditos: 2,
    prerequisito: "Matemática I"
  },
  {
    ciclo: "2do ciclo",
    codigo: "100000N04I",
    nombre: "Comprensión y Redacción de Textos II",
    creditos: 4,
    prerequisito: "Comprensión y Redacción de Textos I"
  },
  // 3er ciclo
  {
    ciclo: "3er ciclo",
    codigo: "100000I0N6",
    nombre: "Cálculo I",
    creditos: 4,
    prerequisito: "Matemática II"
  },
  {
    ciclo: "3er ciclo",
    codigo: "100000IF21",
    nombre: "Economía General - IND",
    creditos: 3,
    prerequisito: "Introducción a la Ingeniería Industrial"
  },
  {
    ciclo: "3er ciclo",
    codigo: "100000I22D",
    nombre: "Química Industrial",
    creditos: 2,
    prerequisito: "Laboratorio de Química General, Química General"
  },
  {
    ciclo: "3er ciclo",
    codigo: "100000N06I",
    nombre: "Problemas y Desafíos en el Perú Actual",
    creditos: 3,
    prerequisito: "Individuo y Medio Ambiente"
  },
  {
    ciclo: "3er ciclo",
    codigo: "100000I04N",
    nombre: "Herramientas Informáticas para la Toma de Decisiones",
    creditos: 2,
    prerequisito: "-"
  },
  {
    ciclo: "3er ciclo",
    codigo: "100000F1I2",
    nombre: "Laboratorio de Mecánica Clásica",
    creditos: 0.22,
    prerequisito: "Matemática II"
  },
  {
    ciclo: "3er ciclo",
    codigo: "100000F1I1",
    nombre: "Mecánica Clásica",
    creditos: 3.78,
    prerequisito: "Matemática II"
  },
  {
    ciclo: "3er ciclo",
    codigo: "100000N08I",
    nombre: "Inglés III",
    creditos: 3,
    prerequisito: "Inglés II"
  },
  // 4to ciclo
  {
    ciclo: "4to ciclo",
    codigo: "100000I1N0",
    nombre: "Cálculo II",
    creditos: 2,
    prerequisito: "Cálculo I"
  },
  {
    ciclo: "4to ciclo",
    codigo: "100000NI23",
    nombre: "Operaciones Unitarias y Procesos Industriales",
    creditos: 4,
    prerequisito: "Química Industrial"
  },
  {
    ciclo: "4to ciclo",
    codigo: "100000F2I2",
    nombre: "Laboratorio de Fundamentos de Electromagnetismo",
    creditos: 0.22,
    prerequisito: "Laboratorio de Mecánica Clásica, Mecánica Clásica, Cálculo I"
  },
  {
    ciclo: "4to ciclo",
    codigo: "100000F2I1",
    nombre: "Fundamentos de Electromagnetismo",
    creditos: 3.78,
    prerequisito: "Laboratorio de Mecánica Clásica, Mecánica Clásica, Cálculo I"
  },
  {
    ciclo: "4to ciclo",
    codigo: "100000I13N",
    nombre: "Estadística Descriptiva y Probabilidades",
    creditos: 3,
    prerequisito: "Matemática II"
  },
  {
    ciclo: "4to ciclo",
    codigo: "100000N02C",
    nombre: "Investigación Académica",
    creditos: 4,
    prerequisito: "Comprensión y Redacción de Textos II"
  },
  {
    ciclo: "4to ciclo",
    codigo: "100000N10I",
    nombre: "Inglés IV",
    creditos: 3,
    prerequisito: "Inglés III"
  },
  {
    ciclo: "4to ciclo",
    codigo: "100000NI22",
    nombre: "Fisicoquímica",
    creditos: 3,
    prerequisito: "-"
  },
  // 5to ciclo
  {
    ciclo: "5to ciclo",
    codigo: "100000I14N",
    nombre: "Cálculo para la Toma de Decisiones",
    creditos: 2,
    prerequisito: "Cálculo II"
  },
  {
    ciclo: "5to ciclo",
    codigo: "100000I97N",
    nombre: "Ergonomía y Estudio del Trabajo",
    creditos: 4,
    prerequisito: "Herramientas Informáticas para la Toma de Decisiones"
  },
  {
    ciclo: "5to ciclo",
    codigo: "100000RI07",
    nombre: "Contabilidad General",
    creditos: 3,
    prerequisito: "Economía General - IND"
  },
  {
    ciclo: "5to ciclo",
    codigo: "100000I17N",
    nombre: "Estadística Inferencial",
    creditos: 4,
    prerequisito: "Estadística Descriptiva y Probabilidades"
  },
  {
    ciclo: "5to ciclo",
    codigo: "100000F3I2",
    nombre: "Laboratorio de Fluidos y Termodinámica",
    creditos: 0.22,
    prerequisito: "Laboratorio de Fundamentos de Electromagnetismo, Fundamentos de Electromagnetismo, Cálculo II"
  },
  {
    ciclo: "5to ciclo",
    codigo: "100000F3I1",
    nombre: "Fluidos y Termodinámica",
    creditos: 4.78,
    prerequisito: "Laboratorio de Fundamentos de Electromagnetismo, Fundamentos de Electromagnetismo, Cálculo II"
  },
  {
    ciclo: "5to ciclo",
    codigo: "100000I27N",
    nombre: "Administración y Organización de Empresas",
    creditos: 3,
    prerequisito: "Economía General - IND"
  },
  {
    ciclo: "5to ciclo",
    codigo: "100000S41V",
    nombre: "Procesos para Ingeniería",
    creditos: 2,
    prerequisito: "Estadística Descriptiva y Probabilidades"
  },
  // 6to ciclo
  {
    ciclo: "6to ciclo",
    codigo: "100000NI18",
    nombre: "Teoría de Decisiones",
    creditos: 3,
    prerequisito: "Cálculo para la Toma de Decisiones"
  },
  {
    ciclo: "6to ciclo",
    codigo: "100000NI01",
    nombre: "Gestión por Procesos",
    creditos: 3,
    prerequisito: "Procesos para Ingeniería"
  },
  {
    ciclo: "6to ciclo",
    codigo: "100000I51D",
    nombre: "Gestión de Personas",
    creditos: 3,
    prerequisito: "Administración y Organización de Empresas"
  },
  {
    ciclo: "6to ciclo",
    codigo: "100000NI07",
    nombre: "Disposición de Planta",
    creditos: 2,
    prerequisito: "Ergonomía y Estudio del Trabajo"
  },
  {
    ciclo: "6to ciclo",
    codigo: "100000I99N",
    nombre: "Curso Integrador I - Escuela de Industrial",
    creditos: 2,
    prerequisito: "Procesos para Ingeniería"
  },
  {
    ciclo: "6to ciclo",
    codigo: "100000NI06",
    nombre: "Costos y Presupuestos",
    creditos: 3,
    prerequisito: "Contabilidad General"
  },
  {
    ciclo: "6to ciclo",
    codigo: "100000A195",
    nombre: "Creatividad Empresarial",
    creditos: 3,
    prerequisito: "-"
  },
  {
    ciclo: "6to ciclo",
    codigo: "100000S10L",
    nombre: "Economía Ambiental y Sostenibilidad",
    creditos: 3,
    prerequisito: "-"
  },
  // 7mo ciclo
  {
    ciclo: "7mo ciclo",
    codigo: "100000NI11",
    nombre: "Marketing",
    creditos: 3,
    prerequisito: "Administración y Organización de Empresas"
  },
  {
    ciclo: "7mo ciclo",
    codigo: "100000D01T",
    nombre: "Tecnología Industrial",
    creditos: 3,
    prerequisito: "Operaciones Unitarias y Procesos Industriales"
  },
  {
    ciclo: "7mo ciclo",
    codigo: "100000TV18",
    nombre: "Investigación Operativa",
    creditos: 3,
    prerequisito: "Estadística Inferencial"
  },
  {
    ciclo: "7mo ciclo",
    codigo: "100000NI24",
    nombre: "Ingeniería Económica",
    creditos: 3,
    prerequisito: "Costos y Presupuestos"
  },
  {
    ciclo: "7mo ciclo",
    codigo: "100000I94N",
    nombre: "Herramientas de Calidad",
    creditos: 3,
    prerequisito: "Estadística Descriptiva y Probabilidades"
  },
  {
    ciclo: "7mo ciclo",
    codigo: "100000NI15",
    nombre: "Gestión de Operaciones",
    creditos: 3,
    prerequisito: "Curso Integrador I - Escuela de Industrial"
  },
  {
    ciclo: "7mo ciclo",
    codigo: "100000ZZ29",
    nombre: "Liderazgo y Conformación de Equipos",
    creditos: 3,
    prerequisito: "Gestión de Personas"
  },
  {
    ciclo: "7mo ciclo",
    codigo: "100000NI08",
    nombre: "Gestión de Recursos Humanos",
    creditos: 3,
    prerequisito: "Gestión de Personas"
  },
  // 8vo ciclo
  {
    ciclo: "8vo ciclo",
    codigo: "100000I71D",
    nombre: "Automatización de Procesos",
    creditos: 3,
    prerequisito: "Tecnología Industrial"
  },
  {
    ciclo: "8vo ciclo",
    codigo: "100000NI19",
    nombre: "Logística",
    creditos: 3,
    prerequisito: "Gestión de Operaciones"
  },
  {
    ciclo: "8vo ciclo",
    codigo: "100000I72D",
    nombre: "Gestión de la Innovación",
    creditos: 3,
    prerequisito: "Curso Integrador I - Escuela de Industrial"
  },
  {
    ciclo: "8vo ciclo",
    codigo: "100000NI12",
    nombre: "Sistemas de Gestión de Calidad",
    creditos: 3,
    prerequisito: "Herramientas de Calidad"
  },
  {
    ciclo: "8vo ciclo",
    codigo: "100000NI16",
    nombre: "Planeamiento y Control de Operaciones",
    creditos: 3,
    prerequisito: "Gestión de Operaciones"
  },
  {
    ciclo: "8vo ciclo",
    codigo: "100000C17M",
    nombre: "Planeamiento Estratégico",
    creditos: 3,
    prerequisito: "Gestión por Procesos"
  },
  {
    ciclo: "8vo ciclo",
    codigo: "100000C0P1",
    nombre: "Content Management",
    creditos: 3,
    prerequisito: "-"
  },
  {
    ciclo: "8vo ciclo",
    codigo: "100000ZZ28",
    nombre: "Elementary Business English",
    creditos: 4,
    prerequisito: "Inglés IV"
  },
  // 9no ciclo
  {
    ciclo: "9no ciclo",
    codigo: "100000N11I",
    nombre: "Formación para la Empleabilidad",
    creditos: 3,
    prerequisito: "Planeamiento Estratégico"
  },
  {
    ciclo: "9no ciclo",
    codigo: "100000H01C",
    nombre: "Herramientas para la Comunicación Efectiva",
    creditos: 3,
    prerequisito: "Curso Integrador I - Escuela de Industrial"
  },
  {
    ciclo: "9no ciclo",
    codigo: "100000NI17",
    nombre: "Simulación",
    creditos: 2,
    prerequisito: "Investigación Operativa"
  },
  {
    ciclo: "9no ciclo",
    codigo: "100000NI41",
    nombre: "Seguridad y Salud Ocupacional",
    creditos: 3,
    prerequisito: "Tecnología Industrial"
  },
  {
    ciclo: "9no ciclo",
    codigo: "100000TV19",
    nombre: "Formulación y Evaluación de Proyectos",
    creditos: 3,
    prerequisito: "Ingeniería Económica, Administración y Organización de Empresas"
  },
  {
    ciclo: "9no ciclo",
    codigo: "100000NI04",
    nombre: "Formación para la Investigación - Industrial",
    creditos: 4,
    prerequisito: "Planeamiento y Control de Operaciones, Investigación Académica"
  },
  {
    ciclo: "9no ciclo",
    codigo: "100000I92N",
    nombre: "Gestión de Mantenimiento",
    creditos: 3,
    prerequisito: "Tecnología Industrial"
  },
  {
    ciclo: "9no ciclo",
    codigo: "100000A205",
    nombre: "Neuromarketing",
    creditos: 3,
    prerequisito: "-"
  },
  // 10mo ciclo
  {
    ciclo: "10mo ciclo",
    codigo: "100000D03T",
    nombre: "Taller de Investigación - Industrial",
    creditos: 4,
    prerequisito: "Formación para la Investigación - Industrial"
  },
  {
    ciclo: "10mo ciclo",
    codigo: "100000NI13",
    nombre: "Gestión del Medio Ambiente",
    creditos: 3,
    prerequisito: "Individuo y Medio Ambiente"
  },
  {
    ciclo: "10mo ciclo",
    codigo: "100000I33N",
    nombre: "Gestión de Proyectos",
    creditos: 3,
    prerequisito: "Sistemas de Gestión de Calidad"
  },
  {
    ciclo: "10mo ciclo",
    codigo: "100000D02T",
    nombre: "Gestión de la Cadena de Abastecimiento",
    creditos: 3,
    prerequisito: "Logística"
  },
  {
    ciclo: "10mo ciclo",
    codigo: "100000N25I",
    nombre: "Ética Profesional",
    creditos: 2,
    prerequisito: "Planeamiento Estratégico"
  },
  {
    ciclo: "10mo ciclo",
    codigo: "100000NI03",
    nombre: "Curso Integrador II - Emprendimiento Industrial",
    creditos: 4,
    prerequisito: "Curso Integrador I - Escuela de Industrial, Planeamiento Estratégico, Formulación y Evaluación de Proyectos"
  },
  {
    ciclo: "10mo ciclo",
    codigo: "100000IN95",
    nombre: "Metodologías Ágiles",
    creditos: 3,
    prerequisito: "Formulación y Evaluación de Proyectos"
  },
  {
    ciclo: "10mo ciclo",
    codigo: "100000IN89",
    nombre: "Lean Six Sigma",
    creditos: 3,
    prerequisito: "Planeamiento y Control de Operaciones"
  }
];

const contenedor = document.getElementById("malla");
const ciclosUnicos = [...new Set(cursos.map(c => c.ciclo))];

ciclosUnicos.forEach(ciclo => {
  const divCiclo = document.createElement("div");
  divCiclo.className = "ciclo";
  divCiclo.innerHTML = `<h2>${ciclo}</h2>`;

  cursos
    .filter(c => c.ciclo === ciclo)
    .forEach(curso => {
      const divCurso = document.createElement("div");
      divCurso.className = "curso";
      divCurso.innerHTML = `
        <strong>${curso.nombre}</strong><br>
        (${curso.codigo})
        <div class="tooltip">
          Créditos: ${curso.creditos}<br>
          Prerrequisito: ${curso.prerequisito}
        </div>
      `;
      divCurso.addEventListener("mouseenter", () => {
        divCurso.querySelector(".tooltip").style.display = "block";
      });
      divCurso.addEventListener("mouseleave", () => {
        divCurso.querySelector(".tooltip").style.display = "none";
      });
      divCurso.addEventListener("click", () => {
        divCurso.classList.toggle("tachado");
      });
      divCiclo.appendChild(divCurso);
    });

  contenedor.appendChild(divCiclo);
});
