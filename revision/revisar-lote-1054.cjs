const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const law39='https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565';
const charter='https://eur-lex.europa.eu/eli/treaty/char_2016/art_8/oj';
const eidas='https://eur-lex.europa.eu/eli/reg/2014/910/oj';
const nist53='https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final';
const nistSod='https://csrc.nist.gov/glossary/term/separation_of_duty';
const metrica='https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A0f07660d-1044-489e-a3be-3a94b80fbb16/METRICA_V3_Gestion_de_Proyectos.pdf';
const course='https://drive.google.com/file/d/1ANdenllxXF4E7Sl4vJdJ_XPUPkx7Mqp_/view?usp=drivesdk';
const academy93='https://drive.google.com/file/d/1hPYYrCoVBKhiEgMaqVBi5mpdUEm4_vV5/view?usp=drivesdk';
const admin='https://drive.google.com/file/d/1dW2ffNhCduFHJ1hI2nT6fqs_G8DeNpo3/view?usp=drivesdk';
const security='https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const ref=(url,referencia)=>({url,referencia});
const records=[
 [5591,[8],['I-9'],['capacidad de obrar','Ley 39/2015','personas interesadas','entidades sin personalidad'],[
  ref(law39,'Ley 39/2015, texto consolidado, art. 3: capacidad de obrar de personas físicas/jurídicas, menores en los supuestos legales y grupos/uniones/entidades sin personalidad o patrimonios autónomos cuando la ley lo declare expresamente.'),
  ref(admin,'ITIC Academy 2026, bloque Actuación administrativa y Administración digital, A1 temas 8/22 y A2 O8/I.9: encaje del procedimiento administrativo y de la capacidad ante las AAPP.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 8: régimen jurídico y procedimiento administrativo.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.9: instrumentos y relación electrónica con las AAPP.')
 ],null,'Se corrige la pregunta: “ciudadano” no es la categoría que define el art. 3. Se pregunta ahora qué sujetos pueden tener capacidad de obrar ante las AAPP. La respuesta D incluye personas físicas/jurídicas con capacidad civil, menores en el alcance permitido por el ordenamiento y, cuando una ley lo declare expresamente, grupos/uniones/entidades sin personalidad y patrimonios independientes. No se afirma que toda entidad sin personalidad la tenga automáticamente.','corregida'],
 [5592,[22],['I-9'],['firma electrónica','Ley 39/2015','artículo 10','certificado cualificado','eIDAS'],[
  ref(law39,'Ley 39/2015, texto consolidado, art. 10.2.a: admite como sistema de firma la firma avanzada basada en certificado electrónico cualificado de firma, junto con los restantes sistemas previstos en las letras b y c.'),
  ref(eidas,'Reglamento (UE) 910/2014, art. 26, consolidado: requisitos de la firma electrónica avanzada; la opción se concreta además con la exigencia de certificado cualificado de la LPAC.'),
  ref(admin,'ITIC Academy 2026, bloque Actuación administrativa y Administración digital: identificación y firma electrónica, Ley 39/2015 y eIDAS.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 22: administración electrónica y servicios de confianza.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.9: identificación y autenticación electrónica.')
 ],null,'Se conserva la opción C pero se concreta: la Ley 39/2015 no admite sin matices cualquier firma avanzada por el mero hecho de ser avanzada. Su art. 10.2.a contempla sistemas de firma avanzada basados en certificados electrónicos cualificados (además de los sistemas cualificados y los otros medios que prevén las letras siguientes). Se mantiene el contexto de relación con las AAPP y no se presenta un único medio como exclusivo.','corregida'],
 [5593,[22],['I-9'],['protección de datos','Carta de Derechos Fundamentales','artículo 8','derecho fundamental','RGPD'],[
  ref(charter,'Carta de los Derechos Fundamentales de la Unión Europea, art. 8: reconoce a toda persona el derecho a la protección de los datos personales que le conciernan y establece principios y control independiente.'),
  ref('https://eur-lex.europa.eu/eli/reg/2016/679/oj','Reglamento (UE) 2016/679 (RGPD), especialmente arts. 1 y 2: marco general vigente de protección de datos personales en la Unión.'),
  ref('https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673','Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales, marco español vigente.'),
  ref(admin,'ITIC Academy 2026, bloque Actuación administrativa y Administración digital, apartado de protección de datos y derechos en el marco europeo/español.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 22: legislación y administración digital.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.9: derechos y normativa aplicable a la relación electrónica con las AAPP.')
 ],null,'Se mantiene C. El art. 8 de la Carta reconoce el derecho a la protección de los datos personales como derecho fundamental de la Unión. Se corrigen los distractores históricos: las Leyes Orgánicas 5/1992 y 15/1999 fueron sustituidas y no constituyen la única base actual; el derecho de autor no es la base del derecho de protección de datos.','corregida'],
 [5594,[125],['IV-12'],['segregación de funciones','administración de bases de datos','programación','separación de deberes','control de acceso'],[
  ref(nist53,'NIST SP 800-53 Rev. 5, control AC-5 (Separation of Duties): la organización separa los deberes de las personas cuando sea necesario para prevenir actividad maliciosa sin colusión; la selección concreta de roles depende del análisis de riesgo.'),
  ref(nistSod,'NIST CSRC Glossary, Separation of Duty: describe la segregación de funciones incompatibles mediante roles que no puede desempeñar el mismo usuario o controles dinámicos.'),
  ref(course,'ITIC Academy, bloque Organización y gestión de los sistemas de información, tema A1 34: distingue las funciones de desarrollo, bases de datos, seguridad y calidad en el centro de sistemas.'),
  ref(security,'ITIC Academy 2026, bloque Seguridad en redes y en el nivel de aplicación, controles de acceso/privilegios y seguridad lógica: encaje curricular; no prescribe una segregación universal de todo DBA.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 125: control de accesos y seguridad de sistemas/redes.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.12: control de accesos y seguridad.')
 ],null,'Se reformula la pregunta como aplicación de un control de separación de funciones en un entorno controlado. La actividad que se separa de la administración privilegiada de la base de datos es la programación/desarrollo de las aplicaciones que la usan. NIST AC-5 respalda el principio, pero deja a la organización determinar qué funciones son incompatibles según riesgos; no se afirma que en toda organización sea ilegal o técnicamente imposible que un DBA programe.','corregida'],
 [5595,[99],['III-2'],['MÉTRICA v3','diagrama de extrapolación','seguimiento de proyectos','estimación de desviación','planificación'],[
  ref(metrica,'MÉTRICA v3, Gestión de Proyectos, GPS 11.2 “Obtención de la Extrapolación”: extrapola los resultados del seguimiento para estimar la evolución futura del proyecto y genera como producto el Diagrama de extrapolación.'),
  ref(academy93,'ITIC Academy, material de MÉTRICA v3 (tema histórico 93): planificación/seguimiento de proyectos y técnicas MÉTRICA; se coteja el término con la guía oficial.'),
  ref(course,'ITIC Academy, bloque Organización y gestión de sistemas de información, apartado A2 D2 sobre gestión, planificación de proyectos y técnicas de planificación.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 99: estimación de recursos y esfuerzo en sistemas de información.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.2: gestión y planificación del proceso de desarrollo y proyectos.')
 ],null,'Se conserva A y se delimita a MÉTRICA v3. La tarea GPS 11.2 obtiene la extrapolación de la evolución futura del proyecto a partir de su situación de seguimiento y produce el Diagrama de extrapolación. PERT es una técnica de planificación en red con estimaciones probabilísticas; no es el nombre del producto MÉTRICA preguntado.','corregida']
];
const edits={
 5591:{texto:'Según el artículo 3 de la Ley 39/2015, ¿quiénes pueden tener capacidad de obrar ante las Administraciones Públicas?',opciones:['Solo las personas físicas mayores de edad.','Las personas físicas y jurídicas y, automáticamente, cualquier agrupación sin personalidad jurídica.','Cualquier persona física o jurídica, aunque carezca de capacidad de obrar conforme a las normas civiles.','Las personas físicas o jurídicas con capacidad civil; ciertos menores en los supuestos legales; y, cuando una ley lo declare expresamente, grupos, uniones, entidades sin personalidad y patrimonios independientes o autónomos.'],respuesta_correcta:3},
 5592:{texto:'Conforme al artículo 10.2.a de la Ley 39/2015, ¿cuál es uno de los sistemas de firma electrónica admitidos en las actuaciones con las Administraciones Públicas?',opciones:['Siempre se exige firma electrónica cualificada y se excluyen los demás sistemas previstos legalmente.','Solo es válido el DNI electrónico.','Firma electrónica avanzada basada en un certificado electrónico cualificado de firma.','El uso de firma electrónica no es válido hasta que cada Administración apruebe una ley orgánica.'],respuesta_correcta:2},
 5593:{texto:'¿Qué norma reconoce expresamente el derecho de toda persona a la protección de sus datos personales como derecho fundamental de la Unión Europea?',opciones:['Únicamente la Ley Orgánica 15/1999, ya derogada.','Únicamente la Ley Orgánica 5/1992, ya derogada.','El artículo 8 de la Carta de los Derechos Fundamentales de la Unión Europea.','La normativa de derechos de autor, cuando el titular de los datos sea también autor.'],respuesta_correcta:2},
 5594:{texto:'En un sistema de información que aplica segregación de funciones para reducir riesgos, ¿qué función suele separarse de la administración privilegiada de la base de datos?',opciones:['La administración de seguridad, que debe recaer siempre en el mismo administrador de base de datos.','El desarrollo/programación de las aplicaciones que utilizan la base de datos, cuando el análisis de riesgos identifica incompatibilidad entre funciones.','La gestión de librerías de cintas, con independencia de la política de acceso.','El aseguramiento de la calidad, que debe depender necesariamente del DBA.'],respuesta_correcta:1},
 5595:{texto:'Según MÉTRICA v3, ¿qué producto de la tarea GPS 11.2 representa gráficamente la extrapolación de la evolución prevista de un proyecto a partir de los datos de seguimiento?',opciones:['Diagrama de extrapolación.','PERT.','CPM.','Histograma de recursos.'],respuesta_correcta:0}
};
aplicar({numero:'1054',fecha:'2026-11-12',records,edits});
