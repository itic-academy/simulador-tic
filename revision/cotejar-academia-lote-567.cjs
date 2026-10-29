const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-567.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const rows = {
  3151:{A1:['A1-58'],A2:['A2-II-6'],url:'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view',note:'ITIC Academy Bloque 28 Arquitectura SOA y requisitos no funcionales, versión 2026 (actualizado 26/09/2026), describe arquitecturas de dos, tres y n capas y que separar responsabilidades puede facilitar escalabilidad/mantenimiento. El contenido técnico advierte también que las llamadas entre tiers añadidos pueden elevar tráfico o latencia; se valida con Azure Architecture Center.'},
  3152:{A1:['A1-59','A1-60','A1-61','A1-62'],A2:['A2-II-2'],url:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view',note:'ITIC Academy Bloque 27 Sistemas Operativos, edición 2026 actualizada (archivo actualizado 01/09/2026), cubre conceptos generales y los sistemas Linux, Microsoft y otros, lo que permite situar WSL en el programa oficial de sistemas operativos. No se encontró en el extracto revisado una cobertura específica de WSL; esa afirmación se valida exclusivamente con Microsoft Learn. También se usa el programa oficial A1-62 para ubicar la historia de macOS.'},
  3153:{A1:['A1-63','A1-64'],A2:['A2-II-5','A2-III-15'],url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view',note:'ITIC Academy Bloque 29 Bases de Datos (2026, actualizado 26/09/2026), cubre SGBD, modelo relacional y NoSQL e incluye Cassandra en los ejemplos/preguntas incorporados. Cotejo con A1-63/64 y A2-II-5; A2-III-15 del programa oficial concreta las bases de datos NoSQL. La terminología histórica column family frente a table en CQL 3 se valida en Apache Cassandra Documentation.'},
  3154:{A1:['A1-64'],A2:['A2-II-5','A2-III-4'],url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view',note:'ITIC Academy Bloque 29 Bases de Datos (2026, actualizado 26/09/2026), aborda el modelo relacional, claves candidatas/superclaves y normalización, y contiene ejemplos de claves. Correspondencia con A1-64, A2-II-5 y A2-III-4. La definición formal de clave candidata como superclave mínima se contrasta con el texto académico de teoría de bases de datos citado en la pregunta.'},
  3155:{A1:['A1-65','A1-68'],A2:['A2-II-3','A2-II-9','A2-III-12'],url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view',note:'ITIC Academy Bloque 30 Tecnologías de Sistemas de Información (2026, actualizado 26/09/2026), incluye desarrollo web en servidor, lenguajes y PHP; se coteja con A1-65/68 y A2-II-3/II-9/III-12. La sintaxis de variables y la función header() se verifican en el manual oficial de PHP.'}
};
const contentNotes = {
  3151:'La ventaja de escalabilidad de n-tier es potencial: separar tiers con requisitos distintos puede permitir desplegarlos y escalarlos de forma independiente, pero no la garantiza por sí sola. Más saltos y llamadas entre tiers pueden aumentar tráfico, latencia y sobrecarga; por ello la afirmación universal de que n-tier minimiza el tráfico frente a dos capas es la incorrecta. Se reformula la opción B como posibilidad condicionada y la C como afirmación absoluta falsa.',
  3152:'Se corrige la opción WSL: no se “ejecuta un sistema de archivos”; WSL ejecuta distribuciones/entornos Linux y permite usar sus herramientas de línea de comandos. Las aplicaciones GUI integradas requieren WSL 2 con WSLg y una versión de Windows compatible. La opción sobre OS X/macOS es falsa: macOS Sierra se anunció en 2016. Rocky Linux se orienta a compatibilidad con Red Hat Enterprise Linux, no Ubuntu; la versión “19.0.4” tampoco identifica una versión de Rocky.',
  3153:'La clave original apuntaba a la terminología histórica column family (familia de columnas), que Cassandra define como similar a una tabla relacional. En CQL 3, la denominación vigente de esa estructura es table. Se explicita esta diferencia para que una pregunta actual no induzca a pensar que el esquema moderno requiere usar “familia de columnas”. Cassandra es NoSQL y su modelado no equivale a una relación normalizada con claves foráneas.',
  3154:'Una clave candidata se define como una superclave mínima. Por esa minimalidad, al retirar cualquiera de sus atributos el subconjunto deja de ser superclave. El conjunto total de atributos de una relación es una superclave, pero solo sería clave candidata cuando fuera mínimo; una relación bajo el modelo de conjuntos no puede carecer de superclaves, pues el conjunto de todos sus atributos identifica cada tupla. Se conserva como correcta la opción C y se precisan los distractores.',
  3155:'En PHP, las variables se escriben con el prefijo $, no con #. Tras el signo dólar, el nombre comienza por una letra o guion bajo (también admite bytes no ASCII según las reglas documentadas). La función header() envía cabeceras HTTP sin procesar; debe llamarse antes de emitir salida salvo que se controle con buffering. La opción C es válida y la B es la afirmación incorrecta.'
};
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), row = rows[c.id];
  assert.ok(q && row && q.revision, `Pregunta ${c.id} o clasificación ausente`);
  for (const id of [...row.A1, ...row.A2]) assert.ok(official.has(id), `Tema oficial inexistente: ${id}`);
  const academy = `${contentNotes[c.id]} A1 ${row.A1.join('/')} y A2 ${row.A2.join('/')}. Cotejo curricular: ${row.note} ${row.url} Correspondencias contrastadas con revision/temario-oficial.json y los anexos oficiales de las convocatorias GSI A1/A2 2025 (BOE-A-2025-25938 y BOE-A-2025-26262). ITIC Academy es referencia curricular; las afirmaciones técnicas se validan en fuentes primarias.`;
  q.clasificacion = {A1:row.A1,A2:row.A2,bloque_academia:academy,estado:'revisada',nota:`${q.revision.estado}. ${academy}`};
  q.revision.observaciones = `${contentNotes[c.id]} A1 ${row.A1.join('/')} y A2 ${row.A2.join('/')}. Cotejo curricular: ${row.note} ${row.url} Correspondencias contrastadas con revision/temario-oficial.json y los anexos oficiales de las convocatorias GSI A1/A2 2025 (BOE-A-2025-25938 y BOE-A-2025-26262). ITIC Academy es referencia curricular; las afirmaciones técnicas se validan en fuentes primarias.`;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Clasificación y cotejo curricular añadidos para el lote 567.');
