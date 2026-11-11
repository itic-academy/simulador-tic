const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const metricagc = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A1f321d6d-fb6a-46ed-a369-617c0080c51d/METRICA_V3_Gestion_de_Configuracion.pdf';
const metricaasi = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf';
const cloudModels = 'https://cloud.google.com/learn/what-is-iaas';
const cloudModelCompare = 'https://cloud.google.com/learn/paas-vs-iaas-vs-saas';
const oasisSoa = 'https://docs.oasis-open.org/soa-rm/v1.0/soa-rm.html';
const rfc2131 = 'https://datatracker.ietf.org/doc/html/rfc2131';

const academyMetric = 'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk';
const academyCloud = 'https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view?usp=drivesdk';
const academySoa = 'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk';
const academyProtocols = 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk';

const sources = {
  4891: [
    { url: metricagc, referencia: 'MÉTRICA v3, Gestión de la Configuración, actividad MSI-GC 1, tareas 1.1–1.3: la tabla identifica en las tres tareas al Técnico de Mantenimiento como participante; en particular MSI-GC 1.3 registra la nueva versión del sistema de información.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, temas 95 (MÉTRICA v3) y 100/102 (gestión de configuración, versiones y cambios).' },
    { url: a2, referencia: 'Convocatoria A2 GSI AGE 2025, temas III.8 (mantenimiento) y IV.4 (gestión de configuración, cambios y versiones).' }
  ],
  4892: [
    { url: metricaasi, referencia: 'MÉTRICA v3, Análisis del Sistema de Información, actividad ASI 7: el DFD modela procesos; la metodología describe estructura de flujos y almacenes y delimita entidades externas. Esos son elementos del modelo, a diferencia de condiciones lógicas de decisión como elemento gráfico básico.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, temas 90 (análisis y modelado de procesos) y 95 (MÉTRICA v3).' },
    { url: a2, referencia: 'Convocatoria A2 GSI AGE 2025, tema III.3: estrategias de determinación de requisitos y análisis de sistemas.' }
  ],
  4893: [
    { url: cloudModels, referencia: 'Google Cloud, página oficial de modelos de servicio: identifica Compute Engine como IaaS, App Engine como PaaS y Google Workspace como SaaS.' },
    { url: cloudModelCompare, referencia: 'Google Cloud, comparación oficial IaaS/PaaS/SaaS, actualizada el 15 de octubre de 2026: define las tres familias y ofrece ejemplos de servicios de Google en cada una.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 55: Cloud Computing, IaaS, PaaS y SaaS.' },
    { url: a2, referencia: 'Convocatoria A2 GSI AGE 2025, tema II.1: computación en la nube, base tecnológica, componentes, funcionalidades y capacidades.' }
  ],
  4894: [
    { url: oasisSoa, referencia: 'OASIS Reference Model for Service Oriented Architecture 1.0, secciones 3.2.1 y 3.2.1.1: la visibilidad requiere que consumidores y proveedores puedan verse; para descubrir un servicio, el proveedor publica la descripción y los consumidores potenciales deben poder conocerla y localizarla. La disponibilidad no equivale a acceso público irrestricto: rigen alcance y políticas.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 58: procesamiento cooperativo, arquitectura cliente-servidor y arquitectura SOA.' },
    { url: a2, referencia: 'Convocatoria A2 GSI AGE 2025, tema II.6: arquitectura cliente-servidor, interoperabilidad y arquitectura de servicios web.' }
  ],
  4895: [
    { url: rfc2131, referencia: 'RFC 2131, estándar DHCPv4, secciones 3.1 y 4.3.3: asigna direcciones dinámicamente; si el cliente detecta que la dirección ofrecida/asignada ya está en uso, comunica su rechazo mediante DHCPDECLINE y reinicia el proceso.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, temas 111 (protocolos, direccionamiento y encaminamiento) y 118 (redes de área local y administración).' },
    { url: a2, referencia: 'Convocatoria A2 GSI AGE 2025, temas II.8 (TCP/IP y protocolos/direccionamiento) y IV.8 (redes locales y protocolos).' }
  ]
};

