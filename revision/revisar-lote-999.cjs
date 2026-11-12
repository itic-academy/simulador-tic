const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');
const ref = (url, referencia) => ({ url, referencia });

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const stability = 'https://www.boe.es/buscar/act.php?id=BOE-A-2012-5730';
const commissionDSM = 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52015DC0192';
const dsmSummary = 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=LEGISSUM%3A3102_3';
const leadership = 'https://situational.com/situational-leadership/';
const lssi = 'https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758';
const gdpr = 'https://eur-lex.europa.eu/eli/reg/2016/679/oj/spa';
const gdprProcedure = 'https://eur-lex.europa.eu/legal-content/ENG/HIS/?uri=celex:32016R0679';
const academyBudgets = 'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk';
const academyEU = 'https://drive.google.com/file/d/1KTz7CNz88u_4zyVLC2oYQBnmJRHIG7J7/view?usp=drivesdk';
const academyLeadership = 'https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk';
const academyAdmin = 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const academyPrivacy = 'https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk';

const records = [
  [5316, ['12'], [], ['regla de gasto', 'Ley Orgánica 2/2012', 'gasto computable', 'tasa de referencia', 'estabilidad presupuestaria'], [
    ref(stability, 'Ley Orgánica 2/2012, texto consolidado del BOE, art. 12: regula la regla de gasto. Los apartados 1 y 3 contienen las proposiciones sobre variación, planes, cálculo de la tasa y su publicación; el apartado 2 excluye del gasto computable, entre otros, intereses de la deuda y gasto con financiación finalista de la UE u otras Administraciones.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 12: Presupuestos Generales del Estado, ejecución del gasto y control.'),
    ref(academyBudgets, 'ITIC Academy, bloque 05 «Contratación, presupuestos, convenios, subvenciones y compra TIC», edición 2026.2, presupuestos y ejecución del gasto; cotejo curricular.'),
  ], null, 'Se conserva D como falsa, pero se reemplaza su formulación incompleta por una afirmación inequívocamente contraria al art. 12.2 de la LO 2/2012: los intereses de la deuda y el gasto financiado con fondos finalistas sí están excluidos del gasto computable. En el original, la opción D omitía que la tasa también sirve de referencia para las comunidades autónomas; esa omisión no convertía necesariamente en falsa la afirmación limitada a la Administración Central. La norma mantiene en su texto consolidado la denominación «Ministerio de Economía y Competitividad» para el cálculo descrito en el apartado 3.', 'corregida'],
  [5317, ['5', '22'], [], ['Unión Europea', 'Comisión Europea', 'mercado único digital', 'estrategia 2015', '16 acciones'], [
    ref(commissionDSM, 'Comisión Europea, COM(2015) 192 final, «A Digital Single Market Strategy for Europe», de 6 de mayo de 2015: la Comisión presenta la estrategia y articula 16 acciones específicas en tres pilares.'),
    ref(dsmSummary, 'EUR-Lex, resumen oficial de la estrategia para el mercado único digital: identifica la comunicación de la Comisión y las 16 acciones estratégicas.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 5 (Unión Europea e instituciones) y tema 22 (legislación de sociedad de la información y administración electrónica en España y Europa).'),
    ref(academyEU, 'ITIC Academy, bloque 02 «La Unión Europea», edición 2026.2, prioridades y estrategia de mercado único digital; el propio temario indica que no se incluye en A2.'),
  ], null, 'La respuesta D (Comisión Europea) es correcta para la estrategia presentada en mayo de 2015, que definió 16 acciones específicas. Se añade el año al enunciado y se identifica el acto como antecedente histórico; el número 16 se refiere a aquella estrategia concreta, no a un programa actual permanente.', 'historica'],
  [5318, ['21'], [], ['liderazgo situacional', 'Hersey', 'Blanchard', 'competencia', 'compromiso', 'nivel de desarrollo'], [
    ref(leadership, 'Center for Leadership Studies, referente institucional de Situational Leadership: el modelo diagnostica el nivel de desarrollo/readiness de una persona para una tarea concreta y adapta el comportamiento de dirección y apoyo del líder a esa necesidad.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 21: liderazgo, gestión de competencias y personas, conflictos e inteligencia emocional.'),
    ref(academyLeadership, 'ITIC Academy, bloque 07 «Dirección pública, empleo, transparencia y unidad de mercado», actualización 2026, contenidos de liderazgo y gestión de personas.'),
  ], null, 'La opción C es correcta en cuanto al principio: el líder ajusta su estilo a la situación y a las necesidades de desarrollo de quien realiza una tarea. Se moderniza la expresión «nivel de madurez del equipo», que es imprecisa y puede sugerir una etiqueta fija del equipo completo; los modelos situacionales diagnostican el nivel de desarrollo (competencia y compromiso/readiness) de la persona para una tarea concreta.', 'corregida'],
  [5319, ['22'], ['I-6'], ['LSSI-CE', 'Ley 34/2002', 'infracciones muy graves', 'sanciones'], [
    ref(lssi, 'Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico, texto consolidado del BOE, art. 39.1.a: las infracciones muy graves se sancionan con multa de 150.001 a 600.000 euros. El art. 39 prevé además, en caso de reiteración firme en tres años, una posible prohibición temporal de actuación en España.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 22: legislación en materia de sociedad de la información y administración electrónica en España y Europa.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema I.6: sociedad de la información y marco jurídico relacionado.'),
    ref(academyAdmin, 'ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», actualización 2026, legislación sobre sociedad de la información en España y Europa.'),
  ], null, 'La respuesta A es correcta: el art. 39.1.a de la Ley 34/2002 fija la multa de 150.001 a 600.000 euros para las infracciones muy graves. Se corrige el separador de millares en la opción que antes escribía «1,000,000». El precepto también contempla una consecuencia adicional específica para la reiteración, pero no altera el tramo de multa preguntado.', 'vigente'],
  [5320, ['27'], ['I-7'], ['RGPD', 'Reglamento (UE) 2016/679', 'protección de datos', 'adopción', 'mercado único digital'], [
    ref(gdpr, 'Reglamento (UE) 2016/679, publicado en el Diario Oficial de la Unión Europea: su título y articulado establecen el marco de protección de las personas físicas en el tratamiento de datos personales y la libre circulación de esos datos.'),
    ref(gdprProcedure, 'EUR-Lex, ficha de procedimiento 2012/0011/COD: registra la firma y adopción del Reglamento por Parlamento Europeo y Consejo el 27 de abril de 2016, su publicación el 4 de mayo de 2016 y su aplicación desde el 25 de mayo de 2018.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 27: Reglamento (UE) 2016/679 y protección de datos personales.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema I.7: régimen jurídico de protección de datos personales.'),
    ref(academyPrivacy, 'ITIC Academy, bloque 08 «Protección de datos», actualización 2026, RGPD y su régimen jurídico.'),
  ], null, 'La respuesta C es correcta. El Reglamento (UE) 2016/679 fue adoptado por el Parlamento Europeo y el Consejo el 27 de abril de 2016 para establecer un marco común de protección de datos personales y libre circulación. Se reescribe la pregunta como dato jurídico preciso y se añade que su aplicación general comenzó el 25 de mayo de 2018, para no confundir aprobación con entrada en aplicación.', 'corregida']
];

