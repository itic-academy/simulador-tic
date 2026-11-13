const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const dir=__dirname,dataFile=path.join(dir,'..','preguntas_preparatic.json'),logFile=path.join(dir,'cambios-lote-1242.json');
const inv=JSON.parse(fs.readFileSync(path.join(dir,'inventario.json'),'utf8'));
const data=JSON.parse(fs.readFileSync(dataFile,'utf8')),log=JSON.parse(fs.readFileSync(logFile,'utf8'));
const entries={
 6531:'Cotejo con ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas de información», edición 2026: el ciclo de vida incluye diseño antes de implementación; la fase se valida con el manual de ingeniería NASA.',
 6532:'Cotejo con ITIC Academy, bloque 38, edición 2026: incorpora explícitamente pipelines como código, infraestructura como código y GitOps; la función de Ansible se comprueba con documentación oficial.',
 6533:'Cotejo con ITIC Academy, bloque 39 «Calidad y mantenimiento», edición 2026: contempla modelos de calidad y CMMI; se contrasta el nivel 4 con la denominación vigente del CMMI Institute.',
 6534:'Cotejo con ITIC Academy, bloque 39, edición 2026: el temario A1-96/A2-D7 cubre técnicas y herramientas de prueba; la clasificación de Cherokee se confirma con la documentación del proyecto.',
 6535:'Cotejo con ITIC Academy, bloques 38 (ciclo de construcción, Git, CI/CD y DevOps) y 39 (gestión de configuración y cambios), edición 2026. La reformulación distingue controles de plataforma de acuerdos jurídicos de confidencialidad.'
};
for(const [key,note] of Object.entries(entries)){
 const id=Number(key),q=data.preguntas.find(x=>x.id===id),c=log.cambios.find(x=>x.id===id);assert.ok(q&&c,`Falta ${id}`);
 q.clasificacion.bloque_academia=note;q.clasificacion.nota=note;c.actualizada.clasificacion.bloque_academia=note;c.actualizada.clasificacion.nota=note;
 c.actualizada.revision.fuentes=structuredClone(q.revision.fuentes);c.actualizada.revision.observaciones=q.revision.observaciones;
}
fs.writeFileSync(dataFile,JSON.stringify(data,null,2)+'\n');fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
const file=path.join(dir,'README.md');let text=fs.readFileSync(file,'utf8');
const fmt=n=>n.toLocaleString('es-ES'),examined=inv.total-inv.estados.sin_revisar,verified=inv.estados.vigente+inv.estados.corregida+inv.estados.historica,pending=inv.estados.pendiente_fuente+inv.estados.pendiente_ambiguedad;
text=text.replace(/Último lote secuencial:.*?sin revisar individualmente\./,`Último lote secuencial: 1242 (IDs 6531–6535). Acumulado: ${fmt(examined)} preguntas examinadas individualmente; ${fmt(verified)} verificadas (${fmt(inv.estados.vigente)} vigentes, ${fmt(inv.estados.corregida)} corregidas y ${fmt(inv.estados.historica)} históricas); ${fmt(pending)} pendientes documentadas (${fmt(inv.estados.pendiente_fuente)} de fuente y ${fmt(inv.estados.pendiente_ambiguedad)} de ambigüedad); ${fmt(inv.estados.sin_revisar)} sin revisar individualmente.`);
const section=`## Lote 1242 — 13 de noviembre de 2026

Revisadas individualmente las preguntas 6531–6535. Se precisó la fase de diseño en el ciclo secuencial; se confirmó Ansible como herramienta de automatización de infraestructura; se comprobó la denominación del nivel 4 CMMI; se desambiguó Cherokee como servidor web frente a herramientas de pruebas; y se reformuló GitLab para separar controles técnicos de acceso y colaboración de las cláusulas jurídicas de confidencialidad. Se conservaron los originales y se cotejaron los temas oficiales A1/A2 y el material de ITIC Academy en Drive.

- **6531 — ciclo en cascada:** respuesta B, diseño. La arquitectura y los componentes se definen antes de implementar. A1-88/A1-95; A2-III.2; Academy, bloque 38.
- **6532 — IaC:** respuesta D, Ansible. Playbooks automatizan configuración y despliegue; Spring Boot, SonarQube y Vault cubren ámbitos distintos. A1-97/100/102; A2-III.6; Academy, bloque 38.
- **6533 — CMMI:** respuesta B, nivel 4 «Gestionado cuantitativamente». A1-98/A2-III.13; Academy, bloque 39.
- **6534 — herramientas web:** respuesta D, Cherokee, que es servidor web; Selenium automatiza navegadores y JMeter prueba carga/rendimiento web. A1-96/A2-III.7; Academy, bloque 39.
- **6535 — GitLab:** respuesta D tras precisar el enunciado. La plataforma aloja repositorios, aplica permisos, facilita revisión y automatiza CI/CD; no crea ni sustituye contratos de confidencialidad. A1-97/102; A2-III.6; Academy, bloques 38 y 39.

Fuentes primarias: [NASA SWE-111, diseño de software](https://swehb.nasa.gov/spaces/7150/pages/16450560/SWE-111+Software+Design+Description) y [NASA Software Engineering Handbook, ciclo de vida](https://standards.nasa.gov/sites/default/files/standards/NASA/Baseline/0/nasa-gb-871913.pdf); [Ansible, documentación oficial](https://docs.ansible.com/) e [introducción](https://docs.ansible.com/projects/ansible/latest/getting_started/introduction.html); [CMMI Institute, niveles](https://cmmiinstitute.com/learning/appraisals/levels) y [reporte técnico 2026](https://www.cmmiinstitute.com/getattachment/db45fa5c-1b72-4314-a362-27668bf31d0f/CMMI-Technical-Report-Performance-Results-2026.pdf); [Cherokee, documentación del servidor](https://cherokee-project.com/doc/), [Selenium, overview](https://www.selenium.dev/documentation/overview/) y [Apache JMeter](https://jmeter.apache.org/); [GitLab, protección de repositorios](https://docs.gitlab.com/user/project/repository/protect/), [controles de acceso](https://docs.gitlab.com/auth/auth_practices/) y [documentación de usuario](https://docs.gitlab.com/user/). Convocatorias: [GSI A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [GSI A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262). Cotejo curricular Drive: [ITIC Academy, bloque 38](https://docs.google.com/document/d/1za_7e_LlvUEpja7VJyYElIgRIPu_AbE3/edit) y [bloque 39](https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk); academia solo establece encaje de temario y no reemplaza fuentes técnicas.

Inventario local: ${fmt(examined)} examinadas; ${fmt(verified)} verificadas (${fmt(inv.estados.vigente)} vigentes, ${fmt(inv.estados.corregida)} corregidas y ${fmt(inv.estados.historica)} históricas); ${fmt(pending)} pendientes (${fmt(inv.estados.pendiente_fuente)} de fuente y ${fmt(inv.estados.pendiente_ambiguedad)} de ambigüedad); ${fmt(inv.estados.sin_revisar)} sin revisar; errores estructurales ${inv.errores_estructurales.length}. Ejecutados inventario.cjs, verificar.cjs y git diff --check. Las restantes ${fmt(inv.estados.sin_revisar)} preguntas continúan idénticas al original. Pendiente verificar la publicación del lote.

`;
assert.ok(text.includes('## Lote 1241 —'));assert.ok(!text.includes('## Lote 1242 —'));const at=text.indexOf('## Lote 1241 —');text=text.slice(0,at)+section+text.slice(at);fs.writeFileSync(file,text);console.log(`README actualizado: ${examined} examinadas, ${verified} verificadas, ${pending} pendientes; ${inv.estados.sin_revisar} sin revisar.`);
