const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const src={
 updates:'https://learn.microsoft.com/en-us/sccm/sum/understand/software-updates-introduction',
 btPrint:'https://learn.microsoft.com/en-us/windows-hardware/drivers/print/bluetooth-printing',
 wifiDirect:'https://support.hp.com/gb-en/document/ish_6044267-2906805-16',
 otg:'https://www.usb.org/usb-on-the-go',
 memory:'https://www.renesas.com/en/document/apn/nor-flash-memory-erase-operation?r=1608931',
 memoryM:'https://www.micron.com/content/dam/micron/educatorhub/intro-to-memory/micron-intro-to-memory-presentation.pdf',
 pci:'https://pcisig.com/specifications',
 ata:'https://www.t13.org/node/1',
 agp:'https://www.intel.com/content/dam/doc/datasheet/875p-chipset-datasheet.pdf',
 pcmcia:'https://www.ti.com/sc/docs/products/msp/intrface/pci/tech.htm',
 isa:'https://people.osmocom.org/laforge/tmp/Intel_ISA_Spec2.01_Sep89.pdf',
 buses:'https://pub.deadnet.se/Books_and_manuals_on_various_stuff/Science/Electronics/Dandamudi%20-%20Fundamentals%20of%20Computer%20Organization%20and%20Design%20%28Springer%2C%202005%29.pdf'
};
const records=[
[7051,[61],['IV-1'],['gestión de actualizaciones','Windows Update Agent','WSUS','cliente/agente'],[
 {url:src.updates,referencia:'Microsoft Learn, Introduction to software updates: el Software Updates Client Agent inicia exploraciones programadas y el Windows Update Agent (WUA) del cliente contacta con WSUS para obtener metadatos; el cliente gestiona la detección y descarga según la directiva.'},
 {url:'https://learn.microsoft.com/en-us/windows-server/administration/windows-server-update-services/plan/plan-your-wsus-deployment',referencia:'Microsoft Learn, Plan Your WSUS Deployment: Automatic Updates sondea periódicamente el servidor WSUS configurado y descarga las actualizaciones aprobadas según su política.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 61: fundamentos, administración, instalación y gestión de sistemas operativos Microsoft.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema IV-1: administración del sistema operativo y software de base.'}
],{texto:'En una herramienta de gestión de actualizaciones cuya arquitectura instala en cada equipo un componente local que consulta periódicamente un servidor central, ¿cómo se denomina el modelo?',opciones:[
 'Basado en cliente/agente: el endpoint ejecuta el componente que consulta el servidor y gestiona la detección o descarga conforme a la política.','Basado exclusivamente en servidor: el endpoint no ejecuta un componente de actualización ni inicia consultas.','Basado en seguridad: nombre de una arquitectura de comunicación que no especifica dónde se ejecuta el cliente de actualización.','Basado en almacenamiento: el servidor sólo conserva copias de seguridad y no distribuye metadatos ni actualizaciones.'
],respuesta_correcta:0},'Corregida A. «Basado en cliente» y «basado en agente» se usan aquí para describir el mismo patrón —un componente local consulta al servidor—, por lo que eran alternativas equivalentes en la pregunta original. Se fusionan en una opción y se explicita el comportamiento que define la arquitectura. Microsoft documenta este patrón con Software Updates Client Agent y Windows Update Agent conectándose a WSUS.', 'corregida'],
[7052,[54],['II-1'],['impresión inalámbrica','Bluetooth','Wi-Fi Direct','impresoras'],[
 {url:src.btPrint,referencia:'Microsoft Learn, Bluetooth Printing: una impresora que admite impresión Bluetooth debe implementar el perfil de impresión requerido; Windows contempla Bluetooth como bus de impresión, pero el simple emparejamiento no basta.'},
 {url:src.wifiDirect,referencia:'HP Support, Set up HP Wi-Fi Direct printing: muestra la conexión directa de un equipo Windows a una impresora compatible con Wi-Fi Direct y el proceso de impresión.'},
 {url:'https://www.hp.com/us-en/tech-takes/printers/glossary/printer-connectivity.html',referencia:'HP, Printer Connectivity: Wi-Fi Direct conecta directamente un equipo a una impresora compatible; algunas impresoras usan Bluetooth LE sólo para facilitar la configuración, no para transferir trabajos de impresión.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 54: dispositivos personales de PC, conectividad y periféricos.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema II-1: tecnologías y componentes de ordenadores y dispositivos.'}
],{texto:'¿Qué tecnologías pueden permitir imprimir desde un PC a una impresora sin conexión cableada, si ambos equipos y el modelo de impresora admiten el modo de impresión correspondiente?',opciones:[
 'Bluetooth, cuando la impresora implementa un perfil de impresión compatible; el emparejamiento Bluetooth por sí solo no garantiza que permita imprimir.','Wi-Fi Direct, en una impresora compatible que ofrece conexión directa al equipo.','Ambas: Bluetooth con el perfil de impresión compatible o Wi-Fi Direct, si los equipos implementan esos modos.','Ninguna; para imprimir siempre es obligatorio un cable USB.'
],respuesta_correcta:2},'Corregida C. La respuesta «ambos» es válida sólo si la impresora y el PC soportan el método de impresión. Se explicitó que Bluetooth LE puede servir únicamente para configuración y que imprimir por Bluetooth requiere el perfil correspondiente; Wi-Fi Direct permite conexión directa en modelos compatibles. Así se evita generalizar que cualquier impresora con radio Bluetooth admite trabajos de impresión.', 'corregida'],
[7053,[54],['II-1'],['USB OTG','USB On-The-Go','host USB','dispositivos móviles'],[
 {url:src.otg,referencia:'USB-IF, USB On-The-Go and Embedded Host Supplement: permite que dispositivos portátiles actúen como host USB para comunicarse con determinados periféricos, además de contemplar conexiones directas entre dispositivos OTG.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 54: dispositivos personales y conectividad.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema II-1: tecnologías de ordenadores y dispositivos móviles.'}
],undefined,'Vigente B. USB OTG significa On-The-Go. El suplemento al estándar USB amplía el uso de dispositivos portátiles como anfitriones USB para determinados periféricos; la clave B es correcta y se mantiene. La capacidad efectiva depende del dispositivo, cableado y roles soportados.', 'vigente'],
[7054,[54],['II-1'],['memoria','celda de memoria','bit','palabra'],[
 {url:src.memory,referencia:'Renesas, NOR Flash Memory Erase Operation, §memory cells: describe la matriz de memoria y señala que la celda elemental de memoria NOR almacena un bit (0 o 1). La pregunta se limita expresamente a una celda binaria SRAM/DRAM, no a celdas Flash multinivel.'},
 {url:src.memoryM,referencia:'Micron, Introduction to Memory: explica que la memoria se organiza en arrays de celdas y distingue bits almacenados, palabras y anchura de datos.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 54: componentes y dispositivos de equipos personales.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema II-1: componentes y funcionalidades de ordenadores.'}
],{texto:'En una memoria binaria SRAM o DRAM, ¿qué almacena una celda elemental de memoria (distinta de una palabra formada por varias celdas)?',opciones:[
 'Un bit.','Una palabra completa en todos los diseños.','Un byte en todos los diseños.','Una unidad de datos lógica de tamaño variable.'
],respuesta_correcta:0},'Corregida A. «Punto de memoria» no es una denominación suficientemente precisa y la respuesta depende de qué nivel de organización se pregunte. Se sustituyó por «celda elemental» y se acotó a una celda binaria SRAM/DRAM: almacena un bit; una palabra agrupa varias posiciones. No se extrapola esta afirmación a toda memoria Flash, cuyas celdas multinivel pueden representar varios bits.', 'corregida'],
[7055,[54],['II-1'],['ISA','PCI','AGP','IDE/ATA','PCMCIA','interfaces de PC'],[
 {url:src.pci,referencia:'PCI-SIG, Specifications: el PCI Local Bus Specification define protocolo y características eléctricas/mecánicas de una interfaz de bus para interconectar componentes de PC.'},
 {url:src.ata,referencia:'INCITS T13, AT Attachment Technical Committee: responsable de estándares de interfaz ATA utilizados como interfaz de almacenamiento en equipos personales y móviles.'},
 {url:src.agp,referencia:'Intel 875P Chipset Datasheet, §5.3: identifica AGP como interfaz gráfica de alta velocidad y remite a la especificación AGP.'},
 {url:src.pcmcia,referencia:'Texas Instruments, PCI CardBus Controllers and PCI Bridges: describe PCMCIA/PC Card como estándar de tarjetas para expansión de ordenadores portátiles.'},
 {url:src.isa,referencia:'Intel ISA Bus Specification and Application Notes, rev. 2.01: define la interfaz paralela ISA derivada del bus de E/S del PC/AT.'},
 {url:src.buses,referencia:'S. Dandamudi, Fundamentals of Computer Organization and Design, capítulo 5: clasifica ISA, PCI, AGP y PCMCIA entre ejemplos de buses de sistema; IDE corresponde específicamente a la interfaz de almacenamiento ATA.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 54: componentes y conectividad de equipos personales.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema II-1: componentes, funcionalidades y capacidades de ordenadores.'}
],{texto:'ISA, PCI, AGP, IDE/ATA y PCMCIA son ejemplos de:',opciones:[
 'Buses o interfaces de interconexión de componentes, almacenamiento y tarjetas de expansión en equipos PC.','Protocolos de aplicación para acceder a servicios de Internet.','Organismos de normalización que publican estándares de hardware.','Sistemas de archivos que especifican cómo se almacenan directorios y ficheros.'
],respuesta_correcta:0},'Corregida A. «Buses internos» era una etiqueta demasiado amplia: IDE/ATA es una interfaz de almacenamiento, PCMCIA/PC Card una interfaz/estándar de tarjetas, y ISA/PCI/AGP son buses o interfaces de expansión con distinto alcance. Se reformuló la pregunta para preguntar por su categoría común precisa: interfaces de interconexión de componentes, almacenamiento o tarjetas de expansión de PC, no por una supuesta equivalencia de diseño.', 'corregida']
];
aplicar({numero:'1346',fecha:'2026-11-15',records});
