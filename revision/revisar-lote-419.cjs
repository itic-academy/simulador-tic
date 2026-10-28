const apply = require('./aplicar-lote.cjs');

const sources = {
  iso: [{
    url: 'https://www.iso.org/standard/27001',
    referencia: 'ISO/IEC 27001:2022, ficha oficial y estado del estándar: especifica requisitos para un sistema de gestión de seguridad de la información; la organización puede decidir si solicita certificación.'
  }],
  ens: [{
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191',
    referencia: 'Real Decreto 311/2022, art. 22.1: exige prestar especial atención a la información almacenada o en tránsito mediante dispositivos portátiles/móviles, periféricos, soportes y comunicaciones sobre redes abiertas; no define todas las redes inalámbricas como inherentemente inseguras.'
  }],
  strategy: [{
    url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2019-6347',
    referencia: 'Orden PCI/487/2019, anexo, capítulo 3, Objetivo general: garantizar el uso seguro y fiable del ciberespacio, proteger derechos y libertades de la ciudadanía y promover el progreso socioeconómico. Se fija expresamente la edición 2019 para no convertir el reactivo en una afirmación atemporal.'
  }],
  gateway: [{
    url: 'https://eur-lex.europa.eu/eli/reg/2018/1724/oj?locale=es',
    referencia: 'Reglamento (UE) 2018/1724, versión consolidada indicada por EUR-Lex como vigente desde 20/05/2026: establece la Pasarela Digital Única para dar acceso a información, procedimientos y servicios de asistencia y resolución de problemas.'
  }],
  grid: [{
    url: 'https://ogf.org/documents/GFD.120.pdf',
    referencia: 'Open Grid Forum, GFD-I.120, glosario: grid integra, virtualiza y gestiona servicios y recursos en un entorno distribuido y heterogéneo para usuarios/recursos de organizaciones virtuales que cruzan dominios administrativos; no prescribe un servidor central, mainframe ni sistema operativo concreto.'
  }]
};

const records = [
  [2406, [48], ['I-9', 'II-13'], ['ISO/IEC 27001', 'SGSI', 'certificación', 'ENS'], sources.iso, '', 'ISO/IEC 27001:2022 especifica requisitos para establecer, implantar, mantener y mejorar un sistema de gestión de seguridad de la información (SGSI). La certificación es una opción de evaluación de conformidad, no una condición necesaria para implantarlo ni una equivalencia automática con el ENS. El reactivo se acota a lo que la ficha oficial define.', 'corregida'],
  [2407, [48], ['I-9', 'II-13'], ['ENS', 'protección de información', 'artículo 22', 'redes abiertas'], sources.ens, '', 'El artículo 22.1 del RD 311/2022 no etiqueta como «entornos inseguros» todos los medios enumerados: ordena prestar especial atención a la información almacenada o en tránsito por equipos portátiles o móviles, periféricos, soportes y comunicaciones sobre redes abiertas. La intensidad/cifrado de una conexión no elimina el deber de analizar y proteger el riesgo. Se sustituye la falsa excepción basada en una supuesta categoría jurídica general de redes inalámbricas.', 'corregida'],
  [2408, [127], ['II-13'], ['Estrategia Nacional de Ciberseguridad', 'objetivo general', 'ciberespacio'], sources.strategy, '', 'La formulación reproducida corresponde al objetivo general de la Estrategia Nacional de Ciberseguridad 2019, publicada mediante Orden PCI/487/2019. Se añade el año al enunciado para identificar el documento estratégico concreto y evitar presentarlo como texto genérico o como una estrategia futura.', 'corregida'],
  [2409, [22], ['I-9'], ['Pasarela Digital Única', 'Reglamento UE 2018/1724', 'administración digital'], sources.gateway, '', 'El Reglamento (UE) 2018/1724 establece la Pasarela Digital Única como vía de acceso en línea a información, procedimientos y servicios de asistencia y resolución de problemas para ciudadanos y empresas. Se distingue del programa ISA² de interoperabilidad, de una plataforma cloud y de PSD2, que regula servicios de pago.', 'corregida'],
  [2410, [52], ['II-1'], ['grid computing', 'computación distribuida', 'recursos heterogéneos', 'OGF'], sources.grid, '', 'Grid computing integra, virtualiza y gestiona recursos y servicios distribuidos y heterogéneos, que pueden pertenecer a distintas organizaciones y dominios administrativos. Un mainframe, una plataforma Microsoft o un servidor central único no son requisitos universales de un grid.', 'corregida']
];

const edits = {
  2406: {
    texto: '¿Qué afirmación describe correctamente ISO/IEC 27001:2022?',
    opciones: [
      'Es un estándar comúnmente aceptado que define requisitos para un sistema de gestión de seguridad de la información (SGSI).',
      'Su certificación acredita automáticamente el cumplimiento íntegro del Esquema Nacional de Seguridad.',
      'No puede certificarse porque solo contiene recomendaciones.',
      'Obliga a toda organización que implante un SGSI a obtener una certificación externa.'
    ], respuesta_correcta: 0
  },
  2407: {
    texto: 'Según el artículo 22.1 del Real Decreto 311/2022, ¿sobre qué información y medios debe prestarse especial atención para lograr una protección adecuada?',
    opciones: [
      'Solo sobre información enviada por redes inalámbricas sin cifrado.',
      'Sobre información en equipos portátiles o móviles, periféricos y soportes, y sobre comunicaciones a través de redes abiertas.',
      'Solo sobre información en servidores centrales ubicados fuera de la organización.',
      'Únicamente sobre soportes extraíbles; los periféricos y las redes abiertas quedan excluidos.'
    ], respuesta_correcta: 1
  },
  2408: {
    texto: '¿Cuál es el objetivo general establecido por la Estrategia Nacional de Ciberseguridad 2019?',
    opciones: [
      'Garantizar el uso seguro y fiable del ciberespacio, proteger los derechos y libertades de la ciudadanía y promover el progreso socioeconómico.',
      'Coordinar toda la ciberseguridad del país mediante un mando único con responsabilidad íntegra.',
      'Limitar la estrategia a proteger los sistemas de la Administración General del Estado.',
      'Sustituir la cooperación internacional por capacidades exclusivamente nacionales.'
    ], respuesta_correcta: 0
  },
  2409: {
    texto: '¿Qué establece la Pasarela Digital Única de la Unión Europea?',
    opciones: [
      'Un programa de interoperabilidad de administraciones conocido como ISA².',
      'Una plataforma cloud institucional que sustituye a proveedores extracomunitarios.',
      'Un punto de acceso en línea a información, procedimientos y servicios de asistencia para ciudadanos y empresas en la Unión.',
      'Las reglas europeas para las pasarelas de pago de los comercios en línea.'
    ], respuesta_correcta: 2
  },
  2410: {
    texto: '¿Qué caracteriza a un sistema de grid computing?',
    opciones: [
      'Que requiere al menos un servidor central que controle todos los recursos.',
      'Que utiliza necesariamente un mainframe como nodo coordinador.',
      'Que todos los nodos deben usar el mismo sistema operativo de Microsoft.',
      'Que integra y coordina recursos distribuidos y potencialmente heterogéneos para compartir capacidad de cómputo.'
    ], respuesta_correcta: 3
  }
};

apply({ numero: '419', fecha: '2026-10-28', records, edits });
