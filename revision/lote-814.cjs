require('./aplicar-lote.cjs')({
  numero: '814', fecha: '2026-11-10',
  records: [
    [4391, [113], ['IV-10'], ['ATM', 'celdas', 'longitud fija', 'latencia', 'retardo de transferencia'], [
      { url: 'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-I.361-199902-I%21%21PDF-E&lang=e&type=items', referencia: 'UIT-T I.361: define la celda ATM de longitud fija de 53 octetos, con cabecera de 5 y carga de 48.' },
      { url: 'https://www.itu.int/rec/T-REC-I.356/en', referencia: 'UIT-T I.356: define parámetros para cuantificar el desempeño de transferencia de celdas ATM, incluidos retardo de transferencia y variación del retardo.' },
      { url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 42 Redes, edición 2026: cotejo del contenido ATM y de redes de transporte/agregación incluido en los temas de redes.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 TIC AGE 2025, anexo I, tema 113: redes de transporte y agregación, incluida ATM.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI 2025, anexo IX, tema IV-10: redes de área extensa y tecnologías de transporte.' }
    ], { texto: 'ATM transmite celdas de longitud fija (53 octetos). Frente a una trama larga de longitud variable, ¿qué ventaja puede aportar ese tamaño uniforme?', opciones: [
      'Aumenta la eficiencia del enlace al permitir transmitir aunque el medio esté ocupado por otra trama.',
      'Reduce la espera que una unidad larga puede imponer a las demás, acotando el tiempo de bloqueo por cada unidad transmitida.',
      'Elimina por completo la congestión y el retardo en la red.',
      'Permite comparar el tráfico observado con el contrato de tráfico negociado.'
    ] }, 'La celda ATM tiene tamaño fijo de 53 octetos (UIT-T I.361). Al segmentar la información en unidades pequeñas y uniformes, una unidad larga no ocupa el enlace de forma continua hasta terminar y se reduce la espera de bloqueo que puede sufrir el tráfico intercalado. Esto no elimina la congestión ni el retardo: la UIT-T define por separado parámetros de retardo y variación del retardo de transferencia de celdas. Clave B.', 'corregida'],

    [4392, [22], ['I-6'], ['FIRe', 'firma electrónica', 'firma local', 'Cl@ve Firma', 'AutoFirma'], [
      { url: 'https://administracionelectronica.gob.es/ctt/fire', referencia: 'Portal de Administración Electrónica, ficha FIRe: solución integral que centraliza requisitos para crear firmas electrónicas con certificados locales o en la nube y delega en ella la realización de la firma.' },
      { url: 'https://administracionelectronica.gob.es/ctt/fire/infoadicional', referencia: 'PAe, información adicional de FIRe: describe un servidor central de firma electrónica y un API para integrar aplicaciones.' },
      { url: 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 03 Actuación administrativa y Administración digital, versión 2026.2: cotejo de firma electrónica, Cl@ve, AutoFirma y FIRe en la tramitación electrónica.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 TIC AGE 2025, anexo I, tema 22: papel de las TIC en la modernización y legislación de Administración electrónica.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI 2025, anexo IX, tema I-6: identidad y firma electrónica y su régimen jurídico.' }
    ], null, 'FIRe es una solución de firma electrónica integrable en aplicaciones públicas. Su servidor permite realizar firmas usando certificados locales o en la nube (incluida Cl@ve Firma); no es un almacén de apoderamientos ni un servicio de archivo. Clave C.', 'vigente'],

    [4393, [125], ['IV-12'], ['cortafuegos', 'firewall', 'seguridad en redes', 'control de tráfico', 'política de seguridad'], [
      { url: 'https://csrc.nist.gov/glossary/term/firewall', referencia: 'NIST CSRC Glossary, firewall: incluye definiciones de pasarela que limita el acceso entre redes conforme a una política local y de dispositivo/programa que controla el flujo de tráfico entre redes o anfitriones con posturas de seguridad distintas.' },
      { url: 'https://csrc.nist.gov/pubs/sp/800/41/r1/final', referencia: 'NIST SP 800-41 Rev. 1, Guidelines on Firewalls and Firewall Policy: guía técnica sobre controles firewall y políticas de filtrado de tráfico.' },
      { url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 48 Seguridad en redes y aplicaciones, edición 2026: incluye cortafuegos, seguridad perimetral, control de accesos y herramientas de prevención.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 TIC AGE 2025, anexo I, tema 125: seguridad en redes, cortafuegos y control de accesos.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI 2025, anexo IX, tema IV-12: seguridad en redes, seguridad perimetral y control de accesos.' }
    ], { texto: 'En seguridad de redes, ¿qué describe mejor un cortafuegos (firewall)?', opciones: [
      'Un sistema o pasarela que controla el tráfico y limita el acceso entre redes o equipos conforme a una política de seguridad.',
      'Una herramienta que únicamente detecta y elimina archivos infectados en un equipo.',
      'Un servidor que solo almacena en caché las páginas web solicitadas por los usuarios.',
      'Un sensor pasivo que genera alertas, pero no aplica reglas para permitir o bloquear tráfico.'
    ] }, 'Un firewall controla el flujo de comunicaciones entre redes o anfitriones con diferentes posturas de seguridad y limita accesos según la política local. Puede implantarse como dispositivo, software o conjunto de componentes; no es sinónimo de antivirus, proxy de caché ni sensor pasivo de detección. Clave A.', 'corregida'],

    [4394, [118], ['IV-8'], ['Ethernet', '10BASE-T', 'Manchester', 'codificación de línea', 'IEEE 802.3'], [
      { url: 'https://grouper.ieee.org/groups/802/3/1TPCESG/public/tazebay_01_0512.pdf', referencia: 'IEEE 802.3 1TPCE Study Group, comparación de PHY Ethernet: identifica 10BASE-T (802.3i, 10 Mb/s) con codificación binaria Manchester y contrasta otros PHY/codificaciones.' },
      { url: 'https://grouper.ieee.org/groups/802/3/cg/public/adhoc/cordaro_3cg_05_0418.pdf', referencia: 'IEEE 802.3cg Task Force, presentación técnica: indica que 10BASE-T usa Manchester, mientras que 10BASE-T1S emplea Differential Manchester.' },
      { url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 42 Redes, edición 2026: cotejo de las redes LAN, tecnologías Ethernet, medios físicos y codificación dependiente del PHY.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 TIC AGE 2025, anexo I, tema 118: redes de área local, medios de transmisión y tecnologías LAN.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI 2025, anexo IX, tema IV-8: redes locales, protocolos y técnicas de transmisión.' }
    ], { texto: '¿Qué codificación de línea utiliza el estándar Ethernet 10BASE-T (10 Mb/s)?', opciones: ['Manchester.', 'MLT-3, propia de 100BASE-TX.', 'PAM-5, usada por 1000BASE-T.', '64B/66B, empleada en PHY Ethernet de mayor velocidad.'] }, '10BASE-T (IEEE 802.3i, 10 Mb/s) utiliza codificación Manchester. No debe generalizarse esta respuesta a todo Ethernet: la codificación/modulación varía según el PHY; por ejemplo, 100BASE-TX utiliza MLT-3 y 1000BASE-T PAM-5. Clave A.', 'corregida'],

    [4395, [125], ['IV-12'], ['esteganografía', 'ocultar la existencia', 'archivo portador', 'seguridad de la información'], [
      { url: 'https://csrc.nist.gov/glossary/term/steganography', referencia: 'NIST CSRC Glossary, steganography: práctica de comunicar ocultando la existencia de la comunicación; contempla introducir datos en otro archivo o medio.' },
      { url: 'https://csrc.nist.gov/glossary/term/cryptography', referencia: 'NIST CSRC Glossary, cryptography: disciplina diferente, centrada en transformar datos para protegerlos; no implica por sí misma ocultar que existe una comunicación.' },
      { url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 48 Seguridad en redes y aplicaciones, edición 2026: trata técnicas criptográficas y contenidos de ciberseguridad que incluyen esteganografía.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 TIC AGE 2025, anexo I, tema 125: seguridad en redes, ataques y técnicas criptográficas.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI 2025, anexo IX, tema IV-12: seguridad en redes y técnicas criptográficas.' }
    ], { texto: '¿Cómo se denomina la técnica que oculta la existencia de un mensaje insertándolo en otro archivo o medio portador?', opciones: ['Esteganografía.', 'Criptografía.', 'Criptoanálisis.', 'Estegoanálisis.'] }, 'La esteganografía oculta que existe una comunicación mediante la inserción del mensaje en un archivo o medio portador. La criptografía transforma o protege el contenido, pero no oculta necesariamente la existencia del mensaje; el criptoanálisis estudia cómo romper sistemas criptográficos y el estegoanálisis analiza técnicas esteganográficas. Clave A.', 'corregida']
  ],
  edits: {
    4391: { texto: 'ATM transmite celdas de longitud fija (53 octetos). Frente a una trama larga de longitud variable, ¿qué ventaja puede aportar ese tamaño uniforme?', opciones: ['Aumenta la eficiencia del enlace al permitir transmitir aunque el medio esté ocupado por otra trama.', 'Reduce la espera que una unidad larga puede imponer a las demás, acotando el tiempo de bloqueo por cada unidad transmitida.', 'Elimina por completo la congestión y el retardo en la red.', 'Permite comparar el tráfico observado con el contrato de tráfico negociado.'] },
    4393: { texto: 'En seguridad de redes, ¿qué describe mejor un cortafuegos (firewall)?', opciones: ['Un sistema o pasarela que controla el tráfico y limita el acceso entre redes o equipos conforme a una política de seguridad.', 'Una herramienta que únicamente detecta y elimina archivos infectados en un equipo.', 'Un servidor que solo almacena en caché las páginas web solicitadas por los usuarios.', 'Un sensor pasivo que genera alertas, pero no aplica reglas para permitir o bloquear tráfico.'] },
    4394: { texto: '¿Qué codificación de línea utiliza el estándar Ethernet 10BASE-T (10 Mb/s)?', opciones: ['Manchester.', 'MLT-3, propia de 100BASE-TX.', 'PAM-5, usada por 1000BASE-T.', '64B/66B, empleada en PHY Ethernet de mayor velocidad.'], respuesta_correcta: 0 }
  }
});
