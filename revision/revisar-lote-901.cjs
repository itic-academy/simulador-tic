const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy38 = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academy39 = 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk';
const academy41 = 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk';

const sources = {
  4826: [
    { url: 'https://www.iso.org/standard/70879.html', referencia: 'ISO/IEC/IEEE 26511:2018, vigente según la ficha ISO (confirmada en 2024): requisitos para quienes gestionan información destinada a usuarios de sistemas, software y servicios; abarca planificación, producción y gestión de documentación e información de usuario.' },
    { url: 'https://www.iso.org/standard/77451.html', referencia: 'ISO/IEC/IEEE 26514:2022 es la norma específicamente dedicada al diseño y desarrollo de información para usuarios de productos software; se diferencia de 26511, dirigida a la gestión de esa información. La pregunta se limita expresamente al rol gestor.' },
    { url: 'https://webstore.iec.ch/en/publication/64666', referencia: 'IEC, ficha de ISO/IEC/IEEE 41062:2019: práctica recomendada para adquisición de software; no es la norma sobre gestión de documentación destinada a usuarios.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 50: normalización y evaluación de la conformidad.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.6: documentación y normas aplicables al software.' }
  ],
  4827: [
    { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf', referencia: 'MÉTRICA v3, ASI 8.3 y ASI 8.4: incluye prototipado para especificar formatos de pantalla y apoyar la especificación del comportamiento dinámico/interfaz interactiva. El estándar de MÉTRICA no categoriza aquí las opciones como técnicas de “bajo nivel”; por eso se elimina esa clasificación ambigua.' },
    { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf', referencia: 'MÉTRICA v3 ASI 8.3 relaciona el prototipado con la especificación de formatos individuales de interfaz; ASI 8.4 lo aplica al comportamiento dinámico de interfaz y al prototipo interactivo.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 88: análisis funcional, técnicas de especificación y metodologías.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.3: análisis y especificación de requisitos.' }
  ],
  4828: [
    { url: 'https://www.peoplecert.org/-/media/folders-reorganized/pdfs/itil-maturity-model/services-page/introduction-to-the-itil-mm.pdf', referencia: 'PeopleCert, titular actual de ITIL, diagrama y descripción del ITIL 4 Service Value System: Governance es uno de sus componentes, junto con principios guía, cadena de valor, prácticas y mejora continua.' },
    { url: 'https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-4-foundation-2565', referencia: 'PeopleCert, certificación ITIL 4 Foundation: alcance oficial del marco ITIL 4 y su Service Value System.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 106: gobierno y gestión de servicios TI, incluidos marcos de buenas prácticas.' }
  ],
  4829: [
    { url: 'https://docs.oracle.com/javase/tutorial/java/concepts/', referencia: 'Oracle Java Tutorials, conceptos de POO: presenta objetos, clases, herencia, interfaces, paquetes y encapsulación como conceptos fundamentales.' },
    { url: 'https://docs.oracle.com/javase/tutorial/java/IandI/polymorphism.html', referencia: 'Oracle Java Tutorials, polimorfismo: explica el polimorfismo y el comportamiento especializado de subclases como concepto de programación orientada a objetos.' },
    { url: 'https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.3.1.4', referencia: 'Java Language Specification, §8.3.1.4: volatile es un modificador de declaración de campos; combinado con el modelo de memoria, da garantías de visibilidad/consistencia entre hilos, no es un principio de POO.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.9: programación orientada a objetos y lenguajes/plataformas de desarrollo.' }
  ],
  4830: [
    { url: 'https://www.iso.org/certification.html', referencia: 'ISO, Certification: ISO desarrolla normas pero no realiza certificaciones ni expide certificados; estos los emiten organismos externos de certificación. La acreditación de tales organismos es una evaluación distinta.' },
    { url: 'https://www.enac.es/que-hacemos/-que-es-la-acreditacion-/acreditacion-o-certificacion-9001', referencia: 'ENAC: en España la certificación ISO 9001 es una actividad no regulada que puede ofrecer cualquier empresa; las entidades acreditadas por ENAC han demostrado competencia y cumplimiento de normas internacionales. ENAC acredita, no certifica el sistema de gestión de la organización cliente.' },
    { url: 'https://www.enac.es/que-hacemos/servicios-de-acreditacion/sistemas-de-gestion', referencia: 'ENAC, acreditación de sistemas de gestión: acredita la competencia de entidades que certifican sistemas de gestión.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 50: normalización, certificación y evaluación de la conformidad.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.13: calidad y normas de gestión aplicables a sistemas y software.' }
  ]
};

const records = [
  [4826, ['50'], ['III-6'], ['ISO/IEC/IEEE 26511', 'documentación de usuario', 'gestión de información para usuarios', 'estándares'], sources[4826], null,
    'Respuesta A. ISO/IEC/IEEE 26511:2018 es la norma de requisitos para gestionar información destinada a usuarios de sistemas, software y servicios. Se precisa el rol porque ISO/IEC/IEEE 26514:2022 trata específicamente del diseño y desarrollo de esa información; la opción 41062:2019 trata de adquisición de software. La ficha ISO mantiene publicada 26511:2018, aunque señala trabajo de revisión futura.', 'corregida'],
  [4827, ['88'], ['III-3'], ['MÉTRICA v3', 'prototipado', 'obtención de requisitos', 'interfaz de usuario'], sources[4827], null,
    'Respuesta D. Se elimina la clasificación indeterminada de las técnicas en “bajo nivel”. La pregunta se ancla a MÉTRICA v3: ASI 8 utiliza el prototipado para especificar formatos de interfaz y apoyar la definición del comportamiento dinámico y del prototipo interactivo.', 'corregida'],
  [4828, ['106'], [], ['ITIL 4', 'gobernanza', 'Service Value System', 'SVS'], sources[4828], null,
    'Respuesta A. En ITIL 4, Governance es uno de los componentes del Service Value System (SVS), junto con los principios guía, la cadena de valor del servicio, las prácticas y la mejora continua. La cadena de valor es solo el elemento central del SVS; el modelo de cuatro dimensiones es otro modelo complementario.', 'corregida'],
  [4829, [], ['III-9'], ['orientación a objetos', 'encapsulación', 'herencia', 'polimorfismo', 'Java volatile'], sources[4829], null,
    'Respuesta B. Encapsulación, herencia y polimorfismo son conceptos de programación orientada a objetos. “Volátil” no es uno de esos principios: en Java, volatile es un modificador de campos que afecta a la visibilidad de lecturas/escrituras entre hilos. Se explicita el sentido técnico de la palabra para evitar una comparación vaga de “propiedades”.', 'corregida'],
  [4830, ['50'], ['III-13'], ['ISO 9001', 'certificación', 'organismos de certificación', 'ENAC', 'AENOR', 'acreditación'], sources[4830], null,
    'Respuesta D. ISO publica la norma y no certifica organizaciones. En España, la certificación ISO 9001 es una actividad no regulada que puede ofrecer cualquier empresa; las entidades de certificación independientes pueden emitirla y ENAC puede acreditar su competencia para ese alcance. AENOR es un ejemplo, no la única entidad. Se distinguen certificación (del sistema del cliente) y acreditación (de la competencia del certificador).', 'corregida']
];

const edits = {
  4826: { texto: '¿Qué norma establece requisitos para quienes gestionan información destinada a los usuarios de sistemas, software y servicios?', opciones: [
    'ISO/IEC/IEEE 26511:2018.',
    'ISO/TS 22003:2013.',
    'ISO 9000:2015.',
    'ISO/IEC/IEEE 41062:2019.'
  ], respuesta_correcta: 0 },
  4827: { texto: 'Según MÉTRICA v3, ¿qué técnica se contempla en ASI 8 para apoyar la especificación de formatos y del comportamiento de la interfaz de usuario?', opciones: [
    'Entrevistas individuales como única técnica admitida.',
    'PIECES como notación de pantallas.',
    'Análisis de mercado como técnica de prototipado de la interfaz.',
    'Prototipado de la interfaz, incluidos formatos de pantalla e interacción.'
  ], respuesta_correcta: 3 },
  4828: { texto: 'En ITIL 4, ¿de qué modelo es componente la gobernanza (governance) de una organización?', opciones: [
    'Del Service Value System (SVS).',
    'De la cadena de valor del servicio, como modelo completo.',
    'Del modelo de las cuatro dimensiones, como una quinta dimensión.',
    'De los principios guía, como principio separado.'
  ], respuesta_correcta: 0 },
  4829: { texto: '¿Cuál de estos términos no es un concepto de orientación a objetos, sino un modificador de campos de Java relacionado con la visibilidad entre hilos?', opciones: [
    'Polimorfismo.',
    'Volatile (volátil).',
    'Herencia.',
    'Encapsulación.'
  ], respuesta_correcta: 1 },
  4830: { texto: '¿Quién puede emitir en España un certificado de un sistema de gestión conforme a ISO 9001, cuando la organización decide certificarse?', opciones: [
    'ISO, que publica la norma y expide los certificados.',
    'ENAC, que certifica directamente el sistema de gestión de cada empresa.',
    'Únicamente AENOR.',
    'Entidades de certificación independientes, como AENOR u otras; ENAC puede acreditar la competencia de estas entidades para el alcance correspondiente.'
  ], respuesta_correcta: 3 }
};

aplicar({ numero: '901', fecha: '2026-11-11', records, edits });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-901.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4826: ['bloque 39 — calidad y mantenimiento, sección de normas y documentación de usuario. Se diferencia el estándar de gestión de la información (26511) del estándar de diseño y desarrollo de información para usuarios (26514).', academy39],
  4827: ['bloque 38 — análisis, diseño y construcción; análisis de requisitos, MÉTRICA v3 y diseño de interfaz.', academy38],
  4828: ['bloque 41 — ITIL y COBIT; marco de gestión de servicios y modelos de gobierno.', academy41],
  4829: ['bloque 38 — análisis, diseño y construcción; programación orientada a objetos, encapsulación, herencia y polimorfismo.', academy38],
  4830: ['bloque 39 — calidad y mantenimiento; normalización, certificación de sistemas de gestión y evaluación de la conformidad.', academy39]
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const [detail, url] = academy[change.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026.1, ${detail} El cotejo ubica el contenido, no sustituye fuentes técnicas.`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo curricular: ${detail} La academia se emplea como mapa curricular, no como autoridad técnica.`;
  q.revision.observaciones += ` Cotejo curricular: ${detail} La academia se emplea como mapa curricular, no como autoridad técnica.`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `ITIC Academy 2026.1, ${detail} Cotejo de cobertura curricular; no se usa para validar la respuesta.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy añadido a las preguntas del lote 901.');
