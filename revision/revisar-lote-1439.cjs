const apply = require('./aplicar-lote.cjs');

const records = [
  [7496, [108, 112], ['IV-7'], ['xDSL', 'HDSL', 'SHDSL', 'ADSL2', 'UIT-T'], [
    { url: 'https://www.itu.int/rec/T-REC-G/en', referencia: 'UIT-T, catálogo de la serie G: distingue HDSL G.991.1, SHDSL G.991.2, ADSL G.992.1, ADSL-lite/splitterless ADSL G.992.2, ADSL2 G.992.3 y splitterless ADSL2 G.992.4.' },
    { url: 'https://www.itu.int/rec/T-REC-G.991.2/en', referencia: 'UIT-T G.991.2: especifica transceptores SHDSL (Single-pair High-speed Digital Subscriber Line); el número G.992.1 corresponde a ADSL.' },
    { url: 'https://www.itu.int/rec/T-REC-G.992.4/en', referencia: 'UIT-T G.992.4: especifica splitterless ADSL2, diferenciada de la ADSL2 de G.992.3.' }
  ], {
    texto: 'Entre las siguientes asociaciones de tecnologías xDSL con recomendaciones UIT-T, señale la INCORRECTA.',
    opciones: ['HDSL — G.991.1.', 'ADSL-lite (splitterless ADSL) — G.992.2.', 'ADSL2 y splitterless ADSL2 — G.992.3 y G.992.4, respectivamente.', 'SHDSL — G.992.1.'],
    respuesta_correcta: 3
  }, 'Corregida D. El catálogo UIT-T confirma que G.992.1 es ADSL, mientras que SHDSL está especificada por G.991.2. Se normaliza el nombre ADSL-lite como denominación histórica, indicando la descripción técnica «splitterless ADSL», y se explicita la correspondencia de G.992.3/G.992.4 para evitar confundir ADSL2 con su variante sin splitter.', 'corregida'],

  [7497, [108, 112], ['IV-7'], ['xDSL', 'modulación', 'DMT', 'CAP', '2B1Q', 'WDM'], [
    { url: 'https://www.itu.int/itudoc/gs/promo/tsb/85871.pdf', referencia: 'UIT-T, DSL—Digital Subscriber Line: enumera técnicas de línea/codificación usadas en familias DSL, incluidas DMT para ADSL, CAP en variantes históricas y 2B1Q en sistemas HDSL/SDSL; WDM es multiplexación por división de longitud de onda en fibra, no una modulación xDSL sobre par de cobre.' },
    { url: 'https://www.itu.int/rec/T-REC-G/en', referencia: 'UIT-T, catálogo de recomendaciones G.991/G.992: describe las tecnologías DSL por transceptores sobre pares de abonado y sus especificaciones físicas.' }
  ], {
    texto: '¿Cuál de estas técnicas NO es una modulación/codificación de línea asociada a tecnologías xDSL sobre pares de cobre?',
    opciones: ['2B1Q.', 'CAP (Carrierless Amplitude/Phase).', 'DMT (Discrete MultiTone).', 'WDM (multiplexación por división de longitud de onda).'],
    respuesta_correcta: 3
  }, 'Corregida D. 2B1Q, CAP y DMT aparecen en tecnologías DSL; DMT es la modulación multiportadora característica de ADSL. WDM separa señales por longitud de onda óptica en medios de fibra y no es una modulación xDSL del bucle de cobre. Se añade «sobre pares de cobre» para distinguir la capa física que se pregunta.', 'corregida'],

  [7498, [113], ['IV-10'], ['WDM', 'CWDM', 'DWDM', 'rejilla espectral', 'fibra óptica'], [
    { url: 'https://www.itu.int/rec/T-REC-G.694.2/en', referencia: 'UIT-T G.694.2, CWDM wavelength grid: define una rejilla CWDM de longitudes de onda con separación nominal amplia de 20 nm.' },
    { url: 'https://www.itu.int/rec/T-REC-G.694.1/en', referencia: 'UIT-T G.694.1, DWDM frequency grid: define rejillas DWDM en frecuencia con espaciamientos mucho más estrechos (incluida la rejilla de 100 GHz y múltiplos/submúltiplos definidos).' },
    { url: 'https://www.itu.int/rec/T-REC-G.Sup42/en', referencia: 'UIT-T G-series Supplement 42, guía de tecnología óptica: sitúa G.694.1 y G.694.2 como las rejillas espectrales normalizadas para aplicaciones DWDM y CWDM, respectivamente.' }
  ], {
    texto: '¿Qué afirmación describe correctamente las rejillas espectrales CWDM y DWDM definidas por la UIT-T?',
    opciones: [
      'La rejilla CWDM tiene separación nominal amplia de 20 nm y ofrece menos canales que las rejillas DWDM de separación mucho más estrecha.',
      'CWDM emplea separaciones más estrechas y, por tanto, más canales que DWDM.',
      'CWDM y DWDM utilizan necesariamente la misma rejilla y la misma separación entre canales.',
      'CWDM se define por una separación fija de 100 GHz, mientras que DWDM usa 20 nm.'
    ],
    respuesta_correcta: 0
  }, 'Corregida A. Las afirmaciones originales sobre distancia alcanzable, «luz direccional» e interoperabilidad categórica no describían de forma rigurosa los estándares y podían admitir más de una interpretación. Se centra el ítem en lo normalizado: G.694.2 define la rejilla CWDM de 20 nm; G.694.1 define rejillas DWDM de espaciamiento mucho menor, aptas para más canales en su banda. La distancia depende del diseño óptico, amplificación y presupuesto de enlace, no solo de la etiqueta CWDM/DWDM.', 'corregida'],

  [7499, [114], ['IV-11'], ['IEEE 802.11ac', 'Wi-Fi 5', 'ancho de canal', '80 MHz'], [
    { url: 'https://standards.ieee.org/ieee/802.11ac/4473/', referencia: 'IEEE SA, IEEE 802.11ac-2013: presenta la enmienda «Enhancements for Very High Throughput for Operation in Bands below 6 GHz» y su alcance técnico como estándar WLAN histórico.' },
    { url: 'https://www.ieee802.org/11/Reports/802.11_Timelines.htm', referencia: 'IEEE 802.11 Working Group, timelines: registra IEEE Std P802.11ac-2013 como enmienda de muy alto caudal (VHT) aprobada/publicada en 2013.' },
    { url: 'https://api.cert.wi-fi.org/api/certificate/download/public?variantId=127386', referencia: 'Wi-Fi Alliance, certificado oficial de producto Wi-Fi CERTIFIED ac: muestra certificación 802.11ac y capacidad de canal de 80 MHz en 5 GHz.' }
  ], {
    texto: '¿Qué enmienda IEEE 802.11 introdujo canales WLAN de 80 MHz como parte de sus mejoras de muy alto caudal (VHT)?',
    opciones: ['802.11n.', '802.11g.', '802.11ac.', '802.11ad.'],
    respuesta_correcta: 2
  }, 'Corregida C. Se reemplaza «80 MHz por cliente», que confunde el ancho del canal radio con una asignación por estación. IEEE 802.11ac-2013 introdujo anchos de canal VHT de hasta 80 MHz como capacidad base; 160 MHz y 80+80 MHz se habilitaron como capacidades adicionales/opcionales según el dispositivo y el dominio regulatorio.', 'corregida'],

  [7500, [108], ['IV-14'], ['VoIP', 'MOS', 'E-model', 'retardo unidireccional', 'calidad conversacional'], [
    { url: 'https://www.itu.int/rec/T-REC-P.800/en', referencia: 'UIT-T P.800, Methods for subjective determination of transmission quality: define métodos subjetivos de evaluación de calidad de transmisión de voz y el origen del Mean Opinion Score.' },
    { url: 'https://www.itu.int/rec/T-REC-P.800.1/en', referencia: 'UIT-T P.800.1, Mean opinion score (MOS) terminology: distingue MOS obtenido en pruebas subjetivas y puntuaciones MOS predichas por modelos objetivos o de planificación; evita llamar «objective» al significado de la sigla MOS.' },
    { url: 'https://www.itu.int/rec/T-REC-G.107/en', referencia: 'UIT-T G.107, E-model: modelo de planificación que incluye el factor de deterioro por retardo Id y permite estimar el factor R y MOS conversacional; por tanto, el retardo puede afectar a MOS estimada, aunque el retardo unidireccional se mida directamente en milisegundos.' },
    { url: 'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-J.361-200611-I%21%21PDF-E&lang=e&type=items', referencia: 'UIT-T J.361, métricas de calidad de llamadas: distingue listening quality y conversational quality, señala que la segunda incluye efectos de retardo y eco, y explica el cálculo de MOS estimada a partir de R del E-model.' }
  ], {
    texto: '¿Cuál de estas métricas cuantifica directamente el retardo unidireccional de una llamada VoIP, en vez de expresar la calidad percibida o predicha en una escala MOS?',
    opciones: [
      'Una puntuación MOS usada para comparar la calidad percibida de servicios de distintos proveedores.',
      'Una puntuación MOS obtenida o predicha para comparar códecs de voz.',
      'El retardo unidireccional extremo a extremo, expresado en milisegundos.',
      'Una puntuación MOS para comparar la calidad de voz entre redes IP.'
    ],
    respuesta_correcta: 2
  }, 'Corregida C. El enunciado original decía «mean objective score» (MOS significa Mean Opinion Score) y sugería que MOS no se utiliza para analizar el impacto de latencia, lo cual es falso: el E-model UIT-T G.107 incorpora deterioros por retardo y permite estimar MOS conversacional. Se pregunta ahora por la medida directa e independiente del retardo extremo a extremo, expresada en ms. MOS evalúa/predice calidad de voz; no es la unidad directa del retardo.', 'corregida']
];

apply({ numero: '1439', fecha: '2026-11-16', records });
