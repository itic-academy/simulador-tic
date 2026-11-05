const apply = require('./aplicar-lote.cjs');
const metricav3 = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ae15c0c5b-dd9c-4e48-82e3-9e36ba18e839/METRICA_V3_Mantenimiento_de_Sistemas_de_Informacion.pdf';
const metricaparticipantes = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ad601853c-e255-4ade-a9f8-af1357e3a151/METRICA_V3_Participantes.pdf';
const maintainabilityFactors = 'https://alarcos.esi.uclm.es/Per/fruiz/curs/mso/trans/S3.pdf';
const pressman = 'https://www.mheducation.com/highered/product/software-engineering-a-practitioners-approach-pressman.html?exactIsbn=true';
const iso29148 = 'https://www.iso.org/standard/72089.html';
const gaOlegacy = 'https://files.gao.gov/reports/GAO-25-107795/index.html';
const iso14764 = 'https://www.iso.org/standard/80710.html';
apply({
  numero: '736', fecha: '2026-11-05',
  records: [
    [4001, ['101'], ['III-8'], ['MÉTRICA v3', 'proceso MSI', 'roles y responsabilidades'], [{ url: metricav3, referencia: 'MÉTRICA v3, Mantenimiento de Sistemas de Información, tabla de participantes de MSI 1–4 y epígrafes de tareas.' }, { url: metricaparticipantes, referencia: 'MÉTRICA v3, Participantes, perfiles de participantes y responsabilidades del jefe de proyecto y responsables funcionales.' }], '', 'Se limita la pregunta a los roles que aparecen colectivamente en la tabla de participantes del proceso MSI. Directores de usuarios figuran en MSI 4; el equipo de mantenimiento en MSI 2–4; el jefe de proyecto en MSI 3–4; y el responsable de mantenimiento en MSI 1–4. MÉTRICA no lista analistas como participantes del proceso MSI.', 'corregida'],
    [4002, ['101'], ['III-8'], ['mantenibilidad', 'factores de mantenibilidad'], [{ url: maintainabilityFactors, referencia: 'Material docente UCLM-ESI “Mantenimiento del Software”, diapositiva 10; transmite una lista atribuida a Kopetz, pero no se localizó aquí la referencia primaria verificable.' }], '', 'Pendiente de resolver: la fuente disponible es material docente secundario que atribuye una lista a Kopetz, y varias alternativas reúnen factores reconocibles de esa lista; la formulación no ofrece una respuesta única defendible sin identificar la fuente bibliográfica y el criterio exacto de selección. No se valida la clave original.', 'pendiente_ambiguedad'],
    [4003, ['88'], ['III-3'], ['Pressman', 'ingeniería de requisitos', 'elicitación iterativa'], [{ url: pressman, referencia: 'Pressman y Maxim, Software Engineering: A Practitioner’s Approach, 9.ª ed., cap. 7 “Understanding Requirements”; la elicitación se describe como actividad evolutiva, con nuevas necesidades emergentes durante el desarrollo iterativo.' }, { url: iso29148, referencia: 'ISO/IEC/IEEE 29148:2018, estándar vigente de ingeniería de requisitos; procesos iterativos y recursivos en el ciclo de vida.' }], '', 'Se precisa que la elicitación vuelve sobre los requisitos conforme evoluciona la comprensión y aparece nueva información. “Cíclico” podría usarse informalmente como sinónimo de repetición; las alternativas ahora preguntan por la formulación iterativa de Pressman y no presentan ambos términos como distractores equivalentes.', 'corregida'],
    [4004, ['101'], ['III-8'], ['mantenimiento adaptativo', 'cambios del entorno'], [{ url: metricav3, referencia: 'MÉTRICA v3, Mantenimiento de Sistemas de Información, tipología de mantenimiento; adaptativo responde a cambios de los entornos de operación.' }, { url: iso14764, referencia: 'ISO/IEC/IEEE 14764:2022, catálogo oficial de la edición vigente sobre mantenimiento de software.' }], '', 'La clave adaptativo es correcta en MÉTRICA v3 y coincide con el concepto actual de adaptar el producto al cambio de entorno. Se mantiene la pregunta, pero se identifica el marco de la tipología y se añade explicación.', 'vigente'],
    [4005, ['100', '101'], ['III-8'], ['sistemas legacy', 'obsolescencia tecnológica', 'mantenimiento'], [{ url: gaOlegacy, referencia: 'U.S. GAO, GAO-25-107795, resumen ejecutivo y sección sobre sistemas federales legacy: lenguajes obsoletos, hardware/software sin soporte y vulnerabilidades pueden dificultar mantenimiento, aumentar costes y riesgos.' }], '', 'Se sustituye la afirmación universal “difícil, desconocido y caro” por un enunciado delimitado a los riesgos comunes recogidos por el informe GAO-25-107795. “Legacy” no implica por sí solo que todos los sistemas sean desconocidos o tengan idéntico coste; la evidencia citada se refiere a sistemas críticos federales analizados por GAO.', 'corregida']
  ],
  edits: {
    4001: { texto: 'Según la tabla de participantes de MÉTRICA v3, ¿qué perfiles aparecen colectivamente en las actividades MSI 1–MSI 4?', respuesta_correcta: 3 },
    4003: {
      texto: 'Según Pressman, ¿cómo caracteriza la elicitación de requisitos, que evoluciona conforme el equipo aprende y obtiene nueva información?',
      opciones: ['Como una actividad que se realiza una sola vez y no se revisa.', 'Como un proceso iterativo que vuelve sobre los requisitos.', 'Como tres fases fijas denominadas recogida, elicitación y revisión.', 'Como procesos paralelos, cada uno dedicado únicamente a una clase de requisito.'],
      respuesta_correcta: 1
    },
    4005: {
      texto: 'Según el informe GAO-25-107795 sobre sistemas federales legacy críticos, ¿qué combinación describe problemas que se observan con frecuencia?',
      opciones: ['Lenguajes obsoletos, hardware o software sin soporte y vulnerabilidades conocidas, que pueden dificultar el mantenimiento y elevar costes y riesgos.', 'Siempre son fáciles de mantener porque no cambian.', 'Solo presentan problemas de interfaz, sin relación con tecnología o ciberseguridad.', 'No pueden ejecutarse en producción y deben sustituirse de inmediato en todos los casos.'],
      respuesta_correcta: 0
    }
  }
});
