const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const ce = 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229';
const lcsp = 'https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902';
const rdDni = 'https://www.boe.es/buscar/act.php?id=BOE-A-2025-6601';
const curia = 'https://curia.europa.eu/site/jcms/d2_5100/en/history';
const dnie = 'https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1001';
const dnieFeatures = 'https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_083';
const eige = 'https://eige.europa.eu/publications-resources/thesaurus/terms/1099?language_content_entity=en';
const women = 'https://knowledge.unwomen.org/sites/default/files/Headquarters/Attachments/Sections/Library/Publications/2017/UN-Women-gender-and-economics-training-manual-en.pdf';
const academyEu = 'https://drive.google.com/file/d/1FAP2AizgAOnbPYOugoWDgThYwZJKCe-C/view?usp=drivesdk';
const academyEquality = 'https://drive.google.com/file/d/10SsfQpxf4Kimzo91t05RoBdhkdNNZRp0/view?usp=drivesdk';
const academyContracts = 'https://docs.google.com/document/d/1FDVHlKH8_Kq7Kzvuqhha3zNP3X0Swdj9/edit?usp=drivesdk';
const academyDni = 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk';
const academyConstitution = 'https://docs.google.com/document/d/1xBMfULSkmKGKsCPZLqmkEoU-eqJ9ymd4/edit?usp=drivesdk';

const sources = {
  4866: [
    { url: curia, referencia: 'Historia oficial del Tribunal de Justicia: el Tratado de París que creó la CECA entró en vigor el 23-07-1952 y creó, entre otras instituciones, el Tribunal de Justicia de la CECA; la primera sesión formal tuvo lugar en diciembre de 1952. Este órgano es el antecedente institucional del actual TJUE.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 5: antecedentes, tratados e instituciones de la Unión Europea, incluido el Tribunal de Justicia de la Unión Europea.' }
  ],
  4867: [
    { url: eige, referencia: 'Glosario del Instituto Europeo de la Igualdad de Género (EIGE): techo de cristal son impedimentos artificiales y barreras invisibles que obstaculizan el acceso de las mujeres a puestos superiores de decisión y dirección.' },
    { url: women, referencia: 'ONU Mujeres, manual de género y economía: define glass ceiling como barreras sutiles que dificultan a mujeres y minorías alcanzar niveles superiores de dirección.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 16: estructura social y políticas de igualdad de género.' },
    { url: a2, referencia: 'Convocatoria A2 GSI AGE 2025, tema I.5: políticas de igualdad y contra la violencia de género.' }
  ],
  4868: [
    { url: rdDni, referencia: 'Real Decreto 255/2025, artículo 11: regula el chip de la tarjeta DNI y los certificados electrónicos cualificados destinados a identificación/firma; es la norma vigente que reemplazó al RD 1553/2005.' },
    { url: dnie, referencia: 'Portal oficial del DNI electrónico, conceptos básicos: distingue el certificado de autenticación (identificación del titular) del certificado de firma (firma electrónica de documentos); menciona además un certificado de componente del DNI, distinto de los dos certificados personales por los que pregunta el ítem.' },
    { url: dnieFeatures, referencia: 'Portal oficial del DNI electrónico, características de la tarjeta: describe las funciones de autenticación del chip y de firma del certificado de firma.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, temas 80 y 81: certificados, identificación y firma electrónica, DNI electrónico.' },
    { url: a2, referencia: 'Convocatoria A2 GSI AGE 2025, tema I.6: identidad y firma electrónica, eIDAS y DNI electrónico.' }
  ],
  4869: [
    { url: lcsp, referencia: 'Ley 9/2017, artículo 304.1, texto consolidado BOE: salvo pacto en contrario, los gastos de entrega y transporte de los bienes de suministro al lugar convenido corren a cargo del contratista.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 11: contratos de las Administraciones Públicas y Ley de Contratos del Sector Público.' }
  ],
  4870: [
    { url: ce, referencia: 'Constitución Española consolidada, artículo 137: el Estado se organiza territorialmente en municipios, provincias y Comunidades Autónomas que se constituyan; esas entidades gozan de autonomía para gestionar sus intereses.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 3: Constitución, Comunidades Autónomas y Administración local.' },
    { url: a2, referencia: 'Convocatoria A2 GSI AGE 2025, tema I.1: Constitución Española de 1978.' }
  ]
};

