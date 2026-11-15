const apply = require('./aplicar-lote.cjs');

const sources = {
  rel: [
    {
      url: 'https://mpeg.chiariglione.org/standards/mpeg-21/rights-expression-language.html',
      referencia: 'MPEG-21 Rights Expression Language, apartado 2: el grant se compone de principal, right, resource y condition; “condition” especifica los términos bajo los que se ejercen los derechos.'
    },
    {
      url: 'https://www.iso.org/standard/36095.html',
      referencia: 'ISO/IEC 21000-5:2004, estándar MPEG-21 Part 5 Rights Expression Language, revisado y confirmado por ISO como versión vigente.'
    }
  ],
  ip: [
    {
      url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930',
      referencia: 'Real Decreto Legislativo 1/1996, texto consolidado, artículo 3: los derechos de autor son independientes, compatibles y acumulables con los derechos de propiedad industrial que puedan existir sobre la obra.'
    }
  ],
  shared: [
    {
      url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2024-22935',
      referencia: 'Real Decreto 1125/2024, artículo 9: los medios y servicios digitales comunes son declarados transversales por la Comisión de Estrategia TIC, a propuesta del Consejo Rector de la Agencia y tras valorar su interés/efectos, cuando responden a necesidades de un número significativo de unidades administrativas.'
    }
  ],
  nti: [
    {
      url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2011-13170',
      referencia: 'Norma Técnica de Interoperabilidad de Expediente Electrónico, apartado III.1: su estructura incluye documentos electrónicos, índice electrónico, firma del índice y metadatos del expediente; una descripción narrativa separada no es componente formal independiente.'
    },
    {
      url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331',
      referencia: 'Real Decreto 4/2010, artículo 21: inclusión de índice electrónico firmado y asociación de metadatos en los expedientes electrónicos.'
    }
  ],
  mag: [
    {
      url: 'https://pilar.ccn-cert.cni.es/docman/documentos/1-magerit-v3-libro-i-metodo/file',
      referencia: 'CCN-CERT, MAGERIT v3, Libro I, glosario: activo es un recurso del sistema de información o relacionado con él, necesario para que la organización funcione y alcance sus objetivos; distingue amenaza e impacto.'
    }
  ]
};

apply({
  numero: '1406',
  fecha: '2026-11-15',
  records: [
    [7331, [], ['II-14'], ['MPEG-21', 'REL', 'grant', 'condition'], sources.rel, {
      texto: 'En el modelo básico de grant de MPEG-21 Part 5 REL, ¿cuál de estos elementos no es uno de sus cuatro componentes?',
      opciones: ['Principal.', 'Right (derecho).', 'Resource (recurso).', 'Un componente de nivel superior denominado constraints.'],
      respuesta_correcta: 3
    }, 'Corregida D. “REL” sin especificar estándar era ambiguo porque hay varios lenguajes de expresión de derechos. Se identifica MPEG-21 Part 5: su grant básico contiene principal, right, resource y condition. Las condiciones pueden expresar restricciones de uso, pero el componente estructural se denomina condition, no constraints.', 'corregida'],
    [7332, [], ['II-14'], ['derechos de autor', 'propiedad industrial', 'LPI'], sources.ip, {}, 'El artículo 3 del texto refundido vigente de la Ley de Propiedad Intelectual establece literalmente que los derechos de autor son independientes, compatibles y acumulables con los derechos de propiedad industrial que puedan existir sobre la obra. La opción D reproduce la regla. No requiere corrección.', 'vigente'],
    [7333, [49], ['I-10'], ['servicios comunes', 'servicios transversales', 'RD 1125/2024'], sources.shared, {
      texto: 'Según el artículo 9 del Real Decreto 1125/2024, ¿cómo se declaran transversales determinados medios o servicios digitales comunes de la Administración del Estado?',
      opciones: [
        'Por la Comisión de Estrategia TIC, a propuesta del Consejo Rector de la Agencia y cuando respondan al interés común y a necesidades de un número significativo de unidades administrativas.',
        'Por la Comisión Sectorial de Administración Electrónica, presidida por la persona titular de la Secretaría General de Administración Digital.',
        'Por decisión unilateral de cualquier unidad TIC que ofrezca un servicio en línea a la ciudadanía.',
        'Automáticamente, por el mero hecho de que un servicio permita acceso a varios procedimientos electrónicos.'
      ],
      respuesta_correcta: 0
    }, 'Corregida A. La pregunta original citaba el régimen anterior del Real Decreto 806/2014 y llamaba “de uso compartido” a lo que la regulación vigente denomina medios y servicios digitales comunes declarados transversales. El artículo 9 del Real Decreto 1125/2024 atribuye la declaración a la Comisión de Estrategia TIC, a propuesta del Consejo Rector de la Agencia, cuando se cumple el criterio de necesidades de un número significativo de unidades.', 'corregida'],
    [7334, [46], ['I-9'], ['expediente electrónico', 'NTI', 'ENI'], sources.nti, {
      texto: '¿Cuál de los siguientes elementos no forma parte de la estructura formal de un expediente electrónico según la NTI de Expediente Electrónico?',
      opciones: [
        'Una descripción narrativa de los documentos como elemento obligatorio independiente del índice y de los propios documentos.',
        'Los documentos electrónicos que integran el expediente.',
        'El índice electrónico y la firma de dicho índice por la Administración u órgano actuante.',
        'Los metadatos del expediente electrónico.'
      ],
      respuesta_correcta: 0
    }, 'Corregida A. Se precisa qué significa “componente”: la NTI define documentos electrónicos, índice electrónico, firma del índice y metadatos del expediente. Una descripción narrativa independiente no integra esa estructura formal, aunque el expediente incluya metadatos descriptivos y el índice recoja la relación de documentos.', 'corregida'],
    [7335, [47], ['II-10'], ['MAGERIT', 'activo', 'amenaza', 'impacto'], sources.mag, {
      texto: 'Según el glosario de MAGERIT v3, ¿qué se entiende por activo?',
      opciones: [
        'El daño o perjuicio que un incidente puede causar a la organización.',
        'El resultado de una agresión contra un sistema de información.',
        'Una causa potencial que puede desencadenar un incidente dañino.',
        'Un recurso del sistema de información, o relacionado con él, necesario para que la organización funcione y alcance sus objetivos.'
      ],
      respuesta_correcta: 3
    }, 'Corregida D. La edición original ofrecía solo definiciones ajenas al concepto de activo y la clave “ninguna de las anteriores”. Se incorpora la definición del glosario de MAGERIT v3 y se separa de conceptos próximos: la amenaza puede causar daño y el impacto es el daño producido.', 'corregida']
  ]
});
