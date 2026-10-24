const apply = require('./aplicar-lote.cjs');

const sources = {
  swot: [
    { url: 'https://www.gov.uk/government/publications/futures-toolkit-for-policy-makers-and-analysts/the-futures-toolkit-html', referencia: 'Government Office for Science, The Futures Toolkit, herramienta SWOT: identifica fortalezas y debilidades como factores internos y oportunidades y amenazas como externos.' }
  ],
  bsc: [
    { url: 'https://hbr.org/1992/01/the-balanced-scorecard-measures-that-drive-performance-2', referencia: 'Robert S. Kaplan y David P. Norton, “The Balanced Scorecard—Measures That Drive Performance”, Harvard Business Review, enero-febrero de 1992; artículo original que presenta el cuadro de mando integral.' }
  ],
  audit: [
    { url: 'https://www.isaca.org/career-center/career-journey/it-auditing/it-auditor', referencia: 'ISACA, perfil profesional IT Auditor: los auditores de TI pueden ser internos o externos; el auditor externo está afiliado a un tercero independiente.' }
  ],
  lcsp: [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902', referencia: 'BOE, Ley 9/2017, de Contratos del Sector Público, texto consolidado consultado el 24-10-2026. Art. 308.3: en contratos de servicios de desarrollo o mantenimiento de aplicaciones informáticas, cuando el objeto se defina por componentes, el PCAP establecerá el precio de cada componente; financiación y pago se ajustarán al ritmo de ejecución. Arts. 16.3.b y 17: distinguen la adquisición/cesión de programas (suministro) de prestaciones de servicios.' }
  ],
  sla: [
    { url: 'https://www.wa.gov.au/service-level-agreement', referencia: 'Government of Western Australia, Service Level Agreement para sus servicios web: define categorías de nivel de servicio como disponibilidad y fallos, y fija tiempos para detección, respuesta y restauración; ejemplo público de métricas operativas de un SLA.' }
  ]
};

const records = [
  [1351, [32, 35, 87], [], ['DAFO', 'análisis estratégico', 'factores internos', 'fortalezas', 'debilidades'], sources.swot, null,
    'En una matriz DAFO, las fortalezas y debilidades describen factores internos de la organización o del proyecto; oportunidades y amenazas corresponden al entorno externo. La opción correcta es «Debilidades y fortalezas». Cotejo con ITIC Academy, bloque 12 «Estrategias y herramientas del directivo público TIC. Planificación estratégica de sistemas de información», versión 2026.2 (02-10-2026): incluye expresamente DAFO y los temas A1 32, 33 y 87. Correspondencia oficial: A1-32/A1-35/A1-87; no se fuerza una adscripción A2, cuyo tema II-4 versa sobre inteligencia de negocio y cuadros de mando, no sobre análisis DAFO.', 'vigente'],
  [1352, [33], ['II-4'], ['cuadro de mando integral', 'Balanced Scorecard', 'Kaplan y Norton', 'perspectiva financiera'], sources.bsc, null,
    'La perspectiva financiera es una de las cuatro perspectivas clásicas del Balanced Scorecard: financiera, cliente, procesos internos y aprendizaje/crecimiento. Se corrigen el nombre «Balanced Scoreboard» por «Balanced Scorecard» y la expresión incompleta «cuadro mando». Cotejo con ITIC Academy, bloque 12, versión 2026.2, §§3.1–3.2: explica las cuatro perspectivas y su adaptación al sector público; correspondencia A1-33 y A2-II-4.', 'corregida'],
  [1353, [38], ['II-11'], ['auditoría informática', 'auditoría interna', 'auditoría externa', 'ISACA'], sources.audit, null,
    'La afirmación de que la auditoría de TI debe ser realizada por una empresa externa es la incorrecta: puede realizarse por auditoría interna o contratarse externamente; el alcance, la independencia y las salvaguardas dependen del encargo y del marco aplicable. Se corrigen tildes y puntuación del original para que el supuesto quede legible. Cotejo con ITIC Academy, bloque 41 «ITIL y COBIT», versión 2026, sobre gobierno, control y auditoría; encaje oficial A1-38 y A2-II-11.', 'corregida'],
  [1354, [11, 39], [], ['LCSP', 'artículo 308.3', 'mantenimiento de aplicaciones', 'contrato de servicios', 'precio por componentes'], sources.lcsp, null,
    'La opción A reproduce la regla del artículo 308.3 LCSP: en contratos de servicios que impliquen desarrollo o mantenimiento de aplicaciones informáticas y cuyo objeto se defina por componentes, la financiación y el pago se ajustan al ritmo de ejecución de esos componentes. El PCAP debe fijar el precio referido a cada componente, por lo que B es falsa. C también es falsa: el mantenimiento descrito es una prestación de servicios; no debe confundirse con la adquisición o cesión de derechos de uso de programas prevista como suministro en el art. 16.3.b. Cotejo con ITIC Academy, bloque 05 «Contratación, presupuestos, convenios, subvenciones y compra TIC», versión 2026.2 (01-10-2026), §3.3 (frontera suministro/servicio TIC) y sección de ejecución; correspondencia A1-11/A1-39. El temario A2 no contiene equivalente de contratación pública.', 'vigente'],
  [1355, [106], ['IV-4'], ['acuerdo de nivel de servicio', 'SLA', 'disponibilidad', 'tiempo de respuesta', 'métricas de servicio'], sources.sla, null,
    'El domicilio social del proveedor es un dato corporativo, no un indicador de nivel o calidad del servicio. Disponibilidad, tiempos de respuesta y especificación del servicio sí describen el alcance y el desempeño que pueden medirse y pactarse en un SLA. Se interpreta «esencial» en sentido funcional y se evita afirmar que exista una lista universal cerrada de cláusulas obligatorias. Cotejo con ITIC Academy, bloque 41 «ITIL y COBIT», versión 2026, sobre gestión de servicios y niveles acordados; correspondencia A1-106 y A2-IV-4 (monitorización del rendimiento de servicios).', 'corregida']
];

