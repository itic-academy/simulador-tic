const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const ley40 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566&p=20260929&tn=1';
const lcsp = 'https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902&p=20240802&tn=1';
const igualdad = 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-6115&p=20240802&tn=1';
const violencia = 'https://www.boe.es/buscar/act.php?id=BOE-A-2004-21760';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academyResponsabilidad = 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const academyContratos = 'https://drive.google.com/file/d/14iahY0cgkiV8RESN81b8pHdD4K3UbSOj/view?usp=drivesdk';
const academyIgualdad = 'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk';
const refs = entries => entries.map(([url, referencia]) => ({ url, referencia }));

const records = [
  [4961, ['10'], ['I-8'], ['Ley 40/2015', 'responsabilidad patrimonial', 'daño efectivo', 'evaluación económica', 'individualización'], refs([
    [ley40, 'Ley 40/2015, texto consolidado BOE, arts. 32.1–2 y 34.1–3: excluye fuerza mayor; exige que el daño sea efectivo, evaluable económicamente e individualizado; no se indemnizan daños imprevisibles o inevitables según el estado de la ciencia o técnica; la cuantía toma como referencia el día de producción de la lesión.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 10: responsabilidad patrimonial de las Administraciones públicas.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema I.8: Ley 40/2015 y régimen jurídico de las Administraciones públicas.'],
    [academyResponsabilidad, 'ITIC Academy 2026, bloque 03, sección 2.6: responsabilidad patrimonial, requisitos del daño y exclusiones; cotejo curricular.']
  ]), null,
  'Respuesta B. El artículo 32.2 exige que el daño sea efectivo, evaluable económicamente e individualizado. La opción A falla al incluir la fuerza mayor; la C invierte la regla del artículo 34.1 (esos daños no son indemnizables); y la D fija erróneamente la fecha en el inicio del procedimiento, cuando el artículo 34.3 se refiere al día en que se produjo la lesión.', 'vigente'],
  [4962, ['11'], [], ['Ley 9/2017', 'contratos menores', 'artículo 118', 'valor estimado', 'publicidad'], refs([
    [lcsp, 'Ley 9/2017, texto consolidado BOE, art. 118.1 y 6: contratos menores por valor estimado inferior a 40.000 euros en obras o a 15.000 euros en suministros y servicios; se publican según el art. 63.4.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 11: Ley de Contratos del Sector Público, requisitos y procedimientos de contratación.'],
    [a2, 'El programa A2 GSI AGE 2025 no incluye contratación pública como epígrafe; no se asigna un tema A2 artificial.'],
    [academyContratos, 'ITIC Academy 2026, bloque 05, versión 2026.2: contratación pública, LCSP y tema A1-11; identifica expresamente que el bloque no tiene equivalente en el temario A2. Cotejo curricular.']
  ]), null,
  'Respuesta C. El umbral de valor estimado es inferior a 40.000 euros para obras y a 15.000 para suministros o servicios. Los contratos menores sí deben publicarse en la forma del artículo 63.4. Las opciones que usan umbrales 60.000/20.000 o niegan la publicación son incorrectas.', 'vigente'],
  [4963, ['11'], [], ['Ley 9/2017', 'artículos 14', '16', '17', 'contrato de suministro', 'contrato de servicios', 'concesión de obras', 'riesgo operacional'], refs([
    [lcsp, 'Ley 9/2017, texto consolidado BOE, arts. 14.1 y 4, 16.3.b y 17: la concesión transfiere riesgo operacional al concesionario; los equipos y programas TIC son suministro salvo el software desarrollado a medida, que es servicio; los servicios incluyen prestaciones sucesivas por precio unitario.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 11: tipos de contratos y características generales.'],
    [a2, 'El programa A2 GSI AGE 2025 no incluye un epígrafe específico de contratación pública; no se fuerza una equivalencia A2.'],
    [academyContratos, 'ITIC Academy 2026, bloque 05, versión 2026.2, Ley 9/2017, tipología contractual y contratos TIC; tema A1-11 y sin equivalente A2. Cotejo curricular.']
  ]), null,
  'Respuesta A. El artículo 16.3.b califica como suministro la adquisición/arrendamiento de equipos y sistemas TIC y sus programas, excepto los programas desarrollados a medida, que son servicios. La fecha de la ley en el enunciado original era errónea (3 de noviembre): se corrige a 8 de noviembre de 2017. La opción B niega indebidamente la inclusión de servicios sucesivos por precio unitario (art. 17); C ofrece como servicios la definición de suministros (art. 16.1); D atribuye a la Administración el riesgo operacional que debe transferirse al concesionario (art. 14).', 'corregida'],
  [4964, ['16'], ['I-5'], ['Ley Orgánica 3/2007', 'artículo 10', 'igualdad efectiva', 'discriminación por razón de sexo', 'nulidad'], refs([
    [igualdad, 'Ley Orgánica 3/2007, texto consolidado BOE, art. 10: los actos y cláusulas de negocios jurídicos que constituyan o causen discriminación por razón de sexo se consideran nulos y sin efecto.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 16: políticas de igualdad de género y estructura social.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema I.5: políticas de igualdad, no discriminación y régimen jurídico.'],
    [academyIgualdad, 'ITIC Academy 2026, bloque 06, versión 2026.2: estructura social y políticas de igualdad; temas A1-16 y A2-O5. Cotejo curricular.']
  ]), null,
  'Respuesta B. El artículo 10 de la Ley Orgánica 3/2007 declara nulos y sin efecto los actos y cláusulas de negocios jurídicos que constituyan o causen discriminación por razón de sexo; además prevé responsabilidad, reparaciones o indemnizaciones y, en su caso, sanciones. Se corrige la errata «22. de marzo» del enunciado original.', 'corregida'],
  [4965, ['16'], ['I-5'], ['Ley Orgánica 1/2004', 'artículo 1', 'violencia de género', 'relaciones afectivas', 'sin convivencia'], refs([
    [violencia, 'Ley Orgánica 1/2004, texto consolidado BOE, art. 1.1: incluye violencia ejercida por quien sea o haya sido cónyuge o esté o haya estado ligado por relación similar de afectividad, aun sin convivencia.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 16: políticas contra la violencia de género.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema I.5: políticas contra la violencia de género.'],
    [academyIgualdad, 'ITIC Academy 2026, bloque 06, versión 2026.2: políticas de igualdad y violencia de género; temas A1-16 y A2-O5. Cotejo curricular.']
  ]), null,
  'Respuesta D. El artículo 1.1 abarca a quienes sean o hayan sido cónyuges y a quienes estén o hayan estado ligados por una relación similar de afectividad, incluso sin convivencia. Las otras alternativas restringen indebidamente el ámbito a vínculos actuales o a la convivencia.', 'vigente']
];

