const apply = require('./aplicar-lote.cjs');
const f = (url, referencia) => ({url, referencia});
apply({
  numero: '788',
  fecha: '2026-11-09',
  records: [
    [4261,[108,115],['IV-8'],['DHCP','DHCPDISCOVER','descubrimiento de servidor'],
      [f('https://www.rfc-editor.org/info/rfc2131/','IETF RFC 2131, §3 y tabla 2: DHCPDISCOVER es el mensaje difundido por el cliente para localizar servidores DHCP disponibles.'),
       f('https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk','ITIC Academy, bloque Protocolos 2026, §3.7 DHCP: DHCPDISCOVER aparece como mensaje inicial del cliente; cotejo curricular.')],
      '', 'Se precisa la fase cliente-servidor: el cliente emite DHCPDISCOVER en difusión para localizar servidores; el servidor responde con DHCPOFFER. REQUEST y ACK pertenecen a etapas posteriores de selección/confirmación.', 'corregida'],
    [4262,[108,115],['IV-8'],['DNS','NS','MX','UDP','TCP','puerto 53'],
      [f('https://www.rfc-editor.org/rfc/rfc1034.html','IETF RFC 1034, conceptos DNS y servidores autoritativos: los servidores que contienen datos de zona autorizados contestan con autoridad.'),
       f('https://www.rfc-editor.org/rfc/rfc1035.html','IETF RFC 1035, §§3.3.9, 3.3.11 y 4.2: MX identifica mail exchangers; NS identifica un servidor autoritativo; DNS usa puerto 53 tanto en UDP como en TCP.'),
       f('https://www.rfc-editor.org/rfc/rfc7766.html','IETF RFC 7766, requisitos de DNS sobre TCP: transferencias de zona y respuestas grandes suelen usar TCP; la implementación DNS debe soportarlo.'),
       f('https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk','ITIC Academy, bloque Redes 2026, epígrafe DNS: distingue NS de MX y sitúa ambos en el sistema de nombres; cotejo curricular.')],
      '', 'Se delimita a DNS clásico sobre UDP/TCP. El registro NS identifica servidores de nombres autoritativos de una zona; MX enumera los servidores de correo, no NS. Se conserva la afirmación de puerto 53 para ambos transportes; no se generaliza a DoT/DoH, que usan otros transportes/puertos.', 'corregida'],
    [4263,[108],[],['TFTP','FTP','UDP','TCP','transferencia de archivos'],
      [f('https://www.rfc-editor.org/info/rfc1350/','IETF RFC 1350, TFTP Revision 2, §§1 y 3: TFTP se implementa sobre UDP.'),
       f('https://www.rfc-editor.org/rfc/rfc959.html','IETF RFC 959, FTP, §2: especifica FTP sobre TCP.'),
       f('https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk','ITIC Academy, bloque Protocolos 2026, apartados de TCP, UDP y protocolos de aplicación; cotejo curricular.')],
      '', 'Se especifica que se comparan las implementaciones de referencia definidas por RFC 1350 y RFC 959: TFTP usa UDP y FTP usa TCP. Se evita extender la afirmación a protocolos alternativos hipotéticos o implementaciones no estándar.', 'corregida'],
    [4264,[108,115],['IV-8'],['ping','ICMP','sonar','etimología','backronym'],
      [f('https://ftp.arl.army.mil/mike/ping.html','Mike Muuss, autor original, “The Story of the PING Program”: explica que lo nombró por el sonido de sonar y afirma que PING no es el acrónimo “Packet InterNet Grouper”.'),
       f('https://www.rfc-editor.org/rfc/rfc792.html','IETF RFC 792, ICMP, Echo/Echo Reply: mecanismo de eco que sustenta la utilidad ping.'),
       f('https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk','ITIC Academy, bloque Protocolos 2026, sección de ICMP y ping; el material recoge la distinción entre origen sonar y expansión retrospectiva.')],
      '', 'Se corrige la premisa de acrónimo: su autor, Mike Muuss, explica que bautizó la utilidad por el sonido de un sonar y niega que “Packet InterNet Grouper” sea su expansión original. “Packet Internet Groper” se difundió posteriormente como backronym, no como etimología del nombre.', 'corregida'],
    [4265,[110,118],['IV-8'],['cableado estructurado','ISO/IEC 11801','EN 50173','norma vigente'],
      [f('https://www.iso.org/standard/66182.html','ISO/IEC 11801-1:2017, requisitos generales del sistema de cableado genérico de locales de cliente; el registro identifica el objeto de la serie.'),
       f('https://www.iso.org/standard/93480.html','ISO/IEC 11801-1:2017/Amd 1:2025, enmienda publicada que aplica a la edición 2017; confirma la vigencia de la serie y su referencia completa.'),
       f('https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk','ITIC Academy, bloque Redes 2026, §3: cableado estructurado, EN 50173 e ISO/IEC 11801; explica la diferencia entre norma internacional ISO/IEC y adopción europea EN.')],
      '', 'Se formula por el nombre normativo exacto: la serie internacional es ISO/IEC 11801, sobre cableado genérico de locales de cliente; en Europa se emplea la familia EN 50173 alineada con ella. Se cita la edición vigente con la enmienda 1:2025.', 'corregida']
  ],
  edits: {
    4261: {
      texto: 'En la fase inicial de DHCP, ¿qué mensaje difunde el cliente para localizar servidores disponibles?',
      opciones: ['DHCPREQUEST.','DHCPACK.','DHCPDISCOVER.','DHCPOFFER.'],
      respuesta_correcta: 2,
      comentarios: 'DHCPDISCOVER es el mensaje difundido por el cliente; DHCPOFFER es la oferta que devuelve el servidor.'
    },
    4262: {
      texto: 'Sobre DNS clásico que usa UDP/TCP, señale la afirmación FALSA:',
      opciones: ['Un servidor autoritativo responde con información de las zonas para las que tiene autoridad.','El registro NS asocia la zona con sus servidores de correo.','Un servidor secundario puede obtener datos actualizados mediante una transferencia de zona.','DNS usa el puerto 53 tanto sobre UDP como sobre TCP.'],
      respuesta_correcta: 1,
      comentarios: 'NS designa servidores de nombres autoritativos; MX designa servidores de correo. DNS clásico usa puerto 53 en UDP y TCP; DNS-over-TLS/HTTPS no se describe aquí.'
    },
    4263: {
      texto: 'Según los protocolos especificados en RFC 1350 y RFC 959, ¿qué protocolo de transporte utiliza TFTP frente a FTP?',
      opciones: ['TFTP usa TCP, al igual que FTP.','TFTP usa TCP y FTP usa UDP.','TFTP usa UDP y FTP usa TCP.','TFTP usa UDP, al igual que FTP.'],
      respuesta_correcta: 2,
      comentarios: 'RFC 1350 define TFTP sobre UDP; RFC 959 especifica FTP sobre TCP.'
    },
    4264: {
      texto: 'Según Mike Muuss, autor de la utilidad ping, ¿de dónde procede el nombre?',
      opciones: ['De las siglas originales “Packet Internet Groper”.','De un nombre asignado por el protocolo ICMP.','De la analogía con el pulso sonoro de un sonar; no lo acuñó originalmente como acrónimo.','De “Packet Internet Gateway”, término de la RFC 792.'],
      respuesta_correcta: 2,
      comentarios: 'Muuss explicó que tomó el nombre del sonido que emite un sonar. Packet Internet Groper/Grouper es una expansión retrospectiva, no el origen del nombre según su autor.'
    },
    4265: {
      texto: '¿Qué serie de normas internacionales establece requisitos para el cableado genérico estructurado en locales de cliente?',
      opciones: ['ISO 50173.','ISO/IEC 11801.','ISO 18765.','ISO 802.11.'],
      respuesta_correcta: 1,
      comentarios: 'La referencia internacional es ISO/IEC 11801; EN 50173 es la familia europea alineada. La respuesta se actualiza a la designación ISO/IEC exacta.'
    }
  }
});
