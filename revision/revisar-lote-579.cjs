const apply = require('./aplicar-lote.cjs');

const lssi = 'https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758';
const ebep = 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719';
const highOffice = 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-3444';
const transparency = 'https://www.boe.es/buscar/act.php?id=BOE-A-2013-12887';

const rows = [
 [3211,['22'],['I-6'],['LSSI-CE','Ley 34/2002','servicios excluidos','notarios','registradores','abogados','procuradores'],[
  {url:lssi,referencia:'Ley 34/2002, texto consolidado del BOE, art. 5.1: quedan excluidos los servicios de notarios y registradores de la propiedad y mercantiles en el ejercicio de funciones públicas, y los de abogados y procuradores en sus funciones de representación y defensa en juicio.'}
 ],'', 'La opción sobre abogados y procuradores es correcta solo en el supuesto delimitado por el art. 5.1.b: funciones de representación y defensa en juicio. Se precisa ese ámbito y se mantienen como distractores las opciones que atribuyen funciones privadas a notarios/registradores; el artículo excluye sus funciones públicas. A1-22/A2-I-6.','corregida'],
 [3212,['24'],['I-8'],['TREBEP','artículo 24','retribuciones complementarias','servicios extraordinarios','jornada'],[
  {url:ebep,referencia:'Real Decreto Legislativo 5/2015, texto consolidado del BOE, art. 24.d: los servicios extraordinarios prestados fuera de la jornada normal son uno de los factores conforme a los que las leyes de cada Administración establecen la cuantía y estructura de las retribuciones complementarias.'}
 ],'', 'La respuesta general es retribuciones complementarias (art. 24 TREBEP), pero el distractor «gratificaciones» puede referirse a una forma concreta de reconocer esos servicios, por lo que la formulación original mezclaba categoría y modalidad. Se transforma en una pregunta literal sobre qué establece el art. 24.d, con opciones mutuamente excluyentes. A1-24/A2-I-8.','corregida'],
 [3213,['24'],['I-8'],['TREBEP','requisitos de acceso','nacionalidad','artículos 56 y 57','empleo público'],[
  {url:ebep,referencia:'Real Decreto Legislativo 5/2015, texto consolidado del BOE, arts. 56.1 y 57: requisitos generales de acceso, edad, capacidad, habilitación y nacionalidad; el art. 57 permite el acceso de nacionales de otros Estados en los supuestos legales. El art. 56 no exige ser español de nacimiento.'}
 ],'', 'El art. 56 no exige ser español de nacimiento. La nacionalidad española es el requisito general, con las excepciones de acceso previstas en el art. 57 para nacionales de otros Estados y puestos no reservados; por eso se concreta esa opción y se elimina la vaguedad de «tener una determinada nacionalidad». A1-24/A2-I-8.','corregida'],
 [3214,['25'],['I-4'],['Ley 3/2015','alto cargo','Administración General del Estado','transparencia','conflictos de intereses'],[
  {url:highOffice,referencia:'Ley 3/2015, texto consolidado del BOE, título y preámbulo: regula el ejercicio del alto cargo en la AGE y entidades estatales y persigue máximas condiciones de transparencia, legalidad y ausencia de conflictos de intereses; el art. 3 incluye transparencia y responsabilidad entre sus principios.'}
 ],'', 'La norma es la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la AGE. Se identifica por su título y su objeto; el preámbulo cita las máximas condiciones de transparencia y el art. 3 consagra transparencia y responsabilidad como principios de actuación. A1-25/A2-I-4.','vigente'],
 [3215,['25'],['I-4'],['Ley 19/2013','buen gobierno','potestad sancionadora','Consejo de Ministros','artículo 31.4'],[
  {url:transparency,referencia:'Ley 19/2013, texto consolidado del BOE, art. 31.4.a: el Consejo de Ministros impone las sanciones cuando la persona responsable es miembro del Gobierno o Secretario de Estado. No debe confundirse con la competencia del CTBG para instar el inicio del procedimiento (art. 38.2.e).'}
 ],'', 'Conforme al art. 31.4.a de la Ley 19/2013, la competencia para imponer la sanción corresponde al Consejo de Ministros si el alto cargo es miembro del Gobierno o Secretario de Estado. El CTBG puede instar el inicio del procedimiento, pero no es el órgano sancionador en este supuesto. Se cita el apartado para distinguir imposición de sanción de incoación e impulso. A1-25/A2-I-4.','vigente']
];

const edits={
 3211:{texto:'Según el artículo 5.1 de la Ley 34/2002, ¿cuál de estos servicios queda excluido del ámbito de aplicación de la Ley?',opciones:['Los servicios prestados por notarios y registradores de la propiedad en el ejercicio de funciones privadas.','Los servicios prestados por abogados y procuradores en sus funciones de representación y defensa en juicio.','Los servicios prestados por notarios y registradores de la propiedad y mercantiles en el ejercicio de funciones privadas.','Los servicios prestados por funcionarios del Estado en el ejercicio de sus funciones.'],respuesta_correcta:1},
 3212:{texto:'Según el artículo 24.d del TREBEP, los servicios extraordinarios prestados fuera de la jornada normal de trabajo son un factor para establecer:',opciones:['La cuantía y estructura de las retribuciones complementarias.','Las retribuciones básicas, que consisten exclusivamente en sueldo y trienios.','La duración de las vacaciones anuales.','El número y cuantía de las pagas extraordinarias.'],respuesta_correcta:0},
 3213:{texto:'Conforme a los artículos 56 y 57 del TREBEP, ¿cuál de estas afirmaciones NO es un requisito general de acceso al empleo público?',opciones:['Tener cumplidos 16 años y no exceder, en su caso, de la edad máxima de jubilación forzosa.','No haber sido separado mediante expediente disciplinario ni hallarse en inhabilitación absoluta o especial, en los términos legales.','Tener cumplidos 16 años y ser español de nacimiento.','Tener la nacionalidad española, salvo los supuestos de acceso de nacionales de otros Estados previstos en el artículo 57.'],respuesta_correcta:2},
 3214:{texto:'¿Qué ley regula el ejercicio del alto cargo de la Administración General del Estado y establece, entre sus principios, la transparencia y la responsabilidad?',opciones:['Ley 3/2015, de 30 de marzo.','Ley 6/2007.','Ley 5/1984.','Ley 5/2006.'],respuesta_correcta:0},
 3215:{texto:'Según el artículo 31.4.a de la Ley 19/2013, ¿qué órgano impone la sanción por infracción de buen gobierno cuando el responsable es miembro del Gobierno o Secretario de Estado?',respuesta_correcta:1}
};

apply({numero:'579',fecha:'2026-10-30',records:rows,edits});
