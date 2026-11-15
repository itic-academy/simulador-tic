const apply = require('./aplicar-lote.cjs');

const refs = {
  ospf: [{
    url: 'https://www.rfc-editor.org/rfc/rfc2328.html',
    referencia: 'IETF RFC 2328, OSPF Version 2, §1 y §4.3: especifica OSPFv2 como protocolo de encaminamiento de estado de enlace y declara que funciona directamente sobre IP (protocolo IP 89), es decir, en la capa de red de la arquitectura TCP/IP/OSI.'
  }],
  mobile: [{
    url: 'https://www.itu.int/dms_pub/itu-r/opb/rep/R-REP-M.2480-1-2022-PDF-E.pdf',
    referencia: 'ITU-R Report M.2480-1 (2022), §3: compara bandas móviles de 800 y 1.800 MHz; las bandas inferiores ofrecen mayor cobertura y propagación, mientras las superiores permiten más capacidad/ancho de banda y células más densas. La comparación depende del despliegue y no fija una regla universal para cada banda.'
  }, {
    url: 'https://www.itu.int/epublications/publication/recommendation-itu-r-m-2012-7-02-2026-detailed-specifications-of-the-terrestrial-radio-interfaces-of-international-mobile-telecommunications-advanced-imt-advanced',
    referencia: 'ITU-R M.2012-7 (02/2026), estructura frecuencia-tiempo UL/DL: en TDD se usa una sola frecuencia portadora y subida/bajada se separan en el tiempo; las dos frecuencias emparejadas son propias de FDD.'
  }],
  loadbalancer: [{
    url: 'https://docs.nginx.com/nginx/admin-guide/load-balancer/tcp-udp-load-balancer/',
    referencia: 'Documentación oficial NGINX: el balanceo TCP/UDP opera en capa 4 (transporte); diferencia esta modalidad de la distribución HTTP de capa 7.'
  }, {
    url: 'https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/',
    referencia: 'Documentación oficial NGINX: el balanceo HTTP/HTTPS procesa solicitudes de aplicación en capa 7; se utiliza junto con la documentación L4 para respaldar la clasificación habitual, no como taxonomía única de todos los productos.'
  }, {
    url: 'https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html',
    referencia: 'AWS Elastic Load Balancing: Network Load Balancer opera en capa 4 y Application Load Balancer aporta encaminamiento de solicitudes de capa 7. Ejemplifica la clasificación habitual L4/L7.'
  }],
  rip: [{
    url: 'https://www.rfc-editor.org/rfc/rfc2453.html',
    referencia: 'IETF RFC 2453, RIP Version 2: especifica RIP como protocolo interior de encaminamiento y señala que utiliza algoritmos de tipo vector-distancia. Por rigor se pregunta por el protocolo, no se confunde la sigla RIP con el algoritmo abstracto.'
  }],
  sandbox: [{
    url: 'https://learn.microsoft.com/en-us/defender-office-365/safe-attachments-about',
    referencia: 'Microsoft Learn, Safe Attachments, apartado de adjuntos cifrados/protegidos por contraseña: el sistema no puede completar el análisis o detonación en entorno virtual si no dispone de la contraseña; cuando esta se aporta, puede ejecutar una nueva detonación. Sustenta la limitación concreta sin afirmar que ningún antivirus pueda tratar esos ficheros.'
  }]
};

