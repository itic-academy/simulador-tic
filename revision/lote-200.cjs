const apply = require('./aplicar-lote.cjs');

const sources = {
  raid: [
    { url: 'https://cloud.ibm.com/docs/bare-metal?locale=en&topic=bare-metal-bm-raid-levels', referencia: 'IBM Cloud Docs, About RAID: RAID 0 is striping without parity or fault tolerance; RAID 1 mirrors data, can improve reads and trades usable capacity for redundancy.' },
    { url: 'https://www.redbooks.ibm.com/redbooks/pdfs/sg246399.pdf', referencia: 'IBM Redbooks, SG24-6399, Storage Concepts: RAID 0 has no fault tolerance; RAID 1 is mirroring; RAID 2 uses bit-level striping and error-correcting codes.' }
  ],
  pets: [
    { url: 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-226.pdf', referencia: 'NIST SP 800-226 (2025), Guidelines for Evaluating Differential Privacy Guarantees: identifies secure hardware enclaves/TEEs and homomorphic encryption among privacy-enhancing technologies; notes their limits.' },
    { url: 'https://www.edpb.europa.eu/system/files/2025-06/spe-training-on-ai-and-data-protection-legal_en.pdf', referencia: 'European Data Protection Board, training material “Privacy-Enhancing Technologies”: describes anonymisation and differential privacy among techniques that reduce data-protection risks.' },
    { url: 'https://www.edpb.europa.eu/topics/ai-and-technology/anonymisation-pseudonymisation_en', referencia: 'EDPB, Anonymisation / pseudonymisation: explains the distinct legal and technical concepts; the adopted Guidelines 02/2026 on Anonymisation were under public consultation at the date checked.' }
  ],
  dni: [
    { url: 'https://www.boe.es/eli/es/rd/2025/04/01/255/con', referencia: 'Real Decreto 255/2025, de 1 de abril, arts. 2.3 y 3.1–3.2: DNI supports electronic identification and electronic signature of documents under the applicable legislation; recognition concerns the holder and the signature/integrity of documents signed with its electronic certificates.' },
    { url: 'https://www.dnielectronico.es/PortalDNIe/', referencia: 'Portal oficial DNI electrónico: information on the physical DNIe, its electronic certificates and their use for identification and electronic signature. The question is limited to the card/certificates and does not equate them with every function of the DNI digital app.' }
  ],
  acid: [
    { url: 'https://www.postgresql.org/docs/18/glossary.html', referencia: 'PostgreSQL 18 Glossary, ACID: Atomicity, Consistency, Isolation and Durability; the properties apply to database transactions.' },
    { url: 'https://www.postgresql.org/files/developer/transactions.pdf', referencia: 'PostgreSQL, Transaction Processing: explains the four ACID properties and the meaning of durable commit.' }
  ],
  expert: [
    { url: 'https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nbsspecialpublication728.pdf', referencia: 'NBS Special Publication 728, Expert Systems and Emergency Management (1986), §§3.2 and 5: separates knowledge base and inference/control; describes shells as packages that help construct knowledge bases and provide inference procedures; discusses LISP/PROLOG and conventional languages.' }
  ]
};

const academy = {
  hardware: { url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1, §8.1 (RAID: rendimiento y tolerancia a fallos), pp. 20–21.' },
  ai: { url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 32 «Inteligencia artificial y ciencia de datos», versión 2026.1, §6 (IA simbólica y sistemas expertos); incluye anonimización como aplicación de datos/IA, pero no desarrolla una taxonomía técnica completa de PET.' },
  signatures: { url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 36 «Seguridad, criptografía, identificación y firma», versión 2026.1, §10.1 (DNI electrónico y DNI digital/MiDNI) y temas oficiales 80–81.' },
  databases: { url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 29 «Bases de datos, SQL y modelado», versión 2026.1, §7.1 (propiedades ACID), p. 24.' }
};

const records = [
  [1316, [56], ['IV-5'], ['RAID', 'RAID 0', 'RAID 1', 'RAID 2', 'Hamming', 'paridad', 'redundancia'], sources.raid, null,
    'Se conserva como falsa la opción sobre RAID 0: este nivel distribuye bloques (striping), pero no almacena paridad ni ofrece redundancia o tolerancia a fallos. RAID 1 mantiene espejos y puede mejorar lecturas en configuraciones que las distribuyen entre copias, a costa de capacidad; el beneficio de rendimiento depende de la implementación. RAID 2 es un nivel histórico que usa striping a nivel de bit y códigos de corrección. Se afinan las opciones para evitar presentar el rendimiento de RAID 1 como garantía universal. Cotejo con ITIC Academy, bloque 26, §8.1.', 'corregida'],
  [1317, [75, 82], ['I-7'], ['PET', 'tecnologías de mejora de privacidad', 'TEE', 'cifrado homomórfico', 'anonimización', 'balanceo de carga'], sources.pets, null,
    'La respuesta “Identificación Workflow idóneo” del original está corrupta y no permite valorar el concepto. Se reemplaza por una opción inequívoca: el balanceo HTTP genérico, por sí solo, no es una PET. NIST incluye enclaves/TEE y cifrado homomórfico entre las tecnologías de privacidad; el EDPB trata la anonimización como técnica pertinente para la protección de datos. PET no es una lista cerrada y una técnica concreta solo mejora privacidad si se diseña para ese fin y se evalúa en contexto. Cotejo con ITIC Academy, bloque 32, que menciona anonimización como aplicación de IA/datos; el material no desarrolla la taxonomía PET, por lo que la clasificación técnica se contrasta con NIST y EDPB.', 'corregida'],
  [1318, [80, 81], ['I-6'], ['DNI electrónico', 'DNIe', 'certificados electrónicos', 'identificación electrónica', 'firma electrónica', 'MiDNI'], sources.dni, null,
    'El artículo 3.1 del Real Decreto 255/2025 establece que el DNI permite la identificación electrónica de su titular y la firma electrónica de documentos en los términos de la legislación específica; el apartado 3.2 trata la eficacia de los certificados. Se precisa que la pregunta habla de las funciones electrónicas del DNI y sus certificados, no de asumir que la aplicación DNI digital/MiDNI ofrezca automáticamente firma remota. Los distractores sobre limitarlo a identificación, personas jurídicas o datos penales/sanitarios no se corresponden con la norma. Cotejo con ITIC Academy, bloque 36, §10.1, que distingue DNIe y DNI digital.', 'corregida'],
  [1319, [63], ['II-5'], ['SGBD', 'ACID', 'atomicidad', 'consistencia', 'aislamiento', 'durabilidad'], sources.acid, null,
    'ACID significa Atomicity, Consistency, Isolation, Durability: atomicidad, consistencia, aislamiento y durabilidad. «Duración» es un error de traducción; puede encontrarse «persistencia» como explicación informal de durability, pero el término usual en español técnico es durabilidad. Se corrige la opción que contiene la expansión completa y se coteja con ITIC Academy, bloque 29, §7.1.', 'corregida'],
  [1320, [70], ['III-5'], ['inteligencia artificial', 'sistemas expertos', 'base de conocimiento', 'motor de inferencia', 'shell', 'LISP', 'PROLOG'], sources.expert, null,
    'La clave original era errónea: el NBS/NIST describe LISP y PROLOG como lenguajes empleados para sistemas expertos y también contempla herramientas convencionales; por tanto, esa afirmación no es la incorrecta. Se rehace el distractor como una afirmación falsable (“LISP y PROLOG no se han utilizado…”). Una shell proporciona herramientas/mecanismo de inferencia y permite añadir la base de conocimiento del dominio; el entorno de desarrollo puede incluir además lenguaje y utilidades. Se mantienen las opciones técnicas restantes, acotadas a la arquitectura clásica. Cotejo con ITIC Academy, bloque 32, §6.', 'corregida']
];

apply({ numero: '200', fecha: '2026-10-24', records, edits: {
  1316: { texto: '¿Cuál afirmación sobre los niveles RAID descritos es FALSA?', opciones: [
    'RAID 1 mantiene copias espejo de los datos en dos o más discos.',
    'RAID 1 puede favorecer las lecturas en ciertas implementaciones, aunque reduce la capacidad útil por la duplicación.',
    'RAID 2, nivel histórico, divide los datos a nivel de bit y emplea códigos de corrección como Hamming.',
    'RAID 0 distribuye datos entre dos o más discos y almacena paridad para proporcionar redundancia.'
  ], respuesta_correcta: 3 },
  1317: { texto: '¿Cuál de estas opciones no es, por sí sola, una tecnología o técnica de mejora de la privacidad (PET)?', opciones: [
    'Un entorno de ejecución de confianza (TEE) para procesar datos en un enclave protegido.',
    'La anonimización de datos personales mediante técnicas que reduzcan la posibilidad de identificación.',
    'El cifrado homomórfico, que permite ciertas operaciones sobre datos cifrados.',
    'El balanceo de carga HTTP genérico, sin una función específica de protección de la privacidad.'
  ], respuesta_correcta: 3 },
  1318: { texto: 'Conforme al artículo 3 del Real Decreto 255/2025, el Documento Nacional de Identidad:', opciones: [
    'Permite la identificación electrónica de su titular y la firma electrónica de documentos en los términos previstos por la legislación específica.',
    'Solo puede utilizarse para acreditar físicamente la identidad de su titular.',
    'Acredita la identidad de personas físicas o jurídicas como titulares del DNI.',
    'Puede almacenar libremente información penal y sanitaria del titular.'
  ], respuesta_correcta: 0 },
  1319: { opciones: [
    'Atomicidad, consistencia, integridad y durabilidad.',
    'Atomicidad, consistencia, aislamiento y durabilidad (durability).',
    'Autenticación, integridad, confidencialidad y disponibilidad.',
    'Aislamiento, consistencia, integridad y durabilidad.'
  ], respuesta_correcta: 1 },
  1320: { texto: 'En la arquitectura clásica de los sistemas expertos, ¿cuál afirmación es incorrecta?', opciones: [
    'El conocimiento del dominio puede representarse en una base separada de los procedimientos de inferencia que lo manipulan.',
    'Un entorno de desarrollo puede combinar un lenguaje con herramientas que ayudan a construir sistemas expertos.',
    'Una shell proporciona una arquitectura/mecanismo de inferencia reutilizable al que se incorpora la base de conocimiento del dominio.',
    'LISP y PROLOG no se han utilizado para implementar sistemas expertos.'
  ], respuesta_correcta: 3 }
}});

const fs = require('node:fs');
const path = require('node:path');
const bank = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-200.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const meta = {
  1316: { source: academy.hardware, block: 'Bloque 26, Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1, §8.1 (RAID: rendimiento y tolerancia a fallos), pp. 20–21.', topics: 'A1-56/A2-IV-5' },
  1317: { source: academy.ai, block: 'Bloque 32, Inteligencia artificial y ciencia de datos, versión 2026.1, §19 (ética, seguridad y regulación): menciona anonimización en el contexto de IA/datos, pero no desarrolla taxonomía técnica de PET.', topics: 'A1-75/A1-82/A2-I-7' },
  1318: { source: academy.signatures, block: 'Bloque 36, Seguridad, criptografía, identificación y firma, versión 2026.1, §10.1 (DNI electrónico y DNI digital/MiDNI).', topics: 'A1-80/A1-81/A2-I-6' },
  1319: { source: academy.databases, block: 'Bloque 29, Bases de datos, SQL y modelado de datos, versión 2026.1, §7.1 (propiedades ACID), p. 24.', topics: 'A1-63/A2-II-5' },
  1320: { source: academy.ai, block: 'Bloque 32, Inteligencia artificial y ciencia de datos, versión 2026.1, §6 (IA simbólica y sistemas expertos).', topics: 'A1-70/A2-III-5' }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const m = meta[q.id];
  q.clasificacion.bloque_academia = m.block;
  q.clasificacion.nota = `Cotejo temático con ITIC Academy: ${m.block} Correspondencia orientativa con el temario oficial: ${m.topics}.`;
  const comment = ` Cotejo temático con ITIC Academy: ${m.block} Correspondencia orientativa con el temario oficial: ${m.topics}.`;
  q.comentarios = (q.comentarios || '') + comment;
  q.revision.observaciones += comment;
  q.revision.fuentes.push({ url: m.source.url, referencia: `${m.source.referencia} Correspondencia: ${m.topics}.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(__dirname, '..', 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo temático de academia añadido al lote 200.');
