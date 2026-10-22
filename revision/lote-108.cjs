const records = [
  [856,[114],['IV-11'],['IEEE 802.11p','WAVE','comunicaciones vehiculares','estándar histórico'],[
    {url:'https://standards.ieee.org/ieee/802.11p/3953/',referencia:'IEEE SA, IEEE 802.11p-2010: amendment 6 especifica extensiones WLAN para comunicaciones en entorno vehicular; el registro la marca como superseded.'},
    {url:'https://standards.ieee.org/ieee/802.11/10548/',referencia:'IEEE SA, IEEE 802.11-2024: registra 802.11p-2010 como la enmienda Wireless Access in Vehicular Environments; el contenido se incorporó a ediciones posteriores de la norma base.'}
  ],null,'802.11p fue la enmienda WLAN para comunicaciones en entorno vehicular. IEEE la marca como sustituida: su contenido se integró en la norma base 802.11; por ello se conserva como respuesta histórica y no se presenta como una norma autónoma vigente.','historica'],
  [857,[118],['IV-8'],['IEEE 802.5','Token Ring','método de acceso por testigo','LAN histórica'],[
    {url:'https://standards.ieee.org/ieee/802.5/1102/',referencia:'IEEE SA, IEEE 802.5-1997: título del estándar especifica Token Ring Access Method and Physical Layer; el registro indica que está retirado.'},
    {url:'https://standards.ieee.org/faqs/maintenance/',referencia:'IEEE SA Maintenance FAQs: define «inactive-withdrawn» como estándar retirado de estado activo mediante votación de IEEE SA.'}
  ],null,'IEEE 802.5 corresponde a Token Ring. IEEE 802.3 es Ethernet y 802.4 fue la LAN de bus con testigo. Se conserva con estado histórico: IEEE identifica 802.5-1997 como retirado; el hecho de que hoy no se mantenga no cambia la respuesta histórica.','historica'],
  [858,[108,112],['IV-10','IV-11'],['IEEE 802.20','MBWA','acceso inalámbrico móvil de banda ancha','movilidad vehicular'],[
    {url:'https://standards.ieee.org/ieee/802.20/3380/',referencia:'IEEE SA, IEEE 802.20-2008: especifica la interfaz aérea para sistemas de acceso inalámbrico móvil de banda ancha con movilidad vehicular; el registro actual la clasifica como inactiva y retirada.'},
    {url:'https://standards.ieee.org/faqs/maintenance/',referencia:'IEEE SA Maintenance FAQs: explica los estados activo, sustituido e inactivo-retirado de sus estándares.'}
  ],null,'IEEE 802.20 definió MBWA (Mobile Broadband Wireless Access), una interfaz aérea de acceso inalámbrico móvil de banda ancha que admitía movilidad vehicular. No es IEEE 802.16/WiMAX. Se marca histórica porque la ficha oficial identifica 802.20-2008 como inactiva y retirada desde 2018.','historica'],
  [859,[111,118],['IV-8'],['STP','IEEE 802.1D','capa 2','prevención de bucles','RSTP'],[
    {url:'https://www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/10556-16.html',referencia:'Cisco, Troubleshoot STP Problems and Related Design Considerations: afirma que STP opera en la capa 2 y corta bucles creados por enlaces redundantes.'},
    {url:'https://www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/24062-146.html',referencia:'Cisco, Understand Rapid Spanning Tree Protocol (802.1w): explica los mecanismos de RSTP para transición rápida y convergencia frente a STP clásico.'}
  ],null,'Se acota la pregunta a STP clásico (IEEE 802.1D): opera en capa 2, crea una topología sin bucles mediante puertos bloqueados y no realiza encaminamiento IP entre nodos. La afirmación falsa es que permite encaminar. RSTP acelera la convergencia en condiciones compatibles; el tiempo real depende de la topología y configuración.','corregida'],
  [860,[108],['IV-7'],['DOCSIS 3.1','OFDM','OFDMA','SC-QAM','EuroDOCSIS'],[
    {url:'https://www.cablelabs.com/technologies/docsis-3-1',referencia:'CableLabs, DOCSIS 3.1: fecha la publicación inicial de la especificación en 2013 y describe su evolución de capacidad.'},
    {url:'https://account.cablelabs.com/server/alfresco/d2eb7f4e-5966-4023-99f5-6e44a812abca',referencia:'CableLabs, DOCSIS 3.1 Physical Layer Specification: especifica canales OFDM/OFDMA y la coexistencia con canales DOCSIS heredados SC-QAM.'},
    {url:'https://www.cablelabs.com/wp-content/uploads/2025/01/CableLabs-PKI-Onboarding-and-Delivery-Process-v2.pdf',referencia:'CableLabs, PKI Onboarding and Delivery Process (2025): indica que los equipos que conectan a redes DOCSIS 3.1 usan un certificado D3.1 común, sin certificado «EuroDOCSIS 3.1» separado.'}
  ],null,'Se formula una pregunta de afirmación correcta para eliminar la ambigüedad del original. DOCSIS 3.1 usa OFDM en bajada y OFDMA en subida; CableLabs publicó la especificación en 2013 y mantiene interoperabilidad con canales heredados SC-QAM. Por tanto, no elimina todos los canales de 6/8 MHz, «2016» no es la fecha de publicación inicial y no existe una certificación separada «EuroDOCSIS 3.1».','corregida']
];

const edits = {
  856:{texto:'¿Qué enmienda de IEEE 802.11 especificó extensiones WLAN para comunicaciones en un entorno vehicular (WAVE)?',opciones:['IEEE 802.11j.','IEEE 802.11k.','IEEE 802.11n.','IEEE 802.11p.'],respuesta_correcta:3},
  857:{texto:'¿Qué número de la familia IEEE 802 identificó el método de acceso LAN Token Ring (anillo con paso de testigo)?',opciones:['IEEE 802.3.','IEEE 802.4.','IEEE 802.5.'],respuesta_correcta:2},
  858:{texto:'¿Qué norma IEEE definió la interfaz aérea para sistemas de acceso inalámbrico móvil de banda ancha con movilidad vehicular (MBWA)?',opciones:['IEEE 802.20 aún no existe.','IEEE 802.16 define la norma general para redes inalámbricas metropolitanas de banda ancha.','IEEE 802.20 define la interfaz de acceso inalámbrico móvil de banda ancha (MBWA).','Ninguna de las anteriores.'],respuesta_correcta:2},
  859:{texto:'Sobre el STP clásico definido originalmente por IEEE 802.1D, ¿qué afirmación es falsa?',opciones:['Opera en la capa 2 de enlace.','Realiza encaminamiento IP entre nodos.','Evita bucles de capa 2 bloqueando caminos redundantes.','Su convergencia clásica suele ser más lenta que la de RSTP.'],respuesta_correcta:1},
  860:{texto:'¿Qué afirmación sobre DOCSIS 3.1 es correcta?',opciones:['Usa OFDM en bajada y OFDMA en subida.','Elimina la coexistencia con canales heredados SC-QAM de 6 u 8 MHz.','CableLabs publicó por primera vez la especificación en 2016.','Define un certificado independiente denominado «EuroDOCSIS 3.1».'],respuesta_correcta:0}
};

require('./aplicar-lote.cjs')({numero:'108',fecha:'2026-10-22',records,edits});
