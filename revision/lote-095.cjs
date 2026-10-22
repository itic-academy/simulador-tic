const records = [
  [791,[31],['I-9'],['Ley 37/2007','reutilización de información del sector público','infracción grave','artículo 11.1','finalidad distinta'],[
    {url:'https://www.boe.es/eli/es/l/2007/11/16/37/con',referencia:'Ley 37/2007, texto consolidado, artículo 11.1.b: en el ámbito de la Administración General del Estado, es infracción grave reutilizar la información para una finalidad distinta de la concedida.'}
  ],null,'Se conserva la clave B y se acota al artículo y ámbito territorial/subjetivo del régimen sancionador: el artículo 11.1.b califica esa conducta como infracción grave en el ámbito de la AGE.','corregida'],
  [792,[32],[],['funciones del directivo TIC','planificación financiera','planificación estratégica','gestión operativa','innovación tecnológica'],[],null,'Pendiente de ambigüedad. El enunciado no identifica un marco funcional ni una fuente, y las cuatro opciones pueden formar parte de las responsabilidades de una dirección TIC según el tamaño y modelo de gobierno de la organización. No se certifica que la planificación financiera quede fuera de sus funciones. Se conserva el texto y la clave originales hasta localizar el material de referencia o reformular la pregunta con un marco explícito.','pendiente_ambiguedad'],
  [793,[69],['II-14'],['TRLPI','programas de ordenador','artículo 100.1','usuario legítimo','corrección de errores','límite de explotación'],[
    {url:'https://www.boe.es/eli/es/rdlg/1996/04/12/1/con',referencia:'Real Decreto Legislativo 1/1996, texto consolidado del BOE, artículo 100.1: reproducción o transformación, incluida la corrección de errores, no necesita autorización cuando sea necesaria para el uso del programa por el usuario legítimo conforme a su finalidad propuesta, salvo disposición contractual en contrario.'}
  ],null,'Se mantiene la opción C y se precisa el supuesto legal completo: usuario legítimo, necesidad para el uso conforme a la finalidad prevista y salvedad de una disposición contractual en contrario. El artículo 100.1 contiene expresamente esta excepción.','corregida'],
  [794,[69],['II-14'],['EUPL','licencia copyleft','Comisión Europea','compatibilidad GPL','licencia multilingüe'],[
    {url:'https://interoperable-europe.ec.europa.eu/collection/eupl/faqs',referencia:'Comisión Europea, Interoperable Europe Portal, FAQ oficial de EUPL: cualquier persona u organización, pública o privada y de cualquier lugar, puede usarla; cuenta con versiones lingüísticas y permite combinar código con licencias compatibles enumeradas, entre ellas GPL.'},
    {url:'https://eupl.eu/1.2/en',referencia:'Texto oficial EUPL 1.2, artículo 5 y apéndice: establece el mecanismo y lista de licencias compatibles, incluidas GPL 2 y GPL 3.'}
  ],null,'Se conserva B, pero se sustituye la afirmación compuesta por una proposición inequívocamente falsa: la EUPL no está reservada a entidades europeas ni a usuarios de Europa. La Comisión Europea indica que cualquier persona u organización, pública o privada y desde cualquier lugar, puede utilizarla. La compatibilidad con GPL está condicionada al mecanismo y licencias recogidos en el apéndice; no significa que ambas licencias sean idénticas o siempre intercambiables.','corregida'],
  [795,[46,49],['I-9','I-10'],['NTI','SICRES 4.0','asientos registrales','documentos electrónicos adjuntos','referencias documentales'],[
    {url:'https://www.boe.es/buscar/act.php?id=BOE-A-2021-13749',referencia:'Resolución de 22 de julio de 2021 que aprueba la NTI de Modelo de Datos para el intercambio de asientos (SICRES 4.0), apartado IV.1: sustituye el intercambio de los ficheros de documentos electrónicos por el intercambio de referencias a esos documentos; además incorpora metadatos para automatizar su tratamiento.'}
  ],null,'Se corrige la clave de A a B y se concreta el contraste: SICRES 4.0 sustituye el envío de los propios ficheros por el intercambio de referencias a los documentos electrónicos. La NTI sí incorpora metadatos para automatizar el tratamiento, por lo que A no era una respuesta válida a «cuál no es una característica».','corregida']
];
const edits = {
  791:{texto:'Según el artículo 11.1.b de la Ley 37/2007, en el ámbito de la Administración General del Estado, la reutilización de información para una finalidad distinta de aquella para la que se concedió constituye una infracción:',opciones:['Muy grave','Grave','Leve','No se considera infracción'],respuesta_correcta:1},
  793:{texto:'Según el artículo 100.1 del texto refundido de la Ley de Propiedad Intelectual, ¿en qué supuesto puede el usuario legítimo reproducir o transformar un programa de ordenador, incluida la corrección de errores, sin autorización del titular?',opciones:[
    'Siempre que la reproducción o transformación se destine a una actividad comercial.',
    'Solo si el titular ha autorizado previamente por escrito cualquier modificación.',
    'Cuando el acto sea necesario para utilizar el programa conforme a su finalidad propuesta, salvo disposición contractual en contrario.',
    'Nunca; la corrección de errores requiere siempre autorización expresa.'
  ],respuesta_correcta:2},
  794:{texto:'¿Cuál de las siguientes afirmaciones sobre la Licencia Pública de la Unión Europea (EUPL) es incorrecta?',opciones:[
    'Fue impulsada por la Comisión Europea y puede ser utilizada por personas y organizaciones públicas o privadas de cualquier lugar.',
    'Su uso está reservado a las Administraciones públicas y a usuarios situados en Europa.',
    'Está disponible en versiones lingüísticas oficiales que tienen igual valor jurídico.',
    'Su apéndice define condiciones de compatibilidad con otras licencias, entre ellas determinadas versiones de la GPL.'
  ],respuesta_correcta:1},
  795:{texto:'¿Qué cambio introdujo SICRES 4.0 en el intercambio de documentos electrónicos adjuntos a los asientos registrales?',opciones:[
    'Incorporó metadatos para facilitar la automatización del tratamiento de los asientos y sus documentos.',
    'Sustituyó el intercambio de los ficheros de documentos por el intercambio de referencias a dichos documentos.',
    'Eliminó los mecanismos de control y gestión de errores.',
    'Exigió que todos los documentos adjuntos se transmitieran exclusivamente en formato PDF/A.'
  ],respuesta_correcta:1}
};
require('./aplicar-lote.cjs')({numero:'095',fecha:'2026-10-22',records,edits});

