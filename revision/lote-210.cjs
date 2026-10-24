const apply = require('./aplicar-lote.cjs');

const sources = {
  cen: [
    { url: 'https://www.cencenelec.eu/bottom-navigation-pages/faqs/', referencia: 'CEN-CENELEC, FAQ, «What are the CEN and CENELEC Products?»: EN, TS, TR, Guides and other CEN/CENELEC publications; RFC is not in this catalogue.' },
    { url: 'https://www.ietf.org/process/publication/', referencia: 'IETF, Publishing and accessing RFCs: Internet-Drafts completing the IETF process are submitted for publication in the RFC Series; the RFC Editor publishes the RFCs.' }
  ],
  tia: [
    { url: 'https://tiaonline.org/standard/tia-942/', referencia: 'Telecommunications Industry Association, ANSI/TIA-942-C, revision C published May 2024; current data-center infrastructure standard.' },
    { url: 'https://tiaonline.org/wp-content/uploads/dlm_uploads/2021/01/TIA-942-Standard_OnePager-230615.pdf', referencia: 'TIA-942 overview: Rated-3 has redundant distribution paths serving computer equipment for concurrent maintainability; Rated-4 has active redundant paths and fault tolerance.' }
  ],
  cobo: [
    { url: 'https://learn.microsoft.com/en-ie/intune/device-enrollment/android/guide', referencia: 'Microsoft Learn, Android Enterprise fully managed enrollment: formerly COBO; organization-owned devices for one user, used exclusively for work.' },
    { url: 'https://www.cyber.gc.ca/en/guidance/secure-mobility', referencia: 'Canadian Centre for Cyber Security, Secure Mobility: contrasts organization-owned COPE with COBO devices solely intended for business use.' }
  ],
  cloud: [
    { url: 'https://csrc.nist.gov/glossary/term/public_cloud', referencia: 'NIST CSRC Glossary, Public cloud, definition from SP 800-145: cloud infrastructure provisioned for open use by the general public.' },
    { url: 'https://csrc.nist.gov/pubs/sp/800/145/final', referencia: 'NIST SP 800-145, The NIST Definition of Cloud Computing, deployment models and service models.' }
  ],
  raid: [
    { url: 'https://www.snia.org/sites/default/files/technical-work/swordfish/draft/v1.2.6/html/Specification/Swordfish_v1.2.6_Specification.html', referencia: 'SNIA Swordfish Specification v1.2.6, SupportedRAIDTypes: RAID01/RAID 0+1 is a mirrored device over striped devices; RAID10 is the converse.' }
  ]
};

const records = [
  [1366, [50], [], ['CEN', 'CEN-CENELEC', 'IETF', 'RFC', 'normalización europea'], sources.cen, null,
    'RFC no es un producto editorial de CEN. CEN y CENELEC publican EN, TS, TR, guías y otros documentos de normalización; los RFC pertenecen a la serie de publicaciones RFC, cuyo proceso y publicación se gestionan en el ámbito IETF/RFC Editor. La pregunta se limita a identificar el organismo emisor y no sugiere que todos los RFC sean estándares. Cotejo curricular con ITIC Academy, bloque 24 «Organismos de normalización», versión 2026.1, §§3.1 y 4.1–4.2.', 'vigente'],
  [1367, [53], ['IV-6'], ['ANSI/TIA-942-C', 'centro de proceso de datos', 'Rated-3', 'mantenibilidad concurrente', 'redundancia eléctrica'], sources.tia, null,
    'Se corrige el vocabulario y el alcance. La edición vigente consultada es ANSI/TIA-942-C (mayo de 2024) y clasifica la infraestructura como Rated-1 a Rated-4, no como «Tier» —término asociado habitualmente a la clasificación de Uptime Institute—. TIA describe Rated-3 como mantenibilidad concurrente, con rutas redundantes de distribución que sirven al equipamiento; en la revisión C se concreta, como mínimo, una ruta activa (N) y otra en espera (+1). Rated-4 exige rutas activas redundantes y tolerancia a fallos. Se evita afirmar que cada dispositivo individual deba tener dos cables/entradas de alimentación.', 'corregida'],
  [1368, [54], ['IV-15'], ['COBO', 'gestión de dispositivos móviles', 'dispositivo corporativo', 'uso exclusivamente profesional'], sources.cobo, null,
    'COBO (Corporate-Owned, Business-Only) designa un dispositivo propiedad de la organización y destinado exclusivamente al trabajo; se distingue de COPE, que permite uso personal. La formulación original y la clave D son correctas. Microsoft Learn indica que el modo Android Enterprise Fully Managed se denominaba anteriormente COBO y describe el uso organizativo exclusivo.', 'vigente'],
  [1369, [55], ['II-1'], ['computación en la nube', 'NIST SP 800-145', 'nube pública', 'modelos de despliegue'], sources.cloud, null,
    'La opción original marcada como correcta describía multitenencia, una característica frecuente, pero no el criterio definitorio de NIST para una nube pública. Según NIST SP 800-145, la infraestructura se provisiona para uso abierto por el público general. Se reemplaza la opción para expresar ese criterio; las demás se afinan para distinguir IaaS, nube privada y PaaS.', 'corregida'],
  [1370, [56], ['IV-5'], ['SNIA', 'RAID 0+1', 'capacidad utilizable', 'almacenamiento'], sources.raid, null,
    'La capacidad utilizable es 3 TB decimales, suponiendo seis discos de 1 TB y sin reservar capacidad para hot spare: RAID 0+1 espeja dos conjuntos distribuidos de tres discos, de modo que solo se aprovecha la capacidad de un conjunto (3 × 1 TB). SNIA define RAID01 como un dispositivo espejado sobre conjuntos RAID 0 y lo distingue de RAID10. La opción B y la clave se mantienen.', 'vigente']
];

