const apply = require('./aplicar-lote.cjs');

const sources = {
  ebep: [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719&p=20261003', referencia: 'BOE, TREBEP, texto consolidado consultado el 24-10-2026, última actualización publicada el 03-10-2026. Art. 70.2: la Oferta de empleo público se aprobará anualmente por los órganos de Gobierno de las Administraciones Públicas y se publicará en el diario oficial correspondiente.' }
  ],
  transparencia: [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2013-12887&p=20181206', referencia: 'BOE, Ley 19/2013, texto consolidado. Art. 11: los principios técnicos del Portal de la Transparencia son accesibilidad, interoperabilidad y reutilización.' }
  ],
  olvido: [
    { url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=es', referencia: 'Reglamento (UE) 2016/679 (RGPD), art. 17: derecho de supresión ejercitable frente al responsable del tratamiento cuando concurra alguna de las causas previstas.' },
    { url: 'https://www.aepd.es/areas-de-actuacion/internet-y-redes-sociales/derecho-al-olvido', referencia: 'AEPD, Derecho de supresión («al olvido»): buscadores de internet. Para ejercerlo frente a un buscador, se solicita primero al buscador; el editor de la fuente y el motor de búsqueda realizan tratamientos diferenciados y la solicitud al buscador no requiere acudir previamente a la fuente original.' }
  ],
  nolan: [
    { url: 'https://dl.acm.org/doi/10.1145/362280.362284', referencia: 'Richard L. Nolan, «Managing the computer resource: a stage hypothesis», Communications of the ACM 16(7), 1973, pp. 399–405, DOI 10.1145/362280.362284. Formulación original de cuatro etapas; la denominación «user/service orientation» caracteriza la etapa IV, no el nombre de una quinta etapa.' }
  ],
  risp: [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-19814&p=20230509', referencia: 'BOE, Ley 37/2007, texto consolidado con última actualización publicada el 09-05-2023. Art. 3 ter.2: los conjuntos de datos de alto valor serán gratuitos con la salvedad legal, legibles por máquina, se suministrarán mediante API y se ofrecerán en descarga masiva cuando proceda.' },
    { url: 'https://eur-lex.europa.eu/eli/reg_impl/2023/138/oj?locale=es', referencia: 'Reglamento de Ejecución (UE) 2023/138, art. 3.1: los conjuntos de datos de alto valor enumerados se pondrán a disposición en formatos legibles por máquina mediante API; descarga masiva cuando el anexo lo indique.' }
  ]
};

const records = [
  [1346, [24], ['I-8'], ['TREBEP', 'artículo 70.2', 'oferta de empleo público', 'anualidad'], sources.ebep, null,
    'El artículo 70.2 TREBEP dispone que la Oferta de empleo público o instrumento similar se aprobará anualmente por los órganos de Gobierno de las Administraciones Públicas y se publicará en el diario oficial correspondiente. El plazo improrrogable de tres años del apartado 1 se refiere a la ejecución de la oferta, no a la periodicidad de su aprobación. Cotejo con ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», versión 2026.2, §7.6 (acceso al empleo público y planificación de recursos humanos); A1 tema 24 y A2 O8.', 'vigente'],
  [1347, [31], ['I-9'], ['Ley 19/2013', 'artículo 11', 'Portal de la Transparencia', 'accesibilidad', 'interoperabilidad', 'reutilización'], sources.transparencia, null,
    'El artículo 11 de la Ley 19/2013 enumera los principios técnicos de la información publicada en el Portal de la Transparencia: accesibilidad, interoperabilidad y reutilización. La opción correcta reproduce esa tríada. Cotejo con ITIC Academy, bloque 11 «Reutilización de la información del sector público, datos abiertos y transparencia», versión 2026.2, apartado sobre la Ley 19/2013; A1 tema 31 y A2 O9.', 'vigente'],
  [1348, [27], ['I-7'], ['RGPD', 'derecho de supresión', 'derecho al olvido', 'buscadores', 'AEPD'], sources.olvido, null,
    'El derecho al olvido aplicado a buscadores consiste en solicitar, bajo las condiciones legales y tras ponderar derechos e intereses, que ciertos enlaces no aparezcan al buscar a una persona por su nombre. La AEPD indica que la solicitud se dirige primero al buscador y que no hace falta acudir previamente al editor de la fuente: buscador y editor realizan tratamientos distintos. Se reformula para distinguir la desindexación en buscadores de una petición independiente de supresión al sitio de origen. Cotejo con ITIC Academy, bloque 08 «Protección de datos», versión 2026.2, apartado sobre derechos digitales y derecho al olvido (A1 tema 27 y A2 O7).', 'corregida'],
  [1349, [29], [], ['modelo de Nolan', 'Gibson y Nolan', 'madurez de sistemas de información', 'organizaciones'], sources.nolan, null,
    'Se identifica de forma expresa la versión Gibson/Nolan de 1974, cuyas cuatro etapas son iniciación, expansión (contagio), formalización (control) y madurez. «Servicio» no es una de ellas. La pregunta original solo decía «modelo de Nolan», lo que podía aludir también al modelo ampliado de seis etapas de 1979 y a la caracterización original de la etapa IV como orientación al usuario/servicio; esa diferencia de versiones queda aclarada en el enunciado. Cotejo con ITIC Academy, bloque 09 «Organización y gestión de los sistemas de información», versión 2026.2, §2.1 (modelos de evolución y madurez). No se fuerza una adscripción A2: el programa no contiene un epígrafe equivalente específico para el modelo de Nolan.', 'corregida'],
  [1350, [31], ['I-9'], ['Ley 37/2007', 'artículo 3 ter', 'datos de alto valor', 'datos abiertos', 'reutilización', 'legible por máquina', 'API'], sources.risp, null,
    'El artículo 3 ter.2.b de la Ley 37/2007 establece que los conjuntos de datos de alto valor serán legibles por máquina. El régimen también prevé gratuidad con la salvedad del art. 7.9.a, disponibilidad mediante API y descarga masiva cuando proceda; el Reglamento de Ejecución (UE) 2023/138 concreta formatos legibles por máquina y APIs para los conjuntos enumerados. Las otras opciones contradicen la posibilidad de tarifas, la imposición justificada de condiciones o el ámbito subjetivo más amplio de la Ley. Cotejo con ITIC Academy, bloque 11 «Reutilización de la información del sector público, datos abiertos y transparencia», versión 2026.2, apartado sobre datos de alto valor (A1 tema 31 y A2 O9).', 'vigente']
];

apply({ numero: '206', fecha: '2026-10-24', records, edits: {
  1348: {
    texto: 'Para ejercer el derecho al olvido en los resultados de buscadores de Internet, ¿a quién debe dirigirse primero la persona afectada antes de reclamar ante la Agencia Española de Protección de Datos?',
    opciones: [
      'Al Defensor del Pueblo.',
      'Al buscador que trata los datos y muestra los enlaces al buscar el nombre de la persona.',
      'Directamente a la Agencia Española de Protección de Datos, sin dirigirse antes al responsable.',
      'Al Tribunal Constitucional.'
    ],
    respuesta_correcta: 1
  },
  1349: {
    texto: 'En el modelo de crecimiento de Nolan/Gibson de 1974, que describe cuatro etapas en la evolución de los sistemas de información de una organización, ¿cuál de las siguientes no forma parte de la secuencia?',
    opciones: [
      'Iniciación.',
      'Expansión.',
      'Orientación al servicio.',
      'Formalización.'
    ],
    respuesta_correcta: 2
  }
}});

const fs = require('node:fs');
const path = require('node:path');
const bank = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-206.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  1346: { source: 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view', block: 'Bloque 03, Actuación administrativa y Administración digital, versión 2026.2, §7.6 (acceso al empleo público y planificación de recursos humanos).', topics: 'A1-24/A2-I-8' },
  1347: { source: 'https://drive.google.com/file/d/17B9a1yxMFgHCHEyVVBi0PG-cdCYABVvd/view', block: 'Bloque 11, Reutilización de la información del sector público, datos abiertos y transparencia, versión 2026.2, apartado sobre la Ley 19/2013.', topics: 'A1-31/A2-I-9' },
  1348: { source: 'https://drive.google.com/file/d/11T-TKuGJGXeEKwwODM-FlF8pML3QMh_t/view', block: 'Bloque 08, Protección de datos, versión 2026.2, apartado sobre derechos digitales y derecho al olvido.', topics: 'A1-27/A2-I-7' },
  1349: { source: 'https://drive.google.com/file/d/1-xmHgvxArWY8GroFD1eSdyPrAQjkBpzo/view', block: 'Bloque 09, Organización y gestión de los sistemas de información, versión 2026.2, §2.1 (modelos de evolución y madurez; distingue Gibson/Nolan 1974 de Nolan 1979).', topics: 'A1-29; sin equivalente A2 específico' },
  1350: { source: 'https://drive.google.com/file/d/17B9a1yxMFgHCHEyVVBi0PG-cdCYABVvd/view', block: 'Bloque 11, Reutilización de la información del sector público, datos abiertos y transparencia, versión 2026.2, apartado sobre Ley 37/2007 y conjuntos de datos de alto valor.', topics: 'A1-31/A2-I-9' }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const m = academy[q.id];
  q.clasificacion.bloque_academia = m.block;
  q.clasificacion.nota = `Cotejo temático con ITIC Academy: ${m.block} Correspondencia orientativa con el temario oficial: ${m.topics}.`;
  const comment = ` Cotejo temático con ITIC Academy: ${m.block} Correspondencia orientativa con el temario oficial: ${m.topics}.`;
  q.comentarios = (q.comentarios || '') + comment;
  q.revision.observaciones += comment;
  q.revision.fuentes.push({ url: m.source, referencia: `ITIC Academy, ${m.block} Correspondencia: ${m.topics}.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(__dirname, '..', 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de ITIC Academy añadido al lote 206.');
