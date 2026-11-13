const apply=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const src=(url,referencia)=>({url,referencia});
apply({numero:'1203',fecha:'2026-11-13',records:[
 [6336,['65'],['III-12'],['JSON','JavaScript Object Notation','intercambio de datos','formato textual'],[
  src('https://www.rfc-editor.org/rfc/rfc8259.html','RFC 8259, §1: JSON (JavaScript Object Notation) es un formato ligero, textual e independiente del lenguaje para intercambiar datos estructurados; fácil de leer/escribir por personas y de analizar/generar por máquinas.'),
  src('https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk','ITIC Academy, bloque 30 Tecnologías de sistemas de información, edición 2026: cotejo curricular general de tecnologías web y JavaScript; no se localizó explicación específica de la definición normativa de JSON.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 65: arquitectura y desarrollo web.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.12: aplicaciones web y tecnologías de desarrollo.')
 ],{opcion:[0,'JavaScript Object Notation: formato ligero, textual e independiente del lenguaje para intercambio de datos estructurados; legible y escribible por personas y fácil de analizar y generar por máquinas.']},'Se conserva la opción A, que identifica correctamente la expansión de JSON, y se completa su definición conforme a RFC 8259. Las otras opciones alteran el nombre del formato. La formulación precisa evita reducir JSON a una sintaxis legible por personas y explicita su uso para intercambio de datos y procesamiento por máquinas.', 'corregida'],
 [6337,['74'],[],['datum geodésico','WGS 84','GPS','sistema de referencia'],[
  src('https://earth-info.nga.mil/?action=wgs84&dir=wgs84','National Geospatial-Intelligence Agency (NGA), World Geodetic System 1984: describe WGS 84 como sistema/datum geodésico de referencia empleado por GPS.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 74: sistemas de información geográfica y datos geoespaciales.'),
  src(a2,'El anexo IX de la convocatoria GSI A2 2025 no incluye un tema específico de sistemas de información geográfica o datum geodésicos; no se fuerza equivalencia temática.')
 ],{texto:'¿Qué datum geodésico global utiliza GPS como sistema de referencia?'},'La opción D, WGS 1984 (WGS 84), es la respuesta. El enunciado original preguntaba por “el Datum más utilizado”, una comparación sin ámbito ni métrica que no permite una respuesta inequívoca; se acota a la referencia global de GPS. La NGA mantiene la definición y realización de WGS 84.', 'corregida'],
 [6338,['125'],['IV-12'],['AAA','Authentication','Authorization','Accounting','autenticación','autorización','contabilidad de uso'],[
  src('https://www.rfc-editor.org/rfc/rfc2903.html','RFC 2903, Generic AAA Architecture: define el marco AAA como Authentication, Authorization and Accounting.'),
  src('https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk','ITIC Academy, bloque 48 Seguridad de redes y aplicaciones, edición 2026: control de acceso y servicios de seguridad; cotejo curricular general.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 125: seguridad en redes y sistemas.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.12: seguridad de sistemas y redes.')
 ],null,'La opción A es correcta: AAA significa Authentication, Authorization and Accounting (autenticación, autorización y registro/contabilidad de uso). “Accounting” se refiere a registrar el uso de recursos y las sesiones, no a aprobación de identidad.', 'vigente'],
 [6339,['65'],['III-12'],['XMLHttpRequest','XHR','open','setRequestHeader','getAllResponseHeaders','API web'],[
  src('https://xhr.spec.whatwg.org/','WHATWG XMLHttpRequest Living Standard: especifica open(), setRequestHeader() y getAllResponseHeaders() como métodos de XMLHttpRequest; no define stop() como método del objeto.'),
  src('https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk','ITIC Academy, bloque 30 Tecnologías de sistemas de información, edición 2026: desarrollo web y APIs cliente; cotejo curricular, sin desarrollo específico de XMLHttpRequest localizado.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 65: arquitectura y desarrollo web.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.12: aplicaciones web y tecnologías de desarrollo.')
 ],null,'La opción B, stop, no es un método de XMLHttpRequest. La especificación WHATWG define los otros tres nombres como métodos de XHR. El resultado se mantiene vigente conforme al estándar web actual.', 'vigente'],
 [6340,['103'],[],['EFQM','EFQM 2013','criterio 6','subcriterio 6b','calidad de servicios','versión del modelo'],[
  src('https://www.qualityscotland.co.uk/sites/default/files/efqm/EFQM%20Excellence%20Model%20Book%202013.pdf','EFQM Excellence Model 2013, guía de Quality Scotland: en el criterio 6, el subcriterio 6a representa 75% y 6b 25%; evidencia de la ponderación de la edición histórica.'),
  src('https://www.ujaen.es/gobierno/efqm/sites/gobierno_efqm/files/uploads/COMUNICACION%20Y%20FORMACION/Pres_EqEvaluador_UJA_2013_vs1.pdf','Universidad de Jaén, material de formación EFQM 2013: presenta los criterios 6a/6b y su ponderación 75%/25%.'),
  src('https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk','ITIC Academy, bloque 3 Actuación administrativa, edición 2026: calidad en servicios públicos, EFQM 2025, CAF 2020 y AEEPP; referencia actual que muestra que el cuestionario alude a una edición anterior.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 103: calidad en servicios de información y modelo EFQM.'),
  src(a2,'El anexo IX de la convocatoria GSI A2 2025 no incluye un tema directamente dedicado a EFQM o calidad de servicios de información; no se fuerza equivalencia.')
 ],{texto:'Según el modelo EFQM de 2013, en el criterio 6 (Resultados en los clientes), ¿qué subcriterio representa el 25 % de los puntos del criterio?'},'La opción B (subcriterio 6b) es correcta únicamente para el modelo EFQM 2013: 6a ponderaba 75 % y 6b, 25 %. Se marca histórica y se identifica la edición porque las ponderaciones no deben trasladarse al modelo vigente. El temario ITIC Academy 2026 incluye EFQM 2025, CAF 2020 y calidad en servicios públicos, confirmando la vigencia curricular del tema general, no la puntuación antigua.', 'historica']
]});
