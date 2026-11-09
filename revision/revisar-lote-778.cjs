const apply=require('./aplicar-lote.cjs');
const metrics='https://learn.microsoft.com/en-us/azure/well-architected/performance-efficiency/performance-targets';
const trlpi='https://boe.es/buscar/act.php?id=BOE-A-1996-8930&p=20200506&tn=0';
const eni='https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331&p=20241106&tn=0';
const ens='https://boe.es/buscar/act.php?id=BOE-A-2022-7191';
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const perf='https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk';
const software='https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk';
const interoperability='https://drive.google.com/file/d/1yCTWUEye96mUcx_SwiEJshldD-sV2hXS/view?usp=drivesdk';
const security='https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk';
const records=[
 [4211,['91'],['IV-4'],['rendimiento de sistemas','métricas de rendimiento','tiempo de respuesta','throughput','utilización CPU','capacidad'],[
  {url:metrics,referencia:'Microsoft Azure Well-Architected Framework, «Performance targets»: identifica latencia/tiempo de respuesta y throughput como métricas; distingue indicadores medibles de los niveles tecnológicos que afectan al rendimiento.'},
  {url:perf,referencia:'ITIC Academy, bloque de requisitos no funcionales, actualización 2026: incluye rendimiento entre los atributos analizados; el tema A2-IV-4 incluye evaluación/monitorización del rendimiento y gestión de capacidad.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, anexo I, tema 91: análisis de aspectos no funcionales, incluido rendimiento.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema IV-4: evaluación/monitorización del rendimiento y gestión de capacidad.'}
 ],'Tiempo de respuesta, productividad (throughput) y utilización de CPU son medidas observables habituales de rendimiento/capacidad. El tipo de procesador puede influir en el resultado, pero es una característica del hardware y no una métrica directa de rendimiento; por ello es la respuesta correcta a «no interviene directamente» entendida como indicador.','Se confirma la clave original y se explicita en la explicación la diferencia entre una métrica y un factor de capacidad/hardware que influye en ella.','vigente'],
 [4212,['43'],['II-14'],['propiedad intelectual','software','programas de ordenador','TRLPI','derechos de explotación','artículo 99'],[
  {url:trlpi,referencia:'Texto consolidado del Real Decreto Legislativo 1/1996, artículo 99: derechos exclusivos del titular del programa incluyen reproducción, traducción/adaptación/transformación y cualquier forma de distribución pública.'},
  {url:software,referencia:'ITIC Academy, tema A1-43 / A2-T14, protección jurídica del software, edición 2026: derechos de explotación, titularidad y artículo 99 TRLPI.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, anexo I, tema 43: protección jurídica de programas de ordenador.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema II-14: protección jurídica del software y tipos de licencias.'}
 ],'El artículo 99 TRLPI incluye expresamente reproducción, traducción/adaptación/arreglo u otra transformación y distribución pública (incluido el alquiler) entre los derechos exclusivos de explotación del programa. La opción «Todas las anteriores» es, por tanto, correcta: ninguna de las tres primeras alternativas es la excepción. Se reescribe el enunciado en positivo para evitar la construcción meta-negativa.','Se cambia el enunciado a positivo y se precisa que la opción agregada recoge derechos que el artículo 99 enumera expresamente. Se mantiene la clave «Todas las anteriores».','corregida'],
 [4213,['45'],['I-9'],['interoperabilidad','ENI','interoperabilidad semántica','reutilización de datos','RD 4/2010'],[
  {url:eni,referencia:'Real Decreto 4/2010, anexo Glosario: interoperabilidad semántica es que la información intercambiada pueda interpretarse automáticamente y reutilizarse por aplicaciones que no participaron en su creación; artículo 4 define principios y artículos 5–7 sus dimensiones/enfoques.'},
  {url:interoperability,referencia:'ITIC Academy, bloque Interoperabilidad 2026.2: temas A1 45–46 y A2 O9/O10; dimensiones ENI y sus definiciones cotejadas con el RD vigente.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, anexo I, tema 45: ENI y dimensiones de interoperabilidad.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema I-9: ENI y normas técnicas de interoperabilidad.'}
 ],'La opción 2 reproduce la definición del glosario del ENI. La opción 1 describe interoperabilidad organizativa; la 3, interoperabilidad técnica; y la 4, interoperabilidad en el tiempo. La respuesta se contrasta con el texto consolidado del Real Decreto 4/2010, cuya última actualización publicada es de 2024.','Se confirma la clave original y se corrige la gramática del enunciado, manteniendo la terminología legal y diferenciando las cuatro dimensiones que aparecen en las alternativas.','vigente'],
 [4214,['45'],['I-9'],['interoperabilidad','ENI','principios básicos','cualidad integral','carácter multidimensional','soluciones multilaterales'],[
  {url:eni,referencia:'Real Decreto 4/2010, artículos 4–7: enumera como principios específicos interoperabilidad como cualidad integral, carácter multidimensional y enfoque de soluciones multilaterales.'},
  {url:interoperability,referencia:'ITIC Academy, bloque Interoperabilidad 2026.2, tema A1-45 y A2-O9: principios y dimensiones ENI cotejados con el texto consolidado.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, anexo I, tema 45: Esquema Nacional de Interoperabilidad.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema I-9: ENI y sus normas técnicas.'}
 ],'Las tres expresiones de las opciones 1–3 son los principios específicos que enumera el artículo 4 del RD 4/2010; por ello «Todos los anteriores» es la respuesta correcta. Los artículos 5, 6 y 7 desarrollan respectivamente la cualidad integral, la multidimensionalidad y el enfoque de soluciones multilaterales.','Se confirma la opción 4 contra los principios del artículo 4 vigente del ENI y sus artículos de desarrollo.','vigente'],
 [4215,['48'],['I-9'],['ENS','Esquema Nacional de Seguridad','continuidad','op.cont.2','disponibilidad','RD 311/2022'],[
  {url:ens,referencia:'Real Decreto 311/2022, anexo II, medida op.cont.2 «Plan de continuidad»: dimensión D (disponibilidad); en la tabla de aplicación la medida no aplica en nivel bajo ni medio y sí aplica en nivel alto. El requisito op.cont.2.5 dispone que el plan forme parte integral y armónica de los planes de continuidad generales de la organización.'},
  {url:security,referencia:'ITIC Academy, bloque ENS y ciberseguridad 2026.2, temas A1-48 y A2-O9: marco ENS vigente RD 311/2022, medidas del anexo II y continuidad; cotejada la tabla de categorías frente a versiones antiguas.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, anexo I, tema 48: Esquema Nacional de Seguridad y adecuación.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema I-9: ENS y guías CCN-STIC serie 800.'}
 ],'La respuesta incorrecta es «Aplica a categoría MEDIA». La medida op.cont.2 del anexo II del RD 311/2022 se asocia a la dimensión disponibilidad y la tabla de aplicación indica que solo aplica a nivel ALTO, no a BAJO ni MEDIO. El requisito op.cont.2.5 sí exige integración armónica con los planes de continuidad de otras materias. Se cita el ENS vigente para no confundir el reactivo con versiones anteriores.','Se confirma la clave 1 con el anexo II vigente del RD 311/2022; se delimita a la medida op.cont.2 y se hace explícito que el nivel MEDIO no la activa.','vigente']
];
const edits={
 4211:{texto:'¿Cuál no es una métrica directa habitual para evaluar el rendimiento de un sistema, sino una característica del hardware que puede influir en él?'},
 4212:{texto:'Según el artículo 99 del texto refundido de la Ley de Propiedad Intelectual, ¿qué derechos exclusivos de explotación se reconocen al titular de un programa de ordenador?',opciones:['La reproducción total o parcial del programa.','La traducción, adaptación u otra transformación del programa.','La distribución pública del programa, incluido su alquiler.','Todas las anteriores son verdaderas.']},
 4213:{texto:'¿Qué enunciado reproduce la definición de interoperabilidad semántica del Esquema Nacional de Interoperabilidad?'},
 4215:{texto:'Conforme al Real Decreto 311/2022, anexo II, medida op.cont.2 («Plan de continuidad»), indique la afirmación INCORRECTA:'}
};
apply({numero:'778',fecha:'2026-11-09',records,edits});
