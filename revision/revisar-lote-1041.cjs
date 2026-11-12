const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const lcsp = 'https://www.boe.es/eli/es/l/2017/11/08/9/con';
const lgp = 'https://www.boe.es/eli/es/l/2003/11/26/47/con';
const ce = 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229&p=20260520';
const empleo = 'https://www.boe.es/eli/es/l/2023/02/28/3/con';
const cbam = 'https://eur-lex.europa.eu/eli/reg/2023/956/2025-10-20/spa';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const drive = {
  contracts: 'https://drive.google.com/file/d/14iahY0cgkiV8RESN81b8pHdD4K3UbSOj/view?usp=drivesdk',
  economy: 'https://drive.google.com/file/d/1nZeCK8ak3jlwIK-ASVBK6H8HXnGRxub_/view?usp=drivesdk',
  constitution: 'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk'
};

const records = [
  [5526, [11], [], ['garantía definitiva', 'Ley 9/2017', 'artículo 107', 'IVA excluido', 'contratación pública'], [
    { url: lcsp, referencia: 'Ley 9/2017, texto consolidado del BOE, art. 107.1: como regla general, la garantía definitiva asciende al 5 % del precio final ofertado por el licitador que presenta la mejor oferta, excluido el IVA; los apartados 4 y 5 contemplan excepciones.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 11: contratos de las Administraciones Públicas y Ley de Contratos del Sector Público.' },
    { url: a2, referencia: 'El programa A2 GSI 2025 no incluye un epígrafe específico de contratación pública; no se fuerza una etiqueta A2.' },
    { url: drive.contracts, referencia: 'ITIC Academy 2026, bloque 05 Contratación, Presupuestos y Compra TIC: LCSP y garantías contractuales; el documento indica que el bloque no tiene equivalente en el temario A2.' }
  ], 'El artículo 107.1 LCSP fija, como regla general, una garantía del 5 % del precio final ofertado por quien presenta la mejor oferta, excluido el IVA. Se sustituye la expresión antigua «adjudicación provisional» por la terminología de la Ley 9/2017 y «fianza» por «garantía definitiva». La pregunta incorpora «como regla general» porque la propia Ley admite supuestos de exención y garantía complementaria.', 'corregida'],
  [5527, [12], [], ['anticipos de caja fija', 'Ley 47/2003', 'artículo 78.3', 'presupuesto', 'gastos corrientes'], [
    { url: lgp, referencia: 'Ley 47/2003, texto consolidado del BOE, art. 78.3: regla general del 7 % de los créditos del capítulo de gastos corrientes en bienes y servicios para cada ministerio u organismo autónomo; el propio precepto prevé autorizaciones excepcionales específicas.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 12: Presupuestos Generales del Estado, ejecución del gasto y control.' },
    { url: a2, referencia: 'El programa A2 GSI 2025 no contiene un tema específico de Presupuestos Generales del Estado o anticipos de caja fija; no se fuerza una etiqueta A2.' },
    { url: drive.contracts, referencia: 'ITIC Academy 2026, bloque 05 Contratación, Presupuestos y Compra TIC: ejecución del gasto y anticipos de caja fija; el bloque está señalado como A1, sin equivalente A2.' }
  ], 'La respuesta general es el 7 %, conforme al artículo 78.3 de la Ley General Presupuestaria. Se precisa que se pregunta por la regla general: el artículo contempla excepciones expresas para supuestos concretos, de modo que el porcentaje no debe presentarse como absoluto para toda entidad y circunstancia.', 'corregida'],
  [5528, [12], ['I-3'], ['Presupuestos Generales del Estado', 'Constitución Española', 'artículo 134.1', 'Gobierno', 'Cortes Generales'], [
    { url: ce, referencia: 'Constitución Española, texto consolidado del BOE, art. 134.1: el Gobierno elabora los Presupuestos Generales del Estado y las Cortes Generales los examinan, enmiendan y aprueban.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 12: Presupuestos Generales del Estado y su control.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema I.3: funciones del Gobierno y relaciones entre el Gobierno y las Cortes Generales.' },
    { url: drive.contracts, referencia: 'ITIC Academy 2026, bloque 05: PGE, ciclo del gasto público y control; clasificación del bloque como contenido A1 sin equivalente A2 específico.' },
    { url: drive.constitution, referencia: 'ITIC Academy 2026, bloque 01 Constitución, Estado y AGE: competencias constitucionales del Gobierno y de las Cortes.' }
  ], 'El artículo 134.1 CE atribuye al Gobierno la elaboración de los PGE, mientras que su examen, enmienda y aprobación corresponden a las Cortes Generales. Se formula la pregunta para distinguir elaboración de aprobación; la respuesta es D.', 'corregida'],
  [5529, [14], ['I-4'], ['Mecanismo de Ajuste en Frontera por Carbono', 'Reglamento (UE) 2023/956', 'fuga de carbono', 'Fit for 55', 'emisiones incorporadas'], [
    { url: cbam, referencia: 'Reglamento (UE) 2023/956, texto consolidado de EUR-Lex a 20/10/2025, en particular arts. 1, 32 y 36: establece el CBAM para abordar las emisiones incorporadas en determinadas mercancías importadas y prevenir la fuga de carbono; el régimen transitorio termina el 31/12/2025 y el régimen definitivo se aplica desde 2026.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 14: crecimiento sostenible, políticas ambientales, Agenda 2030 y ODS.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema I.4: Agenda 2030 y Objetivos de Desarrollo Sostenible; relación transversal con política climática, sin epígrafe específico sobre CBAM.' },
    { url: drive.economy, referencia: 'ITIC Academy 2026, bloque 06 Economía, Sociedad, Empleo y Transformación Digital: transición verde, descarbonización y política climática; mapa A1 temas 14–19 y selección transversal A2 O4/O5.' }
  ], 'Se actualiza el ítem, que describía una propuesta legislativa como si siguiera pendiente y contenía erratas. El CBAM está establecido por el Reglamento (UE) 2023/956: aborda las emisiones incorporadas en ciertas mercancías importadas y el riesgo de fuga de carbono. El período transitorio fue de octubre de 2023 a diciembre de 2025; el régimen definitivo se aplica desde 2026. La respuesta B es la única correcta. La correspondencia A2-I.4 se señala solo como relación transversal con Agenda 2030/ODS, no como contenido explícito sobre CBAM.', 'corregida'],
  [5530, [17], [], ['Ley 3/2023', 'Consejo General del Sistema Nacional de Empleo', 'política de empleo', 'órganos de gobernanza', 'artículos 9 y 10'], [
    { url: empleo, referencia: 'Ley 3/2023, de Empleo, texto consolidado del BOE, art. 10.1: el Consejo General del Sistema Nacional de Empleo es el órgano consultivo y de participación institucional en materia de Empleo. El art. 9 define la Conferencia Sectorial como órgano de colaboración entre AGE y comunidades autónomas.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 17: mercado de trabajo y políticas públicas de empleo.' },
    { url: a2, referencia: 'No se identifica un epígrafe A2 específico sobre mercado de trabajo o política nacional de empleo; el tema I.8 se refiere al régimen de empleo público y no se fuerza como equivalencia.' },
    { url: drive.economy, referencia: 'ITIC Academy 2026, bloque 06 Economía, Sociedad, Empleo y Transformación Digital: mercado de trabajo y políticas públicas de empleo; mapa A1 tema 17.' }
  ], 'La respuesta C es correcta según el artículo 10.1 de la vigente Ley 3/2023, de Empleo. Se actualiza una opción que citaba al antiguo SEPE como órgano del sistema: la ley configura la Agencia Española de Empleo y los servicios autonómicos como servicios públicos de empleo, mientras distingue la Conferencia Sectorial (colaboración interadministrativa) del Consejo General (consulta y participación institucional).', 'corregida']
];

