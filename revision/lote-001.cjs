const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const file = path.join(root, 'preguntas_preparatic.json');
const original = fs.readFileSync(file, 'utf8');
const data = JSON.parse(original);
if (data.preguntas[0].revision) throw Error('Este lote ya está aplicado');
const url = id => `https://www.boe.es/buscar/act.php?id=${id}`;
const lcsp = url('BOE-A-2017-12902'), ce = url('BOE-A-1978-31229'), lrjsp = url('BOE-A-2015-10566'), lgp = url('BOE-A-2003-21614');
// Clasificación editorial de esta muestra; no extrapolar a preguntas sin revisar.
const entries = [
  [1, ['A1-11'], [], 5, ['contratacion-publica', 'solvencia'], lcsp, '77.1', 'La clasificación acredita la solvencia del empresario conforme a las condiciones del artículo 77.'],
  [2, ['A1-11'], [], 5, ['contratacion-publica', 'contenido-contrato'], lcsp, '35.1', 'El artículo 35 recoge precio, pago y modificación; el reintegro no es una mención de esa lista.'],
  [3, ['A1-31', 'A1-25'], ['A2-I-9'], 11, ['datos-abiertos', 'reutilizacion'], url('BOE-A-2007-19814'), '3.1', 'La reutilización puede tener finalidad comercial o no comercial y queda sujeta al ámbito y excepciones de la ley.'],
  [4, ['A1-11'], [], 5, ['contratacion-publica', 'publicidad'], lcsp, '154.1 y 154.2', 'Para la formalización de un contrato armonizado de la AGE se exige publicidad en perfil, BOE y DOUE.'],
  [5, ['A1-3'], [], 1, ['constitucion', 'organizacion-territorial'], ce, '144.b', 'La habilitación requiere ley orgánica y motivos de interés nacional.'],
  [6, ['A1-13'], ['A2-I-8'], 5, ['convenios', 'ley-40-2015'], lrjsp, '11.3.b, 47.1, 47.2.c y 48.8', 'En la AGE la eficacia exige inscripción en el registro estatal; la firma por sí sola no basta.'],
  [7, ['A1-1'], ['A2-I-3'], 1, ['constitucion', 'mocion-censura'], ce, '113.1 y 113.2', 'La moción exige mayoría absoluta, iniciativa de al menos una décima parte de diputados y candidato alternativo.'],
  [8, ['A1-12'], [], 5, ['presupuestos', 'control-interno', 'IGAE'], lgp, '142.2', 'Las modalidades son función interventora, control financiero permanente y auditoría pública; la intervención delegada no constituye una cuarta modalidad.'],
  [9, ['A1-12'], [], 5, ['presupuestos', 'clasificacion-economica'], lgp, '40.1.c', 'Las operaciones de capital comprenden inversiones reales y transferencias de capital.'],
  [10, ['A1-80'], ['A2-I-6', 'A2-I-9'], 36, ['firma-electronica', 'actuacion-automatizada'], lrjsp, '41 y 42.a', 'En actuación automatizada puede utilizarse sello electrónico basado en certificado reconocido o cualificado; también existe la alternativa del código seguro de verificación.'],
  [11, ['A1-20', 'A1-23'], [], 7, ['direccion-publica'], null, null, 'Pendiente de localizar la fuente original de Mark H. Moore: la expresión «más importantes» no permite verificar con precisión una respuesta única.'],
  [12, ['A1-11', 'A1-39'], [], 5, ['contratacion-publica', 'PLACSP'], lcsp, '347.1', 'La plataforma difunde los perfiles de contratante; se precisan los distractores para evitar confundir esta función legal con otros servicios electrónicos.']
];
const edits = {
  4: {texto: 'La Administración General del Estado ha formalizado un contrato de servicios sujeto a regulación armonizada. Según el artículo 154 de la Ley 9/2017, ¿dónde debe publicarse el anuncio de formalización?'},
  6: {opciones: ['Los convenios suscritos por la AGE son eficaces una vez firmados por las partes', 'Una encomienda de gestión entre distintas Administraciones se formaliza mediante convenio, salvo la excepción legal para la gestión ordinaria de servicios autonómicos por diputaciones, cabildos o consejos insulares', 'Los Protocolos Generales de Actuación que solo contienen declaraciones de intención, sin compromisos jurídicos concretos y exigibles, no tienen la consideración de convenio', 'Un convenio puede adoptarse entre una Administración Pública y un sujeto de derecho privado']},
  8: {texto: 'Según el artículo 142.2 de la Ley 47/2003, General Presupuestaria, ¿cuál de las siguientes NO es una modalidad del control interno económico-financiero?'},
  10: {texto: 'Un registro electrónico genera y firma un recibo mediante actuación administrativa automatizada, utilizando un certificado electrónico conforme al artículo 42.a de la Ley 40/2015. ¿Qué tipo de certificado corresponde?'},
  12: {texto: 'Según el artículo 347.1 de la Ley 9/2017, ¿qué función debe permitir la Plataforma de Contratación del Sector Público?', opciones: ['Sustituir al órgano de contratación en la valoración de las ofertas', 'Autorizar por sí misma el gasto de todos los contratos públicos', 'Sustituir los expedientes de contratación por un archivo histórico sin publicidad de licitaciones', 'Difundir por Internet los perfiles de contratante de los órganos de contratación']}
};
const changes = [];
for (const [id, a1, a2, academia, etiquetas, fuente, articulo, explicacion] of entries) {
  const q = data.preguntas.find(q => q.id === id);
  const before = structuredClone(q);
  Object.assign(q, edits[id] || {});
  if (id !== 11) q.comentarios = explicacion;
  q.clasificacion = {A1: a1, A2: a2, bloque_academia: academia, estado: 'revisada', nota: a2.length ? '' : 'Sin correspondencia directa asignada en el programa A2; no implica exclusión absoluta.'};
  q.etiquetas = etiquetas;
  q.revision = {estado: id === 11 ? 'pendiente_fuente' : edits[id] ? 'corregida' : 'vigente', fecha: '2026-10-01', fuentes: fuente ? [{url: fuente, articulo}] : [], observaciones: explicacion};
  changes.push({id, original: before, actualizada: structuredClone(q)});
}
// Solo sustituir los objetos de este lote, conservando byte a byte el resto.
let output = original;
for (const change of changes) {
  const marker = `      "id": ${change.id},`;
  const start = output.lastIndexOf('    {', output.indexOf(marker));
  const end = output.indexOf('\n    }', output.indexOf(marker)) + '\n    }'.length;
  if (start < 0 || end < 6) throw Error('Objeto no localizado');
  output = output.slice(0, start) + JSON.stringify(change.actualizada, null, 2).split('\n').map(l => '    ' + l).join('\n') + output.slice(end);
}
if (JSON.parse(output).preguntas.length !== data.preguntas.length) throw Error('Se alteró el total');
fs.writeFileSync(file, output);
fs.writeFileSync(path.join(__dirname, 'cambios-lote-001.json'), JSON.stringify({fecha: '2026-10-01', alcance: 'IDs 1–12; 11 verificadas y una pendiente de fuente', cambios: changes}, null, 2) + '\n');
console.log('Aplicadas 12 clasificaciones, 11 revisiones verificadas y 5 correcciones de redacción.');
