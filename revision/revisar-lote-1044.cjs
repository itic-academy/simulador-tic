const path = require('node:path');
const fs = require('node:fs');
const aplicar = require('./aplicar-lote.cjs');

const nti = 'https://www.boe.es/eli/es/res/2012/06/28/(4)/con';
const ens = 'https://www.boe.es/eli/es/rd/2022/05/03/311/con';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const ccn400 = 'https://www.ccn-cert.cni.es/publico/seriesCCN-STIC/series/400-Guias_Generales/400-Manual_STIC/400-Manual_STIC-jun13.pdf';
const ccn805 = 'https://www.ccn-cert.cni.es/series-ccn-stic/800-guia-esquema-nacional-de-seguridad/508-ccn-stic-805-politica-de-seguridad-de-la-informacion/file.html';
const nistRpo = 'https://csrc.nist.gov/glossary/term/RPO';
const nistRto = 'https://csrc.nist.gov/glossary/term/RTO';
const iso = 'https://www.iso.org/standard/75652.html';
const isoGlossary = 'https://committee.iso.org/files/live/sites/jtc1sc27/files/resources/CD%206%20-%20Glossary%2020250902.pdf';
const drive = {
  interoperability: 'https://drive.google.com/file/d/1zdx_PRBfKM9tRy61Boz_yPekU-D-b_6S/view?usp=drivesdk',
  hardware: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',
  security: 'https://drive.google.com/file/d/1hDds88w2FNC90rX73GSpGd6lVVy4bcmL/view?usp=drivesdk'
};

