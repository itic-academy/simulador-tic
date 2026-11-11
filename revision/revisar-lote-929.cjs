const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const lopd = 'https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673';
const rgpd = 'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32016R0679';
const aepdDesignacion = 'https://www.aepd.es/derechos-y-deberes/cumple-tus-deberes/medidas-de-cumplimiento/designacion-de-un-delegado-de';
const aepdFAQ = 'https://www.aepd.es/preguntas-frecuentes/4-dpd/1-delegado-de-proteccion-de-datos/FAQ-0410-debe-comunicarse-el-nombramiento-de-dpd-a-la-aepd';
const aepdRAT = 'https://www.aepd.es/derechos-y-deberes/cumple-tus-deberes/medidas-de-cumplimiento/actividades-tratamiento';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academyDP = 'https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk';
const academyProjects = 'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk';
const pmi = 'https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/risk-management-exam-outline2.pdf';
const iso = 'https://www.iso.org/standard/31000';
const refs = entries => entries.map(([url, referencia]) => ({ url, referencia }));

const records = [
  [4966, ['27'], ['I-7'], ['LO 3/2018', 'delegado de protección de datos', 'federaciones deportivas', 'datos de menores'], refs([
    [lopd, 'LO 3/2018, texto consolidado BOE, art. 34.1.o: las federaciones deportivas deben designar DPD cuando traten datos de menores de edad.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 27: protección de datos, obligaciones y delegado de protección de datos.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema I.7: régimen jurídico de protección de datos y delegado.'],
    [academyDP, 'ITIC Academy 2026, bloque 08, versión 2026.3 (01/10/2026): DPD y supuestos obligatorios del art. 34 LOPDGDD; cotejo curricular.']
  ]), null, 'Respuesta A. El art. 34.1.o de la LO 3/2018 incluye a las federaciones deportivas cuando tratan datos de menores. La obligación se establece para ese supuesto de tratamiento, no para toda federación sin condición. Las otras opciones no corresponden a la lista legal.', 'vigente'],
  [4967, ['27'], ['I-7'], ['RGPD', 'categorías especiales de datos', 'artículo 9', 'LO 3/2018'], refs([
    [rgpd, 'Reglamento (UE) 2016/679, art. 9.1: enumera categorías especiales, entre ellas origen racial o étnico, opiniones políticas, convicciones religiosas o filosóficas, afiliación sindical, datos genéticos, biométricos para identificación unívoca, salud, vida sexual y orientación sexual.'],
    [lopd, 'LO 3/2018, arts. 9 y 10: tratamientos de categorías especiales y datos relativos a condenas e infracciones penales.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 27: RGPD, categorías de datos, principios y obligaciones.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema I.7: protección de datos personales y régimen jurídico.'],
    [academyDP, 'ITIC Academy 2026, bloque 08, versión 2026.3 (01/10/2026): categorías especiales del art. 9 RGPD; cotejo curricular.']
  ]), null, 'Respuesta B. «Datos administrativos» no es una categoría especial de datos del artículo 9.1 RGPD. Sí lo son, entre otros, los datos de salud, las convicciones religiosas y el origen racial o étnico. Se sustituye la expresión imprecisa «datos sensibles especialmente protegidos» por la categoría jurídica vigente «categorías especiales de datos personales».', 'corregida'],
  [4968, ['27'], ['I-7'], ['RGPD', 'LO 3/2018', 'DPD', 'registro de actividades del tratamiento', 'AEPD'], refs([
    [lopd, 'LO 3/2018, texto consolidado BOE, art. 34.3: comunicar a la autoridad de control, en el plazo de diez días, la designación, nombramiento o cese del DPD.'],
    [rgpd, 'Reglamento (UE) 2016/679, arts. 30 y 37.7: el registro de actividades se mantiene y se pone a disposición de la autoridad de control si lo solicita; los datos de contacto del DPD se publican y su designación se comunica a la autoridad.'],
    [aepdDesignacion, 'AEPD, designación de DPD, actualización de 09/06/2026: diferencia entre la comunicación de la designación y el registro de actividades.'],
    [aepdFAQ, 'AEPD, FAQ DPD: designaciones, nombramientos y ceses se comunican en diez días a la AEPD o autoridad autonómica competente.'],
    [aepdRAT, 'AEPD, Registro de actividades del tratamiento: el registro se mantiene y debe estar a disposición de la autoridad de control; no existe comunicación automática por definir o modificar cada tratamiento.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 27: obligaciones de responsables y encargados y DPD.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema I.7: delegado y autoridades de protección de datos.'],
    [academyDP, 'ITIC Academy 2026, bloque 08, versión 2026.3 (01/10/2026): DPD, comunicación a la autoridad y registro de actividades; cotejo curricular.']
  ]), null, 'Respuesta B. La designación, nombramiento y cese del DPD se comunican a la autoridad de control competente dentro de diez días (art. 34.3 LO 3/2018 y art. 37.7 RGPD). En cambio, el registro de actividades del tratamiento no se notifica cada vez que se crea o modifica: debe mantenerse y estar disponible para la autoridad cuando lo solicite (art. 30.4 RGPD).', 'vigente'],
  [4969, ['27'], ['I-7'], ['RGPD', 'artículo 5', 'minimización de datos', 'limitación de conservación'], refs([
    [rgpd, 'Reglamento (UE) 2016/679, art. 5.1.c: los datos serán adecuados, pertinentes y limitados a lo necesario respecto de los fines del tratamiento (minimización); art. 5.1.e regula separadamente la limitación del plazo de conservación.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 27: principios del RGPD.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema I.7: principios del régimen de protección de datos.'],
    [academyDP, 'ITIC Academy 2026, bloque 08, versión 2026.3 (01/10/2026): principios RGPD y terminología actual; cotejo curricular.']
  ]), null, 'Respuesta D. El artículo 5.1.c RGPD define la minimización con el tenor «adecuados, pertinentes y limitados a lo necesario». La exactitud es el principio de la opción B, y la anonimización no es la regla general de minimización. Se cambia la opción C, cuya fórmula de «no excesivos» procede de terminología histórica y podía parecer equivalente, por el principio distinto de limitación del plazo de conservación del art. 5.1.e.', 'corregida'],
  [4970, ['40'], ['II-15'], ['gestión de proyectos', 'gestión de riesgos', 'apetito de riesgo', 'PMI'], refs([
    [pmi, 'Project Management Institute, Risk Management Professional Exam Content Outline, dominios I y II: evaluar el apetito de riesgo organizativo, fijar umbrales alineados con él y establecer procesos de identificación, análisis, respuesta y seguimiento. Fuente profesional primaria del esquema PMI.'],
    [iso, 'ISO 31000:2018, edición vigente confirmada en 2023: principios, marco y proceso para gestionar riesgos integrados en la gobernanza, estrategia, planificación y gestión de la organización.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 40: adquisición de sistemas, evaluación de viabilidad y toma de decisiones.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema II.15: evaluación de alternativas, viabilidad, planificación, presupuestación y control de costes de proyectos informáticos.'],
    [academyProjects, 'ITIC Academy 2026, bloque 17, versión 2026.2 (02/10/2026): evaluación de alternativas, riesgos y planificación en el estudio de viabilidad; sección 9 trata valor, riesgo y sensibilidad. Cotejo curricular.']
  ]), null, 'Respuesta C. La gestión de riesgos es continua y sistemática; identifica, analiza, trata y supervisa incertidumbres para que las respuestas y umbrales se ajusten a los objetivos y al apetito de riesgo organizativo. No promete eliminar todos los riesgos ni permite anticipar y suprimir cualquier riesgo desconocido. PMI exige alinear umbrales del proyecto con el apetito organizativo; ISO 31000 integra la gestión de riesgos en las decisiones y procesos de la organización.', 'vigente']
];

