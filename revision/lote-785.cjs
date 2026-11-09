const apply = require('./aplicar-lote.cjs');
const f = (url, referencia) => ({url, referencia});
apply({
  numero: '785',
  fecha: '2026-11-09',
  records: [
    [4246,[93],['III-2'],['acoplamiento','diseño modular'],
      f('https://www.irs.gov/irm/part2/irm_02-005-012','Design Techniques and Deliverables, tabla de coupling: stamp coupling pasa estructuras/objetos compuestos; control coupling pasa datos que dirigen el flujo del módulo receptor.'),
      '', 'Se precisa el nombre para evitar que «marca» se interprete como etiqueta: es acoplamiento por marca/estructura (stamp), cuando se pasa una estructura compuesta aunque el módulo receptor use solo parte de ella. No es acoplamiento de control, común ni externo.', 'corregida'],
    [4247,[94],[],['GUI','diseño de interfaces'],
      f('https://drive.google.com/file/d/1TrMnaWvyVMcsQ2DyFQi1G3ic9RBadYbI/view?usp=drivesdk','ITIC Academy, Tema 90 (edición 2017), apartado de modelos GUI: enumera modelo del usuario, del diseñador y del programador; el «modelo del cliente» no aparece en esa lista.'),
      '', 'Se delimita al esquema concreto enseñado en el Tema 90 de Academy: los tres puntos de vista allí enumerados son usuario, diseñador y programador. «Cliente» no es el cuarto término de ese esquema. No se presenta la lista como taxonomía universal de todo diseño de GUI.', 'corregida'],
    [4248,[86,88],['III-2'],['modelo en espiral','ciclo de vida','Boehm'],
      f('https://www.cs.hmc.edu/~markk/SWE_copies/boehmspiral.pdf','Barry W. Boehm, “A Spiral Model of Software Development and Enhancement”, IEEE Computer 21(5), 1988, pp. 61–72; cuatro sectores de cada vuelta.'),
      '', 'Se sustituye la lista imprecisa de «fases» por las cuatro actividades/sectores de Boehm: determinar objetivos, alternativas y restricciones; evaluar alternativas e identificar/resolver riesgos; desarrollar y verificar el producto del siguiente nivel; y planificar la siguiente fase. En la lista corregida, la opción D (evaluación del cliente como fase/sector separado) es la que no pertenece a esos cuatro sectores; la revisión de participantes al final de una vuelta no equivale a un quinto sector.', 'corregida'],
    [4249,[87,95],['III-2'],['MÉTRICA v3','planificación de SI','arquitectura de información'],
      [f('https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A8d2cfee5-5617-4dea-8cf8-7b7a0131de84/METRICA_V3_Panificacion_de_Sistemas_de_Informacion.pdf','MÉTRICA v3, Planificación de Sistemas de Información (PSI): actividades PSI 4, PSI 6, PSI 7 y PSI 8; arquitectura de información de alto nivel y plan de acción.'),
       f('https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk','ITIC Academy, bloque 38 (actualización 2026), epígrafe de MÉTRICA v3; cotejo de cobertura curricular.')],
      '', 'Se corrige el alcance: la arquitectura de información de alto nivel se pregunta como conjunto, cuyos tres elementos son el modelo de información, el modelo de sistemas de información y la arquitectura tecnológica. El plan de proyectos/acción también es un resultado del PSI (PSI 8), pero no uno de esos tres componentes de la arquitectura. Así se evita afirmar que MÉTRICA no contempla el plan de proyectos ni llamar «modelo de arquitectura» a la arquitectura tecnológica.', 'corregida'],
    [4250,[95],['III-6'],['MÉTRICA v3','pruebas del sistema','verificación'],
      [f('https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A19993efa-8c88-4205-b1a5-fb7fc0bd94de/METRICA_V3_Construccion_del_Sistema_de_Informacion.pdf','MÉTRICA v3, CSI 5, Ejecución de las Pruebas del Sistema: propósito y realización mediante verificaciones establecidas en el plan de pruebas.'),
       f('https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ada7d91fa-d6bd-467c-be32-a72e27c603b3/METRICA_V3_Tecnicas.pdf','MÉTRICA v3, Guía de Técnicas y Prácticas, práctica Pruebas, apartado «Pruebas del Sistema»: incluye funcionales, comunicaciones, rendimiento, volumen, sobrecarga, disponibilidad de datos, facilidad de uso, operación, entorno y seguridad.'),
       f('https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk','ITIC Academy, bloque 38 (actualización 2026), apartado de pruebas; cotejo curricular.')],
      '', 'Se mantiene como respuesta «pruebas de verificación», pero se precisa la distinción: MÉTRICA denomina verificaciones a las comprobaciones definidas en el plan de pruebas; entre los tipos enumerados de prueba del sistema aparecen las funcionales, de facilidad de uso y de volumen. «Prueba de verificación» no figura como categoría de esa lista. No se interpreta que las demás pruebas carezcan de objetivo verificativo.', 'corregida']
  ],
  edits: {
    4246: {
      texto: 'Si un módulo recibe como parámetro una estructura de datos compuesta y queda acoplado a su formato, ¿cómo se denomina este tipo de acoplamiento?',
      opciones: ['Acoplamiento por marca o estructura (stamp).','Acoplamiento de control.','Acoplamiento externo.','Acoplamiento común.'],
      respuesta_correcta: 0,
      comentarios: 'El módulo recibe una estructura compuesta como parámetro; esto es stamp coupling. En el acoplamiento de control el dato recibido dirige la lógica que ejecuta el módulo receptor.'
    },
    4247: {
      texto: 'Según el esquema de diseño de GUI del Tema 90 de ITIC Academy (2017), ¿cuál NO es uno de los tres puntos de vista enumerados?',
      opciones: ['Modelo del usuario.','Modelo del programador.','Modelo del diseñador.','Modelo del cliente.'],
      respuesta_correcta: 3,
      comentarios: 'El Tema 90 de Academy enumera modelo del usuario, modelo del diseñador y modelo del programador. La respuesta se limita expresamente a ese esquema docente, no a una clasificación universal.'
    },
    4248: {
      texto: 'En el modelo en espiral de Boehm, ¿cuál de las siguientes NO es una de las cuatro actividades que organizan cada vuelta?',
      opciones: ['Determinar objetivos, alternativas y restricciones.','Evaluar alternativas e identificar y resolver riesgos.','Desarrollar y verificar el producto del siguiente nivel.','Evaluación del cliente como una quinta actividad o sector independiente.'],
      respuesta_correcta: 3,
      comentarios: 'Boehm organiza cada vuelta en cuatro sectores: objetivos/alternativas/restricciones, evaluación de alternativas y riesgos, desarrollo/verificación del siguiente nivel y planificación de la siguiente fase. La revisión de participantes al cierre no crea un quinto sector.'
    },
    4249: {
      texto: 'En MÉTRICA v3 PSI, ¿cuál de estos productos NO es uno de los tres componentes de la arquitectura de información de alto nivel?',
      opciones: ['Plan de proyectos (plan de acción).','Modelo de información.','Modelo de sistemas de información.','Arquitectura tecnológica.'],
      respuesta_correcta: 0,
      comentarios: 'El PSI sí contempla el plan de acción/proyectos (PSI 8), pero este no es uno de los tres componentes de la arquitectura de información de alto nivel: modelo de información, modelo de sistemas de información y arquitectura tecnológica.'
    },
    4250: {
      texto: 'En la lista de tipos de pruebas del sistema de la guía de Técnicas y Prácticas de MÉTRICA v3, ¿cuál NO aparece como categoría?',
      opciones: ['Pruebas funcionales.','Pruebas de facilidad de uso.','Pruebas de verificación.','Pruebas de volumen.'],
      respuesta_correcta: 2,
      comentarios: 'La guía enumera pruebas funcionales, de facilidad de uso y de volumen, entre otras. «Verificación» describe el propósito de las comprobaciones definidas en el plan, no una categoría de esa lista de tipos.'
    }
  }
});
