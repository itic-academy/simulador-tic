const fs=require('node:fs'),path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const records=[
 [5386,[63],['III-4'],['BSON','MongoDB','serialización binaria','base de datos documental'],[
  {url:'https://www.mongodb.com/docs/manual/core/document/',referencia:'MongoDB Manual, Documents: MongoDB almacena registros como documentos BSON, representación binaria de documentos JSON con tipos adicionales.'},
  {url:'https://bsonspec.org/spec.html',referencia:'BSON specification: formato de serialización binaria de documentos y arrays; especifica tipos, representación y codificación.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 63: sistemas gestores de bases de datos.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema III.4: modelado de datos y diseño de bases de datos.'},
  {url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',referencia:'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado de Datos 2026: SGBD y modelos de datos; cobertura curricular contextual, sin tema específico de BSON.'}
 ],null,'BSON (Binary JSON) es una serialización binaria de documentos de tipo JSON, con tipos adicionales; MongoDB almacena sus registros como documentos BSON. Se conserva la opción C, precisando que BSON no es compresión de vídeo ni un formato de red expandido como propone el distractor A. La documentación habla de almacenamiento y uso interno, no de que BSON sea un formato genérico de intercambio para toda base de datos.','vigente'],
 [5387,[104],['II-16'],['web scraping','crawling','indexación','robots','spiders'],[
  {url:'https://docs.scrapy.org/en/latest/topics/spiders.html',referencia:'Scrapy, Spiders: un spider determina qué solicitudes enviar, visita/crawlea páginas y analiza respuestas para extraer datos; las solicitudes pueden continuar el rastreo.'},
  {url:'https://developers.google.com/search/docs/fundamentals/how-search-works',referencia:'Google Search Central distingue tres etapas: crawling (descarga de páginas), indexing (análisis y almacenamiento en índice) y serving. Son procesos relacionados, no sinónimos.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 104: recuperación de información y métodos de conservación; cobertura próxima del rastreo y recuperación web.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema II.16: búsqueda de información, robots, spiders y posicionamiento.'},
  {url:'https://drive.google.com/file/d/1k7xJ0zVj4fNRbX5M03raV2Vhh0RZMyHX/view?usp=drivesdk',referencia:'ITIC Academy, bloque 103–104 Gestión Documental, versión 2026: recuperación de información, robots/spiders y buscadores; cotejo curricular directo.'}
 ],null,'El original llama «indexación» al proceso que en Web Scraping visita páginas, pero crawling y indexing no son sinónimos: crawling recorre/descarga páginas y extrae enlaces o datos; indexing analiza y almacena contenido para búsquedas. Se reescribe la pregunta para pedir el nombre del rastreo de páginas, cuya respuesta es A, Crawling.','corregida'],
 [5388,[27],['I-7'],['RGPD','brecha de datos personales','responsable del tratamiento','AEPD','72 horas'],[
  {url:'https://eur-lex.europa.eu/eli/reg/2016/679/oj',referencia:'Reglamento (UE) 2016/679, arts. 33 y 34: corresponde al responsable notificar a la autoridad de control competente, salvo que sea improbable el riesgo; el encargado comunica la brecha al responsable sin dilación indebida.'},
  {url:'https://www.aepd.es/derechos-y-deberes/cumple-tus-deberes/medidas-de-cumplimiento/brechas-de-datos-personales-notificacion',referencia:'AEPD, Notificación de brechas: el responsable valora el riesgo y notifica a la autoridad cuando exista riesgo; el plazo es 72 horas desde que la organización tiene constancia.'},
  {url:'https://www.aepd.es/es/media/guias/guia-brechas-seguridad.pdf',referencia:'AEPD, Guía para la notificación de brechas: desarrolla quién comunica y el cómputo de plazo; la notificación del encargado al responsable no tiene el mismo plazo de 72 horas del art. 33.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 27: RGPD, obligaciones y Agencia Española de Protección de Datos.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema I.7: responsable y encargado del tratamiento y autoridades de protección de datos.'},
  {url:'https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk',referencia:'ITIC Academy, bloque 8 Protección de Datos 2026: RGPD/LOPDGDD, DPD, responsables, encargados y autoridades; cotejo curricular directo.'}
 ],null,'La obligación del artículo 33 RGPD recae en el responsable del tratamiento, que notifica a la autoridad de control competente dentro de 72 horas si la brecha puede generar riesgo; el encargado debe avisar al responsable sin dilación indebida. El DPD puede asesorar o actuar como punto de contacto, pero no sustituye automáticamente al responsable. Se acota «AEPD» a los casos en que sea la autoridad competente. Respuesta C.','corregida'],
 [5389,[46,104],['II-16'],['PDF/A','ISO 19005','preservación documental','formato de archivo'],[
  {url:'https://www.iso.org/cms/%20render/live/en/sites/isoorg/contents/data/standard/03/89/38920.html',referencia:'ISO 19005-1:2005: formato de archivo PDF/A-1 basado en PDF 1.4 para preservación a largo plazo de documentos electrónicos.'},
  {url:'https://www.iso.org/committee/53674/x/catalogue/',referencia:'Catálogo ISO/TC 171/SC 2: familia de normas ISO 19005 para formatos de archivo PDF/A y preservación documental.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, temas 46 y 104: interoperabilidad de documentos/expedientes electrónicos y gestión/conservación documental.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema II.16: sistemas de gestión documental y de contenidos.'},
  {url:'https://drive.google.com/file/d/1k7xJ0zVj4fNRbX5M03raV2Vhh0RZMyHX/view?usp=drivesdk',referencia:'ITIC Academy, bloque 103–104 Gestión Documental, versión 2026: sistemas documentales y políticas/procedimientos de conservación; cotejo curricular directo.'}
 ],null,'ISO 19005 identifica la familia de formatos PDF/A para preservación a largo plazo; la opción 19005-1 designa específicamente PDF/A-1, basado en PDF 1.4. Se precisa esa parte en el enunciado, pues PDF/A no se limita a la primera edición. Respuesta C.','corregida'],
 [5390,[79],['IV-12'],['PGP','OpenPGP','Phil Zimmermann','criptografía','historia de Internet'],[
  {url:'https://www.rfc-editor.org/rfc/rfc4880.html',referencia:'IETF RFC 4880, §1.1: PGP (Pretty Good Privacy) es una familia de sistemas desarrollada por Philip R. Zimmermann, base de OpenPGP.'},
  {url:'https://www.openpgp.org/about/history/',referencia:'OpenPGP, History: PGP fue desarrollado originalmente como freeware en 1991 por Phil Zimmermann.'},
  {url:'https://www.rfc-editor.org/rfc/rfc9580.html',referencia:'IETF RFC 9580 (2024), OpenPGP: IDEA y TripleDES aparecen como algoritmos legados que se pueden descifrar, pero los implementadores no deben usarlos para cifrar; MD5 es un algoritmo hash, no un cifrador.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 79: algoritmos simétricos y asimétricos y criptografía.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema IV.12: técnicas criptográficas, protocolos seguros y firma digital.'},
  {url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',referencia:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma, actualización 2026: criptografía y protocolos; cobertura curricular directa, no centrada en la biografía de Zimmermann.'}
 ],null,'La pregunta original afirmaba que PGP usa IDEA o MD5 «como encriptación» y también que usa TripleDES: MD5 es un hash, y el estándar OpenPGP actual prohíbe cifrar con IDEA/TripleDES aunque permite descifrar mensajes heredados. Para evitar respuestas múltiples o anacrónicas, se limita el reactivo a quién desarrolló PGP originalmente: Philip (Phil) Zimmermann. Respuesta A.','corregida']
];
const edits={
 5387:{texto:'En una tarea de Web Scraping, ¿cómo se denomina el proceso de recorrer y descargar páginas web para localizar contenido y extraer datos? No debe confundirse con la indexación posterior de un buscador.',opciones:['Crawling.','Rasping.','Raspering.','Web-Rasping.']},
 5388:{texto:'Cuando la AEPD es la autoridad de control competente y una brecha de datos personales puede entrañar riesgo para los derechos y libertades, ¿quién tiene la obligación de notificarla conforme al artículo 33 del RGPD?',opciones:['El Delegado de Protección de Datos, que sustituye al responsable.','El jefe de área de Seguridad de la organización.','El responsable del tratamiento; el encargado debe avisarle sin dilación indebida.','El encargado del tratamiento directamente a la AEPD en todos los casos.']},
 5389:{texto:'¿Qué número ISO identifica específicamente el formato PDF/A-1, basado en PDF 1.4, para la preservación a largo plazo de documentos electrónicos?',opciones:['ISO 14000-1.','ISO 18001.','ISO 19005-1.','ISO 690.']},
 5390:{texto:'¿Quién desarrolló originalmente PGP (Pretty Good Privacy) en 1991?',opciones:['Philip (Phil) Zimmermann.','No existe PGP; las siglas corresponden a un algoritmo hash.','La IETF, al publicar el estándar OpenPGP.','RSA Laboratories.']}
};
const academy={
 5386:'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado de Datos 2026: SGBD y modelos de datos; cobertura curricular contextual, sin apartado específico de BSON.',
 5387:'ITIC Academy, bloque 103–104 Gestión Documental 2026: recuperación de información, robots/spiders y buscadores; cotejo directo de la materia relacionada.',
 5388:'ITIC Academy, bloque 8 Protección de Datos 2026: RGPD, DPD, responsables/encargados y autoridades de control; cotejo curricular directo.',
 5389:'ITIC Academy, bloque 103–104 Gestión Documental 2026: gestión documental y conservación a largo plazo; cobertura curricular directa, aunque no se localizó una explicación específica de ISO 19005.',
 5390:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma 2026: criptografía y protocolos; cobertura curricular contextual, sin apartado biográfico sobre Phil Zimmermann.'
};
const logFile=path.join(__dirname,'cambios-lote-1013.json');
if(!fs.existsSync(logFile)) aplicar({numero:'1013',fecha:'2026-11-12',records,edits});
const bankFile=path.join(__dirname,'..','preguntas_preparatic.json'),data=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
for(const c of log.cambios){const q=data.preguntas.find(q=>q.id===c.id),record=records.find(r=>r[0]===c.id);q.revision.estado=record[7];q.revision.observaciones=record[6];q.comentarios=record[6];q.clasificacion.bloque_academia=academy[c.id];q.clasificacion.nota='Clasificación cotejada con el programa oficial; material ITIC Academy usado como mapa curricular cuando se indica, no como autoridad técnica o normativa.';c.actualizada=structuredClone(q)}
fs.writeFileSync(bankFile,JSON.stringify(data,null,2)+'\n');fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
