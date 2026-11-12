const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const gsm='https://www.etsi.org/deliver/etsi_ts/123000_123099/123008/06.14.00_60/ts_123008v061400p.pdf';
const gsmArch='https://www.etsi.org/deliver/etsi_ts/123000_123099/123002/05.06.00_60/ts_123002v050600p.pdf';
const owMod='https://devguide.owasp.org/en/09-operations/03-modsecurity/';
const owCor='https://devguide.owasp.org/en/09-operations/02-coraza/';
const crs='https://coreruleset.org/faq/';
const crsDocs='https://coreruleset.org/docs/';
const posNeg='https://wiki.owasp.org/images/f/fd/OWASP_IL_7_WAF_Positive_Security.pdf';
const law40='https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566';
const law39='https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565';
const progA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const progA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const gsmAcademy='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const secAcademy='https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const admAcademy='https://drive.google.com/file/d/1dW2ffNhCduFHJ1hI2nT6fqs_G8DeNpo3/view?usp=drivesdk';
const cite=(url,referencia)=>({url,referencia});
const records=[
 [5586,[108,123],['IV-15'],['GSM','HLR','VLR','registros de localización','datos de abonados'],[
  cite(gsm,'ETSI TS 123 008, § 1.2, arquitectura GSM/UMTS: el HLR conserva datos de abonados registrados en su red de origen y el VLR los necesarios para prestar servicio a los abonados situados en el área que atiende; se limita la pregunta a estos registros clásicos GSM.'),
  cite(gsmArch,'ETSI TS 123 002, § 3.4, arquitectura GSM: define HLR como registro al que se asigna el abonado para mantener sus datos y VLR como registro de abonados visitantes/servicios de la MSC.'),
  cite(progA1,'Convocatoria GSI A1 2025, anexo I, temas 108 y 123: redes de telecomunicaciones y comunicaciones móviles.'),
  cite(progA2,'Convocatoria GSI A2 2025, anexo IX, tema IV.15: sistemas y generaciones de comunicaciones móviles.'),
  cite(gsmAcademy,'ITIC Academy 2026, bloque 42 Redes, apartados sobre redes GSM/arquitectura móvil: encaje curricular; la descripción funcional se comprueba con las especificaciones 3GPP/ETSI citadas.')
 ],null,'Se mantiene la opción B (bases de datos/registros de abonados) y se acota el enunciado a las funciones de HLR y VLR en la arquitectura GSM clásica. HLR mantiene el registro de abonados de origen; VLR mantiene datos de los abonados visitantes necesarios para prestar servicio en el área de una MSC. La arquitectura evolucionada integra funciones en HSS/otros nodos, por lo que no se extrapola la denominación clásica a toda arquitectura móvil actual.','corregida'],
 [5587,[125,126],['IV-12','III-12'],['WAF','cortafuegos de aplicaciones web','detección de ataques','firmas','modelos positivo y negativo','certificado electrónico'],[
  cite(owMod,'OWASP ModSecurity, guía de despliegue: el WAF analiza tráfico HTTP entrante/saliente y aplica reglas para detectar o mitigar ataques.'),
  cite(crs,'OWASP Core Rule Set, FAQ: las reglas incluyen firmas genéricas para categorías de ataque, como inyección SQL y XSS.'),
  cite(crsDocs,'OWASP Core Rule Set, documentación: describe la puntuación de anomalías agregada y la decisión de bloqueo al superar umbrales.'),
  cite(posNeg,'OWASP, material sobre modelos de seguridad WAF: distingue listas/reglas de detección de ataques (modelo negativo) de permitir únicamente tráfico válido (modelo positivo).'),
  cite(secAcademy,'ITIC Academy 2026, bloque Seguridad en redes y aplicación, temas A1 125/126 y A2 C10/C9/III-12: encaje curricular de cortafuegos, control de accesos y protección de aplicaciones web.'),
  cite(progA1,'Convocatoria GSI A1 2025, anexo I, temas 125 y 126: seguridad de redes y de aplicaciones.'),
  cite(progA2,'Convocatoria GSI A2 2025, anexo IX, temas IV.12 y III.12: seguridad de redes y de aplicaciones/servicios web.')
 ],null,'Se conserva C como respuesta, pero se precisa la categoría comparada. Firmas, políticas positivas/negativas y detección de anomalías son mecanismos de inspección y filtrado de peticiones/reglas WAF. La autenticación por certificado es un control de identidad/acceso distinto, aunque el WAF o el proxy inverso puedan integrarse con él; no se afirma que un producto WAF nunca pueda participar en esa integración.','corregida'],
 [5588,[125,126],['IV-12','III-12'],['WAF','seguridad de aplicaciones web','inspección HTTP','WAF cloud','cortafuegos de aplicaciones'],[
  cite(owMod,'OWASP ModSecurity, guía: un WAF inspecciona el tráfico HTTP y puede desplegarse como módulo del servidor o proxy inverso.'),
  cite(owCor,'OWASP Coraza, guía: los WAF pueden integrarse en proxy inverso, servidor, contenedor o infraestructura cloud.'),
  cite(secAcademy,'ITIC Academy 2026, bloque Seguridad en redes y aplicación, temas A1 125/126 y A2 C10/III.12: encaje curricular de cortafuegos y protección web.'),
  cite(progA1,'Convocatoria GSI A1 2025, anexo I, temas 125 y 126.'),
  cite(progA2,'Convocatoria GSI A2 2025, anexo IX, temas IV.12 y III.12.')
 ],null,'Se conserva B. La opción es cierta porque existen WAF ofrecidos como servicio o desplegados en infraestructura cloud. Se corrigen los absolutos de los distractores: un WAF inspecciona HTTP; su ubicación depende de la arquitectura (por ejemplo, proxy inverso, módulo local o servicio cloud); y su finalidad principal es proteger aplicaciones web, no el tráfico interno entre servidores en general.','corregida'],
 [5589,[8,22],['I-9'],['sede electrónica','Ley 40/2015','artículo 38','administración electrónica'],[
  cite(law40,'Ley 40/2015, texto consolidado, art. 38.1: define sede electrónica como dirección electrónica disponible para la ciudadanía mediante redes de telecomunicaciones, cuya titularidad corresponde a una Administración Pública o a uno o varios organismos/entidades de Derecho Público en el ejercicio de sus competencias.'),
  cite(admAcademy,'ITIC Academy 2026, bloque Actuación administrativa y Administración digital, A1 temas 8/22 y A2 O8: procedimiento y administración electrónica; el índice incluye sede electrónica y Ley 40/2015.'),
  cite(progA1,'Convocatoria GSI A1 2025, anexo I, temas 8 y 22: régimen jurídico, procedimiento y administración electrónica.'),
  cite(progA2,'Convocatoria GSI A2 2025, anexo IX, tema I.9: sedes electrónicas e instrumentos de acceso electrónico.')
 ],null,'Se mantiene la opción B, corrigiendo la errata gramatical “una o varios” y reproduciendo con precisión la definición del art. 38.1 de la Ley 40/2015. La LAECSP (Ley 11/2007) es antecedente legislativo, no la norma que debe citarse como definición vigente. La sede tiene titularidad y responsabilidad pública y está disponible mediante redes de telecomunicaciones.','corregida'],
 [5590,[8,22],['I-9'],['expediente administrativo','expediente electrónico','Ley 39/2015','artículo 70','índice electrónico'],[
  cite(law39,'Ley 39/2015, texto consolidado, art. 70.1 y 70.2: el apartado 1 define el expediente administrativo como conjunto ordenado de documentos y actuaciones; el apartado 2 establece su formato electrónico e índice autenticado para remisión.'),
  cite(admAcademy,'ITIC Academy 2026, bloque Actuación administrativa y Administración digital, A1 temas 8/22 y A2 O8: Ley 39/2015, procedimiento y expediente electrónico.'),
  cite(progA1,'Convocatoria GSI A1 2025, anexo I, temas 8 y 22: procedimiento administrativo y administración electrónica.'),
  cite(progA2,'Convocatoria GSI A2 2025, anexo IX, tema I.9: gestión electrónica de procedimientos administrativos.')
 ],null,'Se mantiene C y se formula la pregunta sobre el concepto del art. 70.1 de la Ley 39/2015, aplicable al expediente administrativo también cuando se tramita electrónicamente. El art. 70.2 añade que los expedientes tendrán formato electrónico y establece el índice autenticado al remitirlos. Por tanto, un expediente electrónico no es una mera copia digital de un expediente papel ni una aplicación informática.','corregida']
];
const edits={
 5586:{texto:'En la arquitectura GSM clásica, ¿qué función comparten principalmente el HLR y el VLR?',opciones:['Son estaciones transceptoras base que proporcionan el enlace radio.','Son registros/bases de datos que almacenan información de abonados: el HLR en la red de origen y el VLR para abonados visitantes en su área de servicio.','Son centros de conmutación de móviles (MSC).','Son interfaces de radio entre la estación móvil y la red.'],respuesta_correcta:1},
 5587:{texto:'Al comparar mecanismos de inspección y detección de ataques del motor de reglas de un WAF, ¿cuál pertenece a autenticación/control de acceso y no a la inspección de peticiones web?',opciones:['Reglas basadas en firmas o patrones de ataques.','Política positiva (permitir solo peticiones que cumplan lo definido) o negativa (bloquear patrones de ataque conocidos).','Autenticar al cliente y controlar el acceso mediante un certificado electrónico.','Puntuación/detección de anomalías en las peticiones.'],respuesta_correcta:2},
 5588:{texto:'¿Cuál de las siguientes afirmaciones sobre el despliegue de un Web Application Firewall (WAF) es cierta?',opciones:['Un WAF nunca inspecciona tráfico HTTP.','Existen soluciones WAF prestadas o desplegadas en la nube.','Todo WAF debe instalarse en la intranet, detrás de la aplicación web.','La finalidad general de un WAF es proteger el tráfico entre servidores, con independencia de las aplicaciones.'],respuesta_correcta:1},
 5589:{texto:'Según el artículo 38.1 de la Ley 40/2015, ¿qué es una sede electrónica?',opciones:['Una dirección privada definida por la Ley 34/2002 para toda entidad que presta servicios por Internet.','Una dirección electrónica disponible para la ciudadanía a través de redes de telecomunicaciones, cuya titularidad corresponde a una Administración Pública o a uno o varios organismos públicos o entidades de Derecho Público en el ejercicio de sus competencias.','Una nueva denominación del registro telemático de la Ley 30/1992.','El centro de proceso de datos de un órgano administrativo.'],respuesta_correcta:1},
 5590:{texto:'De acuerdo con el artículo 70.1 de la Ley 39/2015, ¿qué definición de expediente administrativo se aplica también cuando el expediente se tramita electrónicamente?',opciones:['Una copia digital de los documentos de un expediente en papel, que conserva por sí sola la eficacia jurídica.','La aplicación informática utilizada por la Administración para tramitar procedimientos.','El conjunto ordenado de documentos y actuaciones que sirven de antecedente y fundamento a la resolución administrativa, así como las diligencias encaminadas a ejecutarla.','El conjunto de documentos electrónicos que, en su caso, se incluyan en las normas de creación de una sede electrónica.'],respuesta_correcta:2}
};
aplicar({numero:'1053',fecha:'2026-11-12',records,edits});
