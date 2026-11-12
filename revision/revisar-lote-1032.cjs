const fs=require('node:fs'),path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const drive={
 database:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',
 projects:'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk',
 networks:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',
 protocols:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk'
};
const records=[
 [5481,[63],['III-4'],['CODASYL','DBTG','modelo en red','bases de datos'],[
  {url:'https://dl.acm.org/doi/book/10.1145/1387569',referencia:'ACM, ficha editorial del informe original Data Base Task Group Report to the CODASYL Programming Language Committee (abril de 1971), 269 páginas.'},
  {url:'https://www.govinfo.gov/content/pkg/GOVPUB-C13-2ef4aaa5a150eedcb85a1e6985e90bfa/pdf/GOVPUB-C13-2ef4aaa5a150eedcb85a1e6985e90bfa.pdf',referencia:'National Bureau of Standards, informe técnico de gestión de bases de datos: caracteriza el trabajo CODASYL/DBTG como modelo de datos en red y cita el informe ACM de abril de 1971.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 63: sistemas gestores de bases de datos y modelos de datos.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, tema III.4: modelado de datos y diseño de bases de datos.'},
  {url:drive.database,referencia:'ITIC Academy 2026, bloque de Bases de Datos: modelos de datos y evolución de modelos de SGBD; mapa curricular.'}
 ],null,'CODASYL/DBTG designa el modelo de datos en red, no el jerárquico ni el relacional de Codd. Se sustituye “ninguna de las anteriores” por la clasificación positiva y precisa del modelo, preservando íntegramente la pregunta original en el registro.','corregida'],
 [5482,[34,38],['III-1','III-2'],['estimación de esfuerzo','sesgo de estimación','optimismo','gestión de proyectos'],[
  {url:'https://doi.org/10.1016/j.infsof.2009.12.002',referencia:'Jørgensen y Grimstad, Information and Software Technology 52(5), 2010: experimentos con profesionales; describen sobreoptimismo en esfuerzo y confianza excesiva en la precisión de las estimaciones.'},
  {url:'https://www.sciencedirect.com/science/article/pii/S0950584909002146',referencia:'Artículo original con los resultados empíricos de cuatro experimentos sobre sobreoptimismo y sobreconfianza en estimaciones de esfuerzo de software.'},
  {url:'https://www.iso.org/standard/74306.html',referencia:'ISO/IEC/IEEE 15939: medición de sistemas y software; el contexto, los datos y las prácticas de medición condicionan la evaluación de estimaciones.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, temas 34 y 38: organización y gestión de proyectos TIC y estimación/planificación.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, temas III.1 y III.2: planificación, dirección y gestión de proyectos de sistemas de información.'},
  {url:drive.projects,referencia:'ITIC Academy 2026, bloque 15 Metodologías Ágiles y Ciclo de Vida: planificación/estimaciones y gestión de proyectos; usado como mapa temático.'}
 ],null,'La generalización de que los desarrolladores tienden a sobrestimar sistemáticamente el esfuerzo no es una explicación respaldada como tendencia general: estudios empíricos describen con frecuencia sobreoptimismo, esto es, infravaloración del esfuerzo y sobreconfianza. La dificultad de estimar sí aumenta por el contexto organizativo, cambios tecnológicos y coordinación/gestión no lineales. Se reescribe el ítem como identificación de la afirmación no sustentada, sin negar que pueda haber sobreestimaciones en casos concretos.','corregida'],
 [5483,[79,111],['IV-12','II-8'],['modelo OSI','capa de presentación','cifrado','confidencialidad'],[
  {url:'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.800-199103-I%21%21PDF-E&lang=f&type=items',referencia:'ITU-T X.800, arquitectura de seguridad OSI, anexo B: los mecanismos de encipherment operan sobre la sintaxis en presentación; la confidencialidad puede apoyarse también en otros niveles. No es una capa exclusiva universal para todo cifrado.'},
  {url:'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.200-198811-S%21%21PDF-E&lang=e&type=items',referencia:'ITU-T X.200 / ISO/IEC 7498-1: modelo básico de referencia OSI y definición de sus siete capas; capa 6 es Presentación.'},
  {url:'https://www.itu.int/ITU-T/recommendations/rec.aspx?rec=2839',referencia:'ITU-T X.216: define los servicios de presentación entre la capa de aplicación y la de presentación.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, temas 79 y 111: criptografía y arquitectura/capas del modelo OSI.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, temas IV.12 y II.8: técnicas criptográficas y modelo OSI/TCP-IP.'},
  {url:drive.protocols,referencia:'ITIC Academy 2026, bloque 43 Protocolos: arquitectura OSI y funciones de las capas; bloque 48 para seguridad y criptografía.'}
 ],null,'La respuesta C es la convencional cuando se pregunta por la transformación/cifrado de la representación sintáctica en el modelo OSI. El enunciado se acota a mecanismos de encipherment de presentación: ITU-T X.800 distribuye servicios de seguridad entre varias capas, por lo que sería incorrecto afirmar que todo cifrado de cualquier protocolo ocurre necesariamente en presentación.','corregida'],
 [5484,[110,118],['IV-8'],['bridge','switch','puente MAC','capa de enlace','IEEE 802.1D'],[
  {url:'https://www.ieee802.org/1/pages/802.1D.html',referencia:'IEEE 802.1D, MAC Bridges: el estándar define la operación de bridge/MAC bridging, retransmisión y filtrado de tramas en LAN puenteadas.'},
  {url:'https://community.cisco.com/kxiwq67737/attachments/kxiwq67737/6016-discussions-lan-switching-routing/461104/1/802.1D-1998.pdf?inline=true',referencia:'IEEE 802.1D-1998, §7.1: un bridge MAC retransmite tramas entre LANs conectadas a sus puertos y filtra/decide el reenvío; la terminología del estándar no sostiene la separación simplista de usos del test.'},
  {url:'https://www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/10543-chapter20.html',referencia:'Cisco, guía de bridging: el bridging opera en enlace de datos y se diferencia del encaminamiento de capa de red.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, temas 110 y 118: interconexión de redes y dispositivos/arquitectura LAN.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, tema IV.8: redes locales y dispositivos de interconexión.'},
  {url:drive.networks,referencia:'ITIC Academy 2026, bloque 42 Redes: LAN, dispositivos de interconexión y tecnología Ethernet; mapa curricular.'}
 ],null,'La opción original sobre “switches para servidores y bridges para interconectar LAN” no establece una diferencia técnica fiable; ambos pueden interconectar segmentos LAN y un switch Ethernet clásico realiza bridging MAC multipuerto. Se reformula para preguntar por esa relación, que distingue de modo verificable el concepto y evita atribuir exclusividad por el tipo de equipo conectado.','corregida'],
 [5485,[115],['II-8'],['RIP','OSPF','IGRP','EIGRP','BGP','IGP','EGP','eBGP','iBGP'],[
  {url:'https://www.rfc-editor.org/rfc/rfc2453.html',referencia:'RFC 2453, §§1 y 3.4: RIP se diseñó como IGP y utiliza algoritmos de vector distancia.'},
  {url:'https://www.rfc-editor.org/rfc/rfc2328.html',referencia:'RFC 2328, resumen e introducción: OSPF es un IGP de estado de enlace para un sistema autónomo.'},
  {url:'https://www.rfc-editor.org/rfc/rfc4271.html',referencia:'RFC 4271, §§1 y 8: BGP es un protocolo inter-AS; especifica sesiones externas eBGP y sesiones internas iBGP, y el atributo AS_PATH.'},
  {url:'https://www.rfc-editor.org/rfc/rfc7868.html',referencia:'RFC 7868, §1: EIGRP es un protocolo de vector distancia avanzado, no un protocolo de estado de enlace.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 115: encaminamiento en redes IP.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, tema II.8: protocolos de encaminamiento del modelo TCP/IP.'},
  {url:drive.protocols,referencia:'ITIC Academy 2026, bloque 43 Protocolos: encaminamiento IP, RIP, OSPF, EIGRP y BGP; mapa curricular.'}
 ],null,'Se conserva la respuesta C, pero se elimina la afirmación absoluta de que todo BGP es externo: BGP admite sesiones eBGP entre AS distintos e iBGP dentro del mismo AS. RIP es un IGP de vector distancia; OSPF es IGP de estado de enlace; IGRP/EIGRP pertenecen a la familia de vector distancia. La opción C queda expresada con esas precisiones.','corregida']
];
const edits={
 5481:{texto:'¿A qué modelo de datos corresponde el modelo CODASYL/DBTG?',opciones:['Modelo jerárquico.','Modelo relacional.','Modelo relacional de Codd.','Modelo de datos en red (network model).'],respuesta_correcta:3},
 5482:{texto:'¿Qué afirmación NO es una explicación general respaldada de los errores al estimar el esfuerzo de desarrollo de software?',opciones:['Las organizaciones tienen recursos, procedimientos e historia propios y deben adaptar a ellos sus prácticas de estimación.','La evolución rápida de tecnologías y métodos puede restar vigencia a datos y supuestos de una estimación.','Como tendencia general, los desarrolladores sobrestiman sistemáticamente el esfuerzo requerido.','Ignorar coordinación y gestión no lineales puede sesgar una estimación basada en una suma simple de tareas.'],respuesta_correcta:2},
 5483:{texto:'En el modelo OSI clásico, ¿qué capa se asocia a los mecanismos de cifrado que transforman la representación sintáctica de los datos?',opciones:['Aplicación.','Sesión.','Presentación.','Transporte.'],respuesta_correcta:2},
 5484:{texto:'En la terminología clásica de redes Ethernet, ¿qué relación describe correctamente a un switch respecto de un bridge MAC?',opciones:['Un switch Ethernet de capa 2 puede entenderse como un bridge MAC multipuerto que aprende y filtra/reenvía tramas.','El switch opera necesariamente en capa 3 y el bridge únicamente en capa 2.','Un bridge no puede conectar segmentos LAN, mientras que un switch sí.','Solo los switches separan dominios de colisión; los bridges no lo hacen por puerto.'],respuesta_correcta:0},
 5485:{opciones:['RIP y OSPF son protocolos de vector distancia.','IGRP y EIGRP son protocolos de estado de enlace.','RIP es un IGP; las sesiones eBGP intercambian rutas entre sistemas autónomos, mientras iBGP opera entre routers del mismo AS.','IS-IS y OSPF son protocolos de encaminamiento externo.'],respuesta_correcta:2}
};
const logFile=path.join(__dirname,'cambios-lote-1032.json');
if(!fs.existsSync(logFile))aplicar({numero:'1032',fecha:'2026-11-12',records,edits});
const bankFile=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
const academy={
 5481:'ITIC Academy 2026, bloque de Bases de Datos: modelos de datos de SGBD; cotejo con el programa A1-63/A2-III.4.',
 5482:'ITIC Academy 2026, bloque 15 Metodologías Ágiles y Ciclo de Vida: estimación y planificación del desarrollo; el material se usa como mapa temático.',
 5483:'ITIC Academy 2026, bloque 43 Protocolos: arquitectura OSI; bloque 48 Seguridad en redes y aplicaciones: criptografía/cifrado.',
 5484:'ITIC Academy 2026, bloque 42 Redes: LAN y dispositivos de interconexión Ethernet.',
 5485:'ITIC Academy 2026, bloque 43 Protocolos: encaminamiento IP, RIP, OSPF, EIGRP y BGP.'
};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id);q.clasificacion.bloque_academia=academy[c.id];q.clasificacion.nota='Cotejado con el programa oficial A1/A2 vigente y el material curricular de ITIC Academy. La academia se usa como mapa temático; la respuesta se comprueba con fuentes primarias.';c.actualizada=structuredClone(q)}
fs.writeFileSync(bankFile,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
