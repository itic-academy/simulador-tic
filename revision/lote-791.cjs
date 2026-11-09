const apply = require('./aplicar-lote.cjs');
const f = (url, referencia) => ({url, referencia});

apply({
  numero: '791',
  fecha: '2026-11-09',
  records: [
    [4276,[125],['IV-12'],['IDPS','IDS de red','sensor','sonda','segmentos de red'],
      [f('https://csrc.nist.gov/pubs/sp/800/94/final','NIST SP 800-94, guía IDPS final; describe sistemas IDPS basados en red, sus sensores y la supervisión del tráfico de segmentos o dispositivos.'),
       f('https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk','ITIC Academy, bloque Seguridad en redes y nivel de aplicación 2026, A1-125/A2-C10: ataques, herramientas de prevención y detección/control de intrusiones; cotejo curricular.'),
       f('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','Convocatoria A1 GSI 2025, anexo I, tema 125: ataques en red y herramientas de prevención, incluido el control de intrusiones.'),
       f('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262','Convocatoria A2 GSI 2025, anexo, tema IV-12: seguridad en redes y control de accesos.')],
      '', 'La respuesta es «sonda», término habitual en español para el sensor/agente de captación de un IDPS distribuido de red. La sonda observa el segmento y remite/entrega eventos al análisis o gestión; no es un cortafuegos, honeypot ni bastión. NIST usa normalmente “sensor”.', 'corregida'],
    [4277,[126],['IV-12'],['seguridad de correo','PGP','PEM','MOSS','S/MIME','Single MIME'],
      [f('https://www.rfc-editor.org/rfc/rfc9580.html','IETF RFC 9580, OpenPGP: especificación vigente del formato de datos y operaciones criptográficas usado, entre otros fines, en correo.'),
       f('https://www.rfc-editor.org/rfc/rfc1421.html','IETF RFC 1421, Privacy Enhancement for Internet Electronic Mail (PEM), especificación histórica de protección de correo.'),
       f('https://www.rfc-editor.org/rfc/rfc1848.html','IETF RFC 1848, MIME Object Security Services (MOSS): define firma digital y cifrado de objetos MIME; estándar histórico, distinto de la opción inventada “Single MIME”.'),
       f('https://www.rfc-editor.org/rfc/rfc8551.html','IETF RFC 8551, S/MIME 4.0: especifica Secure/Multipurpose Internet Mail Extensions; la sigla correcta es S/MIME, no “Single MIME”.'),
       f('https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk','ITIC Academy, bloque Seguridad en redes y nivel de aplicación 2026, seguridad en aplicaciones/correo; cotejo curricular.'),
       f('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','Convocatoria A1 GSI 2025, anexo I, tema 126: seguridad en el nivel de aplicación y tipos de ataques/protección.'),
       f('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262','Convocatoria A2 GSI 2025, anexo, tema IV-12: protocolos seguros y técnicas criptográficas.')],
      '', 'PGP/OpenPGP, PEM y MOSS son formatos/protocolos para prestar servicios de seguridad al correo, aunque PEM y MOSS sean históricos. «Single MIME» no es el nombre de un estándar de seguridad de correo; no debe confundirse con S/MIME (Secure/Multipurpose Internet Mail Extensions). Se corrige “productos” por “protocolos o formatos”.', 'corregida'],
    [4278,[125],['II-13','IV-12'],['phishing','vishing','llamada de voz','ingeniería social'],
      [f('https://www.cisa.gov/sites/default/files/2024-02/Update%20to%20Phishing%20General%20Security%20Postcard_01.01.2024.pdf','CISA, Phishing General Security Postcard (actualización 2024): define vishing como phishing por comunicación de voz; distingue spear phishing y whaling dirigidos, y smishing por mensajes de texto.'),
       f('https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk','ITIC Academy, bloque Seguridad en redes y nivel de aplicación 2026: ingeniería social, ataques y medidas de ciberseguridad; cotejo curricular.'),
       f('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','Convocatoria A1 GSI 2025, anexo I, tema 125: tipos de ataques y medidas de prevención.'),
       f('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262','Convocatoria A2 GSI 2025, anexo, tema II-13: seguridad lógica y herramientas de ciberseguridad.')],
      '', 'Vishing combina “voice” y phishing: se realiza mediante comunicación de voz, por ejemplo una llamada fraudulenta. Smishing usa SMS/textos; spear phishing y whaling describen ataques dirigidos, no el canal telefónico.', 'vigente'],
    [4279,[128],['IV-6'],['continuidad de negocio','MTD','RTO','RPO','ROL','dependencias','pendiente de ambigüedad'],
      [f('https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-34r1.pdf','NIST SP 800-34 Rev. 1 §2.2: define MTD, RTO y RPO; RTO normalmente debe ser inferior al MTD. Define RPO como cuánto dato previo puede perderse. No define ROL ni permite derivar una acción única de las cifras del reactivo.'),
       f('https://drive.google.com/file/d/1t73_zvB3uAwCf87ZgKwz6QJK0dIb-AVd/view?usp=drivesdk','Material histórico de preparación de ITIC Academy, Tema 127 (actual programa A1-128): incluye MTD/RTO/RPO/ROL y un test parecido; su propia variante da B=48 y C=12, aunque la opción publicada “reducir el RTO de C a 12” repite el dato de C, señal de posible errata de origen.'),
       f('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','Convocatoria A1 GSI 2025, anexo I, tema 128: gestión de continuidad del negocio y planes de continuidad/contingencia.'),
       f('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262','Convocatoria A2 GSI 2025, anexo, tema IV-6: recuperación ante desastres, alta disponibilidad y planificación de CPD.')],
      '', 'PENDIENTE DE AMBIGÜEDAD: no se marca la clave como verificada. Los RTO declarados para B y C (66 y 72) ya son inferiores al MTD 123 del sistema A, y el ROL 70 % de las dependencias ya supera el 50 % de A; la opción “reducir el RTO de C a 72” tampoco modifica el valor indicado. Reducir el RPO de A a 8 repite el valor ya dado, mientras que no se aporta el RPO de B para evaluar la opción de 66. Ninguna alternativa expresa una intervención necesaria y única. El material Academy histórico contiene un reactivo análogo con otra errata de repetición. Se requiere corregir datos/opciones y especificar el objetivo de la pregunta antes de cerrar la clave.', 'pendiente_ambiguedad'],
    [4280,[57,132],['II-1','IV-6'],['VMware ESXi','hipervisor','virtualización de hardware','servidores','virtualización'],
      [f('https://knowledge.broadcom.com/external/article/312100/esxi-hosts-and-compatible-virtual-machin.html','Broadcom Knowledge Base, ESXi hosts and compatible virtual machine hardware versions: documenta hosts ESXi, máquinas virtuales y versiones de hardware virtual; se acota el reactivo al hipervisor ESXi/vSphere, no a toda la cartera VMware.'),
       f('https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk','ITIC Academy, bloque Hardware, servidores, CPD, almacenamiento y virtualización 2026, §§12–14: virtualización de servidores, hipervisores tipo 1/2 y plataformas ESXi/KVM/Hyper-V; cotejo curricular A1-57/A1-132 y A2-T1/IV-6.'),
       f('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','Convocatoria A1 GSI 2025, anexo I, temas 57 y 132: virtualización de servidores/sistemas y centros de datos.'),
       f('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262','Convocatoria A2 GSI 2025, anexo, temas II-1 y IV-6: tecnologías de sistemas y virtualización/consolidación/CPD.')],
      '', 'La denominación genérica “VMware” abarca productos distintos, incluidos hipervisores de escritorio y de servidor. Se acota al hipervisor VMware ESXi/vSphere: virtualiza los recursos de hardware físico del host para ejecutar máquinas virtuales; por ello la categoría buscada es virtualización de hardware, no del sistema operativo, de red ni paravirtualización.', 'corregida']
  ],
  edits: {
    4276: {texto:'En un sistema distribuido de detección de intrusiones de red (IDPS), ¿cómo se denomina el sensor instalado en un segmento para observar el tráfico y remitirlo al sistema de análisis?', comentarios:'La opción “sonda” es el término español habitual para el sensor/elemento de captación del IDPS de red. NIST utiliza “sensor”; no es un cortafuegos ni un honeypot.'},
    4277: {texto:'¿Cuál de estas opciones no es un protocolo o formato de seguridad para correo electrónico?', comentarios:'PGP/OpenPGP, PEM y MOSS proporcionan servicios de seguridad al correo (PEM/MOSS son históricos). “Single MIME” no es un estándar; no debe confundirse con S/MIME.'},
    4280: {texto:'VMware ESXi (vSphere) es un hipervisor que virtualiza principalmente:', comentarios:'ESXi abstrae los recursos de hardware físico del host para presentar hardware virtual a las máquinas virtuales. Se especifica el producto porque VMware ofrece distintas soluciones de virtualización.'}
  }
});