const records = [
  [7381, [108, 111], ['II-8', 'IV-10'], ['OSPFv2', 'OSPF', 'OSI', 'capa de red', 'protocolo de encaminamiento'], refs.ospf, {
    texto: 'En el modelo OSI, ¿a qué capa se asocia OSPFv2, que se transporta directamente sobre IP?',
    opciones: ['Capa física.', 'Capa de enlace de datos.', 'Capa de transporte.', 'Capa de red.'],
    respuesta_correcta: 3
  }, 'Corregida para especificar OSPFv2 y evitar ambigüedad con OSPFv3. RFC 2328 indica que OSPFv2 funciona directamente sobre IP (número de protocolo 89), sin TCP ni UDP; se asocia por ello a la capa de red. La mención a IP protocolo 89 no debe confundirse con un puerto.', 'corregida'],
  [7382, [123], ['IV-15'], ['comunicaciones móviles', 'propagación radioeléctrica', 'TDD', 'FDD', 'espectro'], refs.mobile, {
    texto: 'Sobre propagación, duplexación y bandas de frecuencia en comunicaciones móviles, señale la opción correcta:',
    opciones: [
      'A igual potencia y condiciones comparables, una frecuencia más alta suele propagarse a mayor distancia y ofrecer mejor cobertura que una más baja.',
      'En TDD, la subida y la bajada emplean necesariamente dos bandas de frecuencia distintas; la subida ocupa la inferior.',
      'Como regla general, las bandas móviles de frecuencia más baja disponen de mayor ancho de banda que las bandas más altas.',
      'Las afirmaciones anteriores son falsas: las bandas bajas suelen favorecer cobertura; TDD separa subida y bajada en el tiempo sobre una portadora; y las bandas altas suelen permitir más capacidad, aunque el ancho asignado depende de cada banda y regulación.'
    ],
    respuesta_correcta: 3
  }, 'Corregida. Se mantiene D, pero se deshace la confusión conceptual: TDD no divide el espectro en dos subbandas UL/DL, sino que alterna ambos sentidos en el tiempo sobre la misma portadora; FDD utiliza frecuencias distintas. En condiciones comparables, bandas más bajas suelen propagarse más lejos y penetrar mejor, mientras bandas superiores suelen facilitar mayor capacidad/ancho de banda. Estas son tendencias de despliegue, no leyes que determinen cada asignación espectral.', 'corregida'],
  [7383, [119], ['II-8'], ['balanceador de carga', 'capa 4', 'capa 7', 'granjas de servidores', 'OSI'], refs.loadbalancer, {
    texto: 'En la clasificación habitual de balanceadores de carga por capa OSI, ¿qué dos categorías se distinguen con mayor frecuencia?',
    opciones: ['Capa 3 y capa 7.', 'Capa 4 y capa 7.', 'Capa 2 y capa 4.', 'Capa 3 y capa 4.'],
    respuesta_correcta: 1
  }, 'Vigente. Se mantiene B (capas 4 y 7) y se precisa que es la clasificación habitual por capa de operación, no una taxonomía exhaustiva de cualquier dispositivo. L4 distribuye conexiones/protocolos de transporte como TCP o UDP; L7 puede decidir usando información de aplicación, por ejemplo solicitudes HTTP.', 'corregida'],
  [7384, [108, 115], ['II-8', 'IV-10'], ['RIP', 'protocolo de encaminamiento', 'vector-distancia', 'TCP/IP'], refs.rip, {
    texto: 'En el ámbito TCP/IP, ¿qué sigla identifica un protocolo de encaminamiento que utiliza un algoritmo de vector-distancia?',
    opciones: ['NTP (Network Time Protocol)', 'RIP (Routing Information Protocol)', 'RPC (Remote Procedure Call)', 'FTP (File Transfer Protocol)'],
    respuesta_correcta: 1
  }, 'Corregida. Se conserva B, pero se reemplaza «identifica un algoritmo» por «identifica un protocolo que utiliza un algoritmo de vector-distancia». RIP es el protocolo; vector-distancia describe la familia de algoritmos que emplea. NTP sincroniza relojes, RPC permite llamadas remotas y FTP transfiere ficheros.', 'corregida'],
  [7385, [125], ['IV-12'], ['seguridad perimetral', 'antivirus', 'sandboxing', 'archivo cifrado', 'contraseña'], refs.sandbox, {
    texto: 'En un antivirus perimetral que analiza adjuntos y los ejecuta en un entorno aislado, ¿qué caso dificulta más el análisis si el sistema no conoce la contraseña?',
    opciones: [
      'Un documento de Word protegido con contraseña de apertura que contiene una macro maliciosa.',
      'Un ejecutable sin protección que coincide con una firma de malware conocida.',
      'Un archivo ZIP sin contraseña cuyo contenido puede extraerse e inspeccionarse.',
      'Un archivo con malware desconocido que, una vez abierto en la sandbox, exhibe comportamiento sospechoso.'
    ],
    respuesta_correcta: 0
  }, 'Corregida. Se conserva A y se acota la premisa: un documento cifrado/protegido por contraseña no puede inspeccionarse ni detonarse completamente sin disponer de la clave; no se afirma que cualquier producto sea incapaz de analizarlo en todas las circunstancias. Un fichero desconocido que puede ejecutarse en sandbox aún puede detectarse por comportamiento, aunque no exista firma previa.', 'corregida']
];

apply({ numero: '1416', fecha: '2026-11-15', records });
