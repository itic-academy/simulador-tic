const path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const drive={
  analysis:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',
  data:'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk',
  security:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',
  protocols:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk'
};
const records=[
 [5511,[95],['III-3'],['MÉTRICA v3','JAD','Joint Application Design','sesiones de trabajo','obtención de requisitos','consenso','herramientas CASE'],[
  {url:'https://alarcos.esi.uclm.es/ipsw/metrica3/metrica_3/guidances/guidelines/joint_application_design_ED247D55.html',referencia:'Directriz MÉTRICA v3 para JAD: enumera las características de la sesión (equipo y consenso, pocas reuniones largas y preparadas, modelos con diagramas y CASE) y añade como producto los modelos que los participantes aprueban tras la sesión. La opción de cronograma no figura en esta lista.'},
  {url:'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf',referencia:'Documento oficial de MÉTRICA v3, Análisis del Sistema de Información, ASI 2: JAD aparece como una técnica de obtención de requisitos en las sesiones de trabajo con usuarios.'},
  {url:'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A0f07660d-1044-489e-a3be-3a94b80fbb16/METRICA_V3_Gestion_de_Proyectos.pdf',referencia:'Documento oficial MÉTRICA v3, Gestión de Proyectos, GPI 2.3: el establecimiento del calendario de hitos y entregas pertenece a la planificación general del proyecto, no a las características definitorias de la sesión JAD.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 95: metodología de planificación y desarrollo de sistemas de información MÉTRICA.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema III.3: estrategias de determinación de requerimientos y especificación de requisitos.'},
  {url:drive.analysis,referencia:'ITIC Academy 2026, bloque 38 Análisis, diseño y construcción de sistemas: ingeniería de requisitos, análisis y especificación; cotejo curricular, no fuente de la respuesta.'}
 ],null,'Se concreta que se pregunta por la lista de características de una sesión JAD de MÉTRICA v3. La directriz enumera las tres primeras opciones y como cuarto rasgo que los modelos resultantes sean aprobados por los participantes. La opción D mezcla el calendario general del proyecto —que MÉTRICA trata aparte en GPI 2.3— con la lista de rasgos de JAD; por tanto es la falsa. Se conserva la clave D y se resuelve la anterior duda de atribución.', 'corregida'],
 [5512,[75],['III-15'],['Data Lake','schema-on-read','schema-on-write','esquema','ingesta de datos'],[
  {url:'https://learn.microsoft.com/en-us/azure/architecture/data-guide/scenarios/data-lake',referencia:'Microsoft Azure Architecture Center: los data lakes suelen conservar datos en su formato original y aplicar la estructura al leerlos (schema-on-read), en contraste con schema-on-write típico del data warehouse.'},
  {url:'https://learn.microsoft.com/en-us/azure/databricks/lakehouse-architecture/deployment-guide/delta-lake',referencia:'Microsoft Learn presenta schema-on-read como patrón de manejo flexible de esquemas en arquitecturas lake; soluciones lakehouse pueden añadir validación y evolución de esquema.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 75: sistemas de explotación de datos, data lake, data warehouse, lakehouse, data fabric y data mesh.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema III.15: minería de datos, OLAP, big data y entornos Hadoop o similares.'},
  {url:drive.data,referencia:'ITIC Academy 2026, bloque 34 Business Intelligence y Big Data: data lake/lakehouse y sus modelos de datos; mapa curricular.'}
 ],null,'Schema-on-read es un patrón común de los data lakes: se conservan datos flexibles o en formato nativo y se interpreta/aplica un esquema al consultarlos. No es una obligación universal de toda implementación; se formula como característica habitual, no exclusiva. Schema-on-write es más característico de almacenes tradicionales, aunque los lakehouse modernos pueden imponer esquemas en determinadas tablas.', 'corregida'],
 [5513,[125],['IV-12'],['denegación de servicio','DoS','configuración de routers','filtrado de ingreso','BCP 38','ACL'],[
  {url:'https://www.rfc-editor.org/rfc/rfc3704.html',referencia:'RFC 3704/BCP 84: el filtrado de ingreso recomendado por BCP 38 limita el impacto de ataques DoS/DDoS que usan direcciones IP de origen falsificadas; también trata las condiciones y límites del filtrado.'},
  {url:'https://www.rfc-editor.org/rfc/rfc2827.html',referencia:'RFC 2827/BCP 38: recomienda filtrar en los límites de red paquetes con direcciones de origen no legítimas para dificultar ataques DoS basados en suplantación; no pretende detener todo ataque volumétrico.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 125: seguridad en redes, tipos de ataques y medidas de prevención.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema IV.12: seguridad en redes, seguridad perimetral y control de accesos.'},
  {url:drive.security,referencia:'ITIC Academy 2026, bloque 48 Seguridad en redes y en el nivel de aplicación: seguridad perimetral, cortafuegos y ataques de red; mapa curricular.'}
 ],null,'La opción A es la única directamente relacionada con el control perimetral: reglas incorrectas de filtrado de ingreso pueden permitir tráfico falsificado o malicioso y facilitar ciertos DoS. RFC 2827/3704 explica esta mitigación, pero el filtrado no neutraliza por sí solo todos los ataques, por ejemplo un flood con orígenes válidos o uno que sature el enlace aguas arriba. Se mantiene “podría facilitar” y no se afirma que un router mal configurado sea causa necesaria o defensa suficiente.', 'corregida'],
 [5514,[118],['IV-11'],['Wi-Fi','IEEE 802.11','DFS','Dynamic Frequency Selection','radar','5 GHz','CAC'],[
  {url:'https://www.etsi.org/deliver/etsi_en/301800_301899/301893/02.02.01_30/en_301893v020201va.pdf',referencia:'ETSI EN 301 893 V2.2.1, estándar armonizado europeo para RLAN de 5 GHz: define DFS (Dynamic Frequency Selection), comprobación de disponibilidad de canal (CAC), monitorización de radar y cambio/cierre del canal cuando se detecta radar.'},
  {url:'https://www.etsi.org/wp-content/uploads/en_301893v020201p.pdf',referencia:'Texto de ETSI EN 301 893 V2.2.1: DFS debe identificar canales disponibles/no disponibles ante señales de radar; los procedimientos CAC e in-service monitoring sustentan la selección/cambio de canal.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 118: redes de área local, tecnologías inalámbricas, gestión y monitorización de redes.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema IV.11: redes inalámbricas, protocolos, características, seguridad y normativa reguladora.'},
  {url:drive.protocols,referencia:'ITIC Academy 2026, bloque 43 Protocolos: acceso Wi-Fi y comunicaciones inalámbricas; mapa curricular.'}
 ],null,'DFS significa Dynamic Frequency Selection. En las bandas de 5 GHz donde se exige, el equipo comprueba y monitoriza el canal para detectar radares y debe abandonarlo/cambiarlo si los detecta; CAC es el procedimiento de comprobación de disponibilidad. No es una garantía genérica de ausencia de interferencia con todo sistema radioeléctrico ni se aplica de forma idéntica en todas las bandas y regiones.', 'corregida'],
 [5515,[118],['IV-9'],['SNMP','MIB','Management Information Base','objetos gestionados','OID','SMIv2'],[
  {url:'https://www.rfc-editor.org/rfc/rfc3418.html',referencia:'RFC 3418, SNMP MIB: la MIB es el almacén virtual de información y los objetos gestionados describen el comportamiento de una entidad SNMP; los objetos se acceden mediante SNMP.'},
  {url:'https://www.rfc-editor.org/rfc/rfc2578.html',referencia:'RFC 2578, SMIv2: define cómo se nombran y especifican objetos gestionados, incluidos su identificador, sintaxis, acceso y estado; la MIB agrupa dichas definiciones.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 118: monitorización y control de tráfico, gestión SNMP y administración de LAN.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema IV.9: administración de redes locales, gestión de dispositivos, monitorización, control de tráfico y gestión SNMP.'},
  {url:drive.protocols,referencia:'ITIC Academy 2026, bloque 43 Protocolos: redes, protocolos y administración/gestión como mapa curricular.'}
 ],null,'Una MIB no es un mapa de los equipos gestionados ni una tabla de relaciones agente–NMS. Es el conjunto/almacén lógico de definiciones de objetos gestionados (identificadores OID, sintaxis, acceso y estado) cuyos valores representan información de la entidad y que SNMP permite consultar o, si está autorizado, modificar. La opción B es la que mejor expresa esa función entre las disponibles.', 'corregida']
];
const edits={
 5511:{texto:'En la lista de características de una sesión de trabajo JAD recogida por MÉTRICA v3, señale la afirmación que NO aparece:',respuesta_correcta:3},
 5512:{texto:'¿Qué enfoque de esquema se asocia habitualmente a los Data Lakes, que conservan datos diversos y aplican su interpretación al consultarlos?',respuesta_correcta:0},
 5513:{texto:'¿Cuál de los siguientes elementos, si se configura de forma inadecuada, puede facilitar ciertos ataques de denegación de servicio basados en tráfico de red?',respuesta_correcta:0},
 5514:{texto:'En redes Wi-Fi de 5 GHz sujetas a protección de radares, ¿cómo se denomina el mecanismo que detecta su presencia y permite seleccionar o cambiar el canal para evitar interferencias?',respuesta_correcta:2},
 5515:{texto:'En SNMP, ¿qué describe principalmente la Management Information Base (MIB)?',opciones:['La posición física de un dispositivo dentro de la jerarquía de la red.','Las definiciones de los objetos gestionados y la información que representan, accesible mediante SNMP.','La tabla que relaciona cada agente SNMP con uno o varios sistemas NMS.','La sintaxis de codificación ASN.1 independiente de la estructura de los sistemas.'],respuesta_correcta:1}
};
const log=path.join(__dirname,'cambios-lote-1038.json');
const fs=require('node:fs');
if(!fs.existsSync(log))aplicar({numero:'1038',fecha:'2026-11-12',records,edits});
const bankFile=path.join(__dirname,'..','preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const changeLog=JSON.parse(fs.readFileSync(log,'utf8'));
const academy={
  5511:'ITIC Academy 2026, bloque 38 Análisis, diseño y construcción de sistemas: ingeniería de requisitos, análisis y especificación; mapa curricular.',
  5512:'ITIC Academy 2026, bloque 34 Business Intelligence y Big Data: data lake, lakehouse y esquemas flexibles; mapa curricular.',
  5513:'ITIC Academy 2026, bloque 48 Seguridad en redes y en el nivel de aplicación: seguridad perimetral y ataques de red; mapa curricular.',
  5514:'ITIC Academy 2026, bloque 43 Protocolos: Wi-Fi y comunicaciones inalámbricas; mapa curricular.',
  5515:'ITIC Academy 2026, bloque 43 Protocolos: gestión y monitorización de redes; mapa curricular.'
};
for(const c of changeLog.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id);
 q.clasificacion.bloque_academia=academy[c.id];
 q.clasificacion.nota='Cotejado con el programa oficial A1/A2 2025 y el material de ITIC Academy 2026 usado como mapa curricular; la respuesta se apoya en las fuentes técnicas primarias citadas.';
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankFile,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(log,JSON.stringify(changeLog,null,2)+'\n');
