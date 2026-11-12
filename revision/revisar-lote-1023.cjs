const fs=require('node:fs'),path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const records=[
 [5436,[75],['II-4','III-15'],['data lakehouse','data lake','data warehouse','arquitectura de datos'],[
  {url:'https://docs.databricks.com/aws/en/lakehouse/',referencia:'Databricks, What is a data lakehouse?: define el lakehouse como un sistema de gestión de datos que combina beneficios de data lakes y data warehouses; se usa como descripción de arquitectura, no estándar universal.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 75: tecnologías de explotación de datos, data lakes y sistemas relacionados.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema II.4 (inteligencia de negocios y almacenes) y III.15 (Big Data y tecnologías de datos).'},
  {url:'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk',referencia:'ITIC Academy, bloque 34 Business Intelligence y Big Data 2026: el temario A1 incluye expresamente data lake, data warehouse, lakehouse, data fabric y data mesh; sección 6 trata lakehouse.'}
 ],null,'La respuesta C es correcta. Se reformula la pregunta para describir el patrón arquitectónico lakehouse, que combina capacidades asociadas a data lake y data warehouse. La definición es de uso técnico extendido, no una taxonomía normativa ni una arquitectura única prescrita; las implementaciones pueden diferir.','corregida'],
 [5437,[79],['IV-12'],['cifrado César','cifrado por sustitución','clave simétrica','criptografía histórica'],[
  {url:'https://adfonteslibrary.org/work-suetonius-julius',referencia:'Suetonio, Divus Julius 56.6: describe el cifrado epistolar atribuido a César por sustitución de letras (cuarta letra por la primera, etc.); fuente primaria histórica.'},
  {url:'https://csrc.nist.gov/glossary/term/symmetric_key',referencia:'NIST CSRC Glossary, symmetric key: los algoritmos simétricos usan la misma clave secreta para una operación y su inversa, por ejemplo cifrar y descifrar.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 79: cifrado, algoritmos simétricos y asimétricos.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema IV.12: técnicas criptográficas y protocolos seguros.'},
  {url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',referencia:'ITIC Academy, bloque 36 Seguridad y Criptografía 2026.1: criptografía simétrica, asimétrica y algoritmos legados; no se plantea la clasificación del cifrado romano como hecho normativo.'}
 ],null,'Se acota el enunciado al cifrado por sustitución atribuido a Julio César y descrito por Suetonio, en vez de generalizar a todos los métodos usados en Roma. La clave/transformación es compartida y su inversión descifra, por lo que corresponde a criptografía simétrica. Se marca histórica: ilustra un principio criptográfico, pero no es seguro para proteger información actual.','historica'],
 [5438,[81],['I-6'],['DNI electrónico','certificado de componente','zona pública','chip DNIe','X.509'],[
  {url:'https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_083',referencia:'Portal oficial DNIe de la Policía Nacional, Características electrónicas de la tarjeta (versión indicada en la página: 05/05/2026): enumera el certificado X.509 de componente dentro de la zona pública del chip.'},
  {url:'https://www.dnielectronico.es/PDFs/Guia_de_Referencia_DNIe_con_NFC.pdf',referencia:'Guía de referencia oficial DNIe con NFC: descripción del chip y de sus zonas de acceso; confirma los datos del certificado de componente.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 81: PKI, mecanismos de identificación/firma, smart cards y DNI electrónico.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema I.6: identidad electrónica y DNIe.'},
  {url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',referencia:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma 2026.1, apartados 9–10: X.509, certificados, smart cards y DNIe; cobertura directa.'}
 ],null,'La respuesta D, zona pública, queda corroborada por la ficha oficial del chip DNIe: allí se enumera el certificado X.509 de componente, distinto de los certificados de autenticación y firma ubicados en la zona privada. Se actualiza la referencia a las características electrónicas publicadas por la Policía Nacional para la tarjeta DNIe actual.','vigente'],
 [5439,[81],['I-6'],['ISO/IEC 7816-3','tarjetas inteligentes','interfaz eléctrica','protocolos de transmisión'],[
  {url:'https://www.iso.org/standard/38770.html?browse=tc',referencia:'ISO/IEC 7816-3:2006: Parte 3 para tarjetas con contactos, interfaz eléctrica y protocolos de transmisión; la ficha señala que está en revisión.'},
  {url:'https://www.iso.org/standard/84545.html?browse=tc',referencia:'ISO/IEC 7816-3:2006/Amd 1:2025: enmienda publicada que añade clases de tensión.'},
  {url:'https://www.iec.ch/catalogue',referencia:'IEC Webstore, ISO/IEC 7816-3:2006 y AMD1:2025: identifica el alcance como interfaz eléctrica y protocolos de transmisión.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 81: smart cards y mecanismos de identificación/firma.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema I.6: DNI electrónico e identidad electrónica; referencia curricular contextual.'},
  {url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',referencia:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma 2026.1, apartado 10: smart cards y DNIe, contexto curricular sin desglose detallado de las partes ISO 7816.'}
 ],null,'La respuesta 7816-3 es correcta: la Parte 3 cubre tarjetas con contactos, interfaz eléctrica y protocolos de transmisión. Se moderniza el enunciado, ya que la edición publicada es 2006 con la enmienda 1:2025 sobre clases de tensión y la ficha ISO indica que hay una revisión en curso; no se presenta la edición como inmutable.','corregida'],
 [5440,[67],['III-10'],['Jakarta Persistence','JPA','mapeo objeto-relacional','bases de datos relacionales','Java'],[
  {url:'https://jakarta.ee/specifications/persistence/3.2/jakarta-persistence-spec-3.2.html',referencia:'Jakarta Persistence 3.2 (Eclipse Foundation): especificación final que define gestión de persistencia y mapeo objeto-relacional para datos mantenidos en bases relacionales.'},
  {url:'https://jakarta.ee/specifications/persistence/3.2/',referencia:'Jakarta EE: Jakarta Persistence 3.2 es la versión final de la especificación para Jakarta EE 11; “JPA” es el nombre histórico Java Persistence API.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 67: entorno de desarrollo Java.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema III.10: arquitectura Java EE/Jakarta EE, persistencia, productos y herramientas.'},
  {url:'https://drive.google.com/file/d/1LuUHoQr8oDmptteHIQ72VdCvJFsnu3LF/view?usp=drivesdk',referencia:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información 2026.2: Java/Jakarta EE y persistencia; mapa de estudio contextual.'}
 ],null,'Se mantiene B, pero se precisa el nombre actual y la función. Jakarta Persistence (antes Java Persistence API, JPA) es una especificación/API de Java para persistencia y mapeo objeto-relacional; ORM es la técnica/concepto general, mientras que JDBC es una API distinta de acceso a bases de datos. La pregunta evita sugerir que Jakarta Persistence sea la única forma Java de acceder a una base relacional.','corregida']
];
const edits={
 5436:{texto:'¿Qué patrón arquitectónico de gestión de datos se describe habitualmente como una combinación de capacidades de un data lake y un data warehouse?',opciones:['Data Mart.','Data Fabric.','Data Lakehouse.','Data Mesh.']},
 5437:{texto:'El cifrado por sustitución de letras atribuido a Julio César y descrito por Suetonio se clasifica, usando la terminología criptográfica actual, como cifrado de clave:',opciones:['simétrica.','asimétrica.','diferencial.','simétrica o asimétrica, según el algoritmo.']},
 5438:{texto:'Según la descripción oficial de las zonas del chip DNIe, ¿en cuál se almacena el certificado X.509 de componente?',opciones:['Zona de seguridad.','Zona autónoma.','Zona privada.','Zona pública.']},
 5439:{texto:'En la familia ISO/IEC 7816 para tarjetas de circuito integrado con contactos, ¿qué parte especifica la interfaz eléctrica y los protocolos de transmisión?',opciones:['ISO/IEC 7816-2.','ISO/IEC 7816-3.','ISO/IEC 7816-4.','ISO/IEC 7816-5.']},
 5440:{texto:'¿Qué especificación/API de Java, históricamente denominada Java Persistence API (JPA), define el mapeo objeto-relacional y la gestión de persistencia?',opciones:['JRDB.','Jakarta Persistence.','ORM, que es la especificación Java concreta de persistencia.','Ninguna de las anteriores.']}
};
const academy={
 5436:'ITIC Academy, bloque 34 Business Intelligence y Big Data 2026: apartado 6 Data Lakehouse; el temario oficial del bloque enumera expresamente lake, warehouse, lakehouse, fabric y mesh.',
 5437:'ITIC Academy, bloque 36 Seguridad y Criptografía 2026.1: clasificación entre criptografía simétrica/asimétrica y algoritmos legados; no pretende atribuir una taxonomía moderna a la fuente histórica romana.',
 5438:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma 2026.1, apartados 9–10: X.509, smart cards y DNIe; contenido contextual coincidente.',
 5439:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma 2026.1, apartado 10: tarjetas inteligentes y DNIe; no desglosa la serie ISO/IEC 7816 por partes.',
 5440:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información 2026.2: Java/Jakarta EE y persistencia; cobertura curricular contextual.'
};
const logFile=path.join(__dirname,'cambios-lote-1023.json');
if(!fs.existsSync(logFile)) aplicar({numero:'1023',fecha:'2026-11-12',records,edits});
const bankFile=path.join(__dirname,'..','preguntas_preparatic.json'),data=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
for(const c of log.cambios){const q=data.preguntas.find(q=>q.id===c.id),record=records.find(r=>r[0]===c.id);q.revision.estado=record[7];q.revision.observaciones=record[6];q.comentarios=record[6];q.clasificacion.bloque_academia=academy[c.id];q.clasificacion.nota='Clasificación cotejada con el programa oficial; ITIC Academy se usa como mapa curricular cuando se indica, no como autoridad técnica o normativa.';c.actualizada=structuredClone(q)}
fs.writeFileSync(bankFile,JSON.stringify(data,null,2)+'\n');fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
