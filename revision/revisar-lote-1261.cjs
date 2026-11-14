const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const lopd='https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673';
const gdpr='https://eur-lex.europa.eu/eli/reg/2016/679/oj';
const law40='https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566';
const oracle='https://docs.oracle.com/en/database/oracle/oracle-database/26/cncpt/concepts-for-database-administrators.html';
const ibm='https://www.ibm.com/think/topics/interactive-voice-response';
const academy08='1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM';
const academy10='1alTzv7f2Katg4EdxJ72SYkLm6UScCCho';
const academy09='1-xmHgvxArWY8GroFD1eSdyPrAQjkBpzo';
const academy29='1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ';
const academy30='11CEe-2aKTukr0w6e752_y5y-wWuy1bPH';
apply({numero:'1261',fecha:'2026-11-14',records:[
 [6626,[27],['I-7'],['protección de datos','derechos de las personas','derecho a indemnización','LOPDGDD','RGPD'],[
   src(lopd,'LO 3/2018, arts. 12–18: ejercicio de los derechos de protección de datos; la ley no reconoce una remuneración automática por el tratamiento lícito de los datos.'),
   src(gdpr,'Reglamento (UE) 2016/679, arts. 15–22 y 82: reconoce derechos de acceso, rectificación y limitación, entre otros; la indemnización exige daño material o inmaterial causado por una infracción, no nace por el mero tratamiento.'),
   src(a1,'Convocatoria GSI A1 2025, tema 27: régimen de protección de datos y derechos.'),
   src(a2,'Convocatoria GSI A2 2025, tema I.7: derechos y régimen jurídico de protección de datos.'),
   src(`https://drive.google.com/file/d/${academy08}/view?usp=drivesdk`,'ITIC Academy, bloque 08 Protección de Datos, actualización 2026: RGPD/LOPDGDD y derechos de las personas; la indemnización por daños se determina conforme al art. 82 RGPD.')
 ],{opcion:[2,'Derecho a percibir automáticamente una remuneración por el mero tratamiento lícito de sus datos.']},'Se mantiene C como respuesta, pero se precisa el distractor: no existe un derecho automático a recibir dinero por el mero tratamiento de los datos. Esto no elimina el derecho a reclamar indemnización por daños y perjuicios cuando concurran los requisitos del artículo 82 RGPD. Acceso, rectificación y limitación sí son derechos reconocidos.', 'corregida'],
 [6627,[27],['I-7'],['protección de datos','menores','consentimiento','LOPDGDD','edad de catorce años'],[
   src(lopd,'LO 3/2018, art. 7.1–2: el tratamiento fundado en consentimiento puede basarse en el consentimiento propio cuando el menor es mayor de catorce años; para menores de catorce, debe constar el consentimiento de quien ejerza patria potestad o tutela, con las excepciones legales del apartado 1.'),
   src(gdpr,'Reglamento (UE) 2016/679, art. 8: fija la regla europea para servicios de la sociedad de la información ofrecidos directamente a menores y permite a los Estados miembros establecer una edad entre 13 y 16 años; la regla española general de 14 años está en el art. 7 LOPDGDD.'),
   src(a1,'Convocatoria GSI A1 2025, tema 27: política, régimen jurídico y derechos de protección de datos.'),
   src(a2,'Convocatoria GSI A2 2025, tema I.7: protección de datos personales y derechos.'),
   src(`https://drive.google.com/file/d/${academy08}/view?usp=drivesdk`,'ITIC Academy, bloque 08 Protección de Datos, actualización 2026: LOPDGDD/RGPD y derechos de las personas; la edad y la excepción se contrastan directamente con el artículo 7 LOPDGDD.')
 ],null,'La clave A es correcta: el artículo 7.2 LOPDGDD exige que conste el consentimiento de quien ejerza la patria potestad o tutela para tratamientos de menores de catorce años basados en consentimiento. El umbral general español es mayor de catorce, sin perjuicio de los casos en que una ley exija asistencia para el acto o negocio subyacente.', 'vigente'],
 [6628,[22],['I-10'],['administración electrónica','cooperación interadministrativa','Comisión Sectorial de administración electrónica','Ley 40/2015'],[
   src(law40,'Ley 40/2015, disposición adicional novena.1: denomina Comisión Sectorial de administración electrónica al órgano técnico de cooperación entre AGE, comunidades autónomas y entidades locales en esta materia.'),
   src('https://www.boe.es/buscar/doc.php?id=BOE-A-2025-22239','Acuerdo de la Conferencia Sectorial publicado por Resolución de 20-10-2025, art. 12: mantiene la Comisión Sectorial de administración electrónica como órgano técnico de cooperación, dependiente de la Conferencia Sectorial de Administración Pública.'),
   src(a1,'Convocatoria GSI A1 2025, tema 22: Administración electrónica y modernización de servicios.'),
   src(a2,'Convocatoria GSI A2 2025, tema I.10: órganos de cooperación e infraestructuras/servicios comunes de Administración electrónica.'),
   src(`https://drive.google.com/file/d/${academy10}/view?usp=drivesdk`,'ITIC Academy, bloque 10 Gobernanza TIC, Administración Digital, Acceso Electrónico y Cooperación, actualización octubre de 2026: incluye cooperación y gobernanza de administración digital.')
 ],null,'La clave C es correcta conforme a la disposición adicional novena de la Ley 40/2015. El acuerdo publicado en octubre de 2025 conserva la Comisión Sectorial de administración electrónica y la sitúa bajo la Conferencia Sectorial de Administración Pública; no debe confundirse con la Comisión de Estrategia TIC ni con una conferencia sectorial distinta.', 'vigente'],
 [6629,[34,63],['III-4','IV-2'],['bases de datos','DBA','modelo entidad-relación','diseño de bases de datos','revisión de roles'],[
   src(oracle,'Oracle Database Concepts 26ai, apartado «Duties of Database Administrators»: incluye entre las tareas que un DBA puede realizar diseñar bases de datos, identificar requisitos y crear el diseño lógico/modelo conceptual; también señala que la distribución de responsabilidades depende del entorno y del tamaño de la organización.'),
   src(a1,'Convocatoria GSI A1 2025, temas 34 (funciones de bases de datos en centros de sistemas de información) y 63 (SGBD).'),
   src(a2,'Convocatoria GSI A2 2025, temas III.4 (modelado y diseño de bases de datos) y IV.2 (administración de SGBD).'),
   src(`https://drive.google.com/file/d/${academy09}/view?usp=drivesdk`,'ITIC Academy, bloque 09 Organización y Gestión de los Sistemas de Información, actualización 2026: describe el centro de sistemas de información y funciones del área de bases de datos.'),
   src(`https://drive.google.com/file/d/${academy29}/view?usp=drivesdk`,'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado de Datos, actualización 2026: cubre modelo entidad-relación, SGBD y diseño/modelado, pero no establece una separación universal entre estos cometidos y los de DBA.')
 ],null,'No se verifica la clave A ni se escoge una respuesta sustitutiva: el enunciado no define una organización, metodología o división de funciones que permita excluir sin más el modelado entidad-relación de las tareas de un DBA. La documentación vigente de Oracle incluye diseño lógico y modelo conceptual entre tareas que los DBA pueden realizar y advierte que las responsabilidades dependen del entorno. Sin concretar el marco, la pregunta es ambigua y queda pendiente de aclaración; la respuesta original se conserva sin certificar.', 'pendiente_ambiguedad'],
 [6630,[72],['II-12'],['centros de contacto','CRM','IVR','DTMF','reconocimiento del habla'],[
   src(ibm,'IBM, explicación técnica de IVR: describe el sistema telefónico automatizado como interacción mediante voz o entradas de menú/DTMF, con mensajes pregrabados o texto a voz.'),
   src('https://docs.oracle.com/communications/F60966_01/doc.1206/ncc_1200_cpe_ug.pdf','Oracle Communications, guía de usuario: define IVR como sistemas que ofrecen información en mensajes grabados por teléfono en respuesta a entradas habladas o, más habitualmente, DTMF.'),
   src(a1,'Convocatoria GSI A1 2025, tema 72: sistemas CRM y gestión de la relación con clientes.'),
   src(a2,'Convocatoria GSI A2 2025, tema II.12: atención a clientes y usuarios, centros de contacto, CRM y sistemas IVR.'),
   src(`https://docs.google.com/document/d/${academy30}/edit?usp=drivesdk`,'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, edición 2026.1: cobertura relacionada con CRM. La búsqueda en el material accesible no localizó una explicación específica de IVR, por lo que la correspondencia técnica se fundamenta en el epígrafe oficial A2-II.12 y documentación de IBM/Oracle.')
 ],{texto:'En un centro de contacto telefónico, ¿qué sistema automatizado reproduce locuciones o voz sintetizada y procesa las opciones introducidas mediante tonos DTMF o la voz del usuario para ofrecer información o encaminar la llamada?',opciones:['Sistema de respuesta de voz interactiva (IVR).','Agente virtual inteligente (IVA).','Distribuidor automático de llamadas (ACD).','Reconocedor automático del habla (ASR).'],respuesta_correcta:0},'Se confirma A y se precisa el supuesto de telefonía automatizada, incluyendo entradas DTMF o habladas y respuesta de voz. Se corrige el acrónimo del distribuidor automático de llamadas a ACD y se distingue del componente ASR, que reconoce voz pero no constituye por sí solo el sistema de diálogo/enrutamiento descrito. La academia cubre CRM de forma relacionada, pero no se halló una lección específica de IVR en el material consultado.', 'corregida']
]});
