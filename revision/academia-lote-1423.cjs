const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1423.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7416: [{ url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', title: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, edición 2026.1', detail: 'El bloque incluye arquitectura/desarrollo web, interconexión de sistemas y servicios web; se coteja el concepto de aplicación compuesta. La definición se confirma en la recomendación UIT-T.' }],
  7417: [{ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', title: 'Cotejo de cobertura: programas oficiales A1/A2 y búsqueda de material ITIC Academy en Drive', detail: 'El programa A1 incluye expresamente gestión de continuidad del negocio (tema 128) y el A2 recuperación ante desastres (IV-6). Las búsquedas en los materiales Academy accesibles no localizaron una unidad específica de ISO 22301/BCMS; se registra esta ausencia en vez de atribuir a la academia contenido no encontrado.' }],
  7418: [{ url: 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk', title: 'ITIC Academy, bloque 46 Redes inalámbricas y comunicaciones móviles, edición 2026', detail: 'Cotejo de WLAN, radioespectro y normativa reguladora (CNAF 2026). El uso regulatorio europeo de 5470–5725 MHz se comprueba además en Comisión Europea y Decisión (UE) 2022/2307.' }],
  7419: [{ url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', title: 'ITIC Academy, bloque 42 Redes, edición 2026', detail: 'Incluye gestión/monitorización de redes y SNMP; el organismo que publica los RFC de SNMP se verifica en los documentos del IETF.' }],
  7420: [{ url: 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk', title: 'ITIC Academy, bloque 43 Protocolos, edición 2026', detail: 'Incluye protocolos de encaminamiento y BGP; se delimita la respuesta a los cuatro tipos base de RFC 4271 y se coteja la extensión ROUTE-REFRESH con RFC 2918.' }]
};

const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const change of log.cambios) {
  const q = bank.preguntas.find(x => x.id === change.id);
  assert.ok(q?.revision, 'Falta revisión ' + change.id);
  for (const id of [...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(id), 'Tema oficial inválido: ' + id);
  const notes = docs[change.id];
  assert.ok(notes?.length, 'Falta cotejo curricular ' + change.id);
  for (const doc of notes) {
    const note = `Cotejo curricular: ${doc.title}. ${doc.detail}`;
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
console.log('Cotejo Academy/Drive y programas oficiales registrado para 7416–7420.');
