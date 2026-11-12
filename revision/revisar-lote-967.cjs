const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');
const ref = (url, referencia) => ({ url, referencia });
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const d29 = 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk';
const d30 = 'https://docs.google.com/document/d/11CEe-2aKTukr0w6e752_y5y-wWuy1bPH/edit?usp=drivesdk';
const d36 = 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk';
const d37 = 'https://drive.google.com/file/d/1xTMCpPmwNi8hpb0nZ3sMqpgvrhLXT-yf/view?usp=drivesdk';
const d47 = 'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk';

const records = [
  [5156, ['60'], ['II-2'], ['Red Hat', 'RHEL', 'SysV', 'runlevel', 'nivel 5', 'graphical.target'], [
    ref('https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/6/html/deployment_guide/ch-services_and_daemons', 'Red Hat Enterprise Linux 6 Deployment Guide, Runlevels: nivel 5 corresponde a modo multiusuario completo con interfaz gráfica y pantalla de login.'),
    ref('https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/7/html/system_administrators_guide/chap-managing_services_with_systemd', 'Red Hat Enterprise Linux 7 System Administrator’s Guide, tabla de equivalencia SysV/systemd: runlevel 5 se corresponde con runlevel5.target/graphical.target.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 60: fundamentos y administración de UNIX-LINUX.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.2: Windows, Linux y Unix.'),
    ref(d47, 'ITIC Academy, bloque 47 «Aplicaciones móviles y sistemas operativos», versión 2026.1: fundamentos y administración de Linux/Unix; la equivalencia histórica de niveles se verifica en documentación de Red Hat.')
  ], null, 'La pregunta usa la terminología heredada de runlevels y el login X; en la asignación SysV de RHEL, el nivel 5 es el modo multiusuario gráfico. En RHEL 7 y posteriores systemd usa graphical.target, conservando la asociación de compatibilidad runlevel5.target; no se presenta el número como interfaz de configuración actual.', 'corregida'],
  [5157, ['64'], ['II-5'], ['modelo relacional', 'relaciones base', 'vistas', 'instantáneas', 'snapshots', 'resultado de consulta'], [
    ref('https://www.sigmod.org/publications/dblp/db/conf/vldb/Adiba81.html', 'Adiba, Derived Relations: A Unified Mechanism for Views, Snapshots, and Distributed Data, VLDB 1981: el resumen describe la base relacional como compuesta por relaciones base, vistas e instantáneas (snapshots).'),
    ref('https://sigmodrecord.org/publications/sigmodRecord/8207/pdfs/984555.1108830.pdf', 'SIGMOD Record, ANSI/X3/SPARC Feature Analysis: una base relacional puede contener relaciones base, vistas y/o snapshots; los resultados de consultas no forman necesariamente un miembro persistente de esa taxonomía.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 64: modelo relacional y SQL.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.5: arquitectura ANSI/SPARC y SGBD relacionales.'),
    ref(d29, 'ITIC Academy, bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1: relaciones, vistas y vistas materializadas; no se atribuye al bloque la taxonomía histórica exacta de snapshots.')
  ], null, 'Se sustituye la expresión ambigua «relaciones persistentes» por la taxonomía clásica respaldada por literatura de bases de datos relacionales: relaciones base, vistas e instantáneas. Los resultados intermedios de consultas son normalmente transitorios salvo que se materialicen. Snapshot/instantánea es aquí la denominación histórica de una relación derivada con datos persistidos o refrescados.', 'corregida'],
  [5158, [], [], ['historia', 'fonética', 'análisis de voz', 'espectrógrafo sonoro', 'Ralph K. Potter', 'Bell Labs'], [
    ref('https://doi.org/10.1121/10.0040003', 'Wright, Kelley y Tucker, The history of the speech spectrogram, Journal of the Acoustical Society of America (2025): sitúa su desarrollo en Bell Labs justo antes y durante la Segunda Guerra Mundial y su publicación pública después de la guerra.'),
    ref('https://www.isca-archive.org/hscr_2021/braun21_hscr.pdf', 'Braun, From visible speech to voiceprints, Workshop on the History of Speech Communication Research 2021, §4: identifica el Sound Spectrograph de Ralph K. Potter, desarrollado a comienzos de los años cuarenta.'),
    ref('https://languagelog.ldc.upenn.edu/myl/SpectrographSession1946.pdf', 'Koenig, Dunn y Lacy, The Sound Spectrograph, Journal of the Acoustical Society of America (1946): artículo contemporáneo sobre el instrumento y el análisis acústico del habla.')
  ], null, 'El instrumento aludido es el espectrógrafo sonoro, desarrollado en Bell Labs durante la década de 1940 para visualizar y estudiar patrones acústicos del habla. Se precisa «espectrógrafo sonoro» para diferenciarlo de otros espectrógrafos. El temario oficial A1/A2 2025 no contiene un epígrafe específico de fonética o análisis del habla; se deja la clasificación de ambos cuerpos vacía antes que forzar una etiqueta de tratamiento de imagen.', 'corregida'],
  [5159, ['79'], ['IV-12'], ['cifrado en flujo', 'cifrado simétrico', 'clave secreta', 'clave pública', 'flujo de bits'], [
    ref('https://learn.microsoft.com/en-us/windows/apps/develop/security/cryptographic-keys', 'Microsoft Learn, Cryptographic keys: los cifradores de flujo son funciones simétricas que combinan bits del texto claro con un flujo de clave pseudoaleatorio.'),
    ref('https://csrc.nist.gov/glossary/term/stream_cipher', 'NIST CSRC glossary, stream cipher: define la operación por flujo y distingue la clasificación por tipo de clave (simétrica o asimétrica); los diseños convencionales de cifrado en flujo son de clave simétrica.'),
    ref('https://datatracker.ietf.org/doc/rfc7634/', 'IETF RFC 7634: especifica ChaCha20, cifrador en flujo empleado junto con Poly1305 en IKEv2/IPsec; la clave de cifrado es secreta y compartida por las partes.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 79: cifrado simétrico y asimétrico.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.12: técnicas criptográficas y protocolos seguros.'),
    ref(d36, 'ITIC Academy, bloque 36 «Seguridad, criptografía, identificación y firma», versión 2026.1: cifrado simétrico y asimétrico, clave y flujo de bits.')
  ], null, 'El cifrado en flujo convencional pertenece a la criptografía simétrica/de clave secreta: emisor y receptor comparten la clave que gobierna el flujo seudoaleatorio combinado con el texto. Se distingue de los cifradores de bloque, aunque un modo de un cifrador de bloque pueda operar como flujo.', 'corregida'],
  [5160, ['66'], ['III-11'], ['SQLMetal', 'LINQ to SQL', '.NET Framework', 'generación de código', 'DBML', 'mapeo objeto-relacional'], [
    ref('https://learn.microsoft.com/en-us/dotnet/framework/tools/sqlmetal-exe-code-generation-tool', 'Microsoft Learn, SqlMetal.exe (Code Generation Tool): SQLMetal genera código y mapeos para LINQ to SQL desde una base de datos o un archivo DBML.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 66: entorno de desarrollo Microsoft .NET.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.11: plataforma .NET, modelo de programación, servicios y herramientas.'),
    ref(d30, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1: plataforma .NET, ADO.NET y herramientas de persistencia; SQLMetal se valida contra la documentación de Microsoft por ser una herramienta histórica de LINQ to SQL.')
  ], null, 'SqlMetal.exe es una herramienta de línea de comandos de .NET Framework que genera código y mapeos para LINQ to SQL a partir de una base de datos o de un archivo DBML. Es una herramienta histórica del ecosistema LINQ to SQL, no un lenguaje ni un estándar SQL.', 'corregida']
];

const edits = {
  5156: { texto: 'En el esquema SysV de niveles de ejecución de Red Hat Enterprise Linux, ¿qué nivel corresponde al modo multiusuario completo con pantalla gráfica de login X?', opciones: ['Nivel 1','Nivel 3','Nivel 5','Nivel 6'], respuesta_correcta: 2, comentarios: 'En el mapeo tradicional SysV de RHEL, runlevel 5 es multiusuario gráfico. En las versiones actuales basadas en systemd la unidad recomendada es graphical.target, con runlevel5.target como alias de compatibilidad.' },
  5157: { texto: 'En la taxonomía clásica de relaciones componentes de una base de datos relacional, ¿qué clases se citan?', opciones: ['Relaciones base, vistas e instantáneas (snapshots).','Solo relaciones base y vistas.','Relaciones base, vistas y cualquier resultado temporal de consulta, aunque no se conserve.','Relaciones base e índices, pero no vistas ni datos derivados.'], respuesta_correcta: 0, comentarios: 'La literatura clásica de sistemas relacionales cita relaciones base, vistas e instantáneas. Un snapshot es una relación derivada cuyos datos se conservan/refrescan; un resultado intermedio no persiste salvo materialización.' },
 5158: { texto: '¿Qué instrumento desarrollado en Bell Laboratories durante la década de 1940 facilitó el análisis visual de los patrones acústicos del habla?', opciones: ['El espectrógrafo sonoro.','El VODER, sintetizador de voz presentado en la Feria Mundial de 1939.','La máquina parlante de Wolfgang von Kempelen, del siglo XVIII.','La máquina de Kratzenstein, del siglo XVIII.'], respuesta_correcta: 0, comentarios: 'El espectrógrafo sonoro de Ralph K. Potter representaba visualmente la energía de la señal de voz en función del tiempo y la frecuencia, y permitió analizar rasgos acústicos del habla.' },
 5159: { texto: 'En la clasificación convencional de algoritmos criptográficos, ¿a qué familia pertenecen los cifradores en flujo?', opciones: ['A los criptosistemas de clave pública.','A los cifradores en bloque, por definición.','A los criptosistemas simétricos o de clave secreta.','A ninguna de las familias criptográficas.'], respuesta_correcta: 2, comentarios: 'Los cifradores en flujo convencionales son algoritmos simétricos que combinan el texto claro, elemento a elemento, con un flujo derivado de una clave secreta compartida. Un modo de bloque puede emular el funcionamiento de flujo, pero eso no convierte ambos términos en sinónimos.' },
 5160: { texto: 'En el ecosistema .NET Framework/LINQ to SQL, ¿qué es SQLMetal?', opciones: ['Un lenguaje declarativo para consultar bases de datos relacionales.','Una herramienta de línea de comandos que genera código y mapeos de LINQ to SQL a partir de una base de datos o un archivo DBML.','Un conjunto de extensiones al estándar ANSI SQL.','Un estándar independiente de acceso a bases de datos.'], respuesta_correcta: 1, comentarios: 'SqlMetal.exe es una herramienta histórica de .NET Framework que genera clases y mapeos LINQ to SQL; no es un lenguaje ni un estándar de acceso.' }
};

const logPath = path.join(__dirname, 'cambios-lote-967.json');
if (!fs.existsSync(logPath)) aplicar({ numero: '967', fecha: '2026-11-12', records, edits });
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5156: ['ITIC Academy, bloque 47 «Aplicaciones móviles y sistemas operativos», versión 2026.1: fundamentos/administración Linux y Unix; la correspondencia histórica de RHEL se comprueba con Red Hat.', 'Cotejo directo A1-60/A2-II.2; runlevels son la nomenclatura SysV heredada y systemd usa targets.'],
  5157: ['ITIC Academy, bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1: modelo relacional, relaciones, vistas y vistas materializadas; no se atribuye al bloque la fraseología de una taxonomía histórica.', 'Cotejo curricular directo A1-64/A2-II.5.'],
  5158: ['No se localizó en los materiales Academy accesibles un bloque específico sobre historia del espectrógrafo sonoro o fonética acústica; el bloque 37 solo es próximo por su temática de imagen/digitalización y no se utiliza como cobertura directa.', 'Sin epígrafe A1/A2 específico de espectrógrafo sonoro o análisis acústico del habla en los programas GSI 2025; se deja sin etiquetas oficiales para no forzar correspondencias.'],
  5159: ['ITIC Academy, bloque 36 «Seguridad, criptografía, identificación y firma», versión 2026.1: claves simétricas/asimétricas y cifrado; cotejo curricular general.', 'Cotejo directo A1-79/A2-IV.12; fuentes técnicas respaldan que el cifrado en flujo convencional es simétrico.'],
  5160: ['ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1: plataforma .NET, persistencia y herramientas; no se presenta SQLMetal como herramienta actual recomendada, pues se valida como componente histórico con la documentación archivada de Microsoft.', 'Cotejo curricular directo A1-66/A2-III.11; SQLMetal pertenece específicamente a .NET Framework/LINQ to SQL.']
};
const entries = new Map(log.cambios.map(item => [item.id, item]));
const motive = 'Cotejo del temario Academy accesible en Drive y separación entre cobertura curricular y autoridad técnica.';
for (const [key, [block, note]] of Object.entries(academy)) {
  const id = Number(key), q = bank.preguntas.find(item => item.id === id), entry = entries.get(id);
  if (!q || !entry) throw new Error(`Falta ${id}`);
  const before = { bloque_academia: q.clasificacion.bloque_academia, nota: q.clasificacion.nota };
  q.clasificacion.bloque_academia = block;
  q.clasificacion.nota = note;
  const corrections = entry.correcciones_posteriores || [];
  if (!corrections.some(item => item.motivo === motive)) corrections.push({ fecha: '2026-11-12', motivo: motive, clasificacion_anterior: before, clasificacion_actualizada: { bloque_academia: block, nota: note } });
  entry.correcciones_posteriores = corrections;
  entry.actualizada = structuredClone(q);
}
let replaced = 0;
const raw = fs.readFileSync(bankPath, 'utf8');
const output = raw.replace(/^    \{[\s\S]*?^    \}/gm, block => {
  const old = JSON.parse(block), entry = entries.get(old.id);
  if (!entry) return block;
  replaced++;
  return JSON.stringify(entry.actualizada, null, 2).split('\n').map(line => `    ${line}`).join('\n');
});
if (replaced !== 5) throw new Error(`Se esperaban 5 preguntas, resultó ${replaced}`);
fs.writeFileSync(bankPath, output);
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
