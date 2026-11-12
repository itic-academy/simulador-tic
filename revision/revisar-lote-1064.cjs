const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const atm='https://www.itu.int/rec/dologin_pub.asp?id=T-REC-I.361-199104-S%21%21PDF-E&lang=s&type=items';
const wimax='https://doi.org/10.6028/NIST.SP.800-127';
const ieeeOverview='https://www.ieee802.org/16/docs/02/C80216-02_05.pdf';
const ieee16e='https://www.ieee802.org/16/liaison/docs/L80216-09_0018.pdf';
const g9922='https://www.itu.int/rec/T-REC-G.992.2';
const g9921='https://www.itu.int/rec/dologin_pub.asp?id=T-REC-G.992.1-199907-I%21%21PDF-E&lang=s&type=items';
const splitter='https://www.etsi.org/deliver/etsi_ts/101900_101999/1019520101/01.01.01_60/ts_1019520101v010101p.pdf';
const home='https://www.itu.int/dms_pub/itu-t/opb/tut/t-tut-home-2011-pdf-e.pdf';
const r80211='https://standards.ieee.org/ieee/802.11r/3954/';
const a1Notice='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-6249';
const ref=(url,referencia)=>({url,referencia});
const records=[
 [5641,[113],[],['ATM','celda ATM','cabecera','campo de información'],[
  ref(atm,'UIT-T I.361, especificación de la capa ATM, § 5/Fig. 1: cada celda de capa ATM mide 53 octetos, compuestos por una cabecera fija de 5 octetos y un campo de información de 48 octetos.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 113: redes de transporte y redes de agregación, incluida ATM.')
 ],null,'Corregida, respuesta D. La celda ATM de capa ATM tiene longitud fija: 5 bytes de cabecera y 48 bytes de campo de información (53 bytes en total). No existe una variante de celda con 44 bytes de campo de información: una capa de adaptación puede añadir sus propias cabeceras dentro del campo de información, pero no cambia el formato ni el tamaño de la celda ATM.','corregida'],
 [5642,[112],['IV-11'],['WiMAX','IEEE 802.16','AES','RSA','3DES','SEAL'],[
  ref(wimax,'NIST SP 800-127, Guide to Securing WiMAX Wireless Communications: describe los mecanismos de seguridad IEEE 802.16 y sus suites según las ediciones consideradas.'),
  ref(ieeeOverview,'IEEE 802.16 technical overview: RSA/certificados para autenticación y autorización; 3DES para proteger las claves TEK en la arquitectura descrita.'),
  ref(ieee16e,'IEEE 802.16e liaison, suite AES-CCM para confidencialidad de datos de usuario en Mobile WiMAX.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 112: tecnologías de acceso inalámbricas.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.11: redes inalámbricas y sus protocolos y seguridad.')
 ],null,'Corregida, respuesta B. Dentro de las ediciones y mecanismos de seguridad IEEE 802.16/WiMAX documentados por NIST e IEEE aparecen AES, RSA y 3DES con funciones distintas: cifrado de tráfico, autenticación/intercambio de claves y protección de claves de tráfico, respectivamente. SEAL no forma parte de esos mecanismos. Se acota el enunciado a IEEE 802.16 para evitar que «WiMAX» se interprete como cualquier implementación o producto de cualquier época.','corregida'],
 [5643,[108],['IV-7'],['ADSL','G.lite','UIT-T G.992.2','acceso de banda ancha'],[
  ref(g9922,'UIT-T G.992.2: título oficial «Splitterless asymmetric digital subscriber line (ADSL) transceivers»; la ficha vigente identifica el nombre provisional G.lite.'),
  ref(g9921,'UIT-T G.992.1, estándar ADSL de referencia, incluido para distinguirlo de G.lite/G.992.2.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 108: redes e infraestructuras de acceso.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.7: medios guiados y parámetros de transmisión.')
 ],null,'Corregida, respuesta B. ADSL-Lite, también denominado G.lite, corresponde a UIT-T G.992.2, cuya recomendación especifica transceptores ADSL splitterless. Se normaliza «UIT-T» y el título de la recomendación.','corregida'],
 [5644,[108],['IV-7'],['ADSL','splitter','filtro separador','POTS','banda de voz'],[
  ref(g9921,'UIT-T G.992.1, § 3.30: define splitter como filtro que separa las señales ADSL de alta frecuencia de las señales de banda vocal.'),
  ref(g9922,'UIT-T G.992.2: permite aprovisionamiento sin un splitter central, con filtros en los terminales de voz cuando sean necesarios para evitar interferencia.'),
  ref(splitter,'ETSI TS 101 952-1-1, § 4: el filtro splitter ADSL/POTS separa las señales POTS y ADSL y permite su transmisión simultánea por el mismo par; puede ser unidad independiente o integrarse en la terminación ADSL.'),
  ref(home,'UIT-T, Wireline broadband access networks and home networking, apartado 1.2.2.1: describe el splitter central y la alternativa G.992.2 sin splitter central, mediante filtros distribuidos en terminales según necesidad.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 108: infraestructura y tecnologías de acceso.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.7: medios de transmisión guiados.')
 ],null,'Corregida, respuesta A. El splitter ADSL/POTS es un filtro que separa las bandas de alta frecuencia de ADSL y de voz para permitir su coexistencia sobre el mismo par. Puede instalarse como filtro central en la entrada de la vivienda o resolverse con microfiltros distribuidos; G.992.2 permite aprovisionamiento sin splitter central. Se reemplaza la opción ambigua que decía que solo era imprescindible en ADSL-Lite.','corregida'],
 [5645,[114],['IV-11'],['IEEE 802.11r','itinerancia rápida','Fast BSS Transition','redes inalámbricas'],[
  ref(r80211,'IEEE Std 802.11r-2008: enmienda Fast Basic Service Set (BSS) Transition, que especifica mecanismos de transición rápida entre BSS.'),
  ref('https://ieee802.org/11/overview.html','IEEE 802.11 Working Group, resumen del Task Group r: mejora la transición BSS para reducir o eliminar la interrupción de conectividad durante el cambio de BSS.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 114: redes inalámbricas IEEE 802.11.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.11: protocolos y características de redes inalámbricas.')
 ],null,'Corregida, respuesta D. IEEE 802.11r especifica Fast BSS Transition (FT), mecanismos para reducir la interrupción al cambiar entre puntos de acceso/BSS. Se corrige la errata «802.11 l» y se normaliza la notación de las opciones.','corregida']
];
const edits={
 5641:{texto:'¿Cuál es el tamaño fijo de una celda ATM de la capa ATM y cómo se distribuye entre cabecera y campo de información?',opciones:['48 bytes en total: 44 para información y 4 para control.','La cabecera mide 2 octetos, ampliables a 4, y el campo de información varía entre 1 y 8000 bytes.','La cabecera ocupa 12 octetos y el campo de información tiene longitud variable.','53 bytes en total: 5 bytes de cabecera y 48 bytes de campo de información.'],respuesta_correcta:3},
 5642:{texto:'Según los mecanismos de seguridad de IEEE 802.16-2004 y la enmienda IEEE 802.16e, ¿qué algoritmo no se encuentra entre los algoritmos documentados para cifrado de tráfico, protección de claves o autenticación/intercambio de claves?',opciones:['3DES.','SEAL.','AES.','RSA.'],respuesta_correcta:1},
 5643:{texto:'¿Qué recomendación UIT-T especifica G.lite, también conocido como ADSL splitterless o ADSL-Lite?',opciones:['UIT-T G.992.1.','UIT-T G.992.2.','UIT-T G.992.3.','UIT-T G.992.4.'],respuesta_correcta:1},
 5644:{texto:'En una instalación ADSL/POTS, ¿qué función realiza el splitter?',opciones:['Filtra y separa las bandas de ADSL y de voz para permitir su coexistencia sobre el mismo par.','Es un dispositivo que solo se utiliza con G.992.2 y que mejora opcionalmente la calidad.','Es la diafonía causada por acoplamiento inductivo o capacitivo entre pares del mismo mazo.','Es la desagregación del bucle local que permite a otro operador acceder al abonado.'],respuesta_correcta:0},
 5645:{texto:'¿Qué enmienda de IEEE 802.11 define Fast BSS Transition para reducir la interrupción al cambiar de un punto de acceso/BSS a otro?',opciones:['IEEE 802.11h.','IEEE 802.11l.','IEEE 802.11p.','IEEE 802.11r.'],respuesta_correcta:3}
};
aplicar({numero:'1064',fecha:'2026-11-12',records,edits});
