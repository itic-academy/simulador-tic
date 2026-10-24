const apply = require('./aplicar-lote.cjs');

const sources = {
  blade: {
    url: 'https://www.hpe.com/us/en/what-is/blade-servers.html',
    referencia: 'HPE, What are Blade Servers? (2025): describe módulos de servidor con CPU, memoria y almacenamiento local opcional en un chasis que comparte alimentación, refrigeración, red y gestión.'
  },
  smb: {
    url: 'https://learn.microsoft.com/en-us/windows-server/storage/file-server/file-server-smb-overview',
    referencia: 'Microsoft Learn, What is SMB File Sharing for Windows and Windows Server?: SMB es un protocolo de compartición de archivos de red; sus roles cliente/servidor proporcionan acceso a recursos remotos, incluidos recursos compartidos de archivos e impresoras.'
  },
  smbPrinter: {
    url: 'https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/direct-hosting-of-smb-over-tcpip',
    referencia: 'Microsoft Learn, Direct host SMB over TCP/IP: Windows usa SMB para tráfico de compartición de archivos e impresoras; distingue este servicio de DNS y de proxy inverso.'
  },
  overlays: {
    url: 'https://www1.cs.columbia.edu/~nieh/teaching/w4118_f99/lectures/mod8.1.pdf',
    referencia: 'Columbia University, Operating Systems, Module 8: Overlays: divide el programa en partes y mantiene en memoria solo las necesarias; overlays permite ejecutar programas mayores que la memoria disponible y exige diseñar explícitamente la estructura.'
  },
  overlaysImperial: {
    url: 'https://citeseerx.ist.psu.edu/document?doi=3b2a84771955f0f4bb48d40ec5da6e95c3ac0a8e&repid=rep1&type=pdf',
    referencia: 'Imperial College London, Operating Systems Concepts, capítulo 8, Overlays: el programador organiza la estructura de overlays y el sistema proporciona la carga en el área de overlay.'
  },
  x500: {
    url: 'https://www.itu.int/rec/T-REC-X.500/es',
    referencia: 'ITU-T X.500 (10/2019), estado en vigor con enmienda 1 (10/2024): recomendación de visión general de conceptos, modelos y servicios del Directorio; la ficha confirma vigencia y distingue esta norma de protocolos individuales.'
  },
  x500Models: {
    url: 'https://www.itu.int/rec/T-REC-X.501/en',
    referencia: 'ITU-T X.501 (10/2019), en vigor: especifica los modelos del Directorio que sirven de marco a la familia X.500/ISO/IEC 9594.'
  },
  x500Distributed: {
    url: 'https://www.itu.int/rec/T-REC-X.518/en',
    referencia: 'ITU-T X.518, The Directory: Procedures for distributed operation: define procedimientos para la operación distribuida del Directorio.'
  },
  x500Protocols: {
    url: 'https://www.itu.int/rec/T-REC-X.519/en',
    referencia: 'ITU-T X.519, The Directory: Protocol specifications: especifica protocolos del Directorio; demuestra que X.500 es el marco/recomendación de conjunto y no el nombre de un único protocolo.'
  },
  dma: {
    url: 'https://archive.nptel.ac.in/content/storage2/courses/106103068/module06_io/lect_04_dma/slides/slide2.htm',
    referencia: 'NPTEL / IIT Guwahati, Computer Organization and Architecture, módulo DMA: en cycle stealing el controlador DMA toma un ciclo de bus/memoria del procesador para realizar una transferencia.'
  }
};