const records = [
  [5541, [46], ['I-9'], ['NTI', 'Protocolos de intermediación de datos', 'trazabilidad', 'Plataforma de Intermediación', 'minimización'], [
    { url: nti, referencia: 'Resolución de 28 de junio de 2012, NTI de Protocolos de intermediación de datos, apartado III.6.3 y 4–5: la Plataforma no almacena el contenido del intercambio; para las trazas se conservan identificador, cesionario/requirente/usuario, tipo de información y fecha/hora. La norma distingue las trazas de los datos específicos del intercambio, que Emisor y Requirente conservan.' },
    { url: a1, referencia: 'Convocatoria oficial A1 GSI 2025, tema 46: NTI e intercambio de datos entre Administraciones Públicas.' },
    { url: a2, referencia: 'Convocatoria oficial A2 GSI 2025, tema I.9: ENI y normas técnicas de interoperabilidad.' },
    { url: drive.interoperability, referencia: 'ITIC Academy 2026, bloque 20 Interoperabilidad de Sistemas, versión 2026.2: NTI, intermediación e intercambio de datos; A1-46 y A2-I.9.' }
  ], 'La Plataforma no almacena el contenido del intercambio (NTI, III.6.3). Sí registra metadatos de trazabilidad como identificador, cesionario/requirente/usuario, tipo de información y fecha/hora (III.6.4–5). El enunciado se acota expresamente a la Plataforma para no sugerir que Emisor y Requirente nunca conservan los datos específicos intercambiados.', 'corregida'],
  [5542, [128], ['IV-3', 'IV-6'], ['continuidad', 'recuperación ante desastres', 'RPO', 'RTO', 'pérdida de datos'], [
    { url: nistRpo, referencia: 'NIST CSRC Glossary, Recovery Point Objective, basado en SP 800-34 Rev. 1: punto temporal hasta el que deben recuperarse los datos tras una interrupción.' },
    { url: nistRto, referencia: 'NIST CSRC Glossary, Recovery Time Objective: duración total que los componentes del sistema pueden permanecer en recuperación antes de afectar negativamente a la misión o procesos de la organización; se distingue del RPO.' },
    { url: a1, referencia: 'Convocatoria oficial A1 GSI 2025, tema 128: gestión de la continuidad, planes de continuidad y contingencia.' },
    { url: a2, referencia: 'Convocatoria oficial A2 GSI 2025, tema IV.6: alta disponibilidad y recuperación ante desastres; tema IV.3: backup y recuperación.' },
    { url: drive.hardware, referencia: 'ITIC Academy 2026, bloque 26 Hardware, servidores, CPD, almacenamiento, virtualización y continuidad: copias de seguridad y mecanismos de continuidad; A1-56/57/132 y A2-IV.3/6.' }
  ], 'RPO fija el punto temporal hasta el que se deben recuperar los datos tras una interrupción; expresa en unidades de tiempo la pérdida máxima de datos asumible. RTO mide el tiempo de recuperación del servicio/sistema, no los datos perdidos. Se reformula el original, que llamaba «tiempo» a la cantidad de datos perdida y podía confundir RPO y RTO.', 'corregida'],
  [5543, [48], ['I-9', 'II-13'], ['política de seguridad', 'CCN-STIC-400', 'ENS', 'alto nivel'], [
    { url: ccn400, referencia: 'Manual CCN-STIC 400 v1.1, apartado 5.1, párrafo 178: como orientación de política de alto nivel, debe describir qué se intenta proteger y por qué, sin detallar el cómo, que corresponde al plan de implementación o al desarrollo de requisitos.' },
    { url: ccn805, referencia: 'CCN-STIC-805, Esquema Nacional de Seguridad — Política de Seguridad de la Información: guía del CCN para desarrollar la política conforme al ENS.' },
    { url: ens, referencia: 'Real Decreto 311/2022, texto consolidado del BOE, arts. 12 y 13 y anexo II, medida org.1: marco y requisitos de la política de seguridad; el artículo 13 asigna funciones diferenciadas.' },
    { url: a1, referencia: 'Convocatoria oficial A1 GSI 2025, tema 48: ENS y adecuación al Esquema Nacional de Seguridad.' },
    { url: a2, referencia: 'Convocatoria oficial A2 GSI 2025, temas I.9 e II.13: ENS y seguridad física y lógica.' },
    { url: drive.security, referencia: 'ITIC Academy 2026, bloque 48 Seguridad en redes y nivel de aplicación, apartado ENS/política de seguridad, versión 1.4; A1-48 y A2-I.9/II.13.' }
  ], 'La respuesta reproduce una pauta metodológica de alto nivel de CCN-STIC 400, no una frase literal ni un requisito autónomo del artículo 13 del ENS. Se atribuye al documento correcto y se precisa que el detalle de implementación corresponde a los planes y refinamientos posteriores. La política sigue encuadrada por el ENS vigente (RD 311/2022) y su guía CCN-STIC 805.', 'corregida'],
  [5544, [48], ['II-13'], ['disponibilidad', 'ISO/IEC 27002:2022', 'tríada CIA', 'acceso autorizado'], [
    { url: iso, referencia: 'ISO/IEC 27002:2022, Information security controls: referencia vigente de controles de seguridad; su terminología identifica la disponibilidad como propiedad de acceso/uso bajo demanda por una entidad autorizada. Se cita el catálogo oficial ISO para la edición publicada.' },
    { url: isoGlossary, referencia: 'ISO/IEC JTC 1/SC 27, Committee Document 6, glosario de terminología de seguridad, entrada «availability»: propiedad de ser accesible y utilizable bajo demanda por una entidad autorizada; la tabla registra la fuente ISO/IEC 27002:2022, 3.1.12.' },
    { url: a1, referencia: 'Convocatoria oficial A1 GSI 2025, tema 48: ENS, principios y seguridad de sistemas.' },
    { url: a2, referencia: 'Convocatoria oficial A2 GSI 2025, tema II.13: seguridad física y lógica de sistemas de información.' },
    { url: drive.security, referencia: 'ITIC Academy 2026, bloque 48 Seguridad en redes y nivel de aplicación, ENS y propiedades de seguridad; A1-48 y A2-II.13.' }
  ], 'La disponibilidad es la propiedad por la que la información y activos asociados pueden ser accesibles y utilizables cuando se necesitan por una entidad autorizada. La respuesta C es correcta; se precisa en el enunciado que se pregunta por esta propiedad y se vincula a la edición 2022 de ISO/IEC 27002, sin confundirla con confidencialidad o integridad.', 'corregida'],
  [5545, [48], ['I-9', 'II-13'], ['ENS', 'RD 311/2022', 'artículo 13', 'responsable de seguridad', 'roles ENS'], [
    { url: ens, referencia: 'Real Decreto 311/2022, texto consolidado del BOE, art. 13.2.a–d: diferencia las funciones de responsables de información, servicio, seguridad y sistema. El responsable de seguridad determina decisiones para satisfacer los requisitos de seguridad, supervisa medidas y reporta.' },
    { url: a1, referencia: 'Convocatoria oficial A1 GSI 2025, tema 48: ENS y organización de la seguridad.' },
    { url: a2, referencia: 'Convocatoria oficial A2 GSI 2025, temas I.9 e II.13: ENS y seguridad física y lógica.' },
    { url: drive.security, referencia: 'ITIC Academy 2026, bloque 48 Seguridad en redes y nivel de aplicación, roles ENS y asignación de responsabilidades; A1-48 y A2-I.9/II.13.' }
  ], 'El art. 13.2.c del RD 311/2022 atribuye al responsable de seguridad la determinación de decisiones para satisfacer requisitos de seguridad, la supervisión de la implantación de medidas y la comunicación de resultados. La opción A corresponde al responsable de la información; la C, al responsable del servicio; la D es la respuesta correcta.', 'corregida']
];

