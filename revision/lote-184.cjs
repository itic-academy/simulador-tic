const apply = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');

const academy = {
  hardware: {
    url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 26, Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1, §§ 1.2, 6.1, 8.1 y 14.1; thin clients, VDI y RAID.'
  },
  os: {
    url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 27, Sistemas operativos, versión 2026.1, §§ 3.3–3.4; memoria virtual y políticas de reemplazo de páginas.'
  },
  bi: {
    url: 'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 12, Directivo TIC y planificación estratégica, versión 2026.2, § 6.2; OLTP/OLAP, almacenes y análisis multidimensional.'
  }
};
const sources = {
  thin: { url: 'https://aws.amazon.com/what-is/thin-client/', referencia: 'AWS, What is a Thin Client?: endpoints con hardware y almacenamiento local mínimos que dependen de recursos centralizados; no se define por la ausencia absoluta de disco.' },
  pagingNru: { url: 'https://os.cs.luc.edu/kernelmm', referencia: 'Loyola University Chicago, Introduction to Operating Systems: Principles and Practice, Virtual Memory; describe NRU y NFU como políticas de reemplazo y explica FIFO/LRU.' },
  pagingLfu: { url: 'https://www.cs.cornell.edu/courses/cs4410/2024sp/schedule/slides/08-vm.pdf', referencia: 'Cornell University, CS 4410, Virtual Memory, diapositivas sobre reemplazo de páginas: FIFO, LRU y LFU entre las políticas estudiadas.' },
  raidCapacity: { url: 'https://www.ibm.com/docs/P9ESS/p9ebj/diskarraycapacities.htm', referencia: 'IBM Documentation, Disk array capacities: RAID 5 usa una unidad menos que el total; si las capacidades difieren, cada unidad cuenta como la menor.' },
  raidConcepts: { url: 'https://www.ibm.com/docs/en/i/7.5.0?topic=concepts-raid-5', referencia: 'IBM Documentation, RAID 5 concepts: la capacidad equivalente a una unidad se dedica lógicamente a paridad, que se distribuye entre los discos; mínimo tres discos.' },
  raidLevels: { url: 'https://www.ibm.com/docs/en/cmofm/10.5.0?topic=protection-overview', referencia: 'IBM Documentation, Planning—Overview: RAID 1 es mirroring, RAID 4 usa disco dedicado de paridad y RAID 5 distribuye la paridad.' },
  olapIbm: { url: 'https://www.ibm.com/docs/en/content-cortex/26.0.0?topic=reports-online-analytical-processing-olap-overview', referencia: 'IBM Documentation, OLAP overview: estructuras multidimensionales, cubos, dimensiones y jerarquías para acceso analítico rápido.' },
  olapMs: { url: 'https://support.microsoft.com/en-us/excel/overview-of-online-analytical-processing-olap', referencia: 'Microsoft Support, OLAP overview: OLAP se optimiza para consultas e informes, no para procesar transacciones; organiza datos jerárquicamente en cubos.' }
};

