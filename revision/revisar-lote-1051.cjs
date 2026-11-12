const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const g9921='https://www.itu.int/rec/T-REC-G.992.1/en';
const g9921Text='https://www.itu.int/rec/dologin_pub.asp?id=T-REC-G.992.1-199907-I%21%21PDF-E&lang=e&type=items';
const rfc1878='https://www.rfc-editor.org/rfc/rfc1878.html';
const h225='https://www.itu.int/rec/T-REC-H.225.0/en';
const h323='https://www.itu.int/rec/T-REC-H.323/en';
const q700='https://www.itu.int/rec/T-REC-Q.700';
const nyquist='https://doi.org/10.1109/T-AIEE.1928.5055024';
const handbook='https://www.govinfo.gov/content/pkg/GOVPUB-C-PURL-gpo13207/pdf/GOVPUB-C-PURL-gpo13207.pdf';
const g711='https://www.itu.int/rec/T-REC-G.711/en';
const g726='https://www.itu.int/rec/T-REC-G.726/en';
const g729='https://www.itu.int/rec/T-REC-G.729/en';
const net='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const records=[
 [5576,[108],['IV-7','IV-10'],['ADSL','RDSI','ISDN','par de cobre','DSL'],[
  {url:g9921,referencia:'UIT-T G.992.1 (ADSL), ficha oficial: contempla ADSL en el mismo par con servicio vocal y, alternativamente, con RDSI G.961 apéndices I o II; la recomendación figura en vigor.'},
  {url:g9921Text,referencia:'UIT-T G.992.1, § 1 (Scope): especifica que ADSL y RDSI G.961 apéndices I/II pueden coexistir en el mismo par, con bandas separadas por filtrado; el caso del apéndice III sitúa RDSI en un par adyacente.'},
  {url:a1,referencia:'Convocatoria GSI A1 2025, anexo I, tema 108: medios de transmisión e infraestructuras de acceso.'},
  {url:a2,referencia:'Convocatoria GSI A2 2025, anexo IX, temas IV.7 y IV.10: medios guiados y redes de área extensa/tecnologías de acceso.'},
  {url:net,referencia:'ITIC Academy 2026, bloque 42 Redes, secciones de tecnologías DSL/ADSL y acceso de abonado; cotejo curricular, subordinado a la especificación UIT-T.'}
 ],null,'Se conserva Sí con alcance normativo expreso: G.992.1 permite coexistencia en el mismo par de cobre con la RDSI definida en G.961, apéndices I o II, separando bandas mediante filtrado. No se generaliza a cualquier modalidad RDSI: el apéndice III corresponde a coexistencia de ADSL/voz con RDSI en un par adyacente. Se elimina así el sí/no sin condiciones del original.', 'corregida'],
 [5577,[108],['IV-8'],['IPv4','máscara de subred','/20','hosts utilizables'],[
  {url:rfc1878,referencia:'RFC 1878, tabla 2-1: máscara 255.255.240.0 equivale a /20 y proporciona 4094 direcciones de host efectivas en una subred convencional.'},
  {url:'https://www.rfc-editor.org/rfc/rfc4632.html',referencia:'RFC 4632, Classless Inter-domain Routing (CIDR): prefijos CIDR y división entre prefijo de red y bits restantes.'},
  {url:a1,referencia:'Convocatoria GSI A1 2025, anexo I, tema 108: protocolos de red y direccionamiento.'},
  {url:a2,referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.8: redes, protocolos y técnicas de transmisión.'},
  {url:net,referencia:'ITIC Academy 2026, bloque 42 Redes, direccionamiento IPv4 y máscaras/prefijos; cotejo curricular.'}
 ],null,'Se especifica IPv4 y “direcciones de host unicast utilizables en una subred convencional”, para excluir interpretaciones de asignación de puestos que dependan de reservas o del uso especial de /31. La máscara equivale a /20: 12 bits de host, 4096 direcciones totales y 4094 utilizables al excluir identificador de red y broadcast. Se conserva D.', 'corregida'],
 [5578,[108,109],['IV-8','IV-13'],['VoIP','H.323','H.225.0','RAS','SS7'],[
  {url:h225,referencia:'UIT-T H.225.0 (03/2022), en vigor: señalización de llamada y paquetización de medios en sistemas multimedia basados en paquetes; incluye el marco de señalización H.323.'},
  {url:h323,referencia:'UIT-T H.323, sistemas de comunicación multimedia basados en paquetes: arquitectura/protocolos de la familia H.323; H.225.0 define señalización de llamada y RAS (registro, admisión y estado).'},
  {url:q700,referencia:'UIT-T Q.700 (03/1993), en vigor: introduce el Sistema de Señalización n.º 7 (SS7) y sus partes funcionales para redes de señalización telefónica; no es un protocolo nativo de VoIP, aunque existan pasarelas de interfuncionamiento.'},
  {url:a1,referencia:'Convocatoria GSI A1 2025, anexo I, temas 108–109: protocolos, interconexión y servicios de Internet.'},
  {url:a2,referencia:'Convocatoria GSI A2 2025, anexo IX, temas IV.8 y IV.13: protocolos de red y arquitectura/servicios de Internet.'},
  {url:net,referencia:'ITIC Academy 2026, bloque 42 Redes, apartados de telefonía IP/VoIP, SIP y protocolos H.323; cotejo curricular.'}
 ],null,'Se mantiene SS7 como respuesta, pero se precisa la categoría: SS7 es el sistema de señalización tradicional de redes telefónicas conmutadas y no un protocolo nativo de VoIP. H.225.0 sí forma parte de H.323: señalización de llamada y RAS (registro, admisión y estado). SS7 puede interfuncionar con VoIP mediante pasarelas, por lo que “no se considera un protocolo de VoIP” queda delimitado como función/protocolo nativo, no como incompatibilidad absoluta.', 'corregida'],
 [5579,[108],['IV-7'],['Nyquist','baudios','tasa de símbolos','ancho de banda','ISI'],[
  {url:nyquist,referencia:'Nyquist, H. (1928), “Certain Topics in Telegraph Transmission Theory”, Transactions of the AIEE 47(2), DOI 10.1109/T-AIEE.1928.5055024: fundamento histórico de la tasa límite de señalización en canales limitados en banda.'},
  {url:handbook,referencia:'U.S. Government technical handbook, § 2.3: para un filtro ideal de ancho B y sin interferencia entre símbolos, la tasa máxima de Nyquist es 2B símbolos/s; distingue baud de bit/s y de la capacidad de Shannon en presencia de ruido.'},
  {url:a1,referencia:'Convocatoria GSI A1 2025, anexo I, tema 108: medios de transmisión y redes de telecomunicaciones.'},
  {url:a2,referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.7: medios de transmisión y parámetros significativos.'},
  {url:net,referencia:'ITIC Academy 2026, bloque 42 Redes, parámetros y capacidad de transmisión; cotejo curricular.'}
 ],null,'Se conserva A, pero se explicita la condición física que el original omitía: en un canal ideal limitado en banda, sin ruido ni interferencia entre símbolos, la tasa máxima de símbolos (baudios) es 2B por segundo para ancho de banda B en hercios. No es por sí sola una fórmula de capacidad binaria ni el teorema de muestreo; con M niveles el caudal depende de log₂(M), y con ruido se aplica el límite de Shannon.', 'corregida'],
 [5580,[108,109],['IV-8','IV-13'],['G.711','G.726','G.729','códecs de voz','telefonía IP'],[
  {url:g711,referencia:'UIT-T G.711, en vigor: modulación por impulsos codificados (PCM) de frecuencias vocales.'},
  {url:g726,referencia:'UIT-T G.726, en vigor: ADPCM a 40, 32, 24 y 16 kbit/s; codificación de voz.'},
  {url:g729,referencia:'UIT-T G.729 (06/2012), en vigor: codificación de habla a 8 kbit/s mediante CS-ACELP.'},
  {url:a1,referencia:'Convocatoria GSI A1 2025, anexo I, temas 108–109: redes de telecomunicaciones y servicios de voz sobre IP.'},
  {url:a2,referencia:'Convocatoria GSI A2 2025, anexo IX, temas IV.8 y IV.13: protocolos de red y servicios de Internet.'},
  {url:net,referencia:'ITIC Academy 2026, bloque 42 Redes, codecs de voz/telefonía IP; cotejo curricular.'}
 ],null,'Se conserva B. G.711, G.726 y G.729 son recomendaciones ITU-T para codificar señales vocales/habla, utilizadas entre otras aplicaciones en telefonía IP; no son por sí mismos protocolos de transporte VoIP ni formatos de imagen o vídeo. Se precisa esta distinción porque la pregunta original preguntaba por su uso y podía confundirse codec con protocolo.', 'corregida']
];
const edits={
 5576:{texto:'Según UIT-T G.992.1, ¿puede coexistir ADSL en el mismo par de cobre con la RDSI definida en G.961, apéndices I o II?',opciones:['Sí, usando bandas separadas mediante filtrado.','No; ADSL y RDSI siempre requieren pares distintos.','Solo si se elimina cualquier servicio de voz, incluso cuando utiliza otra banda.','Solo si el abonado no dispone de centralita PBX.'],respuesta_correcta:0},
 5577:{texto:'En una subred IPv4 convencional con máscara 255.255.240.0 (/20), ¿cuántas direcciones de host unicast utilizables hay, excluyendo la dirección de red y la de broadcast?',opciones:['240','512','1024','4094'],respuesta_correcta:3},
 5578:{texto:'¿Cuál es un sistema tradicional de señalización telefónica de la red conmutada y no un protocolo nativo de VoIP?',opciones:['SIP.','SS7.','H.225.0, señalización de llamada de H.323.','H.225.0 RAS (registro, admisión y estado) de H.323.'],respuesta_correcta:1},
 5579:{texto:'Para un canal ideal limitado en banda, sin ruido ni interferencia entre símbolos, ¿qué establece el criterio de tasa de Nyquist para un ancho de banda B?',opciones:['La tasa máxima de símbolos es 2B baudios (símbolos por segundo).','La relación señal/ruido máxima es 2B.','La capacidad binaria es siempre 2B bit/s, con independencia de la modulación.','La tasa máxima de muestreo de una señal es siempre B muestras/s.'],respuesta_correcta:0},
 5580:{texto:'¿Qué tipo de señal codifican las recomendaciones ITU-T G.711, G.726 y G.729?',opciones:['Imágenes fijas JPEG.','Señales vocales o de habla, usadas también en telefonía IP.','Vídeo comprimido para streaming.'],respuesta_correcta:1}
};
aplicar({numero:'1051',fecha:'2026-11-12',records,edits});
