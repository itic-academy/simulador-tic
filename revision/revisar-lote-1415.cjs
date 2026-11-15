const apply = require('./aplicar-lote.cjs');

const refs = {
  fastEthernet: [
    {
      url: 'https://standards.ieee.org/ieee/802.3/10422/',
      referencia: 'IEEE 802.3-2022, estándar activo de Ethernet: especifica las PHY Ethernet, entre ellas las interfaces de fibra de 100 Mb/s y Gigabit Ethernet.'
    },
    {
      url: 'https://grouper.ieee.org/groups/802/3/maint/requests/revision_history.html',
      referencia: 'IEEE 802.3 revision history y texto de mantenimiento de Clause 26.4.1: para la MDI 100BASE-FX se admiten conectores duplex SC, MIC (Media Interface Connector) y ST; el SC es la alternativa recomendada.'
    },
    {
      url: 'https://www.cisco.com/c/en/us/td/docs/interfaces_modules/port_adapters/install_upgrade/ethernet/pa-2fe_tx-fx_install_config/pa_2fetx/3474ovr.html',
      referencia: 'Cisco, tabla de características IEEE 802.3u 100BASE-FX: segmento multimodo de 412 m en half-duplex y hasta 2.000 m en full-duplex. Se contrasta con IEEE 802.3; no es una regla general para todo tipo de fibra y equipo.'
    }
  ],
  gigabit: [
    {
      url: 'https://standards.ieee.org/ieee/802.3/10422/',
      referencia: 'IEEE 802.3-2022, Clause 38 (1000BASE-LX): define el PHY de onda larga y sus alcances sobre fibra monomodo y tipos de fibra multimodo; el estándar condiciona el presupuesto de enlace y el lanzamiento óptico según el medio.'
    },
    {
      url: 'https://www.cisco.com/c/en/us/td/docs/interfaces_modules/transceiver_modules/installation/note/OL_19329.pdf',
      referencia: 'Cisco, nota de instalación de mode-conditioning patch cords: con transceptores 1000BASE-LX/LH sobre fibra multimodo heredada OM1/OM2 se necesita acondicionar el lanzamiento; por tanto, admitir MMF no implica que cualquier cableado funcione sin condiciones.'
    }
  ],
  fiber: [
    {
      url: 'https://www.itu.int/rec/T-REC-G.650.1-202401-I/en',
      referencia: 'ITU-T G.650.1 (01/2024), vigente: define parámetros y pruebas de fibra monomodo; el umbral de corte depende del perfil de índice de refracción y permite distinguir propagación monomodo/multimodo en operación.'
    },
    {
      url: 'https://www.itu.int/rec/T-REC-G.651.1-201811-I/en',
      referencia: 'ITU-T G.651.1 (11/2018), vigente: especifica fibra multimodo de índice gradual de 50/125 µm para redes de acceso y usos Ethernet; sirve de contraste entre perfiles multimodo y monomodo.'
    },
    {
      url: 'https://www.itu.int/epublications/publication/itu-t-g-suppl-39-2025-03-optical-system-design-and-engineering-considerations/en',
      referencia: 'ITU-T G Suppl. 39 (03/2025), §5.3 y tabla 5-2: recoge ventanas/rangos de operación para aplicaciones sobre fibra, incluidas 100BASE-FX y 1000BASE-LX alrededor de 1.3 µm y 1000BASE-SX alrededor de 850 nm.'
    }
  ],
  imt: [
    {
      url: 'https://www.itu.int/epublications/publication/recommendation-itu-r-m-2012-7-02-2026-detailed-specifications-of-the-terrestrial-radio-interfaces-of-international-mobile-telecommunications-advanced-imt-advanced',
      referencia: 'ITU-R M.2012-7 (02/2026), IMT-Advanced, edición en vigor: recoge 100 Mbit/s en alta movilidad y 1 Gbit/s en baja movilidad como objetivos de investigación de velocidad pico, procedentes de M.1645; no los presenta como garantía de cualquier servicio comercial llamado 4G.'
    },
    {
      url: 'https://www.itu.int/en/ITU-R/study-groups/rsg5/rwp5d/imt-adv/Pages/default.aspx',
      referencia: 'UIT-R, página oficial IMT-Advanced: describe los objetivos de 100 Mbit/s con movilidad alta y 1 Gbit/s con movilidad baja y la continuidad de las especificaciones IMT-Advanced.'
    }
  ]
};

