const apply = require('./aplicar-lote.cjs');

const records = [
  [1606, [56], ['IV-5'], ['RAID', 'RAID 1', 'mirroring', 'redundancia', 'tolerancia a fallos', 'almacenamiento'], [
    {url: 'https://docs.oracle.com/cd/E19253-01/816-4520/storage-overview-1/index.html', referencia: 'Oracle Solaris Volume Manager Administration Guide, General Performance Guidelines: RAID 0/striping ofrece buen rendimiento pero no redundancia; RAID 1 proporciona disponibilidad, suele reducir el rendimiento de escritura y puede mejorar lecturas aleatorias.'},
    {url: 'https://docs.oracle.com/en/database/oracle/oracle-database/19/ntqrf/overview-of-hardware-or-operating-system-striping.html', referencia: 'Oracle Database 19c, Overview of Hardware or Operating System Striping: RAID 1 espeja escrituras en otro disco y mantiene el volumen disponible ante fallo de uno; RAID 0 carece de tolerancia a fallos.'}
  ], {texto: 'Con dos discos iguales y el requisito de mantener los datos disponibles si falla uno, ¿qué nivel de RAID de las opciones aporta redundancia?', opciones: [
    'RAID 0 (distribución en bandas), que no mantiene una copia redundante.',
    'RAID 1 (espejo), que replica los datos entre ambos discos.',
    'RAID 3, que requiere una organización con disco dedicado a paridad y no es la opción de espejo de dos discos.',
    'RAID 0 o RAID 1 indistintamente, pues ambos toleran el fallo de un disco.'
  ], respuesta_correcta: 1}, 'RAID 1 es la opción con redundancia de espejo para dos discos. El enunciado original exigía “el mejor rendimiento posible tanto en lectura como en escritura”, criterio dependiente de carga, controlador y equipo: RAID 0 puede rendir más, pero pierde disponibilidad ante el fallo de cualquiera de sus discos; el espejo puede ayudar a lecturas y añade trabajo de escritura. Se reformula para que la condición verificable sea la tolerancia a fallos, sin prometer un máximo de rendimiento universal.', 'corregida'],
  [1607, [58], ['II-6'], ['servicios web', 'SOAP', 'WSML', 'WSDL', 'UDDI', 'SOA', 'interoperabilidad'], [
    {url: 'https://www.w3.org/TR/soap12-part1/', referencia: 'W3C Recommendation, SOAP Version 1.2 Part 1: Messaging Framework: SOAP define un marco extensible de mensajería para intercambiar información estructurada y puede vincularse a distintos protocolos subyacentes.'},
    {url: 'https://www.w3.org/TR/wsdl20/', referencia: 'W3C Recommendation, Web Services Description Language (WSDL) Version 2.0: describe interfaces, operaciones, bindings y endpoints de servicios web.'},
    {url: 'https://www.w3.org/submissions/WSML/', referencia: 'W3C Member Submission, Web Service Modeling Language (WSML): lenguaje de modelado semántico de ontologías, metas, servicios web e interfaces; es una presentación de miembros, no una recomendación W3C que sustituya a WSDL.'},
    {url: 'https://www.oasis-open.org/committees/uddi-spec/faq.php', referencia: 'OASIS UDDI Specification TC, FAQ: la especificación UDDI define servicios de registro para publicar servicios y permitir a consumidores descubrirlos y obtener sus metadatos.'}
  ], {texto: 'Sobre los estándares y lenguajes relacionados con servicios web, señale la afirmación INCORRECTA:', opciones: [
    'SOAP define un marco de mensajería para intercambiar información estructurada; no es un sinónimo de Service-Oriented Architecture.',
    'WSML es una recomendación W3C que reemplazó WSDL y constituye el formato universal obligatorio para describir la interfaz externa de cualquier servicio web.',
    'UDDI define un servicio de registro que permite publicar y descubrir servicios y consultar metadatos asociados.',
    'WSDL 2.0 describe interfaces y operaciones, así como bindings y endpoints concretos de servicios web.'
  ], respuesta_correcta: 1}, 'La opción incorrecta es la que presenta WSML como recomendación W3C sustitutiva y universal: WSML fue una Member Submission para modelar servicios web semánticos y sus interfaces, mientras WSDL es la recomendación W3C destinada a describir interfaces, operaciones y endpoints. SOAP es mensajería —no la expansión “Services-Oriented Architecture Protocol”— y UDDI es un registro de publicación y descubrimiento. Se reemplaza la secuencia simplista del original (“WSDL, UDDI y SOAP”) por afirmaciones técnicamente delimitadas.', 'corregida'],
  [1608, [47], ['II-11'], ['PingCastle', 'Active Directory', 'seguridad', 'auditoría', 'evaluación de riesgos'], [
    {url: 'https://github.com/netwrix/pingcastle', referencia: 'Repositorio oficial de Netwrix PingCastle: la herramienta presenta una metodología de evaluación de riesgos y madurez de seguridad de Active Directory; incluye health check y comprobaciones específicas.'},
    {url: 'https://www.pingcastle.com/', referencia: 'Sitio oficial de PingCastle/Netwrix: documentación y finalidad de evaluación de la seguridad de Active Directory.'}
  ], null, 'La respuesta es auditoría/evaluación de seguridad de Active Directory: el proyecto oficial describe PingCastle como una herramienta de evaluación de riesgos y madurez de AD, no como monitor de dispositivos TCP/IP, control de versiones ni gestor de SGBD.', 'vigente'],
  [1609, [], ['III-5'], ['tipo abstracto de datos', 'árbol', 'grado', 'profundidad', 'altura', 'estructuras de datos'], [
    {url: 'https://xlinux.nist.gov/dads/HTML/degree.html', referencia: 'NIST Dictionary of Algorithms and Data Structures, degree: el grado de un nodo de árbol es el número de hijos; el grado de un árbol se asocia con el grado máximo de sus nodos.'},
    {url: 'https://xlinux.nist.gov/dads/HTML/depth.html', referencia: 'NIST Dictionary of Algorithms and Data Structures, depth: la profundidad de un nodo es su distancia a la raíz; la raíz tiene profundidad cero.'},
    {url: 'https://xlinux.nist.gov/dads/HTML/height.html', referencia: 'NIST Dictionary of Algorithms and Data Structures, height: la altura del árbol es la máxima distancia de un nodo a la raíz, equivalente a la máxima profundidad; la raíz sola tiene altura cero en esta convención.'}
  ], {texto: 'En un árbol enraizado, usando la convención de contar las aristas y definir el grado del árbol a partir del número de hijos, ¿qué afirmación es correcta?', opciones: [
    'La profundidad de un nodo es la longitud del camino descendente más largo desde él hasta una hoja.',
    'La altura de un nodo es la distancia desde la raíz hasta ese nodo.',
    'La altura de un árbol no vacío es la profundidad mínima de una hoja.',
    'El grado del árbol es el máximo número de hijos que tiene cualquiera de sus nodos.'
  ], respuesta_correcta: 3}, 'La respuesta es la opción 4. Se explicita la convención para evitar la imprecisión del original: en un árbol enraizado, la profundidad de un nodo es su distancia a la raíz y la altura del árbol es la máxima profundidad; el grado de un nodo cuenta sus hijos y el del árbol es el máximo de ellos. La altura de un nodo suele definirse como su distancia descendente a la hoja más lejana, pero algunos textos varían al tratar árbol vacío y al contar nodos o aristas.', 'corregida'],
  [1610, [56], ['IV-5'], ['memoria', 'VRAM', 'video RAM', 'DRAM', 'SAM', 'memoria de vídeo', 'multimedia'], [
    {url: 'https://bitsavers.trailing-edge.com/components/ti/_dataBooks/1989_TI_MOS_Memory_Data_Book.pdf', referencia: 'Texas Instruments, MOS Memory Data Book (1989), ficha TMS44C251, pp. 4-79–4-80: el fabricante describe la multiport video RAM como DRAM con acceso dual y un registro/puerto serie SAM (Serial Access Memory), accesibles de forma simultánea y asíncrona salvo durante transferencias.'},
    {url: 'https://www.ti.com/lit/ug/spru178/spru178.pdf', referencia: 'Texas Instruments, C80 Programmer’s Guide, apartado 2.6.2 VRAM: documenta VRAM con puerto de procesador y puerto serie para acceso de pantalla.'}
  ], {texto: 'Sobre la VRAM clásica de doble puerto empleada como memoria de vídeo, señale la afirmación FALSA:', opciones: [
    'Puede combinar una matriz DRAM con un registro de acceso serie (SAM) para atender transferencias de imagen.',
    'Se diseñó para facilitar el almacenamiento y la lectura secuencial de datos del búfer de vídeo.',
    'La VRAM clásica es necesariamente memoria SRAM y, por tanto, no necesita refresco dinámico.',
    'VRAM es la sigla de Video RAM.'
  ], respuesta_correcta: 2}, 'La afirmación falsa es que la VRAM clásica sea necesariamente SRAM: dispositivos multiport VRAM como el TMS44C251 de Texas Instruments se construían con una matriz DRAM y un registro serie SAM, con puertos de acceso de memoria y serie. Se acota a la VRAM clásica de doble puerto: el uso actual de “video memory” también abarca tecnologías distintas y no debe generalizarse esta arquitectura a toda memoria gráfica moderna.', 'corregida']
];

const edits = Object.fromEntries(records.filter(row => row[5]).map(([id,,,,,edit]) => [id, edit]));
apply({numero: '258', fecha: '2026-10-27', records, edits});
