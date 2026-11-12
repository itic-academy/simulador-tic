const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const rfc='https://www.rfc-editor.org/rfc/rfc3290.html';
const i371='https://www.itu.int/rec/dologin_pub.asp?id=T-REC-I.371-200403-I%21%21PDF-E&lang=e&type=items';
const tia='https://www.tiafotc.org/tia-standards-update/tsb-6000/';
const cat6='https://www.commscope.com/product-type/cables/twisted-pair-cables/category-6-cables/1073a/';
const ieee='https://doi.org/10.1109/IEEESTD.2022.9844436';
const fiber='https://www.itu.int/epublications/publication/itu-t-g-652-2024-08-characteristics-of-a-single-mode-optical-fibre-and-cable';
const multimode='https://www.itu.int/ITU-T/recommendations/rec.aspx?rec=13738';
const fiberHandbook='https://www.itu.int/dms_pub/itu-t/opb/hdb/t-hdb-out.10-2009-1-pdf-e.pdf';
const inap='https://www.sede.inap.gob.es/documents/10136/1680866/GSI_2010_PI_GSIPI.pdf/c1e421e1-5039-b8b1-a773-e080b62dc109';
const ref=(url,referencia)=>({url,referencia});
const records=[
 [5636,[108],['IV-8'],['conmutación de paquetes','congestión','control de tráfico','leaky bucket','traffic shaping'],[
  ref(rfc,'RFC 3290, apéndice A.1: el leaky bucket se emplea principalmente como conformador (shaper) de tráfico de salida, suavizando ráfagas y limitando la tasa.'),
  ref(i371,'UIT-T I.371, control del tráfico y de la congestión en B-ISDN, anexo A.2: algoritmo continuo de cubeta con goteo/GCRA para comprobar conformidad de flujos de celdas; la recomendación incluye su papel dentro del control del tráfico y la congestión.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 108 (conmutación de circuitos y paquetes, redes y calidad de servicio).'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.8 (redes y técnicas de transmisión).')
 ],null,'Corregida, respuesta D. La cubeta con goteo regula/suaviza el tráfico transmitido a una tasa controlada y se usa como mecanismo de conformado y control del tráfico para ayudar a evitar congestión; no es un algoritmo de encaminamiento como estado del enlace o vector distancia, ni el mecanismo de inundación. Se precisa esa función para no confundir shaping con control de congestión extremo a extremo.','corregida'],
 [5637,[108,110],['IV-7','IV-8'],['cableado estructurado','categoría 6','1000BASE-T','250 MHz','PoE'],[
  ref(cat6,'CommScope, ficha técnica de cable Category 6 conforme a ANSI/TIA-568.2-D e ISO/IEC 11801 Class E: frecuencia máxima de operación 250 MHz y conformidad de remote powering IEEE 802.3bt Type 4 en las condiciones de instalación indicadas.'),
  ref(ieee,'IEEE 802.3-2022, estándar activo de Ethernet: especifica PHY 1000BASE-T y provisión de alimentación sobre PHY balanceadas seleccionadas; el cumplimiento de cableado se determina con las normas TIA/ISO aplicables.'),
  ref(tia,'TIA Fiber Optics Tech Consortium, TSB-6000: sus tablas de aplicaciones reconocidas por las normas TIA incluyen Ethernet y IEEE PoE sobre cableado de categoría 6.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, temas 108 (medios de transmisión) y 110 (sistemas de cableado).'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, temas IV.7 (medios guiados y cableado estructurado) y IV.8 (redes locales).')
 ],null,'Corregida, respuesta B. Cat 6 se especifica hasta 250 MHz y admite 1000BASE-T en un canal conforme (habitualmente hasta 100 m); también puede transportar PoE si los componentes e instalación cumplen los requisitos. Cat 6 no es una categoría de 10 GHz ni experimental. El enunciado distingue el enlace Gigabit de las posibilidades condicionadas de 10GBASE-T.','corregida'],
 [5638,[108],['IV-7'],['medios de transmisión','ruido blanco','interferencia','atenuación'],[
  ref(inap,'INAP, examen oficial GSI 2010, bloque de redes: recoge la pregunta de origen sobre fenómenos que afectan a medios de transmisión. Se usa como trazabilidad del ítem, no como fuente de la respuesta.'),
  ref('https://www.itu.int/epublications/en/publication/itu-t-k-93-2023-07-immunity-of-home-network-devices-to-electromagnetic-disturbances','UIT-T K.93 (07/2023), método de inmunidad para dispositivos de redes domésticas: aplica ruido blanco en ráfagas como perturbación conducida de banda ancha a puertos xDSL, mostrando que el ruido puede afectar la transmisión/dispositivo de comunicaciones.'),
  ref('https://www.itu.int/rec/T-REC-G.116-199909-I/en','UIT-T G.116, objetivos de transmisión extremo a extremo: clasifica la interferencia de ruido de banda ancha como ruido de canal.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 108 (medios de transmisión).'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.7 (medios de transmisión guiados y no guiados y sus parámetros).')
 ],null,'Corregida, respuesta B. Se concreta que se pregunta por una perturbación aleatoria aditiva que puede degradar una señal en un canal de comunicaciones: el ruido blanco. Reverberación es un fenómeno acústico de reflexión, y afonía es una alteración de la voz/fuente, no un ruido del canal; por ello no se acepta «todos». Se conserva la clave B con un ámbito técnico inequívoco.','corregida'],
 [5639,[108,112],['IV-7'],['fibra óptica','monomodo','multimodo','dispersión modal','alcance'],[
  ref(fiber,'UIT-T G.652 (08/2024), vigente: especifica fibra monomodo para transmisión digital/analógica y parámetros de dispersión, atenuación y diseño de enlaces.'),
  ref(multimode,'UIT-T G.651.1 (11/2018), vigente: fibra multimodo de índice gradual para entornos de acceso; define, entre otros, su ancho de banda modal y aplicaciones de alcance limitado.'),
  ref(fiberHandbook,'Manual UIT-T Optical fibres, cables and systems: explica que la fibra monomodo elimina la dispersión modal intermodal propia de la multimodo, favoreciendo enlaces de mayor producto ancho de banda × distancia.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, temas 108 (medios) y 112 (acceso por fibra).'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.7 (medios de transmisión).')
 ],null,'Corregida, respuesta A. Para un enlace de mayor alcance y capacidad de transmisión, la fibra monomodo evita la dispersión intermodal que limita el producto ancho de banda–distancia de la multimodo. La capacidad efectiva también depende de la fibra concreta, longitud de onda, transceptores, dispersión cromática y diseño; el enunciado se limita a comparar los modos de propagación.','corregida'],
 [5640,[108,110,112],['IV-7'],['fibra óptica','núcleo','revestimiento','índice de refracción','cableado'],[
  ref(fiber,'UIT-T G.652 (08/2024), características geométricas, ópticas y mecánicas de la fibra monomodo, incluidos los parámetros de núcleo/campo modal y revestimiento.'),
  ref('https://www.itu.int/dms_pub/itu-t/opb/hdb/t-hdb-out.10-2009-1-pdf-e.pdf','Manual UIT-T Optical fibres, cables and systems: describe núcleo de vidrio y revestimiento de vidrio con índice de refracción ligeramente inferior, que confina la propagación óptica; diferencia fibra desnuda de estructura/cubierta del cable.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, temas 108 (medios), 110 (cableado) y 112 (fibra de acceso).'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.7 (medios guiados y cableado estructurado).')
 ],null,'Corregida, respuesta D. La descripción de núcleo de vidrio y revestimiento con menor índice de refracción identifica la fibra óptica. Se corrigen errores ortográficos y se elimina la opacidad total de la cubierta como requisito definitorio: el cable incorpora además recubrimientos y protección mecánica, cuya composición varía según instalación.','corregida']
];
const edits={
 5636:{texto:'En una red conmutada, ¿qué algoritmo conforma el tráfico limitando las ráfagas y emitiendo datos a una tasa controlada para ayudar a prevenir congestión?',opciones:['Estado del enlace.','Vector distancia.','Inundación de paquetes.','Cubeta con goteo (leaky bucket).'],respuesta_correcta:3},
 5637:{texto:'¿Qué afirmación describe correctamente un enlace de cableado balanceado de categoría 6 conforme a TIA/ISO?',opciones:['La categoría especifica una frecuencia de hasta 10 GHz por par.','Puede soportar 1000BASE-T en un canal conforme y también transportar PoE con componentes e instalación adecuados.','No permite implementar Power over Ethernet (PoE).','La categoría 6 es una tecnología experimental.'],respuesta_correcta:1},
 5638:{texto:'En un canal de comunicaciones, ¿cuál de los siguientes fenómenos es una perturbación aleatoria aditiva que puede degradar la señal transmitida?',opciones:['Reverberación acústica.','Ruido blanco.','Afonía de la voz.','Todos son ruidos aditivos propios del canal eléctrico u óptico.'],respuesta_correcta:1},
 5639:{texto:'Al comparar la propagación en fibra óptica, ¿qué tipo evita la dispersión modal intermodal y suele permitir enlaces de mayor alcance y producto ancho de banda–distancia?',opciones:['Monomodo.','Multimodo con salto de índice de refracción.','Multimodo con índice de refracción gradual.','Ultramodo de alta dispersión modal.'],respuesta_correcta:0},
 5640:{texto:'¿Qué medio guiado utiliza un núcleo de vidrio y un revestimiento óptico cuyo índice de refracción es ligeramente menor para confinar la luz?',opciones:['Par trenzado U/UTP.','Cable coaxial de tipo thick.','Par trenzado S/STP.','Fibra óptica.'],respuesta_correcta:3}
};
aplicar({numero:'1063',fecha:'2026-11-12',records,edits});
