const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const lopdgdd = 'https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673';
const ce = 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229';
const gdpr = 'https://eur-lex.europa.eu/eli/reg/2016/679/oj/spa';
const lcsp = 'https://www.boe.es/eli/es/l/2017/11/08/9/con/20260409';
const academyPrivacy = 'https://drive.google.com/file/d/11T-TKuGJGXeEKwwODM-FlF8pML3QMh_t/view?usp=drivesdk';
const academyConstitution = 'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk';
const academyConstitutionA2 = 'https://drive.google.com/file/d/11wa3Kb-raEHyXAwPtbhT45UIfDFPR4Y-/view?usp=drivesdk';
const academyContracts = 'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk';

const sources = {
  4871: [
    { url: lopdgdd, referencia: 'LO 3/2018, título X, arts. 80–82, texto consolidado BOE: reconoce expresamente los derechos a la neutralidad de Internet, acceso universal a Internet y seguridad digital.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 27: protección de datos personales, régimen jurídico, derechos y obligaciones.' },
    { url: a2, referencia: 'Convocatoria A2 GSI AGE 2025, tema I.7: protección de datos personales y derechos digitales.' }
  ],
  4872: [
    { url: ce, referencia: 'Constitución Española consolidada, arts. 87.2 y 166: las Asambleas de las Comunidades Autónomas pueden solicitar al Gobierno un proyecto de reforma o remitir una proposición al Congreso, con delegación de hasta tres miembros para defenderla.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, temas 1 (Constitución y Cortes Generales) y 3 (Comunidades Autónomas).' },
    { url: a2, referencia: 'Convocatoria A2 GSI AGE 2025, tema I.1: Constitución Española.' }
  ],
  4873: [
    { url: gdpr, referencia: 'Reglamento (UE) 2016/679, artículo 37.5: el DPD se designa atendiendo a cualidades profesionales, conocimientos especializados del Derecho y la práctica de protección de datos y capacidad para sus funciones; no impone titulación universitaria.' },
    { url: lopdgdd, referencia: 'LO 3/2018, artículo 35, texto consolidado BOE: el cumplimiento del art. 37.5 RGPD puede demostrarse, entre otros medios, mediante mecanismos voluntarios de certificación que tienen en cuenta especialmente una titulación universitaria; no la establece como requisito exclusivo o necesario.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 27: régimen jurídico de protección de datos y Delegado de Protección de Datos.' },
    { url: a2, referencia: 'Convocatoria A2 GSI AGE 2025, tema I.7: principios, derechos, obligaciones y delegado de protección de datos.' }
  ],
  4874: [
    { url: lcsp, referencia: 'Ley 9/2017, artículo 29.2, texto consolidado BOE vigente: permite una o varias prórrogas; las acuerda el órgano de contratación y obligan al empresario si el preaviso se efectúa con al menos dos meses, salvo plazo mayor en pliego. El preaviso no se exige en contratos inferiores a dos meses; no cabe consentimiento tácito y existe la excepción del art. 198.6.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 11: contratos de las Administraciones Públicas y LCSP.' }
  ],
  4875: [
    { url: lcsp, referencia: 'Ley 9/2017, artículos 44.1 y 44.2.c, texto consolidado BOE vigente: dentro del ámbito contractual y umbrales del apartado 1, el acuerdo de adjudicación es recurrible mediante recurso especial. El apartado 2 también enumera otros actos; no todo defecto de trámite ni toda penalidad es automáticamente recurrible por esta vía.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 11: contratos de las Administraciones Públicas, procedimientos y adjudicación.' }
  ]
};

