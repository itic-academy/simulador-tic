const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const drive = {
  engineering: 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',
  planning: 'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk',
  maintenance: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',
  technology: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk'
};
const corda49 = 'https://docs.r3.com/en/platform/corda/4.9/enterprise';

const records = [
  [5516, [93], ['II-3'], ['programación orientada a aspectos', 'AOP', 'AspectJ', 'pointcut', 'join point', 'advice', 'weaving'], [
    { url: 'https://eclipse.dev/aspectj/doc/latest/progguide/progguide.pdf', referencia: 'The AspectJ Programming Guide, §§ Dynamic Join Point Model and Pointcuts (pp. 10–12; language semantics pp. 82+): define join points, pointcuts and advice; the guide also describes aspects and the weaving process.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 93: técnicas de diseño de software, diseño por capas y patrones.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema II.3: características técnicas de lenguajes y paradigmas actuales de programación; AOP se clasifica aquí por su carácter de paradigma de programación.' },
    { url: drive.engineering, referencia: 'ITIC Academy 2026, bloque 38: análisis, diseño y construcción de sistemas; mapa curricular relacionado con ingeniería y técnicas de diseño.' }
  ], null, 'En terminología de AspectJ, pointcut (punto de corte) selecciona join points (puntos de unión/cruce), advice es el código que se ejecuta y weaving (tejido) integra el comportamiento del aspecto. «Punto de origen» no es un concepto básico de AOP/AspectJ. La respuesta C es correcta como opción que NO pertenece al conjunto.', 'corregida'],
  [5517, [87, 95], ['III-2'], ['MÉTRICA v3', 'PSI', 'Plan de Sistemas de Información', 'planificación estratégica', 'objetivos de la organización'], [
    { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A8d2cfee5-5617-4dea-8cf8-7b7a0131de84/METRICA_V3_Panificacion_de_Sistemas_de_Informacion.pdf', referencia: 'MÉTRICA v3, PSI, Descripción y objetivos: el PSI obtiene un marco de referencia para desarrollar sistemas de información en respuesta a los objetivos estratégicos; también incluye proyectos priorizados, calendario y estimación de recursos para presupuestación. El documento aclara que PSI 3, PSI 4 y PSI 5 pueden realizarse en paralelo.' },
    { url: 'https://administracionelectronica.gob.es/documentacion/metodologias-guias', referencia: 'Portal oficial PAe: MÉTRICA v3 figura entre las metodologías y guías publicadas para sistematizar el ciclo de vida del software.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 87: planificación estratégica de sistemas y comunicaciones y plan de sistemas de información.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.2: gestión y planificación del proceso de desarrollo y técnicas de gestión y planificación de proyectos; correspondencia metodológica relacionada, no epígrafe específico de planificación estratégica del PSI.' },
    { url: drive.planning, referencia: 'ITIC Academy 2026, bloque 12: planificación estratégica de sistemas de información y plan de sistemas; mapa curricular.' }
  ], null, 'Se pregunta de forma expresa por el objetivo principal del proceso PSI de MÉTRICA v3. La documentación oficial enuncia literalmente la respuesta B: obtener un marco de referencia para el desarrollo de sistemas de información que responda a los objetivos estratégicos de la organización. La afirmación de que PSI 3, PSI 4 y PSI 5 no pueden solaparse es falsa: MÉTRICA permite que se ejecuten en paralelo. El plan además prevé proyectos priorizados, calendario y estimaciones para presupuestación, pero esos productos no sustituyen su objetivo estratégico.', 'corregida'],
  [5518, [95], ['IV-4'], ['MÉTRICA v3', 'Gestión de la Configuración', 'GC', 'PSI', 'EVS', 'MSI', 'ASI'], [
    { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A1f321d6d-fb6a-46ed-a369-617c0080c51d/METRICA_V3_Gestion_de_Configuracion.pdf', referencia: 'MÉTRICA v3, Gestión de la Configuración: las páginas 2–3 describen EVS-GC 1/2; pp. 6–8 muestran actividades GC para ASI, DSI, CSI e IAS; pp. 8–10 describen la interfaz con mantenimiento MSI-GC. El mapeo de los procesos de desarrollo no incluye PSI, de modo que la opción B es la respuesta única entre las cuatro.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 95: metodología de planificación y desarrollo de sistemas de información MÉTRICA.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema IV.4: gestión de la configuración, control de cambios y versiones.' },
    { url: drive.maintenance, referencia: 'ITIC Academy 2026, bloque 39 Calidad y Mantenimiento: A1-100 y 102 incluyen gestión de configuración/versiones y cambios; mapa curricular relacionado.' }
  ], null, 'La figura de la interfaz GC para los procesos de desarrollo muestra ASI, DSI, CSI e IAS; la metodología trata además actividades GC específicas en EVS y MSI. PSI no aparece en esa relación de actividades de interfaz, por lo que B es la opción correcta. No debe confundirse el hecho general de que cualquier actividad pueda producir un producto registrable con la asignación formal de actividades de interfaz GC a cada proceso.', 'corregida'],
  [5519, [36], ['III-2'], ['diagrama de Gantt', 'planificación de proyectos', 'gestión de proyectos', 'cronograma'], [
    { url: 'https://support.microsoft.com/en-us/project/work-with-the-gantt-chart-view', referencia: 'Microsoft Support, Work with the Gantt Chart view: Gantt representa tareas, duraciones y dependencias a lo largo de una escala temporal para planificar y seguir la programación de un proyecto.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 36: metodologías predictivas para la gestión de proyectos, GANTT y PERT.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.2: técnicas y prácticas de gestión y planificación de proyectos.' },
    { url: drive.planning, referencia: 'ITIC Academy 2026, bloque 12: herramientas de planificación y control, incluyendo PERT; mapa curricular de planificación y gestión de proyectos.' }
  ], null, 'Los diagramas de Gantt representan las tareas de un proyecto y su duración sobre una escala temporal; se usan para planificar y hacer seguimiento del cronograma. La clasificación correcta es gestión de proyectos (A), no programación ni análisis diferencial de aplicaciones.', 'corregida'],
  [5520, [85], [], ['R3 Corda', 'Corda 4.9', 'blockchain', 'red P2P', 'CorDapps', 'RPC', 'Doorman', 'certificado de red'], [
    { url: `${corda49}/key-concepts-node.html`, referencia: 'R3 Corda 4.9, Nodes: el nodo propietario interactúa con su nodo mediante RPC e instala CorDapps para añadir funciones; describe la interfaz RPC y las aplicaciones distribuidas del nodo.' },
    { url: 'https://docs.r3.com/en/platform/corda/4.12/community/key-concepts-ecosystem.html', referencia: 'R3 Corda Open Source 4.12, Networks, identity, and discovery: comunicación P2P punto a punto, sin broadcast global; el certificado emitido por el operador vincula identidad de red, identidad legal y clave pública.' },
    { url: `${corda49}/node/operating/clientrpc.html`, referencia: 'R3 Corda 4.9, Interacting with a node: las llamadas RPC permiten a los clientes autorizados interactuar con el nodo; la autenticación se configura para los usuarios RPC y puede protegerse además con TLS.' },
    { url: `${corda49}/node/deploy/deploying-a-node.html`, referencia: 'R3 Corda 4.9, despliegue: el nodo obtiene los certificados necesarios del servicio de permissioning de la red; no los emite una blockchain.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 85: blockchain, tipos de redes y smart contracts. El programa A2 2025 no contiene epígrafe expreso de blockchain/Corda; por ello no se fuerza una equivalencia A2.' },
    { url: drive.technology, referencia: 'ITIC Academy 2026, bloque Tecnologías de Sistemas de Información, A1-85: blockchain, redes, consenso y smart contracts; mapa curricular.' }
  ], null, 'En Corda 4.9 los nodos no difunden globalmente las transacciones: comparten datos de forma punto a punto y según necesidad, por lo que A es la incorrecta. Se corrigen las otras opciones para que sean técnicamente precisas: las CorDapps son aplicaciones distribuidas que amplían el nodo y alojan contratos/flows; el propietario interactúa mediante RPC con autenticación configurada; y para unirse a una red permissioned el nodo obtiene un certificado del operador/Doorman que vincula la identidad de red, identidad legal y clave pública, no de la blockchain. La clasificación se limita al epígrafe A1-85, ya que el programa A2 vigente no recoge blockchain/Corda de forma expresa.', 'corregida']
];

const edits = {
  5516: { texto: 'En relación con los conceptos de programación orientada a aspectos (AOP) empleados por AspectJ, ¿cuál de los siguientes NO es un concepto básico?', opciones: ['Punto de corte (pointcut)', 'Punto de unión o cruce (join point)', 'Punto de origen', 'Tejido (weaving)'], respuesta_correcta: 2 },
  5517: { texto: '¿Cuál expresa el objetivo principal del proceso Planificación de Sistemas de Información (PSI) de MÉTRICA v3?', opciones: ['Consiste en nueve actividades que siempre deben ejecutarse secuencialmente, sin solapamiento.', 'Obtener un marco de referencia para desarrollar sistemas de información que responda a los objetivos estratégicos de la organización.', 'Determinar únicamente la arquitectura tecnológica final, sin analizar necesidades de información, proyectos ni prioridades.', 'Todas las anteriores son correctas.'], respuesta_correcta: 1 },
  5519: { texto: 'En la planificación predictiva de proyectos TIC, los diagramas de Gantt o de tiempo son una técnica de:', respuesta_correcta: 0 },
  5520: { texto: 'En el modelo de nodos de R3 Corda 4.9, señale la afirmación incorrecta:', opciones: ['Los nodos difunden las transacciones mediante broadcast global a toda la red P2P.', 'Las CorDapps son aplicaciones distribuidas que amplían el nodo y contienen lógica de contratos y flujos de negocio.', 'El propietario de un nodo interactúa con él mediante llamadas RPC, con las credenciales de usuario configuradas.', 'Para unirse a una red permissioned, el nodo obtiene del operador de la red (Doorman) un certificado que vincula su identidad de red con su identidad legal y clave pública.'], respuesta_correcta: 0 }
};

const log = path.join(__dirname, 'cambios-lote-1039.json');
const fs = require('node:fs');
if (!fs.existsSync(log)) aplicar({ numero: '1039', fecha: '2026-11-12', records, edits });

const bankFile = path.join(__dirname, '..', 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankFile, 'utf8'));
const changeLog = JSON.parse(fs.readFileSync(log, 'utf8'));
const academy = {
  5516: 'ITIC Academy 2026, bloque 38 Análisis, diseño y construcción de sistemas: técnicas de diseño; clasificación A2-II.3, paradigmas de programación.',
  5517: 'ITIC Academy 2026, bloque 12 Estrategias y herramientas del directivo TIC y planificación estratégica: PSI y plan de sistemas.',
  5518: 'ITIC Academy 2026, bloque 39 Calidad y Mantenimiento: gestión de configuración, versiones y cambios (A1-100/102); MÉTRICA como metodología en bloque 38.',
  5519: 'ITIC Academy 2026, bloque 12: planificación estratégica, herramientas de planificación/control y gestión de proyectos (PERT); mapa curricular.',
  5520: 'ITIC Academy 2026, bloque Tecnologías de Sistemas de Información, A1-85: blockchain, tipos de redes, consenso y smart contracts; no se asigna epígrafe A2 por falta de correspondencia expresa.'
};
for (const c of changeLog.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  q.clasificacion.bloque_academia = academy[c.id];
  q.clasificacion.nota = 'Clasificación contrastada con los programas oficiales A1/A2 de 2025 y el temario ITIC Academy 2026; la academia se usa como mapa curricular, no como fuente factual.';
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankFile, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(log, JSON.stringify(changeLog, null, 2) + '\n');
