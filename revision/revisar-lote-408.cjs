const apply = require('./aplicar-lote.cjs');

const sources = {
  emm: [
    { url: 'https://csrc.nist.gov/pubs/sp/800/124/r2/final', referencia: 'NIST SP 800-124 Rev. 2, Guidelines for Managing the Security of Mobile Devices in the Enterprise (2023), §4.2.1: EMM despliega, configura y administra dispositivos móviles; puede incluir MAM y otras tecnologías.' },
    { url: 'https://www.nccoe.nist.gov/publication/1800-22/VolB/index.html', referencia: 'NIST NCCoE SP 1800-22, Vol. B, §4.3.2: describe MAM para gestionar instalación/uso de aplicaciones organizativas y MCM para controlar cómo las aplicaciones gestionadas acceden y usan datos de la organización; trata escenarios BYOD.' }
  ],
  fiber: [
    { url: 'https://www.cisco.com/c/en/us/td/docs/solutions/Verticals/CPwE/5-1/Phy_Arch/CPwE-Physical-Infrastructure_Feb2023.pdf', referencia: 'Cisco, CPwE Physical Infrastructure Design Guide, 2023, tabla de características de cableado y sección Fiber and Copper Considerations: fibra tiene inmunidad inherente al ruido eléctrico y mayor potencial de ancho de banda; los valores concretos dependen del tipo de fibra y cobre.' },
    { url: 'https://www.cisco.com/c/dam/global/fi_fi/assets/docs/SMB_University_120307_Networking_Fundamentals.pdf', referencia: 'Cisco Networking Fundamentals, Physical Media Comparison: compara el potencial de ancho de banda de fibra óptica frente a par trenzado en la tabla de medios físicos; los máximos dependen de categorías y estándares.' }
  ],
  structure: [
    { url: 'https://alarcos.esi.uclm.es/ipsw/metrica3/metrica_3/guidances/guidelines/diagrama_estructura_1446C14B.html', referencia: 'Universidad de Castilla-La Mancha, material docente de Métrica v3, directriz Diagrama de Estructura: define la estructura alternativa como la llamada, condicionada por una decisión, a uno u otro módulo inferior; la distingue de secuencial y repetitiva.' }
  ],
  itu: [
    { url: 'https://www.itu.int/en/history/Pages/ITUBorn1865.aspx', referencia: 'ITU, The 1865 International Telegraph Conference: la firma de la primera Convención Telegráfica Internacional en París el 17-05-1865 estableció la International Telegraph Union, precursora de la ITU actual.' },
    { url: 'https://www.itu.int/ITU-T/50/history.html', referencia: 'ITU-T, A short history: la Unión Internacional de Telegrafía se fundó en 1865 y cambió su nombre a International Telecommunication Union en 1932.' }
  ],
  lamp: [
    { url: 'https://aws.amazon.com/what-is/lamp-stack/', referencia: 'Amazon Web Services, What Is a LAMP Stack?: identifica Linux, Apache, MySQL y PHP como los componentes del acrónimo; distingue el stack de otras herramientas que pueden integrarse.' },
    { url: 'https://access.redhat.com/sites/default/files/attachments/deploy-lamp-3.pdf', referencia: 'Red Hat, Deploy LAMP: enumera Linux, Apache HTTP Server, MySQL y PHP, y advierte que en variantes pueden sustituirse componentes (p. ej., PostgreSQL o Perl/Python); Pentaho no es uno de los componentes del acrónimo clásico.' }
  ]
};

