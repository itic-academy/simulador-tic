const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');
const ref = (url, referencia) => ({ url, referencia });

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const gpl = 'https://www.gnu.org/licenses/gpl-3.0.html';
const ntiRegistry = 'https://www.boe.es/eli/es/res/2021/07/22/(2)/con';
const reuseGuide = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Af73fde29-734e-43bf-b6c6-bf51eaa2e42a/Guia_NTI_PDF_Reutilizacion_recursos_informacion_2ed.pdf';
const magerit = 'https://pilar.ccn-cert.cni.es/docman/documentos/1-magerit-v3-libro-i-metodo/file';
const mageritPortal = 'https://pilar.ccn-cert.cni.es/index.php/metodologia/metodologia-pilar';
const iso27002 = 'https://www.iso.org/standard/75652.html';
const iso27000 = 'https://www.iso.org/standard/27000';
const nistIntegrity = 'https://csrc.nist.gov/glossary/term/integrity';
const academyFree = 'https://drive.google.com/file/d/18qm2iCLcxLReK_TkqQWIm26S38HXEDYr/view?usp=drivesdk';
const academyInterop = 'https://drive.google.com/file/d/1yCTWUEye96mUcx_SwiEJshldD-sV2hXS/view?usp=drivesdk';
const academyReuse = 'https://drive.google.com/file/d/17B9a1yxMFgHCHEyVVBi0PG-cdCYABVvd/view?usp=drivesdk';
const academySecurity = 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';

