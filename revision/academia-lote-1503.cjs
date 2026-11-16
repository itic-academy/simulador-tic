const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1503.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7816: ['https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', 'ITIC Academy, bloque 29 Bases de datos, SQL y modelado de datos, versión 2026.1', 'Cotejo del área de modelado de datos y bases de datos; la distinción precisa entre grado y cardinalidad se contrasta con la fuente académica citada.'],
  7817: ['https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', 'ITIC Academy, bloque 42 Redes, versión 2026.1', 'Cubre las LAN, los dispositivos de interconexión, VLAN y redes locales (A1-118/A2-IV-8); la precisión sobre dominios se verifica con documentación técnica de Cisco.'],
  7818: ['https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', 'ITIC Academy, bloque 29 Bases de datos, SQL y modelado de datos, versión 2026.1', 'Cubre el modelo relacional, SQL y la interoperabilidad entre SGBD (A1-64/A2-II-5); la semántica GROUP BY se comprueba con la documentación oficial de PostgreSQL.'],
  7819: ['https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', 'ITIC Academy, bloque 27 Sistemas operativos, temas 59–62, versión 2026', 'Incluye expresamente Android y sistemas operativos para dispositivos móviles (A1-62/A2-II-2); la fecha/versionado de los permisos se comprueba con Android Developers.'],
  7820: ['https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', 'ITIC Academy, bloque 48 Seguridad en redes y en el nivel de aplicación, versión 2026', 'Cubre seguridad lógica y control de accesos (A1-61/A1-125/A2-II-13); la clasificación concreta de reglas y excepciones de AppLocker se verifica exclusivamente con Microsoft Learn.']
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
console.log('Cotejo curricular de Drive y convocatorias A1/A2 incorporado para lote 1503.');
