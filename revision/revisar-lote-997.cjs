const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');
const ref = (url, referencia) => ({ url, referencia });

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const constitution = 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229';
const court = 'https://curia.europa.eu/site/jcms/d2_5391/es/tribunal-de-justicia';
const parliamentPlenary = 'https://www.europarl.europa.eu/about-parliament/en/organisation-and-rules/how-plenary-works';
const parliamentRules = 'https://www.europarl.europa.eu/doceo/document/RULES-10-2025-01-20_ES.pdf';
const law39 = 'https://www.boe.es/eli/es/l/2015/10/01/39/con';
const academyConstitution = 'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk';
const academyEU = 'https://drive.google.com/file/d/1KTz7CNz88u_4zyVLC2oYQBnmJRHIG7J7/view?usp=drivesdk';
const academyAdmin = 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';

const records = [
  [5306, ['3'], [], ['Constitución Española', 'competencias del Estado', 'investigación científica y técnica', 'artículo 149.1.15'], [
    ref(constitution, 'Constitución Española, art. 149.1.15: atribuye al Estado competencia exclusiva sobre el fomento y coordinación general de la investigación científica y técnica. El art. 148.1.17 permite a las comunidades autónomas fomentar la cultura y la investigación en su ámbito, sin alterar la competencia estatal básica de coordinación general.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 3: Comunidades Autónomas, organización política y administrativa y regulación constitucional de la Administración local.'),
    ref(academyConstitution, 'ITIC Academy, bloque 01 «Constitución, organización del Estado y AGE», edición 2026.2, apartados sobre organización territorial y competencias constitucionales; cotejo curricular.'),
  ], null, 'La respuesta B es correcta: el artículo 149.1.15 reserva al Estado el fomento y la coordinación general de la investigación científica y técnica. Las otras alternativas corresponden a ámbitos que pueden asumir las comunidades autónomas: montes (art. 148.1.8), ordenación del territorio, urbanismo y vivienda (art. 148.1.3) y gestión ambiental (art. 148.1.9), sin perjuicio de la legislación básica estatal sobre protección del medio ambiente. Se especifica «Estado» con mayúscula y el artículo citado.', 'vigente'],
  [5307, ['3'], [], ['Estatutos de autonomía', 'Constitución Española', 'artículo 147.2', 'contenido mínimo'], [
    ref(constitution, 'Constitución Española, art. 147.2: los Estatutos deben contener la denominación de la comunidad, la delimitación de su territorio, la denominación, organización y sede de sus instituciones propias, y las competencias asumidas y bases para el traspaso de servicios. No exige enumerar todos sus municipios.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 3: Comunidades Autónomas y organización territorial constitucional.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema I.1: Constitución Española de 1978; cotejo del fundamento constitucional, sin atribuir al programa A2 un epígrafe autónomo sobre Estatutos.'),
    ref(academyConstitution, 'ITIC Academy, bloque 01 «Constitución, organización del Estado y AGE», edición 2026.2, tema A1.3 sobre Comunidades Autónomas y organización territorial.'),
  ], null, 'La respuesta C es falsa: el artículo 147.2 CE exige delimitar el territorio de la comunidad, pero no incluir una relación de todos sus municipios. Las restantes opciones reproducen los otros contenidos mínimos del Estatuto. Se sustituye «delimitación de las provincias que la integran», expresión que podía confundirse con la delimitación territorial constitucionalmente exigida, por una alternativa inequívocamente ajena al artículo.', 'corregida'],
  [5308, ['5'], [], ['Unión Europea', 'Tribunal de Justicia de la Unión Europea', 'Jueces', 'Abogados Generales'], [
    ref(court, 'Tribunal de Justicia de la Unión Europea, página institucional «Tribunal de Justicia»: el Tribunal de Justicia cuenta con 27 jueces, uno por Estado miembro, y 11 abogados generales. Se distingue del Tribunal General, que es el otro órgano jurisdiccional de la institución TJUE.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 5: instituciones de la Unión Europea, incluido el Tribunal de Justicia de la Unión Europea.'),
    ref(academyEU, 'ITIC Academy, bloque 02 «La Unión Europea», edición 2026.2 (01/10/2026), instituciones de la Unión y epígrafe del Tribunal de Justicia; el programa A2 no incluye este tema.'),
  ], null, 'La respuesta C es correcta para el Tribunal de Justicia: 27 jueces y 11 abogados generales. El original usaba «Tribunal de Justicia Europeo», nombre impreciso que podía confundirse con la institución completa Tribunal de Justicia de la Unión Europea (integrada por Tribunal de Justicia y Tribunal General); se precisa el órgano al que se refiere la composición.', 'corregida'],
  [5309, ['5'], [], ['Unión Europea', 'Parlamento Europeo', 'quórum', 'Reglamento interno'], [
    ref(parliamentPlenary, 'Parlamento Europeo, «How plenary works»: indica que existe quórum cuando está presente en el hemiciclo un tercio de los miembros que componen el Parlamento. Es una página institucional vigente sobre el funcionamiento del Pleno.'),
    ref(parliamentRules, 'Parlamento Europeo, Reglamento interno de la décima legislatura (edición 20/01/2025), regla 185, «Quorum»: el quórum general es un tercio de los miembros; también regula la solicitud de comprobación y el umbral de 39 miembros. El quórum no impide que el Parlamento delibere, fije agenda o apruebe actas independientemente del número presente.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 5: Parlamento Europeo como institución de la Unión Europea.'),
    ref(academyEU, 'ITIC Academy, bloque 02 «La Unión Europea», edición 2026.2 (01/10/2026), Parlamento Europeo e instituciones; cotejo curricular, sin equivalencia nominal en A2.'),
  ], null, 'La respuesta D (un tercio de los miembros que componen el Parlamento) es correcta como umbral general de quórum del Pleno, según la regla 185 del Reglamento interno vigente de la décima legislatura. La regla añade matices para que se compruebe el quórum a efectos de una votación: la solicitud debe realizarse en las condiciones previstas y el Presidente puede declarar que no hay quórum si hay menos de 39 miembros. Se corrige «Diputados» por «miembros» y la gramática del enunciado.', 'corregida'],
  [5310, ['8'], ['I-8'], ['Ley 39/2015', 'procedimiento administrativo', 'ejecución forzosa', 'ejecución subsidiaria', 'artículo 100'], [
    ref(law39, 'Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común, texto consolidado del BOE, art. 100.1.b: uno de los medios de ejecución forzosa es la ejecución subsidiaria. El elenco completo es apremio sobre el patrimonio, ejecución subsidiaria, multa coercitiva y compulsión sobre las personas.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 8: régimen jurídico de las Administraciones públicas y procedimiento administrativo.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema I.8: Ley del Procedimiento Administrativo Común y régimen jurídico del sector público.'),
    ref(academyAdmin, 'ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», edición 2026.2 (01/10/2026), Ley 39/2015 y procedimiento administrativo, dentro del contenido A1.8/A2.I.8.'),
  ], null, 'La respuesta D es correcta: la ejecución subsidiaria figura en el artículo 100.1.b de la Ley 39/2015. Las denominaciones legales de los otros medios son «apremio sobre el patrimonio», «multa coercitiva» y «compulsión sobre las personas»; «compulsión tributaria», «multa sobre el patrimonio» y «apremio coercitivo» no son los términos del precepto. Se corrigen la mayúscula impropia y la construcción gramatical.', 'corregida']
];