const records = [
  [4866, ['5'], [], ['Tribunal de Justicia', 'TJUE', 'CECA', 'Tratado de París', 'historia de la Unión Europea'], sources[4866], null,
    'Respuesta A. El Tribunal de Justicia de la CECA, antecedente del actual Tribunal de Justicia de la Unión Europea, fue creado por el Tratado de París, constitutivo de la CECA; este entró en vigor en 1952. Se reformula el enunciado para distinguir el tribunal originario del nombre actual de la institución.', 'corregida'],
  [4867, ['16'], ['I-5'], ['igualdad de género', 'techo de cristal', 'barreras invisibles', 'segregación vertical'], sources[4867], null,
    'Respuesta B. El techo de cristal designa barreras artificiales e invisibles que dificultan el acceso de mujeres a puestos de alta dirección y decisión. No debe confundirse con las paredes de cristal (segregación horizontal), el suelo pegajoso (dificultad para salir de empleos de menor remuneración) ni el precipicio de cristal (mayor probabilidad de acceder al liderazgo en situaciones de crisis).', 'corregida'],
  [4868, ['80', '81'], ['I-6'], ['DNIe', 'certificado de autenticación', 'certificado de firma', 'identidad electrónica', 'firma electrónica'], sources[4868], null,
    'Respuesta A. En el uso ordinario del DNIe como medio de identificación y firma, los dos certificados personales cumplen las funciones de autenticación del titular y firma electrónica de documentos. No son certificados de cifrado. El chip también puede incorporar un certificado técnico de componente, que no es uno de esos dos certificados personales; por eso se precisa el alcance de la pregunta y se evita confundirlos.', 'corregida'],
  [4869, ['11'], [], ['Ley 9/2017', 'contrato de suministro', 'artículo 304', 'gastos de entrega', 'transporte', 'contratista'], sources[4869], null,
    'Respuesta B. El artículo 304.1 de la Ley 9/2017 establece que, salvo pacto en contrario, los gastos de entrega y transporte de los bienes objeto del suministro hasta el lugar convenido son de cuenta del contratista. Se corrige además la errata “Admisnistración” de una opción.', 'corregida'],
  [4870, ['3'], ['I-1'], ['Constitución Española', 'artículo 137', 'organización territorial', 'municipios', 'provincias', 'Comunidades Autónomas'], sources[4870], null,
    'Respuesta A. El artículo 137 enumera literalmente municipios, provincias y Comunidades Autónomas que se constituyan. No limita el precepto a un número fijo de comunidades ni añade las entidades locales menores a esa enumeración; estas se regulan en otras normas.', 'corregida']
];

const edits = {
  4866: { texto: '¿Qué tratado creó el Tribunal de Justicia de la Comunidad Europea del Carbón y del Acero (CECA), antecedente del actual Tribunal de Justicia de la Unión Europea?', opciones: [
    'El Tratado de París, constitutivo de la CECA.',
    'El Tratado de Niza.',
    'El Tratado de Ámsterdam.',
    'El Tratado de Lisboa.'
  ], respuesta_correcta: 0 },
  4867: { texto: '¿Qué metáfora designa las barreras artificiales e invisibles que dificultan el acceso de las mujeres a los puestos de dirección y decisión de mayor nivel?', opciones: [
    'Las paredes de cristal.',
    'El techo de cristal.',
    'El suelo pegajoso.',
    'El precipicio de cristal.'
  ], respuesta_correcta: 1 },
  4868: { texto: 'En el uso ordinario del DNI electrónico como medio de identificación y firma de una persona titular con capacidad legal para firmar, ¿qué dos tipos de certificados personales se asocian a esas funciones?', opciones: [
    'Autenticación y firma.',
    'Cifrado y firma.',
    'Únicamente firma.',
    'Cifrado, firma y autenticación.'
  ], respuesta_correcta: 0 },
  4869: { texto: 'Según el artículo 304.1 de la Ley 9/2017, de Contratos del Sector Público, salvo pacto en contrario, ¿a quién corresponden los gastos de entrega y transporte de los bienes de un contrato de suministro hasta el lugar convenido?', opciones: [
    'A la Administración.',
    'Al contratista.',
    'Al responsable del contrato.',
    'De forma compartida por la Administración y el contratista.'
  ], respuesta_correcta: 1 },
  4870: { texto: 'Conforme al artículo 137 de la Constitución Española, ¿en qué entidades se organiza territorialmente el Estado?', opciones: [
    'En municipios, provincias y Comunidades Autónomas que se constituyan.',
    'En 17 Comunidades Autónomas y las ciudades autónomas de Ceuta y Melilla.',
    'En Comunidades Autónomas, 50 provincias y municipios.',
    'En municipios, provincias, entidades locales menores y Comunidades Autónomas.'
  ], respuesta_correcta: 0 }
};

aplicar({ numero: '909', fecha: '2026-11-11', records, edits });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-909.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4866: [academyEu, 'ITIC Academy 2026, Bloque temático Unión Europea/A1 tema 5: incluye tratados, evolución e instituciones de la UE; cotejo curricular directo del Tribunal de Justicia, no fuente histórica primaria.'],
  4867: [academyEquality, 'ITIC Academy 2026, Bloque 6, tema 16 de estructura social: trata las políticas de igualdad y nombra expresamente el techo de cristal; el glosario EIGE/ONU Mujeres confirma el significado.'],
  4868: [academyDni, 'ITIC Academy 2026.1, bloque de seguridad, criptografía, identificación y firma (A1 temas 80–81/A2 I.6): incluye certificados, DNIe e identificación/firma; el portal de Policía y la normativa vigente resuelven la función exacta de cada certificado.'],
  4869: [academyContracts, 'ITIC Academy, documento de temas 11 y 39: contextualiza la contratación pública y la LCSP; el artículo 304 concreto no aparece en el texto consultado, por lo que la respuesta se sustenta directamente en el texto consolidado del BOE.'],
  4870: [academyConstitution, 'ITIC Academy 2026, Tema 003 — Constitución (III): cubre la organización territorial, las Comunidades Autónomas y la Administración local; el literal aplicable se coteja directamente con el artículo 137 de la Constitución en BOE.']
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const [url, detail] = academy[change.id];
  q.clasificacion.bloque_academia = `${detail} El material académico sirve para cotejar cobertura, no como fuente normativa.`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo curricular ITIC Academy: ${detail} Verificación factual en las fuentes primarias adjuntas.`;
  q.revision.observaciones += ` ${detail}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `ITIC Academy: ${detail} Cotejo de cobertura.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular ITIC Academy agregado al lote 909.');
