const apply = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');

const academy = {
  db: {
    url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 29, Bases de datos/SQL, versión 2026.1; §§ 7.5–7.7 sobre bloqueos, concurrencia y deadlocks.'
  },
  development: {
    url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 30, Tecnologías de sistemas de información, versión 2026.1: Java/JAXP/XML, cliente web y AJAX como actualización asíncrona sin recarga completa.'
  },
  security: {
    url: 'https://drive.google.com/file/d/1Rix8RBBUSoXJBOAt8iWyU9j5tPiqlXzk/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 36, Seguridad, criptografía, identificación y firma, versión 2026.1, temas 79–81.'
  }
};

const sources = {
  dropTable: { url: 'https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/DROP-TABLE.html', referencia: 'Oracle Database SQL Language Reference 26, DROP TABLE: elimina el objeto tabla y sus datos; CREATE, ALTER y DROP son sentencias DDL.' },
  ddl: { url: 'https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/Types-of-SQL-Statements.html', referencia: 'Oracle Database SQL Language Reference 26, Types of SQL Statements: DDL crea, altera y elimina objetos de esquema.' },
  jaxp: { url: 'https://docs.oracle.com/en/java/javase/25/docs/api/java.xml/module-summary.html', referencia: 'Oracle Java SE 25 API, módulo java.xml: JAXP incluye APIs de parsing DOM, SAX y StAX, además de validación, transformación y consulta.' },
  signatures: { url: 'https://csrc.nist.gov/glossary/term/digital_signature', referencia: 'NIST CSRC, Digital Signature: la firma se calcula sobre datos/mensajes; el uso correcto aporta integridad y autenticación de origen. La operación asimétrica usa clave privada para firmar y la pública correspondiente para verificar.' },
  deadlocks: { url: 'https://www.postgresql.org/docs/17/explicit-locking.html#LOCKING-DEADLOCKS', referencia: 'PostgreSQL Documentation 17, Explicit Locking § 13.3.4: hay deadlock cuando transacciones esperan circularmente locks retenidos por otras; el SGBD detecta y aborta una transacción.' },
  sqlServerDeadlock: { url: 'https://learn.microsoft.com/en-us/sql/relational-databases/sql-server-deadlocks-guide?view=sql-server-ver17', referencia: 'Microsoft Learn, SQL Server Deadlocks Guide: el ciclo de dependencias define el deadlock; el motor elige una víctima, revierte su transacción y permite continuar a las restantes.' },
  ajax: { url: 'https://developer.mozilla.org/en-US/docs/Glossary/AJAX', referencia: 'MDN Web Docs, Ajax: técnica de peticiones HTTP asíncronas y actualización parcial sin recarga completa; puede usarse para aplicaciones de una sola página/RIA y hoy suele intercambiar JSON en vez de XML.' }
};

const records = [
  [1246, [64], ['II-5'], ['SQL', 'DDL', 'DROP TABLE', 'eliminación de objetos'], [sources.dropTable, sources.ddl], null,
    'Se distingue eliminar una tabla del esquema de borrar solo sus filas. `DROP TABLE` elimina el objeto tabla y sus datos; `DELETE FROM` elimina filas y `TRUNCATE TABLE` vacía la tabla, pero no elimina su definición. La respuesta es la sentencia DDL `DROP TABLE` (con el nombre del objeto en una ejecución real).', 'corregida'],
  [1247, [65, 67, 77], ['II-9', 'III-10'], ['Java', 'JAXP', 'XML', 'DOM', 'SAX', 'StAX'], [sources.jaxp], null,
    'La afirmación original se mantiene: JAXP proporciona APIs para procesar XML mediante DOM y SAX. La documentación actual de Java SE incluye además StAX y APIs de validación, transformación y XPath; no se afirma que DOM y SAX sean las únicas alternativas. Las fábricas JAXP permiten elegir o configurar implementaciones, por lo que tampoco es correcto afirmar que el JDK carezca de implementación propia o exija una única externa.', 'vigente'],
  [1248, [80, 81], ['I-6', 'IV-12'], ['firma digital', 'integridad', 'autenticación de origen', 'clave privada', 'clave pública', 'función hash'], [sources.signatures], null,
    'La pregunta negativa original mezclaba una afirmación criptográfica con otra sobre quién puede ser el titular legítimo, que no se deduce de la validez matemática de la firma (por ejemplo, una clave privada puede estar comprometida). Se concreta la falsedad: la verificación de una firma no es independiente del contenido firmado; cambiar el documento debe hacer fallar la comprobación, con un esquema y parámetros seguros. Se explicitan por separado las propiedades de integridad y autenticación, y el uso de claves privada/pública.', 'corregida'],
  [1249, [64], ['III-4'], ['base de datos', 'transacciones', 'bloqueos', 'espera circular', 'deadlock', 'concurrencia'], [sources.deadlocks, sources.sqlServerDeadlock], null,
    'La secuencia describe un ciclo de espera: A conserva el bloqueo de 1 y espera 2, mientras B conserva el de 2 y espera 1. Eso es un deadlock, no necesariamente un defecto del esquema o de una transacción aislada. Los SGBD suelen detectarlo y abortar/revertir una víctima para liberar recursos; la pregunta se limita a identificar la condición, sin sugerir que ambas transacciones continúen intactas.', 'corregida'],
  [1250, [65, 77], ['II-9', 'III-12'], ['AJAX', 'JavaScript', 'peticiones asíncronas', 'actualización parcial', 'RIA', 'JSON'], [sources.ajax], null,
    'El enunciado negativo original podía admitir más de una lectura: las peticiones parciales suelen reducir los bytes transferidos, pero no lo garantizan en todos los casos, y Ajax ya no implica que la respuesta sea XML. Se formula en positivo: Ajax permite solicitar datos de forma asíncrona y actualizar partes de la interfaz sin recargar toda la página; sirve para construir aplicaciones de una sola página/RIA y puede intercambiar JSON. La expansión histórica del acrónimo no restringe el formato actual.', 'corregida']
];

