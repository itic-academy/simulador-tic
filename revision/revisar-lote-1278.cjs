const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy={os:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',tech:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',admin:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',storage:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk'};
apply({numero:'1278',fecha:'2026-11-14',records:[
 [6711,[60],['II-2'],['UNIX','Linux','root','superusuario','UID 0'],[
  src('https://man7.org/linux/man-pages/man5/passwd.5.html','Linux man-pages, passwd(5), descripción del campo UID: la cuenta privilegiada root (superusuario) tiene UID 0; root es el nombre convencional de esa cuenta.'),
  src(a1,'Convocatoria oficial GSI A1 2025, tema 60: sistemas operativos UNIX-LINUX, fundamentos y administración.'),
  src(a2,'Convocatoria oficial GSI A2 2025, tema II.2: fundamentos, características y administración de sistemas operativos, incluidos Linux y Unix.'),
  src(academy.os,'ITIC Academy, bloque 27 «Sistemas Operativos», versión 2026 actualizada: cubre fundamentos y administración de UNIX/Linux; la cuenta root y UID 0 se verifican en la página passwd(5).')
 ],{texto:'En los sistemas UNIX/Linux, ¿qué nombre identifica convencionalmente la cuenta de superusuario?',opciones:['daemon','adm','bin','root'],respuesta_correcta:3},'Se mantiene D (root). En UNIX/Linux, root es la cuenta privilegiada convencional; en Linux su UID es 0. Los nombres daemon, adm y bin se usan habitualmente para cuentas de servicio o del sistema, pero sus funciones concretas pueden variar entre sistemas.', 'vigente'],

 [6712,[65],['III-12'],['HTTP','GET','POST','RFC 9110','semántica de métodos','idempotencia','seguridad'],[
  src('https://www.rfc-editor.org/rfc/rfc9110.html','IETF RFC 9110, §§9.3.1 y 9.3.3: GET solicita transferir una representación actual del recurso; POST solicita que el recurso procese el contenido de la petición conforme a semánticas específicas del recurso. §§9.2.1–9.2.2: GET es seguro e idempotente; PUT, DELETE y los métodos seguros son idempotentes. POST no es idempotente por definición, aunque un recurso particular puede implementarlo con efectos idempotentes.'),
  src(a1,'Convocatoria oficial GSI A1 2025, tema 65: arquitectura y desarrollo web, tecnologías front-end y de servidor.'),
  src(a2,'Convocatoria oficial GSI A2 2025, tema III.12: aplicaciones web y servicios, estándares y protocolos asociados.'),
  src(academy.tech,'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1: cotejo curricular de HTTP y aplicaciones web; la semántica normativa de GET/POST se contrasta con IETF RFC 9110.')
 ],{texto:'Según la semántica de métodos de HTTP definida en RFC 9110, ¿qué afirmación distingue correctamente GET y POST?',opciones:[
  'GET solicita la transferencia de una representación del recurso; POST solicita que el recurso procese el contenido de la petición según su semántica específica.',
  'GET es el único método HTTP definido como idempotente.',
  'POST es seguro e idempotente por definición, mientras que GET no es seguro.',
  'HTTP prohíbe que una petición GET incluya contenido en el mensaje.'
 ],respuesta_correcta:0},'Se reformula y se cambia la clave a A. RFC 9110 define GET como transferencia de una representación actual del recurso y POST como procesamiento del contenido conforme a la semántica propia del recurso. La opción B es falsa porque PUT, DELETE y los métodos seguros son idempotentes; C confunde propiedades: GET es seguro e idempotente, mientras que POST no es seguro ni idempotente por definición. D también es falsa: RFC 9110 no prohíbe contenido en GET, aunque no le asigna semántica general y su uso puede causar problemas de interoperabilidad.', 'corregida'],

 [6713,[22],['I-9'],['copias electrónicas','digitalización','RD 1671/2009','ENI','ENS','normativa derogada','histórica'],[
  src('https://www.boe.es/buscar/pdf/2009/BOE-A-2009-18358-consolidado.pdf','BOE, Real Decreto 1671/2009, antiguo artículo 44.3: enumeraba los requisitos para que imágenes electrónicas de documentos no electrónicos tuvieran carácter de copias auténticas. Su letra c remitía expresamente a los formatos, calidad y condiciones técnicas especificados en el Esquema Nacional de Interoperabilidad (ENI), no en el ENS.'),
  src('https://www.boe.es/buscar/act.php?id=BOE-A-2021-5032&lang=es&p=&tn=1','BOE, Real Decreto 203/2021, disposición derogatoria única: deroga expresamente el RD 1671/2009 desde la entrada en vigor del nuevo Reglamento.'),
  src('https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565&p=20241106&tn=1','BOE, Ley 39/2015, texto consolidado, artículo 27: marco vigente para copias auténticas; su apartado 3 remite al ENI, al ENS y a sus normas técnicas, e incluye los requisitos para copias electrónicas de documentos en papel.'),
  src(a1,'Convocatoria oficial GSI A1 2025, tema 22: legislación de sociedad de la información y administración electrónica en España y Europa.'),
  src(a2,'Convocatoria oficial GSI A2 2025, tema I.9: gestión electrónica, ENS, ENI y normas técnicas de interoperabilidad.'),
  src(academy.admin,'ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», versión 2026.2: cotejo curricular de administración electrónica, expediente y copias; la respuesta histórica se comprueba en el artículo 44.3 del RD 1671/2009 y su derogación en el RD 203/2021.')
 ],{texto:'Pregunta histórica: conforme al artículo 44.3 del derogado Real Decreto 1671/2009, ¿qué referencia NO figuraba como requisito técnico para que ciertas imágenes electrónicas fueran copias auténticas?',opciones:[
  'Que el documento copiado fuese un original o una copia auténtica.',
  'Que la copia se autorizase mediante firma electrónica conforme a los sistemas entonces previstos.',
  'Que formatos, niveles de calidad y condiciones técnicas se ajustasen al Esquema Nacional de Seguridad (ENS).',
  'Que la copia incluyese entre sus metadatos su carácter de copia.'
 ],respuesta_correcta:2},'Se clasifica como histórica porque el RD 1671/2009 está derogado desde el 2 de abril de 2021. Se mantiene C como falsa para el antiguo artículo 44.3: este remitía al Esquema Nacional de Interoperabilidad (ENI), no al ENS. La pregunta se acota expresamente a esa disposición derogada. Para el marco vigente de copias auténticas, consultar el artículo 27 de la Ley 39/2015 y el RD 203/2021; no debe usarse este ítem como resumen de la normativa actual.', 'historica'],

 [6714,[56],['IV-5'],['almacenamiento','replicación síncrona','replicación remota','confirmación de escritura','RPO'],[
  src('https://learn.microsoft.com/en-us/windows-server/storage/storage-replica/storage-replica-overview','Microsoft Learn, Storage Replica: en modo síncrono la escritura no se confirma inmediatamente al sistema origen; se replica y confirma en el destino y solo entonces la aplicación recibe la confirmación.'),
  src('https://learn.microsoft.com/en-us/azure/reliability/concept-redundancy-replication-backup','Microsoft Learn, Redundancy, Replication, and Backup: describe el flujo de confirmación del cambio en ambas réplicas antes de dar por completada la actualización.'),
  src(a1,'Convocatoria oficial GSI A1 2025, tema 56: almacenamiento para sistemas grandes y departamentales, virtualización y copias de seguridad.'),
  src(a2,'Convocatoria oficial GSI A2 2025, tema IV.5: arquitectura, tipos, componentes, protocolos, gestión y administración del almacenamiento.'),
  src(academy.storage,'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», edición 2026.1: apartados sobre almacenamiento, SAN y resiliencia; la secuencia concreta de confirmación síncrona se verifica en Microsoft Learn.')
 ],{texto:'En una replicación remota de almacenamiento en modo síncrono, ¿cuándo se confirma normalmente una escritura a la aplicación de origen?',opciones:[
  'Inmediatamente después de escribirla en el origen, antes de enviarla al destino.',
  'Después de que el destino confirme que ha recibido y persistido la escritura replicada, además de completar el registro en origen según la implementación.',
  'Solo cuando se genera una instantánea periódica, con independencia del destino.',
  'La replicación síncrona no devuelve confirmaciones de escritura al sistema de origen.'
 ],respuesta_correcta:1},'Se reformula para especificar la perspectiva de confirmación a la aplicación. En replicación síncrona, la latencia de ida y vuelta forma parte de la ruta de escritura: no se confirma la operación al origen hasta que el destino haya confirmado la escritura, con los detalles de persistencia condicionados por la implementación. En replicación asíncrona, el origen puede confirmar antes de completar la copia remota.', 'corregida'],

 [6715,[56],['IV-5'],['SCSI','Small Computer System Interface','interfaces de almacenamiento','iniciador','destino','protocolos'],[
  src('https://www.t10.org/drafts.htm','INCITS Technical Committee T10, página de estándares/borradores: identifica SCSI como familia de estándares y enumera el modelo de arquitectura SAM, protocolos, comandos y estándares para dispositivos de almacenamiento.'),
  src('https://www.t10.org/ftp/t10/document.02/02-153r0.pdf','Documento técnico del comité T10 sobre el modelo de comunicación SCSI: representa dispositivos iniciador y destino, unidades lógicas, protocolos de aplicación y subsistemas de entrega de servicio.'),
  src('https://www.t10.org/lists/stds-num.htm','INCITS T10, catálogo de descriptores de estándares: identifica versiones publicadas del SCSI Architecture Model (SAM), comandos y protocolos de la familia SCSI.'),
  src(a1,'Convocatoria oficial GSI A1 2025, tema 56: sistemas de almacenamiento y sus componentes para sistemas grandes/departamentales.'),
  src(a2,'Convocatoria oficial GSI A2 2025, tema IV.5: arquitectura, tipos, componentes y protocolos de almacenamiento.'),
  src(academy.storage,'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», edición 2026.1: cotejo curricular de interfaces y protocolos de almacenamiento; la arquitectura actualizada SCSI se contrasta con la documentación de INCITS T10.')
 ],{texto:'En el contexto de interfaces y almacenamiento, ¿qué describe mejor SCSI (Small Computer System Interface)?',opciones:[
  'Una familia de estándares de interfaz, arquitectura y comandos/protocolos para la comunicación entre sistemas iniciadores y dispositivos destino, incluidos periféricos y almacenamiento.',
  'Un estándar de facto para interconectar directamente las distintas capas del modelo OSI.',
  'Una arquitectura de procesador que define el conjunto de instrucciones de los ordenadores personales.',
  'Una tarjeta de vídeo dedicada a transferir gráficos entre el procesador y la pantalla.'
 ],respuesta_correcta:0},'Se reformula y se cambia la clave a A. SCSI es una familia de estándares que define arquitectura, protocolos y conjuntos de comandos para que iniciadores se comuniquen con dispositivos destino; no es una capa de OSI, una arquitectura de CPU ni una tarjeta de vídeo. La familia se usa en diferentes transportes y no se limita a una conexión física paralela directa.', 'corregida']
]});
