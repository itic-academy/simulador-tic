const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const epic = 'https://agilealliance.org/glossary/epic/';
const ci = 'https://docs.github.com/en/actions/get-started/continuous-integration';
const drupal = 'https://www.drupal.org/docs/user_guide/en/understanding-drupal.html';
const config = 'https://www-cloud.cisco.com/site/us/en/learn/topics/networking/what-is-configuration-management.html';
const configScale = 'https://www.cisco.com/c/en/us/solutions/collateral/executive-perspectives/technology-perspectives/automate-network-infrastructure-code-wp.html';
const sdn = 'https://opennetworking.org/wp-content/uploads/2014/10/Framework_for_SDN_-Scope_and_Requirements.pdf';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academyDesign = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academyCms = 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk';
const academyNetworks = 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const ref = (url, referencia) => ({ url, referencia });

const records = [
  [4991, ['88'], ['III-2'], ['épica', 'epic', 'historia de usuario', 'metodologías ágiles', 'iteración'], [
    ref(epic, 'Agile Alliance Glossary, Epic: una épica es una historia de usuario grande que no puede entregarse como se define en una sola iteración o que es suficientemente grande para dividirse en historias menores.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 88: análisis funcional, historias de usuario y metodologías ágiles, Scrum y Kanban.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, III.2: planificación del desarrollo y metodologías de desarrollo.'),
    ref(academyDesign, 'ITIC Academy, bloque 38 «Análisis, Diseño y Construcción de Sistemas de Información», versión 2026.1 (18/09/2026), §§ 3–4 sobre historias de usuario y metodologías ágiles; cotejo curricular.')
  ], null, 'Respuesta A. La definición coincide con el glosario de Agile Alliance: una épica agrupa una historia de usuario demasiado extensa para una iteración o susceptible de dividirse en historias más pequeñas. No es un tipo de equipo, un evento de Scrum of Scrums ni un formato de ticket.', 'vigente'],
  [4992, ['97'], ['III-6'], ['integración continua', 'CI', 'integración frecuente', 'compilación automatizada', 'pruebas automatizadas'], [
    ref(ci, 'GitHub Docs, Continuous integration: práctica de integrar cambios con frecuencia en un repositorio compartido y automatizar compilación y pruebas para detectar errores.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 97: modelos de integración continua y herramientas.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, III.6: construcción, despliegue, integración continua y DevOps.'),
    ref(academyDesign, 'ITIC Academy, bloque 38 «Análisis, Diseño y Construcción de Sistemas de Información», versión 2026.1 (18/09/2026), §§ 5 y 8 sobre construcción, CI y DevOps; cotejo curricular.')
  ], null, 'Respuesta D, reformulada para expresar la práctica completa: integrar cambios pequeños con frecuencia en una base compartida y verificar cada integración mediante compilación y pruebas automatizadas. La mera agregación automatizada sin frecuencia ni verificación no define adecuadamente integración continua; tampoco equivale a despliegue continuo o a una ventana de publicación.', 'corregida'],
  [4993, ['104'], ['II-16'], ['Drupal', 'CMS', 'gestión de contenidos', 'gestor de contenidos'], [
    ref(drupal, 'Drupal User Guide oficial, «Concept: Drupal as a Content Management System»: define CMS como herramienta para crear, publicar, editar o eliminar contenido web y presenta Drupal como CMS.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 104: gestión documental y de contenidos, tecnologías CMS y DMS.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, II.16: sistemas de gestión documental y de contenidos.'),
    ref(academyCms, 'ITIC Academy, bloque 50 «Videoconferencia, SSO y herramientas de trabajo colaborativo», versión 2026.1 (01/10/2026), sección de sistemas de gestión de contenidos; cita Drupal junto a WordPress y Joomla.')
  ], null, 'Respuesta B. Drupal es un sistema de gestión de contenidos (CMS) para crear y administrar contenido web. cPanel es un panel de administración de alojamiento/servidor, mientras que PHP y Ruby son lenguajes de programación; ninguno de esos distractores es un CMS por sí mismo.', 'vigente'],
  [4994, ['118'], ['IV-9'], ['gestión de configuración', 'redes', 'automatización', 'dispositivos de comunicaciones'], [
    ref(config, 'Cisco, What Is Configuration Management?: el control y gestión del ciclo de vida de las configuraciones de red permite mantener estándares, gestionar cambios, auditar y detectar desviaciones; la automatización reduce errores manuales, no los elimina completamente.'),
    ref(configScale, 'Cisco, Automate Network Infrastructure Using Network as Code: interfaces y plantillas permiten aplicar cambios de forma coherente a grupos de cientos o miles de elementos y reducen el esfuerzo de operaciones manuales.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 118: gestión de dispositivos y administración de redes de área local.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, IV.9: administración de redes locales, gestión de usuarios/dispositivos y monitorización.'),
    ref(academyNetworks, 'ITIC Academy, bloque 42 «Redes», versión 2026.1 (29/09/2026), apartados de administración de red, gestión y automatización de dispositivos; cotejo curricular.')
  ], null, 'Respuesta B. Una solución centralizada permite aplicar plantillas y cambios de configuración a muchos dispositivos de forma más rápida y escalable, además de facilitar consistencia, trazabilidad y reversión. No elimina por completo los errores humanos, no sustituye la autenticación ni tiene como función principal acelerar la descarga de estadísticas.', 'vigente'],
  [4995, ['108', '118'], ['IV-8', 'IV-9'], ['SDN', 'redes definidas por software', 'plano de control', 'plano de datos'], [
    ref(sdn, 'Open Networking Foundation, Framework for SDN: la arquitectura SDN separa el plano de control del plano de datos y permite una centralización lógica del control; la separación no obliga a que el controlador se implemente físicamente en un único equipo.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, temas 108 (redes e interconexión) y 118 (arquitectura y gestión de redes de área local).'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, IV.8–IV.9: redes locales, técnicas de transmisión, administración y gestión de dispositivos.'),
    ref(academyNetworks, 'ITIC Academy, bloque 42 «Redes», versión 2026.1 (29/09/2026), § 7.9: SDN/NFV; describe separación del control y datos, controlador lógico y APIs.')
  ], null, 'Respuesta A. La característica arquitectónica central de SDN es desacoplar el plano de control del plano de datos; el control suele exponerse y centralizarse lógicamente mediante software, aunque el controlador pueda distribuirse físicamente. SDN no depende de OSPF, de un umbral de velocidad ni de IPv6 exclusivamente.', 'vigente']
];

const edits = {
  4992: { opcion: [3, 'La práctica de integrar con frecuencia cambios pequeños en un repositorio compartido y verificarlos mediante compilaciones y pruebas automatizadas.'] },
  4994: { texto: 'En una red con numerosos dispositivos de comunicaciones, ¿qué ventaja ofrece la gestión centralizada de configuraciones?' },
  4995: { texto: '¿Qué característica arquitectónica se asocia con las redes definidas por software (SDN)?' }
};

aplicar({ numero: '934', fecha: '2026-11-11', records, edits });

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-934.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4991: 'ITIC Academy, bloque 38 «Análisis, Diseño y Construcción de Sistemas de Información», versión 2026.1 (18/09/2026), §§ 3–4 sobre historias de usuario y metodologías ágiles; cotejo curricular.',
  4992: 'ITIC Academy, bloque 38 «Análisis, Diseño y Construcción de Sistemas de Información», versión 2026.1 (18/09/2026), §§ 5 y 8 sobre construcción, integración continua y DevOps; cotejo curricular.',
  4993: 'ITIC Academy, bloque 50 «Videoconferencia, SSO y herramientas de trabajo colaborativo», versión 2026.1 (01/10/2026), apartado de sistemas de gestión de contenidos, con Drupal; cotejo curricular.',
  4994: 'ITIC Academy, bloque 42 «Redes», versión 2026.1 (29/09/2026), administración de red, gestión y automatización de dispositivos; cotejo curricular.',
  4995: 'ITIC Academy, bloque 42 «Redes», versión 2026.1 (29/09/2026), § 7.9 «Redes definidas por software (SDN) y virtualización de funciones (NFV)»; cotejo curricular.'
};
const academyUrl = id => id <= 4992 ? academyDesign : id === 4993 ? academyCms : academyNetworks;
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const detail = academy[change.id];
  q.clasificacion.bloque_academia = detail;
  q.clasificacion.nota = `${q.revision.estado}. ${detail} La academia se usa para cotejo curricular, no como fuente técnica primaria.`;
  q.revision.observaciones += ` ${detail} Cotejo curricular, no sustituto de las fuentes primarias.`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: academyUrl(change.id), referencia: detail });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy añadido al lote 934.');
