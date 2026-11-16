const apply = require('./aplicar-lote.cjs');

const records = [
  [7436, [122, 125], ['IV-12'], ['correo electrónico', 'OpenPGP', 'PGP/MIME', 'S/MIME', 'cifrado de mensaje'], [
    { url: 'https://www.rfc-editor.org/rfc/rfc9580.html', referencia: 'IETF RFC 9580 (2024), formato OpenPGP vigente: define paquetes y mecanismos para cifrar y descifrar mensajes, además de firma y gestión de claves; sustituye RFC 4880.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc3156.html', referencia: 'IETF RFC 3156, MIME Security with OpenPGP: especifica cómo transportar mensajes cifrados y firmados OpenPGP en MIME (PGP/MIME).' },
    { url: 'https://www.rfc-editor.org/rfc/rfc8551.html', referencia: 'IETF RFC 8551, S/MIME 4.0: especifica servicios criptográficos de firma y cifrado para datos MIME.' }
  ], {
    texto: '¿Qué estándares de protección criptográfica a nivel de mensaje permiten cifrar correo electrónico cuando se dispone de las claves necesarias?',
    opciones: ['OpenPGP (por ejemplo, PGP/MIME).', 'S/MIME.', 'Tanto OpenPGP como S/MIME.', 'Ninguno de los dos.'],
    respuesta_correcta: 2
  }, 'Corregida C. El original llamaba «herramientas» a PGP y S/MIME y mezclaba un nombre de familia de productos con un estándar. OpenPGP y S/MIME permiten cifrado de contenido MIME; se necesitan las claves/certificados adecuados y compatibilidad del cliente y destinatario. Esto no significa que el correo ordinario quede cifrado automáticamente ni que se oculten todos sus metadatos.', 'corregida'],
  [7437, [108], ['IV-7'], ['teorema de Nyquist', 'tasa de símbolos', 'baudios', 'ancho de banda', 'ISI'], [
    { url: 'https://doi.org/10.1109/T-AIEE.1928.5055024', referencia: 'Harry Nyquist, “Certain Topics in Telegraph Transmission Theory”, Transactions of the AIEE 47(2), 1928, pp. 617–644, DOI 10.1109/T-AIEE.1928.5055024: análisis original de la tasa máxima de elementos de señal en un canal limitado en banda.' },
    { url: 'https://www.govinfo.gov/content/pkg/GOVPUB-C-PURL-gpo13207/pdf/GOVPUB-C-PURL-gpo13207.pdf', referencia: 'Manual de comunicaciones de la Administración estadounidense, sección de tasa de Nyquist: para filtro ideal con respuesta plana en ancho B y sin interferencia intersimbólica, 1/τ = 2B símbolos/s. La cota es de tasa de símbolos (baudios), no de bits/s independiente de la modulación.' }
  ], {
    texto: 'Para un canal ideal limitado en banda, de ancho B, con respuesta plana y sin interferencia intersimbólica, ¿qué cota da Nyquist para la tasa de símbolos?',
    opciones: ['Como máximo B símbolos por segundo.', 'Como máximo 2B símbolos por segundo.', 'Como máximo 2B bits por segundo, cualquiera que sea la modulación.', 'No existe una cota relacionada con el ancho de banda.'],
    respuesta_correcta: 1
  }, 'Corregida B. La clave del original era la habitual, pero omitía las hipótesis del resultado y podía confundirse la tasa de baudios con la tasa binaria. La cota ideal es 2B símbolos/s sin ISI; los bits/s dependen además del número de niveles y del ruido, y el filtrado práctico con exceso de banda puede reducir la tasa de símbolos alcanzable.', 'corregida'],
  [7438, [18], ['II-16', 'III-14'], ['LinkedIn', 'Guía de Comunicación Digital AGE', 'redes sociales', 'recomendaciones históricas'], [
    { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A740910dd-55a0-49f5-9712-154084a09ebb/8-Guia-de-Comunicacion-Digital-para-la-AGE-Tecnologias-web-2-0-_25-02-2013_-.pdf', referencia: 'Guía de Comunicación Digital para la AGE, fascículo Tecnología Web 2.0 (2013), epígrafe LinkedIn y grupos: fuente primaria histórica que recoge las pautas sobre promoción del grupo, publicación de noticias del departamento y automatización mediante feeds. Se pregunta expresamente por lo que recomendaba esa edición; no se califican las pautas como obligaciones jurídicas vigentes.' },
    { url: 'https://boe.es/buscar/doc.php?id=BOE-A-2022-10329', referencia: 'Resolución de 13 de mayo de 2022, BOE-A-2022-10329: actualización de la Guía de Comunicación Digital para la AGE, referida al fascículo de imagen institucional; evidencia que la guía ha tenido actualización parcial y no convierte las antiguas pautas de LinkedIn en deberes legales.' }
  ], {
    texto: 'Según las recomendaciones históricas para los grupos de LinkedIn del fascículo Tecnología Web 2.0 de la Guía de Comunicación Digital para la AGE (2013), ¿qué conjunto de pautas se indicaba?',
    opciones: [
      'Promocionar el grupo mediante blogs, foros y otros canales.',
      'Publicar manualmente noticias relacionadas con el departamento.',
      'Automatizar la publicación de contenidos mediante feeds.',
      'Las tres pautas anteriores.'
    ],
    respuesta_correcta: 3
  }, 'Histórica D. La clave corresponde al fascículo de 2013, pero el original llamaba «obligaciones» a recomendaciones de comunicación. Se conserva el contenido examinable identificando con precisión la edición y su carácter recomendatorio. No debe interpretarse como obligación jurídica actual ni como pauta universal para las funciones actuales de LinkedIn. La búsqueda en Academy localizó el bloque general de trabajo colaborativo y una referencia a la Guía, pero no una reproducción de estas instrucciones concretas; prevalece el fascículo oficial citado.', 'historica'],
  [7439, [123], ['IV-15'], ['UMTS', 'W-CDMA', 'FDD', 'TDD', 'multicódigo'], [
    { url: 'https://www.etsi.org/deliver/etsi_TS/125200_125299/125201/19.00.00_60/ts_125201v190000p.pdf', referencia: 'ETSI/3GPP TS 25.201 V19.0.0, Release 19 (2025), §4.2: UTRA emplea DS-CDMA; describe WCDMA en torno a 5 MHz para FDD y TDD de 3,84 Mcps, además de configuraciones TDD de 10 MHz/7,68 Mcps y banda estrecha de 1,6 MHz/1,28 Mcps. Confirma que 50 MHz no es el ancho típico del radiocanal y que UTRA contempla FDD y TDD.' },
    { url: 'https://www.etsi.org/deliver/etsi_ts/125200_125299/125211/19.00.00_60/ts_125211v190000p.pdf', referencia: 'ETSI/3GPP TS 25.211 V19.0.0, Release 19 (2025), §5.3.2: permite explícitamente transmisión multicódigo en enlace descendente, asignando la combinación de canales de transporte a varios DPCH paralelos con el mismo factor de expansión.' }
  ], {
    texto: '¿Cuál de las siguientes afirmaciones sobre W-CDMA, utilizado en UMTS, es correcta?',
    opciones: [
      'Sus radiocanales tienen 50 MHz de ancho.',
      'Puede emplear transmisión multicódigo.',
      'No admite duplexación FDD.',
      'No admite duplexación TDD.'
    ],
    respuesta_correcta: 1
  }, 'Corregida B. La opción correcta del original se mantiene. Se sustituye «característica técnica» vaga por una comprobación concreta y se corrigen los distractores absolutos: UTRA contempla FDD y TDD; la configuración WCDMA clásica ocupa aproximadamente 5 MHz, no 50 MHz. La especificación física vigente permite multicode al mapear la combinación de canales de transporte en varios DPCH paralelos.', 'corregida'],
  [7440, [3], ['I-1'], ['Constitución Española', 'Estatutos de Autonomía', 'artículo 147', 'ley orgánica'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229&p=20260520', referencia: 'Constitución Española, texto consolidado del BOE vigente a 20-05-2026, arts. 147.1 y 147.3: los Estatutos son norma institucional básica de cada comunidad autónoma, el Estado los reconoce y ampara como parte integrante de su ordenamiento, y su reforma requiere en todo caso aprobación de las Cortes Generales mediante ley orgánica.' }
  ], {
    texto: 'Conforme a los apartados 1 y 3 del artículo 147 de la Constitución Española, ¿qué afirmaciones sobre los Estatutos de Autonomía son correctas?',
    opciones: [
      'Son la norma institucional básica de cada comunidad autónoma.',
      'El Estado los reconoce y ampara como parte integrante de su ordenamiento jurídico.',
      'Su reforma requiere, en todo caso, aprobación de las Cortes Generales mediante ley orgánica.',
      'Todas las afirmaciones anteriores son correctas.'
    ],
    respuesta_correcta: 3
  }, 'Corregida D. La clave original es correcta. Se identifica el artículo y se precisa que el requisito de aprobación por ley orgánica se refiere expresamente a la reforma (art. 147.3), evitando que se confunda con la elaboración del proyecto regulada en el art. 146. El art. 147.1 contiene las dos primeras proposiciones.', 'corregida']
];

apply({ numero: '1427', fecha: '2026-11-16', records });
