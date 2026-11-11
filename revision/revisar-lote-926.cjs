const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const ce = 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229&p=20260520';
const teu13 = 'https://eur-lex.europa.eu/eli/treaty/teu_2012/art_13/oj?locale=es';
const tfue288 = 'https://eur-lex.europa.eu/eli/treaty/tfeu_2012/art_288/oj?locale=es';
const academyConstitution = 'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk';
const academyAdmin = 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const academyEu = 'https://drive.google.com/file/d/1KTz7CNz88u_4zyVLC2oYQBnmJRHIG7J7/view?usp=drivesdk';
const refs = items => items.map(([url, referencia]) => ({ url, referencia }));

const records = [
  [4951, ['3'], [], ['Constitución Española', 'artículo 140', 'municipio', 'personalidad jurídica'], refs([
    [ce, 'Constitución Española, texto consolidado del BOE, art. 140: garantiza la autonomía municipal y dispone literalmente que los municipios gozan de personalidad jurídica plena.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 3: Administración local y entidades que la integran en la regulación constitucional.'],
    [a2, 'El programa A2 GSI AGE 2025 no contiene un tema específico de Administración local/municipios; no se fuerza una equivalencia temática.'],
    [academyConstitution, 'ITIC Academy 2026, bloque 01: organización territorial, Administración local y entidades constitucionales; cotejo curricular.']
  ]), null,
  'Respuesta C. El art. 140 CE usa la expresión “personalidad jurídica plena”. “Personalidad jurídica propia” es la expresión que el art. 141 emplea para la provincia, por lo que el distractor se conserva como contraste.', 'corregida'],
  [4952, ['4'], ['I-8'], ['Constitución Española', 'artículo 103', 'Administración Pública', 'eficacia', 'jerarquía', 'descentralización', 'desconcentración', 'coordinación'], refs([
    [ce, 'Constitución Española, texto consolidado del BOE, art. 103.1: eficacia, jerarquía, descentralización, desconcentración y coordinación, con sometimiento pleno a la ley y al Derecho.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 4: principios constitucionales de la Administración pública.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema I.8: régimen jurídico de las Administraciones públicas.'],
    [academyConstitution, 'ITIC Academy 2026, bloque 01, Constitución y AGE: principios constitucionales de la Administración; cotejo curricular.'],
    [academyAdmin, 'ITIC Academy 2026, bloque 03, Actuación administrativa: fuentes, Leyes 39/2015 y 40/2015, y régimen jurídico; cotejo curricular.']
  ]), null,
  'Respuesta D. La enumeración del artículo 103.1 CE es eficacia, jerarquía, descentralización, desconcentración y coordinación. No incluye autonomía ni centralización, y la Constitución usa “desconcentración”, no “concentración”.', 'vigente'],
  [4953, ['5'], [], ['Unión Europea', 'TUE', 'artículo 13', 'instituciones de la Unión'], refs([
    [teu13, 'Tratado de la Unión Europea, versión consolidada en EUR-Lex, art. 13: enumera Parlamento Europeo, Consejo Europeo, Consejo, Comisión Europea, Tribunal de Justicia de la Unión Europea, Banco Central Europeo y Tribunal de Cuentas. Son siete instituciones; el Banco Europeo de Inversiones no figura en esa enumeración.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 5: instituciones de la Unión Europea.'],
    [a2, 'El programa A2 GSI AGE 2025 no incluye el tema general de instituciones de la Unión Europea; no se asigna una equivalencia A2 artificial.'],
    [academyEu, 'ITIC Academy 2026, bloque 02 «La Unión Europea»: tema A1-5 e instituciones conforme al art. 13 TUE; indica expresamente que no aplica al programa A2. Cotejo curricular.']
  ]), null,
  'Respuesta B. El artículo 13 TUE reconoce siete instituciones y distingue al Consejo del Consejo Europeo. El Banco Europeo de Inversiones y los órganos consultivos citados en distractores no forman parte de la enumeración de ese artículo; se corrige además una errata tipográfica.', 'corregida'],
  [4954, ['5', '7'], [], ['TFUE', 'artículo 288', 'reglamento', 'directiva', 'decisión', 'actos jurídicos UE'], refs([
    [tfue288, 'Tratado de Funcionamiento de la Unión Europea, versión consolidada en EUR-Lex, art. 288: el reglamento tiene alcance general, es obligatorio en todos sus elementos y directamente aplicable; la directiva obliga al destinatario respecto al resultado; la decisión es obligatoria en todos sus elementos; recomendaciones y dictámenes no son vinculantes.'],
    [a1, 'Convocatoria A1 GSI 2025, temas 5 (Derecho de la Unión) y 7 (fuentes del Derecho).'],
    [a2, 'El programa A2 GSI AGE 2025 no incluye un epígrafe específico de actos jurídicos de la Unión; no se atribuye tema A2.'],
    [academyEu, 'ITIC Academy 2026, bloque 02, Derecho de la Unión y art. 288 TFUE (reglamento, directiva, decisión, recomendación y dictamen); cotejo curricular, con literal cotejado en EUR-Lex.']
  ]), null,
  'Respuesta C. La definición corresponde al reglamento del artículo 288 TFUE. La opción D describe la directiva, pero atribuye su efecto a la decisión; la opción A combina parcialmente reglas de la decisión con el nombre de la directiva. El enunciado se acota al art. 288 para evitar confusión entre ambos actos.', 'corregida'],
  [4955, ['1', '7'], [], ['Constitución Española', 'artículo 86', 'decreto-ley', 'extraordinaria y urgente necesidad'], refs([
    [ce, 'Constitución Española, texto consolidado del BOE, art. 86.1: en caso de extraordinaria y urgente necesidad el Gobierno puede dictar disposiciones legislativas provisionales denominadas decretos-leyes, con límites materiales expresos.'],
    [a1, 'Convocatoria A1 GSI 2025, temas 1 (Constitución) y 7 (disposiciones del Gobierno con fuerza de ley).'],
    [a2, 'El programa A2 GSI AGE 2025 no contiene un epígrafe específico sobre el decreto-ley del art. 86; no se fuerza una clasificación A2.'],
    [academyConstitution, 'ITIC Academy 2026, bloque 01, Constitución y fuentes/garantías; cotejo curricular.'],
    [academyAdmin, 'ITIC Academy 2026, bloque 03, tema A1-7: disposiciones del Gobierno con fuerza de ley, incluidos decreto-ley y decreto legislativo; cotejo curricular.']
  ]), null,
  'Respuesta D. El presupuesto habilitante del decreto-ley según el art. 86.1 CE es una situación de extraordinaria y urgente necesidad. Además existen límites materiales que el nuevo enunciado no pretende enumerar; así se separa el presupuesto habilitante de las condiciones sobre las materias afectables.', 'corregida']
];

