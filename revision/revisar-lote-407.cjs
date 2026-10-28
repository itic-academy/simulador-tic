const apply = require('./aplicar-lote.cjs');

const sources = {
  dfd: [
    { url: 'https://vlabs.iitkgp.ac.in/sevl/Exp8/theory.html', referencia: 'IIT Kharagpur Virtual Labs, Modeling Data Flow Diagrams, teoría: define el diagrama de contexto como nivel 0 y establece que las entidades externas y los almacenes no se conectan directamente entre sí ni entre ellos, sino mediante procesos.' },
    { url: 'https://www.cs.uct.ac.za/mit_notes/software/htmls/ch06s05.html', referencia: 'University of Cape Town, Elements of Data Flow Diagrams: reglas de DFD; la comunicación entre entidad externa y almacén de datos se representa pasando por un proceso.' }
  ],
  copyright: [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930', referencia: 'Real Decreto Legislativo 1/1996, texto refundido de la Ley de Propiedad Intelectual, art. 98.2: para programas cuyo autor sea persona jurídica, 70 años desde el 1 de enero siguiente a la divulgación lícita o, si no se divulgaron, a su creación.' }
  ],
  windows: [
    { url: 'https://learn.microsoft.com/en-us/windows-server/administration/server-manager/add-remove-roles-features', referencia: 'Microsoft Learn, Add or Remove Roles and Features in Windows Server (aplicable a Windows Server 2025/2022/2019/2016): documenta la instalación y administración diferenciadas de roles y características.' },
    { url: 'https://learn.microsoft.com/en-us/windows/win32/wmisdk/server-feature-provider', referencia: 'Microsoft Learn, Server Feature Provider: define un rol como grupo de componentes para un área funcional y documenta la administración separada de roles y características.' },
    { url: 'https://www.microsoftpressstore.com/content/images/9780735624382/samplepages/9780735624382.pdf', referencia: 'Microsoft Press, Windows Server Administration Fundamentals, muestra de capítulo sobre roles, servicios de rol y características: define features como componentes de software que proporcionan funcionalidad adicional y los distingue de los roles.' }
  ],
  xmpp: [
    { url: 'https://www.rfc-editor.org/rfc/rfc7622.html', referencia: 'IETF RFC 7622, XMPP Address Format, §3: el formato de dirección de una entidad XMPP se denomina JID (Jabber Identifier); se compone de las partes local, dominio y, opcionalmente, recurso. No identifica necesariamente un único cliente físico.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc9844.html', referencia: 'IETF RFC 9844, actualización de RFC 7622 relativa a identificadores de zona IPv6 en interfaces de usuario; se consulta como actualización vigente del formato de direcciones.' }
  ],
  nti: [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-13749', referencia: 'Resolución de 22-07-2021 que aprueba la NTI SICRES 4; BOE de 10-08-2021. El apartado primero indica que sustituye SICRES 3 de 2011.' },
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2016-10146', referencia: 'Resolución de 27-10-2016, NTI de Política de Firma y Sello Electrónicos y de Certificados; publicada en BOE el 03-11-2016.' },
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2013-2380', referencia: 'Resolución de 19-02-2013, NTI de Reutilización de recursos de información; publicada en BOE el 04-03-2013.' },
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331', referencia: 'Real Decreto 4/2010, ENI, disposición adicional primera: incluye entre las materias para las NTI la interoperabilidad de los registros de funcionarios habilitados; es una previsión de desarrollo, no una resolución aprobatoria fechada.' },
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-5032', referencia: 'Real Decreto 203/2021, disposición final segunda que actualiza la relación de NTI previstas por el ENI y art. 31 sobre Registro de Funcionarios Habilitados; no es por sí mismo la resolución de aprobación de la NTI propuesta en la opción.' }
  ]
};

