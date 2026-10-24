const apply = require('./aplicar-lote.cjs');

const sources = {
  iso: [
    { url: 'https://www.iso.org/standard/27001', referencia: 'ISO, ISO/IEC 27001:2022, ficha oficial: el SGSI preserva confidencialidad, integridad y disponibilidad; la propia página define estas tres propiedades.' },
    { url: 'https://www.iso.org/obp/ui?_escaped_fragment_=iso%3Astd%3Aiso-iec%3Ats%3A27103%3Aed-1%3Av1%3Aen', referencia: 'ISO/IEC TS 27103:2026, términos y definiciones, voz «information security», que remite a ISO/IEC 27000:2018: preservación de la confidencialidad, integridad y disponibilidad de la información.' }
  ],
  ens: [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191', referencia: 'BOE, texto consolidado del Real Decreto 311/2022, arts. 5–11: principios básicos del ENS; art. 5.c incluye prevención, detección, respuesta y conservación.' }
  ],
  audit: [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191', referencia: 'BOE, texto consolidado del Real Decreto 311/2022, art. 31.4: contenido mínimo del informe; art. 31.5: el responsable de seguridad analiza el informe y presenta conclusiones al responsable del sistema, que adopta medidas correctoras.' },
    { url: 'https://www.ccn-cert.cni.es/es/ens.html', referencia: 'Centro Criptológico Nacional, recursos oficiales sobre el ENS y auditoría de seguridad; aplicables junto con la Instrucción Técnica de Seguridad de Auditoría de la Seguridad de los Sistemas de Información.' }
  ],
  reunete: [
    { url: 'https://administracionelectronica.gob.es/ctt/reunete/abstract', referencia: 'Portal de Administración Electrónica, CTT, ficha de REÚNETE: lo identifica como Servicio Común de Reuniones Virtuales de la Red SARA y describe su prestación de videoconferencia a las Administraciones Públicas.' }
  ],
  sir: [
    { url: 'https://administracionelectronica.gob.es/ctt/sir/abstract', referencia: 'Portal de Administración Electrónica, CTT, ficha de SIR: lo identifica como infraestructura básica para intercambiar asientos electrónicos de registro entre Administraciones Públicas, con seguridad y conformidad legal.' },
    { url: 'https://administracionelectronica.gob.es/ctt/verIniciativaPInfoAdificional.htm?idIniciativa=sir&idioma=es', referencia: 'Portal de Administración Electrónica, CTT, información adicional de SIR: distingue la infraestructura de las aplicaciones registrales ORVE y GEISER; requiere instalaciones certificadas conforme a SICRES.' }
  ]
};

const records = [
  [1361, [47], ['II-13'], ['ISO/IEC 27001', 'seguridad de la información', 'confidencialidad', 'integridad', 'disponibilidad'], sources.iso, null,
    'La tríada clásica de seguridad de la información es confidencialidad, integridad y disponibilidad (CIA). Se conserva la opción C y se normaliza la referencia como ISO/IEC 27001. ISO confirma expresamente esas tres propiedades y las relaciona con el sistema de gestión de seguridad de la información. Cotejo curricular: ITIC Academy, bloque 48 «Seguridad en redes y aplicación», versión 2026 (actualizado en octubre de 2026), conceptos y dimensiones de seguridad; correspondencia orientativa A1-47/A2-II-13.', 'vigente'],
  [1362, [48], ['I-9'], ['ENS', 'Real Decreto 311/2022', 'principios básicos', 'artículo 5'], sources.ens, null,
    'Se ajusta la formulación a la lista del artículo 5 del RD 311/2022. Sus siete principios incluyen la seguridad como proceso integral, gestión basada en riesgos, prevención/detección/respuesta/conservación, líneas de defensa, vigilancia continua, reevaluación periódica y diferenciación de responsabilidades. «Conservación» es correcta en este artículo, aunque no debe confundirse con «recuperación» como principio: el artículo 8.4 sí habla de restauración de información y servicios. Cotejo con ITIC Academy, bloque 48 «Seguridad en redes y aplicación», versión 2026, sección sobre ENS; correspondencia A1-48/A2-I-9.', 'corregida'],
  [1363, [38, 48], ['II-11'], ['ENS', 'auditoría de seguridad', 'informe de auditoría', 'artículo 31'], sources.audit, null,
    'La pregunta original atribuía al informe la obligación de proponer medidas correctivas o complementarias. El art. 31.4 del RD 311/2022 exige que el informe dictamine sobre el grado de cumplimiento e identifique hallazgos de cumplimiento e incumplimiento, además de metodología, alcance, objetivo y datos/hechos/observaciones que sustenten sus conclusiones. Conforme al art. 31.5, el responsable de seguridad analiza el informe y presenta sus conclusiones al responsable del sistema, que adopta las medidas correctoras adecuadas. Se reescribe el supuesto para preguntar por el contenido mínimo del informe, evitando atribuir esa decisión al auditor. Cotejo con ITIC Academy, bloque 48 «Seguridad en redes y aplicación», versión 2026, apartados de ENS y auditoría; A1-38/A1-48/A2-II-11.', 'corregida'],
  [1364, [130], ['IV-16'], ['REÚNETE', 'Red SARA', 'servicio común', 'videoconferencia'], sources.reunete, null,
    'La respuesta es REÚNETE, nombre que el CTT asigna al Servicio Común de Reuniones Virtuales de la Red SARA. Se conserva la clave. Cotejo con ITIC Academy, bloque 50 «Videoconferencia, SSO y trabajo colaborativo», versión 2026.1 de 01-10-2026, epígrafe sobre videoconferencia en las AAPP; correspondencia A1-130/A2-IV-16.', 'vigente'],
  [1365, [49], ['I-10'], ['SIR', 'Sistema de Interconexión de Registros', 'asientos registrales', 'ORVE', 'GEISER', 'SICRES'], sources.sir, null,
    'La infraestructura es SIR. No debe confundirse con REC/REGAGE (registro de entrada de la AGE) ni con ORVE y GEISER, que son aplicaciones/servicios registrales integrados con SIR. La integración exige los requisitos de certificación e interoperabilidad SICRES que recoge el CTT. Cotejo con ITIC Academy, Tema 049 «Servicios Comunes», que reproduce el tema A1-49 y trata SIR, REC, GEISER y ORVE; correspondencia A1-49/A2-I-10.', 'vigente']
];

