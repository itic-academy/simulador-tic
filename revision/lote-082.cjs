const records = [
  [726,[132],['IV-6'],['virtualización','Xen','consolidación','centro de datos'],[
    {url:'https://www.ibm.com/support/pages/zvm/history/50th/index.html?lnk=hm',referencia:'IBM, VM 50th Anniversary: CP-40 y CP-67 se desarrollaron a mediados de los años sesenta; VM/370 se anunció en 1972.'},
    {url:'https://www.energy.gov/sites/default/files/2024-07/best-practice-guide-data-center-design.pdf',referencia:'U.S. Department of Energy, Best Practices Guide for Energy-Efficient Data Center Design, rev. julio de 2024, § 2.6.2: virtualizar puede permitir consolidar cargas en menos servidores y reducir potencia/carga de refrigeración; el resultado depende del caso.'},
    {url:'https://www.cl.cam.ac.uk/research/srg/netos/projects/archive/xen/',referencia:'University of Cambridge Computer Laboratory, Xen: hipervisor x86 de código abierto, publicado bajo GPL; proyecto desarrollado en el Computer Laboratory.'},
    {url:'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-125B.pdf',referencia:'NIST SP 800-125B, Secure Virtual Network Configuration for Virtual Machine (VM) Protection: configuración y recursos de máquinas virtuales; la virtualización no implica por sí misma reducir la memoria total necesaria.'}
  ],null,'Se mantiene B. IBM documenta que CP-40/CP-67 datan de mediados de los años sesenta, antes de la popularización de la virtualización en servidores x86. La virtualización permite consolidar cargas y puede reducir consumo eléctrico en determinados despliegues, pero requiere memoria para huéspedes e hipervisor y no garantiza un menor consumo total de RAM. Xen es un hipervisor de código abierto originado en el Computer Laboratory de Cambridge. La afirmación falsa es el supuesto ahorro inherente de RAM.', 'corregida'],
  [727,[77],['II-16'],['Atom','RFC 4287','XML','sindicación de contenido'],
    'https://www.rfc-editor.org/rfc/rfc4287', 'RFC 4287, § 1: Atom es un formato XML de sindicación de contenido y metadatos web.', 'Se mantiene B. Se concreta la referencia al formato Atom definido por RFC 4287: es un formato XML para sindicar contenido y metadatos web. No debe confundirse con Atom Publishing Protocol, que es otro protocolo.', 'corregida'],
  [728,[18],['I-6'],['brecha digital','uso de Internet','Fundación Telefónica','2022','serie histórica'],
    'https://publiadmin.fundaciontelefonica.com/media/publicaciones/780/Sociedad_Digital_en_Espana_2023.pdf', 'Fundación Telefónica, Sociedad Digital en España 2023, p. 107: los tres enunciados corresponden a indicadores de uso de Internet en 2022 comparados con 2021; el informe concluye que la opción D es correcta.', 'Todas las respuestas son correctas según los datos de uso de Internet de 2022 que recoge el informe de 2023. Se conserva como pregunta histórica: sus porcentajes describen una serie temporal cerrada y no deben interpretarse como indicadores actuales.', 'historica'],
  [729,[18],['I-6'],['UIT','Índice de Acceso Digital','IAD','DAI','serie histórica'],
    'https://www.itu.int/ITU-D/ict/dai/', 'UIT, Digital Access Index (DAI): índice lanzado en 2003 para medir la capacidad general de las personas de un país para acceder a las TIC y utilizarlas.', 'Se mantiene B. La denominación española es Índice de Acceso Digital (IAD), equivalente al Digital Access Index (DAI) de la UIT. La pregunta queda fechada en el índice presentado en 2003; no se afirma que sea el indicador vigente de la UIT.', 'historica'],
  [730,[18],['I-6'],['DESI','Comisión Europea','España','2022','serie histórica'],
    'https://digital-strategy.ec.europa.eu/en/policies/desi-spain', 'Comisión Europea, Spain in the Digital Economy and Society Index, publicación DESI 2022: España figura en el puesto 7, con puntuación 60,8. Desde 2023, el seguimiento se integra en los informes State of the Digital Decade.', 'Se mantiene A. La respuesta es el puesto 7 en la edición DESI 2022 de la Comisión Europea. Se etiqueta como histórica porque es un resultado de una edición cerrada; desde 2023 la Comisión integra el seguimiento DESI en los informes State of the Digital Decade.', 'historica']
];
const edits = {
  726: {texto:'Respecto a la virtualización, señale la afirmación falsa:', opciones:[
    'La virtualización de sistemas ya se utilizaba en mainframes antes de generalizarse en servidores x86.',
    'La virtualización reduce necesariamente la cantidad total de memoria RAM física requerida por las mismas cargas, incluso contando el hipervisor.',
    'La consolidación de servidores mediante virtualización puede reducir el consumo eléctrico, según la utilización y el dimensionamiento.',
    'Xen es un hipervisor de código abierto originado en el Computer Laboratory de la Universidad de Cambridge.'
  ]},
  727: {texto:'Según RFC 4287, ¿qué es Atom?', opciones:[
    'Un sistema de análisis XML.',
    'Un formato XML de sindicación de contenido y metadatos web.',
    'Un lenguaje para intercambiar información financiera de empresas.',
    'Una sintaxis de una DTD.'
  ]},
  728: {texto:'Según los indicadores de uso de Internet de 2022 recogidos en el Informe Sociedad Digital en España 2023 de Fundación Telefónica, señale la respuesta correcta:'},
  729: {texto:'Según el Índice de Acceso Digital (IAD o DAI) presentado por la UIT en 2003, ¿qué mide este índice?'},
  730: {texto:'En la edición DESI 2022 de la Comisión Europea, ¿qué puesto ocupó España en la clasificación general entre los 27 Estados miembros?'}
};
require('./aplicar-lote.cjs')({numero:'082',fecha:'2026-10-22',records,edits});
