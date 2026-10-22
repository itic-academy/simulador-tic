const records = [
  [831,[80],[],['DN','LDAP','Distinguished Name','X.500'],[
    {url:'https://www.rfc-editor.org/info/rfc4514',referencia:'IETF RFC 4514, Lightweight Directory Access Protocol (LDAP): String Representation of Distinguished Names, resumen y §1: en X.500 y en LDAP se usan distinguished names (DN) para referirse inequívocamente a entradas del directorio.'},
    {url:'https://www.rfc-editor.org/info/rfc4512',referencia:'IETF RFC 4512, Lightweight Directory Access Protocol (LDAP): Directory Information Models, §2.3: define el nombre completo de una entrada como su Distinguished Name (DN).'}
  ],null,'DN significa Distinguished Name (nombre distinguido). En LDAP identifica inequívocamente una entrada del directorio; no debe confundirse con Domain Name.','vigente'],
  [832,[81],['I-6'],['DNIe','certificados electrónicos','renovación','duplicado','revocación'],[
    {url:'https://www.dnielectronico.es/PDFs/Politicas_de_certificacion_v3.2.pdf',referencia:'Dirección General de la Policía, Declaración de Prácticas de Certificación v3.2 (05-05-2025), §§3.2.3, 4.7.2–4.7.3 y 4.9: perder la validez del soporte invalida los certificados; renovar o duplicar el DNI revoca los anteriores y emite otros nuevos; se pueden expedir nuevos certificados manteniendo la tarjeta si esta sigue vigente.'},
    {url:'https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1028',referencia:'Portal oficial DNIe, Renovación de certificados: describe la renovación de certificados sin renovar el soporte físico como voluntaria.'},
    {url:'https://www.boe.es/buscar/act.php?id=BOE-A-2025-6601',referencia:'BOE-A-2025-6601, Real Decreto 255/2025, de 1 de abril, por el que se regula el Documento Nacional de Identidad; marco reglamentario vigente del soporte y sus certificados.'}
  ],null,'Se precisa que «renovación» y «duplicado» se refieren al soporte físico del DNI: conforme a la DPC v3.2 de la Policía, ambos revocan los certificados vigentes y generan nuevos. Si solo caducan los certificados, pueden renovarse conservando una tarjeta DNI todavía válida. Por tanto, la caducidad de los certificados no obliga por sí sola a renovar el DNI; es falsa la opción D. Se evita usar como vigente el antiguo plazo máximo de 60 meses, sustituido por la normativa actual.','corregida'],
  [833,[70],['III-5'],['síntesis de voz','síntesis por formantes','síntesis por reglas','formant synthesis'],[
    {url:'https://isca-speech.org/Classic-Speech-Synthesis',referencia:'International Speech Communication Association (ISCA), Classic Speech Synthesis: describe la técnica clásica basada en filtros de formantes y señala expresamente que también se denominaba Speech Synthesis by Rule o Formant Synthesis.'}
  ],null,'En la taxonomía clásica de síntesis de voz documentada por ISCA, la síntesis por formantes también se denomina síntesis por reglas (speech synthesis by rule). Se conserva el término histórico del banco y se acota la afirmación a esa técnica clásica.','vigente'],
  [834,[70],['III-5'],['procesamiento del lenguaje natural','morfología','sintaxis','nivel léxico-sintáctico'],[
    {url:'https://universaldependencies.org/u/overview/morphology.html',referencia:'Universal Dependencies, Morphology: describe la información morfológica y las categorías léxicas asociadas a las palabras.'},
    {url:'https://nlp.stanford.edu/software/lex-parser.html',referencia:'Stanford NLP Group, Lexicalized Parser: define el análisis sintáctico como el cálculo de la estructura gramatical de las oraciones y las relaciones entre sus palabras.'}
  ],null,'Se aclara el alcance de la etiqueta compuesta «léxico-sintáctico»: la morfología identifica propiedades y estructura de las unidades léxicas; el análisis sintáctico estudia cómo se combinan conforme a la gramática. El enunciado original mezclaba ambos pasos sin nombrar el marco, por lo que se explicita que pregunta por el nivel conjunto del esquema didáctico.','corregida'],
  [835,[67],['III-9'],['programación orientada a objetos','evento','notificación','observador'],[
    {url:'https://learn.microsoft.com/dotnet/standard/events/',referencia:'Microsoft Learn, Handle and raise events: define un evento como mensaje enviado por un objeto para señalar que ha ocurrido una acción y describe el modelo de suscriptor/proveedor que recibe notificaciones.'},
    {url:'https://learn.microsoft.com/en-us/dotnet/csharp/events-overview',referencia:'Microsoft Learn, Introduction to events: presenta los eventos como mecanismo de notificación en el modelo de publicador y suscriptor.'}
  ],null,'Un evento es el mensaje que un objeto publica para notificar que ha ocurrido una acción; los objetos suscritos pueden recibirlo y responder mediante manejadores. «Comando» u «orden» describen instrucciones, no este mecanismo de notificación.','vigente']
];

const edits = {
  832:{texto:'Conforme a la política vigente de certificados del DNI electrónico, señale la afirmación falsa:',opciones:[
    'La pérdida de validez de la tarjeta del DNI lleva aparejada la pérdida de validez de los certificados cualificados incorporados.',
    'La renovación del soporte físico o la expedición de un duplicado revoca los certificados vigentes y da lugar a la emisión de nuevos certificados.',
    'Mientras la tarjeta del DNI siga vigente, pueden solicitarse nuevos certificados sin sustituir el soporte físico.',
    'La caducidad de los certificados electrónicos obliga por sí sola a renovar la tarjeta del DNI.'
  ],respuesta_correcta:3},
  834:{texto:'En el esquema didáctico de procesamiento del lenguaje natural que agrupa el reconocimiento de unidades léxicas y el análisis de cómo se combinan conforme a la gramática, ¿qué nivel realiza esta función conjunta?',opciones:[
    'Nivel fonético-fonológico.',
    'Nivel prosódico.',
    'Nivel léxico-sintáctico.',
    'Nivel acústico.'
  ],respuesta_correcta:2}
};

require('./aplicar-lote.cjs')({numero:'103',fecha:'2026-10-22',records,edits});
