const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const airwatch='https://techzone.omnissa.com/resource/workspace-one-frequently-asked-questions-faqs';
const mdmsecurity='https://csrc.nist.gov/pubs/sp/800/124/r2/final';
const openstack='https://docs.openstack.org/api-quick-start/';
const ec2='https://docs.openstack.org/api-ref/ec2-api/';
const swift='https://docs.openstack.org/swift/latest/middleware.html';
const components='https://docs.openstack.org/mitaka/admin-guide/common/get_started_with_openstack.html';
const ibm='https://www.ibm.com/think/topics/distributed-systems';
const chmod='https://www.man7.org/linux/man-pages/man1/chmod.1%40%40coreutils.html';
const academyMobile='18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu';
const academyCloud='16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu';
const academyArch='1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ';
const academyOS='1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3';
apply({numero:'1263',fecha:'2026-11-14',records:[
 [6636,[54,123],['IV-15'],['MDM','UEM','Workspace ONE','AirWatch','gestión de dispositivos móviles'],[
  src(airwatch,'Omnissa Workspace ONE FAQ, pregunta «Is AirWatch now Workspace ONE?»: confirma que Workspace ONE UEM, tecnología de UEM sobre la que se basa Workspace ONE, se conocía anteriormente como AirWatch; la solución actual gestiona dispositivos, aplicaciones y sistemas operativos.'),
  src(a1,'Convocatoria GSI A1 2025, temas 54 (gestión y seguridad de dispositivos móviles) y 123 (comunicaciones móviles).'),
  src(a2,'Convocatoria GSI A2 2025, tema IV.15: sistemas de comunicaciones móviles y soluciones MDM, EMM y UEM.'),
  src(`https://drive.google.com/file/d/${academyMobile}/view?usp=drivesdk`,'ITIC Academy, bloque 46 Redes Inalámbricas y Comunicaciones Móviles, edición 2026.1: incorpora MDM/EMM/UEM y gestión de dispositivos móviles en los temarios A1-54/A1-123 y A2-IV-15.')
 ],{opcion:[2,'Omnissa Workspace ONE UEM (anteriormente AirWatch).']},'Se mantiene la clave C y se actualiza el nombre comercial: AirWatch es la denominación anterior de Workspace ONE UEM, solución vigente de gestión unificada de endpoints que incluye gestión móvil. La opción mantiene la trazabilidad con el término del reactivo original, pero evita presentar AirWatch como marca actual independiente.', 'corregida'],
 [6637,[54,125],['IV-15'],['seguridad móvil','gestión de dispositivos móviles','actualizaciones de seguridad','formación de usuarios','protección de endpoints'],[
  src(mdmsecurity,'NIST SP 800-124 Rev. 2 (2023), Guidelines for Managing the Security of Mobile Devices in the Enterprise: guía vigente sobre gestión centralizada, controles y seguridad de móviles durante su ciclo de vida; incluye la gestión de actualizaciones del sistema y aplicaciones como parte del mantenimiento seguro.'),
  src(a1,'Convocatoria GSI A1 2025, temas 54 (seguridad y gestión de dispositivos móviles) y 125 (medidas específicas de seguridad para comunicaciones móviles).'),
  src(a2,'Convocatoria GSI A2 2025, tema IV.15: gestión de dispositivos móviles (MDM/EMM/UEM).'),
  src(`https://drive.google.com/file/d/${academyMobile}/view?usp=drivesdk`,'ITIC Academy, bloque 46 Redes Inalámbricas y Comunicaciones Móviles, edición 2026.1: MDM/EMM/UEM, gestión del ciclo de vida y seguridad de móviles.')
 ],{texto:'En una organización que gestiona dispositivos móviles, ¿qué práctica debilita la seguridad en lugar de mejorarla?',opciones:['Aplicar las actualizaciones de seguridad del sistema operativo y firmware con gestión de cambios.','Bloquear las actualizaciones de seguridad publicadas por el fabricante.','Formar a los usuarios en el uso seguro de los dispositivos.','Aplicar controles de protección de endpoint compatibles con la plataforma cuando proceda.'],respuesta_correcta:1},'La clave B es correcta: impedir las actualizaciones de seguridad deja vulnerabilidades conocidas sin corregir. La aplicación de parches debe gestionarse, probarse y desplegarse con el control de cambios adecuado, no bloquearse de manera general. Se reformulan las alternativas para separar este riesgo de controles positivos reales y evitar que «antivirus» sugiera una prestación universal en todas las plataformas móviles.', 'corregida'],
 [6638,[55],['II-1'],['OpenStack','Nova','Swift','Cinder','Glance','API EC2','compatibilidad S3'],[
  src(openstack,'Documentación oficial OpenStack API Quick Start: separa las API de servicios de OpenStack y enumera, entre otras, las interfaces de Compute y el servicio EC2 API.'),
  src(ec2,'Documentación oficial OpenStack EC2 API: describe un servicio EC2 independiente y documenta qué operaciones son compatibles y cuáles presentan limitaciones; no implica compatibilidad de todos los servicios OpenStack con las API AWS.'),
  src(swift,'Documentación oficial Swift, middleware s3api: el middleware configurado emula la API REST S3 sobre Swift; el soporte es una compatibilidad delimitada, no identidad completa con el producto AWS.'),
  src(components,'Documentación OpenStack: Nova administra instancias de cómputo, Swift almacena objetos, Cinder ofrece almacenamiento de bloques y Glance gestiona imágenes.'),
  src(a1,'Convocatoria GSI A1 2025, tema 55: computación en la nube, servicios y modelos de despliegue.'),
  src(a2,'Convocatoria GSI A2 2025, tema II.1: computación en la nube y sus componentes, funcionalidades y capacidades.'),
  src(`https://drive.google.com/file/d/${academyCloud}/view?usp=drivesdk`,'ITIC Academy, bloque 25 Cloud Computing, edición 2026: incluye OpenStack/OpenNebula, almacenamiento de objetos/bloques y actualización de conceptos de nube; se cotejan los nombres de servicios con la documentación oficial del proyecto.')
 ],{texto:'Indique la opción INCORRECTA sobre los servicios y las interfaces de OpenStack.',opciones:['OpenStack dispone de un servicio EC2 API independiente; Swift puede emular la API REST S3 mediante middleware configurado.','Swift proporciona almacenamiento de objetos.','Cinder es el servicio de cómputo de instancias.','Glance proporciona el servicio de imágenes.'],respuesta_correcta:2},'La clave C es la opción incorrecta: Cinder proporciona almacenamiento de bloques; el servicio de cómputo de instancias es Nova. Se corrigen «Cantora» (no es un servicio de OpenStack) y la descripción demasiado amplia de compatibilidad con AWS: la API EC2 es un servicio separado con limitaciones y Swift ofrece emulación de S3 mediante middleware configurable.', 'corregida'],
 [6639,[58],['II-6'],['arquitectura P2P','peer-to-peer','cliente-servidor','procesamiento distribuido','roles de pares'],[
  src(ibm,'IBM, explicación de sistemas distribuidos: en una red P2P cada par puede solicitar recursos y ofrecerlos a otros; cliente y servidor describen roles que un nodo puede asumir, no identidades fijas.'),
  src(a1,'Convocatoria GSI A1 2025, tema 58: procesamiento cooperativo y arquitectura cliente-servidor.'),
  src(a2,'Convocatoria GSI A2 2025, tema II.6: tipologías de arquitectura cliente-servidor y sistemas distribuidos/multidispositivo.'),
  src(`https://drive.google.com/file/d/${academyArch}/view?usp=drivesdk`,'ITIC Academy, bloque 28 Arquitectura SOA y requisitos no funcionales, versión 2026: cubre procesamiento distribuido y arquitectura cliente-servidor; el material explica el papel de los nodos y los modelos arquitectónicos.')
 ],{texto:'En una arquitectura P2P descentralizada, a diferencia de un modelo cliente-servidor con roles diferenciados, ¿qué puede hacer cada nodo par?',opciones:['Solicitar recursos a otros pares y ofrecer a su vez recursos a otros nodos.','Actuar únicamente como cliente; un servidor central debe prestar todos los recursos.','Almacenar necesariamente la aplicación completa de todos los demás nodos.','No hay diferencia arquitectónica entre P2P y cliente-servidor.'],respuesta_correcta:0},'La clave A expresa la diferencia relevante: los pares pueden actuar tanto como consumidores como proveedores de recursos, de modo que los papeles de cliente y servidor no son necesariamente fijos. Se concreta el supuesto para no confundirlo con la ubicación de la aplicación, que no define por sí sola el modelo P2P.', 'corregida'],
 [6640,[60],['II-2'],['Linux','permisos Unix','modo octal','chmod','705','lectura','escritura','ejecución'],[
  src(chmod,'Manual de chmod(1), secciones de modo numérico: cada dígito octal suma lectura=4, escritura=2 y ejecución=1; las posiciones corresponden a propietario, grupo y otros.'),
  src(a1,'Convocatoria GSI A1 2025, tema 60: fundamentos, administración y gestión de sistemas operativos UNIX-LINUX.'),
  src(a2,'Convocatoria GSI A2 2025, tema II.2: sistemas operativos Linux/Unix y administración.'),
  src(`https://drive.google.com/file/d/${academyOS}/view?usp=drivesdk`,'ITIC Academy, bloque 27 Sistemas Operativos, edición actualizada 2026: cubre UNIX/Linux y su administración; los bits de modo se verifican con el manual de chmod.')
 ],{texto:'En los permisos Unix/Linux expresados como modo octal 705, ¿qué permisos corresponden al propietario, al grupo y a los demás usuarios?',opciones:['El propietario tiene lectura, escritura y ejecución; el grupo no tiene permisos; los demás tienen lectura y ejecución.','El propietario tiene lectura y escritura; el grupo puede escribir; los demás solo ejecutar.','Todos los usuarios tienen escritura y ejecución.','Todos los usuarios tienen lectura y escritura.'],respuesta_correcta:0},'La clave A es correcta. El primer dígito 7 equivale a 4+2+1 (rwx) para el propietario; el segundo 0 no concede permisos al grupo; el tercero 5 equivale a 4+1 (r-x) para los demás. El reactivo original solo enumeraba lectura y escritura del propietario, una afirmación verdadera pero incompleta; se explicitan las tres clases y los bits para evitar una lectura parcial.', 'corregida']
]});
