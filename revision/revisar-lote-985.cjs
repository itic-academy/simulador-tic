const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');
const ref = (url, referencia) => ({ url, referencia });
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const ce = 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229';
const loepsf = 'https://www.boe.es/buscar/act.php?id=BOE-A-2012-5730';
const lpg = 'https://www.boe.es/buscar/act.php?id=BOE-A-2003-21614';
const l40 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566';
const loig = 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-6115';
const b01 = 'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk';
const b03 = 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const b05 = 'https://docs.google.com/document/d/1Q27FpqRtIq26eYviXIP88A52-YnEJhEG/edit?usp=drivesdk';
const b06 = 'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk';
const b17 = 'https://drive.google.com/file/d/1EXlqFoRj8lRIGxO1CKpDcwXgOMPbe9IH/view?usp=drivesdk';

const records = [
  [5246, ['12'], ['I-1'], ['Ley Orgánica 2/2012', 'artículo 135 CE', 'estabilidad presupuestaria', 'artículo 135.5'], [
    ref(ce, 'Constitución Española, art. 135.5, texto consolidado BOE: ordena que una ley orgánica desarrolle los principios del artículo y la participación de los órganos de coordinación fiscal; fija además el contenido mínimo sobre déficit, deuda, desviaciones y responsabilidad.'),
    ref(loepsf, 'Ley Orgánica 2/2012, preámbulo y art. 1, publicación oficial BOE: desarrolla el mandato de estabilidad presupuestaria del art. 135 CE y regula los principios y procedimientos de estabilidad y sostenibilidad financiera.'),
    ref('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2011-15210', 'Reforma constitucional de 27-09-2011, BOE-A-2011-15210: incorpora el apartado 5 al art. 135 y encomienda su desarrollo a ley orgánica; la disposición adicional única regula la entrada en vigor diferida de determinados límites, no es el título habilitante de la LO 2/2012.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 12: Presupuestos Generales del Estado, estabilidad y control presupuestario.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema I.1: Constitución Española; el artículo 135 pertenece a ese encuadre constitucional general.'),
    ref(b01, 'ITIC Academy, bloque 01 «Constitución, organización del Estado y AGE», actualización 2026: artículo 135 CE y su reforma; se contrasta el mandato orgánico con el texto oficial del apartado 5.'),
    ref(b05, 'ITIC Academy, tema 012 «Presupuestos», versión 3.2: LO 2/2012 (LOEPSF) dentro de presupuestos y estabilidad presupuestaria; se separa su objeto material del título constitucional preciso del art. 135.5.')
  ], null, 'La base constitucional específica es el artículo 135.5 CE, que ordena desarrollar mediante ley orgánica los principios del artículo; la LO 2/2012 declara desarrollar ese mandato. La opción antigua citaba como artículo 135.2 una regla preconstitucionalmente numerada sobre pago de deuda, y la disposición adicional única de la reforma sólo fijó la aplicación temporal de ciertos límites. Se reescribe la opción D para citar el mandato vigente exacto.', 'corregida'],
  [5247, ['12'], [], ['Presupuestos Generales del Estado', 'Ley 47/2003', 'artículo 32', 'expresión cifrada conjunta sistemática'], [
    ref(lpg, 'Ley 47/2003, General Presupuestaria, art. 32, texto consolidado BOE: define los PGE literalmente como expresión cifrada, conjunta y sistemática de derechos y obligaciones a liquidar durante el ejercicio.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 12: Presupuestos Generales del Estado, estructura, ejecución y control.'),
    ref(b05, 'ITIC Academy, tema 012 «Presupuestos», versión 3.2: definición legal de los Presupuestos Generales del Estado y referencia a la Ley 47/2003, art. 32.')
  ], null, 'El art. 32 LGP contiene las tres características incluidas en las respuestas: expresión cifrada, conjunta y sistemática. La opción «Todas son correctas» es, por tanto, la única válida. No se asigna tema A2 específico porque el programa A2 vigente no incluye un epígrafe general de PGE/LGP.', 'vigente'],
  [5248, ['13'], ['I-8'], ['Ley 40/2015', 'convenios', 'artículos 47–53', 'régimen jurídico del sector público'], [
    ref(l40, 'Ley 40/2015, título preliminar, capítulo VI («De los convenios»), arts. 47–53, texto consolidado BOE: regula definición/tipos, requisitos, eficacia, duración, extinción y control de convenios del sector público.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 13: convenios, encargos a medios propios y subvenciones públicas.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema I.8: Ley de Régimen Jurídico del Sector Público.'),
    ref(b03, 'ITIC Academy, bloque 03 «Régimen jurídico y procedimiento administrativo», versión 2026.1 accesible en Drive: convenios bajo Ley 40/2015, con sus límites y diferenciación de los contratos.')
  ], null, 'El régimen general de los convenios del sector público está en el capítulo VI del título preliminar de la Ley 40/2015 (arts. 47–53). La Ley 39/2015 regula procedimiento administrativo común y la Ley 9/2017 los contratos públicos; no sustituyen ese régimen de convenios.', 'vigente'],
  [5249, ['16'], ['I-5'], ['Ley Orgánica 3/2007', 'Título II', 'políticas públicas para la igualdad', 'igualdad de género'], [
    ref(loig, 'Ley Orgánica 3/2007, título II, BOE: su rúbrica es «Políticas públicas para la igualdad»; incluye principios generales y acción administrativa para la igualdad.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 16: estructura social, políticas de igualdad de género, igualdad de trato, discapacidad y dependencia.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema I.5: políticas de igualdad y contra la violencia de género, igualdad de trato, discapacidad y dependencia.'),
    ref(b06, 'ITIC Academy, bloque 06 «Economía, sociedad, empleo y transformación digital», actualización 2026: políticas públicas de igualdad dentro de A1-16 y A2-I.5.')
  ], null, 'El título II de la Ley Orgánica 3/2007 se denomina «Políticas públicas para la igualdad». «El principio de igualdad y la tutela contra la discriminación» corresponde al título I, mientras que el derecho al trabajo en igualdad de oportunidades se desarrolla en el título IV.', 'vigente'],
  [5250, ['17'], [], ['EPA', 'INE', 'muestra', '46.000 viviendas', 'mercado de trabajo'], [
    ref('https://www.ine.es/dyngs/INEbase/operacion.htm?c=Estadistica_C&cid=1254736176918&idp=1254735976595&menu=faq', 'INE, preguntas frecuentes oficiales de la EPA, consultadas el 12-11-2026: la muestra efectiva es de unos 46.000 hogares por trimestre, aproximadamente 110.000 personas; cada hogar permanece seis trimestres consecutivos.'),
    ref('https://www.ine.es/dyngs/Prensa/EPA1T26.htm?print=1', 'INE, nota metodológica EPA 1T 2026: desde 3T 2025, tras finalizar la muestra adicional gallega, alrededor de 46.000 viviendas y 110.000 personas de muestra efectiva.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 17: mercado de trabajo, principales magnitudes y políticas de empleo.'),
    ref(b06, 'ITIC Academy, bloque 06 «Economía, sociedad, empleo y transformación digital», actualización 2026: incluye A1-17 y la EPA entre las fuentes del mercado laboral.'),
    ref(b17, 'ITIC Academy, Tema 017 «Mercado de trabajo», versión 1.3 accesible en Drive: en su apartado metodológico afirma 65.000 viviendas teóricas por trimestre. Esa cifra describía el diseño anterior; se contrasta con la actualización metodológica del INE desde 3T 2025, que fija unas 46.000 viviendas efectivas tras retirar la muestra adicional de Galicia.')
  ], null, 'La cifra del reactivo quedó obsoleta. La EPA ya no usa una muestra efectiva de 65.000 hogares por trimestre: desde el tercer trimestre de 2025, al finalizar la muestra adicional de Galicia, el INE informa de unas 46.000 viviendas y 110.000 personas. Se actualiza la opción correcta con esa cifra y se conserva el historial mediante el registro de cambios. El material Academy Tema 017 consultado aún contiene los 65.000 de su metodología anterior; se señala la discrepancia y prevalece la actualización oficial del INE.', 'corregida']
];

