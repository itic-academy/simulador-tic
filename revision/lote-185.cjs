const apply = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');

const academy = {
  cpd: {
    url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 26, Hardware, servidores, CPD y almacenamiento, versión 2026.1, §§ 5.2 (TIA-942-C), 5.4 (refrigeración y gestión térmica) y 5.6 (incendios, seguridad física y cableado).'
  },
  desarrollo: {
    url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 30, Tecnologías de sistemas de información, versión 2026.1, §§ 4.5 (API JDBC y Java), 8.2 (WordPress como CMS PHP), apartado de integración entre sistemas y relación de materias del programa.'
  }
};

const sources = {
  wordpress: { url: 'https://wordpress.org/about/requirements/', referencia: 'WordPress.org, Requirements: WordPress se ejecuta en servidores PHP; PHP 8.3 o posterior es la recomendación de alojamiento vigente al revisar esta pregunta.' },
  tia: { url: 'https://tiaonline.org/standard/tia-942/', referencia: 'Telecommunications Industry Association, TIA-942-C, publicada en mayo de 2024: requisitos de infraestructura de centros de datos y salas de equipos, con alcance de telecomunicaciones, energía, refrigeración, arquitectura, protección contra incendios, seguridad y protección física.' },
  tiaRelease: { url: 'https://tiaonline.org/press-release/tia-unveils-revision-c-of-the-global-data-center-infrastructure-standard/', referencia: 'TIA, anuncio de ANSI/TIA-942-C (9 de mayo de 2024): describe la revisión C como actualización del estándar de infraestructura global para centros de datos.' },
  jdbcBridge: { url: 'https://docs.oracle.com/javase/7/docs/technotes/guides/jdbc/bridge.html', referencia: 'Oracle, JDBC-ODBC Bridge: permitía a aplicaciones Java usar mediante JDBC controladores ODBC existentes; Oracle lo caracterizó como solución transitoria y no soportada.' },
  jdbcRemoved: { url: 'https://docs.oracle.com/javase/8/docs/technotes/guides/jdbc/', referencia: 'Oracle Java SE 8 release notes: el puente JDBC-ODBC fue eliminado en JDK 8.' },
  rmi: { url: 'https://docs.oracle.com/en/java/javase/25/rmi/java-remote-method-invocation-api-guide.pdf', referencia: 'Oracle, Java Remote Method Invocation API Guide, Java SE 25 (septiembre de 2025): Java RMI permite que un objeto invoque métodos de objetos Java remotos en otra JVM.' },
  biztalk: { url: 'https://learn.microsoft.com/en-us/biztalk/core/introducing-biztalk-server', referencia: 'Microsoft Learn, Introducing BizTalk Server: el motor combina mensajería y adaptadores para comunicarse con otros sistemas y orquestaciones ejecutables que implementan lógica de procesos de negocio.' },
  biztalkAdapters: { url: 'https://learn.microsoft.com/en-us/biztalk/core/adapters', referencia: 'Microsoft Learn, Adapters: componentes para intercambiar mensajes con sistemas externos mediante distintos protocolos.' },
  biztalkLifecycle: { url: 'https://learn.microsoft.com/en-us/biztalk/install-and-config-guides/whats-new-in-biztalk-server-2020', referencia: 'Microsoft Learn, BizTalk Server 2020: última versión del producto; Microsoft anunció su disponibilidad hasta el 31 de marzo de 2027 y recomienda planificar la modernización/migración.' }
};

const records = [
  [1241, [65, 68], ['II-3', 'III-12'], ['WordPress', 'PHP', 'CMS', 'desarrollo web en servidor'], [sources.wordpress], null,
    'Se sustituye «tecnología en que está basado» —expresión demasiado amplia— por una pregunta concreta sobre el lenguaje de servidor usado principalmente por WordPress. PHP es la respuesta; no se afirma que todo componente, tema o extensión del ecosistema esté escrito exclusivamente en PHP. La documentación oficial vigente de WordPress confirma su ejecución sobre PHP y recomienda PHP 8.3 o posterior. ITIC Academy, bloque 30, identifica WordPress como CMS PHP.', 'corregida'],
  [1242, [53], ['IV-6'], ['CPD', 'centro de datos', 'ANSI/TIA-942-C', 'infraestructura', 'refrigeración', 'protección contra incendios'], [sources.tia, sources.tiaRelease], null,
    'La opción original sobre control de climatización y fuego era demasiado categórica y dependía del diseño de protección y de la normativa aplicable. Se pregunta por el alcance comprobable del estándar: ANSI/TIA-942-C especifica requisitos de infraestructura de centros de datos y salas de equipos, incluidos refrigeración y protección contra incendios. TIA publicó la revisión C en mayo de 2024. La academia trata por separado TIA-942-C, gestión térmica e incendios en el bloque 26, §§ 5.2, 5.4 y 5.6.', 'corregida'],
  [1243, [63, 67], ['II-5', 'III-10'], ['JDBC', 'ODBC', 'puente JDBC-ODBC', 'Java', 'API de bases de datos', 'histórico'], [sources.jdbcBridge, sources.jdbcRemoved], null,
    'Se conserva como pregunta histórica y se precisa el sentido del puente: en JDK anteriores a 8 permitía a una aplicación Java usar, a través de JDBC, controladores ODBC ya existentes. No debe recomendarse para desarrollos actuales: Oracle lo calificaba de transitorio/no soportado y lo eliminó en JDK 8. El bloque 30 de la academia cubre JDBC como API Java de acceso a bases de datos; el detalle del puente y su retirada se verifican con documentación de Oracle.', 'historica'],
  [1244, [67], ['II-6', 'III-10'], ['Java', 'RMI', 'invocación remota', 'objetos distribuidos'], [sources.rmi], null,
    'La clave RMI se mantiene: la guía de Oracle para Java SE 25 define RMI como mecanismo para que un objeto invoque métodos de objetos Java remotos que se ejecutan en otra JVM. La correspondencia con el programa es Java y arquitectura distribuida/cliente-servidor; el bloque 30 de ITIC Academy cubre las API Java y Jakarta EE, mientras que la definición precisa se comprueba en Oracle.', 'vigente'],
  [1245, [58, 65, 66], ['II-6', 'III-12'], ['BizTalk Server', 'integración de aplicaciones', 'adaptadores', 'mensajería', 'orquestaciones', 'Microsoft .NET'], [sources.biztalk, sources.biztalkAdapters, sources.biztalkLifecycle], null,
    'Se completa la descripción para distinguir los dos componentes centrales: mensajería/adaptadores conectan sistemas y las orquestaciones implementan procesos ejecutables. Microsoft identifica BizTalk Server 2020 como versión final y recomienda planificar la migración; por ello se evita presentar el producto como plataforma de desarrollo activa sin límite temporal. La academia cubre interconexión, servicios y .NET en el bloque 30, pero la búsqueda del material no localizó una explicación específica de BizTalk; esa definición se contrasta directamente con Microsoft Learn.', 'corregida']
];

