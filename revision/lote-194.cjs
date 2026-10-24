const apply = require('./aplicar-lote.cjs');

const sources = {
  mashup: {
    url: 'https://www.oracle.com/technical-resources/articles/javaee/server-side-mashups.html',
    referencia: 'Oracle Java EE, Server-Side Mashups: reconoce que no existe una definición única, pero describe un mashup como una aplicación que combina datos o funcionalidad de otros sitios/servicios; limitarse a enlazar un sitio no basta.'
  },
  openlayersWms: {
    url: 'https://openlayers.org/en/latest/examples/wms-tiled.html',
    referencia: 'OpenLayers, ejemplo oficial Tiled WMS: integra en un mapa una capa WMS servida externamente mediante TileWMS; sirve para concretar la composición de un servicio geográfico externo dentro de una aplicación cartográfica.'
  },
  kleopatra: {
    url: 'https://files.gpg4win.org/website-beta/gpg4win/web/features.html',
    referencia: 'Gpg4win, página oficial de funcionalidades: Kleopatra es el gestor de certificados preferido de Gpg4win y administra certificados OpenPGP y S/MIME.'
  },
  tape: {
    url: 'https://www.ibm.com/docs/en/i/7.4?topic=concepts-records-blocks-formats',
    referencia: 'IBM i 7.4, Records, blocks, and formats: los bloques son unidades físicas en cinta y pueden contener uno o varios registros lógicos; distingue registros de bloques y espacios interbloque.'
  },
  fireEU: {
    url: 'https://eur-lex.europa.eu/eli/reg/2024/573/oj',
    referencia: 'Reglamento (UE) 2024/573, relativo a gases fluorados: regula comercialización y uso de equipos de protección contra incendios con determinados gases; el anexo IV incluye restricciones de puesta en el mercado desde 2025, con excepciones vinculadas a requisitos de seguridad del emplazamiento. No establece una lista universal de agentes autorizados para cualquier CPD.'
  },
  isoIG55: {
    url: 'https://www.iso.org/standard/55349.html',
    referencia: 'ISO 14520-14:2015, vigente y confirmada en 2026: contiene requisitos para sistemas gaseosos de extinción con IG-55, incluidos uso y seguridad; confirma que los sistemas normalizados de agente inerte tienen designaciones y condiciones específicas.'
  },
  gdpr: {
    url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
    referencia: 'Reglamento (UE) 2016/679 (RGPD), considerando 26 y art. 4.5: la información anónima deja de referirse a una persona identificada o identificable atendiendo a medios razonablemente probables; la seudonimización conserva la posibilidad de atribución con información adicional.'
  }
};

const academy = {
  gis: {
    url: 'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 33, Temas 73–74 E-Learning y GIS, versión 2026, apartado de SIG y servicios/capas geográficos; el programa asigna el tema directamente a A1-74.'
  },
  security: {
    url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 36, Seguridad, criptografía, identificación y firma, versión 2026.1, apartados de herramientas criptográficas y certificados; cotejo temático de Kleopatra.'
  },
  hardware: {
    url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 26, Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1; cotejo temático de soporte de almacenamiento y protección física de CPD.'
  },
  data: {
    url: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 34, Business Intelligence y Big Data, versión 2026.1, A1-75: tecnologías para proteger la confidencialidad (PET); cotejo temático con anonimización y protección de datos.'
  }
};

const records = [
  [1286, [74], ['III-12'], ['SIG', 'sistemas de información geográfica', 'mashup', 'WMS', 'OpenLayers', 'servicios geográficos'], [sources.mashup, sources.openlayersWms, academy.gis], null,
    'La capa WMS servida externamente e integrada por OpenLayers en la aplicación cartográfica es el supuesto que mejor encaja con un mashup: combina una fuente geográfica externa con la aplicación anfitriona. Se reescribe el ítem para distinguir esa composición de geocodificar una dirección de forma aislada o descargar un fichero sin integrarlo en una aplicación. Cotejo con ITIC Academy, bloque 33; las definiciones de mashup admiten matices, por lo que se concreta el supuesto.', 'corregida'],
  [1287, [79, 80], ['IV-12'], ['Kleopatra', 'GnuPG', 'Gpg4win', 'OpenPGP', 'S/MIME', 'gestión de certificados'], [sources.kleopatra, academy.security], null,
    'Kleopatra es una aplicación de gestión de certificados y operaciones criptográficas que forma parte de Gpg4win/GnuPG; administra certificados OpenPGP y S/MIME. No es un navegador KDE ni un equivalente de Kerberos. Se conserva el enunciado y la respuesta.', 'vigente'],
  [1288, [56], ['II-1'], ['cinta magnética', 'bloque físico', 'registro lógico', 'almacenamiento'], [sources.tape, academy.hardware], null,
    'Se precisa el nivel físico: la operación de escritura en cinta registra un bloque físico; el bloque puede agrupar uno o más registros lógicos, por lo que “escribir un registro” no describe necesariamente la unidad física transferida. Cotejo con ITIC Academy, bloque 26, almacenamiento; la distinción se verifica en la documentación de IBM.', 'corregida'],
  [1289, [53], ['II-13'], ['CPD', 'centro de proceso de datos', 'protección contra incendios', 'FM-200', 'FE-13', 'agua nebulizada', 'Novec 1230', 'agentes limpios', 'pendiente de ámbito'], [sources.fireEU, sources.isoIG55, academy.hardware], null,
    'Pendiente de ambigüedad: “actualmente autorizados y usados” no fija jurisdicción, fecha, régimen (puesta en mercado, mantenimiento de sistemas ya instalados o uso operativo) ni norma de diseño. El Reglamento (UE) 2024/573 introduce restricciones y excepciones distintas para equipos nuevos y existentes; las normas ISO tratan agentes específicos, sin constituir por sí solas una lista general de autorización para todo CPD. Aunque helio no aparece como agente estándar en la referencia consultada, no se certifica una respuesta universal sin precisar el alcance. Cotejo temático con ITIC Academy, bloque 26, CPD y seguridad física.', 'pendiente_ambiguedad'],
  [1290, [27], ['I-7'], ['protección de datos', 'RGPD', 'anonimización', 'seudonimización', 'persona identificable', 'privacidad'], [sources.gdpr, academy.data], null,
    'Se concreta el criterio jurídico del RGPD: anonimizar es transformar datos de forma que la persona ya no sea identificable teniendo en cuenta los medios razonablemente probables; no debe confundirse con seudonimizar, que permite atribuir los datos mediante información adicional. El considerando 26 determina cuándo la información puede considerarse anónima. Cotejo temático con ITIC Academy, bloque 34 (PET/confidencialidad); el criterio normativo se contrasta con el Reglamento (UE) 2016/679.', 'corregida']
];

