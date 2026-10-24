const apply = require('./aplicar-lote.cjs');

const primary = {
  tomcat: [
    { url: 'https://tomcat.apache.org/whichversion', referencia: 'Apache Tomcat, Which Version: Tomcat implements a subset of Jakarta EE/Java EE technologies; Tomcat 9 implements the servlet, JSP, EL, WebSocket and JASPIC specifications, not the complete Java EE 8 platform.' },
    { url: 'https://jakarta.ee/learn/docs/jakartaee-tutorial/current/web/webapp/webapp.html', referencia: 'Jakarta EE Tutorial, Getting Started with Web Applications: distinguishes full Jakarta EE runtimes from partial runtimes and names Apache Tomcat as a servlet container that does not implement the full Web Profile.' }
  ],
  openoffice: [
    { url: 'https://openoffice.apache.org/index.html', referencia: 'Apache OpenOffice project: the current project is an Apache Software Foundation project, is released for Windows, Linux and macOS, and records the OpenOffice.org donation to ASF on 1 June 2011.' },
    { url: 'https://openoffice.apache.org/about_us/milestones.html', referencia: 'Apache OpenOffice, History and Milestones: documents the historical OpenOffice.org/StarOffice lineage and transition to Apache.' },
    { url: 'https://openoffice-org.staged.apache.org/about_us/birthday4.html', referencia: 'OpenOffice.org fourth anniversary, 2004: contemporaneous project history says Sun continued to sponsor the project then; this is a historical fact, not a current funding statement.' }
  ],
  agpl: [
    { url: 'https://www.gnu.org/licenses/agpl-3.0.en.html', referencia: 'Free Software Foundation, GNU AGPLv3, preamble and §13: for a modified program supporting remote network interaction, the modified version must prominently offer users the Corresponding Source. It is not a license that applies exclusively to software running on networks.' }
  ],
  ades: [
    { url: 'https://www.etsi.org/deliver/etsi_tr/119000_119099/119000/01.03.01_60/tr_119000v010301p.pdf', referencia: 'ETSI TR 119 000 V1.3.1, §4.1.3: identifies standardized AdES format families CAdES, XAdES, JAdES and PAdES, and separately the ASiC container format; HAdES is not among these families.' },
    { url: 'https://administracionelectronica.gob.es/ctt/afirma', referencia: 'Portal de Administración Electrónica, @firma: identifies the recognized baseline formats CAdES, XAdES and PAdES (and ASiC containers), without a HAdES family.' }
  ],
  xml: [
    { url: 'https://www.w3.org/TR/xml/', referencia: 'W3C Recommendation, Extensible Markup Language (XML) 1.0, §1.1 and §G: XML was developed by a Working Group under W3C auspices and the specification is published as a W3C Recommendation.' }
  ]
};

