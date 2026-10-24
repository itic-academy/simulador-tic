const apply = require('./aplicar-lote.cjs');
const academy = {
  hardware: {
    url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 26, Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1 (31-08-2026), §§ 7–8: multimedia/compresión, SAN y Fibre Channel.'
  },
  identity: {
    url: 'https://drive.google.com/file/d/1Rix8RBBUSoXJBOAt8iWyU9j5tPiqlXzk/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 36, temas 79–81, Seguridad, criptografía, identificación y firma, versión 2026.1; contexto curricular de certificados cualificados. Las clases emitidas por FNMT se verifican en su documentación vigente.'
  },
  dotnet: {
    url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 30, Tecnologías de sistemas de la información, versión 2026.1, §§ 7.2–7.3: CIL, compilación JIT/AOT y ejecución .NET.'
  }
};
const source = {
  jpeg: {
    url: 'https://www.itu.int/rec/T-REC-T.81/en',
    referencia: 'ITU-T Recommendation T.81 | ISO/IEC 10918-1, Digital compression and coding of continuous-tone still images: especifica procesos JPEG DCT con cuantización (con pérdidas) y también un modo predictivo sin pérdidas; el DCT por sí solo no implica necesariamente pérdida.'
  },
  jpegContext: {
    url: 'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-T.417-199710-I%21Amd1%21PDF-E&lang=e&type=items',
    referencia: 'ITU-T T.417, Amendment 1, § 11.8: resume T.81; distingue procesos JPEG con pérdida basados en DCT y procesos sin pérdida predictivos; en DCT se cuantizan coeficientes.'
  },
  fnmt: {
    url: 'https://www.sede.fnmt.gob.es/certificados/certificado-de-representante',
    referencia: 'FNMT-RCM, Certificado Electrónico de Empresa / Certificado de Representante, consulta 24-10-2026: publica certificados de representante de persona jurídica, de entidad sin personalidad jurídica y de administrador único o solidario.'
  },
  fnmtDocumentation: {
    url: 'https://www.sede.fnmt.gob.es/certificados/certificado-de-representante/documentacion',
    referencia: 'FNMT-RCM, Documentación del certificado de representante, consulta 24-10-2026: detalla por separado las tres clases y sus condiciones actuales.'
  },
  fibreChannel: {
    url: 'https://www.ibm.com/docs/en/ds8880/8.5.1?topic=attachment-fibre-channel-architecture',
    referencia: 'IBM Documentation, Fibre Channel architecture: enumera las tres topologías básicas: arbitrated loop, point-to-point y switched fabric; define FC-AL y fabric.'
  },
  fibreChannelRedbook: {
    url: 'https://www.redbooks.ibm.com/redbooks/pdfs/sg246143.pdf',
    referencia: 'IBM Redbooks, SAN Survival Guide, § 2.4, p. 30: define punto a punto, arbitrated loop y switched fabric como las tres topologías Fibre Channel.'
  },
  superscalar: {
    url: 'https://www.cs.stir.ac.uk/~lss/31r6/8-superscalar.pdf',
    referencia: 'University of Stirling, Computer Design, «Superscalar Machines», diapositivas 74–75: procesadores de emisión múltiple que pueden emitir más de una instrucción en cada ciclo; la cantidad depende del flujo de instrucciones.'
  },
  nativeAot: {
    url: 'https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/',
    referencia: 'Microsoft Learn, Native AOT deployment: Native AOT compila IL a código nativo durante la publicación, antes de la ejecución, y se dirige a un entorno/plataforma concreta.'
  },
  jit: {
    url: 'https://learn.microsoft.com/en-us/dotnet/standard/managed-execution-process',
    referencia: 'Microsoft Learn, Managed execution process: el JIT traduce CIL a código nativo a demanda durante la ejecución; su optimización y resultado dependen del runtime, arquitectura y carga.'
  },
  compilePerf: {
    url: 'https://learn.microsoft.com/en-us/dotnet/maui/deployment/runtimes-compilation',
    referencia: 'Microsoft Learn, Runtimes and compilation: la tabla comparativa muestra ventajas distintas entre JIT, AOT y ReadyToRun; JIT optimizado puede alcanzar mayor rendimiento sostenido y no existe una garantía universal de que AOT sea más rápido.'
  }
};