const records = [
  [5326, ['69'], ['II-14'], ['software libre', 'GNU GPL', 'copyleft', 'obra derivada', 'licencias'], [
    ref(gpl, 'GNU GPLv3, sección 5(c): al distribuir una obra modificada que forme parte de la obra cubierta, el conjunto debe licenciarse bajo la GPL; las secciones 4–6 regulan la distribución de copias y su código fuente. No obliga a publicar modificaciones que solo se usan en privado.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 69: software de código abierto y software libre.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.14: software libre/propietario, licencias y protección jurídica de programas.'),
    ref(academyFree, 'ITIC Academy, tema 069 «Software libre», apartado sobre GPLv3, modificaciones y obras derivadas.'),
  ], null, 'Se mantiene GPL como respuesta, pero se concreta el supuesto jurídico: la obligación de redistribuir bajo GPL concierne a la distribución de una obra derivada cubierta; una modificación de uso privado no activa por sí sola la obligación de distribuir el código. «Proteger con una licencia» era impreciso.', 'corregida'],
  [5327, ['46'], ['I-9'], ['ENI', 'NTI', 'SICRES', 'intercambio de asientos registrales', 'Resolución 2021'], [
    ref(ntiRegistry, 'Resolución de 22 de julio de 2021, BOE-A-2021-13749: aprueba la NTI vigente del modelo de datos para el intercambio de asientos registrales; entró en vigor el 11/08/2021 y sustituyó a la resolución de 19/07/2011.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 46: Normas Técnicas de Interoperabilidad y normas para el intercambio de datos entre Administraciones.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema I.9: ENI y Normas Técnicas de Interoperabilidad.'),
    ref(academyInterop, 'ITIC Academy, bloque «Interoperabilidad de sistemas», versión 2026.2, A1.46 y A2.O9–O10; actualización de marco ENI y NTI.'),
  ], null, 'La resolución vigente se publicó en 2021. La resolución de 2011 fue sustituida y quedó derogada; se reescribe el enunciado para que «actual» remita expresamente a la NTI vigente, no a la fecha de la norma histórica inicial.', 'corregida'],
  [5328, ['31'], ['I-9'], ['reutilización de información pública', 'NTI', 'preparación y representación', 'conjuntos de datos', 'formatos'], [
    ref(reuseGuide, 'Guía oficial de aplicación de la NTI de reutilización, 2.ª ed., apartado 6, §39: enumera exactamente identificar los recursos de información, describir los conjuntos de datos y representar la información en el formato adecuado.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 31: reutilización de la información del sector público y datos abiertos.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema I.9: datos abiertos y normativa de reutilización de la información del sector público.'),
    ref(academyReuse, 'ITIC Academy, bloque 11 «RISP, Datos Abiertos y Transparencia», actualización 2026; trata la NTI y el ciclo de preparación/publicación de datos.'),
  ], null, 'La respuesta B coincide con los tres pasos de la guía en su orden literal: identificar los recursos de información, describir los conjuntos de datos y representar la información en el formato adecuado. Se distingue «describir los conjuntos» de identificar URI o metadatos concretos, que corresponden a subapartados posteriores.', 'vigente'],
  [5329, ['47'], ['II-13'], ['MAGERIT 3.0', 'activos esenciales', 'información', 'servicios', 'análisis de riesgos'], [
    ref(magerit, 'MAGERIT v3, Libro I, apartado «Identificación de activos»: afirma que lo esencial es siempre la información que se maneja y los servicios que se prestan. El documento es la fuente primaria del método y evita atribuir la frase a una rúbrica específica del catálogo.'),
    ref(mageritPortal, 'CCN-CERT/PILAR, portal oficial de metodología: identifica MAGERIT como metodología de análisis y gestión de riesgos y enlaza sus libros I–III, incluido el Catálogo de Elementos.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 47: análisis y gestión de riesgos y herramientas.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.13: seguridad de sistemas, herramientas de ciberseguridad y gestión de riesgos.'),
    ref(academySecurity, 'ITIC Academy, bloque 48 «Seguridad de redes y aplicación», análisis y gestión de riesgos, activos y MAGERIT.'),
  ], null, 'La respuesta D es correcta: información y servicios. El Libro I de MAGERIT v3 expresa esa idea al explicar la identificación de activos esenciales. Se elimina la referencia original al «Catálogo de Elementos» porque la formulación citada se comprueba en el Libro I y no se debe adjudicar a una sección distinta.', 'corregida'],
  [5330, ['47'], ['II-13'], ['integridad', 'confidencialidad', 'disponibilidad', 'seguridad de la información', 'ISO/IEC 27002'], [
    ref(iso27002, 'ISO, ficha oficial de ISO/IEC 27002:2022, edición internacional publicada y vigente; la norma incluye integridad entre las propiedades de seguridad de la información.'),
    ref(iso27000, 'ISO, ficha oficial de ISO/IEC 27000:2026, edición publicada en julio de 2026. La sexta edición cambió el alcance del documento hacia conceptos y relaciones; no debe citarse el antiguo glosario de 2018 como edición vigente.'),
    ref(nistIntegrity, 'NIST CSRC, glosario de integridad: define el concepto mediante protección frente a modificación o destrucción impropia, incluyendo exactitud/completitud y autenticidad.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 47: seguridad de sistemas, análisis y gestión de riesgos.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.13: seguridad física y lógica de sistemas de información.'),
    ref(academySecurity, 'ITIC Academy, bloque 48 «Seguridad de redes y aplicación», propiedades de seguridad, integridad y gestión de riesgos.'),
  ], null, 'La respuesta D sigue siendo la correcta: integridad se refiere a preservar la exactitud y completitud de la información. Se actualiza el enunciado y las alternativas para diferenciarla de confidencialidad, disponibilidad y autenticidad. La frase original reproduce una formulación histórica asociada a ISO/IEC 27002:2005; la versión vigente es ISO/IEC 27002:2022 y la norma ISO/IEC 27000 pasó a edición 2026, por lo que se evita presentar aquel texto antiguo como cita literal actual.', 'corregida']
];

const edits = {
  5326: { texto: 'Al distribuir una versión modificada de un programa cubierto por la GNU GPL, cuando la modificación forma parte de la obra derivada cubierta, ¿bajo qué licencia debe distribuirse el conjunto?', comentarios: 'La respuesta C (GNU GPL) es correcta para la distribución de una obra derivada cubierta, conforme a la sección 5(c) de GPLv3. La licencia no obliga a distribuir una modificación que solo se utiliza en privado; se concreta el supuesto que el enunciado original dejaba implícito.' },
  5327: { texto: '¿En qué año se publicó la resolución que aprueba la Norma Técnica de Interoperabilidad vigente del modelo de datos para el intercambio de asientos entre entidades registrales?', comentarios: 'La respuesta D (2021) es correcta. La resolución de 22 de julio de 2021 (BOE-A-2021-13749) aprobó la NTI vigente y sustituyó a la resolución de 19 de julio de 2011. Se ha precisado «vigente» para distinguir la norma actual de su antecedente histórico.' },
  5328: { comentarios: 'La respuesta B es correcta según el §39 de la Guía oficial: identificar los recursos de información, describir los conjuntos de datos y representar la información en formato adecuado. No se deben sustituir esos tres pasos por técnicas concretas posteriores como el diseño de URI o la selección de metadatos.' },
  5329: { texto: 'Según MAGERIT versión 3.0, al identificar los activos esenciales para cumplir los objetivos de una organización, ¿qué dos tipos de activos se señalan como fundamentales?', comentarios: 'La respuesta D es correcta: la información que se maneja y los servicios que se prestan. Esa afirmación aparece en el Libro I de MAGERIT v3, apartado «Identificación de activos». Se retira la mención al Catálogo de Elementos porque no es la ubicación de la frase citada.' },
  5330: { texto: 'En los objetivos de seguridad de la información, ¿qué propiedad describe principalmente la integridad?', opciones: [
    'Que solo las personas autorizadas puedan acceder o conocer la información.',
    'Que la información y los servicios estén disponibles cuando se necesitan.',
    'Que pueda acreditarse la identidad de una entidad o el origen de un mensaje.',
    'Que se preserve la exactitud y completitud de la información.'
  ], comentarios: 'La respuesta D es correcta. Integridad significa preservar exactitud y completitud; se distingue de confidencialidad, disponibilidad y autenticidad. La redacción del original reproducía una fórmula histórica vinculada a ISO/IEC 27002:2005. Para el marco actual, ISO/IEC 27002:2022 es la edición publicada de controles y la definición conceptual se contrasta con fuentes de seguridad actuales; no se atribuye la cita antigua como literal vigente.' }
};

