require('./aplicar-lote.cjs')({
 numero:'1153',fecha:'2026-11-13',
 records:[
  [6086,[89],['II-3','III-9'],['orientación a objetos','metaclases','metamodelo UML','clasificadores','instancias'],[
   {url:'https://www.omg.org/spec/UML/2.5.1/PDF',referencia:'OMG, Unified Modeling Language 2.5.1, §6.2: explica que UML se define mediante un metamodelo y que una metaclase como Element, además de ser una clase UML, puede verse desde MOF como instancia de la metaclase Class.'},
   {url:'https://www.omg.org/spec/UML/',referencia:'Catálogo oficial OMG de UML: identifica la especificación normativa UML 2.5.1 y el metamodelo abstracto descargable.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 89: modelado de dominio y modelos de clases.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, temas II.3 y III.9: paradigmas de programación y análisis/diseño orientado a objetos y UML.'}
  ],null,'Se acota la afirmación a metamodelado UML/MOF: es falsa decir que una clase del metamodelo nunca pueda ser representada como instancia de una metaclase. UML 2.5.1 describe expresamente el metamodelo UML y pone como ejemplo Element, que es una clase UML y se ve desde MOF como instancia de Class.','corregida'],
  [6087,[89],['II-3','III-9'],['objetos','identidad','estado','comportamiento','clases'],[
   {url:'https://www.omg.org/spec/UML/2.5.1/PDF',referencia:'OMG, UML 2.5.1, §6.3.1: un objeto es un individuo con estado y relaciones; un clasificador describe un conjunto de objetos y el estado toma valores de sus propiedades.'},
   {url:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',referencia:'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, versión 2026.1, apartado de orientación a objetos: distingue clase como descripción común, objeto como instancia con identidad, estado y comportamiento, y trata encapsulación/herencia.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 89: análisis del dominio y modelos de clases.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, temas II.3 y III.9: paradigmas de programación y análisis/diseño orientado a objetos.'}
  ],null,'Se sustituye la caracterización informal como “módulo de datos e instrucciones” por la semántica de modelado: objeto como instancia individual con identidad y estado, y clase/clasificador como descripción de propiedades y comportamiento común. Así no se confunden objeto, clase y módulo.','corregida'],
  [6088,[58],['II-6'],['WS-BPEL','BPEL','orquestación de servicios web','procesos XML','notación gráfica'],[
   {url:'https://docs.oasis-open.org/wsbpel/2.0/Primer/wsbpel-v2.0-Primer.html',referencia:'OASIS, WS-BPEL 2.0 Primer, §§1–3: define WS-BPEL como lenguaje de orquestación de procesos de negocio sobre servicios web, procesos descritos mediante XML y correlación de mensajes; el estándar no define por sí una notación gráfica.'},
   {url:'https://docs.oasis-open.org/wsbpel/2.0/wsbpel-v2.0.html',referencia:'OASIS, Web Services Business Process Execution Language Version 2.0, especificación normativa: WS-BPEL usa XML; los detalles de disposición gráfica de herramientas quedan fuera del lenguaje estándar.'},
   {url:'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk',referencia:'ITIC Academy, bloque 28 Arquitectura SOA y requisitos no funcionales, versión 2026: describe BPEL/WS-BPEL como tecnología de orquestación que determina servicios, orden y condiciones dentro de arquitecturas SOA.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 58: arquitectura SOA.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema II.6: arquitectura de servicios web e interoperabilidad de componentes.'}
  ],null,'Se conserva la respuesta D y se concreta que lo que BPEL no especifica es una notación gráfica normativa propia. Una herramienta puede representar gráficamente un proceso, pero esa presentación no forma parte del lenguaje XML WS-BPEL. Se normaliza la terminología y se evita atribuir al estándar una limitación de herramientas concretas.','corregida'],
  [6089,[95,102],['III-2'],['MÉTRICA v3','gestión de configuración','PSI','EVS','CSI','MSI'],[
   {url:'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A1f321d6d-fb6a-46ed-a369-617c0080c51d/METRICA_V3_Gestion_de_Configuracion.pdf',referencia:'Portal de Administración Electrónica, MÉTRICA v3, Interfaz de Gestión de la Configuración: contempla EVS-GC en Estudio de Viabilidad, actividades GC1/GC2 durante ASI/DSI/CSI/IAS y MSI-GC durante Mantenimiento. No recoge tareas PSI-GC; PSI es, por tanto, la opción que no incluye actividad de esta interfaz.'},
   {url:'https://manuel.cillero.es/doc/metodologia/metrica-3/interfaces/gestion-de-la-configuracion/',referencia:'Transcripción estructurada de la documentación original del Ministerio: enumera actividades EVS-GC, GC y MSI-GC; se utiliza para corroborar la lectura del esquema oficial del PAe.'},
   {url:'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk',referencia:'ITIC Academy, bloque 15 Metodologías Ágiles y Ciclo de Vida, versión 2026.1, apartado MÉTRICA v3: encuadra la metodología y sus interfaces dentro del tema oficial de ciclo de vida/metodologías.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 95: metodología de planificación y desarrollo de sistemas MÉTRICA.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema III.2: metodologías de desarrollo y gestión/planificación del proceso.'}
  ],null,'Se conserva la respuesta D (PSI), pero se corrige la ambigüedad gramatical del enunciado a una pregunta singular. La comprobación del material oficial resuelve una posible confusión: EVS sí contempla EVS-GC; CSI participa en GC1/GC2; MSI tiene MSI-GC; PSI no figura entre las fases con actividades de esta interfaz.','corregida'],
  [6090,[95,48],['II-13','III-2'],['MÉTRICA v3','interfaz de seguridad','seguridad del sistema','seguridad del desarrollo','formación en seguridad'],[
   {url:'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A55f92649-18e3-41cb-9102-0ae424631831/METRICA_V3_Seguridad.pdf',referencia:'Portal de Administración Electrónica, MÉTRICA v3, Interfaz de Seguridad: comprende actividades para reforzar la seguridad intrínseca del sistema y la del propio proceso de desarrollo, y destaca la formación en seguridad.'},
   {url:'https://manuel.cillero.es/doc/metodologia/metrica-3/introduccion/interfaces/seguridad/',referencia:'Transcripción estructurada de la documentación original del Ministerio: recoge las dos clases de actividades de seguridad y el énfasis en la formación en esta materia.'},
   {url:'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk',referencia:'ITIC Academy, bloque 15 Metodologías Ágiles y Ciclo de Vida, versión 2026.1, apartado MÉTRICA v3: cotejo curricular de la metodología y sus interfaces.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, temas 48 y 95: ENS y metodología MÉTRICA.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, temas II.13 (seguridad física y lógica) y III.2 (metodologías de desarrollo).'}
  ],null,'La respuesta D es correcta: las tres opciones describen ámbitos de la interfaz. Se precisa “formación en materia de seguridad”: MÉTRICA la destaca expresamente, aunque el texto la menciona aparte de las dos clases principales de actividades (seguridad intrínseca y seguridad del proceso de desarrollo).','vigente']
 ],
 edits:{
  6086:{opcion:[3,'En un metamodelo, una clase nunca puede representarse como instancia de una metaclase.']},
  6087:{texto:'En el modelo orientado a objetos, ¿cuál afirmación describe correctamente la relación entre objeto y clase?',opciones:[
   'Un objeto contiene únicamente datos; su comportamiento queda siempre fuera del modelo de objetos.',
   'Un objeto es un individuo con identidad y estado; su clase describe propiedades y comportamiento comunes a sus instancias.',
   'Un objeto es una plantilla que define el conjunto de instancias que se podrán crear.',
   'Los objetos no existen como entidades en tiempo de ejecución.'
  ],respuesta_correcta:1},
  6088:{texto:'Según el estándar WS-BPEL 2.0, ¿cuál de las siguientes NO es una característica del lenguaje?',opciones:[
   'Permitir describir procesos de orquestación con estructuras de control jerárquicas o basadas en grafos.',
   'Correlacionar instancias de procesos mediante datos incluidos en mensajes de las aplicaciones.',
   'Definir procesos de negocio mediante elementos de un lenguaje basado en XML.',
   'Definir una notación gráfica normativa propia para representar visualmente los procesos.'
  ],respuesta_correcta:3},
  6089:{texto:'¿Cuál de estos procesos principales de MÉTRICA v3 NO incluye actividades de la interfaz de Gestión de la Configuración?'},
  6090:{texto:'¿Qué aspectos contempla la interfaz de Seguridad de MÉTRICA v3?',opciones:[
   'La seguridad intrínseca del sistema de información.',
   'La seguridad del propio proceso de desarrollo del sistema de información.',
   'La formación en materia de seguridad.',
   'Todos los anteriores.'
  ],respuesta_correcta:3}
 }
});
