const apply = require('./aplicar-lote.cjs');
const ley = 'https://www.boe.es/buscar/act.php?id=BOE-A-2013-12887';
const source = (articulo, detalle) => ({ url: ley, referencia: `Ley 19/2013 consolidada, ${articulo}: ${detalle}` });
const records = [
  [3766, [25], ['I-4'], ['Ley 19/2013', 'Consejo de Transparencia y Buen Gobierno', 'memoria anual', 'Cortes Generales'], [source('art. 40', 'el Consejo eleva anualmente a las Cortes Generales una memoria sobre sus actividades y el grado de cumplimiento de la Ley.')], undefined, 'Se corrige la opción que decía «Congreso de los Diputados»: el artículo 40 indica Cortes Generales. El mandato presidencial es de cinco años no renovables; la regla de no exclusividad/no remuneración del artículo 36.3 tiene la excepción del artículo siguiente; el incumplimiento reiterado de publicidad activa es infracción grave, no leve. La respuesta queda inequívoca.', 'corregida'],
  [3767, [25], ['I-4'], ['Ley 19/2013', 'derecho de acceso', 'límites del artículo 14', 'protección ambiental', 'intereses económicos y comerciales'], [source('art. 14.1.e, h e i', 'incluye como límites la garantía de confidencialidad en la toma de decisiones, los intereses económicos y comerciales y la protección del medio ambiente; no incluye la existencia de un órgano autonómico de transparencia.')], undefined, 'La opción A no figura entre los límites tasados del artículo 14.1. Las opciones sobre confidencialidad en la toma de decisiones, intereses económicos y comerciales y protección del medio ambiente sí se corresponden con las letras e), h) e i). Se corrige la errata «19/20013».', 'corregida'],
  [3768, [25], ['I-4'], ['Ley 19/2013', 'artículo 36', 'Comisión de Transparencia y Buen Gobierno', 'composición', 'AIReF'], [source('art. 36.2', 'enumera a un diputado, un senador, representantes del Tribunal de Cuentas, Defensor del Pueblo, AEPD, Secretaría de Estado de Administraciones Públicas y AIReF, además del presidente.')], undefined, 'La afirmación falsa es la relativa a un representante de la Secretaría de Estado de Presupuestos y Gastos. El artículo 36.2.g) menciona a un representante de la Secretaría de Estado de Administraciones Públicas; las demás opciones reproducen integrantes del apartado 2.', 'vigente'],
  [3769, [25], ['I-4'], ['Ley 19/2013', 'artículo 36', 'Comisión de Transparencia y Buen Gobierno', 'composición'], [source('art. 36.2', 'la lista legal incluye representantes de AEPD, Defensor del Pueblo y AIReF, pero no del Tribunal Supremo.')], undefined, 'La Comisión no incluye un representante del Tribunal Supremo. El artículo 36.2 enumera, entre otros, representantes del Tribunal de Cuentas, del Defensor del Pueblo, de la AEPD y de la AIReF; no debe confundirse el Tribunal de Cuentas con el Tribunal Supremo.', 'vigente'],
  [3770, [25], ['I-4'], ['Ley 19/2013', 'publicidad activa', 'artículo 9', 'control del CTBG', 'derecho de acceso'], [source('arts. 3, 9 y 10', 'el artículo 9.1 atribuye al CTBG el control del cumplimiento por la AGE de las obligaciones de publicidad activa; los artículos 3 y 10 regulan separadamente sujetos obligados y Portal de Transparencia.')], undefined, 'Es correcta la opción D: el artículo 9.1 encomienda al CTBG controlar el cumplimiento por la AGE de las obligaciones del capítulo de publicidad activa. La opción A confunde publicidad activa con el derecho de acceso; la Ley también impone determinadas obligaciones de transparencia a algunas entidades privadas (art. 3), y no todas las solicitudes se admiten necesariamente a trámite (art. 18).', 'corregida']
];
const edits = {
  3766: {
    texto: 'De acuerdo con la Ley 19/2013, ¿ante qué órgano debe elevar anualmente el Consejo de Transparencia y Buen Gobierno una memoria sobre el desarrollo de sus actividades y el grado de cumplimiento de la ley?',
    opciones: ['Al Gobierno.', 'A las Cortes Generales.', 'Exclusivamente al Congreso de los Diputados.', 'Al Consejo de Estado.'],
    respuesta_correcta: 1,
    comentarios: 'El artículo 40 dispone que el Consejo elevará anualmente la memoria a las Cortes Generales. El presidente comparece ante la comisión correspondiente para dar cuenta de ella.'
  },
  3767: {
    texto: 'Conforme al artículo 14 de la Ley 19/2013, ¿cuál de los siguientes motivos NO está previsto como límite al derecho de acceso a la información pública?',
    comentarios: 'El artículo 14.1 enumera los límites. No incluye como tal que una comunidad autónoma disponga de su propio órgano de transparencia.'
  },
  3768: {
    texto: 'Según el artículo 36.2 de la Ley 19/2013, ¿cuál de las siguientes afirmaciones sobre la composición de la Comisión de Transparencia y Buen Gobierno es falsa?',
    comentarios: 'La Secretaría de Estado que designa representante es la de Administraciones Públicas, no la de Presupuestos y Gastos.'
  },
  3769: {
    texto: 'Según el artículo 36.2 de la Ley 19/2013, ¿cuál de los siguientes órganos NO tiene representante en la Comisión de Transparencia y Buen Gobierno?',
    comentarios: 'La Comisión incluye a representantes del Tribunal de Cuentas, Defensor del Pueblo, AEPD y AIReF, entre otros; no al Tribunal Supremo.'
  },
  3770: {
    texto: 'Según la Ley 19/2013, ¿qué afirmación es correcta sobre el control de las obligaciones de publicidad activa de la Administración General del Estado?',
    opciones: [
      'Ese control corresponde a la Agencia Española de Protección de Datos.',
      'Las entidades privadas nunca quedan sujetas a obligaciones de transparencia.',
      'Toda solicitud de acceso debe admitirse a trámite, sin excepción.',
      'El Consejo de Transparencia y Buen Gobierno controla el cumplimiento por la AGE de las obligaciones de publicidad activa.'
    ],
    respuesta_correcta: 3,
    comentarios: 'El artículo 9.1 atribuye al CTBG el control del cumplimiento por la AGE de las obligaciones de publicidad activa.'
  }
};
apply({ numero: '690', fecha: '2026-11-03', records, edits });
