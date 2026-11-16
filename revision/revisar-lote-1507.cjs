const apply = require('./aplicar-lote.cjs');

const darpa = 'https://www.darpa.mil/about/innovation-timeline/tcp-ip';
const isoc = 'https://www.internetsociety.org/internet/history-internet/brief-history-internet-related-networks/';
const iso = 'https://www.iso.org/obp/ui/?_escaped_fragment_=iso%3Astd%3Aiso-iec%3A25010%3Aed-1%3Av1%3Aen';
const iso2023 = 'https://www.iso.org/standard/78176.html';
const frames = 'https://oro.open.ac.uk/64389/1/C477542.pdf';
const rfc = 'https://www.ietf.org/process/process/';
const rfcEditor = 'https://www.ietf.org/about/groups/rfc-editor/';
const ec2 = 'https://aws.amazon.com/ec2/';
const iaas = 'https://aws.amazon.com/what-is/iaas/';

const records = [
  [7836, [109], ['II-8'], ['historia de Internet', 'TCP/IP', 'DARPA', 'ARPANET'], [
    { url: darpa, referencia: 'DARPA, TCP/IP innovation timeline: Robert Kahn, desde DARPA, solicitó a Vinton Cerf colaborar en nuevos protocolos de comunicación de paquetes para ARPANET; de ese proyecto resultó TCP/IP.' },
    { url: isoc, referencia: 'Internet Society, A Brief History of the Internet & Related Networks: DARPA inició el programa de investigación de interconexión de redes que produjo la suite TCP/IP.' }
  ], { texto: '¿Qué organismo encargó a Robert Kahn y Vinton Cerf colaborar en el desarrollo de protocolos para interconectar redes de paquetes como ARPANET?', opciones: ['ARPANET, la red de investigación, como organismo financiador.','El Internet Architecture Board (IAB), que ya publicaba los RFC.','DARPA, mediante su programa de investigación de interconexión de redes.','CERN, como desarrollador de la implementación final de TCP/IP.'], respuesta_correcta: 2 }, 'Corregida C. La pregunta original mezclaba desarrollo, financiación y publicación y podía inducir a error sobre el papel histórico de ARPANET y del IAB. DARPA impulsó y financió el programa; Kahn y Cerf diseñaron los protocolos. CERN no fue el desarrollador de TCP/IP.', 'corregida'],
  [7837, [98], ['III-13'], ['portabilidad', 'calidad del software', 'compatibilidad entre plataformas', 'ISO/IEC 25010'], [
    { url: iso, referencia: 'ISO/IEC 25010:2011, definición de portabilidad: capacidad de transferir un sistema/producto entre entornos de hardware, software u operación.' },
    { url: iso2023, referencia: 'ISO/IEC 25010:2023, modelo vigente de calidad del producto: revisa el modelo de 2011 y organiza estas capacidades bajo el modelo actualizado de flexibilidad; la pregunta conserva explícitamente el concepto clásico de portabilidad.' }
  ], { texto: 'En la terminología clásica de calidad del software, ¿cómo se denomina la capacidad de transferir una aplicación para que funcione en distintos entornos de hardware o software?', opciones: ['Adaptabilidad: capacidad de ajustarla a requisitos o entornos cambiantes.','Portabilidad.','Interoperabilidad: intercambio de información y uso mutuo de esa información entre productos.','Escalabilidad: capacidad de aumentar capacidad o carga soportada.'], respuesta_correcta: 1 }, 'Corregida B. La definición clásica de portabilidad es transferir un producto entre entornos. No debe confundirse con interoperabilidad (intercambio y uso mutuo de información) ni con adaptabilidad. Se conserva la pregunta como terminología clásica de calidad: ISO/IEC 25010:2023 actualizó el modelo y sustituyó “portabilidad” como característica de alto nivel por “flexibilidad”.', 'corregida'],
  [7838, [70], ['III-5'], ['inteligencia artificial', 'representación del conocimiento', 'marcos', 'frames', 'slots'], [
    { url: frames, referencia: 'Open University, Knowledge Representation Paradigms, §2.5 Frame Knowledge Representation: los frames agrupan conocimiento sobre atributos de entidades/objetos; sus slots contienen valores, valores por defecto y otra información asociada.' }
  ], { texto: 'En representación simbólica del conocimiento mediante marcos (frames), ¿qué papel desempeñan los slots?', opciones: ['Representan exclusivamente las relaciones de herencia entre redes semánticas, sin atributos.','Almacenan atributos de la entidad o situación representada y pueden contener valores, valores por defecto o restricciones.','Son reglas deductivas que solo describen procedimientos de ejecución.','Expresan necesariamente una relación de equilibrio entre predicados.'], respuesta_correcta: 1 }, 'Corregida B. Un frame organiza conocimiento sobre una entidad, clase o situación; sus slots representan atributos/relaciones y pueden asociar valores y otros datos. La formulación evita la afirmación absoluta de que un marco contiene “toda” información posible.', 'corregida'],
  [7839, [109], ['II-8'], ['RFC', 'IETF', 'estándares de Internet', 'RFC Editor'], [
    { url: rfc, referencia: 'IETF, Guide to the IETF standards process: los documentos de estándares de Internet aprobados por el proceso IETF pasan al RFC Editor para edición y publicación.' },
    { url: rfcEditor, referencia: 'IETF, RFC Editor: la función RFC Editor comprende la gestión editorial, publicación y archivo de los RFC; la serie incluye documentos de varios streams, no solo de IETF.' }
  ], { texto: '¿Qué organización desarrolla, mediante un proceso abierto de consenso, los estándares de Internet que se documentan en el stream IETF de la serie RFC?', opciones: ['W3C.','IEEE.','IETF.','IEC.'], respuesta_correcta: 2 }, 'Corregida C. Se distingue el desarrollo de estándares por la comunidad IETF de la función editorial de publicar la serie RFC, que corresponde al RFC Editor/RFC Production Center. Además, la serie RFC también incluye documentos de otros streams; no todos son publicaciones de IETF.', 'corregida'],
  [7840, [55], ['II-1'], ['AWS', 'Amazon EC2', 'IaaS', 'cloud computing'], [
    { url: ec2, referencia: 'Amazon Web Services, Amazon EC2: servicio que proporciona capacidad informática bajo demanda como instancias virtuales configurables.' },
    { url: iaas, referencia: 'Amazon Web Services, What is IaaS?: EC2 figura como ejemplo de Infrastructure as a Service; el cliente selecciona recursos de cómputo, almacenamiento, red y sistema operativo.' }
  ], { texto: '¿A qué modelo de servicio cloud se adscribe principalmente Amazon EC2 cuando ofrece instancias de cómputo virtual bajo demanda?', opciones: ['Content as a Service (CaaS).','Software as a Service (SaaS).','Infrastructure as a Service (IaaS).','Platform as a Service (PaaS).'], respuesta_correcta: 2 }, 'Vigente C. EC2 proporciona instancias de cómputo y recursos de infraestructura configurables bajo demanda; no es principalmente una aplicación final SaaS ni una plataforma PaaS gestionada.', 'vigente']
];

apply({ numero: '1507', fecha: '2026-11-16', records });
