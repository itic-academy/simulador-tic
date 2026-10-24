const apply = require('./aplicar-lote.cjs');

const sources = {
  mtom: [
    { url: 'https://www.w3.org/TR/xop10/', referencia: 'W3C Recommendation, XML-binary Optimized Packaging (XOP), 25-01-2005, §§1–3: define XOP y explica su serialización optimizada de XML Infosets con datos binarios.' },
    { url: 'https://www.w3.org/TR/soap12-mtom/', referencia: 'W3C Recommendation, SOAP Message Transmission Optimization Mechanism (MTOM), 25-01-2005, resumen y §§1–3: mecanismo para optimizar la transmisión/formato de mensajes SOAP, cuya serialización concreta usa el empaquetado XOP.' }
  ],
  ecma: [
    { url: 'https://ecma-international.org/publications-and-standards/standards/ecma-262/', referencia: 'Ecma International, ECMA-262: especificación del lenguaje ECMAScript; edición 17 (ECMAScript 2026), junio de 2026.' }
  ],
  constitution: [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229&p=20260520', referencia: 'BOE, Constitución Española, texto consolidado actualizado a 20-05-2026; arts. 3, 22 y 79, según se indica en cada observación. El BOE advierte que el texto consolidado es informativo; para efectos jurídicos prevalece la publicación oficial.' }
  ]
};

const academy = {
  web: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view', referencia: 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1, §§2.4 (JavaScript y ECMAScript 2026) y 3.4 (SOAP, WSDL y servicios web); se usa para encuadre curricular, no como autoridad definitoria del estándar.' },
  constitution: { url: 'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view', referencia: 'ITIC Academy, bloque 01 «Constitución, organización del Estado y AGE», versión 2026.2: A1 tema 1 y A2 O1 (Constitución/derechos y deberes) y O2 (Cortes Generales); se coteja el material con el texto consolidado del BOE.' }
};

const records = [
  [1331, [65, 77], ['III-12'], ['XML', 'SOAP', 'MTOM', 'XOP', 'servicios web', 'datos binarios'], sources.mtom, null,
    'La afirmación incorrecta es que MTOM/XOP fueran recomendaciones desarrolladas por la IETF: las especificaciones citadas son recomendaciones del W3C. XOP significa XML-binary Optimized Packaging; MTOM define una optimización de transmisión/formato de SOAP que, en su serialización MIME concreta, utiliza XOP. Se mantienen el enunciado y la clave, que identifican una sola atribución falsa. Cotejo temático con ITIC Academy, bloque 30, versión 2026.1, §§2.4 y 3.4.', 'vigente'],
  [1332, [65, 77], ['II-3', 'III-12'], ['ECMAScript', 'ECMA-262', 'JavaScript', 'estándares'], sources.ecma, null,
    'ECMAScript está definido por ECMA-262. En la fecha de revisión, Ecma International publica la 17.ª edición, ECMAScript 2026; ECMA-404 corresponde al formato de intercambio JSON y ECMA-402 a la API de internacionalización. La respuesta original sigue siendo inequívoca. Cotejo temático con ITIC Academy, bloque 30, versión 2026.1, §2.4.', 'vigente'],
  [1333, [1], ['I-1'], ['Constitución Española', 'artículo 3', 'castellano', 'lengua oficial'], sources.constitution, null,
    'El artículo 3.1 de la Constitución establece que el castellano es la lengua española oficial del Estado y que todos los españoles tienen el deber de conocerla y el derecho a usarla. La clave original reproduce ambos efectos constitucionales. Cotejo con ITIC Academy, bloque 01, versión 2026.2, §2 (principios constitucionales), y §3 (derechos y deberes); texto contrastado con BOE consolidado a 20-05-2026.', 'vigente'],
  [1334, [1], ['I-1'], ['Constitución Española', 'artículo 22', 'derecho de asociación', 'asociaciones secretas', 'asociaciones paramilitares'], sources.constitution, null,
    'La pregunta original citaba el artículo 22 en general y permitía solapamiento: su apartado 2 declara ilegales las asociaciones que persigan fines o utilicen medios tipificados como delito, mientras que el apartado 5 prohíbe expresamente las secretas y las de carácter paramilitar. Se concreta el enunciado en el apartado 5, manteniendo como respuesta su formulación constitucional. Cotejo con ITIC Academy, bloque 01, versión 2026.2, §3 (derechos fundamentales) y correspondencia A1 tema 1/A2 O1.', 'corregida'],
  [1335, [1], ['I-2'], ['Constitución Española', 'artículo 79', 'Cortes Generales', 'quórum', 'mayoría de miembros presentes'], sources.constitution, null,
    'Se precisa que se pregunta por el quórum de reunión del artículo 79.1: la Cámara debe estar reunida reglamentariamente y asistir la mayoría de sus miembros. El apartado 79.2 regula una cuestión distinta, la mayoría de aprobación de los acuerdos válidos: mayoría de miembros presentes, salvo mayorías especiales. Cotejo con ITIC Academy, bloque 01, versión 2026.2, §5.3 (organización y funcionamiento de las Cortes); correspondencia A1 tema 1/A2 O2.', 'corregida']
];

