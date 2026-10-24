const apply = require('./aplicar-lote.cjs');

const primary = {
  jlsEquality: { url: 'https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.21.1', referencia: 'Java Language Specification, Java SE 25, §15.21.1: la igualdad entre operandos numéricos aplica promoción numérica binaria antes de comparar.' },
  jlsPromotion: { url: 'https://docs.oracle.com/javase/specs/jls/se25/html/jls-5.html#jls-5.6', referencia: 'Java Language Specification, Java SE 25, §5.6: en contexto numérico los operandos byte, short y char se promocionan a int.' },
  servlet: { url: 'https://jakarta.ee/specifications/servlet/6.1/', referencia: 'Jakarta Servlet 6.1, especificación de la API de servlets para aplicaciones web; define la interacción de peticiones/respuestas con un contenedor y no limita la respuesta a contenido estático.' },
  crmSales: { url: 'https://learn.microsoft.com/en-us/dynamics365/sales/overview', referencia: 'Microsoft Learn, Dynamics 365 Sales: el producto CRM permite gestionar cuentas, contactos, oportunidades, listas y campañas de marketing y casos de servicio; muestra que el alcance incluye funciones comerciales diversas.' },
  crmContact: { url: 'https://learn.microsoft.com/en-us/dynamics365/contact-center/implement/overview-contact-center', referencia: 'Microsoft Learn, Dynamics 365 Contact Center overview: describe IVR, voz, canales digitales y enrutamiento omnicanal integrados con una solución CRM elegida. Es un producto concreto, no una taxonomía universal de paquetes CRM.' },
  windows: { url: 'https://learn.microsoft.com/en-us/sysinternals/resources/windows-internals', referencia: 'Microsoft Learn, Windows Internals Book: fuente del fabricante que cubre la arquitectura y los componentes internos del kernel y Windows NT. La documentación no adopta literalmente una de las etiquetas docentes monolithic/microkernel/hybrid; por ello no basta para certificar esa taxonomía.' },
  nistHybrid: { url: 'https://csrc.nist.gov/pubs/sp/800/145/final', referencia: 'NIST SP 800-145, The NIST Definition of Cloud Computing, §2. La nube híbrida combina dos o más infraestructuras cloud distintas (privada, comunitaria o pública), unidas por tecnología que permite portabilidad de datos y aplicaciones; no exige necesariamente nube pública más privada.' },
  nistGlossary: { url: 'https://csrc.nist.gov/glossary/term/hybrid_cloud', referencia: 'NIST CSRC Glossary, hybrid cloud: remite a la definición de SP 800-145; confirma que hay combinaciones posibles distintas de pública+privada.' }
};

