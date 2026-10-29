const apply=require('./aplicar-lote.cjs');
const l40='https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566';
const lcsp='https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902';
const ine='https://ine.es/dyngs/ODS/es/indicador.htm?id=4935';
const epafaq='https://www.ine.es/dyngs/INEbase/operacion.htm?c=Estadistica_C&cid=1254736176918&idp=1254735976595&menu=faq';
const metodologia='https://www.ine.es/inebaseDYN/epa30308/docs/resumetepa21.pdf';
const tre= 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719';
const records=[
 [2916,[8],['I-8'],['Ley 40/2015','competencia administrativa','irrenunciabilidad','delegación','avocación'],[
  {url:l40,referencia:'BOE, Ley 40/2015, art. 8.1: la competencia es irrenunciable y se ejerce por el órgano que la tiene atribuida como propia, salvo delegación o avocación; estas no alteran la titularidad.'}
 ],'','El artículo 8.1 de la Ley 40/2015 califica la competencia como irrenunciable y dispone que la ejerza el órgano que la tenga atribuida como propia, con las salvedades de delegación o avocación. La delegación y la avocación afectan al ejercicio, no a la titularidad. La opción D reproduce la regla.','vigente'],
 [2917,[11],[],['Ley 9/2017','contratación pública','subasta electrónica','plazos de licitación'],[
  {url:lcsp,referencia:'BOE, Ley 9/2017, art. 148.7: entre el envío de las invitaciones y el comienzo de la subasta electrónica deben transcurrir al menos dos días hábiles; los apartados 3 y 5 regulan los criterios y la fórmula de reclasificación.'}
 ],'','La afirmación falsa es la opción C: el artículo 148.7 de la Ley 9/2017 no ordena comenzar la subasta el primer día hábil tras cerrar la recepción de ofertas, sino que exige que pasen al menos dos días hábiles desde el envío de las invitaciones. El apartado 3 regula cuándo se puja por precio o por precio y otros valores objetivos; el 5 exige comunicar la fórmula automática de reclasificación.','vigente'],
 [2918,[14,15],[],['economía española','PIB','sector primario','agricultura','estadísticas oficiales'],[
  {url:ine,referencia:'INE, Indicador ODS 2.a.1.2, valor añadido de la agricultura como porcentaje del PIB: último dato 2025, 2,76%.'},
  {url:'https://www.ine.es/dyngs/Prensa/CNA2025.htm',referencia:'INE, Contabilidad Nacional Anual 2025, estimación avance: PIB corriente y valor añadido de agricultura, ganadería, silvicultura y pesca; su cociente es aproximadamente 2,76%.'}
 ],'','El dato depende del año y de cómo se delimite el sector. Se concreta el reactivo a la agrupación de agricultura, ganadería, silvicultura y pesca de la Contabilidad Nacional, utilizada aquí como sector primario: en la estimación avance de 2025 del INE su valor añadido equivale aproximadamente al 2,76% del PIB, por lo que la opción más próxima es 3%. No se presenta como una proporción atemporal.','corregida'],
 [2919,[17],[],['mercado de trabajo','desempleo','Encuesta de Población Activa','OIT','INE'],[
  {url:epafaq,referencia:'INE, preguntas frecuentes de la EPA: su metodología sigue los criterios de la OIT y Eurostat; la EPA es una encuesta armonizada, distinta de registros administrativos como el paro registrado y afiliación.'},
  {url:metodologia,referencia:'INE, EPA metodología 2021, definición de población parada conforme a los criterios de la encuesta.'}
 ],'','La EPA es una encuesta continua del INE cuya metodología sigue los criterios de la OIT y Eurostat. El paro registrado del SEPE y la afiliación a la Seguridad Social son registros administrativos distintos y complementarios; no son medidas basadas en la metodología de la EPA.','corregida'],
 [2920,[24],['I-8'],['TREBEP','empleo público','evaluación del desempeño','conducta profesional','rendimiento','resultados'],[
  {url:tre,referencia:'BOE, Real Decreto Legislativo 5/2015, art. 20.1–5: definición, principios, efectos y vinculación de la continuidad en puestos obtenidos por concurso a la evaluación del desempeño.'}
 ],'','El artículo 20.1 del TREBEP define la evaluación del desempeño como el procedimiento mediante el cual se mide y valora la conducta profesional y el rendimiento o logro de resultados. Debe regirse por transparencia, objetividad, imparcialidad y no discriminación (apartado 2). Además, el apartado 4 prevé que la continuidad en un puesto obtenido por concurso quede vinculada a la evaluación según los sistemas de cada Administración, con audiencia y resolución motivada; por eso la opción D, en su versión original, era falsa.','corregida']
];
apply({numero:'520',fecha:'2026-10-29',records,edits:{
 2918:{texto:'Según el indicador del INE sobre el valor añadido de agricultura, ganadería, silvicultura y pesca como porcentaje del PIB de España en 2025, ¿a qué valor aproximado corresponde?',respuesta_correcta:3},
 2919:{texto:'¿Qué encuesta estadística del INE mide el desempleo siguiendo los criterios de la OIT y Eurostat?',respuesta_correcta:0},
 2920:{opcion:[3,'La continuidad en un puesto obtenido por concurso nunca puede quedar vinculada a la evaluación del desempeño.']}
}});
