const apply = require('./aplicar-lote.cjs');

const sources = {
  dnie: [{
    url: 'https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?id_menu=69&pag=REF_076',
    referencia: 'Portal oficial DNIe, Autoridades de Certificación y Validación: identifica a la Dirección General de la Policía como AC y define la AV como servicio de información de vigencia de certificados emitidos por una AC; describe OCSP y CRL y separa las funciones.'
  }],
  bittrex: [
    {
      url: 'https://www.sec.gov/newsroom/press-releases/2023-78',
      referencia: 'U.S. Securities and Exchange Commission, release 2023-78 (17-04-2023): identifica a Bittrex como crypto asset trading platform/exchange que facilitaba la compra y venta de criptoactivos.'
    },
    {
      url: 'https://bittrex.com/?af_id=Q9u14VA2',
      referencia: 'Aviso oficial de Bittrex a sus clientes: comunica que el servicio ha cerrado (“The curtain has closed”). La antigua respuesta se conserva únicamente como dato histórico.'
    },
    {
      url: 'https://space.gov.bm/sites/default/files/2025-08/2024%20No%2052%20Re%20Bittrex%20Global%20Limited%20%28in%20Liquidation%29%20final%20Ruling%20and%20Directions%20110725__0.pdf',
      referencia: 'Tribunal Supremo de Bermudas, Bittrex Global Limited (in liquidation), resolución 11-07-2025: recoge el anuncio de cierre de operaciones y cese de negociación de Bittrex Global en diciembre de 2023.'
    }
  ],
  spiral: [
    {
      url: 'https://ntrs.nasa.gov/api/citations/19950010039/downloads/19950010039.pdf',
      referencia: 'NASA Software Engineering Laboratory, Boehm’s Spiral Lifecycle Model: resume las cuatro actividades de cada vuelta: objetivos/alternativas/restricciones; identificación y resolución de riesgos; desarrollo/verificación del producto de siguiente nivel; planificación de siguientes fases.'
    },
    {
      url: 'https://faculty.washington.edu/hazeline/misc/reserve/boehm_spiralmodel.pdf',
      referencia: 'Barry W. Boehm, A Spiral Model of Software Development and Enhancement, IEEE Computer 21(5), 1988: el radio representa coste acumulado y el ángulo el progreso; describe ciclos revisados al final y su conducción por riesgo.'
    }
  ],
  pressman: [{
    url: 'https://books.google.com/books?id=VDzzQgAACAAJ',
    referencia: 'Roger S. Pressman, Software Engineering: A Practitioner’s Approach, 5.ª ed., McGraw-Hill, 2001, §4.3 “Analysis Principles” (referencia bibliográfica contrastada en Google Books): comprender los dominios de información y funcional, particionar jerárquicamente y desarrollar representaciones lógicas y físicas.'
  }],
  dfd: [{
    url: 'https://doi.org/10.1016/0164-1212(91)90029-6',
    referencia: 'A. Verhoef, Formal definition and verification of data flow diagrams, Journal of Systems and Software 16(1), 1991: define los nodos del DFD como procesos, almacenes y entidades externas, y las aristas dirigidas como flujos de datos; describe su uso en especificación de sistemas.'
  }]
};

