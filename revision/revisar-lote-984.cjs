const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');
const ref = (url, referencia) => ({ url, referencia });
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const l39 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565';
const l40 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566';
const lpg = 'https://www.boe.es/buscar/act.php?id=BOE-A-2003-21614';
const b03 = 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const b05 = 'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk';

const records = [
  [5241, ['4'], ['I-8'], ['Director general', 'Subsecretario', 'Ley 40/2015', 'órganos directivos'], [
    ref(l40, 'Ley 40/2015, art. 66.1.a), b) y d), texto consolidado BOE: son funciones del Director General proponer y dirigir proyectos, ejercer las competencias de la Dirección General e impulsar/supervisar su gestión ordinaria.'),
    ref(l40, 'Ley 40/2015, art. 63.1.k), texto consolidado BOE: atribuye al Subsecretario solicitar de Hacienda la afectación o arrendamiento de inmuebles para los servicios del Departamento; ese inciso no pertenece al listado del art. 66 de los Directores Generales.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 4: Administración General del Estado y sus órganos centrales.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema I.8: Ley de Régimen Jurídico del Sector Público.'),
    ref(b03, 'ITIC Academy, bloque 03 «Régimen jurídico y procedimiento administrativo», versión accesible en Drive: órganos superiores/directivos y estructura ministerial; las funciones se contrastan artículo por artículo con Ley 40/2015.')
  ], null, 'El artículo 66.1 de la Ley 40/2015 recoge las funciones descritas en A, C y D. La solicitud a Hacienda de afectación o arrendamiento de inmuebles aparece en el art. 63.1.k, dentro de las funciones del Subsecretario. Se conserva el índice B como la opción incorrecta para los Directores Generales; la pregunta se mantiene vigente en ese punto funcional.', 'vigente'],
  [5242, ['8'], ['I-8'], ['Ley 39/2015', 'artículo 82', 'trámite de audiencia', 'plazo'], [
    ref(l39, 'Ley 39/2015, art. 82.2, texto consolidado BOE: los interesados pueden presentar alegaciones y documentos durante un plazo no inferior a diez días ni superior a quince.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 8: procedimiento administrativo común y relaciones con la Administración.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema I.8: Ley de Procedimiento Administrativo Común y Ley de Régimen Jurídico del Sector Público.'),
    ref(b03, 'ITIC Academy, bloque 03 «Régimen jurídico y procedimiento administrativo», versión accesible en Drive: secuencia del procedimiento y trámite de audiencia; el intervalo se comprueba en el art. 82.2 vigente.')
  ], null, 'El artículo 82.2 de la Ley 39/2015 fija el plazo de audiencia entre un mínimo de diez y un máximo de quince días. Los días son hábiles conforme a la regla general del artículo 30.2, salvo que una norma disponga otro cómputo. Se mantiene la respuesta B.', 'vigente'],
  [5243, ['7', '8'], ['I-8'], ['Ley 39/2015', 'artículo 37', 'inderogabilidad singular', 'disposiciones generales'], [
    ref(l39, 'Ley 39/2015, art. 37.1–2, texto consolidado BOE: una resolución particular no puede vulnerar una disposición general aunque proceda de órgano de igual o superior jerarquía; la resolución contraria es nula.'),
    ref(a1, 'Convocatoria A1 GSI 2025, temas 7 (fuentes y límites del reglamento) y 8 (régimen jurídico/procedimiento administrativo).'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema I.8: procedimiento administrativo y régimen jurídico del sector público.'),
    ref(b03, 'ITIC Academy, bloque 03 «Régimen jurídico y procedimiento administrativo», versión accesible en Drive: jerarquía normativa y actuación administrativa; la regla se comprueba en el art. 37 de la Ley 39/2015.')
  ], null, 'La inderogabilidad singular del art. 37.1 de la Ley 39/2015 impide que una resolución particular contradiga una disposición general, incluso si quien resuelve ocupa una posición jerárquica igual o superior a quien dictó esta última. El apartado 2 declara nulas las resoluciones que vulneren una disposición reglamentaria. Por ello, en los términos planteados, ninguna de las condiciones ofrecidas habilita la vulneración.', 'vigente'],
  [5244, ['10'], ['I-8'], ['Ley 39/2015', 'artículo 65', 'responsabilidad patrimonial', 'inicio de oficio', 'prescripción'], [
    ref(l39, 'Ley 39/2015, art. 65.1–2, texto consolidado BOE: la iniciación de oficio requiere que no haya prescrito el derecho a reclamar; se notifica a los presuntamente lesionados y se les dan diez días para alegar, pero la instrucción continúa aunque no comparezcan.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 10: responsabilidad patrimonial de las Administraciones Públicas, procedimiento y acción de responsabilidad.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema I.8: procedimiento administrativo común y régimen jurídico.'),
    ref(b03, 'ITIC Academy, bloque 03 «Régimen jurídico y procedimiento administrativo», versión accesible en Drive: iniciación y procedimiento de responsabilidad patrimonial; el requisito y la consecuencia de la falta de personación se contrastan con el art. 65.')
  ], null, 'El artículo 65.1 exige que el derecho a reclamar no haya prescrito para poder iniciar de oficio el procedimiento. El art. 65.2 obliga a notificar a los particulares presuntamente lesionados, pero no exige que se personen: la tramitación continúa aunque no comparezcan dentro de los diez días. La prueba definitiva de la causalidad y del daño corresponde a la instrucción y resolución, no es condición previa para abrir el procedimiento.', 'vigente'],
  [5245, ['12'], [], ['Ley 47/2003', 'Deuda del Estado', 'Título IV', 'Capítulo II', 'Sección 3.ª'], [
    ref(lpg, 'Ley 47/2003, de 26 de noviembre, General Presupuestaria, estructura consolidada BOE: Título IV, Capítulo II («De la Deuda del Estado»), Sección 3.ª «Régimen jurídico de la Deuda del Estado», arts. 103–105.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 12: Presupuestos Generales del Estado, modificaciones, ejecución y control presupuestario.'),
    ref(b05, 'ITIC Academy, bloque 05 «Presupuestos y compra TIC», versión accesible en Drive: marco presupuestario estatal y deuda pública como materia económico-presupuestaria. El epígrafe exacto se contrasta con el índice y artículos de la LGP.')
  ], null, 'La Sección 3.ª del Capítulo II del Título IV de la Ley 47/2003 se titula «Régimen jurídico de la Deuda del Estado» y comprende los artículos 103 a 105 sobre régimen de los valores, transmisión y prescripción. No es una sección del Título V. El programa A1 incluye la materia presupuestaria; no se asigna tema A2 específico porque el programa A2 no contiene un epígrafe sobre Deuda del Estado o Ley General Presupuestaria.', 'vigente']
];

const edits = {
  5241: { comentarios: 'Ley 40/2015: las funciones de proponer/dirigir proyectos, ejercer competencias e impulsar la gestión ordinaria corresponden a Directores Generales (art. 66.1). Solicitar a Hacienda la afectación o arrendamiento de inmuebles corresponde al Subsecretario (art. 63.1.k); por eso esa opción es la incorrecta.' },
  5242: { comentarios: 'Artículo 82.2 de la Ley 39/2015: plazo mínimo de diez y máximo de quince días para alegar y presentar documentos en audiencia. Como regla general, los plazos en días son hábiles (art. 30.2).' },
  5243: { comentarios: 'Artículo 37.1–2 de la Ley 39/2015 (inderogabilidad singular): una resolución particular no puede vulnerar una disposición general aunque la dicte un órgano de igual o superior jerarquía; la resolución contraria a una disposición reglamentaria es nula.' },
  5244: { comentarios: 'Artículo 65.1 de la Ley 39/2015: no debe haber prescrito el derecho de reclamación. El art. 65.2 exige notificar a los lesionados, pero el procedimiento se instruye aunque no se personen; la prueba de causalidad/daño se valora durante la instrucción.' },
  5245: { comentarios: 'Ley 47/2003: Título IV, Capítulo II (Deuda del Estado), Sección 3.ª (Régimen jurídico de la Deuda del Estado), arts. 103–105.' }
};

if (!fs.existsSync(path.join(__dirname, 'cambios-lote-984.json'))) {
  aplicar({ numero: '984', fecha: '2026-11-12', records, edits });
}

const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-984.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5241: ['ITIC Academy, bloque 03 «Régimen jurídico y procedimiento administrativo», versión accesible en Drive: organización ministerial y órganos directivos, cotejado con arts. 63 y 66 de la Ley 40/2015.', 'Cotejo A1-4/A2-I.8.'],
  5242: ['ITIC Academy, bloque 03 «Régimen jurídico y procedimiento administrativo», versión accesible en Drive: fases del procedimiento común y audiencia.', 'Cotejo A1-8/A2-I.8.'],
  5243: ['ITIC Academy, bloque 03 «Régimen jurídico y procedimiento administrativo», versión accesible en Drive: jerarquía de fuentes y sujeción de la actuación administrativa a las disposiciones generales.', 'Cotejo A1-7/A1-8/A2-I.8.'],
  5244: ['ITIC Academy, bloque 03 «Régimen jurídico y procedimiento administrativo», versión accesible en Drive: procedimiento de responsabilidad patrimonial.', 'Cotejo A1-10/A2-I.8.'],
  5245: ['ITIC Academy, bloque 05 «Presupuestos y compra TIC», versión accesible en Drive: materias presupuestarias y deuda; la estructura normativa concreta se coteja con la Ley General Presupuestaria.', 'Cotejo A1-12. No se fuerza una etiqueta A2: su temario no incluye un tema específico de Deuda del Estado/Ley General Presupuestaria.']
};
const reason = 'Cotejo curricular individual con los programas oficiales A1/A2 de 2025 y los materiales ITIC Academy accesibles en Drive.';
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
console.log('Lote 984 enriquecido con cotejo curricular y trazabilidad de las cinco preguntas.');
