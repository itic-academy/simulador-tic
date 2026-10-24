const apply = require('./aplicar-lote.cjs');

const sources = {
  coffman: {
    url: 'https://doi.org/10.1145/356586.356588',
    referencia: 'E. G. Coffman, Jr., M. Elphick y A. Shoshani, System Deadlocks, ACM Computing Surveys 3(2), 1971: establece las cuatro condiciones necesarias para que exista interbloqueo: exclusión mutua, retención y espera, no apropiación y espera circular.'
  },
  banker: {
    url: 'https://lass.cs.umass.edu/~shenoy/courses/fall10/lectures/Lec11.pdf',
    referencia: 'University of Massachusetts Amherst, CS 377 Operating Systems, Lecture 11: el algoritmo del banquero comprueba estados seguros para evitar asignaciones que conduzcan a interbloqueo; se distingue de prevención estructural eliminando condiciones necesarias.'
  },
  geo: {
    url: 'https://www.esa.int/Enabling_Support/Space_Transportation/Types_of_orbits',
    referencia: 'European Space Agency, Types of orbits, sección Geostationary orbit: define GEO sobre el ecuador, moviéndose en el sentido de rotación terrestre, con período de día sidéreo (23 h 56 min 4 s) y altitud de 35.786 km.'
  },
  ituOrbit: {
    url: 'https://search.itu.int/history/HistoryDigitalCollectionDocLibrary/4.323.51.en.103.pdf',
    referencia: 'ITU, Global Broadband Satellite Communications, § 1.2.2: caracteriza el satélite geoestacionario como órbita circular, directa y ecuatorial que permanece fija respecto de la Tierra; proporciona la altura aproximada de 35.786 km y período de 23 h 56 min.'
  },
  mainframe: {
    url: 'https://www.ibm.com/docs/en/zos-basic-skills?topic=today-mainframe-workloads-batch-online-transaction-processing',
    referencia: 'IBM z/OS Basic Skills, Mainframe workloads: los mainframes ejecutan cargas batch y procesamiento transaccional en línea (OLTP), incluidos numerosos sistemas transaccionales críticos.'
  },
  mainframeDetail: {
    url: 'https://www.ibm.com/think/topics/mainframe',
    referencia: 'IBM, What is a mainframe?, actualizado el 03-09-2026: define mainframe como computadora de altas prestaciones diseñada para operación continua y procesamiento transaccional de gran volumen; documenta redundancia y alta disponibilidad.'
  },
  raster: {
    url: 'https://www.usgs.gov/centers/wetland-and-aquatic-research-center/science/usgs-geographic-information-systems-gis?page=1',
    referencia: 'U.S. Geological Survey, GIS Data Types: distingue vector (puntos, líneas y polígonos) de raster (celdas o píxeles en una cuadrícula); explica el uso de grids para valores espaciales continuos o discretos.'
  },
  aes: {
    url: 'https://csrc.nist.gov/pubs/fips/197/final',
    referencia: 'NIST FIPS 197, Advanced Encryption Standard, actualización de 2023: especifica AES-128/192/256 basados en Rijndael; NIST seleccionó Rijndael como algoritmo ganador para el estándar AES.'
  },
  desWithdrawal: {
    url: 'https://csrc.nist.gov/news/2005/withdrawal-of-fips-46-3-fips-74-and-fips-81',
    referencia: 'NIST, retirada de FIPS 46-3 (DES), 2005: retira DES por insuficiente seguridad y anima a usar AES, aprobado en FIPS 197.'
  }
};

const academy = {
  os: {
    url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 27, Sistemas Operativos, versión 2026 actualizada, § 2.7: condiciones de Coffman, prevención al eliminar una condición, orden global de recursos y evitación mediante estado seguro/algoritmo del banquero.'
  },
  hardware: {
    url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 26, Hardware, servidores, CPD y almacenamiento, versión 2026.1, § 3.4: mainframe actual, orientación transaccional y RAS; se contrasta con documentación de IBM sobre cargas batch y OLTP.'
  },
  radio: {
    url: 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 46, Redes inalámbricas, versión 2026, § 10.2: comunicaciones por satélite; cotejo temático, con altura, geometría y período de GEO comprobados en ESA e ITU.'
  },
  gis: {
    url: 'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 33, Temas 73–74 E-Learning y GIS, versión 2026, § 2.4: modelos de datos raster y vectorial; el bloque declara correspondencia A2 no aplicable para el tema SIG.'
  },
  security: {
    url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 48, Seguridad en redes y en el nivel de aplicación, versión 2026.1, secciones de técnicas criptográficas y algoritmos; cotejo de alcance, contrastado con NIST sobre DES/AES.'
  }
};

