const apply = require('./aplicar-lote.cjs');

const records = [
  [2816, ['27'], ['I-7'], ['RGPD', 'consentimiento', 'base jurídica'], [
    { url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=es', referencia: 'Reglamento (UE) 2016/679, arts. 4.11 y 7: el consentimiento, cuando se usa como base, es libre, específico, informado e inequívoco; se expresa mediante declaración o acción afirmativa clara.' },
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673', referencia: 'LO 3/2018, art. 6: remite a la definición del art. 4.11 RGPD y concreta el consentimiento para varias finalidades.' }
  ], '', 'Se elimina la impresión de que el consentimiento es obligatorio para todo tratamiento: el reactivo se limita al tratamiento cuya base jurídica sea el consentimiento. De los cuatro términos, «certificada» no forma parte de la definición del artículo 4.11 RGPD; sí lo hacen libre, específica, informada e inequívoca.', 'corregida'],
  [2817, ['1'], ['I-1'], ['Constitución Española', 'igualdad', 'artículo 14'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229', referencia: 'Constitución Española, artículo 14: igualdad ante la ley y prohibición de discriminación por las causas enumeradas.' }
  ], '', 'Se confirma literalmente la respuesta «ante la ley», conforme al artículo 14 de la Constitución. No se confunde con la igualdad en la aplicación de la ley ni con el principio general de igualdad del artículo 1.1.', 'vigente'],
  [2818, ['49'], ['I-10'], ['Ley 40/2015', 'reutilización de aplicaciones', 'directorio general', 'eficiencia'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566', referencia: 'Ley 40/2015, art. 157.3: consulta previa al directorio antes de adquirir, desarrollar o mantener aplicaciones; si hay una solución reutilizable que satisface las necesidades, debe usarse salvo justificación de no reutilización en términos de eficiencia.' },
    { url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2019-457', referencia: 'STC 55/2018, fundamento jurídico sobre el art. 157.3: entidades locales conservan autoorganización, pero justifican la opción propia en términos de eficiencia, estabilidad y sostenibilidad.' }
  ], '', 'Se mantiene la clave de la excepción de eficiencia, pero se afina: no basta afirmar que existe otra solución «más eficiente»; la decisión de no reutilizar una solución disponible que cubra total o parcialmente las necesidades debe justificarse en términos de eficiencia conforme al artículo 7 LO 2/2012. Se incorpora la consulta previa y el requisito de interoperabilidad y seguridad para precisar el supuesto.', 'corregida'],
  [2819, ['24'], ['I-8'], ['Ley 53/1984', 'incompatibilidades', 'actividades privadas', 'imparcialidad'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1985-151&p=20240608', referencia: 'Ley 53/1984, arts. 11.1 y 12.1.a: prohibición de actividades privadas que se relacionen directamente con las del departamento y de actividades en asuntos relacionados con el puesto público.' },
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1985-151&p=20240608', referencia: 'Ley 53/1984, art. 19.a: excepción para administración del patrimonio personal o familiar, sin perjuicio del art. 12.' }
  ], '', 'Se sustituye la expresión inespecífica «gestor público» por el personal comprendido en el ámbito de la Ley 53/1984 y se formula la prohibición general del artículo 11.1. La solicitud de compatibilidad no convierte en autorizable una actividad expresamente prohibida. La afirmación sobre pedir compatibilidad para cualquier actividad también era incorrecta: el artículo 19.a exceptúa en general la administración del patrimonio personal o familiar, sin perjuicio de las prohibiciones del artículo 12.', 'corregida'],
  [2820, ['4', '6'], ['I-8'], ['Ley 40/2015', 'organización territorial', 'servicios integrados', 'servicios no integrados'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566', referencia: 'Ley 40/2015, art. 71.1: los servicios territoriales de la AGE en las comunidades autónomas se organizan como integrados y no integrados en las Delegaciones del Gobierno.' }
  ], '', 'Se confirma la respuesta que enumera ambas modalidades; coincide literalmente con el artículo 71.1 de la Ley 40/2015.', 'vigente']
];

const edits = {
  2816: {
    texto: 'Si el responsable elige el consentimiento como base jurídica para un tratamiento de datos personales, ¿cuál de estos requisitos NO forma parte de la definición del artículo 4.11 del RGPD? Señale la opción incorrecta.',
    opciones: ['Que sea libre.', 'Que sea específico.', 'Que sea informado.', 'Que sea certificado.'], respuesta_correcta: 3
  },
  2818: {
    texto: 'Según el artículo 157.3 de la Ley 40/2015, antes de adquirir, desarrollar o mantener una aplicación, una Administración pública consulta el directorio general. Si existe una solución reutilizable que puede satisfacer sus necesidades y cumple los requisitos de interoperabilidad y seguridad, su reutilización:',
    opciones: [
      'Es obligatoria en cualquier circunstancia, aunque la solución no satisfaga las necesidades.',
      'Es voluntaria para las entidades locales.',
      'Es obligatoria, salvo que la decisión de no reutilizarla se justifique en términos de eficiencia conforme al artículo 7 de la LO 2/2012.',
      'Solo puede excluirse si la aplicación que ya se utiliza tiene más de cinco años.'
    ], respuesta_correcta: 2
  },
  2819: {
    texto: 'Conforme al artículo 11.1 de la Ley 53/1984, el personal incluido en su ámbito de aplicación:',
    opciones: [
      'Puede ejercer cualquier actividad privada relacionada directamente con las funciones de su departamento si solicita compatibilidad.',
      'No puede ejercer actividades privadas que se relacionen directamente con las que desarrolla el departamento, organismo o entidad donde está destinado, sin perjuicio de las excepciones legalmente previstas.',
      'Debe solicitar compatibilidad para toda actividad privada, incluida siempre la administración del patrimonio personal o familiar.',
      'Solo tiene prohibido ejercer actividades privadas cuando intervenga en ese asunto durante el mismo año.'
    ], respuesta_correcta: 1
  }
};

apply({ numero: '500', fecha: '2026-10-29', records, edits });

const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-500.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const mapping = {
  2816: { A1: ['A1-27'], A2: ['A2-I-7'], academy: 'ITIC Academy, Bloque 08 Protección de Datos 2026: consentimiento y bases jurídicas; correspondencia A1-27/A2-I-7.' },
  2817: { A1: ['A1-1'], A2: ['A2-I-1'], academy: 'ITIC Academy, Bloque 01 Constitución, Estado y AGE 2026: igualdad constitucional y derechos; correspondencia A1-1/A2-I-1.' },
  2818: { A1: ['A1-49'], A2: ['A2-I-10'], academy: 'ITIC Academy, Bloque 10 Gobernanza TIC/Administración Digital 2026 y Tema 049 Servicios Comunes: reutilización e infraestructuras compartidas; correspondencia A1-49/A2-I-10.' },
  2819: { A1: ['A1-24'], A2: ['A2-I-8'], academy: 'ITIC Academy, Bloque 03 Actuación Administrativa 2026: régimen del personal e incompatibilidades; correspondencia curricular A1-24/A2-I-8.' },
  2820: { A1: ['A1-4', 'A1-6'], A2: ['A2-I-8'], academy: 'ITIC Academy, Bloque 01 Constitución, Estado y AGE 2026: organización territorial de la AGE; correspondencia A1-4/A1-6/A2-I-8.' }
};
const topics = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  const m = mapping[c.id];
  assert.ok(q && m, `Pregunta ${c.id} o correspondencia ausente`);
  for (const id of [...m.A1, ...m.A2]) assert.ok(topics.has(id), `Tema no oficial: ${id}`);
  q.clasificacion.A1 = m.A1;
  q.clasificacion.A2 = m.A2;
  q.clasificacion.bloque_academia = m.academy;
  q.clasificacion.estado = 'revisada';
  q.clasificacion.nota = `${q.revision.estado}. ${m.academy}`;
  q.revision.observaciones = `${c.actualizada.revision.observaciones} Cotejo curricular: ${m.academy} El material de Academy se utiliza como mapa de estudio y no como fuente jurídica primaria.`;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
console.log('Lote 500 aplicado con cinco revisiones individuales y correspondencias A1/A2 comprobadas.');
