const aplicar = require('./aplicar-lote.cjs');

const ref = (url, referencia) => ({ url, referencia });
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy17 = 'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk';
const academy30 = 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const academy43 = 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk';
const academy48 = 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const sasExam = 'https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/sites/default/files/sincfiles/wsas-media-ooe_pb_listado/2023/49730_L.pdf';
const thymeleaf = 'https://www.thymeleaf.org/doc/tutorials/3.1/usingthymeleaf.html';
const bootstrap = 'https://getbootstrap.com/docs/5.2/getting-started/introduction/';
const jquery = 'https://jquery.com/';
const ccn812 = 'https://www.ccn-cert.cni.es/es/pdf/guias/series-ccn-stic/800-guia-esquema-nacional-de-seguridad/522-ccn-stic-812-seguridad-en-entornos-y-app-web/file.html';
const ccnUpdate = 'https://www.ccn-cert.cni.es/es/seguridad-al-dia/novedades-ccn-cert/12612-actualizada-la-guia-ccn-stic-812-sobre-seguridad-en-entornos-y-aplicaciones-web.html';
const nistScanners = 'https://www.nist.gov/itl/csd/secure-systems-and-applications/network-scanners';
const nist80036 = 'https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=151284';
const rfc4632 = 'https://www.rfc-editor.org/rfc/rfc4632.html';

