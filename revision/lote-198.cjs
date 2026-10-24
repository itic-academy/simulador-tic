const apply = require('./aplicar-lote.cjs');

const primary = {
  jsp: { url: 'https://jakarta.ee/specifications/pages/3.1/jakarta-server-pages-spec-3.1', referencia: 'Jakarta Server Pages 3.1, §1.10: las directivas estándar de una página JSP son page, taglib e include. «map» no es una directiva JSP; los elementos taglib de web.xml pueden mapear URI a descriptor de biblioteca.' },
  erp: { url: 'https://www.sap.com/resources/what-is-erp', referencia: 'SAP, What is ERP?: los ERP constan de módulos integrados, cada uno centrado en un área de negocio; las organizaciones pueden seleccionar módulos, añadirlos y escalarlos según necesidades.' },
  laravel: { url: 'https://laravel.com/docs/13.x', referencia: 'Documentación oficial de Laravel 13: framework de desarrollo de aplicaciones web en PHP; la documentación actual cubre instalación, arquitectura, rutas, vistas y otros componentes del framework.' },
  smime: { url: 'https://datatracker.ietf.org/doc/rfc8551/', referencia: 'IETF RFC 8551 (S/MIME 4.0), actualizado por RFC 9788: define seguridad para datos MIME en mensajería; las firmas ofrecen autenticación e integridad y el cifrado confidencialidad. El estándar no es un algoritmo de cifrado como IDEA ni una familia matemática como curvas elípticas.' },
  smimeUpdate: { url: 'https://datatracker.ietf.org/doc/rfc9788/', referencia: 'IETF RFC 9788, Header Protection for Cryptographically Protected Email: actualiza RFC 8551 para proteger encabezados de correo cifrados/firmados; confirma la evolución vigente del estándar S/MIME.' },
  jndi: { url: 'https://docs.oracle.com/en/java/javase/25/docs/api/java.naming/javax/naming/package-summary.html', referencia: 'Oracle Java SE 25 API, paquete javax.naming: define las operaciones de JNDI para servicios de nombres y describe bindings nombre-objeto y operaciones lookup/bind.' },
  jndiOps: { url: 'https://docs.oracle.com/javase/tutorial/jndi/ops/index.html', referencia: 'Oracle Java Tutorials, Naming and Directory Operations: JNDI realiza búsquedas de objetos y operaciones sobre espacios de nombres y servicios de directorio mediante proveedores.' }
};