const records = [
  [1226, [56], ['IV-5'], ['JPEG', 'DCT', 'transformada discreta del coseno', 'cuantización', 'compresión con pérdidas'], [source.jpeg, source.jpegContext, academy.hardware], null,
    'El original generalizaba incorrectamente: la codificación por transformadas no es por naturaleza con pérdidas y JPEG incluye procesos sin pérdida. Se concreta en JPEG secuencial basado en DCT con cuantización, proceso con pérdida; se conserva la distinción entre transformación, cuantización y codificación entrópica. Cotejo temático con ITIC Academy, bloque 26, §§ 7–8 (tratamiento multimedia/compresión y almacenamiento); el PDF no atribuye pérdida a toda codificación transformada.', 'corregida'],
  [1227, [80, 81], ['I-6'], ['FNMT-RCM', 'certificado de representante', 'persona jurídica', 'entidad sin personalidad jurídica', 'administrador único', 'administrador solidario', 'eIDAS'], [source.fnmt, source.fnmtDocumentation, academy.identity], null,
    'La opción marcada como correcta incluye las tres clases que oferta actualmente FNMT-RCM, pero el adverbio «actualmente» hace la clave perecedera. Se fija el alcance temporal en la redacción y se conserva la respuesta correcta. La documentación de academia cubre el epígrafe de certificados e identificación; la lista concreta se coteja en la sede vigente de FNMT.', 'corregida'],
  [1228, [56], ['IV-5'], ['SAN', 'Fibre Channel', 'FC-AL', 'switched fabric', 'punto a punto', 'topologías de almacenamiento'], [source.fibreChannel, source.fibreChannelRedbook, academy.hardware], null,
    'La clave original es correcta. Se reemplazan abreviaturas distractoras poco inteligibles por los nombres normalizados y se asocia FC-AL con arbitrated loop y FC-SW con switched fabric. Cotejo directo con ITIC Academy, bloque 26, § 8.2, Fibre Channel/SAN.', 'corregida'],
  [1229, [52], ['II-1'], ['procesador superescalar', 'emisión múltiple', 'instrucciones por ciclo', 'paralelismo a nivel de instrucción', 'CPU'], [source.superscalar, academy.hardware], null,
    'Se acota la definición al rasgo arquitectónico: capacidad de emitir o iniciar más de una instrucción por ciclo; el número efectivo depende de dependencias y del flujo disponible. Varias unidades de ejecución pueden implementarlo, pero no definen por sí solas todo procesador superescalar. Cotejo temático con ITIC Academy, bloque 26, §§ 2.1–2.2 (CPU, ISA y multiprocesamiento); el PDF no desarrolla de forma explícita el término superescalar.', 'corregida'],
  [1230, [66], ['III-11'], ['compilación AOT', 'compilación JIT', 'código nativo', 'dependencia de plataforma', '.NET', 'rendimiento'], [source.nativeAot, source.jit, source.compilePerf, academy.dotnet], null,
    'Se corrige la pregunta negativa que no tenía una respuesta falsa defendible: AOT suele dirigirse a una plataforma concreta, pero no garantiza mayor rendimiento para toda aplicación. JIT traduce código intermedio a demanda durante la ejecución y puede optimizar con información de la carga. Cotejo directo con ITIC Academy, bloque 30, §§ 7.2–7.3, y Microsoft Learn.', 'corregida']
];

const edits = {
  1226: { texto: 'En JPEG, ¿qué caracteriza al proceso secuencial basado en la transformada discreta del coseno (DCT) cuando se cuantizan sus coeficientes?', opciones: ['Es un proceso con pérdidas; la cuantización descarta precisión, aunque JPEG también define procesos sin pérdidas basados en predicción.', 'Es necesariamente sin pérdidas porque la DCT es reversible.', 'La DCT no se utiliza en JPEG.', 'La cuantización es una forma de codificación Huffman.'], respuesta_correcta: 0 },
  1227: { texto: 'Según la oferta publicada por FNMT-RCM consultada el 24 de octubre de 2026, ¿qué clases de certificado de representante ofrece?', opciones: ['Solo certificado de representante de persona jurídica.', 'Certificados de representante de persona jurídica y de entidad sin personalidad jurídica.', 'Certificados de representante de persona jurídica, de entidad sin personalidad jurídica y de administrador único o solidario.', 'Solo certificado de representante de entidad sin personalidad jurídica.'], respuesta_correcta: 2 },
  1228: { texto: '¿Cuáles son las tres topologías básicas de interconexión de Fibre Channel utilizadas en redes SAN?', opciones: ['Arbitrated loop, punto a punto y switched fabric.', 'Arbitrated loop, half-duplex y punto a punto.', 'Broadcast loop, switched fabric y FCoE.', 'Arbitrated loop, Ethernet conmutada y Fibre Channel sobre IP.'], respuesta_correcta: 0 },
  1229: { texto: '¿Qué rasgo caracteriza a un procesador superescalar?', opciones: ['Puede emitir o iniciar más de una instrucción en un ciclo, si las instrucciones disponibles y los recursos lo permiten.', 'Está definido por garantizar coherencia de caché entre varios procesadores.', 'Solo contiene varias unidades de coma flotante y no puede emitir instrucciones enteras en paralelo.', 'Es un procesador que ejecuta necesariamente una instrucción por ciclo.'], respuesta_correcta: 0 },
  1230: { texto: '¿Cuál de las siguientes afirmaciones sobre compilación AOT, JIT y código nativo es falsa?', opciones: ['AOT traduce el código antes de ejecutar la aplicación y suele generar un artefacto dirigido a un entorno de destino.', 'JIT traduce código intermedio a código nativo a demanda durante la ejecución.', 'Un binario nativo suele estar ligado a una arquitectura, sistema operativo o ABI de destino.', 'La compilación AOT garantiza siempre más rendimiento de ejecución que JIT, cualquiera que sea la aplicación y la carga.'], respuesta_correcta: 3 }
};

apply({ numero: '182', fecha: '2026-10-24', records, edits });
