const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const procurement = 'https://www.boe.es/buscar/act.php?id=BOE-A-2026-10307';
const hibernate7 = 'https://hibernate.org/orm/releases/7.0/';
const hibernateLicense = 'https://hibernate.org/community/license/';
const hibernateBytecode = 'https://docs.hibernate.org/orm/7.2/javadocs/org/hibernate/cfg/BytecodeSettings.html';
const gnu = 'https://www.gnu.org/philosophy/categories.html';
const itu = 'https://www.itu.int/rec/T-REC-X.200/en';
const nistIds = 'https://csrc.nist.gov/glossary/term/intrusion_detection_system';
const nistIdps = 'https://csrc.nist.gov/glossary/term/intrusion_detection_and_prevention_system';
const academyProc = 'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk';
const academyJava = 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const academyLicense = 'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk';
const academySecurity = 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const academyProtocols = 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk';

const refs = (items) => items.map(([url, referencia]) => ({ url, referencia }));
const records = [
  [4931, ['11', '39'], [], ['contratación centralizada', 'acuerdos marco', 'contratación TIC', 'DGRCC', 'Junta de Contratación Centralizada'], refs([
    [procurement, 'Orden HAC/459/2026, arts. 4.1 y 6.2: distingue la Junta de Contratación Centralizada como órgano del sistema estatal y atribuye a la DGRCC, por desconcentración de competencias, la contratación de los contratos basados en acuerdos marco del ámbito obligatorio estatal. Se limita el enunciado a este supuesto; no se generaliza a entidades adheridas, cuyo órgano se determina conforme al art. 229.6 LCSP y a sus reglas propias.'],
    [a1, 'Convocatoria A1 GSI 2025, temas 11 (contratos públicos) y 39 (gestión de la compra pública TIC).'],
    [academyProc, 'ITIC Academy 2026, bloque 05, §7 «Gestión de la compra pública TIC» y §7.2 «Racionalización técnica de la contratación». El temario identifica A1-11 y A1-39, sin equivalente A2; se coteja la Orden HAC/459/2026 publicada con posterioridad a las versiones previas del material.']
  ]), null,
  'Respuesta B. Para los contratos basados en acuerdos marco del ámbito obligatorio del sistema estatal de contratación centralizada, el artículo 6.2 de la Orden HAC/459/2026 atribuye la función de órgano de contratación a la DGRCC, conforme a la desconcentración de competencias de la Junta de Contratación Centralizada. El enunciado original era demasiado amplio: para entidades adheridas el órgano se determina de acuerdo con el artículo 229.6 de la LCSP y sus normas generales. Se conserva y aclara la clave en el supuesto expresamente delimitado.', 'corregida'],
  [4932, ['67'], ['II-3', 'III-10'], ['Hibernate ORM', 'Java', 'licencias', 'Apache License 2.0', 'Javassist', 'Byte Buddy'], refs([
    [hibernate7, 'Hibernate ORM, serie 7.0: documentación de la versión y licencia; especifica que Hibernate ORM se publica bajo ASL v2 desde 7.0.0.Beta5.'],
    [hibernateLicense, 'Hibernate Community, Licenses: el proyecto diferencia las licencias por producto y versión; Hibernate ORM usa ASL 2.0 desde 7.0.0.Beta5 y algunas series/productos históricos mantienen LGPL 2.1.'],
    [hibernateBytecode, 'Hibernate ORM Javadoc, BytecodeSettings: Byte Buddy es el proveedor de bytecode admitido actualmente y es el predeterminado desde 5.3; Javassist describe versiones/configuraciones anteriores, no una característica universal actual.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 67: entorno de desarrollo Java.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, temas II.3 (lenguajes y paradigmas de programación) y III.10 (arquitectura Java EE/Jakarta EE, persistencia).'],
    [academyJava, 'ITIC Academy 2026, bloque 30: tecnologías de sistemas de información, Java y persistencia JPA/Hibernate; su índice vincula el contenido a los temas A1 de tecnologías y A2 de programación/Java. Se usa como cotejo curricular.']
  ]), null,
  'Respuesta B. La afirmación original «Hibernate se distribuye bajo LGPL» carece de versión: la licencia depende del producto y de su serie. Se pregunta ahora específicamente por Hibernate ORM 7.0, que se distribuye bajo Apache License 2.0 desde 7.0.0.Beta5. Hibernate ORM 6.x y productos históricos pueden tener otra licencia; Javassist tampoco es el proveedor predeterminado actual (Byte Buddy lo es desde Hibernate 5.3). NHibernate es un proyecto ORM distinto para .NET, no una compilación de Hibernate ORM para .NET.', 'corregida'],
  [4933, ['69'], ['II-14'], ['software libre', 'shareware', 'dominio público', 'software gratis', 'licencias'], refs([
    [gnu, 'Free Software Foundation, Categories of Free and Nonfree Software: shareware no es software libre; la libertad depende de permisos de uso, copia, modificación y redistribución y del acceso al código fuente, no de que la descarga cueste cero. El dominio público solo equivale a software libre si se cumplen las condiciones necesarias, incluido el acceso al código fuente cuando se requiere.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 69: software de código abierto y software libre.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema II.14: software libre y propietario, licencias y protección jurídica.'],
    [academyLicense, 'ITIC Academy 2026, bloque 18, tema A1-43/A2-II.14: explica la diferencia entre software libre, freeware/shareware, disponibilidad gratuita y licencias. Se usa como cotejo curricular.']
  ]), null,
  'Respuesta C. Según la taxonomía de la Free Software Foundation, shareware permite normalmente redistribuir copias, pero condiciona la continuación de uso al pago y no otorga las libertades propias del software libre. «Descarga gratuita» describe el precio, no los derechos; una obra de dominio público puede ser software libre si se dispone del código fuente, mientras que GPL sí es una licencia de software libre.', 'corregida'],
  [4934, ['111'], ['II-8'], ['modelo OSI', 'ISO', 'ITU-T X.200', 'siete capas', 'capas de red'], refs([
    [itu, 'UIT-T X.200, modelo básico de referencia OSI: organiza la arquitectura de interconexión en siete capas. La pregunta se limita a la secuencia canónica de capas de la capa inferior a la superior; se eliminan afirmaciones históricas ambiguas sobre estilos cliente-servidor/peer-to-peer.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 111: modelo OSI de ISO, arquitectura y capas.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema II.8: modelo TCP/IP y modelo OSI, arquitectura y capas.']
  ]), null,
  'Respuesta B. De abajo arriba, las siete capas del modelo OSI son física, enlace de datos, red, transporte, sesión, presentación y aplicación. La opción que describía comunicación peer-to-peer no se conserva: no es necesaria para identificar el número y orden de capas y su redacción histórica era imprecisa.', 'corregida'],
  [4935, ['125', '126'], ['II-13', 'IV-12'], ['IDS', 'detección de intrusiones', 'NIST', 'alertas', 'IDS/IPS'], refs([
    [nistIds, 'NIST CSRC Glossary, intrusion detection system: servicio de seguridad que monitoriza y analiza eventos de red o sistema para detectar intentos de acceso no autorizado y emitir avisos en tiempo real o casi real.'],
    [nistIdps, 'NIST CSRC Glossary, intrusion detection and prevention system: la definición IDPS añade que intenta detener incidentes detectados; se diferencia así un IDS de funciones de prevención/bloqueo.'],
    [a1, 'Convocatoria A1 GSI 2025, temas 125 (seguridad en redes, control de accesos e intrusiones) y 126 (seguridad de aplicaciones).'],
    [a2, 'Convocatoria A2 GSI AGE 2025, temas II.13 (herramientas en ciberseguridad y gestión de incidentes) y IV.12 (seguridad en redes y control de accesos).'],
    [academySecurity, 'ITIC Academy 2026, bloque 48, §7.1 «Sistemas de detección y prevención de intrusiones»: distingue IDS/IPS, SIEM y alertado; alineado con A1-125/126 y A2-II.13. Se usa como cotejo curricular.']
  ]), null,
  'Respuesta D. Un IDS monitoriza y analiza eventos de red o de sistema para detectar actividad sospechosa o intentos de acceso no autorizado y generar avisos. «Controlar» o bloquear automáticamente el tráfico describe una función preventiva propia de un IPS/IDPS o de otros controles perimetrales, no una propiedad necesaria de todo IDS.', 'corregida']
];

