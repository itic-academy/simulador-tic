const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-214.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const mapping = {
  1386: ['https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view', 'Bloque 30, Tecnologías de sistemas de información, versión 2026.1, APIs y servicios web.', 'A1-65; A2-III-12'],
  1387: ['https://drive.google.com/file/d/1FPkzhljZaHbxADbo36QNm9U9gwGy7lIt/view', 'Bloque 35, Tema 78, Comercio y factura electrónica, versión 2026.', 'A1-78; A2-I-9'],
  1388: ['https://drive.google.com/file/d/1nHGBMG4P3il5v4hZ1-RKdHmGzUPiwqnA/view', 'Bloque 45, Tema 122, Correo, mensajería y directorios, versión 2026.', 'A1-80'],
  1389: ['https://drive.google.com/file/d/1dW2ffNhCduFHJ1hI2nT6fqs_G8DeNpo3/view', 'Bloque 3, Actuación administrativa, temas 7, 8 y 22, versión 2026, documentos y copias electrónicas.', 'A1-80; A2-I-6/A2-I-9'],
  1390: ['https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view', 'Bloque 36, Temas 79–81, Seguridad, criptografía, identificación y firma electrónica, versión 2026.', 'A1-81; A2-IV-12']
};
const notes = {
  1386: 'La clave B se mantiene, pero se precisa el supuesto. POST es lo habitual cuando se envía una petición a una colección y el servidor asigna la URI del nuevo recurso. PUT también puede crear un recurso en la URI objetivo que ya conoce el cliente; por eso «qué verbo permite crear» era ambiguo.',
  1387: 'La clave C es correcta si se formula como ejecutar la ordenación o el pago: FACe permite consultar estados y solicitar anulación, pero no paga la factura. El portal sí muestra el estado «pagada» cuando el organismo comunica ese resultado; por eso se evita confundir consultar un estado con efectuar el pago.',
  1388: 'La respuesta B es correcta: LDIF (LDAP Data Interchange Format) representa entradas de directorio o cambios para transportarlos e importarlos/exportarlos. Se corrigen los distractores para evitar errores ortográficos accidentales en acrónimos conocidos.',
  1389: 'La nacionalidad de la persona no cambia la regla y se elimina del enunciado. Una copia en papel de un documento electrónico administrativo debe identificarse como copia y llevar un código u otro sistema que permita comprobar su autenticidad ante el órgano emisor (Ley 39/2015, art. 27.3.c). Se explicita que el supuesto es un documento cuya copia oficial incorpora ese mecanismo; imprimir sin él no basta.',
  1390: 'Una PKI es el marco de políticas, procesos, personas y componentes técnicos para gestionar el ciclo de vida de certificados de clave pública. Una CA emite certificados; una RA apoya funciones de registro/identificación, pero no constituye por sí sola toda la infraestructura ni emite certificados. Se reformula el enunciado para pedir el marco completo.'
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  const [url, block, topics] = mapping[c.id];
  const note = `Cotejo temático con ITIC Academy: ${block} Correspondencia con el programa oficial: ${topics}.`;
  q.clasificacion.bloque_academia = block;
  q.clasificacion.nota = note;
  q.revision.observaciones = `${notes[c.id]} ${note}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes = q.revision.fuentes.filter(f => !String(f.referencia).startsWith('ITIC Academy,'));
  q.revision.fuentes.push({ url, referencia: `ITIC Academy, ${block} Correspondencia: ${topics}.` });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de academia añadido a las cinco preguntas del lote 214.');
