const apply = require('./aplicar-lote.cjs');

const sources = {
  gdpr: { url: 'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32016R0679', referencia: 'Reglamento (UE) 2016/679, art. 4.7–8: definiciones de responsable y encargado del tratamiento.' },
  law40: { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566', referencia: 'Ley 40/2015 consolidada, art. 47.1 y 47.2.a–d: definición y tipos de convenios; exclusión de los protocolos sin compromisos jurídicos concretos y tratamiento estatutario de ciertos convenios entre CCAA.' },
  bluetooth: [
    { url: 'https://www.bluetooth.com/wp-content/uploads/Files/Specification/HTML/Core-63/out/en/architecture%2C-change-history%2C-and-conventions/architecture.html', referencia: 'Bluetooth Core Specification 6.3, vol. 1, parte A, §4.1.1: piconet BR/EDR con un Central y sus Peripherals; terminología vigente.' },
    { url: 'https://www.bluetooth.com/wp-content/uploads/Files/Specification/HTML/Core-61/out/en/br-edr-controller/baseband-specification.html', referencia: 'Bluetooth Core Specification 6.1, vol. 2, parte B, §§1 y 8.6: hasta siete Peripherals activos en una piconet BR/EDR; la afirmación se limita expresamente a ese modo.' }
  ],
  isaca: [
    { url: 'https://www.isaca.org/en/resources/cobit', referencia: 'ISACA, página oficial COBIT: COBIT 2019 se presenta como marco de gobierno y gestión de información y tecnología empresarial.' },
    { url: 'https://www.isaca.org/about-us/-/media/4fc9d51512c54465b95c418d1468baef.ashx', referencia: 'ISACA, COBIT 2019 Fact Sheet: COBIT es emitido por ISACA y cubre gobierno y gestión empresarial de la información y tecnología.' }
  ],
  spainDigital: { url: 'https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/asuntos-economicos/Documents/2021/270121-%20Agenda_Digital_2025.pdf', referencia: 'Gobierno de España, documento España Digital 2025 (enero de 2021), capítulos 1, 3 y 9: conectividad, competencias digitales y economía del dato/IA son ejes; la confianza digital no figura entre los diez títulos de eje. Se trata como pregunta histórica sobre el documento adoptado en 2021.' }
};

const academy = {
  data: { url: 'https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk', label: 'ITIC Academy, bloque 08, Protección de datos, actualización 2026' },
  admin: { url: 'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk', label: 'ITIC Academy, bloque 05, Contratación, presupuestos, convenios, subvenciones y compra TIC, actualización 2026' },
  bluetooth: { url: 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk', label: 'ITIC Academy, bloque 46, Redes inalámbricas y comunicaciones móviles; incluye Bluetooth, actualización 2026' },
  cobit: { url: 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk', label: 'ITIC Academy, bloque 41, ITIL y COBIT 2019, actualización 2026' },
  digital: { url: 'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk', label: 'ITIC Academy, bloque 06, Economía, sociedad, empleo y transformación digital, actualización 2026.2' }
};

const records = [
  [2301, [27], ['I-7'], ['RGPD', 'responsable del tratamiento', 'fines y medios'], [sources.gdpr, academy.data], 'La definición corresponde al responsable del tratamiento del art. 4.7 RGPD, no al encargado que trata datos por cuenta de aquel (art. 4.8). Se normaliza la referencia al Reglamento (UE) y la fórmula «individualmente o junto con otros». ITIC Academy, bloque 08, incluye expresamente responsable/encargado; clasificación A1-27 y A2-I-7 comprobada en los programas oficiales.', 'corregida'],
  [2302, [13], ['I-8'], ['Ley 40/2015', 'convenios', 'artículo 47'], [sources.law40, academy.admin], 'Se acota el enunciado al tipo del art. 47.2.c de la Ley 40/2015 para que haya una sola respuesta. Los protocolos sin compromisos jurídicos exigibles no son convenios (47.1); los convenios interadministrativos e intradministrativos son tipos distintos (47.2.a–b); el tipo c es el celebrado con un sujeto de Derecho privado. Los convenios de dos CCAA para servicios propios quedan sometidos a sus Estatutos. Cotejo con ITIC Academy, bloque 05, y con los programas oficiales A1-13/A2-I-8.', 'corregida'],
  [2303, [114], ['IV-11'], ['Bluetooth', 'BR/EDR', 'piconet', 'Central', 'Peripheral'], [sources.bluetooth, academy.bluetooth], 'La topología se denomina piconet. Se reemplazan los términos históricos «maestro/esclavo» por Central/Peripheral y se limita el máximo de siete dispositivos activos a Bluetooth BR/EDR, como hace la especificación; no se generaliza a Bluetooth LE. Cotejo curricular con el bloque 46 de ITIC Academy y los temas oficiales A1-114/A2-IV-11.', 'corregida'],
  [2304, [106], ['II-11'], ['COBIT 2019', 'ISACA', 'gobierno TI', 'gestión TI'], [sources.isaca, academy.cobit], 'La pregunta original carecía de respuesta correcta. COBIT 2019 es un marco de ISACA para el gobierno y la gestión empresarial de información y tecnología: no se limita al gobierno, no existe una versión COBIT 2021 sustitutiva y no lo mantiene AXELOS. Se reconstruyen las cuatro opciones para dejar una única correcta. Correspondencia curricular A1-106/A2-II-11 y cotejo con el bloque 41 de ITIC Academy.', 'corregida'],
  [2305, [51], ['I-6'], ['España Digital 2025', 'Agenda Digital', 'competencias digitales', 'economía del dato'], [sources.spainDigital, academy.digital], 'Se precisa que se pregunta por los diez ejes del documento España Digital 2025 publicado en enero de 2021. Las opciones de conectividad, competencias digitales y economía del dato/IA reflejan ejes del documento; «reforzar la confianza en el ámbito digital» no es uno de sus diez títulos. Es un dato histórico del plan, no una descripción de la estrategia posterior España Digital 2026. Cotejo con el bloque 06 de ITIC Academy, que estudia la evolución de las agendas hasta España Digital 2026, y con los temas oficiales A1-51/A2-I-6.', 'corregida']
];

const edits = {
  2301: { texto: 'Según el Reglamento (UE) 2016/679, es «responsable del tratamiento» la persona física o jurídica, autoridad pública, servicio u otro organismo que, individualmente o junto con otros, determine los fines y medios del tratamiento. ¿Qué opción nombra esa figura?', opciones: [
    [0, 'El responsable del tratamiento'], [1, 'El encargado del tratamiento'], [2, 'La autoridad de control'], [3, 'El delegado de protección de datos']
  ], respuesta_correcta: 0 },
  2302: { texto: 'Conforme al tipo previsto en el artículo 47.2.c de la Ley 40/2015, ¿cuál de estas opciones describe un convenio de ese apartado?', opciones: [
    [0, 'Un protocolo general que expresa una voluntad común, pero no formaliza compromisos jurídicos concretos y exigibles.'],
    [1, 'Un convenio interadministrativo entre Administraciones públicas distintas para ejercer competencias propias o delegadas.'],
    [2, 'Un convenio firmado entre una Administración pública u organismo o entidad de derecho público y un sujeto de Derecho privado.'],
    [3, 'Un tratado internacional.']
  ], respuesta_correcta: 2 },
  2303: { texto: 'En Bluetooth BR/EDR, ¿cómo se denomina la topología formada por un único dispositivo Central y los dispositivos Peripheral sincronizados con él? Una piconet admite hasta siete Peripheral activos.', opciones: [
    [0, 'Scatternet'], [1, 'Piconet'], [2, 'Emparejamiento'], [3, 'Perfil']
  ], respuesta_correcta: 1 },
  2304: { texto: '¿Cuál afirmación describe correctamente COBIT 2019?', opciones: [
    [0, 'Es un marco publicado por ISACA para el gobierno y la gestión empresarial de la información y la tecnología.'],
    [1, 'Es un marco limitado al gobierno de TI y excluye la gestión de la información y la tecnología.'],
    [2, 'Es un marco obsoleto, sustituido en 2021 por una versión denominada COBIT 2021.'],
    [3, 'Está mantenido y gestionado por AXELOS.']
  ], respuesta_correcta: 0 },
  2305: { texto: 'En los diez ejes del documento «España Digital 2025» publicado en enero de 2021, ¿cuál de estas opciones NO figura como eje estratégico?', opciones: [
    [0, 'Reforzar la confianza en el ámbito digital para conseguir una implantación efectiva de las TIC en empresas y administraciones públicas.'],
    [1, 'Reforzar las competencias digitales de los trabajadores y del conjunto de la ciudadanía.'],
    [2, 'Garantizar una conectividad digital adecuada para el 100 % de la población y reducir la brecha entre zonas rurales y urbanas.'],
    [3, 'Favorecer el tránsito hacia una economía del dato, garantizando seguridad y privacidad y aprovechando las oportunidades de la inteligencia artificial.']
  ], respuesta_correcta: 0 }
};

apply({ numero: '397', fecha: '2026-10-28', records, edits });
