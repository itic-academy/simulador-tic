const apply = require('./aplicar-lote.cjs');

const sources = {
  lrjsp: [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566&p=20260929', referencia: 'BOE, Ley 40/2015, texto consolidado consultado el 24-10-2026, última actualización publicada el 29-09-2026. Art. 3.2: relaciones entre las Administraciones Públicas mediante medios electrónicos con interoperabilidad, seguridad y protección de datos.' }
  ],
  lpac: [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565&p=20261001', referencia: 'BOE, Ley 39/2015, texto consolidado consultado el 24-10-2026, última actualización publicada el 01-10-2026. Art. 5.2: personas físicas con capacidad de obrar y personas jurídicas si sus estatutos lo prevén pueden representar a otras ante las Administraciones Públicas.' }
  ],
  lcsp: [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902&p=20260409', referencia: 'BOE, Ley 9/2017, texto consolidado consultado el 24-10-2026, última actualización publicada el 09-04-2026. Art. 107.1: garantía definitiva general del 5 % del precio final ofertado, excluido el IVA, salvo las excepciones legales.' }
  ],
  igualdad: [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-6115&p=20240802', referencia: 'BOE, Ley Orgánica 3/2007, texto consolidado consultado el 24-10-2026, última actualización publicada el 02-08-2024. Art. 16: los Poderes Públicos procurarán atender al principio de presencia equilibrada en los nombramientos y designaciones de cargos de responsabilidad que les correspondan.' }
  ],
  ebep: [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719&p=20261003', referencia: 'BOE, TREBEP, texto consolidado consultado el 24-10-2026, última actualización publicada el 03-10-2026. Art. 48.f): permiso de lactancia de una hora de ausencia diaria divisible en dos fracciones, con modalidades alternativas y acumulación en jornadas completas; derecho individual e incremento proporcional en caso múltiple.' }
  ]
};

const records = [
  [1341, [8], ['I-8'], ['Ley 40/2015', 'artículo 3.2', 'relaciones interadministrativas', 'medios electrónicos', 'interoperabilidad'], sources.lrjsp, null,
    'El artículo 3.2 de la Ley 40/2015 dispone que las Administraciones Públicas se relacionarán entre sí y con sus órganos, organismos y entidades vinculados o dependientes a través de medios electrónicos. Añade requisitos de interoperabilidad, seguridad y protección de datos y la facilitación preferente de servicios conjuntos. Las opciones sobre jerarquía, descentralización y desconcentración corresponden al artículo 3.1. Cotejo con ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», versión 2026.2, §2.2 (principios de actuación) y §2.9 (funcionamiento electrónico); A1 tema 8 y A2 O8.', 'vigente'],
  [1342, [8], ['I-8'], ['Ley 39/2015', 'artículo 5.2', 'representación', 'capacidad de obrar'], sources.lpac, null,
    'La opción correcta reproduce el artículo 5.2 de la Ley 39/2015: pueden representar a otras personas las personas físicas con capacidad de obrar y las personas jurídicas cuando sus estatutos lo prevean. No debe confundirse esta aptitud para representar con la acreditación exigida para ciertos actos del apartado 3. Cotejo con ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», versión 2026.2, §3.2 (interesados, capacidad y representación); A1 tema 8 y A2 O8.', 'vigente'],
  [1343, [11], [], ['Ley 9/2017', 'artículo 107', 'garantía definitiva', 'contratación pública'], sources.lcsp, null,
    'Con carácter general, el artículo 107.1 LCSP exige a quien presente la mejor oferta constituir garantía definitiva del 5 % del precio final ofertado, sin IVA. La propia norma prevé excepciones y supuestos de exención, por lo que la respuesta se refiere expresamente a la regla general del enunciado. El temario oficial A2 de ingreso libre no contiene un epígrafe específico de contratación pública; por ello no se fuerza una adscripción A2. Cotejo con ITIC Academy, bloque 05 «Contratación, presupuestos y compra TIC», versión 2026.2, §5.1 (garantías); A1 tema 11.', 'vigente'],
  [1344, [16], ['I-5'], ['Ley Orgánica 3/2007', 'artículo 16', 'igualdad de género', 'presencia equilibrada', 'nombramientos'], sources.igualdad, null,
    'Se corrige el enunciado defectuoso y se acota el supuesto al artículo 16 LO 3/2007. La Ley dispone que los Poderes Públicos procurarán atender al principio de presencia equilibrada de mujeres y hombres en los nombramientos y designaciones de los cargos de responsabilidad que les correspondan. «Procurarán» no equivale a una obligación absoluta de alcanzar el equilibrio «siempre» ni debe mezclarse con otras reglas específicas de la ley. Cotejo con ITIC Academy, bloque 06 «Economía, sociedad, empleo y transformación digital», versión 2026.2, apartado de políticas de igualdad (A1 tema 16 y A2 O5).', 'corregida'],
  [1345, [24], ['I-8'], ['TREBEP', 'artículo 48.f', 'permiso por lactancia', 'empleo público'], sources.ebep, null,
    'El artículo 48.f) TREBEP reconoce, por lactancia de un hijo menor de doce meses, una hora diaria de ausencia del trabajo, que puede dividirse en dos fracciones. También permite sustituirla por determinadas reducciones de jornada o por permiso retribuido acumulado en jornadas completas; el derecho es individual y se incrementa proporcionalmente en los casos múltiples. Entre las opciones dadas, la primera es la correcta. Cotejo con ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», versión 2026.2, §7.4 (jornada y permisos); A1 tema 24 y A2 O8.', 'vigente']
];

