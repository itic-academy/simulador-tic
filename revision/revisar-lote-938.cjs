const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const burns = 'https://www.nationalacademies.org/read/10851/chapter/6';
const burnsBook = 'https://books.google.com/books?id=DeztAAAAMAAJ';
const leadership = 'https://www.open.edu/openlearn/mod/oucontent/view.php?id=103643&section=_unit4.1';
const grants = 'https://www.boe.es/buscar/act.php?id=BOE-A-2003-20977';
const lssi = 'https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758';
const gdpr = 'https://eur-lex.europa.eu/eli/reg/2016/679/oj/spa';
const law3 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-3444';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academyDirection = 'https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk';
const academyGrants = 'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk';
const academyAdmin = 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const academyPrivacy = 'https://drive.google.com/file/d/11T-TKuGJGXeEKwwODM-FlF8pML3QMh_t/view?usp=drivesdk';
const ref = (url, referencia) => ({ url, referencia });

const records = [
  [5011, ['21'], [], ['liderazgo', 'liderazgo transaccional', 'Burns', 'intercambio'], [
    ref(burnsBook, 'Burns, James MacGregor, Leadership, Harper & Row, 1978: ficha bibliográfica de la obra original. Para la definición del intercambio se contrastan las fuentes que reproducen y comentan expresamente el pasaje.'),
    ref(burns, 'National Academies Press, capítulo sobre liderazgo: recoge la formulación de Burns (1978, p. 425) del liderazgo transaccional como intercambio o trato para satisfacer intereses individuales de partes que persiguen fines propios.'),
    ref(leadership, 'Open University, síntesis del modelo originado en Burns (1978): distingue liderazgo transaccional, centrado en intercambio/recompensas, del transformacional, que eleva motivaciones y valores.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 21: liderazgo, gestión de competencias y personas, conflictos e inteligencia emocional.'),
  ], null, 'Respuesta B, con la opción reformulada. La formulación original («tiene en cuenta las circunstancias y a las personas») no caracteriza de manera inequívoca la tipología de Burns. El rasgo definitorio de lo transaccional es un intercambio entre líder y seguidores, normalmente ligado a intereses, prestaciones o recompensas; la transformación de valores y motivaciones corresponde al liderazgo transformacional. Se conserva la clave B y se elimina la falsa atribución genérica. No se asigna tema A2: el programa oficial A2 GSI 2025 no incluye liderazgo como epígrafe específico.', 'corregida'],
  [5012, ['13'], [], ['Ley 38/2003', 'subvenciones', 'subcontratación', 'autorización previa', 'artículo 29.3'], [
    ref(grants, 'Ley 38/2003, General de Subvenciones, texto consolidado del BOE, art. 29.3: cuando la actividad concertada exceda del 20 % del importe de la subvención y dicho importe sea superior a 60.000 euros, el contrato debe formalizarse por escrito y la subcontratación requiere autorización previa de la entidad concedente.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 13: régimen jurídico de las subvenciones públicas y procedimiento.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX: el temario no contiene un epígrafe específico sobre el régimen jurídico de subvenciones; no se fuerza una correspondencia.')
  ], null, 'Respuesta B. Los dos umbrales son acumulativos: la actividad concertada debe exceder el 20 % del importe de la subvención y el importe debe superar 60.000 euros. En ese supuesto, el artículo 29.3 exige contrato escrito y autorización previa del órgano concedente. La clasificación A2 se deja vacía porque el programa oficial A2 GSI 2025 no incluye un epígrafe específico equivalente.', 'vigente'],
  [5013, ['22'], ['I-6'], ['Ley 34/2002', 'LSSI-CE', 'servicios de la sociedad de la información', 'teletexto'], [
    ref(lssi, 'Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico, texto consolidado del BOE, art. 2.2.e: excluye el teletexto televisivo y servicios equivalentes, como las guías electrónicas de programas de plataformas televisivas.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 22: legislación sobre sociedad de la información y administración electrónica en España y Europa.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, I.6: sociedad de la información y su marco jurídico.')
  ], null, 'Respuesta B. El artículo 2.2.e de la LSSI excluye expresamente el teletexto televisivo y las guías electrónicas de programas ofrecidas por plataformas televisivas. La contratación electrónica, los mercados virtuales y el suministro telemático de información sí pueden constituir servicios de la sociedad de la información.', 'vigente'],
  [5014, ['27'], ['I-7'], ['RGPD', 'Reglamento UE 2016/679', 'minimización de datos', 'artículo 5'], [
    ref(gdpr, 'Reglamento (UE) 2016/679, versión española, art. 5.1.c: los datos personales serán adecuados, pertinentes y limitados a lo necesario en relación con los fines para los que se tratan («minimización de datos»). El art. 5.1.a añade licitud, lealtad y transparencia; el principio no exige anonimización.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 27: RGPD, principios, derechos y obligaciones de protección de datos.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, I.7: principios, derechos y régimen jurídico de protección de datos personales.')
  ], null, 'Respuesta A. Es la formulación del artículo 5.1.c RGPD. La opción «no excesivos» procede de la antigua redacción de la LO 15/1999 y no es la formulación literal vigente; la minimización exige limitar los datos a lo necesario para los fines. La anonimización no es un requisito general de este principio.', 'corregida'],
  [5015, ['25'], ['I-4'], ['Ley 3/2015', 'altos cargos', 'Gabinetes ministeriales', 'artículo 1'], [
    ref(law3, 'Ley 3/2015, texto consolidado vigente del BOE, art. 1.2: define de forma expresa las categorías de altos cargos de la AGE (miembros del Gobierno, Secretarios de Estado, Subsecretarios/asimilados, Secretarios Generales, Delegados del Gobierno, jefes de misión, Secretarios Generales Técnicos y Directores Generales/asimilados, entre otros). Los jefes de Gabinete ministeriales no aparecen en esa relación por el mero hecho de serlo.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 25: gobernanza pública, gobierno abierto, buen gobierno y marco de transparencia; encaje temático del régimen de altos cargos y buen gobierno.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, I.4: Ley 19/2013 de transparencia, acceso a la información y buen gobierno; encaje del régimen de altos cargos en la dimensión de buen gobierno.')
  ], null, 'Respuesta D. El artículo 1.2 de la Ley 3/2015 contiene la lista legal de quienes tienen consideración de alto cargo en la AGE; los jefes de Gabinete de los ministros no se incluyen en ella por ese solo nombramiento. La clasificación corresponde a A1-25 y A2-I.4 por la dimensión de buen gobierno; no se atribuye a empleo público ordinario.', 'vigente']
];