const edits = {
  4967: {
    texto: 'Según el artículo 9.1 del Reglamento (UE) 2016/679, ¿cuál de las siguientes opciones no pertenece a las categorías especiales de datos personales que enumera dicho precepto?',
    respuesta_correcta: 1
  },
  4969: {
    texto: '¿Qué formulación reproduce el principio de minimización de datos del artículo 5.1.c del Reglamento (UE) 2016/679?',
    opciones: [
      'Los datos personales se mantendrán anonimizados.',
      'Los datos personales serán exactos y, si fuera necesario, actualizados, suprimidos o rectificados sin dilación.',
      'Los datos personales se conservarán durante no más tiempo del necesario para los fines del tratamiento.',
      'Los datos personales serán adecuados, pertinentes y limitados a lo necesario en relación con los fines para los que son tratados.'
    ],
    respuesta_correcta: 3
  }
};

aplicar({ numero: '929', fecha: '2026-11-11', records, edits });

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-929.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academyById = {
  4966: ['obligación legal de designar DPD para federaciones deportivas que traten datos de menores'],
  4967: ['categorías especiales de datos personales del art. 9 RGPD'],
  4968: ['comunicación del DPD a la autoridad y mantenimiento del registro de actividades'],
  4969: ['principios RGPD: minimización, exactitud y limitación de conservación'],
  4970: ['estudio de viabilidad, alternativas, riesgos y sensibilidad']
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const specific = academyById[change.id][0];
  const detail = change.id === 4970
    ? `ITIC Academy 2026, bloque 17, versión 2026.2 (02/10/2026), sección 9 y evaluación de alternativas: ${specific}.`
    : `ITIC Academy 2026, bloque 08, versión 2026.3 (01/10/2026), protección de datos: ${specific}.`;
  q.clasificacion.bloque_academia = `${detail} Cotejo curricular, no autoridad normativa.`;
  q.clasificacion.nota = `${q.revision.estado}. ${detail} El fundamento normativo o técnico se aporta en revision.fuentes y en el registro del lote.`;
  q.revision.observaciones += ` ${detail}`;
  q.comentarios = q.revision.observaciones;
  const url = change.id === 4970 ? academyProjects : academyDP;
  q.revision.fuentes.push({ url, referencia: `${detail} Cotejo curricular.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy añadido al lote 929.');
