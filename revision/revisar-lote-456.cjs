const apply = require('./aplicar-lote.cjs');

const s = {
  mccall: {
    url: 'https://ntrl.ntis.gov/NTRL/dashboard/searchResults/titleDetail/ADA049014.xhtml',
    referencia: 'McCall, Richards y Walters, Factors in Software Quality, RADC-TR-77-369, vol. I (1977), informe original catalogado por NTIS: presenta el modelo jerárquico de factores y criterios de calidad, incluidas las perspectivas product operation, product revision y product transition y los factores de transición.'
  },
  halstead: {
    url: 'https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication500-234.pdf',
    referencia: 'NIST SP 500-234, Reference Information for the Software Verification and Validation Process, sección sobre Halstead software science metrics: parte de los recuentos de operadores/operandos distintos y totales; deriva longitud, volumen, dificultad y esfuerzo. Distingue estas métricas de complejidad de las medidas de flujo de McCabe.'
  }
};

const records = [
  [2591, [98, 99], ['III-13'], ['productividad de software', 'reutilización', 'orientación a objetos', 'esfuerzo'], [], '', 'Pendiente de aclaración: “el criterio más importante” no fija una definición de productividad, un contexto ni un modelo de medición. Cantidad producida por unidad de esfuerzo/tiempo puede ser una medida de productividad, mientras que reutilización puede influir en productividad, pero no es universalmente el criterio principal. Se conserva la pregunta, opciones y clave heredadas sin certificarla; hace falta identificar la fuente o precisar qué concepto/modelo pregunta.', 'pendiente_ambiguedad'],
  [2592, [98], ['III-13'], ['coste de calidad', 'calidad', 'Crosby'], [], '', 'Pendiente de aclaración: “teoría libre” no identifica inequívocamente un modelo reconocido de coste de calidad. Podría ser una corrupción de “quality is free” de Crosby, pero el enunciado y las opciones no especifican autor, definición de coste ni supuestos suficientes para validar la clave “coste constante e independiente de la calidad”. Se conservan los datos originales y se requiere la fuente didáctica o una redacción que nombre el modelo.', 'pendiente_ambiguedad'],
  [2593, [98], ['III-13'], ['McCall', 'modelo histórico de calidad', 'product transition', 'interoperabilidad', 'reutilización', 'portabilidad'], [s.mccall], '', 'Se acota el reactivo al modelo histórico de McCall (1977) y a la perspectiva product transition, asociada a adaptarse a otros entornos: incluye interoperabilidad, reutilización y portabilidad. Flexibilidad pertenece a product revision, por lo que es la opción correcta para “NO pertenece”. No se presenta esta taxonomía histórica como el modelo vigente de ISO/IEC 25010.', 'historica'],
  [2594, [96, 98], ['III-13'], ['McCall', 'testabilidad', 'pruebas de software', 'modelo histórico de calidad'], [s.mccall], '', 'Se precisa el factor histórico testability de McCall: esfuerzo requerido para probar un programa y comprobar que realiza su función prevista. “Verificabilidad” se reemplaza por “Facilidad de prueba (testability)”, término inequívoco; se conserva la posición de la respuesta correcta. El modelo se identifica como histórico, no como terminología actual de ISO/IEC 25010.', 'corregida'],
  [2595, [98], ['III-13'], ['Halstead', 'métricas de software', 'complejidad', 'operadores', 'operandos'], [s.halstead], '', 'Se concreta la métrica: las métricas de ciencia del software de Halstead derivan medidas como volumen, dificultad y esfuerzo a partir de recuentos de operadores y operandos. La opción correcta es Halstead; McCall es un modelo de factores de calidad, no el nombre de esta métrica. Se especifica “métrica de complejidad del código” para evitar una pregunta excesivamente abierta.', 'corregida']
];

const edits = {
  2593: {
    texto: 'En el modelo histórico de calidad de McCall (1977), ¿cuál de estos factores NO pertenece a la perspectiva product transition (adaptación a otros entornos)?',
    respuesta_correcta: 2
  },
  2594: {
    texto: 'Según el factor testability del modelo histórico de calidad de McCall, ¿cómo se denomina el esfuerzo requerido para probar un programa y comprobar que realiza su función prevista?',
    opciones: ['Usabilidad.', 'Mantenibilidad.', 'Facilidad de prueba (testability).', 'Flexibilidad.'],
    respuesta_correcta: 2
  },
  2595: {
    texto: '¿Qué conjunto de métricas de complejidad del código deriva volumen, dificultad y esfuerzo a partir de recuentos de operadores y operandos?',
    respuesta_correcta: 0
  }
};

apply({ numero: '456', fecha: '2026-10-28', records, edits });
const fs = require('node:fs');
const path = require('node:path');
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-456.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
for (const id of [2591, 2592]) {
  const q = bank.preguntas.find(x => x.id === id);
  const row = log.cambios.find(x => x.id === id);
  q.revision.observaciones += ' Cotejo curricular: el bloque 39 de ITIC Academy (edición 2026.1, actualizado el 23-09-2026) trata productividad, métricas, McCall y calidad del software, por lo que confirma la pertinencia temática, no resuelve la vaguedad del reactivo. Correspondencias A1-98/A1-99/A2-III-13 contrastadas con temario-oficial.json y convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262.';
  q.comentarios = q.revision.observaciones;
  q.clasificacion.bloque_academia = 'ITIC Academy, Bloque 39 Calidad y Mantenimiento, edición 2026.1 (23-09-2026): productividad, métricas, calidad y McCall.';
  q.clasificacion.nota = q.revision.observaciones;
  row.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de academia y convocatorias añadido a los pendientes 2591–2592.');