const edits = {
  1246: { texto: '¿Qué sentencia SQL elimina la definición de una tabla del esquema, además de dejar inaccesibles sus datos?', opciones: ['DELETE FROM nombre_tabla;', 'TRUNCATE TABLE nombre_tabla;', 'DROP TABLE nombre_tabla;', 'REMOVE TABLE nombre_tabla;'], respuesta_correcta: 2 },
  1248: { texto: 'En un esquema de firma digital que emplea una clave privada para firmar y la clave pública correspondiente para verificar, ¿cuál de estas afirmaciones es falsa?', opciones: ['La verificación de una firma válida es independiente del contenido del documento, por lo que puede reutilizarse sin cambios para validar otro documento distinto.', 'La firma se calcula sobre los datos que se desean firmar.', 'La clave pública correspondiente permite comprobar la firma.', 'Una modificación del contenido firmado debe detectarse al verificar una firma correctamente implementada.'], respuesta_correcta: 0 },
  1249: { texto: 'Dos transacciones mantienen bloqueos incompatibles: A conserva el bloqueo del registro 1 y espera el 2; B conserva el 2 y espera el 1. ¿Qué condición describe esta espera circular?', opciones: ['Una anomalía de serialización que obliga a modificar el esquema.', 'Una condición de carrera que se resuelve por el orden de llegada.', 'Un interbloqueo o deadlock entre las transacciones.', 'Una espera normal que siempre permite que ambas transacciones finalicen sin intervención del gestor.'], respuesta_correcta: 2 },
  1250: { texto: '¿Qué afirmación describe correctamente la técnica Ajax en una aplicación web?', opciones: ['Permite solicitar datos de forma asíncrona y actualizar parte de la página sin recargar el documento completo.', 'Impide desarrollar aplicaciones de una sola página o RIA.', 'Obliga a que todas las respuestas del servidor estén en formato XML.', 'Exige recargar por completo la página tras cada petición.'], respuesta_correcta: 0 }
};

apply({ numero: '186', fecha: '2026-10-24', records, edits });

// Add precise academy coverage to each reviewed entry and preserve it in the audit log.
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-186.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academyNotes = {
  1246: { block: '29 · Bases de datos/SQL, versión 2026.1, SQL y sentencias DDL/DML.', key: 'db', topics: 'A1-64/A2-II-5' },
  1247: { block: '30 · Tecnologías de sistemas de información, versión 2026.1, Java/JAXP y XML; § 2 y materia de XML en desarrollo web.', key: 'development', topics: 'A1-65/A1-67/A1-77; A2-II-9/III-10' },
  1248: { block: '36 · Seguridad, criptografía, identificación y firma, versión 2026.1, temas 79–81.', key: 'security', topics: 'A1-80/A1-81; A2-I-6/IV-12' },
  1249: { block: '29 · Bases de datos/SQL, versión 2026.1, §§ 7.5–7.7 (bloqueos, concurrencia y deadlocks).', key: 'db', topics: 'A1-64; A2-III-4' },
  1250: { block: '30 · Tecnologías de sistemas de información, versión 2026.1, §§ 2.2–2.5 (DOM, JavaScript y cliente web); apartado de preguntas históricas sobre Ajax.', key: 'development', topics: 'A1-65/A1-77; A2-II-9/III-12' }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const meta = academyNotes[q.id];
  const source = academy[meta.key];
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
console.log('Cotejo de academia y registro de resultados añadidos al lote 186.');