const edits = {
  5011: { opcion: [1, 'Se basa en un intercambio entre líder y seguidores, mediante el que cada parte procura satisfacer determinados intereses o recibir prestaciones o recompensas.'] },
  5014: { texto: 'Según el artículo 5.1.c del Reglamento General de Protección de Datos (UE) 2016/679, el principio de minimización de datos personales implica que:' }
};

aplicar({ numero: '938', fecha: '2026-11-11', records, edits });

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-938.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5011: ['ITIC Academy, bloque 07 «Dirección pública, empleo, transparencia y unidad de mercado», versión 2026.2 (01/10/2026), liderazgo (A1-21), gestión de competencias y personas; el programa A2 no tiene epígrafe específico de liderazgo; cotejo curricular.', academyDirection],
  5012: ['ITIC Academy, bloque 05 «Contratación, presupuestos, convenios, subvenciones y compra TIC», versión 2026, A1-13: subvenciones y Ley 38/2003. El propio bloque indica que esta materia no tiene equivalente en A2; cotejo curricular.', academyGrants],
  5013: ['ITIC Academy, bloque 03 «Actuación administrativa y administración digital», versión 2026.2 (01/10/2026), § 6.2 sobre la LSSI-CE y servicios de la sociedad de la información; cotejo curricular.', academyAdmin],
  5014: ['ITIC Academy, bloque 08 «Protección de datos», versión 2026.1 (19/08/2026), principios del RGPD, minimización de datos y distinción frente a materiales antiguos; cotejo curricular.', academyPrivacy],
  5015: ['ITIC Academy, bloque 07 «Dirección pública, empleo, transparencia y unidad de mercado», versión 2026.2 (01/10/2026), altos cargos y buen gobierno (A1-25/A2-I.4); cotejo curricular.', academyDirection]
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const [detail, url] = academy[change.id];
  q.clasificacion.bloque_academia = detail;
  q.clasificacion.nota = `${q.revision.estado}. ${detail} La academia se usa como cotejo curricular, no como fuente técnica o jurídica primaria.`;
  q.revision.observaciones += ` ${detail} Cotejo curricular, no sustituto de la fuente primaria.`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: detail });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular de ITIC Academy añadido al lote 938.');
