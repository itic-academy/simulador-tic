const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const boeA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academyNetworks = 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const academyDb = 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk';
const academyElearning = 'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk';
const academyMetrica = 'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk';
const msNetstat = 'https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/netstat';
const codd = 'https://thaumatorium.com/articles/the-papers-of-ef-the-coddfather-codd/1985b-does-your-dmbs-run-by-the-rules/';
const rfc5388 = 'https://datatracker.ietf.org/doc/html/rfc5388';
const rfc2925 = 'https://datatracker.ietf.org/doc/html/rfc2925';
const elearningPaper = 'https://doi.org/10.5944/ried.24.2.29073';
const elearningPdf = 'https://aiesad.org/wp-content/uploads/2021/05/1467-486-PB.pdf';
const metrica = 'https://administracionelectronica.gob.es/documentacion/metodologias-guias/pae-metrica-v3';
const psi = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A8d2cfee5-5617-4dea-8cf8-7b7a0131de84/METRICA_V3_Panificacion_de_Sistemas_de_Informacion.pdf';
const dsi = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A7f366cd1-6759-42d9-9e0b-31edce0256d9/METRICA_V3_Diseno_del_Sistema_de_Informacion.pdf';
const csi = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A19993efa-8c88-4205-b1a5-fb7fc0bd94de/METRICA_V3_Construccion_del_Sistema_de_Informacion.pdf';
const msi = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ae15c0c5b-dd9c-4e48-82e3-9e36ba18e839/METRICA_V3_Mantenimiento_de_Sistemas_de_Informacion.pdf';

