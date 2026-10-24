const apply = require('./aplicar-lote.cjs');

const sources = {
  scale: {
    url: 'https://learn.microsoft.com/en-us/azure/architecture/guide/design-principles/scale-out',
    referencia: 'Microsoft Learn, Azure Architecture Center, Design to scale out: la escalabilidad horizontal añade o retira instancias; los resultados dependen de la arquitectura, los cuellos de botella y el acoplamiento, por lo que la distribución no garantiza por sí sola más velocidad.'
  },
  semantic: {
    url: 'https://aclanthology.org/P84-1017.pdf',
    referencia: 'Simmons, Robert F., The Costs of Inheritance in Semantic Networks, ACL 1984: analiza el uso de organización taxonómica y herencia para responder preguntas mediante relaciones semánticas; se evita presentar una pareja universal de procedimientos.'
  },
  js: {
    url: 'https://developer.mozilla.org/en-US/docs/Glossary/Engine/JavaScript',
    referencia: 'MDN Web Docs, JavaScript engine: el motor JavaScript analiza y ejecuta el lenguaje; los motores modernos combinan interpretación y compilación JIT. En navegadores actúa junto al entorno anfitrión del navegador, sin JVM.'
  },
  jsHost: {
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model',
    referencia: 'MDN Web Docs, JavaScript execution model: distingue el motor ECMAScript del entorno anfitrión; el navegador proporciona DOM y APIs web y Node.js es otro entorno, también capaz de ejecutar JavaScript en servidor.'
  },
  war: {
    url: 'https://jakarta.ee/specifications/servlet/6.1/jakarta-servlet-spec-6.1.pdf',
    referencia: 'Jakarta Servlet 6.1, especificación final, §§ 10.6–10.7: un WAR es un archivo Web Application Archive que empaqueta una aplicación web para su despliegue; el descriptor contiene información de configuración y despliegue.'
  },
  warTutorial: {
    url: 'https://jakarta.ee/learn/docs/jakartaee-tutorial/current/web/webapp/webapp.html',
    referencia: 'Jakarta EE Tutorial, Getting Started with Web Applications: el WAR reúne componentes web, recursos estáticos, dependencias y descriptores en una unidad desplegable; se usa con un contenedor compatible con las especificaciones que requiere la aplicación.'
  },
  crm: {
    url: 'https://www.oracle.com/cx/what-is-crm/',
    referencia: 'Oracle, What is CRM?: desarrolla Customer Relationship Management (gestión de las relaciones con clientes) y describe los sistemas CRM como herramientas para gestionar datos e interacciones con clientes.'
  }
};

const academy = {
  architecture: {
    url: 'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 28 «Arquitectura SOA y requisitos no funcionales», versión 2026 V2, apartado de procesamiento cooperativo, cliente-servidor y SOA; cotejo temático, sin atribuir al material una garantía automática de escalabilidad.'
  },
  ai: {
    url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 32 «Inteligencia artificial y ciencia de datos», versión 2026.1, § 6 (representación simbólica del conocimiento, redes semánticas y mecanismos de inferencia).'
  },
  web: {
    url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1, arquitectura web, JavaScript y aplicaciones web; cotejo temático, sin afirmar que el temario describe todos los detalles actuales del motor ECMAScript.'
  },
  crm: {
    url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1, sistemas CRM/ERP; correspondencia A1-72 y A2-II-12 (atención a clientes y usuarios, CRM).'
  }
};

