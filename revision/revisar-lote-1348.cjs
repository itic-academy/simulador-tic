const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const src={
 peripheral:'https://learn.microsoft.com/en-us/windows-hardware/drivers/spb/spb-device-stacks',
 usb:'https://www.usb.org/sites/default/files/usb_3_1_language_product_and_packaging_guidelines_final_0.pdf',
 usbCompliance:'https://www.usb.org/sites/default/files/CabConn_Legacy_3_1_Compliance_Rev_1_1.pdf',
 mips:'https://www.ibm.com/support/pages/system/file/inline-files/SC28118725.pdf',
 nist:'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf',
 intune:'https://learn.microsoft.com/en-us/intune/device-security/endpoint-security-devices',
 intuneActions:'https://learn.microsoft.com/en-us/mem/intune/remote-actions/device-supervised-mode',
 android:'https://support.google.com/work/android/answer/14772109?hl=en'
};
const records=[
[7061,[54],['II-1'],['periférico','controlador','dispositivo de E/S'],[
 {url:src.peripheral,referencia:'Microsoft Learn, SPB Device Stacks: distingue el controlador del dispositivo periférico en un bus; el controlador de bus transfiere datos/control y el controlador funcional administra el periférico. Es un modelo de separación lógica, aunque componentes puedan integrarse físicamente.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 54: dispositivos personales PC y componentes.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema II-1: componentes, funcionalidades y capacidades de ordenadores.'}
],{texto:'En el modelo lógico convencional de entrada/salida de un ordenador, ¿qué dos elementos se distinguen para conectar un periférico?',opciones:[
 'Las señales de control y el acceso directo a memoria (DMA).','Las señales de dirección y de datos.','La E/S y el acceso directo a memoria (DMA).','El dispositivo periférico y el controlador que lo gestiona.'
],respuesta_correcta:3},'Corregida D. La terminología original podía sugerir que todo periférico tiene un controlador físico separado; el modelo distingue lógicamente el dispositivo y el controlador, aunque este pueda integrarse en otro componente. Microsoft documenta la separación entre función del periférico y controlador del bus.', 'corregida'],
[7062,[54],['II-1'],['USB 3.0','SuperSpeed USB','5 Gbit/s','USB 2.0','480 Mbit/s'],[
 {url:src.usb,referencia:'USB-IF, USB 3.1 Language Usage Guidelines: USB 3.1 Gen 1 es sinónimo de USB 3.0, señalado a 5 Gbit/s; USB 2.0 High-Speed opera a 480 Mbit/s. El cociente bruto es aproximadamente 10,4.'},
 {url:src.usbCompliance,referencia:'USB-IF Legacy Cable & Connector Compliance: define SuperSpeed a 5 Gbit/s y High-Speed a 480 Mbit/s. Son tasas de señalización nominales, no caudal útil.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 54: conectividad de dispositivos personales.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema II-1: tecnologías y componentes de ordenador.'}
],{texto:'¿Cuál es la comparación aproximada entre la tasa nominal de señalización de USB 3.0 (SuperSpeed, primera generación) y la de USB 2.0 High-Speed?',opciones:[
 'Similar: ambas rondan 480 Mbit/s.','USB 3.0 alcanza aproximadamente diez veces la tasa nominal de USB 2.0 (5 Gbit/s frente a 480 Mbit/s).','USB 3.0 funciona a 480 Mbit/s.','USB 3.0 es quince veces más rápido que USB 2.0.'
],respuesta_correcta:1},'Corregida B. USB 3.0 corresponde a SuperSpeed de 5 Gbit/s y USB 2.0 High-Speed a 480 Mbit/s; la proporción de tasas nominales es 5.000/480 ≈ 10,4, de ahí «aproximadamente diez veces». No equivale a que el caudal útil de todas las transferencias sea exactamente 10×: hay codificación y sobrecarga de protocolo.', 'corregida'],
[7063,[54],['II-1'],['MIPS','millones de instrucciones por segundo','rendimiento de CPU'],[
 {url:src.mips,referencia:'IBM, LSPR Document SC28-1187, §Metrics: MIPS significa millones de instrucciones por segundo y expresa una tasa de ejecución; IBM advierte que es un comparador cada vez menos preciso para arquitecturas y cargas distintas.'},
 {url:'https://www.ibm.com/redbooks/pdfs/sg246327.pdf',referencia:'IBM Redbooks, ABCs of z/OS System Programming vol. 11, §2.18: desarrolla el significado de MIPS y las limitaciones de comparar máquinas sólo mediante esta cifra.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 54: arquitectura y prestaciones de ordenadores personales.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema II-1: arquitecturas y capacidades de los ordenadores.'}
],{texto:'¿Qué expresa la métrica MIPS en su significado clásico?',opciones:[
 'La cantidad de instrucciones que un procesador ejecuta en un segundo, expresada en millones.','La cantidad de instrucciones ejecutada en miles por segundo.','La potencia de cálculo científico en operaciones de coma flotante.','La capacidad de generar gráficos por segundo.'
],respuesta_correcta:0},'Corregida A. MIPS significa millions of instructions per second, millones de instrucciones por segundo, no miles. Es una tasa clásica de ejecución, pero no permite comparar fielmente procesadores distintos sin controlar ISA, carga y otros factores; IBM desaconseja tratarla como medida universal de rendimiento.', 'corregida'],
[7064,[54],['IV-15'],['MDM','gestión de dispositivos móviles','EMM','UEM'],[
 {url:src.nist,referencia:'NIST SP 800-124 Rev. 2, §5: describe herramientas EMM para imponer controles de seguridad y administrar dispositivos móviles corporativos y personales; §4.3 incluye borrado remoto de datos/aplicaciones empresariales.'},
 {url:src.intune,referencia:'Microsoft Learn, Manage devices with endpoint security in Intune: documenta acciones remotas de bloqueo, borrado/restablecimiento y retirada de datos corporativos. La disponibilidad depende de plataforma y configuración.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 54: medidas de seguridad y gestión de dispositivos personales y móviles.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema IV-15: sistemas de gestión de dispositivos móviles MDM/EMM/UEM.'}
],{texto:'¿Qué tecnología se utiliza específicamente para administrar centralizadamente dispositivos móviles como teléfonos y tabletas en una organización?',opciones:[
 'MDM (Mobile Device Management).','BYOD, que es un sistema de administración técnica.','MAM, que administra exclusivamente dispositivos físicos y no aplicaciones.','TCP, que es una plataforma de gestión de terminales.'
],respuesta_correcta:0},'Corregida A. Se cambió «garantiza» —ningún producto garantiza por sí solo la seguridad— por una pregunta sobre el propósito de MDM. MDM administra dispositivos móviles; MAM se centra en aplicaciones/datos, BYOD describe un modelo de uso/propiedad y TCP es un protocolo de transporte.', 'corregida'],
[7065,[54],['IV-15'],['UEM','borrado remoto','bloqueo remoto','gestión de endpoints'],[
 {url:src.nist,referencia:'NIST SP 800-124 Rev. 2, §4.3.3: EMM puede ordenar borrado remoto completo o selectivo; en BYOD suele borrarse sólo el contenido corporativo, y la función depende de configuración, plataforma y conectividad.'},
 {url:src.intuneActions,referencia:'Microsoft Intune, Device Actions: documenta Remote Lock, Retire (quita datos y configuración empresariales conservando datos personales) y Wipe (restablece a fábrica); acciones disponibles según plataforma y enrolamiento.'},
 {url:src.android,referencia:'Android Enterprise Help: en Work Profile la organización puede borrar o bloquear los datos del perfil de trabajo; la gestión de todo el dispositivo depende del modo de administración.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 54: gestión y seguridad de dispositivos móviles.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema IV-15: soluciones MDM/EMM/UEM.'}
],{texto:'En un dispositivo móvil administrado con UEM, ¿qué acción puede ofrecerse ante su pérdida, según plataforma, enrolamiento y configuración?',opciones:[
 'Bloquear el dispositivo o retirar/borrar datos corporativos; un borrado completo depende del modo de administración y no se garantiza que el equipo quede inutilizado.','Borrar datos corporativos e inutilizar de forma permanente cualquier dispositivo, en todos los sistemas y modos de gestión.','Inutilizarlo, pero nunca borrar remotamente datos de trabajo.','Sólo localizarlo; el bloqueo y borrado remotos no forman parte de la gestión unificada.'
],respuesta_correcta:0},'Corregida A. La opción original afirmaba universalmente que se puede borrar la información corporativa e «inutilizar» el dispositivo. Las herramientas UEM/EMM pueden bloquearlo, retirar selectivamente datos corporativos o ejecutar un wipe completo, pero esto varía según plataforma, propiedad, enrolamiento, conectividad y política; el borrado no garantiza una inutilización permanente. NIST y la documentación de Intune/Android detallan esas diferencias.', 'corregida']
];
aplicar({numero:'1348',fecha:'2026-11-15',records});
