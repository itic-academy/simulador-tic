const apply=require('./aplicar-lote.cjs');
const academyNetworks='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const academyWireless='https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk';
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const aal='https://www.itu.int/dms_pubrec/itu-t/rec/i/T-REC-I.363-199303-S%21%21PDF-S&lang=s&type=items';
const aalStatus='https://www.itu.int/rec/T-REC-I.363-199303-W/en';
const aalCurrent='https://www.itu.int/rec/T-REC-I.363.5/en';
const lmfd='https://www.itu.int/dms_pub/itu-r/opb/hdb/R-HDB-24-1996-PDF-E.pdf';
const qam='https://www.itu.int/dms_pub/itu-r/opb/rep/R-REP-BT.2140-4-2011-PDF-E.pdf';
const lmds='https://www.itu.int/rec/T-REC-J.150-199909-I%21Amd1/en';
const ieee11b='https://grouper.ieee.org/groups/802/11/Documents/DocumentArchives/1999_docs/90845b_p80211b-draft3.1.pdf';
const ieeeWiFi='https://standards.ieee.org/beyond-standards/the-evolution-of-wi-fi-technology-and-standards/';
const ieeeStd='https://standards.ieee.org/ieee/802.11/10548/';
const rfc8200='https://datatracker.ietf.org/doc/rfc8200/';
const records=[
 [4176,['113'],['IV-10'],['ATM','AAL','adaptación','SAR','convergencia'],[
  {url:aal,referencia:'ITU-T I.363 (03/1993), introducción y §2.3: la AAL adapta los servicios ATM a los requisitos de la capa superior; define subcapas de convergencia (CS) y segmentación y reensamblado (SAR). La pregunta se refiere a AAL, no a una capa ATM ni a TC/PM.'},
  {url:aalStatus,referencia:'ITU-T registra I.363 (03/1993) como retirada y subdividida en I.363.1–I.363.5 en 1996; el reactivo se conserva como arquitectura ATM histórica.'},
  {url:aalCurrent,referencia:'ITU-T I.363.5 (08/1996), recomendación en vigor: confirma la familia actual de especificaciones AAL resultante de la subdivisión; no cambia la denominación de la capa consultada.'},
  {url:academyNetworks,referencia:'ITIC Academy, bloque 42 «Redes», versión 2026.1, §7.2 y tema A1-113: ATM figura en las redes de transporte/agregación; el material lo sitúa como tecnología heredada.'}
 ],'La capa de adaptación ATM (AAL) realiza funciones para adaptar el servicio de la capa ATM a la capa superior. Su organización contempla subcapas de convergencia (CS) y segmentación y reensamblado (SAR); la pregunta mezcla el nombre de esas funciones, no el de la capa física de transmisión.', 'Se conserva AAL como clave. Se marca histórica porque la recomendación matriz I.363 fue retirada y dividida en recomendaciones por tipo; el temario vigente aún incluye ATM como tecnología de transporte/agregación heredada.', 'historica'],
 [4177,['114'],['IV-7','IV-11'],['LMDS','modulación digital','QAM','eficiencia espectral'],[
  {url:lmfd,referencia:'ITU-T J.150, enmienda 1 (09/1999), añade la adaptación de señales a sistemas LMDS y describe su tratamiento de modulación QAM; acredita el contexto de transmisión LMDS.'},
  {url:lmfd,referencia:'UIT-R, Handbook on Digital Radio-Relay Systems (1996), §3.1.4, ecuación de eficiencia espectral: la eficiencia ideal crece con log₂ del número de símbolos de la constelación. En condiciones iguales, 64-QAM codifica 6 bits/símbolo, 16-QAM 4 y QPSK 2.'},
  {url:qam,referencia:'Informe UIT-R BT.2140-4, apartado sobre QAM: 64-QAM tiene 64 símbolos (2⁶) y transporta 6 bits/símbolo; 16-QAM transporta 4; 4-QAM es una variante de QPSK. Esto también evidencia la duplicidad de los distractores originales.'},
  {url:academyWireless,referencia:'ITIC Academy, bloque 46 «Redes inalámbricas y comunicaciones móviles», versión 2026.1, §§2.1 y 2.2: modulación, QAM, parámetros de radio y tecnologías de acceso; encaje curricular A1-114/A2-IV-7 y IV-11.'}
 ],'En una comparación teórica con igual ancho de banda, tasa de símbolos y codificación, 64-QAM es la opción de mayor eficiencia entre las ofrecidas: representa 6 bits por símbolo, frente a 4 de 16-QAM y 2 de QPSK/4-QAM. Una constelación de orden superior exige mejor relación señal/ruido para mantener una tasa de error comparable; la respuesta no implica que toda implementación LMDS use siempre 64-QAM.', 'Se corrige el enunciado para fijar condiciones de comparación y se sustituye 4-QAM duplicada respecto de QPSK por BPSK. La afirmación original sin condición de señal/calidad era demasiado absoluta.', 'corregida'],
 [4178,['114'],['IV-11'],['IEEE 802.11b','HR/DSSS','capa física','WLAN','legacy'],[
  {url:ieee11b,referencia:'IEEE 802.11b-1999, borrador archivado del grupo IEEE, define HR/DSSS como High Rate Direct Sequence Spread Spectrum; la documentación identifica la PHY de alta velocidad.'},
  {url:academyWireless,referencia:'ITIC Academy, bloque 46 «Redes inalámbricas y comunicaciones móviles», versión 2026.1, §§4.2 y 5.3: evolución de 802.11, PHY y términos de radio; la generación b se presenta como parte histórica de la familia.'}
 ],'IEEE 802.11b define la PHY HR/DSSS (High Rate Direct Sequence Spread Spectrum). «HR/DS» y «HR/DSSS» en las opciones originales nombraban la misma tecnología, por lo que la clave «a y b» no discriminaba y el enunciado tenía dos opciones equivalentes.', 'Se elimina la duplicidad y se pregunta explícitamente por la PHY de alta velocidad de 802.11b. Es un estándar WLAN heredado; la nomenclatura conserva valor histórico/técnico.', 'historica'],
 [4179,['114'],['IV-11'],['Wi-Fi 6','IEEE 802.11ax','Wi-Fi Alliance','certificación'],[
  {url:ieeeWiFi,referencia:'IEEE Standards Association, «The Evolution of Wi-Fi Technology and Standards»: explica que Wi-Fi # es la nomenclatura desarrollada por Wi-Fi Alliance y nombra explícitamente IEEE 802.11ax como Wi-Fi 6.'},
  {url:ieeeStd,referencia:'IEEE Standards Association, registro de IEEE 802.11ax-2021: enmienda High-Efficiency WLAN que sustenta el estándar técnico; la denominación comercial Wi-Fi 6 pertenece a Wi-Fi Alliance.'},
  {url:academyWireless,referencia:'ITIC Academy, bloque 46 «Redes inalámbricas y comunicaciones móviles», versión 2026.1, §§4.1–4.2: distingue el trabajo de IEEE 802.11 de la nomenclatura/certificación Wi-Fi Alliance y actualiza el temario hasta Wi-Fi 7/8.'}
 ],'Wi-Fi 6 se basa en IEEE 802.11ax. IEEE desarrolla la especificación 802.11; Wi-Fi Alliance usa la denominación generacional y administra programas de certificación de interoperabilidad. Por ello, decir que la Alliance «regula» las implementaciones comerciales confunde normalización y certificación.', 'Se elimina la afirmación institucional inexacta y el «recientemente aprobado» temporal; se conserva la clave 802.11ax y se incluye 802.11be como distractor vigente de otra generación.', 'corregida'],
 [4180,['115'],['II-8','IV-13'],['IPv6','cabecera fija','RFC 8200','cabeceras de extensión'],[
  {url:rfc8200,referencia:'IETF RFC 8200, §3 y figura del formato de cabecera IPv6: el encabezado fijo tiene 40 octetos; las cabeceras de extensión, si aparecen, son estructuras separadas.'},
  {url:academyNetworks,referencia:'ITIC Academy, bloque 42 «Redes», versión 2026.1, §9.2: arquitectura de Internet, IPv4 e IPv6; cotejo curricular con A1-115 y A2-IV-13.'}
 ],'La cabecera fija de IPv6 mide 40 octetos (40 bytes). Las cabeceras de extensión pueden seguirla y forman parte del paquete, pero no aumentan la longitud de esa cabecera fija.', 'Se confirma la opción 40 bytes; se explicita «cabecera fija» para no confundirla con el conjunto variable de cabeceras de extensión definido por IPv6.', 'vigente']
];
const edits={
 4177:{texto:'Si se comparan modulaciones con igual ancho de banda, tasa de símbolos y codificación, ¿cuál de estas opciones ofrece mayor eficiencia espectral en un enlace LMDS?',opciones:['BPSK','QPSK','16-QAM','64-QAM'],respuesta_correcta:3},
 4178:{texto:'¿Qué denominación identifica la capa física de alta velocidad definida por IEEE 802.11b?',opciones:['DSSS PHY del IEEE 802.11 original (1 y 2 Mbit/s).','HR/DSSS PHY (High Rate Direct Sequence Spread Spectrum).','OFDM PHY, propia de otras enmiendas de la familia 802.11.','ERP-OFDM PHY, definida para 802.11g.'],respuesta_correcta:1},
 4179:{texto:'¿Qué enmienda IEEE 802.11 constituye la base técnica de la generación comercial Wi-Fi 6, denominación usada por Wi-Fi Alliance?',opciones:['IEEE 802.11ac (Wi-Fi 5).','IEEE 802.11ax.','IEEE 802.11be (Wi-Fi 7).','IEEE 802.11n (Wi-Fi 4).'],respuesta_correcta:1}
};
apply({numero:'771',fecha:'2026-11-09',records,edits});
