const apply = require('./aplicar-lote.cjs');
const saml = 'https://docs.oasis-open.org/security/saml/v2.0/saml-core-2.0-os.pdf';
const iana = 'https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml?search=imap';
const ims = 'https://www.etsi.org/deliver/etsi_ts/123200_123299/123228/18.10.00_60/ts_123228v181000p.pdf';
const cablelabs = 'https://www.cablelabs.com/about-our-technical-resources';
const virtualbox = 'https://docs.oracle.com/en/virtualization/virtualbox/7.2/user/create-vm.html';
const vmware = 'https://www.vmware.com/docs/desktop-hypervisor-faqs';
const parallels = 'https://www.parallels.com/solutions/run-windows-on-mac/';
const records = [
  [3051,[80,131],['III-12'],['SAML','autenticación','autorización','aserciones','federación de identidad'],[
    {url:saml,referencia:'OASIS SAML 2.0 Core, §2: las aserciones SAML pueden transportar declaraciones de autenticación, atributos y decisiones de autorización.'},
    {url:'https://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html',referencia:'OASIS SAML 2.0 Technical Overview: define SAML como marco XML para intercambiar información de seguridad entre organizaciones; recoge identidad, autenticación, atributos y autorización.'}
  ],'','SAML (Security Assertion Markup Language) es el estándar que permite expresar e intercambiar aserciones y mensajes de seguridad, incluidos datos de autenticación, atributos y decisiones de autorización. XAdES y PAdES son familias de formatos de firma electrónica; BPMN modela procesos. Se elimina la errata gramatical del enunciado. Cotejo curricular: ITIC Academy, Bloques 36 (identificación y firma) y 50 (SSO), materiales auxiliares frente a la especificación OASIS.', 'corregida'],
  [3052,[122],['II-8'],['IMAP','IMAPS','correo electrónico','puertos TCP','IANA','TLS'],[
    {url:iana,referencia:'IANA Service Name and Transport Protocol Port Number Registry (actualizado 26/10/2026): imap/TCP = 143; imaps/TCP = 993, IMAP over TLS.'},
    {url:'https://www.rfc-editor.org/rfc/rfc9051.html',referencia:'IETF RFC 9051, IMAP4rev2, protocolo de acceso a buzones; la asignación de puertos se consulta en el registro IANA.'},
    {url:'https://www.rfc-editor.org/rfc/rfc8314.html',referencia:'IETF RFC 8314, §3: recomienda TLS implícito para acceso a correo, normalmente puerto 993 para IMAP; no sustituye el registro IANA.'}
  ],'','La asignación registrada para IMAP sobre TCP es 143 y la de IMAP sobre TLS implícito (servicio imaps) es 993. El enunciado precisa TCP y “respectivamente”; no confunde IMAPS con el mecanismo STARTTLS sobre el puerto de servicio IMAP. Cotejo curricular: ITIC Academy, Tema/Bloque 122 «Correo, mensajería y servicios de directorio», actualización de agosto de 2026; recoge IMAP4rev2 (RFC 9051) y separación de puertos.', 'corregida'],
  [3053,[116],['IV-14'],['IMS','3GPP','SLF','HSS','I-CSCF','identidad pública de usuario'],[
    {url:ims,referencia:'ETSI/3GPP TS 23.228 V18.10.0 (Release 18, 07/2025), §5.8.3: el I-CSCF consulta la Subscription Locator Function; el SLF busca la identidad y responde con el nombre del HSS que contiene los datos de suscripción.'}
  ],'','Cuando hay varios HSS direccionables, el SLF (Subscription Locator Function) resuelve la identidad pública del usuario y devuelve cuál HSS almacena sus datos de suscripción. El I-CSCF inicia la consulta, pero la función de localización es el SLF. Cotejo curricular: ITIC Academy, Bloque 43 «Protocolos», NGN/IMS y comunicaciones convergentes; correspondencia directa A1-116/A2-IV-14.', 'corregida'],
  [3054,[108,121],['IV-7','IV-10'],['CATV','HFC','DOCSIS','módem de cable','acceso a Internet'],[
    {url:cablelabs,referencia:'CableLabs, recursos técnicos DOCSIS: identifica los cable módems basados en DOCSIS como dispositivos fundamentales para que los operadores de televisión por cable ofrezcan servicios de datos de banda ancha.'},
    {url:'https://www.etsi.org/deliver/etsi_ts/101900_101999/10190923/01.01.01_60/ts_10190923v010101p.pdf',referencia:'ETSI TS 101 909-23 (EuroDOCSIS): especificación de interfaz de radiofrecuencia para sistemas de transmisión de datos por redes de televisión por cable.'}
  ],'','El equipo de terminación del acceso de datos sobre una red HFC de televisión por cable es el módem de cable (normalmente DOCSIS/EuroDOCSIS). Un router puede distribuir la conexión dentro de la red local, pero no sustituye la interfaz de cable coaxial del módem. Se corrige la errata “MODEM cable”. Cotejo curricular: ITIC Academy, Bloque 42 «Redes» 2026.1, acceso y CATV/HFC; correspondencia directa A1-121 y temática A1-108/A2-IV-7/IV-10.', 'corregida'],
  [3055,[132],['IV-6'],['virtualización de escritorios','máquina virtual','Parallels Desktop','VMware Workstation/Fusion','Oracle VirtualBox','hipervisor'],[
    {url:virtualbox,referencia:'Oracle VirtualBox User Manual 7.2, capítulo 4: permite crear máquinas virtuales e instalar en ellas un sistema operativo invitado.'},
    {url:vmware,referencia:'Broadcom/VMware Desktop Hypervisor FAQ: Workstation Pro y Fusion Pro crean máquinas virtuales aisladas que encapsulan un sistema operativo y sus aplicaciones.'},
    {url:parallels,referencia:'Parallels Desktop, documentación oficial: ejecuta Windows como máquina virtual en macOS, incluido en una ventana o pantalla completa.'}
  ],'','“Virtualización de escritorios” puede significar VDI centralizada o ejecutar localmente un SO de escritorio en una VM. Para evitar ambigüedad, la pregunta se restringe a la segunda acepción: Parallels Desktop, VMware Workstation/Fusion y Oracle VirtualBox permiten ejecutar sistemas operativos de escritorio como máquinas virtuales (según compatibilidad del host e invitado). Ninguno es la opción excluida. Cotejo curricular: ITIC Academy, Bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización» (2026.1), tema A1-132 y escritorios virtuales; se distingue esta virtualización local de una arquitectura VDI.', 'corregida']
];
apply({numero:'547',fecha:'2026-10-29',records,edits:{
  3051:{texto:'¿Qué estándar permite expresar e intercambiar aserciones con información de autenticación, atributos y decisiones de autorización entre dominios de seguridad?',opciones:['XAdES.','SAML.','BPMN.','PAdES.'],respuesta_correcta:1},
  3052:{texto:'¿Qué puertos TCP registra IANA para los servicios IMAP e IMAPS, respectivamente?',opciones:['25 y 465.','110 y 995.','143 y 993.','121 y 963.'],respuesta_correcta:2},
  3053:{texto:'En IMS según 3GPP, cuando hay varios HSS, ¿qué función consulta el I-CSCF para resolver qué HSS contiene los datos de suscripción asociados a la identidad pública del usuario?',opciones:['S-CSCF.','SLF (Subscription Locator Function).','I-CSCF.','AS (Application Server).'],respuesta_correcta:1},
  3054:{texto:'Para terminar una conexión de banda ancha sobre una red HFC de televisión por cable, ¿qué equipo convierte la señal DOCSIS del acceso coaxial?',opciones:['Códec de audio/vídeo.','Router IP, sin módem de cable.','Módem de cable (cable modem).','Splitter Ethernet.'],respuesta_correcta:2},
  3055:{texto:'Si por virtualización de escritorios se entiende ejecutar localmente un sistema operativo de escritorio como máquina virtual, ¿qué producto de esta lista NO sirve para ese fin?',opciones:['Parallels Desktop.','VMware Workstation/Fusion.','Oracle VirtualBox.','Ninguno: los tres permiten ejecutar máquinas virtuales con sistemas operativos de escritorio, sujeto a compatibilidad de host e invitado.'],respuesta_correcta:3}
}});
