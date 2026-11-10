require('./aplicar-lote.cjs')({
  numero: '805', fecha: '2026-11-10',
  records: [
    [4346, [48, 54], ['I-9', 'IV-15'], ['ENS', 'BYOD', 'dispositivos móviles', 'autenticación multifactor', 'biometría', 'borrado remoto'], [
      { url: 'https://www.boe.es/eli/es/rd/2022/05/03/311/con', referencia: 'BOE, Real Decreto 311/2022 (ENS), anexo II, medida op.acc.6 y refuerzos R2–R4: la autenticación puede usar diversos factores; para certificados se contempla PIN o biometría como segundo factor, por lo que no impone biometría como método exclusivo para desbloquear todo dispositivo BYOD.' },
      { url: 'https://www.ccn-cert.cni.es/es/pdf/guias/series-ccn-stic/800-guia-esquema-nacional-de-seguridad/544-ccn-stic-827-gestion-y-uso-de-dispositivos-moviles/file.html', referencia: 'CCN-STIC 827, ENS — Gestión y uso de dispositivos móviles: contempla borrado remoto tras pérdida o compromiso, advierte que no es infalible ni debe ser la única medida.' },
      { url: 'https://www.ccn-cert.cni.es/es/guias-de-acceso-publico-ccn-stic/14-ccn-stic-457-herramienta-de-gestion-de-dispositivos-moviles-mdm/file.html', referencia: 'CCN-STIC 457, Gestión de dispositivos móviles: los dispositivos personales BYOD no se consideran confiables salvo que cumplan requisitos mínimos, sean configurados y gestionados/monitorizados por la organización.' },
      { url: 'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 22 «Seguridad, ENS y Ciberseguridad», actualización 2026.2: ENS, medidas op.acc y guías CCN-STIC; cotejo curricular.' },
      { url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», edición 2026.1: dispositivos personales y móviles, medidas de seguridad y gestión; cotejo curricular.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 TIC AGE 2025, anexo I, temas 48 y 54: ENS y seguridad/gestión de dispositivos personales y móviles.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI 2025, anexo IX, temas I-9 y IV-15: ENS/guías CCN-STIC y gestión de dispositivos móviles.' }
    ], null, 'Se concreta la única afirmación incorrecta: el ENS no ordena que todo acceso o desbloqueo BYOD de nivel medio use biometría obligatoria o exclusiva. El refuerzo de autenticación recoge factores alternativos y, para certificados, permite PIN o biometría. Las otras opciones quedan limitadas a controles aplicables de forma condicional/recomendaciones CCN, incluyendo gestión previa de BYOD y borrado remoto (que no es infalible). Clave A.', 'corregida'],
    [4347, [55], ['II-1'], ['cloud computing', 'NIST SP 800-145', 'broad network access', 'measured service', 'rapid elasticity'], [
      { url: 'https://csrc.nist.gov/pubs/sp/800/145/final', referencia: 'NIST SP 800-145, sección 2.1: cinco características esenciales de cloud; broad network access usa mecanismos estándar y clientes heterogéneos; measured service mide/monitoriza el uso; rapid elasticity aprovisiona y libera recursos rápidamente.' },
      { url: 'https://csrc.nist.gov/glossary/term/broad_network_access', referencia: 'NIST CSRC Glossary, Broad network access: acceso por mecanismos estándar desde plataformas cliente heterogéneas, como teléfonos, tabletas, portátiles y estaciones de trabajo.' },
      { url: 'https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 25 «Cloud Computing», edición 2026: NIST SP 800-145, cinco características, modelos de servicio y despliegue; cotejo curricular.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 TIC AGE 2025, anexo I, tema 55: cloud computing, modelos IaaS/PaaS/SaaS y de despliegue.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI 2025, anexo IX, tema II-1: computación en la nube, base tecnológica, componentes y capacidades.' }
    ], null, 'Se pregunta expresamente por las características NIST. «Measured service» significa medir, controlar y optimizar el uso; no obliga a que todo proveedor facture exclusivamente por consumo. «Broad network access» tampoco significa acceso sin políticas desde cualquier lugar: emplea mecanismos estándar para clientes heterogéneos. El enunciado y las opciones evitan esas equivalencias excesivas. La restricción a un único lugar/horario de B es la afirmación incorrecta. Clave B.', 'corregida'],
    [4348, [57, 132], ['II-1', 'IV-6'], ['virtualización', 'máquina virtual', 'hipervisor', 'aislamiento', 'recursos físicos'], [
      { url: 'https://csrc.nist.gov/pubs/sp/800/125/a/r1/final', referencia: 'NIST SP 800-125A Rev. 1, Security Recommendations for Server-based Hypervisor Platforms: los hipervisores virtualizan recursos de hardware, median el acceso a los recursos físicos y aíslan en ejecución las VMs.' },
      { url: 'https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-125.pdf', referencia: 'NIST SP 800-125, sección 3.1: el hipervisor particiona recursos para que cada sistema invitado acceda a los suyos sin invadir los de otros; permite recursos físicos o lógicos y aislamiento entre invitados.' },
      { url: 'https://csrc.nist.gov/glossary/term/virtualization', referencia: 'NIST CSRC Glossary, virtualization: abstracción/emulación de recursos de hardware que permite ejecutar pilas de software, incluido el sistema operativo y aplicaciones.' },
      { url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», edición 2026.1: virtualización de servidores, hipervisores, consolidación y recursos; cotejo curricular.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 TIC AGE 2025, anexo I, temas 57 y 132: virtualización de servidores, sistemas, CPD y puestos.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI 2025, anexo IX, temas II-1 y IV-6: arquitecturas escalables/virtualización y consolidación de servidores y recursos.' }
    ], null, 'El hipervisor media el acceso de cada VM a recursos físicos o compartidos y aporta aislamiento. Las máquinas no son totalmente independientes del host físico, pero tampoco existe dependencia total entre ellas: la separación de recursos e interacciones es una propiedad esencial. Se acota el distractor para que sea inequívocamente falso. Clave B.', 'corregida'],
    [4349, [58], ['II-6'], ['SOA', 'The Open Group', 'arquitectura de referencia', 'capa de integración', 'mediación', 'QoS'], [
      { url: 'https://www2.opengroup.org/ogsys/jsp/publications/PublicationDetails.jsp?catalogno=c119', referencia: 'The Open Group, SOA Reference Architecture, Technical Standard C119 (2011): arquitectura de referencia de nueve capas; la capa Integration media, transforma, enruta y transporta peticiones entre consumidores y proveedores; las preocupaciones de latencia pertenecen a QoS.' },
      { url: 'https://www.opengroup.org/projects/soa-ref-arch/uploads/40/19713/soa-ra-public-050609.pdf', referencia: 'The Open Group, SOA Reference Architecture, Draft Technical Standard, Draft 10 (2009), secciones 5.7–5.8: Integration realiza mediación/routing/transformación; Quality of Service trata requisitos no funcionales, incluida latencia. Se identifica como borrador histórico, no como estándar vigente.' },
      { url: 'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 28 «Arquitectura SOA y requisitos no funcionales», edición 2026: SOA, middleware, arquitectura de referencia y QoS; cotejo curricular.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 TIC AGE 2025, anexo I, tema 58: procesamiento cooperativo, cliente-servidor y SOA.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI 2025, anexo IX, tema II-6: arquitectura cliente-servidor, multicapas y servicios web.' }
    ], null, 'El reactivo identifica el modelo concreto como SOA Reference Architecture de The Open Group; no afirma que toda arquitectura SOA deba tener nueve capas. Se corrige también la orientación original: son cinco capas funcionales horizontales y cuatro transversales. En ese modelo, Integration proporciona mediación, transformación y encaminamiento; QoS trata requisitos no funcionales como latencia. Clave D.', 'corregida'],
    [4350, [58], ['II-6'], ['HTTP', 'cliente-servidor', 'RFC 9110', 'request', 'response'], [
      { url: 'https://www.rfc-editor.org/rfc/rfc9110.html', referencia: 'IETF RFC 9110, secciones 1.3 y 3: HTTP es un protocolo cliente/servidor sin estado; los clientes envían mensajes request y los servidores escuchan, procesan solicitudes y emiten response.' },
      { url: 'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 28 «Arquitectura SOA y requisitos no funcionales», edición 2026: procesamiento cooperativo y arquitectura cliente-servidor; cotejo curricular.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 TIC AGE 2025, anexo I, tema 58: procesamiento cooperativo y arquitectura cliente-servidor.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI 2025, anexo IX, tema II-6: arquitectura cliente-servidor, multicapas y multidispositivo.' }
    ], null, 'Se reemplaza la descripción ambigua de «nivel de aplicación» por roles normativos de HTTP. RFC 9110 define que el cliente envía solicitudes y el servidor las procesa y responde; por tanto, B («el servidor inicia solicitudes hacia el cliente») es la incorrecta. La identificación de roles se limita a cada conexión y no impide que el mismo programa actúe como cliente en otras conexiones. Clave B.', 'corregida']
  ],
  edits: {
    4346: { texto: 'Según el ENS y las guías CCN-STIC sobre BYOD, señale la afirmación INCORRECTA:', opciones: [
      'El ENS obliga a utilizar biometría como método exclusivo para desbloquear cualquier dispositivo personal empleado en un sistema de nivel MEDIO.',
      'Cuando la política de acceso exige certificado, el uso del certificado puede protegerse con un segundo factor, como PIN o biometría.',
      'La organización puede disponer de borrado remoto para responder a pérdida o compromiso del dispositivo, sin considerarlo una medida infalible ni única.',
      'Un dispositivo personal no se considera confiable automáticamente: debe cumplir requisitos mínimos y someterse a configuración y gestión acordes con la política de la organización.'
    ] },
    4347: { texto: 'De acuerdo con las cinco características esenciales de cloud computing de NIST SP 800-145, señale la afirmación INCORRECTA:', opciones: [
      'Measured service mide, controla y optimiza el uso de recursos cloud según el tipo de servicio.',
      'Broad network access restringe el acceso de los clientes a una única ubicación física y a horarios fijos.',
      'Broad network access ofrece capacidades por mecanismos estándar de red a plataformas cliente heterogéneas.',
      'Rapid elasticity permite aprovisionar y liberar recursos con rapidez en respuesta a la demanda.'
    ] },
    4348: { texto: 'Señale la afirmación INCORRECTA sobre la virtualización de servidores:', opciones: [
      'A una máquina virtual se le pueden asignar recursos virtuales, dentro de los límites y capacidades de la plataforma física.',
      'Las máquinas virtuales son totalmente dependientes entre sí y el hipervisor no puede aislarlas ni limitar su acceso a recursos compartidos.',
      'Las plantillas y la automatización pueden reducir el tiempo necesario para crear y retirar máquinas virtuales.',
      'La consolidación puede mejorar la utilización del hardware y reducir potencialmente la huella física y energética, aunque el ahorro depende del diseño y la carga.'
    ] },
    4349: { texto: 'En la SOA Reference Architecture de The Open Group —cinco capas funcionales horizontales y cuatro capas transversales—, la Integration Layer:', opciones: [
      'aloja los sistemas operacionales y la infraestructura de ejecución de la organización.',
      'proporciona la arquitectura de información y una representación común de los datos.',
      'gestiona los requisitos de calidad del servicio, como disponibilidad y latencia.',
      'media, transforma y enruta solicitudes de servicio entre consumidores y proveedores.'
    ] },
    4350: { texto: 'Según el modelo cliente-servidor de HTTP descrito en RFC 9110, señale la afirmación INCORRECTA:', opciones: [
      'El cliente construye y envía mensajes de solicitud al servidor.',
      'El servidor inicia solicitudes hacia el cliente, que permanece pasivo a la espera de ellas.',
      'El servidor escucha solicitudes, las procesa y envía uno o varios mensajes de respuesta.',
      'Cada mensaje HTTP es una solicitud o una respuesta; HTTP se define como un protocolo sin estado.'
    ] }
  }
});
