const aplicar=require('./aplicar-lote.cjs');
const ref=(url,referencia)=>({url,referencia});
const cpp='https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2023/n4950.pdf';
const java='https://docs.oracle.com/javase/tutorial/java/IandI/multipleinheritance.html';
const sei='https://www.sei.cmu.edu/asset_files/specialreport/2000_003_001_13655.pdf';
const itu='https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.200-199407-I%21%21PDF-E&lang=e&type=items';
const wifi='https://www.globenewswire.com/news-release/2018/10/03/1600662/0/en/wi-fi-alliance-introduces-wi-fi-6.html';
const ieeeWifi='https://standards.ieee.org/wp-content/uploads/interactive/web/wi-fi-timeline/index.html';
const metric='https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf';
const metricGuide='https://alarcos.esi.uclm.es/ipsw/metrica3/metrica_3/guidances/guidelines/modelo_entidad_interrelacion_6EB7014.html';
const metricExam='https://sede.inap.gob.es/documents/10136/1680866/GSI_2010_PI_GSIPI.pdf/c1e421e1-5039-b8b1-a773-e080b62dc109';
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const records=[
 [5771,[89,93],['III-9'],['herencia múltiple','orientación a objetos','superclases','C++','Java'],[
  ref(cpp,'Borrador público C++23, §11.7.2 [class.mi]: una clase puede derivarse de cualquier número de clases base; el uso de más de una base directa se denomina habitualmente herencia múltiple.'),
  ref(java,'Oracle Java Tutorials, «Multiple Inheritance of State, Implementation, and Type»: distingue herencia múltiple de clases/estado de la implementación de múltiples interfaces; Java no permite extender varias clases.'),
  ref(a1,'Convocatoria GSI A1 2025, temas 89 (modelos de clases) y 93 (técnicas de diseño de software).'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, III.9: análisis/diseño orientado a objetos, elementos y UML.'),
 ],null,'Corregida, respuesta A. Se define como derivar una clase directamente de dos o más superclases; se acota el enunciado a lenguajes que admiten esa característica. No es universal en todos los lenguajes OO: Java, por ejemplo, restringe la herencia de clases a una superclase, aunque permite varios tipos mediante interfaces. A1-89/A1-93/A2-III.9.','corregida'],
 [5772,[88,95],['III-2'],['modelo en espiral','Win-Win Spiral Model','Boehm','Theory W','ciclo de vida'],[
  ref(sei,'Software Engineering Institute, CMU/SEI-2000-SR-008, § sobre Win-Win Spiral Model: amplía el modelo espiral de Boehm con Theory W, identificación de stakeholders y negociación/reconciliación de sus condiciones de éxito.'),
  ref(a1,'Convocatoria GSI A1 2025, temas 88 (metodologías de desarrollo) y 95 (MÉTRICA v3; encaje en modelos y planificación de desarrollo).'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, III.2: gestión/planificación de proyectos y metodologías de desarrollo.'),
 ],null,'Corregida, respuesta A (modelo en espiral Win-Win). La variante de Boehm aplica Theory W para identificar las condiciones de éxito de las partes interesadas y negociar objetivos mutuamente satisfactorios. Se explicita este rasgo para diferenciarla de distractores sin significado; es un modelo clásico de ciclo de vida, no una denominación actual de método ágil. A1-88/A1-95/A2-III.2.','corregida'],
 [5773,[108],['IV-10'],['OSI','capa de red','encaminamiento','routing','ITU-T X.200'],[
  ref(itu,'ITU-T X.200 | ISO/IEC 7498-1, cláusula 7.5: la capa de red proporciona funciones y procedimientos de transmisión; el apartado 7.5.4 describe sus funciones, incluidas las funciones de relay/routing.'),
  ref('https://csrc.nist.gov/glossary/term/router','NIST CSRC, glosario «router»: sitúa el encaminamiento/relay entre redes en la capa 3 OSI.'),
  ref(a1,'Convocatoria GSI A1 2025, tema 108: redes de telecomunicaciones y protocolos de encaminamiento.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, IV.10: redes WAN y protocolos de encaminamiento.'),
 ],null,'Vigente, respuesta A (nivel de red). En el modelo de referencia OSI, las funciones de encaminamiento y retransmisión entre redes corresponden a la capa de red; la capa de transporte presta el servicio extremo a extremo a las entidades superiores. A1-108/A2-IV.10.','vigente'],
 [5774,[114],['IV-8'],['Wi-Fi 5','IEEE 802.11ac','Wi-Fi Alliance','WLAN'],[
  ref(wifi,'Comunicado de Wi-Fi Alliance del 3-10-2018 (distribuido por GlobeNewswire): la nueva nomenclatura identifica Wi-Fi 5 con dispositivos compatibles con IEEE 802.11ac.'),
  ref(ieeeWifi,'IEEE Standards Association, Wi-Fi Timeline: identifica IEEE 802.11ac como Wi-Fi 5.'),
  ref(a1,'Convocatoria GSI A1 2025, tema 114: redes inalámbricas y estándar IEEE 802.11.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, IV.8: redes locales, protocolos, transmisión y normativa.'),
 ],null,'Vigente, respuesta A (IEEE 802.11ac). Wi-Fi Alliance introdujo las etiquetas generacionales para simplificar la identificación de generaciones Wi-Fi; Wi-Fi 5 corresponde a 802.11ac, Wi-Fi 4 a 802.11n y Wi-Fi 6 a 802.11ax. Se corrige la grafía editorial a «Wi-Fi». A1-114/A2-IV.8.','vigente'],
 [5775,[89,95],['III-4'],['MÉTRICA v3','modelo entidad-relación extendido','cardinalidad','dependencia en existencia','agregación','asociación'],[
  ref(metric,'Ministerio de Administraciones Públicas, MÉTRICA v3, Análisis del Sistema de Información, ASI 5.2 y ASI 6.1: caracteriza las asociaciones/cardinalidades e incluye agregaciones en el modelo E/R extendido.'),
  ref(metricGuide,'Guía del modelo Entidad/Interrelación vinculada a MÉTRICA v3 (UCLM/ALARCOS): define la cardinalidad, dependencia en existencia, agregación como composición de entidad(es) y relación, y asociación como vínculo coyuntural entre dominios independientes.'),
  ref(metricExam,'INAP, cuestionario oficial de GSI promoción interna 2010: distingue en opciones de examen la definición de agregación de la asociación entre entidades de dominios independientes.'),
  ref(a1,'Convocatoria GSI A1 2025, temas 89 (modelo entidad-relación) y 95 (MÉTRICA).'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, III.4: modelado de datos y diseño de bases de datos.'),
 ],null,'Vigente, respuesta D (incorrecta). En MÉTRICA v3, la cardinalidad expresa participación y número mínimo/máximo; la dependencia en existencia describe la entidad débil; y un tipo de entidad representa el esquema/intensión del conjunto. La opción D atribuye a la agregación la definición de asociación. MÉTRICA define la agregación como composición de otras entidades y su tipo de relación para elevar el nivel de abstracción; la asociación es la que vincula entidades de dominios normalmente independientes. Se conserva la clave D. A1-89/A1-95/A2-III.4.','vigente'],
];
const edits={
 5771:{texto:'En un lenguaje orientado a objetos que admite herencia múltiple de clases, ¿qué significa que una clase A utilice herencia múltiple?',opciones:['Que A deriva directamente de dos o más superclases, por ejemplo B y C.','Que dos subclases distintas derivan de una misma superclase C.','Que A deriva de C y C, a su vez, deriva de B.','Que A implementa una única interfaz.'],respuesta_correcta:0},
 5772:{texto:'¿Cómo se denomina la variante del modelo en espiral de Boehm que incorpora la negociación de condiciones de éxito entre las partes interesadas?',opciones:['Modelo en espiral Win-Win.','Modelo en espiral Wan-Wan.','Modelo en espiral incremental.','Modelo en espiral regional.'],respuesta_correcta:0}
};
aplicar({numero:'1090',fecha:'2026-11-12',records,edits});
