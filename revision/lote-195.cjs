const apply = require('./aplicar-lote.cjs');

const primary = {
  wsdl11: { url: 'https://www.w3.org/TR/wsdl.html', referencia: 'W3C Note, Web Services Description Language (WSDL) 1.1: define un formato XML para describir servicios de red, sus operaciones, mensajes y protocolos.' },
  wsdl20: { url: 'https://www.w3.org/TR/wsdl20/', referencia: 'W3C Recommendation, Web Services Description Language (WSDL) Version 2.0: lenguaje XML para describir servicios web y cómo acceder a ellos.' },
  java: { url: 'https://docs.oracle.com/en/java/javase/24/gctuning/hotspot-virtual-machine-garbage-collection-tuning-guide.pdf', referencia: 'Oracle, Java SE 24 HotSpot VM Garbage Collection Tuning Guide, sección sobre alcance y recolección: un objeto no alcanzable desde una raíz de GC es elegible para reclamación; la elegibilidad no implica eliminación inmediata.' },
  javaApi: { url: 'https://docs.oracle.com/en/java/javase/26/docs/api/java.base/java/lang/ref/package-summary.html', referencia: 'Oracle Java SE API, java.lang.ref: define los estados de alcanzabilidad y señala que un objeto inalcanzable es elegible para reclamación; no promete un instante concreto de recolección.' },
  activeX: { url: 'https://learn.microsoft.com/en-us/windows/win32/com/activex-controls', referencia: 'Microsoft Learn, ActiveX Controls: ActiveX se basa en COM y sus controles son objetos COM integrables en contenedores; no es una tecnología general de interoperabilidad de componentes en red.' },
  edge: { url: 'https://learn.microsoft.com/en-us/deployedge/microsoft-edge-frequently-asked-questions', referencia: 'Microsoft Learn, Edge FAQ: Microsoft Edge no soporta ActiveX en modo normal; aplicaciones heredadas pueden ejecutarse mediante IE mode, que conserva compatibilidad con tecnologías de IE11.' },
  kernel: { url: 'https://learn.microsoft.com/en-ie/troubleshoot/windows-client/performance/windows-boot-issues-troubleshooting', referencia: 'Microsoft Learn, fases de arranque de Windows: identifica ntoskrnl.exe como Windows NT OS Kernel en la fase del cargador del sistema operativo.' },
  ntos: { url: 'https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/libraries-and-headers', referencia: 'Microsoft Learn, Libraries and Headers: Ntoskrnl.exe contiene implementaciones de rutinas de servicios nativos Nt/Zw de modo kernel; no es correcto definirlo únicamente como una nueva interfaz de llamadas al sistema.' },
  nist: { url: 'https://csrc.nist.gov/pubs/fips/186-5/final', referencia: 'NIST FIPS 186-5, Digital Signature Standard: las firmas digitales permiten acreditar ante terceros el origen del dato y constituyen evidencia de que la firma fue generada por el firmante indicado, servicio denominado no repudio.' },
  glossary: { url: 'https://csrc.nist.gov/glossary/term/non_repudiation', referencia: 'NIST CSRC Glossary, non-repudiation: garantía de integridad y origen verificables por un tercero como procedentes de una entidad que posee la clave privada.' }
};

