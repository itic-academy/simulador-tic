const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-938.json');
const correctionPath = path.join(__dirname, 'correcciones-lote-938.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
if (fs.existsSync(correctionPath)) throw new Error('La rectificación curricular ya está registrada.');

function update(id, expected, a1, a2, note, text, sourceUpdates) {
  const q = bank.preguntas.find(item => item.id === id);
  const row = log.cambios.find(item => item.id === id);
  if (!q || !row || JSON.stringify(q.clasificacion.A1) !== JSON.stringify(expected.A1) ||
      JSON.stringify(q.clasificacion.A2) !== JSON.stringify(expected.A2)) {
    throw new Error(`El estado previo inesperado para ${id} impide aplicar la corrección.`);
  }
  const previous = { texto: q.texto, A1: [...q.clasificacion.A1], A2: [...q.clasificacion.A2],
    nota: q.clasificacion.nota, observaciones: q.revision.observaciones,
    fuentes: structuredClone(q.revision.fuentes) };
  q.clasificacion.A1 = a1;
  q.clasificacion.A2 = a2;
  q.clasificacion.nota = `${q.revision.estado}. ${note} La clasificación temática expresa correspondencia curricular, no una equivalencia normativa literal. ITIC Academy se usa como cotejo curricular, no como fuente primaria.`;
  q.revision.observaciones = text;
  q.comentarios = text;
  for (const change of sourceUpdates) {
    const found = q.revision.fuentes.find(item => item.url === change.url);
    if (change.remove) {
      q.revision.fuentes = q.revision.fuentes.filter(item => item.url !== change.url);
    } else if (found) {
      found.referencia = change.referencia;
    } else {
      q.revision.fuentes.push({ url: change.url, referencia: change.referencia });
    }
  }
  if (id === 5011) q.texto = 'De acuerdo con la distinción entre liderazgo transaccional y transformacional de James MacGregor Burns (1978), el liderazgo transaccional:';
  row.actualizada = structuredClone(q);
  return { id, clasificacionAnterior: previous, clasificacionActual: structuredClone(q.clasificacion),
    explicacion: note };
}

const oralHistory = 'https://tobiasleadershipcenter.iu.edu/research/oral-history/audio-transcripts/macgregor-burns-james.html';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy = 'https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk';

const corrections = [
  update(5011, { A1: ['A1-21'], A2: ['A2-I-8'] }, ['A1-21'], [],
    'La distinción transaccional/transformacional de Burns se ubica en A1-21 (liderazgo); A2 no contiene un epígrafe específico de liderazgo. También se corrige la atribución del enunciado: la clasificación transaccional y transformacional corresponde a James MacGregor Burns, no a Douglas McGregor.',
    'Respuesta B. Enunciado corregido: la distinción entre liderazgo transaccional y transformacional se atribuye a James MacGregor Burns (1978), no a McGregor. Lo transaccional se basa en intercambios; lo transformacional eleva motivaciones y valores. A1-21; sin clasificación A2 específica. La clave se conserva y la atribución y clasificación se rectifican.',
    [
      { url: a2, remove: true },
      { url: oralHistory, referencia: 'Tobias Leadership Center, Indiana University, entrevista de historia oral a James MacGregor Burns: el propio Burns explica la diferencia entre el líder transformador y el transaccional; fuente primaria testimonial.' },
      { url: academy, referencia: 'ITIC Academy, bloque 07, versión 2026.2 (01/10/2026), liderazgo y gestión de personas; corresponde a A1-21. No hay epígrafe A2 específico de liderazgo.' }
    ]),
  update(5015, { A1: ['A1-24'], A2: ['A2-I-8'] }, ['A1-25'], ['A2-I-4'],
    'La clasificación se ajusta a los programas oficiales: A1-25 trata gobernanza, buen gobierno y transparencia; A2-I.4 trata la Ley 19/2013 de transparencia y buen gobierno. Se retira la asociación automática a empleo público ordinario (A1-24/A2-I.8).',
    'Respuesta D. El artículo 1.2 de la Ley 3/2015 enumera las categorías de alto cargo en la AGE; ser jefe de Gabinete ministerial no basta por sí solo para figurar en esa relación. Clasificación curricular: A1-25 y A2-I.4 por la dimensión de buen gobierno; no se presenta como equivalencia normativa literal.',
    [
      { url: a1, referencia: 'Convocatoria oficial A1 GSI 2025, anexo I, tema 25: gobernanza pública, gobierno abierto, buen gobierno y marco jurídico de transparencia; correspondencia curricular del régimen de altos cargos.' },
      { url: a2, referencia: 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, I.4: Ley 19/2013 de transparencia, acceso a la información pública y buen gobierno; correspondencia curricular por la dimensión de buen gobierno.' },
      { url: academy, referencia: 'ITIC Academy, bloque 07, versión 2026.2 (01/10/2026), régimen de altos cargos y buen gobierno; cotejo curricular.' }
    ])
];

const record = {
  fecha: '2026-11-11',
  lote: 938,
  motivo: 'Rectificación de atribución bibliográfica y correspondencia curricular después de cotejar directamente las convocatorias A1/A2 de 2025; sin añadir nuevas preguntas al recuento de revisión.',
  cambios: corrections
};
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(correctionPath, JSON.stringify(record, null, 2) + '\n');
console.log('Corrección curricular y de atribución del lote 938 registrada; no altera el total de preguntas examinadas.');
