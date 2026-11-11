const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const ens = 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191';
const incibe = 'https://www.incibe.es/incibe-cert/incidentes/respuesta-incidentes';
const ccn817 = 'https://www.ccn-cert.cni.es/es/pdf/guias/series-ccn-stic/800-guia-esquema-nacional-de-seguridad/988-ccn-stic-817-gestion-de-ciberincidentes/file.html';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy = 'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk';
const refs = entries => entries.map(([url, referencia]) => ({ url, referencia }));

const records = [
  [4976, ['127'], ['II-13'], ['INCIBE-CERT', 'respuesta a incidentes', 'sector privado'], refs([
    [incibe, 'INCIBE-CERT, Respuesta a incidentes: se define como centro de respuesta de referencia para ciudadanos y entidades de derecho privado en España y ofrece soporte a ciudadanos y empresas; no se formula como exclusión de otros CERT o CSIRT.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 127: ciberseguridad y respuesta ante incidentes.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema II.13: herramientas en ciberseguridad y gestión de incidentes.'],
    [academy, 'ITIC Academy 2026, bloque 22, versión 2026.2 (26/08/2026), apartados sobre CERT, coordinación y respuesta a incidentes; cotejo curricular.']
  ]), null, 'Respuesta C. INCIBE-CERT es el centro de referencia para ciudadanos y entidades de derecho privado en España, y presta asistencia ante incidentes notificados por ciudadanos y empresas. Se reformula el reactivo para atribuirle ese papel de referencia sin sugerir que sea el único equipo que atiende incidentes del sector privado: la propia página de INCIBE-CERT incluye otros colectivos y existen otros CSIRT.', 'corregida'],
  [4977, ['48'], ['I-9'], ['ENS', 'auditoría de seguridad', 'Real Decreto 311/2022', 'artículo 31'], refs([
    [ens, 'Real Decreto 311/2022, texto consolidado BOE, art. 31.1: auditoría regular ordinaria al menos cada dos años; cambios sustanciales pueden exigir auditoría extraordinaria y reinician el cómputo.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 48: ENS y adecuación al Esquema Nacional de Seguridad.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema I.9: ENS y guías CCN-STIC serie 800.'],
    [academy, 'ITIC Academy 2026, bloque 22, versión 2026.2 (26/08/2026), apartados 3 y 5 sobre auditoría, autoevaluación y periodicidad del ENS; cotejo curricular.']
  ]), null, 'Respuesta C. El art. 31.1 del RD 311/2022 exige auditoría regular ordinaria, como mínimo, cada dos años. Si se producen modificaciones sustanciales que puedan repercutir en las medidas, procede auditoría extraordinaria y su fecha determina el siguiente cómputo bienal. Se corrige la errata de puntuación del enunciado.', 'corregida'],
  [4978, ['48'], ['I-9'], ['ENS', 'principios básicos', 'gestión de riesgos', 'Real Decreto 311/2022'], refs([
    [ens, 'Real Decreto 311/2022, texto consolidado BOE, art. 5.b: uno de los principios básicos es la gestión de la seguridad basada en los riesgos.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 48: ENS y adecuación al Esquema Nacional de Seguridad.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema I.9: ENS y guías CCN-STIC serie 800.'],
    [academy, 'ITIC Academy 2026, bloque 22, versión 2026.2 (26/08/2026), apartados 3.2 y 3.3: principios básicos y gestión de riesgos del ENS; cotejo curricular.']
  ]), null, 'Respuesta D. El artículo 5.b del RD 311/2022 enumera como principio básico la gestión de la seguridad basada en los riesgos. La protección de datos y los derechos de las personas también deben respetarse, pero no son la respuesta textual a la pregunta por un principio básico del ENS.', 'vigente'],
  [4979, ['127'], ['II-13'], ['CCN-STIC 817', 'gestión de ciberincidentes', 'análisis de riesgos', 'preparación'], refs([
    [ccn817, 'CCN-STIC 817, edición abril de 2020, apartado 4, párr. 9 (p. 6): durante la fase de preparación y previo análisis de riesgos, el organismo identifica y despliega medidas de seguridad; párrs. 10–13 describen las fases siguientes.'],
    [ens, 'Real Decreto 311/2022, texto consolidado BOE, arts. 5, 14 y 33: gestión de seguridad basada en riesgos, gestión de riesgos y prevención/detección/respuesta ante incidentes.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 127: ciberseguridad y respuesta ante incidentes.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema II.13: herramientas en ciberseguridad y gestión de incidentes.'],
    [academy, 'ITIC Academy 2026, bloque 22, versión 2026.2 (26/08/2026), apartados 1.4 y 8.5: preparación, detección, respuesta y gestión de incidentes; cotejo curricular.']
  ]), null, 'Respuesta A. La CCN-STIC 817 sitúa en preparación la creación/formación del equipo y los recursos; señala que, tras el análisis de riesgos y conforme a los anexos del ENS, se identifican y despliegan medidas de seguridad. Por tanto, esa implantación corresponde a preparación, no a detección/análisis, contención/recuperación o actividad posterior.', 'vigente'],
  [4980, ['48'], ['I-9'], ['ENS', 'ámbito de aplicación', 'sector privado', 'Real Decreto 311/2022', 'artículo 2'], refs([
    [ens, 'Real Decreto 311/2022, texto consolidado BOE, art. 2.1–2.3: se aplica a todo el sector público; también a sistemas que tratan información clasificada y a sistemas de entidades privadas cuando, conforme a la normativa y por relación contractual, prestan servicios o proveen soluciones a entidades públicas para ejercer sus competencias y potestades administrativas.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 48: ENS y adecuación al Esquema Nacional de Seguridad.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema I.9: ENS y guías CCN-STIC serie 800.'],
    [academy, 'ITIC Academy 2026, bloque 22, versión 2026.2 (26/08/2026), apartado 3.1: ámbito público, contratistas y provisión privada de servicios/soluciones al sector público; cotejo curricular.']
  ]), null, 'Respuesta B. El art. 2.1 del RD 311/2022 hace aplicable el ENS a todo el sector público. El art. 2.3 extiende su aplicación también a sistemas de entidades privadas cuando, según la normativa aplicable y en virtud de una relación contractual, prestan servicios o proveen soluciones a entidades públicas para ejercer sus competencias y potestades administrativas. No impone el ENS indiscriminadamente a todo sistema privado.', 'corregida']
];