apply({ numero: '207', fecha: '2026-10-24', records, edits: {
  1352: {
    texto: '¿Cuál de las siguientes es una de las perspectivas del cuadro de mando integral (Balanced Scorecard) presentado por Kaplan y Norton en 1992?',
    opciones: ['Perspectiva financiera.', 'Perspectiva del proveedor.', 'Perspectiva de seguridad.', 'Perspectiva logística.'],
    respuesta_correcta: 0
  },
  1353: {
    texto: '¿Qué afirmación sobre la auditoría informática es incorrecta?',
    opciones: [
      'Debe ser realizada necesariamente por una empresa externa.',
      'Puede evaluar la eficacia y eficiencia de los sistemas de información.',
      'Puede verificar la calidad de los sistemas de información.',
      'Puede revisar los controles internos implantados en los centros de proceso de datos.'
    ],
    respuesta_correcta: 0
  },
  1355: {
    texto: 'En un acuerdo de nivel de servicio (SLA), ¿cuál de los siguientes datos no describe el nivel o la calidad del servicio acordado?',
    opciones: [
      'La ubicación de la sede social del proveedor.',
      'Los tiempos de respuesta.',
      'La disponibilidad de los servicios.',
      'La especificación de los servicios incluidos.'
    ],
    respuesta_correcta: 0
  }
}});

const fs = require('node:fs');
const path = require('node:path');
const bank = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-207.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  1351: { source: 'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view', block: 'Bloque 12, Estrategias y herramientas del directivo público TIC. Planificación estratégica de sistemas de información, versión 2026.2 (02-10-2026); incluye DAFO y los temas A1 32, 33 y 87.', topics: 'A1-32/A1-35/A1-87; sin equivalente A2 específico' },
  1352: { source: 'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view', block: 'Bloque 12, Estrategias y herramientas del directivo público TIC. Planificación estratégica de sistemas de información, versión 2026.2 (02-10-2026), §§3.1–3.2; cuatro perspectivas del CMI y adaptación al sector público.', topics: 'A1-33/A2-II-4' },
  1353: { source: 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view', block: 'Bloque 41, ITIL y COBIT, versión 2026; gobierno, control, evaluación y auditoría de sistemas de información.', topics: 'A1-38/A2-II-11' },
  1354: { source: 'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view', block: 'Bloque 05, Contratación, presupuestos, convenios, subvenciones y compra TIC, versión 2026.2 (01-10-2026), §3.3 (frontera suministro/servicio TIC) y sección de ejecución.', topics: 'A1-11/A1-39; sin equivalente A2 de contratación pública' },
  1355: { source: 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view', block: 'Bloque 41, ITIL y COBIT, versión 2026; gestión de servicios y niveles de servicio acordados.', topics: 'A1-106/A2-IV-4' }
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
console.log('Cotejo de ITIC Academy añadido al lote 207.');
