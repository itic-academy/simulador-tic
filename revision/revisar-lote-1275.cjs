const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const academy={
 database:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',
 gis:'https://drive.google.com/file/d/15iokZokiVzk3qpTTQvMpDN0W27PL8tbv/view?usp=drivesdk',
 security:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',
 mobile:'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk',
 ai:'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk'
};
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
apply({numero:'1275',fecha:'2026-11-14',records:[
 [6696,[64],['II-5','III-4'],['ANSI/SPARC','esquema conceptual','modelo E/R extendido','modelo de datos','bases de datos'],[
  src('https://www.govinfo.gov/content/pkg/GOVPUB-C13-f55f11d78745e6c51f75a39a44913f22/pdf/GOVPUB-C13-f55f11d78745e6c51f75a39a44913f22.pdf','Informe gubernamental que reproduce el marco ANSI/X3/SPARC: el esquema conceptual describe los aspectos relevantes del universo de discurso, separado de la representación física y de las vistas externas.'),
  src('https://www.dbis.informatik.uni-goettingen.de/teaching/DB-WS1920/db-er-model.pdf','Universidad de Göttingen, material docente sobre arquitectura de tres esquemas: presenta el modelo conceptual como descripción global del dominio y lo distingue de los esquemas lógico, interno y externo.'),
  src(a1,'Convocatoria oficial GSI A1 2025, tema 64: modelo relacional y bases de datos.'),
  src(a2,'Convocatoria oficial GSI A2 2025, temas II.5 (arquitectura ANSI/SPARC) y III.4 (modelado y diseño de bases de datos).'),
  src(academy.database,'ITIC Academy, bloque 29 «Bases de datos y modelado»: cotejo curricular del diseño conceptual/ER y la arquitectura de bases de datos; la correspondencia se contrasta con el temario oficial.')
 ],{texto:'En la arquitectura ANSI/X3/SPARC, ¿a qué esquema corresponde el modelo conceptual de datos obtenido al aplicar el modelo E/R extendido?',opciones:['Externo.','Lógico.','Interno.','Conceptual.'],respuesta_correcta:3},'La respuesta D es correcta: el modelo E/R extendido representa conceptualmente el dominio y corresponde al esquema conceptual. El lógico traduce ese modelo a un modelo de datos concreto; el interno describe su organización física y el externo recoge vistas para grupos o aplicaciones. Se explicita «modelo conceptual» para evitar confundir el resultado de diseño con las transformaciones entre niveles.', 'corregida'],

 [6697,[74],[],['SIG','georreferenciación','georreferenciación directa','georreferenciación indirecta','direcciones postales','topónimos'],[
  src('https://www.cartociudad.es/resources/divulgacion/Articulo_mapping_2020_Geocodificador_Cartociudad.pdf','CartoCiudad, artículo técnico sobre geocodificación: distingue georreferenciación directa mediante coordenadas e indirecta mediante objetos direccionables como dirección postal, unidad administrativa o topónimo.'),
  src('https://repositorio.upct.es/server/api/core/bitstreams/f51a75c1-fb3e-4160-b0fe-b59dd05f6d59/content','Universidad Politécnica de Cartagena, SIG del agua: documenta una clasificación alternativa de georreferenciación continua/directa y discreta, esta última basada, entre otros, en direcciones postales; justifica delimitar la taxonomía en el enunciado.'),
  src(a1,'Convocatoria oficial GSI A1 2025, tema 74: sistemas de información geográfica, conceptos y funcionalidad básicos.'),
  src('https://drive.google.com/file/d/15iokZokiVzk3qpTTQvMpDN0W27PL8tbv/view?usp=drivesdk','ITIC Academy, bloque 33 «E-Learning y Sistemas de Información Geográfica», versión 2026.1: incluye SIG; el mapa curricular no identifica correspondencia específica en el temario A2.')
 ],{texto:'En la clasificación usada por CartoCiudad, que distingue georreferenciación directa mediante coordenadas e indirecta mediante objetos direccionables, ¿cuál de estas opciones no nombra una de esas modalidades?',opciones:['Georreferenciación directa mediante coordenadas.','Georreferenciación indirecta mediante una dirección postal.','Georreferenciación indirecta mediante un topónimo.','Georreferenciación «posicional» como nombre de una tercera modalidad de esa clasificación.'],respuesta_correcta:3},'La respuesta D es correcta dentro de la taxonomía explícita del enunciado: CartoCiudad distingue la localización directa por coordenadas y la indirecta por objetos direccionables, por ejemplo direcciones y topónimos. Otros materiales de SIG usan también la noción de georreferenciación discreta para datos basados en direcciones; por eso se delimita la clasificación y no se afirma que exista una única taxonomía universal.', 'corregida'],

 [6698,[79],['IV-12'],['Diffie-Hellman','acuerdo de claves','establecimiento de claves','RIPEMD','Rabbit','Blowfish'],[
  src('https://csrc.nist.gov/pubs/sp/800/56/a/r3/final','NIST SP 800-56A Rev. 3: especifica esquemas de establecimiento/acuerdo de claves, incluidas varias variantes Diffie–Hellman sobre grupos finitos o curvas elípticas.'),
  src('https://csrc.nist.gov/glossary/term/Diffie_Hellman','NIST CSRC, glosario Diffie-Hellman: método para intercambiar o establecer de forma segura claves secretas a través de una red insegura.'),
  src(a1,'Convocatoria oficial GSI A1 2025, tema 79: cifrado, algoritmos simétricos/asimétricos y función hash.'),
  src(a2,'Convocatoria oficial GSI A2 2025, tema IV.12: técnicas criptográficas y protocolos seguros en redes.'),
  src(academy.security,'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación»: cotejo curricular de criptografía y protocolos; la clasificación de cada algoritmo se comprueba en NIST.')
 ],{texto:'¿Cuál de estos mecanismos se utiliza para acordar/establecer una clave compartida entre partes?',opciones:['Diffie–Hellman.','RIPEMD.','Rabbit.','Blowfish.'],respuesta_correcta:0},'La respuesta A es correcta: Diffie–Hellman es una familia de esquemas de acuerdo/establecimiento de claves. RIPEMD es una familia de funciones hash; Rabbit es un cifrador de flujo y Blowfish un cifrador por bloques. DH por sí solo no autentica a las partes y requiere mecanismos adicionales para evitar ataques de intermediario.', 'corregida'],

 [6699,[70],['III-15'],['resampling','remuestreo','validación cruzada','bootstrap','evaluación de modelos','generalización'],[
  src('https://scikit-learn.org/stable/modules/cross_validation.html','Scikit-learn, validación cruzada: remuestrea particiones de entrenamiento/validación para estimar el rendimiento de generalización de un estimador en datos no vistos.'),
  src('https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.cross_validate.html','Scikit-learn API cross_validate: calcula métricas de rendimiento del estimador a través de particiones de validación cruzada.'),
  src(a1,'Convocatoria oficial GSI A1 2025, tema 70: inteligencia artificial y aprendizaje automático.'),
  src(a2,'Convocatoria oficial GSI A2 2025, tema III.15: minería de datos, algoritmos y tecnologías analíticas.'),
  src(academy.ai,'ITIC Academy, bloque 32 «Inteligencia Artificial y Ciencia de Datos», versión 2026.1: cotejo curricular de evaluación de modelos y aprendizaje automático; el alcance de la validación cruzada se comprueba en la documentación técnica de scikit-learn.')
 ],{texto:'En aprendizaje automático, ¿para qué se emplean métodos de remuestreo como la validación cruzada?',opciones:['Para estimar el rendimiento predictivo o la capacidad de generalización de un modelo mediante particiones/remuestras de los datos.','Para buscar automáticamente nombres de variables en el código fuente.','Para convertir registros inválidos a un formato de mayor calidad.','Para crear nuevas etiquetas de clase sin evaluar el modelo.'],respuesta_correcta:0},'La respuesta A es correcta: la validación cruzada y otros métodos de remuestreo reutilizan particiones de datos para estimar el rendimiento fuera de muestra. «Resampling» no designa una única técnica y la estimación depende del esquema de partición y de evitar fuga de información; por eso se citan ejemplos y se limita la afirmación al uso en evaluación de modelos.', 'corregida'],

 [6700,[62],['II-2'],['Android 7.0','Nougat','nombre en clave','sistema operativo móvil','dato histórico'],[
  src('https://developer.android.com/about/versions/nougat/android-7.0','Android Developers, documentación de Android 7.0 Nougat: identifica oficialmente el nombre de la versión y sus funciones/API.'),
  src(a1,'Convocatoria oficial GSI A1 2025, tema 62: Android y sistemas operativos para dispositivos móviles.'),
  src(a2,'Convocatoria oficial GSI A2 2025, tema II.2: sistemas operativos, incluidos los móviles.'),
  src('https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk','ITIC Academy, bloque 47 «Aplicaciones Móviles y Sistemas Operativos», versión 2026.1: cotejo curricular contextual de Android y sus nombres de versión; la denominación exacta de Android 7.0 se comprueba en Android Developers.')
 ],{texto:'Como dato histórico, ¿qué nombre en clave recibió Android 7.0?',opciones:['Oreo.','Lollipop.','Marshmallow.','Nougat.'],respuesta_correcta:3},'La respuesta D es correcta: Android 7.0 se publicó bajo el nombre Nougat. Se marca histórica porque pregunta por la nomenclatura de una versión antigua, no por la versión actual del sistema. La documentación oficial de Android Developers confirma el nombre.', 'historica']
]});
