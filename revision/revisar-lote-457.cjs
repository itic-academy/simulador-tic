const apply = require('./aplicar-lote.cjs');

const s = {
  mccall: {
    url: 'https://apps.dtic.mil/sti/pdfs/ADA049014.pdf',
    referencia: 'McCall, Richards y Walters, Factors in Software Quality, RADC-TR-77-369, vol. I (1977), informe original del Rome Air Development Center catalogado como AD-A049-014: modelo jerárquico de factores y criterios, incluidas las relaciones de generalidad, modularidad, independencia de sistema/máquina y autodescriptividad con reusabilidad.'
  },
  pggc: {
    url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A018552c6-b17d-46a3-a982-32deb2fcaf5d/1991-Plan-General-de-Garantia-de-calidad-NIPO-328-91-023-6.pdf',
    referencia: 'Administración electrónica, Plan General de Garantía de Calidad, fascículo 2, §6.2, pp. 146–148: evaluación de perfil de riesgos con una lista genérica de siete tipos potenciales; se calcula el perfil para el proyecto particular y se distinguen riesgos ordinarios y extraordinarios.'
  },
  iac: {
    url: 'https://dodcio.defense.gov/Portals/0/Documents/Library/DevSecOpsFundamentalsPlaybook.pdf',
    referencia: 'U.S. Department of Defense CIO, DevSecOps Fundamentals Playbook, Play 2: Adopt Infrastructure as Code: define y configura infraestructura mediante archivos de texto controlados en repositorio/versionados, incluyendo red, almacenamiento, máquinas virtuales y balanceadores, para automatizar aprovisionamiento y configuración repetibles.'
  },
  nistIac: {
    url: 'https://csrc.nist.gov/glossary/term/infrastructure_as_code',
    referencia: 'NIST CSRC Glossary, Infrastructure as Code: registra el término IaC y remite a NIST SP 800-204C y SP 800-215 para su contexto técnico.'
  }
};

const records = [
  [2596, [98], ['III-13'], ['McCall', 'reusabilidad', 'criterios de calidad', 'modelo histórico'], [s.mccall], '', 'Se compara el conjunto de criterios de reusabilidad del modelo de McCall con su informe original. El conjunto completo es generalidad, modularidad, independencia del sistema software, independencia de máquina y autodescriptividad. Se reformula la pregunta para que pida el conjunto completo; se conserva la respuesta A y se evita que un conjunto parcial parezca equivalente.', 'historica'],
  [2597, [98], ['III-13'], ['McCall', 'factores y criterios de calidad', 'completitud', 'modelo histórico'], [s.mccall], '', 'McCall diferencia factores de calidad (nivel alto) y criterios (atributos internos): completitud pertenece al criterio completeness asociado a correctness, no a los once factores. Se cambia el enunciado a “criterio, no factor” para hacer explícita la distinción terminológica. Pregunta de modelo histórico.', 'historica'],
  [2598, [98], ['III-13'], ['McCall', 'product transition', 'portabilidad', 'reusabilidad', 'interoperabilidad'], [s.mccall], '', 'Se formula como conocimiento histórico del modelo de McCall. La perspectiva product transition agrupa portabilidad, reusabilidad e interoperabilidad; es la misma relación conceptual revisada en 2593, pero se registra esta pregunta del banco por separado y se conserva su posición correcta B.', 'historica'],
  [2599, [55, 102], ['II-1', 'IV-4'], ['Infrastructure as Code', 'IaC', 'cloud-native', 'automatización', 'gestión de configuración'], [s.iac, s.nistIac], '', 'Se amplía la definición para no limitar IaC a infraestructura virtual ni a un ejecutable concreto. IaC describe infraestructura en ficheros de texto/versionados y automatiza aprovisionamiento y configuración de forma repetible; puede cubrir redes, almacenamiento, máquinas virtuales y otros recursos. La opción correcta sigue siendo B.', 'corregida'],
  [2600, [47, 98], ['II-10', 'III-13'], ['PGGC', 'perfil de riesgos', 'riesgos ordinarios y extraordinarios', 'garantía de calidad'], [s.pggc], '', 'El PGGC sí enumera siete tipos genéricos de riesgos potenciales (R1–R7) y evalúa el perfil de cada proyecto particular frente a ellos; no significa que las categorías no existan ni que se inventen de nuevo para cada proyecto. Se sustituye el enunciado incompleto por una afirmación incorrecta inequívoca; la respuesta es A. El documento se identifica como el Plan General de Garantía de Calidad de 1991.', 'corregida']
];

const edits = {
  2596: {
    texto: 'En los criterios del modelo histórico de McCall, ¿qué opción contiene el conjunto completo asociado a la reusabilidad?',
    opciones: [
      'Generalidad, modularidad, independencia del sistema software, independencia de máquina y autodescriptividad.',
      'Expandibilidad, generalidad, autodescriptividad y modularidad.',
      'Generalidad, modularidad, autodescriptividad y simplicidad.',
      'Expandibilidad, generalidad, autodescriptividad e instrumentación.'
    ],
    respuesta_correcta: 0
  },
  2597: {
    texto: 'En el modelo histórico de McCall, ¿cuál de estas opciones es un criterio de calidad y no uno de los factores de calidad?',
    opciones: ['Integridad.', 'Completitud.', 'Fiabilidad.', 'Facilidad de mantenimiento.'],
    respuesta_correcta: 1
  },
  2598: {
    texto: 'En el modelo histórico de calidad de McCall, ¿qué factores forman la perspectiva product transition, relativa a la adaptación a otros entornos?',
    opciones: [
      'Mantenibilidad, flexibilidad y reusabilidad.',
      'Portabilidad, reusabilidad e interoperabilidad.',
      'Mantenibilidad, flexibilidad y testabilidad.',
      'Portabilidad, reusabilidad y flexibilidad.'
    ],
    respuesta_correcta: 1
  },
  2599: {
    texto: '¿Qué describe Infrastructure as Code (IaC)?',
    opciones: [
      'Un conjunto de herramientas que detecta automáticamente y supervisa entornos multicloud, sin describir ni aprovisionar infraestructura.',
      'La práctica de describir y gestionar infraestructura mediante ficheros de configuración versionados y automatizar su aprovisionamiento y configuración de forma repetible.',
      'Un modelo de servicio cloud en el que el usuario solo configura aplicaciones y no administra la infraestructura subyacente.',
      'Un modelo de servicio cloud en el que el cliente administra el sistema operativo, los datos, las aplicaciones, el middleware y los tiempos de ejecución.'
    ],
    respuesta_correcta: 1
  },
  2600: {
    texto: 'Según el Plan General de Garantía de Calidad de 1991, señale la afirmación INCORRECTA sobre el perfil de riesgos de un proyecto:',
    opciones: [
      'El plan no contempla tipos genéricos de riesgos potenciales.',
      'El plan emplea una lista genérica de siete tipos de riesgos potenciales y evalúa el perfil del proyecto particular respecto de ellos.'
    ],
    respuesta_correcta: 0
  }
};

apply({ numero: '457', fecha: '2026-10-28', records, edits });