const records = [
  [4871, ['27'], ['I-7'], ['LOPDGDD', 'Título X', 'derechos digitales', 'neutralidad de Internet', 'acceso universal', 'seguridad digital'], sources[4871], null,
    'Respuesta D. Los tres derechos enumerados están reconocidos expresamente en el título X de la LOPDGDD: neutralidad de Internet (art. 80), acceso universal a Internet (art. 81) y seguridad digital (art. 82). La pregunta original pedía identificar cuál NO estaba incluido, aunque todas las opciones individuales sí lo estaban; se reescribe para evitar que la opción “todos” contradiga la forma negativa del enunciado.', 'corregida'],
  [4872, ['1', '3'], ['I-1'], ['Constitución Española', 'reforma constitucional', 'artículos 87.2 y 166', 'Asambleas de las Comunidades Autónomas'], sources[4872], null,
    'Respuesta C. El artículo 166 remite, para la iniciativa de reforma constitucional, a los apartados 1 y 2 del artículo 87. Por ello las Asambleas autonómicas pueden solicitar al Gobierno la adopción de un proyecto de reforma o remitir al Congreso una proposición, delegando hasta tres miembros para defenderla. No existe iniciativa popular de reforma constitucional.', 'corregida'],
  [4873, ['27'], ['I-7'], ['delegado de protección de datos', 'DPD', 'RGPD artículo 37.5', 'LOPDGDD artículo 35', 'cualificación profesional'], sources[4873], null,
    'Respuesta D. Ni una titulación universitaria ni que esta sea específicamente de Derecho constituyen por sí solas un requisito formal obligatorio. El artículo 37.5 RGPD exige cualidades profesionales, conocimientos especializados del Derecho y de la práctica de protección de datos y capacidad para desempeñar las funciones. El artículo 35 LOPDGDD contempla la titulación universitaria como un elemento que los mecanismos voluntarios de certificación tendrán particularmente en cuenta, no como condición indispensable.', 'corregida'],
  [4874, ['11'], [], ['Ley 9/2017', 'LCSP', 'artículo 29', 'prórroga', 'preaviso', 'contratos públicos'], sources[4874], null,
    'Respuesta B. Conforme al artículo 29.2 LCSP, el contrato puede prever una o varias prórrogas; las acuerda el órgano de contratación y obligan al contratista si se preavisa con al menos dos meses, salvo que el pliego exija un plazo mayor. Se exceptúa del preaviso el contrato inferior a dos meses; la prórroga nunca puede ser tácita y no obliga al contratista cuando concurra el supuesto del artículo 198.6 por demora de pago superior a seis meses.', 'corregida'],
  [4875, ['11'], [], ['Ley 9/2017', 'LCSP', 'artículo 44', 'recurso especial en materia de contratación', 'adjudicación'], sources[4875], null,
    'Respuesta C. El acuerdo de adjudicación figura expresamente entre los actos recurribles del artículo 44.2.c LCSP mediante recurso especial, cuando se trate de un contrato comprendido en el ámbito y umbrales del apartado 1. La impugnabilidad de los actos de trámite depende de que produzcan alguno de los efectos cualificados del art. 44.2.b; una penalidad de ejecución no queda automáticamente incluida en esta vía.', 'corregida']
];

