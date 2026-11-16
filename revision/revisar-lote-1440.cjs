const apply = require('./aplicar-lote.cjs');
const records = [
  [7501, [109], ['IV-13'], ['SMTP', 'RFC 821', 'ASCII', 'MIME', 'correo electrónico'], [
    { url: 'https://www.rfc-editor.org/rfc/rfc821.html', referencia: 'RFC 821, especificación histórica original de SMTP (1982): los datos de mensaje se transmitían como caracteres ASCII de 7 bits; el enunciado se fecha expresamente porque la especificación SMTP y sus extensiones han evolucionado.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc2045.html', referencia: 'RFC 2045, MIME: explica que RFC 821 restringía mensajes a US-ASCII de 7 bits y define codificaciones de transferencia para transportar contenidos de 8 bits o binarios a través de transportes restringidos.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc6152.html', referencia: 'RFC 6152, extensión SMTP 8BITMIME: muestra que SMTP moderno puede negociar transporte de datos MIME de 8 bits; no debe generalizarse la restricción histórica de RFC 821 a todas las implementaciones actuales.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc6531.html', referencia: 'RFC 6531, SMTPUTF8: define extensiones para correo internacionalizado; la compatibilidad requiere negociación entre cliente y servidor.' }
  ], {
    texto: '¿Cuál era una restricción de la especificación SMTP original, RFC 821 (1982), respecto a los datos de mensaje?',
    opciones: ['Permitía transmitir directamente cualquier dato binario sin codificación ni extensiones.', 'Se creó para sustituir MIME, que apareció antes que SMTP.', 'Limitaba los datos transmitidos a caracteres US-ASCII de 7 bits; MIME y posteriores extensiones resolvieron necesidades de contenido más amplio.', 'Era un protocolo de la capa de Presentación del modelo OSI.'],
    respuesta_correcta: 2
  }, 'Corregida C. RFC 821 especificaba SMTP con datos US-ASCII de 7 bits; MIME definió formatos y codificaciones para contenido 8-bit/binario. Se fecha la afirmación porque 8BITMIME (RFC 6152) y SMTPUTF8 (RFC 6531) amplían las capacidades mediante extensiones negociadas. SMTP es protocolo de aplicación, no de presentación OSI.', 'corregida'],

  [7502, [16], ['I-5'], ['discapacidad', 'acoso', 'igualdad de trato', 'RDL 1/2013'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2013-12632', referencia: 'Texto consolidado del Real Decreto Legislativo 1/2013, artículo 2.f): define acoso como conducta no deseada relacionada con la discapacidad, con el objetivo o consecuencia descritos en el enunciado. El artículo 4.3 considera el acoso por razón de discapacidad acto discriminatorio.' }
  ], {
    texto: 'Conforme al artículo 2.f) del texto refundido aprobado por el Real Decreto Legislativo 1/2013, ¿cómo se denomina la conducta no deseada relacionada con la discapacidad de una persona que tiene como objetivo o consecuencia atentar contra su dignidad o crear un entorno intimidatorio, hostil, degradante, humillante u ofensivo?',
    opciones: ['Discriminación directa.', 'Acoso.', 'Discriminación indirecta.', 'Discriminación por asociación.'],
    respuesta_correcta: 1
  }, 'Vigente B. La definición reproduce el artículo 2.f) del Real Decreto Legislativo 1/2013; se identifica el apartado concreto y se mantiene la terminología legal.', 'vigente'],

  [7503, [19], [], ['ONTSI', 'VABpm', 'PIB', 'sector TIC', 'estadística histórica'], [
    { url: 'https://www.ontsi.es/es/publicaciones/Informe-Anual-del-sector-de-las-TIC%2C-los-medios-y-los-servicios-audiovisuales-2020', referencia: 'ONTSI, Informe anual del sector TIC, los medios y los servicios audiovisuales 2020: para el año de referencia 2019 informa un VAB del sector TIC de 40.211 millones de euros y un peso sobre el PIB nacional del 3,23 %.' },
    { url: 'https://www.ontsi.es/sites/ontsi/files/2021-03/InformeSectorTIC2020_0.pdf', referencia: 'Informe ONTSI 2020, edición íntegra: documento histórico con datos de 2019; la pregunta depende de la serie y metodología de esa edición, no de una magnitud actual.' }
  ], {
    texto: 'Según el Informe anual del sector TIC, los medios y los servicios audiovisuales en España 2020 de ONTSI, ¿qué porcentaje del PIB español representó en 2019 el VAB a precios básicos (VABpm) del sector TIC?',
    opciones: ['1,5 % del PIB.', '2,33 % del PIB.', '3,23 % del PIB.', '3,88 % del PIB.'],
    respuesta_correcta: 2
  }, 'Vigente C para la serie histórica que cita el informe. ONTSI informa de 40.211 millones de euros de VAB TIC en 2019, equivalentes al 3,23 % del PIB. Se explicita año de referencia, indicador y fuente para no presentarlo como dato actual.', 'vigente'],

  [7504, [11], [], ['LCSP', 'Ley 9/2017', 'nulidad', 'contratación pública'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902', referencia: 'Texto consolidado de la Ley 9/2017, artículos 38 y 39.2.a) y c): son causas de nulidad de pleno derecho de contratos celebrados por poderes adjudicadores la falta de capacidad/solvencia del adjudicatario y la falta de publicación del anuncio cuando era preceptiva conforme al artículo 135. El artículo 38 regula la invalidez cuando resulte inválido un acto preparatorio o de adjudicación; no convierte cualquier acto no preparatorio en causa autónoma.' }
  ], {
    texto: 'Conforme a los artículos 38 y 39.2 de la Ley 9/2017, ¿qué afirmaciones identifican causas de nulidad de pleno derecho de los contratos celebrados por poderes adjudicadores?',
    opciones: ['La falta de publicación del anuncio de licitación en el medio preceptivo, conforme al artículo 135.', 'La nulidad de cualquier acto que no sea preparatorio del contrato constituye por sí sola una causa autónoma de nulidad del contrato.', 'La falta de capacidad de obrar o de solvencia del adjudicatario.', 'Las respuestas A y C son correctas.'],
    respuesta_correcta: 3
  }, 'Corregida D. Los supuestos A y C corresponden, respectivamente, al artículo 39.2.c) y a) de la LCSP. La formulación B era imprecisa: el artículo 38 trata la invalidez de contratos por invalidez de actos preparatorios o del procedimiento de adjudicación, no establece como causa autónoma la nulidad de cualquier acto no preparatorio. Se acota también el ámbito subjetivo del artículo 39.2 a contratos de poderes adjudicadores.', 'corregida'],

  [7505, [7], [], ['fuentes del derecho', 'costumbre', 'principios generales', 'Código Civil'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1889-4763', referencia: 'Texto consolidado del Código Civil, artículo 1.3 y 1.4: regula los requisitos y aplicación subsidiaria de la costumbre, asimila a ella determinados usos jurídicos y establece la aplicación subsidiaria e informadora de los principios generales del derecho.' }
  ], {
    texto: 'Conforme al artículo 1 del Código Civil, señale la afirmación correcta sobre la costumbre y los principios generales del derecho:',
    opciones: ['La costumbre rige aunque exista ley aplicable y no necesita ser probada.', 'Los usos jurídicos meramente interpretativos de una declaración de voluntad tienen siempre la consideración de costumbre.', 'Los principios generales se aplican en defecto de ley o costumbre, sin perjuicio de su carácter informador del ordenamiento jurídico.', 'Todas las afirmaciones anteriores son correctas.'],
    respuesta_correcta: 2
  }, 'Corregida C. El enunciado original pedía señalar la afirmación incorrecta, pero las tres proposiciones sustantivas reproducían correctamente el artículo 1.3 y 1.4 del Código Civil, por lo que la clave «todas son correctas» no respondía a lo solicitado. Se formula ahora una pregunta positiva inequívoca y se mantiene como respuesta la regla del artículo 1.4.', 'corregida']
];
apply({ numero: '1440', fecha: '2026-11-16', records });
