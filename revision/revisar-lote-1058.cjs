const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const linq='https://learn.microsoft.com/en-us/dotnet/csharp/linq/?view=net-7.0';
const jsp='https://jakarta.ee/learn/specification-guides/servlet-faces-and-server-pages-explained/';
const ecma='https://ecma-international.org/publications-and-standards/standards/ecma-262/';
const cstd='https://www.cs.hunter.cuny.edu/~sweiss/resources/c11standard.pdf';
const ada='https://www.adaic.org/ada-resources/standards/ada22/';
const meduxa='https://www3.gobiernodecanarias.org/educacion/cau_ce/servicios/catalogo/distribucion-linux-meduxa';
const linuxGov='https://descargas.intef.es/cedec/proyectoedia/guias/contenidos/guiasoftwarelibre/linux_y_educacin.html';
const linkat='https://projectes.xtec.cat/linkat/el-projecte/';
const max='https://www.comunidad.madrid/educacion/max';
const ref=(url,referencia)=>({url,referencia});
const records=[
 [5611,[66],['III-11'],['LINQ','Language Integrated Query','.NET','C#','consultas integradas'],[
  ref(linq,'Microsoft Learn, Language Integrated Query: LINQ significa Language-Integrated Query y es un conjunto de tecnologías que integra capacidades de consulta directamente en C# y otros lenguajes .NET.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 66: entorno de desarrollo Microsoft .NET.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.11: plataforma .NET y modelo de programación.')
 ],null,'Corregida para expandir correctamente el acrónimo: LINQ significa Language Integrated Query (consulta integrada en el lenguaje). No es simplemente un conjunto de enlaces XML ni una herramienta OLAP/BI; son capacidades de consulta integradas en tecnologías .NET, incluidos C# y Visual Basic.','corregida'],
 [5612,[67],['III-10','III-12'],['JSP','Jakarta Server Pages','Java','procesamiento en servidor','tecnologías web'],[
  ref(jsp,'Eclipse Foundation Jakarta EE, guía de Jakarta Server Pages: JSP procesa páginas dinámicas en servidor y se construye sobre Jakarta Servlet; evita generalizar a tecnologías antiguas de applets.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 67: entorno de desarrollo JAVA; tema 65: desarrollo web e interconexión de servicios.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.10: arquitectura Java EE/Jakarta EE; tema III.12: aplicaciones web.')
 ],null,'Corregida. JSP/Jakarta Server Pages se procesa en el servidor para generar contenido dinámico. Se reescribe la pregunta como tecnología Java de páginas de servidor y se evita presentar Applets como opción competitiva: el término es obsoleto y JavaScript también puede ejecutarse en servidor mediante runtimes modernos, además de en el cliente.','corregida'],
 [5613,[67],['II-3','III-10'],['JavaScript','ECMAScript','Java','Java EE','distinción de lenguajes'],[
  ref(ecma,'Ecma International, ECMA-262, edición 2026: especificación del lenguaje generalista ECMAScript, estándar que sustenta JavaScript; no es el lenguaje de programación Java.'),
  ref('https://jakarta.ee/specifications/','Eclipse Foundation Jakarta EE Specifications: JavaBeans, Servlets y Jakarta Server Pages pertenecen al ecosistema de aplicaciones Java/Jakarta EE.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 67: entorno de desarrollo JAVA.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.3: características de lenguajes y paradigmas; tema III.10: arquitectura Java EE/Jakarta EE.')
 ],null,'Se conserva A, con alcance aclarado. JavaScript es el nombre habitual de implementaciones conformes a ECMAScript y no se convierte en Java por compartir parte del nombre. JavaBeans, Servlets y JSP/Jakarta Server Pages sí pertenecen al ecosistema de Java/Jakarta EE.','corregida'],
 [5614,[67],['II-3'],['C','Smalltalk','Ada','programación orientada a objetos','clases'],[
  ref(cstd,'ISO/IEC 9899:2011 Committee Draft N1570, especificación del lenguaje C: define estructuras y uniones, pero no constructos nativos de clase, herencia o despacho de métodos como los de un lenguaje de clases.'),
  ref(ada,'Ada Reference Manual / estándar ISO/IEC 8652:2023 (Ada 2022): incorpora tipos etiquetados y extensiones de tipo para programación orientada a objetos.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 67: entorno de desarrollo Java y fundamentos de programación.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.3: lenguajes de programación y paradigmas.')
 ],null,'Corregida para evitar la afirmación imprecisa de que C no permite escribir código con estilo orientado a objetos. C admite encapsulación y patrones OO implementados manualmente, pero carece de soporte nativo de clases, herencia y despacho de métodos; Ada (desde Ada 95) ofrece tipos etiquetados y Smalltalk es un lenguaje OO. La respuesta esperada, bajo este criterio de soporte nativo, es C.','corregida'],
 [5615,[69],['II-14'],['software libre','GNU/Linux educativo','mEDUXa','LliureX','MAX','Linkat'],[
  ref(meduxa,'Gobierno de Canarias, catálogo CAU_CE, servicio Distribución Linux mEDUXa: identifica expresamente la distribución como sistema dirigido a centros educativos públicos no universitarios de Canarias.'),
  ref(linuxGov,'INTEF/CEDEC, guía Linux y educación: recoge distribuciones educativas autonómicas como LliureX (Comunitat Valenciana), MAX (Madrid) y Linkat (Cataluña).'),
  ref(linkat,'Generalitat de Catalunya/XTEC, proyecto Linkat: la identifica como distribución GNU/Linux educativa ofrecida por el departamento competente.'),
  ref(max,'Comunidad de Madrid, MAX: sistema operativo libre y gratuito para educación de Madrid.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 69: software de código abierto y software libre.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.14: software libre, propietario y licencias.')
 ],null,'Se mantiene D, pero se presenta como asociación histórica de distribuciones educativas autonómicas, no como catálogo actualizado de producto vigente. mEDUXa corresponde a centros educativos públicos de Canarias, no a Baleares; LliureX se vincula a la Comunitat Valenciana, MAX a Madrid y Linkat a Cataluña.','corregida']
];
const edits={
 5611:{texto:'¿Qué significan las siglas LINQ en el ecosistema .NET?',opciones:['Language Integrated Query.','Linked Internet Query.','Language Index for Queries.','Local Integrated Queue.'],respuesta_correcta:0},
 5612:{texto:'¿Cuál de estas tecnologías Java/Jakarta se procesa en el servidor para generar páginas web dinámicas?',opciones:['JavaScript, entendido exclusivamente como código ejecutado en el navegador.','Applets de Java ejecutados en el navegador.','JSP (Jakarta Server Pages).','VisualScript.'],respuesta_correcta:2},
 5613:{texto:'¿Cuál de estos nombres identifica un lenguaje distinto de Java y no una tecnología de la plataforma Java/Jakarta EE?',opciones:['JavaScript (estandarizado como ECMAScript).','JavaBeans.','Servlets.','JSP/Jakarta Server Pages.'],respuesta_correcta:0},
 5614:{texto:'¿Cuál de estos lenguajes carece de soporte nativo de clases, herencia y despacho de métodos, aunque permita implementar manualmente patrones orientados a objetos?',opciones:['Java.','C.','Smalltalk.','Ada.'],respuesta_correcta:1},
 5615:{texto:'En esta relación histórica de distribuciones GNU/Linux educativas autonómicas, ¿qué asociación es incorrecta?',opciones:['LliureX — Comunitat Valenciana.','MAX — Comunidad de Madrid.','Linkat — Cataluña.','mEDUXa — Illes Balears.'],respuesta_correcta:3}
};
aplicar({numero:'1058',fecha:'2026-11-12',records,edits});
