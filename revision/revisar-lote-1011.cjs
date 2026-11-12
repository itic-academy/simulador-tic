const fs=require('node:fs'),path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const records=[
 [5376,[50,77],['II-9'],['XBRL','informes financieros','XML','taxonomías'],[
  {url:'https://www.xbrl.org/Specification/XBRL-2.1-REC-2003-12-31%2Bcorrected-errata-2013-02-20.html',referencia:'XBRL 2.1 Recommendation: defines the original XML elements/attributes, instance documents and taxonomies for structured business reporting.'},
  {url:'https://specifications.xbrl.org/work-product-index-open-information-model-open-information-model.html',referencia:'XBRL International Open Information Model 1.0: syntax-independent model with xBRL-XML, xBRL-JSON and xBRL-CSV representations; prevents the legacy claim that all current XBRL reports must be XML.'},
  {url:'https://specifications.xbrl.org/reporting-requirements.html',referencia:'XBRL reporting requirements: taxonomies define reportable concepts, dimensions and relationships for structured reporting.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, temas 50 (normalización y estándares) y 77 (XML y lenguajes de marca).'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema II.9: lenguajes de marca, XML y derivaciones.'},
  {url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',referencia:'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado 2026: estándares y representación estructurada de datos; cotejo curricular contextual. No se encontró una unidad dedicada específicamente a XBRL.'}
 ],null,'Se acota el enunciado a XBRL 2.1, para el que XML, taxonomías y reporting empresarial son correctos. El estándar actual también admite serializaciones xBRL-JSON y xBRL-CSV mediante OIM, por lo que no se afirma que todo informe XBRL actual tenga que serializarse como XML. En el alcance fijado, la respuesta «todas» (D) es correcta.','corregida'],
 [5377,[74],[],['SIG','georreferenciación','identificadores geográficos','Catastro'],[
  {url:'https://www.iso.org/standard/70742.html',referencia:'ISO 19112:2019, Geographic information — Spatial referencing by geographic identifiers: spatial reference systems may be defined by geographic identifiers.'},
  {url:'https://www.iso.org/standard/74039.html',referencia:'ISO 19111:2019, Geographic information — Referencing by coordinates: coordinate-based spatial referencing is a distinct method from geographic identifiers.'},
  {url:'https://www.sedecatastro.gob.es/Accesos/SECAccDescargaDatos.aspx',referencia:'Sede Electrónica del Catastro: la referencia catastral identifica inequívocamente el inmueble y permite localizar sus datos; an identifier is used rather than supplied coordinates.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 74: sistemas de información geográfica.'},
  {url:'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk',referencia:'ITIC Academy, bloque 33 E-learning y GIS 2026: sistemas de referencia espacial, coordenadas e identificadores geográficos; cotejo curricular directo.'}
 ],null,'La formulación original «georreferenciación discreta» no es la terminología del estándar y puede confundirse con clasificaciones pedagógicas no universales. Se sustituye por referencia espacial indirecta mediante identificador geográfico (la referencia catastral), distinta de dar coordenadas; respuesta C. El programa A2 no contiene un epígrafe específico de SIG/georreferenciación y no se fuerza una etiqueta.','corregida'],
 [5378,[63,64],['III-4'],['bases de datos','normalización','BCNF','Boyce-Codd'],[
  {url:'https://sigmod.org/publications/dblp/db/conf/ifip/Codd74.html',referencia:'Bibliografía SIGMOD del trabajo de Codd, Recent Investigations in Relational Data Base Systems, IFIP Congress 1974, pp. 1017–1021, donde se desarrolla BCNF.'},
  {url:'https://www.cs.rpi.edu/~sibel/csci4380/fall2026/lecture_notes/lecture5.html',referencia:'Rensselaer Polytechnic Institute, Database Systems lecture 5: para cada dependencia funcional no trivial X→Y, X debe ser superclave en BCNF.'},
  {url:'https://www.cs.dartmouth.edu/~cs61/notes9.html',referencia:'Dartmouth CS 61: BCNF es una forma más fuerte que 3NF; cada determinante debe ser clave candidata.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, temas 63–64: SGBD, modelo relacional y bases de datos.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema III.4: diseño y normalización relacional.'},
  {url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',referencia:'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado 2026: dependencias funcionales y normalización; cotejo curricular directo.'}
 ],null,'El enunciado original mezclaba «tercera forma normal (3FN)» con «de Boyce y Codd» (BCNF). Se pregunta ahora expresamente por BCNF y se precisa la condición: para toda dependencia funcional no trivial X→Y, X debe ser superclave. La respuesta C reemplaza la clave ambigua. BCNF es estrictamente más fuerte que 3NF.','corregida'],
 [5379,[55],['II-1'],['cloud privada','cloud pública','control','NIST SP 800-145'],[
  {url:'https://csrc.nist.gov/pubs/sp/800/145/final',referencia:'NIST SP 800-145: private cloud is provisioned for exclusive use by one organization; it may be owned, managed and operated by the organization, a third party, or both. The definition does not guarantee lower cost or greater reliability.'},
  {url:'https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-145.pdf',referencia:'NIST SP 800-145, §2: compares public/private deployment models and their ownership/management options.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 55: cloud computing and private/public/hybrid deployment models.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema II.1: cloud computing, capabilities and components.'},
  {url:'https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view?usp=drivesdk',referencia:'ITIC Academy, bloque 25 Cloud Computing 2026: service/deployment models, including public and private clouds; cotejo curricular directo.'}
 ],null,'La respuesta D se conserva como ventaja posible, no universal: si la organización opera o gobierna la nube privada, puede mantener más control sobre infraestructura y políticas que en una nube pública. La etiqueta «privada» por sí sola no garantiza control directo, pues NIST permite gestión por terceros; tampoco implica menor coste o mantenimiento.','corregida'],
 [5380,[54],['II-1'],['PCI','bus de expansión','hardware histórico','132 MB/s'],[
  {url:'https://pcisig.com/PCIConventional/Specs/Base/LocalBus_3.0',referencia:'PCI-SIG Conventional PCI Local Bus Specification Revision 3.0: norma primaria del bus PCI convencional; el reactivo queda acotado a la variante 32-bit/33-MHz.'},
  {url:'https://www.pedestrian.com.cn/_downloads/d82d7ea0e5830a030ae2458c8298a1fb/PCI_V2.3.pdf',referencia:'PCI Local Bus Specification Revision 2.3: especifica 32-bit/33-MHz convencional; tasa teórica nominal = 4 bytes por ciclo × 33 millones de ciclos/s = 132 MB/s (133 MB/s al expresar 33,33 MHz).'},
  {url:'https://www.redbooks.ibm.com/redbooks/pdfs/sg247071.pdf',referencia:'IBM Redbook on PCI-based buses: reports the 32-bit, 33-MHz peak as 132 MB/s and distinguishes wider/faster PCI-X variants.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 54: dispositivos personales de PC y conectividad.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema II.1: tecnologías actuales de ordenadores y componentes.'},
  {url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',referencia:'ITIC Academy, bloque 26 Hardware, servidores, CPD y almacenamiento 2026: buses y arquitectura de ordenador en su contexto histórico; cotejo curricular.'}
 ],null,'La clave C (132 MB/s) corresponde al pico teórico nominal del bus PCI convencional de 32 bits a 33 MHz: 4 bytes/ciclo × 33 millones de ciclos/s. Se marca histórica y se limita el enunciado a esa variante; no es el máximo de todas las extensiones PCI/PCI-X ni describe PCI Express.','historica']
];
const edits={
 5376:{texto:'En el alcance de XBRL 2.1 —la sintaxis XML original para informes empresariales—, ¿qué afirmaciones son correctas?',opciones:['XBRL 2.1 define documentos de instancia basados en XML.','Puede intercambiar información financiera estructurada entre empresas y sistemas.','Las taxonomías definen conceptos, etiquetas y relaciones para clasificar los datos reportados.','Todas las anteriores, dentro del alcance de XBRL 2.1.']},
 5377:{texto:'Una persona localiza un inmueble usando su referencia catastral, en vez de introducir coordenadas. ¿Qué tipo de referencia espacial emplea?',opciones:['Referencia directa mediante coordenadas.','Un sistema de referencia por coordenadas (SRS), especificado sin identificar un lugar.','Referencia indirecta mediante un identificador geográfico.','Una proyección cartográfica, sin identificador ni coordenadas.']},
 5378:{texto:'¿Cuál condición define la forma normal de Boyce-Codd (BCNF) de una relación?',opciones:['Cada atributo no primo depende plenamente de cada clave candidata (condición de 2FN).','La relación no contiene dependencias multivaluadas no triviales (condición asociada a 4FN).','En toda dependencia funcional no trivial X→Y, el determinante X es una superclave de la relación.','Basta con que la relación esté en 3FN; 3FN y BCNF son equivalentes.']},
 5379:{texto:'Si la organización opera o gobierna directamente su infraestructura privada, ¿qué ventaja puede ofrecer una nube privada frente a una nube pública?',opciones:['Necesariamente requiere menos mantenimiento en cualquier modalidad.','Siempre tiene menor coste total.','Garantiza por definición una disponibilidad superior.','Puede dar a la organización más control sobre la infraestructura y las políticas.']},
 5380:{texto:'En el bus PCI convencional de 32 bits que funciona a 33 MHz, ¿cuál es su tasa pico teórica nominal de transferencia de datos?',opcion:[2,'132 MB/s (4 bytes por ciclo × 33 millones de ciclos por segundo).']}
};
const logFile=path.join(__dirname,'cambios-lote-1011.json');
if(!fs.existsSync(logFile))aplicar({numero:'1011',fecha:'2026-11-12',records,edits});
const bankFile=path.join(__dirname,'..','preguntas_preparatic.json'),data=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
const academy={
 5376:'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado 2026: representación estructurada, XML/modelado de datos; cotejo contextual, sin epígrafe específico dedicado a XBRL.',
 5377:'ITIC Academy, bloque 33 E-learning y GIS 2026: SIG, sistemas de referencia e identificadores geográficos; cotejo curricular directo.',
 5378:'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado 2026: dependencias funcionales y normalización; cotejo curricular directo.',
 5379:'ITIC Academy, bloque 25 Cloud Computing 2026: modelos de despliegue público, privado e híbrido; cotejo curricular directo.',
 5380:'ITIC Academy, bloque 26 Hardware, servidores, CPD y almacenamiento 2026: arquitectura y buses de expansión en su contexto histórico; cotejo curricular.'
};
for(const c of log.cambios){const q=data.preguntas.find(q=>q.id===c.id),record=records.find(r=>r[0]===c.id);q.revision.estado=record[7];q.revision.observaciones=record[6];q.comentarios=record[6];q.clasificacion.bloque_academia=academy[c.id];q.clasificacion.nota='Cotejo curricular directo o contextual en el material ITIC Academy indicado; la verificación técnica procede de las especificaciones y referencias de la ficha.';c.actualizada=structuredClone(q)}
fs.writeFileSync(bankFile,JSON.stringify(data,null,2)+'\n');fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
