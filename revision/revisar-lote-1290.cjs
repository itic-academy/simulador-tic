const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
apply({numero:'1290',fecha:'2026-11-15',records:[
  [6771,[113],['IV-10'],['MPLS','etiqueta','Label Stack Entry','RFC 3032'],[
    src('https://www.rfc-editor.org/rfc/rfc3032.html','IETF RFC 3032, sección 2.1 y figura 1: el campo Label de cada entrada de la pila MPLS ocupa 20 bits; los campos restantes son TC/EXP (3), S (1) y TTL (8).'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 113: redes de transporte, MPLS y redes de agregación.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema IV.10: redes WAN y tecnologías MPLS/SD-WAN.'),
    src('https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk','ITIC Academy, bloque 42, redes y tecnologías de transporte, edición 2026: cotejo curricular de MPLS; el tamaño del campo se contrasta con el RFC del IETF.')
  ],{texto:'En una entrada de la pila MPLS definida por RFC 3032, ¿cuántos bits ocupa el campo Label?',opciones:[
    '16 bits.','20 bits.','32 bits.'
  ],respuesta_correcta:1},'Se conserva B. RFC 3032 especifica que Label ocupa 20 bits dentro de una entrada de 32 bits; los 12 restantes se distribuyen entre los campos TC/EXP, S y TTL.','corregida'],

  [6772,[79],['II-2','II-13'],['BitLocker','cifrado de volumen','cifrado de disco','Windows','AES'],[
    src('https://learn.microsoft.com/en-us/windows/security/information-protection/bitlocker/bitlocker-overview','Microsoft Learn, BitLocker overview: BitLocker Drive Encryption cifra volúmenes completos en Windows, incluidos volúmenes del sistema operativo y unidades de datos; no es cifrado selectivo de archivos individuales.'),
    src('https://learn.microsoft.com/en-us/windows/security/book/operating-system-security-encryption-and-data-protection','Microsoft Learn, Windows security book: describe el cifrado de volumen BitLocker y los algoritmos/modos usados en Windows; el alcance depende de volumen y configuración.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 79: cifrado y algoritmos simétricos/asimétricos.'),
    src(a2,'BOE-A-2025-26262, anexo IX, temas II.2 (administración de sistemas operativos Windows) y II.13 (seguridad lógica de sistemas).'),
    src('https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk','ITIC Academy, bloque 27, sistemas operativos Windows/Linux, edición 2026: cotejo del contexto de administración y protección de volúmenes; la función de BitLocker se contrasta con Microsoft Learn.')
  ],{texto:'¿Para qué sirve BitLocker Drive Encryption en Windows?',opciones:[
    'Optimizar el rendimiento de las unidades de almacenamiento.','Cifrar ficheros individuales mediante AES, uno a uno.','Localizar dispositivos extraviados o robados.','Cifrar volúmenes completos, incluidos los del sistema operativo o de datos, para proteger la información almacenada.'
  ],respuesta_correcta:3},'Se conserva D y se precisa el alcance: BitLocker cifra volúmenes completos; no es una función de cifrado individual de archivos ni de localización de dispositivos. Los algoritmos y modos concretos dependen de la versión y configuración de Windows.','corregida'],

  [6773,[55],['II-1'],['computación en la nube','SaaS','software como servicio','correo electrónico','ofimática'],[
    src('https://csrc.nist.gov/glossary/term/software_as_a_service','NIST CSRC, definición de Software as a Service (SaaS), basada en SP 800-145: el consumidor utiliza aplicaciones del proveedor que se ejecutan en infraestructura cloud; no administra la infraestructura subyacente.'),
    src('https://csrc.nist.gov/pubs/sp/800/145/final','NIST SP 800-145, The NIST Definition of Cloud Computing: definiciones de SaaS, PaaS e IaaS y sus diferencias de responsabilidad/control.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 55: computación en nube; IaaS, PaaS y SaaS.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema II.1: computación en la nube, componentes, funcionalidades y capacidades.'),
    src('https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view?usp=drivesdk','ITIC Academy, bloque 25, Cloud Computing, edición 2026: cotejo de IaaS/PaaS/SaaS y servicios de usuario; la definición se contrasta con NIST SP 800-145.')
  ],{texto:'¿En qué modelo de servicio cloud se ofrecen habitualmente aplicaciones completas como correo electrónico web o paquetes ofimáticos en línea?',opciones:[
    'IaaS (infraestructura como servicio).','PaaS (plataforma como servicio).','SaaS (software como servicio).','HaaS (hardware como servicio).'
  ],respuesta_correcta:2},'Se conserva C. En SaaS el consumidor utiliza aplicaciones del proveedor ejecutadas sobre infraestructura cloud; el proveedor gestiona la aplicación y la infraestructura subyacente, con posibles ajustes limitados del usuario.','corregida'],

  [6774,[114],['IV-11'],['SSID','IEEE 802.11','redes inalámbricas','WLAN','identificador de red'],[
    src('https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-lltd/364f7ef1-798f-4f46-93be-af7c154092a3','Microsoft Open Specifications, MS-LLTD, atributo SSID: identifica la red WLAN asociada al punto de acceso, se trata como sensible a mayúsculas/minúsculas y su longitud máxima es 32 caracteres en la representación de este protocolo.'),
    src('https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-qdp/b599bfb4-7c76-4ab9-b606-9da707588f7b','Microsoft Open Specifications, MS-QDP: la longitud del SSID se expresa en octetos y el máximo del campo es 32 octetos.'),
    src('https://standards.ieee.org/ieee/802.11/7028/','IEEE Std 802.11, estándar de redes LAN inalámbricas: formato y límite del campo SSID (máximo 32 octetos).'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 114: redes inalámbricas IEEE 802.11, características, modos y seguridad.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema IV.11: redes inalámbricas, protocolos, características y seguridad.'),
    src('https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk','ITIC Academy, bloque 46, redes inalámbricas, edición 2026: cotejo curricular del SSID y IEEE 802.11; las propiedades del campo se verifican en las especificaciones IEEE/Microsoft.')
  ],{texto:'Respecto del SSID de una red IEEE 802.11, señale la afirmación correcta.',opciones:[
    'El campo SSID tiene una longitud máxima de 32 octetos.','No puede contener caracteres numéricos.','No distingue entre mayúsculas y minúsculas.','Identifica individualmente a cada dispositivo cliente conectado, no a la red.'
  ],respuesta_correcta:0},'Se conserva A y se cambia «32 caracteres» por «32 octetos», que es la unidad del campo en IEEE 802.11. El SSID identifica la red; puede incluir cifras y las especificaciones citadas indican que se trata como sensible a mayúsculas/minúsculas.','corregida'],

  [6775,[7,8],['I-8'],['Ley 39/2015','artículo 37','inderogabilidad singular de los reglamentos','resolución administrativa particular','disposición general'],[
    src('https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565','BOE, Ley 39/2015, texto consolidado vigente consultado, artículo 37: las resoluciones particulares no pueden vulnerar disposiciones generales, incluso si proceden de órgano de igual o superior jerarquía.'),
    src('https://www.boe.es/buscar/pdf/2015/BOE-A-2015-10565-consolidado.pdf','BOE, texto consolidado de la Ley 39/2015, artículo 37, «Inderogabilidad singular»: formulación legal de la regla preguntada.'),
    src(a1,'BOE-A-2025-25938, anexo I, temas 7–8: fuentes y jerarquía del Derecho administrativo, límites de los reglamentos y procedimiento administrativo.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema I.8: Leyes de Procedimiento Administrativo Común y de Régimen Jurídico del Sector Público.'),
    src('https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk','ITIC Academy, bloque 03, Actuación Administrativa, edición 2026: cotejo curricular de los actos administrativos y la Ley 39/2015; la denominación exacta se contrasta con el artículo 37 del BOE.')
  ],{texto:'El artículo 37 de la Ley 39/2015 prohíbe que una resolución particular vulnere una disposición general, incluso si procede de un órgano de igual o superior jerarquía. ¿Cómo se denomina este principio?',opciones:[
    'Reserva de ley.','Jerarquía normativa.','Inderogabilidad singular de los reglamentos.','Irretroactividad de las disposiciones sancionadoras no favorables.'
  ],respuesta_correcta:2},'Se conserva C. La regla del artículo 37 de la Ley 39/2015 se denomina inderogabilidad singular: una resolución administrativa particular no puede excepcionar para un caso concreto lo establecido en una disposición general.','corregida']
]});
