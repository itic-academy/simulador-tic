const apply = require('./aplicar-lote.cjs');

const records = [
  [7406, [108, 113], ['IV-10'], ['PPP', 'SDH', 'PPP over SONET/SDH', 'enlace punto a punto'], [
    { url: 'https://www.rfc-editor.org/rfc/rfc2615.html', referencia: 'IETF RFC 2615, PPP over SONET/SDH, §§Abstract–1: define PPP sobre circuitos SONET/SDH; PPP fue diseñado como método estándar para comunicar sobre enlaces punto a punto y SDH constituye un circuito punto a punto.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc1661.html', referencia: 'IETF RFC 1661, The Point-to-Point Protocol (PPP): especifica el protocolo de enlace de datos para transportar datagramas multiprotocolo sobre enlaces punto a punto.' }
  ], {
    texto: '¿Qué protocolo de enlace se especifica para transportar datagramas IP sobre un circuito punto a punto SONET/SDH?',
    opciones: ['PPP.', 'LAPB.', 'L2TP.', 'L2F.'],
    respuesta_correcta: 0
  }, 'Vigente A. RFC 2615 especifica PPP sobre SONET/SDH y señala que SDH es un circuito punto a punto para el que PPP resulta adecuado. LAPB pertenece al nivel de enlace de X.25; L2TP y L2F son protocolos de túnel, no el protocolo de enlace que RFC 2615 emplea sobre SDH.', 'vigente'],
  [7407, [48], ['IV-12'], ['CCN-CERT', 'CLARA', 'ENS', 'análisis de cumplimiento'], [
    { url: 'https://www.ccn-cert.cni.es/es/soluciones-seguridad/clara?format=html', referencia: 'CCN-CERT, herramienta CLARA: la presenta como herramienta para evaluar características técnicas de seguridad definidas por el ENS, actualmente actualizado por el Real Decreto 311/2022; el análisis se apoya en plantillas de guías CCN-STIC.' },
    { url: 'https://www.ccn-cert.cni.es/es/seguridad-al-dia/actualidad-ccn/10582-la-solucion-clara-amplia-su-ambito-de-actuacion-para-llevar-a-cabo-analisis-de-cumplimiento-de-seguridad-sobre-entornos-linux.html', referencia: 'CCN-CERT, ampliación de CLARA a Linux (13/10/2020): confirma que automatiza análisis y auditoría local/remota para evaluar características de seguridad y cumplimiento del ENS.' },
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191', referencia: 'Real Decreto 311/2022, de 3 de mayo, regulador del Esquema Nacional de Seguridad: norma vigente que sustituyó el marco del RD 3/2010 citado en la ficha histórica de la herramienta.' }
  ], {
    texto: '¿Cómo se denomina la herramienta del CCN-CERT que analiza configuraciones técnicas de sistemas para evaluar su adecuación a las medidas del Esquema Nacional de Seguridad?',
    opciones: ['INES.', 'LUCIA.', 'CLARA.', 'CARMEN.'],
    respuesta_correcta: 2
  }, 'Vigente C. CLARA es la herramienta del CCN-CERT para analizar configuraciones técnicas y evaluar el cumplimiento de las medidas del ENS. Se actualiza la referencia normativa del enunciado antiguo al RD 311/2022, que regula actualmente el ENS; la ficha de CLARA conserva la referencia histórica al RD 3/2010.', 'vigente'],
  [7408, [125], ['IV-12'], ['phishing', 'ingeniería social', 'suplantación', 'NIST'], [
    { url: 'https://csrc.nist.gov/glossary/term/phishing', referencia: 'NIST CSRC Glossary, phishing: define la técnica como solicitud fraudulenta en correo o web en la que el autor se hace pasar por una empresa legítima o persona de confianza para obtener datos; NIST SP 800-115 la identifica como forma digital de ingeniería social.' },
    { url: 'https://csrc.nist.gov/glossary/term/social_engineering', referencia: 'NIST CSRC Glossary, social engineering: intento de engañar a una persona para que revele información o facilite un ataque a sistemas o redes.' }
  ], {
    texto: '¿Qué ataque de ingeniería social utiliza normalmente mensajes o sitios fraudulentos que suplantan a una entidad de confianza para obtener información de la víctima?',
    opciones: ['Phishing.', 'Man-in-the-middle.', 'Eavesdropping.', 'Sniffing.'],
    respuesta_correcta: 0
  }, 'Vigente A. NIST define phishing como una solicitud fraudulenta que suplanta a una entidad legítima o persona reputada para obtener datos sensibles; es una forma digital de ingeniería social. Man-in-the-middle intercepta o altera comunicaciones; eavesdropping y sniffing describen escucha/captura de tráfico, no necesariamente engaño de la víctima.', 'vigente'],
  [7409, [118], ['IV-9'], ['tcpdump', 'captura de paquetes', 'pcap', 'opción -w'], [
    { url: 'https://github.com/the-tcpdump-group/tcpdump/blob/master/tcpdump.1.in', referencia: 'Manual fuente mantenido por el proyecto tcpdump: la opción -w escribe los paquetes sin procesar en el fichero indicado; -r lee una captura ya guardada. El comando se formula con la sintaxis válida de opciones.' },
    { url: 'https://www.tcpdump.org/manpages/tcpdump.1.html', referencia: 'tcpdump(1), manual oficial: `-w file` escribe los paquetes capturados en un fichero para analizarlos posteriormente; `-r file` lee paquetes desde una captura existente.' }
  ], {
    texto: '¿Qué comando captura tráfico de la interfaz eth0, muestra información detallada y guarda la captura en output.pcap?',
    opciones: [
      'tcpdump -i eth0 -vv -F output.pcap',
      'tcpdump -i eth0 -vv -r output.pcap',
      'tcpdump -i eth0 -vv -f output.pcap',
      'tcpdump -i eth0 -vv -w output.pcap'
    ],
    respuesta_correcta: 3
  }, 'Corregida D. Se arregla la sintaxis espaciada del original. En tcpdump, `-i` selecciona la interfaz, `-vv` aumenta el detalle y `-w` guarda los paquetes capturados en el fichero. `-r` lee una captura previa y `-F` designa un fichero de filtro; `-f` no guarda la salida en disco.', 'corregida'],
  [7410, [79], ['IV-12'], ['TLS', 'SSL obsoleto', 'claves de tráfico', 'cifrado simétrico', 'nonce', 'IV'], [
    { url: 'https://www.rfc-editor.org/rfc/rfc8446.html', referencia: 'IETF RFC 8446, TLS 1.3 §§5.3 y 7: el handshake produce secretos de tráfico de los que se derivan claves de cifrado y nonces; el nonce por registro se construye con el número de secuencia y un IV específico de conexión. Las suites TLS 1.3 usan AEAD.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc7568.html', referencia: 'IETF RFC 7568: depreca SSL 3.0 y prohíbe negociarlo por sus vulnerabilidades; por ello la pregunta se actualiza a TLS vigente.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc9325.html', referencia: 'IETF RFC 9325, recomendaciones de uso seguro de TLS/DTLS: recomienda soporte de TLS 1.3 y su preferencia; documenta problemas de versiones TLS antiguas y de IV en TLS 1.0 CBC.' }
  ], {
    texto: 'En TLS 1.3, ¿cómo se protegen los datos de aplicación en los registros?',
    opciones: [
      'Con claves simétricas de tráfico derivadas del handshake y un nonce por registro; su construcción incorpora un IV derivado para la conexión.',
      'Cifrando cada registro directamente con la clave privada del certificado del servidor.',
      'Usando Diffie–Hellman como algoritmo de cifrado simétrico de los datos.',
      'Con una clave pública compartida por todos los clientes y sin claves de tráfico por conexión.'
    ],
    respuesta_correcta: 0
  }, 'Corregida A. El original trataba SSL como protocolo vigente y afirmaba universalmente que la protección usaba «clave de sesión y vector inicial». SSL 3.0 está obsoleto y no debe negociarse. En TLS 1.3, el handshake genera secretos de tráfico de los que se derivan claves simétricas y nonces por registro; el IV se combina con el número de secuencia, no funciona como un requisito universal separado en todas las generaciones/modos.', 'corregida']
];

apply({ numero: '1421', fecha: '2026-11-15', records });
