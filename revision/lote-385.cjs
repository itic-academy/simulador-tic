const aplicar = require('./aplicar-lote.cjs');

const records = [
  [2241, [50], [], ['código QR', 'QR Code', 'ISO/IEC 18004', 'código bidimensional', 'estandarización'], [
    {url:'https://www.iso.org/standard/83389.html', referencia:'ISO/IEC 18004:2024, QR code bar code symbology specification: norma internacional vigente que especifica la simbología, formatos, codificación, dimensiones y corrección de errores del QR Code.'},
    {url:'https://www.qrcode.com/en/faq.html', referencia:'DENSO WAVE, FAQ Intellectual Property: para los QR conformes a JIS/ISO no se exige licencia ni tasa por su utilización, creación o lectura.'},
    {url:'https://www.jpo.go.jp/e/news/koho/innovation/01_qrcode_e.html', referencia:'Japan Patent Office, QR Code (DENSO WAVE): la especificación se hizo pública y la patente disponible gratuitamente impulsó su uso extendido.'}
  ], 'ISO/IEC 18004:2024 y DENSO WAVE/Japan Patent Office sobre uso de códigos normalizados', 'Se corrige la opción falsa para acotarla a códigos QR conformes con ISO/IEC 18004: no son una especificación cerrada ni se requiere pagar licencia para su uso normalizado. DENSO WAVE conserva derechos de marca y hubo patentes, pero permite gratuitamente el uso de los códigos QR estandarizados; no se generaliza esa autorización a variantes propietarias.', 'corregida'],
  [2242, [57], ['II-1'], ['virtualización', 'máquina virtual', 'Oracle VirtualBox', 'hipervisor', 'Jaikoz', 'WebSphere', 'Toad'], [
    {url:'https://docs.oracle.com/en/virtualization/virtualbox/7.2/user/Introduction.html', referencia:'Oracle VirtualBox User Guide 7.2, About Oracle VirtualBox: producto de virtualización multiplataforma que ejecuta varios sistemas operativos dentro de máquinas virtuales en el equipo anfitrión.'}
  ], 'Oracle VirtualBox User Guide 7.2, About Oracle VirtualBox', 'Se confirma VirtualBox y se acota el enunciado: Oracle lo identifica como producto de virtualización alojada para ejecutar sistemas operativos en máquinas virtuales. Jaikoz es una aplicación de etiquetas de audio, WebSphere una plataforma de middleware y Toad una herramienta para bases de datos; no son hipervisores de escritorio.', 'corregida'],
  [2243, [81], ['I-6', 'IV-12'], ['tarjetas sin contacto', 'tarjetas de proximidad', 'ISO/IEC 14443', 'ISO/IEC 15693', 'proximity cards'], [
    {url:'https://www.iso.org/standard/73596.html', referencia:'ISO/IEC 14443-1:2018: define las características físicas de las tarjetas/objetos de proximidad (PICCs).'},
    {url:'https://www.iso.org/obp/ui?_escaped_fragment_=iso%3Astd%3Aiso-iec%3A15693%3A-3%3Aed-4%3Av1%3Aen', referencia:'ISO/IEC 15693-3:2026, introducción: distingue tarjetas close-coupled ISO/IEC 10536, proximity ISO/IEC 14443 y vicinity ISO/IEC 15693.'}
  ], 'ISO/IEC 14443-1:2018 e ISO/IEC 15693-3:2026, clasificación de tarjetas sin contacto', 'Se confirma ISO/IEC 14443, la serie de tarjetas u objetos sin contacto de proximidad. ISO/IEC 15693 corresponde a tarjetas de vecindad (vicinity), e ISO/IEC 10536 a close-coupled; se evita confundir las clases por alcance.', 'vigente'],
  [2244, [80], ['I-6', 'IV-12'], ['CRL', 'lista de revocación de certificados', 'alcance', 'motivo de revocación', 'RFC 5280'], [
    {url:'https://www.rfc-editor.org/rfc/rfc5280.html', referencia:'RFC Editor, RFC 5280 §3.3: una CRL completa contiene los certificados no expirados revocados dentro de su alcance por motivos incluidos en ese alcance; distingue una CRL full and complete, que cubre todos los certificados del emisor y cualquier motivo.'}
  ], 'IETF RFC Editor, RFC 5280, perfil de certificados X.509 y CRL', 'Se matiza el enunciado para distinguir CRL completa y CRL «full and complete» según RFC 5280. Una CRL completa lista los certificados no expirados revocados dentro de su alcance y por los motivos cubiertos; la alternativa «cualquier motivo» describe la variante de alcance total, no todas las CRL completas.', 'corregida'],
  [2245, [81], ['I-6', 'IV-12'], ['tarjeta con circuito integrado', 'ISO/IEC 7816', 'interfaz eléctrica', 'protocolos de transmisión', 'smart card'], [
    {url:'https://www.iso.org/standard/38770.html', referencia:'ISO/IEC 7816-3:2006, Cards with contacts — Electrical interface and transmission protocols: especifica estructuras de alimentación y señal e intercambio de información entre tarjeta IC y dispositivo de interfaz; edición vigente confirmada en 2018 con enmienda 1:2025.'}
  ], 'ISO/IEC 7816-3:2006/Amd 1:2025, interfaz eléctrica y protocolos de transmisión', 'Se confirma ISO/IEC 7816-3. La edición publicada ISO/IEC 7816-3:2006 fue confirmada en 2018 y cuenta con la enmienda 1:2025; la página ISO la describe como especificación de interfaz eléctrica y protocolos de transmisión. La parte 4 trata comandos interindustria, no esos aspectos físicos/de comunicación.', 'vigente']
];

const edits = {
  2241: {texto:'Respecto de los códigos QR conformes con ISO/IEC 18004, señale la afirmación falsa:'},
  2242: {texto:'¿Cuál de estas herramientas de Oracle es un producto de virtualización que permite ejecutar sistemas operativos en máquinas virtuales sobre un equipo anfitrión?'},
  2244: {texto:'Según RFC 5280, ¿qué incluye una CRL completa cuyo alcance se limita a determinados motivos de revocación?'}
};

aplicar({numero:'385', fecha:'2026-10-28', records, edits});
