const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const src={
 hardwired:'https://www.uvm.edu/~cbcafier/cs2210/content/05_cpu_alu/datapath.html',
 alu:'https://csg.csail.mit.edu/6.S195/resources/archbook.pdf',
 ieee1394:'https://standards.ieee.org/ieee/1394.2/2096/',
 ieee1394index:'https://technav.ieee.org/topic/ieee-1394-standard/',
 dma:'https://www.nxp.com/docs/en/application-note/AN2168.pdf',
 dmaVendor:'https://onlinedocs.microchip.com/oxy/GUID-3AFF556D-77AD-488F-9A04-CD7AAB8F7DBC-en-US-1/GUID-EF31ED89-D8CE-4622-8A12-4944548F763C.html',
 ebcdic:'https://www.ibm.com/docs/en/i/7.6?topic=appendixes-appendix-h-glossary-abbreviations',
 ebcdicInfo:'https://www.ibm.com/docs/en/zos-basic-skills?topic=mainframe-ebcdic-character-set'
};
const records=[
[7046,[54],['II-1'],['unidad de control','lógica cableada','microprogramación','arquitectura de computadores'],[
 {url:src.hardwired,referencia:'University of Vermont, Datapath / control unit: el control cableado genera señales mediante lógica fija, normalmente con rapidez y poca flexibilidad; los cambios funcionales pueden exigir rediseñar el hardware. La secuencia modificable almacenada como microinstrucciones caracteriza al control microprogramado.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 54: dispositivos personales de PC y sus componentes.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema II-1: tecnologías, componentes, funcionalidades y capacidades de ordenadores.'}
],{texto:'En una unidad de control cableada, señale la afirmación falsa:',opciones:[
 'Las señales de control se generan mediante circuitos lógicos fijos a partir del estado y de la instrucción.','En diseños comparables, el control cableado suele evitar el ciclo adicional de lectura de microinstrucciones propio del control microprogramado.','Su comportamiento se modifica normalmente editando una memoria de control con microinstrucciones, sin rediseñar la lógica.','Añadir o cambiar instrucciones puede exigir modificar el diseño lógico de la unidad de control.'
],respuesta_correcta:2},'Corregida C. La formulación anterior mezclaba juicios relativos imprecisos («más rápida de lo normal» y «muy cara»). El control cableado genera señales mediante lógica fija y suele ser rápido, pero poco flexible; cambiar la lógica puede requerir rediseño. Modificar microinstrucciones almacenadas describe control microprogramado, por lo que C es la única afirmación falsa sobre control cableado.', 'corregida'],
[7047,[54],['II-1'],['ALU','operaciones aritméticas','operaciones lógicas','desplazamientos'],[
 {url:src.alu,referencia:'MIT, Computer Architecture: A Constructive Approach, §2.4 Arithmetic-Logic Units: presenta operaciones aritméticas, lógicas y de desplazamiento como funciones integrables en una ALU; el libro construye explícitamente un bloque shifter y lo combina con el resto de funciones.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 54: arquitectura y componentes de equipos personales.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema II-1: arquitectura y componentes de ordenadores.'}
],{texto:'En una arquitectura simplificada en la que el desplazador está integrado con la unidad aritmético-lógica, ¿qué tres grupos resumen sus operaciones?',opciones:[
 'Desplazamiento, lógicas y aritméticas.','Lógicas y aritméticas.','Desplazamiento, lógicas y adición.','Lógicas y adición.'
],respuesta_correcta:0},'Corregida A. Se conservó la agrupación del temario, pero se añadió la condición explícita de que el desplazador esté integrado con la ALU: algunas arquitecturas lo implementan como bloque separado. En ese modelo integrado, los grupos son operaciones de desplazamiento, lógicas y aritméticas.', 'corregida'],
[7048,[54],['II-1'],['FireWire','IEEE 1394','interfaz serie'],[
 {url:src.ieee1394,referencia:'IEEE Standards Association, descripción de IEEE Std 1394-2008: norma para un bus serie de altas prestaciones que interconecta componentes y periféricos.'},
 {url:src.ieee1394index,referencia:'IEEE Technology Navigator, IEEE 1394 Standard: identifica IEEE 1394 como el bus serie comercializado también como FireWire.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 54: conectividad de dispositivos personales.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema II-1: componentes, funcionalidades y capacidades de ordenadores y dispositivos.'}
],undefined,'Vigente B. FireWire es la denominación comercial asociada al bus serie normalizado como IEEE 1394; la opción B es correcta. IEEE identifica la familia 1394 como estándar de bus serie de altas prestaciones. Se mantiene la pregunta y clave; se documenta la equivalencia con fuente IEEE.', 'vigente'],
[7049,[59],['II-2','IV-1'],['DMA','controlador DMA','interrupciones','E/S'],[
 {url:src.dma,referencia:'NXP AN2168, ColdFire DMA Controller, apartado DMA Interrupt Example: muestra configuración del vector e interrupción DMA; el controlador ofrece estado/contador de transferencia para detectar su terminación.'},
 {url:src.dmaVendor,referencia:'Microchip online documentation, DMA Completion Interrupt: con la notificación de finalización habilitada, el estado DONE activa una interrupción que indica que la transferencia DMA ha concluido.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 59: fundamentos de sistemas operativos y operaciones de E/S.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, temas II-2 (fundamentos de sistemas operativos) y IV-1 (administración del SO y software de base).'}
],{texto:'En una transferencia DMA con la notificación de fin habilitada, ¿cómo puede el controlador informar al procesador de que ha terminado el bloque?',opciones:[
 'Generando una interrupción al alcanzar la condición de fin de transferencia configurada.','Controlando qué bloques de disco utiliza cada proceso.','Manteniendo en memoria principal únicamente las páginas de un proceso necesarias en ese momento.','Dividiendo la memoria principal en bloques y asignándolos a los distintos procesos.'
],respuesta_correcta:0},'Corregida A. La clave era correcta para el caso habitual, pero no toda transferencia DMA genera una interrupción de forma incondicional: depende de que se habilite/configure la notificación de finalización. El enunciado ahora explicita esa condición. Las otras opciones describen asignación de bloques o gestión de memoria virtual, no la función del controlador DMA.', 'corregida'],
[7050,[52],['II-1'],['EBCDIC','codificación de caracteres','código de 8 bits','mainframe'],[
 {url:src.ebcdic,referencia:'IBM i 7.6, Appendix H glossary: define EBCDIC como un conjunto codificado de 256 caracteres de ocho bits.'},
 {url:src.ebcdicInfo,referencia:'IBM z/OS Basic Skills, EBCDIC character set: explica que EBCDIC usa unidades de 8 bits. El número de patrones posibles es 2^8 = 256; el repertorio asignado depende de la página de códigos.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 52: sistemas de altas prestaciones y mainframe.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema II-1: tecnología, arquitecturas y componentes de ordenadores.'}
],{texto:'¿Cuántos valores de código distintos puede representar una unidad EBCDIC de 8 bits?',opciones:['128','64','256','512'],respuesta_correcta:2},'Corregida C. Se sustituyó «símbolos diferentes» por «valores de código»: una unidad de 8 bits tiene 2^8 = 256 patrones posibles. No implica que todas las páginas de códigos asignen un carácter imprimible distinto a cada patrón; existen códigos de control y las asignaciones dependen de la variante EBCDIC.', 'corregida']
];
aplicar({numero:'1345',fecha:'2026-11-15',records});
