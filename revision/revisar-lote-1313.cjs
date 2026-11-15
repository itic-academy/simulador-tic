const aplicar=require('./aplicar-lote.cjs');
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const xml='https://www.w3.org/TR/xml/';
const idea='https://datatracker.ietf.org/doc/rfc5469/';
const nistPub='https://csrc.nist.gov/glossary/term/public_key';
const nistSig='https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-5.pdf';
const nist175='https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-175b.pdf';
const dicom='https://dicom.nema.org/medical/dicom/current/output/chtml/part05/sect_8.2.2.html';
const ecw='https://wwws.loc.gov/preservation/digital/formats/fdd/fdd000648.shtml';
const mrsid='https://gdal.org/en/stable/drivers/raster/mrsid.html';
const dtw='https://doi.org/10.1109/TASSP.1978.1163055';
const dtwPdf='https://jeffe.cs.illinois.edu/teaching/compgeom/refs/Sakoe-Chiba-DTW.pdf';
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const edits={
6886:{texto:'Según XML 1.0, ¿qué afirmación distingue correctamente el conjunto de caracteres de XML de la codificación de sus bytes?',opciones:['XML solo permite ASCII de 8 bits y no admite caracteres internacionales.','El repertorio de caracteres de XML se basa en Unicode/ISO/IEC 10646; los bytes se codifican, entre otras opciones, como UTF-8 o UTF-16.','MIME es el juego de caracteres obligatorio en cualquier documento XML.','Todos los documentos XML deben almacenarse exclusivamente como UTF-16.'],respuesta_correcta:1},
6888:{texto:'A quiere enviar a B un mensaje confidencial y firmado digitalmente. ¿Qué procedimiento permite que solo B pueda leerlo y que B verifique la firma de A?',opciones:['A cifra el mensaje con la clave privada de B y verifica la firma con la clave privada de A.','A firma el mensaje con su clave privada y cifra el mensaje y la firma para B con la clave pública de B; B descifra con su clave privada y verifica la firma con la clave pública de A.','A cifra el mensaje con su clave pública; B lo descifra con la clave pública de B.','A cifra el mensaje con la clave privada de A; B lo descifra con la clave privada de A.'],respuesta_correcta:1},
6889:{texto:'¿Cuál de estas opciones describe una técnica de compresión sin pérdidas, que permite reconstruir exactamente los datos originales?',opciones:['JPEG baseline con cuantificación de coeficientes DCT.','ECW usando su filtro wavelet irreversible.','MrSID configurado para compresión con pérdida.','Run-length encoding (RLE), que representa repeticiones mediante el valor y su longitud.'],respuesta_correcta:3},
6890:{texto:'En reconocimiento de palabras habladas mediante comparación con patrones de referencia, ¿qué técnica alinea secuencias acústicas de distinta duración mediante deformación temporal dinámica?',opciones:['Dynamic Time Warping (DTW).','Un modelo oculto de Markov (HMM), que es un modelo estadístico de estados y transiciones, no el algoritmo de alineamiento descrito.','Scale-Invariant Feature Transform (SIFT), diseñado para características locales de imágenes.','MIME, formato para codificar mensajes multiparte.'],respuesta_correcta:0}
};
const records=[
[6886,[77],['II-9'],['XML','Unicode','ISO/IEC 10646','UTF-8','UTF-16','codificación de caracteres'],[
{url:xml,referencia:'W3C XML 1.0, secciones 2.2 y 4.3.3: define los caracteres XML con referencia a ISO/IEC 10646; el procesador debe admitir UTF-8 y UTF-16, y la declaración de codificación identifica la representación de bytes cuando procede.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 77: XML y herramientas/lenguajes de marcado.'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, tema II.9: XML, lenguajes de marcado y sus derivaciones.'}
],edits[6886],'Se distingue el repertorio de caracteres de la codificación de bytes. «Unicode» es la respuesta conceptual de la pregunta original, pero XML 1.0 permite distintas codificaciones y exige que los procesadores soporten UTF-8/UTF-16; MIME no es un juego de caracteres.', 'corregida'],
[6887,[79],['IV-12'],['IDEA','International Data Encryption Algorithm','cifrado simétrico','cifrado por bloques','cifrado histórico'],[
{url:idea,referencia:'IETF RFC 5469, sección 3: IDEA (International Data Encryption Algorithm) es un cifrador por bloques que emplea clave de 128 bits y opera sobre bloques de 64 bits; el RFC lo documenta como suite TLS heredada.'},
{url:'https://www.rfc-editor.org/rfc/rfc2440',referencia:'IETF RFC 2440, OpenPGP, lista IDEA entre los algoritmos simétricos de cifrado por bloques.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, temas 79 y 125: algoritmos simétricos y asimétricos, y técnicas criptográficas en seguridad de redes.'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, tema IV.12: técnicas criptográficas y protocolos seguros.'}
],null,'Se conserva como pregunta histórica y se mantiene la clave: IDEA es un cifrador simétrico de bloques (bloque de 64 bits, clave de 128 bits). Su identificación como algoritmo legado no implica recomendarlo para nuevos sistemas; se contrasta con RFC del IETF.', 'historica'],
[6888,[79,80,81],['I-6','IV-12'],['criptografía asimétrica','confidencialidad','firma digital','clave pública','clave privada','autenticación'],[
{url:nistPub,referencia:'NIST CSRC Glossary, public key: para firmas, la clave pública verifica la firma generada con la clave privada correspondiente; para cifrado, se usa la clave pública del destinatario para proteger información que solo su clave privada puede descifrar.'},
{url:nistSig,referencia:'NIST FIPS 186-5, Digital Signature Standard: define la generación de firmas con la clave privada y su verificación con la clave pública correspondiente.'},
{url:nist175,referencia:'NIST SP 800-175B, mecanismos criptográficos: diferencia los usos de cifrado asimétrico y de firma digital y establece que la autenticidad depende de vincular correctamente la clave pública a su titular.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, temas 79–81: cifrado, claves, identificación y firma electrónica.'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, temas I.6 (identidad/firma) y IV.12 (técnicas criptográficas y firma digital).'}
],edits[6888],'La pregunta original se autodenominaba «sistema simétrico» aunque describía pares de claves públicas/privadas y usaba una notación en la que «cifrar con la clave privada» podía confundirse con una firma. Se separan las operaciones: A firma con su clave privada, cifra para B con la pública de B; B descifra con su privada y verifica con la pública de A. La verificación presupone que la clave pública está autenticada como perteneciente a A.', 'corregida'],
[6889,[56,74],[],['compresión sin pérdidas','RLE','run-length encoding','JPEG','ECW','MrSID','datos ráster'],[
{url:dicom,referencia:'DICOM PS3.5, sección 8.2.2: clasifica RLE como esquema de compresión byte-oriented sin pérdidas y remite a la sintaxis de transferencia definida en el anexo G.'},
{url:ecw,referencia:'Library of Congress, formato ECW: identifica el formato como compresión wavelet irreversible/con pérdida, incluso cuando la calidad visual pueda parecer casi sin pérdida.'},
{url:mrsid,referencia:'GDAL, driver MrSID: explica que la tecnología admite codificación con pérdida y sin pérdida; por ello la pregunta original, que trataba el formato sin especificar modo, podía tener más de una respuesta.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, temas 56 (tratamiento de información multimedia) y 74 (sistemas de información geográfica).'}
],edits[6889],'Se evita la ambigüedad de tratar un formato completo como siempre con pérdida o sin ella: MrSID admite ambos modos. Se especifican JPEG baseline cuantificado, ECW irreversible y MrSID en modo con pérdida; RLE es un método de compresión reversible sin pérdida.','corregida'],
[6890,[70],['III-5'],['reconocimiento del habla','Dynamic Time Warping','DTW','alineamiento temporal','plantillas acústicas','inteligencia artificial'],[
{url:dtw,referencia:'Sakoe y Chiba, IEEE Transactions on Acoustics, Speech, and Signal Processing 26(1), 1978, DOI 10.1109/TASSP.1978.1163055: describe la normalización temporal dinámica (DP-matching) para reconocimiento de palabras habladas mediante alineamiento no lineal de patrones.'},
{url:dtwPdf,referencia:'Copia de consulta del artículo original Sakoe-Chiba: explica que DP-matching alinea patrones de habla mediante una función de deformación temporal.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 70: inteligencia artificial, clasificación y áreas de aplicación.'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, tema III.5: fundamentos de inteligencia artificial, tecnologías asociadas y áreas de aplicación.'}
],edits[6890],'Se conserva la respuesta DTW, pero se corrige el error tipográfico y se formula el criterio como alineamiento temporal de patrones acústicos. El trabajo clásico de Sakoe y Chiba documenta este uso en reconocimiento de palabras habladas; HMM es un modelo estadístico distinto y SIFT se refiere a visión por computador.', 'corregida']
];
aplicar({numero:'1313',fecha:'2026-11-15',records,edits});
// Rectifica una correspondencia A2 incorrecta incorporada al revisar el ID 6872:
// criptografía pertenece a IV.12, no al tema II.12 de atención a usuarios.
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json');
const changesPath=path.join(__dirname,'cambios-lote-1310.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),prior=JSON.parse(fs.readFileSync(changesPath,'utf8'));
const q=bank.preguntas.find(x=>x.id===6872),item=prior.cambios.find(x=>x.id===6872);
assert.ok(q&&item,'Falta la pregunta 6872 para rectificar su clasificación');
q.clasificacion.A2=['A2-IV-12'];
const fix='Rectificación editorial del lote 1313: corregida la correspondencia A2, de II.12 (atención a usuarios) a IV.12 (técnicas criptográficas). La fuente NIST sigue respaldando el concepto de hash; esta actualización afecta solo a la clasificación curricular.';
q.clasificacion.nota=`${q.clasificacion.nota} ${fix}`.trim();
q.revision.observaciones=`${q.revision.observaciones} ${fix}`.trim();
q.comentarios=`${q.comentarios} ${fix}`.trim();
item.actualizada=structuredClone(q);
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(changesPath,JSON.stringify(prior,null,2)+'\n');
console.log('Corrección de clasificación curricular 6872 registrada dentro de su historial original.');
