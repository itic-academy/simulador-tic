const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1505.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7826: ['https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', 'ITIC Academy, bloque 48 Seguridad en redes y en el nivel de aplicación, versión 2026', 'Trata los cortafuegos y el filtrado/control del tráfico como medidas de seguridad de red (A1-125/A2-IV-12); la descripción de la función se comprueba con NIST SP 800-41.'],
  7827: ['https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk', 'ITIC Academy, bloque 22 Seguridad, ENS y Ciberseguridad, versión 2026.2', 'Incluye la monitorización, el registro de actividad, la detección y la gestión de incidentes (A1-48/A2-II-13); NIST AU-6 concreta la revisión de registros.'],
  7828: ['https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk', 'ITIC Academy, bloque 39 Calidad y mantenimiento, versión 2026', 'Abarca las pruebas y la garantía de calidad del software (A1-96/A2-III-7); las funciones específicas de cobertura y prueba de carga se verifican con los proyectos oficiales EclEmma y Apache JMeter.'],
  7829: ['https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', 'ITIC Academy, bloque 42 Redes, versión 2026.1', 'Incluye cableado, redes de acceso y CATV (A1-110/A1-121/A2-IV-7); el valor nominal del producto CATV consultado se confirma en la ficha del fabricante.'],
  7830: ['https://drive.google.com/file/d/1hPYYrCoVBKhiEgMaqVBi5mpdUEm4_vV5/view?usp=drivesdk', 'ITIC Academy, Tema 093 MÉTRICA v3 (material de preparación disponible en Drive)', 'Cotejo específico de perfiles/participantes de MÉTRICA: incluye al Especialista en Comunicaciones en el perfil Consultor; correspondencia con A1-95 y A2-III-2, contrastada con la metodología original del portal de Administración Electrónica.']
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const convocation = {
  A1: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  A2: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'
};
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  assert.ok(q?.revision, `Falta revisión ${c.id}`);
  for (const id of [...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(id), `Tema no oficial ${id}`);
  const [url, title, detail] = docs[c.id];
  q.revision.fuentes = q.revision.fuentes.filter(x => !x.referencia.startsWith('Cotejo curricular:') && !x.referencia.startsWith('Convocatoria oficial A1 BOE-') && !x.referencia.startsWith('Convocatoria oficial A2 BOE-'));
  q.revision.fuentes.push(
    { url, referencia: `Cotejo curricular: ${title}. ${detail}` },
    { url: convocation.A1, referencia: `Convocatoria oficial A1 BOE-A-2025-25938; epígrafe(s): ${q.clasificacion.A1.join(', ')}.` },
    { url: convocation.A2, referencia: `Convocatoria oficial A2 BOE-A-2025-26262; epígrafe(s): ${q.clasificacion.A2.join(', ')}.` }
  );
  q.revision.observaciones = `${q.revision.observaciones.split(' Cotejo curricular:')[0]} Cotejo curricular: ${title}. ${detail}`;
  q.comentarios = `${q.comentarios.split(' Cotejo curricular:')[0]} Cotejo curricular: ${title}. ${detail}`.trim();
  q.clasificacion.bloque_academia = title.replace('ITIC Academy, ', '');
  q.clasificacion.nota = `Cotejo curricular: ${detail}`;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular de Drive y convocatorias A1/A2 incorporado para lote 1505.');
