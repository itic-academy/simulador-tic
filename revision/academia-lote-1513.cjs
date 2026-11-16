const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1513.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7866: ['https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', 'ITIC Academy, bloque 29, Bases de Datos, SQL y Modelado de Datos, edición 2026.1', 'Cotejo temático con los temas de SGBD, modelo relacional y SQL (A1-63/64 y A2-II-5). El comportamiento exacto de privilegios de columna y vistas se acredita con documentación SQL de PostgreSQL y Microsoft, no se atribuye específicamente al manual académico.'],
  7867: ['https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', 'ITIC Academy, bloque 27, Sistemas Operativos, versión 2026.1', 'El bloque cubre fundamentos y evolución de los sistemas operativos (A1-59/A2-II-2). La asociación concreta entre tercera generación, circuitos integrados y multiprogramación se cotejó además con materiales docentes universitarios; no se presenta la taxonomía como estándar universal.'],
  7868: ['https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', 'ITIC Academy, bloque 36, Seguridad, Criptografía, Identificación y Firma, versión 2026.1', 'El bloque aborda identidad electrónica, certificados, PKI y servicios de confianza (A1-80/81 y A2-I-6). La relación de servicios actualmente ofrecidos se verificó en el catálogo FNMT-CERES, no se infirió del temario.'],
  7869: ['https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', 'ITIC Academy, bloque 36, Seguridad, Criptografía, Identificación y Firma, versión 2026.1', 'Se revisaron los apartados de criptografía simétrica/asimétrica y cifrado híbrido, con encaje A1-79/A1-125 y A2-IV-12. La construcción concreta de OpenPGP se contrastó con los RFC vigentes del IETF.'],
  7870: ['https://drive.google.com/file/d/1zdx_PRBfKM9tRy61Boz_yPekU-D-b_6S/view?usp=drivesdk', 'ITIC Academy, bloque 20, Interoperabilidad de sistemas, versión 2026.2', 'El bloque incluye el ENI y reutilización de aplicaciones, y explica que el uso de EUPL se procura sin convertirla en licencia única; encaje A1-45/A2-I-9. La respuesta jurídica se comprobó en el ENI consolidado en BOE.']
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const calls = { A1: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', A2: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262' };
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
 const q = bank.preguntas.find(x => x.id === c.id); assert.ok(q?.revision, `Falta revisión ${c.id}`);
 for (const id of [...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(id), `Tema no oficial ${id}`);
 const [url,title,detail] = docs[c.id];
 q.revision.fuentes = q.revision.fuentes.filter(x => !x.referencia.startsWith('Cotejo curricular:') && !x.referencia.startsWith('Convocatoria oficial A1 BOE-') && !x.referencia.startsWith('Convocatoria oficial A2 BOE-'));
 q.revision.fuentes.push({url,referencia:`Cotejo curricular: ${title}. ${detail}`},{url:calls.A1,referencia:`Convocatoria oficial A1 BOE-A-2025-25938; epígrafe(s): ${q.clasificacion.A1.join(', ')||'sin asignación directa'}.`},{url:calls.A2,referencia:`Convocatoria oficial A2 BOE-A-2025-26262; epígrafe(s): ${q.clasificacion.A2.join(', ')||'sin asignación directa'}.`});
 const obs=q.revision.observaciones.split(' Cotejo curricular:')[0]; q.revision.observaciones=`${obs} Cotejo curricular: ${title}. ${detail}`;
 const com=q.comentarios.split(' Cotejo curricular:')[0]; q.comentarios=`${com} Cotejo curricular: ${title}. ${detail}`.trim();
 q.clasificacion.bloque_academia=title; q.clasificacion.nota=`Cotejo curricular: ${detail}`; c.actualizada=structuredClone(q);
}
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n'); fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