const edits = {
  5541: {
    texto: 'Según el apartado III.6 de la NTI de Protocolos de intermediación de datos, ¿qué información no almacena la Plataforma de Intermediación en relación con los intercambios, aunque sí conserve metadatos de trazabilidad?',
    respuesta_correcta: 1
  },
  5542: {
    texto: 'En continuidad y recuperación ante desastres, ¿qué objetivo fija el punto temporal hasta el que deben recuperarse los datos tras una interrupción y, por tanto, cuantifica en tiempo la pérdida máxima de datos asumible?',
    respuesta_correcta: 1
  },
  5543: {
    texto: 'Según la orientación de alto nivel del Manual CCN-STIC 400 para una política de seguridad, esta debe describir:',
    opciones: [
      'Qué se intenta proteger y por qué, sin detallar cómo implantarlo; ese detalle corresponde al plan de implementación y a los refinamientos de la política.',
      'Qué se intenta proteger, por qué y los pasos técnicos detallados para implementarlo en cada sistema.',
      'Únicamente los productos y mecanismos técnicos que se instalarán, sin explicar objetivos ni responsabilidades.',
      'Cuándo implantar cada mecanismo y qué proveedor debe ejecutarlo, sin definir qué activos se protegen.'
    ],
    respuesta_correcta: 0
  },
  5544: {
    texto: 'En las propiedades de seguridad de la información, ¿qué concepto de ISO/IEC 27002:2022 describe que la información y los activos asociados sean accesibles y utilizables bajo demanda por una entidad autorizada?',
    respuesta_correcta: 2
  },
  5545: {
    texto: 'Según el artículo 13.2.c del Real Decreto 311/2022, ¿qué función corresponde al responsable de seguridad del ENS?',
    respuesta_correcta: 3
  }
};

const log = path.join(__dirname, 'cambios-lote-1044.json');
if (!fs.existsSync(log)) aplicar({ numero: '1044', fecha: '2026-11-12', records, edits });

const bankFile = path.join(__dirname, '..', 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankFile, 'utf8'));
const changeLog = JSON.parse(fs.readFileSync(log, 'utf8'));
const academy = {
  5541: 'ITIC Academy 2026, bloque 20 Interoperabilidad de Sistemas: NTI de intermediación e intercambio de datos; A1-46 y A2-I.9.',
  5542: 'ITIC Academy 2026, bloque 26 Hardware, servidores, CPD, almacenamiento, virtualización y continuidad: copias y recuperación; A1-128 (continuidad) y A2-IV.3/IV.6 (backup y recuperación ante desastres).',
  5543: 'ITIC Academy 2026, bloque 48 Seguridad en redes y nivel de aplicación: ENS y política de seguridad; A1-48 y A2-I.9/II.13.',
  5544: 'ITIC Academy 2026, bloque 48 Seguridad en redes y nivel de aplicación: propiedades de seguridad y ENS; A1-48 y A2-II.13.',
  5545: 'ITIC Academy 2026, bloque 48 Seguridad en redes y nivel de aplicación: roles y responsabilidades del ENS; A1-48 y A2-I.9/II.13.'
};
for (const c of changeLog.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  q.clasificacion.bloque_academia = academy[c.id];
  q.clasificacion.nota = 'Clasificación cotejada con los programas oficiales A1/A2 de 2025 y el temario ITIC Academy 2026; el material de academia se utiliza como mapa curricular, no como fuente normativa.';
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankFile, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(log, JSON.stringify(changeLog, null, 2) + '\n');
