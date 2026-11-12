const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const drive={
  emerging:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
  collaboration:'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk',
  security:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',
  protocols:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk'
};
const records=[
 [5491,[79,85],['I-6'],['blockchain','clave privada','firma digital','claves públicas','riesgo de pérdida de claves'],[
  {url:'https://csrc.nist.gov/pubs/ir/8202/final',referencia:'NISTIR 8202, Blockchain Technology Overview: describe blockchain como libro distribuido usualmente sin autoridad central y explica forks y consenso; la inmutabilidad es resistente a manipulación, no absoluta.'},
  {url:'https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-5.pdf',referencia:'NIST FIPS 186-5: las firmas se generan con la clave privada y pueden verificarse matemáticamente con la clave pública correspondiente, sin que una CA sea requisito criptográfico.'},
  {url:'https://www.rfc-editor.org/rfc/rfc5280.html',referencia:'RFC 5280, PKIX: los certificados X.509 vinculan una clave pública con la identidad de un sujeto y las rutas de confianza se validan contra anclas de CA; eso es distinto de verificar una firma con una clave ya conocida.'},
  {url:'https://bitcoin.org/en/you-need-to-know',referencia:'Bitcoin.org, guía de seguridad: en una cartera autocustodiada, perder permanentemente la clave/frase de recuperación puede hacer irrecuperables los fondos.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, temas 79 y 85: criptografía y blockchain.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, tema I.6: identidad y firma electrónica; clasificación parcial por el concepto de firma con claves asimétricas.'},
  {url:drive.emerging,referencia:'ITIC Academy 2026, bloque de tecnologías de sistemas de información que incluye A1-85: mapa curricular de blockchain.'}
 ],null,'Se corrige el ítem: la opción falsa es B. Una CA puede acreditar el vínculo entre identidad y clave, pero no hace falta una CA para comprobar criptográficamente una firma si ya se conoce la clave pública; el riesgo por falta de recuperación se refiere a perder la clave privada o su respaldo. Se descartan como opciones ciertas las afirmaciones absolutas sobre borrado de bloques o ausencia universal de responsabilidad legal, que dependen del protocolo, gobernanza y jurisdicción.','corregida'],
 [5492,[133],['II-16'],['herramientas colaborativas','Trello','Basecamp','Slack','Apache Hadoop','big data'],[
  {url:'https://trello.com/guide/enterprise/creating-projects-inviting-members',referencia:'Trello, guía de tableros y colaboración: describe proyectos, invitación de miembros, tareas y colaboración en tarjetas.'},
  {url:'https://basecamp.com/learn',referencia:'Basecamp, tutoriales oficiales: message boards, listas de tareas, proyectos e invitación de miembros para colaborar.'},
  {url:'https://slack.com/team-collaboration-tool',referencia:'Slack, página oficial de colaboración de equipos: comunicación, archivos y trabajo conjunto en canales.'},
  {url:'https://hadoop.apache.org/description.html',referencia:'Apache Hadoop, descripción oficial: biblioteca/framework para procesamiento distribuido de grandes conjuntos de datos en clústeres, no una herramienta de colaboración de equipos.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 133: herramientas de trabajo colaborativo.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, tema II.16: herramientas de trabajo colaborativo.'},
  {url:drive.collaboration,referencia:'ITIC Academy 2026, bloque 50 sobre videoconferencia, SSO y herramientas de trabajo colaborativo.'}
 ],null,'Se conserva D. Trello, Basecamp y Slack ofrecen tableros/gestión de tareas, comunicación o colaboración de equipos; Hadoop es un framework de procesamiento distribuido de datos. La redacción precisa que se pregunta por la función principal de los productos, aunque Hadoop pueda integrarse en flujos de trabajo compartidos.','corregida'],
 [5493,[80,81],['I-6','IV-12'],['Kerberos','Project Athena','autenticación de red','tickets','MIT'],[
  {url:'https://datatracker.ietf.org/doc/html/rfc4120',referencia:'RFC 4120, Kerberos V5, introducción e historial: documenta el protocolo de autenticación de red de Kerberos y atribuye el diseño e implementación inicial a personal de Project Athena del MIT y colaboradores.'},
  {url:'https://web.mit.edu/kerberos/',referencia:'MIT Kerberos Consortium: documentación y distribución de la implementación Kerberos mantenida en el entorno MIT.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, temas 80–81: identificación, autenticación, claves y PKI.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, temas I.6 y IV.12: identidad electrónica y mecanismos de autenticación/control de acceso.'},
  {url:drive.security,referencia:'ITIC Academy 2026, temas 79–81 de seguridad, criptografía, identificación y firma: cotejo temático.'}
 ],null,'Se conserva C pero se sustituye “autorización” por “autenticación”: Kerberos acredita identidades mediante tickets y claves de sesión; la autorización para usar una operación o recurso corresponde normalmente a la política del servicio que consume esa identidad. Su origen se vincula al proyecto Athena del MIT.','corregida'],
 [5494,[115],['II-8'],['IPv4','TTL','tiempo de vida','contador de saltos','RFC 791','RFC 1812'],[
  {url:'https://www.rfc-editor.org/rfc/rfc791.html',referencia:'RFC 791, §3.1: el campo IPv4 Time to Live ocupa 8 bits, tiene unidad nominal de segundos y se reduce al menos en una unidad en cada módulo que procesa el datagrama; 8 bits limitan el valor inicial a 255.'},
  {url:'https://www.rfc-editor.org/rfc/rfc1812.html#section-5.3.1',referencia:'RFC 1812, §5.3.1: TTL es campo de 8 bits en segundos, pero cada router lo decrementa al menos en uno, por lo que en la práctica funciona como límite de saltos.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 115: redes IP y arquitectura/encaminamiento.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, tema II.8: modelos TCP/IP y OSI, protocolos y encaminamiento.'},
  {url:drive.protocols,referencia:'ITIC Academy 2026, bloque 43 Protocolos: IPv4, campo TTL y encaminamiento; mapa temático.'}
 ],null,'La afirmación C es falsa: el campo TTL IPv4 tiene 8 bits, por lo que su valor inicial máximo es 255, no 512 segundos. RFC 791 lo define en unidades de segundos; como los routers lo reducen al menos en uno por salto, RFC 1812 indica que en la práctica funciona como límite de saltos. Se especifica IPv4 para evitar confusión con IPv6 Hop Limit.','corregida'],
 [5495,[107],[],['Gartner','Hype Cycle','tecnologías emergentes','ciclo de expectativas','Technology Trigger','Plateau of Productivity'],[
  {url:'https://www.gartner.com/en/research/methodologies/gartner-hype-cycle',referencia:'Gartner, metodología Hype Cycle: define las cinco fases y explica sus nombres y orden: Innovation Trigger, Peak of Inflated Expectations, Trough of Disillusionment, Slope of Enlightenment y Plateau of Productivity.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 107: tecnologías emergentes, concepto, clasificación y aplicaciones.'},
  {url:drive.emerging,referencia:'ITIC Academy 2026, bloque A1-107 de Tecnologías de Sistemas de Información: tecnologías emergentes; cotejo temático.'}
 ],null,'Se corrige la lista: el Hype Cycle de Gartner consta de cinco fases, no cuatro. La respuesta correcta enumera Technology Trigger (disparador de innovación), Peak of Inflated Expectations, Trough of Disillusionment, Slope of Enlightenment y Plateau of Productivity. “Consolidación” no sustituye las dos últimas fases.','corregida']
];
const edits={
 5491:{texto:'En una blockchain pública, ¿cuál de las siguientes afirmaciones es falsa?',opciones:['Perder la clave privada o su frase de recuperación puede dejar irrecuperables los activos de una cartera autocustodiada.','Sin una Autoridad de Certificación no es posible verificar criptográficamente una firma usando una clave pública conocida.','La ausencia de un intermediario central puede implicar que no exista un mecanismo central de recuperación ante la pérdida de claves.','Las reglas de consenso de la red determinan cuándo una transacción se considera confirmada.'],respuesta_correcta:1},
 5492:{texto:'¿Cuál de las siguientes opciones NO es principalmente una herramienta de trabajo colaborativo?',opciones:['Trello, para organizar tableros, tareas y equipos.','Basecamp, para gestionar proyectos y comunicaciones de equipo.','Slack, para comunicación y colaboración mediante canales.','Apache Hadoop, para procesar de forma distribuida grandes conjuntos de datos.'],respuesta_correcta:3},
 5493:{texto:'¿Qué protocolo de autenticación de red, diseñado originalmente en el proyecto Athena del MIT, utiliza tickets para autenticar usuarios y servicios?',opciones:['Carnivore.','Internet Key Exchange (IKE).','Kerberos.','SSL/TLS.'],respuesta_correcta:2},
 5494:{texto:'En IPv4, indique la afirmación falsa sobre el campo TTL (Time to Live):',opciones:['Limita el tiempo o la propagación de un datagrama.','Evita que un datagrama que no puede llegar a destino circule indefinidamente.','Su valor inicial máximo es 512 segundos.','Como los routers lo reducen al menos en uno, en la práctica suele funcionar como contador de saltos.'],respuesta_correcta:2},
 5495:{texto:'¿Cuáles son, en orden, las cinco fases del Hype Cycle de Gartner?',opciones:['Disparador de innovación; pico de expectativas sobredimensionadas; abismo de desilusión; pendiente de esclarecimiento; meseta de productividad.','Caótica; Reactiva; Proactiva; Servicio; Madurez.','Dinosaurio; Gran hermano; Mano amiga; Perro vigilante; Red o Network.','Iniciación; Expansión; Formalización; Administración; Madurez.'],respuesta_correcta:0}
};
const logFile=path.join(__dirname,'cambios-lote-1034.json');
if(!fs.existsSync(logFile))aplicar({numero:'1034',fecha:'2026-11-12',records,edits});
const bankFile=path.join(__dirname,'..','preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
const academy={
  5491:'ITIC Academy 2026, bloque A1-85 sobre blockchain y bloque de seguridad/criptografía; el mapa curricular separa clave privada, firma y cadena de bloques.',
  5492:'ITIC Academy 2026, bloque 50 sobre herramientas de trabajo colaborativo; Hadoop se coteja con el ámbito de datos/tecnologías emergentes.',
  5493:'ITIC Academy 2026, bloque de seguridad, criptografía, identificación y firma (temas 79–81); Kerberos se relaciona con autenticación.',
  5494:'ITIC Academy 2026, bloque 43 Protocolos: IPv4, TTL y encaminamiento.',
  5495:'ITIC Academy 2026, bloque A1-107 de tecnologías emergentes: Gartner Hype Cycle como herramienta de seguimiento de madurez.'
};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id);q.clasificacion.bloque_academia=academy[c.id];q.clasificacion.nota='Cotejado con los programas oficiales A1/A2 vigentes y el material de academia 2026 indicado como mapa temático; la respuesta se contrasta con las normas y fuentes técnicas citadas.';c.actualizada=structuredClone(q)}
fs.writeFileSync(bankFile,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
