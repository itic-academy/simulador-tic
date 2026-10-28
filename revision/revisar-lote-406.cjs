const apply = require('./aplicar-lote.cjs');

const sources={
 java:[
  {url:'https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html',referencia:'Java Language Specification, Java SE 25, Chapter 8: una declaración de clase contiene miembros como campos y métodos, inicializadores y constructores; una clase puede ser abstracta y no instanciable, así que se formula como descripción de un tipo/clase, no como que todos los tipos tengan necesariamente objetos instanciados.'},
  {url:'https://docs.oracle.com/javase/tutorial/java/concepts/class.html',referencia:'Oracle Java Tutorials, What Is a Class?: presenta la clase como blueprint a partir del que se crean instancias; sirve como explicación pedagógica general.'}
 ],
 cron:[{url:'https://man7.org/linux/man-pages/man5/crontab.5.html',referencia:'Linux man-pages, crontab(5): en tablas personales se usan cinco campos de tiempo seguidos por el comando; en /etc/crontab y /etc/cron.d se añade el campo de usuario. El ejemplo del manual diferencia ambos formatos.'}],
 lpac:[{url:'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565',referencia:'Ley 39/2015 consolidada, art. 21.2–3: el plazo fijado por la norma reguladora no puede superar seis meses, salvo ley o Derecho UE; si la norma no fija plazo máximo, es tres meses.'}],
 aggregation:[{url:'https://www2.cs.sfu.ca/CourseCentral/354/zaiane/material/notes/Chapter2/node15.html',referencia:'University of British Columbia/SFU course notes, Entity-Relationship Model, sección Aggregation: abstracción por la que las relaciones se tratan como entidades de nivel superior y pueden participar en otras relaciones; permite modelar una relación entre una entidad y una asociación existente.'}],
 udp:[
  {url:'https://www.rfc-editor.org/rfc/rfc768.html',referencia:'IETF RFC 768, User Datagram Protocol: transporte orientado a datagramas/transacciones; no garantiza entrega ni protección frente a duplicados y no establece una conexión.'},
  {url:'https://www.rfc-editor.org/rfc/rfc9293.html',referencia:'IETF RFC 9293, Transmission Control Protocol, §2.2: TCP ofrece servicio fiable y ordenado de flujo de bytes y es orientado a conexión; distingue el distractor TCP de UDP.'},
  {url:'https://www.rfc-editor.org/rfc/rfc791.html',referencia:'IETF RFC 791, Internet Protocol: IP es protocolo de capa de Internet/red, no un protocolo de transporte.'}
 ]
};

const records=[
 [2346,[67],['III-9'],['Java','clase','objetos','campos','métodos','constructores'],sources.java,'','La opción de la clase como tipo que modela objetos con estructura y comportamiento comunes es la única que describe correctamente el concepto. Se rehace el enunciado y las alternativas para distinguir clases de paquetes, compilación y herencia entre interfaces. La JLS precisa que la declaración de una clase define miembros (campos, métodos, constructores, etc.); no todas las clases son instanciables, por lo que se evita esa generalización.','corregida'],
 [2347,[60],['II-2'],['cron','crontab','/etc/crontab','día 1','00:00','12:00','usuario'],sources.cron,'','La expresión de minutos/horas/día/mes/día-semana `0 0,12 1 * *` se mantiene. La pregunta nombraba `/etc/crontab` pero omitía el campo obligatorio de usuario del formato de tabla del sistema; se añade `root` antes del comando. Se diferencia del crontab personal, que tiene cinco campos de calendario y no incluye usuario.','corregida'],
 [2348,[8],['I-8'],['Ley 39/2015','artículo 21','plazo máximo','seis meses','tres meses'],sources.lpac,'','Se confirma la opción de seis meses para el plazo máximo que fija la norma reguladora, salvo excepción establecida por ley o por Derecho de la Unión Europea (art. 21.2). Se añade el matiz del art. 21.3: si la norma no fija plazo máximo, se aplica el plazo supletorio de tres meses.','corregida'],
 [2349,[89],['III-4'],['modelo entidad-relación','EER','agregación','relación como entidad de nivel superior'],sources.aggregation,'','La agregación abstrae una asociación y los conjuntos de entidades que participan en ella como una entidad/conjunto de nivel superior, que puede relacionarse con otra entidad; así se modelan relaciones entre relaciones sin confundirla con generalización, especialización ni entidad débil. Se precisa la opción correcta y los distractores.','corregida'],
 [2350,[111,115],['II-8'],['UDP','transporte','sin conexión','no fiable','datagramas','TCP','IP'],sources.udp,'','UDP es el protocolo de transporte no orientado a conexión de las opciones y no ofrece entrega fiable: no garantiza entrega ni evita duplicados. IP pertenece a la capa de Internet/red y TCP es orientado a conexión, fiable y ordenado. Se precisa «entre las opciones» para evitar una afirmación universal sobre todos los protocolos de transporte.','corregida']
];

const edits={
 2346:{texto:'En Java, ¿qué afirmación describe correctamente una clase?',opciones:['Es un fichero que solo puede contener una definición de clase o interfaz.','Es una declaración de tipo que define miembros como campos, métodos y constructores y sirve de modelo para sus objetos.','Es código predefinido que siempre debe compilarse aparte antes de usarlo.','Es una interfaz que hereda atributos de otra interfaz; las clases no pueden implementar interfaces.'],respuesta_correcta:1},
 2347:{texto:'En Linux, ¿qué línea de `/etc/crontab` ejecuta `/usr/bin/script` el día 1 de cada mes a las 00:00 y a las 12:00? Recuerde que el formato del sistema incluye el usuario.',opciones:['0 0,12 1 * * root /usr/bin/script','* */12 * * 1 root /usr/bin/script','0 0-12 1 * * root /usr/bin/script','0 0/12 * 1 * root /usr/bin/script'],respuesta_correcta:0},
 2348:{texto:'Conforme al artículo 21 de la Ley 39/2015, si la norma reguladora del procedimiento fija el plazo máximo para notificar la resolución expresa, este plazo',respuesta_correcta:1},
 2349:{texto:'En el modelo entidad/relación extendido, ¿qué permite representar la agregación?',opciones:['La clasificación de varios tipos de entidad en un supertipo que recoge los atributos comunes.','Una relación entre un conjunto de entidades y una asociación tratada como entidad de nivel superior.','La división de un tipo de entidad en subtipos especializados.','La identificación de una entidad débil mediante la clave de su entidad propietaria y una clave parcial.'],respuesta_correcta:1},
 2350:{texto:'Entre los siguientes protocolos, ¿cuál pertenece a la capa de transporte y no ofrece un servicio orientado a conexión ni fiable?',opciones:['UDP','IP','TCP'],respuesta_correcta:0}
};
apply({numero:'406',fecha:'2026-10-28',records,edits});