const edits = {
  5526: { texto: 'Como regla general, conforme al artículo 107.1 de la Ley 9/2017, ¿a cuánto asciende la garantía definitiva que debe constituir quien presenta la mejor oferta y sobre qué importe se calcula?', respuesta_correcta: 2 },
  5527: { texto: 'Con carácter general, según el artículo 78.3 de la Ley 47/2003, ¿qué límite se aplica a la cuantía global de los anticipos de caja fija de cada ministerio u organismo autónomo?', respuesta_correcta: 0 },
  5528: { texto: 'Según el artículo 134.1 de la Constitución Española, ¿a quién corresponde elaborar los Presupuestos Generales del Estado, cuyo examen, enmienda y aprobación competen a las Cortes Generales?', respuesta_correcta: 3 },
  5529: {
    texto: '¿Cuál es la finalidad del Mecanismo de Ajuste en Frontera por Carbono establecido por el Reglamento (UE) 2023/956?',
    opciones: [
      'Establecer el régimen de comercio de derechos de emisión de la UE, basado en un límite de emisiones y el intercambio de derechos para los sectores incluidos.',
      'Abordar las emisiones de gases de efecto invernadero incorporadas en determinadas mercancías importadas y prevenir la fuga de carbono, es decir, el traslado de producción a países con reglas climáticas menos exigentes.',
      'Fijar objetivos nacionales vinculantes de reducción de emisiones en sectores no cubiertos por el régimen de comercio de derechos de emisión ni por la normativa de uso de la tierra y silvicultura.',
      'Garantizar una red suficiente de infraestructuras para recargar o repostar vehículos y buques con combustibles alternativos.'
    ],
    respuesta_correcta: 1
  },
  5530: {
    texto: 'Conforme al artículo 10.1 de la Ley 3/2023, de Empleo, ¿qué órgano es el consultivo y de participación institucional en materia de empleo?',
    opciones: ['La Conferencia Sectorial de Empleo y Asuntos Laborales.', 'La Agencia Española de Empleo.', 'El Consejo General del Sistema Nacional de Empleo.', 'El Sistema de Información de los Servicios Públicos de Empleo (SISPE).'],
    respuesta_correcta: 2
  }
};