if (!fs.existsSync(path.join(__dirname, 'cambios-lote-1001.json'))) aplicar({ numero: '1001', fecha: '2026-11-12', records, edits });

const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-1001.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5326: ['ITIC Academy, tema 069 «Software libre», con apartados específicos sobre GNU GPL v3, libertad de modificación, obras derivadas y distribución.', 'Cotejo con A1.69/A2.II.14; la obligación de copyleft se limita al caso de distribuir la obra derivada cubierta.'],
  5327: ['ITIC Academy, bloque «Interoperabilidad de sistemas», versión 2026.2 (14/08/2026), A1.46/A2.O9–O10; NTI de intercambio registral y SICRES.', 'Se distingue la resolución vigente de 2021 de la resolución originaria de 2011, ya sustituida.'],
  5328: ['ITIC Academy, bloque 11 «RISP, Datos Abiertos y Transparencia», edición 2026, reutilización de información y aplicación de la NTI.', 'Cotejo con A1.31/A2.I.9; el orden de pasos se toma literalmente de la Guía oficial de aplicación.'],
  5329: ['ITIC Academy, bloque 48 «Seguridad de redes y aplicación», MAGERIT, análisis de riesgos e identificación de activos.', 'Cotejo con A1.47/A2.II.13; se verifica en el Libro I de MAGERIT v3 y se corrige la atribución errónea al catálogo.'],
  5330: ['ITIC Academy, bloque 48 «Seguridad de redes y aplicación», objetivos de seguridad, propiedades de la información e integridad.', 'Cotejo con A1.47/A2.II.13; la pregunta se actualiza para no presentar como cita vigente una fórmula histórica de ISO/IEC 27002:2005.']
};
const reason = 'Cotejo curricular individual con ITIC Academy en Drive y programas oficiales A1/A2.';
for (const [key, [block, note]] of Object.entries(academy)) {
  const id = Number(key), q = bank.preguntas.find(x => x.id === id), change = log.cambios.find(x => x.id === id);
  if (!q || !change) throw new Error(`Falta registro de ${id}`);
  const before = { bloque_academia: q.clasificacion.bloque_academia, nota: q.clasificacion.nota };
  q.clasificacion.bloque_academia = block; q.clasificacion.nota = note;
  const later = change.correcciones_posteriores || [];
  if (!later.some(x => x.motivo === reason)) later.push({ fecha: '2026-11-12', motivo: reason, clasificacion_anterior: before, clasificacion_actualizada: { bloque_academia: block, nota: note } });
  change.correcciones_posteriores = later; change.actualizada = structuredClone(q);
}
const byId = new Map(log.cambios.map(c => [c.id, c]));
const raw = fs.readFileSync(bankPath, 'utf8'); let replaced = 0;
const output = raw.replace(/^    \{[\s\S]*?^    \}/gm, block => {
  const old = JSON.parse(block), change = byId.get(old.id); if (!change) return block;
  replaced++; return JSON.stringify(change.actualizada, null, 2).split('\n').map(line => `    ${line}`).join('\n');
});
if (replaced !== 5) throw new Error(`Se esperaban 5 cambios; encontrados ${replaced}`);
JSON.parse(output); fs.writeFileSync(bankPath, output); fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Lote 1001 enriquecido con cotejo curricular y trazabilidad de las cinco preguntas.');
