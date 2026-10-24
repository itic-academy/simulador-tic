const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-213.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const mapping = {
  1381: ['https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view', 'Bloque 32, Inteligencia artificial y ciencia de datos, versión 2026, visualización de datos y BI.', 'A1-28; A2-II-4'],
  1382: ['https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view', 'Bloque 32, Inteligencia artificial y ciencia de datos, versión 2026, aprendizaje supervisado y no supervisado/minería de datos.', 'A1-70; A2-III-15'],
  1383: ['https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view', 'Bloque 30, Tecnologías de sistemas de información, versión 2026.1, CRM y gestión de clientes.', 'A1-29; A2-II-12/A2-II-4'],
  1384: ['https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view', 'Bloque 33, E-Learning y sistemas de información geográfica, versión 2026.1 (31-07-2026), §1.9, plataformas actuales.', 'A1-73; A2-III-6'],
  1385: ['https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view', 'Bloque 33, E-Learning y sistemas de información geográfica, versión 2026.1 (31-07-2026), §2.8, infraestructuras de datos espaciales e INSPIRE.', 'A1-74; A2-I-9']
};
const notes = {
  1381: 'La clave D es correcta: Power BI ofrece herramientas para conectar, analizar, visualizar y compartir datos empresariales. Se corrige el error tipográfico «lntelligence» (ele minúscula) por «Intelligence» y se completa el nombre del producto. FileZilla es un cliente de transferencia de archivos, JMeter prueba rendimiento y Artifactory gestiona artefactos.',
  1382: 'Se acota la pregunta a una clasificación introductoria según haya o no una variable objetivo etiquetada. En ese marco, la pareja es aprendizaje supervisado y no supervisado. No se presenta como una taxonomía exhaustiva: hay otras familias y variantes, como el aprendizaje por refuerzo o el semisupervisado.',
  1383: 'La respuesta A es correcta en la clasificación habitual: el CRM analítico recopila y analiza datos de clientes para obtener conocimiento útil para decisiones; el operacional automatiza interacciones y procesos, y el colaborativo facilita el intercambio entre áreas y agentes. Se añade «en la clasificación habitual» porque estas categorías describen enfoques funcionales y pueden coexistir en una misma plataforma.',
  1384: 'La respuesta B es correcta: Coursera ofrece cursos masivos abiertos en línea. Se reformula el enunciado para distinguir un proveedor/plataforma de MOOC de Moodle y Blackboard, que son principalmente sistemas de gestión del aprendizaje, y Canva, que es una herramienta de diseño; «soporte de un MOOC» era demasiado impreciso.',
  1385: 'La opción B expresa uno de los principios de INSPIRE: la información geográfica necesaria para la gobernanza debe ser fácilmente y transparentemente accesible. Se precisa que esto no significa acceso irrestricto o gratuito para todos los conjuntos: la Directiva prevé condiciones y excepciones. También se rechaza la afirmación absoluta de que los datos deban mantenerse siempre en el nivel territorial más próximo; el principio europeo dice que deben mantenerse donde puedan gestionarse con mayor eficacia.'
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
console.log('Cotejo de academia añadido a las cinco preguntas del lote 213.');
