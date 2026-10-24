const apply = require('./aplicar-lote.cjs');

const sources = {
  http: [
    { url: 'https://www.rfc-editor.org/rfc/rfc9110.html#name-post', referencia: 'RFC 9110, §9.3.3: POST solicita que el recurso de destino procese la representación; es adecuado cuando el servidor selecciona la URI del recurso creado.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc9110.html#name-put', referencia: 'RFC 9110, §9.3.4: PUT crea o reemplaza el estado del recurso identificado por la URI de destino; presupone que el cliente conoce esa URI y es idempotente.' }
  ],
  face: [
    { url: 'https://face.gob.es/js/FACeApp/views/index.html', referencia: 'FACe, portal oficial: permite al proveedor consultar el estado de tramitación de las facturas y solicitar su anulación.' },
    { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A41ab5850-9e1f-46b3-899e-c07458da1d46/FACe-Manual_de_Proveedores_1_2.pdf', referencia: 'Manual oficial de proveedores FACe, versión 1.2: describe las acciones de consulta, visualización y solicitud de anulación; la anulación final corresponde al órgano receptor y el pago se tramita por los sistemas del organismo.' }
  ],
  ldif: [
    { url: 'https://www.rfc-editor.org/rfc/rfc2849.html', referencia: 'RFC 2849, The LDAP Data Interchange Format (LDIF): especifica un formato para transportar entradas de directorio o cambios; se usa para importar y exportar datos entre servidores LDAP.' }
  ],
  csv: [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565', referencia: 'Ley 39/2015, art. 27.3.c: las copias en papel de documentos electrónicos deben indicar su condición de copia e incluir código u otro sistema que permita contrastar autenticidad accediendo a los archivos del órgano emisor.' },
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-5032', referencia: 'Real Decreto 203/2021, arts. 47 y siguientes: regula validez, eficacia y expedición de copias auténticas electrónicas y en papel.' }
  ],
  pki: [
    { url: 'https://csrc.nist.gov/glossary/term/public_key_infrastructure', referencia: 'NIST CSRC Glossary, Public Key Infrastructure: marco de políticas, procesos, personal, plataformas y software para emitir, mantener y revocar certificados de clave pública.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc3647.html', referencia: 'RFC 3647, §4.1.3: identifica CA y RA como participantes de una PKI; la CA emite certificados y la RA puede identificar solicitantes y tramitar solicitudes, pero no firma ni emite certificados.' }
  ]
};

const records = [
  [1386, [65], ['III-12'], ['HTTP', 'API REST', 'POST', 'PUT', 'creación de recursos'], sources.http, null,
    'La clave B se mantiene, pero se precisa el supuesto. POST es lo habitual cuando se envía una petición a una colección y el servidor asigna la URI del nuevo recurso. PUT también puede crear un recurso, pero en la URI objetivo que ya conoce el cliente y con semántica idempotente; por eso «qué verbo permite crear» era ambiguo. Cotejo temático con ITIC Academy: bloque 30, Tecnologías de sistemas de información, versión 2026.1, APIs y servicios web. Correspondencia oficial: A1-65 y A2-III-12.', 'corregida'],
  [1387, [78], ['I-9'], ['FACe', 'factura electrónica', 'anulación', 'estado de tramitación', 'pago'], sources.face, null,
    'La clave C es correcta si se formula como ejecutar la ordenación o el pago: FACe permite consultar estados y solicitar anulación, pero no paga la factura. El portal sí muestra el estado «pagada» cuando el organismo comunica ese resultado; por eso se evita confundir consultar un estado con efectuar el pago. Cotejo temático con ITIC Academy: bloque 35, Tema 78, Comercio y factura electrónica, versión 2026. Correspondencia oficial: A1-78 y A2-I-9.', 'corregida'],
  [1388, [80], [], ['LDAP', 'LDIF', 'intercambio de directorios', 'RFC 2849'], sources.ldif, null,
    'La respuesta B es correcta: LDIF (LDAP Data Interchange Format) representa entradas de directorio o cambios para transportarlos e importarlos/exportarlos. Se corrigen los distractores para evitar errores ortográficos accidentales en acrónimos conocidos. Cotejo temático con ITIC Academy: bloque 45, Tema 122, Correo, mensajería y directorios, versión 2026.', 'corregida'],
  [1389, [80], ['I-6', 'I-9'], ['documento electrónico', 'copia en papel', 'CSV', 'Ley 39/2015', 'autenticidad'], sources.csv, null,
    'La nacionalidad de la persona no cambia la regla y se elimina del enunciado. Una copia en papel de un documento electrónico administrativo debe identificarse como copia y llevar un código u otro sistema que permita comprobar su autenticidad ante el órgano emisor (Ley 39/2015, art. 27.3.c). Se explicita que el supuesto es un documento cuya copia oficial incorpora ese mecanismo; imprimir sin él no basta. Cotejo temático con ITIC Academy: bloque 3, Actuación administrativa, temas 7, 8 y 22, versión 2026. Correspondencia: A1-80 y A2-I-6/A2-I-9.', 'corregida'],
  [1390, [81], ['IV-12'], ['PKI', 'infraestructura de clave pública', 'certificados digitales', 'CA', 'RA'], sources.pki, null,
    'La respuesta A es correcta: una PKI es el marco de políticas, procesos, personas y componentes técnicos para gestionar el ciclo de vida de certificados de clave pública. Una CA emite certificados; una RA apoya funciones de registro/identificación, pero no constituye por sí sola toda la infraestructura ni emite certificados. Se reformula el enunciado para pedir el marco completo. Cotejo temático con ITIC Academy: bloque 36, Temas 79–81, seguridad, criptografía, identificación y firma, versión 2026. Correspondencia oficial: A1-81 y A2-IV-12.', 'corregida']
];

apply({ numero: '214', fecha: '2026-10-24', records, edits: {
  1386: { texto: 'En una API HTTP de estilo REST, si el cliente envía datos a una colección y el servidor asigna la URI del nuevo recurso, ¿qué método se utiliza habitualmente?', respuesta_correcta: 1 },
  1387: {
    texto: '¿Cuál de estas acciones no permite realizar FACe directamente al proveedor de una factura electrónica?',
    opciones: [
      'Consultar el estado de tramitación comunicado por el órgano destinatario.',
      'Solicitar al órgano destinatario la anulación de una factura.',
      'Ordenar o ejecutar el pago de la factura desde el propio portal FACe.',
      'Visualizar una factura electrónica presentada en formato Facturae.'
    ],
    respuesta_correcta: 2
  },
  1388: {
    opciones: [
      'DELF (Directory Exchange List Format).',
      'LDIF (LDAP Data Interchange Format).',
      'LDAP-XML (XML for LDAP).',
      'DSML (Directory Services Markup Language).'
    ], respuesta_correcta: 1
  },
  1389: {
    texto: 'Una persona dispone de un documento electrónico emitido por una Administración pública cuya copia en papel incorpora un código para comprobarlo en la sede del órgano emisor. ¿Puede presentar esa copia en papel?',
    opciones: [
      'Sí; el logotipo del organismo basta para que cualquier impresión sea copia auténtica.',
      'Sí; imprimir la firma electrónica convierte por sí sola el documento en una copia auténtica.',
      'Sí; la copia en papel identificada como tal puede incluir un CSV u otro sistema que permita contrastar su autenticidad ante el órgano emisor.',
      'No; todo documento firmado electrónicamente debe volver a firmarse a mano para presentarse en papel.'
    ], respuesta_correcta: 2
  },
  1390: {
    texto: '¿Cómo se denomina el marco de políticas, procesos, personal y componentes técnicos que permite emitir, mantener y revocar certificados digitales de clave pública?',
    respuesta_correcta: 0
  }
}});