const records = [
  [1271, [59], ['II-2'], ['sistemas operativos', 'interbloqueo', 'deadlock', 'condiciones de Coffman', 'prevención', 'evitación', 'algoritmo del banquero'], [sources.coffman, sources.banker], null,
    'El original trataba como equivalentes prevención y evitación, y contenía una opción que definía una petición bloqueada como deadlock aunque no basta por sí sola. Se sustituye por una pregunta directa sobre las condiciones necesarias de Coffman: exclusión mutua, retención y espera, no apropiación y espera circular deben concurrir. Se aclara además que ordenar globalmente recursos previene rompiendo la espera circular, mientras que el algoritmo del banquero evita estados inseguros comprobando una secuencia segura; no es prevención en sentido estricto. Cotejo con ITIC Academy, bloque 27, § 2.7.', 'corregida'],
  [1272, [108], ['IV-7'], ['telecomunicaciones', 'comunicaciones por satélite', 'órbita GEO', 'órbita geoestacionaria', 'día sidéreo', '35.786 km'], [sources.geo, sources.ituOrbit], null,
    'Se precisa la definición, no solo la altitud y el período: una órbita geostacionaria terrestre es circular, ecuatorial y prograda, con período igual al día sidéreo (23 h 56 min 4 s), a unos 35.786 km sobre el ecuador. Esto la diferencia de una órbita geosíncrona inclinada o elíptica que no permanece fija sobre un punto. Cotejo temático con ITIC Academy, bloque 46, § 10.2 sobre comunicaciones por satélite.', 'corregida'],
  [1273, [52], ['II-1'], ['mainframe', 'sistemas de altas prestaciones', 'IBM Z', 'batch', 'OLTP', 'procesamiento transaccional', 'alta disponibilidad'], [sources.mainframe, sources.mainframeDetail], null,
    'El original generalizaba que el trabajo predominante es batch y confundía la escasez de fabricantes con una característica funcional. Se pregunta por las cargas actuales: los mainframes se diseñan para operación continua, procesamiento transaccional de alto volumen y también trabajos batch; no son plataformas exclusivamente batch ni exclusivamente de cálculo paralelo científico. Cotejo con ITIC Academy, bloque 26, § 3.4, mainframe actual y orientación transaccional/RAS.', 'corregida'],
  [1274, [74], [], ['sistemas de información geográfica', 'SIG', 'raster', 'ráster', 'celdas', 'píxeles', 'vectorial', 'cuadrícula regular'], [sources.raster], null,
    'La clave se mantiene: un ráster representa el espacio mediante una cuadrícula regular de celdas/píxeles, cada una con un valor. Puntos, líneas y polígonos son la representación vectorial; la precisión espacial depende, entre otros factores, de resolución, tamaño de celda y georreferenciación, y el ráster sí puede representar evolución temporal mediante series de capas. Cotejo con ITIC Academy, bloque 33, § 2.4, modelos raster y vectorial; ese bloque declara que el tema SIG no tiene correspondencia A2 directa.', 'vigente'],
  [1275, [79], ['IV-12'], ['cifrado', 'DES', 'AES', 'Rijndael', 'NIST', 'FIPS 197'], [sources.aes, sources.desWithdrawal], null,
    'El original nombra Rijndael como si fuera el estándar sucesor. Se distingue el estándar AES, adoptado para sustituir DES, del algoritmo Rijndael seleccionado como base de AES. La opción correcta pasa a ser AES; RC4 es otro cifrador de flujo, MD5 una función hash y SEAL un cifrador de flujo, no el estándar sucesor de DES. Cotejo temático con ITIC Academy, bloque 48, apartado de criptografía; la cronología y el estándar se verifican en NIST.', 'corregida']
];

