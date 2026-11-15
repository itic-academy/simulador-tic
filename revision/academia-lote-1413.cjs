const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1413.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7366: [{
    url: 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 46 Redes inalámbricas y comunicaciones móviles, edición 2026.1',
    detail: 'El apartado 12.3 identifica UMTS como tecnología móvil 3G; el temario de oposición A1-123/A2-IV-15 incluye las generaciones móviles. La clasificación se contrasta además con la recomendación ITU-R M.1457 vigente.'
  }],
  7367: [{
    url: 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 46 Redes inalámbricas y comunicaciones móviles, edición 2026.1',
    detail: 'El bloque 12.4 trata HSPA/HSDPA como evolución 3.5G y cubre sus técnicas de radio; el detalle de HARQ y scheduling dinámico se comprueba en 3GPP TS 25.308.'
  }],
  7368: [{
    url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma, edición 2026',
    detail: 'El apartado IPsec/VPN distingue AH (autenticación e integridad, sin cifrado) de ESP (confidencialidad e integridad opcional), dentro de seguridad en redes (A1-125/A2-IV-12). La incompatibilidad AH/NAT y los requisitos actuales de algoritmos se vuelven a verificar directamente en RFC 3715 y RFC 8221.'
  }],
  7369: [{
    url: 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 50 Videoconferencia, SSO y herramientas de trabajo colaborativo, edición 2026.1',
    detail: 'El material sitúa Kerberos entre los protocolos AAA/autenticación y lo incluye en el bloque de SSO; el cruce oficial se hace con A1-80 (autenticación) y A2-IV-12/II-13 (seguridad). RFC 4120 fundamenta KDC, tickets y claves del protocolo base.'
  }],
  7370: [{
    url: 'https://drive.google.com/file/d/1jR3pdC8fevmffQWPQRqP6VnP3e8C3wxC/view?usp=drivesdk',
    title: 'ITIC Academy, Seguridad en redes y seguridad en aplicaciones (temas 125–126), versión 2',
    detail: 'El material desarrolla tipos de ataques de red y describe las botnets/C2, contexto curricular de la pregunta (A1-125/A2-II-13). No se atribuye a la academia una explicación específica de DGA: la definición se verifica en MITRE ATT&CK T1568.002.'
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
console.log('Cotejo Academy/Drive registrado para 7366–7370 con clasificación A1/A2 oficial.');
