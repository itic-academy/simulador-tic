const aplicar = require('./aplicar-lote.cjs');

const ref = (url, referencia) => ({ url, referencia });
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy30 = 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const academy39 = 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk';
const academy41 = 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk';
const academy42 = 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const jaxws = 'https://jcp.org/en/jsr/detail?id=224';
const tls = 'https://www.rfc-editor.org/rfc/rfc6347';
const tls13 = 'https://www.rfc-editor.org/rfc/rfc8446';
const html = 'https://html.spec.whatwg.org/multipage/parsing.html';
const xml = 'https://www.w3.org/TR/xml/';
const selenium = 'https://www.selenium.dev/index.html';
const itilSD = 'https://eu-assets.contentstack.com/v3/assets/blt637b065823946b12/blt7f52cf53a523bd19/61782af27ce9a21030aa3f3d/ITIL_Intermediate_Qualification_Service_Design_Certificate_Syllabus.pdf';
const itilGlossary = 'https://www.itil.co.il/wp-content/uploads/2015/04/ITIL_2011_Glossary_GB-v1-0.pdf';

const records = [
  [5056, ['67'], ['III-10'], ['JAX-WS', 'JAX-RPC', 'JSR 224', 'servicios web SOAP'], [
    ref(jaxws, 'Java Community Process, JSR 224: la descripción oficial afirma que JAX-WS 2.0 es la siguiente generación de la API de servicios web XML y reemplaza JAX-RPC 1.0.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 67: entorno de desarrollo JAVA.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema III.10: plataforma Java EE/Jakarta EE y servicios.'),
    ref(academy30, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de la información», versión 2026.1: plataforma Java y servicios web; correspondencia curricular.'),
    ref(academy30, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de la información», versión 2026.1: Java y servicios web; correspondencia curricular.')
  ], null, 'Respuesta B: JAX-WS. La propia JSR 224 indica que es la siguiente generación de la API de servicios web XML y sustituye JAX-RPC 1.0. El dato corresponde a la transición histórica entre especificaciones Java; no debe interpretarse como recomendación de desplegar hoy servicios SOAP frente a otras arquitecturas.', 'historica'],
  [5057, ['115'], ['II-8'], ['SSL', 'TLS', 'TCP/IP', 'seguridad de transporte'], [
    ref(tls, 'IETF RFC 6347, §1: explica el modelo de TLS insertado entre la capa de aplicación y la de transporte y que TLS clásico requiere un transporte fiable, normalmente TCP. SSL es el antecedente obsoleto de TLS; la pregunta se conserva solo como modelo histórico de capas.'),
    ref(tls13, 'IETF RFC 8446, TLS 1.3: especificación vigente de TLS; los protocolos de aplicación se apoyan en TLS y este utiliza un transporte subyacente, habitualmente TCP.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 115: arquitectura TCP/IP y protocolos de red.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema II.8: modelo TCP/IP, capas y protocolos.'),
    ref(academy42, 'ITIC Academy, bloque 42 «Redes», actualización 2026: redes y protocolos; correspondencia curricular.'),
    ref(academy30, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de la información», versión 2026.1: protocolos y seguridad de servicios web; apoyo curricular.')
  ], null, 'Respuesta C en el modelo TCP/IP didáctico clásico: entre aplicación y TCP. Se marca histórica porque SSL está obsoleto y TLS es su sucesor; TLS 1.3 se define actualmente en RFC 8446. La clasificación es una abstracción de capas, no una capa nativa única del modelo TCP/IP.', 'historica'],
  [5058, ['77'], ['II-9'], ['XML', 'HTML5', 'lenguajes de marcado', 'sintaxis y marcado'], [
    ref(html, 'WHATWG HTML Living Standard: trata HTML como un lenguaje con sintaxis y reglas propias; la especificación distingue HTML de XML y no los equipara como parsers/sintaxis.'),
    ref(xml, 'W3C, Extensible Markup Language (XML) 1.0: especificación del lenguaje de marcado extensible.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 77: HTML, CSS, XML y compatibilidad con estándares web.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema II.9: lenguajes de marca y funcionalidades de HTML/XML.'),
    ref(academy30, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de la información», versión 2026.1: HTML y tecnologías web; correspondencia curricular.')
  ], null, 'Respuesta C: ambos son lenguajes de marcado. HTML5 no se basa en JavaScript, no depende de HTTP como propiedad definitoria y no es conforme a SOAP. Que los dos sean de marcado no implica que HTML use sintaxis XML: WHATWG especifica HTML como lenguaje con reglas propias.', 'vigente'],
  [5059, ['96'], ['III-7'], ['Selenium', 'automatización web', 'WebDriver', 'pruebas funcionales'], [
    ref(selenium, 'Selenium Project, presentación oficial: Selenium automatiza navegadores y se utiliza principalmente para automatizar pruebas de aplicaciones web; WebDriver permite crear suites de pruebas de navegador.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 96: herramientas y técnicas de pruebas de software.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema III.7: pruebas de software y utilización de herramientas.'),
    ref(academy39, 'ITIC Academy, bloque 39 «Calidad y mantenimiento», versión 2026: automatización y pruebas; correspondencia curricular.'),
  ], null, 'Respuesta D: Selenium. Selenium WebDriver automatiza navegadores para ejecutar pruebas de aplicaciones web y permite organizar suites de regresión escalables. Git controla versiones, iTop gestiona servicios/activos y Ozone no es la suite de automatización de navegador descrita.', 'vigente'],
  [5060, ['106'], [], ['ITIL v3', 'Service Strategy', 'Service Design', 'gestión de catálogo de servicios'], [
    ref(itilSD, 'AXELOS/PeopleCert, ITIL Intermediate Qualification: Service Design Certificate Syllabus, §2.3, procesos de diseño, incluye Service Catalogue Management; en la taxonomía del ciclo de vida v3 no pertenece a Service Strategy.'),
    ref(itilGlossary, 'AXELOS, ITIL Glossary of Terms English v1.0 (2011), voz “service design”: enumera Service Catalogue Management entre sus procesos; fuente de terminología de la edición citada.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 106: bases de ITIL y gestión de servicios TIC.'),
    ref(academy41, 'ITIC Academy, bloque 41 «ITIL y COBIT», actualización 2026: correspondencia de ITIL con el temario; el ítem se trata como clasificación de ITIL v3, no como terminología actual de ITIL 4.')
  ], null, 'Respuesta D: gestión del catálogo de servicios pertenecía a Service Design, no a Service Strategy, en la taxonomía ITIL v3/2011. Gestión financiera, portfolio y demanda sí se incluyen en Service Strategy. Se clasifica como histórica porque pregunta expresamente por ITIL v3 y no debe proyectarse esta estructura de procesos sobre ITIL 4.', 'historica']
];

const edits = {
  5056: { texto: 'Según la JSR 224, ¿qué especificación Java representa la generación que sustituyó a JAX-RPC 1.0 para los servicios web XML basados en SOAP?' },
  5057: { texto: 'En el modelo didáctico clásico TCP/IP para conexiones SSL sobre TCP —SSL, hoy obsoleto, antecedente de TLS—, ¿entre qué niveles se sitúa conceptualmente?' },
  5058: { texto: 'XML y HTML (incluida su versión HTML5) se caracterizan porque ambos:' },
  5059: { texto: '¿Qué herramienta automatiza navegadores y permite crear suites de pruebas para aplicaciones web?' },
  5060: { texto: 'En la taxonomía histórica de ITIL v3/2011, ¿cuál de estos procesos NO correspondía a la etapa Service Strategy?' }
};

aplicar({ numero: '947', fecha: '2026-11-11', records, edits });
