const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
apply({numero:'1284',fecha:'2026-11-15',records:[
  [6741,[60],['II-2'],['Unix','Linux','chmod','sticky bit','permisos de directorio'],[
    src('https://man7.org/linux/man-pages/man1/chmod.1.html','Linux man-pages, chmod(1): describe modos simbólicos con la letra t para el sticky bit; el modo octal usa el primer dígito para los bits especiales.'),
    src('https://refspecs.linuxfoundation.org/svid4/vol2.pdf','System V Interface Definition, Fourth Edition, volumen 2, página chmod: identifica 01000 como sticky bit y describe el modo simbólico de chmod.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 60: sistemas operativos Unix/Linux, administración y gestión.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema II.2: administración de Unix/Linux y otros sistemas operativos.'),
    src('https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk','ITIC Academy, bloque 27, temas A1-59–62 y A2-II.2: sistemas operativos, Unix/Linux y administración; cotejo curricular.')
  ],{texto:'En Unix, ¿qué comando simbólico añade el sticky bit a un directorio sin sustituir los demás permisos existentes?',opciones:[
    'chmod u+s /directorio/fichero',
    'chmog g+s /directorio',
    'chmod 177 /directorio',
    'chmod +t /directorio'
  ],respuesta_correcta:3},'Se conserva D. En el modo simbólico de chmod, t selecciona el sticky bit y + lo añade a los permisos existentes. La forma octal requiere indicar el bit especial en el primer dígito (por ejemplo, 1xxx); 177 no lleva ese dígito y tampoco conserva los permisos anteriores. Se corrige chmog, que era una errata.','corregida'],

  [6742,[77],['III-12'],['CSS','W3C','hojas de estilo','presentación web'],[
    src('https://www.w3.org/TR/css-2026/','W3C CSS Snapshot 2026: define CSS como lenguaje para describir la representación de documentos estructurados como HTML y XML en diversos medios.'),
    src('https://www.w3.org/Style/','W3C Web Style Sheets: describe la función de las hojas de estilo y la posibilidad de asociarlas a documentos estructurados; una hoja compartida permite mantener presentación común.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 77: HTML, CSS, XML, navegadores y compatibilidad con estándares.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema III.12: aplicaciones web, desarrollo front-end y tecnologías de programación.'),
    src('https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk','ITIC Academy, bloque 30, tecnologías web y lenguajes de marca; cotejo de los temas A1-77 y A2-III.12.')
  ],{texto:'¿Qué describe correctamente CSS (Cascading Style Sheets)?',opciones:[
    'Un servicio de Office 365 para compartir libros de Excel en equipo.',
    'Un lenguaje de hojas de estilo que describe la presentación de documentos como HTML o XML; una misma hoja puede asociarse a varias páginas.',
    'Un estándar del IETF para comunicaciones síncronas entre equipos mediante 5G.'
  ],respuesta_correcta:1},'Se conserva B y se precisa la definición: CSS es un lenguaje de hojas de estilo del ecosistema W3C para describir presentación/renderizado; puede reutilizarse una hoja en distintas páginas. No es un servicio de hojas de cálculo ni un protocolo de comunicaciones móviles.','corregida'],

  [6743,[85],[],['blockchain','DLT','consenso','permisionada','no permisionada'],[
    src('https://nvlpubs.nist.gov/nistpubs/ir/2018/NIST.IR.8202.pdf','NISTIR 8202, sección 2: clasifica las redes blockchain según su modelo de permisos, que determina quién puede mantener/publicar bloques; distingue permissionless y permissioned.'),
    src('https://www.nist.gov/publications/blockchain-technology-overview','NIST, ficha oficial de NISTIR 8202: presenta el informe de visión general de blockchain, consenso y libros distribuidos.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 85: blockchain, tipos de redes y algoritmos de consenso.'),
    src('https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk','ITIC Academy, bloque 30, apartado de blockchain, tipos de redes y consenso: cotejo curricular. El banco conserva el término permissioned/permissionless empleado por NIST.')
  ],{texto:'Si la clasificación de una blockchain se basa en quién puede incorporarse al conjunto autorizado para mantener la red o proponer/validar bloques, ¿qué par de categorías se utiliza?',opciones:[
    'Públicas o privadas: categorías que describen visibilidad/acceso, no necesariamente el permiso para validar.',
    'Híbridas o federadas: categorías que describen otros modelos de arquitectura o gobierno.',
    'Permisionadas o no permisionadas (permissioned/permissionless).',
    'Ninguna: las redes blockchain no se clasifican por su modelo de permisos.'
  ],respuesta_correcta:2},'Se conserva C. NIST clasifica las redes por su modelo de permisos, que determina quién puede mantener la cadena o publicar bloques. Esta dimensión no debe confundirse con la distinción pública/privada; las propiedades de acceso y de participación en consenso son dimensiones que pueden combinarse.','corregida'],

  [6744,[44],['III-14'],['interfaz de usuario','usabilidad','consistencia','obviedad','aprendizaje'],[
    src('https://www.iso.org/obp/ui?_escaped_fragment_=iso%3Astd%3Aiso%3A9241%3A-110%3Adis%3Aed-2%3Av1%3Aen','ISO 9241-110, principios de interacción: incluye consistencia dentro de conformidad con expectativas; menciona la obviedad de la información dentro de autodescriptividad y establece learnability. La norma orienta evaluación/diseño, pero no define una lista universal que incluya «naturalidad».'),
    src('https://www.iso.org/committee/53372/x/catalogue/','ISO/TC 159/SC 4, catálogo de ergonomía de la interacción persona-sistema: identifica ISO 9241-110:2020, principios de interacción.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 44: accesibilidad, usabilidad, diseño universal y UX.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema III.14: accesibilidad, usabilidad y experiencia de usuario.'),
    src('https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk','ITIC Academy, bloque 30, tema A1-65, incluye UX en desarrollo web; cotejo de ámbito. La búsqueda de material no halló una lista cerrada de propiedades de interfaz que resuelva este reactivo.'),
    src('https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk','ITIC Academy, bloque 38, análisis/diseño/construcción de sistemas: contexto de diseño; no presenta una taxonomía de estas cuatro etiquetas como lista mutuamente excluyente.')
  ],{},'No se certifica la clave. El enunciado no identifica un modelo, una norma ni la fuente de la lista. ISO 9241-110 reconoce consistencia y aprendizaje y ubica la obviedad de la información dentro de autodescriptividad; naturalidad también aparece como heurística informal en distintos marcos. Con la evidencia disponible no se puede sostener que «obviedad» sea la única opción no característica. Pendiente de reformular o aportar la fuente didáctica exacta.','pendiente_ambiguedad'],

  [6745,[74],[],['ISO/TC 211','información geográfica','geomática','normalización'],[
    src('https://www.iso.org/committee/54904.html','ISO, página del comité ISO/TC 211 «Geographic information/Geomatics»: su alcance es la normalización en el campo de la información geográfica digital.'),
    src('https://committee.iso.org/sites/tc211/home.html','ISO/TC 211, portal oficial del comité técnico sobre información geográfica/geomática.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 74: sistemas de información geográfica, conceptos y funcionalidad.'),
    src('https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk','ITIC Academy, bloque 33, tema A1-74, sistemas de información geográfica; el documento identifica el alcance curricular del tema.')
  ],{texto:'¿Qué comité técnico de ISO desarrolla la normalización en el ámbito de la información geográfica y la geomática?',opciones:[
    'ISO/TC 121',
    'ISO/TC 122',
    'ISO/TC 222',
    'ISO/TC 211'
  ],respuesta_correcta:3},'Se conserva D. ISO identifica expresamente a ISO/TC 211 como el comité de Geographic information/Geomatics y define su alcance en la normalización de información geográfica digital. El tema A1-74 coincide directamente; no se fuerza una etiqueta A2 porque el programa consultado no tiene un epígrafe equivalente explícito.','corregida']
]});
