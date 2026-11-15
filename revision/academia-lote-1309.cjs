const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-1309.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const drive = {
  block09: 'https://drive.google.com/file/d/1-xmHgvxArWY8GroFD1eSdyPrAQjkBpzo/view?usp=drivesdk',
  block12: 'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk',
  block15: 'https://drive.google.com/file/d/1D62OE6Sw-ZB46S_2tvGophVTKgS3ip22/view?usp=drivesdk',
  block26: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk'
};
const academy = {
  6866: { note: 'No se encontró un documento de ITIC Academy accesible con evidencia específica sobre la fecha de toma de posesión de la primera cohorte. Se cotejó directamente en resoluciones del BOE; el programa oficial A1-24/A2-I.8 solo aporta correspondencia temática de empleo público.' },
  6867: { url: drive.block12, note: 'ITIC Academy, bloque 12, Planificación estratégica de los Sistemas de Información y dirección TIC (edición 2026): cubre las áreas A1-32/33/35. Sirve para cotejo temático; la definición organizativa de PMO se verifica con el léxico oficial PMI, porque sus funciones varían entre organizaciones.' },
  6868: { url: drive.block09, note: 'ITIC Academy, bloque 09, Organización y Gestión de los Sistemas de Información (edición 2026): cobertura temática de organización/operación TIC A1-34. El funcionamiento de las estaciones de gestión SNMP se comprueba directamente en IETF RFC 3411; el A2-II.8 aporta correspondencia general con redes.' },
  6869: { url: drive.block26, note: 'ITIC Academy, bloque 26, Hardware, servidores, CPD, almacenamiento y virtualización (edición 2026): cobertura temática A1-53 y de CPD. No se localizó una explicación específica de NIST PE-11; la respuesta sobre continuidad eléctrica se fundamenta en el control primario de NIST.' },
  6870: { url: drive.block15, note: 'ITIC Academy, bloque 15, Metodologías y ciclo de vida (edición 2026): cobertura temática de metodologías de proyectos y A2-III.2. No se halló en el material accesible el listado concreto de procesos de PMBOK 6; esa lista se cotejó con la errata oficial de PMI.' }
};
const marker = 'Cotejo curricular ITIC Academy:';
const strip = value => { const s = (value || '').trim(); const i = s.indexOf(marker); return (i < 0 ? s : s.slice(0, i)).trim(); };
for (const item of log.cambios) {
  const q = bank.preguntas.find(x => x.id === item.id), entry = academy[item.id];
  assert.ok(q && entry, `Falta cotejo para ${item.id}`);
  const official = [...q.clasificacion.A1, ...q.clasificacion.A2].join('/') || 'sin epígrafe A2 específico';
  const note = `${marker} ${entry.note} Correspondencia oficial: ${official}. Academy se usa para comprobar cobertura y terminología; la respuesta sustantiva se fundamenta en fuentes primarias.`;
  q.clasificacion.bloque_academia = entry.note;
  q.clasificacion.nota = `${strip(q.clasificacion.nota)} ${note}`.trim();
  q.comentarios = `${strip(q.comentarios)} ${note}`.trim();
  q.revision.observaciones = `${strip(q.revision.observaciones)} ${note}`.trim();
  if (entry.url) {
    q.revision.fuentes = q.revision.fuentes.filter(s => s.url !== entry.url);
    q.revision.fuentes.push({url: entry.url, referencia: entry.note});
  }
  item.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, `${JSON.stringify(bank, null, 2)}\n`);
fs.writeFileSync(logPath, `${JSON.stringify(log, null, 2)}\n`);
console.log('Cotejo Academy aplicado a 6866–6870.');