const edits = {
  4931: {
    texto: 'Según el artículo 6.2 de la Orden HAC/459/2026, en los contratos basados en acuerdos marco del ámbito obligatorio del sistema estatal de contratación centralizada, ¿qué órgano actúa como órgano de contratación?',
    opciones: [
      'La Junta Consultiva de Contratación Pública del Estado.',
      'La Dirección General de Racionalización y Centralización de la Contratación (DGRCC), conforme a la desconcentración de competencias de la Junta de Contratación Centralizada.',
      'La mesa de contratación, con carácter general.',
      'La Agencia Estatal de Administración Digital (AEAD).'
    ],
    respuesta_correcta: 1
  },
  4932: {
    texto: '¿Qué afirmación sobre la licencia de Hibernate ORM 7.0 es correcta?',
    opciones: [
      'Es siempre LGPL 2.1, con independencia de la versión y del producto Hibernate.',
      'Hibernate ORM 7.0 se publica bajo Apache License 2.0 desde la versión 7.0.0.Beta5.',
      'Hibernate ORM 7.0 utiliza Javassist como único proveedor de bytecode y no admite otro.',
      'Todas las respuestas son correctas.'
    ],
    respuesta_correcta: 1
  },
  4933: {
    texto: 'Según la clasificación de la Free Software Foundation, ¿cuál de estas categorías no es software libre por las condiciones habituales de uso que impone?',
    opciones: [
      'Software de dominio público con código fuente disponible y libertad para modificarlo y redistribuirlo.',
      'Software distribuido bajo GNU GPL, que garantiza las libertades definidas por esa licencia.',
      'Shareware, cuyo uso continuado normalmente requiere pagar una licencia y que no concede las libertades propias del software libre.',
      'Software que se puede descargar gratis y que, además, concede por licencia derechos de uso, modificación y redistribución.'
    ],
    respuesta_correcta: 2
  },
  4934: {
    texto: 'Según el modelo básico de referencia OSI de UIT-T X.200, ¿qué secuencia enumera las siete capas desde la inferior hasta la superior?',
    opciones: [
      'Física, enlace, red, transporte y aplicación.',
      'Física, enlace de datos, red, transporte, sesión, presentación y aplicación.',
      'Física, enlace, Internet, transporte, presentación, sesión y aplicación.',
      'Enlace, física, red, sesión, transporte, aplicación y presentación.'
    ],
    respuesta_correcta: 1
  },
  4935: {
    texto: '¿Qué función caracteriza a un sistema de detección de intrusiones (IDS)?',
    opciones: [
      'Detectar únicamente virus mediante firmas de archivos y desinfectarlos.',
      'Identificar páginas de phishing y bloquearlas siempre antes de que lleguen al usuario.',
      'Capturar imágenes de una zona y alertar cuando detecta movimiento físico.',
      'Monitorizar y analizar eventos de red o sistema para detectar actividad sospechosa y generar alertas; no requiere bloquear el tráfico.'
    ],
    respuesta_correcta: 3
  }
};

