const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1412.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7361: [{
    url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 42 Redes, versión 2026.1',
    detail: 'El bloque incluye TCP/IP, arquitectura IP, direccionamiento y tecnologías de acceso. La posibilidad concreta de asignación manual en Unix se contrasta además con el ejemplo de ifconfig del FreeBSD Handbook; el temario no se usa como prueba de comandos.'
  }],
  7362: [{
    url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 42 Redes, versión 2026.1',
    detail: 'El bloque cubre transición IPv4/IPv6, arquitectura IP y funcionalidades específicas de IPv6, por lo que mapea A1-115/A2-II-8. El detalle de AH/ESP y las longitudes de cabecera se verifican en los RFC citados, no se atribuyen al resumen académico.'
  }],
  7363: [{
    url: 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 50 Videoconferencia, SSO y herramientas de trabajo colaborativo, versión 2026.1',
    detail: 'El capítulo H.323 incluye MCU y componentes de videoconferencia, en consonancia con A1-130 y A2-IV-16. La referencia a SIP se ha retirado del enunciado: el marco de conferencia SIP se verifica por separado en RFC 4353.'
  }],
  7364: [{
    url: 'https://drive.google.com/file/d/11qGK4GbJ0QV81HEyboRAy5AZorijJmhs/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 28 Arquitectura SOA y requisitos no funcionales, versión 2026',
    detail: 'El material sitúa arquitectura cliente-servidor y su evolución hacia servicios/SOA bajo A1-58 y A2-II-6. La distinción cliente solicita/servidor presta se fundamenta además en Microsoft Learn; no se atribuye a la academia la formulación reformulada del ítem.'
  }],
  7365: [{
    url: 'https://drive.google.com/file/d/1nHGBMG4P3il5v4hZ1-RKdHmGzUPiwqnA/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 45 Correo, mensajería y servicios de directorio, versión 2026',
    detail: 'El apartado de X.400 lo presenta expresamente como modelo clásico de mensajería y ubica el contenido en A1-122. Se conserva el vínculo curricular, pero se aclara que la edición X.402 (06/1999) aparece en vigor en ITU-T; sus atributos se contrastan con la norma y RFC 2156.'
  }]
};

const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const change of log.cambios) {
  const q = bank.preguntas.find(x => x.id === change.id);
  assert.ok(q?.revision, 'Falta revisión ' + change.id);
  for (const id of [...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(id), 'Tema oficial inválido: ' + id);
  const notes = docs[change.id];
  assert.ok(notes?.length, 'Falta cotejo académico ' + change.id);
  for (const doc of notes) {
    const note = `Cotejo curricular ITIC Academy/Drive: ${doc.title}. ${doc.detail}`;
    q.revision.fuentes.push({ url: doc.url, referencia: note });
    q.clasificacion.nota = (q.clasificacion.nota + ' ' + note).trim();
    q.comentarios = (q.comentarios + ' ' + note).trim();
    q.revision.observaciones = (q.revision.observaciones + ' ' + note).trim();
  }
  q.clasificacion.bloque_academia = notes.map(x => `${x.title}: ${x.detail}`).join(' ');
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy/Drive registrado para 7361–7365 con clasificación A1/A2 oficial.');
