const aplicar = require('./aplicar-lote.cjs');
const path = require('node:path');
const fs = require('node:fs');
const ref = (url, referencia) => ({url, referencia});
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy32 = 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk';
const academy33 = 'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk';
const academy36 = 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk';
const records = [
  [5201, ['70'], ['III-5'], ['inteligencia artificial', 'algoritmo genético', 'computación evolutiva', 'metaheurística'], [
    ref('https://doi.org/10.7551/mitpress/1090.001.0001', 'MIT Press, John H. Holland, Adaptation in Natural and Artificial Systems: obra fundacional que presenta las bases teóricas de los algoritmos genéticos como técnicas de adaptación/optimización inspiradas en selección y evolución.'),
    ref('https://www.usbr.gov/research/publications/download_product.cfm?id=402', 'U.S. Bureau of Reclamation, Real Coded Genetic Algorithm, apéndice técnico: caracteriza los algoritmos genéticos como los primeros algoritmos evolutivos y como enfoque de optimización basado en genética y selección natural.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 70: inteligencia artificial, aprendizaje automático, métodos y áreas. La clasificación concreta como técnica evolutiva se verifica con la bibliografía técnica, no se atribuye literalmente al BOE.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.5: fundamentos de IA y tipos de algoritmos.'),
    ref(academy32, 'ITIC Academy, bloque 32 «Inteligencia Artificial y Ciencia de Datos», versión 2026.1, apartado de algoritmos de aproximación: menciona los algoritmos genéticos entre las metaheurísticas de IA/optimización.')
  ], null, 'La taxonomía original mezcla «representación del conocimiento» con categorías que no clasifican de manera uniforme los algoritmos genéticos. Se reformula como una clasificación de técnicas de IA: los algoritmos genéticos son metaheurísticas de computación evolutiva, inspiradas en selección natural, que exploran poblaciones de soluciones; no son un modelo simbólico de representación de conocimiento ni un modelo paramétrico estadístico.', 'corregida'],
  [5202, ['73'], [], ['e-learning', 'LMS', 'plataformas de aprendizaje', 'eSchool', 'terminología ambigua'], [
    ref('https://atutor.github.io/atutor/index.html', 'ATutor, documentación oficial del proyecto: ATutor se presenta explícitamente como un sistema de gestión del aprendizaje web (LMS).'),
    ref('https://eschool.mn/?lang=en', 'eSchool, sitio del proveedor: identifica un producto llamado eSchool LMS como sistema de aprendizaje en línea; demuestra que el nombre genérico «eSchool» puede designar una plataforma de e-learning.'),
    ref(academy33, 'ITIC Academy, bloque 33 «E-learning y sistemas de información geográfica», versión 2026.1: diferencia LMS/LCMS y cita plataformas actuales e históricas; no identifica un producto concreto como «eSchool».')
  ], null, 'PENDIENTE DE AMBIGÜEDAD. No se valida la clave histórica «eSchool»: el nombre no identifica proveedor, producto ni versión y hay productos comerciales llamados eSchool que se describen expresamente como LMS. ATutor es un LMS; WebCT fue una plataforma de aprendizaje histórica; Blackboard es una plataforma/LMS. El bloque de Academy revisado expone plataformas actuales e históricas, pero no resuelve a qué «eSchool» alude el ítem. Hace falta identificar el producto o reemplazar el distractor por una herramienta inequívocamente ajena a e-learning; se conserva la pregunta original sin adjudicarle respuesta verificada.', 'pendiente_ambiguedad'],
  [5203, ['80', '81'], ['IV-12'], ['PKCS', 'PKCS #3', 'Diffie-Hellman', 'acuerdo de claves', 'historia de estándares criptográficos'], [
    ref('https://www.teletrust.de/fileadmin/files/oid/oid_pkcs-3v1-4.pdf', 'RSA Laboratories, PKCS #3: Diffie-Hellman Key-Agreement Standard, versión 1.4 (1993): el alcance del documento es especificar una forma de realizar el acuerdo de claves Diffie-Hellman.'),
    ref('https://www.rfc-editor.org/rfc/rfc2786.html', 'IETF RFC 2786, referencias: nombra PKCS #3 como «Diffie-Hellman Key-Agreement Standard», identificando su materia.'),
    ref('https://www.rfc-editor.org/rfc/rfc2631.html', 'IETF RFC 2631: especifica el método de acuerdo Diffie-Hellman y describe el secreto compartido que se transforma en material de claves.'),
    ref(a1, 'Convocatoria A1 GSI 2025, temas 80–81: certificados, claves públicas/privadas e infraestructura de clave pública.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.12: técnicas criptográficas y protocolos seguros.'),
    ref(academy36, 'ITIC Academy, bloque 36, versión 2026: familias de algoritmos criptográficos, certificados y gestión de claves; PKCS #3 no se localiza por nombre y el detalle se comprueba en el estándar original.')
  ], null, 'Se precisa que «PKCS #3» es el número de un estándar de RSA Laboratories, no el algoritmo RSA. Su título y alcance son Diffie-Hellman Key-Agreement Standard: describe el acuerdo de una clave compartida. La pregunta queda expresamente histórica porque identifica una especificación de 1993; no se presenta como recomendación criptográfica actual ni se confunde con PKCS #1 (RSA), #7 (Cryptographic Message Syntax) o #8 (Private-Key Information Syntax).', 'historica'],
  [5204, ['80', '81'], ['IV-12'], ['DES', 'cifrado simétrico', 'cifrado de clave pública', 'Merkle-Hellman', 'cifrado de mochila', 'algoritmo histórico'], [
    ref('https://csrc.nist.gov/projects/block-cipher-techniques', 'NIST CSRC, Block Cipher Techniques: identifica DES como Data Encryption Standard y registra que la revisión final FIPS 46-3 fue retirada en mayo de 2005.'),
    ref('https://csrc.nist.gov/news/2005/withdrawal-of-fips-46-3-fips-74-and-fips-81', 'NIST, aviso oficial de retirada de FIPS 46-3: DES dejó de proporcionar seguridad suficiente y se retiró el 19 de mayo de 2005.'),
    ref('https://doi.org/10.1109/TIT.1978.1055927', 'Merkle y Hellman, «Hiding Information and Signatures in Trapdoor Knapsacks», IEEE Transactions on Information Theory 24(5), 1978: artículo original del sistema de mochila trampa para cifrado y firmas de clave pública.'),
    ref(a1, 'Convocatoria A1 GSI 2025, temas 80–81: certificados, claves privadas y públicas, PKI.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.12: criptografía y protocolos seguros.'),
    ref(academy36, 'ITIC Academy, bloque 36, versión 2026: familias de algoritmos criptográficos y claves; los hechos de clasificación se verifican con NIST y la fuente técnica primaria.')
  ], null, 'Se convierte en comparación no ambigua entre criptosistemas: Merkle–Hellman fue un esquema de clave pública basado en mochila trampa (hoy inseguro) y DES es un cifrador simétrico de bloque. DES sigue siendo clasificable como simétrico, aunque NIST retiró FIPS 46-3 en 2005 por seguridad insuficiente; no debe recomendarse para proteger información nueva. Se sustituyen los distractores imprecisos «clave dispersa» y «clave única».', 'corregida'],
  [5205, ['80', '81'], ['IV-12'], ['OpenPGP', 'PGP', 'X.509', 'certificado digital', 'PKI', 'autoridad de registro'], [
    ref('https://www.rfc-editor.org/rfc/rfc9580.html', 'IETF RFC 9580, OpenPGP (2024): define formatos OpenPGP, firmas de certificación y paquetes de confianza; deja la decisión final sobre validez al receptor de la firma, sin requerir una jerarquía universal de CA X.509.'),
    ref('https://www.rfc-editor.org/rfc/rfc5280.html', 'IETF RFC 5280, sección 4.1: un certificado X.509 incluye nombres del sujeto y emisor, período de validez, número de serie, información de clave pública del sujeto y otros campos; no contiene solamente la clave pública.'),
    ref('https://www.rfc-editor.org/rfc/rfc3647.html', 'IETF RFC 3647, secciones 1.3 y 4.1.3: una RA puede realizar identificación/autenticación de solicitantes y otras funciones por delegación de la CA; puede ser externa a esta.'),
    ref('https://www.rfc-editor.org/rfc/rfc4210.html', 'IETF RFC 4210, sección 3.1.1.3: cuando no se utiliza una RA separada, se asume que la CA puede prestar sus funciones; la existencia de una organización RA distinta no es un requisito universal.'),
    ref(a1, 'Convocatoria A1 GSI 2025, temas 80–81: certificados digitales, claves e infraestructura de clave pública.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.12: técnicas criptográficas, firma digital y protocolos seguros.'),
    ref(academy36, 'ITIC Academy, bloque 36, versión 2026: criptografía, certificados y firma digital; la diferencia OpenPGP/X.509 y los campos del certificado se contrasta con IETF RFC.')
  ], null, 'Se reemplaza la combinación «ninguna» por una pregunta de afirmación verdadera. La opción correcta describe el contenido de un certificado X.509: identifica al sujeto y al emisor, incluye el SubjectPublicKeyInfo y otros campos. Se evita afirmar que OpenPGP exige una CA jerárquica; su especificación contempla certificaciones y confianza según las decisiones del receptor. También se matiza que una RA puede ser separada o que sus tareas se integren/deleguen; el prestigio de la CA no es una regla técnica que elimine esas funciones.', 'corregida']
];
const edits = {
  5201: {texto: 'En inteligencia artificial, ¿a qué familia pertenecen los algoritmos genéticos?', opciones: ['A la computación evolutiva: son metaheurísticas de búsqueda y optimización inspiradas en la selección natural.', 'A la representación simbólica mediante lógica de predicados.', 'A los modelos paramétricos estadísticos que estiman un número fijo de parámetros.', 'Al razonamiento multinivel basado exclusivamente en reglas jerárquicas.'], respuesta_correcta: 0, comentarios: 'La taxonomía original mezcla «representación del conocimiento» con categorías que no clasifican de manera uniforme los algoritmos genéticos. Se reformula como una clasificación de técnicas de IA: los algoritmos genéticos son metaheurísticas de computación evolutiva, inspiradas en selección natural, que exploran poblaciones de soluciones; no son un modelo simbólico de representación de conocimiento ni un modelo paramétrico estadístico.'},
  5203: {texto: 'Históricamente, ¿qué especifica PKCS #3 de RSA Laboratories?', opciones: ['El estándar de cifrado RSA (PKCS #1).', 'La sintaxis de información de clave privada (PKCS #8).', 'Un estándar para el acuerdo de claves Diffie–Hellman.', 'La sintaxis de mensaje criptográfico CMS/PKCS #7.'], respuesta_correcta: 2, comentarios: 'Se precisa que «PKCS #3» es el número de un estándar de RSA Laboratories, no el algoritmo RSA. Su título y alcance son Diffie-Hellman Key-Agreement Standard: describe el acuerdo de una clave compartida. La pregunta queda expresamente histórica porque identifica una especificación de 1993; no se presenta como recomendación criptográfica actual ni se confunde con PKCS #1 (RSA), #7 (Cryptographic Message Syntax) o #8 (Private-Key Information Syntax).'},
  5204: {texto: '¿Cuál afirmación compara correctamente estos algoritmos criptográficos?', opciones: ['Merkle–Hellman es un cifrador simétrico de clave compartida.', 'Merkle–Hellman fue un criptosistema de clave pública basado en mochila trampa, hoy inseguro.', 'DES es un algoritmo de cifrado de clave pública.', 'DES es un cifrador simétrico de bloque; aunque históricamente importante, NIST retiró su estándar por seguridad insuficiente.'], respuesta_correcta: 3, comentarios: 'Se convierte en comparación no ambigua entre criptosistemas: Merkle–Hellman fue un esquema de clave pública basado en mochila trampa (hoy inseguro) y DES es un cifrador simétrico de bloque. DES sigue siendo clasificable como simétrico, aunque NIST retiró FIPS 46-3 en 2005 por seguridad insuficiente; no debe recomendarse para proteger información nueva. Se sustituyen los distractores imprecisos «clave dispersa» y «clave única».'},
  5205: {texto: '¿Cuál de estas afirmaciones sobre certificados X.509 y autoridades de registro en una PKI es correcta?', opciones: ['Un certificado X.509 contiene únicamente la clave pública y omite la identidad del sujeto.', 'La RA puede realizar comprobaciones de identidad por delegación de una CA; el estándar no exige que sea siempre una entidad separada.', 'La RA es quien firma y emite los certificados, mientras que la CA solo almacena claves.', 'Una CA de reconocido prestigio hace innecesaria por definición cualquier función de registro o validación de solicitantes.'], respuesta_correcta: 1, comentarios: 'Se reemplaza la combinación «ninguna» por una pregunta de afirmación verdadera. La opción correcta describe las funciones de una Registration Authority (RA): puede realizar comprobaciones de identidad por delegación de una Certification Authority (CA), y su función no tiene que prestarse siempre mediante una entidad separada. Un certificado X.509 contiene el sujeto y el SubjectPublicKeyInfo, además de otros campos; el estándar OpenPGP tampoco impone una jerarquía universal de CA X.509.'}
};
if (!fs.existsSync(path.join(__dirname, 'cambios-lote-976.json'))) aplicar({numero: '976', fecha: '2026-11-12', records, edits});
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-976.json');
if (fs.existsSync(logPath)) {
  const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
  const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
  const academy = {
    5201: ['ITIC Academy, bloque 32 «Inteligencia Artificial y Ciencia de Datos», versión 2026.1, apartado 4 sobre algoritmos de aproximación: identifica algoritmos genéticos como metaheurísticas de optimización.', 'Cobertura directa A1-70 y A2-III.5 (fundamentos de IA); Academy apoya la familia/metaheurística, mientras que la taxonomía de computación evolutiva se contrasta en fuentes técnicas.'],
    5202: ['ITIC Academy, bloque 33 «E-learning y sistemas de información geográfica», versión 2026.1, §§ 1.1–1.9: diferencia LMS/LCMS y recoge plataformas actuales e históricas, entre ellas ATutor; no identifica el producto «eSchool» del reactivo.', 'Cotejo A1-73. No se asigna etiqueta A2: el encaje A2-III.6 sobre formación de usuarios no convierte un nombre comercial ambiguo en una respuesta verificable.'],
    5203: ['ITIC Academy, bloque 36 «Seguridad, Criptografía, Identificación y Firma», versión 2026: temas A1-79–81, criptografía, PKI y acuerdo Diffie–Hellman; no enumera PKCS #3 por número.', 'Cotejo A1-80/81 y A2-IV.12; el título y alcance exactos del estándar se comprueban en el documento original RSA PKCS #3.'],
    5204: ['ITIC Academy, bloque 36 «Seguridad, Criptografía, Identificación y Firma», versión 2026: §2 sobre algoritmos simétricos y sección de criptografía asimétrica/acuerdos de clave; no desarrolla Merkle–Hellman por nombre.', 'Cotejo A1-79/80/81 y A2-IV.12; NIST fundamenta la condición histórica retirada de DES y la fuente técnica fundamenta Merkle–Hellman.'],
    5205: ['ITIC Academy, bloque 36 «Seguridad, Criptografía, Identificación y Firma», versión 2026: certificados digitales, PKI, claves y firmas.', 'Cotejo A1-80/81 y A2-IV.12; RFC 9580, 5280, 3647 y 4210 aportan los detalles de OpenPGP, campos X.509 y funciones CA/RA.']
  };
  const motive = 'Cotejo curricular de los materiales ITIC Academy accesibles en Drive con las etiquetas oficiales A1/A2; el alcance exacto se contrasta con las convocatorias y fuentes primarias.';
  const byId = new Map(log.cambios.map(c => [c.id, c]));
  let replaced = 0;
  for (const [key, [block, note]] of Object.entries(academy)) {
    const id = Number(key), q = bank.preguntas.find(x => x.id === id), entry = byId.get(id);
    if (!q || !entry) throw Error(`Falta pregunta o registro ${id}`);
    const before = {bloque_academia: q.clasificacion.bloque_academia, nota: q.clasificacion.nota};
    q.clasificacion.bloque_academia = block;
    q.clasificacion.nota = note;
    const corrections = entry.correcciones_posteriores || [];
    if (!corrections.some(x => x.motivo === motive)) corrections.push({fecha: '2026-11-12', motivo: motive, clasificacion_anterior: before, clasificacion_actualizada: {bloque_academia: block, nota: note}});
    entry.correcciones_posteriores = corrections;
    entry.actualizada = structuredClone(q);
  }
  const q5204 = bank.preguntas.find(q => q.id === 5204), entry5204 = byId.get(5204);
  const oldMerkle = 'https://www-ee.stanford.edu/~hellman/publications/32.pdf';
  const merkleSource = {url: 'https://doi.org/10.1109/TIT.1978.1055927', referencia: 'Merkle y Hellman, «Hiding Information and Signatures in Trapdoor Knapsacks», IEEE Transactions on Information Theory 24(5), 1978: artículo original del sistema de mochila trampa para cifrado y firmas de clave pública.'};
  q5204.revision.fuentes = q5204.revision.fuentes.map(f => f.url === oldMerkle ? merkleSource : f);
  entry5204.actualizada = structuredClone(q5204);
  const byIdUpdated = new Map(log.cambios.map(c => [c.id, c]));
  const raw = fs.readFileSync(bankPath, 'utf8');
  const output = raw.replace(/^    \{[\s\S]*?^    \}/gm, block => {
    const old = JSON.parse(block), change = byIdUpdated.get(old.id);
    if (!change) return block;
    replaced++;
    return JSON.stringify(change.actualizada, null, 2).split('\n').map(line => `    ${line}`).join('\n');
  });
  if (replaced !== 5) throw Error(`Se esperaban 5 actualizaciones de academia; hubo ${replaced}`);
  fs.writeFileSync(bankPath, output);
  fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
}
