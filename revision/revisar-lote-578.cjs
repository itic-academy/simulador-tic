const apply = require('./aplicar-lote.cjs');

const desi = 'https://digital-decade-desi.digital-strategy.ec.europa.eu/datasets/desi-2022';
const desiCurrent = 'https://digital-strategy.ec.europa.eu/en/library/digital-decade-2025-desi-methodological-note';
const ineEpa = 'https://www.ine.es/dyngs/INEbase/operacion.htm?c=Estadistica_C&cid=1254736176918&idp=1254735976595&menu=faq';
const ine2013 = 'https://www.ine.es/daco/daco42/daco4211/epa0113.pdf';
const igualdad = 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-6115';
const rows = [
 [3206,['18','19','51'],[],['DESI','capital humano','conectividad','integración de tecnología digital','servicios públicos digitales','Década Digital'],[
  {url:desi,referencia:'Comisión Europea, visualización DESI «until 2022»: identifica las cuatro dimensiones históricas: capital humano, conectividad, integración de la tecnología digital y servicios públicos digitales.'},
  {url:desiCurrent,referencia:'Comisión Europea, nota metodológica DESI 2025: el tablero actual incluye más de 30 indicadores y se alinea con los KPI y objetivos de la Década Digital; confirma que el enunciado de cuatro dimensiones corresponde a una clasificación histórica, no a la descripción completa vigente.'}
 ],'', 'La clave corresponde al DESI histórico hasta 2022: sus cuatro dimensiones eran capital humano, conectividad, integración de tecnología digital y servicios públicos digitales. Se fecha el enunciado porque el tablero actual del DESI está alineado con la Década Digital y contiene más de 30 indicadores; ya no se debe presentar esa lista de cuatro dimensiones como clasificación actual exhaustiva. A1-18/A1-19/A1-51.','historica'],
 [3207,['17'],[],['EPA','población activa','ocupados','parados','semana de referencia'],[
  {url:ineEpa,referencia:'INE, definiciones de la EPA: activos son las personas de 16 o más años que durante la semana de referencia suministran mano de obra o están disponibles y en condiciones de incorporarse; se clasifican en ocupados y parados.'}
 ],'', 'La definición de la opción correcta coincide con la del INE. Se corrige la repetición «que, que» y se incorpora la semana de referencia, que delimita la clasificación estadística. La población activa es la suma de ocupados y parados. A1-17.','corregida'],
 [3208,['16'],['I-5'],['igualdad efectiva','publicidad engañosa','acción de cesación','LO 3/2007','responsabilidad social empresarial'],[
  {url:igualdad,referencia:'Ley Orgánica 3/2007, texto consolidado del BOE, art. 74: legitima al Instituto de la Mujer u órganos equivalentes de las comunidades autónomas para ejercer la acción de cesación cuando consideren que pudiera haberse incurrido en publicidad engañosa de acciones empresariales de responsabilidad en igualdad.'}
 ],'', 'El art. 74 de la LO 3/2007 legitima a ambos: el Instituto de la Mujer y los órganos equivalentes de las comunidades autónomas. Se ajusta el enunciado a la condición textual de la norma («cuando consideren que pudiera haberse incurrido») y se conserva la denominación que emplea el precepto. A1-16/A2-I-5.','vigente'],
 [3209,['17'],[],['EPA','tasa de paro','primer trimestre de 2013','dato histórico','INE'],[
  {url:ine2013,referencia:'INE, nota de prensa de la EPA del primer trimestre de 2013, publicada el 25/04/2013: informó de una tasa de paro del 27,16 % y 6.202.700 personas paradas en aquella publicación.'}
 ],'', 'El dato 27,16 % fue publicado por el INE para el primer trimestre de 2013. Se fecha la pregunta en la nota de prensa de 25/04/2013: es una fotografía estadística histórica y no debe interpretarse como la tasa actual ni como una afirmación sobre revisiones posteriores de las series. A1-17.','historica'],
 [3210,['21'],[],['liderazgo','conducta directiva','feedback','ambigüedad del criterio'],[
  {url:'https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk',referencia:'ITIC Academy, bloque 07 Dirección Pública, Empleo y Transparencia, edición 2026; apartados sobre teorías/estilos de liderazgo, competencias y gestión de personas. Se usa solo para cotejo curricular, no establece una lista normativa y cerrada de «técnicas de buen líder».'}
 ],'', 'Pendiente de validación de contenido. «Técnica de buen líder» no identifica un modelo ni un criterio verificable; una crítica puede ser feedback constructivo o reproche, y promoción/reconocimiento dependen del marco considerado. Aunque el castigo parece el distractor pretendido, las fuentes curriculares consultadas no fijan esa clasificación como taxonomía exclusiva. No se certifica la clave original. A1-21.','pendiente_ambiguedad']
];
const edits={
 3206:{texto:'En la clasificación histórica del DESI utilizada hasta 2022, ¿cuáles eran sus cuatro dimensiones principales?',respuesta_correcta:2},
 3207:{opcion:[0,'Personas de 16 o más años que, durante la semana de referencia, suministran mano de obra para la producción de bienes y servicios o están disponibles y en condiciones de incorporarse a dicha producción. Se subdividen en ocupados y parados.']},
 3208:{texto:'Conforme al artículo 74 de la Ley Orgánica 3/2007, ¿qué órgano u órganos están legitimados para ejercer la acción de cesación si consideran que pudiera haberse incurrido en publicidad engañosa de acciones empresariales de responsabilidad en materia de igualdad?',opciones:['El Instituto de la Mujer.','Los órganos equivalentes de las comunidades autónomas.','Ambos.','Ninguno de los anteriores.'],respuesta_correcta:2},
 3209:{texto:'Según la nota de prensa del INE sobre la EPA publicada el 25 de abril de 2013, ¿qué trimestre registró una tasa de paro del 27,16%?',respuesta_correcta:2}
};
apply({numero:'578',fecha:'2026-10-30',records:rows,edits});
