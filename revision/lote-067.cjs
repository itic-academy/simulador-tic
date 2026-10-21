const ce='https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229';
const local='https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392';
const records=[
[651,[1],['I-1'],['Constitución','reforma'],ce+'#a167','Constitución, título X, artículos 167 y 168','La rigidez se concreta en procedimientos especiales de reforma con mayorías cualificadas. Se sustituye una clasificación doctrinal compuesta por esta característica comprobable, sin depender de valoraciones como extensa o de consenso.'],
[652,[2],['I-1'],['Poder-Judicial'],ce+'#tvi','Constitución, título VI, artículos 117 a 127','Se mantiene D: el título VI regula el Poder Judicial. El IV trata del Gobierno y la Administración, el V de sus relaciones con las Cortes y el VII de Economía y Hacienda.'],
[653,[3,24],['I-8'],['empleo-público','entidades-locales'],local+'#a89','Ley 7/1985, artículo 89','Se mantiene A conforme a la enumeración expresa del artículo 89: carrera, contratación laboral y eventual para confianza o asesoramiento especial. La pregunta se limita a ese precepto; no debe deducirse de su redacción que toda la tipología del empleo público se agota en esa lista.'],
[654,[3],['I-1'],['Comunidades-Autónomas','transferencia'],ce+'#a150','Constitución, artículo 150.2','La ley orgánica es el instrumento previsto por el artículo 150.2. Se explicita que las facultades deben ser susceptibles de transferencia o delegación por su naturaleza; la ley debe prever medios financieros y controles estatales.'],
[655,[3],[],['régimen-local','Pleno'],local+'#a123','Ley 7/1985, artículos 122.2, 123.1.a, 124.4.g e i y 127.1.b','C corresponde al Pleno. Bandos y superior dirección del personal se atribuyen al Alcalde; el proyecto de presupuesto, a la Junta de Gobierno Local. Se elimina la afirmación absoluta sobre presidencia: el artículo 122.2 permite delegarla en un concejal. No se asigna correspondencia A2 específica a organización municipal.']
];
const edits={
651:{texto:'¿Qué significa que la Constitución Española sea rígida desde el punto de vista de su reforma?',opciones:['Que no admite ninguna modificación.','Que se modifica mediante cualquier reglamento.','Que basta siempre una ley ordinaria aprobada por mayoría simple.','Que su reforma exige procedimientos especiales distintos del legislativo ordinario.']},
654:{texto:'Según el artículo 150.2 de la Constitución, ¿mediante qué instrumento puede el Estado transferir o delegar a las Comunidades Autónomas facultades de titularidad estatal que por su naturaleza sean susceptibles de ello?'},
655:{texto:'Según el régimen de municipios de gran población de la Ley 7/1985, ¿cuál de estas atribuciones corresponde al Pleno?'}
};
require('./aplicar-lote.cjs')({numero:'067',fecha:'2026-10-21',records,edits});