apply({ numero: '203', fecha: '2026-10-24', records, edits: {
  1334: { texto: '¿Qué asociaciones prohíbe expresamente el artículo 22.5 de la Constitución Española?', opciones: [
    'Las asociaciones políticas.',
    'Las asociaciones que no persigan fines lucrativos.',
    'Las asociaciones secretas y las de carácter paramilitar.',
    'Las asociaciones inscritas en un registro público.'
  ], respuesta_correcta: 2 },
  1335: { texto: 'Según el artículo 79.1 de la Constitución Española, ¿qué requisito de asistencia deben cumplir las Cámaras para reunirse reglamentariamente?', opciones: [
    'Debe asistir la mayoría de sus miembros.',
    'Debe asistir necesariamente la mitad más uno de los miembros presentes en la sesión anterior.',
    'Debe asistir un tercio de sus miembros.',
    'Debe asistir dos tercios de sus miembros.'
  ], respuesta_correcta: 0 }
}});

const fs = require('node:fs');
const path = require('node:path');
const bank = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-203.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const meta = {
  1331: { source: academy.web, block: 'Bloque 30, Tecnologías de sistemas de información, versión 2026.1, §§2.4 (ECMAScript) y 3.4 (SOAP/servicios web).', topics: 'A1-65/A1-77/A2-III-12' },
  1332: { source: academy.web, block: 'Bloque 30, Tecnologías de sistemas de información, versión 2026.1, §2.4 (JavaScript y ECMAScript 2026).', topics: 'A1-65/A1-77/A2-II-3/A2-III-12' },
  1333: { source: academy.constitution, block: 'Bloque 01, Constitución, organización del Estado y AGE, versión 2026.2, A1 tema 1 y A2 O1 (principios constitucionales, derechos y deberes).', topics: 'A1-1/A2-I-1' },
  1334: { source: academy.constitution, block: 'Bloque 01, Constitución, organización del Estado y AGE, versión 2026.2, A1 tema 1 y A2 O1 (derechos fundamentales y derecho de asociación).', topics: 'A1-1/A2-I-1' },
  1335: { source: academy.constitution, block: 'Bloque 01, Constitución, organización del Estado y AGE, versión 2026.2, A1 tema 1 y A2 O2 (Cortes Generales y funcionamiento).', topics: 'A1-1/A2-I-2' }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const m = meta[q.id];
  q.clasificacion.bloque_academia = m.block;
  q.clasificacion.nota = `Cotejo temático con ITIC Academy: ${m.block} Correspondencia orientativa con el temario oficial: ${m.topics}.`;
  const comment = ` Cotejo temático con ITIC Academy: ${m.block} Correspondencia orientativa con el temario oficial: ${m.topics}.`;
  q.comentarios = (q.comentarios || '') + comment;
  q.revision.observaciones += comment;
  q.revision.fuentes.push({ url: m.source.url, referencia: `${m.source.referencia} Correspondencia: ${m.topics}.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(__dirname, '..', 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de ITIC Academy añadido al lote 203.');
