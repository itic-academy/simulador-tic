const aplicar=require('./aplicar-lote.cjs');
const ref=(url,referencia)=>({url,referencia});
const boe='https://www.boe.es/buscar/doc.php?id=BOE-A-2005-8902';
const dominios='https://www.dominios.es/es/sobre-dominios/normativa';
const idn='https://www.dominios.es/es/sobre-dominios/normativa/instruccion-director-general-red-caracteres-multiling%C3%BCes';
const pmi='https://www.pmi.org/learning/library/2019/04/07/15/39/critical-path-method-calculations-scheduling-8040';
const git='https://git-scm.com/docs/git-stash';
const minsky='https://www.mit.edu/~dxh/marvin/web.media.mit.edu/~minsky/papers/Frames/frames.html';
const minskyPdf='https://courses.media.mit.edu/2004spring/mas966/Minsky%201974%20Framework%20for%20knowledge.pdf';
const nist='https://csrc.nist.gov/pubs/ir/8202/final';
const nistGlossary='https://csrc.nist.gov/glossary/term/blockchain';
const bitcoin='https://bitcoin.org/bitcoin.pdf';
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const records=[
 [5776,[109],['IV-13'],['dominios .es','sintaxis de nombres de dominio','Dominios.es','Red.es','IDN'],[
  ref(dominios,'Registro oficial Dominios.es/Red.es, normativa vigente: nombres .es admiten letras, dígitos, guion no inicial/final y los caracteres multilingües enumerados; segundo nivel mínimo 3 y tercero mínimo 2.'),
  ref(boe,'Orden ITC/1542/2005, disposición undécima: sintaxis de dominios .es, dígitos y guion, límites de longitud y reserva de prefijo xn--; fuente jurídica base del plan nacional.'),
  ref(idn,'Instrucción oficial de Red.es sobre caracteres multilingües: mantiene la prohibición del prefijo ACE xn-- y explica la codificación IDN.'),
  ref(a1,'Convocatoria GSI A1 2025, tema 109: Internet y servicios básicos.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, IV.13: arquitectura y funcionamiento de Internet.'),
 ],null,'Corregida, respuesta A (afirmación falsa). Las reglas no limitan los nombres a letras: admiten también dígitos y guion, además de los caracteres multilingües que publica Red.es. Las demás reglas se ajustan al plan .es: el guion no va en los extremos, se prohíbe iniciar con xn-- y se fijan mínimos de 3/2 caracteres para segundo/tercer nivel. La pregunta se actualiza a la normativa vigente. A1-109/A2-IV.13.','corregida'],
 [5777,[35,36],['III-2'],['PERT','CPM','actividad crítica','camino crítico','holgura total'],[
  ref(pmi,'Project Management Institute, «Critical Path Method Calculations»: define una actividad crítica como actividad sin holgura; su holgura total es cero y las actividades críticas forman uno o más caminos críticos.'),
  ref(a1,'Convocatoria GSI A1 2025, temas 35 (dirección/gestión de proyectos) y 36 (métodos predictivos, GANTT y PERT).'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, III.2: técnicas de gestión y planificación de proyectos.'),
 ],null,'Corregida, respuesta A. Una actividad crítica está en un camino crítico y, en el cálculo ordinario de red con fechas objetivo igualadas a la duración del proyecto, tiene holgura total cero; no se define por ser arriesgada ni por no poder cambiar nunca su duración estimada. A1-35/A1-36/A2-III.2.','corregida'],
 [5778,[102],['III-6'],['Git','git stash','working tree','cambios locales','staging'],[
  ref(git,'Documentación oficial de Git, git-stash: guarda modificaciones locales (árbol de trabajo e índice) en una entrada de stash y restaura el árbol respecto de HEAD; por defecto no incluye archivos sin seguimiento.'),
  ref(a1,'Convocatoria GSI A1 2025, tema 102: gestión de configuración, versiones y entornos.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, III.6: construcción, entornos y herramientas de desarrollo.'),
 ],null,'Corregida, respuesta B (`git stash`; forma explícita actual: `git stash push`). Aparta temporalmente cambios locales versionados del árbol de trabajo/índice; como no quedan en un commit, no viajan al remoto con `git push`. Por defecto, archivos no rastreados requieren `-u`. Se evita decir que stash elimina o sube cambios. A1-102/A2-III.6.','corregida'],
 [5779,[70],['III-5'],['sistemas expertos','representación del conocimiento','frames','ranuras','Minsky'],[
  ref(minsky,'Marvin Minsky, MIT AI Memo 306 (1974), «A Framework for Representing Knowledge»: describe frames como estructuras de representación con terminales/slots que se asignan a instancias o datos.'),
  ref(minskyPdf,'Copia digital del texto de Minsky (1974), alojada por MIT: desarrolla los frames y sus slots/defaults.'),
  ref(a1,'Convocatoria GSI A1 2025, tema 70: sistemas expertos y representación de conocimiento dentro de IA.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, III.5: fundamentos de IA y tecnologías asociadas.'),
 ],null,'Vigente, respuesta D (marco/frame). En la representación por marcos, el frame agrupa información de un concepto, objeto o situación mediante terminales o slots, que pueden contener valores, restricciones y valores por defecto. Minsky lo describe como una estructura de nodos/relaciones con slots que se rellenan con datos. A1-70/A2-III.5.','vigente'],
 [5780,[85],[],['blockchain','cadena de bloques','consenso','NIST','árbol de Merkle'],[
  ref(nist,'NIST IR 8202, Blockchain Technology Overview: libro distribuido resistente a manipulaciones; vincula bloques criptográficamente y describe validación y decisión de consenso para añadirlos.'),
  ref(nistGlossary,'NIST CSRC Glossary, blockchain: transacciones agrupadas en bloques, enlace criptográfico con el anterior tras validación/decisión de consenso y reglas de resolución de conflictos.'),
  ref(bitcoin,'Nakamoto, Bitcoin: A Peer-to-Peer Electronic Cash System (2008), §4: transacciones resumidas en un árbol de Merkle, cuya raíz se incorpora al encabezado del bloque.'),
  ref(a1,'Convocatoria GSI A1 2025, tema 85: blockchain, características, algoritmos de consenso y smart contracts.'),
 ],null,'Corregida, respuesta A. Se limita la afirmación a una blockchain distribuida típica: un bloque candidato se valida y se incorpora conforme a las reglas de consenso del protocolo; los detalles dependen de la red. La resistencia a alteraciones es tamper-evident/tamper-resistant, no imposibilidad matemática absoluta de reorganización. El bloque inicial se llama genesis, no cabecera, y el árbol para comprometer transacciones es Merkle, no CHAID. El temario A2 2025 no contiene un epígrafe específico de blockchain, por eso no se fuerza una etiqueta A2. A1-85.','corregida'],
];
const edits={
 5776:{texto:'Según las reglas vigentes de asignación de nombres bajo «.es», ¿qué afirmación es FALSA?',opciones:['Los únicos caracteres válidos son letras de los alfabetos de las lenguas españolas.','La longitud mínima es de tres caracteres para segundo nivel y dos para tercer nivel.','No se permite que los cuatro primeros caracteres del nombre sean «xn--».','El nombre no puede empezar ni terminar por guion.'],respuesta_correcta:0},
 5777:{texto:'En una red de actividades PERT/CPM, ¿qué caracteriza a una actividad crítica?',opciones:['Tiene holgura total cero y pertenece a un camino crítico.','Presenta necesariamente un riesgo alto de aumentar su duración.','Depende de otra actividad y tiene al menos una sucesora.','Su duración estimada no se puede revisar.'],respuesta_correcta:0},
 5778:{texto:'¿Qué comando de Git aparta temporalmente los cambios locales de archivos versionados (incluidos los preparados en el índice) y deja limpio el árbol de trabajo, sin crear un commit que pueda enviarse al remoto?',opciones:['git rebase','git stash push','git reset','git add'],respuesta_correcta:1},
 5780:{texto:'En una blockchain distribuida típica, ¿qué afirmación describe correctamente la incorporación de un bloque?',opciones:['El bloque candidato se valida y se incorpora según las reglas de consenso del protocolo.','Cualquier nodo puede alterar un bloque ya propagado sin invalidar los hashes de bloques posteriores.','El primer bloque de la cadena se denomina «bloque cabecera».','Las transacciones de cada bloque se resumen mediante un árbol CHAID.'],respuesta_correcta:0}
};
aplicar({numero:'1091',fecha:'2026-11-12',records,edits});