const edits = {
  5246: {
    texto: 'La Ley Orgánica 2/2012, de estabilidad presupuestaria y sostenibilidad financiera, desarrolla el mandato constitucional previsto en:',
    opciones: [
      'El artículo 131 CE, que permite al Estado planificar la actividad económica general.',
      'El artículo 134.1 CE, sobre elaboración y aprobación de los Presupuestos Generales del Estado.',
      'La disposición adicional única de la reforma del artículo 135 CE, que fijó la entrada en vigor diferida de ciertos límites.',
      'El artículo 135.5 CE, que encomienda a una ley orgánica desarrollar los principios de estabilidad y sostenibilidad presupuestarias.'
    ],
    respuesta_correcta: 3,
    comentarios: 'La LO 2/2012 desarrolla el mandato del art. 135.5 CE. La disposición adicional única de la reforma de 2011 regula la aplicación temporal de algunos límites, y el antiguo art. 135.2 no es el apartado habilitante.'
  },
  5247: {
    texto: 'Según el artículo 32 de la Ley General Presupuestaria, los Presupuestos Generales del Estado constituyen la expresión:',
    comentarios: 'El art. 32 de la Ley 47/2003 dice que los PGE son la expresión cifrada, conjunta y sistemática de derechos y obligaciones a liquidar durante el ejercicio; por ello, las tres primeras opciones son ciertas.'
  },
  5248: {
    texto: '¿Qué ley regula, con carácter general, los convenios suscritos por las Administraciones Públicas y el sector público institucional?',
    comentarios: 'La Ley 40/2015 regula los convenios del sector público en su título preliminar, capítulo VI, arts. 47–53. No deben confundirse con contratos sujetos a la Ley 9/2017.'
  },
  5249: {
    comentarios: 'El título II de la LO 3/2007 se titula «Políticas públicas para la igualdad». El título I trata el principio de igualdad y la tutela contra la discriminación.'
  },
  5250: {
    texto: 'Según la metodología vigente del INE desde el tercer trimestre de 2025, ¿de qué tamaño es aproximadamente la muestra efectiva trimestral de la Encuesta de Población Activa (EPA)?',
    opciones: [
      'Unas 46.000 viviendas u hogares al trimestre (alrededor de 110.000 personas).',
      'Unas 100.000 familias al trimestre.',
      'Unas 65.000 familias al semestre.',
      'Unas 100.000 familias al año.'
    ],
    respuesta_correcta: 0,
    comentarios: 'Desde 3T 2025 el INE publica una muestra efectiva de unas 46.000 viviendas y 110.000 personas por trimestre, al finalizar la muestra adicional de Galicia. Las 65.000 viviendas correspondían a la muestra teórica bajo la metodología anterior.'
  }
};