const academy = {
  web: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 30, Tecnologías de sistemas de información, versión 2026.1: desarrollo web, lenguajes de marca/XML, servicios e interoperabilidad; cotejo temático para WSDL, ActiveX histórico y entorno Java.' },
  os: { url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 27, Sistemas operativos, versión 2026.1: Windows y componentes del sistema operativo; cotejo temático para el ejecutable del kernel NT.' },
  signature: { url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 36, Seguridad, criptografía, identificación y firma, versión 2026.1: firmas electrónicas, claves y servicios de seguridad; cotejo temático de no repudio.' }
};

const records = [
  [1291, [65, 77], ['II-9', 'III-12'], ['WSDL', 'XML', 'servicios web', 'W3C', 'interoperabilidad'], [primary.wsdl11, primary.wsdl20, academy.web], null,
    'WSDL (Web Services Description Language) es el lenguaje basado en XML para describir servicios web y sus operaciones. SOAP es un protocolo de mensajería, UDDI un directorio/registro de servicios y BPEL describe procesos de negocio; no son la respuesta a la definición preguntada. El concepto está vigente, aunque la pregunta no identifica versión de WSDL. Cotejo temático con ITIC Academy, bloque 30; la definición se contrasta con las especificaciones del W3C.', 'vigente'],
  [1292, [67], ['III-10'], ['Java', 'garbage collector', 'recolección de basura', 'alcanzabilidad', 'elegible para reclamación'], [primary.java, primary.javaApi, academy.web], null,
    'Se corrige el enunciado para distinguir dejar de usar una referencia de que el objeto sea inalcanzable: solo cuando ya no es alcanzable según las reglas de la JVM puede considerarse elegible para reclamación. El garbage collector decide cuándo recogerlo; no se elimina necesariamente de inmediato ni se destruye mediante código manual. Por eso la clave es “ninguna de las anteriores”. Cotejo temático con ITIC Academy, bloque 30, entorno Java; el comportamiento se contrasta con Oracle Java SE.', 'corregida'],
  [1293, [65, 77], ['III-12'], ['ActiveX', 'COM', 'Internet Explorer', 'tecnología heredada', 'IE mode'], [primary.activeX, primary.edge, academy.web], null,
    'Se conserva como contenido histórico de tecnologías web de Windows, pero se corrige la generalización: ActiveX se basa en COM y sus controles se integraban en contenedores Windows y, históricamente, en Internet Explorer. No es interoperabilidad de red independiente del lenguaje y no todos los navegadores lo soportan: Edge solo ofrece compatibilidad heredada mediante IE mode. Cotejo temático con ITIC Academy, bloque 30; las condiciones de soporte se verifican en documentación actual de Microsoft.', 'historica'],
  [1294, [59], ['IV-1'], ['Windows', 'ntoskrnl.exe', 'kernel NT', 'kernel ejecutivo', 'arranque'], [primary.kernel, primary.ntos, academy.os], null,
    'Se corrige la descripción imprecisa. ntoskrnl.exe es la imagen ejecutable del kernel de Windows NT; agrupa componentes del kernel y del ejecutivo. Microsoft lo identifica como Windows NT OS Kernel en la secuencia de arranque. Aunque contiene implementaciones de servicios nativos Nt/Zw, no se define simplemente como “la nueva interfaz de llamadas al sistema”. Cotejo temático con ITIC Academy, bloque 27, sistemas operativos; comprobación directa en Microsoft Learn.', 'corregida'],
  [1295, [78, 80, 125], ['I-6', 'IV-12'], ['comercio electrónico', 'medios de pago', 'seguridad', 'no repudio', 'firma digital'], [primary.nist, primary.glossary, academy.signature], null,
    'No repudio es la propiedad de seguridad pertinente: aportar evidencia verificable del origen y de la autoría de una operación para que el firmante no pueda negarla fácilmente. Una firma digital correctamente implementada puede respaldarla junto con integridad y autenticación; no equivale a simultaneidad, interactividad ni automatización. Cotejo temático con ITIC Academy, bloque 36; se contrasta la función con NIST FIPS 186-5 y su glosario.', 'corregida']
];

apply({ numero: '195', fecha: '2026-10-24', records, edits: {
  1291: { texto: '¿Qué lenguaje basado en XML se emplea para describir las operaciones y el acceso a un servicio web?', opciones: ['BPEL, que describe procesos de negocio ejecutables.', 'SOAP, que define un protocolo de intercambio de mensajes.', 'WSDL, que describe el servicio y sus operaciones.', 'UDDI, que proporciona un registro/directorio de servicios.'], respuesta_correcta: 2 },
  1292: { texto: 'En Java, si un objeto deja de ser alcanzable desde cualquier referencia que lo mantenga vivo, ¿qué sucede?', opciones: ['El garbage collector lo elimina inmediatamente.', 'El programa debe destruirlo manualmente.', 'El objeto se destruye a sí mismo.', 'Queda elegible para la recolección, pero la JVM no garantiza que ocurra inmediatamente.'], respuesta_correcta: 3 },
  1293: { texto: 'En el contexto histórico de las aplicaciones web para Windows, ¿qué afirmación describe correctamente ActiveX?', opciones: ['Es un estándar de interoperabilidad en red independiente del lenguaje, equivalente a CORBA.', 'Es un formato XML para describir servicios web.', 'Sus controles, basados en COM, podían integrarse en Internet Explorer; no son compatibles con navegadores modernos en modo normal.', 'Todos los navegadores actuales implementan ActiveX de forma nativa.'], respuesta_correcta: 2 },
  1294: { texto: 'En Windows, ¿qué es ntoskrnl.exe?', opciones: ['Un ejecutable malicioso asociado exclusivamente a infecciones de 2012.', 'La imagen del kernel de Windows NT, que contiene componentes del kernel y del ejecutivo.', 'Un componente exclusivo de Windows 7 que ya no existe en versiones actuales.', 'Una interfaz gráfica para invocar llamadas al sistema.'], respuesta_correcta: 1 },
  1295: { texto: 'En una transacción electrónica de pago, ¿qué propiedad de seguridad aporta evidencia verificable del origen de una operación para dificultar que el firmante niegue haberla realizado?', opciones: ['Simultaneidad.', 'Interactividad.', 'No repudio.', 'Automatización.'], respuesta_correcta: 2 }
}});

const fs = require('node:fs');
const path = require('node:path');
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-195.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const notes = {
  1291: { source: academy.web, block: 'Bloque 30, Tecnologías de sistemas de información, versión 2026.1 (servicios web, XML e interoperabilidad).', topics: 'A1-65/A1-77/A2-II-9/A2-III-12' },
  1292: { source: academy.web, block: 'Bloque 30, Tecnologías de sistemas de información, versión 2026.1 (entorno de desarrollo Java).', topics: 'A1-67/A2-III-10' },
  1293: { source: academy.web, block: 'Bloque 30, Tecnologías de sistemas de información, versión 2026.1 (tecnologías web; ActiveX tratado como tecnología heredada).', topics: 'A1-65/A1-77/A2-III-12' },
  1294: { source: academy.os, block: 'Bloque 27, Sistemas operativos, versión 2026.1 (Windows y componentes del sistema).', topics: 'A1-59/A2-IV-1' },
  1295: { source: academy.signature, block: 'Bloque 36, Seguridad, criptografía, identificación y firma, versión 2026.1 (servicios de firma y no repudio).', topics: 'A1-78/A1-80/A1-125/A2-I-6/A2-IV-12' }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const meta = notes[q.id];
  q.clasificacion.bloque_academia = meta.block;
  q.clasificacion.nota = `Cotejo temático con ITIC Academy: ${meta.block} Correspondencia orientativa con el programa oficial: ${meta.topics}.`;
  const comment = ` Cotejo temático con ITIC Academy: ${meta.block} Correspondencia orientativa: ${meta.topics}.`;
  q.comentarios = (q.comentarios || '') + comment;
  q.revision.observaciones += comment;
  q.revision.fuentes.push({ url: meta.source.url, referencia: `${meta.source.referencia} Correspondencia: ${meta.topics}.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo temático con ITIC Academy y registro actualizados para el lote 195.');
