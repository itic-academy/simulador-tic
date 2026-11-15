const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
apply({numero:'1294',fecha:'2026-11-15',records:[
  [6791,[48],['II-13'],['ENS','certificación de conformidad','sistemas de información','servicios soportados'],[
    src('https://ens.ccn.cni.es/es/que-es-el-ens/faq','CCN, FAQ oficial ENS, «¿Se pueden certificar servicios en el ENS?»: la ITS de 2016 delimita la certificación a sistemas de información; los servicios soportados por esos sistemas pueden enumerarse en el certificado y beneficiarse de él. La FAQ también explica la conformidad de sistemas de proveedores bajo el RD 311/2022.'),
    src('https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191','Real Decreto 311/2022, artículos 2 y 38: el ámbito y el procedimiento de conformidad se refieren a sistemas de información; las categorías básica, media y alta determinan declaración o certificación.'),
    src('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2016-10109','BOE-A-2016-10109, Instrucción Técnica de Seguridad de conformidad ENS: su ámbito de certificación comprende sistemas de información y el certificado enumera los servicios sustentados.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 48: Esquema Nacional de Seguridad y adecuación.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema II.13: seguridad física y lógica de sistemas de información.'),
    src('https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk','ITIC Academy, bloque 22, Seguridad, ENS y ciberseguridad, actualización 2026.2: cotejo de ámbito y conformidad ENS; la distinción sistema/servicio se verifica con CCN y normativa.')
  ],{texto:'Según la Instrucción Técnica de Seguridad de conformidad con el ENS, ¿qué se somete directamente al procedimiento de declaración o certificación de conformidad?',opciones:[
    'Los sistemas de información incluidos en su ámbito; los servicios que sustentan pueden relacionarse en el certificado.','Cualquier servicio público, aunque no esté sustentado por un sistema de información del ámbito del ENS.','La entidad pública como organización, nunca sus sistemas ni servicios.','Solo los servicios de la Administración desarrollados por medios propios.'
  ],respuesta_correcta:0},'Se conserva A. Se pregunta por el objeto directo del procedimiento: los sistemas de información. Los servicios sustentados pueden aparecer enumerados en el certificado y beneficiarse de la conformidad del sistema, pero la FAQ oficial del CCN distingue esa mención de certificar un servicio autónomo. Se advierte que la ITS está en proceso de actualización al RD 311/2022; el marco vigente se contrasta también con el real decreto.','corregida'],

  [6792,[3],['I-1'],['Constitución Española','artículo 149','competencias exclusivas del Estado','pesca en aguas interiores','competencias autonómicas'],[
    src('https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229','Constitución Española, artículos 148.1.11 y 149.1.4, 5 y 15: pesca en aguas interiores, marisqueo, acuicultura, caza y pesca fluvial figuran entre las materias que las CCAA pueden asumir; legislación de propiedad intelectual e industrial, fomento y coordinación general de la investigación y Administración de Justicia son competencias exclusivas estatales.'),
    src('https://www.boe.es/buscar/act.php?id=BOE-A-2001-6008','Ley 3/2001, de Pesca Marítima del Estado: diferencia la competencia estatal en pesca marítima de la competencia autonómica sobre pesca en aguas interiores, marisqueo y acuicultura.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 3: organización territorial del Estado y competencias de las comunidades autónomas.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema I.1: Constitución Española y organización territorial.'),
    src('https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk','ITIC Academy, bloque 01, Constitución, Estado y AGE: cotejo de distribución constitucional de competencias; la lista se verifica en los artículos 148 y 149 CE.')
  ],{texto:'¿Cuál de estas materias NO aparece atribuida al Estado como competencia exclusiva por el artículo 149.1 de la Constitución Española?',opciones:[
    'Legislación sobre propiedad intelectual e industrial.','Fomento y coordinación general de la investigación científica y técnica.','Administración de Justicia.','Pesca en aguas interiores, marisqueo y acuicultura, caza y pesca fluvial.'
  ],respuesta_correcta:3},'Se conserva D. Las opciones A, B y C corresponden, respectivamente, a los apartados 9.º, 15.º y 5.º del artículo 149.1. Las materias de la opción D aparecen en el artículo 148.1.11 como competencias que las comunidades autónomas pueden asumir; no son una competencia exclusiva estatal del artículo 149.1.','corregida'],

  [6793,[],[],['curso selectivo','promoción 28','modalidad semipresencial','b-learning','flipped classroom','pendiente de fuente'],[
    src('https://www.inap.es/documents/59312/2061887/20220514%2BPrimer%2BExamen%2B28%2BTribunal%2BCSSTIAE%2BRESUELTO.pdf/704705d6-1a02-e56c-9082-7f67520f9bda','INAP, primer examen de la promoción 28 del Cuerpo Superior de Sistemas y Tecnologías de la Información: reproduce el ítem sobre el curso selectivo y sus modalidades, pero no aporta un programa docente o documento del curso que permita verificar qué afirmación es falsa.'),
    src('https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk','ITIC Academy, bloque 33, E-learning y Sistemas de Información Geográfica: cotejo general de b-learning y metodologías de aprendizaje; no acredita los detalles pedagógicos de aquel curso selectivo concreto.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 21: liderazgo y gestión de competencias y personas, como relación curricular general; no especifica la metodología de este curso selectivo.')
  ],null,'Se registra como pendiente de fuente, no como respuesta verificada. El documento oficial consultado acredita que la pregunta apareció en el examen de la promoción 28, pero no contiene la guía docente del curso necesaria para contrastar sus características particulares (en especial «looping learning» y flipped classroom). La ficha académica de e-learning solo aporta contexto general y no demuestra cuál era la opción falsa. Se conserva la clave original como dato no verificado; hace falta el programa o material oficial del curso selectivo para resolverla.','pendiente_fuente'],

  [6794,[21],[],['liderazgo situacional','Hersey y Blanchard','M3','S3','liderazgo participativo'],[
    src('https://www.inap.es/documents/59312/2061887/20220514%2BPrimer%2BExamen%2B28%2BTribunal%2BCSSTIAE%2BRESUELTO.pdf/704705d6-1a02-e56c-9082-7f67520f9bda','INAP, primer examen de la promoción 28, pregunta 23: formula la correspondencia M3 (saben pero no quieren) con el estilo participativo.'),
    src('https://files.eric.ed.gov/fulltext/ED243232.pdf','ERIC, archivo de investigación educativa: reproduce la explicación atribuida a Hersey y Blanchard para M3 (capaces pero no dispuestos/inseguros) y S3 Participating, con baja conducta de tarea y alta conducta de relación.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 21: liderazgo, gestión de competencias y personas.'),
    src('https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk','ITIC Academy, bloque 07, Dirección Pública, Empleo y Transparencia, edición 2026: cotejo curricular de liderazgo y gestión de personas; la correspondencia del modelo se fundamenta en la fuente académica y el examen INAP.')
  ],{texto:'En la formulación clásica del modelo situacional de Hersey y Blanchard, para un equipo M3 (competente, pero poco dispuesto o inseguro), ¿qué estilo corresponde?',opciones:[
    'Persuasivo (S2).','Delegativo (S4).','Directivo (S1).','Participativo (S3).'
  ],respuesta_correcta:3},'Se conserva D y se acota a la formulación clásica con niveles M1–M4: M3 combina competencia con compromiso variable y se asocia a S3 Participar, con menos dirección de tarea y más apoyo/relación. Se evita presentar M3 como una etiqueta universal de versiones posteriores del modelo.','corregida'],

  [6795,[],['III-12'],['motor de plantillas','Thymeleaf','Pug','EJS','Deno','desarrollo web'],[
    src('https://docs.deno.com/runtime/fundamentals/','Deno Docs, Runtime Fundamentals: Deno es un entorno de ejecución para JavaScript y TypeScript, no un motor de plantillas. La propia documentación muestra que puede usarse con Eta como motor de templates.'),
    src('https://docs.deno.com/examples/html_templating/','Deno Docs, Render HTML templates with Eta: diferencia el runtime Deno del motor Eta, que renderiza plantillas HTML con datos.'),
    src('https://www.thymeleaf.org/doc/tutorials/3.1/usingthymeleaf','Thymeleaf official tutorial, version 3.1: identifies Thymeleaf as a server-side Java template engine.'),
    src('https://pugjs.org/api/getting-started.html','Pug official documentation: Pug is a template engine for Node.js and browsers.'),
    src('https://ejs.co/','EJS official project: embedded JavaScript templating.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema III.12: aplicaciones web y desarrollo web en cliente y servidor.'),
    src('https://drive.google.com/file/d/1LuUHoQr8oDmptteHIQ72VdCvJFsnu3LF/view?usp=drivesdk','ITIC Academy, bloque 30, Tecnologías de sistemas de información, actualización octubre de 2026: cotejo de arquitecturas web, frameworks y lenguajes; la distinción entre runtime y motor de plantillas se valida con la documentación de los proyectos.')
  ],{texto:'¿Cuál de las siguientes NO es un motor de plantillas web?',opciones:[
    'Thymeleaf.','Deno.','Pug.','EJS.'
  ],respuesta_correcta:1},'Se conserva B. Thymeleaf, Pug y EJS son motores de plantillas; Deno es un runtime de JavaScript/TypeScript. Deno puede ejecutar aplicaciones que usen motores como Eta, lo que confirma que runtime y motor de plantillas son categorías distintas.','corregida']
]});