const edits = {
  5316: { opciones: [
    'La variación del gasto computable de la Administración Central, de las Comunidades Autónomas y de las Corporaciones Locales no podrá superar la tasa de referencia de crecimiento del PIB de medio plazo de la economía española.',
    'Si existe desequilibrio estructural o deuda pública superior al objetivo, el crecimiento del gasto computable se ajustará a la senda de los planes económico-financieros y de reequilibrio previstos en la ley.',
    'Corresponde al Ministerio de Economía y Competitividad calcular la tasa de referencia conforme a la metodología de la Comisión Europea.',
    'Los intereses de la deuda pública y el gasto financiado con fondos finalistas de la Unión Europea forman parte del gasto computable.'
  ], comentarios: 'Se conserva D como falsa, pero se reemplaza su formulación incompleta por una afirmación inequívocamente contraria al art. 12.2 de la LO 2/2012: los intereses de la deuda y el gasto financiado con fondos finalistas sí están excluidos del gasto computable. En el original, la opción D omitía que la tasa también sirve de referencia para las comunidades autónomas; esa omisión no convertía necesariamente en falsa la afirmación limitada a la Administración Central. La norma mantiene en su texto consolidado la denominación «Ministerio de Economía y Competitividad» para el cálculo descrito en el apartado 3.' },
  5317: { texto: '¿Qué institución de la Unión Europea presentó en 2015 la estrategia para el mercado único digital, articulada en 16 acciones?', comentarios: 'La respuesta D (Comisión Europea) es correcta para la estrategia presentada en mayo de 2015, que definió 16 acciones específicas. Se añade el año al enunciado y se identifica el acto como antecedente histórico; el número 16 se refiere a aquella estrategia concreta, no a un programa actual permanente.' },
  5318: { texto: '¿Cuál es la premisa fundamental de la teoría del liderazgo situacional de Hersey y Blanchard?', opciones: [
    'Los líderes nacen con rasgos innatos que los hacen aptos para liderar.',
    'Los líderes deben ser expertos en todas las tareas que realiza el equipo.',
    'El líder debe ajustar su estilo a las necesidades de desarrollo de la persona para una tarea concreta.',
    'Los líderes deben ser carismáticos y persuasivos para influir en los demás.'
  ], respuesta_correcta: 2, comentarios: 'La opción C es correcta en cuanto al principio: el líder ajusta su estilo a la situación y a las necesidades de desarrollo de quien realiza una tarea. Se moderniza la expresión «nivel de madurez del equipo», que es imprecisa y puede sugerir una etiqueta fija del equipo completo; los modelos situacionales diagnostican el nivel de desarrollo (competencia y compromiso/readiness) de la persona para una tarea concreta.' },
  5319: { texto: 'Según el artículo 39.1.a de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico, ¿qué multa corresponde a las infracciones muy graves?', opciones: ['De 150.001 a 600.000 euros.', 'De 150.001 a 300.000 euros.', 'De 300.001 a 600.000 euros.', 'De 600.001 a 1.000.000 de euros.'], comentarios: 'La respuesta A es correcta: el art. 39.1.a de la Ley 34/2002 fija la multa de 150.001 a 600.000 euros para las infracciones muy graves. Se corrige el separador de millares en la opción que antes escribía «1,000,000». El precepto también contempla una consecuencia adicional específica para la reiteración, pero no altera el tramo de multa preguntado.' },
  5320: { texto: '¿Qué norma de la Unión Europea, adoptada el 27 de abril de 2016, estableció el marco común sobre protección de datos personales y libre circulación de estos datos?', opciones: [
    'Una colaboración público-privada en materia de ciberseguridad.',
    'Medidas para impulsar las destrezas digitales de la población.',
    'El Reglamento (UE) 2016/679, General de Protección de Datos (RGPD).',
    'Medidas para garantizar la libertad de los medios de comunicación y promover la diversidad cultural.'
  ], respuesta_correcta: 2, comentarios: 'La respuesta C es correcta. El Reglamento (UE) 2016/679 fue adoptado por el Parlamento Europeo y el Consejo el 27 de abril de 2016 para establecer un marco común de protección de datos personales y libre circulación. Se reescribe la pregunta como dato jurídico preciso y se añade que su aplicación general comenzó el 25 de mayo de 2018, para no confundir aprobación con entrada en aplicación.' }
};

