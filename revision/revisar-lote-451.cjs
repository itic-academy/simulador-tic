const apply = require('./aplicar-lote.cjs');

const s = {
  jls: {
    url: 'https://docs.oracle.com/javase/specs/jls/se25/html/jls-9.html#jls-9.3',
    referencia: 'Oracle, Java Language Specification, Java SE 25, §9.3 Field (Constant) Declarations: every field declaration in an interface is implicitly public, static and final; those modifiers may also be written redundantly.'
  },
  nistDmz: {
    url: 'https://csrc.nist.gov/pubs/sp/800/41/r1/final',
    referencia: 'NIST SP 800-41 Rev. 1, Guidelines on Firewalls and Firewall Policy, §3. DMZ: a perimeter network is separated from protected internal networks; it is common to put public-facing web and email servers there. The publication cautions that DMZ has no single technical definition, so the question asks about this common pattern rather than a universal placement rule.'
  },
  microsoft3tier: {
    url: 'https://learn.microsoft.com/en-us/windows/win32/cossdk/using-a-three-tier-architecture-model',
    referencia: 'Microsoft Learn, Using a Three-Tier Architecture Model: the logical tiers are presentation/user services, middle/business services, and data/data services. Physical distribution across machines can vary; an IP network is infrastructure and not one of the three application tiers.'
  },
  iso27004: {
    url: 'https://www.iso.org/standard/64120.html',
    referencia: 'ISO/IEC 27004:2016, Monitoring, measurement, analysis and evaluation: ISO identifies this as the published second edition, whose scope covers monitoring and measuring information-security performance and ISMS effectiveness, and analyzing/evaluating results. ISO lists a new DIS 27004 as under development, so the question names the currently published edition rather than implying no revision is underway.'
  },
  simpl: {
    url: 'https://ssg-website-ad5a79.pages.code.europa.eu/resources/architecture/',
    referencia: 'European Commission, Simpl-Open Functional and Technical Architecture Specifications, D1.3.4 (2025–2026), sections 2.1–2.2: names Data Space Connector, Local Assets Catalogue, Federated Catalogue/Search, Data Transfer and transfer processes as data-space services/components. The architecture contains no component called “indexing of business processes”; this is an example within the specified Simpl-Open architecture, not a claim that all data spaces have a universal component set.'
  }
};

const records = [
  [2566, [67], ['II-3'], ['Java', 'interface', 'campos', 'public', 'static', 'final'], [s.jls], '', 'Se sustituye «variables» por campos declarados en una interfaz Java y se cita JLS SE 25 §9.3: todo campo de interfaz es implícitamente public, static y final, aunque no es obligatorio escribir los tres modificadores. A1-67/A2-II-3.', 'corregida'],
  [2567, [125], ['IV-12'], ['DMZ', 'zona desmilitarizada', 'servidores públicos', 'servidor web', 'seguridad perimetral'], [s.nistDmz], '', 'La pregunta original trataba proxy de correo, caché y servidor web como si siempre debieran residir en una DMZ; la ubicación depende de función y arquitectura. Se formula ahora sobre el patrón común citado por NIST: situar servidores públicos web/correo en una red perimetral, no en la red interna protegida. A1-125/A2-IV-12.', 'corregida'],
  [2568, [119], ['II-6'], ['arquitectura de tres capas', 'presentación', 'lógica de negocio', 'datos', 'capas lógicas'], [s.microsoft3tier], '', 'Se aclara que se pregunta por los niveles lógicos de una aplicación de tres capas, no por capas OSI ni por equipos físicos. Presentación, lógica de negocio/aplicación y acceso/persistencia de datos son las tres; la red es infraestructura y no una capa lógica de aplicación. A1-119/A2-II-6.', 'corregida'],
  [2569, [48], ['II-13'], ['ISO/IEC 27000', 'ISO/IEC 27004:2016', 'SGSI', 'medición', 'eficacia'], [s.iso27004], '', 'Se especifica la edición publicada vigente consultada: ISO/IEC 27004:2016 orienta la medición y evaluación de la eficacia del SGSI y de sus procesos/controles. ISO muestra DIS 27004 en desarrollo, por lo que se evita presentar el texto de 2016 como edición futura o como norma de requisitos (función de ISO/IEC 27001). Se corrige además «Sistema de Información de Gestión de la Seguridad» por «sistema de gestión de seguridad de la información (SGSI)». A1-48/A2-II-13.', 'corregida'],
  [2570, [75], ['I-9'], ['espacios de datos', 'Simpl-Open', 'conector', 'catálogo federado', 'intercambio seguro', 'Data Transfer'], [s.simpl], '', 'Se acota “espacio de datos” a la arquitectura europea Simpl-Open, porque los espacios de datos no tienen una lista universal y cerrada de componentes. La arquitectura oficial identifica conectores, catálogos de activos/federados y transferencia de datos; «indexación de procesos de negocio» no es uno de los componentes o servicios que enumera. A1-75/A2-I-9.', 'corregida']
];

const edits = {
  2566: {
    texto: 'Según la Java Language Specification SE 25, los campos declarados en el cuerpo de una interfaz son implícitamente:',
    opciones: ['public, static y final.', 'private, static y final.', 'protected y final.', 'public y abstract.'],
    respuesta_correcta: 0
  },
  2567: {
    texto: 'Según el patrón de red perimetral descrito por NIST SP 800-41 Rev. 1, ¿qué servicio se sitúa comúnmente en una DMZ cuando debe ser accesible desde Internet?',
    opciones: ['Un servidor web público.', 'Una base de datos interna con información sensible.', 'Un puesto de trabajo de usuario.', 'Un controlador de dominio interno.'],
    respuesta_correcta: 0
  },
  2568: {
    texto: 'En una arquitectura lógica de aplicación de tres capas —presentación, lógica de negocio y datos—, ¿cuál de las siguientes NO es una capa de la aplicación?',
    opciones: ['Presentación.', 'Lógica de negocio o aplicación.', 'Acceso y persistencia de datos.', 'Red IP de transporte.'],
    respuesta_correcta: 3
  },
  2569: {
    texto: 'A 28 de octubre de 2026, ¿qué norma ISO/IEC publicada ofrece directrices para monitorizar y medir el rendimiento de seguridad de la información y la eficacia de un SGSI?',
    opciones: ['ISO/IEC 27001:2022.', 'ISO/IEC 27002:2022.', 'ISO/IEC 27003:2017.', 'ISO/IEC 27004:2016.'],
    respuesta_correcta: 3
  },
  2570: {
    texto: 'En la arquitectura europea Simpl-Open para espacios de datos, ¿cuál NO se identifica como componente o servicio de la arquitectura?',
    opciones: ['Un conector de espacio de datos.', 'Un catálogo local o federado de recursos.', 'Un servicio de transferencia de datos entre participantes.', 'La indexación de procesos de negocio como componente independiente.'],
    respuesta_correcta: 3
  }
};

apply({ numero: '451', fecha: '2026-10-28', records, edits });
