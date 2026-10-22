const records = [
  [816,[65],['III-12'],['RIA','Rich Internet Application','complemento de navegador','Silverlight','Flex','arquitectura histórica'],[
    {url:'https://learn.microsoft.com/en-us/archive/msdn-magazine/2010/june/msdn-magazine-silverlight-online-silverlight-in-an-occasionally-connected-world',referencia:'Microsoft Learn (archivo MSDN Magazine), Silverlight in an Occasionally Connected World: documenta Silverlight como tecnología para construir aplicaciones RIA que se ejecutaban en el cliente y podían operar fuera del navegador; se usa como ejemplo histórico, no como arquitectura universal.'},
    {url:'https://learn.microsoft.com/en-us/archive/msdn-magazine/2009/january/architecture-rich-internet-applications-with-net',referencia:'Microsoft Learn (archivo MSDN Magazine), Architecture: Rich Internet Applications with .NET: describe la arquitectura cliente de una RIA basada en Silverlight y el papel del cliente enriquecido.'}
  ],null,'Se contextualiza como arquitectura histórica de RIA basadas en complementos como Silverlight. En ese supuesto, el complemento se ejecuta en el cliente y alberga la presentación y parte de la lógica; no es una regla universal de las RIA actuales, que suelen usar tecnologías web nativas. Se conserva la clave B y se etiqueta histórica.','historica'],
  [817,[66],['III-11'],['.NET','IL','CIL','MSIL','lenguaje intermedio','JIT'],[
    {url:'https://learn.microsoft.com/en-us/dotnet/standard/managed-execution-process',referencia:'Microsoft Learn, Managed Execution Process: los compiladores .NET traducen código fuente a Common Intermediate Language (CIL), también denominado IL, y el runtime lo compila a código nativo, normalmente mediante JIT.'}
  ],null,'Se reformula para evitar que «bytecode» permita más de una interpretación: el nombre preciso del lenguaje intermedio de .NET es CIL (Common Intermediate Language), también denominado IL o históricamente MSIL. No debe confundirse con el bytecode de Java, que tiene otro formato.','corregida'],
  [818,[65,67],['III-10','III-12'],['JSTL','Jakarta Standard Tag Library','JSP','biblioteca de etiquetas','Java web'],[
    {url:'https://jakarta.ee/specifications/tags/',referencia:'Eclipse Foundation, Jakarta Standard Tag Library: define JSTL como conjunto de etiquetas que simplifica el desarrollo con Jakarta Server Pages (JSP).'},
    {url:'https://jakarta.ee/specifications/tags/2.0/jakarta-tags-spec-2.0',referencia:'Jakarta Standard Tag Library Specification 2.0, introducción y objetivos: la biblioteca amplía JSP con etiquetas para tareas comunes como flujo de control, acceso a datos e internacionalización.'}
  ],null,'Se sustituye el enunciado genérico «Elija la respuesta correcta» por una pregunta concreta sobre JSTL. La opción A es la única respuesta y se elimina la ambigüedad de otras afirmaciones sobre Struts, EL, applets y JSP. La especificación actual se denomina Jakarta Standard Tag Library; JSTL es la denominación histórica ampliamente usada.','corregida'],
  [819,[67],['III-9'],['Java','polimorfismo','sobrescritura','Override','anotaciones'],[
    {url:'https://docs.oracle.com/javase/tutorial/java/IandI/override.html',referencia:'Oracle Java Tutorials, Overriding and Hiding Methods: `@Override` indica la intención de sobrescribir un método y el compilador genera un error si no existe una sobrescritura válida.'},
    {url:'https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html',referencia:'Java Language Specification, §15.12: la selección de una implementación sobrescrita de un método de instancia se realiza mediante búsqueda dinámica en tiempo de ejecución.'}
  ],null,'La opción C es correcta: `@Override` permite que el compilador compruebe que el método realmente sobrescribe uno heredado. La sobrecarga se resuelve en compilación; la sobrescritura de métodos de instancia usa búsqueda dinámica en ejecución.','vigente'],
  [820,[69],['II-2'],['GNU','FSF','software libre','cuatro libertades','distribución comercial'],[
    {url:'https://www.gnu.org/philosophy/free-sw.en.html',referencia:'Free Software Foundation, What is Free Software?: recoge las cuatro libertades, aclara que la distribución puede ser gratuita o a cambio de un precio y que la libertad incluye comercializar copias.'},
    {url:'https://www.gnu.org/gnu/the-gnu-project.en.html',referencia:'GNU Project, The GNU Project: enumera las libertades esenciales, incluida la distribución de versiones modificadas y la posibilidad de vender copias.'}
  ],null,'La opción D es la que no constituye una libertad esencial: no se puede restringir la distribución de versiones modificadas a usos no comerciales. Las libertades de distribución admiten cobrar por las copias; «libre» se refiere a las libertades de uso, estudio, modificación y distribución, no a precio cero.','vigente']
];

const edits = {
  816:{texto:'En una arquitectura histórica de aplicación RIA basada en un complemento de navegador (por ejemplo, Silverlight), ¿dónde se ejecutaban la presentación y parte de la lógica de la aplicación?',opciones:[
    'Únicamente en la capa de negocio del servidor.',
    'En el cliente, dentro del complemento del navegador.',
    'Únicamente en la capa de datos.',
    'Solo en el servidor web, sin código de presentación en el cliente.'
  ],respuesta_correcta:1},
  817:{texto:'¿Cómo se denomina el lenguaje intermedio al que compilan normalmente los compiladores de .NET antes de su ejecución por el runtime?',opciones:[
    'El bytecode de Java, idéntico al generado para la máquina virtual Java.',
    'Common Intermediate Language (CIL), también denominado IL.',
    'Código fuente interpretado directamente por el CLR sin una fase de compilación intermedia.',
    'Código nativo específico de la máquina de destino, generado siempre durante la compilación inicial.'
  ],respuesta_correcta:1},
  818:{texto:'¿Qué describe correctamente la JavaServer Pages Standard Tag Library (JSTL), hoy denominada Jakarta Standard Tag Library?',opciones:[
    'Una biblioteca de etiquetas que amplía JSP con acciones comunes como control de flujo, formato e internacionalización.',
    'Un framework MVC escrito para crear aplicaciones web con el lenguaje Smalltalk.',
    'Un protocolo de red que conecta directamente JSP con servlets mediante HTTP.',
    'Un complemento de navegador para ejecutar servlets en el equipo cliente.'
  ],respuesta_correcta:0}
};

require('./aplicar-lote.cjs')({numero:'100',fecha:'2026-10-22',records,edits});
