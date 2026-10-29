const apply = require('./aplicar-lote.cjs');

const metricav3 = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A6838aec9-835a-4562-bdc3-87a96fd9c743/METRICA_V3_Aseguramiento_de_la_Calidad.pdf';
const w3cWai = 'https://www.w3.org/WAI/about/';
const w3cTools = 'https://www.w3.org/WAI/test-evaluate/tools/list/';
const w3cSelection = 'https://www.w3.org/WAI/test-evaluate/tools/selecting/';
const taw = 'https://www.tawdis.net/?lang=es';
const sara = 'https://administracionelectronica.gob.es/ctt/redsara';
const eni = 'https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331&p=20241106&tn=0';
const lgt = 'https://www.boe.es/buscar/doc.php?id=BOE-A-2022-10757';
const testa = 'https://interoperable-europe.ec.europa.eu/collection/egovernment/solution/testa/testa-network-service';
const records = [
 [2936,[40,41],['II-15'],['ciclo de vida','estudio de viabilidad','adquisición de sistemas','desarrollo o adquisición'],[
  {url:metricav3,referencia:'MÉTRICA v3, proceso Estudio de Viabilidad del Sistema: contempla el estudio de alternativas de solución y la selección de una alternativa, antes de análisis y diseño.'}
 ],'','Se precisa el marco en MÉTRICA v3. El proceso Estudio de Viabilidad del Sistema analiza alternativas y permite seleccionar una solución; decidir entre construir/desarrollar y adquirir es una decisión de esa fase, anterior al análisis detallado y al diseño. Se cotejó con ITIC Academy, Bloque 17 «Adquisición de sistemas, alternativas y rentabilidad», versión 2026.2, apartados 1–2 (necesidad, alternativas y seis actividades EVS).','vigente'],
 [2937,[44],['III-14'],['accesibilidad web','evaluación de accesibilidad','TAW','WAVE','AChecker'],[
  {url:w3cTools,referencia:'W3C WAI, Web Accessibility Evaluation Tools List: identifica AChecker y WAVE como herramientas de evaluación de accesibilidad web.'},
  {url:taw,referencia:'TAW, servicio y descripción del proveedor: identifica TAW como herramienta en línea de análisis de accesibilidad web conforme a WCAG.'}
 ],'','Se formula como identificación de una errata, no como una lista exhaustiva de herramientas. «ACCWarning» no es el nombre de la herramienta citada por W3C; la opción correcta es «AChecker». Las otras opciones son nombres de herramientas de evaluación: TAW y WAVE siguen documentadas por sus responsables. Se cotejó con ITIC Academy, Bloque 30 «Tecnologías de Sistemas de la Información», versión 2026.1, apartado 2.6 sobre diseño adaptable, UX y accesibilidad.','corregida'],
 [2938,[44,77],['III-14','III-12'],['W3C','WAI','accesibilidad web','estándares web'],[
  {url:w3cWai,referencia:'W3C, About WAI: la Web Accessibility Initiative es una iniciativa del W3C que desarrolla estrategias, estándares y recursos para promover la accesibilidad web; no es un comité ni una especificación como WCAG.'}
 ],'','Se sustituye «comité» por «iniciativa» y se diferencia WAI (programa/iniciativa del W3C) de WCAG (directrices de accesibilidad), ATAG y UAAG (directrices para herramientas de autoría y agentes de usuario, respectivamente). Se cotejó con ITIC Academy, Bloque 30, apartado 2.6 sobre UX y accesibilidad web.','corregida'],
 [2939,[44],['III-14'],['accesibilidad web','diseño universal','evaluación de accesibilidad','WCAG'],[
  {url:w3cSelection,referencia:'W3C WAI, Selecting Web Accessibility Evaluation Tools: las herramientas solo ayudan; no pueden comprobar automáticamente todos los aspectos y se requiere juicio humano.'},
  {url:'https://www.w3.org/WAI/test-evaluate/',referencia:'W3C WAI, Evaluating Web Accessibility Overview: ninguna herramienta por sí sola determina si un sitio cumple los estándares; hace falta evaluación humana con conocimiento.'}
 ],'','Se corrige la opción C para introducir una afirmación inequívocamente falsa: la accesibilidad no elimina la necesidad de evaluación humana. Las herramientas automáticas ayudan, pero no cubren todos los aspectos ni determinan por sí solas la conformidad. Las opciones sobre usabilidad e independencia del dispositivo expresan beneficios potenciales del diseño accesible; la clave pasa a C. Se cotejó con ITIC Academy, Bloque 30, apartado 2.6.','corregida'],
 [2940,[45,49,120],['I-9'],['Red SARA','ENI','interoperabilidad','TESTA','redes públicas de transmisión de datos'],[
  {url:sara,referencia:'PAe/CTT, Red SARA: conecta redes de Administraciones Públicas españolas e instituciones europeas y facilita intercambio; descripción y organismo responsable actualizados por la AEAD.'},
  {url:eni,referencia:'Real Decreto 4/2010, ENI, art. 13: la Red SARA presta la Red de comunicaciones de las Administraciones públicas españolas y contempla interconexión con redes de instituciones de la UE y otros Estados miembros.'},
  {url:lgt,referencia:'Ley 11/2022, General de Telecomunicaciones, art. 31: regula los planes nacionales de numeración, no define Red SARA.'},
  {url:testa,referencia:'Comisión Europea, servicio TESTA: infraestructura transeuropea segura de comunicaciones para intercambios entre organismos públicos europeos.'}
 ],'','Se conserva la clave de la opción incorrecta, pero se actualiza la terminología y se explica la base normativa. La Red SARA presta la red de comunicaciones interadministrativas conforme al artículo 13 del Real Decreto 4/2010; el artículo 31 de la Ley 11/2022 regula planes nacionales de numeración y no define Red SARA. Se reemplaza el nombre heredado «sTESTA» por la denominación TESTA usada por la Comisión Europea. Cotejo curricular: ITIC Academy, Bloque 42 «Redes», actualización 2026 (29-09-2026), temas A1 119–120, §11 «Redes de las Administraciones públicas: Red SARA y TESTA-ng»; y Bloque 30, contenidos de interoperabilidad y servicios web.','corregida']
];