if (!fs.existsSync(path.join(__dirname, 'cambios-lote-985.json'))) {
  aplicar({ numero: '985', fecha: '2026-11-12', records, edits });
}

const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-985.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5246: ['ITIC Academy, bloque 01 «Constitución, organización del Estado y AGE», actualización 2026, art. 135 CE; y tema 012 «Presupuestos», versión 3.2, LO 2/2012/LOEPSF.', 'Cotejo A1-12/A2-I.1: estabilidad presupuestaria en presupuestos y mandato constitucional general.'],
  5247: ['ITIC Academy, tema 012 «Presupuestos», versión 3.2, apartado PGE/art. 32 LGP: definición como expresión cifrada, conjunta y sistemática.', 'Cotejo directo A1-12. El programa A2 vigente no contiene un epígrafe específico de PGE/LGP.'],
  5248: ['ITIC Academy, bloque 03 «Régimen jurídico y procedimiento administrativo», versión 2026.1: convenios de la Ley 40/2015 y diferencia frente a contratos.', 'Cotejo A1-13/A2-I.8.'],
  5249: ['ITIC Academy, bloque 06 «Economía, sociedad, empleo y transformación digital», actualización 2026: políticas públicas de igualdad.', 'Cotejo A1-16/A2-I.5.'],
  5250: ['ITIC Academy, bloque 06 «Economía, sociedad, empleo y transformación digital», actualización 2026: tema A1-17/mercado de trabajo y la EPA como fuente estadística; el Tema 017 v1.3 en Drive describe la metodología anterior (65.000 viviendas teóricas).', 'Cotejo A1-17. La cifra actual se contrasta con INE desde 3T 2025: ~46.000 viviendas/110.000 personas efectivas; no se asigna A2 porque el programa A2 2025 carece de tema de mercado laboral/estadística macroeconómica.']
};
const reason = 'Cotejo curricular individual con el temario ITIC Academy accesible en Drive y los programas oficiales A1/A2 de 2025.';
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
console.log('Lote 985 enriquecido con cotejo curricular y trazabilidad de las cinco preguntas.');