const records = [
  [7376, [108, 118], ['IV-7', 'IV-8'], ['100BASE-FX', 'IEEE 802.3u', 'fibra óptica', 'MIC', 'SC', 'ST'], refs.fastEthernet, {
    comentarios: 'Revisada como válida. La opción MIC es un tipo de conector admitido por la MDI de 100BASE-FX (junto a SC y ST); el estándar recomienda SC. La opción de distancias original invierte los valores típicos de la especificación sobre multimodo: unos 412 m en half-duplex y hasta 2 km en full-duplex. 100BASE-FX no equivale a 10BASE-FL ni utiliza UTP.'
  }, 'Vigente. Se mantiene D: 100BASE-FX admite MIC; IEEE recomienda SC y también documenta ST. Se acota la nota sobre distancias al perfil multimodo del estándar histórico 100BASE-FX, evitando presentar una longitud universal independiente de fibra, transceptor y modo dúplex.', 'vigente'],
  [7377, [108, 118], ['IV-7', 'IV-8'], ['1000BASE-LX', 'Gigabit Ethernet', 'fibra monomodo', 'fibra multimodo', 'mode conditioning'], refs.gigabit, {
    texto: '¿Qué PHY IEEE 802.3 Gigabit Ethernet está especificada para fibra monomodo y admite también determinados enlaces de fibra multimodo?',
    opciones: ['1000BASE-SX', '1000BASE-LX', '1000BASE-T', '1000BASE-CX'],
    comentarios: 'Se mantiene B. 1000BASE-LX está especificada para SMF y puede operar sobre MMF dentro de los límites de la norma; en fibras multimodo heredadas puede requerir un latiguillo de acondicionamiento de modo. 1000BASE-SX se orienta a MMF; 1000BASE-TX a par trenzado; 1000BASE-CX a cable de cobre apantallado de corta distancia.'
  }, 'Corregida. Se mantiene B y se añade que 1000BASE-LX admite fibra multimodo bajo condiciones de enlace/launch, a veces con latiguillo de acondicionamiento en MMF heredada; así no se interpreta «puede operar» como compatibilidad incondicional con cualquier tramo. La especificación primaria es IEEE 802.3, Clause 38.', 'corregida'],
  [7378, [108, 118], ['IV-7'], ['fibra óptica', 'índice de refracción', 'revestimiento', 'cut-off', 'ventanas ópticas'], refs.fiber, {
    texto: '¿Cuál de las siguientes afirmaciones sobre transmisión por fibra óptica es incorrecta?',
    opciones: [
      'En las fibras de telecomunicaciones se emplean regiones de operación alrededor de 850, 1310 y 1550 nm, según el tipo de fibra y sistema.',
      'El fenómeno de diafonía en cableado se describe habitualmente como paradiafonía (NEXT) y telediafonía (FEXT).',
      'Para guiar la luz por reflexión interna total, el revestimiento debe tener un índice de refracción superior al del núcleo.',
      'La operación monomodo depende del perfil de índice y de la longitud de onda respecto del corte de la fibra.'
    ],
    respuesta_correcta: 2
  }, 'Corregida. La clave C se mantiene y se expresa sin errores gramaticales: para la guía por reflexión interna, el índice del núcleo debe ser superior al del revestimiento. También se matiza la afirmación del diámetro: el comportamiento monomodo depende del perfil de índice, geometría y longitud de onda/cut-off, no solo de reducir físicamente el núcleo.', 'corregida'],
  [7379, [108, 118], ['IV-7'], ['fibra multimodo', 'índice escalonado', 'core', 'cladding', 'perfil de índice'], refs.fiber, {
    texto: 'En una fibra óptica multimodo de índice escalonado, ¿cómo varía el índice de refracción entre el núcleo y el revestimiento?',
    opciones: [
      'El índice del núcleo disminuye gradualmente desde el eje hasta el revestimiento.',
      'El índice del núcleo es constante e inferior al índice del revestimiento.',
      'El índice del núcleo es igual al del revestimiento en la interfaz.',
      'El núcleo mantiene un índice aproximadamente constante y superior al del revestimiento, con un salto abrupto en la interfaz.'
    ],
    respuesta_correcta: 3
  }, 'Corregida. Se conserva D, pero se reescribe la opción para definir índice escalonado con precisión: índice del núcleo aproximadamente uniforme y mayor que el del revestimiento, con cambio abrupto en la interfaz. La opción gradual describe una fibra de índice gradual, no una de índice escalonado.', 'corregida'],
  [7380, [123], ['IV-15'], ['IMT-Advanced', '4G', 'UIT-R', 'movilidad', 'velocidad pico'], refs.imt, {
    texto: '¿Qué objetivos de velocidad pico se asociaron a IMT-Advanced para escenarios de alta y baja movilidad, respectivamente?',
    opciones: [
      '100 Mbit/s con movilidad alta y 1 Gbit/s con movilidad baja, como objetivos de investigación de la UIT-R.',
      '10 Mbit/s con movilidad alta y 100 Mbit/s con movilidad baja, como requisitos de IEEE.',
      '1 Gbit/s con movilidad alta y 100 Mbit/s con movilidad baja, como objetivos de investigación de la UIT-R.',
      '100 Mbit/s con movilidad alta y 1 Gbit/s con movilidad baja, como requisitos fijados por IEEE.'
    ],
    respuesta_correcta: 0
  }, 'Corregida. Se conserva A y se sustituye «requisito establecido» por «objetivos de investigación» para reflejar el lenguaje de ITU-R M.1645 y M.2012. No se atribuye a IEEE ni se presenta como velocidad garantizada para todo servicio comercial etiquetado 4G.', 'corregida']
];

apply({ numero: '1415', fecha: '2026-11-15', records });