const log = path.join(__dirname, 'cambios-lote-1041.json');
const fs = require('node:fs');
if (!fs.existsSync(log)) aplicar({ numero: '1041', fecha: '2026-11-12', records, edits });

const bankFile = path.join(__dirname, '..', 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankFile, 'utf8'));
const changeLog = JSON.parse(fs.readFileSync(log, 'utf8'));
const academy = {
  5526: 'ITIC Academy 2026, bloque 05 Contratación, Presupuestos y Compra TIC: garantías de la LCSP; programa A1 tema 11 y sin equivalente A2.',
  5527: 'ITIC Academy 2026, bloque 05 Contratación, Presupuestos y Compra TIC: ejecución presupuestaria y anticipos de caja fija; programa A1 tema 12 y sin equivalente A2.',
  5528: 'ITIC Academy 2026, bloques 01 Constitución, Estado y AGE y 05 Contratación, Presupuestos y Compra TIC: distribución constitucional de funciones y elaboración de los PGE; A1 temas 1/12, con relación A2-I.3 para funciones del Gobierno.',
  5529: 'ITIC Academy 2026, bloque 06 Economía, Sociedad, Empleo y Transformación Digital: transición verde, descarbonización y política climática; programa A1 tema 14 y relación transversal A2-I.4 (Agenda 2030/ODS), sin epígrafe explícito sobre CBAM.',
  5530: 'ITIC Academy 2026, bloque 06 Economía, Sociedad, Empleo y Transformación Digital: mercado de trabajo y políticas públicas de empleo; programa A1 tema 17. No se fuerza equivalencia con A2-I.8, cuyo objeto es el empleo público.'
};
for (const c of changeLog.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  q.clasificacion.bloque_academia = academy[c.id];
  q.clasificacion.nota = 'Clasificación cotejada con los programas oficiales A1/A2 de 2025 y con el temario ITIC Academy 2026; la academia se utiliza como mapa curricular, no como fuente jurídica.';
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankFile, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(log, JSON.stringify(changeLog, null, 2) + '\n');