const edits = {
  4951: {
    texto: 'Según el artículo 140 de la Constitución Española, la personalidad jurídica de los municipios es:',
    opciones: [
      'Inexistente.',
      'Propia, en los mismos términos que la de las provincias del artículo 141.',
      'Plena.',
      'Limitada a las competencias delegadas por el Estado.'
    ],
    respuesta_correcta: 2
  },
  4953: {
    texto: '¿Qué lista reproduce las siete instituciones enumeradas en el artículo 13 del Tratado de la Unión Europea?',
    opciones: [
      'Parlamento Europeo, Consejo Europeo, Comisión Europea, Tribunal de Justicia de la Unión Europea, Banco Central Europeo, Banco Europeo de Inversiones y Tribunal de Cuentas.',
      'Parlamento Europeo, Consejo Europeo, Consejo, Comisión Europea, Tribunal de Justicia de la Unión Europea, Banco Central Europeo y Tribunal de Cuentas.',
      'Parlamento Europeo, Consejo Europeo, Consejo, Comisión Europea, Tribunal de Justicia de la Unión Europea, Banco Central Europeo, Tribunal de Cuentas, Comité Económico y Social y Comité de las Regiones.',
      'Parlamento Europeo, Consejo Europeo, Consejo, Comisión Europea, Tribunal de Justicia de la Unión Europea, Banco Central Europeo, Banco Europeo de Inversiones y Tribunal de Cuentas.'
    ],
    respuesta_correcta: 1
  },
  4954: {
    texto: 'Conforme al artículo 288 del Tratado de Funcionamiento de la Unión Europea, ¿qué característica corresponde al reglamento?',
    opciones: [
      'Es obligatorio en todos sus elementos; cuando designe destinatarios solo será obligatorio para estos.',
      'Las recomendaciones y los dictámenes son vinculantes.',
      'Tiene alcance general, es obligatorio en todos sus elementos y directamente aplicable en cada Estado miembro.',
      'Obliga al Estado miembro destinatario respecto al resultado, pero deja a las autoridades nacionales elegir la forma y los medios.'
    ],
    respuesta_correcta: 2
  },
  4955: {
    texto: 'Según el artículo 86.1 de la Constitución Española, ¿cuál es el presupuesto habilitante para que el Gobierno dicte un decreto-ley?',
    opciones: [
      'Que las Cortes Generales hayan sido disueltas o haya expirado su mandato.',
      'Que se trate de cualquier materia cuya regulación requiera rango de ley.',
      'Que las Cámaras no estén reunidas.',
      'Que concurra una situación de extraordinaria y urgente necesidad.'
    ],
    respuesta_correcta: 3
  }
};

aplicar({ numero: '926', fecha: '2026-11-11', records, edits });

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-926.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academyById = {
  4951: [academyConstitution, 'ITIC Academy 2026, bloque 01: tema A1-3, organización territorial y Administración local; cotejo curricular. El programa A2 no asigna tema específico a municipios.'],
  4952: [academyAdmin, 'ITIC Academy 2026, bloque 03: actuación administrativa y principios constitucionales del art. 103; y bloque 01, tema A1-4. Cotejo curricular.'],
  4953: [academyEu, 'ITIC Academy 2026, bloque 02: instituciones según art. 13 TUE; el bloque señala que no aplica al programa A2. Cotejo curricular.'],
  4954: [academyEu, 'ITIC Academy 2026, bloque 02: Derecho de la Unión y actos del art. 288 TFUE. Cotejo curricular con EUR-Lex.'],
  4955: [academyAdmin, 'ITIC Academy 2026, bloque 03, tema A1-7: disposiciones del Gobierno con fuerza de ley; y bloque 01, Constitución. Cotejo curricular.']
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const [url, detail] = academyById[change.id];
  q.clasificacion.bloque_academia = `${detail} Se cita como cotejo curricular, no como fuente primaria.`;
  q.clasificacion.nota = `${q.revision.estado}. ${detail} La explicación y el fundamento jurídico constan en el registro del lote.`;
  q.revision.observaciones += ` ${detail}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `ITIC Academy: ${detail}` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy añadido al lote 926.');
