const apply = require('./aplicar-lote.cjs');

const source = {
  pggc: {
    url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A018552c6-b17d-46a3-a982-32deb2fcaf5d/1991-Plan-General-de-Garantia-de-calidad-NIPO-328-91-023-6.pdf',
    referencia: 'Ministerio para las Administraciones Públicas, Plan General de Garantía de Calidad Aplicable al Desarrollo de Equipamiento Lógico (1991), fascículo 2: atributos de proyecto, diagrama característico y determinación del foco de interés. El manual establece escalas [1..5] para atributos (pp. 78–81), explica que el diagrama refleja la evaluación de los atributos (p. 97) y describe el foco de interés por fase/producto con intensidad nominal 1, especial 2 y, excepcionalmente, mínima 0 (fascículo 1 §11.5; fascículo 2 §6.3).'
  },
  mccall: {
    url: 'https://apps.dtic.mil/sti/pdfs/ADA049014.pdf',
    referencia: 'McCall, Richards y Walters, Factors in Software Quality, RADC-TR-77-369, vol. I, informe original de 1977: modelo jerárquico de factores de calidad, criterios asociados y métricas para cuantificar criterios; definición del factor Maintainability como esfuerzo relacionado con localizar y corregir errores.'
  },
  efqm: {
    url: 'https://www.scribd.com/document/380796838/Ass-Scorebook-Lge-Comp-En',
    referencia: 'EFQM, Assessor Scorebook for use with the 2003 EFQM Excellence Model, Large Company version (copyright EFQM 2003), hoja de resumen de puntuación: Customer Results 2.0/20%, Key Performance Results 1.5/15% y Processes 1.4/14%. Documento histórico; esos pesos no se presentan como los del EFQM actual.'
  },
  efqmHistory: {
    url: 'https://isahp.org/uploads/055-p.pdf',
    referencia: 'Proceedings of the 6th International Symposium on the Analytic Hierarchy Process (2001), esquema EFQM citado con fuente de los pesos de modelo histórico: Customer Satisfaction 20%, Company Results 15%, Processes 14%; soporte contextual de la nomenclatura/ponderación antigua, no se usa como sustituto del scorebook EFQM 2003.'
  }
};

const records = [
  [2606, [96, 98], ['III-7', 'III-13'], ['PGGC', 'diagrama característico', 'atributos de proyecto', 'escala 1 a 5', 'modelo histórico de calidad'], [source.pggc], '', 'Se acota al Plan General de Garantía de Calidad de 1991. El fascículo 2 agrupa atributos del producto, entorno de implantación y proyecto/proceso; utiliza valores en escala 1–5 y con ellos forma el diagrama característico. Se mantiene la opción de 18 atributos como respuesta del inventario histórico del PGGC. La cifra se trata como una característica de ese método histórico, no como recomendación vigente.', 'historica'],
  [2607, [98], ['III-13'], ['McCall', 'factores criterios métricas', 'modelo histórico de calidad', 'jerarquía de medición'], [source.mccall], '', 'Se corrige el orden conceptual del enunciado. En el modelo clásico de McCall, los factores son características de calidad de nivel superior; los criterios describen atributos que permiten juzgarlos, y las métricas cuantifican los criterios. Se conserva la pregunta por la afirmación falsa y se sustituye la opción falsa para expresar inequívocamente la inversión factores/criterios/métricas. Es terminología de un modelo histórico, no un esquema universal de medición actual.', 'historica'],
  [2608, [96, 98], ['III-7', 'III-13'], ['PGGC', 'foco de interés', 'intensidad de garantía de calidad', 'diagrama característico', 'modelo histórico de calidad'], [source.pggc], '', 'Se precisa la secuencia del PGGC: para proyectos dentro del umbral de riesgos ordinarios se aplica al diagrama característico la plantilla correspondiente al modelo de desarrollo escogido y se determina el foco de interés, asignando intensidad a cada fase/producto. Los niveles ordinario son nominal (1) y especial (2); el nivel mínimo (0) se reserva a una carencia manifiesta de recursos. El perfil de riesgos es una evaluación separada y no sustituye por sí solo este procedimiento.', 'historica'],
  [2609, [103], ['III-13'], ['EFQM', 'ponderación de criterios', 'modelo EFQM 2003', 'RADAR', 'modelo histórico de excelencia'], [source.efqm, source.efqmHistory], '', 'Se fija la edición que faltaba en el original. En el EFQM Excellence Model 2003, los pesos máximos eran Customer Results 20%, Key Performance Results 15% y Processes 14%; esa es la terna, en orden descendente, que la opción original resumía como satisfacción del cliente, resultados y procesos. Se reescribe con nombres y porcentajes para evitar confundir “resultados” empresariales con cualquier criterio de resultados. El reactivo es histórico: los pesos y la propia estructura no se deben atribuir al EFQM 2025.', 'historica'],
  [2610, [98], ['III-13'], ['McCall', 'mantenibilidad', 'localizar y corregir errores', 'factor de calidad', 'modelo histórico de calidad'], [source.mccall], '', 'Se corrige “delimitar” por “corregir”: en el factor histórico Maintainability/Mantenibilidad de McCall, la idea es el esfuerzo requerido para localizar y corregir un error. El reactivo se reformula para no omitir la actividad de reparación ni confundirlo con Usability, Flexibility o Testability. Es una definición de modelo histórico.', 'historica']
];