const edits = {
  4963: {
    texto: 'De conformidad con la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, señale la respuesta correcta:',
    respuesta_correcta: 0
  },
  4964: {
    texto: 'Según el artículo 10 de la Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, los actos y cláusulas de negocios jurídicos que constituyan o causen discriminación por razón de sexo se consideran:',
    respuesta_correcta: 1
  }
};

aplicar({ numero: '928', fecha: '2026-11-11', records, edits });

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-928.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academyById = {
  4961: ['https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk', 'ITIC Academy 2026, bloque 03, versión 2026.2, sección 2.6: responsabilidad patrimonial y requisitos del daño.'],
  4962: [academyContratos, 'ITIC Academy 2026, bloque 05, versión 2026.2: Ley 9/2017, contratos menores y publicación; A1-11, sin equivalente A2.'],
  4963: [academyContratos, 'ITIC Academy 2026, bloque 05, versión 2026.2: tipología LCSP, contratos de suministro/servicios, software TIC y concesión de obras; A1-11, sin equivalente A2.'],
  4964: [academyIgualdad, 'ITIC Academy 2026, bloque 06, versión 2026.2: políticas de igualdad y no discriminación; A1-16 y A2-O5.'],
  4965: [academyIgualdad, 'ITIC Academy 2026, bloque 06, versión 2026.2: políticas contra la violencia de género; A1-16 y A2-O5.']
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const [url, detail] = academyById[change.id];
  q.clasificacion.bloque_academia = `${detail} Cotejo curricular, no autoridad normativa.`;
  q.clasificacion.nota = `${q.revision.estado}. ${detail} El fundamento normativo se aporta en revision.fuentes y en el registro del lote.`;
  q.revision.observaciones += ` ${detail}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `${detail} Cotejo curricular.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy añadido al lote 928.');