apply({ numero: '194', fecha: '2026-10-24', records, edits: {
  1286: { texto: 'En una aplicación web de SIG, ¿qué acción integra un servicio geográfico externo en una composición cartográfica y constituye el supuesto más claro de mashup?', opciones: ['Geocodificar una dirección mediante una función aislada, sin combinar el resultado con otra fuente o vista.', 'Añadir al mapa de la aplicación una capa WMS servida por un servicio externo mediante OpenLayers.', 'Descargar un archivo vectorial GML o KML y conservarlo sin integrarlo en la aplicación.', 'Cambiar el zoom y el centro de una capa local ya cargada.'], respuesta_correcta: 1 },
  1288: { texto: 'En una operación de escritura física de datos en una cinta magnética, ¿cuál es la unidad que se registra como tal en el medio?', opciones: ['Un carácter aislado.', 'Un bloque físico, que puede contener uno o varios registros lógicos.', 'Una lectura de dato.', 'Necesariamente un único registro lógico por operación.'], respuesta_correcta: 1 },
  1290: { texto: 'Según el considerando 26 del RGPD, ¿qué describe la anonimización de datos personales?', opciones: ['Transformar los datos de modo que la persona ya no sea identificable mediante medios razonablemente probables; si se conserva información adicional que permite atribuirlos, se trata de seudonimización.', 'Cifrar los datos con una clave que conserva el responsable, de modo que siempre pueda recuperarlos.', 'Sustituir los identificadores directos por códigos manteniendo una tabla que permite reidentificar a la persona.', 'Clasificar los datos en categorías sin modificar su posibilidad de identificar a la persona.'], respuesta_correcta: 0 }
}});

const fs = require('node:fs');
const path = require('node:path');
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-194.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const notes = {
  1286: { source: academy.gis, block: 'Bloque 33, Temas 73–74 E-Learning y GIS, versión 2026, apartado de servicios y capas SIG.', topics: 'A1-74/A2-III-12' },
  1287: { source: academy.security, block: 'Bloque 36, Seguridad, criptografía, identificación y firma, versión 2026.1 (herramientas criptográficas y certificados).', topics: 'A1-79/A1-80/A2-IV-12' },
  1288: { source: academy.hardware, block: 'Bloque 26, Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1.', topics: 'A1-56/A2-II-1' },
  1289: { source: academy.hardware, block: 'Bloque 26, Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1; revisión temática, pendiente de concretar régimen y alcance normativo.', topics: 'A1-53/A2-II-13' },
  1290: { source: academy.data, block: 'Bloque 34, Business Intelligence y Big Data, versión 2026.1, A1-75 (tecnologías para proteger la confidencialidad/PET).', topics: 'A1-27/A2-I-7' }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const meta = notes[q.id];
  q.clasificacion.bloque_academia = meta.block;
  q.clasificacion.nota = `Cotejo temático con ITIC Academy: ${meta.block} Correspondencia orientativa con el programa oficial: ${meta.topics}.`;
  const comment = ` Cotejo temático con ITIC Academy: ${meta.block} Correspondencia orientativa: ${meta.topics}.`;
  q.comentarios = (q.comentarios || '') + comment;
  q.revision.observaciones = (q.revision.observaciones || '') + comment;
  q.revision.fuentes.push({ url: meta.source.url, referencia: `${meta.source.referencia} Correspondencia: ${meta.topics}.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo temático con ITIC Academy y registro actualizados para el lote 194.');