const records = [
  [1236, [57, 132], ['II-1'], ['thin client', 'cliente ligero', 'VDI', 'escritorio virtual', 'servidor de aplicaciones'], [sources.thin], null,
    'La definición no debe equiparar thin client con «ordenador sin disco duro»: el rasgo es que el endpoint mantiene recursos locales reducidos y delega principalmente aplicaciones, datos o procesamiento en infraestructura centralizada. Se actualizan enunciado y distractores para conservar una única respuesta válida. AWS documenta recursos y almacenamiento local mínimos y el uso de VDI/servidor.', 'corregida'],
  [1237, [60], ['II-2'], ['sistemas operativos', 'memoria virtual', 'reemplazo de páginas', 'FIFO', 'NRU', 'LRU', 'NFU', 'LFU'], [sources.pagingNru, sources.pagingLfu], null,
    'La lista contiene políticas clásicas de reemplazo de páginas, pero no es correcto afirmar que todo sistema operativo implemente todas ellas. La pregunta se limita a identificar una lista de algoritmos estudiados para memoria virtual; se conserva la opción FIFO, NRU, LRU, NFU y LFU. Las fuentes universitarias documentan NRU/NFU y FIFO/LRU/LFU.', 'corregida'],
  [1238, [56], ['IV-5'], ['RAID 5', 'paridad distribuida', 'capacidad útil', 'almacenamiento'], [sources.raidCapacity, sources.raidConcepts], null,
    'La expresión «N−1» carecía de unidades y no indicaba supuestos. Se especifica un conjunto de n discos de igual capacidad, con n≥3, cada uno de una unidad: RAID 5 ofrece (n−1) unidades útiles antes de formato y metadatos. Si las capacidades no son iguales, IBM indica que se toma la del disco menor. La paridad se distribuye, aunque su capacidad agregada equivale a un disco.', 'corregida'],
  [1239, [56], ['IV-5'], ['RAID 1', 'RAID 4', 'RAID 5', 'mirroring', 'paridad distribuida', 'paridad dedicada'], [sources.raidLevels], null,
    'Se mantiene RAID 1 como clave, pero se sustituyen afirmaciones confusas: RAID 1 refleja datos; RAID 5 distribuye la paridad entre discos; RAID 4 emplea un disco dedicado de paridad. Así queda una única afirmación correcta y se evita describir RAID 5 como si tuviera paridad concentrada.', 'corregida'],
  [1240, [71], ['II-4', 'III-15'], ['OLAP', 'OLTP', 'inteligencia de negocio', 'análisis multidimensional', 'almacén de datos'], [sources.olapIbm, sources.olapMs], null,
    'La clave original era errónea: las jerarquías son propias de las dimensiones OLAP, por lo que las cuatro opciones originales podían ser verdaderas. Se sustituye la opción incorrecta por la característica de OLTP: procesamiento prioritario de transacciones cortas de inserción/actualización, en vez de análisis. IBM y Microsoft describen OLAP mediante cubos, jerarquías y consultas analíticas.', 'corregida']
];
const edits = {
  1236: { texto: '¿Qué caracteriza normalmente a un thin client o cliente ligero?', opciones: ['Un endpoint con recursos locales reducidos que depende principalmente de un servidor o servicio centralizado para las aplicaciones y el procesamiento.', 'Un CD arrancable que contiene una colección de programas GNU/Linux.', 'Una plataforma de aprendizaje electrónico desarrollada por la Universidad de Lovaina.', 'Un conjunto de utilidades para celebrar votaciones electrónicas.'], respuesta_correcta: 0 },
  1237: { texto: '¿Cuál de las siguientes listas está formada por políticas clásicas de reemplazo de páginas estudiadas en sistemas de memoria virtual, sin que ello implique que toda implementación las incluya?', opciones: ['FIFO, NRU, LRU, NFU y LFU.', 'FIFO, NRU, ML, NLP y LFU.', 'FIFO, NRU, LRU, Yast y YAFFS.', 'FIFO, SCM, SDK, NFU y LFU.'], respuesta_correcta: 0 },
  1238: { texto: 'Un conjunto RAID 5 contiene n discos de igual capacidad, con n ≥ 3. Si cada disco aporta una unidad de capacidad, ¿cuál es la capacidad útil teórica antes de formato y metadatos?', opciones: ['n unidades.', 'n/2 unidades.', '(n−1) unidades.', '(n−2) unidades.'], respuesta_correcta: 2 },
  1239: { texto: '¿Cuál de las siguientes afirmaciones sobre niveles RAID es correcta?', opciones: ['RAID 1 mantiene datos reflejados en los miembros del conjunto de espejo.', 'RAID 5 concentra toda la paridad en un único disco dedicado.', 'RAID 4 distribuye la paridad entre todos los discos participantes.', 'RAID 0 mantiene una copia redundante de cada bloque.'], respuesta_correcta: 0 },
  1240: { texto: '¿Cuál de las siguientes características no corresponde a OLAP (procesamiento analítico en línea)?', opciones: ['Facilita respuestas rápidas a consultas analíticas complejas e iterativas.', 'Utiliza estructuras de datos multidimensionales.', 'Organiza dimensiones mediante jerarquías para analizar distintos niveles de detalle.', 'Está diseñado principalmente para procesar grandes volúmenes de transacciones breves de inserción y actualización, en vez de consultas analíticas.'], respuesta_correcta: 3 }
};

apply({ numero: '184', fecha: '2026-10-24', records, edits });

// Keep academy coverage explicit and make the committed batch reproducible.
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-184.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academyNotes = {
  1236: { block: '26 · Hardware, servidores y almacenamiento, versión 2026.1, §§ 1.2, 6.1 y 14.1 (thin clients, endpoints y VDI).', topics: 'A1-57/A1-132/A2-II-1' },
  1237: { block: '27 · Sistemas operativos, versión 2026.1, §§ 3.3–3.4 (memoria virtual y políticas de reemplazo).', topics: 'A1-60/A2-II-2' },
  1238: { block: '26 · Hardware, servidores y almacenamiento, versión 2026.1, § 8.1 (RAID 5).', topics: 'A1-56/A2-IV-5' },
  1239: { block: '26 · Hardware, servidores y almacenamiento, versión 2026.1, § 8.1 (RAID 1 y RAID 5); RAID 4 se completa con IBM Documentation.', topics: 'A1-56/A2-IV-5' },
  1240: { block: '12 · Directivo TIC y planificación estratégica, versión 2026.2, § 6.2 (inteligencia de negocio, OLTP y OLAP).', topics: 'A1-71/A2-II-4/III-15' }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const meta = academyNotes[q.id];
  const blockName = meta.block.split(' · ')[0];
  const academyUrl = academy[blockName === '26' ? 'hardware' : blockName === '27' ? 'os' : 'bi'].url;
  q.clasificacion.bloque_academia = meta.block;
  q.clasificacion.nota = `Cotejo temático con ITIC Academy: ${meta.block}`;
  const academyComment = ` Cotejo temático con ITIC Academy: bloque ${meta.block} Correspondencia orientativa con el programa oficial: ${meta.topics}.`;
  q.comentarios += academyComment;
  q.revision.observaciones += academyComment;
  q.revision.fuentes.push({ url: academyUrl, referencia: `ITIC Academy, ${meta.block} Correspondencia temática con ${meta.topics}.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + String.fromCharCode(10));
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + String.fromCharCode(10));
console.log('Cotejo de academia y registro de resultados añadidos al lote 184.');
