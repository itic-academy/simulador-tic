const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const dir = __dirname;
const bankPath = path.join(dir, '..', 'preguntas_preparatic.json');
const logPath = path.join(dir, 'cambios-lote-633.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  web: {url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', title: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, versión 2026.1'},
  gis: {url: 'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk', title: 'ITIC Academy, bloque 33 E-learning y Sistemas de Información Geográfica, versión 2026.1'},
  warehouse: {url: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk', title: 'ITIC Academy, bloque 34 Business Intelligence y Big Data, versión 2026.1'}
};
const mappings = {
  3481: {a1: [65], a2: ['III-14'], use: [docs.web], detail: 'El bloque 30 cubre desarrollo web, UX y accesibilidad/usabilidad; ofrece encuadre curricular para la comparación de interfaces, pero no localicé allí una exposición específica sobre CLI frente a menús. La distinción reconocimiento/recuerdo y eficiencia por perfil de usuario se contrasta con la fuente HCI citada.'},
  3482: {a1: [74], a2: [], use: [docs.gis], detail: 'El bloque 33 aborda SIG y en el apartado de estándares trata OGC y los servicios WMS, WFS y WCS. El propio documento indica “A2: NO APLICA”; por ello no se asigna un tema A2 artificial.'},
  3483: {a1: [74], a2: [], use: [docs.gis], detail: 'El bloque 33 aborda estándares SIG e incluye OGC, WMS, WFS y WCS; el bloque menciona metadatos e interoperabilidad geoespacial. La correspondencia oficial directa es A1-74 y el documento declara A2: NO APLICA. La separación precisa de esquemas, servicios y codificaciones se prueba con las especificaciones oficiales FGDC/OGC.'},
  3484: {a1: [75], a2: ['II-4'], use: [docs.warehouse], detail: 'El bloque 34 trata almacenes de datos, BI/OLAP y modelado dimensional (hechos, dimensiones y esquemas estrella/copo); su temario incluye A1-75 y A2-T4, que en el fichero oficial corresponde a A2-II-4. La afirmación sobre múltiples jerarquías se verifica aparte con Kimball Group.'},
  3485: {a1: [67], a2: ['III-12'], use: [docs.web], detail: 'El bloque 30 cubre Java SE, Java/Jakarta EE y aplicaciones web. Su actualización de agosto de 2026 indica que JDK 26 eliminó la API Applet; el material trata el applet como tecnología histórica, aunque la clasificación A2-III-12 es contextual por el antiguo uso embebido en páginas web.'}
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(dir, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const examA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const examA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  const m = mappings[c.id];
  assert.ok(q?.revision && m, `Falta revisión o cotejo de ${c.id}`);
  for (const id of [...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)]) assert.ok(official.has(id), `Tema oficial inexistente: ${id}`);
  q.clasificacion = {...q.clasificacion, A1: m.a1.map(n => `A1-${n}`), A2: m.a2.map(n => `A2-${n}`), bloque_academia: `${m.use.map(d => `${d.title}; ${m.detail}; ${d.url}`).join(' | ')}${m.use.length ? ' | ' : ''}${m.detail}`, estado: 'revisada', nota: 'Correspondencia cotejada con los programas A1/A2 publicados en BOE y revision/temario-oficial.json; el material académico se describe según lo localizado y se señala expresamente cuando A2 no aplica.'};
  q.revision.observaciones += ` Cotejo ITIC Academy: ${m.detail} Correspondencia oficial: ${[...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)].join(', ') || 'sin tema A2 aplicable'}.`;
  for (const d of m.use) q.revision.fuentes.push({url: d.url, referencia: `${d.title}. ${m.detail}`});
  q.revision.fuentes.push({url: examA1, referencia: 'Convocatoria BOE-A-2025-25938, programa A1 del anexo I; correspondencia contrastada con revision/temario-oficial.json.'});
  q.revision.fuentes.push({url: examA2, referencia: 'Convocatoria BOE-A-2025-26262, programa A2 GSI del anexo IX; se contrasta para identificar la ausencia de un tema SIG A2 aplicable y los epígrafes señalados.'});
  if (c.id === 3485) {
    q.revision.fuentes = q.revision.fuentes.filter(f => !f.url.includes('/java/javase/11/migrate/'));
    q.revision.fuentes.unshift({url: 'https://docs.oracle.com/en/java/javase/26/migrate/removed-apis.html', referencia: 'Oracle JDK 26 Migration Guide, APIs Removed: Java SE 26 eliminó el paquete java.applet y las clases Applet/JApplet; el API había sido obsoleto para eliminación.'});
    q.revision.fuentes.unshift({url: 'https://docs.oracle.com/en/java/javase/26/migrate/significant-changes-jdk-26-release.html', referencia: 'Oracle, Significant Changes in JDK 26: el API Applet se eliminó en JDK 26; los navegadores ya habían retirado el soporte del plug-in Java.'});
    q.revision.observaciones = q.revision.observaciones.replace('Oracle retiró el plug-in/visor en JDK 11', 'Oracle retiró la tecnología de despliegue plug-in/visor en JDK 11 y eliminó el API java.applet en JDK 26');
  }
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo académico, programas BOE y clasificación oficial completado para lote 633.');
