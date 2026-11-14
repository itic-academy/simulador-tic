const apply = require('./aplicar-lote.cjs');
const src = (url, referencia) => ({url, referencia});
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy = {
 cloud: 'https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view?usp=drivesdk',
 tech: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
 eidas: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',
 os: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk'
};
apply({numero:'1276', fecha:'2026-11-14', records:[
 [6701,[55],['II-1'],['AWS','Amazon Web Services','computación en la nube','servicios cloud'],[
  src('https://docs.aws.amazon.com/glossary/latest/reference/glos-chap.html','AWS Glossary define Amazon Web Services (AWS) como una plataforma de servicios de infraestructura web en la nube.'),
  src('https://docs.aws.amazon.com/whitepapers/latest/aws-overview/','AWS Overview describe AWS como plataforma de servicios cloud y presenta sus servicios de infraestructura.'),
  src(a1,'Convocatoria oficial GSI A1 2025, tema 55: sistemas de computación en la nube.'),
  src(a2,'Convocatoria oficial GSI A2 2025, tema II.1: tecnologías base y servicios de computación en la nube.'),
  src(academy.cloud,'ITIC Academy, bloque 25 «Cloud Computing»: cotejo del ámbito curricular de servicios cloud; la expansión de AWS y su función se verifican en la documentación oficial de Amazon.')
 ],{texto:'¿Cómo se denomina la plataforma de servicios de computación en la nube de Amazon?',opciones:['APS','AWS','ASS','ASN'],respuesta_correcta:1},'La respuesta B es correcta: AWS son las siglas de Amazon Web Services, plataforma de servicios de infraestructura en la nube. Se elimina el calificativo «segura», que podía confundirse con una certificación o garantía absoluta de seguridad y no forma parte del nombre del servicio.', 'corregida'],

 [6702,[65,67],['III-12'],['JavaServer Faces','JSF 2.0','JSR 314','Mojarra','Facelets','dato histórico'],[
  src('https://jcp.org/en/jsr/detail?id=314','Java Community Process: la ficha identifica JSR 314 como JavaServer Faces 2.0 y recoge su aprobación final en 2009.'),
  src('https://www.oracle.com/java/technologies/javaserverfaces.html','Oracle JavaServer Faces: documenta el desarrollo JCP de JSF 2 y la implementación Mojarra, como referencia histórica de la tecnología.'),
  src('https://www.oracle.com/technical-resources/articles/java/facelets.html','Oracle, artículo técnico de 2011: especifica que en JSF 2.0 Facelets es el lenguaje predeterminado de declaración de vistas (VDL), en lugar de JSP.'),
  src(a1,'Convocatoria oficial GSI A1 2025, temas 65 (aplicaciones y servicios web) y 67 (desarrollo Java).'),
  src(a2,'Convocatoria oficial GSI A2 2025, tema III.12: desarrollo de aplicaciones y componentes web.'),
  src(academy.tech,'ITIC Academy, bloque 30 «Tecnologías de sistemas de información»: cotejo curricular contextual de frameworks y tecnologías Java; las afirmaciones históricas se validan con JCP y Oracle.')
 ],{texto:'Para la especificación histórica JavaServer Faces 2.0 (JSF 2.0), ¿qué afirmaciones son correctas?',opciones:['JSF 2.0 se publicó como JSR 314.','Mojarra fue una implementación de referencia de JSF 2.0.','Facelets era el lenguaje de declaración de vistas predeterminado en JSF 2.0.','Todas las anteriores.'],respuesta_correcta:3},'La respuesta D es correcta en el contexto histórico explicitado: JSF 2.0 corresponde a JSR 314; Mojarra fue una implementación de referencia; y Facelets era el VDL predeterminado. No se presenta Mojarra como la única implementación ni se afirma que JSF 2.0 sea la edición actual. Se marca histórica porque pregunta por una versión tecnológica ya antigua.', 'historica'],

 [6703,[65,69],['III-12'],['servidor web','lighttpd','software libre','BSD-3-Clause'],[
  src('https://github.com/lighttpd/lighttpd1.4','Repositorio oficial de lighttpd: el proyecto se describe como un servidor web y declara licencia BSD-3-Clause.'),
  src('https://www.lighttpd.net/','Sitio oficial del proyecto lighttpd y documentación del servidor web.'),
  src(a1,'Convocatoria oficial GSI A1 2025, temas 65 (servidores y aplicaciones web) y 69 (software libre y de fuentes abiertas).'),
  src(a2,'Convocatoria oficial GSI A2 2025, tema III.12: desarrollo y tecnologías de aplicaciones web.'),
  src(academy.tech,'ITIC Academy, bloque 30 «Tecnologías de sistemas de información»: cotejo curricular contextual de tecnologías de servidores y web; la naturaleza y licencia de lighttpd se comprueban en el proyecto oficial.')
 ],{texto:'¿Cuál de estas opciones es un servidor web de código abierto?',opciones:['Internet Information Services (IIS).','IBM WebSphere.','Oracle WebLogic Server.','lighttpd.'],respuesta_correcta:3},'La respuesta D es correcta: lighttpd es un servidor HTTP y su proyecto oficial publica el código con licencia BSD de tres cláusulas. Se concreta «servidor web» para distinguirlo de plataformas de servidor de aplicaciones como WebSphere y WebLogic.', 'corregida'],

 [6704,[80,81],['I-6'],['Ley 6/2020','servicios electrónicos de confianza','potestad sancionadora','competencia sancionadora','sucesión orgánica'],[
  src('https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046','BOE, Ley 6/2020, art. 20.1 en texto consolidado: muy graves, titular del Ministerio de Asuntos Económicos y Transformación Digital; graves y leves, titular de la Secretaría de Estado de Digitalización e Inteligencia Artificial. La consolidación señala actualización de 9-5-2023.'),
  src('https://www.boe.es/eli/es/rd/2023/12/29/1230/dof/spa/pdf','BOE, Real Decreto 1230/2023, disposición final segunda: las referencias normativas a órganos suprimidos se entienden hechas a los órganos creados que los sustituyen o asumen sus competencias. Su artículo 22 nombra al Ministerio para la Transformación Digital y de la Función Pública y mantiene la Secretaría de Estado de Digitalización e Inteligencia Artificial.'),
  src('https://www.boe.es/eli/es/rd/2024/02/27/210/con','BOE, Real Decreto 210/2024, estructura orgánica básica del Ministerio para la Transformación Digital y de la Función Pública.'),
  src(a1,'Convocatoria oficial GSI A1 2025, temas 80–81: identificación/firma y servicios electrónicos de confianza.'),
  src(a2,'Convocatoria oficial GSI A2 2025, tema I.6: identidad electrónica y servicios de confianza.'),
  src(academy.eidas,'ITIC Academy, bloque 36 «Firma electrónica, certificados y eIDAS»: cotejo curricular contextual; la distribución legal de competencia se comprueba en BOE.')
 ],{texto:'Según el artículo 20.1 consolidado de la Ley 6/2020, y considerando la sucesión orgánica vigente, ¿cómo se distribuye la competencia para imponer estas sanciones?',opciones:[
  'Las infracciones muy graves corresponden a la Secretaría General de Administración Digital; las graves y leves, a la persona titular del ministerio.',
  'Las muy graves corresponden a la persona titular del ministerio sucesor del citado en la ley (actualmente, Ministerio para la Transformación Digital y de la Función Pública); las graves y leves, a la persona titular de la Secretaría de Estado de Digitalización e Inteligencia Artificial.',
  'Las muy graves y graves corresponden a la persona titular del ministerio; las leves, a la Secretaría de Estado de Digitalización e Inteligencia Artificial.',
  'Las muy graves y leves corresponden a la persona titular del ministerio; las graves, a la Secretaría General de Administración Digital.'
 ],respuesta_correcta:1},'La respuesta B refleja la distribución del artículo 20.1: el ministerio sanciona las infracciones muy graves y la Secretaría de Estado de Digitalización e Inteligencia Artificial, las graves y leves. La Ley 6/2020 consolidada mantiene literalmente el nombre ministerial de 2020; la reorganización de 2023 sustituyó ese departamento por el Ministerio para la Transformación Digital y de la Función Pública, y su disposición final segunda ordena entender actualizadas las referencias a los órganos suprimidos. No debe confundirse la Secretaría de Estado competente con la Secretaría General de Administración Digital.', 'corregida'],

 [6705,[60,69],['II-2'],['GNU/Linux','distribución Linux','OpenBSD','BSD','sistema operativo'],[
  src('https://www.openbsd.org/faq/faq1.html','OpenBSD FAQ oficial: define OpenBSD como sistema operativo tipo Unix basado en 4.4BSD y diferencia expresamente OpenBSD de Linux.'),
  src('https://www.debian.org/intro/about','Debian, sitio oficial: presenta Debian GNU/Linux como sistema operativo y distribución libre.'),
  src('https://www.gentoo.org/get-started/about/','Gentoo, sitio oficial: describe Gentoo como metadistribución GNU/Linux.'),
  src(a1,'Convocatoria oficial GSI A1 2025, temas 60 (sistemas Unix/Linux) y 69 (software libre y abierto).'),
  src(a2,'Convocatoria oficial GSI A2 2025, tema II.2: sistemas operativos.'),
  src(academy.os,'ITIC Academy, bloque 27 «Sistemas Operativos»: cotejo curricular de Linux, BSD y sistemas operativos; la diferencia entre OpenBSD y Linux se confirma en la documentación de OpenBSD.')
 ],{texto:'¿Cuál de estos productos no es una distribución GNU/Linux?',opciones:['Debian.','Gentoo Linux.','OpenBSD.','TurboLinux (distribución histórica).'],respuesta_correcta:2},'La respuesta C es correcta: OpenBSD es un sistema operativo tipo Unix derivado de BSD, no una distribución GNU/Linux. El enunciado acota GNU/Linux porque «distribución» puede usarse de forma amplia también para sistemas BSD; TurboLinux se conserva identificado como distribución histórica para que su antigüedad no genere otra lectura.', 'corregida']
]});