const records = [
  [4891, ['95', '100', '102'], ['III-8', 'IV-4'], ['MÉTRICA v3', 'gestión de configuración', 'MSI-GC 1.3', 'versionado', 'Técnico de Mantenimiento'], sources[4891], null,
    'Respuesta A. En MÉTRICA v3, la actividad MSI-GC 1 registra el cambio en el sistema de gestión de la configuración; la tarea MSI-GC 1.3 trata la nueva versión del sistema de información y señala al Técnico de Mantenimiento como participante. La pregunta se acota a esa tarea, ya que el enunciado original mezclaba el registro de versión con otras actividades y podía sugerir una responsabilidad genérica ajena a la tabla de participantes.', 'corregida'],
  [4892, ['90', '95'], ['III-3'], ['MÉTRICA v3', 'DFD', 'diagrama de flujo de datos', 'procesos', 'almacenes de datos', 'entidades externas'], sources[4892], null,
    'Respuesta B. El diagrama de flujo de datos modela procesos y representa los flujos, almacenes de datos y entidades externas. «Condiciones» de decisión no es un elemento gráfico básico de ese modelo, aunque las condiciones sí puedan aparecer en otras técnicas o especificaciones del análisis. Se reescribe la pregunta para que el alcance sea expresamente el DFD de análisis estructurado.', 'corregida'],
  [4893, ['55'], ['II-1'], ['Google Cloud', 'Google Workspace', 'IaaS', 'PaaS', 'SaaS', 'servicios en la nube'], sources[4893], null,
    'Respuesta B. La cartera de Google abarca las tres categorías: Compute Engine es IaaS, App Engine es PaaS y Google Workspace es SaaS. Se explicita que se consideran Google Cloud y Workspace, porque la frase «Google como proveedor» sin delimitar la cartera podía interpretarse de manera demasiado general y las familias se aplican a productos/servicios, no a un proveedor como una única oferta indivisible.', 'corregida'],
  [4894, ['58'], ['II-6'], ['SOA', 'arquitectura orientada a servicios', 'visibilidad', 'descubrimiento de servicios', 'descripción de servicio', 'políticas'], sources[4894], null,
    'Respuesta D, con precisión. El modelo de referencia de OASIS explica que la interacción en SOA exige visibilidad: las partes deben poder conocerse y ser alcanzables, y las descripciones del servicio permiten descubrir y evaluar las capacidades. «Accesible» no significa necesariamente acceso público o sin control: las políticas y restricciones definidas en la descripción también gobiernan el uso.', 'corregida'],
  [4895, ['111', '118'], ['II-8', 'IV-8'], ['DHCPv4', 'RFC 2131', 'asignación dinámica', 'DHCPDECLINE', 'direccionamiento IP'], sources[4895], null,
    'Respuesta D. DHCP permite la asignación dinámica de parámetros de red, incluida una dirección IPv4. Si el cliente comprueba que la dirección propuesta o confirmada ya está siendo usada, el protocolo define DHCPDECLINE para informar al servidor y volver a solicitar configuración; ARP permite detectar conflictos localmente, mientras RARP y RIP no cumplen la función descrita. Se precisa que el rechazo corresponde al caso de conflicto de dirección, no a una facultad arbitraria para rechazar cualquier concesión.', 'corregida']
];

