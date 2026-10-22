const records = [
  [806,[65],['III-12'],['REST','SOAP','arquitecturas web','estilos arquitectónicos','W3C'],[
    {url:'https://ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm',referencia:'Roy T. Fielding, Architectural Styles and the Design of Network-based Software Architectures, capítulo 5: REST se define como un estilo arquitectónico para sistemas hipermedia distribuidos.'},
    {url:'https://www.w3.org/TR/soap12/',referencia:'W3C Recommendation, SOAP 1.2 Part 1: SOAP es un marco de mensajería basado en XML para intercambiar información estructurada en entornos distribuidos; no es un subconjunto de REST.'}
  ],null,'Se mantiene la opción C, con una precisión terminológica: REST es un estilo arquitectónico y SOAP un protocolo/marco de mensajería basado en XML; son enfoques distintos, no subconjuntos uno del otro.','corregida'],
  [807,[58],['II-6'],['arquitectura cliente-servidor','tres niveles','capa de presentación','cliente'],[
    {url:'https://learn.microsoft.com/en-gb/windows/win32/cossdk/using-a-three-tier-architecture-model',referencia:'Microsoft Learn, Using a Three-Tier Architecture Model: identifica la capa de presentación o servicios de usuario, el nivel intermedio de lógica de negocio y la capa de datos; la presentación ofrece la interfaz al usuario.'}
  ],null,'Se conserva A y se explicita que se pregunta por la ubicación lógica de la presentación en el modelo clásico de tres niveles: corresponde al cliente/capa de servicios de usuario. Las capas lógicas no tienen por qué coincidir con máquinas físicas distintas.','corregida'],
  [808,[65],['III-12'],['JSON','ECMA-404','ECMA-262','formato de intercambio de datos','XML'],[
    {url:'https://ecma-international.org/publications-and-standards/standards/ecma-404/',referencia:'Ecma International, ECMA-404: JSON es una sintaxis ligera, textual e independiente del lenguaje para intercambio de datos; la especificación define la sintaxis.'},
    {url:'https://tc39.es/ecma262/',referencia:'ECMA-262, sección 25.5: define el objeto JSON y sus métodos parse y stringify, que operan sobre el formato de intercambio definido por ECMA-404.'}
  ],null,'Se cambia la opción incorrecta a D. JSON tiene una especificación de sintaxis propia (ECMA-404), mientras ECMA-262 define el objeto JSON de ECMAScript y sus métodos parse/stringify. No es un vocabulario XML ni exige analizadores XML; es un formato ligero e independiente del lenguaje.','corregida'],
  [809,[58],['II-6'],['RPC','Remote Procedure Call','sistema distribuido','cliente-servidor','TCP','UDP'],[
    {url:'https://www.rfc-editor.org/rfc/rfc5531',referencia:'RFC 5531, ONC RPC Protocol Specification, apartados 4 y 5: RPC sigue el modelo de llamada remota cliente-servidor y es independiente del transporte; ONC RPC utiliza TCP y UDP, por lo que RPC no implica necesariamente un transporte no orientado a conexión.'}
  ],null,'Se sustituye «todas las anteriores» por una afirmación precisa. RPC se usa en sistemas distribuidos y en el modelo cliente-servidor, pero no está asociado exclusivamente a sesiones sin conexión: ONC RPC puede usar UDP o TCP.','corregida'],
  [810,[60],['IV-1'],['Linux','arranque','CD de instalación','dd','rawrite','mkbootdisk'],[],null,'Pendiente de ambigüedad. El enunciado no precisa distribución, época ni si pregunta por crear un CD arrancable o escribir una imagen de arranque en otro medio. `dd` y `rawrite` tienen usos y plataformas distintos, y la clave original no permite inferir un procedimiento único. Se conserva pregunta y respuesta sin certificarlas hasta cotejar el manual de academia o el supuesto histórico concreto.','pendiente_ambiguedad']
];
const edits = {
  806:{texto:'¿Qué relación existe entre REST y SOAP en los servicios web?',opciones:[
    'SOAP es un subconjunto de REST, con restricciones adicionales.',
    'REST es un subconjunto de SOAP, con restricciones adicionales.',
    'Son enfoques distintos: REST es un estilo arquitectónico y SOAP un marco de mensajería que usa XML.',
    'Son el mismo enfoque, salvo que SOAP no especifica que el formato de intercambio sea XML.'
  ],respuesta_correcta:2},
  807:{texto:'En el modelo lógico clásico de arquitectura cliente-servidor de tres niveles —presentación, lógica de negocio y datos—, ¿dónde se sitúa la capa de presentación?',opciones:[
    'En el cliente o nivel de servicios de usuario.',
    'En el nivel de datos, junto al sistema gestor de bases de datos.',
    'En la red de comunicaciones, que constituye por sí misma la capa de presentación.',
    'Siempre se reparte entre cliente y servidor, con independencia del diseño adoptado.'
  ],respuesta_correcta:0},
  808:{texto:'¿Cuál de las siguientes afirmaciones sobre JSON es incorrecta?',opciones:[
    'La sintaxis de intercambio de JSON está definida por ECMA-404.',
    'ECMA-262 define el objeto JSON de ECMAScript y métodos como parse y stringify.',
    'JSON es un formato ligero, textual e independiente del lenguaje para intercambiar datos.',
    'JSON es un vocabulario XML y requiere analizadores sintácticos XML para procesarlo.'
  ],respuesta_correcta:3},
  809:{texto:'¿Cuál de estas afirmaciones describe correctamente las llamadas a procedimientos remotos (RPC)?',opciones:[
    'Solo pueden ejecutarse sobre protocolos no orientados a conexión, como UDP.',
    'Permiten que un cliente solicite la ejecución de una operación remota y se emplean en sistemas distribuidos cliente-servidor.',
    'Son llamadas locales que no implican comunicación entre procesos o equipos.',
    'Son sinónimo de REST y usan necesariamente HTTP como único transporte.'
  ],respuesta_correcta:1}
};
require('./aplicar-lote.cjs')({numero:'098',fecha:'2026-10-22',records,edits});
