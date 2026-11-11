const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const ley39 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565';
const ley40 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566';
const ley53 = 'https://www.boe.es/buscar/act.php?id=BOE-A-1985-151';
const losu = 'https://www.boe.es/buscar/act.php?id=BOE-A-2023-7500';
const lopd1999 = 'https://www.boe.es/buscar/act.php?id=BOE-A-1999-23750';
const lo32018 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673';
const gdpr = 'https://eur-lex.europa.eu/eli/reg/2016/679/oj';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academyAdmin = 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const academyPrivacy = 'https://drive.google.com/file/d/11T-TKuGJGXeEKwwODM-FlF8pML3QMh_t/view?usp=drivesdk';
const ref = (url, referencia) => ({ url, referencia });

const records = [
  [5006, ['8'], ['I-8'], ['Ley 39/2015', 'cómputo de plazos', 'días hábiles', 'días inhábiles'], [
    ref(ley39, 'Ley 39/2015, texto consolidado del BOE, art. 30.2: salvo regla distinta de ley o Derecho de la UE, los plazos señalados por días son hábiles y se excluyen sábados, domingos y festivos.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 8: régimen jurídico y procedimiento administrativo.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, I.8: Ley 39/2015 y procedimiento administrativo común.')
  ], null, 'Respuesta A. El artículo 30.2 establece días hábiles por defecto, excluyendo sábados, domingos y festivos. Se mantiene la salvedad del propio precepto: una ley o el Derecho de la Unión pueden fijar otro cómputo. No debe generalizarse esta regla a los plazos fijados en horas o meses.', 'vigente'],
  [5007, ['8', '9'], ['I-8'], ['Ley 39/2015', 'recurso extraordinario de revisión', 'procedencia', 'fondo del asunto'], [
    ref(ley39, 'Ley 39/2015, texto consolidado del BOE, art. 126.2: al resolver el recurso extraordinario de revisión, el órgano se pronuncia tanto sobre su procedencia como, en su caso, sobre el fondo de la cuestión resuelta por el acto recurrido.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, temas 8 (procedimiento administrativo) y 9 (revisión de actos y recursos administrativos).'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, I.8: procedimiento administrativo común.')
  ], null, 'Respuesta D. El artículo 126.2 de la Ley 39/2015 obliga a pronunciarse sobre la procedencia del recurso y, en su caso, también sobre el fondo del asunto resuelto por el acto impugnado; no se limita a un juicio de admisión.', 'vigente'],
  [5008, ['24'], ['I-8'], ['Ley 53/1984', 'incompatibilidades', 'profesor asociado', 'compatibilidad previa', 'empleo público'], [
    ref(ley53, 'Ley 53/1984, texto consolidado del BOE, arts. 3.1 y 4.1: el desempeño de un segundo puesto público exige autorización previa de compatibilidad; esta podrá autorizarse, cumpliendo los demás requisitos, para un puesto docente como profesor universitario asociado con dedicación no superior a tiempo parcial.'),
    ref(losu, 'Ley Orgánica 2/2023, del Sistema Universitario, art. 75.2: el profesorado asociado puede impartir docencia hasta un máximo de 120 horas lectivas por curso académico; el supuesto revisado se limita a 100 horas.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 24: empleo público y Ley de incompatibilidades del personal al servicio de las Administraciones Públicas.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, I.8: régimen jurídico de las Administraciones y texto refundido del EBEP.')
  ], null, 'Respuesta A, pero el original era demasiado concluyente e incompleto: la docencia universitaria no es una exención automática de incompatibilidades. La Ley 53/1984 permite que se autorice la compatibilidad para profesor universitario asociado a tiempo parcial, siempre que se cumplan las restantes exigencias; el segundo puesto público no debe iniciarse antes de obtener la autorización. Se explicita una carga lectiva de 100 horas por curso, dentro del máximo de 120 establecido por la LOSU.', 'corregida'],
  [5009, ['22'], ['I-9'], ['Ley 40/2015', 'sede electrónica', 'artículo 38.3', 'principios de creación'], [
    ref(ley40, 'Ley 40/2015, texto consolidado del BOE, art. 38.3: enumera transparencia, publicidad, responsabilidad, calidad, seguridad, disponibilidad, accesibilidad, neutralidad e interoperabilidad para la creación de sedes electrónicas. «Universalidad» no figura en esa lista.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 22: TIC, sociedad de la información y administración electrónica.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, I.9: sedes electrónicas, acceso y gestión electrónica de procedimientos.')
  ], null, 'Respuesta C: universalidad. Se identifica expresamente el artículo 38.3 de la Ley 40/2015 para precisar el precepto al que se refiere la lista. La norma enumera nueve principios, entre ellos publicidad y responsabilidad, pero no universalidad.', 'corregida'],
  [5010, ['27'], ['I-7'], ['LO 15/1999', 'calidad de los datos', 'tipicidad', 'normativa derogada', 'protección de datos'], [
    ref(lopd1999, 'Ley Orgánica 15/1999, texto del BOE, art. 4: la antigua calidad de los datos comprendía adecuación, pertinencia, no exceso, vinculación a finalidades y exactitud/veracidad; no mencionaba «tipicidad». La propia ficha del BOE marca la norma como derogada.'),
    ref(lo32018, 'Ley Orgánica 3/2018, disposición derogatoria única: deroga la Ley Orgánica 15/1999, con las excepciones transitorias especificadas en la disposición.'),
    ref(gdpr, 'Reglamento (UE) 2016/679, art. 5.1: el régimen actual recoge, entre otros, limitación de la finalidad, minimización y exactitud; no formula la antigua lista de «calidad de los datos» de la LO 15/1999.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 27: régimen jurídico, principios y derechos de protección de datos personales.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, I.7: régimen jurídico y principios de protección de datos personales.')
  ], null, 'Respuesta A (tipicidad), correcta solo si se pregunta por el artículo 4 de la derogada LO 15/1999. Se reforma el enunciado para explicitar esa referencia histórica y se etiqueta como histórica: esa ley está derogada desde el 7 de diciembre de 2018. No se presenta su antigua lista de «calidad de los datos» como formulación vigente; hoy deben estudiarse los principios del art. 5 RGPD y la LO 3/2018.', 'historica']
];

const edits = {
  5008: {
    texto: 'Un funcionario de carrera recibe una oferta para impartir 100 horas lectivas durante el curso como profesor universitario asociado a tiempo parcial, en horario compatible con su jornada en una universidad pública. Según la Ley 53/1984, ¿qué debe hacer antes de iniciar esa actividad?',
    opcion: [0, 'Solicitar y obtener previamente la autorización de compatibilidad; puede concederse para la docencia como profesor asociado a tiempo parcial si se cumplen los demás requisitos legales.']
  },
  5009: { texto: 'Según el artículo 38.3 de la Ley 40/2015, cada Administración Pública determinará las condiciones e instrumentos de creación de las sedes electrónicas con sujeción a ciertos principios. ¿Cuál de los siguientes NO figura en la enumeración?' },
  5010: { texto: 'Según el artículo 4 de la derogada Ley Orgánica 15/1999, sobre calidad de los datos, ¿cuál de los siguientes conceptos NO figuraba entre sus criterios?' }
};

aplicar({ numero: '937', fecha: '2026-11-11', records, edits });

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-937.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5006: ['ITIC Academy, bloque 03 «Actuación administrativa y administración digital», versión 2026.2 (01/10/2026), § 3.5 «Registros, archivo, términos y plazos»; cotejo curricular.', academyAdmin],
  5007: ['ITIC Academy, bloque 03 «Actuación administrativa y administración digital», versión 2026.2 (01/10/2026), procedimiento administrativo y recursos; cotejo curricular.', academyAdmin],
  5008: ['ITIC Academy, bloque 03 «Actuación administrativa y administración digital», versión 2026.2 (01/10/2026), empleo público e incompatibilidades; cotejo curricular.', academyAdmin],
  5009: ['ITIC Academy, bloque 03 «Actuación administrativa y administración digital», versión 2026.2 (01/10/2026), administración electrónica y sedes electrónicas; cotejo curricular.', academyAdmin],
  5010: ['ITIC Academy, bloque 08 «Protección de datos», versión 2026.1 (19/08/2026): advierte que la LO 15/1999 está derogada y que el estudio vigente debe centrarse en RGPD y LO 3/2018; cotejo curricular, no fuente jurídica primaria.', academyPrivacy]
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const [detail, url] = academy[change.id];
  q.clasificacion.bloque_academia = detail;
  q.clasificacion.nota = `${q.revision.estado}. ${detail} La academia se usa como cotejo curricular, no como fuente jurídica primaria.`;
  q.revision.observaciones += ` ${detail} Cotejo curricular, no sustituto de la fuente jurídica primaria.`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: detail });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular de ITIC Academy añadido al lote 937.');
