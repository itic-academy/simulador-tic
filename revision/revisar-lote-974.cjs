const aplicar = require('./aplicar-lote.cjs');
const path = require('node:path');
const fs = require('node:fs');
const ref = (url, referencia) => ({url, referencia});
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academyHardware = 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk';
const academyOS = 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk';
const academySecurity = 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const records = [
  [5191, ['52'], ['II-1'], ['SPEC CPU2006', 'benchmark de CPU', 'Open Systems Group', 'SPEC', 'benchmark retirado'], [
    ref('https://spec.org/cpu2006/press/release/', 'SPEC, nota de lanzamiento de CPU2006 (24-08-2006): declara expresamente que el benchmark fue desarrollado por Open Systems Group (OSG).'),
    ref('https://www.spec.org/osg/cpu2006/', 'SPEC, ficha oficial CPU2006: identifica la suite como retirada desde el 09-01-2018 y describe su reemplazo por CPU2017.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 52: sistemas de altas prestaciones, Grid Computing y mainframe; encaje general del benchmark de rendimiento, no una mención específica a CPU2006.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.1: tecnologías actuales de ordenadores y arquitecturas escalables y de altas prestaciones; encaje general, no una mención específica a CPU2006.'),
    ref(academyHardware, 'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1: cotejo con altas prestaciones y evaluación de rendimiento; el material no trata SPEC CPU2006 por nombre.')
  ], null, 'SPEC CPU2006 fue desarrollado por SPEC Open Systems Group (OSG), como confirma el anuncio oficial de lanzamiento. La respuesta C es correcta, pero el conjunto CPU2006 está retirado desde el 9 de enero de 2018; se conserva como dato histórico y no como benchmark vigente. El cotejo de Academy se limita al contenido general de altas prestaciones, sin atribuirle una cobertura específica de CPU2006.', 'historica'],
  [5192, ['56'], ['IV-5'], ['RAID 3', 'striping a nivel de byte', 'paridad dedicada', 'almacenamiento'], [
    ref('https://www.redbooks.ibm.com/redbooks/pdfs/sg247071.pdf', 'IBM Redbooks, Introduction to Storage Area Networks, descripción de RAID 3: datos distribuidos secuencialmente a nivel de byte y un disco dedicado a paridad.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 56: sistemas de almacenamiento para sistemas grandes y departamentales, multimedia, virtualización y copias de seguridad.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.5: arquitectura, tipos, componentes, protocolos, gestión y administración del almacenamiento de datos.'),
    ref(academyHardware, 'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1: sección 8 dedicada a RAID y virtualización del almacenamiento.')
  ], null, 'RAID 3 distribuye los datos a nivel de byte y reserva un disco para la paridad. No debe confundirse con RAID 4, que distribuye bloques, ni con RAID 1, que refleja datos. Aunque hoy sea poco común, esa definición técnica sigue siendo válida; la opción correcta es A.', 'vigente'],
  [5193, ['56'], ['IV-3', 'IV-5'], ['protección continua de datos', 'CDP', 'replicación', 'corrupción de datos', 'copias de seguridad', 'recuperación'], [
    ref('https://learn.microsoft.com/azure/reliability/concept-redundancy-replication-backup', 'Microsoft Learn, «Redundancy, replication, and backup»: explica que la replicación sincroniza cambios y puede propagar una eliminación a todas las réplicas, y que la replicación no protege por sí sola frente a pérdida o corrupción; distingue la recuperación desde copias.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 56: almacenamiento y copias de seguridad.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.3: mantenimiento, incidencias, procedimientos de backup y recuperación; tema IV.5: almacenamiento de datos.'),
    ref(academyHardware, 'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1: apartados de alta disponibilidad, clustering y replicación síncrona/asíncrona.'),
    ref(academySecurity, 'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», versión 2026.1: apartado de copias trata CDP, instantáneas, replicación y recuperación frente a borrado o ransomware; cotejo temático.')
  ], null, 'Se delimita la pregunta a una solución que solo replica el estado y no conserva versiones históricas ni copias independientes, para no confundir la replicación con CDP que mantiene un diario recuperable. La replicación puede transmitir también una modificación errónea o una eliminación lógica: por sí sola no garantiza un estado limpio al que volver. La opción D expresa esa limitación; la retención/versionado y las copias independientes cubren otros objetivos de recuperación.', 'corregida'],
  [5194, ['62'], ['II-2'], ['sistemas operativos móviles', 'Android', 'iOS', 'cuota de uso web', 'StatCounter', 'dato fechado'], [
    ref('https://gs.statcounter.com/os-market-share/mobile/worldwide', 'StatCounter Global Stats, cuota mundial de sistemas operativos móviles, octubre de 2026: Android 72,36 % e iOS 27,61 % de las páginas vistas desde móviles; métrica de uso web, no recuento de dispositivos vendidos o instalados.'),
    ref('https://gs.statcounter.com/faq#methodology', 'StatCounter Global Stats, metodología: estimaciones basadas en páginas vistas registradas en los sitios de su red.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 62: OS X, iOS, Android, z/OS y sistemas operativos para dispositivos móviles.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.2: fundamentos y características de sistemas operativos, incluidos los de dispositivos móviles.'),
    ref(academyOS, 'ITIC Academy, bloque 27 «Sistemas operativos», actualización 2026: cotejo directo con A1 temas 59–62 y el tema A2 de sistemas operativos; incluye Android e iOS.')
  ], null, 'Se elimina «mayor cuota mundial» sin fecha ni métrica. En la serie de StatCounter para octubre de 2026, Android representa el 72,36 % del uso web medido en móviles frente al 27,61 % de iOS; por tanto la clave es Android. Es una cuota de páginas vistas, no de ventas ni de parque instalado, y el resultado debe leerse con el periodo y la metodología citados.', 'historica'],
  [5195, ['56'], [], ['GIF', 'Graphics Interchange Format', 'formato de imagen', 'CompuServe', 'LZW', 'patentes expiradas'], [
    ref('https://www.w3.org/Graphics/GIF/spec-gif89a.txt', 'Especificación GIF89a de CompuServe, alojada por W3C: el título desarrolla GIF como Graphics Interchange Format.'),
    ref('https://learn.microsoft.com/en-us/windows/win32/wic/gif-format-overview', 'Microsoft Learn, identidad del códec GIF: nombre formal «Graphics Interchange Format 89a» y extensión .gif.'),
    ref('https://cdn.nationalarchives.gov.uk/documents/information-management/graphic-file-formats.pdf', 'The National Archives (Reino Unido), Digital Preservation Guidance Note 4: fecha la expiración de la patente estadounidense LZW en junio de 2003 y la británica en junio de 2004.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 56: incluye dispositivos para el tratamiento de información multimedia; encaje curricular general del formato gráfico. El programa no menciona GIF por nombre.'),
    ref(academyHardware, 'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1: cobertura general de dispositivos para tratamiento multimedia; el material no contiene una explicación específica del formato GIF.')
  ], null, 'GIF significa Graphics Interchange Format, no «Graphic Interleaved Format». La opción original que señalaba la compresión LZW patentada refleja una controversia histórica: las patentes de LZW expiraron hace más de dos décadas en los principales territorios citados. Se transforma en una pregunta inequívoca sobre el nombre del formato; la respuesta correcta pasa a ser A. El temario oficial A1 aborda dispositivos multimedia, pero no menciona GIF por nombre y no se fuerza una etiqueta A2.', 'corregida']
];
const edits = {
  5191: {texto: 'Históricamente, ¿qué grupo de SPEC desarrolló el benchmark CPU2006?', comentarios: 'SPEC CPU2006 fue desarrollado por SPEC Open Systems Group (OSG), como confirma el anuncio oficial de lanzamiento. La respuesta C es correcta, pero el conjunto CPU2006 está retirado desde el 9 de enero de 2018; se conserva como dato histórico y no como benchmark vigente.'},
  5193: {texto: 'En una solución de replicación continua que solo replica el estado y no conserva versiones históricas ni copias independientes, ¿qué limitación puede darse?', opciones: ['Siempre permite recuperar de forma inmediata cualquier versión anterior, aunque no se conserven puntos de recuperación.', 'Siempre consume más almacenamiento que cualquier esquema de copias periódicas.', 'La replicación asíncrona equivale a una copia discreta y conserva por sí misma versiones históricas.', 'Una modificación errónea o una eliminación lógica puede propagarse a las réplicas, sin que quede un estado limpio al que volver.'], respuesta_correcta: 3, comentarios: 'Se delimita la pregunta a una solución que solo replica el estado y no conserva versiones históricas ni copias independientes, para no confundir la replicación con CDP que mantiene un diario recuperable. La replicación puede transmitir también una modificación errónea o una eliminación lógica: por sí sola no garantiza un estado limpio al que volver. La opción D expresa esa limitación; la retención/versionado y las copias independientes cubren otros objetivos de recuperación.'},
  5194: {texto: 'Según StatCounter Global Stats, en su serie mundial de uso web desde dispositivos móviles para octubre de 2026, ¿qué sistema operativo registró la mayor cuota?', comentarios: 'Se elimina «mayor cuota mundial» sin fecha ni métrica. En la serie de StatCounter para octubre de 2026, Android representa el 72,36 % del uso web medido en móviles frente al 27,61 % de iOS; por tanto la clave es Android. Es una cuota de páginas vistas, no de ventas ni de parque instalado, y el resultado debe leerse con el periodo y la metodología citados.'},
  5195: {texto: '¿Qué significan las siglas GIF en el nombre del formato de imagen?', opciones: ['Graphics Interchange Format (formato de intercambio de gráficos).', 'Graphic Interleaved Format (formato gráfico entrelazado).', 'Graphics Integrated File (archivo gráfico integrado).', 'Ninguna de las anteriores es correcta.'], respuesta_correcta: 0, comentarios: 'GIF significa Graphics Interchange Format, no «Graphic Interleaved Format». La opción original que señalaba la compresión LZW patentada refleja una controversia histórica: las patentes de LZW expiraron hace más de dos décadas en los principales territorios citados. Se transforma en una pregunta inequívoca sobre el nombre del formato; la respuesta correcta pasa a ser A. El temario oficial A1 aborda dispositivos multimedia, pero no menciona GIF por nombre y no se fuerza una etiqueta A2.'}
};
const logPath = path.join(__dirname, 'cambios-lote-974.json');
if (!fs.existsSync(logPath)) aplicar({numero: '974', fecha: '2026-11-12', records, edits});
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5191: ['ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1: el índice incluye rendimiento y tecnologías de altas prestaciones. No trata SPEC CPU2006 por nombre.', 'Cotejo general con A1-52/A2-II.1 (altas prestaciones); el dato específico del grupo desarrollador y la retirada del benchmark se comprueban en las páginas oficiales de SPEC.'],
  5192: ['ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1: sección 8 sobre RAID y almacenamiento.', 'Cotejo A1-56/A2-IV.5; la definición de granularidad y paridad se verifica en la documentación de IBM Redbooks.'],
  5193: ['ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1: replicación síncrona/asíncrona; y bloque 48 «Seguridad en redes y en el nivel de aplicación», versión 2026.1: CDP, copias, instantáneas, replicación y recuperación.', 'Cotejo A1-56/A2-IV.3 e IV.5. Se distingue la retención de puntos históricos propia de ciertas soluciones CDP de la mera propagación del estado en réplicas; la limitación se contrasta con Microsoft Learn.'],
  5194: ['ITIC Academy, bloque 27 «Sistemas operativos», actualización 2026, que incluye Android e iOS y coteja los temas A1 59–62 y sistemas operativos móviles de A2.', 'Cotejo temático A1-62/A2-II.2. La cuota es un dato mensual de páginas vistas de StatCounter (octubre de 2026), no una afirmación atemporal ni una estadística de ventas.'],
  5195: ['ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1: el programa incluye tratamiento de información multimedia, pero el material consultado no explica GIF por nombre.', 'Cotejo general A1-56 por su contexto multimedia; el programa oficial no recoge una etiqueta específica para el formato GIF y no se asigna tema A2 por aproximación. La respuesta y la historia de LZW se contrastan con W3C, Microsoft Learn y The National Archives.']
};
const motive = 'Cotejo curricular del material de ITIC Academy en Drive contra el programa oficial A1/A2 vigente; se registra por separado la cobertura general y la ausencia de cobertura específica cuando corresponde.';
for (const [key, [block, note]] of Object.entries(academy)) {
  const id = Number(key), q = bank.preguntas.find(x => x.id === id), entry = log.cambios.find(x => x.id === id);
  if (!q || !entry) throw Error(`Falta ${id}`);
  const before = {bloque_academia: q.clasificacion.bloque_academia, nota: q.clasificacion.nota};
  q.clasificacion.bloque_academia = block;
  q.clasificacion.nota = note;
  const corrections = entry.correcciones_posteriores || [];
  if (!corrections.some(x => x.motivo === motive)) corrections.push({fecha: '2026-11-12', motivo: motive, clasificacion_anterior: before, clasificacion_actualizada: {bloque_academia: block, nota: note}});
  entry.correcciones_posteriores = corrections;
  entry.actualizada = structuredClone(q);
}
const byId = new Map(log.cambios.map(c => [c.id, c]));
let replaced = 0;
const raw = fs.readFileSync(bankPath, 'utf8');
const output = raw.replace(/^    \{[\s\S]*?^    \}/gm, block => {
  const old = JSON.parse(block), change = byId.get(old.id);
  if (!change) return block;
  replaced++;
  return JSON.stringify(change.actualizada, null, 2).split('\n').map(line => `    ${line}`).join('\n');
});
if (replaced !== 5) throw Error(`Se esperaban 5 preguntas, hubo ${replaced}`);
fs.writeFileSync(bankPath, output);
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
