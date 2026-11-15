const aplicar = require('./aplicar-lote.cjs');

const edits = {
  6861: {
    texto: 'Según el artículo 71.1 de la Ley 9/2017, ¿qué circunstancia no constituye por sí sola una prohibición de contratar con el sector público?',
    opciones: [
      'Estar únicamente sometida a un proceso penal no concluido por un delito contra la Hacienda Pública o la Seguridad Social, sin condena firme.',
      'No hallarse al corriente en el cumplimiento de las obligaciones tributarias o de Seguridad Social, en los términos reglamentarios.',
      'Haber recibido una sanción firme por infracción grave en materia de integración laboral e igualdad de oportunidades y no discriminación de las personas con discapacidad.',
      'Haber sido declarada insolvente en cualquier procedimiento.'
    ]
  },
  6862: {
    texto: 'Según la definición de la Encuesta de Población Activa del INE, ¿quién se clasifica como ocupado?',
    opciones: [
      'Las personas de 16 o más años que en la semana de referencia trabajaron al menos una hora a cambio de remuneración o beneficio, o que tenían un empleo del que estaban temporalmente ausentes.',
      'Las personas de 16 o más años que ofrecen mano de obra o están disponibles y en condiciones de incorporarse a la producción de bienes y servicios; esta es la definición de población activa.',
      'Las personas de 16 o más años que durante la semana de referencia no tenían empleo, estaban disponibles y habían buscado activamente trabajo.',
      'Las personas de 16 o más años no clasificadas como ocupadas ni como paradas.'
    ]
  },
  6863: {
    texto: 'Conforme al artículo 55 de la Ley Orgánica 3/2007, la aprobación de convocatorias de pruebas selectivas para el acceso al empleo público debe acompañarse de:',
    opciones: [
      'Un plan de igualdad aprobado para cada convocatoria.',
      'Un informe de impacto de género, salvo en casos de urgencia y sin perjuicio de la prohibición de discriminación por razón de sexo.',
      'Un programa de igualdad específico, que sustituye al informe de impacto de género.',
      'Todas las opciones anteriores.'
    ]
  },
  6864: {
    texto: '¿Qué norma de la Unión Europea, aplicable desde el 25 de mayo de 2018, regula con carácter general la protección de datos personales y derogó la Directiva 95/46/CE?',
    opciones: [
      'El Reglamento (UE) 2016/679, de 27 de abril de 2016 (Reglamento general de protección de datos).',
      'La Directiva 2006/24/CE, relativa a la conservación de datos generados o tratados en relación con la prestación de servicios de comunicaciones electrónicas.',
      'La Directiva 2002/58/CE, sobre la privacidad y las comunicaciones electrónicas.',
      'La Directiva 95/46/CE, que sigue siendo la norma general aplicable desde esa fecha.'
    ]
  },
  6865: {
    texto: 'Según los apartados 6 a 8 del artículo 12 del Estatuto de la Agencia Española de Protección de Datos, aprobado por el Real Decreto 389/2021, ¿qué órganos dependen directamente de la Presidencia?',
    opciones: [
      'El Consejo Consultivo, el Registro General de Protección de Datos y la Inspección de Datos como órgano directivo independiente.',
      'La Dirección de la Agencia, el Registro General de Protección de Datos, la Inspección de Datos y la Secretaría General.',
      'La Adjuntía a la Presidencia; las Subdirecciones Generales de Inspección de Datos y de Promoción y Autorizaciones; la Secretaría General; y las Divisiones de Relaciones Internacionales e Innovación Tecnológica.',
      'La Adjuntía a la Presidencia y las dos Subdirecciones Generales, sin Secretaría General ni divisiones dependientes de la Presidencia.'
    ]
  }
};

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const lcsp = 'https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902';
const igualdade = 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-6115';
const gdpr = 'https://eur-lex.europa.eu/eli/reg/2016/679/oj';
const aepd = 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-9175';
const ine = 'https://www.ine.es/dyngs/INEbase/operacion.htm?c=Estadistica_C&cid=1254736176918&idp=1254735976595&menu=faq';