const academy = {
  web: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1, índice y contenido oficial: A1-65/67/68/72 y A2-T3/T9/D10/D12; apartados de Jakarta EE (servlets/JSP), APIs Java, PHP, CRM y ERP.' },
  security: { url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 36 «Seguridad, criptografía, identificación y firma», versión 2026.1: cotejo de criptografía asimétrica, algoritmos, formatos y correo protegido S/MIME.' }
};

const records = [
  [1306, [65, 67], ['III-10', 'III-12'], ['Jakarta Server Pages', 'JSP', 'directivas', 'page', 'taglib', 'include'], [primary.jsp], null,
    'Se conserva la clave `map`, y se precisa el supuesto para separar dos conceptos parecidos: Jakarta Server Pages 3.1 define en una página las directivas `page`, `taglib` e `include`; el elemento de configuración `taglib` de `web.xml` puede mantener un mapeo URI–descriptor, pero `map` no es por ello una directiva JSP. Cotejo con ITIC Academy, bloque 30, Jakarta EE/JSP.', 'corregida'],
  [1307, [72], [], ['ERP', 'Enterprise Resource Planning', 'modularidad', 'procesos integrados', 'módulos'], [primary.erp], null,
    'Se mantiene la cuarta opción como respuesta y se corrige su formulación: los módulos ERP cubren áreas funcionales distintas, comparten datos/procesos y pueden seleccionarse, ampliarse o escalarse según las necesidades. No se define modularidad como personalización de interfaz ni como intercambio con competidores, y las copias de seguridad no son la función principal del ERP. Cotejo con ITIC Academy, bloque 30, CRM/ERP.', 'corregida'],
  [1308, [65, 68], ['III-12'], ['PHP', 'Laravel', 'framework web', 'framework PHP'], [primary.laravel], null,
    'La respuesta original es correcta: Laravel es un framework de aplicaciones web para PHP. Xamarin se asocia al desarrollo multiplataforma con .NET, Meteor al ecosistema JavaScript y Spring al ecosistema Java. Cotejo con ITIC Academy, bloque 30, A1-68 y sección de PHP; la identidad del framework se confirma en su documentación oficial.', 'vigente'],
  [1309, [79, 80], ['IV-12'], ['S/MIME', 'correo electrónico', 'firma digital', 'cifrado MIME', 'curvas elípticas', 'IDEA'], [primary.smime, primary.smimeUpdate], null,
    'Se corrige la categoría: S/MIME no es un algoritmo de cifrado, sino el estándar que protege contenido MIME de correo mediante firma y cifrado. Curvas elípticas son una familia de técnicas criptográficas y IDEA un algoritmo simétrico; MD5 es una función hash. RFC 8551 define S/MIME 4.0 y RFC 9788 actualiza la protección de encabezados. Cotejo con ITIC Academy, bloque 36, correo protegido y criptografía.', 'corregida'],
  [1310, [67, 80], ['III-10'], ['Java', 'JNDI', 'nombres', 'servicios de directorio', 'lookup', 'proveedores'], [primary.jndi, primary.jndiOps], null,
    'La clave original es correcta. JNDI (Java Naming and Directory Interface) es la API Java para operaciones de nombres y directorio: permite resolver nombres, enlazar y recuperar objetos asociados y acceder a proveedores de distintos servicios. No es una biblioteca gráfica, herramienta de depuración ni API genérica de transporte cliente-servidor. Cotejo con ITIC Academy, bloque 30, APIs Java/JNDI.', 'corregida']
];

apply({ numero: '198', fecha: '2026-10-24', records, edits: {
  1306: { texto: 'Según Jakarta Server Pages 3.1, ¿cuál de estas no es una directiva estándar de página JSP escrita con la sintaxis `<%@ ... %>`?', opciones: ['page', 'map', 'taglib', 'include'], respuesta_correcta: 1 },
  1307: { texto: '¿Qué describe mejor la modularidad de un sistema ERP?', opciones: ['Que solo se puede personalizar la interfaz, pero no sus funciones.', 'Que su función principal es intercambiar datos con sistemas de empresas competidoras.', 'Que su función principal consiste en realizar copias de seguridad periódicas.', 'Que organiza funciones empresariales en módulos integrados que pueden seleccionarse y ampliarse según las necesidades de la organización.'], respuesta_correcta: 3 },
  1309: { texto: '¿Qué estándar permite proteger mensajes de correo basados en MIME mediante firma digital y cifrado?', opciones: ['MD5, función hash para obtener resúmenes.', 'IDEA, algoritmo de cifrado simétrico.', 'Criptografía de curva elíptica, familia de técnicas de clave pública.', 'S/MIME, estándar de seguridad para mensajes MIME.'], respuesta_correcta: 3 },
  1310: { texto: '¿Qué describe mejor JNDI (Java Naming and Directory Interface)?', opciones: ['Una biblioteca gráfica para crear interfaces de usuario Java.', 'Una herramienta de depuración de aplicaciones Java en ejecución.', 'Una API Java para operaciones de nombres y directorio, como buscar objetos mediante un nombre y consultar servicios a través de proveedores.', 'Una API genérica para transportar datos en red entre cualquier servidor y cliente.'], respuesta_correcta: 2 }
}});

const fs = require('node:fs');
const path = require('node:path');
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-198.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const notes = {
  1306: { source: academy.web, block: 'Bloque 30, Tecnologías de sistemas de información, versión 2026.1 (Jakarta EE/JSP y aplicaciones web).', topics: 'A1-65/A1-67/A2-III-10/A2-III-12' },
  1307: { source: academy.web, block: 'Bloque 30, Tecnologías de sistemas de información, versión 2026.1 (CRM/ERP).', topics: 'A1-72' },
  1308: { source: academy.web, block: 'Bloque 30, Tecnologías de sistemas de información, versión 2026.1 (A1-68, PHP; framework web).', topics: 'A1-65/A1-68/A2-III-12' },
  1309: { source: academy.security, block: 'Bloque 36, Seguridad, criptografía, identificación y firma, versión 2026.1 (cifrado, clave pública y correo protegido).', topics: 'A1-79/A1-80/A2-IV-12' },
  1310: { source: academy.web, block: 'Bloque 30, Tecnologías de sistemas de información, versión 2026.1 (APIs Java, JNDI; Jakarta EE).', topics: 'A1-67/A1-80/A2-III-10' }
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
console.log('Cotejo temático con ITIC Academy y registro actualizados para el lote 198.');
