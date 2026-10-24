const apply = require('./aplicar-lote.cjs');

const sources = {
  jdbc: {
    url: 'https://docs.oracle.com/en/java/javase/24/docs/api/java.sql/java/sql/package-summary.html',
    referencia: 'Oracle Java SE 24 API, paquete java.sql: describe JDBC como la API de Java para acceder y procesar datos en fuentes de datos mediante drivers; incluye interfaces para sentencias, conexiones y resultados.'
  },
  dnie: {
    url: 'https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_085',
    referencia: 'Dirección General de la Policía, portal DNI electrónico, PKI, Algoritmia y Claves: los certificados de ciudadano de autenticación y firma utilizan claves RSA de 2048 bits; la infraestructura distingue certificado de autenticación y certificado de firma.'
  },
  dnieChip: {
    url: 'https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_240',
    referencia: 'Dirección General de la Policía, Características del chip DNIe: identifica claves RSA públicas y privadas distintas para autenticación y para firma/no repudio, además de los certificados correspondientes.'
  },
  javafx: {
    url: 'https://openjfx.io/',
    referencia: 'OpenJFX, proyecto oficial de JavaFX: define JavaFX como plataforma cliente Java y toolkit para crear aplicaciones cliente enriquecidas; la documentación actual lo orienta a escritorio, móvil y sistemas embebidos, por lo que no se debe presentar como plug-in web vigente.'
  },
  timeshare: {
    url: 'https://pages.cs.wisc.edu/~solomon/cs537-old/last/intro.html',
    referencia: 'University of Wisconsin–Madison, CS 537, introducción a sistemas operativos: explica time-sharing como ejecución de varios trabajos interactivos con cambios rápidos de CPU para que cada usuario perciba uso interactivo propio.'
  },
  quantum: {
    url: 'https://student.cs.uwaterloo.ca/~cs350/W25/notes/scheduling.pdf',
    referencia: 'University of Waterloo, CS 350, Scheduling: round-robin preempta el proceso al agotar su time slice o quantum y lo devuelve al final de la cola de listos.'
  },
  flops: {
    url: 'https://www.top500.org/resources/frequently-asked-questions/',
    referencia: 'TOP500 FAQ: FLOPS mide una tasa de ejecución de operaciones en coma flotante por segundo; MFLOP/s, GFLOP/s y TFLOP/s expresan múltiplos de esa tasa.'
  }
};

const academy = {
  dev: {
    url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 30, Tecnologías de sistemas de la información, versión 2026.1, apartados de plataforma Java y APIs Java; el documento resume JDBC como acceso a bases de datos relacionales desde Java y la conexión a fuentes de datos.'
  },
  security: {
    url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 36, Seguridad, criptografía, identificación y firma, versión 2026.1, A1-79–81 y A2-I-6: DNIe, certificados, claves públicas/privadas e identificación y firma.'
  },
  os: {
    url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 27, Sistemas Operativos, versión 2026.1: clasificación de sistemas por lotes, tiempo compartido e interactivo; planificación round-robin y quantum.'
  },
  hardware: {
    url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 26, Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1: sistemas HPC/supercomputadores, rendimiento y cargas científicas; el dato de FLOP/s se contrasta con TOP500.'
  }
};

