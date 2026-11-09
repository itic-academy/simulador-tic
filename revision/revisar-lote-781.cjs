const apply=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const tech='https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const javaMobile='https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk';
const licensing='https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk';
const sources={
 4226:[
  {url:'https://learn.microsoft.com/en-us/windows/win32/com/using-com-objects-in-windows-script-host',referencia:'Microsoft Learn, Windows Script Host incorpora motores ActiveX de VBScript y JScript.'},
  {url:'https://learn.microsoft.com/en-us/windows/win32/com/syntax-differences',referencia:'Microsoft Learn, VBScript es un subconjunto de Visual Basic; se acota como subconjunto de Visual Basic for Applications en la documentación de traducción.'},
  {url:'https://learn.microsoft.com/en-us/windows/win32/com/translating-to-vbscript',referencia:'Microsoft Learn, VBScript es subconjunto de Microsoft VBA y carece de algunas de sus funciones.'},
  {url:'https://ecma-international.org/publications-and-standards/standards/ecma-262/',referencia:'Ecma International, ECMA-262, edición 17 (2026): el estándar público define ECMAScript, no VBScript; se concreta así qué significa aquí «estándar abierto».'},
  {url:'https://learn.microsoft.com/en-us/windows/whats-new/deprecated-features',referencia:'Microsoft Learn, VBScript figura como tecnología obsoleta en Windows desde octubre de 2023 y se prevé su retirada futura; no se trata como recomendación de nueva arquitectura.'},
  {url:tech,referencia:'ITIC Academy, bloque 30 Tecnologías de sistemas de información (2026), scripts cliente/servidor y entorno Microsoft; cotejo temático, no fuente técnica primaria.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, anexo I, tema 65: scripts de cliente y arquitectura web.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema II-9: lenguajes de script.'}
 ],
 4227:[
  {url:'https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/linq-to-dataset',referencia:'Microsoft Learn, LINQ to DataSet facilita consultas sobre datos almacenados en caché en DataSet y expone extensiones de DataTableExtensions/DataRowExtensions.'},
  {url:'https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/queries-in-linq-to-dataset',referencia:'Microsoft Learn, DataTable.AsEnumerable devuelve una fuente que implementa IEnumerable<T> para consultas LINQ to DataSet.'},
  {url:'https://learn.microsoft.com/en-us/dotnet/api/system.data.datatableextensions.asenumerable?view=netframework-4.8',referencia:'Microsoft Learn, AsEnumerable es aplicable desde .NET Framework 3.5 y adapta DataTable a EnumerableRowCollection<DataRow>.'},
  {url:'https://learn.microsoft.com/ga-ie/dotnet/visual-basic/programming-guide/concepts/linq/introduction-to-linq',referencia:'Microsoft Learn, define Language-Integrated Query y sitúa LINQ en .NET Framework 3.5.'},
  {url:tech,referencia:'ITIC Academy, bloque 30 Tecnologías de sistemas de información (2026), entorno Microsoft .NET; cotejo curricular.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, anexo I, tema 66: entorno de desarrollo Microsoft .NET.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema III-11: plataforma .NET, modelo, servicios y herramientas.'}
 ],
 4228:[
  {url:'https://www.oracle.com/java/technologies/javameoverview.html',referencia:'Oracle, Java Platform Micro Edition: Java ME ofrece perfiles/configuraciones para clases concretas de dispositivos con recursos limitados.'},
  {url:'https://www.oracle.com/java/technologies/personalprofile.html',referencia:'Oracle, Personal Profile de J2ME/Java ME y Connected Device Configuration: perfil para dispositivos de mayor capacidad, incluidas categorías de computación personal/embebida.'},
  {url:'https://www.oracle.com/technetwork/java/0130449148-159103.pdf',referencia:'Oracle, guía histórica J2ME: la plataforma se diseñó para dispositivos móviles personales y computación ubicua.'},
  {url:tech,referencia:'ITIC Academy, bloque 30 Tecnologías de sistemas de información (2026), entorno Java; cotejo de plataforma de desarrollo.'},
  {url:javaMobile,referencia:'ITIC Academy, bloque 47 Aplicaciones móviles (2026), tecnologías y plataformas móviles; cotejo curricular del contexto PDA.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, anexo I, temas 67 y 124: entorno Java y aplicaciones móviles.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema II-3: características de lenguajes y paradigmas de programación.'}
 ],
 4229:[
  {url:'https://www.mozilla.org/en-US/about/legal/firefox/',referencia:'Mozilla, Firefox Notices: Firefox está disponible bajo los términos de MPL; permite usar, copiar, distribuir y modificar el código, con las condiciones y excepciones de marcas indicadas.'},
  {url:'https://www.mozilla.org/en-US/MPL/',referencia:'Mozilla Foundation, administradora de la Mozilla Public License; texto vigente MPL 2.0 e historial de MPL 1.1.'},
  {url:'https://www.mozilla.org/en-US/MPL/2.0/',referencia:'Mozilla Public License 2.0, texto oficial y obligaciones sobre redistribución de código fuente y forma ejecutable.'},
  {url:licensing,referencia:'ITIC Academy, bloque 18 Protección jurídica del software, licencias y DRM (2026); cotejo curricular.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, anexo I, tema 69: software de código abierto y software libre.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema II-14: software libre/propietario y tipos de licencia.'}
 ],
 4230:[
  {url:'https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html',referencia:'FSF, GNU LGPL v2.1, secciones 2, 5 y 6: modificaciones a la biblioteca, avisos/licencia, fuente correspondiente y condiciones de combinación/enlace, incluido el caso de relink.'},
  {url:'https://www.gnu.org/licenses/gpl-faq.html.en#LGPLStaticVsDynamic',referencia:'FSF, FAQ oficial: enlace estático exige objeto del trabajo para permitir relink; la redistribución de la biblioteca ejecutable también requiere ofrecer su fuente en las condiciones de LGPL.'},
  {url:licensing,referencia:'ITIC Academy, bloque 18 Protección jurídica del software, licencias y DRM (2026); cotejo curricular de copyleft, software propietario y licencias de bibliotecas.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, anexo I, temas 43 y 69: protección jurídica de programas y software libre/propietario.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema II-14: tipos de licencias y protección jurídica del software.'}
 ]
};
const records=[
 [4226,['65'],['II-9'],['VBScript','ActiveX Scripting','VBA','Windows','lenguaje histórico'],sources[4226],null,'Se delimita «abierto» a estándar público: VBScript no es un estándar ECMAScript abierto; el host compatible puede cargar su motor ActiveX y VBScript es un subconjunto de VBA. Microsoft lo ha marcado obsoleto en Windows, por lo que el reactivo se presenta en contexto histórico.','historica'],
 [4227,['66'],['III-11'],['LINQ','LINQ to DataSet','DataSet','DataTable','IEnumerable<T>','.NET'],sources[4227],null,'Se corrige la afirmación de incompatibilidad: DataTable.AsEnumerable adapta filas a una colección genérica apta para LINQ. Las otras opciones resumen usos y fecha de introducción documentados por Microsoft.','corregida'],
 [4228,['67','124'],['II-3'],['Java ME','J2ME','PDA','aplicaciones móviles','contenido histórico'],sources[4228],null,'En el contexto histórico de los PDA, la plataforma reducida de Java para esa clase de dispositivos era Java 2 Micro Edition (J2ME, hoy Java ME), con configuración/perfil elegido según capacidades. No se afirma que cualquier aplicación Java sea indistintamente portable entre ediciones.','historica'],
 [4229,['43','69'],['II-14'],['Mozilla Firefox','MPL','MPL 2.0','software libre','licencia'],sources[4229],null,'Mozilla indica que Firefox se ofrece bajo MPL. Se evita afirmar que cada componente, marca o activo del producto queda exclusivamente cubierto por MPL: Mozilla distingue las licencias del código y sus marcas.','corregida'],
 [4230,['43','69'],['II-14'],['LGPL','LGPL 2.1','biblioteca','enlace dinámico','enlace estático','software propietario'],sources[4230],null,'La LGPL permite que una obra que usa la biblioteca se distribuya bajo términos propios, incluso propietarios, si se satisfacen sus condiciones. Al distribuir la biblioteca modificada se aplican las obligaciones de fuente/avisos; para enlace estático debe facilitarse el material objeto que permita relink. No se exige publicar el código de la aplicación independiente ni remitir cambios al autor upstream.','corregida']
];
const edits={
 4226:{texto:'En el contexto histórico de las tecnologías de scripting de Microsoft, señale la afirmación FALSA sobre VBScript:',opciones:['Es un estándar abierto de scripting estandarizado por ECMA.','Un host compatible puede incorporar su motor mediante ActiveX Scripting.','Su sintaxis es un subconjunto de Microsoft Visual Basic for Applications.'],respuesta_correcta:0,comentarios:'VBScript fue una tecnología de Microsoft, no una especificación ECMAScript/ECMA abierta. Microsoft documenta su motor ActiveX y lo describe como subconjunto de VBA. La tecnología está marcada como obsoleta en Windows desde 2023.'},
 4227:{texto:'Señale la afirmación INCORRECTA sobre LINQ to DataSet:',opciones:['DataTable no puede consultarse con LINQ, porque no existe ningún método que exponga sus filas como IEnumerable<DataRow>.','Facilita consultas sobre datos almacenados en caché en un objeto DataSet.','LINQ significa Language-Integrated Query.','LINQ se incorporó en .NET Framework 3.5.'],respuesta_correcta:0,comentarios:'La primera afirmación es incorrecta: DataTableExtensions.AsEnumerable() expone sus filas como una colección genérica DataRow y permite usarlas como fuente de consulta LINQ. LINQ to DataSet se orienta precisamente a consultar datos en caché dentro de DataSet. Microsoft sitúa la introducción de LINQ en .NET Framework 3.5.'},
 4228:{texto:'En la plataforma Java 2 Micro Edition (J2ME), utilizada históricamente para desarrollar aplicaciones en dispositivos PDA, ¿qué edición de Java se destinaba a esos dispositivos de recursos limitados?',opciones:['Micro Edition (Java ME/J2ME).','Standard Edition (Java SE/J2SE).','Enterprise Edition (Java EE/J2EE).','Cualquiera de ellas indistintamente por la portabilidad de Java.'],respuesta_correcta:0,comentarios:'Java ME/J2ME ofrecía configuraciones y perfiles para clases de dispositivos móviles y embebidos. La portabilidad no elimina las diferencias de APIs y capacidades entre ediciones; la referencia a PDA se mantiene como terminología histórica.'},
 4229:{texto:'Según la información oficial de licencias de Mozilla, ¿qué navegador se distribuye bajo los términos de la Mozilla Public License (MPL)?',opciones:['Google Chrome.','Mozilla Firefox.','NCSA Mosaic.','Netscape Navigator.'],respuesta_correcta:1,comentarios:'Mozilla indica que Firefox se ofrece bajo MPL. La afirmación se refiere a la licencia del software/código según los avisos de Mozilla; no otorga derechos sobre marcas y no implica que todos los componentes se distribuyan exclusivamente bajo una sola licencia.'},
 4230:{texto:'FooCorp distribuye una aplicación propietaria que usa una biblioteca modificada bajo GNU LGPL v2.1. ¿Cuál afirmación describe correctamente una condición de distribución?',opciones:['Debe proporcionar la fuente correspondiente de la biblioteca modificada bajo LGPL y cumplir los avisos/licencia; si enlaza estáticamente, debe dar material objeto suficiente para que el usuario pueda relinkar con una biblioteca modificada.','Debe publicar bajo LGPL todo el código fuente de su aplicación propietaria, aunque sea una obra independiente que usa la biblioteca.','Debe enviar obligatoriamente todas las modificaciones al autor original de la biblioteca para que las incorpore a la versión oficial.','La LGPL prohíbe distribuir una aplicación propietaria enlazada con una biblioteca LGPL.'],respuesta_correcta:0,comentarios:'LGPL v2.1 permite distribuir la obra que usa la biblioteca bajo términos propios si se satisfacen sus condiciones. Entre ellas, al distribuir la biblioteca modificada se debe facilitar su fuente correspondiente y conservar avisos/licencia; en enlace estático, la sección 6 requiere entregar el objeto del trabajo que permita relink con una biblioteca modificada. No hay obligación general de publicar la fuente de la aplicación independiente ni de remitir cambios al autor upstream.'}
};
apply({numero:'781',fecha:'2026-11-09',records,edits});
