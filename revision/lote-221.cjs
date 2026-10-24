const apply = require('./aplicar-lote.cjs');

const records = [
  [1421, [131], ['I-6'], ['SAML', 'federación de identidades', 'IdP', 'SP', 'operational modes'],
    [{ url: 'https://docs.oasis-open.org/security/saml/v2.0/saml-conformance-2.0-os.pdf', referencia: 'OASIS, SAML V2.0 Conformance, §3.1: los modos operativos enumerados incluyen IdP, SP, Attribute Authority, Authentication Authority, Authorization Decision Authority, ECP y Requester.' }, { url: 'https://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html', referencia: 'OASIS, SAML V2.0 Technical Overview: IdP y SP son roles para SSO entre dominios; describe también el rol Attribute Authority.' }], null,
    'El enunciado original hablaba de una arquitectura genérica de gestión de identidad, para la que no existe una única taxonomía universal: además, «Authentication Provider» puede ser una denominación genérica de producto. Se acota a los modos operativos que OASIS enumera expresamente para SAML 2.0. «Authentication Provider (AP)» no es uno de esos nombres; la especificación sí incluye «SAML Authentication Authority», por lo que no deben confundirse ambos términos. Se mantiene B como respuesta. Cotejo: ITIC Academy, bloque 50 Videoconferencia, SSO y trabajo colaborativo, versión 2026.1 (01-10-2026), §3.6; identidad federada y SAML. Correspondencia: A1-131/A2-I-6.', 'corregida'],
  [1422, [132], ['II-1', 'IV-6'], ['virtualización', 'Proxmox VE', 'AGPLv3', 'software de código abierto'],
    [{ url: 'https://proxmox.com/en/products/proxmox-virtual-environment/features', referencia: 'Proxmox VE, Features: plataforma de virtualización de servidores de código abierto; su código fuente se publica bajo GNU AGPLv3.' }], null,
    'La respuesta Proxmox VE se confirma con una formulación verificable: el editor declara expresamente que el código fuente de Proxmox VE se publica bajo GNU AGPLv3. Se evita tratar «VMware» como un producto concreto o generalizar sobre la licencia de toda una marca: las otras opciones se nombran como soluciones comerciales determinadas. Cotejo: ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1 (31-08-2026), apartado de virtualización y consolidación de servidores. Correspondencia: A1-132/A2-II-1/A2-IV-6.', 'corregida'],
  [1423, [1], ['I-1'], ['Constitución Española', 'artículo 18.4', 'uso de la informática', 'intimidad'],
    [{ url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229&p=20260520&tn=0', referencia: 'Constitución Española, artículo 18.4, texto consolidado del BOE con última actualización publicada el 20/05/2026: la ley limitará el uso de la informática para garantizar el honor, la intimidad personal y familiar y el pleno ejercicio de los derechos.' }], null,
    'Se especifica el apartado 4 del artículo 18. La respuesta B recoge su contenido; el apartado 3 regula el secreto de las comunicaciones «salvo resolución judicial», y el apartado 1 garantiza honor, intimidad y propia imagen sin la excepción que se atribuía en la opción D. Cotejo: ITIC Academy, bloque 01 Constitución, organización del Estado y AGE, versión 2026.2 (01-10-2026), Constitución y derechos fundamentales. Correspondencia: A1-1/A2-I-1.', 'corregida'],
  [1424, [2], ['I-2'], ['Constitución Española', 'Tribunal Constitucional', 'artículo 159', 'mandato'],
    [{ url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229&p=20260520&tn=0', referencia: 'Constitución Española, artículo 159.3, texto consolidado del BOE con última actualización publicada el 20/05/2026: mandato de nueve años y renovación por terceras partes cada tres.' }], null,
    'La opción correcta coincide con el artículo 159.3: los miembros son designados por nueve años y se renuevan por terceras partes cada tres. Se expresa «años» en ambas duraciones para que no se interprete el número como una unidad omitida. Cotejo: ITIC Academy, bloque 01 Constitución, organización del Estado y AGE, versión 2026.2 (01-10-2026), Tribunal Constitucional: composición y organización. Correspondencia: A1-2/A2-I-2.', 'corregida'],
  [1425, [1], [], ['Tribunal de Cuentas', 'Pleno', 'nombramiento del Presidente', 'Ley Orgánica 2/1982'],
    [{ url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1982-11584&p=20240802&tn=1', referencia: 'Ley Orgánica 2/1982, artículo 29, texto consolidado del BOE: el Presidente se nombra de entre los miembros por el Rey, a propuesta del Tribunal en Pleno, por tres años.' }], null,
    'La pregunta original decía que el Presidente «es elegido» por los propios miembros, fórmula imprecisa: el artículo 29 establece que lo nombra el Rey, a propuesta del Tribunal en Pleno, entre sus miembros. Se pregunta ahora quién formula la propuesta al Rey; la respuesta es el Pleno. Cotejo: ITIC Academy, bloque 01 Constitución, organización del Estado y AGE, versión 2026.2 (01-10-2026), epígrafe A1-1 sobre los órganos constitucionales de control, incluido el Tribunal de Cuentas. No se asigna un tema A2 específico: el programa A2-I-2 citado en la pregunta anterior se limita al Tribunal Constitucional y al Defensor del Pueblo. Correspondencia: A1-1.', 'corregida']
];

apply({ numero: '221', fecha: '2026-10-24', records, edits: {
  1421: { texto: 'Según la enumeración de modos operativos de conformidad de SAML 2.0, ¿cuál de estas denominaciones no figura como tal en la especificación?', opciones: [
    'Identity Provider (IdP).',
    'Authentication Provider (AP).',
    'Service Provider (SP).',
    'SAML Attribute Authority.'
  ], respuesta_correcta: 1 },
  1422: { texto: '¿Cuál de estas plataformas declara que el código fuente de su solución de virtualización de servidores se publica bajo la licencia GNU AGPLv3?', opciones: [
    'Proxmox Virtual Environment (Proxmox VE).',
    'VMware vSphere.',
    'IBM PowerVM.',
    'Citrix XenApp.'
  ], respuesta_correcta: 0 },
  1423: { texto: '¿Qué establece el artículo 18.4 de la Constitución Española sobre el uso de la informática?', opciones: [
    'Que la ley lo limitará para garantizar la libertad de opinión.',
    'Que la ley lo limitará para garantizar el honor, la intimidad personal y familiar y el pleno ejercicio de los derechos.',
    'Que las comunicaciones postales, telegráficas y telefónicas son secretas salvo resolución judicial.',
    'Que el honor, la intimidad personal y familiar y la propia imagen solo se garantizan si no existe resolución judicial.'
  ], respuesta_correcta: 1 },
  1424: { opciones: [
    'Nueve años y se renovarán por terceras partes cada tres años.',
    'Nueve años y se renovarán por terceras partes cada dos años.',
    'Seis años y se renovarán por terceras partes cada tres años.',
    'Seis años y se renovarán por terceras partes cada dos años.'
  ] },
  1425: { texto: 'Conforme al artículo 29 de la Ley Orgánica 2/1982, ¿qué órgano propone al Rey el nombramiento del Presidente del Tribunal de Cuentas?', opciones: [
    'El Tribunal de Cuentas en Pleno.',
    'El Consejo de Europa.',
    'El Consejo Europeo.',
    'El Consejo de la Unión Europea.'
  ], respuesta_correcta: 0 }
}});
