const apply = require('./aplicar-lote.cjs');

const sources = {
  xml: [
    { url: 'https://www.w3.org/TR/xml/', referencia: 'W3C, Extensible Markup Language (XML) 1.0, Fifth Edition, §§2 y 4: físicamente un documento XML se compone de unidades de almacenamiento llamadas entidades, identificadas por nombre y con contenido.' }
  ],
  pdl: [
    { url: 'https://helpx.adobe.com/indesign/desktop/print/print-production-and-file-creation/about-postscript-and-eps-files.html', referencia: 'Adobe, About PostScript and EPS files (actualizado 2-06-2026): PostScript describe páginas y EPS es un documento PostScript encapsulado para incrustar gráficos/documentos.' },
    { url: 'https://helpx.adobe.com/photoshop/desktop/save-and-export/export-files-to-different-formats/image-file-formats-supported-in-photoshop.html', referencia: 'Adobe Photoshop, formatos de imagen: EPS es un formato de archivo PostScript usado en aplicaciones de maquetación y gráficos.' },
    { url: 'https://www.hp.com/ctg/Manual/bpl13210.pdf', referencia: 'HP, PCL 5 Printer Language Technical Reference Manual: describe los comandos y la estructura del lenguaje de impresora PCL.' },
    { url: 'https://www.adobe.com/lu_en/products/adobe-embedded-print-engine/faqs.html', referencia: 'Adobe Embedded Print Engine, FAQ: el RIP recibe la descripción PDL y produce una salida raster; es un componente de procesamiento, no un formato de descripción de páginas.' }
  ],
  dnie: [
    { url: 'https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_085', referencia: 'Portal oficial DNIe, PKI, Algoritmia y Claves: las claves RSA de los certificados del ciudadano son de 2048 bits; las claves de CA raíz y subordinadas son categorías distintas y pueden tener otros tamaños.' },
    { url: 'https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?id_menu=%2851%29&pag=REF_1008', referencia: 'Portal oficial DNIe, Novedades/FAQ sobre PIN: recomendación divulgativa de una clave no predecible y de incluir caracteres alfanuméricos, mayúsculas/minúsculas y signos de puntuación; se cita como recomendación, no como requisito normativo.' },
    { url: 'https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_060', referencia: 'Portal oficial DNIe, Modo de funcionamiento: la plataforma de validación consulta el estado del certificado y comunica si sigue vigente/no revocado; esta función no es la de la Autoridad de Certificación que lo emite.' }
  ],
  attached: [
    { url: 'https://www.bitsavers.org/pdf/floatingPointSystems/FPS-164/FPS-164_Brochure_198311.pdf', referencia: 'Floating Point Systems, FPS-164 Attached Processor / Single Job Executive brochure (1983), material de fabricante conservado en archivo técnico: documenta un procesador científico acoplado al ordenador host y bibliotecas optimizadas de cálculo.' },
    { url: 'https://www.ibm.com/docs/en/module_1678991624569/pdf/SA22-7832-13.pdf', referencia: 'IBM, z/Architecture Principles of Operation: documenta las instalaciones vectoriales del mainframe para operaciones SIMD y de coma flotante; es un mecanismo integrado actual y distinto del coprocesador científico adjunto histórico.' }
  ],
  stego: [
    { url: 'https://csrc.nist.gov/glossary/term/steganography', referencia: 'NIST CSRC Glossary, steganography; recoge definiciones de CNSSI 4009-2022 y NIST SP 800-72/800-86: ocultar la existencia de una comunicación o insertar datos dentro de otros datos para ocultarlos.' }
  ]
};