const records = [
  [1256, [58], ['II-6'], ['sistemas distribuidos', 'arquitectura cliente-servidor', 'escalabilidad horizontal', 'SOA'], [sources.scale], null,
    'La oposición absoluta del original entre sistema distribuido y monolítico podía sugerir que distribuir siempre mejora el rendimiento. Se formula una posibilidad condicionada: una arquitectura distribuida y desacoplada puede facilitar escalado horizontal al añadir instancias, aunque los cuellos de botella y la coordinación pueden limitarlo. La documentación de Microsoft explicita esas condiciones. Cotejo con ITIC Academy, bloque 28, versión 2026 V2, sobre procesamiento cooperativo, cliente-servidor y SOA; el PDF aporta contexto arquitectónico, no una garantía universal de escalabilidad.', 'corregida'],
  [1257, [70], ['III-5'], ['redes semánticas', 'representación del conocimiento', 'herencia', 'inferencia', 'IA simbólica'], [sources.semantic], null,
    'El original afirmaba que existen exactamente dos procedimientos universales llamados «herencia y emparejamiento», algo que depende de la formulación o del manual. Se concreta el mecanismo comprobable: en una red semántica taxonómica, la herencia permite obtener una propiedad que no está definida localmente consultando conceptos más generales conectados. Simmons analiza precisamente la herencia como parte del procedimiento de respuesta a consultas en redes semánticas. Cotejo con ITIC Academy, bloque 32, versión 2026.1, § 6, redes semánticas y representación simbólica; la academia cubre el tema, pero no establece como taxonomía universal la pareja del enunciado original.', 'corregida'],
  [1258, [65, 77], ['II-9', 'III-12'], ['JavaScript', 'motor ECMAScript', 'navegador', 'JIT', 'Node.js'], [sources.js, sources.jsHost], null,
    'La respuesta de origen dependía de una simplificación antigua: los motores actuales pueden interpretar y compilar JIT, y JavaScript también puede ejecutarse fuera del navegador. Se pregunta ahora por el contexto cliente: el navegador hospeda un motor JavaScript que analiza y ejecuta el código; no se necesita una JVM. Node.js es otro entorno anfitrión válido, por lo que no se afirma que JavaScript solo se ejecute en navegador. Cotejo temático con ITIC Academy, bloque 30, versión 2026.1, JavaScript y arquitectura web; los detalles actuales de motor y entorno anfitrión se comprueban en MDN.', 'corregida'],
  [1259, [67, 65], ['III-10', 'III-12'], ['WAR', 'Web Application Archive', 'Jakarta Servlet', 'despliegue web', 'contenedor compatible'], [sources.war, sources.warTutorial], null,
    'Se conserva el concepto central y se elimina «cualquier contenedor», porque el despliegue exige compatibilidad de versiones, APIs y dependencias. Un WAR es un archivo de aplicación web que empaqueta componentes y recursos para su despliegue en un contenedor compatible con las especificaciones requeridas. La especificación Jakarta Servlet 6.1 define el formato y el tutorial de Jakarta EE resume su contenido. Cotejo temático con ITIC Academy, bloque 30, versión 2026.1, tecnologías Java/Jakarta y aplicaciones web; la interoperabilidad concreta queda condicionada a la plataforma compatible.', 'corregida'],
  [1260, [72], ['II-12'], ['CRM', 'Customer Relationship Management', 'gestión de las relaciones con clientes'], [sources.crm], null,
    'La clave original era correcta, pero la traducción «gestión de relación con los clientes» resulta poco natural y el acrónimo suele desarrollarse en singular como Customer Relationship Management. Se conserva la expansión y se precisa la traducción habitual: gestión de las relaciones con clientes. Oracle confirma tanto la expansión como el ámbito funcional de los sistemas CRM. Cotejo temático con ITIC Academy, bloque 30, versión 2026.1, CRM/ERP; correspondencia directa con A1-72 y A2-II-12.', 'corregida']
];

