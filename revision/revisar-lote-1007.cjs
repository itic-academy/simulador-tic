const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');
const ref = (url, referencia) => ({url, referencia});

const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const tia='https://tiaonline.org/standardannouncement/tia-publishes-new-standards-ansi-tia-568-2-e-and-ansi-tia-568-5-1/';
const ieee='https://www.ieee802.org/3/maint/requests/maint_1080CMP.pdf';
const x210='https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.210-199311-I%21%21PDF-E&lang=e&type=items';
const x200='https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.200-199407-I%21%21PDF-E&lang=e&type=items';
const g707='https://www.itu.int/rec/T-REC-G.707';
const euRf='https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:32006D0771(01)';
const cnaf='https://www.boe.es/eli/es/o/2026/07/10/tdf732';
const academyNetworks='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const academyWireless='https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk';
const academyQuality='https://drive.google.com/file/d/1vRvn5ctFs9bXwuR5gfYXJiVUVhAfgG_7/view?usp=drivesdk';
const astic88='https://drive.google.com/file/d/0Bw-rS_kOHzMKbl9YTDRkYXhpUVU/view?usp=drivesdk&resourcekey=0-G68W8glaMjTzq8AK65xzZQ';

const records=[
 [5356,['110','118'],['IV-7','IV-8'],['cableado estructurado','categoría 5','categoría 6','1000BASE-T'],[
  ref(ieee,'IEEE 802.3ab maintenance request 1080: la especificación 1000BASE-T se diseñó para operar sobre cableado balanceado de cuatro pares Cat 5; la conformidad real exige que el enlace cumpla los parámetros de canal.'),
  ref(tia,'TIA, ANSI/TIA-568.2-E (2024): estándar vigente de cableado balanceado de pares trenzados y componentes; para nuevas instalaciones se emplea normalmente Cat 5e o superior.'),
  ref(boeA1,'Convocatoria A1 GSI 2025, temas 110 y 118: cableado estructurado, Ethernet y medios de redes locales.'),
  ref(boeA2,'Convocatoria A2 GSI 2025, temas IV.7 y IV.8: cableado estructurado, medios y redes locales.'),
  ref(academyNetworks,'ITIC Academy, bloque Redes 2026, apartados de medios, cableado y LAN: encaje curricular comprobado.'),
 ],null,'La respuesta C es correcta: el cableado balanceado de categoría 5 y superior puede transportar Ethernet; 1000BASE-T fue diseñado para Cat 5 conforme a los parámetros de canal, y las instalaciones nuevas suelen especificar Cat 5e o Cat 6. Las categorías 1–4 no satisfacen estos usos modernos; no se necesita un switch Fibre Channel por planta.','corregida'],
 [5357,['111'],['IV-8'],['modelo OSI','primitivas de servicio','request','indication','response','confirm'],[
  ref(x210,'ITU-T X.210, convenciones para servicios OSI: define los cuatro tipos genéricos de primitiva request, indication, response y confirmation.'),
  ref(boeA1,'Convocatoria A1 GSI 2025, tema 111: interfaces y servicios entre capas, protocolos y arquitectura OSI.'),
  ref(boeA2,'Convocatoria A2 GSI 2025, tema IV.8: protocolos, técnicas de transmisión y redes locales.'),
  ref(academyNetworks,'ITIC Academy, bloque Redes 2026, arquitectura en capas y modelo OSI; encaje curricular comprobado.'),
 ],null,'La respuesta B (INDICATION) es uno de los cuatro tipos genéricos de primitivas de servicio OSI: request, indication, response y confirmation. RECEIVE, SEND y ECHO pueden aparecer como nombres de acciones o de interfaces concretas, pero no son tipos genéricos de primitiva.','corregida'],
 [5358,['111'],['IV-8'],['protocolo','entidades pares','OSI','sintaxis','semántica'],[
  ref(x200,'ITU-T X.200, modelo básico OSI, define protocolo de capa N como el conjunto de reglas y formatos semánticos y sintácticos que determina el comportamiento comunicativo de entidades N al realizar funciones N.'),
  ref(boeA1,'Convocatoria A1 GSI 2025, tema 111: protocolos e interconexión de sistemas abiertos.'),
  ref(boeA2,'Convocatoria A2 GSI 2025, tema IV.8: protocolos y técnicas de transmisión.'),
  ref(academyNetworks,'ITIC Academy, bloque Redes 2026, secciones de protocolos y arquitectura en capas; encaje curricular comprobado.'),
 ],null,'La respuesta B es la más precisa: un protocolo establece reglas y formatos para la comunicación entre entidades pares (de la misma capa). La opción A dice heterogéneas, lo cual no define el protocolo de capa del modelo OSI; C lo limita indebidamente a la comunicación directa por el medio físico y D describe direccionamiento/identificación, no el concepto general.','corregida'],
 [5359,['113'],['IV-10'],['SDH','STM-1','155,52 Mbit/s','JDS'],[
  ref(g707,'ITU-T G.707/Y.1322, recomendación vigente de interfaz de nodo SDH: STM-1 corresponde a la velocidad de línea básica de 155,52 Mbit/s.'),
  ref(boeA1,'Convocatoria A1 GSI 2025, tema 113: redes de transporte JDS/JDSxWDM y tecnologías de transmisión.'),
  ref(boeA2,'Convocatoria A2 GSI 2025, tema IV.10: redes WAN y tecnologías WDM/MPLS.'),
  ref(academyNetworks,'ITIC Academy, bloque Redes 2026, apartado de redes de transporte JDSxWDM; encaje curricular comprobado.'),
 ],null,'La respuesta D se mantiene: la velocidad nominal de línea de STM-1 en SDH es 155,52 Mbit/s. Las tasas 51,84 y 155,52 Mbit/s corresponden, respectivamente, a STM-0 y STM-1; no son 1.984 kbit/s ni 100 Mbit/s.','vigente'],
 [5360,['114','117'],['IV-11'],['RFID UHF','CNAF','espectro radioeléctrico','Decisión UE 2006/771/CE'],[
  ref(euRf,'Decisión 2006/771/CE de la Comisión, versión consolidada vigente a 23-1-2025: armoniza en la UE las condiciones técnicas del espectro para dispositivos de corto alcance, incluyendo la categoría RFID UHF.'),
  ref(cnaf,'Orden TDF/732/2026, de 10 de julio (CNAF vigente): atribuye y establece condiciones nacionales de uso del espectro en España, conforme al marco UE, CEPT y UIT.'),
  ref(boeA1,'Convocatoria A1 GSI 2025, tema 114: normativa reguladora de redes inalámbricas y tecnologías radio.'),
  ref(boeA2,'Convocatoria A2 GSI 2025, tema IV.11: normativa reguladora de redes inalámbricas.'),
  ref(academyWireless,'ITIC Academy, bloque Redes Inalámbricas 2026, actualización que incluye CNAF 2026 y regulación radioeléctrica; encaje curricular comprobado.'),
 ],null,'La respuesta B se conserva con una formulación jurídica más precisa: la UE armoniza condiciones técnicas para equipos de corto alcance mediante decisiones de espectro; España recoge las condiciones nacionales en el CNAF, aprobado ahora por Orden TDF/732/2026. ETSI elabora normas técnicas armonizadas (por ejemplo EN 302 208), pero no es el regulador del espectro. TIA e IHE tampoco regulan estas frecuencias. Los planes de frecuencia RFID varían por región, por lo que no se presenta 868–956 MHz como banda global autorizada.', 'corregida'],
];
const edits={
  5356:{texto:'En una instalación nueva de cableado estructurado para Ethernet y Gigabit Ethernet sobre pares trenzados, ¿qué opción es adecuada?',opciones:['Se necesita un switch Fibre Channel en cada planta para interconectar el cableado Ethernet.','Puede usarse UTP de categorías 1 o 2.','Puede usarse UTP de categoría 5 o superior si el canal cumple sus parámetros; para nuevas instalaciones es habitual especificar Cat 5e o Cat 6.','Puede usarse UTP de categorías 3 o 4 para Gigabit Ethernet.'],respuesta_correcta:2,comentarios:'La respuesta C es correcta: 1000BASE-T fue especificado para operar sobre un canal balanceado de cuatro pares Cat 5 conforme; para obra nueva se recomienda Cat 5e o superior según diseño y certificación. Las categorías inferiores no son adecuadas y Fibre Channel no es el equipo de conmutación de una LAN Ethernet.'},
  5357:{texto:'¿Cuál de estos nombres es un tipo genérico de primitiva de servicio en las convenciones OSI?',comentarios:'La respuesta B (INDICATION) es correcta: los cuatro tipos genéricos son request, indication, response y confirmation. RECEIVE, SEND y ECHO no son nombres de esos cuatro tipos genéricos.'},
  5358:{texto:'En una arquitectura por capas como OSI, ¿qué es un protocolo de capa?',opciones:['Reglas para intercambiar datos entre equipos de fabricantes distintos, con independencia de su capa.','Conjunto de reglas y formatos que determina el comportamiento comunicativo de entidades pares de una misma capa.','Reglas para la comunicación directa entre dos sistemas únicamente a través del medio físico.','Mecanismo para asignar un identificador único a cada nodo o host.'],respuesta_correcta:1,comentarios:'La respuesta B es correcta. En OSI, un protocolo define reglas y formatos semánticos y sintácticos que determinan cómo se comunican las entidades pares de una capa. No se reduce a la capa física ni a la asignación de direcciones.'},
  5359:{texto:'¿Cuál es la velocidad nominal de línea de STM-1 en la jerarquía digital síncrona (SDH)?'},
  5360:{texto:'En España, ¿qué marco regula las condiciones de uso del espectro para RFID UHF?',opciones:['TIA asigna las frecuencias UHF y establece una regulación mundial uniforme para RFID.','La Unión Europea armoniza condiciones técnicas para dispositivos de corto alcance y España las concreta en el Cuadro Nacional de Atribución de Frecuencias (CNAF).','ETSI es la autoridad europea que asigna directamente las frecuencias nacionales y sustituye al CNAF.','IHE establece la normativa radioeléctrica de RFID para todas las bandas y países.'],respuesta_correcta:1,comentarios:'La respuesta B es correcta. Las decisiones de la UE armonizan condiciones técnicas del espectro para dispositivos de corto alcance, y el CNAF español recoge las condiciones nacionales de uso; ETSI publica normas técnicas armonizadas, no asigna el espectro ni sustituye al CNAF.'}
};
aplicar({numero:'1007',fecha:'2026-11-12',records,edits});

// Guardar el resultado de cotejar el material curricular de Drive junto a la traza.
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-1007.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const academy={
  5356:'ITIC Academy, bloque Redes 2026, sistemas de cableado y Ethernet en temas A1.110/A1.118 y A2.IV.7/IV.8.',
  5357:'ITIC Academy, bloque Redes 2026, modelo OSI, capas, servicios y protocolos; cotejo curricular directo.',
  5358:'ITIC Academy, bloque Redes 2026, modelo OSI, capas, servicios y protocolos; cotejo curricular directo.',
  5359:'ITIC Academy, bloque Redes 2026, redes de transporte JDSxWDM; cotejo curricular directo.',
  5360:'ITIC Academy, bloque Redes inalámbricas 2026, regulación radio y CNAF 2026; cotejo curricular directo.'
};
for(const entry of log.cambios){const q=bank.preguntas.find(x=>x.id===entry.id);q.clasificacion.bloque_academia=academy[entry.id];q.clasificacion.nota=`Cotejo curricular realizado: ${academy[entry.id]}`;entry.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