apply({numero:'524',fecha:'2026-10-29',records,edits:{
 2936:{texto:'En MÉTRICA versión 3, ¿en qué proceso se estudian las alternativas de solución, incluida la decisión entre desarrollar un sistema o adquirirlo?',respuesta_correcta:2},
 2937:{texto:'¿Qué opción contiene una errata en el nombre de la herramienta de evaluación de accesibilidad «AChecker»?',opciones:['ACCWarning','TAW','AChecker','WAVE'],respuesta_correcta:0},
 2938:{texto:'¿Qué iniciativa del W3C desarrolla estrategias, estándares y recursos para promover la accesibilidad web?',opciones:['WAI','WCAG','ATAG','UAAG'],respuesta_correcta:0},
 2939:{texto:'¿Cuál de las siguientes NO es una ventaja de diseñar portales accesibles?',opciones:['Puede mejorar la usabilidad para una diversidad mayor de personas.','Favorece el acceso con distintas tecnologías y dispositivos.','Elimina la necesidad de evaluación humana y de pruebas de accesibilidad.','Todas las anteriores son ventajas.'],respuesta_correcta:2},
 2940:{texto:'Señala la afirmación incorrecta sobre la Red SARA:',opciones:['Es una infraestructura privada de comunicaciones para las Administraciones Públicas.','Conecta redes de Administraciones Públicas españolas y facilita el intercambio de información y servicios.','Permite la interconexión con la infraestructura transeuropea segura TESTA.','La define el artículo 31 de la Ley 11/2022, General de Telecomunicaciones.'],respuesta_correcta:3}
}});
