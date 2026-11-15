const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
apply({numero:'1286',fecha:'2026-11-15',records:[
  [6751,[53],['IV-6'],['CPD','refrigeración','expansión directa','condensador','climatización'],[
    src('https://www.energy.gov/sites/default/files/2024-07/best-practice-guide-data-center-design.pdf','U.S. Department of Energy, Best Practices Guide for Energy-Efficient Data Center Design, §5.1: identifica sistemas de expansión directa (DX) en centros pequeños y explica que el condensador refrigerado por aire rechaza al exterior el calor del refrigerante.'),
    src('https://www.itu.int/epublications/es/publication/itu-t-l-1327-2024-08-guidelines-on-the-selection-of-cooling-technologies-for-data-centres-in-multiple-scenarios/en','ITU-T L.1327 (08/2024), apartado de sistemas de expansión directa: describe el ciclo con compresor, condensador, válvula de expansión y evaporador en sistemas de refrigeración de centros de datos.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 53: diseño, implantación y gestión de centros de proceso de datos.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema IV.6: planificación física, dimensionamiento y protección de centros de procesamiento de datos.'),
    src('https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk','ITIC Academy, bloque 26, Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026: cotejo curricular de sistemas de climatización y gestión de CPD; la clasificación técnica DX se verifica con DOE/ITU.')
  ],{texto:'En un CPD se instala una climatización tipo split: el condensador exterior expulsa al ambiente el calor absorbido por el refrigerante y el evaporador interior enfría el aire recirculado. ¿Qué tecnología describe?',opciones:[
    'Refrigeración por condensación en torre de refrigeración.','Entrega de aire a baja presión.','Sistema de expansión directa (DX).','Técnica de pasillo frío/caliente.'
  ],respuesta_correcta:2},'Se conserva C. En un equipo DX el evaporador enfría directamente el aire de la sala mediante el ciclo frigorífico, mientras el condensador exterior rechaza el calor al ambiente. No es una torre de refrigeración ni una disposición de pasillos; se acota el enunciado para que la descripción corresponda inequívocamente al sistema split DX.','corregida'],

  [6752,[31],['I-9'],['datos abiertos','portal municipal','descarga sin registro','RISP','reutilización'],[
    src('https://datos.madrid.es/pages/preguntas-frecuentes-sobre-datos-abiertos','Ayuntamiento de Madrid, FAQ del Portal de Datos Abiertos: indica que los conjuntos disponibles pueden consultarse, descargarse y utilizarse sin registrarse.'),
    src('https://datos.madrid.es/dataset/','Ayuntamiento de Madrid, catálogo de conjuntos de datos: ofrece fichas de conjuntos y formatos descargables.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 31: reutilización de información del sector público, datos abiertos y transparencia.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema I.9: acceso electrónico a las Administraciones, datos abiertos y reutilización de información pública.'),
    src('https://drive.google.com/file/d/17B9a1yxMFgHCHEyVVBi0PG-cdCYABVvd/view?usp=drivesdk','ITIC Academy, bloque 11, RISP, datos abiertos y transparencia, actualización 2026: cubre A1-31 y A2-I.9; cotejo curricular.')
  ],{texto:'Según la información vigente del Portal de Datos Abiertos del Ayuntamiento de Madrid, ¿cómo se accede normalmente a los conjuntos de datos publicados?',opciones:[
    'Hay que ejercer previamente el derecho de acceso conforme a la Ley 19/2013.','Es obligatorio identificarse electrónicamente según la Ley 39/2015.','Pueden consultarse y descargarse sin registrarse desde el portal, sin presentar una solicitud individual de acceso a información pública.'
  ],respuesta_correcta:2},'Se conserva C y se sustituye su formulación absoluta sobre controles de acceso por la regla que publica el propio portal: para consultar y descargar sus conjuntos abiertos no hace falta registrarse ni presentar una solicitud individual bajo la Ley 19/2013. Esto no significa que todo recurso municipal sea abierto ni elimina las condiciones de reutilización aplicables a cada conjunto.','corregida'],

  [6753,[60],['II-2'],['Linux','montaje','sistema de archivos','remount','modo lectura-escritura'],[
    src('https://man7.org/linux/man-pages/man8/mount.8.html','Linux man-pages, mount(8): documenta `mount -o remount,rw /` para volver a montar en lectura/escritura un punto ya montado.'),
    src('https://man7.org/linux/man-pages/man2/mount.2.html','Linux man-pages, mount(2): describe el cambio de opciones de un sistema de archivos montado y los requisitos/errores de la operación.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 60: administración y gestión de sistemas operativos Unix/Linux.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema II.2: características y administración de Linux/Unix.'),
    src('https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk','ITIC Academy, bloque 27, sistemas operativos, Unix/Linux y administración; cotejo curricular.')
  ],{texto:'En una shell de recuperación de Linux, la raíz ya está montada en solo lectura y se ha comprobado que es seguro intentar repararla. ¿Qué comando solicita volver a montarla en lectura/escritura?',opciones:[
    'mount r w /','remount rw /','mount -o remount,rw /','sync rw'
  ],respuesta_correcta:2},'Se conserva C y se corrige la errata de espaciado en la opción. La forma documentada por mount(8) es `mount -o remount,rw /`; las otras alternativas no expresan la sintaxis de la utilidad. En una recuperación real, no debe forzarse escritura sin comprobar el estado del sistema de archivos y la causa del arranque fallido.','corregida'],

  [6754,[43],['II-14'],['software libre','cuatro libertades','libertad 0','FSF','licencias'],[
    src('https://www.gnu.org/philosophy/free-sw.html','Free Software Foundation, definición de software libre, libertad 0: ejecutar el programa como se desee, para cualquier propósito; las libertades 1–3 cubren estudiar/modificar, redistribuir copias y distribuir versiones modificadas.'),
    src('https://www.gnu.org/philosophy/free-sw.en.html','GNU Project, explicación de las cuatro libertades: en la libertad de ejecución importa el propósito del usuario, no el que fijó el desarrollador.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 43: protección jurídica de programas de ordenador.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema II.14: software libre, licencias y protección jurídica de programas.'),
    src('https://drive.google.com/file/d/1MjRX0kL8jEBZwHIpUag4NyJJnh_VGsVG/view?usp=drivesdk','ITIC Academy, tema 43, Protección jurídica de programas de ordenador: incluye el encaje A1-43/A2-II.14; la formulación de las libertades se contrasta con la FSF.')
  ],{texto:'La definición de software libre implica cuatro libertades. Indique la afirmación INCORRECTA:',opciones:[
    'La libertad de ejecutar el programa únicamente para el propósito que decidió su desarrollador.','La libertad de estudiar cómo funciona el programa y modificarlo para que realice la computación que el usuario necesita.','La libertad de distribuir copias del programa para ayudar a otros usuarios.','La libertad de distribuir versiones modificadas del programa.'
  ],respuesta_correcta:0},'Se conserva A como respuesta incorrecta y se hace explícita la restricción. La libertad 0 permite ejecutar el programa para cualquier propósito: el propósito pertinente es el del usuario, no uno impuesto por quien lo desarrolló. Las demás opciones resumen las libertades de estudio/modificación, redistribución de copias y distribución de versiones modificadas.','corregida'],

  [6755,[125],['II-13'],['spoofing','suplantación','ataques de red','firewall','proxy'],[
    src('https://csrc.nist.gov/glossary/term/spoofing','NIST CSRC Glossary, spoofing: intento de obtener acceso haciéndose pasar por un usuario autorizado; incluye suplantación/masquerading.'),
    src('https://www.rfc-editor.org/rfc/rfc2993','IETF RFC 2993, §9: advierte que NAT puede crear una falsa impresión de barrera de seguridad y no sustituye a un cortafuegos con una política de seguridad gestionada.'),
    src('https://csrc.nist.gov/glossary/term/firewall','NIST CSRC Glossary, firewall: dispositivo o programa que controla el flujo de tráfico de red según una política de seguridad.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 125: ataques y herramientas para proteger redes, incluidos cortafuegos y control de accesos.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema II.13: seguridad física y lógica, herramientas de ciberseguridad e incidentes.'),
    src('https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk','ITIC Academy, bloque 48, Seguridad en redes y en el nivel de aplicación, edición 2026: incluye ataques, cortafuegos, control de accesos y seguridad lógica; cotejo curricular.')
  ],{texto:'¿Cuál de los siguientes es un ataque de suplantación de identidad o de origen, y no un control de seguridad de red?',opciones:[
    'Spoofing','Firewall','NAT','Proxy'
  ],respuesta_correcta:0},'Se conserva A y se reformula el criterio para evitar la ambigüedad original: NAT traduce direcciones, pero no es por sí mismo una barrera de seguridad; el RFC 2993 advierte expresamente de la falsa sensación de protección. La pregunta ahora identifica específicamente un ataque de suplantación: spoofing. Cortafuegos y proxies pueden formar parte de controles de seguridad, según su configuración y función.','corregida']
]});
