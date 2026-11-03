const apply = require('./aplicar-lote.cjs');
const ley = 'https://www.boe.es/buscar/act.php?id=BOE-A-2013-12887';
const leyJusticia = 'https://www.boe.es/buscar/act.php?id=BOE-A-2011-11605';
const realDecretoLey = 'https://www.boe.es/buscar/act.php?id=BOE-A-2023-25758';

const records = [
  [3756, [25], ['I-4'], ['Ley 19/2013', 'artículo 25.2', 'buen gobierno', 'altos cargos autonómicos', 'normativa autonómica'], [
    { url: ley, referencia: 'Ley 19/2013 consolidada, art. 25.2: el título II se aplica a altos cargos o asimilados que tengan esa consideración según la normativa autonómica o local aplicable.' }
  ], undefined, 'Se hace explícita la remisión legal: para altos cargos de una comunidad autónoma o entidad local, la condición de alto cargo o asimilado se determina conforme a la normativa autonómica o local aplicable (art. 25.2).', 'corregida'],
  [3757, [45], ['I-9'], ['Ley 18/2011', 'anexo', 'interoperabilidad organizativa', 'Administración de Justicia', 'norma derogada', 'RDL 6/2023'], [
    { url: leyJusticia, referencia: 'Ley 18/2011, anexo: definición histórica de interoperabilidad organizativa como capacidad de entidades y procesos para colaborar y alcanzar logros mutuamente acordados sobre los servicios prestados. Norma derogada desde el 21-12-2023.' },
    { url: realDecretoLey, referencia: 'Real Decreto-ley 6/2023, disposición derogatoria única: derogación expresa de la Ley 18/2011; el libro primero establece el marco posterior de eficiencia digital del servicio público de Justicia.' }
  ], undefined, 'La definición corresponde a la opción D en el anexo de la Ley 18/2011: capacidad de las entidades y procesos para colaborar y alcanzar logros mutuamente acordados respecto de los servicios. La pregunta solo es válida como contenido histórico: la Ley 18/2011 quedó derogada con efectos de 21 de diciembre de 2023 por el RDL 6/2023, por lo que no debe presentarse como la regulación vigente.', 'historica'],
  [3758, [25], ['I-4'], ['Ley 19/2013', 'artículo 16', 'acceso parcial', 'límites del artículo 14', 'omisión de información'], [
    { url: ley, referencia: 'Ley 19/2013 consolidada, art. 16: si el límite del art. 14 no afecta a toda la información, se concede acceso parcial omitiendo la parte afectada, salvo distorsión o pérdida de sentido; debe indicarse la omisión.' }
  ], undefined, 'El artículo 16 establece como regla conceder acceso parcial, omitiendo la parte afectada por el límite. No procede cuando la separación dé un resultado distorsionado o carente de sentido; además, debe indicarse qué parte se ha omitido.', 'vigente'],
  [3759, [25], ['I-4'], ['Ley 19/2013', 'artículo 1', 'objeto de la ley', 'transparencia de la actividad pública', 'derecho de acceso', 'buen gobierno'], [
    { url: ley, referencia: 'Ley 19/2013 consolidada, art. 1: objeto legal de ampliar y reforzar la transparencia de la actividad pública, regular y garantizar el derecho de acceso a información sobre esa actividad y establecer obligaciones de buen gobierno y consecuencias de incumplimiento.' }
  ], undefined, 'La opción A reproduce el contenido del artículo 1: transparencia de la actividad pública, derecho de acceso a información relativa a ella y obligaciones de buen gobierno con sus consecuencias. Las opciones que sustituyen actividad pública por privada no se ajustan al precepto.', 'vigente'],
  [3760, [25], ['I-4'], ['Ley 19/2013', 'artículos 6.2 y 9', 'planes y programas', 'medios y plazos', 'evaluación', 'inspecciones generales de servicios'], [
    { url: ley, referencia: 'Ley 19/2013 consolidada, art. 6.2: los planes y programas incluirán objetivos, actividades, medios y tiempo previsto; su grado de cumplimiento y resultados se evalúan y publican. En la AGE corresponde a las inspecciones generales de servicios la evaluación.' }
  ], undefined, 'La clave C es correcta: el artículo 6.2 exige publicar objetivos concretos, actividades, medios y tiempo previsto. También exige evaluar y publicar periódicamente el cumplimiento y los resultados; en la AGE evalúan las inspecciones generales de servicios, no el Consejo de Transparencia ni el Parlamento.', 'vigente']
];

const edits = {
  3756: {
    texto: 'Conforme al artículo 25.2 de la Ley 19/2013, ¿qué normativa determina qué personas tienen la consideración de alto cargo o asimilado en una comunidad autónoma o entidad local?',
    opciones: [
      'La que designe el Consejo de Transparencia y Buen Gobierno mediante desarrollo reglamentario.',
      'La normativa estatal, con independencia de la comunidad autónoma o entidad local.',
      'La normativa autonómica o local que resulte aplicable.',
      'El título II no se aplica a las Administraciones autonómicas ni locales.'
    ],
    respuesta_correcta: 2,
    comentarios: 'El artículo 25.2 remite expresamente a la normativa autonómica o local aplicable para determinar la consideración de alto cargo o asimilado.'
  },
  3757: {
    texto: 'En el anexo de la Ley 18/2011, hoy derogada, ¿cómo se definía la interoperabilidad organizativa?',
    comentarios: 'La respuesta es histórica: la Ley 18/2011 fue derogada con efectos de 21 de diciembre de 2023 por el Real Decreto-ley 6/2023. La definición se conserva como contenido de la norma histórica, no como marco vigente.'
  }
};

apply({ numero: '688', fecha: '2026-11-03', records, edits });