const records = [
  [5031, ['65'], ['III-12'], ['MVC', 'capa de presentación', 'Thymeleaf', 'Bootstrap', 'jQuery', 'View2All'], [
    ref(sasExam, 'Cuadernillo oficial del SAS (Junta de Andalucía), examen de 11/11/2023, pregunta 38: acredita la procedencia y el texto del reactivo, pero no es evidencia independiente de que View2All exista o no exista.'),
    ref(thymeleaf, 'Documentación oficial de Thymeleaf: motor de plantillas Java para HTML y otros formatos; confirma que es una tecnología aplicable a vistas web.'),
    ref(bootstrap, 'Documentación oficial de Bootstrap: toolkit front-end con CSS y JavaScript y soporte de comportamiento responsive.'),
    ref(jquery, 'Sitio oficial de jQuery: biblioteca JavaScript para manipulación de documentos, eventos, efectos y Ajax.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 65: desarrollo web front-end y tecnologías de cliente/servidor.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.12: aplicaciones web, desarrollo front-end/servidor y componentes.'),
    ref(academy30, 'ITIC Academy, bloque 30, versión 2026.1 (31/08/2026): tecnologías de sistemas y software; cotejo curricular.')
  ], null, 'Se conserva la clave D como dato original del examen, pero queda pendiente de fuente: el cuadernillo confirma que el examen propuso “View2All” como distractor, no demuestra por sí mismo que no sea un framework. La documentación oficial consultada confirma el uso de Thymeleaf, Bootstrap y jQuery en el desarrollo web. No se localizó documentación primaria independiente para View2All; la ausencia en una búsqueda no prueba inexistencia, así que no se certifica la respuesta.', 'pendiente_fuente'],
  [5032, ['125'], ['IV-12'], ['escaneo de vulnerabilidades', 'evaluación de vulnerabilidades', 'seguridad de redes'], [
    ref(nistScanners, 'NIST, Network Scanners (página actualizada el 01/05/2026): los escáneres generales de red buscan vulnerabilidades conocidas en sistemas operativos, aplicaciones, servidores web, dispositivos y protocolos de red.'),
    ref(nist80036, 'NIST SP 800-36, §5.7.1: describe los escáneres de vulnerabilidades de red y su identificación de servicios y vulnerabilidades conocidas en hosts remotos.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 125: seguridad en redes y herramientas de prevención/detección.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.12: seguridad en redes y servicios.'),
    ref(academy48, 'ITIC Academy, bloque 48, versión 2026.1 (30/09/2026): seguridad en redes y en el nivel de aplicación; cotejo curricular.')
  ], null, 'La opción original “software de monitorización de servidores” no identifica de forma precisa la función de detectar vulnerabilidades conocidas: monitorizar disponibilidad, rendimiento o eventos no equivale a evaluar vulnerabilidades. Se sustituye la pregunta por una formulación que pregunta por la categoría técnica pertinente y se corrige la opción A a “Escáneres/herramientas de evaluación de vulnerabilidades”. La clave A se mantiene con una explicación verificable.', 'corregida'],
  [5033, ['35'], ['III-2'], ['planificación', 'toma de decisiones', 'criterios participativos'], [
    ref(a1, 'Convocatoria A1 GSI 2025, tema 35: dirección de proyectos, planificación, seguimiento y toma de decisiones.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.2: gestión y planificación del proceso de desarrollo y de proyectos.'),
    ref(academy17, 'ITIC Academy, bloque 17, versión 2026.2 (02/10/2026): análisis de alternativas, viabilidad y decisión; material curricular, no una norma que excluya métodos participativos.')
  ], null, 'Se conserva la clave C solo como dato del banco original. El reactivo no identifica un marco de planificación, procedimiento de control ni criterio de selección obligatorio. Someter alternativas a deliberación o votación del equipo puede ser un método participativo legítimo; por ello no se puede concluir universalmente que el «criterio democrático» no sea una acción básica sin contexto adicional. Pendiente de aclarar el marco y aportar una fuente primaria que respalde la clave.', 'pendiente_ambiguedad'],
  [5034, ['126'], ['III-12'], ['seguridad web', 'HTTP GET', 'HTTP POST', 'cabeceras HTTP', 'CCN-STIC-812'], [
    ref(ccn812, 'CCN-STIC-812, «Seguridad en entornos y aplicaciones web», apartado 4.6.1: la recomendación general distingue GET para consulta y POST para intercambio/envío; advierte que las cabeceras se manipulan y que la interacción entre componentes debe protegerse.'),
    ref(ccnUpdate, 'CCN-CERT, aviso de 19/06/2023: anunció la versión más reciente de CCN-STIC-812 y su adaptación al ENS regulado por RD 311/2022. La clave se contrasta con el material vigente publicado por CCN, sin atribuir vigencia normativa a cada detalle técnico de una guía.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 126: seguridad en aplicaciones, servicios web, bases de datos e interfaces.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.12: seguridad e interoperabilidad en aplicaciones web.'),
    ref(academy48, 'ITIC Academy, bloque 48, versión 2026.1 (30/09/2026): seguridad de red y aplicación; cotejo curricular.')
  ], null, 'Respuesta A (falsa). El enunciado invierte las recomendaciones GET/POST que CCN-STIC-812 formula expresamente: GET para consulta de información y POST para intercambiar/enviar información. Las demás opciones son consistentes con las recomendaciones citadas. Se conserva el texto histórico de la opción para que la respuesta falsa siga inequívoca; el aviso del CCN de 2023 confirma que publicó una versión actualizada, por lo que la cita se limita al contenido accesible de la guía, no a presentarlo como ley ni como norma técnica universal.', 'vigente'],
  [5035, ['115'], ['II-8'], ['IPv4', 'máscara de subred', 'CIDR', 'prefijo /20'], [
    ref(rfc4632, 'IETF RFC 4632, BCP 122: CIDR expresa el número de bits significativos del prefijo y separa explícitamente la parte de red del resto del espacio de dirección. La máscara 255.255.240.0 contiene 20 bits a uno (/20).'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 115: redes IP, arquitectura, direccionamiento y encaminamiento.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.8: TCP/IP, direccionamiento y encaminamiento.'),
    ref(academy43, 'ITIC Academy, bloque 43, versión 2026.1 (29/09/2026): protocolos, direccionamiento y redes; cotejo curricular.')
  ], null, 'Respuesta D. La máscara 255.255.240.0 equivale a /20. AND por octetos: 132 AND 255 = 132; 90 AND 255 = 90; 132 AND 240 = 128; 5 AND 0 = 0. La dirección de red es 132.90.128.0. Los bits de host restantes son el nibble bajo del tercer octeto (4) y el último octeto (5), es decir, “Host 4.5” en la convención usada por las opciones. Se conserva el enunciado y la clave.', 'vigente']
];

const edits = {
  5032: {
    texto: 'Para identificar vulnerabilidades conocidas en servidores y equipos conectados a una red, ¿qué tipo de herramienta se utiliza?',
    opcion: [0, 'Escáneres o herramientas de evaluación de vulnerabilidades.']
  }
};

aplicar({ numero: '942', fecha: '2026-11-11', records, edits });