const records = [
  [4921, ['108', '115'], ['II-8'], ['redes', 'TCP', 'UDP', 'netstat', 'puertos en escucha'], [
    { url: msNetstat, referencia: 'Microsoft Learn, comando netstat de Windows: la opción -a presenta las conexiones TCP activas y los puertos TCP/UDP en escucha. El enunciado se limita expresamente a Windows y habla de endpoints/puertos, no de “conexiones UDP” como si UDP orientado a datagramas mantuviera sesiones.' },
    { url: boeA1, referencia: 'Convocatoria A1 GSI 2025, temas 108 y 115: redes, protocolos de encaminamiento y redes IP.' },
    { url: boeA2, referencia: 'Convocatoria A2 GSI AGE 2025, tema II.8: modelo TCP/IP, protocolos, direccionamiento y encaminamiento.' }
  ], null,
  'Respuesta B (netstat -a). Se concreta el sistema operativo: en Windows, Microsoft documenta que -a muestra todas las conexiones TCP activas y los puertos TCP y UDP en los que el equipo escucha. UDP no establece conexiones en el sentido de TCP, por lo que se corrige la expresión imprecisa “conexiones TCP/UDP abiertas” por “conexiones TCP activas y endpoints/puertos en escucha”. En otros sistemas y para inventarios más detallados pueden utilizarse herramientas o sintaxis distintas.', 'corregida'],
  [4922, ['63', '64'], ['II-5'], ['bases de datos', 'modelo relacional', 'Codd', 'reglas de Codd', 'nulos', 'independencia de datos'], [
    { url: codd, referencia: 'Edgar F. Codd, “Does Your DBMS Run By the Rules?”, Computerworld, 21-10-1985 (reproducción del artículo original): enumera el tratamiento sistemático de valores nulos como regla 3, y las independencias física y lógica como reglas 8 y 9. No figura una regla autónoma de tratamiento sistemático de booleanos.' },
    { url: boeA1, referencia: 'Convocatoria A1 GSI 2025, temas 63–64: SGBD, modelo relacional y SQL.' },
    { url: boeA2, referencia: 'Convocatoria A2 GSI AGE 2025, tema II.5: SGBD relacionales, ANSI/SPARC y SQL.' }
  ], null,
  'Respuesta D. El artículo original de Codd enumera la independencia física (regla 8), la independencia lógica (regla 9) y el tratamiento sistemático de valores nulos (regla 3). No incluye una regla denominada “tratamiento sistemático de booleanos”. La formulación conserva la distinción entre las reglas de Codd y las capacidades generales que los SGBD puedan ofrecer.', 'corregida'],
  [4923, ['108', '115'], ['II-8'], ['redes', 'IP', 'ICMP', 'traceroute', 'TTL', 'sondas', 'saltos'], [
    { url: rfc5388, referencia: 'IETF RFC 5388, apartados 2.1 y 2.2: traceroute descubre saltos incrementando en cada paso el TTL de las sondas; normalmente los routers intermedios devuelven ICMP Time Exceeded. El documento advierte que varían las implementaciones y el tipo de sonda (UDP o ICMP Echo), y que puede haber saltos no observables.' },
    { url: rfc2925, referencia: 'IETF RFC 2925, sección 3: las sondas UDP o ICMP encapsuladas en IP pueden emplear el TTL para descubrir los saltos; los routers pueden no responder y dejar saltos invisibles.' },
    { url: boeA1, referencia: 'Convocatoria A1 GSI 2025, temas 108 y 115: redes IP y encaminamiento.' },
    { url: boeA2, referencia: 'Convocatoria A2 GSI AGE 2025, tema II.8: modelos, protocolos, direccionamiento y encaminamiento.' }
  ], null,
  'Respuesta C. Traceroute permite observar los saltos que responden a las sondas de diagnóstico dirigidas al destino. No determina qué ruta seguirá cualquier datagrama IP ni garantiza observar todos los routers: incrementa el TTL de sondas sucesivas y suele recibir mensajes ICMP Time Exceeded en los saltos intermedios; el formato de la sonda depende de la implementación y algunos equipos no responden.', 'corregida'],
  [4924, ['73'], [], ['e-learning', 'calidad', 'evaluación de programas', 'calidad institucional', 'calidad docente', 'plataforma'], [
    { url: elearningPaper, referencia: 'Ortiz-López, Olmos-Migueláñez y Sánchez-Prieto (2021), “Calidad en e-Learning: identificación de sus dimensiones, propuesta y validación de un modelo para su evaluación en Educación Superior”, RIED 24(2), DOI 10.5944/ried.24.2.29073. El artículo define explícitamente cuatro dimensiones: calidad de la institución, calidad docente, calidad del sistema de aprendizaje/plataforma y calidad de la evaluación del programa. Por ello la “calidad de conexión” no es una de las cuatro dimensiones generales de ese modelo.' },
    { url: elearningPdf, referencia: 'Texto completo del artículo académico (RIED, 2021), tablas 4–5 y descripción del modelo final; fuente de la identificación explícita del modelo que faltaba en el enunciado original.' },
    { url: boeA1, referencia: 'Convocatoria A1 GSI 2025, tema 73: e-learning, conceptos, herramientas, sistemas de implantación y normalización.' }
  ], null,
  'Respuesta A. Se precisa el modelo que el enunciado original dejaba sin identificar: el propuesto y validado por Ortiz-López, Olmos-Migueláñez y Sánchez-Prieto (2021) para educación superior. Sus cuatro dimensiones son calidad de la institución, calidad docente, calidad del sistema de aprendizaje/plataforma y calidad de la evaluación del programa; “calidad de conexión” no figura como dimensión general. La conexión puede ser un atributo técnico evaluable dentro de una plataforma, pero eso no la convierte en una de las cuatro dimensiones del modelo. El temario ITIC Academy bloque 33 cubre A1-73 y declara A2 no aplicable; no se fuerza una equivalencia A2.', 'corregida'],
  [4925, ['95'], ['III-2'], ['MÉTRICA v3', 'PSI', 'DSI', 'CSI', 'MSI', 'planificación', 'desarrollo', 'mantenimiento'], [
    { url: metrica, referencia: 'PAe, portal oficial de MÉTRICA v3: metodología de planificación, desarrollo y mantenimiento de sistemas de información; identifica PSI, DSI, CSI y MSI como procesos de la estructura de ciclo de vida.' },
    { url: psi, referencia: 'MÉTRICA v3, proceso PSI, Planificación de Sistemas de Información.' },
    { url: dsi, referencia: 'MÉTRICA v3, proceso DSI, Diseño del Sistema de Información.' },
    { url: csi, referencia: 'MÉTRICA v3, proceso CSI, Construcción del Sistema de Información.' },
    { url: msi, referencia: 'MÉTRICA v3, proceso MSI, Mantenimiento del Sistema de Información.' },
    { url: boeA1, referencia: 'Convocatoria A1 GSI 2025, tema 95: metodología de planificación y desarrollo de sistemas de información MÉTRICA.' },
    { url: boeA2, referencia: 'Convocatoria A2 GSI AGE 2025, tema III.2: gestión y planificación del proceso y metodologías de desarrollo.' }
  ], null,
  'Respuesta D. La estructura principal de ciclo de vida de MÉTRICA v3 se agrupa en Planificación (PSI), Desarrollo (EVS, ASI, DSI, CSI e IAS) y Mantenimiento (MSI). Por tanto, la opción que recoge los tres grupos es “Planificación, Desarrollo y Mantenimiento de sistemas de información”.', 'corregida']
];