const edits = {
  4976: { texto: 'En España, ¿qué centro de respuesta a incidentes es de referencia para ciudadanos y entidades de derecho privado?' },
  4977: { texto: 'El Esquema Nacional de Seguridad establece que los sistemas comprendidos en su ámbito de aplicación han de ser objeto de una auditoría regular ordinaria, al menos:' },
  4980: { texto: 'Según el artículo 2 del Real Decreto 311/2022, ¿cuál es el ámbito de aplicación del Esquema Nacional de Seguridad?' }
};

aplicar({ numero: '931', fecha: '2026-11-11', records, edits });

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-931.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academyById = {
  4976: 'apartados sobre respuesta de INCIBE-CERT a ciudadanos y entidades; A1-127 y A2-II-13.',
  4977: 'apartados 3 y 5 sobre auditoría y periodicidad ENS; A1-48 y A2-I-9.',
  4978: 'apartados 3.2 y 3.3 sobre principios básicos y gestión de riesgos ENS; A1-48 y A2-I-9.',
  4979: 'apartados 1.4 y 8.5 sobre preparación y gestión de incidentes; A1-127 y A2-II-13.',
  4980: 'apartado 3.1 sobre ámbito ENS, contratistas y prestación privada de servicios al sector público; A1-48 y A2-I-9.'
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const detail = `ITIC Academy 2026, bloque 22, versión 2026.2 (26/08/2026), ${academyById[change.id]}`;
  q.clasificacion.bloque_academia = `${detail} Cotejo curricular, no autoridad normativa.`;
  q.clasificacion.nota = `${q.revision.estado}. ${detail} El fundamento se aporta en revision.fuentes y en el registro del lote.`;
  q.revision.observaciones += ` ${detail} Cotejo curricular, no fuente normativa.`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: academy, referencia: `${detail} Cotejo curricular.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de ITIC Academy añadido al lote 931.');
