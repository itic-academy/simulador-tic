const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const metric='https://drive.google.com/file/d/1hPYYrCoVBKhiEgMaqVBi5mpdUEm4_vV5/view?usp=drivesdk';
const dsi='https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A8d2cfee5-5617-4dea-8cf8-7b7a0131de84/METRICA_V3_Panificacion_de_Sistemas_de_Informacion.pdf';
const ias='https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A507af1ff-0457-464d-b276-be26a8826b1c/METRICA_V3_Implantacion_y_Aceptacion_del_Sistema.pdf';
const sei='https://www.sei.cmu.edu/library/capability-maturity-model-for-software-version-11/';
const nasa='https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/20100036670.pdf';
const asq='https://asq.org/quality-resources/cost-of-quality';
const qualAcademy='https://drive.google.com/file/d/1vRvn5ctFs9bXwuR5gfYXJiVUVhAfgG_7/view?usp=drivesdk';
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
apply({numero:'1212',fecha:'2026-11-13',records:[
 [6381,['95'],['III-2'],['MÉTRICA v3','PSI 9','revisión y aprobación','Comité de Dirección'],[
  src(dsi,'MÉTRICA v3, Planificación de Sistemas de Información: tabla de participantes atribuye participación al Comité de Dirección y al Jefe de Proyecto en PSI 9; actividad PSI 9 se denomina Revisión y Aprobación del PSI.'),
  src('https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ad601853c-e255-4ade-a9f8-af1357e3a151/METRICA_V3_Participantes.pdf','MÉTRICA v3, perfiles participantes: el Comité de Dirección tiene responsabilidad de revisar y aprobar formalmente los procesos.'),
  src(metric,'ITIC Academy, Tema 093 MÉTRICA v3: identifica PSI y sus actividades, incluido PSI 9.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 95: MÉTRICA.'),src(a2,'Convocatoria GSI A2 2025, anexo IX, tema III-2: proceso de desarrollo y metodologías.')
 ],null,'Se conserva la respuesta A pero se corrige la ambigüedad del original: el Comité de Dirección es quien aprueba formalmente el PSI; el Jefe de Proyecto participa en PSI 9 y coordina el proceso, pero no constituye una segunda autoridad de aprobación. Se reformulan distractores para no hacer competir el conjunto de participantes con la competencia formal de aprobación.','corregida'],
 [6382,['96'],['III-7'],['MÉTRICA v3','pruebas de implantación','copias de seguridad','recuperación','producción'],[
  src(ias,'MÉTRICA v3, Implantación y Aceptación del Sistema, actividad IAS 5: pruebas de implantación en el entorno real de operación; la directriz oficial asociada incluye pruebas de gestión de copias de seguridad y recuperación.'),
  src('https://alarcos.esi.uclm.es/ipsw/metrica3/metrica_3/guidances/guidelines/pruebas_implantacion_6305C19A.html','Directriz de Pruebas de Implantación de MÉTRICA v3, alojada por UCLM: incorpora explícitamente pruebas de gestión de copias y recuperación para comprobar procedimientos de salvaguarda.'),
  src(metric,'ITIC Academy, Tema 093 MÉTRICA v3: sección de implantación y aceptación; cotejo del tipo de prueba.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 96: pruebas y garantía de calidad del software.'),src(a2,'Convocatoria GSI A2 2025, anexo IX, tema III-7: pruebas de software y procedimientos.')
 ],null,'Se conserva B. La pregunta apunta a pruebas realizadas en el entorno operativo para comprobar respaldo y recuperación, que la guía de MÉTRICA clasifica como pruebas de implantación; no son pruebas de integración entre componentes.','vigente'],
 [6383,['98'],['III-13'],['CMM','Capability Maturity Model','SEI','histórico','CMMI'],[
  src(sei,'Software Engineering Institute, CMU/SEI-93-TR-024: el nombre del modelo de madurez de procesos software es Capability Maturity Model (CMM).'),
  src('https://www.sei.cmu.edu/history-of-innovation/transforming-software-quality-assessment/','SEI: CMMI evolucionó a partir del Software CMM; se distingue el nombre histórico CMM del marco posterior CMMI.'),
  src(qualAcademy,'ITIC Academy, material de calidad 2021, §4.2.1: contextualiza CMMI y modelos de calidad; no reemplaza la denominación histórica de SEI.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 98: métricas y evaluación de calidad del software.'),src(a2,'Convocatoria GSI A2 2025, anexo IX, tema III-13: calidad del software y modelos.')
 ],null,'Se conserva B con la denominación histórica exacta: CMM significa Capability Maturity Model. Se explicita que el modelo específico del SEI fue el Software CMM y que el nombre no debe confundirse con CMMI, su marco sucesor/integrado.','corregida'],
 [6384,['96'],['III-7'],['calidad del software','defectos','coste de corrección','ciclo de vida','estimación'],[
  src(nasa,'NASA Technical Reports Server, Error Cost Escalation Through the Project Life Cycle: muestra que, para una clase de sistemas y errores de requisitos, el coste de corrección tiende a crecer al detectarse más tarde; el estudio especifica el contexto de sistemas complejos.'),
  src('https://swehb.nasa.gov/spaces/SWEHBVB/pages/32604573/SWE-087%2B-%2BSoftware%2BPeer%2BReviews%2Band%2BInspections%2Bfor%2BRequirements%2C%2BPlans%2C%2BDesign%2C%2BCode%2C%2Band%2BTest%2BProcedures','NASA Software Engineering Handbook, SWE-087: detectar y corregir defectos de requisitos durante análisis resulta más barato que corregirlos en fases posteriores.'),
  src(qualAcademy,'ITIC Academy, Calidad 2021, temas 95/97: sitúa garantía y procesos de calidad en desarrollo; cotejo curricular, no fuente de la regla de costes.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 96: pruebas y garantía de calidad.'),src(a2,'Convocatoria GSI A2 2025, anexo IX, tema III-7: pruebas de software.')
 ],null,'Se conserva B solo como tendencia de gestión de calidad, no como ley universal: la comparación supone defectos equivalentes y el coste depende del contexto, arquitectura, detección y mitigación. Se añade esta condición al enunciado y se elimina la afirmación absoluta del original. La evidencia NASA ilustra el coste creciente de corregir errores de requisitos que escapan a fases posteriores.','corregida'],
 [6385,['96','98'],['III-13'],['costes de calidad','prevención','evaluación','fallos','planificación de calidad'],[
  src(asq,'ASQ, Cost of Quality: incluye expresamente la planificación de calidad entre los costes de prevención; la calibración aparece dentro de evaluación, y los costes de fallos derivan de no conformidades.'),
  src(qualAcademy,'ITIC Academy, Calidad 2021, temas 95, 97 y 102: función y modelos de calidad del software; cotejo curricular general.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 96 (garantía de calidad en desarrollo) y tema 98 (evaluación de calidad).'),src(a2,'Convocatoria GSI A2 2025, anexo IX, tema III-13: modelos, métricas, normas y estándares de calidad del software.')
 ],null,'Se conserva A. Se sustituye el distractor D ambiguo (el análisis de modos de fallo potenciales, FMEA, también puede ser prevención) por el análisis de causas de fallos ya ocurridos. Se precisa calibración de equipos de medición como evaluación. La planificación de calidad evita problemas y es un coste de prevención según ASQ.','corregida']
],edits:{
 6381:{texto:'En MÉTRICA v3, ¿qué órgano tiene la responsabilidad de aprobar formalmente el Plan de Sistemas de Información (PSI)?',opciones:['El Comité de Dirección.','Los usuarios expertos, por votación, sin intervención de la dirección.','El Jefe de Proyecto en nombre propio.','El equipo técnico de pruebas.'],respuesta_correcta:0},
 6383:{texto:'En el contexto histórico de mejora de procesos software desarrollado por el SEI, ¿qué significan las siglas CMM?',opcion:[1,'Capability Maturity Model']},
 6384:{texto:'Si se comparan defectos equivalentes y el coste de corregirlos según la fase de detección, ¿qué tendencia general cabe esperar en un proyecto de software?',opciones:['Corregirlos suele ser más costoso cuanto más tarde se detectan, aunque la magnitud depende del contexto.','Un defecto detectado en requisitos siempre cuesta más que uno detectado en implementación.','La fase de detección no guarda relación posible con el coste de corrección.','La corrección tiene un coste fijo idéntico en todas las fases y proyectos.'],respuesta_correcta:0},
 6385:{texto:'En el modelo de costes de calidad de prevención, evaluación y fallos, ¿cuál de estas actividades es un coste de prevención?',opciones:['Planificar la calidad del producto o proceso antes de su operación.','Calibrar un instrumento de medición para comprobar la conformidad de resultados.','Reparar un producto que no cumple los requisitos.','Analizar las causas de fallos que ya se han producido.'],respuesta_correcta:0}
}});