apply({ numero: '210', fecha: '2026-10-24', records, edits: {
  1367: {
    texto: 'Según la clasificación de infraestructura de ANSI/TIA-942-C, ¿qué rating contempla como mínimo una ruta activa (N) y otra de reserva (+1) para la distribución de energía, refrigeración y telecomunicaciones, y permite el mantenimiento concurrente?',
    opciones: [
      'Rated-1 (Basic).',
      'Rated-2 (Redundant Component).',
      'Rated-3 (Concurrently Maintainable).',
      'Rated-4 (Fault Tolerant).'
    ],
    respuesta_correcta: 2
  },
  1369: {
    texto: 'Según NIST SP 800-145, ¿qué caracteriza el modelo de despliegue de nube pública?',
    opciones: [
      'La infraestructura se provisiona para uso abierto por el público general; puede ser propiedad y estar gestionada por una entidad empresarial, académica o pública.',
      'El consumidor provisiona procesamiento, almacenamiento, redes y otros recursos fundamentales, pero no controla la infraestructura de nube subyacente (IaaS).',
      'La infraestructura se provisiona para uso exclusivo de una organización, que puede tener varios consumidores (nube privada).',
      'El proveedor ofrece una plataforma administrada para desarrollar, probar y desplegar aplicaciones sin que el consumidor gestione la infraestructura subyacente (PaaS).'
    ],
    respuesta_correcta: 0
  }
}});

const fs = require('node:fs');
const path = require('node:path');
const bank = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-210.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  1366: { source: 'https://drive.google.com/file/d/1HKwUIuFhm-wVG0e8kZfFm1R8qI1rGS2G/view', block: 'Bloque 24, Organismos de normalización, versión 2026.1 (19-08-2026), §§3.1 y 4.1–4.2 (IETF/RFC y CEN/CENELEC).', topics: 'A1-50; el programa A2 no contiene un tema general específico sobre organismos de normalización.' },
  1367: { source: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view', block: 'Bloque 26, Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1 (31-08-2026), §CPD/TIA-942-C.', topics: 'A1-53/A2-IV-6' },
  1368: { source: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view', block: 'Bloque 26, Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1 (31-08-2026), apartado de modelos BYOD/CYOD/COPE/COBO.', topics: 'A1-54/A2-IV-15' },
  1369: { source: 'https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view', block: 'Bloque 25, Cloud Computing, versión 2026.1 (19-08-2026), §5.2 y NIST SP 800-145.', topics: 'A1-55/A2-II-1' },
  1370: { source: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view', block: 'Bloque 26, Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1 (31-08-2026), apartado de RAID.', topics: 'A1-56/A2-IV-5' }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const m = academy[q.id];
  q.clasificacion.bloque_academia = m.block;
  q.clasificacion.nota = `Cotejo temático con ITIC Academy: ${m.block} Correspondencia con el temario oficial: ${m.topics}.`;
  const comment = ` Cotejo temático con ITIC Academy: ${m.block} Correspondencia con el temario oficial: ${m.topics}.`;
  q.comentarios = (q.comentarios || '') + comment;
  q.revision.observaciones += comment;
  q.revision.fuentes.push({ url: m.source, referencia: `ITIC Academy, ${m.block} Correspondencia: ${m.topics}.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(__dirname, '..', 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular con ITIC Academy añadido al lote 210.');
