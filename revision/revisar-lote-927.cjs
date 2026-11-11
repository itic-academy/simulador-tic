const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const ley40 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566&p=20260929&tn=1';
const ley39 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565&p=20261001&tn=1';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy = 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const refs = entries => entries.map(([url, referencia]) => ({ url, referencia }));

const records = [
  [4956, ['8'], ['I-8'], ['Ley 40/2015', 'potestad sancionadora', 'legalidad', 'irretroactividad', 'tipicidad', 'responsabilidad', 'proporcionalidad', 'prescripción', 'concurrencia'], refs([
    [ley40, 'Ley 40/2015, texto consolidado BOE, arts. 25–31: legalidad, irretroactividad, tipicidad, responsabilidad, proporcionalidad, prescripción y concurrencia de sanciones. El art. 27 regula la tipicidad; objetividad, eficacia y simplicidad no sustituyen a esos principios.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 8: régimen jurídico de las Administraciones públicas.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema I.8: Leyes 39/2015 y 40/2015 y el texto refundido del EBEP.'],
    [academy, 'ITIC Academy 2026, bloque 03, secciones 2.5 y 3.10: potestad sancionadora y especialidades del procedimiento sancionador; cotejo curricular.']
  ]), null,
  'Respuesta B. La Ley 40/2015 regula sucesivamente los principios de legalidad, irretroactividad, tipicidad, responsabilidad, proporcionalidad, prescripción y concurrencia de sanciones (arts. 25 a 31). La opción elegida es la única que recoge la lista sin añadir “objetividad”, “eficacia” o “simplicidad” como principios sancionadores.', 'vigente'],
  [4957, ['8'], ['I-8'], ['Ley 40/2015', 'artículo 17', 'órganos colegiados', 'constitución', 'quórum'], refs([
    [ley40, 'Ley 40/2015, texto consolidado BOE, art. 17.1–2: las sesiones pueden ser presenciales o a distancia; para la válida constitución asisten el Presidente y Secretario (o suplentes) y la mitad, al menos, de sus miembros.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 8: régimen jurídico de las Administraciones públicas.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema I.8: régimen jurídico de las Administraciones públicas.'],
    [academy, 'ITIC Academy 2026, bloque 03, sección 2.4: órganos colegiados, convocatorias y sesiones; cotejo curricular.']
  ]), null,
  'Respuesta C. La regla general del artículo 17.2 exige la asistencia, presencial o a distancia, del Presidente y Secretario o de quienes les suplan, y de la mitad, al menos, de los miembros. “Más de la mitad” eleva indebidamente el quórum; la ley permite sesiones a distancia salvo excepción expresa y excepcional en el reglamento interno.', 'vigente'],
  [4958, ['8'], ['I-8'], ['Ley 39/2015', 'artículo 76', 'alegaciones', 'trámite de audiencia', 'instrucción'], refs([
    [ley39, 'Ley 39/2015, texto consolidado BOE, art. 76.1: las alegaciones y documentos o elementos de juicio pueden presentarse en cualquier momento del procedimiento anterior al trámite de audiencia. El apartado 2 regula separadamente la alegación de defectos de tramitación.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 8: procedimiento administrativo y relación de los ciudadanos con las Administraciones públicas.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema I.8: procedimiento administrativo común, fases y garantías.'],
    [academy, 'ITIC Academy 2026, bloque 03, sección 3.8, fases del procedimiento y trámite de audiencia; cotejo curricular.']
  ]), null,
  'Respuesta C. El artículo 76.1 permite formular alegaciones y aportar documentos u otros elementos de juicio hasta antes del trámite de audiencia. El apartado 2 permite alegar defectos de tramitación “en todo momento”, pero se refiere a otra clase de alegación; por ello se delimita el enunciado al apartado 1.', 'corregida'],
  [4959, ['8'], ['I-8'], ['Ley 39/2015', 'artículo 39', 'actos administrativos', 'validez', 'eficacia'], refs([
    [ley39, 'Ley 39/2015, texto consolidado BOE, art. 39.1–3: los actos se presumen válidos y producen efectos desde la fecha en que se dictan, salvo que dispongan otra cosa; la eficacia puede demorarse por su contenido o quedar supeditada a notificación, publicación o aprobación superior.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 8: régimen jurídico y procedimiento administrativo.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema I.8: procedimiento administrativo común y sus fases.'],
    [academy, 'ITIC Academy 2026, bloque 03, sección 3.6: acto administrativo, requisitos y eficacia; cotejo curricular.']
  ]), null,
  'Respuesta C. La regla general del artículo 39.1 es eficacia desde la fecha en que se dicta el acto, salvo disposición distinta. El artículo 39.2 contempla supuestos de eficacia demorada (por el contenido o por notificación, publicación o aprobación superior), lo que descarta “en todo caso”.', 'vigente'],
  [4960, ['9'], ['I-8'], ['Ley 39/2015', 'artículo 124', 'recurso potestativo de reposición', 'plazo', 'acto expreso'], refs([
    [ley39, 'Ley 39/2015, texto consolidado BOE, art. 124.1–2: un mes para interponer reposición contra acto expreso; contra acto presunto, en cualquier momento desde el día siguiente a aquel en que se produzca el acto presunto; un mes como plazo máximo para resolver y notificar.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 9: revisión de actos y recursos administrativos.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema I.8: procedimiento común y recursos administrativos.'],
    [academy, 'ITIC Academy 2026, bloque 03, sección 3.11 y tabla de plazos: recursos administrativos; cotejo curricular.']
  ]), null,
  'Respuesta B. Si el acto es expreso, el plazo de interposición es un mes. Para actos presuntos la ley permite recurrir en cualquier momento a partir del día siguiente a producirse el acto presunto; se delimita el enunciado al acto expreso para que exista una sola respuesta inequívoca.', 'corregida']
];

const edits = {
  4958: {
    texto: 'Conforme al artículo 76.1 de la Ley 39/2015, ¿hasta qué momento pueden las personas interesadas formular alegaciones y aportar documentos u otros elementos de juicio?',
    opciones: [
      'En cualquier momento, incluso después del trámite de audiencia.',
      'Solo antes del acuerdo de iniciación del procedimiento.',
      'En cualquier momento del procedimiento anterior al trámite de audiencia.',
      'Únicamente después del trámite de información pública.'
    ],
    respuesta_correcta: 2
  },
  4960: {
    texto: 'Si el acto recurrido es expreso, ¿cuál es el plazo de interposición del recurso potestativo de reposición según el artículo 124.1 de la Ley 39/2015?',
    opciones: [
      'Dos meses.',
      'Un mes.',
      'Tres meses.',
      'Seis meses.'
    ],
    respuesta_correcta: 1
  }
};

aplicar({ numero: '927', fecha: '2026-11-11', records, edits });

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-927.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const detail = `ITIC Academy 2026, bloque 03, versión 2026.2 (actualizada el 01/10/2026): sección ${change.id === 4956 ? '2.5 (principios de la potestad sancionadora)' : change.id === 4957 ? '2.4 (órganos colegiados)' : change.id === 4958 ? '3.8 (instrucción y alegaciones)' : change.id === 4959 ? '3.6 (acto administrativo y eficacia)' : '3.11 (recursos administrativos)'}; cotejo curricular.`;
  q.clasificacion.bloque_academia = `${detail} Se cita como contraste curricular, no como fuente primaria.`;
  q.clasificacion.nota = `${q.revision.estado}. ${detail} El fundamento normativo se cita en revision.fuentes y en el registro del lote.`;
  q.revision.observaciones += ` ${detail}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: academy, referencia: detail });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy añadido al lote 927.');
