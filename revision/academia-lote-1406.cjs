const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1406.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7331: {
    url: 'https://drive.google.com/file/d/1MjRX0kL8jEBZwHIpUag4NyJJnh_VGsVG/view?usp=drivesdk',
    title: 'ITIC Academy, Tema 043 Ley de Propiedad Intelectual, versión 2026',
    detail: 'El apartado REL describe MPEG-21 Rights Expression Language y su relación con XrML; el modelo técnico de cuatro componentes del grant se confirma en el estándar MPEG-21/ISO. No se fuerza una etiqueta A1 específica porque el temario A1 no contiene un epígrafe directo de MPEG-21 REL; A2-II-14 sí incluye la protección jurídica y los derechos digitales.'
  },
  7332: {
    url: 'https://drive.google.com/file/d/1MjRX0kL8jEBZwHIpUag4NyJJnh_VGsVG/view?usp=drivesdk',
    title: 'ITIC Academy, Tema 043 Ley de Propiedad Intelectual, versión 2026',
    detail: 'El tema cubre las características de los derechos de autor y la convivencia con otros derechos; el enunciado y la respuesta se verifican directamente en el artículo 3 del texto consolidado del BOE.'
  },
  7333: {
    url: 'https://drive.google.com/file/d/1NWEg_hd3iDIC0kIitK-u8BpmJ20Jecmw/view?usp=drivesdk',
    title: 'ITIC Academy, Tema 49 Servicios Comunes A1/A2, edición 2026',
    detail: 'El bloque incluye el régimen actual del Real Decreto 1125/2024, la gobernanza y los servicios digitales comunes/transversales; la regla de declaración se contrasta con su artículo 9 en BOE.'
  },
  7334: {
    url: 'https://drive.google.com/file/d/1zdx_PRBfKM9tRy61Boz_yPekU-D-b_6S/view?usp=drivesdk',
    title: 'ITIC Academy, bloques 45–46 Interoperabilidad, versión 2026.2',
    detail: 'La sección 11 desarrolla la NTI de Documento y Expediente Electrónicos; corresponde a A1-46 y A2-I-9. La composición formal se comprueba en el texto de la NTI en BOE.'
  },
  7335: {
    url: 'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 22 ENS y Ciberseguridad, nuevo temario 2026',
    detail: 'El apartado 1.5 desarrolla gestión de riesgos y MAGERIT; la definición técnica del activo se verifica en la publicación de MAGERIT v3 de CCN-CERT.'
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
console.log('Cotejo Academy/Drive registrado para 7331–7335 con clasificación A1/A2 oficial.');
