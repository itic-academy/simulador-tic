require('./aplicar-lote.cjs')({
 numero:'1164',fecha:'2026-11-13',
 records:[
  [6141,[118],['IV-8'],['repetidor','capa física','regeneración de señal','OSI'],[
   {url:'https://www.cisco.com/en/US/docs/internetworking/troubleshooting/guide/tr1923.html',referencia:'Cisco, Troubleshooting LAN Switching Environments: un repetidor/hub opera en capa 1 y repite señales físicas; el filtrado por MAC es una función de capa 2.'},
   {url:'https://www.cisco.com/c/en/us/support/docs/lan-switching/ethernet/12006-chapter22.html',referencia:'Cisco, Troubleshoot LAN Switching Environments: distingue cableado/concentración de hub de filtrado o reenvío selectivo propio de conmutación.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 118: LAN y dispositivos de interconexión.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.8: redes locales y dispositivos.'}
  ],null,'Se mantiene B como mejor opción: el repetidor trabaja en la capa física y regenera/retransmite señales. La posibilidad de interconectar medios distintos depende del equipo y de que las interfaces/formatos físicos sean compatibles; no aprende direcciones ni filtra tráfico. Se explicita este límite para distinguirlo de puente/conmutador.','corregida'],
  [6142,[118],['IV-8'],['router','conmutador','latencia','procesamiento de paquetes','ASIC','ambigüedad'],[
   {url:'https://www.cisco.com/c/en/us/support/docs/ios-nx-os-software/ios-software-releases-121-mainline/12809-tuning.html',referencia:'Cisco, Performance Tuning Basics: las rutas de reenvío de routers pueden implementarse en hardware, software o ambos; el algoritmo y plataforma afectan al tiempo de decisión.'},
   {url:'https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst4500/12-1/11/configuration/guide/78_14348.pdf',referencia:'Cisco Catalyst 4500: el motor ASIC del conmutador realiza en hardware la mayoría del reenvío e incluso routing inter-VLAN, de modo que no hay una latencia universal deducible solo de las etiquetas router/conmutador.'},
   {url:'https://www.cisco.com/c/en/us/support/docs/switches/nexus-9000-series-switches/225840-troubleshoot-tcp-performance.html',referencia:'Cisco Nexus 9000: la latencia de forwarding depende del tamaño de paquete, modo de forwarding, funcionalidades y congestión.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 118: conmutación e interconexión LAN.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.8: equipos y protocolos de LAN.'}
  ],null,'No se ratifica la clave C como diferencia técnica general. El tiempo por paquete depende del modelo, ASIC, método de forwarding, funciones activadas, colas y carga; routers y switches multicapa pueden reenviar en hardware. Sin especificar equipos/arquitectura, la comparación no tiene respuesta universal. Se conserva enunciado y clave heredados y se marca pendiente de ambigüedad.','pendiente_ambiguedad'],
  [6143,[118],['IV-7','IV-8'],['40GBASE-SR4','fibra multimodo','OM2','OM3','OM4','alcance'],[
   {url:'https://www.cisco.com/c/en/us/products/collateral/interfaces-modules/transceiver-modules/data_sheet_c78-660083.html',referencia:'Cisco 40GBASE QSFP modules, tabla de distancias: QSFP-40G-SR4 opera hasta 30 m en OM2, 100 m en OM3 y 150 m en OM4/OM5.'},
   {url:'https://www.ieee802.org/3/bm/public/14_03/anslow_3bm_01_0314.pdf',referencia:'Material público del IEEE 802.3bm para PMD 40GBASE-SR4: especifica alcance en fibra multimodo por categoría OM; OM3 cubre 100 m y OM4 distancias mayores.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, temas 118 y 108: LAN y medios de transmisión.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, temas IV.7 y IV.8: medios y redes locales.'}
  ],null,'La respuesta correcta es B, OM3, para un enlace 40GBASE-SR4 de menos de 100 m: la especificación de los módulos 40GBASE-SR4 contempla 100 m en OM3 y 150 m en OM4/OM5. El enunciado se precisa con la aplicación óptica (40GBASE-SR4), pues 40 Gb/s por sí solo no determina categoría sin especificar transceptor/PMD.','corregida'],
  [6144,[118],['IV-7','IV-8'],['diafonía','crosstalk','acoplamiento','par trenzado','NEXT','FEXT'],[
   {url:'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-I.430-198811-S%21%21PDF-E&lang=f&type=items',referencia:'UIT-T I.430, glosario, definición 610: diafonía es una señal no deseada introducida en una línea por acoplamiento con una o más líneas; define asimismo NEXT y FEXT.'},
   {url:'https://www.itu.int/rec/T-REC-L.19/en',referencia:'UIT-T L.19: describe diafonía entre pares en cables multipar y su relevancia en redes de cobre.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 118: cableado y transmisión en LAN.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, temas IV.7 y IV.8: medios y cableado de red.'}
  ],null,'Se mantiene C con definición más precisa: señal no deseada introducida en un par/línea por acoplamiento con otra línea o par. No es simplemente radiación al ambiente ni variación de velocidad de propagación; NEXT/FEXT identifican dónde se produce el acoplamiento respecto del transmisor.','corregida'],
  [6145,[108],['IV-7'],['muestreo','Nyquist-Shannon','señal limitada en banda','frecuencia de muestreo','aliasing'],[
   {url:'https://ieeexplore.ieee.org/abstract/document/1447892',referencia:'Claude E. Shannon, “Communication in the Presence of Noise”, Proceedings of the IRE 37(1), 1949, DOI 10.1109/JRPROC.1949.232969: trata el teorema de muestreo; una función sin componentes por encima de W queda determinada por muestras espaciadas 1/(2W) segundos.'},
   {url:'https://www.comsoc.org/node/18976',referencia:'IEEE Communications Society, Sampling Theorem: resume el intervalo de Nyquist y reconstrucción de señales limitadas en banda.'},
   {url:'https://technav.ieee.org/topic/signal-sampling/',referencia:'IEEE Technology Navigator: señal limitada a W Hz reconstruible a partir de muestreo a una tasa de al menos 2W muestras/s.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 108: técnicas y fundamentos de transmisión.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.7: codificación y técnicas de transmisión.'}
  ],null,'Se mantiene A, con condición explícita: para una señal idealmente limitada en banda a fmax, la teoría permite reconstrucción exacta si fs ≥ 2·fmax (en el límite se requiere muestreo ideal); en sistemas prácticos se usa margen y filtro antialias. El enunciado original confundía “evitar pérdidas en la transmisión” con el aliasing, por lo que se corrige.','corregida']
 ],
 edits:{
 6141:{texto:'¿Qué caracteriza a un repetidor de red?',opciones:['Opera en LLC para filtrar tramas entre LAN heterogéneas.','Opera en la capa física y regenera o retransmite señales entre segmentos compatibles.','Analiza direcciones MAC de origen/destino para filtrar tráfico.','Separa el tráfico como un puente o conmutador.'],respuesta_correcta:1},
 6143:{texto:'Para diseñar un enlace Ethernet 40GBASE-SR4 sobre fibra multimodo con alcance de hasta 100 m, ¿cuál es la categoría mínima entre las siguientes?',opciones:['OM2.','OM3.','OM4.','OM5.'],respuesta_correcta:1},
 6144:{texto:'En un cable multipar, ¿qué se entiende por diafonía (crosstalk)?',opciones:['Pérdida de potencia por radiación electromagnética al ambiente.','Variación de la velocidad de propagación de una señal en función de la frecuencia.','Señal no deseada introducida en un par por acoplamiento con otra línea o par.','Distorsión causada únicamente por señales espurias externas al cable.'],respuesta_correcta:2},
 6145:{texto:'Para una señal idealmente limitada en banda a una frecuencia máxima fmax, ¿qué condición establece el teorema de muestreo de Nyquist-Shannon para poder reconstruirla teóricamente a partir de muestras uniformes?',opciones:['Muestrear a una frecuencia fs ≥ 2·fmax (en la práctica se usa margen y filtrado antialias).','Muestrear a fs ≤ 2·fmax.','Muestrear a fs ≥ 3·fmax.','Muestrear a fs ≥ 4·fmax.'],respuesta_correcta:0}
 }
});