const academy = {
  xml: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view', referencia: 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1, §§9.1–9.3: XML, XML bien formado/válido, DTD y XML Schema; no se presenta la estructura física XML como tema aislado.' },
  image: { url: 'https://drive.google.com/file/d/1Lnqt8EzWVziJsOeb4iw2DhJuev6P5xZU/view', referencia: 'ITIC Academy, bloque 83–84 «Tratamiento de imágenes. OCR», §1 (digitalización e impresión); el temario abarca tecnologías de impresión, no una taxonomía exhaustiva de formatos PDL.' },
  dnie: { url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view', referencia: 'ITIC Academy, bloque 36 «Seguridad, criptografía, identificación y firma», versión 2026.1, §10.1 (DNI electrónico y DNI digital/MiDNI), y §4 (ciclo de vida y validación de certificados).' },
  hpc: { url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view', referencia: 'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1, §3.3 (HPC, supercomputación, Grid y mainframe): tratamiento contemporáneo; no se desarrolla el modelo histórico de coprocesador científico adjunto.' },
  stego: { url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view', referencia: 'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», versión 2026.1, §2 (tipos de ataques) y referencias a preguntas de examen históricas sobre esteganografía.' }
};

const records = [
  [1326, [77], ['II-9'], ['XML', 'SGML', 'lenguaje de marcas', 'entidades XML'], sources.xml, null,
    'La especificación XML 1.0 denomina entidades a las unidades de almacenamiento de un documento. Se corrige la traducción de la opción (“Entradas”) por “Entidades”; las entidades pueden ser analizadas o no analizadas y participar en la estructura física del documento. Cotejo con ITIC Academy, bloque 30, §§9.1–9.3.', 'corregida'],
  [1327, [83], [], ['impresión', 'formatos de página', 'EPS', 'PDF', 'PCL', 'RIP'], sources.pdl, null,
    'Se mantiene la clave RIP: EPS/PostScript, PDF y PCL son formatos/lenguajes que describen contenido de página para flujos de impresión, mientras que RIP significa Raster Image Processor y convierte la entrada PDL en una salida raster para el dispositivo. Se precisa en la explicación que el RIP es software/componente de procesamiento, no un formato. Cotejo con el bloque 83 de ITIC Academy, que cubre tecnologías de impresión pero no ofrece una taxonomía PDL completa.', 'vigente'],
  [1328, [80, 81], ['I-6', 'IV-12'], ['DNI electrónico', 'DNIe', 'PIN', 'PKI', 'certificados', 'claves RSA', 'validación'], sources.dnie, null,
    'La opción del PIN solo es correcta como recomendación divulgativa, no como obligación normativa: se reformula la pregunta para expresar ese alcance. Se distingue la Autoridad de Certificación (emisión) de la plataforma/autoridad de validación (consulta de vigencia o revocación). El dato de 4096 bits no corresponde a los certificados del ciudadano: la página oficial asigna 2048 bits a las claves de esos certificados y reserva tamaños distintos a algunas CA. Cotejo con ITIC Academy, bloque 36, §§4 y 10.1.', 'corregida'],
  [1329, [52], ['II-1'], ['HPC', 'supercomputación', 'mainframe', 'coprocesador científico', 'FPS-164', 'hardware histórico'], sources.attached, null,
    'La afirmación sobre procesadores científicos acoplados al host describe una arquitectura real de coprocesadores científicos adjuntos (p. ej., FPS-164), que descargaban cálculos vectoriales/de coma flotante y podían trabajar conectados a mainframes. Se conserva como contenido histórico, no como descripción general de aceleradores actuales: los mainframes modernos integran sus propias instalaciones vectoriales/SIMD. Cotejo con ITIC Academy, bloque 26, §3.3, que trata HPC y mainframe actuales sin desarrollar aquel modelo histórico; el material de fabricante aporta la evidencia específica.', 'historica'],
  [1330, [79], ['IV-12'], ['seguridad', 'esteganografía', 'ocultación de información', 'esteganálisis'], sources.stego, null,
    'La esteganografía oculta que existe una comunicación, por ejemplo insertando un mensaje en otro fichero aparentemente ordinario. Se diferencia del cifrado, que transforma el contenido para hacerlo ilegible pero no necesariamente oculta que se transmite información. Se sustituye el distractor corrupto “Dpyware” por una técnica distinta y reconocible. Cotejo con ITIC Academy, bloque 48, §2 y referencias a preguntas históricas de examen.', 'corregida']
];

apply({ numero: '202', fecha: '2026-10-24', records, edits: {
  1326: { opciones: ['Entidades (entities).', 'Atributos (attributes).', 'Módulos (modules).', 'Objetos (objects).'], respuesta_correcta: 0 },
  1327: { texto: 'En un flujo de impresión, ¿cuál de estos términos designa un procesador que rasteriza la descripción de la página, y no un formato o lenguaje de descripción de páginas?', opciones: ['EPS (Encapsulated PostScript).', 'RIP (Raster Image Processor).', 'PDF (Portable Document Format).', 'PCL (Printer Command Language).'], respuesta_correcta: 1 },
  1328: { texto: 'Según la recomendación divulgativa del portal oficial DNIe para elegir un PIN, ¿qué característica aconseja incorporar?', opciones: [
    'La fecha de nacimiento del titular, para facilitar su recuerdo.',
    'Signos de puntuación, junto con una combinación no predecible de caracteres.',
    'El mismo PIN impreso en la tarjeta para evitar bloqueos.',
    'Únicamente los tres últimos dígitos del número del DNI.'
  ], respuesta_correcta: 1 },
  1329: { texto: 'En la arquitectura histórica de supercomputación, ¿qué función realizaba un “attached scientific processor” como el FPS-164?', opciones: [
    'Sustituía el sistema operativo del ordenador host por un núcleo para dispositivos móviles.',
    'Actuaba como unidad de almacenamiento secundario y no ejecutaba cálculos.',
    'Se acoplaba al ordenador host para acelerar cálculos científicos, especialmente operaciones de coma flotante y sobre vectores/arrays.',
    'Proporcionaba exclusivamente autenticación federada a las aplicaciones del mainframe.'
  ], respuesta_correcta: 2 },
  1330: { texto: '¿Cómo se denomina la técnica que oculta la existencia de un mensaje insertándolo dentro de otro contenido aparentemente ordinario?', opciones: [
    'Cifrado simétrico.',
    'Bytecode.',
    'Esteganografía.',
    'Hash criptográfico.'
  ], respuesta_correcta: 2 }
}});

const fs = require('node:fs');
const path = require('node:path');
const bank = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-202.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const meta = {
  1326: { source: academy.xml, block: 'Bloque 30, Tecnologías de sistemas de información, versión 2026.1, §§9.1–9.3 (XML, buena formación, DTD y XML Schema).', topics: 'A1-77/A2-II-9' },
  1327: { source: academy.image, block: 'Bloque 83–84, Tratamiento de imágenes y OCR, versión 2025, §1 (tecnologías de digitalización e impresión); no desarrolla una taxonomía completa de PDL.', topics: 'A1-83' },
  1328: { source: academy.dnie, block: 'Bloque 36, Seguridad, criptografía, identificación y firma, versión 2026.1, §§4 y 10.1 (certificados, validación y DNI electrónico).', topics: 'A1-80/A1-81/A2-I-6/A2-IV-12' },
  1329: { source: academy.hpc, block: 'Bloque 26, Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1, §3.3 (HPC, supercomputación, Grid y mainframe); no desarrolla el coprocesador científico adjunto histórico.', topics: 'A1-52/A2-II-1' },
  1330: { source: academy.stego, block: 'Bloque 48, Seguridad en redes y en el nivel de aplicación, versión 2026.1, §2 (tipos de ataques); el material conserva referencias de examen a esteganografía.', topics: 'A1-79/A2-IV-12' }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const m = meta[q.id];
  q.clasificacion.bloque_academia = m.block;
  q.clasificacion.nota = `Cotejo temático con ITIC Academy: ${m.block} Correspondencia orientativa con el temario oficial: ${m.topics}.`;
  const comment = ` Cotejo temático con ITIC Academy: ${m.block} Correspondencia orientativa con el temario oficial: ${m.topics}.`;
  q.comentarios = (q.comentarios || '') + comment;
  q.revision.observaciones += comment;
  q.revision.fuentes.push({ url: m.source.url, referencia: `${m.source.referencia} Correspondencia: ${m.topics}.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(__dirname, '..', 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo temático de academia añadido al lote 202.');
