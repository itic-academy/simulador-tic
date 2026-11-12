const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');

const ref = (url, referencia) => ({ url, referencia });
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const b42 = 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';

const records = [
  [5226, ['115'], ['II-8'], ['IPv6', 'direcciones IP', '128 bits', 'RFC 4291'], [
    ref('https://www.rfc-editor.org/rfc/rfc4291.html', 'IETF RFC 4291, §2: IPv6 addresses are 128-bit identifiers; define the address length, independent of prefix/interface-ID split.'),
    ref('https://www.rfc-editor.org/rfc/rfc8200.html', 'IETF RFC 8200, §3 and Figure 1: the IPv6 base header has a 128-bit Source Address and a 128-bit Destination Address.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 115: arquitectura IP, transición IPv4/IPv6 y funcionalidades específicas de IPv6.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.8: modelos TCP/IP y OSI, direccionamiento y encaminamiento.'),
    ref(b42, 'ITIC Academy, bloque 42 «Redes», actualización 2026.1, sección IPv6: expresa que la dirección tiene 128 bits y la escribe como ocho grupos de 16 bits.')
  ], null, 'La dirección IPv6 completa tiene 128 bits. La división habitual en prefijo de subred e identificador de interfaz depende del prefijo y no cambia la longitud total; tampoco debe confundirse la dirección con la cabecera IPv6 completa.', 'vigente'],
  [5227, ['108'], ['IV-7', 'IV-8'], ['multiplexación estadística', 'TDM', 'ranuras dinámicas', 'tráfico activo'], [
    ref('https://technav.ieee.org/topic/time-division-multiplexing/', 'IEEE Technology Navigator, «Time division multiplexing», sección Statistical TDM: el multiplexor estadístico asigna ranuras dinámicamente a fuentes que tienen datos pendientes, en lugar de reservar una ranura por fuente en cada trama.'),
    ref('https://www.itu.int/rec/T-REC-X.211/en', 'ITU-T Recommendation X.211, Appendix A, §A.2.3: caracteriza la multiplexación estadística por asignación dinámica de capacidad/celdas a canales según la demanda.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 108: medios de transmisión, conmutación de circuitos/paquetes y redes.'),
    ref(a2, 'Convocatoria A2 GSI 2025, temas IV.7 (medios de transmisión) y IV.8 (protocolos y técnicas de transmisión en redes locales).'),
    ref(b42, 'ITIC Academy, bloque 42 «Redes», actualización 2026.1, §1.3: los paquetes comparten enlaces por multiplexación estadística; trata también TDM/ATM. La regla precisa de asignación dinámica se verifica con IEEE/ITU-T.')
  ], null, 'La multiplexación estadística no es FDM ni consiste en reservar intervalos fijos aunque la fuente esté inactiva: en TDM estadística las ranuras se asignan dinámicamente a las entradas con datos pendientes. El multiplexor puede registrar estadísticas, pero la recogida de métricas para que un usuario ajuste parámetros no define su función fundamental. Se reemplazan opciones solapadas por distractores mutuamente distinguibles.', 'corregida'],
  [5228, ['108', '118'], ['IV-8'], ['IEEE 802.17', 'Resilient Packet Ring', 'RPR', 'steering', 'wrapping'], [
    ref('https://standards.ieee.org/ieee/802.17/4779/', 'IEEE Standards Association, IEEE 802.17-2011: identifica la norma de acceso y capa física Resilient Packet Ring.'),
    ref('https://www.ieee802.org/17/documents/presentations/may2003/cls10_update_030519.pdf', 'IEEE Draft P802.17/D2.2, cláusula 10.1: describe el protocolo de protección, la difusión de cambios de estado de enlace a las estaciones y los mecanismos steering (obligatorio) y wrapping (opcional). El documento se identifica expresamente como borrador no aprobado; se cita como documento de trabajo primario para aclarar el mecanismo, no como edición normativa vigente.'),
    ref(a1, 'Convocatoria A1 GSI 2025, temas 108 (redes y conmutación) y 118 (redes LAN, arquitectura, métodos de acceso e interconexión).'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.8: redes locales, tipologías, protocolos, técnicas de transmisión y métodos de acceso.'),
    ref(b42, 'ITIC Academy, bloque 42 «Redes», actualización 2026.1: cotejo temático de arquitecturas LAN/MAN y mecanismos de resiliencia. No se encontró una explicación específica de RPR; la distinción se contrasta con documentación IEEE.')
  ], null, 'La opción correcta se precisa: tras conocer el cambio de topología, las estaciones de origen aplican steering y seleccionan el ringlet/ruta que evita el tramo fallido. En wrapping, las estaciones junto al fallo conectan el tráfico al ringlet alternativo en el punto afectado. RPR usa mecanismos de protección de tráfico, no códigos de Hamming ni FEC como método primario de recuperación. La tecnología se presenta como heredada/histórica, no como recomendación de despliegue actual.', 'historica'],
  [5229, ['109'], ['IV-13'], ['IXP', 'punto neutro', 'GALNIX', 'CATNIX', 'ESPANIX', 'BASNIX'], [
    ref('https://www.euro-ix.net/media/filer_public/11/2c/112c450a-7f3c-4947-9c0b-6104b3a38659/euro-ix-ixp-report-2015-final.pdf', 'Euro-IX, IXP Report 2015, tabla de IXPs por país: registra CATNIX, ESpanix y GALNIX como puntos de intercambio de España; se usa como referencia histórica fechada, no como directorio exhaustivo actual.'),
    ref('https://galnix.gal/', 'GALNIX, web del propio operador, consultada el 12-11-2026: se identifica como punto neutro de conectividad en Galicia que conecta ISPs y facilita intercambio de tráfico; prueba de que GALNIX no debe marcarse como distractor falso actual.'),
    ref('https://www.peeringdb.com/api/ix?name__contains=BASNIX', 'PeeringDB, API pública de IXPs, consulta por nombre exacto «BASNIX» el 12-11-2026: la respuesta contiene una lista vacía. Se combina con el informe Euro-IX fechado para limitar el alcance; la ausencia en un registro no se generaliza como prueba universal.'),
    ref('https://www.peeringdb.com/api/ix?name__contains=CATNIX', 'PeeringDB, API pública consultada el 12-11-2026: devuelve CATNIX, Barcelona.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 109: arquitectura y servicios básicos de Internet.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.13: arquitectura, funcionamiento y evolución de Internet.'),
    ref(b42, 'ITIC Academy, bloque 42 «Redes», actualización 2026.1, §Internet/IXP: trata la función de los puntos de intercambio y ofrece ESpanix, DE-CIX Madrid y CATNIX como ejemplos; el registro Euro-IX se consulta para la referencia histórica GALNIX.')
  ], null, 'La formulación original «no es un IXP en España» era abierta y temporal: GALNIX es actualmente un punto neutro gallego, aunque no aparezca en algunos directorios de miembros. Para obtener una única respuesta se acota el enunciado a la tabla de Euro-IX de 2015: CATNIX, ESpanix y GALNIX sí figuran allí; BASNIX no. No se afirma que esa tabla enumere todos los IXP actuales ni que la ausencia de un directorio demuestre por sí sola inexistencia.', 'historica'],
  [5230, ['118'], ['IV-9'], ['SNMPv2', 'GetBulkRequest', 'gestión de redes', 'MIB'], [
    ref('https://www.rfc-editor.org/rfc/rfc1905.html', 'IETF RFC 1905, §§3 y 4.2.3: incluye GetBulkRequest-PDU en las operaciones SNMPv2 y la define para recuperar eficientemente grandes cantidades de información/tablas.'),
    ref('https://www.rfc-editor.org/rfc/rfc3416.html', 'IETF RFC 3416 (STD 62), §§3 y 4.2.3: mantiene GetBulkRequest como operación SNMP de versión 2, con non-repeaters y max-repetitions para recorrer datos de gestión eficientemente.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 118: monitorización y control de tráfico y gestión SNMP.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.9: administración/monitorización de redes locales y gestión SNMP.'),
    ref(b42, 'ITIC Academy, bloque 42 «Redes», actualización 2026.1, sección de gestión: compara SNMPv1/v2c/v3 y destaca GetBulkRequest como operación incorporada en v2 para recuperar tablas por bloques.')
  ], null, 'GetBulkRequest es la operación de SNMPv2 orientada a obtener de forma eficiente múltiples valores de la MIB, especialmente durante el recorrido de tablas. GetNextRequest, SetRequest y Trap ya existían en SNMPv1; no se interpreta que GetBulk sea una operación exclusiva del formato comunitario v2c, pues RFC 3416 especifica las operaciones v2 usadas en el marco SNMP actual.', 'corregida']
];

const edits = {
  5226: { comentarios: 'IPv6 utiliza identificadores de dirección de 128 bits (RFC 4291 §2). El prefijo y el identificador de interfaz son partes de esa dirección; su división puede variar.' },
  5227: {
    texto: '¿Qué caracteriza a un multiplexor estadístico TDM?',
    opciones: [
      'Asigna dinámicamente ranuras a las entradas que tienen datos pendientes, en lugar de reservar una ranura fija por entrada en cada trama.',
      'Asigna a cada entrada una ranura fija en todas las tramas, aunque no tenga datos.',
      'Separa las señales exclusivamente mediante bandas de frecuencia (FDM).',
      'Mide errores analógicos y reparte el ancho de banda según una tabla fija, sin considerar el tráfico.'
    ],
    respuesta_correcta: 0,
    comentarios: 'La multiplexación estadística TDM asigna ranuras según la demanda/tráfico activo. Reduce ranuras vacías frente al TDM síncrono, a costa de que exista espera/cola cuando varias fuentes solicitan capacidad.'
  },
  5228: {
    texto: 'En Resilient Packet Ring (IEEE 802.17), ¿qué describe correctamente el mecanismo de protección steering?',
    opciones: [
      'Tras propagarse el cambio de topología, las estaciones de origen eligen el ringlet/ruta que evita el enlace o nodo fallido.',
      'Las estaciones adyacentes al fallo puentean localmente el tráfico hacia el ringlet alternativo.',
      'La recuperación se realiza principalmente mediante códigos de Hamming.',
      'La recuperación se basa en FEC, que corrige los errores del enlace sin cambiar la ruta.'
    ],
    respuesta_correcta: 0,
    comentarios: 'En RPR, steering cambia el ringlet elegido en el origen de acuerdo con la topología comunicada; wrapping conmuta localmente junto al fallo y retorna al ringlet alternativo. Se evita describirlos como operaciones idénticas.'
  },
  5229: {
    texto: 'Según la tabla por país del informe Euro-IX de 2015, ¿cuál de estas denominaciones NO aparece entre los IXP españoles allí enumerados?',
    opciones: ['GALNIX.', 'CATNIX.', 'ESPANIX.', 'BASNIX.'],
    respuesta_correcta: 3,
    comentarios: 'Respuesta BASNIX con alcance histórico explícito: Euro-IX 2015 enumera CATNIX, ESpanix y GALNIX para España. GALNIX opera actualmente como punto neutro de conectividad en Galicia; el informe de 2015 no se debe presentar como inventario actual y completo.'
  },
  5230: {
    texto: '¿Qué operación de SNMPv2 permite solicitar eficientemente varios valores de la MIB, por ejemplo durante el recorrido de una tabla?',
    opciones: ['SetRequest.', 'GetBulkRequest.', 'GetNextRequest.', 'Trap.'],
    respuesta_correcta: 1,
    comentarios: 'RFC 1905 §4.2.3 define GetBulkRequest para recuperar grandes cantidades de información con menos intercambios. GetNextRequest, SetRequest y Trap ya aparecen en SNMPv1; RFC 3416 conserva GetBulkRequest en las operaciones v2.'
  }
};

if (!fs.existsSync(path.join(__dirname, 'cambios-lote-981.json'))) {
  aplicar({ numero: '981', fecha: '2026-11-12', records, edits });
}

// Cotejo individual de los cinco registros con la versión del material de Academy y los epígrafes oficiales.
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-981.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5226: ['ITIC Academy, bloque 42 «Redes», actualización 2026.1, apartado IPv6: dirección de 128 bits, ocho grupos de 16.', 'Cotejo directo A1-115/A2-II.8.'],
  5227: ['ITIC Academy, bloque 42 «Redes», actualización 2026.1, §§1.3 y ATM: multiplexación estadística en redes de paquetes y canales con tasa asignada según demanda. No se atribuyen al tema formulaciones que no aparecen literalmente.', 'Cotejo A1-108/A2-IV.7-IV.8 sobre transmisión, multiplexación y técnicas de red.'],
  5228: ['ITIC Academy, bloque 42 «Redes», actualización 2026.1: contexto de redes y métodos de acceso; no contiene una explicación específica de RPR/steering en el texto cotejado.', 'Cotejo temático A1-108/A1-118 y A2-IV.8; mecanismo específico sustentado en documentos IEEE.'],
  5229: ['ITIC Academy, bloque 42 «Redes», actualización 2026.1, §Internet/IXP: describe el propósito de los puntos de intercambio y ofrece ESpanix, DE-CIX Madrid y CATNIX como ejemplos. No se usa para afirmar que GALNIX no sea IXP.', 'Cotejo A1-109/A2-IV.13; GALNIX se confirma en Euro-IX histórico y en su web actual.'],
  5230: ['ITIC Academy, bloque 42 «Redes», actualización 2026.1, tabla SNMPv1/v2c/v3: GetBulkRequest aparece como operación incorporada en v2 para recuperar tablas; contrástese con RFC 1905/3416.', 'Cotejo directo A1-118/A2-IV.9, que mencionan expresamente gestión SNMP.']
};
const reason = 'Cotejo curricular individual con los programas oficiales A1/A2 de 2025 y el material ITIC Academy accesible en Drive.';
for (const [key, [block, note]] of Object.entries(academy)) {
  const id = Number(key);
  const q = bank.preguntas.find(x => x.id === id);
  const change = log.cambios.find(x => x.id === id);
  if (!q || !change) throw new Error(`Falta registro de ${id}`);
  const before = { bloque_academia: q.clasificacion.bloque_academia, nota: q.clasificacion.nota };
  q.clasificacion.bloque_academia = block;
  q.clasificacion.nota = note;
  const later = change.correcciones_posteriores || [];
  if (!later.some(x => x.motivo === reason)) later.push({ fecha: '2026-11-12', motivo: reason, clasificacion_anterior: before, clasificacion_actualizada: { bloque_academia: block, nota: note } });
  change.correcciones_posteriores = later;
  change.actualizada = structuredClone(q);
}
const byId = new Map(log.cambios.map(c => [c.id, c]));
const raw = fs.readFileSync(bankPath, 'utf8');
let replaced = 0;
const output = raw.replace(/^    \{[\s\S]*?^    \}/gm, block => {
  const old = JSON.parse(block);
  const change = byId.get(old.id);
  if (!change) return block;
  replaced++;
  return JSON.stringify(change.actualizada, null, 2).split('\n').map(line => `    ${line}`).join('\n');
});
if (replaced !== 5) throw new Error(`Se esperaban 5 cambios; encontrados ${replaced}`);
JSON.parse(output);
fs.writeFileSync(bankPath, output);
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Lote 981 enriquecido con el cotejo académico y la trazabilidad de los cinco reactivos.');