const edits = {
  1241: { texto: '¿Qué lenguaje de programación de servidor se utiliza principalmente para desarrollar WordPress?', opciones: ['Java', 'PHP', '.NET', 'Ruby'], respuesta_correcta: 1 },
  1242: { texto: '¿Qué afirmación describe correctamente el alcance de ANSI/TIA-942-C para centros de datos?', opciones: ['Es un estándar que se limita al cableado de telecomunicaciones y excluye energía y sistemas mecánicos.', 'Es un estándar de infraestructura para centros de datos y salas de equipos que incluye, entre otros ámbitos, telecomunicaciones, energía, refrigeración y protección contra incendios.', 'Establece que todo CPD debe instalar obligatoriamente suelo técnico elevado.', 'Afirma que la humedad no afecta al funcionamiento del equipamiento informático.'], respuesta_correcta: 1 },
  1243: { texto: 'En las versiones antiguas de Java que incluían el puente JDBC-ODBC, ¿para qué servía principalmente?', opciones: ['Para que una aplicación Java, usando la API JDBC, pudiera utilizar controladores ODBC existentes.', 'Para garantizar que cualquier acceso a una base de datos tuviera éxito.', 'Para sustituir JDBC por ODBC en toda aplicación Java.', 'Para convertir operaciones JDBC en operaciones ODBC sin requerir un controlador puente.'], respuesta_correcta: 0 },
  1245: { texto: '¿Qué descripción corresponde a BizTalk Server, teniendo en cuenta que BizTalk Server 2020 es su versión final?', opciones: ['Una plataforma de integración cuyo motor intercambia mensajes con otros sistemas mediante adaptadores y ejecuta procesos de negocio definidos como orquestaciones.', 'Una biblioteca de .NET que permite la comunicación por IRC para implementar chats.', 'Un servidor web de .NET dedicado específicamente a tecnologías móviles.', 'Un componente del CLR que ejecuta directamente las aplicaciones .NET.'], respuesta_correcta: 0 }
};

apply({ numero: '185', fecha: '2026-10-24', records, edits });

// Attach precise thematic coverage from Drive and keep the batch log in sync.
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-185.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academyNotes = {
  1241: { block: '30 · Tecnologías de sistemas de información, versión 2026.1, § 8.2 (WordPress como CMS PHP) y desarrollo web en servidor.', key: 'desarrollo' },
  1242: { block: '26 · Hardware, servidores y CPD, versión 2026.1, §§ 5.2 (TIA-942-C), 5.4 (refrigeración y gestión térmica) y 5.6 (incendios y seguridad física).', key: 'cpd' },
  1243: { block: '30 · Tecnologías de sistemas de información, versión 2026.1, § 4.5 (JDBC como API Java de acceso a bases de datos); el puente ODBC se contrasta con Oracle.', key: 'desarrollo' },
  1244: { block: '30 · Tecnologías de sistemas de información, versión 2026.1, §§ 4.5 y 5 (Java/Jakarta EE y API distribuidas); definición específica comprobada con Oracle.', key: 'desarrollo' },
  1245: { block: '30 · Tecnologías de sistemas de información, versión 2026.1, interconexión entre sistemas, servicios y .NET; el PDF no ofrece una ficha específica de BizTalk.', key: 'desarrollo' }
};
const officialTopics = {
  1241: 'A1-65/A1-68; A2-II-3/III-12',
  1242: 'A1-53; A2-IV-6',
  1243: 'A1-63/A1-67; A2-II-5/III-10',
  1244: 'A1-67; A2-II-6/III-10',
  1245: 'A1-58/A1-65/A1-66; A2-II-6/III-12'
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const meta = academyNotes[q.id];
  const source = academy[meta.key];
  q.clasificacion.bloque_academia = meta.block;
  q.clasificacion.nota = `Cotejo temático con ITIC Academy: ${meta.block} Correspondencia orientativa: ${officialTopics[q.id]}.`;
  const academyComment = ` Cotejo temático con ITIC Academy: ${meta.block} Correspondencia orientativa con el programa oficial: ${officialTopics[q.id]}.`;
  q.comentarios += academyComment;
  q.revision.observaciones += academyComment;
  q.revision.fuentes.push({ url: source.url, referencia: `ITIC Academy, ${meta.block} Correspondencia temática con ${officialTopics[q.id]}.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de academia y registro de resultados añadidos al lote 185.');