const records = [
  [1276, [65,67], ['III-10','III-12'], ['Java','JDBC','Java Database Connectivity','API','SQL','base de datos'], [sources.jdbc], null,
    'JDBC (Java Database Connectivity) es la API de Java para conectarse a fuentes de datos y ejecutar sentencias SQL mediante drivers. No es una interfaz C como CLI/ODBC ni un controlador de planificación. Se conserva la opción correcta y se añade precisión sobre su alcance. Cotejo temático con ITIC Academy, bloque 30, plataforma Java y APIs.', 'vigente'],
  [1277, [81], ['I-6'], ['DNI electrónico','DNIe','RSA','autenticación','firma electrónica','claves'], [sources.dnie,sources.dnieChip], null,
    'Se delimita la afirmación al DNIe documentado por la DGP: la autenticación y la firma del titular se apoyan en dos certificados y pares de claves RSA diferenciados. La denominación histórica “dos pares RSA” describe esas funciones; no se confunden con claves simétricas DES/3DES ni con DSA. Se comprueba la información en la documentación vigente de la PKI del DNIe. Cotejo temático con ITIC Academy, bloque 36.', 'vigente'],
  [1278, [67], ['III-12'], ['Java','JavaFX','RIA','rich client','aplicaciones cliente enriquecidas'], [sources.javafx], null,
    'Se concreta el contexto: JavaFX es la plataforma Java asociada a la creación de aplicaciones cliente enriquecidas. La pregunta no implica que hoy se desplieguen como applets o que JavaFX mantenga un plug-in de navegador; OpenJFX describe actualmente aplicaciones de escritorio, móviles y embebidas. El original resulta válido en el sentido de rich client/RIA, pero su formulación amplia podía sugerir un modelo web obsoleto.', 'corregida'],
  [1279, [59], ['IV-1'], ['sistemas operativos','tiempo compartido','quantum','reparto de CPU','interactividad','round robin'], [sources.timeshare,sources.quantum], null,
    'La opción tiempo compartido es correcta: el sistema asigna intervalos breves de CPU a usuarios o procesos interactivos y alterna entre ellos para ofrecer respuesta compartida. El quantum es propio de políticas como round-robin, pero no basta por sí solo para definir cualquier sistema de tiempo compartido. Cotejo temático con ITIC Academy, bloque 27.', 'vigente'],
  [1280, [52], ['II-1'], ['hardware','HPC','FLOPS','FLOP/s','coma flotante','rendimiento'], [sources.flops], null,
    'Se corrige la ambigüedad del original: “FLOPs” puede referirse al número de operaciones, mientras que FLOP/s (FLOPS) expresa una tasa. La nueva pregunta pide explícitamente la tasa de operaciones de coma flotante por segundo; se separa de MIPS, frecuencia de reloj y ciclos por instrucción. Cotejo temático con ITIC Academy, bloque 26, hardware de altas prestaciones.', 'corregida']
];

apply({ numero: '192', fecha: '2026-10-24', records, edits: {
  1278: { texto: '¿Qué plataforma Java se asocia a la creación de aplicaciones cliente enriquecidas (rich client applications), concepto relacionado históricamente con las RIA?', opciones: ['GPT (GUID Partition Table).', 'EFI (Extensible Firmware Interface).', 'JavaFX.', 'aptX.'], respuesta_correcta: 2 },
  1280: { texto: 'En computación de altas prestaciones, ¿qué unidad expresa una tasa de operaciones en coma flotante ejecutadas por segundo?', opciones: ['FLOP/s (floating-point operations per second).', 'MIPS (millions of instructions per second).', 'GHz, ciclos de reloj por segundo.', 'CPI, ciclos de reloj por instrucción.'], respuesta_correcta: 0 }
}});

const fs = require('node:fs');
const path = require('node:path');
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-192.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const notes = {
  1276: { academy: 'dev', block: 'Bloque 30, Tecnologías de sistemas de la información, versión 2026.1, plataforma Java y APIs Java (JDBC).', topics: 'A1-65/A1-67/A2-III-10/III-12' },
  1277: { academy: 'security', block: 'Bloque 36, Seguridad, criptografía, identificación y firma, versión 2026.1, DNIe y certificados.', topics: 'A1-81/A2-I-6' },
  1278: { academy: 'dev', block: 'Bloque 30, versión 2026.1, plataforma Java; cotejo temático, con el alcance actual de JavaFX contrastado en OpenJFX.', topics: 'A1-67/A2-III-12' },
  1279: { academy: 'os', block: 'Bloque 27, Sistemas Operativos, versión 2026.1, clasificación por tiempo compartido e interactivo; planificación round-robin y quantum.', topics: 'A1-59/A2-IV-1' },
  1280: { academy: 'hardware', block: 'Bloque 26, Hardware y sistemas de altas prestaciones, versión 2026.1, rendimiento de HPC y supercomputadores.', topics: 'A1-52/A2-II-1' }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const meta = notes[q.id];
  const source = academy[meta.academy];
  q.clasificacion.bloque_academia = meta.block;
  q.clasificacion.nota = `Cotejo temático con ITIC Academy: ${meta.block} Correspondencia orientativa: ${meta.topics}.`;
  q.revision.fuentes.push({ url: source.url, referencia: source.referencia });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo temático de academia y registro actualizados para el lote 192.');