const academy = {
  servers: {
    url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 26, Hardware, servidores, CPD y almacenamiento, versión 2026.1: cotejo temático sobre formatos modulares de servidor y recursos compartidos de infraestructura.'
  },
  os: {
    url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 27 «Sistemas Operativos», versión 2026 actualizada: conceptos y administración de memoria/sistemas operativos; cotejo temático, con el funcionamiento concreto de overlays verificado en materiales universitarios.'
  },
  directory: {
    url: 'https://drive.google.com/file/d/1vvfm-lB7oMhP5TP-vHSNIJpg8cfJbLia/view?usp=drivesdk',
    referencia: 'ITIC Academy, tema 121 «Correo Electrónico. Servicios de directorio», versión 2, actualizada el 22-05-2026: marco de servicios de directorio y X.500/LDAP; correspondencia temática con A1-80/A1-122 y A2-IV-9.'
  },
  dma: {
    url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 26, Hardware, servidores, CPD y almacenamiento, versión 2026.1: cotejo contextual de buses, memoria y transferencia de datos; la descripción exacta de cycle stealing se comprueba en NPTEL/IIT Guwahati.'
  }
};

const records = [
  [1261, [53, 57], ['IV-6'], ['servidor blade', 'módulo de servidor', 'chasis', 'alimentación compartida', 'refrigeración', 'gestión'], [sources.blade], null,
    'La clave se mantiene: servidores blade. Cada blade es un módulo de servidor insertable en un chasis, que puede compartir alimentación, refrigeración, conectividad y gestión; no equivale por ello a un clúster, que es una agrupación lógica de nodos. El almacenamiento puede ser local o externo, así que no se afirma que todos los blades lo integren de la misma forma. Cotejo temático con ITIC Academy, bloque 26, servidores y CPD; la configuración descrita se contrasta con HPE.', 'vigente'],
  [1262, [61, 118], ['II-2', 'IV-8', 'IV-9'], ['SMB', 'Windows', 'compartición de archivos', 'impresoras', 'protocolo de red'], [sources.smb, sources.smbPrinter], null,
    'La respuesta se mantiene y se precisa: SMB es un protocolo de compartición de recursos de red; en Windows se usa para compartir/acceder a archivos e impresoras. No es un servidor proxy ni un sistema DNS. Se evita describir SMB como exclusivo de Windows, ya que el protocolo también se implementa en otros sistemas. Cotejo temático con ITIC Academy, bloque 27, sistemas Microsoft y servicios de red; la función concreta se comprueba en Microsoft Learn.', 'vigente'],
  [1263, [59], ['II-2', 'IV-1'], ['overlays', 'superposiciones', 'gestión de memoria', 'programa mayor que memoria', 'carga bajo demanda'], [sources.overlays, sources.overlaysImperial], null,
    'El original tenía al menos dos respuestas falsas: el programador sí debe diseñar las partes que pueden superponerse y el mecanismo no elimina toda gestión de carga. Se reemplaza por una definición positiva y única: overlays divide un programa en partes mutuamente excluyentes que se cargan en una región de memoria cuando se necesitan, de modo que el programa puede superar la memoria disponible. La estructura debe diseñarse explícitamente; no se requiere que los fragmentos tengan tamaños iguales ni que la paginación haya sido sustituida por overlays. Cotejo temático con ITIC Academy, bloque 27, sistemas operativos y memoria; detalle cotejado con las notas universitarias de Columbia e Imperial College.', 'corregida'],
  [1264, [80], ['IV-9'], ['X.500', 'ITU-T', 'ISO/IEC 9594', 'servicios de directorio', 'directorio distribuido', 'DAP', 'DSP'], [sources.x500, sources.x500Models, sources.x500Distributed, sources.x500Protocols], null,
    'Se corrige la categoría: X.500 no es un único protocolo ni una tecnología propietaria de Novell, y su adopción no estaba pendiente. Es una recomendación ITU-T y familia de normas ISO/IEC 9594 que define el marco de conceptos, modelos y servicios de directorio; la familia contempla operación distribuida. Los protocolos concretos se especifican en recomendaciones como X.519, mientras X.518 trata la operación distribuida. La edición X.500 (10/2019) y su enmienda 1 (10/2024) figuran en vigor en ITU. Cotejo con ITIC Academy, tema 121, servicios de directorio, y su correspondencia con administración de usuarios/redes locales; se diferencia expresamente la recomendación de sus protocolos.', 'corregida'],
  [1265, [], ['II-1'], ['DMA', 'acceso directo a memoria', 'cycle stealing', 'robo de ciclo', 'bus'], [sources.dma], null,
    'La respuesta se mantiene: cycle stealing o robo de ciclo es un modo de DMA en el que el controlador toma ciclos de bus/memoria que de otro modo usaría la CPU para transferir datos. No es memoria segmentada ni acceso aleatorio; el método no implica que la CPU quede desconectada durante toda la transferencia, a diferencia de modos de ráfaga. Cotejo temático con ITIC Academy, bloque 26, hardware y buses; el significado exacto del término se contrasta con el material del curso NPTEL de IIT Guwahati.', 'vigente']
];

