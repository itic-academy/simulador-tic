const apply = require('./aplicar-lote.cjs');

const records = [
  [2811, ['27'], ['I-7'], ['RGPD', 'encargado del tratamiento', 'LOPDGDD'], [
    { url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=es', referencia: 'Reglamento (UE) 2016/679, artículo 28.3: contrato u otro acto jurídico vinculante y contenido mínimo del encargo.' },
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673', referencia: 'LO 3/2018, artículo 33: acceso del encargado y aplicación del RGPD y de la ley orgánica.' }
  ], '', 'Se delimita el supuesto a un tercero que trata datos por cuenta del responsable. El encargo no queda cubierto por la mera cláusula genérica de prestación de servicios: debe formalizarse mediante contrato u otro acto jurídico vinculante con los contenidos del artículo 28.3 RGPD.', 'corregida'],
  [2812, ['5'], [], ['Unión Europea', 'TFUE', 'reglamento'], [
    { url: 'https://eur-lex.europa.eu/eli/treaty/tfeu_2012/art_288/oj?locale=es', referencia: 'TFUE, artículo 288: el reglamento tiene alcance general, es obligatorio en todos sus elementos y directamente aplicable en cada Estado miembro.' }
  ], '', 'Se actualiza la denominación histórica «Reglamento Comunitario» a «Reglamento de la Unión Europea» y se acota expresamente al artículo 288 TFUE. La opción de aplicación directa es la correcta; no requiere transposición, sin perjuicio de medidas nacionales de ejecución cuando el propio acto las contemple.', 'corregida'],
  [2813, ['4'], ['I-8'], ['Ley 40/2015', 'Ministerios', 'Subsecretaría'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566', referencia: 'Ley 40/2015, artículo 58.2: todos los Ministerios cuentan con Subsecretaría y, dependiendo de ella, Secretaría General Técnica.' }
  ], '', 'Se precisa el apartado aplicable. La Subsecretaría es el órgano que debe existir en todo Ministerio; las Secretarías de Estado y Generales son potestativas según el artículo 58.1. La Secretaría General Técnica también es obligatoria, pero no figura entre las opciones.', 'vigente'],
  [2814, ['6'], ['I-8'], ['Ley 40/2015', 'sector público institucional estatal', 'organismos públicos', 'fondos sin personalidad'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566', referencia: 'Ley 40/2015, artículo 84.1.a, f y g: organismos públicos vinculados o dependientes de la AGE, fondos sin personalidad jurídica y universidades públicas no transferidas integran el sector público institucional estatal.' }
  ], '', 'Se concreta «sector público institucional» como el estatal y se pregunta qué categorías lo integran. Las tres categorías enumeradas aparecen en el artículo 84.1 de la Ley 40/2015, por lo que «todas son correctas» se mantiene como clave. No se afirma que la lista de la pregunta sea exhaustiva.', 'corregida'],
  [2815, ['31'], ['I-9'], ['reutilización de información', 'datos abiertos', 'conjuntos de datos de alto valor', 'API'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-19814', referencia: 'Ley 37/2007, artículo 3 ter.1 y 2: permite determinar conjuntos nacionales de alto valor y dispone formato legible por máquina, API y descarga masiva cuando proceda; art. 6.1 mantiene la reutilización abierta aunque existan productos de valor añadido.' },
    { url: 'https://eur-lex.europa.eu/eli/reg_impl/2023/138/oj?locale=es', referencia: 'Reglamento de Ejecución (UE) 2023/138, modalidades de publicación y reutilización de los conjuntos de datos de alto valor.' }
  ], '', 'Se aclara que la primera afirmación reproduce el criterio del artículo 3 ter.1 de la Ley 37/2007 para identificar conjuntos nacionales de alto valor. Se conserva la clave 0. La opción sobre descarga masiva «siempre» es falsa: la Ley dice «cuando proceda»; la gratuidad tiene excepciones legales y la existencia de productos con valor añadido no cierra el acceso a otros agentes.', 'corregida']
];

const edits = {
  2811: {
    texto: 'Cuando un tercero presta un servicio a una Administración pública y trata datos personales por cuenta de esta, el encargo del tratamiento debe:',
    opciones: [
      'Quedar cubierto únicamente por el contrato general de servicios, sin regular el tratamiento de datos.',
      'Formalizarse mediante contrato u otro acto jurídico vinculante con el contenido mínimo del artículo 28.3 del RGPD.',
      'Convertir automáticamente al tercero en responsable del tratamiento.',
      'Exigir que el tercero cree una persona jurídica distinta sometida al derecho privado.'
    ], respuesta_correcta: 1
  },
  2812: {
    texto: 'Conforme al artículo 288 del Tratado de Funcionamiento de la Unión Europea, un Reglamento de la Unión Europea es una norma:',
    opciones: [
      'Que precisa de una norma interna de transposición para integrarse en cada Estado miembro.',
      'De alcance limitado a sus destinatarios expresamente designados.',
      'De alcance general, obligatoria en todos sus elementos y directamente aplicable en cada Estado miembro.',
      'Que carece de efectos jurídicos vinculantes.'
    ], respuesta_correcta: 2
  },
  2813: {
    texto: 'Según el artículo 58.2 de la Ley 40/2015, ¿qué órgano debe existir en todo Ministerio?',
    opciones: ['Una Secretaría de Estado.', 'Una Secretaría General.', 'Una Subsecretaría.', 'Una Comisión Ministerial de Administración Digital.'],
    respuesta_correcta: 2
  },
  2814: {
    texto: 'Según el artículo 84.1 de la Ley 40/2015, ¿cuáles de estas entidades integran el sector público institucional estatal?',
    opciones: [
      'Los organismos públicos vinculados o dependientes de la Administración General del Estado.',
      'Los fondos sin personalidad jurídica.',
      'Las universidades públicas no transferidas.',
      'Todas las categorías anteriores.'
    ], respuesta_correcta: 3
  },
  2815: {
    texto: 'Conforme al artículo 3 ter de la Ley 37/2007, sobre conjuntos de datos de alto valor, señale la afirmación correcta:',
    opciones: [
      'Además de los conjuntos que determine la Comisión Europea, se pueden determinar a nivel nacional conjuntos adicionales atendiendo, entre otros criterios, a su potencial de beneficios socioeconómicos o medioambientales, servicios innovadores, número de usuarios, generación de ingresos y combinación con otros datos.',
      'Los datos de alto valor deben ofrecerse siempre mediante descarga masiva, sin excepciones ni atención a la adecuación del formato.',
      'La Ley prohíbe toda tarifa por reutilizar documentos, incluidos los supuestos de excepción previstos legalmente.',
      'La reutilización queda cerrada a otros agentes si algún operador ya explota productos de valor añadido basados en esos documentos.'
    ], respuesta_correcta: 0
  }
};

apply({ numero: '499', fecha: '2026-10-29', records, edits });

const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-499.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const mapping = {
  2811: { A1: ['A1-27'], A2: ['A2-I-7'], academy: 'ITIC Academy, Bloque 08 Protección de Datos 2026: encargado del tratamiento y RGPD; correspondencia A1-27/A2-I-7.' },
  2812: { A1: ['A1-5'], A2: [], academy: 'ITIC Academy, Bloque 01 Constitución, Estado y AGE 2026: Unión Europea y Derecho de la Unión; correspondencia directa con A1-5. El programa A2 vigente no contiene un epígrafe general equivalente sobre los tipos de actos de la Unión.' },
  2813: { A1: ['A1-4'], A2: ['A2-I-8'], academy: 'ITIC Academy, Bloque 03 Actuación Administrativa 2026: organización de Ministerios y Ley 40/2015; correspondencia A1-4/A2-I-8.' },
  2814: { A1: ['A1-6'], A2: ['A2-I-8'], academy: 'ITIC Academy, Bloques 01 Constitución, Estado y AGE y 03 Actuación Administrativa 2026: AGE y sector público institucional; correspondencia A1-6/A2-I-8.' },
  2815: { A1: ['A1-31'], A2: ['A2-I-9'], academy: 'ITIC Academy, Bloque 11 / Tema 31 RISP, datos abiertos y transparencia 2026: conjuntos de datos de alto valor; correspondencia A1-31/A2-I-9.' }
};
const programs = JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas;
const topics = new Set(programs.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  const m = mapping[c.id];
  assert.ok(q && m, `Pregunta ${c.id} o correspondencia ausente`);
  for (const id of [...m.A1, ...m.A2]) assert.ok(topics.has(id), `Tema no oficial: ${id}`);
  q.clasificacion.A1 = m.A1;
  q.clasificacion.A2 = m.A2;
  q.clasificacion.bloque_academia = m.academy;
  q.clasificacion.estado = 'revisada';
  q.clasificacion.nota = `${q.revision.estado}. ${m.academy}`;
  q.revision.observaciones = `${c.actualizada.revision.observaciones} Cotejo curricular: ${m.academy} El material de Academy se utiliza como mapa curricular y no como fuente legal primaria.`;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
console.log('Lote 499 aplicado con cinco revisiones individuales y clasificación oficial A1/A2.');
