const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1407.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7336: {
    url: 'https://drive.google.com/file/d/1NWEg_hd3iDIC0kIitK-u8BpmJ20Jecmw/view?usp=drivesdk',
    title: 'ITIC Academy, Tema 49 Servicios Comunes A1/A2, edición 2026',
    detail: 'El material desarrolla DIR3 entre los servicios comunes para interoperabilidad y administración digital; se contrasta la descripción con la ficha oficial del Directorio.'
  },
  7337: {
    url: 'https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view?usp=drivesdk',
    title: 'ITIC Academy, Tema 25 Cloud Computing, edición 2026',
    detail: 'El bloque dedica un apartado a edge y fog computing y presenta sus funciones y localización dentro del continuo con la nube.'
  },
  7338: {
    url: 'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 47 Aplicaciones Móviles y Sistemas Operativos, edición 2026',
    detail: 'El apartado 10 trata fundamentos del sistema operativo y la gestión de memoria, procesos, energía y drivers; permite clasificar el concepto por A1-59/A2-II-2.'
  },
  7339: {
    url: 'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 47 Aplicaciones Móviles y Sistemas Operativos, edición 2026',
    detail: 'El material conserva Firefox OS expresamente como plataforma histórica (2013–2016) y distingue Gonk, Gecko y Gaia; se clasifica como arquitectura de sistema móvil A1-62/A2-II-2.'
  },
  7340: {
    url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado de Datos, edición 2026',
    detail: 'El bloque incluye el modelo relacional, fundamentos y bases de datos, correspondiente a A1-63/A2-II-5; la motivación histórica se comprueba en el artículo original de Codd.'
  }
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const change of log.cambios) {
  const q = bank.preguntas.find(x => x.id === change.id);
  assert.ok(q?.revision, 'Falta revisión ' + change.id);
  for (const id of [...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(id), 'Tema oficial inválido: ' + id);
  const doc = docs[change.id];
  const note = 'Cotejo curricular ITIC Academy/Drive: ' + doc.title + '. ' + doc.detail;
  q.clasificacion.bloque_academia = note;
  q.clasificacion.nota = (q.clasificacion.nota + ' ' + note).trim();
  q.comentarios = (q.comentarios + ' ' + note).trim();
  q.revision.observaciones = (q.revision.observaciones + ' ' + note).trim();
  q.revision.fuentes.push({ url: doc.url, referencia: doc.title + '; cotejo: ' + doc.detail });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy/Drive registrado para 7336–7340 con clasificación A1/A2 oficial.');