apply({ numero: '209', fecha: '2026-10-24', records, edits: {
  1361: {
    texto: 'Según ISO/IEC 27001, la seguridad de la información se basa en preservar su:',
    respuesta_correcta: 2
  },
  1362: {
    texto: 'Según el artículo 5 del Real Decreto 311/2022, ¿qué opción recoge los principios básicos del Esquema Nacional de Seguridad (ENS)?',
    opcion: [2, 'Seguridad como proceso integral; gestión basada en riesgos; prevención, detección, respuesta y conservación; existencia de líneas de defensa; vigilancia continua y reevaluación periódica; diferenciación de responsabilidades.'],
    respuesta_correcta: 2
  },
  1363: {
    texto: 'Según el artículo 31.4 del Real Decreto 311/2022, ¿qué debe incluir el informe de auditoría de seguridad del ENS?',
    opcion: [3, 'El grado de cumplimiento y los hallazgos de cumplimiento e incumplimiento; los criterios metodológicos, alcance y objetivo; y los datos, hechos y observaciones que sustenten las conclusiones.'],
    respuesta_correcta: 3
  },
  1365: {
    texto: '¿Qué infraestructura básica permite intercambiar de forma segura y con conformidad legal los asientos electrónicos de registro entre Administraciones Públicas, con independencia de la aplicación registral certificada utilizada?',
    respuesta_correcta: 2
  }
}});

const fs = require('node:fs');
const path = require('node:path');
const bank = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-209.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  1361: { source: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view', block: 'Bloque 48, Seguridad en redes y aplicación, versión 2026, apartado de conceptos y dimensiones de seguridad; actualización de octubre de 2026.', topics: 'A1-47/A2-II-13' },
  1362: { source: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view', block: 'Bloque 48, Seguridad en redes y aplicación, versión 2026, ENS de 2022.', topics: 'A1-48/A2-I-9' },
  1363: { source: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view', block: 'Bloque 48, Seguridad en redes y aplicación, versión 2026, ENS y auditoría.', topics: 'A1-38/A1-48/A2-II-11' },
  1364: { source: 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view', block: 'Bloque 50, Videoconferencia, SSO y trabajo colaborativo, versión 2026.1 (01-10-2026), sistemas de videoconferencia y REÚNETE.', topics: 'A1-130/A2-IV-16' },
  1365: { source: 'https://drive.google.com/file/d/1wf9xQtg-rFSu_6YPmeUc_Y9J3bq1Lb-q/view', block: 'Tema 049, Servicios Comunes, sección 3.1.2 sobre SIR y su distinción frente a REC, GEISER y ORVE.', topics: 'A1-49/A2-I-10' }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const m = academy[q.id];
  q.clasificacion.bloque_academia = m.block;
  q.clasificacion.nota = `Cotejo temático con ITIC Academy: ${m.block} Correspondencia orientativa con el temario oficial: ${m.topics}.`;
  const comment = ` Cotejo temático con ITIC Academy: ${m.block} Correspondencia orientativa con el temario oficial: ${m.topics}.`;
  q.comentarios = (q.comentarios || '') + comment;
  q.revision.observaciones += comment;
  q.revision.fuentes.push({ url: m.source, referencia: `ITIC Academy, ${m.block} Correspondencia: ${m.topics}.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(__dirname, '..', 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo con ITIC Academy añadido al lote 209.');
