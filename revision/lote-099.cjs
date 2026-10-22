const records = [
  [811,[60],['II-2'],['UUCP','UNIX-to-UNIX Copy','uucp','uux','transferencia de ficheros','ejecución remota'],[
    {url:'https://www.ibm.com/docs/en/zos/2.5.0?topic=users-using-uucp-network',referencia:'IBM Documentation, Using the UUCP network: la suite permite transferir ficheros y solicitar ejecución de comandos en sistemas remotos; uucp programa intercambios de ficheros y uux programa comandos remotos.'}
  ],null,'Se conserva la opción C. UUCP es la suite de comunicación entre sistemas Unix; el comando `uucp` programa transferencias de ficheros y `uux` solicitudes de ejecución remota. La opción describe el conjunto, no solo el ejecutable `uucp`.','vigente'],
  [812,[61],['II-2'],['WinRM','WS-Management','HTTP','HTTPS','PowerShell Remoting','5985','5986'],[
    {url:'https://learn.microsoft.com/en-au/windows/win32/winrm/installation-and-configuration-for-windows-remote-management',referencia:'Microsoft Learn, Installation and configuration for WinRM: WinRM implementa WS-Management; sus listeners admiten HTTP o HTTPS y el transporte predeterminado creado por `winrm quickconfig` es HTTP.'},
    {url:'https://learn.microsoft.com/en-us/powershell/scripting/learn/remoting/winrmsecurity?view=powershell-7.3',referencia:'Microsoft Learn, Security considerations for PowerShell Remoting using WinRM: describe PowerShell Remoting a través de WinRM y sus puertos HTTP 5985 y HTTPS 5986.'}
  ],null,'Se mantiene C como incorrecta, pero se reformula para preguntar por el transporte predeterminado. WinRM puede configurarse con HTTP o HTTPS; el listener creado por defecto usa HTTP, no HTTPS. Se corrige también la errata «WNRM» del original.','corregida'],
  [813,[63],['II-5'],['ACID','atomicidad','consistencia','aislamiento','durabilidad','transacciones'],[
    {url:'https://www.postgresql.org/docs/current/glossary.html',referencia:'PostgreSQL Documentation, Glossary, entrada ACID: Atomicity, Consistency, Isolation, and Durability.'}
  ],null,'La opción D es correcta: ACID corresponde a atomicidad, consistencia, aislamiento y durabilidad de las transacciones. «Integridad» no sustituye a «aislamiento», y «confidencialidad» no forma parte del acrónimo.','vigente'],
  [814,[],[],['Oracle Forms 4.5','módulo de menú','MMB','MMX','tecnología histórica'],[
    {url:'https://www.oracle.com/ocom/groups/public/%40otn/documents/webcontent/496307.htm',referencia:'Oracle, Creating Oracle Forms Menus: los módulos de menú se guardan con extensión .mmb; para ejecutar el menú se genera el archivo compilado .mmx.'},
    {url:'https://www.oracle.com/application-development/technologies/forms/forms-developer-and-forms-server.html',referencia:'Oracle, archivo oficial de documentación de Forms: las guías de Forms 4.5 y versiones previas se ofrecen como material histórico y las versiones referidas ya no tienen soporte.'}
  ],null,'Se conserva la respuesta A (.mmb) y se precisa que es la extensión del módulo de menú guardado antes de compilarlo; el ejecutable compilado usa .mmx. Oracle Forms 4.5 es una versión histórica sin soporte actual, por lo que la pregunta queda contextualizada como conocimiento de legado, no como recomendación tecnológica vigente.','historica'],
  [815,[64],['II-5'],['CRUD','Create','Read/Retrieve','Update','Delete','API REST'],[
    {url:'https://learn.microsoft.com/en-us/iis-administration/api/crud',referencia:'Microsoft Learn, CRUD: desarrolla las operaciones Create, Read, Update y Delete y muestra su correspondencia habitual con métodos HTTP en esa API REST.'}
  ],null,'Se corrige la clave a A y se pregunta directamente por la expansión del acrónimo. CRUD significa Create, Read/Retrieve, Update y Delete. Se evita afirmar que todas las arquitecturas REST se reducen a CRUD o atribuir el origen del término exclusivamente a sentencias SQL.','corregida']
];
const edits = {
  812:{texto:'Señale la afirmación incorrecta sobre el transporte predeterminado de WinRM:',opciones:[
    'WinRM intercambia información de gestión entre sistemas.',
    'WinRM implementa el protocolo WS-Management.',
    'El listener creado por defecto por `winrm quickconfig` usa HTTPS.',
    'PowerShell Remoting puede ejecutar comandos y scripts en sistemas remotos mediante WinRM.'
  ],respuesta_correcta:2},
  814:{texto:'En Oracle Forms 4.5, ¿qué extensión identifica el módulo de menú guardado antes de compilarlo?',opciones:['.mmb','.mxb','.bmx','.bll'],respuesta_correcta:0},
  815:{texto:'¿Qué significa el acrónimo CRUD en la gestión de datos?',opciones:[
    'Create, Read/Retrieve, Update y Delete (crear, leer/consultar, actualizar y borrar).',
    'Es una extensión de REST obligatoria para todas las aplicaciones web.',
    'Es el nombre de un conjunto específico de sentencias SQL del estándar ANSI.',
    'Es un protocolo de transporte que sustituye a HTTP en las API.'
  ],respuesta_correcta:0}
};
require('./aplicar-lote.cjs')({numero:'099',fecha:'2026-10-22',records,edits});
