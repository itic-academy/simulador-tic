const fs=require('node:fs'),path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const drive={
 bi:'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk',
 gis:'https://drive.google.com/file/d/15iokZokiVzk3qpTTQvMpDN0W27PL8tbv/view?usp=drivesdk',
 wifi:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',
 protocol:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',
 common:'https://drive.google.com/file/d/1NWEg_hd3iDIC0kIitK-u8BpmJ20Jecmw/view?usp=drivesdk'
};
const records=[
 [5466,[75],['II-4','III-15'],['data warehouse','data mart','esquema copo de nieve','hechos y dimensiones','OLAP'],[
  {url:'https://learn.microsoft.com/en-us/analysis-services/multidimensional-models-olap-logical-dimension-objects/dimensions-introduction?view=asallproducts-allversions',referencia:'Microsoft Learn, dimensiones OLAP y esquema copo de nieve: define dimensiones formadas por varias tablas relacionadas entre sí y con la tabla de hechos mediante claves primaria/foránea.'},
  {url:'https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-dimension-tables',referencia:'Microsoft Learn, modelado dimensional: la dimensión copo de nieve normaliza datos dimensionales en varias tablas relacionadas.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 75: tecnologías y sistemas de explotación de datos, incluidos Data Warehouse y Data Lake.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, temas II.4 y III.15: almacenes de datos, OLTP/OLAP y minería/procesamiento analítico.'},
  {url:drive.bi,referencia:'ITIC Academy, bloque 34 Business Intelligence y Big Data 2026.1: almacenes, hechos, dimensiones, esquemas dimensionales, ETL/ELT y OLAP; usado como mapa curricular.'}
 ],null,'Se conserva como correcta la opción C: un esquema copo de nieve organiza el análisis dimensional mediante una tabla de hechos y tablas de dimensión; una dimensión puede normalizarse en varias tablas relacionadas. ROLAP permite implementar análisis OLAP sobre almacenamiento relacional, y las jerarquías no aparecen automáticamente en cualquier esquema relacional. Se reemplaza la afirmación absoluta sobre que DataMart no requiere ETL: el flujo depende de la arquitectura concreta y no era una definición válida.','corregida'],
 [5467,[114],['IV-11'],['IEEE 802.11','Wi-Fi','2,4 GHz','5 GHz','bandas'],[
  {url:'https://standards.ieee.org/wp-content/uploads/interactive/web/wi-fi-timeline/index.html',referencia:'IEEE Standards Association, cronología oficial: 802.11a opera en 5 GHz; 802.11b y 802.11g en 2,4 GHz; resume también las generaciones posteriores.'},
  {url:'https://standards.ieee.org/ieee/8802-11_2012_amd.3_/5857/802.11ad/4527/',referencia:'IEEE Std 802.11ad-2012: enmienda para operación en torno a 60 GHz, no 2,4 GHz.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 114: estándar IEEE 802.11, características y redes inalámbricas.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, tema IV.11: redes inalámbricas y sus protocolos/características.'},
  {url:drive.wifi,referencia:'ITIC Academy, bloque 46 Redes inalámbricas 2026.1: IEEE 802.11, bandas, técnicas radioeléctricas y seguridad; mapa curricular.'}
 ],null,'Se mantiene B (802.11b en 2,4 GHz), según IEEE. Se corrige la opción D: «802.11x» no identifica una enmienda concreta y hacía ambigua la pregunta; se sustituye por 802.11ad en 2,4 GHz, combinación falsa porque la enmienda ad opera alrededor de 60 GHz. Las combinaciones de a y g también se ajustan a las bandas especificadas por IEEE.','corregida'],
 [5468,[74],[],['SIG','GIS','proyección cartográfica','coordenadas','distorsión'],[
  {url:'https://www.usgs.gov/faqs/how-are-different-map-projections-used',referencia:'U.S. Geological Survey: una proyección cartográfica representa una parte de la Tierra esférica en una superficie plana; cualquier mapa plano distorsiona alguna propiedad.'},
  {url:'https://pubs.usgs.gov/gip/70047422/report.pdf',referencia:'USGS, Map Projections: conceptos generales, proyección como representación sistemática de la Tierra redonda en una superficie plana y distorsiones resultantes.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 74: conceptos y funcionalidad básicos de los sistemas de información geográfica.'},
  {url:drive.gis,referencia:'ITIC Academy, bloque 33 E-learning y GIS 2026.1: sistemas de información geográfica y representación espacial; mapa curricular.'}
 ],null,'La clave B continúa siendo la correcta, pero «soluciona» sugería que se elimina la distorsión. Una proyección transforma coordenadas de una superficie terrestre curva para representarlas en un plano, con distorsiones que dependen del tipo de proyección y del propósito del mapa. Se precisa la opción para reflejar esa limitación.','corregida'],
 [5469,[109],['II-8'],['FTP','TCP/IP','capa de aplicación','RFC 959'],[
  {url:'https://www.rfc-editor.org/rfc/rfc959.html',referencia:'RFC 959, especificación oficial de FTP: define el protocolo de transferencia de archivos y su uso sobre conexiones TCP.'},
  {url:'https://www.rfc-editor.org/rfc/rfc1122.html',referencia:'RFC 1122, §1.1: distingue las capas de comunicación y enumera FTP entre los protocolos de usuario de la capa de aplicación; FTP usa TCP como transporte (§4.2.1).'},
  {url:'https://www.rfc-editor.org/rfc/rfc1180.html',referencia:'RFC 1180, tutorial TCP/IP: muestra explícitamente la pila FTP/TCP/IP/enlace para una aplicación de transferencia de archivos.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 109: Internet y servicios básicos.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, tema II.8: modelo TCP/IP y arquitectura por capas.'},
  {url:drive.protocol,referencia:'ITIC Academy, bloque 43 Protocolos 2026: protocolos, capas y modelo TCP/IP; mapa curricular.'}
 ],null,'La respuesta A es correcta: FTP es un protocolo de aplicación. RFC 959 especifica el protocolo y sus conexiones TCP; RFC 1122 lo enumera dentro de los protocolos de la capa de aplicación. El uso de TCP no lo convierte en un protocolo de transporte.','vigente'],
 [5470,[49],['I-10'],['Mi Carpeta Ciudadana','notificaciones','DEHú','servicios comunes','recibos'],[
  {url:'https://masinformacioncarpeta.carpetaciudadana.gob.es/infocc/masInformacion/mis-notificaciones',referencia:'Portal oficial de Mi Carpeta Ciudadana, apartado Mis Notificaciones: informa de las notificaciones de organismos integrados y permite acceder a la DEHú para consultarlas/comparecer.'},
  {url:'https://masinformacioncarpeta.carpetaciudadana.gob.es/infocc/preguntas-frecuentes/como-puedo-comparecer-consultar-notificaciones',referencia:'FAQ oficial: en Mi Carpeta Ciudadana se puede consultar e informarse sobre notificaciones, pero la comparecencia y gestión se realiza en la DEHú.'},
  {url:'https://administracionelectronica.gob.es/ctt/ccd',referencia:'Punto de Acceso General, CTT de Carpeta Ciudadana: descripción de la solución común de consulta de información, expedientes y comunicaciones de las AAPP adheridas.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 49: Cl@ve, Carpeta Ciudadana y demás servicios comunes e interoperabilidad.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, tema I.10: infraestructuras y servicios comunes de Administración electrónica.'},
  {url:drive.common,referencia:'ITIC Academy, Tema 049 Servicios Comunes 2026.1: Cl@ve, Carpeta Ciudadana y servicios de interoperabilidad; mapa curricular.'}
 ],null,'La pregunta original, copiada en un examen de 2024, mezclaba la Carpeta Ciudadana estatal con funciones que pueden ofrecer carpetas municipales/autonómicas y no acotaba fecha ni portal. En la versión actual de Mi Carpeta Ciudadana del PAGe está documentada la consulta de notificaciones de las administraciones integradas, mediante la DEHú; la FAQ oficial aclara que la comparecencia/gestión se realiza en DEHú. No se acredita que el portal estatal ofrezca una función general de acceso a recibos de cualquier organismo. Se delimita el enunciado a los servicios actuales del portal estatal, se conserva como correcta A y se sustituyen las opciones ambiguas.','corregida']
];
const edits={
 5466:{opciones:[
  'El análisis dimensional OLAP solo puede implementarse sobre bases multidimensionales y no puede utilizar almacenamiento relacional.',
  'Cualquier base relacional incorpora automáticamente, sin modelado adicional, las jerarquías propias de toda dimensión.',
  'Los modelos en copo de nieve utilizan tablas de hechos y tablas de dimensiones para analizar los datos corporativos.',
  'Los DataMart son siempre almacenes corporativos globales de mayor tamaño que el DataWarehouse que los alimenta.'
 ],respuesta_correcta:2},
 5467:{opciones:['802.11a — 2,4 GHz','802.11b — 2,4 GHz','802.11g — 5 GHz','802.11ad — 2,4 GHz']},
 5468:{opcion:[1,'Permite transformar coordenadas de la superficie terrestre curva para representarlas en un plano; cada proyección introduce distorsiones que dependen del método y de su finalidad.']},
 5470:{texto:'Según las funciones actualmente documentadas para Mi Carpeta Ciudadana del Punto de Acceso General de la Administración General del Estado, ¿qué puede hacer la persona usuaria respecto de sus notificaciones?',opciones:[
  'Consultar las notificaciones pendientes de lectura de las administraciones integradas y acceder a la DEHú para comparecer.',
  'Pagar desde Mi Carpeta Ciudadana todos los recibos de cualquier Administración, aunque el organismo no esté integrado.',
  'Emitir desde el portal estatal justificantes tributarios de cualquier ayuntamiento.',
  'Ninguna de las anteriores.'
 ],respuesta_correcta:0}
};
const logFile=path.join(__dirname,'cambios-lote-1029.json');
if(!fs.existsSync(logFile))aplicar({numero:'1029',fecha:'2026-11-12',records,edits});
const bankFile=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
const academy={
 5466:'ITIC Academy, bloque 34 — Business Intelligence y Big Data 2026.1: Data Warehouse, hechos/dimensiones, esquemas dimensionales, ETL/ELT y OLAP.',
 5467:'ITIC Academy, bloque 46 — Redes inalámbricas 2026.1: IEEE 802.11, bandas radioeléctricas y protocolos.',
 5468:'ITIC Academy, bloque 33 — E-learning y GIS 2026.1: SIG y representación espacial.',
 5469:'ITIC Academy, bloque 43 — Protocolos 2026: protocolos y capas TCP/IP.',
 5470:'ITIC Academy, Tema 049 — Servicios Comunes 2026.1: Cl@ve, Carpeta Ciudadana y servicios de interoperabilidad.'
};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id);q.clasificacion.bloque_academia=academy[c.id];q.clasificacion.nota='Cotejado con el temario oficial vigente A1/A2. ITIC Academy se usa como mapa curricular; la validación técnica se apoya en la fuente primaria citada.';c.actualizada=structuredClone(q)}
fs.writeFileSync(bankFile,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
