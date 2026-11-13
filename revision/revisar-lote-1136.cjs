require('./aplicar-lote.cjs')({
 numero:'1136',fecha:'2026-11-13',
 records:[
  [6001,[106],[],['ITIL 4','principios guía','visibilidad','flujo de trabajo','cuellos de botella'],[
   {url:'https://www.peoplecert.org/browse-certifications/itil-1',referencia:'PeopleCert, ITIL 4 Foundation, criterio oficial de evaluación 2.2(d), Collaborate and promote visibility; texto de referencia: AXELOS/PeopleCert, ITIL Foundation: ITIL 4 Edition, §4.3.4, apartado Make work flow.'},
   {url:'https://www.peoplecert.org/help-and-support/faq-itil',referencia:'FAQ oficial de PeopleCert: la retirada de módulos ITIL 4 está prevista para el 31-12-2027, por lo que la versión continúa en período de transición a noviembre de 2026.'}
  ],null,'La frase sobre comprender el trabajo en curso, identificar cuellos de botella y descubrir desperdicio corresponde a «Colaborar y promover la visibilidad» (ITIL 4, §4.3.4, apartado Make work flow), opción B. No debe confundirse con «Optimizar y automatizar», aunque ambos principios se relacionan con reducir desperdicio. ITIL 4 sigue siendo una versión certificable en el período de transición.','vigente'],
  [6002,[96],['III-7'],['automatización de pruebas','MantisBT','gestión de defectos','Jenkins','Cucumber','Selenium'],[
   {url:'https://github.com/mantisbt/mantisbt',referencia:'Repositorio oficial MantisBT: identifica el proyecto como Mantis Bug Tracker, herramienta de seguimiento de errores/incidencias.'},
   {url:'https://www.selenium.dev/documentation/',referencia:'Documentación oficial Selenium: herramientas para automatizar navegadores y pruebas web.'},
   {url:'https://cucumber.io/docs/',referencia:'Documentación oficial Cucumber: framework para especificar y ejecutar pruebas de aceptación/BDD.'},
   {url:'https://www.jenkins.io/doc/',referencia:'Documentación oficial Jenkins: servidor de automatización que puede orquestar tareas de construcción, prueba y entrega; no es por sí mismo un framework dedicado de automatización de casos de prueba.'}
  ],null,'Se mantiene Mantis (MantisBT), opción B, como herramienta de seguimiento de incidencias/defectos y no framework de automatización de pruebas. Se delimita «herramienta de automatización de pruebas» como herramienta dedicada: Jenkins puede orquestar pruebas dentro de pipelines, por lo que sin esta precisión también podría considerarse una herramienta de automatización en sentido amplio.','corregida'],
  [6003,[59],['II-2'],['sistemas operativos','gestión de recursos','interfaz hardware-software'],[
   {url:'https://www.ibm.com/think/topics/operating-systems',referencia:'IBM, What is an Operating System?: gestiona hardware y aplicaciones, asigna CPU, memoria, E/S y almacenamiento, y ofrece interfaz de usuario (gráfica o de línea de órdenes).'}
  ],null,'La opción D expresa de forma imprecisa la función de intermediación del sistema operativo. Se reescribe para indicar que media entre usuario/aplicaciones y hardware y gestiona recursos y dispositivos; las restantes opciones describen aplicaciones o servicios no esenciales del sistema operativo.','corregida'],
  [6004,[65,67],['III-10','III-12'],['Jakarta Faces','JavaServer Faces','JSF','conversor','validador','renderizador'],[
   {url:'https://jakarta.ee/specifications/faces/4.1/jakarta-faces-4.1',referencia:'Especificación oficial Jakarta Faces 4.1: framework MVC de componentes; define ciclo de vida, conversiones, validadores, componentes y el modelo RenderKit/Renderer.'},
   {url:'https://jakarta.ee/specifications/faces/5.0/jakarta-faces-5.0-M1.html',referencia:'Especificación oficial Jakarta Faces 5.0 Milestone 1 (en desarrollo a noviembre de 2026): mantiene los objetos Converter, Validator y Renderer; un depurador no es un componente del runtime.'}
  ],null,'La respuesta es A: depurador es una herramienta de desarrollo/IDE y no un componente estándar del modelo de ejecución JSF. Conversores, validadores y renderizadores sí están definidos por Jakarta Faces. Se aclara el cambio de nombre JSF a Jakarta Faces y se especifica que se pregunta por elementos estándar del runtime.','corregida'],
  [6005,[48],['I-9'],['Esquema Nacional de Seguridad','servicios en la nube','op.nub.1','RD 311/2022'],[
   {url:'https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191',referencia:'Real Decreto 311/2022 (ENS), anexo II, medida op.nub.1: «Protección de servicios en la nube»; define requisitos para SaaS, PaaS e IaaS y servicios de terceros.'}
  ],null,'La denominación literal de la medida del anexo II es op.nub.1 «Protección de servicios en la nube», opción C. La referencia se hace al ENS de 2022, no al derogado RD 3/2010.','vigente']
 ],
 edits:{
  6001:{texto:'En ITIL 4, ¿qué principio guía se aplica al hacer visible el trabajo en curso para comprender su flujo, identificar cuellos de botella y descubrir desperdicio?'},
  6002:{texto:'¿Cuál de estas herramientas no es principalmente un framework de automatización de pruebas, sino un sistema de seguimiento de incidencias/defectos?',opciones:[
   'Selenium, para automatización de navegadores y pruebas web.',
   'MantisBT, para seguimiento de errores e incidencias.',
   'Cucumber, para especificar y ejecutar pruebas de aceptación/BDD.',
   'Jenkins, servidor de integración y automatización de pipelines que puede orquestar pruebas.'
  ]},
  6003:{texto:'Una función primordial del sistema operativo es:',opciones:[
   'Gestionar específicamente la comunicación con servidores de correo.',
   'Proporcionar herramientas ofimáticas básicas.',
   'Incluir necesariamente un navegador web.',
   'Actuar como intermediario entre usuarios/aplicaciones y el hardware, gestionando recursos y dispositivos.'
  ]},
  6004:{texto:'En el modelo estándar de ejecución de JavaServer Faces (JSF), hoy denominado Jakarta Faces, ¿cuál de los siguientes no es un componente del framework, sino una herramienta de desarrollo?',opciones:[
   'Depurador.',
   'Validador.',
   'Conversor.',
   'Renderizador.'
  ]}
 }
});