apply({ numero: '191', fecha: '2026-10-24', records, edits: {
  1271: { texto: '¿Qué afirmación describe correctamente las condiciones necesarias para que se produzca un interbloqueo (deadlock) en el modelo clásico de asignación de recursos?', opciones: ['Deben concurrir exclusión mutua, retención y espera, no apropiación y espera circular.', 'Basta con que un proceso solicite un recurso que en ese momento está asignado a otro.', 'El algoritmo del banquero previene el deadlock eliminando la condición de no apropiación.', 'La ordenación global de recursos evita el deadlock al eliminar la exclusión mutua.'], respuesta_correcta: 0 },
  1272: { texto: '¿Qué combinación define una órbita geostacionaria terrestre (GEO)?', opciones: ['Órbita circular, ecuatorial y prograda, de unos 35.786 km de altitud y período igual al día sidéreo (23 h 56 min 4 s).', 'Órbita baja entre 160 y 2.000 km, con período de unas 12 horas.', 'Órbita elíptica e inclinada, de 35.786 km de altitud, que permanece fija sobre un punto del ecuador.', 'Órbita polar circular cuyo período es exactamente 24 horas solares.'], respuesta_correcta: 0 },
  1273: { texto: '¿Qué afirmación describe mejor las cargas de trabajo de los mainframes actuales?', opciones: ['Admiten tanto procesamiento batch como procesamiento transaccional en línea de gran volumen, con diseño orientado a operación continua y alta disponibilidad.', 'Solo ejecutan trabajos batch sin interacción con usuarios ni transacciones en línea.', 'Están diseñados exclusivamente para paralelizar simulaciones científicas y no para gestionar transacciones.', 'La arquitectura mainframe exige que todas las aplicaciones sean monolíticas y se ejecuten en un único procesador.'], respuesta_correcta: 0 },
  1275: { texto: '¿Qué estándar criptográfico adoptó NIST para sustituir DES como cifrado simétrico federal?', opciones: ['AES (Advanced Encryption Standard), basado en el algoritmo Rijndael seleccionado por NIST.', 'RSA, algoritmo asimétrico basado en aritmética modular.', 'MD5, función hash de 128 bits.', 'RC4, cifrador de flujo.'], respuesta_correcta: 0 }
}});

const fs = require('node:fs');
const path = require('node:path');
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-191.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const notes = {
  1271: { academy: 'os', block: 'Bloque 27, Sistemas Operativos, versión 2026 actualizada, § 2.7 (Coffman, prevención, evitación y algoritmo del banquero).', topics: 'A1-59/A2-II-2' },
  1272: { academy: 'radio', block: 'Bloque 46, Redes inalámbricas, versión 2026, § 10.2 (comunicaciones por satélite).', topics: 'A1-108/A2-IV-7' },
  1273: { academy: 'hardware', block: 'Bloque 26, versión 2026.1, § 3.4 (mainframe actual, procesamiento transaccional y RAS).', topics: 'A1-52/A2-II-1' },
  1274: { academy: 'gis', block: 'Bloque 33, Temas 73–74 E-Learning y GIS, versión 2026, § 2.4 (modelos raster y vectorial; el documento indica A2 no aplica a SIG).', topics: 'A1-74; A2 sin correspondencia directa' },
  1275: { academy: 'security', block: 'Bloque 48, Seguridad en redes y en el nivel de aplicación, versión 2026.1, técnicas criptográficas y algoritmos.', topics: 'A1-79/A2-IV-12' }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const meta = notes[q.id];
  const source = academy[meta.academy];
  q.clasificacion.bloque_academia = meta.block;
  q.clasificacion.nota = `Cotejo temático con ITIC Academy: ${meta.block} Correspondencia orientativa: ${meta.topics}.`;
  const comment = ` Cotejo temático con ITIC Academy: ${meta.block} Correspondencia orientativa con el programa oficial: ${meta.topics}.`;
  q.comentarios += comment;
  q.revision.observaciones += comment;
  q.revision.fuentes.push({ url: source.url, referencia: `ITIC Academy, ${meta.block} Correspondencia temática con ${meta.topics}.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo temático con ITIC Academy y registro actualizados para el lote 191.');
