const records=[
[691,[77],['III-12'],['OpenDocument','ODF','MIME','OASIS'],'https://docs.oasis-open.org/office/OpenDocument/v1.4/cs01/part3-schema/OpenDocument-v1.4-cs01-part3-schema.html','OASIS OpenDocument 1.4, tipos de documento y MIME; registro IANA','Se mantiene A como falsa: el MIME application/vnd.openxmlformats-officedocument.wordprocessingml.document es Open XML de Word (.docx), no el de texto OpenDocument (.odt), cuyo MIME es application/vnd.oasis.opendocument.text. ODF 1.4 también define .odb como documento de interfaz de base de datos y usa para este el MIME application/vnd.oasis.opendocument.base; por ello la opción sobre extensiones se acota al formato de archivo y no se confunde con los MIME actuales.'],
[692,[65],['III-12'],['IMS','SCORM','Moodle','e-learning','pendiente-fuente'],'https://www.1edtech.org/standards','1EdTech (antes IMS Global), catálogo oficial de estándares educativos','Pendiente de fuente para la clave D. Se verifican IMS/1EdTech como organización de estándares educativos, SCORM como modelo de referencia de contenidos de aprendizaje y Moodle como LMS. No se ha localizado una fuente primaria que identifique qué producto o término concreto significa «ePupil» en el contexto del enunciado, y no puede demostrarse una negativa universal solo por no hallarlo. Se conserva D del banco sin certificar y queda abierta la duda de fuente/identidad del término.','pendiente_fuente'],
[693,[74],[],['SIG','vectorial','ráster','OGC'],'https://www.ogc.org/standards/sfa/','OGC Simple Feature Access: puntos, curvas y superficies; modelo de coberturas ráster','Se mantiene B: una matriz de celdas representa datos ráster, no la geometría vectorial de puntos, curvas y superficies. Se reformula para distinguir explícitamente las dos familias; las líneas y polígonos son geometrías vectoriales y los arcos pueden representarse con tipos de curva compatibles.'],
[694,[75],['II-4'],['data-warehouse','BI','OLAP'],'https://docs.oracle.com/cd/B14099_17/bi.1012/b16378/implementbi.htm','Oracle Business Intelligence Warehouse Builder, fundamentos: el almacén como base de una solución BI','Se mantiene B, pero se acota la generalización: en la arquitectura clásica de inteligencia de negocio basada en almacén de datos, el data warehouse proporciona la base integrada para análisis y apoyo a decisiones. No se afirma que toda solución BI actual requiera un único almacén central.'],
[695,[77],['III-12'],['XML','SGML','bases-de-datos','W3C'],'https://www.w3.org/TR/xml/','W3C XML 1.0, relación con SGML; documentación de tipos XML de bases de datos','Se mantiene A como falsa. XML deriva de SGML y es un lenguaje de marcado extensible que permite definir vocabularios; no exige guardar los datos solo en ficheros de texto plano. Los gestores relacionales actuales ofrecen tipos/columnas XML para almacenarlos, consultarlos e indexarlos. Se corrige la errata «lenguages» y se explicita que el almacenamiento depende del gestor.']
];
const edits={
691:{texto:'Sobre OpenDocument Format (ODF) 1.4, señale la afirmación falsa:',opciones:['El MIME application/vnd.openxmlformats-officedocument.wordprocessingml.document es el tipo de los documentos de texto OpenDocument (.odt).','ODF es un formato abierto basado en XML para documentos ofimáticos, como textos, hojas de cálculo y presentaciones.','El formato define tipos de documento para texto, hojas de cálculo, presentaciones y otros contenidos ofimáticos.','Entre las extensiones utilizadas en la familia OpenDocument están .odt para texto, .ods para hojas de cálculo, .odp para presentaciones y .odb para documentos de interfaz de base de datos.']},
692:{texto:'¿Cuál de estos términos no se ha podido identificar en las fuentes consultadas como estándar de interoperabilidad educativa o plataforma de e-learning?',opciones:['IMS/1EdTech, organización y familia de estándares de tecnología educativa.','SCORM, modelo de referencia para empaquetar y ejecutar contenidos de aprendizaje en plataformas compatibles.','Moodle, sistema de gestión del aprendizaje (LMS).','ePupil, término cuya identidad no queda determinada en el contexto de esta pregunta.']},
693:{texto:'En un SIG, ¿qué estructura representa datos ráster y no una geometría del modelo vectorial?',opciones:['Arcos circulares, mediante geometrías de tipo curva compatibles.','Matrices regulares de celdas o píxeles.','Polígonos, como superficies delimitadas por anillos.','Líneas, como geometrías de tipo curva.']},
694:{texto:'En una arquitectura clásica de inteligencia de negocio (BI) basada en almacén de datos, ¿qué tipo de sistema aporta el repositorio integrado para análisis y apoyo a decisiones?',opciones:['CRM, orientado a gestionar las relaciones e interacciones con clientes.','Data warehouse, que integra datos para consultas analíticas y BI.','ERP, orientado a integrar procesos y recursos empresariales operativos.','PLM, orientado a gestionar el ciclo de vida de productos.']},
695:{texto:'XML es una recomendación del W3C basada en SGML. Señale la afirmación falsa:',opciones:['XML no puede almacenarse en gestores de bases de datos y debe conservarse exclusivamente como fichero de texto plano.','XML deriva de SGML y conserva una sintaxis restringida respecto de ese metalenguaje.','XML puede utilizarse para intercambiar información estructurada entre plataformas y aplicaciones, también fuera de la Web.','XML es un lenguaje de marcado extensible que permite definir vocabularios para distintos ámbitos.']}
};
require('./aplicar-lote.cjs')({numero:'075',fecha:'2026-10-21',records,edits});
// Añade referencias específicas para distinguir las normas, plataformas y
// tipos MIME del lote; la pregunta 692 queda pendiente de identificar ePupil.
const fs=require('node:fs'),path=require('node:path');
const bankFile=path.join(__dirname,'..','preguntas_preparatic.json');
const logFile=path.join(__dirname,'cambios-lote-075.json');
const bank=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
const extra={
691:[{url:'https://www.iana.org/assignments/media-types',referencia:'IANA Media Types: registro del MIME Open XML de Word y los tipos application/vnd.oasis.opendocument.*.'}],
692:[
 {url:'https://www.adlnet.gov/assets/uploads/SCORM2004-3rd_ImpactSummary.pdf',referencia:'Advanced Distributed Learning (ADL), SCORM 2004: Shareable Content Object Reference Model.'},
 {url:'https://docs.moodle.org/500/en/Introduction',referencia:'MoodleDocs: Moodle como sistema de gestión del aprendizaje (LMS).'}
],
695:[{url:'https://learn.microsoft.com/en-us/sql/relational-databases/xml/xml-data-type-and-columns-sql-server',referencia:'Microsoft Learn: almacenamiento nativo, consulta e indexación de valores XML en columnas de bases de datos.'}]
};
for(const [id,items] of Object.entries(extra)){
 const q=bank.preguntas.find(x=>x.id===Number(id)),entry=log.cambios.find(x=>x.id===Number(id));
 q.revision.fuentes.push(...items);entry.actualizada.revision.fuentes.push(...items);
}
const patched=fs.readFileSync(bankFile,'utf8').replace(/^    \{[\s\S]*?^    \}/gm,block=>{
 const item=JSON.parse(block),entry=log.cambios.find(x=>x.id===item.id);
 if(!entry)return block;
 return JSON.stringify(entry.actualizada,null,2).split('\n').map(line=>'    '+line).join('\n');
});
fs.writeFileSync(bankFile,patched);
fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
