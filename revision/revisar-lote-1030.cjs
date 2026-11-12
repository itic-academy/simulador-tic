const fs=require('node:fs'),path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const drive={
 db:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',
 networks:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',
 pk:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',
 security:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',
 tech:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk'
};
const records=[
 [5471,[63,64],['III-4'],['transacciones','concurrencia','lectura sucia','dirty read','aislamiento'],[
  {url:'https://www.postgresql.org/docs/18/transaction-iso.html',referencia:'PostgreSQL 18, §13.2: define dirty read como leer datos escritos por una transacción concurrente todavía no confirmada; diferencia la lectura sucia de lecturas no repetibles y fantasma.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, temas 63–64: SGBD, bases de datos relacionales y SQL.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, tema III.4: concurrencia de acceso y mecanismos de resolución de conflictos.'},
  {url:drive.db,referencia:'ITIC Academy, Bases de Datos 2026: transacciones, aislamiento y concurrencia; mapa curricular.'}
 ],null,'La respuesta D es la definición precisa: se lee una modificación concurrente todavía no confirmada, que podría ser revertida. La opción A se ajusta para referirse a datos ya confirmados; B describe una lectura no repetible y C una lectura fantasma. Se corrige la ambigüedad original, que podía interpretarse como una lectura de datos sin rollback pero ya confirmados.','corregida'],
 [5472,[113],['IV-10'],['MPLS','etiqueta','label stack entry','32 bits'],[
  {url:'https://www.rfc-editor.org/rfc/rfc3032.html',referencia:'RFC 3032, §2.1: cada entrada de la pila de etiquetas MPLS se representa con 4 octetos (32 bits), distribuidos entre etiqueta, TC/EXP, bit S y TTL.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 113: redes de transporte, MPLS y tecnologías asociadas.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, tema IV.10: tecnologías MPLS, redes WAN y encaminamiento.'},
  {url:drive.networks,referencia:'ITIC Academy, bloque 42 Redes 2026: MPLS y redes de transporte; mapa curricular.'}
 ],null,'La respuesta B (32 bits) es correcta para una entrada/cabecera de etiqueta MPLS individual: RFC 3032 define cuatro octetos por entrada. La pila puede contener varias entradas, así que se aclara que no se pregunta por la longitud total de todo posible bloque de etiquetas.','corregida'],
 [5473,[80,81],['I-9','IV-12'],['PKI','autoridad raíz','X.509','certificado autofirmado','ancla de confianza'],[
  {url:'https://www.rfc-editor.org/rfc/rfc9810.html',referencia:'RFC 9810, terminología PKI: la información de una CA raíz puede suministrarse con o sin certificado; si se usa certificado, este puede ser autofirmado, cruzado, firmado por un par, por una CA superior o incluso no firmado.'},
  {url:'https://www.rfc-editor.org/rfc/rfc5280.html',referencia:'RFC 5280, §6.1.1 y §6.3: un ancla de confianza se representa por información de nombre/clave; puede aportarse mediante un certificado autofirmado, pero la validación no exige que se represente así.'},
  {url:'https://www.rfc-editor.org/rfc/rfc6024.html',referencia:'RFC 6024: los certificados X.509 autofirmados se usan típicamente como anclas de confianza, aunque RFC 5280 no obliga a esa representación.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, temas 80–81: certificados, claves públicas/privadas e infraestructura de clave pública.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, tema I.9: identificación y autenticación electrónica y servicios de validación.'},
  {url:drive.pk,referencia:'ITIC Academy, bloque de Protección de Datos, Identificación y Firma 2026: certificados, PKI y anclas de confianza; mapa curricular.'}
 ],null,'La respuesta típica es C, pero no es una regla universal. RFC 5280 no impone el formato del ancla de confianza; RFC 9810 confirma que incluso un certificado de CA raíz puede ser autofirmado, cruzado, firmado por otra CA o no existir como certificado. Se reformula para preguntar por la PKI jerárquica X.509 clásica y por el certificado que suele distribuirse como ancla.','corregida'],
 [5474,[125],['II-13'],['IDS','IPS','detección de intrusiones','prevención de intrusiones','ciberseguridad'],[
  {url:'https://csrc.nist.gov/pubs/sp/800/94/final',referencia:'NIST SP 800-94, Guide to Intrusion Detection and Prevention Systems: presenta IDS/IPS dentro de IDPS y distingue funciones de monitorización/detección y de prevención.'},
  {url:'https://csrc.nist.gov/glossary/term/intrusion_detection_system',referencia:'Glosario NIST, Intrusion Detection System: monitorización de eventos y análisis para detectar indicios de incidentes o amenazas.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 125: prevención de ataques en redes y sistemas de detección de intrusiones.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, tema II.13: herramientas de ciberseguridad y seguridad lógica.'},
  {url:drive.security,referencia:'ITIC Academy, bloque 48 Seguridad en redes y aplicaciones 2026.1: ataques, detección, prevención y herramientas de seguridad; mapa curricular.'}
 ],null,'IDS (opción B) es el sistema cuya función principal es observar eventos y detectar indicios de intrusión. Un IPS puede detectar y además actuar para bloquear/prevenir; se precisa en la explicación que ambos se agrupan a veces bajo IDPS, pero la distinción funcional hace única la respuesta. NIST mantiene SP 800-94 como guía final y señala que el borrador de revisión posterior fue retirado.','vigente'],
 [5475,[85,107],[],['blockchain','edge analytics','smart contracts','Ethereum','EBSI'],[
  {url:'https://www.etsi.org/deliver/etsi_gs/MEC/001_099/002/04.02.01_60/gs_MEC002v040201p.pdf',referencia:'ETSI GS MEC 002 V4.2.1 (2026), casos de analítica MEC: tratamiento de datos y analítica en los nodos/hosts de edge computing, concepto independiente de blockchain.'},
  {url:'https://ethereum.org/developers/docs/smart-contracts/',referencia:'Documentación de Ethereum: un smart contract es un programa que reside y se ejecuta en Ethereum, la cadena de bloques.'},
  {url:'https://digital-strategy.ec.europa.eu/en/policies/european-blockchain-services-infrastructure',referencia:'Comisión Europea, EBSI: infraestructura europea formada por una red de nodos y servicios basados en blockchain.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 85: blockchain, redes, consenso, contratos inteligentes y EBSI; tema 107: tecnologías emergentes.'},
  {url:drive.tech,referencia:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información 2026.1: blockchain, smart contracts y EBSI; mapa curricular.'}
 ],null,'La respuesta A continúa siendo la única que no se basa por definición en blockchain: edge analytics procesa datos cerca de donde se generan dentro de arquitecturas de computación en el borde. Un contrato inteligente sobre Ethereum, la red Ethereum y EBSI sí utilizan blockchain. Se precisa la opción de contratos inteligentes para evitar generalizar a todo uso del término fuera de una cadena de bloques.','corregida']
];
const edits={
 5471:{opcion:[0,'Una transacción lee datos escritos por otra transacción que ya se han confirmado.']},
 5472:{texto:'¿Cuántos bits ocupa cada entrada de la pila de etiquetas MPLS (cabecera de una etiqueta individual)?'},
 5473:{texto:'En una PKI jerárquica X.509 clásica, el certificado autofirmado que suele distribuirse como ancla de confianza corresponde normalmente a la autoridad de certificación:',opciones:['Final, que emite certificados a usuarios y no utiliza certificado propio.','Intermedia, cuyo certificado debe estar firmado por una autoridad superior.','Raíz, que firma su propio certificado en el modelo jerárquico tradicional.','Pública estatal, que es la única que puede emitir certificados raíz.'],respuesta_correcta:2},
 5475:{opcion:[1,'Smart contracts desplegados en Ethereum']}
};
const logFile=path.join(__dirname,'cambios-lote-1030.json');
if(!fs.existsSync(logFile))aplicar({numero:'1030',fecha:'2026-11-12',records,edits});
const bankFile=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
const academy={
 5471:'ITIC Academy, Bases de Datos 2026: transacciones, niveles de aislamiento y concurrencia de acceso.',
 5472:'ITIC Academy, bloque 42 Redes 2026: redes de transporte, MPLS y encapsulado.',
 5473:'ITIC Academy, bloque de Identificación, Firma y PKI 2026: certificados, CA raíz y jerarquía X.509.',
 5474:'ITIC Academy, bloque 48 Seguridad en redes y aplicaciones 2026.1: IDS/IPS, ataques y herramientas de detección y prevención.',
 5475:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información 2026.1: edge, blockchain, smart contracts y EBSI.'
};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id);q.clasificacion.bloque_academia=academy[c.id];q.clasificacion.nota=c.id===5475?'Cotejado con A1-85/A1-107 y el bloque 30 de ITIC Academy. El programa oficial A2 vigente no contiene un tema específico de blockchain/EBSI.': 'Cotejado con el temario oficial A1/A2 cuando existe correspondencia directa. ITIC Academy se usa como mapa curricular, no como autoridad técnica primaria.';c.actualizada=structuredClone(q)}
fs.writeFileSync(bankFile,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
