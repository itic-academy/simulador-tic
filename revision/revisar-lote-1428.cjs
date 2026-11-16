const apply = require('./aplicar-lote.cjs');

const records = [
  [7441, [8], ['I-8'], ['Ley 40/2015', 'régimen jurídico del sector público', 'AGE', 'organización y funcionamiento'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566', referencia: 'Ley 40/2015, texto consolidado del BOE, artículo 1: establece las bases del régimen jurídico de las Administraciones Públicas y regula expresamente la organización y funcionamiento de la AGE y su sector público institucional.' },
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-25336', referencia: 'Ley 50/1997, del Gobierno: regula el Gobierno y sus órganos; se distingue de la Ley 40/2015 como norma general de régimen jurídico del sector público.' }
  ], {
    texto: '¿Qué ley establece las bases del régimen jurídico de las Administraciones Públicas y regula expresamente la organización y funcionamiento de la Administración General del Estado?',
    opciones: [
      'La Ley 40/2015, de Régimen Jurídico del Sector Público.',
      'La Ley 39/2015, del Procedimiento Administrativo Común.',
      'La Ley 50/1997, del Gobierno.',
      'La Ley 19/2013, de transparencia, acceso a la información pública y buen gobierno.'
    ],
    respuesta_correcta: 0
  }, 'Corregida A. La Ley 40/2015, artículo 1, enuncia literalmente que regula las bases del régimen jurídico y la organización y funcionamiento de la AGE. La redacción original era amplia y podía confundirse con la Ley 50/1997, que regula la organización y funciones del Gobierno; se identifica la norma y el objeto legal exacto.', 'corregida'],
  [7442, [5], [], ['Comisión Europea', 'Colegio de Comisarios', 'Reglamento interno de la Comisión', 'reuniones semanales'], [
    { url: 'https://eur-lex.europa.eu/eli/dec/2024/3080/oj', referencia: 'Decisión (UE) 2024/3080 de la Comisión, de 4 de diciembre de 2024, Reglamento interno vigente de la Comisión, artículo 5: la Comisión se reúne, como regla general, una vez por semana (reuniones ordinarias).' },
    { url: 'https://commission.europa.eu/strategy-and-policy/decision-making-process-commission/decision-making-during-weekly-meetings_en', referencia: 'Comisión Europea, Decision-making during weekly meetings: explica públicamente que la Comisión se reúne generalmente una vez a la semana.' }
  ], {
    texto: 'Según el artículo 5 del Reglamento interno vigente de la Comisión Europea, ¿con qué frecuencia se reúne como regla general el Colegio de Comisarios?',
    opciones: ['Una vez por semana.', 'Una vez al mes.', 'Dos veces por semana.', 'Cuando lo acuerde la Presidencia y, además, una vez al mes.'],
    respuesta_correcta: 0
  }, 'Vigente A. La frecuencia semanal está en el artículo 5 del Reglamento interno actual aprobado por Decisión (UE) 2024/3080. Se añade «como regla general» para conservar el alcance literal de la norma, que admite reuniones extraordinarias y no afirma que ninguna semana pueda tener excepciones.', 'vigente'],
  [7443, [8, 46], ['I-8', 'I-9'], ['Ley 39/2015', 'documento electrónico', 'archivo electrónico', 'conservación', 'autenticidad', 'integridad'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565', referencia: 'Ley 39/2015, texto consolidado del BOE, artículo 17.2: exige conservar los documentos en formato que garantice autenticidad, integridad, conservación y consulta con independencia del tiempo transcurrido; contempla la migración a otros formatos y la eliminación autorizada conforme a normativa aplicable. No fija un plazo general de cinco años desde la emisión.' }
  ], {
    texto: 'Según el artículo 17.2 de la Ley 39/2015, señale la afirmación incorrecta sobre el formato de conservación de documentos electrónicos.',
    opciones: [
      'La ley fija como regla general que solo deba garantizarse su consulta hasta cinco años desde la emisión.',
      'Debe garantizar la autenticidad del documento.',
      'Debe garantizar su integridad y conservación.',
      'Debe permitir su consulta con independencia del tiempo transcurrido, sin perjuicio de la eliminación autorizada conforme a la normativa aplicable.'
    ],
    respuesta_correcta: 0
  }, 'Corregida A. La Ley 39/2015, artículo 17.2, no fija un plazo general de cinco años: prescribe consulta con independencia del tiempo transcurrido, y remite la eliminación autorizada a la normativa aplicable. Se explicita esa salvedad para no convertir el precepto en una obligación de conservación ilimitada contraria a las reglas archivísticas.', 'corregida'],
  [7444, [16], ['I-5'], ['Ley Orgánica 3/2007', 'igualdad de trato', 'igualdad de oportunidades', 'acción positiva'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-6115', referencia: 'Ley Orgánica 3/2007, texto consolidado del BOE, artículo 1: su objeto es hacer efectivo el derecho de igualdad de trato y oportunidades entre mujeres y hombres, en particular mediante la eliminación de la discriminación por razón de sexo.' },
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-6115', referencia: 'Ley Orgánica 3/2007, artículo 11: regula medidas de acción positiva como instrumentos para hacer efectivo el derecho de igualdad, diferenciándolas del objeto definido en el artículo 1.' }
  ], {
    texto: '¿Qué derecho señala literalmente el artículo 1.1 de la Ley Orgánica 3/2007 como objeto de la norma?',
    opciones: [
      'Establecer como objeto la elaboración de medidas de acción positiva.',
      'Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombres.',
      'Ninguna de las anteriores.',
      'Las respuestas A y B.'
    ],
    respuesta_correcta: 1
  }, 'Corregida B. La pregunta se acota a la formulación literal del artículo 1.1: hacer efectivo el derecho de igualdad de trato y oportunidades. Las medidas de acción positiva sí aparecen en la ley, en particular en el artículo 11, como instrumento para alcanzar la igualdad; no son la respuesta literal a lo que el artículo 1.1 define como objeto. La precisión evita que A se confunda con otros fines e instrumentos de la norma.', 'corregida'],
  [7445, [5, 22], ['I-6', 'I-9'], ['Plan de Acción de Administración Electrónica UE', '2016-2020', 'modernización digital', 'interoperabilidad transfronteriza'], [
    { url: 'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:52016DC0179', referencia: 'Comisión Europea, COM(2016) 179 final, EU eGovernment Action Plan 2016–2020: define tres prioridades estratégicas: modernizar las Administraciones con TIC, hacer posible la movilidad transfronteriza mediante servicios públicos digitales interoperables y facilitar la interacción digital con ciudadanos y empresas.' },
    { url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52016DC0179', referencia: 'COM(2016) 179 final, sección 3, “Policy Priorities”: texto oficial de la Comisión que desarrolla las tres prioridades del plan histórico 2016–2020 y las concreta en acciones.' }
  ], {
    texto: 'En el Plan de Acción sobre Administración Electrónica de la UE 2016–2020, ¿cuáles eran sus tres prioridades estratégicas?',
    opciones: [
      'Los siete principios orientadores, entre ellos digital por defecto, una sola vez, inclusividad, apertura, carácter transfronterizo e interoperabilidad por defecto y seguridad.',
      'Modernizar las Administraciones con TIC; posibilitar la movilidad transfronteriza mediante servicios públicos digitales interoperables; y facilitar la interacción digital con ciudadanos y empresas.',
      'Capacitar a ciudadanos y empresas; reforzar el mercado interior; mejorar la eficiencia de los gobiernos; crear condiciones previas para la administración electrónica.',
      'Neutralidad tecnológica y adaptabilidad; interoperabilidad; usabilidad; proporcionalidad.'
    ],
    respuesta_correcta: 1
  }, 'Histórica B. La respuesta recoge las tres prioridades estratégicas de COM(2016) 179. Se acota el enunciado a las prioridades (no a los siete principios orientadores de otra sección) y se conserva el periodo 2016–2020 como plan finalizado, evitando presentarlo como política vigente. La búsqueda de Academy localizó material actual sobre administración digital, pero no contenido específico de este plan ya expirado; se cita la comunicación primaria de la Comisión.', 'historica']
];

apply({ numero: '1428', fecha: '2026-11-16', records });
