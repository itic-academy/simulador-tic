const records = [
  [801,[109],['IV-13'],['RFC','RFC Editor','IETF','estándares de Internet','estado del documento'],[
    {url:'https://www.rfc-editor.org/series/rfc/',referencia:'RFC Editor, What Is an RFC?: la serie RFC archiva documentos sobre estándares de Internet, especificaciones técnicas, protocolos, procedimientos, investigación y otra información de Internet; el estado del RFC determina su tipo y no todo RFC es un Internet Standard.'}
  ],null,'Se sustituye la opción correcta B por una definición completa y se separa el sentido histórico de la sigla «Request for Comments» de la naturaleza actual de la serie. Un RFC puede ser estándar, informativo, experimental, BCP, histórico u otro estado; su publicación como RFC no lo convierte automáticamente en estándar de Internet.','corregida'],
  [802,[5],[],['Horizonte 2020','Horizonte Europa','programa marco de investigación de la UE'],[
    {url:'https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-2020_en',referencia:'Comisión Europea, ficha de Horizonte 2020: programa 2014–2020 sucedido por Horizonte Europa.'},
    {url:'https://research-and-innovation.ec.europa.eu/strategy/dissemination-and-exploitation-research-results_en',referencia:'Comisión Europea: Horizonte Europa es el sucesor de Horizonte 2020 y abarca el período 2021–2027.'}
  ],null,'La opción B sigue siendo correcta. La Comisión Europea indica que Horizonte 2020 fue el programa de investigación e innovación de 2014–2020 y que su sucesor, Horizonte Europa, se desarrolla en 2021–2027.','vigente'],
  [803,[52],['II-1'],['SMP','Symmetric Multiprocessing','multiprocesador','memoria compartida'],[
    {url:'https://www.ibm.com/docs/en/iis/11.7.0?topic=topologies-parallel-processing',referencia:'IBM Documentation, Parallel processing topologies: SMP significa symmetric multiprocessing; los procesadores comparten recursos, incluida la memoria, y ejecutan una carga distribuida entre ellos.'}
  ],null,'Se mantiene D como afirmación incorrecta y se corrige la errata del término: SMP significa «Symmetric Multiprocessing», no «Symetric Massively Processing». Las otras opciones se concretan con propiedades de la arquitectura, sin afirmar que SMP garantice por sí misma un rendimiento elevado.','corregida'],
  [804,[63],['IV-2'],['Oracle Database','tablespaces','permanent','temporary','undo'],[
    {url:'https://docs.oracle.com/en/database/oracle/oracle-database/26/admin/managing-tablespaces.html',referencia:'Oracle AI Database 26ai Administrator’s Guide, Managing Tablespaces: documenta los tablespaces permanentes, temporales y undo, y sus sentencias de creación y administración.'}
  ],null,'Se corrige la clasificación para distinguir tipos de tablespace de nombres de tablespaces concretos. Oracle documenta tres tipos: permanente, temporal y undo; SYSTEM y SYSAUX son tablespaces concretos, y REDO designa registros, no otro tipo de tablespace.','corregida'],
  [805,[58],['II-6'],['sistemas distribuidos','gestión de entornos distribuidos','heterogeneidad','dispersión geográfica'],[],null,'Pendiente de fuente y precisión. La respuesta A parece el temario pretendido, pero el enunciado no identifica un marco o fuente y las opciones B y C hacen afirmaciones generales discutibles sobre costes y usuarios (la expresión «usuarios inoperativos» puede ser una errata). No se certifica la clave ni se reformula hasta cotejar el material de academia o localizar una fuente que delimite estos condicionantes.','pendiente_fuente']
];
const edits = {
  801:{texto:'¿Qué son los documentos publicados en la serie RFC?',opciones:[
    'Peticiones de cambio (Request for Change) que proponen modificar protocolos de Internet ya operativos.',
    'Documentos que describen estándares de Internet, especificaciones técnicas, protocolos, procedimientos, investigación y otra información relacionada con Internet; cada documento tiene un estado propio.',
    'Formularios de consulta que recogen comentarios de usuarios sobre protocolos antes de publicarlos.',
    'Especificaciones formales de llamadas a funciones remotas (Remote Function Call).'
  ],respuesta_correcta:1},
  803:{texto:'Indique la afirmación incorrecta sobre SMP (Symmetric Multiprocessing):',opciones:[
    'Es una arquitectura de multiprocesamiento simétrico en la que varios procesadores comparten memoria principal.',
    'Los procesadores pueden ejecutar trabajos concurrentes bajo un mismo sistema operativo.',
    'Los procesadores se comunican mediante los recursos compartidos del sistema, como la memoria.',
    'Sus siglas significan Symmetric Massively Processing.'
  ],respuesta_correcta:3},
  804:{texto:'¿Cuáles son los tres tipos generales de tablespace documentados por Oracle Database?',opciones:[
    'Permanente y temporal.',
    'Permanente, temporal y undo.',
    'SYSTEM, SYSAUX, TEMP y REDO.',
    'SYSTEM, normal y rootdbs.'
  ],respuesta_correcta:1}
};
require('./aplicar-lote.cjs')({numero:'097',fecha:'2026-10-22',records,edits});
