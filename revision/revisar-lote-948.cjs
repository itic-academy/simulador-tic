const aplicar = require('./aplicar-lote.cjs');

const ref = (url, referencia) => ({ url, referencia });
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy30 = 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const academy34 = 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk';
const academy36 = 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk';
const academy50 = 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk';
const euMiCA = 'https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=OJ%3AL%3A2023%3A150%3AFULL';
const ecCrypto = 'https://finance.ec.europa.eu/digital-finance/crypto-assets_en';
const jaxrs = 'https://jcp.org/aboutJava/communityprocess/final/jsr370/index.html';
const eidas = 'https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02014R0910-20241018';
const rtsp = 'https://www.rfc-editor.org/rfc/rfc7826.html';
const powerbi = 'https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualizations-overview';
const qlik = 'https://www.qlik.com/us/data-visualization';
const tableau = 'https://www.tableau.com/visualization';

const records = [
  [5061, ['85'], [], ['blockchain', 'tokenización', 'criptoactivo', 'representación digital de valor o derechos'], [
    ref(euMiCA, 'Reglamento (UE) 2023/1114 (MiCA), art. 3.1.5: define criptoactivo como representación digital de un valor o de un derecho transferible y almacenable electrónicamente mediante DLT o tecnología similar.'),
    ref(ecCrypto, 'Comisión Europea, Crypto-assets: describe los criptoactivos como representaciones digitales de valor o derechos que pueden transferirse o almacenarse electrónicamente usando DLT o tecnología similar.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 85: blockchain, redes, consenso, smart contracts y EBSI.'),
    ref(academy30, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1: el mapa incluye expresamente A1-85 (blockchain/EBSI); encuadre curricular.')
  ], null, 'Se corrige la generalización de la opción D. En tokenización, un token puede representar digitalmente valor o derechos asociados a un activo físico o lógico, pero no todo token es una representación de un objeto subyacente. La clave sigue siendo D en el contexto de tokenización; se precisa el enunciado y se evita atribuir a todas las blockchains un mecanismo universal de multicast.', 'corregida'],
  [5062, ['67'], ['III-10', 'III-12'], ['JAX-RS', 'Jakarta REST', 'Jersey', 'servicios web Java'], [
    ref(jaxrs, 'Java Community Process, JSR 370 (JAX-RS 2.1): especificación Java para servicios web RESTful; enlaza Jersey como implementación de referencia y TCK.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 67: entorno de desarrollo JAVA.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, temas III.10 (plataforma Java EE/Jakarta EE) y III.12 (servicios web).'),
    ref(academy30, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1: Java/Jakarta EE y servicios web; correspondencia curricular.')
  ], null, 'Respuesta B: Jersey. La JSR 370 vincula Jersey con la implementación de referencia y el kit de compatibilidad de JAX-RS 2.1. Se corrigen la mayúscula impropia y la errata en el enunciado. El nombre actual del estándar evolucionó a Jakarta REST; la pregunta conserva los nombres JAX-RS/JAX-WS de la especificación histórica.', 'historica'],
  [5063, ['80'], ['I-6'], ['eIDAS', 'listas de confianza', 'trusted lists', 'Estados miembros', 'firma y sello electrónico'], [
    ref(eidas, 'EUR-Lex, Reglamento (UE) 910/2014 consolidado tras la modificación por Reglamento (UE) 2024/1183, art. 22.1–2: cada Estado miembro establece, mantiene y publica su lista nacional; la lista debe estar firmada/sellada electrónicamente y ser apta para tratamiento automático.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 80: identificación y firma electrónica, marco europeo.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema I.6: régimen jurídico de identidad y firma electrónica, Reglamento eIDAS.'),
    ref(academy36, 'ITIC Academy, bloque 36 «Seguridad, criptografía, identificación y firma», versión 2026.1: eIDAS, certificados y servicios de confianza; correspondencia curricular.')
  ], null, 'Respuesta B: cada Estado miembro de la Unión Europea publica su propia lista nacional de confianza. La Comisión recibe la notificación del organismo responsable y ubicación (art. 22.3), pero no sustituye a los Estados en la publicación de la lista. La afirmación sigue vigente con el texto consolidado tras eIDAS 2.', 'vigente'],
  [5064, ['130'], ['IV-16'], ['RTSP', 'capa de aplicación', 'streaming', 'control de sesiones multimedia'], [
    ref(rtsp, 'IETF RFC 7826 (RTSP 2.0), resumen y §1: califica expresamente RTSP como protocolo de capa de aplicación para establecer y controlar la entrega de datos multimedia en tiempo real; reemplaza RFC 2326.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 130: sistemas de videoconferencia y streaming de vídeo.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema IV.16: sistemas de videoconferencia y protocolos.'),
    ref(academy50, 'ITIC Academy, bloque 50 «Videoconferencia, Single Sign-On y herramientas de trabajo colaborativo», temario 2026: streaming y protocolos multimedia; correspondencia curricular.')
  ], null, 'Respuesta D: aplicación. RTSP controla la sesión/entrega de medios en tiempo real; el transporte de los flujos puede emplear protocolos inferiores como RTP. Se corrige «Re& Time» por «Real-Time» y se actualiza la referencia de RFC 2326 a RTSP 2.0 (RFC 7826).', 'corregida'],
  [5065, ['71'], ['II-4'], ['visualización de datos', 'Power BI', 'Qlik', 'Tableau', 'inteligencia de negocio'], [
    ref(powerbi, 'Microsoft Learn, Power BI visualizations: las visualizaciones son componentes básicos de informes y permiten convertir datos y medidas en información visual.'),
    ref(qlik, 'Qlik, Data Visualization: presenta Qlik como plataforma/herramienta de visualización de datos y describe sus gráficos y dashboards.'),
    ref(tableau, 'Tableau, Data Visualization: describe Tableau y sus herramientas para crear, explorar y presentar visualizaciones de datos.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 71: ciencia de datos y visualización de datos.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema II.4: inteligencia de negocios, cuadros de mando y sistemas de soporte a decisiones.'),
    ref(academy34, 'ITIC Academy, bloque 34 «Business Intelligence y Big Data», versión 2026: herramientas de BI y visualización; encuadre curricular.')
  ], null, 'Respuesta D: todas las anteriores. Power BI, Qlik y Tableau incluyen capacidades de visualización y presentación gráfica de datos. Se conserva la clave; la clasificación temática se enlaza con ciencia de datos/visualización (A1) e inteligencia de negocio (A2).', 'vigente']
];

const edits = {
  5061: { texto: 'En un sistema de tokenización sobre blockchain, ¿qué puede representar un token digital?', opcion: [3, 'Una representación digital de valor o de derechos asociados a un activo, físico o lógico, conforme a las reglas del sistema.'] },
  5062: { texto: '¿Qué implementación Java implementa la API JAX-RS (actualmente Jakarta REST) para servicios web RESTful?' },
  5064: { texto: 'RTSP (Real-Time Streaming Protocol), protocolo para controlar sesiones de streaming, pertenece a la capa de:' }
};

aplicar({ numero: '948', fecha: '2026-11-11', records, edits });
