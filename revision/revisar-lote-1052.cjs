const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const rfc791='https://www.rfc-editor.org/rfc/rfc791.html';
const rfc894='https://www.rfc-editor.org/rfc/rfc894.html';
const ieee8023='https://standards.ieee.org/ieee/802.3/5084/';
const rfc3417='https://www.rfc-editor.org/rfc/rfc3417.html';
const g6942='https://www.itu.int/rec/T-REC-G.694.2/en';
const g6941='https://www.itu.int/rec/T-REC-G.694.1/en';
const dante='https://www.dante.archive.geant.org/Documents/an_06_low.pdf';
const geantCurrent='https://connect.geant.org/2024/12/10/geant-gn5-2-project-set-to-start-on-1-january-2025';
const net='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const records=[
 [5581,[108],['IV-8'],['conmutación de paquetes','datagrama','IP','multiplexación estadística','circuito dedicado'],[
  {url:rfc791,referencia:'RFC 791, §§ 1.1, 2.3 y 2.4: IP se emplea sobre redes conmutadas por paquetes; los datagramas son entidades independientes, no conexiones/circuitos lógicos, y los gateways los encaminan entre redes.'},
  {url:'https://www.rfc-editor.org/rfc/rfc1122.html',referencia:'RFC 1122, requisitos para hosts de Internet: documenta la naturaleza datagrama/no orientada a conexión de IP; se formula el enunciado en ese contexto, no como una afirmación sobre todo modo de conmutación de paquetes.'},
  {url:a1,referencia:'Convocatoria GSI A1 2025, anexo I, tema 108: conmutación de circuitos y paquetes, encaminamiento e interconexión.'},
  {url:a2,referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.8: redes locales, protocolos y técnicas de transmisión.'},
  {url:net,referencia:'ITIC Academy 2026, bloque 42 Redes, § 1.3 y figura comparativa de conmutación: describe paquetes de tamaño limitado que comparten enlaces mediante multiplexación estadística y separa datagrama de circuito virtual.'}
 ],null,'Se mantiene D únicamente al delimitar la pregunta al modo datagrama de IP. En él, los datos se envían en unidades separadas que comparten los enlaces; cada datagrama se encamina de forma independiente y no se reserva un circuito físico extremo a extremo, por lo que la ruta puede diferir. No se presenta como universal para toda red de paquetes: los circuitos virtuales pueden mantener una ruta lógica estable.', 'corregida'],
 [5582,[110,118],['IV-8'],['Ethernet','IEEE 802.3','campo de datos','payload','padding'],[
  {url:rfc894,referencia:'RFC 894, estándar de encapsulado IP sobre Ethernet, § Frame Format: campo de datos Ethernet mínimo de 46 octetos, con padding si hace falta, y máximo de 1500 octetos.'},
  {url:ieee8023,referencia:'IEEE 802.3, estándar Ethernet y estado de la edición: se reemplaza la referencia caducada 802.3-2012 por la definición general de campo MAC de una trama Ethernet estándar sin etiqueta VLAN.'},
  {url:a1,referencia:'Convocatoria GSI A1 2025, anexo I, temas 110 y 118: equipos de interconexión, LAN, medios y protocolos.'},
  {url:a2,referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.8: redes locales, protocolos y técnicas de transmisión.'},
  {url:net,referencia:'ITIC Academy 2026, bloque 42 Redes, § 4.3 Ethernet (IEEE 802.3), dentro de medios/LAN; cotejo curricular.'}
 ],null,'Se conserva C y se elimina la referencia a la edición supersedida IEEE 802.3-2012. Se precisa que se pregunta por el campo de datos MAC de una trama Ethernet estándar sin etiqueta VLAN: mínimo 46 octetos (incluido el relleno cuando se necesita) y máximo 1500. No se confunde tamaño de la trama completa —mínimo habitual 64 octetos desde destino hasta FCS— con el payload.', 'corregida'],
 [5583,[118],['IV-8'],['SNMP','trap','notificación','UDP','puerto 162'],[
  {url:rfc3417,referencia:'RFC 3417, STD 62, § 3.2 “Well-known Values”: para el mapeo SNMP sobre UDP/IP, recomienda que las entidades receptoras de notificaciones escuchen en UDP 162; command responders escuchan en UDP 161.'},
  {url:'https://www.rfc-editor.org/rfc/rfc5590.html',referencia:'RFC 5590, subsistema de transporte SNMP: confirma que SNMP admite subsistemas/mapeos de transporte; por ello se especifica UDP, sin presentar 162 como puerto universal para todo transporte.'},
  {url:a1,referencia:'Convocatoria GSI A1 2025, anexo I, tema 118: administración, monitorización y gestión SNMP de redes locales.'},
  {url:a2,referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.8: protocolos, administración y seguridad de redes.'},
  {url:net,referencia:'ITIC Academy 2026, bloque 42 Redes, § 5.3 SNMP: monitorización, operaciones y notificaciones/traps; cotejo curricular.'}
 ],null,'Se concreta el transporte al mapeo convencional SNMP sobre UDP/IP. Las notificaciones trap/inform se reciben por UDP 162; UDP 161 se utiliza habitualmente para las operaciones dirigidas al command responder/agente. SNMP admite otros mapeos, así que no se afirma que 162 sea universal en todos los transportes.', 'corregida'],
 [5584,[113],['IV-10'],['CWDM','DWDM','ITU-T G.694.1','ITU-T G.694.2','rejilla óptica','longitudes de onda'],[
  {url:g6942,referencia:'UIT-T G.694.2, recomendación vigente: rejilla CWDM con separación nominal de 20 nm; sus 18 valores van de 1271 a 1611 nm en pasos de 20 nm.'},
  {url:g6941,referencia:'UIT-T G.694.1, recomendación vigente: rejillas DWDM fija y flexible definidas en frecuencia, con varios espaciados/granularidades; no prescribe un número universal de canales (por ejemplo, 40) para todo sistema.'},
  {url:a1,referencia:'Convocatoria GSI A1 2025, anexo I, tema 113: redes de transporte JDSxWDM y redes de agregación.'},
  {url:a2,referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.10: redes WAN y tecnologías WDM/MPLS.'},
  {url:net,referencia:'ITIC Academy 2026, bloque 42 Redes, §§ 7.1 y 7.4 y material de redes ópticas: distingue CWDM de DWDM por separación de canales y usos; el PDF no define un recuento normativo fijo 18/40.'}
 ],null,'Se rehace la pregunta porque “número más estándar” no tiene respuesta normativa universal para DWDM. G.694.2 fija la rejilla CWDM de 20 nm (18 longitudes nominales de 1271 a 1611 nm). G.694.1 fija rejillas DWDM en frecuencia con varios espaciados/granularidades, de modo que el número instalable depende de banda, espaciado y equipo; 40 es una configuración común de ciertos sistemas, no un requisito fijo de la UIT-T. La opción correcta pasa a A.', 'corregida'],
 [5585,[108,120],['IV-10'],['GÉANT2','DANTE','red europea de investigación','redes académicas','historia de Internet'],[
  {url:dante,referencia:'DANTE Annual Review 2005, “DANTE Highlights 2005” y sección GÉANT2: informa del lanzamiento de GÉANT2 en 2005 y su interconexión de redes europeas de investigación/educación.'},
  {url:'https://news.belgium.be/fr/le-reseau-de-recherche-paneuropeen-un-et-plus-dun-demi-million-de-belges-lutilisent-deja',referencia:'Servicio público federal de Bélgica, 29-06-2006: confirma que GÉANT2 fue lanzado en junio de 2005 y conectaba redes nacionales europeas de investigación y enseñanza.'},
  {url:geantCurrent,referencia:'GÉANT, anuncio oficial del proyecto GN5-2 (2025): documenta la fase actual del proyecto GÉANT; distingue la red histórica GÉANT2 de la infraestructura/iteración presente.'},
  {url:a1,referencia:'Convocatoria GSI A1 2025, anexo I, temas 108 y 120: interconexión de redes y redes públicas de transmisión de datos.'},
  {url:a2,referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.10: redes de área extensa.'},
  {url:net,referencia:'ITIC Academy 2026, bloque 42 Redes, § 8.1 redes públicas de transmisión de datos: sirve como encaje curricular; el material consultado no menciona explícitamente el nombre histórico GÉANT2.'}
 ],null,'Se mantiene B, GÉANT2, y se reescribe como pregunta histórica verificable: DANTE registra el lanzamiento en 2005 de esa generación de la red paneuropea de investigación y educación. Se elimina la imprecisa atribución de la inauguración a la Unión Europea; hubo participación de la Comisión, pero DANTE construyó/gestionó la red con las NREN. Se etiqueta histórica para no confundir GÉANT2 con el proyecto/red actual GÉANT (iteración GN5-2). La academia cubre redes públicas, pero no cita explícitamente este nombre.', 'historica']
];
const edits={
 5581:{texto:'En la conmutación de paquetes en modo datagrama IP, ¿qué afirmación es correcta?',opciones:['La red reserva para cada comunicación un circuito lógico y todos los paquetes siguen necesariamente la misma ruta.','Cada datagrama se encamina de forma independiente; las rutas pueden diferir y no se reserva un circuito físico extremo a extremo.','Los paquetes se entregan siempre en orden y sin posibilidad de pérdida.','Cada comunicación necesita un enlace físico exclusivo entre origen y destino.'],respuesta_correcta:1},
 5582:{texto:'En una trama Ethernet estándar sin etiqueta VLAN, ¿qué tamaño puede tener el campo MAC de datos (incluido el relleno cuando sea necesario)?',opciones:['De 64 a 1500 octetos.','De 16 a 1000 octetos.','De 46 a 1500 octetos.','De 32 a 1000 octetos.'],respuesta_correcta:2},
 5583:{texto:'En el mapeo convencional de SNMP sobre UDP/IP, ¿a qué puerto UDP se envían las notificaciones trap para su recepción por el gestor?',opciones:['162','126','161','25'],respuesta_correcta:0},
 5584:{texto:'¿Qué afirmación describe correctamente las rejillas ópticas CWDM y DWDM definidas por UIT-T G.694.2 y G.694.1?',opciones:['CWDM usa una rejilla de 18 longitudes nominales separadas 20 nm; DWDM usa rejillas de frecuencia con varios espaciados y no tiene un número universal fijo de canales.','CWDM está fijada en 20 longitudes y DWDM en exactamente 40 canales por la UIT-T.','CWDM usa 18 canales y DWDM está limitado normativamente a 45 canales.','CWDM usa 20 canales y DWDM está limitado normativamente a 50 canales.'],respuesta_correcta:0},
 5585:{texto:'Según el informe anual de DANTE de 2005, ¿cómo se denominó la generación de la red paneuropea de investigación y educación cuyo lanzamiento se produjo ese año?',opciones:['TEIN2','GÉANT2','ALICE','DANTE'],respuesta_correcta:1}
};
aplicar({numero:'1052',fecha:'2026-11-12',records,edits});