const edits = {
  5306: { texto: 'Conforme al artículo 149.1 de la Constitución Española, el Estado tiene competencia exclusiva sobre:', comentarios: 'La respuesta B es correcta: el artículo 149.1.15 reserva al Estado el fomento y la coordinación general de la investigación científica y técnica. Las otras alternativas corresponden a ámbitos que pueden asumir las comunidades autónomas: montes (art. 148.1.8), ordenación del territorio, urbanismo y vivienda (art. 148.1.3) y gestión ambiental (art. 148.1.9), sin perjuicio de la legislación básica estatal sobre protección del medio ambiente. Se especifica «Estado» con mayúscula y el artículo citado.' },
  5307: { texto: 'Señale la respuesta FALSA. De acuerdo con la Constitución, los Estatutos de Autonomía deberán contener:', opciones: ['Las competencias asumidas.', 'La denominación, organización y sede de las instituciones autónomas propias.', 'La relación de todos los municipios que integran la Comunidad Autónoma.', 'La denominación de la Comunidad Autónoma.'], respuesta_correcta: 2, comentarios: 'La respuesta C es falsa: el artículo 147.2 CE exige delimitar el territorio de la comunidad, pero no incluir una relación de todos sus municipios. Las restantes opciones reproducen los otros contenidos mínimos del Estatuto. Se sustituye «delimitación de las provincias que la integran», expresión que podía confundirse con la delimitación territorial constitucionalmente exigida, por una alternativa inequívocamente ajena al artículo.' },
  5308: { texto: 'El Tribunal de Justicia de la Unión Europea, en su formación de Tribunal de Justicia, está compuesto por:', comentarios: 'La respuesta C es correcta para el Tribunal de Justicia: 27 jueces y 11 abogados generales. El original usaba «Tribunal de Justicia Europeo», nombre impreciso que podía confundirse con la institución completa Tribunal de Justicia de la Unión Europea (integrada por Tribunal de Justicia y Tribunal General); se precisa el órgano al que se refiere la composición.' },
  5309: { texto: 'Conforme al Reglamento interno del Parlamento Europeo, ¿cuándo existe quórum en el Pleno?', opciones: ['Cuando está presente una cuarta parte de los miembros que componen el Parlamento.', 'Cuando está presente una quinta parte de los miembros que componen el Parlamento.', 'Cuando está presente la mitad de los miembros que componen el Parlamento.', 'Cuando está presente un tercio de los miembros que componen el Parlamento.'], respuesta_correcta: 3, comentarios: 'La respuesta D (un tercio de los miembros que componen el Parlamento) es correcta como umbral general de quórum del Pleno, según la regla 185 del Reglamento interno vigente de la décima legislatura. La regla añade matices para que se compruebe el quórum a efectos de una votación: la solicitud debe realizarse en las condiciones previstas y el Presidente puede declarar que no hay quórum si hay menos de 39 miembros. Se corrige «Diputados» por «miembros» y la gramática del enunciado.' },
  5310: { texto: 'Según el artículo 100.1 de la Ley 39/2015, ¿cuál es uno de los medios de ejecución forzosa de los actos administrativos?', comentarios: 'La respuesta D es correcta: la ejecución subsidiaria figura en el artículo 100.1.b de la Ley 39/2015. Las denominaciones legales de los otros medios son «apremio sobre el patrimonio», «multa coercitiva» y «compulsión sobre las personas»; «compulsión tributaria», «multa sobre el patrimonio» y «apremio coercitivo» no son los términos del precepto. Se corrigen la mayúscula impropia y la construcción gramatical.' }
};

