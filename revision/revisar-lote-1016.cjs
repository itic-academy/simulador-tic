const fs=require('node:fs'),path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const records=[
 [5401,[63],['III-4'],['SGBD','HeidiSQL','cliente de base de datos','MongoDB','MariaDB'],[
  {url:'https://github.com/HeidiSQL/HeidiSQL',referencia:'Proyecto oficial HeidiSQL: lo describe como cliente para administrar MariaDB, MySQL, SQL Server, PostgreSQL, SQLite, Interbase y Firebird; es herramienta cliente, no el servidor SGBD.'},
  {url:'https://mariadb.com/docs/server/',referencia:'MariaDB Server Documentation: MariaDB Server es una base de datos relacional/SGBD.'},
  {url:'https://www.mongodb.com/docs/manual/core/document/',referencia:'MongoDB Manual: MongoDB almacena registros en documentos BSON y constituye un sistema gestor de base de datos documental.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 63: sistemas gestores de bases de datos.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema III.4: diseño y modelado de bases de datos.'},
  {url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',referencia:'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado 2026: SGBD y herramientas de administración; cotejo curricular directo.'}
 ],null,'Se cambia el reactivo a una distinción verificable entre servidor/SGBD y cliente: MongoDB y MariaDB son sistemas de bases de datos; HeidiSQL es un cliente gráfico para conectarse y administrarlos. Se reemplaza el distractor ficticio/ambiguo «MarcoDB» por PostgreSQL, otro SGBD real. La única respuesta es HeidiSQL (C).','corregida'],
 [5402,[69],['II-14'],['AGPLv3','GNU GPL','copyleft de red','código fuente correspondiente','software libre'],[
  {url:'https://www.gnu.org/licenses/agpl-3.0.en.html',referencia:'GNU Affero General Public License v3, §13: si se modifica el programa y la versión permite interacción remota por red, debe ofrecerse gratuitamente a los usuarios remotos la posibilidad de obtener el Corresponding Source de esa versión.'},
  {url:'https://www.gnu.org/licenses/gpl-3.0.html',referencia:'GNU GPL v3: las obligaciones de entrega de fuente se vinculan a convey/distribución del código; la mera interacción remota con un programa modificado no activa la obligación adicional que incorpora AGPL §13.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 69: software libre, software de código abierto y conceptos base.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema II.14: software libre/propietario y tipos de licencias.'},
  {url:'https://drive.google.com/file/d/18qm2iCLcxLReK_TkqQWIm26S38HXEDYr/view?usp=drivesdk',referencia:'ITIC Academy, tema 069 Software Libre: licencias de código abierto; cotejo curricular directo.'}
 ],null,'Se acota el supuesto a un programa bajo GNU AGPL v3 modificado y desplegado para interacción remota: §13 exige ofrecer a esos usuarios acceso gratuito al Corresponding Source de esa versión. No basta con que cualquier programa se ejecute en una red; GPLv3 no contiene esa obligación adicional de AGPL. Respuesta B.','corregida'],
 [5403,[125],['IV-12'],['UTM','gestión unificada de amenazas','seguridad de redes','appliance','NGFW'],[
  {url:'https://www.fortinet.com/resources/cyberglossary/unified-threat-management',referencia:'Fortinet, Unified Threat Management: UTM reúne varias funciones/servicios de seguridad —por ejemplo firewall, antivirus, filtrado y prevención de intrusiones— en una solución/dispositivo.'},
  {url:'https://www.fortinet.com/uk/resources/cyberglossary/unified-threat-management',referencia:'Fortinet distingue UTM de NGFW por sus enfoques y conjunto de funciones; ambos pueden solaparse, pero no son sinónimos universales.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 125: seguridad en redes, cortafuegos, control de accesos e intrusiones.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema IV.12: seguridad de redes y técnicas de protección.'},
  {url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',referencia:'ITIC Academy, bloque 48 Seguridad en Redes y en el Nivel de Aplicación 2026: seguridad perimetral, firewall, controles y herramientas; cotejo curricular directo.'}
 ],null,'UTM es una solución/appliance que consolida varias funciones de seguridad (como firewall, antivirus, filtrado e IDS/IPS). No es un protocolo ni un protocolo de transporte. Se evita equipararlo sin matices con NGFW, categoría que puede compartir funciones, pero no es una definición equivalente universal. Respuesta C.','corregida'],
 [5404,[79],['IV-12'],['MD5','función hash','resumen criptográfico','algoritmos obsoletos'],[
  {url:'https://www.rfc-editor.org/rfc/rfc1321.html',referencia:'IETF RFC 1321, The MD5 Message-Digest Algorithm: especifica MD5 como algoritmo para calcular un message digest a partir de mensajes de longitud arbitraria.'},
  {url:'https://www.rfc-editor.org/rfc/rfc6151.html',referencia:'IETF RFC 6151: MD5 ya no es aceptable cuando se requiere resistencia a colisiones, por ejemplo en firmas digitales; los diseños nuevos no deben depender de él para seguridad criptográfica.'},
  {url:'https://csrc.nist.gov/Projects/Hash-Functions',referencia:'NIST CSRC, Hash Functions: los estándares aprobados actuales incluyen SHA-2 (FIPS 180-4) y SHA-3 (FIPS 202); MD5 no figura como hash aprobado para seguridad.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 79: cifrado y función hash.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema IV.12: técnicas criptográficas y firma digital.'},
  {url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',referencia:'ITIC Academy, bloque 36 Seguridad y Criptografía 2026: cifrado y función hash; cotejo curricular directo.'}
 ],null,'MD5 sí es un algoritmo de resumen/hash, como indica la clave D; DES, SEAL y RC4 son cifradores. Se mantiene como dato histórico y se advierte que MD5 está roto para usos que requieran resistencia a colisiones y no es una opción criptográfica segura actual.','historica'],
 [5405,[80,81],['I-6','IV-12'],['certificado digital','X.509','clave pública','identidad','PKI'],[
  {url:'https://www.rfc-editor.org/rfc/rfc5280.html',referencia:'IETF RFC 5280, Internet X.509 PKI: el certificado X.509 v3 incluye sujeto, clave pública del sujeto, emisor y firma digital del emisor, formando una vinculación verificable bajo la política de confianza correspondiente.'},
  {url:'https://eur-lex.europa.eu/eli/reg/2014/910/2024-05-20',referencia:'Reglamento eIDAS consolidado a 20-05-2024, artículo 3(14): certificado de firma electrónica es una atestación electrónica que vincula datos de validación de firma a una persona natural y confirma al menos su nombre o seudónimo.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, temas 80–81: certificados digitales, identidad, firma y PKI.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, temas I.6 y IV.12: régimen eIDAS, DNIe, certificados y firma electrónica.'},
  {url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',referencia:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma 2026: certificados y PKI; cotejo curricular directo.'}
 ],null,'En una PKI X.509, el certificado es una estructura de datos firmada por un emisor que vincula la clave pública con el sujeto identificado, con validez sujeta a la cadena, estado y política de confianza aplicable. No es una contraseña ni el software que valida la firma; la definición eIDAS de certificado de firma precisa que enlaza los datos de validación con una persona. Se elimina la afirmación de que un tercero simplemente «garantiza» siempre la identidad sin condiciones. Respuesta B.','corregida']
];
const edits={
 5401:{texto:'¿Cuál de estos productos es un cliente gráfico de administración de bases de datos, no un servidor/SGBD?',opciones:['MongoDB.','MariaDB Server.','HeidiSQL.','PostgreSQL.']},
 5402:{texto:'Si modificas un programa bajo GNU AGPL v3 y despliegas esa versión para que usuarios interactúen con ella remotamente por una red, ¿qué exige la cláusula 13 respecto al código fuente?',opciones:['Nada; la AGPL nunca exige ofrecer el código fuente.','Ofrecer gratuitamente a esos usuarios acceso al código fuente correspondiente de la versión modificada.','Publicar el código fuente de cualquier programa que se ejecute en cualquier red, aunque no derive de la obra AGPL.','Entregar el código fuente únicamente a la FSF.']},
 5403:{texto:'¿Qué describe mejor una solución UTM (Unified Threat Management)?',opciones:['Un protocolo de gestión de amenazas.','Una categoría universalmente idéntica a un NGFW.','Una solución que consolida varias funciones de seguridad de red, por ejemplo firewall, antivirus y filtrado, en una plataforma o appliance.','Un protocolo de nivel de transporte.']},
 5404:{texto:'¿Cuál de estos algoritmos es una función hash que produce un resumen del mensaje, aunque hoy no sea seguro para usos que requieran resistencia a colisiones?',opciones:['DES.','SEAL.','RC4.','MD5.']},
 5405:{texto:'En una PKI basada en X.509, ¿qué describe mejor un certificado digital?',opciones:['Un resumen criptográfico que por sí solo asegura la identidad del firmante y la integridad de cualquier mensaje.','Una estructura de datos firmada por un emisor que vincula una clave pública con un sujeto identificado, cuya confianza se valida conforme a la cadena y política aplicables.','Una contraseña para acceder a documentos protegidos.','Un programa que verifica firmas electrónicas.']}
};
const academy={
 5401:'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado 2026: SGBD y herramientas de administración; cotejo curricular directo.',
 5402:'ITIC Academy, tema 069 Software Libre: clases de licencia y software de código abierto; cotejo curricular directo, sin atribuir al temario carácter de autoridad jurídica.',
 5403:'ITIC Academy, bloque 48 Seguridad en Redes y en el Nivel de Aplicación 2026: seguridad perimetral y herramientas de defensa; cotejo curricular directo.',
 5404:'ITIC Academy, bloque 36 Seguridad y Criptografía 2026: cifrado y función hash; cotejo curricular directo.',
 5405:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma 2026: certificados, PKI e identificación electrónica; cotejo curricular directo.'
};
const logFile=path.join(__dirname,'cambios-lote-1016.json');
if(!fs.existsSync(logFile)) aplicar({numero:'1016',fecha:'2026-11-12',records,edits});
const bankFile=path.join(__dirname,'..','preguntas_preparatic.json'),data=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
for(const c of log.cambios){const q=data.preguntas.find(q=>q.id===c.id),record=records.find(r=>r[0]===c.id);q.revision.estado=record[7];q.revision.observaciones=record[6];q.comentarios=record[6];q.clasificacion.bloque_academia=academy[c.id];q.clasificacion.nota='Clasificación cotejada con el programa oficial; ITIC Academy se usa como mapa curricular cuando se indica, no como autoridad técnica o jurídica.';c.actualizada=structuredClone(q)}
fs.writeFileSync(bankFile,JSON.stringify(data,null,2)+'\n');fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
