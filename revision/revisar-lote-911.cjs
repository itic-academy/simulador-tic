const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const ley39 = 'https://www.boe.es/eli/es/l/2015/10/01/39/con';
const lcsp = 'https://www.boe.es/eli/es/l/2017/11/08/9/con/20260409';
const desi2022 = 'https://commission.europa.eu/system/files/2022-05/2022-european-semester-country-report-spain_en.pdf';
const digitalDecade = 'https://digital-strategy.ec.europa.eu/en/policies/countries-digitisation-performance';
const tue13 = 'https://eur-lex.europa.eu/eli/treaty/teu_2016/art_13/oj/spa';
const academyAdmin = 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const academyContracts = 'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk';
const academySociety = 'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk';
const academyEU = 'https://drive.google.com/file/d/1FAP2AizgAOnbPYOugoWDgThYwZJKCe-C/view?usp=drivesdk';

const sources = {
  4876: [
    { url: ley39, referencia: 'Ley 39/2015, artículo 56.2, texto consolidado BOE: las medidas provisionales adoptadas antes de iniciar el procedimiento se confirman, modifican o levantan en el acuerdo de iniciación, que debe dictarse dentro de los quince días siguientes; si no se inicia el procedimiento en ese plazo o falta pronunciamiento expreso, quedan sin efecto.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 8: régimen jurídico de las Administraciones públicas y procedimiento administrativo.' },
    { url: a2, referencia: 'Convocatoria A2 GSI AGE 2025, tema I.8: Leyes 39/2015 y 40/2015.' }
  ],
  4877: [
    { url: lcsp, referencia: 'Ley 9/2017, artículo 333.1 y 333.3, texto consolidado BOE a 9 de abril de 2026: la Oficina Nacional de Evaluación (ONE), órgano colegiado integrado en la OIReScon, analiza la sostenibilidad financiera de concesiones e informa determinados acuerdos de restablecimiento del equilibrio económico en los casos legalmente delimitados.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 11: contratos de las Administraciones públicas y Ley de Contratos del Sector Público.' }
  ],
  4878: [
    { url: desi2022, referencia: 'Comisión Europea, informe DESI 2022 de España, tabla A8.1: especialistas TIC equivalen al 4,1 % de las personas ocupadas de 15 a 74 años; el dato corresponde a 2021 (la media UE es 4,5 %).' },
    { url: digitalDecade, referencia: 'Comisión Europea: desde 2023 DESI está integrado en los informes sobre el estado de la Década Digital; el 4,1 % es una cifra histórica del DESI 2022 y no debe presentarse como dato actual.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 19: impacto de las TIC en la economía y en el mercado de trabajo; incluye las principales magnitudes de empleo TIC.' },
    { url: a2, referencia: 'Convocatoria A2 GSI AGE 2025, tema I.6: sociedad de la información y Agenda Digital para España; correspondencia temática, no fuente del indicador estadístico.' }
  ],
  4879: [
    { url: tue13, referencia: 'Tratado de la Unión Europea, artículo 13.1, versión consolidada oficial EUR-Lex: enumera expresamente al Banco Central Europeo entre las instituciones de la Unión.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 5: instituciones de la Unión Europea; cita expresamente al Banco Central Europeo.' }
  ],
  4880: [
    { url: lcsp, referencia: 'Ley 9/2017, artículos 123–125, texto consolidado BOE a 9 de abril de 2026: el artículo 124 regula el pliego de prescripciones técnicas particulares que rige la prestación y define sus calidades; el artículo 125 define las prescripciones técnicas.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 11: contratos de las Administraciones públicas, procedimientos y adjudicación.' }
  ]
};

const records = [
  [4876, ['8'], ['I-8'], ['Ley 39/2015', 'procedimiento administrativo', 'artículo 56.2', 'medidas provisionales', '15 días'], sources[4876], null,
    'Respuesta B. El artículo 56.2 de la Ley 39/2015 permite, en casos de urgencia inaplazable y antes de iniciar el procedimiento, adoptar medidas provisionales necesarias y proporcionadas. Deben confirmarse, modificarse o levantarse en el acuerdo de iniciación, que ha de dictarse dentro de los quince días siguientes a su adopción. Si no se inicia el procedimiento dentro de ese plazo o el acuerdo no contiene pronunciamiento expreso sobre ellas, quedan sin efecto.', 'corregida'],
  [4877, ['11'], [], ['Ley 9/2017', 'LCSP', 'artículo 333', 'Oficina Nacional de Evaluación', 'concesiones', 'sostenibilidad financiera'], sources[4877], null,
    'Respuesta C. La Oficina Nacional de Evaluación (ONE) es un órgano colegiado integrado en la Oficina Independiente de Regulación y Supervisión de la Contratación. El artículo 333.1 LCSP le atribuye analizar la sostenibilidad financiera de las concesiones de obras y servicios; el apartado 3 dispone que informe determinados acuerdos de restablecimiento del equilibrio económico, dentro de los supuestos y límites que allí se establecen. No debe confundirse la ONE con la OIReScon, que la integra.', 'corregida'],
  [4878, ['19'], ['I-6'], ['DESI 2022', 'especialistas TIC', 'España', 'Comisión Europea', 'dato histórico', '4,1 %'], sources[4878], null,
    'Respuesta D (4,1 %). La tabla A8.1 del informe DESI 2022 para España da ese porcentaje de especialistas TIC sobre las personas ocupadas de 15 a 74 años, con año de datos 2021. El 4,5 % que aparece como distractor es la media de la UE en esa misma tabla. Es una cifra histórica del indicador DESI 2022, no una estimación actual: desde 2023 el DESI se integra en los informes de la Década Digital. Se precisa el año del dato y el denominador para evitar interpretar el porcentaje como actual o como proporción de la población total.', 'historica'],
  [4879, ['5'], [], ['Unión Europea', 'TUE', 'artículo 13', 'instituciones de la Unión', 'Banco Central Europeo'], sources[4879], null,
    'Respuesta B. El artículo 13.1 del Tratado de la Unión Europea incluye expresamente al Banco Central Europeo en la lista de instituciones de la Unión. El Comité de las Regiones, en cambio, aparece en el apartado 4 como órgano consultivo que asiste al Parlamento, al Consejo y a la Comisión; las otras denominaciones de las opciones no son instituciones enumeradas por el Tratado.', 'corregida'],
  [4880, ['11'], [], ['Ley 9/2017', 'LCSP', 'pliego de prescripciones técnicas', 'PPT', 'artículos 124 y 125'], sources[4880], null,
    'Respuesta D. El pliego de prescripciones técnicas particulares (PPT) contiene las prescripciones técnicas que rigen la realización de la prestación y definen sus calidades, conforme al artículo 124 LCSP. El artículo 125 define qué se entiende por prescripción o especificación técnica. El pliego técnico debe distinguirse del pliego de cláusulas administrativas, que regula las condiciones jurídicas y administrativas de la licitación y del contrato.', 'corregida']
];