const academy = {
  web: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1: cotejo temático de Java y tecnologías de servidor/aplicaciones web.' },
  crm: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1, apartado de CRM/ERP; cotejo temático, no define un catálogo universal de módulos CRM.' },
  os: { url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 27 «Sistemas operativos», versión 2026.1: Windows y fundamentos/componentes del sistema operativo.' },
  cloud: { url: 'https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 25 «Cloud Computing», versión 2026, modelos y modalidades de despliegue cloud; cotejo temático.' }
};

const records = [
  [1301, [67], ['III-10'], ['Java', 'byte', 'promoción numérica binaria', 'igualdad', 'operador ternario'], [primary.jlsEquality, primary.jlsPromotion], null,
    'La clave original es correcta. Se corrige la redacción y se explicita el razonamiento: `busca` vale 12; en la igualdad numérica el byte se promociona a int y `6 + 6` vale 12, de modo que la condición es verdadera. El operador condicional imprime `true`. Cotejo temático con ITIC Academy, bloque 30, Java; la respuesta se comprueba con JLS SE 25, §§5.6 y 15.21.1.', 'corregida'],
  [1302, [65], ['III-12'], ['Java', 'Jakarta Servlet', 'contenedor web', 'HTTP', 'contenido dinámico'], [primary.servlet], null,
    'La afirmación falsa es que un servlet solo genera contenido estático. Los servlets procesan solicitudes y producen respuestas en una aplicación web; pueden generar contenido dinámico y también entregar recursos estáticos. Se corrige «sólo» y se evita presentar el rol de presentación como requisito arquitectónico universal: un servlet es un componente del lado del servidor alojado por un contenedor. Cotejo temático con ITIC Academy, bloque 30, aplicaciones web y Java.', 'corregida'],
  [1303, [72], ['II-12'], ['CRM', 'automatización de ventas', 'televentas', 'campañas', 'call center', 'CTI', 'pendiente de alcance'], [primary.crmSales, primary.crmContact], null,
    'Pendiente de ambigüedad. La pregunta pide identificar algo que «NO se puede considerar incluido» en un paquete CRM sin especificar fabricante, edición, fecha ni taxonomía. Las funciones CRM varían entre productos: Microsoft documenta campañas y listas de marketing en Sales, y ofrece IVR, voz, canales digitales y enrutamiento en una solución de Contact Center integrada con CRM. Por ello no se puede afirmar que las televentas masivas estén excluidas de todos los paquetes; tampoco que cada producto incluya necesariamente CTI o call center. Se conserva el original y su clave sin certificarla. Cotejo con ITIC Academy, bloque 30, CRM/ERP; el material no fija un inventario universal de módulos.', 'pendiente_ambiguedad'],
  [1304, [59, 61], ['II-2'], ['Windows', 'kernel', 'arquitectura', 'microkernel', 'híbrida', 'pendiente de taxonomía'], [primary.windows], null,
    'Pendiente de fuente. «Híbrida» es la respuesta habitual en clasificaciones docentes de Windows NT, que combina características asociadas a microkernel con componentes ejecutados en modo kernel. Sin embargo, la fuente primaria de Microsoft consultada describe arquitectura y componentes, pero no clasifica literalmente el kernel como «híbrido» frente a las opciones del test. No se presenta esa taxonomía como una afirmación oficial verificada; se conserva en revisión hasta localizar una fuente técnica primaria que la formule o reformular el ítem con criterios comprobables. Cotejo temático con ITIC Academy, bloque 27, Sistemas operativos.', 'pendiente_fuente'],
  [1305, [55], ['II-1'], ['cloud computing', 'nube híbrida', 'NIST SP 800-145', 'modelos de despliegue'], [primary.nistHybrid, primary.nistGlossary], null,
    'Se corrige la definición. Conforme a NIST SP 800-145, nube híbrida integra dos o más infraestructuras cloud distintas (privada, comunitaria o pública) mediante tecnología que permite portabilidad; no exige siempre combinar una pública con una privada. La presencia de nodos con sistemas operativos diferentes o de un centro de datos tradicional no basta para definirla. Cotejo temático con ITIC Academy, bloque 25, Cloud Computing.', 'corregida']
];

apply({ numero: '197', fecha: '2026-10-24', records, edits: {
  1301: { texto: 'Si `busca` es una variable de tipo `byte` con valor 12, ¿qué imprime esta sentencia Java? `System.out.println(busca == 6 + 6 ? true : false);`', opciones: ['Da un error de compilación.', 'true', 'false', '12'], respuesta_correcta: 1 },
  1302: { texto: 'Respecto a los servlets de Java/Jakarta, señale la afirmación falsa:', opciones: ['Se ejecutan en el contexto de un contenedor web.', 'Pueden formar parte de la capa de presentación de una aplicación.', 'El contenedor puede asociar una URL a un servlet.', 'Un servlet solo puede generar contenido estático.'], respuesta_correcta: 3 },
  1305: { texto: 'Según la definición de NIST SP 800-145, una nube híbrida es una composición de:', opciones: ['Servicios que mezclan necesariamente PaaS e IaaS.', 'Nodos que ejecutan sistemas operativos diferentes.', 'Dos o más infraestructuras cloud distintas —privada, comunitaria o pública— unidas para permitir portabilidad.', 'Tecnologías cloud y un centro de datos tradicional, sin necesidad de integrar infraestructuras cloud distintas.'], respuesta_correcta: 2 }
}});

const fs = require('node:fs');
const path = require('node:path');
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-197.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const notes = {
  1301: { source: academy.web, block: 'Bloque 30, Tecnologías de sistemas de información, versión 2026.1 (Java).', topics: 'A1-67/A2-III-10' },
  1302: { source: academy.web, block: 'Bloque 30, Tecnologías de sistemas de información, versión 2026.1 (Java y aplicaciones web).', topics: 'A1-65/A2-III-12' },
  1303: { source: academy.crm, block: 'Bloque 30, Tecnologías de sistemas de información, versión 2026.1 (CRM/ERP); el material no establece un conjunto universal de módulos y la pregunta queda pendiente de alcance.', topics: 'A1-72/A2-II-12' },
  1304: { source: academy.os, block: 'Bloque 27, Sistemas operativos, versión 2026.1 (Windows y fundamentos de sistemas operativos).', topics: 'A1-59/A1-61/A2-II-2' },
  1305: { source: academy.cloud, block: 'Bloque 25, Cloud Computing, versión 2026 (modelos y modalidades de despliegue).', topics: 'A1-55/A2-II-1' }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const meta = notes[q.id];
  q.clasificacion.bloque_academia = meta.block;
  q.clasificacion.nota = `Cotejo temático con ITIC Academy: ${meta.block} Correspondencia orientativa: ${meta.topics}.`;
  const comment = ` Cotejo temático con ITIC Academy: ${meta.block} Correspondencia orientativa: ${meta.topics}.`;
  q.comentarios = (q.comentarios || '') + comment;
  q.revision.observaciones += comment;
  q.revision.fuentes.push({ url: meta.source.url, referencia: `${meta.source.referencia} Correspondencia: ${meta.topics}.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo temático con ITIC Academy y registro actualizados para el lote 197.');
