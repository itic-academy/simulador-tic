const apply = require('./aplicar-lote.cjs');

const records = [
  [1426, [6], ['I-8'], ['Ley 40/2015', 'Delegaciones del Gobierno', 'sede', 'organización territorial de la AGE'],
    [{ url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566&p=20240802&tn=1', referencia: 'Ley 40/2015, artículo 69.2, texto consolidado del BOE: sede en la localidad del Consejo de Gobierno autonómico, con la excepción acordada por el Consejo de Ministros y sin perjuicio del Estatuto de Autonomía.' }], null,
    'Se verifica la opción C conforme al artículo 69.2 de la Ley 40/2015. La localidad ordinaria es aquella donde radica el Consejo de Gobierno autonómico; el Consejo de Ministros puede acordar otra, sin perjuicio de lo que disponga expresamente el Estatuto de Autonomía. Cotejo: ITIC Academy, bloque 01 Constitución, organización del Estado y AGE, versión 2026.2 (01-10-2026), organización territorial de la AGE y Ley 40/2015. Correspondencia: A1-6/A2-I-8.', 'corregida'],
  [1427, [8], ['I-8'], ['Ley 39/2015', 'nulidad de pleno derecho', 'artículo 47.1', 'contenido imposible'],
    [{ url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565', referencia: 'Ley 39/2015, artículos 47.1 y 48.2, texto consolidado del BOE: contenido imposible es causa de nulidad; la lesión debe afectar derechos o libertades susceptibles de amparo constitucional y no cualquier defecto formal produce nulidad.' }], null,
    'Se elimina la repetición «de pleno de pleno derecho» y se acota la opción correcta al contenido imposible del artículo 47.1.c. También se corrigen los distractores: el artículo 47.1.a limita la lesión a derechos y libertades susceptibles de amparo constitucional; la incompetencia debe ser manifiesta y por materia o territorio; y el defecto formal solo causa anulabilidad en las condiciones del artículo 48.2. Cotejo: ITIC Academy, bloque 03 Actuación Administrativa y Administración Digital, versión 2026.2 (01-10-2026), y bloque 04 Revisión de actos y responsabilidad, versión 2026.2 (01-10-2026), invalidez del acto. Correspondencia: A1-8/A2-I-8.', 'corregida'],
  [1428, [22], ['I-9'], ['sede electrónica', 'Ley 40/2015', 'artículo 38', 'Administración digital'],
    [{ url: 'https://www.boe.es/eli/es/l/2015/10/01/40/con/20240802', referencia: 'Ley 40/2015, artículo 38.1, texto consolidado del BOE: definición de sede electrónica como dirección electrónica disponible a través de redes cuya titularidad corresponde a una Administración Pública, organismo público o entidad de Derecho Público en el ejercicio de sus competencias.' }], null,
    'Se identifica la sede electrónica por la definición del artículo 38.1 de la Ley 40/2015 y se distingue del portal de internet del artículo 39. Cotejo: ITIC Academy, bloque 03 Actuación Administrativa y Administración Digital, versión 2026.2 (01-10-2026), administración digital y sedes electrónicas. Correspondencia: A1-22/A2-I-9.', 'corregida'],
  [1429, [9], [], ['Ley 29/1998', 'jurisdicción contencioso-administrativa', 'representación', 'defensa'],
    [{ url: 'https://www.boe.es/eli/es/l/1998/07/13/29/con', referencia: 'Ley 29/1998, artículo 23.1, texto consolidado del BOE: ante órganos unipersonales siempre se actúa asistido por Abogado; la representación puede conferirse a Procurador o al propio Abogado.' }], null,
    'Se mantiene la clave C y se precisa la regla del artículo 23.1: ante órganos unipersonales el Abogado es obligatorio; la representación es potestativa y puede conferirse a Procurador o al Abogado, en cuyo caso las notificaciones se dirigen a este. La pregunta general no desarrolla la excepción del artículo 23.3 para determinados funcionarios en cuestiones de personal. Cotejo: ITIC Academy, bloque 04 Revisión de actos y responsabilidad, versión 2026.2 (01-10-2026), recurso contencioso-administrativo y representación procesal. Correspondencia: A1-9; sin equivalencia A2 específica para la LJCA.', 'corregida'],
  [1430, [9], ['I-8'], ['Ley 39/2015', 'revisión de oficio', 'actos nulos', 'artículos 47 y 106'],
    [{ url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565', referencia: 'Ley 39/2015, artículos 47.1 y 106.1, texto consolidado del BOE: cabe declarar de oficio la nulidad de actos firmes en vía administrativa cuando concurre una causa de nulidad del artículo 47.1, con dictamen consultivo favorable cuando proceda.' }], null,
    'La redacción original omitía el requisito material de que concurra una causa de nulidad y podía sugerir que todo acto firme es revisable por esa vía. Se especifica que el artículo 106.1 permite declarar de oficio la nulidad de actos que ponen fin a la vía administrativa o no fueron recurridos en plazo cuando están incursos en alguno de los supuestos del artículo 47.1, con el dictamen favorable exigido por la ley. No debe confundirse con la declaración de lesividad de actos anulables del artículo 107. Cotejo: ITIC Academy, bloque 04 Revisión de actos y responsabilidad, versión 2026.2 (01-10-2026), revisión de oficio y nulidad; y bloque 03 Actuación Administrativa, versión 2026.2 (01-10-2026). Correspondencia: A1-9/A2-I-8.', 'corregida']
];

apply({ numero: '222', fecha: '2026-10-24', records, edits: {
  1426: { texto: 'Según el artículo 69.2 de la Ley 40/2015, ¿dónde tienen su sede las Delegaciones del Gobierno, como regla general?', opciones: [
    'En la localidad elegida por el Consejo de Gobierno autonómico, salvo que el Consejo de Ministros acuerde otra.',
    'En la localidad donde radique el Consejo de Gobierno autonómico, salvo que el ministerio competente en función pública acuerde otra.',
    'En la localidad donde radique el Consejo de Gobierno autonómico, salvo que el Consejo de Ministros acuerde otra y sin perjuicio de lo que disponga expresamente el Estatuto de Autonomía.',
    'En la capital de la provincia más poblada de la Comunidad Autónoma.'
  ], respuesta_correcta: 2 },
  1427: { texto: 'De acuerdo con el artículo 47.1 de la Ley 39/2015, ¿cuál de estos supuestos constituye una causa de nulidad de pleno derecho de un acto administrativo?', opciones: [
    'Que lesione cualquier derecho, aunque no sea susceptible de amparo constitucional.',
    'Que lo dicte un órgano incompetente, aunque la incompetencia no sea manifiesta ni afecte a la materia o al territorio.',
    'Que incurra en cualquier defecto de forma, aunque no cause indefensión ni impida alcanzar su fin.',
    'Que tenga un contenido imposible.'
  ], respuesta_correcta: 3 },
  1428: { texto: 'Según el artículo 38.1 de la Ley 40/2015, ¿qué concepto se define como una dirección electrónica disponible a través de redes de telecomunicaciones cuya titularidad corresponde a una Administración Pública u organismo o entidad de Derecho Público en el ejercicio de sus competencias?', opciones: [
    'Sede electrónica.',
    'Portal de internet, en todos los casos.',
    'Cualquier página web alojada por una empresa contratista.',
    'Un estándar abierto.'
  ], respuesta_correcta: 0 },
  1429: { texto: 'Ante un órgano unipersonal del orden contencioso-administrativo, conforme al artículo 23.1 de la Ley 29/1998:', opciones: [
    'Son siempre obligatorios Abogado y Procurador.',
    'Solo es obligatorio Procurador; la asistencia de Abogado es potestativa.',
    'La asistencia de Abogado es obligatoria; la representación puede conferirse a Procurador o al propio Abogado.',
    'No se requiere asistencia letrada ni representación procesal.'
  ], respuesta_correcta: 2 },
  1430: { texto: 'Conforme al artículo 106.1 de la Ley 39/2015, ¿en qué caso puede declararse de oficio la nulidad de un acto que haya puesto fin a la vía administrativa o no haya sido recurrido en plazo?', opciones: [
    'Nunca; una vez firme, el acto no puede someterse a revisión de oficio.',
    'Cuando concurra alguno de los supuestos de nulidad del artículo 47.1 y se cumplan los requisitos del procedimiento de revisión de oficio.',
    'Cuando concurra cualquier causa de anulabilidad del artículo 48, sin declaración de lesividad.',
    'Siempre que lo solicite el interesado, aunque no concurra causa legal de nulidad.'
  ], respuesta_correcta: 1 }
}});