if (!fs.existsSync(path.join(__dirname, 'cambios-lote-999.json'))) {
  aplicar({ numero: '999', fecha: '2026-11-12', records, edits });
}

const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-999.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5316: ['ITIC Academy, bloque 05 «Contratación, presupuestos, convenios, subvenciones y compra TIC», edición 2026.2, parte de Presupuestos Generales del Estado y ejecución del gasto.', 'Cotejo con A1.12. El material orienta la cobertura del bloque de presupuestos; el contenido y los términos legales de la regla de gasto se contrastan con el art. 12 consolidado de la LO 2/2012.'],
  5317: ['ITIC Academy, bloque 02 «La Unión Europea», edición 2026.2, antecedentes, estrategia de mercado único digital e instituciones.', 'La ficha del propio bloque declara que el programa A2 no incluye Unión Europea; se coteja curricularmente con A1.5/A1.22. La cifra de 16 acciones se verifica en la Comunicación COM(2015) 192.'],
  5318: ['ITIC Academy, bloque 07 «Dirección pública, empleo, transparencia y unidad de mercado», actualización 2026, liderazgo y gestión de personas.', 'Cotejo con A1.21. La premisa técnica del modelo se contrasta con el Center for Leadership Studies; la respuesta evita tratar la madurez como rasgo fijo del equipo.'],
  5319: ['ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», actualización 2026, legislación de sociedad de la información en España y Europa.', 'Cotejo con A1.22 y referencia a A2.I.6 por el ámbito de sociedad de la información; las sanciones exactas se contrastan con el art. 39 consolidado de la Ley 34/2002.'],
  5320: ['ITIC Academy, bloque 08 «Protección de datos», edición 2026, Reglamento (UE) 2016/679 y régimen de protección de datos.', 'Cotejo con A1.27/A2.I.7. Se distingue la fecha de adopción del RGPD de su posterior fecha de aplicación.']
};
const reason = 'Cotejo curricular individual con ITIC Academy en Drive y los programas oficiales A1/A2.';
for (const [key, [block, note]] of Object.entries(academy)) {
  const id = Number(key), q = bank.preguntas.find(x => x.id === id), change = log.cambios.find(x => x.id === id);
  if (!q || !change) throw new Error(`Falta registro de ${id}`);
  const before = { bloque_academia: q.clasificacion.bloque_academia, nota: q.clasificacion.nota };
  q.clasificacion.bloque_academia = block;
  q.clasificacion.nota = note;
  const later = change.correcciones_posteriores || [];
  if (!later.some(x => x.motivo === reason)) later.push({ fecha: '2026-11-12', motivo: reason, clasificacion_anterior: before, clasificacion_actualizada: { bloque_academia: block, nota: note } });
  change.correcciones_posteriores = later;
  change.actualizada = structuredClone(q);
}
const byId = new Map(log.cambios.map(c => [c.id, c]));
const raw = fs.readFileSync(bankPath, 'utf8');
let replaced = 0;
const output = raw.replace(/^    \{[\s\S]*?^    \}/gm, block => {
  const old = JSON.parse(block), change = byId.get(old.id);
  if (!change) return block;
  replaced++;
  return JSON.stringify(change.actualizada, null, 2).split('\n').map(line => `    ${line}`).join('\n');
});
if (replaced !== 5) throw new Error(`Se esperaban 5 cambios; encontrados ${replaced}`);
JSON.parse(output);
fs.writeFileSync(bankPath, output);
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Lote 999 enriquecido con cotejo curricular y trazabilidad de las cinco preguntas.');
