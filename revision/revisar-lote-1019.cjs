const fs=require('node:fs'),path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const records=[
 [5416,[71,75],['III-15'],['PMML','Predictive Model Markup Language','minería de datos','intercambio de modelos'],[
  {url:'https://dmg.org/',referencia:'Data Mining Group: PMML es un estándar basado en XML que permite transmitir modelos/configuración analítica entre aplicaciones y proveedores.'},
  {url:'https://dmg.org/pmml/v3-2/GeneralStructure.html',referencia:'Data Mining Group, estructura general PMML: el formato usa XML para representar modelos de minería de datos.'},
  {url:'https://dmg.org/pmml/v2-0/pmml_v2_0.html',referencia:'Data Mining Group, definición de PMML 2.0.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, temas 71 (ciencia de datos y modelado) y 75 (explotación de datos).'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema III.15: minería de datos, tecnología, algoritmos y analítica.'},
  {url:'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk',referencia:'ITIC Academy, bloque 34 Business Intelligence y Big Data 2026: contiene minería de datos, modelado e intercambio/portabilidad analítica como contexto curricular; no apareció una mención textual a PMML en el material consultado.'}
 ],null,'PMML significa Predictive Model Markup Language. Data Mining Group lo describe como un formato basado en XML para representar e intercambiar modelos de minería/analítica entre aplicaciones. La opción C es correcta; se amplía el enunciado para evitar la ambigua expresión «marcado de texto».','vigente'],
 [5417,[63],['II-5'],['SGBD','MySQL','PostgreSQL','SQLite','Zope','servidor de aplicaciones'],[
  {url:'https://www.mysql.com/products/community/',referencia:'MySQL Community Edition: distribución comunitaria del sistema de base de datos, publicada bajo GPL.'},
  {url:'https://www.postgresql.org/about/',referencia:'Proyecto PostgreSQL: se define como sistema gestor de bases de datos objeto-relacional de código abierto.'},
  {url:'https://www.sqlite.org/about.html',referencia:'SQLite: motor SQL transaccional embebido; su código fuente está en dominio público.'},
  {url:'https://www.zope.dev/',referencia:'Proyecto Zope: Zope es un servidor de aplicaciones web libre y de código abierto escrito en Python.'},
  {url:'https://www.zope.dev/resources.html',referencia:'Documentación Zope: distingue Zope, servidor de aplicaciones web, de ZODB, la base de datos de objetos usada como almacenamiento predeterminado.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 63: sistemas de gestión de bases de datos.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema II.5: SGBD relacionales y SQL.'},
  {url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',referencia:'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado 2026: teoría y tipos de SGBD; no se halló tratamiento específico de Zope.'}
 ],null,'Zope es un servidor de aplicaciones web, no un SGBD; que utilice ZODB como almacenamiento predeterminado no convierte al servidor Zope en una base de datos. MySQL Community y PostgreSQL son SGBD de código abierto; SQLite es un motor de base de datos cuyo código está en dominio público. Se conserva D y se reformula la pregunta para medir la categoría con menos ambigüedad.','corregida'],
 [5418,[54],['II-1'],['entrada/salida','periféricos','transferencia elemental','arquitectura de computadores'],[
  {url:'https://lorca.act.uji.es/libro/conceptos_elementales_de_computadores.pdf',referencia:'Universitat Jaume I, Conceptos elementales de computadores, cap. 8, figura 8.1 y §8.2: operación de E/S transfiere uno o varios bloques y se basa en transferencias elementales; una transferencia elemental mueve un dato o palabra de control.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 54: dispositivos personales y conectividad; referencia curricular próxima al subsistema de dispositivos, sin epígrafe específico de niveles de E/S.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema II.1: tecnologías y arquitecturas actuales de ordenadores; encaje curricular general, no definición literal de E/S elemental.'},
  {url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',referencia:'ITIC Academy, bloque 26 Hardware, Servidores, CPD, Almacenamiento y Virtualización 2026: incluye dispositivos, conectividad y subsistemas de E/S; cotejo curricular próximo, sin definición específica de transferencia elemental.'}
 ],null,'La distinción sí queda respaldada por el texto académico de la Universitat Jaume I citado: la operación global de E/S puede abarcar uno o varios bloques y las transferencias elementales mueven una unidad (dato o palabra de control). Por ello la respuesta A se confirma dentro de este modelo didáctico de niveles; se explicita su fuente, pues «transferencia elemental» no es una etiqueta universal de todos los textos de arquitectura.','vigente'],
 [5419,[63],['II-5','III-4'],['bases de datos','orden físico','índices','lista invertida','modelo relacional'],[
  {url:'https://www.postgresql.org/docs/current/queries-order.html',referencia:'PostgreSQL Documentation: sin una cláusula ORDER BY, no hay garantía sobre el orden de filas devuelto; la secuencia física por sí sola no determina semántica relacional.'},
  {url:'https://opendsax.cs.vt.edu/ODSA/Books/Everything/html/LinearIndexing.html',referencia:'OpenDSA, Virginia Tech: una inverted list/inverted file es una estructura de índice secundario, no una clase general de SGBD identificable solo por la secuencia física de filas.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 63: SGBD y modelo de referencia ANSI.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, temas II.5 (SGBD relacionales) y III.4 (modelado y diseño físico/lógico de datos).'},
  {url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',referencia:'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado 2026: distingue modelos relacionales y diseño lógico/físico, pero no contiene la expresión «lista invertida» ni una clasificación que resuelva la clave.'}
 ],null,'Se deja pendiente de ambigüedad y no se valida la clave C. El orden físico de almacenamiento no es una propiedad que identifique por sí sola el tipo de SGBD; en el modelo relacional el orden de las filas no está garantizado sin ordenación explícita. Además, las fuentes consultadas describen la lista/fichero invertido como una estructura de índice secundario, no como un tipo de base de datos definido por la frase del enunciado. No se ha localizado una fuente del temario que establezca la taxonomía pretendida; conservar la respuesta original hasta localizarla o reformular la pregunta con una fuente concreta.','pendiente_ambiguedad'],
 [5420,[55],['II-1'],['computación en la nube','ENISA','riesgos','clasificación histórica'],[
  {url:'https://www.enisa.europa.eu/publications/cloud-computing-risk-assessment',referencia:'ENISA, ficha oficial del informe Cloud Computing Risk Assessment: publicación fechada el 20 de noviembre de 2009.'},
  {url:'https://www.enisa.europa.eu/sites/default/files/publications/Cloud%20Computing%20Security%20Risk%20Assessment.pdf',referencia:'ENISA, Cloud Computing: Benefits, Risks and Recommendations for Information Security (2009): el informe histórico organiza riesgos bajo categorías políticas/organizativas, técnicas y legales.'},
  {url:'https://www.aec.es/wp-media/uploads/DPD-00271.SEG-INF-009-LIBRO_ENISE_cloud-computing-risk-assessment_SP_141p.pdf',referencia:'Versión española del informe ENISA 2009, publicada por AEC: tabla de contenido y apartados identifican riesgos políticos y organizativos, técnicos y legales.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 55: cloud computing, modelos de servicio y despliegue.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema II.1: computación en la nube, base tecnológica, componentes y capacidades.'},
  {url:'https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view?usp=drivesdk',referencia:'ITIC Academy, bloque 25 Cloud Computing 2026: nube, modelos de servicio/despliegue y riesgos actuales; no se encontró en el material la antigua taxonomía tripartita ENISA 2009.'}
 ],null,'La opción A corresponde a la taxonomía del informe concreto de ENISA Cloud Computing Risk Assessment, publicado en 2009. Se corrige «último informe» —afirmación temporal no sustentada y hoy desfasada— para citar título y año. Se conserva la respuesta como dato histórico del informe; no se presenta esa clasificación como marco universal ni como taxonomía vigente de ENISA.','historica']
];
const edits={
 5416:{texto:'En minería de datos, ¿qué lenguaje de marcado basado en XML se utiliza para representar e intercambiar modelos predictivos?',opciones:['PXML','PDML','PMML','PTML']},
 5417:{texto:'¿Cuál de los siguientes es un servidor de aplicaciones web de código abierto y no un SGBD?',opciones:['MySQL Community Edition.','PostgreSQL.','SQLite.','Zope.']},
 5420:{texto:'En el informe de ENISA «Cloud Computing Risk Assessment» (2009), ¿qué grupos de riesgos se distinguían?',opciones:['Riesgos políticos y organizativos, riesgos técnicos y riesgos legales.','Riesgos propios, compartidos y derivados.','Riesgos de usuarios, de la plataforma y del servicio.','Ninguna de las anteriores.']}
};
const academy={
 5416:'ITIC Academy, bloque 34 Business Intelligence y Big Data 2026: minería de datos y modelos analíticos; se cotejó el alcance curricular, pero no se encontró mención textual a PMML.',
 5417:'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado 2026: SGBD relacionales y tipos de bases de datos; no se localizó tratamiento específico de Zope.',
 5418:'ITIC Academy, bloque 26 Hardware, Servidores, CPD, Almacenamiento y Virtualización 2026: dispositivos, conectividad y subsistemas de E/S como cobertura próxima; sin definición específica de transferencia elemental.',
 5419:'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado 2026: modelos relacional y diseño físico/lógico; no contiene la expresión «lista invertida» ni resuelve esta taxonomía.',
 5420:'ITIC Academy, bloque 25 Cloud Computing 2026: riesgos actuales de nube; no se localizó la antigua taxonomía tripartita del informe ENISA 2009.'
};
const logFile=path.join(__dirname,'cambios-lote-1019.json');
if(!fs.existsSync(logFile)) aplicar({numero:'1019',fecha:'2026-11-12',records,edits});
const bankFile=path.join(__dirname,'..','preguntas_preparatic.json'),data=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
for(const c of log.cambios){const q=data.preguntas.find(q=>q.id===c.id),record=records.find(r=>r[0]===c.id);q.revision.estado=record[7];q.revision.observaciones=record[6];q.comentarios=record[6];q.clasificacion.bloque_academia=academy[c.id];q.clasificacion.nota='Clasificación cotejada con el programa oficial; ITIC Academy se usa como mapa curricular cuando se indica, no como autoridad técnica o normativa.';c.actualizada=structuredClone(q)}
fs.writeFileSync(bankFile,JSON.stringify(data,null,2)+'\n');fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