const edits = {
  4871: { texto: '¿Cuál es el conjunto formado por los tres derechos reconocidos, respectivamente, en los artículos 80, 81 y 82 del título X de la Ley Orgánica 3/2018?', opciones: [
    'Acceso universal a Internet, derecho al olvido y seguridad digital.',
    'Neutralidad de Internet, portabilidad de datos y acceso universal.',
    'Seguridad digital, rectificación de datos y desconexión digital.',
    'Neutralidad de Internet, acceso universal a Internet y seguridad digital.'
  ], respuesta_correcta: 3 },
  4872: { texto: 'De acuerdo con los artículos 87.2 y 166 de la Constitución Española, ¿qué pueden hacer las Asambleas de las Comunidades Autónomas respecto de una iniciativa de reforma constitucional?', opciones: [
    'Aprobar por sí mismas una reforma constitucional mediante ley autonómica.',
    'Ejercer iniciativa legislativa popular para presentar directamente una reforma.',
    'Solicitar al Gobierno un proyecto de reforma o remitir al Congreso una proposición, delegando hasta tres miembros para defenderla.',
    'Ninguna Asamblea autonómica puede intervenir en la iniciativa de reforma.'
  ], respuesta_correcta: 2 },
  4873: { texto: 'Según el artículo 37.5 del Reglamento (UE) 2016/679 y el artículo 35 de la Ley Orgánica 3/2018, ¿cuál es un requisito formal indispensable para ser Delegado de Protección de Datos?', opciones: [
    'Tener cualquier titulación universitaria.',
    'Tener una titulación universitaria en Derecho.',
    'Tener titulación universitaria y una certificación obligatoria expedida por la AEPD.',
    'Ninguna de las titulaciones citadas es un requisito formal indispensable; se exigen cualidades profesionales, conocimientos especializados y capacidad para las funciones.'
  ], respuesta_correcta: 3 },
  4874: { texto: 'Conforme al artículo 29.2 de la Ley 9/2017, ¿cuándo obliga al contratista la prórroga acordada por el órgano de contratación?', opciones: [
    'Nunca: el contrato no puede prever más de una prórroga.',
    'Cuando el preaviso se efectúa con al menos dos meses de antelación —salvo plazo mayor fijado en el pliego—, excepto en contratos inferiores a dos meses.',
    'Cuando la acuerda el empresario y la Administración la acepta por silencio.',
    'Cuando las partes prestan consentimiento tácito al vencimiento del contrato.'
  ], respuesta_correcta: 1 },
  4875: { texto: 'Dentro del ámbito de contratos previsto en el artículo 44.1 de la Ley 9/2017, ¿cuál de estos actos figura expresamente como recurrible mediante recurso especial en materia de contratación?', opciones: [
    'Cualquier acto de trámite, aunque no afecte a la adjudicación ni cause indefensión.',
    'Cualquier penalidad impuesta durante la ejecución del contrato.',
    'El acuerdo de adjudicación.',
    'La resolución de un recurso de alzada contra una penalidad contractual.'
  ], respuesta_correcta: 2 }
};

aplicar({ numero: '910', fecha: '2026-11-11', records, edits });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-910.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4871: [academyPrivacy, 'ITIC Academy 2026, bloque de Protección de Datos (A1 tema 27/A2 I.7): desarrolla el título X de la LOPDGDD y enumera neutralidad, acceso universal y seguridad digital; cotejo temático directo.'],
  4872: [[academyConstitution, academyConstitutionA2], 'ITIC Academy 2026, bloque de Constitución A1 y material constitucional A2: ambos cubren la Constitución y el proceso de reforma; la regla exacta se contrasta con los arts. 87.2 y 166 del texto consolidado oficial.'],
  4873: [academyPrivacy, 'ITIC Academy 2026, bloque de Protección de Datos: incluye un apartado específico sobre el DPD en las Administraciones; las fuentes primarias precisan que titulación universitaria/certificación no son requisitos absolutos.'],
  4874: [academyContracts, 'ITIC Academy 2026, bloque 5 Contratación: explica expresamente prórrogas, preaviso mínimo de dos meses y prohibición de consentimiento tácito; la LCSP consolidada determina los matices y excepciones.'],
  4875: [academyContracts, 'ITIC Academy 2026, bloque 5 Contratación: incluye adjudicación y recurso especial en contratación; el artículo 44 consolidado define los actos concretos y el ámbito contractual aplicable.']
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const [urls, detail] = academy[change.id];
  const academyUrls = Array.isArray(urls) ? urls : [urls];
  q.clasificacion.bloque_academia = `${detail} El temario de academia se usa como cotejo curricular, no como fuente jurídica.`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo ITIC Academy: ${detail} La conclusión se contrasta con las disposiciones vigentes citadas.`;
  q.revision.observaciones += ` ${detail}`;
  q.comentarios = q.revision.observaciones;
  for (const url of academyUrls) q.revision.fuentes.push({ url, referencia: `ITIC Academy: ${detail}` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular ITIC Academy agregado al lote 910.');