aplicar({ numero: '922', fecha: '2026-11-11', records, edits });

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-922.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academyById = {
  4931: [academyProc, 'ITIC Academy 2026, bloque 05, §7: contratación y compra pública TIC (temas A1-11/A1-39; sin equivalente expreso A2). La versión 2026.2 anuncia la Orden HAC/459/2026, pero la respuesta se contrasta con el texto oficial de BOE.'],
  4932: [academyJava, 'ITIC Academy 2026, bloque 30: entorno Java y persistencia JPA/Hibernate; cotejo curricular con A1-67 y A2-II.3/III.10. La licencia y el proveedor de bytecode se verifican en documentación oficial de Hibernate.'],
  4933: [academyLicense, 'ITIC Academy 2026, bloque 18, «Protección jurídica, licencias y control del software»: A1-43/A2-II.14; diferencia software libre, propietario, freeware/shareware y coste de descarga.'],
  4934: [academyProtocols, 'ITIC Academy 2026, bloque 43 «Protocolos», §1.2 y pregunta A2 2021: incluye literalmente la pregunta de ordenar las siete capas OSI de inferior a superior; cotejo directo con UIT-T X.200 y convocatoria A1-111/A2-II.8.'],
  4935: [academySecurity, 'ITIC Academy 2026, bloque 48, §7.1: diferencia los sistemas IDS de los sistemas de prevención IPS/IDPS, tema A1-125/126 y A2-II.13.']
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const academy = academyById[change.id];
  if (academy) {
    const detail = academy[1];
    q.clasificacion.bloque_academia = `${detail} El material se cita como cotejo curricular y no como fuente primaria.`;
    q.clasificacion.nota = `${q.revision.estado}. ${detail} Fuentes oficiales y alcance documentados en el registro del lote.`;
    q.revision.observaciones += ` ${detail}`;
    q.comentarios = q.revision.observaciones;
    q.revision.fuentes.push({ url: academy[0], referencia: `ITIC Academy: ${detail}` });
  }
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular y trazabilidad del lote 922 completados.');
