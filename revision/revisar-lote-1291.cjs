const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
apply({numero:'1291',fecha:'2026-11-15',records:[
  [6776,[73],[],['e-learning','Experience API','xAPI','Tin Can API','interoperabilidad'],[
    src('https://github.com/adlnet/xAPI-Spec','Advanced Distributed Learning (ADL), repositorio oficial xAPI-Spec: indica que Experience API (xAPI) es la especificación de interoperabilidad de tecnologías de aprendizaje y que la versión actual es xAPI 2.0; Tin Can API fue el nombre anterior del proyecto.'),
    src('https://opensource.ieee.org/xapi/xapi-base-standard-documentation','IEEE xAPI Base Standard, documentación normativa vigente de la especificación Experience API (xAPI) 2.0.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 73: e-learning, herramientas, sistemas de implantación y normalización.'),
    src('https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk','ITIC Academy, bloque 33, e-learning y GIS, edición 2026: cotejo del ámbito curricular; identidad y versión se contrastan con la especificación ADL/IEEE.')
  ],{texto:'¿Cuál de los siguientes estándares de e-learning es hoy conocido como Experience API (xAPI), cuyo nombre anterior era Tin Can API?',opciones:[
    'Tin Can API.','SCORM.','IMS Common Cartridge.','AICC HACP.'
  ],respuesta_correcta:0},'Se conserva A, pero se reemplaza la pregunta relativa a «el más reciente», que depende de qué se entienda por estándar y fecha de comparación. ADL identifica xAPI como Experience API, especificación de interoperabilidad de aprendizaje, y señala la versión 2.0 como actual; Tin Can API es su nombre anterior.','corregida'],

  [6777,[35],['III-2'],['PMBOK','PMBOK Guide sexta edición','áreas de conocimiento','grupos de procesos','monitorización y control'],[
    src('https://www.pmi.org/-/media/pmi/documents/public/pdf/pmbok-standards/pmbok-guide-6th-edition-errata-4th-printing.pdf','Project Management Institute, PMBOK Guide, sexta edición, documento oficial de erratas/diagramas: identifica las diez áreas de conocimiento y su distribución por grupos de procesos. La monitorización y control es un grupo de procesos, no un área de conocimiento.'),
    src('https://www.pmi.org/learning/library/bringing-pmbok-guide-life-practical-8009','PMI, Bringing the PMBOK Guide to Life: distingue grupos de procesos y áreas de conocimiento y explica que los procesos de monitorización/control se distribuyen por las áreas correspondientes.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 35: dirección y gestión de proyectos TIC, planificación y seguimiento.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema III.2: técnicas y prácticas de gestión y planificación de proyectos.'),
    src('https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk','ITIC Academy, bloque 12, planificación estratégica y gestión directiva TIC: cotejo contextual de planificación/seguimiento de proyectos; la terminología PMBOK se contrasta con PMI.')
  ],{texto:'En la estructura de la guía PMBOK sexta edición, ¿cuál de estas opciones NO es un área de conocimiento?',opciones:[
    'Gestión de la integración del proyecto.','Gestión del alcance del proyecto.','Gestión de la monitorización y control del proyecto.','Gestión de los riesgos del proyecto.'
  ],respuesta_correcta:2},'Se conserva C y se especifica la sexta edición. En PMBOK 6 hay áreas de conocimiento como integración, alcance y riesgos; «monitorización y control» es uno de los cinco grupos de procesos, cuyos procesos se distribuyen entre las áreas. Se añade la edición porque otras versiones estructuran el contenido de manera diferente.','corregida'],

  [6778,[27],['I-7'],['RGPD','artículo 37','delegado de protección de datos','autoridad pública','LOPDGDD','apercibimiento','AEPD'],[
    src('https://eur-lex.europa.eu/eli/reg/2016/679/oj','Reglamento (UE) 2016/679 (RGPD), artículo 37.1.a: responsable y encargado designarán un DPD cuando el tratamiento lo lleve a cabo una autoridad u organismo público, salvo órganos jurisdiccionales actuando en su función judicial; es una obligación independiente del criterio de observación a gran escala.'),
    src('https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673','BOE, Ley Orgánica 3/2018, texto consolidado vigente, artículo 77: régimen aplicable a infracciones cometidas por autoridades y organismos públicos, con declaración de infracción y apercibimiento/medidas correctivas en lugar de multa administrativa.'),
    src('https://www.aepd.es/memorias/memoria-aepd-2022.pdf','AEPD, Memoria 2022, apartado de procedimientos sanitarios: informa que el procedimiento PS/00132/2021 apercibió a la Consejería de Sanidad Canaria por no haber nombrado DPD desde la aplicación del RGPD; la Consejería lo nombró durante el procedimiento.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 27: régimen jurídico de protección de datos, obligaciones y DPD en las Administraciones públicas.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema I.7: régimen jurídico, responsable/encargado, delegado y autoridades de protección de datos.'),
    src('https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk','ITIC Academy, bloque 08, protección de datos, edición 2026: cotejo de obligaciones de responsables públicos y DPD; la obligación y el régimen de apercibimiento se contrastan con RGPD, LOPDGDD y AEPD.')
  ],{texto:'Una Consejería, como autoridad pública responsable del tratamiento, no ha designado delegado de protección de datos (DPD). ¿Qué afirmación refleja correctamente el RGPD y el régimen español aplicable?',opciones:[
    'No cabe actuación porque el tratamiento en interés público está exento de designar DPD.','La AEPD puede declarar la infracción y apercibir a la Administración por incumplir la obligación de designación; no hace falta que el tratamiento alcance gran escala.','No cabe actuación porque el RGPD todavía no estaba en vigor en abril de 2020.','Solo sería obligatorio designarlo si se cumple el criterio de observación habitual y sistemática a gran escala.'
  ],respuesta_correcta:1},'Se conserva B, pero se precisa el resultado jurídico y se elimina la confusión entre «sanción» y multa. El artículo 37.1.a RGPD obliga a las autoridades públicas a designar DPD independientemente del criterio de observación a gran escala; el artículo 77 LOPDGDD prevé para Administraciones la declaración de infracción y apercibimiento, no multa. La AEPD documentó un apercibimiento a la Consejería de Sanidad Canaria por falta de nombramiento y que lo nombró durante el procedimiento (PS/00132/2021). Se elimina el detalle de una app que no era necesario para la regla y podía mezclar expedientes distintos.','corregida'],

  [6779,[95],['III-2'],['MÉTRICA v3','perfiles','participantes','Directivo','Consultor','Programador'],[
    src('https://manuel.cillero.es/doc/metodologia/metrica-3/participantes/','MÉTRICA v3, Participantes (reproducción del material original del Ministerio de Administraciones Públicas): enumera los perfiles Directivo, Jefe de Proyecto, Consultor, Analista y Programador; «Accionista» no es perfil del método.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 95: metodología de planificación y desarrollo de sistemas de información MÉTRICA.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema III.2: gestión/planificación de proyectos y metodologías de desarrollo.'),
    src('https://drive.google.com/file/d/1hPYYrCoVBKhiEgMaqVBi5mpdUEm4_vV5/view?usp=drivesdk','ITIC Academy, Tema 093, MÉTRICA v3: cotejo del contenido de perfiles/participantes en la metodología.')
  ],{texto:'¿Cuál de los siguientes NO es uno de los cinco perfiles de participantes definidos en MÉTRICA versión 3?',opciones:[
    'Directivo.','Accionista.','Programador.','Consultor.'
  ],respuesta_correcta:1},'Se conserva B. MÉTRICA v3 enumera Directivo, Jefe de Proyecto, Consultor, Analista y Programador. Se acota «perfil» a la clasificación de participantes del método para que no se confunda con roles, partes interesadas o cargos de una empresa.','corregida'],

  [6780,[75],['III-15'],['arquitectura de datos','Data Lakehouse','Data Fabric','Data Mesh','Data Sea','IBM'],[
    src('https://www.ibm.com/think/topics/data-lakehouse-vs-data-fabric-vs-data-mesh','IBM, Data Lakehouse vs. Data Fabric vs. Data Mesh: compara expresamente esos tres conceptos y explica su relación. La pregunta queda delimitada a las tres denominaciones de esa comparación; «Data Sea» aparece en otros textos y no se afirma que el término no exista en toda la literatura.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 75: tecnologías de almacenamiento y procesamiento de grandes volúmenes de datos.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema III.15: Big Data, tecnologías y entornos de procesamiento de datos.'),
    src('https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk','ITIC Academy, bloque 34, Business Intelligence y Big Data, edición 2026: cotejo curricular de arquitecturas y plataformas de datos; la delimitación terminológica del test se apoya en la comparación técnica citada.')
  ],{texto:'En la comparación de IBM «Data Lakehouse vs. Data Fabric vs. Data Mesh», ¿cuál de estas denominaciones NO forma parte de las tres arquitecturas comparadas?',opciones:[
    'Data Sea.','Data Lakehouse.','Data Fabric.','Data Mesh.'
  ],respuesta_correcta:0},'Se conserva A, pero se acota la afirmación a la comparación citada. No se sostiene que «Data Sea» no se use en ningún contexto: existen textos que emplean esa expresión. IBM compara específicamente Data Lakehouse, Data Fabric y Data Mesh; por ello Data Sea queda fuera de ese conjunto definido.','corregida']
]});
