const fs=require('node:fs'),path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const records=[
 [5421,[83],[],['modelos de color','RGB','CMYK','HSB','HSM','imágenes digitales'],[
  {url:'https://helpx.adobe.com/ca/creative-cloud/apps/colors/understand-color-modes.html',referencia:'Adobe, Color models and color spaces: documenta modelos como RGB, CMYK y HSB en sus aplicaciones de diseño; HSM no figura en esa enumeración.'},
  {url:'https://helpx-origin.aws116.adobeitc.com/uk/illustrator/desktop/manage-colors/select-and-adjust-colors/color-panel-overview.html',referencia:'Adobe Illustrator, Color panel: permite cambiar entre los modelos Grayscale, RGB, HSB y CMYK.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 83: tratamiento de imágenes y tecnologías de digitalización/impresión.'},
  {url:'https://drive.google.com/file/d/1xTMCpPmwNi8hpb0nZ3sMqpgvrhLXT-yf/view?usp=drivesdk',referencia:'ITIC Academy, bloque 37 sobre imágenes y OCR: mapa curricular de tratamiento digital de imágenes; no se encontró listado de modelos RGB/CMYK/HSB.'}
 ],null,'Se precisa el contexto: Adobe documenta RGB, CMYK y HSB como modelos disponibles en herramientas de diseño, mientras HSM no es uno de los nombres de modelo de esa lista. Se corrige «espacio de color» por «modelo de color» para no confundir modelo con espacio ICC/dispositivo. Se mantiene C.','corregida'],
 [5422,[52],['II-1'],['mainframe','IBM Z','z/Architecture','memoria compartida','particiones lógicas'],[
  {url:'https://www.ibm.com/products/z',referencia:'IBM, IBM Z Mainframe Servers and Software: define IBM Z como familia actual de infraestructura/mainframes de IBM.'},
  {url:'https://www.ibm.com/docs/en/ztpf/1.1.2025?topic=support-zarchitecture-configuration',referencia:'IBM z/Architecture configuration: una configuración z/Architecture implica uno o más procesadores, almacenamiento principal compartido y subsistema de canales.'},
  {url:'https://www.ibm.com/docs/en/zos-basic-skills?topic=design-mainframe-hardware-logical-partitions-lpars',referencia:'IBM, mainframe hardware LPARs: un mainframe se puede particionar lógicamente; cada LPAR ejecuta su propio sistema operativo y recursos pueden asignarse o compartirse.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 52: sistemas de altas prestaciones, Grid Computing y mainframe.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema II.1: arquitecturas actuales de ordenadores y escalabilidad.'},
  {url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',referencia:'ITIC Academy, bloque 26 Hardware, Servidores, CPD, Almacenamiento y Virtualización 2026: incluye directamente el tema A1-52 de mainframe.'}
 ],null,'Se evita generalizar sobre todos los mainframes y se fija el referente IBM Z. IBM lo identifica como su familia mainframe; la documentación de z/Architecture describe almacenamiento principal compartido, y IBM documenta LPAR. Por tanto se mantiene la idea C pero se sustituye la afirmación vaga «altamente propietarias» por la identificación verificable de la plataforma.','corregida'],
 [5423,[79],['IV-12'],['criptografía','funciones hash','ataque del cumpleaños','cifradores de flujo','cifrado múltiple'],[
  {url:'https://www.rfc-editor.org/rfc/rfc4270.html',referencia:'IETF RFC 4270, sección 2: describe ataques de colisión contra funciones hash y la búsqueda probabilística tipo cumpleaños; el objetivo es hallar entradas distintas con el mismo resumen, no invertir la función.'},
  {url:'https://csrc.nist.gov/glossary/term/cryptographic_hash_function',referencia:'NIST CSRC, definición de función hash criptográfica: incluye resistencia a colisiones, preimagen y segunda preimagen como propiedades esperadas.'},
  {url:'https://www.rfc-editor.org/rfc/rfc8439.html',referencia:'IETF RFC 8439: para el cifrador de flujo ChaCha20 la unicidad del nonce por clave es un requisito; su reutilización repite el keystream y compromete confidencialidad.'},
  {url:'https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=934860',referencia:'NIST, Network Security: Private Communication in a Public World, 3rd ed., explicación del ataque meet-in-the-middle contra doble cifrado DES; demuestra que una segunda capa no suma automáticamente la seguridad nominal.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 79: algoritmos simétricos/asimétricos y función hash.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema IV.12: técnicas criptográficas y protocolos seguros.'},
  {url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',referencia:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma 2026: incluye cifrado y función hash; se cotejó el tema, sin hallar un tratamiento literal de todos los distractores.'}
 ],null,'Se corrige la clave a D y se reformulan los distractores absolutos. Un ataque del cumpleaños sí se aplica a las funciones hash: busca una colisión entre entradas distintas y no necesita invertir el hash. La doble cifración no garantiza sumar las longitudes de clave (por ejemplo, meet-in-the-middle en doble DES), y reutilizar keystream/nonce puede filtrar información. La calidad de una función hash no es independiente de su resistencia a colisiones.','corregida'],
 [5424,[63],['II-5'],['ANSI/X3/SPARC','arquitectura de tres esquemas','nivel interno','nivel conceptual','nivel externo'],[
  {url:'https://www.govinfo.gov/content/pkg/GOVPUB-C13-f55f11d78745e6c51f75a39a44913f22/pdf/GOVPUB-C13-f55f11d78745e6c51f75a39a44913f22.pdf',referencia:'Publicación técnica alojada en GovInfo, Reference model for DBMS standardization: presenta explícitamente la arquitectura ANSI/X3/SPARC de tres esquemas: externo, conceptual e interno.'},
  {url:'https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Database-Design/Database-Design-for-Vantage/ANSI-X3/SPARC-Three-Schema-Architecture',referencia:'Teradata, ANSI/X3/SPARC Three Schema Architecture: enumera los tres niveles externo, conceptual e interno y describe sus vistas/mapeos.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 63: sistemas de gestión de bases de datos y modelo de referencia ANSI.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema II.5: arquitectura ANSI/SPARC, SGBD relacionales y SQL.'},
  {url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',referencia:'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado 2026: apartado ANSI/SPARC de tres niveles.'}
 ],null,'La arquitectura ANSI/X3/SPARC separa niveles externo, conceptual e interno. La opción B era la prevista, pero llamaba «lógico» al nivel externo, lo que mezcla categorías; se corrige a “nivel externo” sin sinónimo impreciso. La clave continúa en B.','corregida'],
 [5425,[80],['I-6'],['Ley 6/2020','certificados cualificados','servicios electrónicos de confianza','vigencia','eIDAS'],[
  {url:'https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046',referencia:'BOE, texto consolidado de la Ley 6/2020, artículo 4.2: la vigencia de los certificados cualificados no puede superar cinco años; el propio texto consolidado mantiene ese plazo.'},
  {url:'https://www.boe.es/eli/es/l/2020/11/11/6/con',referencia:'BOE, texto consolidado oficial de Ley 6/2020, artículo 4, vigencia y caducidad de certificados electrónicos.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 80: identidad/firma electrónica, certificados digitales y marco nacional/europeo.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema I.6: identidad y firma electrónica, régimen jurídico y Reglamento eIDAS.'},
  {url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',referencia:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma 2026: cubre Ley 6/2020, servicios de confianza y certificados; cotejo curricular directo.'}
 ],null,'El artículo 4.2 vigente de la Ley 6/2020 establece que la vigencia de los certificados cualificados no será superior a cinco años; el plazo concreto se fija según las características y tecnología de los datos de creación de firma, sello o autenticación web. La respuesta D (5 años) es el máximo legal, no una duración obligatoria para cada certificado.','vigente']
];
const edits={
 5421:{texto:'En los modelos de color que Adobe documenta para sus herramientas de diseño, ¿cuál de estos nombres no corresponde a uno de los modelos habituales?',opciones:['RGB.','CMYK.','HSM.','HSB.']},
 5422:{texto:'Sobre la familia de sistemas IBM Z, señale la afirmación correcta:',opciones:['Es una familia de mainframes desarrollada por numerosos fabricantes independientes.','Su arquitectura requiere exclusivamente memoria distribuida y no compartida.','IBM Z es la familia de mainframes de IBM, basada en z/Architecture.','No admite particiones lógicas ni virtualización de sistemas operativos.']},
 5423:{texto:'Sobre el cifrado y las funciones hash, indique la afirmación cierta:',opciones:['Cifrar dos veces con algoritmos distintos garantiza siempre que se sumen las longitudes de clave en seguridad efectiva.','Un cifrador de flujo no requiere gestionar la unicidad del nonce o del flujo de clave para proteger la confidencialidad.','La resistencia a colisiones de una función hash es independiente de las propiedades de su salida.','El ataque del cumpleaños busca colisiones: dos entradas distintas con el mismo resumen; no consiste en invertir la función hash.']},
 5424:{texto:'¿Qué tipo de arquitectura propone ANSI/X3/SPARC para la normalización de los SGBD?',opciones:['Arquitectura de dos niveles: estructura global y vistas lógicas.','Arquitectura de tres niveles: externo, conceptual e interno.','Arquitectura de cuatro niveles: interno, físico, conceptual y lógico.','Arquitectura de un único nivel global.']},
 5425:{texto:'Según el artículo 4.2 de la Ley 6/2020, de 11 de noviembre, ¿cuál es el periodo máximo de vigencia de los certificados cualificados?',opciones:['2 años.','3 años.','4 años.','5 años.']}
};
const academy={
 5421:'ITIC Academy, bloque 37 Imágenes y OCR: mapa curricular de tratamiento digital de imágenes; no se encontró una lista de modelos RGB/CMYK/HSB.',
 5422:'ITIC Academy, bloque 26 Hardware, Servidores, CPD, Almacenamiento y Virtualización 2026: cobertura directa del tema A1-52 Mainframe.',
 5423:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma 2026: incluye cifrado y función hash; cotejo temático, sin exposición literal de todos los distractores.',
 5424:'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado 2026: apartado ANSI/SPARC de tres niveles, cotejo directo.',
 5425:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma 2026: trata Ley 6/2020, servicios de confianza y certificados; cotejo curricular directo.'
};
const logFile=path.join(__dirname,'cambios-lote-1020.json');
if(!fs.existsSync(logFile)) aplicar({numero:'1020',fecha:'2026-11-12',records,edits});
const bankFile=path.join(__dirname,'..','preguntas_preparatic.json'),data=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
for(const c of log.cambios){const q=data.preguntas.find(q=>q.id===c.id),record=records.find(r=>r[0]===c.id);q.revision.estado=record[7];q.revision.observaciones=record[6];q.comentarios=record[6];q.clasificacion.bloque_academia=academy[c.id];q.clasificacion.nota='Clasificación cotejada con el programa oficial; ITIC Academy se usa como mapa curricular cuando se indica, no como autoridad técnica o normativa.';c.actualizada=structuredClone(q)}
fs.writeFileSync(bankFile,JSON.stringify(data,null,2)+'\n');fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
