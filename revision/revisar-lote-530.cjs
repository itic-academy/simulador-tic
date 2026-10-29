const apply=require('./aplicar-lote.cjs');
const metricAsi='https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf';
const metricMsi='https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ae15c0c5b-dd9c-4e48-82e3-9e36ba18e839/METRICA_V3_Mantenimiento_de_Sistemas_de_Informacion.pdf';
const metricGuide='https://administracionelectronica.gob.es/pae_Home/pae_Documentacion/pae_Metodolog/pae_Metrica_v3.html';
const metricStructure='https://manuel.cillero.es/doc/metodologia/metrica-3/tecnicas/diagrama-de-estructura/';
const coupling='https://pro.iesdonana.org/apuntes/programacion-modular-i-apuntes.pdf';
const academy38='https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const records=[
 [2966,[95],[],['MÉTRICA v3','ASI','ASI 6','elaboración del modelo de datos','participantes'],[
  {url:metricAsi,referencia:'PAe, MÉTRICA v3, Análisis del Sistema de Información, tabla de participantes de las actividades ASI (p. 45): en ASI 6 participan Analistas, Equipo de Soporte Técnico y Usuarios expertos; no figura el Jefe de Proyecto.'},
  {url:metricGuide,referencia:'Portal oficial de PAe para MÉTRICA v3, metodología y documentación de referencia.'}
 ],'','Se precisa que la actividad es ASI 6 (Elaboración del Modelo de Datos). La matriz oficial de participantes del proceso ASI asigna a esa actividad Analistas, Equipo de Soporte Técnico y Usuarios expertos; el Jefe de Proyecto no aparece como participante de ASI 6. Se mantiene como clave «jefe de proyecto».','corregida'],
 [2967,[95],[],['MÉTRICA v3','Estudio de Viabilidad del Sistema','EVS','EVS 4','alternativas de solución'],[
  {url:metricGuide,referencia:'PAe, portal oficial de MÉTRICA v3: el Estudio de Viabilidad del Sistema (EVS) es uno de los procesos de desarrollo de la metodología.'},
  {url:metricAsi,referencia:'PAe, documentación oficial de MÉTRICA v3; la actividad EVS 4 se denomina «Estudio de Alternativas de Solución» y pertenece al proceso EVS.'}
 ],'','Se confirma EVS. El «Estudio de Alternativas de Solución» es la actividad EVS 4 del proceso Estudio de Viabilidad del Sistema, no una actividad de PSI, ASI ni DSI. Se uniforma la denominación oficial y se eliminan guiones que podían dificultar su lectura.','corregida'],
 [2968,[95],['III-7'],['MÉTRICA v3','mantenimiento de sistemas','MSI 3.3','pruebas de regresión','efecto onda'],[
  {url:metricMsi,referencia:'PAe, MÉTRICA v3, Mantenimiento de Sistemas de Información, MSI 3.3 y MSI 4: las pruebas de regresión comprueban que los cambios no introduzcan errores en componentes relacionados no modificados; se ejecutan al finalizar el cambio.'},
  {url:metricGuide,referencia:'Portal oficial de PAe para MÉTRICA v3 y documentación de la interfaz de mantenimiento.'}
 ],'','Se confirma la opción de realizar pruebas de regresión al introducir un cambio, y se concreta el alcance: no basta con volver a probar el componente modificado; deben comprobarse también los sistemas relacionados que podrían verse afectados (efecto onda). MÉTRICA las trata en el proceso de mantenimiento, no como pruebas diseñadas en el análisis.','corregida'],
 [2969,[93,95],[],['diseño estructurado','MÉTRICA v3','diagrama de estructura','acoplamiento','acoplamiento de contenido','acoplamiento común','acoplamiento externo','acoplamiento de control','acoplamiento de marca','acoplamiento de datos'],[
  {url:metricStructure,referencia:'Técnica Diagrama de Estructura de MÉTRICA v3, reproducción identificada del manual del Ministerio de Administraciones Públicas: define acoplamientos de marca, control, externo, común y contenido.'},
  {url:coupling,referencia:'IES Doñana, Programación modular (I), §4.5: ordena de mayor a menor acoplamiento contenido, común, externo, control, estampado y datos.'}
 ],'','Se corrige la lista para que incluya los seis tipos y no deje fuera el acoplamiento de control. El orden descendente de dependencia es contenido, común, externo, control, marca/estampado y datos. MÉTRICA v3 describe estos tipos en su técnica de diagramas de estructura; el orden compara la intensidad clásica de dependencia, no una propiedad exclusiva de la metodología.','corregida'],
 [2970,[95],[],['MÉTRICA v3','Plan de Sistemas de Información','PSI','objetivos estratégicos','marco de referencia'],[
  {url:metricGuide,referencia:'PAe, MÉTRICA v3: el proceso PSI planifica los sistemas de información de la organización.'},
  {url:metricAsi,referencia:'PAe, manual oficial MÉTRICA v3, PSI: el Plan de Sistemas de Información tiene por objetivo obtener un marco de referencia para desarrollar sistemas de información que respondan a objetivos estratégicos organizativos.'}
 ],'','Se confirma el Plan de Sistemas de Información (PSI). Se reformula el enunciado para distinguir el plan/proceso de planificación del análisis de un sistema concreto: PSI proporciona el marco estratégico de referencia para el desarrollo de los sistemas de información de la organización. EVS evalúa la viabilidad y alternativas de una necesidad concreta.','corregida']
];
apply({numero:'530',fecha:'2026-10-29',records,edits:{
 2966:{texto:'En MÉTRICA v3, en la actividad ASI 6 «Elaboración del Modelo de Datos», ¿quién NO figura como participante?',opciones:['Usuarios expertos.','Analistas.','Jefe de Proyecto.','Equipo de Soporte Técnico.'],respuesta_correcta:2},
 2967:{texto:'En MÉTRICA v3, ¿a qué proceso pertenece la actividad EVS 4 «Estudio de Alternativas de Solución»?',opciones:['Planificación de Sistemas de Información (PSI).','Análisis del Sistema de Información (ASI).','Estudio de Viabilidad del Sistema (EVS).','Diseño del Sistema de Información (DSI).'],respuesta_correcta:2},
 2968:{texto:'Según MÉTRICA v3, al finalizar un cambio en el proceso de mantenimiento, ¿qué pruebas se realizan para comprobar que el cambio no ha alterado el comportamiento de otros componentes que podrían verse afectados?',opciones:['Pruebas para validar el resultado de las etapas anteriores.','Pruebas de regresión.','Pruebas diseñadas durante el análisis del sistema.','No se definen pruebas de regresión en MÉTRICA v3.'],respuesta_correcta:1},
 2969:{texto:'En diseño estructurado, ¿cuál de las siguientes listas ordena correctamente de mayor a menor dependencia los tipos de acoplamiento indicados?',opciones:['Contenido, común, control, externo, datos.','Datos, marca, externo, control, común, contenido.','Datos, marca, control, externo, común, contenido.','Contenido, común, externo, control, marca (o estampado), datos.'],respuesta_correcta:3},
 2970:{texto:'Según MÉTRICA v3, ¿qué plan tiene por objetivo proporcionar un marco de referencia para desarrollar los sistemas de información de acuerdo con los objetivos estratégicos de la organización?',opciones:['Diseño del Sistema de Información (DSI).','Análisis del Sistema de Información (ASI).','Estudio de Viabilidad del Sistema (EVS).','Plan de Sistemas de Información (PSI).'],respuesta_correcta:3}
}});
