const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const rd1125 = 'https://www.boe.es/eli/es/rd/2024/11/05/1125/con';
const lssi = 'https://www.boe.es/eli/es/l/2002/07/11/34/con';
const gdpr = 'https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=es';
const rd364 = 'https://www.boe.es/eli/es/rd/1995/03/10/364/con';
const ebep = 'https://www.boe.es/eli/es/rdlg/2015/10/30/5/con';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const drive = {
  governance: 'https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk',
  administration: 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',
  privacy: 'https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk',
  agile: 'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk'
};

const records = [
  [5531, [30], [], ['Real Decreto 1125/2024', 'planes de acción departamentales', 'transformación digital', 'CMAD', 'CETIC'], [
    { url: rd1125, referencia: 'Real Decreto 1125/2024, de 5 de noviembre, texto consolidado del BOE, art. 11: cada ministerio puede contar con un Plan de acción para la transformación digital; la propuesta se elabora conforme a directrices de la Agencia y líneas de la CETIC, y la presidencia de la CMAD la remite para estudio y valoración.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 30: modelos de gobernanza TIC, organización e instrumentos de las TIC en la AGE y transformación digital.' },
    { url: a2, referencia: 'No se asigna un tema A2 específico de gobernanza TIC departamental: el programa A2 trata instrumentos de administración electrónica y cooperación interadministrativa en I.9/I.10, que son materias relacionadas pero no equivalentes.' },
    { url: drive.governance, referencia: 'ITIC Academy 2026, bloque 10 Gobernanza TIC y Administración Digital: estrategia común, planes de acción departamentales, Agencia y órganos de gobernanza; relación principal con A1-30 y transversal con A2.' }
  ], 'La denominación de los antiguos «Planes de Acción Sectoriales» se actualiza al instrumento vigente del artículo 11 del Real Decreto 1125/2024: Planes de acción departamentales para la transformación digital. Se formula una pregunta precisa sobre el órgano que puede contar con el plan: cada ministerio. La propuesta se prepara con las directrices de la Agencia y las líneas estratégicas de la CETIC; la presidencia de la CMAD la remite para estudio y valoración. La respuesta B es correcta.', 'corregida'],
  [5532, [22], ['I-6'], ['Ley 34/2002', 'LSSI', 'artículo 10.1.a', 'prestadores', 'comunicación directa y efectiva'], [
    { url: lssi, referencia: 'Ley 34/2002, texto consolidado del BOE, art. 10.1.a: exige nombre/denominación, domicilio o establecimiento, dirección de correo electrónico y cualquier otro dato que permita comunicación directa y efectiva; no impone con carácter general que ese dato adicional sea un teléfono.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 22: legislación sobre sociedad de la información y administración electrónica en España y Europa.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema I.6: sociedad de la información.' },
    { url: drive.administration, referencia: 'ITIC Academy 2026, bloque 03 Actuación Administrativa y Administración Digital: sociedad de la información y legislación española/europea.' }
  ], 'El artículo 10.1.a LSSI exige una dirección de correo y datos que permitan una comunicación directa y efectiva, pero no identifica necesariamente un número telefónico como medio obligatorio. Se acota el enunciado al deber general de ese artículo: otras normas sectoriales o de atención a la clientela pueden imponer obligaciones telefónicas adicionales a ciertos prestadores. La respuesta D es la única que no se exige específicamente por el art. 10.1.a.', 'corregida'],
  [5533, [27], ['I-7'], ['RGPD', 'artículo 30', 'registro de actividades de tratamiento', 'categorías de interesados', 'plazos de supresión', 'medidas de seguridad'], [
    { url: gdpr, referencia: 'Reglamento (UE) 2016/679 (RGPD), texto oficial de EUR-Lex, art. 30.1: el registro del responsable incluye fines, categorías de interesados y datos, destinatarios, transferencias y, cuando sea posible, plazos previstos de supresión y descripción general de las medidas técnicas y organizativas de seguridad.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 27: régimen jurídico de protección de datos, RGPD, principios, derechos y obligaciones.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema I.7: protección de datos personales, responsables, encargados, DPD y autoridades.' },
    { url: drive.privacy, referencia: 'ITIC Academy 2026, bloque 08 Protección de Datos: RGPD/LOPDGDD, obligaciones y registro de actividades de tratamiento.' }
  ], 'El artículo 30.1 RGPD exige registrar los fines y una descripción de las categorías de interesados y datos personales, entre otros elementos. También incorpora, cuando sea posible, los plazos previstos de supresión y una descripción general de las medidas de seguridad. Se reformula la respuesta correcta para evitar que los distractores nieguen obligaciones expresas del propio artículo. La respuesta B es correcta.', 'corregida'],
  [5534, [24], ['I-8'], ['Real Decreto 364/1995', 'artículo 71', 'intervalos de niveles', 'TREBEP', 'subgrupo A1'], [
    { url: rd364, referencia: 'Real Decreto 364/1995, texto consolidado del BOE, art. 71.1 y 2: el antiguo Grupo A tiene intervalo de niveles 20–30 y no se pueden obtener puestos fuera del intervalo del grupo.' },
    { url: ebep, referencia: 'Texto refundido del Estatuto Básico del Empleado Público, disposición transitoria tercera.2: equivalencia transitoria del antiguo Grupo A con el subgrupo A1.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 24: empleo público, grupos y subgrupos de clasificación profesional y régimen de los funcionarios.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema I.8: texto refundido del Estatuto Básico del Empleado Público.' },
    { url: drive.administration, referencia: 'ITIC Academy 2026, bloque 03 Actuación Administrativa y Administración Digital: EBEP y empleo público.' }
  ], 'El ítem original era ambiguo: tanto 24–30 como 26–30 pueden describir subintervalos del intervalo permitido, y ninguno expresa el intervalo completo. El art. 71 del RD 364/1995 fija 20–30 para el antiguo Grupo A; la disposición transitoria tercera.2 TREBEP establece su equivalencia con A1. Se reconstruyen las opciones como intervalos completos y la respuesta inequívoca es A (20–30).', 'corregida'],
  [5535, [37, 88], ['III-2'], ['Scrum', 'Scrum Guide 2020', 'compromisos de artefactos', 'Incremento', 'Definición de Terminado'], [
    { url: 'https://scrumguides.org/scrum-guide.html', referencia: 'Scrum Guide 2020, versión oficial vigente: cada artefacto Scrum tiene un compromiso asociado; el compromiso del Incremento es la Definition of Done (Definición de Terminado).' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, temas 37 y 88: metodologías ágiles y Scrum.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.2: gestión y planificación del desarrollo y metodologías de desarrollo.' },
    { url: drive.agile, referencia: 'ITIC Academy 2026, bloque 15 Metodologías Ágiles y Ciclo de Vida: Scrum y Kanban; mapa A1 temas 37/86/88 y A2 D1/D2.' }
  ], 'El enunciado original mezclaba términos de Scrum, prácticas auxiliares y una errata («Architectural Skype»), de modo que su alcance no era preciso. Se sustituye por una pregunta literal de Scrum Guide 2020: el compromiso asociado al Incremento es la Definición de Terminado (Definition of Done). La respuesta B es correcta.', 'corregida']
];

const edits = {
  5531: {
    texto: 'Según el artículo 11 del Real Decreto 1125/2024, ¿qué nivel de la Administración puede contar con un Plan de acción para la transformación digital que incluya las actuaciones del departamento y sus organismos vinculados?',
    opciones: ['La Comisión de Estrategia TIC (CETIC).', 'Cada ministerio, mediante su planificación departamental de transformación digital.', 'La Agencia Estatal de Administración Digital, como único órgano que elabora planes departamentales.', 'Ninguno: el Real Decreto 1125/2024 no contempla planes departamentales.'],
    respuesta_correcta: 1
  },
  5532: {
    texto: '¿Cuál de estos datos NO se exige específicamente, con carácter general, por el artículo 10.1.a de la Ley 34/2002, sin perjuicio de obligaciones sectoriales adicionales?',
    respuesta_correcta: 3
  },
  5533: {
    texto: 'Según el artículo 30.1 del RGPD, ¿qué información debe figurar en el registro de actividades de tratamiento del responsable?',
    opciones: [
      'El nombre y datos de contacto del responsable, pero nunca los del delegado de protección de datos, aunque exista.',
      'Los fines del tratamiento y una descripción de las categorías de interesados y de datos personales, entre otros extremos.',
      'Los fines y categorías de interesados, pero no los plazos previstos de supresión ni una descripción general de las medidas de seguridad.',
      'Las medidas técnicas y organizativas detalladas, pero no las categorías de destinatarios ni las transferencias internacionales.'
    ],
    respuesta_correcta: 1
  },
  5534: {
    texto: 'Conforme al artículo 71 del Real Decreto 364/1995 y a la equivalencia transitoria del antiguo Grupo A con el subgrupo A1, ¿cuál es el intervalo completo de niveles de los puestos correspondiente a dicho grupo?',
    opciones: ['Del nivel 20 al 30.', 'Del nivel 24 al 30.', 'Del nivel 16 al 26.', 'Del nivel 26 al 30.'],
    respuesta_correcta: 0
  },
  5535: {
    texto: 'Según la Scrum Guide 2020, ¿cuál es el compromiso asociado al artefacto Incremento?',
    opciones: ['El Objetivo del Producto (Product Goal).', 'La Definición de Terminado (Definition of Done).', 'El Objetivo del Sprint (Sprint Goal).', 'El Sprint Backlog.'],
    respuesta_correcta: 1
  }
};

const log = path.join(__dirname, 'cambios-lote-1042.json');
const fs = require('node:fs');
if (!fs.existsSync(log)) aplicar({ numero: '1042', fecha: '2026-11-12', records, edits });

const bankFile = path.join(__dirname, '..', 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankFile, 'utf8'));
const changeLog = JSON.parse(fs.readFileSync(log, 'utf8'));
const academy = {
  5531: 'ITIC Academy 2026, bloque 10 Gobernanza TIC y Administración Digital: planes departamentales y órganos de gobernanza; A1-30. El programa A2 no contiene un epígrafe equivalente específico.',
  5532: 'ITIC Academy 2026, bloque 03 Actuación Administrativa y Administración Digital: legislación sobre sociedad de la información; A1-22 y A2-I.6.',
  5533: 'ITIC Academy 2026, bloque 08 Protección de Datos: RGPD, obligaciones del responsable y registro de actividades; A1-27 y A2-I.7.',
  5534: 'ITIC Academy 2026, bloque 03 Actuación Administrativa y Administración Digital: EBEP y empleo público; A1-24 y A2-I.8.',
  5535: 'ITIC Academy 2026, bloque 15 Metodologías Ágiles y Ciclo de Vida: Scrum; A1-37/88 y A2-III.2.'
};
for (const c of changeLog.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  q.clasificacion.bloque_academia = academy[c.id];
  q.clasificacion.nota = 'Clasificación cotejada con los programas oficiales A1/A2 de 2025 y con el temario ITIC Academy 2026; la academia se utiliza como mapa curricular, no como fuente normativa.';
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankFile, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(log, JSON.stringify(changeLog, null, 2) + '\n');
