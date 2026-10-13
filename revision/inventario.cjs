const fs = require('node:fs');
const path = require('node:path');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'preguntas_preparatic.json'), 'utf8'));
const catalog = JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8'));
const validTopics = new Set(catalog.programas.flatMap(p => p.temas.map(t => t.id)));
const ids = new Set(), duplicates = new Map(), errors = [], candidates = [];
const counts = {};
for (const q of data.preguntas) {
  if (ids.has(q.id)) errors.push({id: q.id, error: 'ID duplicado'});
  ids.add(q.id);
  if (!q.texto || !Array.isArray(q.opciones) || q.opciones.length < 2 || !Number.isInteger(q.respuesta_correcta) || q.respuesta_correcta < 0 || q.respuesta_correcta >= q.opciones.length) errors.push({id: q.id, error: 'Estructura o respuesta inválida'});
  for (const theme of [...(q.clasificacion?.A1 || []), ...(q.clasificacion?.A2 || [])]) if (!validTopics.has(theme)) errors.push({id: q.id, error: 'Tema no existe: ' + theme});
  const status = q.revision?.estado || 'sin_revisar';
  counts[status] = (counts[status] || 0) + 1;
  const key = q.texto.normalize('NFKC').trim().replace(/\s+/g, ' ').toLowerCase();
  if (!duplicates.has(key)) duplicates.set(key, []);
  duplicates.get(key).push(q.id);
  if (/Ley 30\/1992|Ley 11\/2007|15\/1999|1720\/2007|3\/2010|Java EE|Windows XP|Windows 7|SSL|WEP|TLS 1\.0/i.test(q.texto)) candidates.push({id: q.id, texto: q.texto, motivo: 'Referencia que requiere comprobar contexto y vigencia; no demuestra obsolescencia.'});
}
if (data.total !== data.preguntas.length) errors.push({error: 'Total declarado incorrecto'});
const lotes = fs.readdirSync(__dirname).filter(n => /^cambios-lote-\d+\.json$/.test(n)).sort();
const report = {fecha: new Date().toISOString().slice(0, 10), total: data.preguntas.length, estados: counts, lotes, errores_estructurales: errors, grupos_enunciado_repetido: [...duplicates.values()].filter(ids => ids.length > 1), candidatos_revision_contextual: candidates};
fs.writeFileSync(path.join(__dirname, 'inventario.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({total: report.total, estados: counts, errores: errors.length, grupos_repetidos: report.grupos_enunciado_repetido.length, candidatos: candidates.length}, null, 2));
if (errors.length) process.exitCode = 1;
