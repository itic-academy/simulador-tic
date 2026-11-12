const fs=require('node:fs'),path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const drive={
  data:'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk',
  protocols:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',
  security:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',
  systems:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',
  signatures:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk'
};
const records=[
 [5506,[75],['II-4'],['OLAP','Data Warehouse','roll-up','drill-up','agregación','jerarquía'],[
  {url:'https://learn.microsoft.com/en-us/sql/machine-learning/r/using-data-from-olap-cubes-in-r?view=sql-server-ver17',referencia:'Microsoft Learn describe drill-up como navegación desde detalle a un nivel superior de agregación; la opción Roll-up nombra esta operación OLAP de resumen.'},
  {url:'https://learn.microsoft.com/en-us/system-center/scsm/olap-cubes-overview?view=sc-sm-2025',referencia:'Microsoft Learn, cubos OLAP y agregaciones: la navegación drill-down recorre una jerarquía desde un resumen hacia niveles de mayor detalle; roll-up es su inversa.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 75: data lake, data warehouse, lakehouse y sistemas de explotación de datos.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema II.4: inteligencia de negocios, almacenes de datos, OLTP y OLAP.'},
  {url:drive.data,referencia:'ITIC Academy 2026, bloque 34 Business Intelligence y Big Data: Data Warehouse, OLTP/OLAP y operaciones sobre cubos.'}
 ],null,'La operación OLAP de resumen que sube en una jerarquía y muestra valores agregados, con menos detalle, es roll-up (también denominada drill-up en algunas herramientas). Drill-down realiza el recorrido inverso hacia más detalle. Se normaliza la grafía de la opción y se concreta el contexto OLAP.','corregida'],
 [5507,[111],['IV-8'],['OSI','capa de sesión','puntos de sincronización','major sync point','minor sync point','ISO 8327','ITU-T X.225'],[
  {url:'https://www.itu.int/rec/T-REC-X.225/en',referencia:'ITU-T X.225 (ISO/IEC 8327), protocolo de sesión OSI vigente: especifica los SPDUs de punto de sincronización menor y mayor; el simétrico es una variante funcional, no una tercera categoría de la clasificación habitual.'},
  {url:'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.225-199511-I%21%21PDF-E&lang=e&type=items',referencia:'Texto de X.225: define minor synchronization point (7.20–7.21) y major synchronization point (7.22–7.23), con semánticas y confirmación diferentes.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 111: modelo OSI, arquitectura y capas.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema IV.8: modelo TCP/IP y modelo OSI, capas, interfaces y protocolos.'},
  {url:drive.protocols,referencia:'ITIC Academy 2026, bloque 43 Protocolos: OSI/TCP-IP, capas y protocolos.'}
 ],null,'En la clasificación habitual del servicio de sincronización de OSI se distinguen dos clases: puntos mayores y menores. X.225 define ambos SPDUs y sus procedimientos. La sincronización simétrica permite definir puntos en cada dirección y es una modalidad, no el tercer tipo que sugieren los distractores.','corregida'],
 [5508,[80,81],['IV-12'],['Kerberos','KDC','tercera parte de confianza','tickets','claves de sesión','autenticación'],[
  {url:'https://www.rfc-editor.org/rfc/rfc4120.html',referencia:'RFC 4120, Kerberos V5: define el KDC por reino, el Authentication Server y el Ticket-Granting Server; los participantes confían en el KDC y usan tickets y claves secretas compartidas.'},
  {url:'https://www.rfc-editor.org/rfc/rfc6784.html',referencia:'RFC 6784 resume Kerberos V5 como sistema de autenticación basado en tercero de confianza y señala que se necesita al menos un KDC por realm.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, temas 80–81: identificación, autenticación, protocolos de directorio y mecanismos de identificación.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema IV.12: seguridad en redes, control de accesos y protocolos seguros.'},
  {url:drive.security,referencia:'ITIC Academy 2026, bloque 48 Seguridad en redes y nivel de aplicación: autenticación, control de accesos y protocolos seguros.'}
 ],null,'La opción A describe el requisito arquitectónico esencial: Kerberos necesita una autoridad central de confianza, el KDC del realm, que autentica y emite tickets y claves de sesión. No requiere un par de claves pública/privada por usuario ni una red interna totalmente segura; cada servicio tampoco comparte una clave distinta con todos los usuarios.','corregida'],
 [5509,[62],['III-5'],['VSAM','Virtual Storage Access Method','z/OS','método de acceso','organización de archivos'],[
  {url:'https://www.ibm.com/docs/en/zos-basic-skills?topic=set-what-is-vsam',referencia:'IBM Documentation: VSAM significa Virtual Storage Access Method; es tanto un tipo de conjunto de datos como el método de acceso utilizado para gestionarlos.'},
  {url:'https://www.ibm.com/docs/en/cobol-zos/6.5.0?topic=program-processing-vsam-files',referencia:'IBM Documentation para z/OS COBOL define VSAM como Virtual Storage Access Method y documenta su uso como método de acceso a archivos en almacenamiento de acceso directo.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 62: z/OS y otros sistemas operativos; la pregunta examina el entorno de mainframe.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema III.5: organizaciones de ficheros y estructuras de datos.'},
  {url:drive.systems,referencia:'ITIC Academy 2026, bloque 27 Sistemas Operativos: incluye z/OS en el tema A1-62; se usa como mapa curricular para el contexto mainframe.'}
 ],null,'VSAM se expande como Virtual Storage Access Method. En z/OS el término designa el método de acceso y, por extensión, los conjuntos de datos gestionados mediante él; IBM distingue KSDS, ESDS, RRDS y LDS. Se corrige la capitalización y se evita presentarlo como un lenguaje o algoritmo.','corregida'],
 [5510,[80],['I-6'],['CAdES','XAdES','firma separada','detached','firma envolvente','firma enveloping','contenido encapsulado'],[
  {url:'https://www.etsi.org/deliver/etsi_tr/119100_119199/119100/01.01.01_60/tr_119100v010101p.pdf',referencia:'ETSI TR 119 100, sección 8.2.3: CAdES puede ser detached si eContent está vacío; XAdES puede ser detached, enveloped o enveloping. “Explícita” no es aquí la denominación técnica adecuada.'},
  {url:'https://www.etsi.org/deliver/etsi_ts/119100_119199/11910201/01.02.01_60/ts_11910201v010201p.pdf',referencia:'ETSI TS 119 102-1: la creación de una firma avanzada debe indicar, cuando proceda, si será detached, enveloped o enveloping.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 80: firma electrónica, formatos y certificados.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema I.6: identidad y firma electrónica, régimen jurídico, eIDAS y DNI electrónico.'},
  {url:drive.signatures,referencia:'ITIC Academy 2026, bloque 36 Seguridad, criptografía, identificación y firma: formatos XAdES/CAdES y firma detached/attached.'}
 ],null,'CAdES puede transportar el contenido firmado o ser detached/separada, dejando eContent vacío. XAdES no se limita a firmas separadas: puede ser detached, enveloped (la firma dentro del documento XML firmado) o enveloping (el objeto firmado dentro de la estructura de firma). Se corrige “explícitas” por el término técnico “separadas (detached)” y se conserva B.','corregida']
];
const edits={
 5506:{texto:'En un cubo OLAP, ¿cómo se denomina la operación que sube en una jerarquía para mostrar datos con mayor nivel de agregación y menor detalle?',opciones:['Roll-up (drill-up).','Slice-and-dice.','Drill-down.','Drill-across.'],respuesta_correcta:0},
 5507:{texto:'En la capa de sesión del modelo OSI, ¿qué clases de puntos de sincronización se distinguen habitualmente?',opciones:['Dos: mayores y menores.','Tres: mayores, medianos y menores.','Ninguno.','Depende del protocolo implementado.'],respuesta_correcta:0},
 5508:{texto:'El sistema Kerberos de autenticación y distribución de claves de sesión necesita:',opciones:['Un centro de distribución de claves (KDC) de confianza para los principales de cada realm.','Que cada usuario tenga un par de claves pública y privada reconocidas por todos los servidores.','Una red interna totalmente segura.','Que cada servidor de aplicaciones comparta una clave secreta distinta con todos los usuarios que podrían solicitarle servicios.'],respuesta_correcta:0},
 5509:{texto:'En z/OS, las siglas VSAM significan:',opciones:['Virtual Storage Access Method.','Verification System Access Method.','Very Short Access Method.','Valued Storage Archival Method.'],respuesta_correcta:0},
 5510:{texto:'Respecto a las firmas electrónicas CAdES y XAdES y a la inclusión del documento firmado, señale la afirmación correcta:',opciones:['El documento firmado siempre se incluye dentro del fichero de firma, tanto en XAdES como en CAdES.','En CAdES, el contenido firmado puede no incluirse en la firma: es una firma separada (detached).','El documento firmado se incluye en XAdES y no puede incluirse en CAdES.','XAdES sólo permite firmas separadas y no admite incluir el contenido firmado en la estructura XML.'],respuesta_correcta:1}
};
const logFile=path.join(__dirname,'cambios-lote-1037.json');
if(!fs.existsSync(logFile))aplicar({numero:'1037',fecha:'2026-11-12',records,edits});
// Completa la referencia curricular de academia en las instantáneas auditadas.
const bankFile=path.join(__dirname,'..','preguntas_preparatic.json');
let bank=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
const academy={
  5506:'ITIC Academy 2026, bloque 34 Business Intelligence y Big Data: data warehouse, cubos OLAP y operaciones de agregación.',
  5507:'ITIC Academy 2026, bloque 43 Protocolos: arquitectura OSI, capas y protocolos de red.',
  5508:'ITIC Academy 2026, bloque 48 Seguridad en redes y nivel de aplicación: autenticación, control de accesos y protocolos seguros.',
  5509:'ITIC Academy 2026, bloque 27 Sistemas Operativos: z/OS en el tema A1-62; mapa curricular del entorno mainframe.',
  5510:'ITIC Academy 2026, bloque 36 Seguridad, criptografía, identificación y firma: formatos CAdES/XAdES y firmas separadas o detached.'
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id);
 q.clasificacion.bloque_academia=academy[c.id];
 q.clasificacion.nota='Cotejado con el programa oficial A1/A2 2025 y el material de ITIC Academy 2026 usado como mapa curricular; la evidencia de respuesta se apoya en las fuentes primarias citadas.';
 if(c.id===5511){q.clasificacion.estado='pendiente_ambiguedad';q.clasificacion.nota='La fuente oficial MÉTRICA v3 confirma JAD como técnica de obtención de requisitos, pero no respalda la lista cerrada de rasgos atribuida por el enunciado. Se conserva la clave original sin validarla hasta identificar su fuente o reformular la pregunta.';}
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankFile,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
