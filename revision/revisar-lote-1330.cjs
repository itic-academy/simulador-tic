const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const vendors='https://downloads.docs.servicenow.com/pdf/enus/servicenow-xanadu-servicenow-platform-enus.pdf';
const cvs='https://cvs.nongnu.org/';
const inap='https://www.inap.es/documents/59312/1863988/PlantillaCorrectoraDefinitiva_Examen%2BExtraordinario%2B2019.pdf/4d5354b5-3d3d-0dc2-324c-226c268a77e5';
const mig='https://ptgmedia.pearsoncmg.com/images/0131502638/samplechapter/0131502638_ch13.pdf';
const quality='https://boe.es/buscar/act.php?id=BOE-A-2019-13618';
const itil='https://www.abim.go.ug/sites/files/%28ITIL%29%20Axelos%20-%20ITIL%20Foundation%204%20edition-Axelos%20%282019%29%5B1%5D_0.pdf';
const sla='https://www.contractsfinder.service.gov.uk/Notice/Attachment/a8c94764-61d0-4fce-99bc-29435f0b06b8';
const edits={
 6971:{texto:'En gestión de servicios y configuración de los sistemas de información orientada al gobierno TIC, ¿cuál de estas opciones corresponde principalmente a control de versiones de código fuente y no a una plataforma ITSM/CMDB?',opciones:['ServiceNow.','BMC Remedy.','CVS (Concurrent Versions System).','EasyVista.'],respuesta_correcta:2},
 6972:{texto:'En una taxonomía clásica de estrategias de migración de aplicaciones, ¿cómo se denomina desarrollar de nuevo la aplicación con nuevos paradigmas de programación, pudiendo recurrir a ingeniería inversa para determinar su funcionalidad?',opciones:['Replacement.','Rearchitecting.','Rehosting.','Refronting.'],respuesta_correcta:1},
 6973:{texto:'En el Programa de Reconocimiento del marco general para la mejora de la calidad en la Administración General del Estado, ¿qué órgano certifica el nivel de excelencia alcanzado por una organización pública?',opciones:['Observatorio de la Calidad de los Servicios Públicos.','Agencia Estatal de Evaluación de las Políticas Públicas y la Calidad de los Servicios (AEVAL).','Instituto para la Evaluación de Políticas Públicas.','Dirección General de Gobernanza Pública.'],respuesta_correcta:3},
 6974:{texto:'Según ITIL 4, ¿cómo se denomina el conjunto de actividades interrelacionadas o interactivas que transforma entradas definidas en salidas definidas y especifica la secuencia de acciones y sus dependencias?',opciones:['Proceso.','Rol.','Sistema.','Función.'],respuesta_correcta:0},
 6975:{texto:'Al definir objetivos medibles en un acuerdo de nivel de servicio (ANS/SLA), ¿qué conjunto permite evaluar de forma reproducible si se alcanza el nivel acordado?',opciones:['Clasificar incidencias como leves, graves o críticas y añadir indicadores sin definir cómo se calculan.','Fijar umbrales sin precisar qué indicador se mide ni la unidad usada.','Establecer penalizaciones económicas sin definir métricas de servicio.','Especificar indicadores, unidad y método de medición, periodicidad de seguimiento y umbrales/objetivos acordados.'],respuesta_correcta:3}
};
const records=[
 [6971,[100,102],['IV-4'],['ITSM','gestión de configuración','CMDB','ServiceNow','BMC Remedy','EasyVista','CVS','control de versiones'],[
  {url:vendors,referencia:'ServiceNow Xanadu, documentación de plataforma, sección CMDB: describe la CMDB como aplicación para representar activos, servicios y sus relaciones mediante elementos de configuración.'},
  {url:'https://docs.bmc.com/xwiki/bin/view/More-Products/RemedyForce/BMC-Helix-Remedyforce/remforce202202/Using/Asset-and-CI-management/Asset-management/Managing-relationships-between-an-asset-and-other-CMDB-instances/',referencia:'BMC Documentation, Remedyforce: gestiona activos y elementos de configuración en la CMDB.'},
  {url:'https://www.easyvista.com/products/it-service-management-software/',referencia:'EasyVista, página oficial EV Service Manager: suite ITSM con catálogo de procesos ITIL y CMDB.'},
  {url:cvs,referencia:'CVS project, definición del Concurrent Versions System como control de versiones de fuentes y documentos (source configuration management), no como suite ITSM/CMDB de gobierno TIC.'},
  {url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',referencia:'ITIC Academy, bloque 39 Calidad y mantenimiento, versión 2026.1: incluye migración, gestión de configuración y versiones (A1 100/102; A2 IV.4). Cotejo curricular.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 100/102: migración de aplicaciones y gestión de configuración/versiones.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, tema IV.4: gestión de configuración, control de cambios y versiones, herramientas de operación.'}
 ],undefined,'Corregida C. Se precisa que la pregunta compara el ámbito ITSM/CMDB de gobierno TIC con el control de versiones del código. ServiceNow, BMC Remedy y EasyVista son plataformas de servicios/configuración; CVS sí es gestión de configuración en el sentido de versionado de fuentes, pero no una suite ITSM/CMDB.','corregida'],
 [6972,[100],['III-1','IV-4'],['migración de aplicaciones','rearquitectura','reingeniería','ingeniería inversa','rehosting','replacement','refronting'],[
  {url:inap,referencia:'INAP, plantilla correctora definitiva del examen extraordinario de 2019, pregunta 68: distingue refronting (modificar interfaz) de las estrategias de migración; sirve como contraste oficial de la taxonomía clásica.'},
  {url:mig,referencia:'Pearson, capítulo de muestra “Examining Strategies”: define rearchitecting como ingeniería inversa/reconstrucción de la arquitectura y diferencia replacement, rehosting y refronting.'},
  {url:'https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html',referencia:'AWS Prescriptive Guidance, estrategias de migración: distingue rehost (sin cambio de aplicación), refactor/re-architect (modificar arquitectura) y replacement/repurchase; se usa para diferenciarlo del rehosting moderno a nube.'},
  {url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',referencia:'ITIC Academy, bloque 39 Calidad y mantenimiento, versión 2026.1: cubre el epígrafe A1 100 sobre migración de aplicaciones y estrategias clásicas. Cotejo curricular.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 100: migración de aplicaciones por ajuste dimensional y obsolescencia técnica.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, tema III.1: ciclo de vida y modelos de sistemas; IV.4, gestión de configuración y cambios.'}
 ],undefined,'Corregida B. En la taxonomía clásica del temario, rearchitecting reconstruye/reorganiza la aplicación y puede requerir ingeniería inversa; replacement sustituye el sistema por otro producto o aplicación, rehosting lo traslada sin cambiar arquitectura/código y refronting renueva principalmente la interfaz. Se delimita expresamente la taxonomía clásica porque las estrategias de migración cloud actuales usan marcos distintos (p. ej., 7 Rs).','corregida'],
 [6973,[22],[],['calidad','servicios públicos','excelencia','AEVAL','Dirección General de Gobernanza Pública'],[
  {url:quality,referencia:'Orden TFP/967/2019, art. 6: atribuye a la Dirección General de Gobernanza Pública la resolución y certificación del nivel de excelencia acreditado por la organización solicitante.'},
  {url:'https://boe.es/diario_boe/txt.php?id=BOE-A-2026-11576',referencia:'Orden TDF/527/2026, XIX edición del Programa de Reconocimiento: remite al procedimiento de certificación de la Orden TFP/967/2019.'},
  {url:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',referencia:'ITIC Academy, bloque 03 Actuación administrativa y Administración digital, versión 2026.2, 01-10-2026: incluye calidad en los servicios públicos y modernización TIC; contraste curricular.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 22: calidad en los servicios públicos y papel de las TIC en su modernización.'}
 ],undefined,'Corregida D. La certificación del nivel de excelencia corresponde actualmente a la Dirección General de Gobernanza Pública, conforme al art. 6 de la Orden TFP/967/2019 y las convocatorias posteriores, incluida la de 2026. AEVAL es una opción histórica; el Observatorio y el Instituto de Evaluación no resuelven ni emiten esa certificación.','corregida'],
 [6974,[106],[],['ITIL','ITIL 4','proceso','entradas','salidas','mejora continua'],[
  {url:itil,referencia:'AXELOS, ITIL Foundation: ITIL 4 Edition, definición de proceso: actividades interrelacionadas/interactivas transforman entradas definidas en salidas y el proceso define secuencia y dependencias.'},
  {url:'https://www.iso.org/standard/70636.html',referencia:'ISO/IEC 20000-1:2018, norma de sistema de gestión de servicios: términos y requisitos de procesos de gestión de servicios; referencia técnica complementaria.'},
  {url:'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk',referencia:'ITIC Academy, bloque 41 ITIL y COBIT, versión 2026.1, 29-09-2026: incluye ITIL 4, gestión de servicios y gobierno/control TIC del tema A1 106. Cotejo curricular.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 106: gestión de servicios TIC, ANS, incidencias y bases conceptuales de ITIL/COBIT.'}
 ],undefined,'Vigente A tras actualizar el enunciado a la definición ITIL 4: proceso es un conjunto de actividades interrelacionadas o interactivas que transforma entradas definidas en salidas y especifica secuencia y dependencias. El término “función” pertenece a terminología anterior de ITIL y no encaja con esta definición.','vigente'],
 [6975,[106],[],['ANS','SLA','indicadores','KPI','unidad de medida','periodicidad','umbrales','nivel de servicio'],[
  {url:sla,referencia:'Cabinet Office / Crown Commercial Service, modelo de Schedule 9 SLA: fija indicadores de nivel de servicio medibles y medición del desempeño; el contrato usa objetivos y umbrales.'},
  {url:'https://www.gov.uk/government/publications/the-official-procurement-act-2023-e-learning/module-9-contract-governance',referencia:'GOV.UK, contract governance: KPIs definidos para medir desempeño contractual con objetivos acordados.'},
  {url:'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk',referencia:'ITIC Academy, bloque 41 ITIL y COBIT, versión 2026.1, 29-09-2026: incluye acuerdos de nivel de servicio, indicadores y métricas del tema A1 106. Cotejo curricular.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 106: acuerdos de nivel de servicio, gestión TIC e indicadores.'}
 ],undefined,'Corregida D. Para evaluar el cumplimiento de un ANS se acuerdan indicadores definidos de forma verificable, su unidad/método de medida, periodicidad de seguimiento e objetivos o umbrales. Se reescribieron las opciones para evitar que clasificar incidencias o pactar penalizaciones parezca suficiente por sí solo.','corregida']
];
aplicar({numero:'1330',fecha:'2026-11-15',records,edits});
