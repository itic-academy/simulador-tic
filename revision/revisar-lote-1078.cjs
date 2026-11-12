const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const iec='https://webstore.iec.ch/en/publication/4753';
const ieee='https://www.ieee802.org/3/hssg/public/sep06/law_01_0906.pdf';
const cisco='https://www.cisco.com/c/en/us/products/collateral/interfaces-modules/transceiver-modules/data_sheet_c78-455693.html';
const ieeeQ='https://standards.ieee.org/ieee/802.1Q/10323/';
const iso='https://www.iso.org/standard/20269.html';
const itu661='https://www.itu.int/rec/T-REC-G.661/en';
const ituSup42='https://www.itu.int/epublications/es/publication/itu-t-g-suppl-42-2018-10-guide-on-the-use-of-the-itu-t-recommendations-related-to-optical-fibres-and-systems-technology';
const ref=(url,referencia)=>({url,referencia});
const records=[
 [5711,[110],['IV-7'],['BNC','coaxial','conector RF','IEC 61169-8'],[
  ref(iec,'IEC 61169-8:2007: especificación de conectores RF coaxiales con acoplamiento bayoneta, conocidos como tipo BNC.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 110: sistemas de cableado y equipos de interconexión de redes.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.7: medios de transmisión y cableado estructurado.'),
 ],null,'Corregida, respuesta B. BNC es una familia de conectores RF coaxiales; no identifica un tipo de fibra ni un cable de par trenzado. Se precisa que se pregunta por el tipo de cable, no por el número de pares. A1-110/A2-IV-7.','corregida'],
 [5712,[110],['IV-7'],['10GBASE-LR','10GBASE-SR','10 Gigabit Ethernet','fibra monomodo','IEEE 802.3ae'],[
  ref(ieee,'IEEE 802.3ae, interfaces 10 Gb/s: 10GBASE-SR se especifica sobre fibra multimodo; 10GBASE-LR opera sobre fibra monomodo y alcanza hasta 10 km.'),
  ref(cisco,'Cisco 10GBASE SFP+ Modules Data Sheet: 10GBASE-LR soporta hasta 10 km en fibra monomodo; distancia mínima de cableado de 2 m conforme a IEEE 802.3ae.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 110: cableado y equipos de interconexión.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.7: medios guiados y parámetros de transmisión.'),
 ],null,'Corregida, respuesta B. Para 200 m sobre fibra monomodo, 10GBASE-LR es el PHY adecuado: está especificado para monomodo, con alcance nominal hasta 10 km y distancia mínima de cableado de 2 m. 10GBASE-SR corresponde a multimodo; CX4 utiliza cableado twinaxial de corto alcance. No son opciones intercambiables. A1-110/A2-IV-7.','corregida'],
 [5713,[110,118],['IV-8'],['puente','bridge','capa de enlace','capa 2','LAN','dirección MAC'],[
  ref(ieeeQ,'IEEE 802.1Q-2022, Bridges and Bridged Networks: especifica redes puenteadas e interconexión de LAN mediante MAC Bridges/VLAN Bridges; un bridge opera en la subcapa MAC de enlace.'),
  ref(iso,'ISO/IEC 7498-1:1994, modelo de referencia OSI, para la distinción entre funciones de enlace, red y capas superiores.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, temas 110 y 118: equipos de interconexión y arquitectura/administración de LAN.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.8: redes locales, protocolos, técnicas de transmisión y dispositivos de interconexión.'),
 ],null,'Corregida, respuesta C. Un puente (bridge) conecta LAN y reenvía/filtra tramas en la subcapa MAC de enlace. Un repetidor opera en capa física; un router encamina en capa de red; una pasarela puede interconectar capas o protocolos superiores. A1-110/A1-118/A2-IV-8.','corregida'],
 [5714,[111],['II-8'],['OSI','capa de presentación','capa 6','representación de datos','sintaxis','codificación'],[
  ref(iso,'ISO/IEC 7498-1:1994, Information technology — Open Systems Interconnection — Basic Reference Model: especifica el modelo OSI y las funciones de capa, incluida la representación/sintaxis de los datos intercambiados por aplicaciones.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 111: arquitectura, capas e interfaces OSI.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.8: modelos TCP/IP y OSI, arquitectura y capas.'),
 ],null,'Corregida, respuesta B. La capa de presentación (capa 6) se ocupa de la sintaxis/representación de los datos y de su transformación para el intercambio entre aplicaciones. La sincronización y organización del diálogo corresponden a sesión; el control extremo a extremo, a transporte. A1-111/A2-II-8.','corregida'],
 [5715,[113],['IV-10'],['EDFA','amplificador de fibra dopada con erbio','fibra activa','Raman','SOA','amplificación óptica'],[
  ref(itu661,'ITU-T G.661 (05/2025), vigente: define parámetros y métodos de medida para amplificadores ópticos, incluidos los de fibra activa y los de semiconductor.'),
  ref(ituSup42,'ITU-T G Supplement 42, § 8.10.1: clasifica las tecnologías de amplificación óptica; EDFA usa fibra dopada con erbio, Raman es una tecnología distinta y SOA es de semiconductor.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 113: redes de transporte JDSxWDM y sistemas de transmisión óptica.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.10: redes WAN, WDM/MPLS y tecnologías de transporte.'),
 ],null,'Corregida, respuesta D. EDFA es un amplificador óptico cuyo medio activo es fibra dopada con erbio. No es un amplificador de semiconductor (SOA) ni se basa en dispersión Raman estimulada. Aunque existen montajes con bombeo bidireccional, esa no es una propiedad definitoria. A1-113/A2-IV-10.','corregida'],
];
const edits={
 5711:{texto:'¿A qué tipo de cable se asocia el conector RF de la familia BNC?',opciones:['Par trenzado de varios pares','Cable coaxial','Fibra óptica monomodo','Par trenzado de un solo par'],respuesta_correcta:1},
 5712:{texto:'Para un enlace 10 Gigabit Ethernet de 200 m entre dos centros mediante fibra óptica monomodo, ¿qué PHY de las opciones está especificado para ese tipo de fibra?',opciones:['10GBASE-SR','10GBASE-LR','10GBASE-SR o 10GBASE-LR indistintamente','10GBASE-CX4'],respuesta_correcta:1},
 5713:{texto:'¿Cómo se denomina el sistema intermedio que conecta segmentos LAN independientes y reenvía tramas en la capa de enlace (nivel 2) del modelo OSI?',opciones:['Pasarela (gateway)','Repetidor (repeater)','Puente (bridge)','Dispositivo de encaminamiento (router)'],respuesta_correcta:2},
 5714:{texto:'¿Qué función corresponde a la capa de presentación (capa 6) del modelo de referencia OSI?',opciones:['Sincronizar y organizar el diálogo entre aplicaciones','Representar y transformar la sintaxis de los datos para el intercambio entre aplicaciones','Ejecutar el procesamiento propio de la lógica de aplicación','Controlar el transporte extremo a extremo de los datos'],respuesta_correcta:1},
 5715:{texto:'¿Qué característica define a un amplificador óptico EDFA?',opciones:['Es un amplificador óptico de semiconductor (SOA)','Es necesariamente bidireccional','Se basa en la dispersión Raman estimulada','Utiliza como medio activo fibra dopada con erbio'],respuesta_correcta:3},
};
aplicar({numero:'1078',fecha:'2026-11-12',records,edits});
