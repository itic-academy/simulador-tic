const apply = require('./aplicar-lote.cjs');

const records = [
  [2831, ['12'], [], ['Constitución Española', 'artículo 135', 'estabilidad presupuestaria', 'reforma constitucional'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229', referencia: 'Constitución Española, art. 135 en su redacción vigente: estabilidad presupuestaria y sostenibilidad financiera.' },
    { url: 'https://www.boe.es/eli/es/ref/2011/09/27/(1)/dof/mul/pdf', referencia: 'Reforma constitucional publicada en BOE de 27-09-2011: su artículo único dio nueva redacción al art. 135 CE.' }
  ], '', 'Se confirma el artículo 135 CE. La reforma de 2011 introdujo el principio de estabilidad presupuestaria y reglas de déficit y deuda; la ley de reforma modificó ese artículo y no los arts. 13 ni 134. Cotejo curricular: ITIC Academy, Bloque 01 Constitución, Estado y AGE 2026, contenido sobre Constitución y organización presupuestaria; el encaje oficial específico es A1-12 y no existe tema A2 de presupuestos generales en el programa GSI.', 'vigente'],
  [2832, ['77'], ['II-9'], ['XML', 'HTML', 'lenguajes de script', 'XMLScript'], [
    { url: 'https://www.w3.org/TR/xml/', referencia: 'W3C XML 1.0: XML es un lenguaje de marcado extensible, no un lenguaje de scripting.' },
    { url: 'https://learn.microsoft.com/en-us/windows/win32/com/syntax-differences', referencia: 'Microsoft Learn identifica JavaScript, JScript y VBScript como lenguajes de scripting.' },
    { url: 'https://gredos.usal.es/bitstream/10366/134471/1/2001_rev_computing_002.pdf', referencia: 'Artículo técnico de investigación sobre XMLScript: lo describe como lenguaje de scripting escrito en XML para transformaciones; demuestra que la opción original no podía asumirse como “no lenguaje de scripting”.' }
  ], '', 'Se corrige una ambigüedad/error del original: XMLScript ha existido como un lenguaje de scripting específico para transformaciones XML, aunque no sea uno de los lenguajes de uso general listados por Microsoft; por eso no era una respuesta inequívocamente correcta a “cuál no es scripting”. Se cambia la pregunta a distinguir marcado de scripting: XML es marcado, mientras JavaScript, JScript y VBScript son scripting. Cotejo curricular: ITIC Academy, Bloque 30 Tecnologías de Sistemas de Información, A1-77/A2-II-9.', 'corregida'],
  [2833, ['75'], ['II-4'], ['Data mart', 'data warehouse', 'Business Intelligence', 'modelado dimensional'], [
    { url: 'https://learn.microsoft.com/en-us/azure/synapse-analytics/migration-guides/teradata/2-etl-load-migration-considerations', referencia: 'Microsoft Learn: un data mart suele ser subconjunto del data warehouse, normalmente orientado a departamento; puede ser virtual y el modelado dimensional es típico, no obligatorio.' },
    { url: 'https://learn.microsoft.com/en-us/power-bi/guidance/center-of-excellence-business-intelligence-solution-architecture', referencia: 'Microsoft Learn: almacena data marts específicos de materia en Azure Synapse; ilustra que la implementación tecnológica no queda fijada a un SGBD multidimensional.' }
  ], '', 'Se corrige la clave y se hace inequívoca la definición: un data mart es un subconjunto temático orientado a un área o proceso; puede depender de un data warehouse corporativo o construirse independientemente. No es necesariamente mayor que un data warehouse ni está obligado a usar un SGBD multidimensional. La definición se coteja con documentación técnica oficial de Microsoft y con ITIC Academy, Bloque 34 Business Intelligence y Big Data 2026. Clasificación A1-75/A2-II-4.', 'corregida'],
  [2834, ['49'], ['I-9', 'I-10'], ['Sistema de Interconexión de Registros', 'SIR', 'SICRES 4.0', 'NTI'], [
    { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Af84ecc31-8c57-496e-859c-8cc2ad12f782/2022_Guia-aplicacion_NTI_SICRES-4_0_acc2.pdf', referencia: 'Guía oficial de aplicación NTI SICRES 4.0, anexo de vinculación con SIR: integración clásica mediante CIR o integración mediante librería de intercambio; describe instalaciones, nodos y requisitos de integración.' },
    { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2021-13749', referencia: 'Resolución de 19-07-2021 que publica la NTI de Modelo de Datos para el intercambio de asientos entre las entidades registrales (SICRES 4.0).' },
    { url: 'https://administracionelectronica.gob.es/ctt/sir', referencia: 'Portal oficial del Sistema de Interconexión de Registros: plataforma común para el intercambio electrónico de asientos entre administraciones integradas.' }
  ], '', 'Se actualiza la descripción: SIR no exige una única aplicación GEISER; la guía oficial contempla integración clásica y uso de librería de intercambio, y las soluciones deben ajustarse a SICRES 4.0/NTI y a los requisitos de integración. La plataforma intercambia asientos entre oficinas de registro, por lo que la opción que negaba esa interconexión también era falsa. Se mantiene la opción que expresa las modalidades de integración, reformulada para no atribuir “certificación a la NTI” a instalaciones como si la norma técnica fuera un órgano certificador. Cotejo curricular: ITIC Academy, Bloque 03 Actuación Administrativa y Administración Digital 2026, servicios comunes AGE: GEISER/ORVE/SIR.', 'corregida'],
  [2835, ['54'], ['II-1'], ['monitor', 'resolución de pantalla', 'densidad de píxeles', 'PPI'], [
    { url: 'https://tcocertified.com/files/certification/comparison-generation-10-smartphones-draft1-vs-draft2.pdf', referencia: 'TCO Certified, método de medición de pantalla: PPI = raíz de (píxeles horizontales² + verticales²) dividido por diagonal física en pulgadas.' }
  ], '', 'Se mantiene el resultado numérico, pero se corrige “dpi” por “píxeles por pulgada (PPI/ppp)”, unidad apropiada para la densidad de píxeles de una pantalla. Diagonal en píxeles = √(1600² + 1200²) = 2000; 2000/20 pulgadas = 100 ppp. Cotejo curricular: ITIC Academy, Bloque 26 Hardware, Servidores, CPD, Almacenamiento y Virtualización, dispositivos personales y monitores; correspondencia A1-54/A2-II-1.', 'corregida']
];

const edits = {
  2831: { texto: '¿Qué artículo de la Constitución Española fue reformado en 2011 para incorporar expresamente el principio de estabilidad presupuestaria y reglas sobre déficit y deuda pública?', opciones: ['El artículo 13.', 'El artículo 134.', 'El artículo 135.', 'Ningún artículo fue reformado.'], respuesta_correcta: 2 },
  2832: { texto: '¿Cuál de las siguientes opciones es un lenguaje de marcado y no un lenguaje de scripting?', opciones: ['JavaScript', 'JScript', 'VBScript', 'XML'], respuesta_correcta: 3 },
  2833: { texto: '¿Cuál de estas afirmaciones describe correctamente un data mart?', opciones: ['Es siempre una base de datos física independiente y separada del data warehouse.', 'Es mayor, en volumen de datos, que el data warehouse corporativo.', 'Debe implementarse obligatoriamente mediante un SGBD multidimensional.', 'Es un subconjunto temático orientado a un área o proceso; puede depender de un data warehouse o construirse de forma independiente.'], respuesta_correcta: 3 },
  2834: { texto: 'En relación con el Sistema de Interconexión de Registros (SIR), señale la afirmación correcta:', opciones: ['Interconecta mediante una única aplicación web obligatoria para todas las administraciones: GEISER.', 'Permite integrar soluciones registrales mediante distintas modalidades técnicas, ajustadas a SICRES 4.0/NTI y a los requisitos de integración de SIR.', 'Interconecta registros electrónicos, pero no permite el intercambio entre oficinas de asistencia en materia de registros.'], respuesta_correcta: 1 },
  2835: { texto: 'Un monitor de 20 pulgadas de diagonal tiene una matriz de 1600 × 1200 píxeles. ¿Cuál es su densidad aproximada de píxeles por pulgada (PPI)?', opciones: ['300 ppp', '30 ppp', '100 ppp', '50 ppp'], respuesta_correcta: 2 }
};

apply({ numero: '503', fecha: '2026-10-29', records, edits });

const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-503.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const mapping = {
  2831: { A1: ['A1-12'], A2: [], academy: 'ITIC Academy, Bloque 01 Constitución, Estado y AGE 2026, Constitución y marco presupuestario; correspondencia específica A1-12, sin tema A2 GSI de presupuestos.' },
  2832: { A1: ['A1-77'], A2: ['A2-II-9'], academy: 'ITIC Academy, Bloque 30 Tecnologías de Sistemas de Información 2026, lenguajes de marcado y scripting; correspondencia A1-77/A2-II-9.' },
  2833: { A1: ['A1-75'], A2: ['A2-II-4'], academy: 'ITIC Academy, Bloque 34 Business Intelligence y Big Data 2026, data warehouse/data marts; correspondencia A1-75/A2-II-4.' },
  2834: { A1: ['A1-49'], A2: ['A2-I-9', 'A2-I-10'], academy: 'ITIC Academy, Bloque 03 Actuación Administrativa y Administración Digital 2026, servicios comunes GEISER/ORVE/SIR; correspondencia A1-49/A2-I-9/I-10.' },
  2835: { A1: ['A1-54'], A2: ['A2-II-1'], academy: 'ITIC Academy, Bloque 26 Hardware, Servidores, CPD, Almacenamiento y Virtualización 2026, dispositivos personales y monitores; correspondencia A1-54/A2-II-1.' }
};
const topics = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  const m = mapping[c.id];
  assert.ok(q && m, `Pregunta ${c.id} o mapeo ausente`);
  for (const id of [...m.A1, ...m.A2]) assert.ok(topics.has(id), `Tema no oficial: ${id}`);
  q.clasificacion.A1 = m.A1;
  q.clasificacion.A2 = m.A2;
  q.clasificacion.bloque_academia = m.academy;
  q.clasificacion.estado = 'revisada';
  q.clasificacion.nota = `${q.revision.estado}. ${m.academy}`;
  q.revision.observaciones = `${c.actualizada.revision.observaciones} Cotejo curricular: ${m.academy} El material de Academy se utiliza como mapa curricular, no como fuente primaria de la respuesta.`;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
console.log('Lote 503 aplicado; las cinco preguntas incluyen evidencia y correspondencia oficial A1/A2.');
