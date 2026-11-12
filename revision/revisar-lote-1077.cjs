const aplicar = require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const m3400='https://www.itu.int/rec/dologin_pub.asp?id=T-REC-M.3400-200002-I%21%21PDF-E&lang=e&type=items';
const peoplecert='https://www.peoplecert.org/news-and-announcements/2023/itil-4-management-practices-2023';
const axelos='https://drive.google.com/file/d/1YJFATYglt3_edEczCX1k6gJuEe4qX2Sl/view?usp=drivesdk';
const rfc3366='https://www.rfc-editor.org/rfc/rfc3366.html';
const g711='https://www.itu.int/rec/T-REC-G.711/en';
const g701='https://www.itu.int/rec/T-REC-G.701-199303-I/en';
const circuit='https://www.itu.int/rec/dologin_pub.asp?id=T-REC-G.765-199511-I%21AppI%21PDF-E&lang=e&type=items';
const ref=(url,referencia)=>({url,referencia});
const records=[
 [5706,[118],['IV-9'],['FCAPS','gestión de redes','ITU-T M.3400','configuración','contabilidad','prestaciones','cambios'],[
  ref(m3400,'ITU-T M.3400, TMN management functions: clasifica áreas funcionales de gestión como fallos, prestaciones, configuración, contabilidad y seguridad; “gestión de cambios” no es una sexta área FCAPS independiente.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 118: administración de LAN, gestión de dispositivos y monitorización.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.9: administración de redes locales, usuarios/dispositivos, monitorización y SNMP.'),
 ],null,'Corregida, respuesta D. Se pregunta ahora por las cinco áreas funcionales de gestión de redes (FCAPS) definidas en el marco de gestión de telecomunicaciones: fallos, configuración, contabilidad, prestaciones y seguridad. La gestión de cambios se realiza dentro de procesos de configuración/cambio, pero no constituye una sexta área FCAPS. A1-118/A2-IV-9.','corregida'],
 [5707,[106],['IV-4'],['ITIL 4','SVS','prácticas de gestión','gestión de riesgos','gestión de servicios','habilitación del cambio','diseño del servicio'],[
  ref(peoplecert,'PeopleCert, ITIL 4 management practices: confirma que las 34 prácticas se agrupan en general management, service management y technical management.'),
  ref(axelos,'AXELOS, ITIL Foundation: ITIL 4 Edition, glosario institucional consultado en Drive; fuente de terminología ITIL. La clasificación de la práctica de riesgo como general y de diseño/incident/change como service management se comprueba en el material oficial de ITIL 4.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 106: gestión de servicios e infraestructuras TIC y bases conceptuales de ITIL.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.4: configuración, cambios, operación, monitorización y capacidad; correspondencia temática parcial, no epígrafe específico de ITIL.'),
 ],null,'Corregida, respuesta C. Gestión de riesgos pertenece a las prácticas generales de gestión de ITIL 4. Gestión de incidentes, diseño del servicio y habilitación del cambio (denominada “change control” en materiales iniciales) son prácticas de gestión de servicios. Se precisa el nombre vigente de la práctica sin alterar la clave. A1-106/A2-IV-4; la correspondencia A2 es parcial, pues su epígrafe cubre operación/configuración/cambios, no la taxonomía ITIL en sí.','corregida'],
 [5708,[111],['II-8'],['ARQ','parada y espera','stop-and-wait','ventana deslizante','Go-Back-N','repetición selectiva','RFC 3366'],[
  ref(rfc3366,'RFC 3366, §§ 1.4.1–1.4.2: distingue Stop-and-Wait ARQ (una trama y espera del ACK) de Sliding-Window ARQ, que admite varias tramas pendientes según el tamaño de ventana.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 111: modelo OSI, capas, protocolos y direccionamiento.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.8: modelos TCP/IP y OSI, arquitectura, capas, protocolos y encaminamiento.'),
 ],null,'Corregida, respuesta A. Se evita la ambigüedad del original, que mezclaba protocolos ARQ con piggybacking (una técnica de acuse). El caso preguntado es el protocolo ARQ que solo mantiene una trama pendiente y espera su reconocimiento: parada y espera. Go-Back-N y repetición selectiva permiten ventanas con varias tramas pendientes. A1-111/A2-II-8.','corregida'],
 [5709,[108],['IV-14'],['PCM','modulación por impulsos codificados','muestreo','cuantificación','codificación','G.711'],[
  ref(g711,'ITU-T G.711, Pulse code modulation of voice frequencies: especifica PCM de voz, la frecuencia de muestreo y la representación codificada de cada muestra.'),
  ref(g701,'ITU-T G.701, Vocabulary of digital transmission and PCM terms: vocabulario de transmisión digital y modulación por impulsos codificados.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 108: telecomunicaciones, medios de transmisión y conmutación.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.14: NGN/IMS, VoIP, ToIP y comunicaciones convergentes; relación temática con codificación de voz.'),
 ],null,'Corregida, respuesta D. Para digitalizar una señal mediante PCM, primero se muestrea; luego cada muestra se cuantifica y, finalmente, se codifica. G.711 normaliza PCM para frecuencias vocales. Se sustituyó “modulador” por “codificador” para nombrar con mayor precisión el bloque funcional. A1-108/A2-IV-14.','corregida'],
 [5710,[108],[],['conmutación de circuitos','conmutación de paquetes','circuito dedicado','reserva de recursos','fase de establecimiento'],[
  ref(circuit,'ITU-T G.765, apéndice I.2.5: en una conexión con conmutación de circuitos, las rutas de conmutación y transmisión quedan dedicadas a la llamada, incluso cuando no circulan datos.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 108: redes de telecomunicaciones y conmutación de circuitos y paquetes.'),
 ],null,'Corregida, respuesta A. La ventaja se formula de forma concreta: una vez establecido el circuito, se dedica a la comunicación una ruta/capacidad durante la llamada. No significa que toda información sea útil, que se reserven recursos de forma eficiente ni que desaparezca la demora de establecimiento; la reserva puede dejar capacidad ociosa. A1-108; no se asigna un tema A2 específico equivalente.','corregida'],
];
const edits={
 5706:{texto:'¿Cuál de las siguientes NO forma parte de las cinco áreas funcionales de gestión de redes conocidas como FCAPS?',opciones:['Gestión de configuración','Gestión de contabilidad','Gestión de prestaciones','Gestión de cambios'],respuesta_correcta:3},
 5707:{texto:'En ITIL 4, ¿cuál de estas prácticas pertenece a las prácticas generales de gestión y no a las prácticas de gestión de servicios?',opciones:['Gestión de incidentes','Habilitación del cambio (change enablement)','Gestión de riesgos','Diseño del servicio'],respuesta_correcta:2},
 5708:{texto:'¿Qué protocolo ARQ permite tener como máximo una trama sin reconocer y esperar su acuse antes de enviar la siguiente?',opciones:['Parada y espera (Stop-and-Wait)','Retroceso N (Go-Back-N)','Repetición selectiva (Selective Repeat)','HDLC en modo con ventana deslizante'],respuesta_correcta:0},
 5709:{texto:'¿En qué orden se realizan las operaciones básicas para convertir una señal analógica a PCM (modulación por impulsos codificados)?',opciones:['Codificación, cuantificación y muestreo','Muestreo, codificación y cuantificación','Cuantificación, codificación y muestreo','Muestreo, cuantificación y codificación'],respuesta_correcta:3},
 5710:{texto:'Una vez establecida una llamada con conmutación de circuitos, ¿qué característica la distingue frente a la conmutación de paquetes?',opciones:['La ruta y capacidad del circuito quedan dedicadas a la comunicación durante la llamada','Toda la información transmitida es útil','La reserva de recursos de transmisión es siempre más eficiente','No existe demora de establecimiento de la llamada'],respuesta_correcta:0},
};
aplicar({numero:'1077',fecha:'2026-11-12',records,edits});
