const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academySystems = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academyQuality = 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk';
const academyIt = 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk';

const fuentes = {
  4751: [
    { url: 'https://svn.apache.org/repos/asf/jmeter/branches/doc-v2_3_4/docs/usermanual/intro.html', referencia: 'Apache JMeter User Manual (archivo histórico oficial), introducción: explica que JMeter puede ayudar a probar regresiones de aplicaciones mediante planes de prueba y aserciones; no se presenta como herramienta exclusivamente de regresión.' },
    { url: 'https://jmeter.apache.org/usermanual/', referencia: 'Manual oficial actual de Apache JMeter: documenta planes de prueba para clientes/servidores y las capacidades de carga, rendimiento y validación.' },
    { url: 'https://snort.org/faq/what-is-snort', referencia: 'FAQ oficial Snort: sistema de prevención/detección de intrusiones de red, no herramienta de pruebas de regresión de software.' },
    { url: 'https://docs.jbpm.org/latest/jbpm-docs/html_single/', referencia: 'Documentación oficial jBPM: suite BPM y motor para modelar/ejecutar procesos de negocio.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 96: niveles, técnicas y herramientas de prueba de software.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.7: pruebas de software y herramientas.' }
  ],
  4752: [
    { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf', referencia: 'MÉTRICA v3, documento oficial de Análisis del Sistema de Información: presenta los diagramas de flujo de datos en el análisis estructurado y distingue procesos, entidades externas, almacenes y flujos.' },
    { url: 'https://www.ibm.com/think/topics/data-flow-diagram', referencia: 'IBM, guía de DFD: enumera los elementos habituales (procesos, almacenes de datos, flujos y entidades externas) y describe la notación de contexto.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 88: análisis funcional de sistemas.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.3: determinación y especificación de requisitos.' }
  ],
  4753: [
    { url: 'https://www.isaca.org/resources/frameworks-standards-and-models', referencia: 'ISACA, entidad creadora y responsable de COBIT: lo define como un marco amplio de herramientas, recursos y orientación para el gobierno y la gestión de la TI empresarial.' },
    { url: 'https://www.isaca.org/resources/news-and-trends/newsletters/atisaca/2021/volume-19/3-things-cobit-is-3-things-it-isnt', referencia: 'ISACA, explicación de COBIT: distingue gobierno y gestión de I&T empresarial y señala que no es un marco técnico para gestionar cada tecnología ni un sistema de operaciones de service desk.' },
    { url: 'https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-4-foundation-2565', referencia: 'PeopleCert, propietario/certificador de ITIL: ITIL se centra en crear, entregar y gestionar servicios digitales; se diferencia del alcance de gobierno y gestión empresarial de COBIT.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 106: bases conceptuales de COBIT, objetivos de control y métricas.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema IV.4: operación, supervisión y gestión del rendimiento de sistemas, infraestructuras y servicios.' }
  ],
  4754: [
    { url: 'https://docs.oracle.com/javase/specs/jls/se26/html/jls-8.html#jls-8.1.4', referencia: 'Java Language Specification, §8.1.4: una clase declara como máximo una clase superdirecta; la implementación de interfaces se trata separadamente.' },
    { url: 'https://docs.oracle.com/javase/tutorial/java/IandI/multipleinheritance.html', referencia: 'Oracle Java Tutorials: Java no permite que una clase extienda varias clases, pero sí permite implementar varias interfaces; distingue herencia de estado, implementación y tipo.' },
    { url: 'https://eel.is/c++draft/class.derived', referencia: 'Borrador público del estándar C++ (WG21), cláusula derived classes: la lista de clases base permite más de una base directa.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, temas 88 y 93: desarrollo y técnicas de diseño de software.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.9: análisis y diseño orientado a objetos.' }
  ],
  4755: [
    { url: 'https://www.dau.edu/sites/default/files/Migrated/CopDocuments/SW%20Cost%20Est%20Manual%20Vol%20I%20rev%2010.pdf', referencia: 'Software Cost Estimating Manual, vol. I, §E.2.1 (Delphi Method): al combinar estimaciones individuales de varias personas expertas, describe la media como la agregación más sencilla y advierte del sesgo posible por valores extremos.' },
    { url: 'https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=8077', referencia: 'SEI/CMU, guía de estimación de costes software: distingue juicio experto, métodos empíricos y uso de datos históricos; la simple media es una agregación de juicios individuales, no la definición de un modelo histórico.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 99: estimación de recursos y esfuerzo en sistemas de información.' }
  ]
};

const registros = [
  [4751, ['96'], ['III-7'], ['Apache JMeter', 'pruebas de regresión', 'planes de prueba', 'aserciones'], fuentes[4751], null,
    'Respuesta A, precisada: Apache JMeter permite ejecutar planes con aserciones y puede ayudar a probar regresiones en aplicaciones cliente/servidor; también se utiliza para carga y rendimiento. Snort es una herramienta de seguridad de red y jBPM una suite BPM. La capacidad no implica que JMeter sea un framework general de pruebas unitarias ni exclusivamente de regresión.', 'corregida'],
  [4752, ['88'], ['III-3'], ['MÉTRICA v3', 'DFD', 'flujo de datos', 'almacén', 'entidad externa', 'proceso'], fuentes[4752], null,
    'Respuesta D. En la notación de DFD usada en MÉTRICA v3 se representan procesos, flujos de datos, almacenes y entidades externas; “entidad interna” no es uno de esos elementos del diagrama. Se actualiza la grafía a MÉTRICA v3.', 'corregida'],
  [4753, ['106'], ['IV-4'], ['COBIT', 'gobierno de TI', 'gestión de I&T empresarial', 'ITIL'], fuentes[4753], null,
    'Respuesta A, con alcance moderno: COBIT es un marco para el gobierno y la gestión de la información y la tecnología a escala empresarial. No es un marco limitado a seguridad, desarrollo de aplicaciones o atención al usuario; ITIL se centra específicamente en gestión de servicios.', 'corregida'],
  [4754, ['93'], ['III-9'], ['Java', 'C++', 'herencia simple', 'herencia múltiple', 'interfaces'], fuentes[4754], null,
    'Respuesta B. En Java una clase solo puede declarar una superclase directa, aunque puede implementar varias interfaces; C++ permite varias clases base directas. Se cambia la comparación original: las afirmaciones sobre “interpretado/compilado” y portabilidad absoluta simplificaban demasiado las implementaciones, y ambos lenguajes tienen reglas de tipos estáticos.', 'corregida'],
  [4755, ['99'], [], ['estimación de esfuerzo', 'juicio experto', 'media aritmética', 'Delphi', 'datos históricos'], fuentes[4755], null,
    'Respuesta A, con la categoría aclarada. El manual DAU/NAVAIR describe la media como agregación simple de estimaciones individuales de personas expertas en el contexto de Delphi. Esto no convierte la técnica en un modelo “con base histórica”: esta clasificación se refiere a métodos apoyados en analogía/experiencia de proyectos anteriores.', 'corregida']
];

const ediciones = {
  4751: { texto: '¿Cuál de estas herramientas permite ejecutar un plan de pruebas con aserciones que puede ayudar a comprobar regresiones en una aplicación cliente/servidor?', opciones: ['Apache JMeter.', 'Snort.', 'Atrio.', 'jBPM.'], respuesta_correcta: 0 },
  4752: { texto: 'Según los diagramas de flujo de datos utilizados en MÉTRICA v3, ¿cuál de los siguientes NO es un elemento del DFD?', opciones: ['Almacén de datos.', 'Flujo de datos.', 'Entidad externa.', 'Entidad interna.'], respuesta_correcta: 3 },
  4753: { texto: '¿Cuál es el propósito principal de COBIT?', opciones: ['Proporcionar un marco para el gobierno y la gestión de la información y la tecnología empresarial.', 'Definir exclusivamente la operación de un service desk de TI.', 'Establecer únicamente los controles técnicos de ciberseguridad de una organización.', 'Servir como metodología de desarrollo de aplicaciones.'], respuesta_correcta: 0 },
  4754: { texto: '¿Qué afirmación compara correctamente la herencia de clases de Java y C++?', opciones: ['Java permite extender directamente varias clases; C++ solo permite una clase base.', 'Una clase Java tiene como máximo una superclase directa, aunque puede implementar varias interfaces; una clase C++ puede tener varias bases directas.', 'Java es débilmente tipado y C++ fuertemente tipado.', 'Java siempre se interpreta y C++ siempre genera ejecutables portables entre plataformas.'], respuesta_correcta: 1 },
  4755: { texto: 'En una agregación simple de estimaciones individuales de personas expertas, ¿qué operación se describe en el manual de estimación de costes software como la más sencilla?', opciones: ['Calcular la media de las estimaciones individuales.', 'Elegir siempre la estimación mínima.', 'Sumar las estimaciones como si fueran componentes independientes del trabajo.', 'Ajustar una recta de regresión sobre datos históricos, aunque no haya una serie de proyectos.'], respuesta_correcta: 0 }
};

aplicar({ numero: '886', fecha: '2026-11-11', records: registros, edits: ediciones });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-886.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academia = {
  4751: { bloque: 'Bloque 39 — calidad y mantenimiento', detalle: 'cotejo curricular de las herramientas de pruebas; la función concreta de JMeter se apoya en la documentación de Apache.', url: academyQuality },
  4752: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'cotejo curricular de análisis estructurado y modelado; la notación DFD se verifica con MÉTRICA v3.', url: academySystems },
  4753: { bloque: 'Bloque 41 — ITIL y COBIT', detalle: 'el material sitúa COBIT y gobierno de TI; la finalidad del marco se valida con ISACA.', url: academyIt },
  4754: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'cotejo curricular de diseño orientado a objetos; las reglas de herencia se verifican con las especificaciones de Java y C++.', url: academySystems },
  4755: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'cotejo curricular de estimación de recursos y esfuerzo; la agregación de estimaciones se comprueba con el manual DAU/NAVAIR.', url: academySystems }
};
for (const cambio of log.cambios) {
  const q = bank.preguntas.find(x => x.id === cambio.id);
  const a = academia[cambio.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo curricular: ${a.detalle} Academy contextualiza el programa y no sustituye la fuente técnica.`;
  q.revision.observaciones += ` Cotejo curricular: ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: a.url, referencia: `ITIC Academy 2026.1, ${a.bloque}: cotejo del encaje A1/A2; no se usa como autoridad técnica.` });
  cambio.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy y registro de lote 886 preparados.');
