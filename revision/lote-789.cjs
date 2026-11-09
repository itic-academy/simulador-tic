const apply = require('./aplicar-lote.cjs');
const f = (url, referencia) => ({url, referencia});

apply({
  numero: '789',
  fecha: '2026-11-09',
  records: [
    [4266,[114],['IV-11'],['Bluetooth','BR/EDR','piconet','Central y Peripherals','IEEE 802.15.1 retirado'],
      [f('https://www.bluetooth.com/wp-content/uploads/Files/Specification/HTML/Core_v7.0/out/en/br-edr-controller/baseband--bb--specification.html','Bluetooth Core Specification 7.0, Part B Baseband §1: un dispositivo BR/EDR actúa como Central y hasta siete Peripherals pueden estar activos en una piconet.'),
       f('https://standards.ieee.org/ieee/802.15.1/3513/','IEEE SA, IEEE 802.15.1-2005: figura como estándar inactivo-retirado desde el 7 de mayo de 2018; se evita presentarlo como norma vigente de Bluetooth.'),
       f('https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk','ITIC Academy, bloque 46 Redes inalámbricas y comunicaciones móviles 2026, A1-114/A2-C9: incluye Bluetooth y sus modos de operación; cotejo curricular.'),
       f('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','Convocatoria A1 2025, BOE-A-2025-25938, anexo I, tema 114: redes inalámbricas, Bluetooth, características funcionales y normativa.')],
      '', 'Se conserva la respuesta piconet y el límite clásico de siete periféricos activos, pero se actualiza el enunciado a la terminología actual de Bluetooth BR/EDR: Central y Peripherals. IEEE 802.15.1 fue una adaptación de versiones tempranas de Bluetooth y está retirado; no se presenta como estándar vigente. La especificación Bluetooth actual mantiene la noción de piconet.', 'corregida'],
    [4267,[108],['IV-7'],['ADSL','bucle de abonado','diafonía','cableado interior','derivaciones'],
      [f('https://www.itu.int/rec/dologin_pub.asp?id=T-REC-G.992.1-199907-I%21%21PDF-E&lang=e&type=items','UIT-T G.992.1, ADSL: la tasa neta máxima depende de las características del bucle metálico y de opciones que afectan a la sobrecarga; el transceptor debe tolerar distintas características del par e interferencias como diafonía y ruido.'),
       f('https://www.itu.int/rec/dologin_pub.asp?id=T-REC-L.19-200010-S%21%21PDF-E&lang=e&type=items','UIT-T L.19, redes de cobre: las derivaciones (bridge taps) pueden degradar las señales ADSL y añaden pérdidas dependientes de la línea.'),
       f('https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk','ITIC Academy, bloque 42 Redes 2026, medios de transmisión, infraestructuras de acceso y xDSL (A1-108/A2-C5); cotejo curricular del acceso por par de cobre.'),
       f('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','Convocatoria A1 2025, BOE-A-2025-25938, anexo I, tema 108: medios de transmisión e infraestructuras de acceso.'),
       f('https://boe.es/diario_boe/txt.php?id=BOE-A-2025-26262','Convocatoria A2 2025, BOE-A-2025-26262, anexo correspondiente, tema IV-7: medios guiados y parámetros significativos.')],
      '', 'Se cambia el enunciado negativo y lógicamente defectuoso por una pregunta afirmativa. La tasa ADSL sobre par de cobre depende de la longitud y características del bucle, de pérdidas/derivaciones —también en la instalación interior— y de interferencias como diafonía y ruido; por tanto, las tres primeras opciones influyen y la respuesta es «Todas las anteriores». ADSL se mantiene como tecnología de acceso histórica, no como acceso fijo predominante en 2026.', 'corregida'],
    [4268,[108,123,129],['IV-11','IV-15'],['5G','Plan Nacional 5G','Plan de Acción 5G UE','RSPG','ETSI','26 GHz','histórico 2016-2020'],
      [f('https://www.digital.gob.es/telecomunicaciones-infraestructuras-digitales/areas-interes/banda-ancha/tecnologias-acceso/acceso-movil/5g/actuaciones-5g-europa','Ministerio para la Transformación Digital, actuaciones 5G en Europa: distingue el Plan de Acción de 5G de la UE (hoja de ruta común) del Plan Nacional 5G español.'),
       f('https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/minetur/Paginas/2017/011217tecnologia-5g.aspx','La Moncloa, 1-12-2017: el Plan Nacional 5G publicado en España se presenta como hoja de ruta nacional.'),
       f('https://digital-strategy.ec.europa.eu/en/policies/radio-spectrum-policy-group','Comisión Europea, Radio Spectrum Policy Group: el RSPG, no ETSI, es el grupo consultivo de alto nivel que asiste a la Comisión en política de espectro; ETSI participa como observador.'),
       f('https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32019D0784','Decisión de Ejecución (UE) 2019/784, art. 1: la obligación de permitir al menos 1 GHz de la banda de 26 GHz se fijó para el 31-12-2020, sujeta a demanda clara y ausencia de restricciones significativas.'),
       f('https://eur-lex.europa.eu/eli/dec_impl/2020/590/oj/eng','Decisión de Ejecución (UE) 2020/590: el 30-6-2020 se refiere a designar y poner a disposición, en base no exclusiva, toda la banda 24,25–27,5 GHz, no al umbral de 1 GHz de la opción.'),
       f('https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk','ITIC Academy, bloque 46 Redes inalámbricas y comunicaciones móviles 2026, A1-123/A2-C13: generaciones móviles y 5G; cotejo curricular.'),
       f('https://drive.google.com/file/d/1yNoGRQ6orxdHGYBQ-RW4lFzaexftWnIm/view?usp=drivesdk','ITIC Academy, bloque 49 Normas reguladoras de las telecomunicaciones 2026, A1-129/A2-C6/C9: normativa de telecomunicaciones y redes inalámbricas; cotejo curricular.'),
       f('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','Convocatoria A1 2025, BOE-A-2025-25938: temas 108, 123 y 129.'),
       f('https://boe.es/diario_boe/txt.php?id=BOE-A-2025-26262','Convocatoria A2 2025, BOE-A-2025-26262: temas IV-11 y IV-15.')],
      '', 'Se acota el reactivo a los marcos iniciales de despliegue 5G (2016–2020). Las tres afirmaciones sustantivas son falsas: confunden la hoja de ruta nacional española con el Plan de Acción europeo, atribuyen al ETSI la función consultiva del RSPG y mezclan el plazo para disponer de al menos 1 GHz (31-12-2020, con condiciones) con el plazo del 30-6-2020 para designar y poner a disposición la banda completa de 24,25–27,5 GHz. Así, «Todas las respuestas son falsas» es inequívocamente la opción correcta.', 'corregida'],
    [4269,[110,118],['IV-8'],['Ethernet','IEEE 802.3','EUI-48','broadcast','FF:FF:FF:FF:FF:FF'],
      [f('https://standards-support.ieee.org/hc/en-us/articles/4888705676564-Guidelines-for-Use-of-Extended-Unique-Identifier-EUI-Organizationally-Unique-Identifier-OUI-and-Company-ID-CID','IEEE Registration Authority, Guidelines for EUI/OUI/CID: el valor EUI-48 compuesto por todos unos es una dirección MAC de grupo IEEE 802 que indica todas las estaciones de la red.'),
       f('https://standards.ieee.org/ieee/802.3/12400/','IEEE SA, estándar IEEE 802.3 para Ethernet; contexto del formato de trama y direccionamiento Ethernet.'),
       f('https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk','ITIC Academy, bloque 42 Redes 2026, Ethernet IEEE 802.3 y redes de área local, A1-118/A2-C6; cotejo curricular.'),
       f('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','Convocatoria A1 2025, BOE-A-2025-25938, anexo I, temas 110 y 118: sistemas de interconexión y redes LAN.'),
       f('https://boe.es/diario_boe/txt.php?id=BOE-A-2025-26262','Convocatoria A2 2025, BOE-A-2025-26262, tema IV-8: redes locales, protocolos y técnicas de transmisión.')],
      '', 'La clave original es correcta: la dirección de difusión de una trama Ethernet con MAC de 48 bits es FF:FF:FF:FF:FF:FF (todos sus bits a uno). Se explicita EUI-48 para diferenciarla de la dirección IPv4 de broadcast 255.255.255.255; no se necesita cambiar la clave.', 'vigente'],
    [4270,[110,118],['IV-8'],['VLAN','IEEE 802.1Q','etiquetado Ethernet','puente VLAN'],
      [f('https://standards.ieee.org/ieee/802.1Q/10323/','IEEE SA, IEEE 802.1Q-2022: especifica el funcionamiento de puentes MAC y puentes VLAN, incluidos sus protocolos y algoritmos.'),
       f('https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk','ITIC Academy, bloque 42 Redes 2026, §4.5 Redes virtuales (VLAN), A1-118/A2-C6; cotejo curricular.'),
       f('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','Convocatoria A1 2025, BOE-A-2025-25938, anexo I, temas 110 y 118: equipos de interconexión y configuración/gestión de VLAN en LAN.'),
       f('https://boe.es/diario_boe/txt.php?id=BOE-A-2025-26262','Convocatoria A2 2025, BOE-A-2025-26262, tema IV-8: protocolos, técnicas y dispositivos de redes locales.')],
      '', 'La clave original es correcta. IEEE 802.1Q es la norma de puentes y redes VLAN; la edición consolidada de referencia es IEEE 802.1Q-2022. 802.1D se asocia históricamente a bridges/STP, 802.1p a prioridad/QoS y 802.2 a LLC.', 'vigente']
  ],
  edits: {
    4266: {
      texto: 'En Bluetooth clásico BR/EDR, ¿cómo se denomina la red formada por un dispositivo Central y hasta siete Peripherals activos?',
      comentarios: 'La topología se denomina piconet. La especificación vigente emplea Central/Peripheral; IEEE 802.15.1-2005 está retirado y no debe presentarse como estándar vigente.'
    },
    4267: {
      texto: '¿De qué factores depende la velocidad disponible de una conexión ADSL sobre un par de cobre?',
      opciones: ['De la longitud y las características eléctricas del bucle de abonado.','De las pérdidas, derivaciones y calidad del cableado de cobre, incluida una instalación interior deficiente.','De la diafonía, el ruido y otras perturbaciones sobre el par.','De todos los factores anteriores.'],
      respuesta_correcta: 3,
      comentarios: 'La tasa ADSL depende de las características del bucle y del ruido/crosstalk; las derivaciones y pérdidas del cableado también degradan la señal. La respuesta correcta es que influyen todos los factores listados.'
    },
    4268: {
      texto: 'Sobre las actuaciones iniciales para el despliegue 5G en España y la UE (2016–2020), señale la opción correcta:',
      opciones: ['El Plan de Acción 5G de la Comisión Europea es el plan nacional de España.','El ETSI es el grupo consultivo de alto nivel que asesora a la Comisión Europea sobre la política del espectro radioeléctrico.','La Decisión (UE) 2019/784 fijó el 30 de junio de 2020 como fecha límite para permitir al menos 1 GHz de la banda de 26 GHz.','Todas las respuestas anteriores son falsas.'],
      respuesta_correcta: 3,
      comentarios: 'La opción A confunde el Plan de Acción europeo con el Plan Nacional 5G español. B atribuye al ETSI una función del RSPG. C mezcla fechas/obligaciones: 1 GHz, condicional, a 31-12-2020; 30-6-2020 corresponde a la disponibilidad de toda la banda 24,25–27,5 GHz según Decisión 2020/590.'
    },
    4269: {
      texto: 'En Ethernet con direcciones MAC EUI-48, ¿qué dirección de destino identifica una trama de difusión (broadcast) para todas las estaciones?',
      comentarios: 'La dirección MAC broadcast EUI-48 es FF:FF:FF:FF:FF:FF; es distinta de una dirección IPv4 de broadcast.'
    },
    4270: {
      comentarios: 'IEEE 802.1Q define los puentes VLAN y su operación. La edición de referencia vigente es 802.1Q-2022.'
    }
  }
});