const academy = {
  tech: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1: §5.7 aborda productos/servidores compatibles Jakarta EE y §9 trata XML; el propio material distingue Tomcat de una plataforma empresarial completa.' },
  licenses: { url: 'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 18 «Protección jurídica del software. Licencias y DRM», versión 2026.1, §4.2: distingue GPL de AGPL y explica la obligación adicional de oferta de código fuente para versiones modificadas con interacción remota por red; el temario la vincula a A2-T14.' },
  signatures: { url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 36 «Seguridad, criptografía, identificación y firma», versión 2026.1, §8: presenta CAdES, XAdES, PAdES y ASiC y los perfiles Baseline B/T/LT/LTA.' }
};

const records = [
  [1311, [57, 65], ['III-10'], ['Apache Tomcat', 'Java EE', 'Jakarta EE', 'contenedor de servlets', 'plataforma empresarial'], primary.tomcat, null,
    'La respuesta Apache Tomcat es correcta si la pregunta se refiere a cumplir la plataforma Java EE completa. El original no fijaba versión ni nivel de compatibilidad y podía hacer pensar que Tomcat no implementa especificaciones Java EE: sí implementa un subconjunto de tecnologías web. Se concreta que el supuesto es la plataforma completa; para Tomcat 9, Apache identifica las especificaciones de Java EE 8 implementadas y Jakarta EE clasifica Tomcat como runtime parcial. JBoss, WebSphere y GlassFish son productos de servidor empresarial con implementaciones Java EE compatibles según la edición/versión. Cotejo con ITIC Academy, bloque 30, §5.7.', 'corregida'],
  [1312, [69], ['II-14'], ['Apache OpenOffice', 'OpenOffice.org', 'StarOffice', 'macOS', 'Linux', 'Apache Software Foundation'], primary.openoffice, null,
    'El enunciado original tenía más de una respuesta falsa al mezclar la historia con el presente: Sun Microsystems patrocinó OpenOffice.org en 2004, pero no financia hoy Apache OpenOffice; además, la suite tiene versiones para macOS. Se fija la fecha y se cambia a una pregunta con una única afirmación falsa. A fecha de esta revisión, Apache OpenOffice publica versiones para Windows, Linux y macOS; OpenOffice.org fue donado a ASF en 2011 y StarOffice es el antecedente de la línea del producto. Cotejo temático: ITIC Academy, bloque 18 cubre protección/licencias de software libre (sin desarrollar la historia concreta del producto); el dato del producto se verifica en la fuente primaria Apache.', 'corregida'],
  [1313, [69], ['II-14'], ['GNU AGPLv3', 'GNU GPL', 'GNU FDL', 'EUPL', 'copyleft', 'interacción remota por red'], primary.agpl, null,
    'Se conserva GNU Affero General Public License (AGPL), pero se sustituye la formulación incorrecta «licencia para software en redes»: la AGPLv3 añade una obligación específica cuando una versión modificada permite interacción remota por red, ofreciendo el código fuente correspondiente a quienes interactúan. GPL no incorpora esa cláusula de interacción remota; GFDL se orienta a documentación y EUPL es una licencia europea distinta. Cotejo con ITIC Academy, bloque 18, §4.2.', 'corregida'],
  [1314, [80], ['I-6', 'IV-12'], ['CAdES', 'HAdES', 'PAdES', 'XAdES', 'ETSI', 'AdES'], primary.ades, null,
    'Se conserva HAdES como la opción que no pertenece a las familias de formatos AdES estandarizadas por ETSI. Se precisa la pregunta para referirla expresamente a esas familias, no a cualquier formato concebible. ETSI identifica CAdES, XAdES, JAdES y PAdES; ASiC es un contenedor de firmas y datos. HAdES no aparece en esa taxonomía. Cotejo con ITIC Academy, bloque 36, §8, que expone CAdES/XAdES/PAdES/ASiC y perfiles Baseline.', 'corregida'],
  [1315, [77], ['II-9'], ['XML', 'W3C', 'World Wide Web Consortium', 'Recomendación W3C'], primary.xml, null,
    'La opción W3C es correcta. Se concreta la relación: el W3C publicó XML 1.0 como Recomendación y el grupo de trabajo XML elaboró la especificación bajo sus auspicios; ETSI, CEN y MIT no son el organismo responsable de esa especificación. Cotejo con ITIC Academy, bloque 30, §9, sobre XML y lenguajes de marca.', 'corregida']
];

apply({ numero: '199', fecha: '2026-10-24', records, edits: {
  1311: { texto: 'Entre estos productos, ¿cuál implementa un subconjunto de tecnologías Java EE/Jakarta EE, pero no la plataforma empresarial completa?', opciones: ['Apache Tomcat', 'JBoss EAP / WildFly', 'IBM WebSphere Application Server', 'Eclipse GlassFish'], respuesta_correcta: 0 },
  1312: { texto: 'A fecha de 2026, ¿cuál afirmación sobre Apache OpenOffice es falsa?', opciones: ['El proyecto publica versiones para Windows, Linux y macOS.', 'Sun Microsystems financia actualmente su desarrollo.', 'OpenOffice.org fue donado a la Apache Software Foundation en 2011.'], respuesta_correcta: 1 },
  1313: { texto: '¿Qué licencia GNU exige que una versión modificada que permite interacción remota por red ofrezca a quienes interactúan la posibilidad de obtener su código fuente correspondiente?', opciones: ['GNU Free Documentation License (GFDL).', 'GNU General Public License (GPL).', 'GNU Affero General Public License (AGPL).', 'European Union Public Licence (EUPL).'], respuesta_correcta: 2 },
  1314: { texto: '¿Cuál de estas siglas no identifica una familia de formato de firma AdES estandarizada por ETSI?', opciones: ['CAdES', 'HAdES', 'PAdES', 'XAdES'], respuesta_correcta: 1 },
  1315: { texto: '¿Qué organismo publicó XML 1.0 como Recomendación y auspicia el grupo de trabajo que elaboró la especificación?', opciones: ['World Wide Web Consortium (W3C).', 'European Telecommunications Standards Institute (ETSI).', 'European Committee for Standardization (CEN).', 'Massachusetts Institute of Technology (MIT).'], respuesta_correcta: 0 }
}});

const fs = require('node:fs');
const path = require('node:path');
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-199.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const notes = {
  1311: { source: academy.tech, block: 'Bloque 30, Tecnologías de sistemas de información, versión 2026.1, §5.7 (productos y servidores compatibles Jakarta EE).', topics: 'A1-57/A1-65/A2-III-10' },
  1312: { source: academy.licenses, block: 'Bloque 18, Protección jurídica del software, licencias y DRM, versión 2026.1; cotejo de ámbito temático. No contiene el dato histórico concreto de OpenOffice.', topics: 'A1-69/A2-II-14' },
  1313: { source: academy.licenses, block: 'Bloque 18, Protección jurídica del software, licencias y DRM, versión 2026.1, §4.2 (GPL y AGPL).', topics: 'A1-69/A2-II-14' },
  1314: { source: academy.signatures, block: 'Bloque 36, Seguridad, criptografía, identificación y firma, versión 2026.1, §8 (CAdES, XAdES, PAdES y ASiC).', topics: 'A1-80/A2-I-6/A2-IV-12' },
  1315: { source: academy.tech, block: 'Bloque 30, Tecnologías de sistemas de información, versión 2026.1, §9 (XML y lenguajes de marca).', topics: 'A1-77/A2-II-9' }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const meta = notes[q.id];
  q.clasificacion.bloque_academia = meta.block;
  q.clasificacion.nota = `Cotejo temático con ITIC Academy: ${meta.block} Correspondencia orientativa: ${meta.topics}.`;
  const comment = ` Cotejo temático con ITIC Academy: ${meta.block} Correspondencia orientativa: ${meta.topics}.`;
  q.comentarios = (q.comentarios || '') + comment;
  q.revision.observaciones += comment;
  q.revision.fuentes.push({ url: meta.source.url, referencia: `${meta.source.referencia} Correspondencia: ${meta.topics}.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo temático con ITIC Academy y registro actualizados para el lote 199.');
