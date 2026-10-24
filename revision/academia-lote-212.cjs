const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-212.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const mapping = {
  1376: ['https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view', 'Bloque 29, Bases de datos, SQL y modelado de datos, versión 2026.1 (31-08-2026), optimización de consultas y planes de ejecución.', 'A1-64; A2-II-5/A2-IV-2'],
  1377: ['https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view', 'Bloque 30, Tecnologías de sistemas de información, versión 2026.1 (31-08-2026), tema de desarrollo web front-end y frameworks.', 'A1-65; A2-III-12'],
  1378: ['https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view', 'Bloque 30, Tecnologías de sistemas de información, versión 2026.1 (31-08-2026), entorno Java y programación orientada a objetos.', 'A1-67; A2-III-9'],
  1379: ['https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view', 'Bloque 18, Protección jurídica, licencias y control del software, versión 2026.1 (26-08-2026), GPL y derechos de autor.', 'A1-43; A2-II-14'],
  1380: ['https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view', 'Bloque 32, Inteligencia artificial y ciencia de datos, versión 2026, minería de datos y familias de modelos.', 'A1-71; A2-II-15']
};
const notes = {
  1376: 'La formulación original no delimitaba qué significaba «elegir una sentencia» y los distractores sobre índices, CPU y paralelismo también pueden influir en el plan. Se cambia el supuesto: al comparar formas de ejecutar una consulta, debe evaluarse el plan que selecciona el optimizador y su coste/rendimiento con datos representativos.',
  1377: 'Angular y Vue son frameworks web; React es una biblioteca para interfaces y puede emplearse en SPA. Fuentes secundarias describen Bideo.js como biblioteca de vídeo HTML5 de fondo, pero el repositorio atribuido al autor devuelve 404 y no se pudo consultar la web primaria del proyecto. La opción D parece ser la respuesta, pero no se certifica hasta localizar documentación primaria accesible.',
  1378: 'La respuesta interfaces es correcta como mecanismo de herencia múltiple de tipos: una clase puede implementar varias interfaces y una interfaz extender varias. No equivale a permitir que una clase herede el estado de varias clases. Se reformula el enunciado para acotar esta distinción y no presentar interfaces como herencia múltiple de clases.',
  1379: 'La opción D es falsa: GPLv3 es una licencia de copyright (y de derechos afines) que concede permisos con condiciones. La GPL autoriza ejecutar, copiar, modificar y redistribuir el programa; las opciones se reescriben para que la redistribución quede expresamente sujeta a sus términos y no haya una segunda respuesta falsa por afirmar un derecho de copia irrestricto.',
  1380: 'Se conserva D como respuesta: redes bayesianas, árboles de decisión y redes neuronales son técnicas/modelos reconocidos de minería de datos; «Look and Find» no es una familia de algoritmos reconocida en la documentación consultada. El término se mantiene como distractor literal, sin atribuirle una definición técnica.'
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
  if (c.id === 1377) {
    q.revision.estado = 'pendiente_fuente';
    q.texto = '¿Cuál de los siguientes no es un framework ni una biblioteca de interfaces utilizada para crear aplicaciones web de página única (SPA)?';
    const primary = q.revision.fuentes.find(f => f.url === 'https://github.com/rishabhp/bideo.js');
    if (primary) primary.referencia = 'Repositorio atribuido al autor de Bideo.js; devolvió 404 al comprobarlo el 24-10-2026, por lo que no se usa para certificar su función.';
    q.revision.fuentes.push({ url: 'https://npm.io/package/bideo.js', referencia: 'Ficha secundaria del paquete bideo.js: lo describe como plugin para vídeo HTML5 de fondo; indicio no primario, insuficiente para certificar la respuesta.' });
  }
  q.revision.fuentes.push({ url, referencia: `ITIC Academy, ${block} Correspondencia: ${topics}.` });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de academia añadido a las cinco preguntas del lote 212.');
