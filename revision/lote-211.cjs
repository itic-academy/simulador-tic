const apply = require('./aplicar-lote.cjs');

const sources = {
  soa: [
    { url: 'https://docs.oasis-open.org/soa-rm/soa-ra/v1.0/soa-ra-cd-02.html', referencia: 'OASIS, SOA Reference Architecture: define orquestación como proceso jerárquico coordinado por un agente conductor y coreografía como intercambios públicos ordenados entre pares; no son términos intercambiables.' },
    { url: 'https://www.oasis-open.org/committees/wsbpel/faq.php', referencia: 'OASIS WS-BPEL FAQ: diferencia entre orquestación desde el punto de vista de un actor y coreografía como interacción global entre participantes; BPEL es lenguaje de orquestación.' },
    { url: 'https://www.w3.org/TR/soap12-part1/', referencia: 'W3C Recommendation, SOAP Version 1.2 Part 1: Messaging Framework; SOAP es un protocolo de mensajería que puede emplearse en arquitecturas orientadas a servicios.' },
    { url: 'https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm', referencia: 'Roy Fielding, Architectural Styles and the Design of Network-based Software Architectures, capítulo 5: REST como estilo arquitectónico para sistemas hipermedia distribuidos; su uso no implica por sí solo que cualquier API sea SOA.' }
  ],
  dma: [
    { url: 'https://docs.kernel.org/6.3/core-api/dma-api-howto.html', referencia: 'Linux Kernel Documentation, Dynamic DMA mapping Guide: el dispositivo accede al buffer de memoria mediante una dirección DMA; CPU y driver preparan el mapeo y notifican al dispositivo, que realiza la transferencia sin copia/gestión de cada byte por la CPU.' },
    { url: 'https://docs.kernel.org/driver-api/dmaengine/provider.html', referencia: 'Linux Kernel Documentation, DMAengine: documenta transferencias memory-to-device, device-to-memory y memory-to-memory.' }
  ],
  wsl: [
    { url: 'https://learn.microsoft.com/en-us/windows/wsl/compare-versions', referencia: 'Microsoft Learn, Comparing WSL Versions: WSL 2 incluye un kernel Linux completo en una VM ligera; WSL 1 emplea una capa de traducción y no incluye ese kernel.' }
  ],
  tlb: [
    { url: 'https://docs.kernel.org/6.9/mm/page_tables.html', referencia: 'Linux Kernel Documentation, Page Tables: las tablas de páginas contienen la estructura de traducción; el MMU puede usar cachés pequeñas, Translation Lookaside Buffers, para acelerar la traducción virtual-física.' }
  ],
  sparc: [
    { url: 'https://csrc.nist.gov/files/pubs/conference/1994/10/11/proceedings-17th-national-computer-security-confer/final/docs/1994-17th-ncsc-proceedings-vol-1.pdf', referencia: 'NIST, Proceedings of the 17th National Computer Security Conference, vol. 1 (1994), figura y descripción de ANSI/SPARC: vistas externas, vista conceptual y vista interna/de implementación; puede haber múltiples vistas externas.' },
    { url: 'https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nbsspecialpublication500-76.pdf', referencia: 'NIST SP 500-76, Database architectures: describe los esquemas ANSI/X3/SPARC interno, conceptual y externo y caracteriza el externo como datos usados por grupos de aplicaciones.' }
  ]
};

