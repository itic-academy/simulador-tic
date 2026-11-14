const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const maber='https://www.boe.es/diario_boe/txt.php?id=BOE-A-1994-23082';
const eni='https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331';
const nti='https://www.boe.es/buscar/act.php?id=BOE-A-2016-10146';
const magerit='https://pilar.ccn-cert.cni.es/docman/documentos/1-magerit-v3-libro-i-metodo/file';
const ccndocs='https://www.ccn-cert.cni.es/es/component/content/article/551-nueva-version-de-magerit.html?Itemid=11827&catid=23';
const academy40='1jwNi4SS-0kukXjc4MFPirhuXTgAMn2PU';
const academy05='1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ';
const academy06='1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE';
const academy20='1yCTWUEye96mUcx_SwiEJshldD-sV2hXS';
const academy48='1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82';
apply({numero:'1262',fecha:'2026-11-14',records:[
 [6631,[11,40],[],['adquisición TIC','decisión multicriterio','relaciones de superación','PROMETHEE','ELECTRE','métodos no compensatorios'],[
   src('https://www.numdam.org/item/RO_1968__2_1_57_0/','Bernard Roy, «Classement et choix en présence de points de vue multiples (la méthode ELECTRE)», Recherche Opérationnelle, 1968: trabajo fundacional que formaliza la relación de superación ELECTRE para decisión multicriterio y conserva preferencias parciales, en lugar de reducir siempre toda la evaluación a una suma aditiva.'),
   src(a1,'Convocatoria GSI A1 2025, temas 11 y 40: contratación pública y adquisición de sistemas, estudio de alternativas y toma de decisiones.'),
   src(`https://drive.google.com/file/d/${academy40}/view?usp=drivesdk`,'ITIC Academy, temas 40–42 Adquisición de Sistemas, Alternativas y Rentabilidad de las Inversiones: el tema 40 incluye decisión multicriterio discreta y distingue relaciones de superación (PROMETHEE/ELECTRE) de ponderación lineal y utilidades multiatributo.'),
   src(`https://drive.google.com/file/d/${academy05}/view?usp=drivesdk`,'ITIC Academy, bloque 05 Contratación, Presupuestos y Compra TIC: cobertura general del contexto de adquisición/compra pública; para elegir el método concreto se coteja el tema 40.')
 ],{texto:'En este problema de decisión multicriterio se ha optado por comparar alternativas mediante relaciones de superación en vez de reducir los criterios a una suma ponderada compensatoria. ¿Qué familia de métodos sigue ese enfoque?',respuesta_correcta:1},'Se corrige el enunciado para explicitar el criterio metodológico que justifica la elección. Los métodos de relaciones de superación (como PROMETHEE/ELECTRE) comparan alternativas por pares y no se reducen a la suma compensatoria de una ponderación lineal; son apropiados cuando se desea impedir la compensación total entre criterios. No se presenta una familia como universalmente mejor: la elección depende de las preferencias y del problema.', 'corregida'],
 [6632,[11,14],[],['proyecto MABER','contratación TIC','ergonomía','medio ambiente','antecedente histórico'],[
   src(maber,'Resolución de 10-10-1994, BOE-A-1994-23082: identifica expresamente MABER como «Proyecto para el Establecimiento de Pautas Medioambientales y Ergonómicas en la adquisición y empleo de Bienes y Servicios de Tecnologías de la Información» y adopta sus recomendaciones para la AGE.'),
   src(a1,'Convocatoria GSI A1 2025, temas 11 y 14: contratación pública y políticas ambientales/crecimiento sostenible.'),
   src(`https://drive.google.com/file/d/${academy05}/view?usp=drivesdk`,'ITIC Academy, bloque 05 Contratación, Presupuestos y Compra TIC: cobertura general de adquisición y compra pública; no se localizó una lección actual específica del Proyecto MABER.'),
   src(`https://drive.google.com/file/d/${academy06}/view?usp=drivesdk`,'ITIC Academy, bloque 06 Economía, Sociedad, Empleo y Transformación Digital: cobertura curricular general de sostenibilidad y políticas ambientales, sin desarrollar el proyecto histórico MABER.')
 ],{texto:'En la Resolución de 10 de octubre de 1994 sobre pautas medioambientales y ergonómicas para la AGE, ¿qué era el Proyecto MABER?',opciones:['Una unidad extraterrestre de medida del gasto informático.','Un programa de evaluación de la rentabilidad de los proyectos TIC.','El proyecto para establecer pautas medioambientales y ergonómicas en la adquisición y empleo de bienes y servicios de tecnologías de la información.','Un sistema de interoperabilidad de registros administrativos.'],respuesta_correcta:2},'Se conserva C, se corrige la ortografía de «MABER» y se identifica la fecha y la disposición que documentan el proyecto. Es una iniciativa histórica de 1994, no un proyecto vigente: la resolución adopta sus recomendaciones y medidas para la Administración del Estado. El cotejo del material de academia no encontró un desarrollo específico de MABER, aunque sí cobertura general de adquisición y sostenibilidad.', 'historica'],
 [6633,[45],['I-9'],['Esquema Nacional de Interoperabilidad','principios básicos','interoperabilidad integral','multidimensionalidad','soluciones multilaterales'],[
   src(eni,'Real Decreto 4/2010, art. 4.a–c (texto consolidado): los principios específicos son la interoperabilidad como cualidad integral, su carácter multidimensional y el enfoque de soluciones multilaterales; por tanto, las opciones A–C son principios.'),
   src(a1,'Convocatoria GSI A1 2025, tema 45: Esquema Nacional de Interoperabilidad.'),
   src(a2,'Convocatoria GSI A2 2025, tema I.9: ENI y normas técnicas de interoperabilidad.'),
   src(`https://drive.google.com/file/d/${academy20}/view?usp=drivesdk`,'ITIC Academy, bloque 20 Interoperabilidad de Sistemas, edición 2026: cubre ENI, dimensiones de interoperabilidad y normas técnicas.'),
 ],null,'La clave D es correcta: el artículo 4 enumera precisamente A, B y C como principios específicos del ENI; D expresa que ninguno de los anteriores falta. La respuesta coincide con el texto consolidado consultado.', 'vigente'],
 [6634,[46,80],['I-6','I-9'],['firma electrónica','sello electrónico','NTI','sellado de tiempo','información de validación'],[
   src(nti,'Resolución de 27-10-2016, NTI de Política de Firma y Sello Electrónicos y de Certificados de la Administración, apartado IV.2.3: el sellado de tiempo y la información de validación pueden añadirse por el emisor, el receptor o un tercero como propiedades no firmadas.'),
   src(a1,'Convocatoria GSI A1 2025, temas 46 (normas técnicas de interoperabilidad) y 80 (identificación y firma electrónica).'),
   src(a2,'Convocatoria GSI A2 2025, temas I.6 (identidad y firma electrónica) e I.9 (normas técnicas de interoperabilidad).'),
   src(`https://drive.google.com/file/d/${academy20}/view?usp=drivesdk`,'ITIC Academy, bloque 20 Interoperabilidad de Sistemas, edición 2026: normas técnicas y firma/validación en el intercambio interoperable; se contrasta la regla concreta con la NTI oficial.')
 ],null,'La clave A coincide literalmente con el apartado IV.2.3 de la NTI. El texto además precisa que estos elementos se incorporan como propiedades no firmadas conforme al formato de firma utilizado; no impone que los añada solo una de las partes.', 'vigente'],
 [6635,[47],['II-10'],['MAGERIT','análisis de riesgos','gestión de riesgos','sistemas de información','CCN-CERT'],[
   src(magerit,'MAGERIT 3.0, Libro I (metodología publicada por la Administración/CCN): define el método como análisis y gestión de riesgos de los sistemas de información y desarrolla identificación de activos, amenazas, salvaguardas, impactos y riesgos.'),
   src(ccndocs,'CCN-CERT, presentación oficial de MAGERIT v3: denomina expresamente MAGERIT «Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información» y la vincula con la herramienta PILAR.'),
   src(a1,'Convocatoria GSI A1 2025, tema 47: análisis y gestión de riesgos y herramientas.'),
   src(a2,'Convocatoria GSI A2 2025, tema II.10: análisis y gestión de riesgos de los sistemas de información y herramientas.'),
   src(`https://drive.google.com/file/d/${academy48}/view?usp=drivesdk`,'ITIC Academy, bloque 48 Seguridad en Redes y en el Nivel de Aplicación, actualización 2026: cobertura general de seguridad y riesgo. La búsqueda del material no localizó una lección específica de MAGERIT; se registra el encaje curricular oficial sin atribuir cobertura literal.')
 ],{texto:'MAGERIT es una metodología para el análisis y la gestión de riesgos de los sistemas de información. ¿A qué ámbito corresponde?',opciones:['Gestión de tiempos de proyectos.','Gestión de recursos.','Gestión operativa.','Análisis y gestión de riesgos.'],respuesta_correcta:3},'Se corrige la descripción: MAGERIT es una metodología de análisis y gestión de riesgos de sistemas de información, no una herramienta genérica de gestión operativa. La respuesta D se mantiene, ahora descrita con precisión y apoyada en la metodología publicada por la Administración y en la presentación de CCN-CERT.', 'corregida']
]});
