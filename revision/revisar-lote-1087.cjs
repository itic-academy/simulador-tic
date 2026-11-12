const aplicar=require('./aplicar-lote.cjs');
const ref=(url,referencia)=>({url,referencia});
const w3c='https://www.w3.org/TR/html4/struct/objects.html';
const netscape='https://pieter.com/mirrors/home.mcom.com/home/services_docs/html-extensions.html';
const gnu='https://www.gnu.org/philosophy/free-sw.html';
const law='https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046';
const edchange='https://files.eric.ed.gov/fulltext/ED429499.pdf';
const educationalStrategy='https://apirepositorio.unh.edu.pe/server/api/core/bitstreams/d5e1d96f-f672-4e91-a017-e902a72f0174/content';
const metrica='https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf';
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const records=[
 [5756,[77],['II-9'],['HTML','applet','align','absbottom','Netscape'],[
  ref(netscape,'Extensiones históricas de Netscape a HTML: absbottom alinea el borde inferior de la imagen/applet con el fondo absoluto de la línea actual, incluidos los descendentes.'),
  ref(w3c,'W3C HTML 4.01, sección 13.7.4: el elemento APPLET y el atributo align están obsoletos; los valores normativos de alineación incluyen bottom/middle/top/left/right, no absbottom.'),
  ref(a1,'Convocatoria GSI A1 2025, tema 77: HTML, CSS/XML, navegadores y compatibilidad con estándares.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.9: HTML y lenguajes de marca.'),
 ],null,'Histórica, clave C corregida. En la extensión no estándar y hoy obsoleta de Netscape para <applet>, absbottom alinea la parte inferior del applet con el punto más bajo de la línea de texto, incluidos los descendentes. Se corrige la opción que decía «centro de la línea». El elemento APPLET y ese valor no forman parte del HTML 4.01 normativo actual; el ítem se conserva solo como pregunta histórica. A1-77/A2-II.9.','historica'],
 [5757,[69],['II-14'],['software libre','libertades','código fuente','redistribución'],[
  ref(gnu,'GNU/FSF, definición de software libre y cuatro libertades: estudiar/modificar exige acceso al código fuente; redistribuir copias y versiones modificadas es una libertad. «Libre» no significa necesariamente gratuito.'),
  ref(a1,'Convocatoria GSI A1 2025, tema 69: software de código abierto y software libre, conceptos base.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.14: software libre y propietario y tipos de licencias.'),
 ],null,'Corregida, respuesta C. La palabra «exclusiva» del original era demasiado amplia y podía sugerir que gratuidad o acceso visible al código, aisladamente, bastan para definir software libre. Se pregunta ahora por una de las libertades de la definición GNU: redistribuir copias, y se explica que las libertades de estudio/modificación y de redistribución de versiones modificadas requieren acceso al código fuente. Software libre no equivale a gratuito. A1-69/A2-II.14.','corregida'],
 [5758,[80],['I-6'],['certificados cualificados','Ley 6/2020','vigencia','servicios electrónicos de confianza'],[
  ref(law,'Ley 6/2020, art. 4.2: el período de vigencia de los certificados cualificados no será superior a cinco años.'),
  ref(a1,'Convocatoria GSI A1 2025, tema 80: identificación y firma electrónica, marco nacional/europeo y certificados digitales.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.6: identidad y firma electrónica, régimen jurídico y Reglamento eIDAS.'),
 ],null,'Vigente, respuesta D (cinco años). El artículo 4.2 de la Ley 6/2020 establece expresamente ese máximo para certificados cualificados; el plazo concreto dentro del límite se fija atendiendo a las características y tecnología de creación. A1-80/A2-I.6.','vigente'],
 [5759,[],[],['gestión del cambio','estrategia educativa','cambio organizacional','resistencia al cambio'],[
  ref(edchange,'ERIC ED429499, estudio de cambio educativo que cita la tipología de Chin y Benne: distingue las vías empírico-racional, normativa-reeducativa y de poder-coerción; la reeducativa trabaja sobre normas, actitudes y capacidades colectivas.'),
  ref(educationalStrategy,'Repositorio académico de la Universidad Nacional de Huancavelica, apartado de gestión de resistencia al cambio: describe la estrategia educativa como información para convencer sobre la necesidad del cambio, con implantación lenta/difícil, mayor compromiso y menor resistencia que la coercitiva. Fuente académica secundaria; se usa para identificar el modelo que refleja el ítem, no como norma.'),
  ref(a1,'Convocatoria GSI A1 2025: no se localiza un epígrafe específico sobre la tipología general de estrategias de cambio organizativo.'),
  ref(a2,'Convocatoria GSI A2 2025: no se localiza un epígrafe específico sobre estrategias educativas de cambio organizativo.'),
 ],null,'Corregida, respuesta B en la tipología clásica de estrategias de cambio organizativo. Se delimita el marco conceptual, que no es una categoría jurídica ni una etiqueta universal: la estrategia educativa/reeducativa procura que las personas comprendan y asuman el cambio; suele requerir más tiempo que la coercitiva y puede generar mayor compromiso y menor resistencia. La opción de autoridad describe la vía coercitiva. No se asigna un tema oficial A1/A2 específico ni se infiere una cobertura concreta de academia.','corregida'],
 [5760,[95],['III-2'],['MÉTRICA v3','DFD','flujo de datos','entidad externa','proceso'],[
  ref(metrica,'MÉTRICA v3, Análisis del Sistema de Información, actividad ASI 7: modelado de procesos mediante DFD; la especificación de interfaces identifica los procesos asociados y los datos intercambiados con sistemas externos. En un DFD el intercambio con la entidad BOE se representa como flujo entre proceso y entidad externa, no como acceso directo al almacén.'),
  ref(a1,'Convocatoria GSI A1 2025, tema 95: metodología MÉTRICA para planificación y desarrollo de sistemas de información.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.2: gestión y planificación del proceso de desarrollo y metodologías.'),
 ],null,'Vigente dentro de la notación DFD planteada, respuesta D. La publicación es una salida del proceso «Generación de bases» hacia la entidad externa BOE. Un almacén interno no se conecta directamente con otra entidad externa: el proceso intermedia y produce el flujo de salida. MÉTRICA v3 emplea DFD para el modelo de procesos e identifica aparte los procesos y datos de las interfaces con sistemas externos. A1-95/A2-III.2.','vigente'],
];
const edits={
 5756:{texto:'En la extensión histórica no estándar del atributo align de APPLET, ¿qué efecto tenía el valor «absbottom»?',opciones:['Situaba el applet en el margen izquierdo y permitía que el texto fluyera a su derecha.','Situaba el applet en el margen derecho y permitía que el texto fluyera a su izquierda.','Alineaba la parte inferior del applet con el punto más bajo de la línea de texto, incluidos los descendentes.','Alineaba la parte superior del applet con la parte superior del texto de la línea.'],respuesta_correcta:2},
 5757:{texto:'Según la definición de software libre de GNU, ¿cuál de las siguientes opciones describe una de las libertades concedidas a sus usuarios?',opciones:['Que el programa se distribuya necesariamente sin coste.','Que baste con poder ver el código fuente, aunque la licencia prohíba modificarlo o redistribuirlo.','Redistribuir copias del programa; las libertades de estudiarlo, modificarlo y publicar versiones modificadas requieren acceso al código fuente.','Todas las características anteriores son requisitos suficientes y exclusivos del software libre.'],respuesta_correcta:2},
 5759:{texto:'En la tipología clásica de estrategias de cambio organizativo que distingue las vías educativa/reeducativa, racional y coercitiva, ¿qué característica se asocia a la estrategia educativa?',opciones:['La adhesión de las personas hace que el cambio sea necesariamente más sencillo y rápido.','Se procura que las personas comprendan y asuman la necesidad del cambio; esto suele exigir tiempo y puede hacer lenta y difícil su implantación.','Se basa en la autoridad y suele producir bajo compromiso y alta resistencia.'],respuesta_correcta:1},
};
aplicar({numero:'1087',fecha:'2026-11-12',records,edits});
