const apply=require('./aplicar-lote.cjs');
const academy='https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const sources={
4241:[
 {url:academy,referencia:'ITIC Academy, bloque 38, Análisis/Diseño/Construcción de SI, versión 2026; aborda análisis de sistemas, requisitos y técnicas. Se coteja cobertura curricular, no una lista normativa de rasgos de personalidad.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, anexo I, tema 88: análisis funcional de sistemas, casos de uso, historias de usuario y metodologías de desarrollo.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema III-2: planificación y gestión del proceso de desarrollo y metodologías.'}
],
4242:[
 {url:'https://docs.oracle.com/javase/tutorial/java/concepts/index.html',referencia:'Oracle Java Tutorials, Object-Oriented Programming Concepts: presenta objetos, clases, encapsulación e herencia como conceptos OO.'},
 {url:'https://docs.oracle.com/javase/tutorial/java/IandI/polymorphism.html',referencia:'Oracle Java Tutorials, Polymorphism: describe cómo una misma operación invocada sobre referencias puede ejecutar el comportamiento del objeto concreto.'},
 {url:academy,referencia:'ITIC Academy, bloque 38, §6 Análisis y diseño orientado a objetos: caracteriza abstracción, encapsulación, herencia y polimorfismo; la lista no presenta redundancia controlada como concepto OO.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, anexo I, tema 88: análisis funcional, casos de uso e historias de usuario y métodos de desarrollo; correspondencia curricular general.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema II-3: características de lenguajes y paradigmas de programación.'}
],
4243:[
 {url:'https://docs.oracle.com/javase/tutorial/java/IandI/polymorphism.html',referencia:'Oracle Java Tutorials, Polymorphism: una referencia de tipo superclase puede referirse a instancias de subclases y la llamada a método se resuelve según el objeto concreto.'},
 {url:'https://docs.oracle.com/javase/tutorial/java/concepts/index.html',referencia:'Oracle Java Tutorials, Object-Oriented Programming Concepts: los objetos encapsulan estado y comportamiento y las clases modelan tipos de objetos.'},
 {url:academy,referencia:'ITIC Academy, bloque 38, §6 Análisis y diseño orientado a objetos: el polimorfismo permite que una operación tenga comportamiento distinto según el tipo concreto del objeto.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, anexo I, tema 88: análisis funcional y métodos de desarrollo de sistemas.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema II-3: paradigmas de programación; el concepto se clasifica curricularmente en OO.'}
],
4244:[
 {url:'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A7f366cd1-6759-42d9-9e0b-31edce0256d9/METRICA_V3_Diseno_del_Sistema_de_Informacion.pdf',referencia:'Administración electrónica, MÉTRICA v3 DSI 1.7, requisitos de operación/seguridad: incluye procedimientos sobre copias de seguridad y recuperación de datos, recuperación ante catástrofes y operación.'},
 {url:'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A19993efa-8c88-4205-b1a5-fb7fc0bd94de/METRICA_V3_Construccion_del_Sistema_de_Informacion.pdf',referencia:'Administración electrónica, MÉTRICA v3 CSI: separa generación de código de componentes y procedimientos de operación/seguridad y manuales de explotación.'},
 {url:'https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final',referencia:'NIST SP 800-34 Rev. 1, contingencia TI: planes de contingencia contienen estrategias/procedimientos de recuperación y restauración de sistemas.'},
 {url:academy,referencia:'ITIC Academy, bloque 38, §11 sobre documentación técnica y de explotación: cotejo curricular de documentación, artefactos técnicos y operación.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, anexo I, temas 86 y 95: ciclo de vida y metodología MÉTRICA.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema III-6: construcción, estándares de documentación y manuales técnicos.'}
],
4245:[
 {url:'https://docs.oracle.com/javase/tutorial/java/concepts/class.html',referencia:'Oracle Java Tutorials, What Is a Class?: una clase es un plano/prototipo a partir del cual se crean objetos y define estado/comportamiento comunes.'},
 {url:'https://docs.oracle.com/javase/tutorial/java/concepts/object.html',referencia:'Oracle Java Tutorials, What Is an Object?: un objeto es un conjunto de estado y comportamiento relacionados; distingue objeto de clase.'},
 {url:academy,referencia:'ITIC Academy, bloque 38, §6 Análisis y diseño orientado a objetos: una clase describe objetos con estructura y operaciones comunes; objeto es instancia concreta con identidad.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, anexo I, tema 88: análisis funcional y métodos de desarrollo de sistemas; correspondencia curricular.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema II-3: lenguajes y paradigmas de programación.'}
]};
const records=[
 [4241,['88'],['III-2'],['analista de sistemas','análisis funcional','perfil profesional'],sources[4241],null,'Pendiente de ambigüedad: el enunciado pregunta por «rasgos de carácter» y ofrece capacidades plausibles, pero no identifica un estándar, perfil profesional ni fuente que determine una lista cerrada. Las opciones no son mutuamente excluyentes y «todas las anteriores» no puede verificarse objetivamente con el programa oficial. Mantener sin verificar; para resolver, reformular como competencia/tarea concreta de análisis de requisitos o citar un perfil normativo explícito.','pendiente_ambiguedad'],
 [4242,['88'],['II-3'],['orientación a objetos','abstracción','encapsulación','herencia','polimorfismo'],sources[4242],null,'Se especifica la lista de conceptos fundamentales de orientación a objetos para evitar depender de una taxonomía pedagógica imprecisa: abstracción, encapsulación, herencia y polimorfismo. La redundancia controlada no es uno de esos conceptos. Oracle documenta estos conceptos en sus materiales de programación OO.','corregida'],
 [4243,['88'],['II-3'],['orientación a objetos','polimorfismo','despacho dinámico'],sources[4243],null,'Polimorfismo: una misma operación o mensaje puede producir comportamiento dependiente del tipo concreto del objeto receptor; en Java, la selección de método sobrescrito ocurre dinámicamente. No es herencia por sí sola ni sobrecarga de métodos por firma.','vigente'],
 [4244,['86','95'],['III-6'],['MÉTRICA v3','documentación técnica','documentación de explotación','copias de seguridad','recuperación'],sources[4244],null,'Se cambia el enunciado amplio y ambiguo «documentación técnica» por una pregunta de alcance comprobable sobre MÉTRICA v3 DSI 1.7. Esta actividad incluye definir procedimientos de copias de seguridad, recuperación de datos y recuperación ante catástrofes. Se distingue ese procedimiento operacional de la descripción de módulos y del código.','corregida'],
 [4245,['88'],['II-3'],['orientación a objetos','clase','objeto','instancia'],sources[4245],null,'Una clase es el plano/prototipo que define estructura/estado y comportamiento común para crear objetos; cada objeto es una instancia concreta con identidad y valores propios. La clase no es una instancia y no consta únicamente de métodos.','corregida']
];
const edits={
4242:{texto:'En el modelo clásico de programación orientada a objetos, ¿cuál de estas opciones NO es uno de los conceptos fundamentales?',opciones:['Abstracción.','Encapsulación.','Redundancia controlada.','Herencia.'],respuesta_correcta:2,comentarios:'Entre los conceptos fundamentales habituales de la orientación a objetos están la abstracción, la encapsulación, la herencia y el polimorfismo. «Redundancia controlada» no es un concepto de ese conjunto.'},
4244:{texto:'Según MÉTRICA v3, ¿qué procedimiento se define dentro de los requisitos de operación y seguridad del sistema (DSI 1.7)?',opciones:['El procedimiento para copias de seguridad y recuperación de datos.','La descripción narrativa de las funciones de cada módulo del programa.','El listado del código objeto generado por el compilador.','La relación entre condiciones de error y acciones internas de un módulo.'],respuesta_correcta:0,comentarios:'MÉTRICA v3, tarea DSI 1.7, incluye definir procedimientos de copias de seguridad y recuperación de datos, además de recuperación ante catástrofes. Se trata de requisitos de operación y seguridad del sistema, no de descripción interna del módulo o de listados de código.'},
4245:{texto:'En diseño orientado a objetos, ¿qué es una clase?',opciones:['Una estructura que consta únicamente de métodos y no puede definir estado.','Un plano o prototipo que define estado y comportamiento comunes a partir del cual se crean objetos.','Una instancia concreta de un objeto en ejecución.','Una colección de objetos que necesariamente tienen comportamientos y datos diferentes.'],respuesta_correcta:1,comentarios:'Oracle define una clase como un plano/prototipo a partir del cual se crean objetos; especifica estado (campos) y comportamiento (métodos) comunes. Un objeto es una instancia concreta de la clase.'}
};
apply({numero:'784',fecha:'2026-11-09',records,edits});
