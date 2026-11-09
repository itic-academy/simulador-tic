const apply = require('./aplicar-lote.cjs');
const f = (url, referencia) => ({url, referencia});
apply({
  numero: '786',
  fecha: '2026-11-09',
  records: [
    [4251,[88,91],['III-6'],['DevSecOps','seguridad desde el diseño','adopción organizativa'],
      [f('https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf','NIST SP 800-218, §1: integrar prácticas de desarrollo seguro a lo largo del SDLC reduce vulnerabilidades; adelantar seguridad reduce el esfuerzo/coste de corrección.'),
       f('https://learn.microsoft.com/en-us/security/zero-trust/security-adoption-discipline-development-security','Microsoft Learn, “Shift DevOps to DevSecOps”, apartado Education and culture changes: los equipos desarrollan capacidades y perspectivas nuevas; educación y cambio cultural requieren tiempo, apoyo y seguimiento.'),
       f('https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk','ITIC Academy, bloque A2 de construcción/despliegue/CI/DevOps, versión 2026.1; cotejo de cobertura curricular, no fuente de la respuesta.')],
      '', 'Se evita presentar la curva de aprendizaje como una ventaja universal. DevSecOps integra seguridad durante el ciclo de desarrollo y puede favorecer detección temprana y calidad, pero implantarlo requiere nuevas capacidades, educación y cambio cultural; por tanto, no garantiza una curva baja para cualquier equipo.', 'corregida'],
    [4252,[100,102],['III-6','IV-4'],['Vagrant','Docker','Ansible','Puppet','automatización','gestión de entornos'],
      [f('https://developer.hashicorp.com/vagrant/intro','HashiCorp Vagrant: herramienta para crear y gestionar entornos reproducibles de máquinas virtuales de desarrollo.'),
       f('https://docs.docker.com/engine/','Docker Engine: tecnología cliente-servidor de código abierto para crear y ejecutar contenedores.'),
       f('https://docs.ansible.com/projects/ansible/latest/dev_guide/overview_architecture.html','Ansible Community Documentation: motor de automatización para aprovisionamiento cloud, gestión de configuración, despliegue de aplicaciones y orquestación.'),
       f('https://help.puppet.com/core/current/Content/PuppetCore/what_is_puppet.htm','Puppet Core: define el estado deseado de servidores y automatiza la gestión de su configuración.')],
      '', 'Se cambia la pregunta para que pida la herramienta cuyo alcance documentado incluye conjuntamente aprovisionamiento, configuración, despliegue y orquestación: Ansible. Los distractores se describen con sus funciones reales: Vagrant gestiona entornos VM reproducibles, Docker ejecuta contenedores y Puppet automatiza configuración de servidores; el enunciado evita afirmar que esas funciones sean intercambiables.', 'corregida'],
    [4253,[100,102],['IV-4'],['Apache Subversion','SVN','control de versiones','herramienta histórica'],
      [f('https://subversion.apache.org/','Apache Subversion, sitio del proyecto: lo define como un sistema de control de versiones centralizado y de código abierto.'),
       f('https://subversion.apache.org/faq','Apache Subversion FAQ, “What is Subversion?”: confirma la categoría de sistema de control de versiones.'),
       f('https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk','ITIC Academy, bloque 38, epígrafe de gestión de configuración/versiones; el material registra Subversion como referencia histórica todavía preguntable.')],
      '', 'La clasificación no depende de que SVN sea la herramienta más habitual hoy: Apache Subversion sigue siendo un sistema de control de versiones. Se acota “tipo” a su función principal y se conserva su utilidad para preguntas históricas.', 'corregida'],
    [4254,[103],[],['ISO 9004:2009','madurez','gestión de calidad','histórica'],
      [f('https://www.iso.org/obp/ui/?_escaped_fragment_=iso%3Astd%3A41014%3Aen','ISO 9004:2009, resumen y Anexo A: la edición incorpora una herramienta de autoevaluación para determinar niveles de madurez; registro de edición retirada.'),
       f('https://www.iso.org/obp/ui/?_escaped_fragment_=iso%3Astd%3Aiso%3A9004%3Aed-3%3Av1%3Aes','Registro oficial ISO 9004:2009 en español: norma retirada.'),
       f('https://www.iso.org/standard/70397.html','ISO 9004:2018, edición vigente confirmada en 2023; ofrece otra herramienta de autoevaluación y sustituye a la edición 2009.'),
       f('https://efrcertification.com/Ref/ISO%2B9004_2009%20QMS.pdf','Reproducción consultable de ISO 9004:2009, Anexo A, tabla de niveles: nivel 1, “no hay una aproximación sistemática evidente”; resultados inexistentes, pobres o impredecibles. Se usa para cotejar la redacción histórica exacta.'),
       f('https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk','ITIC Academy, bloque de calidad/ISO, versión 2026.1: cotejo curricular del epígrafe vigente de ISO 9004; no presenta la escala 2009 como vigente.')],
      '', 'Se identifica expresamente la edición 2009 y su Anexo A: la descripción corresponde al nivel 1 de su autoevaluación histórica. ISO declara retirada esa edición y señala como actual ISO 9004:2018, confirmada en 2023; por eso el reactivo queda clasificado como histórico, no como guía vigente de niveles.', 'historica'],
    [4255,[106],[],['ITIL v3','publicaciones principales','gestión de servicios','histórica'],
      [f('https://www.iso.org/standard/70680.html','ISO/IEC TR 20000-11:2015, §4.2: describe ITIL y enumera sus cinco publicaciones principales: Service Strategy, Service Design, Service Transition, Service Operation y Continual Service Improvement.'),
       f('https://www.peoplecert.org/help-and-support/faq-itil','PeopleCert, FAQ actual de ITIL: el itinerario actual ha evolucionado de ITIL v3 a ITIL 4 y a ITIL (Version 5); se usa para señalar el carácter histórico del reactivo.'),
       f('https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk','ITIC Academy, bloque ITIL y COBIT, edición 2026.1: el temario actual prioriza ITIL 4 / ITIL (Version 5); se coteja la pertinencia histórica del contenido.' )],
      '', 'En el conjunto histórico de cinco publicaciones principales de ITIL v3, los títulos son Service Strategy, Service Design, Service Transition, Service Operation y Continual Service Improvement. “Evolución del Servicio” no es uno de esos títulos; no debe confundirse con Service Transition (Transición del Servicio). El reactivo describe v3 y queda histórico.', 'historica']
  ],
  edits: {
    4251: {
      texto: '¿Qué afirmación NO es un beneficio que DevSecOps garantice por sí solo a cualquier equipo?',
      opciones: ['Permite detectar vulnerabilidades antes al integrar controles durante el desarrollo.','Facilita integrar controles de seguridad y calidad en el ciclo de entrega.','Puede reducir el tiempo y esfuerzo de corregir fallos detectados antes de producción.','Garantiza una curva de aprendizaje baja para todos los equipos involucrados.'],
      respuesta_correcta: 3,
      comentarios: 'La integración de seguridad no garantiza una adopción sencilla: puede requerir nuevas competencias, formación y cambio cultural. Los demás son beneficios posibles de prácticas bien implantadas, no resultados automáticos.'
    },
    4252: {
      texto: '¿Qué herramienta automatiza, entre otras tareas, el aprovisionamiento, la gestión de configuración, el despliegue de aplicaciones y la orquestación de servicios?',
      opciones: ['Vagrant, para crear y gestionar entornos reproducibles de máquinas virtuales de desarrollo.','Docker Engine, para crear y ejecutar contenedores.','Ansible, motor de automatización para aprovisionamiento, configuración, despliegue y orquestación.','Puppet, para definir el estado deseado y automatizar la configuración de servidores.'],
      respuesta_correcta: 2,
      comentarios: 'La pregunta identifica el alcance funcional documentado de Ansible. Las otras herramientas también son válidas en sus ámbitos: gestión de entornos VM (Vagrant), contenedores (Docker) y configuración declarativa de servidores (Puppet).'
    },
    4253: {
      texto: '¿A qué categoría pertenece Apache Subversion (SVN) por su función principal?',
      opciones: ['Empaquetado y despliegue de aplicaciones.','Análisis estático de calidad.','Repositorio de artefactos.','Control de versiones.'],
      respuesta_correcta: 3,
      comentarios: 'Subversion es un sistema centralizado de control de versiones; que sea una tecnología anterior a Git no cambia su categoría funcional.'
    },
    4254: {
      texto: 'En la autoevaluación de madurez del Anexo A de ISO 9004:2009 (edición retirada), ¿qué descripción corresponde al nivel 1?',
      comentarios: 'En la escala de cinco niveles del Anexo A de ISO 9004:2009, el nivel 1 se caracteriza por la ausencia de una aproximación sistemática evidente y por resultados inexistentes, pobres o impredecibles. Se pregunta por esa edición histórica, no por la ISO 9004:2018 vigente.'
    },
    4255: {
      texto: 'En el conjunto histórico de cinco publicaciones principales de ITIL v3, ¿cuál de estos títulos no forma parte de ellas?',
      opciones: ['Mejora continua del servicio (Continual Service Improvement).','Evolución del Servicio.','Diseño del Servicio (Service Design).','Operación del Servicio (Service Operation).'],
      respuesta_correcta: 1,
      comentarios: 'Las cinco publicaciones principales eran Service Strategy, Service Design, Service Transition, Service Operation y Continual Service Improvement. “Evolución del Servicio” no es un título; Service Transition se traduce como “Transición del Servicio”. ITIL v3 es una versión histórica.'
    }
  }
});