apply({ numero: '205', fecha: '2026-10-24', records, edits: {
  1344: {
    texto: 'Según el artículo 16 de la Ley Orgánica 3/2007, de 22 de marzo, ¿qué procurarán realizar los Poderes Públicos en los nombramientos y designaciones de los cargos de responsabilidad que les correspondan?',
    opciones: [
      'Atender al principio de presencia equilibrada de mujeres y hombres.',
      'Garantizar en todos los nombramientos una presencia exacta del 50 % de mujeres y del 50 % de hombres.',
      'Aplicar el principio únicamente a los órganos de selección de la Administración General del Estado.',
      'Aplicar el principio solo a las empresas con más de cincuenta personas trabajadoras.'
    ],
    respuesta_correcta: 0
  }
}});

const fs = require('node:fs');
const path = require('node:path');
const bank = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-205.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  1341: { source: 'lrjsp', block: 'Bloque 03, Actuación administrativa y Administración digital, versión 2026.2, §§2.2 y 2.9 (principios de actuación y funcionamiento electrónico).', topics: 'A1-8/A2-I-8' },
  1342: { source: 'lpac', block: 'Bloque 03, Actuación administrativa y Administración digital, versión 2026.2, §3.2 (interesados, capacidad y representación).', topics: 'A1-8/A2-I-8' },
  1343: { source: 'lcsp', block: 'Bloque 05, Contratación, presupuestos y compra TIC, versión 2026.2, §5.1 (garantías).', topics: 'A1-11; sin equivalente específico A2' },
  1344: { source: 'igualdad', block: 'Bloque 06, Economía, sociedad, empleo y transformación digital, versión 2026.2, apartado de políticas de igualdad.', topics: 'A1-16/A2-I-5' },
  1345: { source: 'ebep', block: 'Bloque 03, Actuación administrativa y Administración digital, versión 2026.2, §7.4 (jornada y permisos).', topics: 'A1-24/A2-I-8' }
};
const drive = {
  lrjsp: 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view',
  lpac: 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view',
  lcsp: 'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view',
  igualdad: 'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view',
  ebep: 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view'
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const m = academy[q.id];
  q.clasificacion.bloque_academia = m.block;
  q.clasificacion.nota = `Cotejo temático con ITIC Academy: ${m.block} Correspondencia orientativa con el temario oficial: ${m.topics}.`;
  const comment = ` Cotejo temático con ITIC Academy: ${m.block} Correspondencia orientativa con el temario oficial: ${m.topics}.`;
  q.comentarios = (q.comentarios || '') + comment;
  q.revision.observaciones += comment;
  q.revision.fuentes.push({ url: drive[m.source], referencia: `ITIC Academy, ${m.block} Correspondencia oficial: ${m.topics}.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(__dirname, '..', 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de ITIC Academy añadido al lote 205.');