const records = [
  [2351, [90], ['III-2'], ['DFD', 'diagrama de flujo de datos', 'modelo dinámico', 'proceso', 'entidad externa', 'almacén de datos'], sources.dfd, '', 'Se conserva la opción que prohíbe conectar directamente una entidad externa y un almacén: el flujo debe pasar por un proceso. Se corrige la terminología del resto: el diagrama de contexto es de nivel 0, no nivel 1; una entidad externa representa un origen/destino ajeno al sistema; y un proceso primitivo es atómico/no descomponible en el nivel de detalle adoptado. Se explicita que se siguen las convenciones de DFD citadas, porque la notación y las reglas dependen del método.', 'corregida'],
  [2352, [43], ['II-14'], ['programas de ordenador', 'propiedad intelectual', 'derechos de explotación', 'autor persona jurídica', '70 años'], sources.copyright, '', 'La opción de 70 años se confirma para los programas de ordenador cuyo autor sea persona jurídica. Se precisa el cómputo: desde el 1 de enero del año siguiente al de la divulgación lícita o, si no se divulgó, al de su creación (art. 98.2 TRLPI).', 'corregida'],
  [2353, [59], ['II-2'], ['Windows Server', 'roles', 'características', 'features', 'componentes de software'], sources.windows, '', 'La respuesta correcta es feature/característica: componente de software que añade funcionalidad al servidor y se administra diferenciadamente de un rol o servicio de rol. Se reescriben los distractores para separar de forma inequívoca una feature de un rol de servidor, que agrupa funciones para un área funcional.', 'corregida'],
  [2354, [116], ['II-8'], ['XMPP', 'JID', 'Jabber ID', 'dirección XMPP', 'localpart', 'domainpart', 'resourcepart'], sources.xmpp, '', 'Se corrige «identificador único de un cliente»: JID significa Jabber Identifier y es el formato normalizado de dirección de una entidad XMPP, no necesariamente un identificador único de un cliente físico. Puede incluir parte local y de dominio, y una parte de recurso opcional. Se restauran las opciones truncadas.', 'corregida'],
  [2355, [45, 46], ['I-9'], ['ENI', 'NTI', 'SICRES 4', 'modelo de datos registrales', 'interoperabilidad', 'BOE'], sources.nti, '', 'Entre las NTI aprobadas y publicadas que se comparan, SICRES 4 es la más reciente: su resolución es de 22-07-2021 y se publicó el 10-08-2021; las otras resoluciones citadas son de 2016 y 2013. Se precisa que la opción sobre funcionarios habilitados es una materia prevista para desarrollo por el ENI, no se identifica como una NTI aprobada mediante una resolución publicada con ese título en el corte consultado. La comparación se limita expresamente a las opciones y al BOE disponible al 28-10-2026.', 'corregida']
];

const edits = {
  2351: { texto: 'Según las convenciones habituales de los diagramas de flujo de datos (DFD), ¿qué afirmación es correcta?', opciones: ['El diagrama de contexto corresponde al nivel 1.', 'Una entidad externa representa un proceso interno que transforma los datos.', 'Una entidad externa y un almacén de datos no se conectan directamente: el flujo debe pasar por un proceso.', 'Un proceso primitivo es descomponible en procesos de nivel inferior.'], respuesta_correcta: 2 },
  2352: { texto: 'Según el artículo 98.2 del texto refundido de la Ley de Propiedad Intelectual, ¿cuánto duran los derechos de explotación de un programa de ordenador cuando el autor es una persona jurídica?', opciones: ['20 años.', '50 años.', '70 años.', 'La duración de la vida del autor más 70 años.'], respuesta_correcta: 2 },
  2353: { texto: 'En Windows Server, ¿qué es una característica (feature) instalada desde Server Manager?', opciones: ['Un componente de software que añade funcionalidad al servidor, distinto de un rol de servidor.', 'La especificación conjunta del hardware y del software del servidor.', 'La agrupación de componentes que proporciona funciones para un área concreta, como DNS o impresión.', 'Un conjunto de programas que define necesariamente una función de red completa para otros equipos.'], respuesta_correcta: 0 },
  2354: { texto: 'En XMPP, ¿cómo se denomina el formato normalizado de dirección de una entidad de la red?', opciones: ['SIP URI.', 'User Agent (UA).', 'Jabber Identifier (JID).', 'Uniform Resource Identifier (URI).'], respuesta_correcta: 2 },
  2355: { texto: 'Atendiendo a las resoluciones de aprobación publicadas en el BOE hasta el 28 de octubre de 2026, ¿cuál de estas NTI aprobadas es la más reciente?', opciones: ['La NTI de Política de Firma y Sello Electrónicos y de Certificados de la Administración, aprobada por resolución de 27 de octubre de 2016.', 'La NTI del Modelo de Datos para el intercambio de asientos entre las entidades registrales (SICRES 4), aprobada por resolución de 22 de julio de 2021.', 'La NTI de Reutilización de recursos de información, aprobada por resolución de 19 de febrero de 2013.', 'La interoperabilidad de los registros de funcionarios habilitados, materia prevista para desarrollo en el ENI, sin resolución de aprobación identificada entre las opciones.'], respuesta_correcta: 1 }
};

apply({ numero: '407', fecha: '2026-10-28', records, edits });
