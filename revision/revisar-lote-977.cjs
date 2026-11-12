const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');
const ref = (url, referencia) => ({url, referencia});
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy37 = 'https://drive.google.com/file/d/1xTMCpPmwNi8hpb0nZ3sMqpgvrhLXT-yf/view?usp=drivesdk';
const academy32 = 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk';
const academy36 = 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk';
const records = [
  [5206, ['80'], ['IV-12'], ['LDAP', 'LDAPS', 'TLS', 'puerto TCP 636'], [
    ref('https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml?search=ldaps', 'IANA Service Name and Transport Protocol Port Number Registry, entrada `ldaps`/TCP 636: asignación registrada para LDAP sobre TLS/SSL; es una asignación de servicio, no una garantía de que cualquier despliegue use ese puerto.'),
    ref('https://www.rfc-editor.org/rfc/rfc4513.html', 'IETF RFC 4513, LDAP Authentication Methods and Security Mechanisms, §§ 3 y 4: especifica StartTLS para LDAP; distingue el mecanismo de elevación TLS de la asignación habitual del servicio LDAPS en 636.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 80: protocolos de directorio basados en LDAP y X.500.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.12: seguridad en redes, criptografía y protocolos seguros.'),
    ref(academy36, 'ITIC Academy, bloque 36 «Seguridad, Criptografía, Identificación y Firma», versión 2026.1: LDAP/directorios y protección mediante TLS; el número de puerto concreto se confirma en IANA.')
  ], null, 'La respuesta esperada es TCP 636, puerto registrado por IANA para `ldaps` (LDAP sobre TLS/SSL). Conviene llamar al servicio LDAPS y evitar sugerir que «LDAP sobre SSL» es la única forma segura: LDAP también puede negociar TLS con StartTLS en su puerto habitual 389. SSL está obsoleto; la protección actual se realiza con TLS. La asignación IANA identifica el servicio convencional, no impide configuraciones en otros puertos.', 'vigente'],
  [5207, ['83'], [], ['JPEG', 'JPEG-1', 'DCT', 'compresión de imágenes', 'bloques 8x8'], [
    ref('https://www.itu.int/rec/T-REC-T.81/en', 'ITU-T Recommendation T.81 | ISO/IEC 10918-1, vigente: especificación de codificación JPEG-1; los procesos basados en DCT transforman bloques de 8 × 8 muestras.'),
    ref('https://www.itu.int/ITU-T/recommendations/rec.aspx?lang=en&rec=2633', 'Ficha oficial ITU-T T.81, estado In force y equivalencia ISO/IEC 10918-1.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 83: tratamiento de imágenes y tecnologías de digitalización e impresión.'),
    ref(academy37, 'ITIC Academy, bloque 37 «Imágenes, OCR, biometría y gestión de contenidos», versión 2026.1: desarrolla digitalización, resolución interpolada y JPEG/DCT en el ámbito A1-83; la norma se contrasta con ITU-T T.81.')
  ], null, 'Se precisa el enunciado: la DCT por bloques de 8 × 8 es característica del proceso DCT de JPEG-1 (ITU-T T.81 / ISO/IEC 10918-1). La redacción «soporte de imagen» era imprecisa y una imagen TIFF puede encapsular datos comprimidos con JPEG; por eso se pregunta ahora por la norma/codificación JPEG-1, no por cualquier contenedor que pudiera almacenarla.', 'corregida'],
  [5208, ['83'], [], ['escáner', 'resolución interpolada', 'interpolación', 'digitalización'], [
    ref('https://www.canada.ca/en/heritage-information-network/services/digitization/scan-reflective-objects.html', 'Canadian Conservation Institute / Canadian Heritage Information Network, guía de digitalización: la resolución interpolada o mejorada por software estima información entre los píxeles capturados por el sensor.'),
    ref('https://files.support.epson.com/pdf/exp16_/exp16_ts.pdf', 'Epson, Technical Brief, Image Quality—Resolution: define la interpolación como creación algorítmica de píxeles a partir de los valores circundantes, por encima de la resolución hardware/óptica.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 83: tratamiento de imágenes y tecnologías de digitalización.'),
    ref(academy37, 'ITIC Academy, bloque 37 «Imágenes, OCR, biometría y gestión de contenidos», versión 2026.1: distingue resolución óptica y resolución interpolada, y precisa que los píxeles interpolados aumentan dimensiones, no el detalle real.')
  ], null, 'La clave existente es correcta: la resolución interpolada es una ampliación algorítmica que inserta/calcula píxeles intermedios a partir de muestras captadas, a menudo usando vecinos próximos. Aumenta el número de píxeles del archivo, pero no la resolución óptica ni el detalle realmente capturado. Se distingue de la resolución óptica del sensor y de la resolución mecánica/hardware del movimiento del escáner.', 'vigente'],
  [5209, ['83'], [], ['impresión 3D', 'Filaflex', 'TPU', 'ABS', 'PLA', 'Laybrick'], [
    ref('https://recreus.com/en/pages/filaflex', 'Recreus, fabricante de Filaflex: describe Filaflex como filamento de TPU (poliuretano termoplástico), altamente elástico y diseñado para impresión FDM.'),
    ref('https://recreus.com/en/pages/faq', 'Recreus, FAQ oficial: identifica Filaflex como filamento flexible de TPU desarrollado para impresión 3D.'),
    ref('https://devel.lulzbot.com/filament/cc-products/SDS%27s/MSDS-ALL-LAYFILAMENTS-EN-2017_3Ro.pdf', 'CC-Products, ficha de seguridad de Layfilaments: incluye Laybrick entre los filamentos para impresión 3D y lo describe como mezcla polimérica con rellenos minerales; confirma que la opción D original también era un material real.'),
    ref('https://help.prusa3d.com/materials', 'Prusa Research, guía de materiales: ABS y PLA son termoplásticos usados en impresión 3D; la descripción del distractor original que llamaba biodegradable al ABS era falsa.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 83: tecnologías de impresión, incluida la impresión 3D.'),
    ref(academy37, 'ITIC Academy, bloque 37 «Imágenes, OCR, biometría y gestión de contenidos», versión 2026.1, sección 6.2: describe FDM/FFF como extrusión de filamento termoplástico dentro del contenido A1-83; no cita Filaflex, cuyo TPU se confirma con el fabricante.')
  ], null, 'El ítem original no tenía respuesta única: Filaflex es TPU elástico, pero Laybrick también es un filamento real de impresión 3D. Se reformula para preguntar específicamente por el producto comercial de TPU flexible y se corrigen los distractores: ABS es un termoplástico que no debe describirse como biodegradable; PLA es otro termoplástico; Laybrick es una mezcla polimérica con carga mineral. La respuesta única pasa a ser Filaflex (C).', 'corregida'],
  [5210, ['70'], ['III-5'], ['procesamiento del lenguaje natural', 'análisis léxico', 'morfología', 'sintaxis', 'IA'], [
    ref('https://www.cstr.ed.ac.uk/emasters/course/natural_lang.html', 'Centre for Speech Technology Research, University of Edinburgh, programa de NLP: distingue nivel léxico, procesamiento morfológico, nivel sintáctico y análisis semántico como niveles/tareas relacionados.'),
    ref('https://www.cl.cam.ac.uk/teaching/1617/NLP/lectures.pdf', 'University of Cambridge, Natural Language Processing: Part II: separa análisis morfológico, etiquetado, parsing/estructura sintáctica y procesamiento semántico/contextual.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 70: inteligencia artificial, que incluye expresamente NLP.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.5: fundamentos de inteligencia artificial, tecnologías asociadas y áreas de aplicación.'),
    ref(academy32, 'ITIC Academy, bloque 32 «Inteligencia Artificial y Ciencia de Datos», versión 2026.1, apartado 11: NLP, transformers y modelos fundacionales; incluye análisis del lenguaje como contenido de IA.')
  ], null, 'Se corrige y precisa el enunciado: el análisis léxico-morfológico identifica unidades léxicas/morfemas y sus rasgos; el sintáctico analiza cómo se combinan conforme a la gramática. No es el análisis acústico/fonético de la señal, ni la interpretación semántica del significado y el contexto. La opción D se mantiene como respuesta, con terminología y concordancia corregidas; «dial» era un truncamiento impropio de «diálogo».', 'corregida']
];
const edits = {
  5206: {texto:'¿Qué puerto TCP está asignado habitualmente al servicio LDAPS (LDAP sobre TLS)?'},
  5207: {texto:'¿Qué norma de codificación de imágenes, conocida como JPEG-1, aplica la transformada discreta del coseno por bloques de 8 × 8 muestras en sus procesos DCT?', opciones:['GIF','TIFF','BMP','JPEG-1 (ITU-T T.81 / ISO/IEC 10918-1)'], respuesta_correcta:3},
  5208: {comentarios:'La resolución interpolada añade píxeles calculados algorítmicamente entre muestras captadas; no equivale a resolución óptica ni aporta detalle que el sensor no registró.'},
  5209: {texto:'¿Cuál de estos productos se comercializa como filamento flexible de poliuretano termoplástico (TPU), con elevada elasticidad, para impresión 3D FDM?', opciones:['ABS, termoplástico de acrilonitrilo, butadieno y estireno, generalmente rígido y no biodegradable','PLA, termoplástico de ácido láctico usado en impresión 3D','Filaflex, filamento elástico de TPU desarrollado para impresión 3D','Laybrick, filamento compuesto de matriz polimérica y carga mineral para acabados de aspecto pétreo'], respuesta_correcta:2},
  5210: {texto:'En procesamiento del lenguaje natural, el análisis léxico-morfológico y sintáctico:', opciones:['Analiza propiedades acústicas de la señal de voz, como la frecuencia fundamental y los formantes.','Interpreta el significado de la oración y su coherencia con el contexto y el conocimiento previo.','Determina la pronunciación de fonemas, sílabas y palabras.','Identifica unidades léxicas y morfemas y analiza cómo se combinan conforme a las reglas gramaticales.'], respuesta_correcta:3}
};
if (!fs.existsSync(path.join(__dirname, 'cambios-lote-977.json'))) aplicar({numero:'977', fecha:'2026-11-12', records, edits});
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-977.json');
if (fs.existsSync(logPath)) {
  const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
  const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
  const academy = {
    5206: ['ITIC Academy, bloque 36 «Seguridad, Criptografía, Identificación y Firma», versión 2026.1 (17-09-2026): LDAP/directorios y protección de comunicaciones con TLS. El material no establece el puerto; este dato se valida en el registro IANA.', 'Cotejo directo A1-80/A2-IV.12. El bloque aporta contexto de directorios y protocolos seguros, pero el número 636 procede de IANA.'],
    5207: ['ITIC Academy, bloque 37 «Imágenes, OCR, biometría y gestión de contenidos», versión 2026.1 (18-09-2026), apartados 1.1 y 3: tratamiento de imagen y JPEG/DCT; el texto distingue JPEG de JPEG 2000.', 'Cotejo directo A1-83; no se fuerza A2 porque su temario no contiene un epígrafe directo sobre JPEG/DCT.'],
    5208: ['ITIC Academy, bloque 37, versión 2026.1, apartado 1: define resolución interpolada como píxeles generados por software que aumentan dimensiones, no el detalle real, frente a resolución óptica.', 'Cotejo directo A1-83; el material de academia sí cubre el concepto.'],
    5209: ['ITIC Academy, bloque 37, versión 2026.1, apartado 6.2: FDM/FFF extruye filamento termoplástico y la impresión 3D queda dentro de A1-83. El documento no cita la marca Filaflex ni su composición TPU, verificadas con Recreus.', 'Cotejo A1-83. No se fuerza etiqueta A2; la convocatoria A2 no contiene un epígrafe directo de impresión 3D/materiales.'],
    5210: ['ITIC Academy, bloque 32 «Inteligencia Artificial y Ciencia de Datos», versión 2026.1 (31-08-2026), apartado 11 «NLP, transformers y modelos fundacionales»: incluye niveles y técnicas de análisis del lenguaje.', 'Cotejo directo A1-70/A2-III.5: NLP y fundamentos de inteligencia artificial.']
  };
  const motive = 'Cotejo curricular individual de los bloques ITIC Academy 32, 36 y 37 accesibles en Drive con los programas oficiales A1/A2 de las convocatorias 2025.';
  const motive37 = 'Corrección de referencia curricular: el bloque Academy 37, no el bloque 26, es el documento de imágenes/digitalización/impresión 3D consultado.';
  const byId = new Map(log.cambios.map(c => [c.id, c]));
  let replaced = 0;
  for (const [key, [block, note]] of Object.entries(academy)) {
    const id = Number(key), q = bank.preguntas.find(x => x.id === id), entry = byId.get(id);
    if (!q || !entry) throw Error(`Falta pregunta o registro ${id}`);
    const corrections = entry.correcciones_posteriores || [];
    if ([5207,5208,5209].includes(id) && !corrections.some(x => x.motivo === motive37)) corrections.push({fecha:'2026-11-12', motivo:motive37, clasificacion_anterior:{bloque_academia:q.clasificacion.bloque_academia, nota:q.clasificacion.nota}, clasificacion_actualizada:{bloque_academia:block, nota:note}});
    if (!corrections.some(x => x.motivo === motive)) {
      const before = {bloque_academia: q.clasificacion.bloque_academia, nota: q.clasificacion.nota};
      corrections.push({fecha:'2026-11-12', motivo:motive, clasificacion_anterior:before, clasificacion_actualizada:{bloque_academia:block, nota:note}});
    }
    q.clasificacion.bloque_academia = block;
    q.clasificacion.nota = note;
    entry.correcciones_posteriores = corrections;
    entry.actualizada = structuredClone(q);
  }
  const byIdUpdated = new Map(log.cambios.map(c => [c.id, c]));
  const raw = fs.readFileSync(bankPath, 'utf8');
  const output = raw.replace(/^    \{[\s\S]*?^    \}/gm, block => {
    const old = JSON.parse(block), change = byIdUpdated.get(old.id);
    if (!change) return block;
    replaced++;
    return JSON.stringify(change.actualizada, null, 2).split('\n').map(line => `    ${line}`).join('\n');
  });
  if (replaced !== 5) throw Error(`Se esperaban 5 actualizaciones de academia; hubo ${replaced}`);
  fs.writeFileSync(bankPath, output);
  fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
}