apply({
  numero: '1409',
  fecha: '2026-11-15',
  records: [
    [7346, [81], ['I-6'], ['DNIe', 'PKI', 'autoridad de certificación', 'autoridad de validación', 'OCSP', 'CRL'], sources.dnie, {
      texto: 'En la PKI del DNIe, indique la afirmación FALSA sobre la validación de certificados:',
      opciones: [
        'La consulta en línea del estado de un certificado puede realizarse mediante OCSP.',
        'La Autoridad de Validación informa sobre la vigencia de certificados emitidos por una Autoridad de Certificación.',
        'La información de certificados revocados puede publicarse en listas CRL.',
        'La arquitectura asigna a una misma entidad las funciones de Autoridad de Validación y Autoridad de Certificación.'
      ],
      respuesta_correcta: 3
    }, 'Corregida D. Se mantiene la clave: el portal oficial separa la Autoridad de Certificación (emisión) de la Autoridad de Validación (consulta del estado), y describe OCSP y CRL. Se elimina la afirmación temporalmente sensible sobre el número/nombre de prestadores, que el portal conserva con denominaciones administrativas antiguas; la pregunta queda centrada en la separación funcional estable.', 'corregida'],
    [7347, [85], [], ['criptomonedas', 'exchange', 'Bittrex', 'histórica', 'criptoactivos'], sources.bittrex, {
      texto: 'Histórica: antes de anunciar su cierre en 2023, ¿cuál de estas plataformas operó como exchange para intercambiar criptoactivos, frente a las aplicaciones de monedero?',
      opciones: ['Bittrex', 'Coinomi', 'Jaxx', 'Coinbase Wallet'],
      respuesta_correcta: 0
    }, 'Histórica A. Bittrex fue la plataforma de intercambio que identificaba la clave antigua, pero cerró y ya no debe presentarse como servicio actual. Se conserva expresamente como pregunta histórica; Coinomi, Jaxx y Coinbase Wallet son aplicaciones de monedero, aunque algunas puedan enlazar con funciones de intercambio de terceros.', 'historica'],
    [7348, [86], ['III-1', 'III-2'], ['ciclo de vida', 'modelo en espiral', 'Boehm', 'gestión de riesgos'], sources.spiral, {
      texto: 'Señale la afirmación correcta sobre el modelo de ciclo de vida en espiral de Boehm:',
      opciones: [
        'Cada vuelta tiene únicamente las fases planificación, diseño, evaluación e ingeniería.',
        'El radio representa el progreso y el ángulo el coste acumulado del proyecto.',
        'Cada vuelta aborda objetivos y alternativas, riesgos, desarrollo/verificación del producto siguiente y planificación de las siguientes fases.',
        'El modelo se adapta siempre con facilidad a software adquirido mediante contratación.'
      ],
      respuesta_correcta: 2
    }, 'Corregida C. Se precisa la secuencia de actividades del modelo de Boehm: fijar objetivos/alternativas/restricciones, resolver riesgos, desarrollar y verificar un producto del siguiente nivel, y planificar las fases siguientes. El gráfico representa coste acumulado en el radio y progreso en el ángulo; la iteración no garantiza por sí sola que un producto contratado encaje fácilmente.', 'corregida'],
    [7349, [88], ['III-3'], ['requisitos', 'análisis estructurado', 'DFD', 'flujos de datos', 'procesos'], sources.dfd, {
      texto: 'En análisis estructurado de requisitos, ¿qué notación representa procesos, almacenes, entidades externas y flujos de datos?',
      opciones: [
        'El pseudocódigo, destinado principalmente a expresar requisitos funcionales sin lógica algorítmica.',
        'El diccionario de datos, que representa gráficamente las transformaciones y conexiones entre procesos.',
        'El diagrama de flujo de datos (DFD).',
        'El modelo entidad-relación, que representa flujos y estados temporales de procesos.'
      ],
      respuesta_correcta: 2
    }, 'Corregida C. Se reemplaza “especificación del comportamiento” por la función precisa del DFD: modelar procesos y movimiento/transformación de datos entre entidades y almacenes. El pseudocódigo expresa procedimientos; el diccionario define elementos de datos y el modelo E-R representa entidades y relaciones.', 'corregida'],
    [7350, [88], ['III-3'], ['Pressman', 'análisis de requisitos', 'dominio de información', 'partición', 'representaciones lógica y física'], sources.pressman, {
      texto: 'Según los principios clásicos de análisis de requisitos de Roger S. Pressman, ¿qué conjunto de afirmaciones es correcto?',
      opciones: [
        'Deben representarse y comprenderse los dominios de información y funcional del problema.',
        'El problema debe particionarse jerárquicamente para descubrir el detalle de forma progresiva.',
        'Deben desarrollarse representaciones lógicas y físicas del sistema.',
        'Todas las anteriores.'
      ],
      respuesta_correcta: 3
    }, 'Corregida D. Se explicitan los tres principios atribuidos a Pressman en la edición citada: comprender los dominios de información y funcional, particionar el problema por capas y desarrollar representaciones lógicas y físicas. La fuente se registra con edición y sección para evitar atribuciones genéricas sin localizador.', 'corregida']
  ]
});