if (!fs.existsSync(path.join(__dirname, 'cambios-lote-997.json'))) {
  aplicar({ numero: '997', fecha: '2026-11-12', records, edits });
}

const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-997.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5306: ['ITIC Academy, bloque 01 «Constitución, organización del Estado y AGE», edición 2026.2 (01/10/2026), organización territorial y competencias constitucionales.', 'Cotejo con el tema A1.3. La atribución concreta se contrasta con los artículos 148 y 149 de la Constitución, que prevalecen como fuente jurídica.'],
  5307: ['ITIC Academy, bloque 01 «Constitución, organización del Estado y AGE», edición 2026.2 (01/10/2026), A1.3: Comunidades Autónomas y organización territorial constitucional.', 'Cotejo de contenido constitucional con A1.3 y referencia general a Constitución A2.I.1; el artículo 147.2 CE determina la lista jurídica exacta de contenidos mínimos.'],
  5308: ['ITIC Academy, bloque 02 «La Unión Europea», edición 2026.2 (01/10/2026), instituciones europeas y Tribunal de Justicia.', 'El propio temario del bloque identifica cobertura A1.5 y señala que el programa A2 no incluye el tema de la Unión Europea.'],
  5309: ['ITIC Academy, bloque 02 «La Unión Europea», edición 2026.2 (01/10/2026), instituciones europeas y Parlamento Europeo.', 'El propio temario del bloque identifica cobertura A1.5 y señala que el programa A2 no incluye el tema de la Unión Europea. El quórum se coteja con la regla interna vigente del Parlamento.'],
  5310: ['ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», edición 2026.2 (01/10/2026), Ley 39/2015 y procedimiento administrativo.', 'Cotejo con A1.8 y A2.I.8; la respuesta y terminología exactas se verifican contra el artículo 100 consolidado de la Ley 39/2015.']
};
const reason = 'Cotejo curricular individual con ITIC Academy en Drive y los programas oficiales A1/A2.';
for (const [key, [block, note]] of Object.entries(academy)) {
  const id = Number(key), q = bank.preguntas.find(x => x.id === id), change = log.cambios.find(x => x.id === id);
  if (!q || !change) throw new Error(`Falta registro de ${id}`);
  const before = { bloque_academia: q.clasificacion.bloque_academia, nota: q.clasificacion.nota };
  q.clasificacion.bloque_academia = block;
  q.clasificacion.nota = note;
  const record = records.find(r => r[0] === id);
  const official = { A1: record[1].map(n => `A1-${n}`), A2: record[2].map(n => `A2-${n}`) };
  if (JSON.stringify(q.clasificacion.A1) !== JSON.stringify(official.A1) || JSON.stringify(q.clasificacion.A2) !== JSON.stringify(official.A2)) {
    const prior = { A1: q.clasificacion.A1, A2: q.clasificacion.A2 };
    q.clasificacion.A1 = official.A1;
    q.clasificacion.A2 = official.A2;
    const corrections = change.correcciones_posteriores || [];
    corrections.push({ fecha: '2026-11-12', motivo: 'Ajuste de correspondencia curricular tras cotejar el programa oficial: el tema A2.I.1 enumera materias constitucionales concretas y no contempla de forma específica las competencias autonómicas ni el contenido mínimo de los Estatutos.', clasificacion_anterior: prior, clasificacion_actualizada: official });
    change.correcciones_posteriores = corrections;
  }
  const later = change.correcciones_posteriores || [];
  if (!later.some(x => x.motivo === reason)) later.push({ fecha: '2026-11-12', motivo: reason, clasificacion_anterior: before, clasificacion_actualizada: { bloque_academia: block, nota: note } });
  change.correcciones_posteriores = later;
  change.actualizada = structuredClone(q);
}
const byId = new Map(log.cambios.map(c => [c.id, c]));
const raw = fs.readFileSync(bankPath, 'utf8');
let replaced = 0;
const output = raw.replace(/^    \{[\s\S]*?^    \}/gm, block => {
  const old = JSON.parse(block), change = byId.get(old.id);
  if (!change) return block;
  replaced++;
  return JSON.stringify(change.actualizada, null, 2).split('\n').map(line => `    ${line}`).join('\n');
});
if (replaced !== 5) throw new Error(`Se esperaban 5 cambios; encontrados ${replaced}`);
JSON.parse(output);
fs.writeFileSync(bankPath, output);
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Lote 997 enriquecido con cotejo curricular y trazabilidad de las cinco preguntas.');