const edits = {
  4891: { texto: 'En MÉTRICA v3, ¿quién figura como participante en la tarea MSI-GC 1.3, «Registro de la Nueva Versión de los Sistemas de Información en el Sistema de Gestión de la Configuración»?', opciones: [
    'El Técnico de Mantenimiento.',
    'El Técnico de Sistemas.',
    'El Técnico de Bases de Datos.',
    'El Técnico de Comunicaciones.'
  ], respuesta_correcta: 0 },
  4892: { texto: 'En un diagrama de flujo de datos (DFD) de análisis estructurado, ¿cuál de los siguientes NO es un elemento gráfico básico del modelo?', opciones: [
    'Entidades externas que aportan datos o los reciben.',
    'Condiciones lógicas de decisión representadas como un símbolo propio del DFD.',
    'Procesos que transforman datos.',
    'Almacenes de datos.'
  ], respuesta_correcta: 1 },
  4893: { texto: 'Considerando conjuntamente Google Cloud y Google Workspace, ¿qué modelos de servicio en la nube ofrece Google?', opciones: [
    'Solo IaaS.',
    'IaaS, PaaS y SaaS, mediante productos distintos.',
    'PaaS y SaaS, pero no IaaS.',
    'Solo SaaS.'
  ], respuesta_correcta: 1 },
  4894: { texto: 'Según el modelo de referencia de OASIS para SOA, ¿qué condición facilita que un consumidor pueda descubrir un servicio para valorar su posible uso?', opciones: [
    'Los servicios dependen de una arquitectura hub-and-spoke obligatoria.',
    'Los servicios deben integrarse en sistemas gestores de bases de datos relacionales.',
    'Los cambios de implementación del servicio deben afectar necesariamente a sus consumidores.',
    'El proveedor pone a disposición una descripción del servicio para que los consumidores potenciales puedan conocerlo y localizarlo, dentro de las políticas aplicables.'
  ], respuesta_correcta: 3 },
  4895: { texto: 'Según DHCPv4 (RFC 2131), ¿qué protocolo asigna direcciones IP dinámicamente y permite al cliente comunicar que una dirección propuesta ya está en uso?', opciones: [
    'ARP, mediante el cual el cliente informa al servidor DHCP de que la dirección propuesta está ocupada.',
    'RARP, que solicita al servidor que asigne una dirección IP dinámica.',
    'RIP, que anuncia al servidor DHCP los conflictos de direcciones.',
    'DHCP, mediante el mensaje DHCPDECLINE cuando el cliente detecta que la dirección ya está en uso.'
  ], respuesta_correcta: 3 }
};

aplicar({ numero: '914', fecha: '2026-11-11', records, edits });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-914.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4891: [academyMetric, 'ITIC Academy 2026, bloque 15, sección 39 de MÉTRICA v3: coteja mantenimiento y gestión de configuración; se identifica MSI-GC 1.3 como registro de nueva versión y se verifica el participante en la metodología oficial.'],
  4892: [academyMetric, 'ITIC Academy 2026, bloque 15, sección 39 de MÉTRICA v3: cubre análisis y DFD dentro del método; los elementos del modelo se contrastan con el manual oficial de ASI.'],
  4893: [academyCloud, 'ITIC Academy 2026, bloque 25 de Cloud Computing A1-55/A2-II.1: desarrolla IaaS, PaaS y SaaS; los ejemplos concretos de Google se comprueban en la cartera y documentación oficial del proveedor.'],
  4894: [academySoa, 'ITIC Academy 2026, bloque 28 de arquitectura SOA A1-58: coteja la visibilidad y el descubrimiento de servicios; la definición se basa en el modelo de referencia normativo OASIS.'],
  4895: [academyProtocols, 'ITIC Academy 2026, bloque 43 de protocolos: cubre direccionamiento y DHCP, incluida la evolución de RFC aplicables; la semántica DHCPDECLINE se verifica en RFC 2131.']
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const [academyUrl, detail] = academy[change.id];
  q.clasificacion.bloque_academia = `${detail} El material académico es un cotejo curricular, no sustituye MÉTRICA, OASIS, el RFC ni la documentación del fabricante.`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo ITIC Academy: ${detail} La afirmación se contrasta con las fuentes técnicas primarias citadas.`;
  q.revision.observaciones += ` ${detail}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: academyUrl, referencia: `ITIC Academy: ${detail}` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular ITIC Academy agregado al lote 914.');