const edits = {
  1256: { texto: 'Si una aplicación se diseña con componentes desacoplados y sin cuellos de botella dominantes, ¿qué propiedad puede facilitar una arquitectura distribuida frente a una única instancia monolítica?', opciones: ['La escalabilidad horizontal, al permitir añadir instancias que atiendan carga distribuible.', 'La eliminación automática de toda latencia de red.', 'La portabilidad entre sistemas operativos, con independencia de las tecnologías usadas.', 'La ausencia de fallos, aunque no haya redundancia.'], respuesta_correcta: 0 },
  1257: { texto: 'En una red semántica con relaciones taxonómicas, ¿qué permite el mecanismo de herencia al responder una consulta?', opciones: ['Obtener una propiedad no definida localmente en un nodo a partir de un concepto más general conectado.', 'Convertir toda relación en una tabla relacional normalizada.', 'Ejecutar código JavaScript dentro del navegador.', 'Garantizar que cualquier consulta tenga una única respuesta, aunque haya relaciones contradictorias.'], respuesta_correcta: 0 },
  1258: { texto: 'En una página web ejecutada en el cliente, ¿qué componente procesa y ejecuta el código JavaScript?', opciones: ['El motor JavaScript del entorno anfitrión del navegador; los motores modernos pueden interpretar y compilar JIT.', 'La máquina virtual Java (JVM), obligatoria para todo código JavaScript.', 'El servidor web, necesariamente antes de enviar el código y sin ejecución cliente.', 'El motor de renderizado HTML, que sustituye al motor JavaScript.'], respuesta_correcta: 0 },
  1259: { texto: 'En las tecnologías Java EE/Jakarta EE, ¿qué es un archivo WAR?', opciones: ['Un archivo que empaqueta una aplicación web y sus recursos para desplegarla en un contenedor compatible con las especificaciones que requiere.', 'Un fichero que contiene exclusivamente el código fuente necesario para compilar el proyecto.', 'Un archivo dedicado únicamente a módulos EJB, sin componentes web.', 'Un formato que no puede contener descriptor de despliegue ni dependencias.'], respuesta_correcta: 0 },
  1260: { texto: '¿Qué significan las siglas CRM en los sistemas de información empresariales?', opciones: ['Cost Recalculating Method: método de recálculo de costes.', 'Call Routing for Mobile: enrutamiento de llamadas móviles.', 'Customer Relationship Management: gestión de las relaciones con clientes.', 'Customer Relationship Method: método para relacionar clientes.'], respuesta_correcta: 2 }
};

apply({ numero: '188', fecha: '2026-10-24', records, edits });

// Añade el cotejo concreto de academia y lo conserva en el registro inmutable.
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-188.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const notes = {
  1256: { academy: 'architecture', block: '28 · Arquitectura SOA y requisitos no funcionales, versión 2026 V2, procesamiento cooperativo, cliente-servidor y SOA.', topics: 'A1-58/A2-II-6' },
  1257: { academy: 'ai', block: '32 · Inteligencia artificial y ciencia de datos, versión 2026.1, § 6, representación simbólica, redes semánticas e inferencia.', topics: 'A1-70/A2-III-5' },
  1258: { academy: 'web', block: '30 · Tecnologías de sistemas de información, versión 2026.1, JavaScript, arquitectura web y aplicaciones cliente.', topics: 'A1-65/A1-77/A2-II-9/A2-III-12' },
  1259: { academy: 'web', block: '30 · Tecnologías de sistemas de información, versión 2026.1, Java/Jakarta EE y aplicaciones web.', topics: 'A1-65/A1-67/A2-III-10/A2-III-12' },
  1260: { academy: 'crm', block: '30 · Tecnologías de sistemas de información, versión 2026.1, CRM/ERP.', topics: 'A1-72/A2-II-12' }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const meta = notes[q.id];
  const source = academy[meta.academy];
  q.clasificacion.bloque_academia = meta.block;
  q.clasificacion.nota = `Cotejo temático con ITIC Academy: ${meta.block} Correspondencia orientativa: ${meta.topics}.`;
  const comment = ` Cotejo temático con ITIC Academy: ${meta.block} Correspondencia orientativa con el programa oficial: ${meta.topics}.`;
  q.comentarios += comment;
  q.revision.observaciones += comment;
  q.revision.fuentes.push({ url: source.url, referencia: `ITIC Academy, ${meta.block} Correspondencia temática con ${meta.topics}.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de academia y registro de resultados añadidos al lote 188.');
