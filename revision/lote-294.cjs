const apply=require('./aplicar-lote.cjs');
const records=[
 [1786,[59],['II-2'],['planificación CPU','SRTF','Shortest Remaining Time First','preemptiva','SJF'],[
  {url:'https://cs341.cs.illinois.edu/coursebook/Scheduling',referencia:'University of Illinois Urbana-Champaign, CS 341 Coursebook, Scheduling: describe SRTF como variante de SJF que compara el tiempo restante y explica la ejecución preemptiva.'}
 ],null,'Shortest Remaining Time First (SRTF) es la variante preemptiva de SJF: el planificador puede interrumpir el proceso en ejecución cuando otro proceso tiene menor tiempo restante estimado. FCFS y SJF/SPN clásicos son no-preemptivos; la respuesta original es correcta.','vigente'],
 [1787,[65,67],['III-10','III-12'],['J2EE','patrones de diseño','Session Facade','MVC','DAO','abstraction inversion'],[
  {url:'https://www.oracle.com/java/technologies/design-patterns-catalog.html',referencia:'Oracle, J2EE Patterns Catalog: incluye Session Facade, Model-View-Controller y Data Access Object entre los patrones catalogados.'},
  {url:'https://www.oracle.com/java/technologies/session-facade.html',referencia:'Oracle, Core J2EE Patterns Session Facade: documenta el patrón Session Facade.'},
  {url:'https://www.oracle.com/java/technologies/dataaccessobject.html',referencia:'Oracle, Core J2EE Patterns Data Access Object: documenta el patrón DAO.'}
 ],{texto:'Según el catálogo clásico Core J2EE Patterns de Oracle, ¿cuál de los siguientes NO aparece como patrón J2EE?',opciones:['Abstraction inversion.','Session Facade.','Model-View-Controller (MVC).','Data Access Object (DAO).'],respuesta_correcta:0},'La pregunta original estaba mal escrita (faÇade, controler) y no definía qué catálogo identificaba los patrones. Se formula contra el catálogo clásico de Oracle: éste enumera Session Facade, Model-View-Controller y DAO, pero no “abstraction inversion”. Se acota la afirmación a dicho catálogo en vez de sostener que ese término nunca se use como patrón o antipatrón en ningún contexto.','corregida'],
 [1788,[54],['II-1'],['PDF417','ISO/IEC 15438:2015','código de barras bidimensional','simbología','captura automática'],[
  {url:'https://www.iso.org/standard/65502.html',referencia:'ISO/IEC 15438:2015: especifica la simbología de código de barras PDF417; la ficha de ISO registra la edición y su revisión/reconfirmación.'}
 ],{texto:'¿Qué es PDF417?',opciones:['Una simbología de código de barras bidimensional apilada, especificada en ISO/IEC 15438.','Un formato de archivo para conservar documentos electrónicos a largo plazo.','Una técnica de compresión sin pérdidas basada en codificación de trellis.','Una tecnología de impresión reprográfica de alta calidad.'],respuesta_correcta:0},'PDF417 es una simbología de código de barras bidimensional apilada; ISO/IEC 15438 especifica sus características, codificación, dimensiones y corrección de errores. No es un formato de archivo ni una técnica de compresión.','corregida'],
 [1789,[60],['II-2'],['Nemo','Cinnamon','Linux Mint','gestor de archivos','file manager'],[
  {url:'https://github.com/linuxmint/nemo',referencia:'Proyecto oficial Linux Mint Nemo: lo identifica como gestor de archivos oficial del escritorio Cinnamon y publica su código fuente.'},
  {url:'https://community.linuxmint.com/software/view/nemo',referencia:'Catálogo de software de Linux Mint, Nemo: gestor de archivos y shell gráfico para Cinnamon.'}
 ],{texto:'En Linux Mint/Cinnamon, ¿qué es Nemo?',opciones:['El gestor de archivos del escritorio Cinnamon.','Una aplicación multimedia para móviles.','Una suite de ofimática.','Un editor de texto.'],respuesta_correcta:0},'Nemo es el gestor de archivos oficial del entorno de escritorio Cinnamon. El nombre, sin contexto, también puede referirse a otros productos o proyectos; se identifica la plataforma para evitar esa ambigüedad.','corregida'],
 [1790,[67],['III-10'],['Java EE','Jakarta EE','Eclipse Foundation','plataforma empresarial Java'],[
  {url:'https://jakarta.ee/about/faq/',referencia:'Eclipse Foundation, Jakarta EE FAQ: describe Jakarta EE como evolución de las tecnologías Java EE contribuidas por Oracle y explica la elección del nuevo nombre.'}
 ],null,'Jakarta EE es el nombre adoptado por la plataforma empresarial Java cuya evolución pasó a la Eclipse Foundation; el organismo describe las tecnologías Java EE aportadas por Oracle como base de Jakarta EE. La clave original es correcta.','vigente']
];
const edits=Object.fromEntries(records.filter(r=>r[5]&&Object.keys(r[5]).length).map(r=>[r[0],r[5]]));
apply({numero:'294',fecha:'2026-10-27',records,edits});
