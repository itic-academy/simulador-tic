const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const isoc='https://www.internetsociety.org/mission/';
const ietf='https://www.ietf.org/about/introduction/';
const digital='https://commission.europa.eu/system/files/2020-04/political-guidelines-next-commission_en_0.pdf';
const nist='https://csrc.nist.gov/pubs/sp/800/145/final';
const pg='https://www.postgresql.org/docs/current/glossary.html';
const moodle='https://docs.moodle.org/502/en/Moodle';
const academy6='https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk';
const academy17='https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk';
const academy25='https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view?usp=drivesdk';
const academy29='https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk';
const academy33='https://drive.google.com/file/d/15iokZokiVzk3qpTTQvMpDN0W27PL8tbv/view?usp=drivesdk';
const academy42='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const ref=(url,referencia)=>({url,referencia});
const records=[
 [5696,[109],['IV-13'],['Internet Society','ISOC','IETF','IAB','W3C','gobernanza de Internet','estándares abiertos'],[
  ref(isoc,'Internet Society, misión institucional vigente: apoya y promueve el desarrollo de Internet como infraestructura técnica global y el desarrollo/aplicación de estándares abiertos; la organización no es un regulador único de Internet.'),
  ref(ietf,'IETF, Introduction and Mission: es una organización de desarrollo de estándares para Internet; elabora estándares técnicos voluntarios y no controla Internet.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 109: red Internet y servicios básicos.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.13: arquitectura, principios y servicios de Internet.'),
  ref(academy42,'ITIC Academy, bloque 42 Redes, versión 2026, incluye el tema A1-109 sobre Internet y servicios básicos. El material cotejado ofrece contexto de red; la misión diferenciada de ISOC e IETF se comprueba en sus fuentes institucionales.')
 ],null,'Corregida, respuesta C. El enunciado original atribuía a ISOC de manera demasiado amplia el liderazgo de políticas y estándares, función que podía confundirse con IETF (desarrollo de estándares técnicos), IAB (arquitectura y supervisión técnica) o W3C (estándares de la Web). Se pregunta ahora por la organización cuya misión es apoyar y promover el desarrollo abierto y el uso de Internet: Internet Society (ISOC). No se presenta a ISOC como autoridad reguladora ni como autora única de estándares. A1-109/A2-IV-13.','corregida'],
 [5697,[18],['I-6'],['Comisión Europea','Europa adaptada a la era digital','high-performance computing','computación de alto rendimiento','EuroHPC','2019-2024','histórica'],[
  ref(digital,'Comisión Europea, Orientaciones políticas de la próxima Comisión 2019–2024, prioridad “A Europe fit for the digital age”: menciona inversión en high-performance computing junto con blockchain, quantum computing, algoritmos y herramientas de datos.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 18: impacto de las TIC en la sociedad y nuevos hábitos de relación y consumo de información.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.6: sociedad de la información y Agenda Digital.'),
  ref(academy6,'ITIC Academy, bloque 06 Economía, Sociedad, Empleo y Transformación Digital, versión 2026.2: cotejo temático de sociedad de la información y transformación digital (A1-18/A2-I.6). La referencia concreta a HPC pertenece a las orientaciones políticas de 2019–2024 y se conserva como contenido histórico, no como prioridad actual.')
 ],null,'Histórica verificada, respuesta A. Las orientaciones políticas de la Comisión para 2019–2024, bajo “A Europe fit for the digital age”, mencionaban invertir en computación de alto rendimiento, entre otras tecnologías. El periodo está cerrado; la pregunta se fecha expresamente para evitar presentarlo como la estrategia vigente. A1-18/A2-I-6.','historica'],
 [5698,[55],['II-1'],['NIST SP 800-145','IaaS','infraestructura como servicio','procesamiento','almacenamiento','redes','recursos cloud'],[
  ref(nist,'NIST SP 800-145, The NIST Definition of Cloud Computing, § 2: IaaS permite aprovisionar procesamiento, almacenamiento, redes y otros recursos fundamentales; el consumidor puede desplegar software, incluidos sistemas operativos y aplicaciones.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 55: cloud computing, IaaS, PaaS y SaaS.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.1: computación en la nube, base tecnológica, componentes, funcionalidades y capacidades.'),
  ref(academy25,'ITIC Academy, bloque 25 Cloud Computing, versión 2026: define los tres modelos de servicio y el reparto de responsabilidades siguiendo NIST SP 800-145; cobertura A1-55/A2-II.1.')
 ],null,'Corregida, respuesta A. NIST define IaaS como la capacidad de aprovisionar procesamiento, almacenamiento, redes y otros recursos fundamentales; el consumidor despliega y administra sus sistemas operativos y aplicaciones, sin controlar la infraestructura subyacente. PaaS ofrece plataforma para desplegar aplicaciones y SaaS ofrece aplicaciones del proveedor. A1-55/A2-II-1.','corregida'],
 [5699,[63,64],['II-5','III-4'],['transacciones de bases de datos','ACID','atomicidad','consistencia','aislamiento','durabilidad','trazabilidad'],[
  ref(pg,'PostgreSQL 18, documentación oficial, glosario ACID: Atomicity, Consistency, Isolation and Durability; son las cuatro propiedades de transacciones. La trazabilidad no forma parte de la sigla ACID.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, temas 63–64: SGBD, modelo relacional y SQL.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.5 (SGBD relacionales) y tema III.4 (diseño de bases de datos y concurrencia).'),
  ref(academy29,'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado de Datos, versión 2026: cotejo de SGBD, transacciones y concurrencia para A1-63/A1-64 y A2-II.5/A2-III.4; las cuatro propiedades ACID se contrastan con documentación técnica del SGBD.')
 ],null,'Corregida, respuesta D. Se explicita que el criterio es el conjunto ACID: atomicidad, consistencia, aislamiento y durabilidad. La trazabilidad puede ser una característica de auditoría o registro, pero no una de esas cuatro propiedades transaccionales. A1-63/A1-64/A2-II-5/A2-III-4.','corregida'],
 [5700,[73],[],['e-learning','Moodle','LMS','software libre','código abierto','GNU GPL'],[
  ref(moodle,'MoodleDocs, About Moodle: Moodle es una plataforma de aprendizaje y se distribuye como software de código abierto bajo licencia GNU GPL.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 73: e-learning, conceptos, herramientas, implantación y normalización.'),
  ref(academy33,'ITIC Academy, bloque 33 E-Learning y Sistemas de Información Geográfica, versión 2026.1, sección E-learning: incluye LMS/LCMS, plataformas y SCORM; el propio mapa del bloque indica que no hay correspondencia A2 específica para este epígrafe.')
 ],null,'Corregida, respuesta A. Moodle es una plataforma de aprendizaje/LMS distribuida como software libre y de código abierto bajo GNU GPL. MOOC designa un tipo de curso masivo y abierto; MiríadaX y Coursera son servicios/plataformas de cursos, no el LMS libre preguntado. A1-73; sin tema A2 específico equivalente.','corregida']
];
const edits={
 5696:{texto:'¿Qué organización sin ánimo de lucro apoya y promueve el desarrollo abierto, la evolución y el uso de Internet para todas las personas?',opciones:['IETF','IAB','Internet Society (ISOC)','W3C'],respuesta_correcta:2},
 5697:{texto:'En las orientaciones políticas de la Comisión Europea para 2019–2024, bajo la prioridad «A Europe fit for the digital age», ¿qué tecnología se menciona entre las áreas en las que invertir para reforzar el liderazgo tecnológico europeo?',opciones:['Computación de alto rendimiento (HPC)','Ley de Medios de Comunicación Audiovisuales','Futuro de la televisión digital terrestre','Infraestructuras digitales aeronáuticas'],respuesta_correcta:0},
 5698:{texto:'Según NIST SP 800-145, ¿qué modelo de servicio cloud permite al consumidor aprovisionar procesamiento, almacenamiento y redes, y desplegar en ellos sus sistemas operativos y aplicaciones?',opciones:['IaaS','SaaS','PaaS','On premise'],respuesta_correcta:0},
 5699:{texto:'¿Cuál de las siguientes NO es una de las cuatro propiedades ACID clásicas de las transacciones de bases de datos?',opciones:['Atomicidad','Consistencia','Aislamiento','Trazabilidad'],respuesta_correcta:3},
 5700:{texto:'¿Cuál de las siguientes es una plataforma de aprendizaje (LMS) de código abierto distribuida bajo licencia GNU GPL?',opciones:['Moodle','MOOC','MiríadaX','Coursera'],respuesta_correcta:0}
};
aplicar({numero:'1075',fecha:'2026-11-12',records,edits});