const records = [
  [1371, [58], ['II-6'], ['SOA', 'orquestación', 'coreografía', 'SOAP', 'REST', 'servicios web'], sources.soa, null,
    'La clave B es válida con el alcance de que SOAP y REST pueden utilizarse para exponer servicios dentro de una solución SOA; el protocolo o estilo por sí solo no convierte cualquier API en SOA. Se aclara el enunciado y se reescriben los distractores: orquestación supone coordinación central de un proceso; coreografía describe intercambios acordados entre participantes sin conductor único. Cotejo con ITIC Academy, bloque 28 «Arquitectura SOA y requisitos no funcionales», versión 2026.1 (25-09-2026), temas A1-58 y A2-T6.', 'corregida'],
  [1372, [59], ['II-2', 'IV-1'], ['DMA', 'acceso directo a memoria', 'E/S', 'memoria'], sources.dma, null,
    'Se conserva la clave A, pero se acota «sin intervención de la CPU»: el procesador y el driver configuran la operación, preparan las direcciones y reciben la finalización; durante la transferencia DMA el dispositivo/controlador mueve los datos sin que la CPU gestione cada byte. No significa que nunca intervenga la CPU, que no se usen buses o que DMA elimine las interrupciones. Cotejo con ITIC Academy, bloque 27 «Sistemas Operativos», versión 2026.1 (14-08-2026), apartados de entrada/salida y DMA; programa A1-59 y A2-T2/C1.', 'corregida'],
  [1373, [61], ['II-2', 'IV-1'], ['Windows', 'WSL', 'WSL 2', 'kernel Linux', 'virtualización'], sources.wsl, null,
    'La opción D corresponde a Windows Subsystem for Linux, pero solo WSL 2 incorpora un kernel Linux real ejecutado en una máquina virtual ligera; WSL 1 utiliza una capa de traducción de llamadas al sistema. Se modifica el enunciado para identificar expresamente WSL 2 y evitar atribuir esa propiedad a todas las versiones de WSL. Cotejo con ITIC Academy, bloque 27 «Sistemas Operativos», versión 2026.1 (14-08-2026), temas A1-61 y A2-T2/C1.', 'corregida'],
  [1374, [59], ['II-2', 'IV-1'], ['memoria virtual', 'paginación', 'TLB', 'tabla de páginas', 'MMU'], sources.tlb, null,
    'La clave B identifica correctamente la TLB, pero el enunciado confundía la caché de traducciones con la tabla de páginas: la tabla mantiene las correspondencias virtual-físicas y la TLB conserva en caché traducciones recientes para acelerar su consulta. Se corrige el enunciado para preguntar por la caché. Cotejo con ITIC Academy, bloque 27 «Sistemas Operativos», versión 2026.1 (14-08-2026), apartado de memoria virtual y TLB; programa A1-59 y A2-T2/C1.', 'corregida'],
  [1375, [63], ['II-5'], ['bases de datos', 'ANSI/SPARC', 'esquema externo', 'vistas'], sources.sparc, null,
    'La opción C es correcta: el nivel externo ofrece vistas específicas para usuarios o grupos de aplicaciones y puede exponer solo la parte pertinente del esquema conceptual. El nivel conceptual representa globalmente la base de datos y el interno describe su organización de almacenamiento. Cotejo con ITIC Academy, bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1 (31-08-2026), temas A1-63 y A2-T5.', 'vigente']
];

apply({ numero: '211', fecha: '2026-10-24', records, edits: {
  1371: {
    texto: '¿Cuál de las siguientes afirmaciones sobre SOA y la composición de servicios es correcta?',
    opciones: [
      'La coreografía es un proceso jerárquico ejecutado y coordinado por un agente central que actúa como conductor.',
      'SOAP y REST pueden emplearse para exponer servicios en una solución SOA, aunque el uso de uno de ellos no convierte por sí solo una API en SOA.',
      'La orquestación describe únicamente los intercambios públicos acordados entre participantes autónomos y no tiene coordinador.',
      'La orquestación y la coreografía son sinónimos: ambas exigen que todos los participantes conozcan la implementación interna de los demás.'
    ],
    respuesta_correcta: 1
  },
  1372: { opcion: [0, 'Una técnica de entrada/salida en la que, tras ser configurada por la CPU, un controlador o dispositivo DMA transfiere bloques entre el dispositivo y la memoria sin que la CPU gestione cada byte.'] },
  1373: { texto: '¿Qué versión de Windows Subsystem for Linux (WSL) ejecuta un kernel Linux real en una máquina virtual ligera?', opcion: [3, 'WSL 2 (Windows Subsystem for Linux versión 2).'] },
  1374: { texto: 'En un sistema con memoria paginada, ¿cómo se denomina la caché hardware que conserva traducciones recientes de direcciones virtuales a físicas para acelerar la consulta de las tablas de páginas?', opcion: [1, 'TLB: Translation Lookaside Buffer.'] }
}});
