const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const src={
 usb2:'https://www.usb.org/document-library/usb-20-specification',
 usb3:'https://www.usb.org/sites/default/files/documents/cabconn_legacy_3_1_compliance_rev_1_1.pdf',
 drivers:'https://learn.microsoft.com/en-us/windows-hardware/drivers/usbcon/supported-usb-classes',
 io:'https://www.ecs.csun.edu/~cputnam/Comp546/Input-Output-Web.pdf',
 tb3:'https://www.thunderbolttechnology.net/sites/default/files/Thunderbolt3_TechBrief_FINAL.pdf',
 fw:'https://ieee1394.docs.kernel.org/en/latest/specifications.html',
 fwStd:'https://ieeexplore.ieee.org/document/526693',
 firmware:'https://csrc.nist.gov/pubs/sp/800/193/final',
 firmwareGlossary:'https://csrc.nist.gov/glossary/term/firmware',
 byod:'https://csrc.nist.gov/pubs/sp/800/124/r2/final',
 byodGlossary:'https://csrc.nist.gov/glossary/term/bring_your_own_device'
};
const refs=(items)=>items;
const records=[
[7041,[54],['II-1'],['USB','USB 2.0','señalización diferencial','controladores de clase'],refs([
 {url:src.usb2,referencia:'USB-IF, USB 2.0 Specification, §§7.1 y 7.1.11: define las velocidades Low-Speed 1,5 Mbit/s, Full-Speed 12 Mbit/s y High-Speed 480 Mbit/s; el par D+/D− transporta señalización diferencial y la sincronización se codifica en la transmisión conforme al formato de paquete.'},
 {url:src.usb3,referencia:'USB-IF, USB 3.1 compliance document, tabla de velocidades: confirma USB Full-Speed 12 Mbit/s y SuperSpeed USB 5 Gbit/s.'},
 {url:src.drivers,referencia:'Microsoft Learn, USB device class drivers included in Windows: para clases soportadas el sistema puede cargar automáticamente un controlador de clase; si este no implementa toda la funcionalidad, el fabricante puede proporcionar uno complementario.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 54: dispositivos personales, conectividad y medidas de seguridad/gestión.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema II-1: tecnologías y componentes actuales de ordenadores y dispositivos móviles.'}
]),{texto:'Sobre el funcionamiento de USB, señale la afirmación falsa:',opciones:[
 'Para dispositivos de una clase USB soportada, el sistema puede cargar automáticamente un controlador de clase; algunas funciones pueden requerir un controlador complementario.',
 'USB 2.0 utiliza señalización no diferencial y transmite la sincronización por una señal física separada de los datos.',
 'USB 1.1 contempla las velocidades Low-Speed de 1,5 Mbit/s y Full-Speed de 12 Mbit/s; USB 2.0 añadió High-Speed de 480 Mbit/s.'
],respuesta_correcta:1},'Corregida B. La formulación original era falsa en lo sustancial, pero se especificó qué se transmite por separado: USB 2.0 emplea el par diferencial D+/D− y lleva la sincronización codificada en la secuencia del paquete, no por un conductor físico independiente. Las velocidades del tercer enunciado son tasas nominales de señalización. La afirmación sobre drivers se acotó a clases soportadas: no todos los dispositivos USB funcionan sin software específico.', 'corregida'],
[7042,[59],['II-2','IV-1'],['E/S','E/S programada','interrupciones','DMA','modos de transferencia'],refs([
 {url:src.io,referencia:'California State University, Northridge, Computer Organization & Architecture, capítulo Input/Output: distingue las tres técnicas principales de E/S: programada, dirigida por interrupciones y acceso directo a memoria (DMA). Los canales de E/S son una arquitectura/procesador de E/S más especializado.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 59: conceptos y fundamentos de sistemas operativos.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, temas II-2 (fundamentos de SO) y IV-1 (administración del sistema operativo y software de base).'}
]),{texto:'En la clasificación general de las técnicas para realizar transferencias de entrada/salida entre el procesador, la memoria y los periféricos, ¿qué opción enumera los tres modos básicos?',opciones:[
 'E/S programada, acceso directo a memoria (DMA) y ciclo robado.',
 'E/S programada, E/S dirigida por interrupciones y acceso directo a memoria (DMA).',
 'Memoria multipuerta, consulta cíclica (polling) e interrupciones vectorizadas.',
 'Canal selector, canal multiplexor y memoria multipuerta.'
],respuesta_correcta:1},'Corregida B. La taxonomía general distingue E/S programada, E/S dirigida por interrupciones y DMA. Los canales de E/S, el robo de ciclo y las memorias multipuerta son mecanismos o características de arquitecturas concretas; mezclarlos con los tres modos básicos hacía ambigua la alternativa A original.', 'corregida'],
[7043,[54],['II-1'],['FireWire','IEEE 1394','USB','Thunderbolt','velocidad de transferencia'],refs([
 {url:src.fw,referencia:'Documentación del subsistema FireWire de Linux, apartado IEEE 1394-2008: identifica S1600 como 1,6 Gbit/s y S3200 como 3,2 Gbit/s; las denominaciones S800 y S1600 expresan tasas en Mbit/s.'},
 {url:src.fwStd,referencia:'IEEE Std 1394-1995, ficha de la norma de bus serie de altas prestaciones; la documentación IEEE 1394 relaciona las generaciones y sus tasas nominales.'},
 {url:src.usb2,referencia:'USB-IF, USB 2.0 Specification, velocidades Low-, Full- y High-Speed: 1,5, 12 y 480 Mbit/s, respectivamente.'},
 {url:src.usb3,referencia:'USB-IF, USB 3.1 compliance document, §velocidades de señalización: SuperSpeed USB tiene tasa de señalización de 5 Gbit/s, equivalente a 625 MB/s antes de codificación/protocolo.'},
 {url:src.tb3,referencia:'Thunderbolt Technology, Thunderbolt 3 Tech Brief: enlace Thunderbolt 3 de hasta 40 Gbit/s; 40 Gbit/s / 8 = 5.000 MB/s como conversión aritmética nominal, no caudal útil garantizado.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 54: conectividad de dispositivos personales.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema II-1: componentes, funcionalidades y capacidades de ordenadores y dispositivos.'}
]),{texto:'¿Qué equivalencia es falsa al convertir una tasa nominal de señalización de bits a bytes decimales (1 byte = 8 bits), sin interpretarla como caudal útil de aplicación?',opciones:[
 'FireWire S800: 800 Mbit/s, equivalentes a 100 MB/s.',
 'USB Full-Speed: 12 Mbit/s, equivalentes a 1,5 MB/s.',
 'Thunderbolt 3: hasta 40 Gbit/s, equivalentes a 1.800 MB/s.',
 'USB 3.0 (SuperSpeed): 5 Gbit/s, equivalentes a 625 MB/s.'
],respuesta_correcta:2},'Corregida C. Las cifras se normalizaron por generación y unidad para que exista una sola respuesta. FireWire S800 equivale nominalmente a 100 MB/s; USB Full-Speed 12 Mbit/s a 1,5 MB/s; USB 3.0/SuperSpeed 5 Gbit/s a 625 MB/s. Thunderbolt 3 alcanza hasta 40 Gbit/s, es decir 5.000 MB/s en conversión decimal simple, no 1.800 MB/s. Estas conversiones no representan el caudal útil, que es inferior por codificación y protocolos.', 'corregida'],
[7044,[54],['II-1'],['firmware','hardware','software embebido'],refs([
 {url:src.firmware,referencia:'NIST SP 800-193, Platform Firmware Resiliency Guidelines: firmware es software que proporciona control de bajo nivel al hardware de un dispositivo y se conserva en memoria no volátil.'},
 {url:src.firmwareGlossary,referencia:'NIST CSRC Glossary, firmware: programas y datos almacenados en hardware, normalmente en ROM o memoria programable; las definiciones y posibilidades de modificación dependen del contexto.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 54: dispositivos personales, componentes y conectividad.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema II-1: componentes y funcionalidades tecnológicas de ordenadores y dispositivos.'}
]),undefined,'Vigente D. Firmware es software de bajo nivel almacenado en memoria no volátil que controla o inicializa hardware. El término no significa que el mismo código sea común a todos los ordenadores ni que sea físicamente el componente que ejecuta instrucciones. La memoria puede ser actualizable o no según el dispositivo; no se generaliza sobre ello.', 'vigente'],
[7045,[54,125],['IV-15'],['BYOD','dispositivos móviles','seguridad móvil','propiedad del dispositivo'],refs([
 {url:src.byod,referencia:'NIST SP 800-124 Rev. 2, Guidelines for Managing the Security of Mobile Devices in the Enterprise: cubre el despliegue empresarial de dispositivos móviles personales y corporativos, con consideraciones de seguridad, política y gestión.'},
 {url:src.byodGlossary,referencia:'NIST CSRC Glossary, Bring Your Own Device (BYOD): entrada terminológica que remite, entre otras, a NIST SP 800-124 Rev. 2; el uso de dispositivos personales en el entorno empresarial depende del contexto de la publicación.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, temas 54 (dispositivos personales y móviles) y 125 (medidas específicas para comunicaciones móviles).'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema IV-15: comunicaciones móviles y soluciones de gestión MDM, EMM y UEM.'}
]),{texto:'En el contexto de las políticas de movilidad empresarial, ¿qué describe el modelo BYOD (Bring Your Own Device)?',opciones:[
 'La organización compra y es propietaria de todos los dispositivos que entrega al personal.',
 'El personal elige un dispositivo de un catálogo corporativo, pero la organización lo compra y gestiona.',
 'El personal utiliza un dispositivo de su propiedad para acceder, bajo las condiciones y controles establecidos, a recursos de la organización.',
 'El personal puede conectar cualquier dispositivo a los recursos corporativos sin política, autorización ni controles de seguridad.'
],respuesta_correcta:2},'Corregida C. Se sustituyó una pregunta sobre supuestos beneficios/costes —que dependen de la política, el soporte y el contexto— por la definición del modelo: la persona aporta un dispositivo de su propiedad para uso laboral, sujeto a condiciones de acceso y controles acordados. BYOD no significa acceso irrestricto y debe gestionarse con políticas y medidas de seguridad adecuadas.', 'corregida']
];
aplicar({numero:'1344',fecha:'2026-11-15',records});