const edits = {
  4876: { texto: 'Antes de iniciarse un procedimiento administrativo, se adoptan medidas provisionales conforme al artículo 56.2 de la Ley 39/2015. ¿En qué plazo debe dictarse el acuerdo de iniciación que las confirme, modifique o levante?', opciones: [
    'Dentro de los cinco días siguientes a su adopción.',
    'Dentro de los quince días siguientes a su adopción.',
    'Dentro de los diez días siguientes a su adopción.',
    'Dentro de los veinte días siguientes a su adopción.'
  ], respuesta_correcta: 1 },
  4877: { texto: 'Según el artículo 333 de la Ley 9/2017, ¿qué órgano analiza la sostenibilidad financiera de las concesiones de obras y de servicios e informa determinados acuerdos de restablecimiento de su equilibrio económico?', opciones: [
    'La Oficina Independiente de Regulación y Supervisión de la Contratación.',
    'La Junta de Contratación Centralizada.',
    'La Oficina Nacional de Evaluación.',
    'El Comité de Cooperación en materia de contratación pública.'
  ], respuesta_correcta: 2 },
  4878: { texto: 'En la edición DESI 2022 de España, ¿qué porcentaje de las personas ocupadas de 15 a 74 años eran especialistas TIC? El dato publicado corresponde a 2021.', opciones: [
    '4,5 % (media de la Unión Europea en la misma tabla).',
    '5,4 %.',
    '3,8 %.',
    '4,1 %.'
  ], respuesta_correcta: 3 },
  4879: { texto: '¿Qué organismo figura expresamente entre las instituciones de la Unión enumeradas en el artículo 13.1 del Tratado de la Unión Europea?', opciones: [
    'El Banco Europeo de Infraestructuras.',
    'El Banco Central Europeo.',
    'El Comité de las Regiones.',
    'El Consejo Político y Social.'
  ], respuesta_correcta: 1 },
  4880: { texto: 'Conforme al artículo 124 de la Ley 9/2017, ¿qué pliego contiene las prescripciones técnicas particulares que rigen la realización de la prestación y definen sus calidades?', opciones: [
    'El Documento de Especificaciones Técnicas (DET).',
    'El Documento de Requisitos Técnicos (DRT).',
    'La Descripción Técnica Contractual (DTC).',
    'El Pliego de Prescripciones Técnicas particulares (PPT).'
  ], respuesta_correcta: 3 }
};

aplicar({ numero: '911', fecha: '2026-11-11', records, edits });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-911.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4876: [academyAdmin, 'ITIC Academy 2026, bloque 03 de Actuación Administrativa: cubre el procedimiento administrativo común y las medidas provisionales; el plazo concreto se contrasta con el artículo 56.2 de la Ley 39/2015.'],
  4877: [academyContracts, 'ITIC Academy 2026, bloque 05 de Contratación: incluye concesiones y la Oficina Nacional de Evaluación; se verifican en el artículo 333 LCSP su integración, función y alcance de los informes.'],
  4878: [academySociety, 'ITIC Academy 2026, bloque 06 de Economía, Sociedad, Empleo y Transformación Digital: sitúa los indicadores DESI en contexto histórico y distingue el informe DESI 2022 de los informes actuales de la Década Digital.'],
  4879: [academyEU, 'ITIC Academy 2026, bloque 02 de Unión Europea, tema A1 5: aborda las instituciones y tratados; la inclusión concreta del BCE se comprueba directamente en el artículo 13.1 TUE.'],
  4880: [academyContracts, 'ITIC Academy 2026, bloque 05 de Contratación: trata los pliegos y la contratación pública; la denominación y contenido legal del PPT se comprueban en los artículos 124 y 125 LCSP.']
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const [url, detail] = academy[change.id];
  q.clasificacion.bloque_academia = `${detail} El material de academia sirve como cotejo curricular, no como fuente jurídica ni estadística.`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo ITIC Academy: ${detail} La conclusión se contrasta con las fuentes primarias citadas.`;
  q.revision.observaciones += ` ${detail}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `ITIC Academy: ${detail}` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular ITIC Academy agregado al lote 911.');