apply({ numero: '189', fecha: '2026-10-24', records, edits: {
  1263: { texto: '¿Qué caracteriza al mecanismo de overlays (superposiciones) para ejecutar un programa que, en conjunto, supera la memoria principal disponible?', opciones: ['El programa se divide en partes que no necesitan estar residentes simultáneamente; cada parte se carga en una zona común cuando se necesita.', 'El sistema operativo mantiene necesariamente todo el programa en memoria y solo intercambia sus datos.', 'Todas las partes deben tener exactamente el mismo tamaño y cargarse de forma simultánea.', 'El mecanismo sustituyó universalmente a la paginación durante la década de 1960.'], respuesta_correcta: 0 },
  1264: { texto: '¿Qué describe correctamente la Recomendación ITU-T X.500 vigente sobre servicios de directorio?', opciones: ['Es el marco de recomendaciones que define conceptos, modelos y servicios del Directorio; las recomendaciones de la familia especifican protocolos y operación distribuida.', 'Es un protocolo propietario de Novell que todavía no se ha incorporado a la normalización internacional.', 'Es un protocolo desarrollado por ANSI para redes militares estadounidenses.', 'Es un estándar de facto pendiente de aprobación por ISO/IEC.'], respuesta_correcta: 0 }
}});

// Incorpora al banco y al registro la comprobación concreta del temario de academia.
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-189.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const notes = {
  1261: { academy: 'servers', block: '26 · Hardware, servidores, CPD y almacenamiento, versión 2026.1, servidores modulares y chasis.', topics: 'A1-53/A1-57/A2-IV-6' },
  1262: { academy: 'os', block: '27 · Sistemas Operativos, versión 2026 actualizada, sistemas Microsoft y servicios de red.', topics: 'A1-61/A1-118/A2-II-2/IV-8/IV-9' },
  1263: { academy: 'os', block: '27 · Sistemas Operativos, versión 2026 actualizada, gestión de memoria; overlays cotejados con fuentes universitarias.', topics: 'A1-59/A2-II-2/IV-1' },
  1264: { academy: 'directory', block: 'tema 121 · Correo Electrónico. Servicios de directorio, versión 2, 22-05-2026.', topics: 'A1-80/A1-122/A2-IV-9' },
  1265: { academy: 'dma', block: '26 · Hardware, servidores, CPD y almacenamiento, versión 2026.1, buses y transferencias; cycle stealing verificado con NPTEL.', topics: 'A2-II-1' }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const meta = notes[q.id];
  const source = academy[meta.academy];
  q.clasificacion.bloque_academia = meta.block;
  q.clasificacion.nota = `Cotejo temático con ITIC Academy: ${meta.block} Correspondencia orientativa: ${meta.topics}.`;
  const comment = ` Cotejo temático con ITIC Academy: ${meta.block} Correspondencia orientativa con el programa oficial: ${meta.topics}.`;
  q.comentarios += comment;
  q.revision.observaciones += comment;
  q.revision.fuentes.push({ url: source.url, referencia: `ITIC Academy, ${meta.block} Correspondencia temática con ${meta.topics}.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de academia y registro de resultados añadidos al lote 189.');
