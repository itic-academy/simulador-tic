const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const dir = __dirname;
const bankPath = path.join(dir, '..', 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const batchFiles = ['cambios-lote-1247.json', 'cambios-lote-1248.json'];
const specs = {
  6556: { texto: 'Desde el 15 de junio de 2017, ¿qué regla general se aplica al roaming cuando una persona viaja dentro de la Unión Europea?', opciones: ['Se aplican precios nacionales a llamadas, SMS y datos, sujetos a la política de uso razonable y a las excepciones previstas por la normativa.', 'El operador puede cobrar siempre un recargo máximo de un euro por minuto en llamadas de voz.', 'No existe regulación europea del roaming, sino únicamente de la portabilidad.', 'Los operadores no pueden cobrar por la portabilidad al viajar a otro Estado miembro.'], respuesta_correcta: 0 },
  6557: { texto: 'Conforme al artículo 17 de la LSSI, respecto de enlaces a otros contenidos o instrumentos de búsqueda, ¿cuándo queda exento de responsabilidad el prestador por la información enlazada?', opciones: ['Cuando no tenga conocimiento efectivo de la ilicitud o lesión de derechos, o, si lo tiene, actúe diligentemente para retirar o inutilizar el enlace.', 'Solo cuando el enlace sea automático y no exista ningún procedimiento de notificación.', 'Siempre que el contenido enlazado pertenezca a un tercero, aunque el prestador conozca su ilicitud.', 'Nunca: el prestador del enlace responde en todo caso por el contenido de destino.'], respuesta_correcta: 0 },
  6558: { texto: 'Señale la afirmación FALSA sobre los objetivos del programa europeo ISA² (2016–2020):', opciones: ['Desarrollar, mantener y promover un enfoque holístico de interoperabilidad para reducir la fragmentación en la Unión.', 'Facilitar la reutilización de soluciones de interoperabilidad por las Administraciones públicas europeas.', 'Identificar, crear y operar soluciones que apoyen la ejecución de las políticas y actividades de la Unión.', 'Eliminar la interacción electrónica transfronteriza entre Administraciones públicas europeas.'], respuesta_correcta: 3 },
  6559: { texto: 'Según el artículo 10.1 de la LSSI, ¿cuál de los siguientes datos NO forma parte de la información que el prestador debe facilitar de manera permanente, fácil, directa y gratuita?', opciones: ['Su nombre o denominación social y los datos que permitan una comunicación directa y efectiva.', 'El número de identificación fiscal que le corresponda.', 'Cuando el servicio haga referencia a precios, información clara y exacta sobre el precio, impuestos y, en su caso, gastos de envío.', 'Un número de registro del nombre de dominio que identifica al prestador en Internet.'], respuesta_correcta: 3 },
  6561: { texto: 'Conforme al artículo 38.3 de la LOPDGDD, ¿quién aprueba los códigos de conducta en protección de datos en España?', opciones: ['La AEPD o, en su caso, la autoridad autonómica de protección de datos competente, según el ámbito de sus competencias.', 'El responsable del tratamiento, sin intervención de una autoridad de control.', 'El delegado de protección de datos de cada entidad que se adhiera al código.', 'El encargado del tratamiento, previa autorización del responsable.'], respuesta_correcta: 0 },
  6562: { texto: 'Según el artículo 16.3 de la Ley de Bases del Régimen Local, ¿en qué condiciones se ceden a otras Administraciones públicas los datos obligatorios del Padrón municipal?', opciones: ['Solo con consentimiento previo de la persona interesada.', 'Sin consentimiento, siempre que la Administración solicitante invoque cualquier competencia, aunque el domicilio no sea relevante.', 'Con consentimiento previo y exclusivamente para fines estadísticos.', 'Sin consentimiento previo, cuando sean necesarios para las competencias de la Administración solicitante y exclusivamente para asuntos en que residencia o domicilio sean relevantes.'], respuesta_correcta: 3 },
  6563: { texto: 'Conforme al artículo 11.7 de la Ley 37/2007, ¿quién responde frente a terceros por los daños que puedan derivarse de la reutilización de los conjuntos de datos?', opciones: ['Los usuarios o agentes reutilizadores, bajo cuya responsabilidad y riesgo se realiza la reutilización.', 'La Administración u organismo público que elaboró los datos, en exclusiva.', 'Los reutilizadores y la Administración, de forma solidaria en todo caso.', 'La Administración como responsable principal y los reutilizadores subsidiariamente.'], respuesta_correcta: 0 },
  6565: { texto: '¿Cuál de las siguientes es una gráfica de seguimiento del trabajo pendiente propia de la gestión ágil (por ejemplo, Scrum), y no una de las prácticas Lean enumeradas?', respuesta_correcta: 2 }
};
const logById = new Map();
for (const file of batchFiles) {
  const p = path.join(dir, file);
  const doc = JSON.parse(fs.readFileSync(p, 'utf8'));
  for (const row of doc.cambios) logById.set(row.id, row);
}
const correction = { fecha: '2026-11-14', causa: 'Los scripts de los lotes 1247 y 1248 habían preparado los objetos de edición en cada tupla, pero aplicar-lote.cjs solo los leía del mapa superior. Las respuestas originales que ya eran correctas permanecieron iguales; las reformulaciones declaradas como aplicadas no llegaron al banco. Se aplican ahora de forma trazable, se sincronizan las instantáneas actualizadas de los registros y se corrige el helper para los lotes siguientes.', cambios: [] };
for (const [key, patch] of Object.entries(specs)) {
  const id = Number(key);
  const q = bank.preguntas.find(item => item.id === id);
  const entry = logById.get(id);
  assert.ok(q && entry, `Falta pregunta o registro para ${id}`);
  correction.cambios.push({ id, antes: structuredClone(q), despues: structuredClone({ ...q, ...patch }), motivo: 'Aplicación efectiva de la reformulación del lote, conservando respuesta y ambigüedades delimitadas según las fuentes citadas en la pregunta.' });
  Object.assign(q, patch);
  entry.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
for (const file of batchFiles) {
  const p = path.join(dir, file);
  const doc = JSON.parse(fs.readFileSync(p, 'utf8'));
  for (const row of doc.cambios) if (logById.has(row.id)) row.actualizada = structuredClone(bank.preguntas.find(item => item.id === row.id));
  fs.writeFileSync(p, JSON.stringify(doc, null, 2) + '\n');
}
fs.writeFileSync(path.join(dir, 'correcciones-ediciones-lotes-1247-1248.json'), JSON.stringify(correction, null, 2) + '\n');
console.log(`Aplicación reparada: ${correction.cambios.length} preguntas sincronizadas con sus registros originales.`);
