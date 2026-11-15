const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const bsc='https://www.hbs.edu/ris/download.aspx?name=10-074.pdf';
const cable='https://account.cablelabs.com/server/alfresco/b16ac599-520b-4de3-8185-bcafc5743c91';
const apple='https://developer.apple.com/documentation/xcode/distributing-your-app-to-registered-devices/';
const ipv6='https://www.rfc-editor.org/rfc/rfc8200.html';
const flow='https://www.rfc-editor.org/rfc/rfc6437.html';
const compact='https://www.microsoft.com/en-us/download/details.aspx?id=30709';
const compactLife='https://learn.microsoft.com/en-us/lifecycle/products/microsoft-sql-server-compact-40';
const webdeploy='https://learn.microsoft.com/en-us/iis/publish/using-web-deploy/use-the-web-deployment-tool';
const esb='https://learn.microsoft.com/en-us/biztalk/esb-toolkit/microsoft-biztalk-esb-toolkit';
const biztalk='https://learn.microsoft.com/en-us/biztalk/install-and-config-guides/whats-new-in-biztalk-server-2020';
const biztalkLife='https://learn.microsoft.com/en-us/azure/logic-apps/biztalk-server-migration-overview';
const academy={strategy:'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk',networks:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',mobile:'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk',tech:'https://drive.google.com/file/d/1LuUHoQr8oDmptteHIQ72VdCvJFsnu3LF/view?usp=drivesdk'};
const records=[
 [7021,[33],['II-4'],['cuadro de mando integral','Balanced Scorecard','estrategia','indicadores'],[
  {url:bsc,referencia:'Robert S. Kaplan, Harvard Business School, Conceptual Foundations of the Balanced Scorecard: sitúa el instrumento en medición del desempeño, objetivos estratégicos y sistema de gestión estratégica; no es una herramienta de resolución inmediata de incidencias operativas.'},
  {url:'https://hbr.org/2007/07/using-the-balanced-scorecard-as-a-strategic-management-system',referencia:'Kaplan y Norton, Harvard Business Review: el BSC vincula objetivos estratégicos de largo plazo con acciones/medidas y procesos de gestión.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 33: herramientas de planificación y control de gestión y cuadro de mando.'},
  {url:a2,referencia:'Convocatoria oficial A2 GSI 2025, tema II-4: cuadros de mando integral e inteligencia de negocios.'},
  {url:academy.strategy,referencia:'ITIC Academy, bloque 12 Directivo TIC y Planificación Estratégica, versión 2026: cubre CMI/Balanced Scorecard en A1 tema 33 y A2 II-4; cotejo curricular directo.'}
 ],undefined,'Corregida A. El CMI/BSC traduce estrategia en objetivos e indicadores y facilita seguimiento/alineación; no sustituye la gestión operativa inmediata de problemas. Se corrigió el enunciado porque la opción antigua «presentar toda la información relevante» también era demasiado absoluta: el cuadro muestra una selección de indicadores pertinentes, no toda la información de la organización.','corregida'],
 [7022,[108,121],['IV-7'],['DOCSIS 3.1','OFDM','OFDMA','subportadoras','numerología'],[
  {url:cable,referencia:'CableLabs CM-SP-PHYv4.0, definiciones y numerología PHY DOCSIS 3.1: separación nominal de subportadoras OFDM/OFDMA de 25 kHz o 50 kHz; downstream 4K/8K FFT emplea respectivamente 50/25 kHz.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, temas 108 y 121: tecnologías de acceso y telecomunicaciones por cable/CATV.'},
  {url:a2,referencia:'Convocatoria oficial A2 GSI 2025, tema IV-7: medios de transmisión y parámetros significativos.'},
  {url:academy.networks,referencia:'ITIC Academy, bloque 42 Redes, actualización 2026: coteja DOCSIS/CATV dentro de infraestructuras de acceso y redes de cable.'}
 ],undefined,'Vigente D. DOCSIS 3.1 establece separaciones nominales de 25 y 50 kHz; para el downstream OFDM corresponden 50 kHz con FFT 4K y 25 kHz con FFT 8K. Se aclaró el enunciado para preguntar por las separaciones nominales, no por un único modo.','vigente'],
 [7023,[62,124],['II-2'],['iOS','IPA','paquete de distribución','aplicaciones móviles'],[
  {url:apple,referencia:'Apple Developer Documentation, distribuir apps a dispositivos registrados: los paquetes exportados por Xcode para iOS, iPadOS, tvOS, visionOS y watchOS son iOS Package Archive con extensión .ipa.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, temas 62 y 124: iOS/sistemas móviles y aplicaciones móviles, distribución y tendencias.'},
  {url:a2,referencia:'Convocatoria oficial A2 GSI 2025, tema II-2: sistemas operativos, incluido iOS y sistemas móviles.'},
  {url:academy.mobile,referencia:'ITIC Academy, bloque 47 Aplicaciones móviles y sistemas operativos, versión 2026.1: incluye iOS, distribución de apps y sistemas móviles.'}
 ],undefined,'Vigente A. IPA (.ipa) es el archivo de paquete que Xcode exporta para distribución/instalación de una app iOS. Se precisa que la pregunta trata del paquete distribuible, no del bundle .app que contiene la aplicación dentro de la estructura empaquetada.','vigente'],
 [7024,[115],['II-8'],['IPv6','Flow Label','etiqueta de flujo','RFC 8200'],[
  {url:ipv6,referencia:'IETF RFC 8200, sección 3: el campo Flow Label de la cabecera IPv6 tiene 20 bits.'},
  {url:flow,referencia:'IETF RFC 6437, especificación de la etiqueta de flujo IPv6: confirma su campo de 20 bits y su semántica.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 115: redes IP, transición IPv4/IPv6 y funcionalidades específicas de IPv6.'},
  {url:a2,referencia:'Convocatoria oficial A2 GSI 2025, tema II-8: modelo TCP/IP, OSI, direccionamiento y encaminamiento.'},
  {url:academy.networks,referencia:'ITIC Academy, bloque 42 Redes, actualización 2026: redes IP y características IPv6 dentro del mapa A1/A2; cotejo curricular contextual.'}
 ],undefined,'Vigente C. RFC 8200 fija la cabecera IPv6 con un campo Flow Label de 20 bits. Se conserva la clave y se identifica el nombre normalizado en inglés junto con su equivalente castellano.','vigente'],
 [7025,[66],['III-11'],['Microsoft .NET','SQL Server Compact','Web Deploy','BizTalk ESB Toolkit','histórico'],[
  {url:compact,referencia:'Microsoft Download Center, SQL Server Compact 4.0: motor de base de datos embebido distribuible con aplicaciones.'},
  {url:compactLife,referencia:'Microsoft Lifecycle: SQL Server Compact 4.0 terminó soporte extendido el 14 de julio de 2021; se mantiene únicamente como producto heredado.'},
  {url:webdeploy,referencia:'Microsoft Learn, Web Deploy: herramienta para migrar, sincronizar, administrar y desplegar sitios, aplicaciones y servidores IIS, incluidas granjas de servidores.'},
  {url:esb,referencia:'Microsoft Learn, BizTalk ESB Toolkit: extensión de BizTalk Server que incorpora componentes y patrones de Enterprise Service Bus para integración/mensajería; BizTalk procesa internamente XML.'},
  {url:biztalk,referencia:'Microsoft Learn, BizTalk Server 2020: describe la última versión y su calendario de fin de venta/soporte.'},
  {url:biztalkLife,referencia:'Microsoft Learn, ciclo de vida y migración BizTalk: Server 2020 es la versión final; soporte principal continúa hasta abril de 2028 y puede ampliarse hasta 2030 conforme a los términos aplicables.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 66: entorno de desarrollo Microsoft .NET.'},
  {url:a2,referencia:'Convocatoria oficial A2 GSI 2025, tema III-11: plataforma .NET, modelo de programación, servicios, herramientas y seguridad.'},
  {url:academy.tech,referencia:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, versión 2026.2: incluye A1 tema 66 y plataforma .NET en el mapa técnico; el material no presenta SQL Server Compact/Web Deploy 3.5 como herramientas actuales.'}
 ],undefined,'Histórica A. SQL Server Compact es una base de datos embebida, aunque 4.0 quedó fuera de soporte en 2021. Web Deploy se usa para migrar/sincronizar/desplegar recursos IIS y BizTalk ESB Toolkit aporta componentes y patrones ESB; el motor BizTalk procesa XML internamente. La clave y opciones se reescribieron: la versión antigua llamaba al propio BizTalk «un ESB» y describía de manera excesivamente amplia Web Deploy; el enunciado actual declara el inventario de productos heredados y no recomienda ese conjunto para desarrollos nuevos.','historica']
];
const edits={
 7021:{texto:'¿Cuál de las siguientes NO es una finalidad propia del Cuadro de Mando Integral (CMI/Balanced Scorecard)?',opciones:['Resolver de forma inmediata incidencias operativas concretas de un proyecto u organización.','Mostrar un conjunto seleccionado de indicadores relevantes para seguir el desempeño.','Traducir y comunicar objetivos estratégicos para orientar a la organización.','Alinear y coordinar objetivos entre unidades mediante medidas compartidas.'],respuesta_correcta:0},
 7022:{texto:'En DOCSIS 3.1, ¿qué separaciones nominales entre subportadoras admite la numerología OFDM/OFDMA? En downstream OFDM, se corresponden con FFT de 4K y 8K, respectivamente.',opciones:['1 MHz y 5 MHz.','15 kHz.','192 MHz.','50 kHz y 25 kHz.'],respuesta_correcta:3},
 7023:{texto:'¿Qué extensión identifica el paquete de distribución/exportación de una aplicación para iOS generado por Xcode?',opciones:['.ipa','.app','.apk','.ark'],respuesta_correcta:0},
 7024:{texto:'Según la cabecera IPv6 especificada en RFC 8200, ¿cuál es la longitud en bits del campo Flow Label (etiqueta de flujo)?',opciones:['8 bits.','16 bits.','20 bits.','El campo no existe en IPv6.'],respuesta_correcta:2},
 7025:{texto:'En este inventario histórico del ecosistema Microsoft .NET, considerando SQL Server Compact 4.0, Web Deploy y BizTalk ESB Toolkit, ¿qué opción describe correctamente las tres herramientas?',opciones:['SQL Server Compact es una base de datos embebida; Web Deploy ayuda a migrar, sincronizar y desplegar sitios/aplicaciones/servidores IIS; BizTalk ESB Toolkit añade componentes y patrones ESB a BizTalk, cuyo motor procesa mensajes internamente como XML.','SQL Server Compact es sólo un gestor relacional cliente-servidor; Web Deploy sólo cifra tráfico TLS; BizTalk ESB Toolkit reemplaza el motor de mensajes de BizTalk.','SQL Server Compact es un servicio de directorio; Web Deploy administra redes DOCSIS; BizTalk ESB Toolkit no admite mensajes XML.','Todas las anteriores son correctas.'],respuesta_correcta:0}
};
aplicar({numero:'1340',fecha:'2026-11-15',records,edits});
