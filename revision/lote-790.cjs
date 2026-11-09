const apply = require('./aplicar-lote.cjs');
const f = (url, referencia) => ({url, referencia});

apply({
  numero: '790',
  fecha: '2026-11-09',
  records: [
    [4271,[118],['IV-8'],['Ethernet','IEEE 802.3','CSMA/CD','medio compartido','semidúplex'],
      [f('https://standards.ieee.org/ieee/802.3/12400/','IEEE 802.3, especificación Ethernet cuyo título y método MAC identifican CSMA/CD; se acota al Ethernet clásico de medio compartido/semidúplex.'),
       f('https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk','ITIC Academy, bloque Redes 2026, §§4.2–4.3: explica CSMA/CD en Ethernet compartido/semidúplex y que el Ethernet conmutado full-duplex moderno no opera con detección de colisiones; cotejo curricular.'),
       f('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','Convocatoria A1 GSI 2025, anexo I, tema 118: redes LAN, medios y métodos de acceso.'),
       f('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262','Convocatoria A2 GSI 2025, anexo, tema IV-8: redes locales, protocolos, técnicas y métodos de acceso.')],
      '', 'La opción correcta sigue siendo CSMA/CD (Carrier Sense Multiple Access with Collision Detection). Se explicita el contexto Ethernet clásico de medio compartido/semidúplex: en las LAN conmutadas full-duplex actuales no hay colisiones y no se usa el procedimiento de detección. La pregunta no debe sugerir que cada enlace Ethernet moderno funciona con CSMA/CD.', 'corregida'],
    [4272,[109,119],[],['extranet','intranet','acceso de terceros','teletrabajo','VPN'],
      [f('https://learn.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/i/internet-intranet-extranet','Microsoft Learn Style Guide: define extranet como extensión de una intranet que usa protocolos de Internet para ofrecer acceso limitado a usuarios externos autorizados.'),
       f('https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk','ITIC Academy, bloque Redes 2026, tema 10 (Intranet y Extranet), y programa A1 119: concepto, estructura, características e implantación organizativa; cotejo curricular.'),
       f('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','Convocatoria A1 GSI 2025, anexo I, temas 109 y 119: servicios básicos de Internet y arquitectura/concepto de intranet y extranet.')],
      '', 'Se corrige la premisa para que la clave «extranet» sea técnicamente precisa: una extranet amplía de forma controlada una intranet a usuarios externos autorizados, como socios o proveedores. Un empleado que teletrabaja y accede a recursos internos suele hacerlo mediante VPN o acceso remoto autenticado; ese hecho, por sí solo, no convierte el entorno en una extranet. El programa A2 no contiene un epígrafe específico de intranet/extranet, por lo que no se fuerza clasificación A2.', 'corregida'],
    [4273,[118],['IV-9'],['SNMP','gestión de redes','capa de aplicación','IETF','monitorización'],
      [f('https://www.rfc-editor.org/rfc/rfc1157.html','IETF RFC 1157 §4: denomina SNMP protocolo de aplicación de gestión de red para inspeccionar o modificar variables MIB; es una referencia histórica explícita para la clasificación por capas.'),
       f('https://www.rfc-editor.org/rfc/rfc3411.html','IETF RFC 3411: arquitectura vigente de marcos de gestión SNMP, con aplicaciones de gestor/agente y protocolo para intercambiar información de gestión.'),
       f('https://www.rfc-editor.org/rfc/rfc3416.html','IETF RFC 3416: operaciones y PDUs del protocolo SNMPv2, transportadas por el servicio de mensajes.'),
       f('https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk','ITIC Academy, bloque Redes 2026, §5.3 SNMP; el índice curricular ubica SNMP en administración/monitorización de LAN (A1-118/A2-C7, renumerado como A2-IV-9 en convocatoria).'),
       f('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','Convocatoria A1 GSI 2025, anexo I, tema 118: gestión SNMP de redes LAN.'),
       f('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262','Convocatoria A2 GSI 2025, anexo, tema IV-9: administración LAN, monitorización y gestión SNMP.')],
      '', 'SNMP (Simple Network Management Protocol) es un protocolo de gestión de red de la capa de aplicación. No se expande como “Service” ni “Standard Network”; tampoco es un protocolo de transporte. La operación habitual usa un transporte subyacente (tradicionalmente UDP), pero la capa de transporte no define a SNMP.', 'corregida'],
    [4274,[123],['IV-15'],['handover','traspaso celular','movilidad','celda','conexión activa'],
      [f('https://www.3gpp.org/ftp/tsg_cn/tsg_cn/tsgn_07/Tdocs/PDF/NP-000092.pdf','3GPP, especificación de procedimientos de handover: las conexiones se mantienen cuando el equipo se desplaza entre células o redes de acceso; contempla traspasos intra e intersistema.'),
       f('https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk','ITIC Academy, bloque Redes inalámbricas y comunicaciones móviles 2026: generaciones y gestión de movilidad celular; cotejo curricular A1-123/A2-C13.'),
       f('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','Convocatoria A1 GSI 2025, anexo I, tema 123: comunicaciones móviles y generaciones.'),
       f('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262','Convocatoria A2 GSI 2025, anexo, tema IV-15: sistemas de comunicaciones móviles.')],
      '', 'Se sustituye “problemas relativos a” por una formulación de proceso. Handover (traspaso) es la transferencia de una comunicación/servicio móvil activo desde una célula, sector o recurso radio a otro durante la movilidad; puede ser intra o intersistema. No significa incompatibilidad, X.500 ni saturación del espectro.', 'corregida'],
    [4275,[115],['IV-12'],['ping de la muerte','ICMP','denegación de servicio','DoS','fragmentación IP','histórica'],
      [f('https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-1999-0128','MITRE CVE-1999-0128 enlaza “Ping o’ Death” con paquetes ICMP ping sobredimensionados que podían causar denegación de servicio.'),
       f('https://resources.sei.cmu.edu/asset_files/whitepaper/1996_019_001_496172.pdf','CERT/CC Advisory CA-1996-26, “Denial-of-Service Attack via ping”: describe el ataque y su efecto de indisponibilidad por procesamiento de paquetes malformados en implementaciones vulnerables.'),
       f('https://www.rfc-editor.org/rfc/rfc791.html','IETF RFC 791: formato y fragmentación/reensamblado IPv4, base técnica histórica para entender los paquetes fragmentados del ataque; no constituye por sí sola una definición de ataque.'),
       f('https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk','ITIC Academy, bloque Redes 2026: redes IP y seguridad de red; cotejo curricular.'),
       f('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','Convocatoria A1 GSI 2025, anexo I, tema 115: redes IP, arquitectura, encaminamiento y funcionalidades IPv4/IPv6.'),
       f('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262','Convocatoria A2 GSI 2025, anexo, tema IV-12: seguridad en redes.')],
      '', 'La opción correcta es denegación de servicio (DoS). Históricamente, el “ping de la muerte” explotaba implementaciones vulnerables mediante paquetes ICMP/IP malformados o excesivamente grandes (incluida la fragmentación) para provocar bloqueo o caída; no es sinónimo de spoofing, MITM ni de cualquier flooding. Se conserva como ataque histórico, no como técnica eficaz contra pilas modernas correctamente actualizadas.', 'corregida']
  ],
  edits: {
    4271: {texto:'En Ethernet clásico sobre un medio compartido y semidúplex, ¿qué método de acceso al medio se utilizaba?', comentarios:'CSMA/CD (Carrier Sense Multiple Access with Collision Detection). Es el método clásico Ethernet de medio compartido; las LAN conmutadas full-duplex modernas no necesitan detectar colisiones.'},
    4272: {texto:'¿Cómo se denomina la extensión controlada de una intranet que permite acceso limitado a usuarios externos autorizados mediante tecnologías de Internet?', comentarios:'Extranet. El mero acceso remoto de un empleado teletrabajador a la intranet suele implementarse con VPN; para que la respuesta sea extranet el supuesto debe referirse a usuarios externos autorizados.'},
    4273: {texto:'En el conjunto de protocolos de Internet, SNMP (Simple Network Management Protocol) es:', comentarios:'Es un protocolo de la capa de aplicación para intercambiar información y operaciones de gestión entre entidades SNMP (tradicionalmente gestor y agentes). No es un protocolo de transporte.'},
    4274: {texto:'En los sistemas móviles celulares, ¿qué describe el término handover (traspaso)?', comentarios:'La transferencia de la comunicación/servicio móvil activo a otra célula, sector o recurso radio durante el desplazamiento del terminal; puede ser intra o intersistema.'},
    4275: {texto:'El ataque histórico denominado “ping de la muerte” se clasifica como:', comentarios:'Es un ataque de denegación de servicio: paquetes ICMP/IP excesivos o malformados podían bloquear sistemas vulnerables. Es una técnica histórica, no una recomendación de prueba ni una amenaza eficaz contra sistemas actualizados.'}
  }
});
