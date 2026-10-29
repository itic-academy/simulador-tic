const apply = require('./aplicar-lote.cjs');

const bpmn = 'https://www.omg.org/spec/BPMN/2.0.2/PDF';
const uml = 'https://www.omg.org/spec/UML/2.5.1/PDF';
const metrica = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Tecnicas_y_Practicas.pdf';
const law40 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566';
const law3 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-3444';
const law50 = 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-25336';

const rows = [
  [3196, ['90'], ['III-2'], ['BPMN', 'BPMN 2.0.2', 'sequence flow', 'message flow', 'data objects'], [
    {url:bpmn, referencia:'OMG, BPMN 2.0.2, §§1.1, 8–10: la notación abarca diagramas de proceso y colaboración; éstos incluyen sequence flow, participantes/message flow y elementos de datos. La especificación ofrece un puente de visualización para lenguajes de ejecución, pero no establece una transformación general y reversible entre BPMN y BPEL.'}
  ], '', 'Se concreta el alcance de BPMN: permite modelar el orden del proceso mediante flujos de secuencia, la información mediante elementos de datos y la comunicación entre participantes mediante colaboraciones y flujos de mensaje. No se afirma que BPMN y WS-BPEL sean transformables de forma general y reversible, ni que XPDL/BPEL sean implementaciones de BPMN. A1-90/A2-III-2.', 'corregida'],
  [3197, ['90'], ['III-2'], ['BPMN', 'BPMN 2.0.2', 'conformidad', 'BPEL', 'choreography'], [
    {url:bpmn, referencia:'OMG, BPMN 2.0.2, §2.1: enumera Process Modeling Conformance, Process Execution Conformance, BPEL Process Execution Conformance y Choreography Modeling Conformance.'}
  ], '', 'Se normalizan los cuatro nombres de conformidad definidos por BPMN 2.0.2. La especificación distingue modelado de procesos, ejecución de procesos, ejecución BPEL de procesos y modelado de coreografías. «Modelización de orquestación» no es uno de esos tipos; BPEL Process Execution Conformance sí lo es. A1-90/A2-III-2.', 'corregida'],
  [3198, ['90'], ['III-9'], ['UML', 'máquina de estados', 'transición', 'vértice', 'pseudestado'], [
    {url:uml, referencia:'OMG, UML 2.5.1, §14.3.14, Transition: relación dirigida entre source vertex y target vertex; las asociaciones source y target tienen multiplicidad [1] y cada extremo designa un único vértice, que puede ser un estado o pseudestado.'}
  ], '', 'Se corrige la clave: una Transition UML tiene exactamente un vértice source y un vértice target (multiplicidad [1] para ambos). Un vértice puede ser un estado o pseudestado; la notación no permite que una misma transición tenga varios orígenes o varios destinos. A1-90/A2-III-9.', 'corregida'],
  [3199, ['90', '95'], ['III-2'], ['DFD', 'diagrama de flujo de datos', 'proceso', 'flujo de entrada', 'flujo de salida'], [
    {url:metrica, referencia:'MÉTRICA v3, Técnicas y Prácticas, técnica Diagrama de Flujo de Datos; y MÉTRICA v3, Análisis del Sistema de Información, ASI: los procesos transforman entradas en salidas. Las reglas de consistencia evitan procesos sin entrada (milagros) o sin salida (agujeros negros), y que se modelen como fuente o sumidero final de datos.'}
  ], '', 'Se mantiene la respuesta «las opciones a) y b) son correctas», explicitando la regla de análisis estructurado: todo proceso de un DFD debe recibir y producir datos; no debe ser el origen o destino terminal de la información. La opción sobre proceso primitivo es falsa: primitivo significa que no se descompone en un nivel inferior, no que origine procesos con el tiempo. A1-90/A1-95/A2-III-2.', 'corregida'],
  [3200, ['4'], ['I-3', 'I-8'], ['Ley 40/2015', 'Ley 3/2015', 'ministros', 'secretarios de Estado', 'órganos superiores', 'alto cargo'], [
    {url:law40, referencia:'Ley 40/2015, texto consolidado del BOE, art. 55.3.a y 55.6: Ministros y Secretarios de Estado son órganos superiores y tienen condición de alto cargo, con la excepción legal de los Subdirectores generales y asimilados.'},
    {url:law3, referencia:'Ley 3/2015, art. 1.2.a: son altos cargos los miembros del Gobierno y los Secretarios de Estado.'},
    {url:law50, referencia:'Ley 50/1997, arts. 12.2 y 15.1: Ministros nombrados por el Rey a propuesta del Presidente del Gobierno; Secretarios de Estado nombrados por Real Decreto del Consejo de Ministros, a propuesta del Presidente o del miembro del Gobierno correspondiente.'}
  ], '', 'Se sustituye la pregunta, que mezclaba «órgano superior/directivo», alto cargo y forma de nombramiento. Conforme al art. 55 de la Ley 40/2015, Ministros y Secretarios de Estado son órganos superiores y ambos tienen condición de alto cargo; los Secretarios de Estado no son órganos directivos. La Ley 50/1997 diferencia sus nombramientos: los Ministros por el Rey a propuesta del Presidente; los Secretarios de Estado por Real Decreto del Consejo de Ministros. A1-4/A2-I-3/A2-I-8.', 'corregida']
];

const edits = {
  3196: {texto:'¿Qué afirmación describe correctamente el alcance de BPMN 2.0.2?', opciones:['BPMN solo modela el orden de las actividades y no representa datos.','BPMN solo representa mensajes entre participantes, no el flujo interno de un proceso.','BPMN puede representar el flujo de actividades, datos asociados y mensajes entre participantes.','BPMN y WS-BPEL son dos nombres de la misma especificación ejecutable.'], respuesta_correcta:2},
  3197: {texto:'BPMN 2.0.2 define cuatro tipos de conformidad. ¿Cuál de estas denominaciones NO corresponde a uno de ellos?', opciones:['Conformidad de modelado de procesos.','Conformidad de ejecución de procesos.','Conformidad de modelado de orquestación.','Conformidad de ejecución de procesos BPEL.'], respuesta_correcta:2},
  3198: {texto:'En UML 2.5.1, una transición de una máquina de estados tiene:', opciones:['Exactamente un vértice de origen y uno de destino; cada uno puede ser un estado o un pseudestado.','Varios vértices de origen y un único vértice de destino.','Un único vértice de origen y varios vértices de destino.','Varios vértices de origen y varios vértices de destino.'], respuesta_correcta:0},
  3199: {texto:'En las reglas de consistencia de un diagrama de flujo de datos (DFD), ¿qué afirmación sobre los procesos es correcta?', opciones:['Cada proceso debe tener al menos un flujo de entrada y uno de salida.','Un proceso transforma datos; no debe actuar como origen o destino terminal de la información.','Un proceso primitivo es el que, con el tiempo, origina otros procesos del sistema.','Las opciones a) y b) son correctas.'], respuesta_correcta:3},
  3200: {texto:'Según los artículos 55 de la Ley 40/2015 y 1 de la Ley 3/2015, ¿qué condición comparten los Ministros y los Secretarios de Estado?', opciones:['Los Ministros son órganos superiores y los Secretarios de Estado, órganos directivos.','Ambos son órganos superiores de la AGE y tienen la condición de alto cargo.','Ambos son órganos directivos, pero solo los Ministros son altos cargos.','Ambos son nombrados por el Rey conforme al mismo procedimiento.'], respuesta_correcta:1}
};

apply({numero:'576', fecha:'2026-10-30', records:rows, edits});
