const cursos = [
  // Ciclo 0 - Nivelación
  {
    codigo: "100000X104",
    nombre: "NIVELACIÓN DE MATEMÁTICA",
    ciclo: "0 - Nivelación",
    creditos: 0,
    prerequisitos: [],
    tipo: "obligatorio"
  },
  {
    codigo: "100000X101",
    nombre: "NIVELACIÓN DE REDACCIÓN",
    ciclo: "0 - Nivelación",
    creditos: 0,
    prerequisitos: [],
    tipo: "obligatorio"
  },
  // 1er ciclo
  {
    codigo: "100000I0N2",
    nombre: "Matemática I",
    ciclo: "1er ciclo",
    creditos: 3,
    prerequisitos: ["100000X104"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000N07C",
    nombre: "Ciudadanía y Reflexión Ética",
    ciclo: "1er ciclo",
    creditos: 3,
    prerequisitos: [],
    tipo: "obligatorio"
  },
  {
    codigo: "100000IN06",
    nombre: "Introducción a la Ingeniería Industrial",
    ciclo: "1er ciclo",
    creditos: 2,
    prerequisitos: [],
    tipo: "obligatorio"
  },
  {
    codigo: "100000VU01",
    nombre: "Introducción a la Vida Universitaria",
    ciclo: "1er ciclo",
    creditos: 2,
    prerequisitos: [],
    tipo: "obligatorio"
  },
  {
    codigo: "100000N03I",
    nombre: "Inglés I",
    ciclo: "1er ciclo",
    creditos: 3,
    prerequisitos: [],
    tipo: "obligatorio"
  },
  {
    codigo: "100000N01I",
    nombre: "Comprensión y Redacción de Textos I",
    ciclo: "1er ciclo",
    creditos: 4,
    prerequisitos: ["100000X101"],
    tipo: "obligatorio"
  },
  // 2do ciclo
  {
    codigo: "100000I0N3",
    nombre: "Matemática II",
    ciclo: "2do ciclo",
    creditos: 4,
    prerequisitos: ["100000I0N2"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000L02Q",
    nombre: "Laboratorio de Química General",
    ciclo: "2do ciclo",
    creditos: 0.28,
    prerequisitos: [],
    tipo: "electivo"
  },
  {
    codigo: "100000Q01G",
    nombre: "Química General",
    ciclo: "2do ciclo",
    creditos: 2.72,
    prerequisitos: [],
    tipo: "obligatorio"
  },
  {
    codigo: "100000I07N",
    nombre: "Principios de Algoritmos",
    ciclo: "2do ciclo",
    creditos: 2,
    prerequisitos: [],
    tipo: "obligatorio"
  },
  {
    codigo: "100000N09I",
    nombre: "Individuo y Medio Ambiente",
    ciclo: "2do ciclo",
    creditos: 2,
    prerequisitos: ["100000X101"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000N05I",
    nombre: "Inglés II",
    ciclo: "2do ciclo",
    creditos: 3,
    prerequisitos: ["100000N03I"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000I05N",
    nombre: "Dibujo para Ingeniería",
    ciclo: "2do ciclo",
    creditos: 2,
    prerequisitos: ["100000I0N2"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000N04I",
    nombre: "Comprensión y Redacción de Textos II",
    ciclo: "2do ciclo",
    creditos: 4,
    prerequisitos: ["100000N01I"],
    tipo: "obligatorio"
  },
  // 3er ciclo
  {
    codigo: "100000I0N6",
    nombre: "Cálculo I",
    ciclo: "3er ciclo",
    creditos: 4,
    prerequisitos: ["100000I0N3"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000IF21",
    nombre: "Economía General - IND",
    ciclo: "3er ciclo",
    creditos: 3,
    prerequisitos: ["100000IN06"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000I22D",
    nombre: "Química Industrial",
    ciclo: "3er ciclo",
    creditos: 2,
    prerequisitos: ["100000L02Q", "100000Q01G"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000N06I",
    nombre: "Problemas y Desafíos en el Perú Actual",
    ciclo: "3er ciclo",
    creditos: 3,
    prerequisitos: ["100000N09I"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000I04N",
    nombre: "Herramientas Informáticas para la Toma de Decisiones",
    ciclo: "3er ciclo",
    creditos: 2,
    prerequisitos: [],
    tipo: "obligatorio"
  },
  {
    codigo: "100000F1I2",
    nombre: "Laboratorio de Mecánica Clásica",
    ciclo: "3er ciclo",
    creditos: 0.22,
    prerequisitos: ["100000I0N3"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000F1I1",
    nombre: "Mecánica Clásica",
    ciclo: "3er ciclo",
    creditos: 3.78,
    prerequisitos: ["100000I0N3"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000N08I",
    nombre: "Inglés III",
    ciclo: "3er ciclo",
    creditos: 3,
    prerequisitos: ["100000N05I"],
    tipo: "obligatorio"
  },
  // 4to ciclo
  {
    codigo: "100000I1N0",
    nombre: "Cálculo II",
    ciclo: "4to ciclo",
    creditos: 2,
    prerequisitos: ["100000I0N6"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000NI23",
    nombre: "Operaciones Unitarias y Procesos Industriales",
    ciclo: "4to ciclo",
    creditos: 4,
    prerequisitos: ["100000I22D"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000F2I2",
    nombre: "Laboratorio de Fundamentos de Electromagnetismo",
    ciclo: "4to ciclo",
    creditos: 0.22,
    prerequisitos: ["100000F1I2", "100000F1I1", "100000I0N6"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000F2I1",
    nombre: "Fundamentos de Electromagnetismo",
    ciclo: "4to ciclo",
    creditos: 3.78,
    prerequisitos: ["100000F1I2", "100000F1I1", "100000I0N6"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000I13N",
    nombre: "Estadística Descriptiva y Probabilidades",
    ciclo: "4to ciclo",
    creditos: 3,
    prerequisitos: ["100000I0N3"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000N02C",
    nombre: "Investigación Académica",
    ciclo: "4to ciclo",
    creditos: 4,
    prerequisitos: ["100000N04I"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000N10I",
    nombre: "Inglés IV",
    ciclo: "4to ciclo",
    creditos: 3,
    prerequisitos: ["100000N08I"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000NI22",
    nombre: "Fisicoquímica",
    ciclo: "4to ciclo",
    creditos: 3,
    prerequisitos: [],
    tipo: "electivo"
  },
  // 5to ciclo
  {
    codigo: "100000I14N",
    nombre: "Cálculo para la Toma de Decisiones",
    ciclo: "5to ciclo",
    creditos: 2,
    prerequisitos: ["100000I1N0"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000I97N",
    nombre: "Ergonomía y Estudio del Trabajo",
    ciclo: "5to ciclo",
    creditos: 4,
    prerequisitos: ["100000I04N"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000RI07",
    nombre: "Contabilidad General",
    ciclo: "5to ciclo",
    creditos: 3,
    prerequisitos: ["100000IF21"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000I17N",
    nombre: "Estadística Inferencial",
    ciclo: "5to ciclo",
    creditos: 4,
    prerequisitos: ["100000I13N"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000F3I2",
    nombre: "Laboratorio de Fluidos y Termodinámica",
    ciclo: "5to ciclo",
    creditos: 0.22,
    prerequisitos: ["100000F2I2", "100000F2I1", "100000I1N0"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000F3I1",
    nombre: "Fluidos y Termodinámica",
    ciclo: "5to ciclo",
    creditos: 4.78,
    prerequisitos: ["100000F2I2", "100000F2I1", "100000I1N0"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000I27N",
    nombre: "Administración y Organización de Empresas",
    ciclo: "5to ciclo",
    creditos: 3,
    prerequisitos: ["100000IF21"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000S41V",
    nombre: "Procesos para Ingeniería",
    ciclo: "5to ciclo",
    creditos: 2,
    prerequisitos: ["100000I13N"],
    tipo: "obligatorio"
  },
  // 6to ciclo
  {
    codigo: "100000NI18",
    nombre: "Teoría de Decisiones",
    ciclo: "6to ciclo",
    creditos: 3,
    prerequisitos: ["100000I14N"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000NI01",
    nombre: "Gestión por Procesos",
    ciclo: "6to ciclo",
    creditos: 3,
    prerequisitos: ["100000S41V"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000I51D",
    nombre: "Gestión de Personas",
    ciclo: "6to ciclo",
    creditos: 3,
    prerequisitos: ["100000I27N"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000NI07",
    nombre: "Disposición de Planta",
    ciclo: "6to ciclo",
    creditos: 2,
    prerequisitos: ["100000I97N"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000I99N",
    nombre: "Curso Integrador I - Escuela de Industrial",
    ciclo: "6to ciclo",
    creditos: 2,
    prerequisitos: ["100000S41V"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000NI06",
    nombre: "Costos y Presupuestos",
    ciclo: "6to ciclo",
    creditos: 3,
    prerequisitos: ["100000RI07"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000A195",
    nombre: "Creatividad Empresarial",
    ciclo: "6to ciclo",
    creditos: 3,
    prerequisitos: [],
    tipo: "electivo"
  },
  {
    codigo: "100000S10L",
    nombre: "Economía Ambiental y Sostenibilidad",
    ciclo: "6to ciclo",
    creditos: 3,
    prerequisitos: [],
    tipo: "electivo"
  },
  // 7mo ciclo
  {
    codigo: "100000NI11",
    nombre: "Marketing",
    ciclo: "7mo ciclo",
    creditos: 3,
    prerequisitos: ["100000I27N"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000D01T",
    nombre: "Tecnología Industrial",
    ciclo: "7mo ciclo",
    creditos: 3,
    prerequisitos: ["100000NI23"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000TV18",
    nombre: "Investigación Operativa",
    ciclo: "7mo ciclo",
    creditos: 3,
    prerequisitos: ["100000I17N"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000NI24",
    nombre: "Ingeniería Económica",
    ciclo: "7mo ciclo",
    creditos: 3,
    prerequisitos: ["100000NI06"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000I94N",
    nombre: "Herramientas de Calidad",
    ciclo: "7mo ciclo",
    creditos: 3,
    prerequisitos: ["100000I13N"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000NI15",
    nombre: "Gestión de Operaciones",
    ciclo: "7mo ciclo",
    creditos: 3,
    prerequisitos: ["100000I99N"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000ZZ29",
    nombre: "Liderazgo y Conformación de Equipos",
    ciclo: "7mo ciclo",
    creditos: 3,
    prerequisitos: ["100000I51D"],
    tipo: "electivo"
  },
  {
    codigo: "100000NI08",
    nombre: "Gestión de Recursos Humanos",
    ciclo: "7mo ciclo",
    creditos: 3,
    prerequisitos: ["100000I51D"],
    tipo: "electivo"
  },
  // 8vo ciclo
  {
    codigo: "100000I71D",
    nombre: "Automatización de Procesos",
    ciclo: "8vo ciclo",
    creditos: 3,
    prerequisitos: ["100000D01T"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000NI19",
    nombre: "Logística",
    ciclo: "8vo ciclo",
    creditos: 3,
    prerequisitos: ["100000NI15"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000I72D",
    nombre: "Gestión de la Innovación",
    ciclo: "8vo ciclo",
    creditos: 3,
    prerequisitos: ["100000I99N"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000NI12",
    nombre: "Sistemas de Gestión de Calidad",
    ciclo: "8vo ciclo",
    creditos: 3,
    prerequisitos: ["100000I94N"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000NI16",
    nombre: "Planeamiento y Control de Operaciones",
    ciclo: "8vo ciclo",
    creditos: 3,
    prerequisitos: ["100000NI15"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000C17M",
    nombre: "Planeamiento Estratégico",
    ciclo: "8vo ciclo",
    creditos: 3,
    prerequisitos: ["100000NI01"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000C0P1",
    nombre: "Content Management",
    ciclo: "8vo ciclo",
    creditos: 3,
    prerequisitos: [],
    tipo: "electivo"
  },
  {
    codigo: "100000ZZ28",
    nombre: "Elementary Business English",
    ciclo: "8vo ciclo",
    creditos: 4,
    prerequisitos: ["100000N10I"],
    tipo: "electivo"
  },
  // 9no ciclo
  {
    codigo: "100000N11I",
    nombre: "Formación para la Empleabilidad",
    ciclo: "9no ciclo",
    creditos: 3,
    prerequisitos: ["100000C17M"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000H01C",
    nombre: "Herramientas para la Comunicación Efectiva",
    ciclo: "9no ciclo",
    creditos: 3,
    prerequisitos: ["100000I99N"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000NI17",
    nombre: "Simulación",
    ciclo: "9no ciclo",
    creditos: 2,
    prerequisitos: ["100000TV18"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000NI41",
    nombre: "Seguridad y Salud Ocupacional",
    ciclo: "9no ciclo",
    creditos: 3,
    prerequisitos: ["100000D01T"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000TV19",
    nombre: "Formulación y Evaluación de Proyectos",
    ciclo: "9no ciclo",
    creditos: 3,
    prerequisitos: ["100000NI24", "100000I27N"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000NI04",
    nombre: "Formación para la Investigación - Industrial",
    ciclo: "9no ciclo",
    creditos: 4,
    prerequisitos: ["100000NI16", "100000N02C"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000I92N",
    nombre: "Gestión de Mantenimiento",
    ciclo: "9no ciclo",
    creditos: 3,
    prerequisitos: ["100000D01T"],
    tipo: "electivo"
  },
  {
    codigo: "100000A205",
    nombre: "Neuromarketing",
    ciclo: "9no ciclo",
    creditos: 3,
    prerequisitos: [],
    tipo: "electivo"
  },
  // 10mo ciclo
  {
    codigo: "100000D03T",
    nombre: "Taller de Investigación - Industrial",
    ciclo: "10mo ciclo",
    creditos: 4,
    prerequisitos: ["100000NI04"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000NI13",
    nombre: "Gestión del Medio Ambiente",
    ciclo: "10mo ciclo",
    creditos: 3,
    prerequisitos: ["100000N09I"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000I33N",
    nombre: "Gestión de Proyectos",
    ciclo: "10mo ciclo",
    creditos: 3,
    prerequisitos: ["100000NI12"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000D02T",
    nombre: "Gestión de la Cadena de Abastecimiento",
    ciclo: "10mo ciclo",
    creditos: 3,
    prerequisitos: ["100000NI19"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000N25I",
    nombre: "Ética Profesional",
    ciclo: "10mo ciclo",
    creditos: 2,
    prerequisitos: ["100000C17M"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000NI03",
    nombre: "Curso Integrador II - Emprendimiento Industrial",
    ciclo: "10mo ciclo",
    creditos: 4,
    prerequisitos: ["100000I99N", "100000C17M", "100000TV19"],
    tipo: "obligatorio"
  },
  {
    codigo: "100000IN95",
    nombre: "Metodologías Ágiles",
    ciclo: "10mo ciclo",
    creditos: 3,
    prerequisitos: ["100000TV19"],
    tipo: "electivo"
  },
  {
    codigo: "100000IN89",
    nombre: "Lean Six Sigma",
    ciclo: "10mo ciclo",
    creditos: 3,
    prerequisitos: ["100000NI16"],
    tipo: "electivo"
  }
];

// Cierre del script para renderizar dinámicamente con desbloqueo
let aprobados = JSON.parse(localStorage.getItem("cursosAprobados")) || [];

const contenedor = document.getElementById("malla");
const ciclosUnicos = [...new Set(cursos.map(c => c.ciclo))];

// Desmarcar recursivamente todos los cursos que dependan de un curso desmarcado
function desmarcarHijos(codigoPadre) {
  // Buscamos todos los cursos que tienen este como prerrequisito
  cursos.forEach(curso => {
    if (curso.prerequisitos.includes(codigoPadre)) {
      if (aprobados.includes(curso.codigo)) {
        // Si estaba marcado, lo quitamos
        aprobados = aprobados.filter(c => c !== curso.codigo);
        // Y repetimos recursivamente con sus hijos
        desmarcarHijos(curso.codigo);
      }
    }
  });
}

function renderizar() {
  contenedor.innerHTML = "";
  ciclosUnicos.forEach(ciclo => {
    const divCiclo = document.createElement("div");
    divCiclo.className = "ciclo";
    divCiclo.innerHTML = `<h2>${ciclo}</h2>`;

    cursos
      .filter(c => c.ciclo === ciclo)
      .forEach(curso => {
        const requisitosCumplidos = curso.prerequisitos.every(pr => aprobados.includes(pr));
        const desbloqueado = curso.prerequisitos.length === 0 || requisitosCumplidos || aprobados.includes(curso.codigo);

        const divCurso = document.createElement("div");
        divCurso.className = "curso";

        // Si es electivo, color diferente
        if (curso.tipo === "electivo") {
          divCurso.classList.add("electivo");
        }

        // Estado visual
        if (aprobados.includes(curso.codigo)) {
          divCurso.classList.add("tachado");
        } else if (!desbloqueado) {
          divCurso.classList.add("bloqueado");
        }

        divCurso.innerHTML = `
          <strong>${curso.nombre}</strong><br>
          (${curso.codigo})
          <div class="tooltip">
            Créditos: ${curso.creditos}<br>
            Prerrequisitos: ${
              curso.prerequisitos.length > 0
                ? curso.prerequisitos.join(", ")
                : "Ninguno"
            }
          </div>
        `;

        // Evento click: solo si desbloqueado
        if (desbloqueado) {
          divCurso.addEventListener("click", () => {
            if (aprobados.includes(curso.codigo)) {
              // Desmarcar este
              aprobados = aprobados.filter(c => c !== curso.codigo);
              // Desmarcar todos los hijos
              desmarcarHijos(curso.codigo);
            } else {
              aprobados.push(curso.codigo);
            }
            localStorage.setItem("cursosAprobados", JSON.stringify(aprobados));
            renderizar();
          });
        }

        // Tooltip
        divCurso.addEventListener("mouseenter", () => {
          divCurso.querySelector(".tooltip").style.display = "block";
        });
        divCurso.addEventListener("mouseleave", () => {
          divCurso.querySelector(".tooltip").style.display = "none";
        });

        divCiclo.appendChild(divCurso);
      });

    contenedor.appendChild(divCiclo);
  });
}

// Primera renderización
renderizar();
