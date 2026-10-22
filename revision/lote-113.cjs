const apply=require('./aplicar-lote.cjs');
const records=[
  [881,[99],['III-2'],['puntos de función','DSI','COCOMO','nivel de lenguaje'],[],null,'No se certifica la clave heredada. La relación DSI = FP × 320/nivel aparece en fuentes didácticas como una estimación empírica de líneas de código a partir de puntos de función y nivel del lenguaje, pero no es una ecuación propia de COCOMO. Falta verificar la fuente primaria exacta que justifique el coeficiente y la convención de «nivel» usada en el examen. Se mantiene intacta hasta resolver esta atribución y la fórmula.','pendiente_ambiguedad'],
  [882,[63],['II-5','III-4'],['transacciones','ACID','atomicidad','consistencia','aislamiento','durabilidad'],[
    {url:'https://learn.microsoft.com/en-us/windows/win32/cossdk/acid-properties',referencia:'Microsoft Learn, ACID Properties: define las cuatro propiedades transaccionales atomicidad, consistencia, aislamiento y durabilidad.'}
  ],null,'La combinación correcta es ACID: atomicidad, consistencia, aislamiento y durabilidad. «Racionalidad» y propiedades de seguridad como autenticación/confidencialidad no forman parte de este acrónimo.','vigente'],
  [883,[86],['III-9'],['UML','clase activa','clase pasiva','elementos estructurales'],[
    {url:'https://www.omg.org/spec/UML/2.5.1/PDF',referencia:'OMG UML 2.5.1, §11 y metaclase Class: UML define Class y la propiedad isActive; la especificación incluye clases activas, pero no una metaclase estructural separada denominada «clase pasiva».'}
  ],null,'La pregunta se acota a los elementos/clasificadores estructurales definidos por UML. «Clase activa» es una clase con comportamiento ejecutado por su propio hilo o proceso (isActive=true); «clase pasiva» no es un elemento estructural independiente del metamodelo, aunque una clase ordinaria pueda tener isActive=false.','corregida'],
  [884,[98,103],['III-13'],['ISO 9000:2000','política de calidad','gestión de la calidad','histórica'],[
    {url:'https://www.iso.org/obp/ui/?_escaped_fragment_=iso:std:iso:iso:9000:ed-5:v1:en',referencia:'ISO 9000:2026, vocabulario de sistemas de gestión de la calidad: política es la intención y dirección formalmente expresada por la alta dirección; política de calidad es la política relativa a la calidad.'}
  ],null,'La respuesta histórica es «política de la calidad». El enunciado cita ISO 9000:2000, edición sustituida; la formulación normativa actual conserva la definición de política como intención y dirección expresada formalmente por la alta dirección, aplicada al ámbito de calidad. Se mantiene la referencia temporal original y se clasifica como histórica.','historica'],
  [885,[63],['III-4'],['modelo entidad-relación','cardinalidad','participación','restricciones'],[
    {url:'https://dspace.mit.edu/entities/publication/5f4dcb94-111c-4368-8374-cec8842dee1d',referencia:'Peter P. S. Chen, The Entity-Relationship Model: Toward a Unified View of Data, MIT Sloan Working Paper 839-76 (1976), artículo fundacional del modelo entidad-relación y sus restricciones de correspondencia.'},
    {url:'https://cci.drexel.edu/faculty/song/publications/p_Jcse-erd.PDF',referencia:'Material académico de diseño E-R basado en la terminología clásica: cardinality constraint especifica cuántas instancias de relación puede tener una entidad; participation constraint indica si puede existir sin participar.'}
  ],null,'Se concreta «participación» como límite máximo de instancias de relación a las que se asocia una entidad; en la terminología de las opciones, corresponde a cardinalidad (o razón de cardinalidad). Se distingue del grado, que cuenta tipos de entidad participantes, y de la restricción de participación total/parcial, que expresa el mínimo obligatorio.','corregida']
];
const edits={
  883:{texto:'En la notación y el metamodelo UML, ¿cuál de las siguientes expresiones no designa una clase o elemento estructural independiente?',opciones:['Clase activa','Clase pasiva','Nodo','Componente'],respuesta_correcta:1},
  885:{texto:'En una restricción del modelo entidad-relación que indica el número máximo de instancias de relación en las que puede participar una entidad, ¿qué concepto se está especificando?',opciones:['Grado de la relación','Tipo de correspondencia','Cardinalidad o razón de cardinalidad','Nombre de la asociación'],respuesta_correcta:2}
};
apply({numero:'113',fecha:'2026-10-22',records,edits});