const edits = {
  4921: {
    texto: 'En Windows, ¿qué comando muestra las conexiones TCP activas y los puertos TCP/UDP en los que el equipo está escuchando?',
    opciones: ['ping', 'netstat -a', 'tracert', 'ipconfig'],
    respuesta_correcta: 1
  },
  4922: {
    texto: '¿Cuál de estas opciones NO es una de las reglas formuladas por E. F. Codd para los SGBD relacionales?',
    opciones: ['Independencia física de los datos.', 'Independencia lógica de los datos.', 'Tratamiento sistemático de valores nulos.', 'Tratamiento sistemático de valores booleanos.'],
    respuesta_correcta: 3
  },
  4923: {
    texto: 'Al ejecutar traceroute con sondas de TTL creciente hacia un destino, ¿qué información permite obtener de los routers que responden?',
    opciones: [
      'Si el sistema de destino está accesible, como única información de la herramienta.',
      'La ruta que necesariamente seguirá cualquier datagrama IP hacia ese destino.',
      'Los saltos observados en la ruta de las sondas de diagnóstico hacia el destino.',
      'Un mapa completo de todos los equipos de la red utilizada.'
    ],
    respuesta_correcta: 2
  },
  4924: {
    texto: 'En el modelo de evaluación de calidad del e-learning en educación superior propuesto por Ortiz-López, Olmos-Migueláñez y Sánchez-Prieto (2021), ¿cuál NO es una de sus cuatro dimensiones?',
    opciones: ['Calidad de la conexión.', 'Calidad de la institución.', 'Calidad docente.', 'Calidad del sistema de aprendizaje o plataforma.'],
    respuesta_correcta: 0
  },
  4925: {
    texto: '¿Qué tres grupos reúnen los procesos principales de ciclo de vida de MÉTRICA v3?',
    opciones: [
      'Planificación, análisis, construcción y mantenimiento.',
      'Análisis, desarrollo y mantenimiento.',
      'Análisis, desarrollo, pruebas y mantenimiento.',
      'Planificación, desarrollo y mantenimiento.'
    ],
    respuesta_correcta: 3
  }
};

aplicar({ numero: '920', fecha: '2026-11-11', records, edits });

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-920.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4921: [academyNetworks, 'ITIC Academy 2026, bloque 42 «Redes»: coteja la cobertura curricular de redes, IP, TCP/UDP, ICMP y diagnóstico. El PDF no prescribe netstat; la sintaxis concreta se comprueba en Microsoft Learn.'],
  4922: [academyDb, 'ITIC Academy 2026, bloque 29 «Bases de Datos», temas A1-63/64 y A2-T5: incluye expresamente el modelo relacional y las reglas de Codd; su resumen recoge las reglas 3, 8 y 9.'],
  4923: [academyNetworks, 'ITIC Academy 2026, bloque 42 «Redes»: sitúa ICMP y traceroute entre las herramientas/protocolos de diagnóstico de redes. Los límites sobre sondas y saltos observables se contrastan con RFC 5388 y RFC 2925.'],
  4924: [academyElearning, 'ITIC Academy 2026.1, bloque 33 «E-learning y Sistemas de Información Geográfica», §§ 1.1–1.10: coteja conceptos, modelos, plataformas y normalización; el programa declara A2 «NO APLICA». El modelo concreto de cuatro dimensiones se identifica en el enunciado y se verifica en el artículo revisado por pares, no se atribuye al temario de academia.'],
  4925: [academyMetrica, 'ITIC Academy 2026.1, bloque 15 «Metodologías Ágiles y Ciclo de Vida», sección MÉTRICA v3: enumera PSI, EVS, ASI, DSI, CSI, IAS y MSI y permite cotejar su agrupación en Planificación, Desarrollo y Mantenimiento; la estructura se comprueba en los documentos oficiales de PAe.']
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const [url, detail] = academy[change.id];
  q.clasificacion.bloque_academia = `${detail} El material se cita como cotejo curricular, no como fuente primaria de la respuesta.`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo ITIC Academy: ${detail} Fuentes técnicas primarias y alcance están documentados en el registro del lote.`;
  q.revision.observaciones += ` ${detail}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `ITIC Academy: ${detail}` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy añadido al lote 920.');
