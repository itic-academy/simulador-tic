const apply = require('./aplicar-lote.cjs');
const ley = 'https://www.boe.es/buscar/act.php?id=BOE-A-2013-12887';
const portal = 'https://transparencia.gob.es/derechos/Derecho_Entender/conocer/que-es-el-portal-de-transparencia';
const planIII = 'https://transparencia.gob.es/gobierno-abierto/planes-accion/planes-accion-anteriores/iiiplanaccion';
const foroCommitment = 'https://transparencia.gob.es/gobierno-abierto/planes-accion/planes-accion-anteriores/iiiplanaccion/compromisosiiipga/compromisoiiipga_1-1';

const records = [
  [3761, [25], ['I-4'], ['Ley 19/2013', 'artículo 7', 'información de relevancia jurídica', 'proyectos de reglamentos', 'publicidad activa'], [
    { url: ley, referencia: 'Ley 19/2013 consolidada, art. 7.c: las Administraciones Públicas publicarán los proyectos de reglamentos cuya iniciativa les corresponda; si es preceptivo pedir dictamen, se publican al solicitarlo, sin perjuicio del resultado.' }
  ], undefined, 'El artículo 7.c incluye entre la información de relevancia jurídica los proyectos de reglamentos cuya iniciativa corresponde a la Administración. La publicación se realiza al solicitarse el dictamen preceptivo, sin perjuicio de su resultado; se corrige además la errata del número de ley en el enunciado original.', 'corregida'],
  [3762, [25], ['I-4'], ['Gobierno abierto', 'Alianza para el Gobierno Abierto', 'III Plan de Acción 2017–2019', 'Foro de Gobierno Abierto', 'compromiso 1.1'], [
    { url: planIII, referencia: 'Portal de Transparencia, III Plan de Gobierno Abierto: identifica la creación del Foro como Actividad 9 del plan y el compromiso 1.1.' },
    { url: foroCommitment, referencia: 'Portal de Transparencia, compromiso 1.1 del III Plan: constitución de un foro multisectorial de Gobierno Abierto como espacio de consulta y debate.' }
  ], undefined, 'La opción C es correcta: la creación del Foro sobre Gobierno Abierto fue el compromiso 1.1 del III Plan de Acción de España (2017–2019) ante la Alianza para el Gobierno Abierto. El portal oficial lo recoge en el seguimiento del plan.', 'vigente'],
  [3763, [25], ['I-4'], ['Ley 19/2013', 'disposición final novena', 'entrada en vigor', 'adaptación autonómica y local', 'plazo de dos años'], [
    { url: ley, referencia: 'Ley 19/2013 consolidada, disposición final novena: establece entrada en vigor diferenciada por títulos y concede a los órganos autonómicos y locales un máximo de dos años para adaptarse a las obligaciones de la ley.' }
  ], undefined, 'La disposición final novena distinguió la entrada en vigor: el título II entró al día siguiente de la publicación; los títulos preliminar, I y III, al año. Además, los órganos autonómicos y locales dispusieron de hasta dos años para adaptarse. Se reformula para no confundir ese plazo de adaptación con la entrada en vigor general.', 'corregida'],
  [3764, [25], ['I-4'], ['Portal de la Transparencia', 'AGE', 'Dirección General de Gobernanza Pública', 'Ministerio para la Transformación Digital y de la Función Pública', 'gestión del Portal'], [
    { url: portal, referencia: 'Portal de Transparencia de la AGE, «¿Qué es el Portal?»: identifica actualmente a la Dirección General de Gobernanza Pública del Ministerio para la Transformación Digital y de la Función Pública como responsable/gestora del Portal, no al CTBG.' }
  ], undefined, 'La opción B se confirma para la estructura vigente: el Portal indica que depende del Ministerio para la Transformación Digital y de la Función Pública y está gestionado por la Dirección General de Gobernanza Pública. El CTBG es una autoridad independiente con funciones de transparencia, pero no gestiona este Portal.', 'corregida'],
  [3765, [25], ['I-4'], ['Ley 19/2013', 'artículo 17.3', 'solicitud de acceso', 'motivación', 'derecho de acceso'], [
    { url: ley, referencia: 'Ley 19/2013 consolidada, art. 17.3: la persona solicitante no está obligada a motivar el acceso; la falta de motivación no es por sí sola causa de rechazo.' }
  ], undefined, 'La respuesta A reproduce el artículo 17.3: no hay obligación de motivar la solicitud. Los motivos pueden exponerse y ser tenidos en cuenta, pero su ausencia no justifica por sí sola el rechazo ni crea un plazo de subsanación por falta de motivación.', 'vigente']
];

const edits = {
  3761: {
    texto: 'Conforme al artículo 7 de la Ley 19/2013, de transparencia, acceso a la información pública y buen gobierno, ¿qué deben publicar las Administraciones Públicas como información de relevancia jurídica?',
    opciones: [
      'No publicarán los proyectos de reglamentos cuya iniciativa les corresponda.',
      'No podrán publicar los anteproyectos de ley hasta después de su aprobación.',
      'Publicarán los proyectos de reglamentos cuya iniciativa les corresponda, con el momento de publicación previsto en el artículo 7.c.',
      'Publicarán únicamente reglamentos ya aprobados y en vigor.'
    ],
    respuesta_correcta: 2,
    comentarios: 'El artículo 7.c exige publicar los proyectos de reglamentos de iniciativa propia; si se solicita dictamen preceptivo, la publicación tiene lugar al solicitarlo.'
  },
  3763: {
    texto: 'Según la disposición final novena de la Ley 19/2013, ¿qué plazo máximo se concedió a los órganos de las comunidades autónomas y entidades locales para adaptarse a las obligaciones de la ley?',
    opciones: [
      'Un plazo máximo de un año desde la publicación.',
      'Un plazo máximo de tres años desde la publicación.',
      'Un plazo máximo de dos años desde la publicación.',
      'Ningún plazo de adaptación específico.'
    ],
    respuesta_correcta: 2,
    comentarios: 'El plazo de dos años es un plazo de adaptación de los órganos autonómicos y locales. La disposición final novena establece, por separado, la entrada en vigor diferenciada de los títulos.'
  },
  3764: {
    texto: 'Según la información institucional vigente del Portal de Transparencia de la AGE, ¿qué órgano lo gestiona?',
    opciones: [
      'El Consejo de Transparencia y Buen Gobierno.',
      'La Dirección General de Gobernanza Pública.',
      'La Agencia Española de Protección de Datos.',
      'La Secretaría de Estado de Administración Digital.'
    ],
    respuesta_correcta: 1,
    comentarios: 'La ficha actual del Portal atribuye su gestión a la Dirección General de Gobernanza Pública, dependiente del Ministerio para la Transformación Digital y de la Función Pública.'
  }
};

apply({ numero: '689', fecha: '2026-11-03', records, edits });