const records = [
  [6861, [11], [], ['LCSP', 'artículo 71', 'prohibiciones de contratar', 'condena firme', 'insolvencia', 'obligaciones tributarias', 'discapacidad'], [
    { url: lcsp, referencia: 'Ley 9/2017, arts. 71.1.a-d: las causas comprenden, entre otras, condenas mediante sentencia firme, sanciones administrativas firmes en los supuestos legales, insolvencia y falta de cumplimiento tributario o de Seguridad Social. El mero hecho de estar sometida a un proceso penal sin condena firme no figura por sí solo como causa.' },
    { url: a1, referencia: 'Convocatoria estatal A1 GSI 2025, anexo I, tema 11: contratos públicos y Ley de Contratos del Sector Público.' }
  ], edits[6861], 'Se mantiene A, pero se precisa que el procedimiento penal no concluido y sin condena firme no constituye por sí solo la prohibición del art. 71.1.a. Las otras opciones describen causas expresas del artículo 71.1.b-d. Se añade esta delimitación para no confundir acusación/proceso pendiente con condena firme.', 'corregida'],
  [6862, [17], [], ['EPA', 'INE', 'ocupados', 'semana de referencia', 'una hora', 'población activa', 'población parada'], [
    { url: ine, referencia: 'INE, preguntas frecuentes de la EPA y metodología: ocupado es quien trabaja al menos una hora en la semana de referencia a cambio de remuneración (o ganancia en actividad por cuenta propia) o mantiene un empleo del que está temporalmente ausente. Distingue población ocupada, parada y activa.' },
    { url: 'https://www.ine.es/daco/daco42/daco4211/epa0107.pdf', referencia: 'INE, definiciones EPA: población ocupada de 16 o más años, trabajo de al menos una hora durante la semana de referencia, y personas con empleo temporalmente ausentes.' },
    { url: a1, referencia: 'Convocatoria estatal A1 GSI 2025, anexo I, tema 17: mercado de trabajo, evolución, características y principales magnitudes.' }
  ], edits[6862], 'Se mantiene A y se armoniza la definición con la metodología actual del INE: población de 16 o más años, semana de referencia, umbral de una hora, remuneración/beneficio y empleo temporalmente ausente. B describe población activa; C, parada; D, inactiva. No se confunde la EPA con las estadísticas administrativas de afiliación o paro registrado.', 'corregida'],
  [6863, [16], ['I-5'], ['LO 3/2007', 'artículo 55', 'informe de impacto de género', 'pruebas selectivas', 'empleo público', 'urgencia'], [
    { url: igualdade, referencia: 'Ley Orgánica 3/2007, art. 55: las convocatorias de pruebas selectivas de acceso al empleo público deben acompañarse de informe de impacto de género, salvo casos de urgencia; en todo caso se mantiene la prohibición de discriminación por razón de sexo.' },
    { url: a1, referencia: 'Convocatoria estatal A1 GSI 2025, anexo I, tema 16: políticas de igualdad de género y otras políticas sociales.' },
    { url: a2, referencia: 'Convocatoria estatal A2 GSI 2025, anexo, tema I.5: políticas de igualdad y contra la violencia de género, igualdad de trato y no discriminación.' }
  ], edits[6863], 'Se mantiene B y se incorpora al enunciado la excepción expresa de urgencia del art. 55 LO 3/2007. El informe de impacto de género acompaña la aprobación de la convocatoria salvo urgencia; la prohibición de discriminación por sexo no admite esa excepción.', 'corregida'],
  [6864, [27], ['I-7'], ['RGPD', 'Reglamento (UE) 2016/679', 'Directiva 95/46/CE', '25 de mayo de 2018', 'protección de datos'], [
    { url: gdpr, referencia: 'Reglamento (UE) 2016/679, arts. 94 y 99: deroga la Directiva 95/46/CE y se aplica desde el 25 de mayo de 2018. EUR-Lex identifica el acto como vigente.' },
    { url: a1, referencia: 'Convocatoria estatal A1 GSI 2025, anexo I, tema 27: régimen de protección de datos y Reglamento (UE) 2016/679.' },
    { url: a2, referencia: 'Convocatoria estatal A2 GSI 2025, anexo, tema I.7: régimen jurídico de protección de datos y autoridades de control.' }
  ], edits[6864], 'Se mantiene A, pero se expresa la denominación oficial completa y se confirma el carácter vigente del Reglamento (UE) 2016/679. Su art. 99 fija la aplicación a partir del 25 de mayo de 2018 y el art. 94 deroga la Directiva 95/46/CE; la Directiva 2002/58/CE regula un ámbito complementario de privacidad en comunicaciones electrónicas.', 'corregida'],
  [6865, [27], ['I-7'], ['AEPD', 'Real Decreto 389/2021', 'Estatuto AEPD', 'artículo 12', 'Presidencia', 'Adjuntía', 'estructura orgánica', 'norma derogada'], [
    { url: aepd, referencia: 'Real Decreto 389/2021, Estatuto AEPD, art. 12.6-8: dependen directamente de la Presidencia la Adjuntía, las Subdirecciones Generales de Inspección de Datos y de Promoción y Autorizaciones, la Secretaría General y las Divisiones de Relaciones Internacionales e Innovación Tecnológica. La disposición derogatoria única derogó el RD 428/1993; su disposición adicional suprimió el puesto de Director, el Registro General y la Inspección de Datos como órganos directivos.' },
    { url: a1, referencia: 'Convocatoria estatal A1 GSI 2025, anexo I, tema 27: Delegado y autoridades de protección de datos, incluida la AEPD.' },
    { url: a2, referencia: 'Convocatoria estatal A2 GSI 2025, anexo, tema I.7: autoridades de protección de datos.' }
  ], edits[6865], 'Se corrige sustancialmente: la pregunta original atribuía al art. 12 del antiguo Estatuto (RD 428/1993) una estructura ya derogada. El RD 389/2021 derogó ese Estatuto y su art. 12 vigente regula la Presidencia y los órganos que dependen directamente de ella. Se sustituye la lista obsoleta por la enumeración vigente y se mantienen las opciones distractoras con órganos extinguidos o incompletos.', 'corregida']
];

aplicar({ numero: '1308', fecha: '2026-11-15', records });
