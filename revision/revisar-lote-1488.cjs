const apply=require('./aplicar-lote.cjs');
const gradle='https://developer.android.com/build/build-variants';
const androidPlugin='https://developer.android.com/build/build-variants#product-flavors';
const etsiX='https://www.etsi.org/deliver/etsi_en/319100_319199/31913201/01.03.01_60/en_31913201v010301p.pdf';
const etsiC='https://www.etsi.org/deliver/etsi_EN/319100_319199/31912201/01.01.01_60/en_31912201v010101p.pdf';
const etsiP='https://www.etsi.org/deliver/etsi_en/319100_319199/31914201/01.02.01_60/en_31914201v010201p.pdf';
const declaration='https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Octubre/Noticia-2015-10-05-aprobado-plan-transformacion-digita-AGE-estrategia-tic.html?idioma=en';
const repealed='https://www.boe.es/buscar/act.php?id=BOE-A-2024-22935';
const mac='https://www.rfc-editor.org/rfc/rfc9542.html';
const django='https://docs.djangoproject.com/en/5.2/topics/install/';
const records=[
 [7741,[124],['II-1'],['Gradle','Android Gradle Plugin','build variants','product flavors','build types','Android'],[
  {url:gradle,referencia:'Android Developers, Configure build variants: la variante de una app Android se obtiene combinando product flavors y build types.'},
  {url:androidPlugin,referencia:'Android Developers, Product flavors: documenta la configuración de sabores de producto en el Android Gradle Plugin.'}
 ],{texto:'En el Android Gradle Plugin, la configuración que permite generar variantes de una aplicación combinando distintas dimensiones de producto y tipos de compilación se denomina:',opciones:['Build variants, que combinan product flavors y build types.','Un sistema de reglas de iOS incluido de forma nativa en Gradle.','Una función específica de Tizen integrada en el núcleo de Gradle.','Una capacidad universal del núcleo de Gradle independiente de los plugins.'],respuesta_correcta:0},'Corregida A. La formulación original atribuía a Gradle de forma genérica la generación de variantes para Android, iOS y Tizen; los product flavors y build types descritos son una función del Android Gradle Plugin. Gradle es extensible mediante plugins, por lo que no se infiere soporte nativo universal del núcleo.', 'corregida'],
 [7742,[80],['I-6'],['firma electrónica','XAdES','CAdES','PAdES','ETSI'],[
  {url:etsiX,referencia:'ETSI EN 319 132-1:2024, estándar europeo para firmas digitales XAdES y firmas base.'},
  {url:etsiC,referencia:'ETSI EN 319 122-1:2016, estándar europeo para firmas digitales CAdES y firmas base.'},
  {url:etsiP,referencia:'ETSI EN 319 142-1:2024, estándar europeo para firmas digitales PAdES sobre documentos PDF.'}
 ],{texto:'¿Cuáles de las siguientes son familias de formatos de firma electrónica definidas por ETSI?',opciones:['PNG, JPEG y TIFF.','XML, PHP y HTML.','X.509, ASN.1 y DER.','XAdES, CAdES y PAdES.'],respuesta_correcta:3},'Vigente D. XAdES, CAdES y PAdES son familias de formatos de firma digital descritas por estándares ETSI, para firmas XML, CMS y PDF, respectivamente. Se normaliza la grafía PAdES y se acota la pregunta a formatos para evitar confundirlos con estándares de certificados o codificación.', 'vigente'],
 [7743,[30,49],['I-10'],['AGE','servicios compartidos','primera declaración 2015','archivo electrónico','gestión económico-presupuestaria','Real Decreto 806/2014','histórico'],[
  {url:declaration,referencia:'PAe, noticia oficial de la aprobación del Plan de Transformación Digital y de la primera Declaración de Servicios Compartidos (2015): enumera gestión de notificaciones, gestión de archivo electrónico y servicio común de gestión económico-presupuestaria entre los 14 servicios declarados.'},
  {url:repealed,referencia:'Real Decreto 1125/2024, de 5 de noviembre, BOE-A-2024-22935: deroga el RD 806/2014 y regula el marco organizativo actual; la pregunta se conserva solo como conocimiento histórico de la declaración de 2015.'}
 ],{texto:'Conforme a la primera Declaración de Servicios Compartidos aprobada en 2015 bajo el modelo del Real Decreto 806/2014, ¿qué conjunto aparece en la relación de servicios declarados?',opciones:['Gestión de notificaciones, gestión de inventario y servicio común de gestión económico-presupuestaria.','Gestión de notificaciones, gestión de archivo electrónico y servicio común de gestión económico-presupuestaria.','Gestión de notificaciones, gestión de archivo electrónico y gestión del correo diplomático.','Gestión de notificaciones, gestión de archivo electrónico y servicio común de big data.'],respuesta_correcta:1},'Histórica B. La primera declaración de 2015 incluyó estos tres servicios, entre otros. El RD 806/2014 quedó derogado por el RD 1125/2024; por eso la pregunta se limita expresamente al hecho histórico y no presenta el modelo anterior como marco vigente.', 'historica'],
 [7744,[110,118],['IV-8'],['MAC','EUI-48','hexadecimal','Ethernet','octeto'],[
  {url:mac,referencia:'IETF RFC 9542, sección 1.1: cada octeto se representa con dos dígitos hexadecimales; sección 2.1: describe identificadores MAC de 48 bits como identificadores comunes de interfaces Ethernet.'}
 ],{texto:'¿En qué base se representan habitualmente los octetos de una dirección MAC Ethernet?',opciones:['Decimal.','Hexadecimal.','Octal.','Binaria.'],respuesta_correcta:1},'Vigente B. Una dirección MAC/EUI-48 consta de seis octetos; su notación habitual presenta cada octeto con dos dígitos hexadecimales (por ejemplo, separados por dos puntos o guiones).', 'vigente'],
 [7745,[65],['II-3','III-12'],['Django','Python','framework web','desarrollo web en servidor'],[
  {url:django,referencia:'Documentación oficial Django 5.2, instalación: identifica explícitamente Django como un framework web de Python.'}
 ],{texto:'Django es un framework web desarrollado para el lenguaje:',opciones:['JavaScript.','PHP.','Java.','Python.'],respuesta_correcta:3},'Vigente D. La documentación oficial de Django lo identifica como framework web de Python; se precisa el ámbito web para distinguirlo de frameworks generales.', 'vigente']
];
apply({numero:'1488',fecha:'2026-11-16',records});