const records = [
  [2356, [54, 124], ['IV-15'], ['EMM', 'MAM', 'MCM', 'gestión de aplicaciones móviles', 'BYOD'], sources.emm, '', 'Se conserva MAM como gestión de aplicaciones móviles y se sustituye la mezcla imprecisa de siglas por distractores definidos. NIST distingue MAM (instalación/uso de aplicaciones organizativas) y MCM (control del acceso y uso de datos corporativos por aplicaciones gestionadas); EMM puede emplearse tanto en dispositivos corporativos como BYOD. Se evita atribuir un significado universal a MEM, sigla usada de modo no uniforme en productos y fuentes.', 'corregida'],
  [2357, [108, 110, 118], ['IV-7'], ['fibra óptica', 'par trenzado', 'medios de transmisión', 'ancho de banda', 'inmunidad electromagnética'], sources.fiber, '', 'Se mantiene «mayor potencial de ancho de banda» como ventaja general de la fibra frente al par trenzado en redes de telecomunicaciones. Se limita el alcance porque las velocidades y la atenuación dependen de la categoría de cobre, del tipo de fibra, los transceptores y las distancias; no se presenta como una comparación absoluta entre cualquier enlace.', 'corregida'],
  [2358, [90], ['III-2'], ['diagrama de estructura', 'diseño estructurado', 'alternativa', 'selección', 'módulos'], sources.structure, '', 'La conexión se denomina alternativa: el módulo de nivel superior evalúa una condición y llama a uno de los módulos inferiores posibles. Se distingue de la secuencia (se ejecutan los módulos en orden) y de la repetición/iteración (se vuelve a llamar al módulo mientras proceda). Se especifica el marco de diagramas de estructura de Métrica v3.', 'corregida'],
  [2359, [108], [], ['Unión Internacional de Telecomunicaciones', 'Unión Internacional de Telegrafía', 'UIT', 'ITU', '1865', 'historia de las telecomunicaciones'], sources.itu, '', 'La fecha 1865 se confirma para la fundación de la Unión Internacional de Telegrafía, antecesora de la actual ITU/UIT; el nombre International Telecommunication Union se adoptó en 1932. Se reescribe el enunciado para no proyectar el nombre actual sobre el organismo de 1865. No se fuerza una correspondencia A2 específica.', 'corregida'],
  [2360, [60, 69], ['II-2', 'III-12'], ['LAMP', 'Linux', 'Apache', 'MySQL', 'PHP', 'Pentaho', 'pila web'], sources.lamp, '', 'La respuesta sigue siendo Pentaho. Se precisa «LAMP clásico»: Linux, Apache, MySQL y PHP. Algunas variantes sustituyen componentes, sobre todo la P por Perl o Python, pero Pentaho no es una de las expansiones habituales del acrónimo. Se distingue una plataforma de analítica/BI del conjunto de componentes de la pila web.', 'corregida']
];

const edits = {
  2356: { texto: 'En una solución de gestión de movilidad empresarial (EMM), ¿qué describe correctamente MAM (Mobile Application Management)?', opciones: ['Gestiona la instalación y el uso de aplicaciones de la organización en dispositivos móviles.', 'Gestiona exclusivamente el inventario y la configuración global del dispositivo; esa función se denomina MDM.', 'MAM es la tecnología que controla el acceso de aplicaciones a datos corporativos, mientras que MCM se limita a instalar aplicaciones.', 'Solo puede aplicarse a dispositivos propiedad de la organización y excluye los escenarios BYOD.'], respuesta_correcta: 0 },
  2357: { texto: 'Como ventaja general en redes de telecomunicaciones, ¿qué ofrece la fibra óptica frente al par trenzado convencional, aunque las prestaciones exactas dependan de la categoría y del tipo de enlace?', opciones: ['Mayor emisión de radiación electromagnética.', 'Mayor potencial de ancho de banda.', 'Mayor resistencia a la flexión y al daño por curvatura.', 'Mayor atenuación por kilómetro en condiciones comparables.'], respuesta_correcta: 1 },
  2358: { texto: 'En los diagramas de estructura de Métrica v3, ¿cómo se llama la estructura en la que un módulo llama a uno u otro módulo subordinado según una condición?', opciones: ['Secuencial.', 'Condicional simple (if sin alternativa).', 'Repetitiva.', 'Alternativa.'], respuesta_correcta: 3 },
  2359: { texto: '¿En qué año se fundó la Unión Internacional de Telegrafía, antecesora de la actual Unión Internacional de Telecomunicaciones (UIT/ITU)?', opciones: ['1895.', '1915.', '1865.', '2000.'], respuesta_correcta: 2 },
  2360: { texto: 'En la expansión clásica del acrónimo LAMP, referido a una pila de software para aplicaciones web, ¿cuál de estas herramientas no es uno de sus componentes?', opciones: ['Pentaho.', 'MySQL.', 'Apache.', 'Linux.'], respuesta_correcta: 0 }
};

apply({ numero: '408', fecha: '2026-10-28', records, edits });
