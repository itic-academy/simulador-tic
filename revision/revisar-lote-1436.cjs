const apply = require('./aplicar-lote.cjs');

const records = [
  [7481, [88], ['III-2'], ['SSADM', 'Scrum', 'DSDM', 'Crystal', 'métodos ágiles'], [
    { url: 'https://www.agilebusiness.org/resource/the-dsdm-agile-project-framework/', referencia: 'Agile Business Consortium, DSDM Agile Project Framework: identifica DSDM como framework/proyecto ágil; DSDM es antecesor y base del actual Agile Project Framework.' },
    { url: 'https://scrumguides.org/scrum-guide.html', referencia: 'Scrum Guide oficial, Ken Schwaber y Jeff Sutherland, versión vigente publicada: define Scrum como framework ligero para generar valor con soluciones adaptativas a problemas complejos.' },
    { url: 'https://alistair.cockburn.us/wp-content/uploads/2018/02/Peopleandmethodologiesinsoftwaredevelopment.pdf', referencia: 'Alistair Cockburn, People and Methodologies in Software Development: presenta Crystal como una familia de metodologías ligeras/autoadaptativas relacionadas por valores y principios ágiles.' },
    { url: 'https://www.sciencedirect.com/science/article/pii/0950584988900626', referencia: 'Longworth et al., Structured systems analysis and design method (SSADM), Information and Software Technology 30(3), 1988: caracteriza SSADM como método estructurado y documentado de análisis y diseño, distinto de los enfoques ágiles.' }
  ], {
    texto: '¿Cuál de estos métodos se caracteriza como metodología estructurada de análisis y diseño, en vez de un marco o enfoque ágil?',
    opciones: ['Scrum.', 'SSADM (Structured Systems Analysis and Design Method).', 'DSDM / Agile Project Framework.', 'Crystal.'], respuesta_correcta: 1
  }, 'Corregida B. SSADM es un método estructurado, secuencial y documentado de análisis/diseño de sistemas; Scrum, DSDM y Crystal se sitúan en la familia ágil. Se sustituye el negativo «NO es considerada» por un enunciado positivo y se distingue método de framework.', 'corregida'],

  [7482, [93], ['III-9'], ['UML', 'diagramas estructurales', 'diagrama de clases', 'componentes', 'perfil'], [
    { url: 'https://www.omg.org/spec/UML/2.5.1/PDF', referencia: 'OMG UML 2.5.1, norma formal: distingue los clasificadores y paquetes de modelado estructural de las interacciones y otros comportamientos; clase y componente son clasificadores estructurales y perfil es mecanismo de extensión del metamodelo.' },
    { url: 'https://www.omg.org/spec/UML', referencia: 'OMG, UML 2.5.1 Specification: publicación normativa de UML con diagramas estructurales y de comportamiento/interacción.' }
  ], {
    texto: '¿Qué conjunto está formado por diagramas UML estructurales, que describen la organización estática del sistema?',
    opciones: [
      'Clases, componentes y comunicación (colaboración).',
      'Clases, componentes y perfiles.',
      'Clases, herencia, encapsulación y polimorfismo (estos tres últimos no son tipos de diagrama UML).',
      'Secuencia y componentes.'
    ], respuesta_correcta: 1
  }, 'Corregida B. Los diagramas de clase y componentes describen estructura; el perfil es un diagrama UML estructural/de empaquetado. En cambio, comunicación (antes denominado colaboración en UML 1.x) y secuencia son diagramas de interacción/comportamiento. Se elimina la expresión no normativa «diagramas de herencia, encapsulación y polimorfismo».', 'corregida'],

  [7483, [37, 88], ['III-2'], ['Kanban', 'Scrum', 'flujo', 'WIP', 'cadencias'], [
    { url: 'https://kanbanguides.org/the-kanban-guide/2025.5/pdf/kanban-guide.v2025.5.en.pdf', referencia: 'The Kanban Guide, guía oficial mínima (mayo 2025): prescribe definir/visualizar el flujo, limitar trabajo en curso, gestionar activamente los elementos y mejorar; recomienda cadencias de feedback apropiadas, pero no impone iteraciones time-boxed de una a cuatro semanas.' },
    { url: 'https://scrumguides.org/scrum-guide.html', referencia: 'Scrum Guide oficial, sección Sprint: Scrum utiliza eventos dentro de Sprints de duración fija de un mes o menos; el Sprint es un contenedor de los eventos Scrum. No se debe atribuir esta prescripción temporal al sistema Kanban.' }
  ], {
    texto: 'Según la guía oficial de Kanban, ¿qué afirmación NO es un requisito propio del método?',
    opciones: [
      'Visualizar el flujo de trabajo y sus políticas.',
      'Organizar obligatoriamente el trabajo en iteraciones de duración fija de una a cuatro semanas.',
      'Limitar el trabajo en curso y gestionar activamente los elementos.',
      'Establecer cadencias de feedback y mejora adecuadas al contexto.'
    ], respuesta_correcta: 1
  }, 'Corregida B. Kanban se centra en visualizar y gestionar el flujo, limitar el trabajo en curso y mejorar mediante cadencias de feedback; no exige Sprints/iteraciones con duración fija. Esa time-boxing es propia de Scrum. El original describía como regla de Kanban las iteraciones de 1–4 semanas, mezclándolo con Scrum.', 'corregida'],

  [7484, [126], ['II-13', 'III-6'], ['DevSecOps', 'seguridad desde el diseño', 'ciclo de vida seguro', 'responsabilidad compartida'], [
    { url: 'https://pages.nist.gov/nccoe-devsecops/introduction.html', referencia: 'NIST NCCoE, DevSecOps Practices, introducción: DevSecOps integra seguridad como componente fundamental de DevOps desde el inicio, en todo el ciclo de vida, y promueve colaboración donde la seguridad es responsabilidad de todos.' },
    { url: 'https://csrc.nist.gov/pubs/sp/800/204/c/final', referencia: 'NIST SP 800-204C, final: define DevSecOps como cultura y prácticas que impulsan colaboración y responsabilidad compartida entre desarrollo, operaciones y seguridad, apoyadas por CI/CD, pruebas de seguridad y monitorización.' }
  ], {
    texto: '¿Cómo se denomina el enfoque que integra seguridad desde el inicio y durante todo el ciclo DevOps, con responsabilidad compartida entre desarrollo, seguridad y operaciones?',
    opciones: ['SLOps.', 'LSD (Lean Secure Development).', 'SUP (Secure Unified Process).', 'DevSecOps.'], respuesta_correcta: 3
  }, 'Corregida D. DevSecOps integra prácticas de seguridad desde las fases iniciales y a lo largo de construcción, pruebas, despliegue y operación; NIST lo caracteriza además por colaboración y responsabilidad compartida entre los equipos. Se conserva la respuesta, afinando el enunciado a la definición documentada.', 'corregida'],

  [7485, [93], ['II-3', 'III-9'], ['Eiffel', 'orientación a objetos', 'clases', 'tipos'], [
    { url: 'https://www.eiffel.org/doc/eiffel/ET-_General_Properties', referencia: 'Eiffel Documentation, General Properties: describe Eiffel como enfoque completamente orientado a objetos; las clases son la unidad básica de estructura y todos los tipos se basan en clases, incluidos enteros, booleanos y cadenas.' },
    { url: 'https://www.eiffel.org/doc/eiffel/Eiffel-_The_Language', referencia: 'Eiffel: The Language, documentación oficial del lenguaje y estándar ECMA/ISO: fundamenta la descripción de Eiffel como lenguaje íntegramente orientado a objetos.' }
  ], {
    texto: 'Según la documentación de Eiffel, ¿qué lenguaje basa su estructura de módulos y su sistema de tipos íntegramente en clases?',
    opciones: ['Eiffel.', 'BASIC, sin distinguir dialectos ni extensiones.', 'LISP, en cualquiera de sus dialectos y sistemas de objetos.', 'Pascal, incluida cualquier variante orientada a objetos.'], respuesta_correcta: 0
  }, 'Corregida A. La categoría «orientado a objetos puro» no tiene una definición universal única y los nombres BASIC, LISP y Pascal abarcan dialectos/extensiones distintos. Se evita esa etiqueta sin criterio y se formula la propiedad verificable de Eiffel: clases como estructura básica y todos los tipos basados en clases, según su documentación.', 'corregida']
];

apply({ numero: '1436', fecha: '2026-11-16', records });
