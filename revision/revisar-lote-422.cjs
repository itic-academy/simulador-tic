const apply = require('./aplicar-lote.cjs');

const records = [
  [2421, [47], ['IV-12'], ['MAC', 'DAC', 'RBAC', 'etiquetas de seguridad', 'autorización de usuarios'], [
    { url: 'https://csrc.nist.gov/glossary/term/mandatory_access_control', referencia: 'NIST CSRC Glossary, Mandatory Access Control: decisiones de política centralizadas y acceso según la sensibilidad (etiqueta) del recurso y la autorización formal/clearance del usuario.' }
  ], '', 'Se corrige la descripción imprecisa del original, que mezclaba el nivel de seguridad del objeto con el recurso solicitado. En MAC la decisión se aplica centralmente y compara la sensibilidad etiquetada del objeto con la autorización del sujeto; los usuarios no pueden modificar a voluntad esas reglas o atributos. DAC delega permisos al propietario y RBAC los asocia a roles.', 'corregida'],
  [2422, [84], ['II-16'], ['OCR', 'ICR', 'entrenamiento', 'reconocimiento de texto', 'documentos'], [
    { url: 'https://tesseract-ocr.github.io/tessdoc/FAQ.html', referencia: 'Tesseract User Manual, FAQ / Training: el motor puede entrenarse para reconocer otros idiomas o ajustar modelos lingüísticos ya existentes.' },
    { url: 'https://github.com/tesseract-ocr/tesstrain', referencia: 'Proyecto oficial tesstrain de Tesseract: permite entrenar/ajustar modelos con imágenes de líneas y transcripciones de referencia.' }
  ], '', 'La afirmación se limita explícitamente a un motor OCR con modelo entrenable y a documentos fuera de su dominio de entrenamiento: puede ajustarse con muestras representativas y transcripciones. No se afirma que todo OCR requiera entrenamiento; los motores preentrenados también pueden funcionar sin adaptación. Se corrige el distractor absurdo de cálculo diferencial y se elimina la generalización sobre precio/configuración.', 'corregida'],
  [2423, [85], [], ['blockchain', 'contrato inteligente', 'automatización', 'Ethereum', 'EVM'], [
    { url: 'https://csrc.nist.gov/glossary/term/Smart_contract', referencia: 'NIST CSRC Glossary, Smart contract / NISTIR 8202: colección de código y datos desplegada en blockchain; los nodos la ejecutan y registran los resultados en la cadena.' },
    { url: 'https://ethereum.org/developers/docs/smart-contracts/', referencia: 'Ethereum.org, Introduction to smart contracts: programa desplegado que se ejecuta según reglas codificadas cuando se invocan sus funciones; las interacciones de escritura requieren transacción.' },
    { url: 'https://ethereum.org/developers/docs/smart-contracts/security/', referencia: 'Ethereum.org, Smart contract security: una cuenta multifirma puede requerir varias firmas para ejecutar acciones administrativas.' }
  ], '', 'La respuesta correcta es la automatización de reglas codificadas ejecutadas por los nodos cuando se invoca el contrato. Se evita prometer «inmediatez»: la ejecución de escritura depende de transacción, gas e inclusión/consenso de la red. Los contratos desplegados no se editan simplemente en el mismo estado/código, aunque hay patrones de actualización; se puede emplear control multifirma. Un ataque Sybil es una amenaza de identidad/consenso de la red, no la descripción genérica de una vulnerabilidad en el código de un contrato.', 'corregida'],
  [2424, [86], ['III-1', 'III-2'], ['modelo espiral', 'Boehm', 'ciclo de vida', 'análisis de riesgos', 'iteraciones'], [
    { url: 'https://ieeexplore.ieee.org/abstract/document/59', referencia: 'Barry W. Boehm, “A Spiral Model of Software Development and Enhancement”, IEEE Computer 21(5), 1988, DOI 10.1109/2.59: cuadrantes de objetivos/alternativas/restricciones, evaluación de alternativas y riesgos, desarrollo/verificación del siguiente nivel y planificación de fases posteriores.' },
    { url: 'https://www.cs.hmc.edu/~markk/SWE_copies/boehmspiral.pdf', referencia: 'Copia del artículo original de Boehm (1988), figura de los cuatro sectores del ciclo espiral.' }
  ], '', 'Se ordenan las cuatro actividades del modelo original de Boehm: determinar objetivos, alternativas y restricciones; evaluar alternativas e identificar/resolver riesgos; desarrollar y verificar el producto de siguiente nivel; y planificar la fase siguiente. El original incluía «planificación» en el tercer puesto y «desarrollo» después, por lo que la secuencia no correspondía al modelo.', 'corregida'],
  [2425, [35, 87], [], ['planificación estratégica', 'misión', 'objetivos', 'factores externos', 'organización'], [
    { url: 'https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title5-section306&num=0&edition=prelim', referencia: 'United States Code, 5 U.S.C. § 306(a): contenidos del plan estratégico de una agencia, entre ellos misión, metas/objetivos y factores externos que puedan afectar significativamente a su consecución.' }
  ], '', 'Se elimina la pregunta genérica sobre «guiar a una organización hacia el futuro», que no definía un marco estratégico y permitía respuestas dependientes del contexto. Se ancla la pregunta expresamente en el contenido mínimo de un plan estratégico de agencia recogido en 5 U.S.C. § 306(a): misión, metas/objetivos y factores externos significativos son elementos explícitos; una relación de subvenciones garantizadas no figura como contenido estratégico básico exigido por esa norma. No se presenta la ley estadounidense como norma aplicable en España.', 'corregida']
];

