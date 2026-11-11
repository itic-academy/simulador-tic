const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const owastV4 = 'https://www.owasp.org/images/1/19/OTGv4.pdf';
const owaspCurrent = 'https://owasp.org/projects/web-security-testing-guide/';
const owaspV42 = 'https://wstg.owasp.org/stable/3-The_OWASP_Testing_Framework/0-The_Web_Security_Testing_Framework/';
const nist = 'https://csrc.nist.gov/pubs/sp/800/125/final';
const microsoft = 'https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/remote-desktop-services-vdi-optimize-configuration';
const virtualization = 'https://csrc.nist.gov/pubs/sp/800/125/a/r1/final';
const rd203 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-5032';
const constitution = 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academySecurity = 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const academyVirtual = 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk';
const academyAdmin = 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const ref = (url, referencia) => ({ url, referencia });

const records = [
  [5001, ['96', '126'], ['III-7'], ['OWASP', 'WSTG', 'pruebas de seguridad', 'ciclo de vida'], [
    ref(owastV4, 'OWASP Testing Guide, edición 4.0, § 3, «The OWASP Testing Framework»: enumera cinco fases, desde antes de iniciar el desarrollo hasta mantenimiento y operaciones. Se conserva como afirmación histórica de esa edición.'),
    ref(owaspCurrent, 'Proyecto oficial OWASP Web Security Testing Guide: la versión 4.2 está disponible y la versión 5.0 está en desarrollo; la edición 4.0 citada por el reactivo no debe presentarse como la versión actual.'),
    ref(owaspV42, 'WSTG v4.2, marco de pruebas: mantiene las cinco fases y amplía el tratamiento del ciclo de desarrollo y pruebas; referencia versionada.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, temas 96 (pruebas de software) y 126 (seguridad en el nivel de aplicación).'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, III.7: planificación y documentación de pruebas, datos de prueba y pruebas de software, hardware, procedimientos y datos.')
  ], null, 'Respuesta B: cinco fases en la edición 4.0 de la OWASP Testing Guide. La pregunta original se acota a esa edición para que la clave no se confunda con la versión vigente del proyecto: OWASP ofrece actualmente WSTG 4.2 y desarrolla la 5.0. La clasificación es histórica por la referencia/versionado, aunque el concepto general de integrar pruebas de seguridad a lo largo del ciclo de vida sigue siendo válido.', 'historica'],
  [5002, ['132'], ['II-1'], ['VDI', 'escritorios no persistentes', 'perfil de usuario', 'virtualización de puestos'], [
    ref(microsoft, 'Microsoft Learn, optimización de VDI: en una máquina virtual no persistente se descartan al cerrar sesión o reiniciar casi todos los cambios hechos desde el arranque; perfiles y estado pueden guardarse centralizadamente por separado. La limitación existe cuando no se configura esa persistencia.'),
    ref(nist, 'NIST SP 800-125: describe virtualización completa tanto de servidores como de escritorios y el uso de sistemas operativos sobre hardware virtual.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 132: virtualización de sistemas, centros de datos y puestos de trabajo.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, II.1: tecnologías actuales de ordenadores, arquitecturas y computación en la nube.'),
    ref(academyVirtual, 'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1 (31/08/2026): incluye A1-132 (virtualización de puestos) y cotejo con A2-T1/C6. Referencia curricular, no fuente técnica primaria.')
  ], null, 'Respuesta A, con alcance precisado. Si el escritorio no persistente se restablece al cerrar sesión y no se conserva el perfil/estado por otra vía, las personalizaciones locales se pierden y el usuario no puede mantenerlas de una sesión a otra. No es una limitación inevitable: perfiles móviles, contenedores de perfil o capas de personalización pueden preservar el estado sin hacer persistente la máquina virtual.', 'corregida'],
  [5003, ['53', '57', '132'], ['IV-6'], ['virtualización de servidores', 'consolidación', 'máquinas virtuales', 'CPD'], [
    ref(virtualization, 'NIST SP 800-125A Rev. 1, recomendaciones para plataformas hipervisoras de virtualización de servidores; delimita el uso de hipervisores de servidor y sus máquinas virtuales.'),
    ref(nist, 'NIST SP 800-125: la virtualización completa ejecuta uno o más sistemas operativos y aplicaciones sobre hardware virtual y se utiliza, entre otros fines, para eficiencia operativa.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, temas 53 (servidores y CPD), 57 (virtualización de servidores) y 132 (virtualización de sistemas y centros de datos).'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, IV.6: virtualización y consolidación de servidores y recursos en CPD.'),
    ref(academyVirtual, 'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1 (31/08/2026): A1-53/57/132 y A2-C6, virtualización y consolidación. Cotejo curricular.')
  ], null, 'Respuesta B. Un hipervisor permite ejecutar varias máquinas virtuales sobre un servidor físico; la consolidación puede mejorar el aprovechamiento de recursos y la flexibilidad operativa. No elimina los límites de capacidad del hardware ni garantiza por sí sola mejores tiempos de respuesta: el resultado depende de la carga, el dimensionamiento y la contención de recursos.', 'vigente'],
  [5004, ['22'], ['I-8'], ['Real Decreto 203/2021', 'administración electrónica', 'principios generales', 'facilidad de uso'], [
    ref(rd203, 'Real Decreto 203/2021, texto consolidado del BOE, art. 2: enumera neutralidad/adaptabilidad, accesibilidad, facilidad de uso, interoperabilidad, proporcionalidad y personalización/proactividad. La irretroactividad no figura entre esos principios generales.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 22: calidad de los servicios públicos, TIC, sociedad de la información y administración electrónica.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, I.8: Leyes 39/2015 y 40/2015 y régimen jurídico de la actuación administrativa.')
  ], null, 'Respuesta C: el principio de irretroactividad no aparece en el artículo 2. El texto vigente del artículo sí incluye seis principios generales, incluidos interoperabilidad, proporcionalidad y personalización/proactividad además de los citados en otras opciones. «Irretroactividad» es un principio jurídico general en otros contextos, pero no uno de los enumerados en este precepto.', 'vigente'],
  [5005, ['2'], ['I-1'], ['Constitución Española', 'Tribunal Constitucional', 'artículo 159', 'composición'], [
    ref(constitution, 'Constitución Española, texto consolidado del BOE, art. 159.1: el Tribunal Constitucional tiene doce miembros; cuatro a propuesta del Congreso, cuatro del Senado, dos del Gobierno y dos del Consejo General del Poder Judicial.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 2: Constitución, Poder Judicial y Tribunal Constitucional, organización y atribuciones.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, I.1: Constitución Española de 1978, derechos fundamentales y Corona; cotejo del ámbito constitucional general.')
  ], null, 'Respuesta C: al Gobierno corresponde proponer dos de los doce miembros del Tribunal Constitucional, conforme al artículo 159.1 de la Constitución. Los otros diez corresponden, por grupos de cuatro, al Congreso y al Senado, y dos al Consejo General del Poder Judicial.', 'vigente']
];

const edits = {
  5001: { texto: 'En la edición 4.0 de la OWASP Testing Guide, ¿en cuántas fases se dividía el marco de pruebas de seguridad web?' },
  5002: { texto: 'En un VDI no persistente que no conserva por separado el perfil ni el estado del usuario, ¿qué limitación puede tener frente a un escritorio persistente?' }
};

aplicar({ numero: '936', fecha: '2026-11-11', records, edits });

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-936.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5001: ['ITIC Academy, bloque «Seguridad en redes y en el nivel de aplicación», versión 2026.1 (30/09/2026), secciones 13–14 sobre desarrollo seguro, OWASP y pruebas; cotejo curricular, no fuente técnica primaria.', academySecurity],
  5002: ['ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1 (31/08/2026), apartado de virtualización de puestos A1-132 y correspondencia curricular A2-T1/C6; cotejo curricular.', academyVirtual],
  5003: ['ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1 (31/08/2026), servidores y consolidación virtual A1-53/57/132 y A2-C6; cotejo curricular.', academyVirtual],
  5004: ['ITIC Academy, bloque 03 «Actuación administrativa y administración digital», versión 2026.2 (01/10/2026), principios y actuación electrónica; cotejo curricular, no fuente jurídica primaria.', academyAdmin],
  5005: ['ITIC Academy, bloque 03 «Actuación administrativa y administración digital», versión 2026.2 (01/10/2026), Constitución y órganos constitucionales; cotejo curricular.', academyAdmin]
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const [detail, url] = academy[change.id];
  q.clasificacion.bloque_academia = detail;
  q.clasificacion.nota = `${q.revision.estado}. ${detail} La academia se usa como cotejo curricular, no como fuente técnica o jurídica primaria.`;
  q.revision.observaciones += ` ${detail} Cotejo curricular, no sustituto de la fuente primaria.`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: detail });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular de ITIC Academy añadido al lote 936.');
