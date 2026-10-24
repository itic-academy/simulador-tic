const apply = require('./aplicar-lote.cjs');

const records = [
  [1411, [115], ['II-8'], ['NAT', 'NAPT', 'traducción de direcciones', 'ámbitos de direccionamiento', 'redes IP'],
    [{ url: 'https://www.rfc-editor.org/rfc/rfc2663.html', referencia: 'RFC 2663, §§2.2, 3 y 3.1: NAT traduce direcciones entre ámbitos (realms); el vínculo puede ser estático o dinámico y algunas variantes traducen identificadores de transporte.' }, { url: 'https://www.rfc-editor.org/rfc/rfc3022.html', referencia: 'RFC 3022, resumen y §§2–4: distingue Basic NAT, que traduce direcciones IP, y NAPT, que además traduce identificadores de transporte.' }], null,
    'Se reemplaza la lista de afirmaciones parcialmente falsas. NAT traduce direcciones entre ámbitos con direccionamientos distintos; las asociaciones pueden ser estáticas o dinámicas, y NAPT también modifica identificadores de transporte (por ejemplo, puertos). No es un sistema de control de acceso de dispositivos, ni toda traducción se limita a convertir direcciones privadas en públicas. Cotejo: ITIC Academy, bloques 42 Redes y 43 Protocolos, versión 2026.1 (29-09-2026), NAT, direccionamiento y encaminamiento. Correspondencia oficial: A1-115 y A2-II-8.', 'corregida'],
  [1412, [118], ['IV-8'], ['gestión de redes', 'monitorización', 'Nagios', 'OpenStack', 'Neutron'],
    [{ url: 'https://www.cisco.com/c/en/us/td/docs/net_mgmt/prime/network_control_system/1-1/user/guide/prime_ncs_wan_ug/intro.html', referencia: 'Cisco, documentación de Prime Infrastructure: Cisco Prime Network Control System (NCS) figura como producto retirado; la guía relaciona el producto con gestión de redes Cisco.' }, { url: 'https://www.nagios.com/products/nagios-xi/', referencia: 'Nagios XI, descripción oficial: monitorización de infraestructura y redes, hosts, servicios y dispositivos.' }, { url: 'https://docs.redhat.com/en/documentation/red_hat_openstack_platform/17.0/html/networking_guide/networking-overview_rhosp-network', referencia: 'Red Hat OpenStack Platform Networking Guide, cap. 1: Neutron es el componente SDN de RHOSP y administra conectividad, enrutamiento, segmentación, switches, routers, puertos y firewalls virtuales.' }], null,
    'Se corrige el enunciado, porque “herramienta de gestión de redes” era demasiado amplio: Red Hat OpenStack incluye Neutron, un servicio de red que administra redes virtuales, y no es correcto presentarlo sin matices como incapaz de gestionar redes. La pregunta ahora distingue las suites de gestión/monitorización de redes (Cisco Prime NCS, HP OpenView y Nagios) de una plataforma cloud cuya función de red se presta mediante Neutron. Cisco identifica NCS como producto retirado; se conserva como referencia histórica del banco. Cotejo: ITIC Academy, bloque 42 Redes, versión 2026.1, gestión/monitorización y servicios de red. Correspondencia oficial: A1-118 y A2-IV-8.', 'corregida'],
  [1413, [109], ['IV-13'], ['intranet', 'extranet', 'red privada', 'servicios internos'],
    [{ url: 'https://csrc.nist.gov/glossary/term/intranet', referencia: 'NIST CSRC Glossary, término intranet (CNSSI 4009-2022): red informática, especialmente basada en tecnologías Internet, que una organización usa para fines internos y generalmente privados y cerrada a terceros.' }], null,
    'Se elimina la definición que reducía intranet exclusivamente a un portal web: puede incluir una red/servicios internos y no se define por ser solo un sitio web. Se adopta la formulación del glosario NIST: red de una organización, especialmente basada en tecnologías Internet, para fines internos y generalmente privada. Se diferencia de una extranet destinada a habilitar acceso externo controlado. Cotejo: ITIC Academy, bloque 42 Redes, redes internas y servicios de organización, versión 2026.1. Correspondencia oficial: A1-109 y A2-IV-13.', 'corregida'],
  [1414, [109, 111], ['II-8'], ['IMAP4', 'IMAP4rev2', 'POP3', 'correo electrónico', 'buzón remoto'],
    [{ url: 'https://www.rfc-editor.org/rfc/rfc9051.html', referencia: 'RFC 9051, resumen y §§2, 6.4.5: IMAP4rev2 accede y manipula mensajes en un servidor; permite seleccionar y obtener atributos, partes o textos de mensajes y sincronización de clientes desconectados.' }, { url: 'https://www.rfc-editor.org/rfc/rfc1939.html', referencia: 'RFC 1939, resumen y §§4–5: POP3 es un protocolo distinto para obtener correo desde un servidor; no define IMAP.' }], null,
    'Se conserva la respuesta, pero se precisa “no es necesario descargar el buzón completo”: IMAP permite consultar y obtener selectivamente mensajes, atributos o partes desde el servidor, aunque un cliente puede descargar/cachéar contenido para leerlo y sincronizarlo. RFC 1939 define POP3, no IMAP; ambos son protocolos distintos y un servicio puede ofrecer los dos. La referencia vigente de IMAP4 es RFC 9051 (IMAP4rev2), que obsoleta RFC 3501. Cotejo: ITIC Academy, bloque 43 Protocolos, servicios de correo y protocolos de aplicación, versión 2026.1. Correspondencia oficial: A1-109/111 y A2-II-8.', 'corregida'],
  [1415, [65, 77], ['III-12'], ['PWA', 'Progressive Web App', 'service worker', 'caché', 'funcionamiento sin conexión'],
    [{ url: 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation', referencia: 'MDN, Offline and background operation: el funcionamiento sin conexión se implementa mediante service workers que interceptan solicitudes y pueden servir recursos desde Cache.' }, { url: 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable', referencia: 'MDN, Making PWAs installable: instalar una PWA no exige un service worker; muchos lo usan para ofrecer experiencia offline. La instalación no implica distribución obligatoria por una tienda.' }, { url: 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Reference', referencia: 'MDN, Progressive Web Apps reference: describe Web APIs y tecnologías que una PWA puede utilizar para integrarse con capacidades del dispositivo.' }], null,
    'Se mantiene la idea de que una PWA puede funcionar sin conexión, pero se evita presentarlo como propiedad automática: para ello la aplicación debe implementar una estrategia offline, normalmente mediante service worker y recursos almacenados en caché. Las PWAs se construyen con tecnologías web; no requieren un lenguaje nativo por sistema operativo ni distribución obligatoria mediante tienda. El acceso a capacidades del dispositivo depende de las Web APIs y permisos disponibles. Cotejo: ITIC Academy, bloque de desarrollo web/front-end, versión 2026.1; clasificación por arquitectura y diseño de aplicaciones web multiplataforma. Correspondencia oficial: A1-65/77 y A2-III-12.', 'corregida']
];

apply({ numero: '219', fecha: '2026-10-24', records, edits: {
  1411: { texto: '¿Qué afirmación describe correctamente la traducción de direcciones de red (NAT)?', opciones: [
    'NAT traduce direcciones IP entre ámbitos de direccionamiento; según la variante, la asociación puede ser estática o dinámica y NAPT puede traducir también identificadores de transporte.',
    'NAT es un mecanismo de control de acceso que pone en cuarentena los equipos que incumplen una política de seguridad.',
    'Toda traducción NAT convierte necesariamente una dirección privada en una dirección pública única y nunca puede operar entre otros ámbitos de direcciones.',
    'El NAT dinámico consiste siempre en configurar manualmente una asociación fija de una dirección interna con otra externa.'
  ], respuesta_correcta: 0 },
  1412: { texto: '¿Cuál de estas opciones identifica una plataforma cloud que incorpora un servicio específico de red virtual, en lugar de una suite dedicada de gestión o monitorización de redes?', opciones: [
    'Cisco Prime Network Control System.',
    'HP OpenView.',
    'Nagios.',
    'Red Hat OpenStack Platform, mediante su servicio Networking (Neutron).' 
  ], respuesta_correcta: 3 },
  1413: { texto: '¿Qué describe mejor una intranet?', opciones: [
    'Una red de una organización, normalmente basada en tecnologías Internet, destinada a usos internos y generalmente privada; puede ofrecer portales, aplicaciones y otros servicios.',
    'Un portal web corporativo, que por definición es el único componente de una intranet.',
    'Una red cuyo fin es proporcionar a usuarios y organizaciones externos acceso controlado a servicios internos; ese concepto corresponde a una extranet.'
  ], respuesta_correcta: 0 },
  1414: { texto: '¿Qué afirmación sobre IMAP4 es correcta?', opciones: [
    'IMAP4 está definido por RFC 1939, que especifica cómo descargar mensajes mediante POP3.',
    'IMAP permite acceder a buzones alojados en el servidor y obtener selectivamente mensajes o partes; el cliente puede almacenarlos en caché, pero no tiene que descargar previamente el buzón completo.',
    'IMAP es una extensión de POP3 que permite leer con POP3 los mensajes y carpetas de cualquier servidor IMAP.'
  ], respuesta_correcta: 1 },
  1415: { texto: '¿Cuál de estas afirmaciones describe correctamente una capacidad posible de una PWA (Progressive Web App)?', opciones: [
    'Debe programarse en un lenguaje nativo distinto para cada sistema operativo.',
    'Puede ofrecer funcionamiento sin conexión si implementa, por ejemplo, un service worker y una estrategia de almacenamiento en caché; no es una capacidad automática de toda PWA.',
    'Por ser una aplicación web, no puede utilizar ninguna API del dispositivo.',
    'Debe distribuirse obligatoriamente a través de una tienda de aplicaciones.'
  ], respuesta_correcta: 1 }
}});