const edits = {
  2421: {
    texto: '¿Qué modelo de control de acceso aplica centralmente una política que compara la sensibilidad indicada por la etiqueta del recurso con la autorización formal del usuario?',
    opciones: [
      'DAC (Discretionary Access Control).',
      'RBAC (Role-Based Access Control).',
      'MAC (Mandatory Access Control).',
      'ABAC (Attribute-Based Access Control).'
    ], respuesta_correcta: 2
  },
  2422: {
    texto: 'En un motor OCR con modelo entrenable, si los documentos contienen tipografías o vocabulario que el modelo no reconoce bien, ¿qué medida puede mejorar el reconocimiento?',
    opciones: [
      'Ajustar o entrenar el modelo con muestras representativas y transcripciones de referencia.',
      'Conservar exclusivamente las imágenes en papel y desactivar el reconocimiento.',
      'Aplicar cálculo diferencial, que sustituye la lectura de caracteres.',
      'Aumentar la velocidad de impresión del documento original.'
    ], respuesta_correcta: 0
  },
  2423: {
    texto: 'En Ethereum, ¿qué afirmación describe correctamente un contrato inteligente?',
    opciones: [
      'Es un archivo PDF que expresa un acuerdo, pero no contiene código ejecutable.',
      'El código de todo contrato desplegado puede editarse directamente en su misma dirección sin usar mecanismos de actualización.',
      'Es un programa desplegado en la cadena cuyas funciones ejecutan reglas codificadas cuando se invocan mediante las operaciones previstas.',
      'No es posible gestionar funciones administrativas mediante una cuenta multifirma.'
    ], respuesta_correcta: 2
  },
  2424: {
    texto: 'En el modelo espiral de Boehm, señale la secuencia correcta de las cuatro actividades básicas de cada ciclo:',
    opciones: [
      'Determinar objetivos, alternativas y restricciones; evaluar alternativas e identificar/resolver riesgos; desarrollar y verificar el siguiente nivel del producto; planificar la fase siguiente.',
      'Determinar objetivos; planificar la fase siguiente; desarrollar el producto; evaluar los riesgos al finalizar todo el proyecto.',
      'Planificar el proyecto completo; desarrollar el producto; determinar objetivos; implantar y mantener el sistema.',
      'Evaluar alternativas; desarrollar el producto; planificar la fase siguiente; identificar riesgos antes del primer ciclo.'
    ], respuesta_correcta: 0
  },
  2425: {
    texto: 'Según 5 U.S.C. § 306(a), ¿cuál de los siguientes elementos NO figura entre los contenidos básicos que debe describir el plan estratégico de una agencia?',
    opciones: [
      'Una declaración de misión que abarque sus funciones y operaciones principales.',
      'Metas y objetivos generales para sus funciones principales.',
      'Factores externos fuera de su control que puedan afectar significativamente al logro de sus objetivos.',
      'Una relación de subvenciones garantizadas para financiar sus objetivos.'
    ], respuesta_correcta: 3
  }
};

apply({ numero: '422', fecha: '2026-10-28', records, edits });