const edits = {
  2606: {
    texto: 'En el Plan General de Garantía de Calidad (PGGC) de 1991, ¿qué número de atributos y escala se emplean para construir el diagrama característico de un proyecto?',
    respuesta_correcta: 1
  },
  2607: {
    texto: 'En el modelo histórico de calidad de McCall, señale la afirmación FALSA sobre la jerarquía factores–criterios–métricas:',
    opciones: [
      'Las métricas cuantifican criterios de calidad mediante medidas observables.',
      'Los criterios son atributos que permiten juzgar los factores de calidad.',
      'Los factores expresan características de calidad de nivel superior.',
      'La jerarquía comienza en los criterios, que se calculan mediante factores, y termina con métricas que miden directamente los factores sin pasar por los criterios.'
    ],
    respuesta_correcta: 3
  },
  2608: {
    texto: 'En el PGGC de 1991, para un proyecto dentro del umbral de riesgos ordinarios, ¿cómo se determina el foco de interés de garantía de calidad?',
    opciones: [
      'No se determina un foco: el PGGC aplica siempre intensidad uniforme a todas las fases.',
      'Se obtiene únicamente del perfil de riesgos, sin atender al modelo de desarrollo ni a sus fases y productos.',
      'Se aplica al diagrama característico la plantilla del modelo de desarrollo seleccionado y se asigna a cada fase/producto intensidad nominal (1) o especial (2); el nivel mínimo (0) es excepcional.',
      'Se asignan cinco niveles de intensidad a cada fase según el criterio del promotor, sin usar plantilla ni diagrama característico.'
    ],
    respuesta_correcta: 2
  },
  2609: {
    texto: 'En la versión 2003 del EFQM Excellence Model, ¿qué tres criterios tenían mayor ponderación, en orden descendente?',
    opciones: [
      'Customer Results (20%); Key Performance Results (15%); Processes (14%).',
      'Customer Results (20%); People Results (9%); Leadership (10%).',
      'Processes (14%); Customer Results (20%); Society Results (6%).',
      'Key Performance Results (15%); Leadership (10%); Policy and Strategy (8%).'
    ],
    respuesta_correcta: 0
  },
  2610: {
    texto: 'En el modelo histórico de calidad de McCall, ¿qué factor se refiere al esfuerzo necesario para localizar y corregir un error en un programa?',
    respuesta_correcta: 1
  }
};

apply({ numero: '459', fecha: '2026-10-28', records, edits });

