const fs=require('node:fs'),path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const drive={
 security:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',
 tech:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
 protocols:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',
 networks:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',
 identity:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk'
};
const records=[
 [5476,[126],['II-13','III-12'],['JWT','JWS','JWE','JSON Web Signature','compact serialization'],[
  {url:'https://www.rfc-editor.org/rfc/rfc7519.html',referencia:'RFC 7519 §§3 y 7: JWT puede estar representado como JWS o JWE; el número de segmentos depende de la serialización subyacente.'},
  {url:'https://www.rfc-editor.org/rfc/rfc7515.html',referencia:'RFC 7515 §3.1: JWS Compact Serialization tiene tres segmentos base64url separados por dos puntos.'},
  {url:'https://www.rfc-editor.org/rfc/rfc7516.html',referencia:'RFC 7516 §3.1: JWE Compact Serialization tiene cinco segmentos, por lo que tres partes no define todos los JWT.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 126: protección de aplicaciones, servicios web y ataques en la capa de aplicación.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, temas II.13 y III.12: ciberseguridad y aplicaciones web.'},
  {url:drive.security,referencia:'ITIC Academy 2026, bloque 48, seguridad de redes y aplicaciones: autenticación web y tokens; mapa curricular.'}
 ],null,'La formulación original generalizaba la estructura de tres partes a todo JWT. Se restringe a un JWT firmado en JWS Compact Serialization: sus segmentos son JOSE header, payload y signature. Un JWT cifrado JWE compacto tiene cinco segmentos.','corregida'],
 [5477,[114,125],['IV-11','IV-12'],['IEEE 802.11','WPA','WEP','TKIP','claves temporales'],[
  {url:'https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=50897',referencia:'NIST SP 800-97, §4.3.1: TKIP deriva mediante mezcla de claves una clave WEP dinámica por trama; distingue esta solución histórica de la clave estática de WEP.'},
  {url:'https://www.rfc-editor.org/rfc/rfc5416.html',referencia:'RFC 5416, binding CAPWAP 802.11: identifica TKIP, WEP y AES-CCMP como algoritmos distintos y contempla claves de sesión.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, temas 114 y 125: redes inalámbricas IEEE 802.11 y seguridad en redes.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, temas IV.11 y IV.12: protocolos inalámbricos y seguridad de redes.'},
  {url:drive.security,referencia:'ITIC Academy 2026, bloque 48 §9.1: seguridad Wi-Fi, WEP y WPA/TKIP; se coteja como contexto académico, no como recomendación actual.'}
 ],null,'Se conserva la clave A, precisando que la mejora histórica de WPA/TKIP frente a WEP era derivar y mezclar claves temporales por trama en vez de reutilizar una clave WEP estática. WPA/TKIP está obsoleto y no debe presentarse como una opción segura actual; se pregunta por la diferencia histórica entre esos protocolos.','corregida'],
 [5478,[77],['II-9'],['HTML','XML','XSLT','lenguajes de marcado'],[
  {url:'https://www.w3.org/TR/xml/',referencia:'W3C XML 1.0: especifica una sintaxis de marcado extensible para documentos estructurados; no es un subconjunto de HTML.'},
  {url:'https://html.spec.whatwg.org/',referencia:'WHATWG HTML Living Standard: define HTML como lenguaje de marcado para estructurar documentos y contenido web; HTML no se reduce a presentación visual.'},
  {url:'https://www.w3.org/Style/XSL/',referencia:'W3C XSL: XSLT transforma documentos XML en documentos que pueden usar vocabularios de salida como HTML.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 77: HTML, CSS, XML, navegadores y compatibilidad con estándares.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, tema II.9: lenguajes de marca, SGML, HTML, XML y derivaciones.'},
  {url:drive.tech,referencia:'ITIC Academy 2026, bloque 30, tema A1-77: lenguajes y estándares web HTML/XML y transformación de documentos.'}
 ],null,'La opción B se mantiene como única válida, pero se corrige la simplificación: HTML expresa la estructura/semántica del contenido web y el navegador la presenta; XML define una sintaxis extensible para datos/documentos estructurados. XSLT puede transformar XML a HTML. La opción C es falsa: XML no es un subconjunto de HTML.','corregida'],
 [5479,[115],['II-8','IV-13'],['ICMPv4','ICMP Echo','Type','Code','Checksum','cabecera'],[
  {url:'https://www.rfc-editor.org/rfc/rfc792.html',referencia:'RFC 792: el campo común Type (8 bits), Code (8 bits) y Checksum (16 bits) suma 32 bits; los campos siguientes dependen del tipo de mensaje.'},
  {url:'https://www.rfc-editor.org/rfc/rfc792.html#section-3',referencia:'RFC 792, §3, Echo/Echo Reply: tras los campos comunes se incluyen Identifier y Sequence Number, 16 bits cada uno; por tanto, el encabezado Echo tiene 64 bits antes de los datos.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 115: redes IP y protocolos asociados.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, temas II.8 y IV.13: TCP/IP y arquitectura/servicios de Internet.'},
  {url:drive.protocols,referencia:'ITIC Academy 2026, bloque 43 Protocolos: IPv4/IPv6, TCP/IP y protocolos de control de red.'}
 ],null,'La pregunta genérica no tenía longitud única: ICMPv4 comparte 32 bits (Type, Code y Checksum), pero agrega campos específicos del mensaje. Se concreta a Echo/Echo Reply: incluye Identifier y Sequence Number, así que su cabecera anterior a los datos mide 64 bits (opción B).','corregida'],
 [5480,[80,81],['I-6','I-9'],['DNIe','MiDNI','autenticación','firma electrónica','cifrado'],[
  {url:'https://www.boe.es/buscar/act.php?id=BOE-A-2025-6601',referencia:'Real Decreto 255/2025, arts. 3 y 10: el DNI permite identificación electrónica y firma electrónica conforme a su normativa específica; regula por separado la versión digital móvil.'},
  {url:'https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_085',referencia:'Dirección General de la Policía, PKI del DNIe: distingue los certificados de autenticación y de firma y sus usos.'},
  {url:'https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_051',referencia:'Dirección General de la Policía, seguridad del DNIe: la confidencialidad/cifrado de la comunicación no es una función que proporcione directamente el DNIe; la realiza la aplicación de cifrado.'},
  {url:'https://www.midni.gob.es/',referencia:'Portal oficial MiDNI: describe la aplicación móvil como acreditación/verificación digital de identidad; no debe confundirse con los certificados de autenticación y firma del DNIe.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, temas 80–81: identificación, certificados, PKI y mecanismos de firma.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, temas I.6 y I.9: identidad/firma electrónica e instrumentos de identificación y autenticación.'},
  {url:drive.identity,referencia:'ITIC Academy 2026, bloque 36: DNIe frente a DNI digital/MiDNI, certificados, autenticación y firma; mapa curricular.'}
 ],null,'El término “DNI digital” mezclaba el DNIe con su versión móvil. Se pregunta ahora por los certificados del DNIe: los certificados cubren autenticación e identificación y firma electrónica; el DNIe no cifra por sí solo documentos ni proporciona directamente confidencialidad. MiDNI, la app de acreditación de identidad, no equivale a los certificados del DNIe ni se debe inferir que cifre. Se conserva como correcta A tras precisar su significado.','corregida']
];
const edits={
 5476:{texto:'Un JWT firmado que utiliza JWS Compact Serialization se representa mediante tres segmentos separados por puntos, denominados:',opciones:['JOSE header, payload y signature.','Envelope, body y foot.','Id, timestamp y checksum.','Session, id y duration.'],respuesta_correcta:0},
 5477:{opciones:['Uso de una clave temporal derivada y mezclada por trama mediante TKIP, frente a la clave WEP estática.','Mayor velocidad de transmisión.','Mayor alcance de radio.']},
 5478:{texto:'¿Cuál describe mejor la diferencia entre XML y HTML?',opciones:['HTML solo permite texto; XML es un lenguaje de presentación multimedia que reemplaza a HTML.','XML define una sintaxis extensible para documentos estructurados; HTML define el vocabulario y la semántica del contenido web, y XML puede transformarse a HTML con XSLT.','XML es un subconjunto de HTML.','B y C son ciertas.'],respuesta_correcta:1},
 5479:{texto:'En un mensaje ICMPv4 de solicitud o respuesta Echo, ¿cuántos bits ocupa la cabecera desde Type hasta Sequence Number, antes de los datos?',respuesta_correcta:1},
 5480:{texto:'¿Qué usos corresponden a los certificados del DNI electrónico (DNIe), sin confundirlos con la aplicación móvil MiDNI?',opciones:['Autenticación/identificación electrónica y firma electrónica; el cifrado de documentos no es una función que el DNIe proporcione directamente.','Solo cifrar documentos.','Solo firmar, sin permitir autenticación.','Cifrado de datos mediante 3DES como única función.'],respuesta_correcta:0}
};
const logFile=path.join(__dirname,'cambios-lote-1031.json');
if(!fs.existsSync(logFile))aplicar({numero:'1031',fecha:'2026-11-12',records,edits});
const bankFile=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
const academy={
 5476:'ITIC Academy, bloque 48 Seguridad en redes y aplicaciones 2026.1: autenticación web y tokens; mapa curricular.',
 5477:'ITIC Academy, bloque 48 Seguridad en redes y aplicaciones 2026.1, §9.1: seguridad Wi-Fi, WEP/WPA y protocolos legados. No constituye recomendación de uso actual.',
 5478:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información 2026.1: tema A1-77, estándares HTML, XML y transformación web.',
 5479:'ITIC Academy, bloque 43 Protocolos 2026.1: IPv4, TCP/IP y protocolos de control; bloque 42 Redes como contexto de Internet.',
 5480:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma 2026.1: certificados del DNIe frente a DNI digital/MiDNI.'
};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id);q.clasificacion.bloque_academia=academy[c.id];q.clasificacion.nota='Cotejado con el programa oficial A1/A2 vigente y el material curricular de ITIC Academy. La academia se usa como mapa temático; las respuestas se contrastan con fuentes primarias técnicas o normativas.';c.actualizada=structuredClone(q)}
fs.writeFileSync(bankFile,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
