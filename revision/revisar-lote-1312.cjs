const aplicar=require('./aplicar-lote.cjs');
const elcapitan='https://www.apple.com/ca/fr/osx/all-features/pdf/osx_elcapitan_core_technologies_overview.pdf';
const cocoa='https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Cocoa.html';
const boxing='https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/types/boxing-and-unboxing';
const csharp='https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/conversions';
const law='https://www.boe.es/buscar/act.php?id=BOE-A-2010-10707';
const geo='https://www.ign.es/web/ign/portal/ide-area-nodo-ide-ign';
const raster='https://www.ign.es/web/resources/acercaDe/libDigPub/actividades-geografia-IGN.pdf';
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const edits={
6882:{texto:'En la terminología clásica de desarrollo de Apple, Cocoa es el entorno de aplicaciones nativas para:',opciones:['macOS, mediante los frameworks Foundation y AppKit.','iOS, mediante Foundation y UIKit (Cocoa Touch).','macOS e iOS como nombre del entorno integrado de desarrollo Xcode.','macOS e iOS como lenguaje de programación.'],respuesta_correcta:0},
6883:{texto:'En .NET, ¿qué describe el boxing de un tipo de valor en C#?',opciones:['Convertir el valor en una instancia object o en una interfaz implementada por ese tipo, envolviéndolo en un objeto.','Extraer un valor previamente empaquetado desde una referencia object.','Convertir cualquier tipo de valor en otro tipo compatible mediante una conversión numérica.','Serializar el valor en una secuencia binaria para almacenarlo en un archivo.'],respuesta_correcta:0},
6884:{texto:'En el contexto de los sistemas de información geográfica, ¿qué significa la sigla IDE?',opciones:['Interfaz de Desarrollo Espacial.','Infraestructura de Datos Espaciales.','Identificador de Datos Estadísticos.','Índice de Distribución Espacial.'],respuesta_correcta:1},
6885:{texto:'¿Cuál de las siguientes afirmaciones describe el modelo de datos ráster empleado en los SIG?',opciones:['Cada objeto se representa mediante una secuencia explícita de coordenadas de sus vértices.','El espacio se representa como una rejilla de celdas regulares, cada una con un valor asociado.','Las relaciones topológicas entre puntos, líneas y polígonos quedan almacenadas explícitamente por defecto.','Los elementos espaciales solo se pueden combinar si las capas no tienen referencia geográfica.'],respuesta_correcta:1}
};
const records=[
[6881,[62],['II-2'],['OS X El Capitan','SMB3','SMB','compartición de archivos','pregunta histórica'],[
{url:elcapitan,referencia:'Apple, OS X El Capitan Core Technologies Overview: identifica SMB3 como protocolo predeterminado para compartir archivos en El Capitan y señala compatibilidad con AFP y SMB2.'},
{url:'https://support.apple.com/en-la/102050',referencia:'Apple Support, configuración de SMB en macOS: documenta soporte para conexiones SMB2 y SMB3 y opciones de protocolo.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 62: conceptos básicos de OS X, iOS y otros sistemas operativos.'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, tema II.2: conceptos y administración de sistemas operativos.'}
],null,'Se conserva la pregunta por su interés histórico: Apple identifica SMB3 como protocolo predeterminado para compartir archivos en OS X El Capitan (2015), manteniendo soporte de AFP/SMB2 y negociación automática. El producto está fuera de soporte; no debe interpretarse como recomendación actual.', 'historica'],
[6882,[62],['II-2'],['Cocoa','Cocoa Touch','Foundation','AppKit','UIKit','macOS','iOS'],[
{url:cocoa,referencia:'Apple Developer Documentation Archive, Cocoa (Touch): Cocoa con Foundation y AppKit se usa para aplicaciones OS X; Cocoa Touch con Foundation y UIKit, para iOS.'},
{url:'https://developer.apple.com/documentation/appkit',referencia:'Apple Developer Documentation, AppKit: framework para la interfaz de usuario de aplicaciones macOS.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 62: conceptos básicos de OS X/iOS y sistemas operativos de dispositivos.'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, tema II.2: otros sistemas operativos, incluidos los sistemas de Apple.'}
],edits[6882],'La pregunta original confundía Cocoa y Cocoa Touch, y calificaba Cocoa como un framework de interfaz para iOS. Se explicita la distinción histórica: Cocoa (Foundation/AppKit) para macOS y Cocoa Touch (Foundation/UIKit) para iOS. La fuente archivada de Apple es útil para esa terminología, aunque advierte que es documentación retirada.', 'corregida'],
[6883,[66],['III-11'],['.NET','C#','boxing','tipos de valor','object','unboxing'],[
{url:boxing,referencia:'Microsoft Learn, Boxing and Unboxing (C#): boxing convierte un tipo de valor a object o a una interfaz implementada, creando un objeto que contiene una copia del valor; unboxing extrae ese tipo de valor.'},
{url:csharp,referencia:'Especificación del lenguaje C#, apartado 10.2.9: una conversión boxing permite convertir implícitamente un tipo de valor en object, ValueType, Enum o una interfaz aplicable.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 66: entorno de desarrollo Microsoft .NET.'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, tema III.11: plataforma .NET y modelo de programación.'}
],edits[6883],'Se precisa la definición: boxing no significa una conversión a un «tipo de referencia correspondiente» cualquiera; en C# transforma el valor en object o en una interfaz implementada por ese tipo y lo envuelve en una instancia. La operación inversa es unboxing.', 'corregida'],
[6884,[74],[],['SIG','GIS','IDE','Infraestructura de Datos Espaciales','información geográfica'],[
{url:geo,referencia:'Geoportal del Instituto Geográfico Nacional, área de Infraestructura de Datos Espaciales: desarrolla la denominación IDE en el contexto de la información geográfica.'},
{url:law,referencia:'Ley 14/2010, texto consolidado: regula las infraestructuras y servicios de información geográfica; su preámbulo denomina IDE a las infraestructuras de datos espaciales.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 74: sistemas de información geográfica, conceptos y funcionalidad básicos.'}
],edits[6884],'Se expanden correctamente las siglas IDE como Infraestructura de Datos Espaciales, denominación empleada en la infraestructura geográfica española (IDEE).', 'corregida'],
[6885,[74],[],['SIG','GIS','ráster','rejilla','celdas','resolución espacial','modelo vectorial'],[
{url:raster,referencia:'Instituto Geográfico Nacional, materiales de actividades geográficas: el modelo ráster representa el territorio mediante celdas de una rejilla, cada una con un valor asociado; el tamaño del píxel determina resolución espacial.'},
{url:'https://pro.arcgis.com/en/pro-app/3.3/help/data/imagery/introduction-to-raster-data.htm',referencia:'Esri ArcGIS Pro, introducción a datos ráster: define una matriz de píxeles/celdas en filas y columnas, cada uno con un valor; para una superficie fija, reducir a la mitad el tamaño de celda puede multiplicar por cuatro el espacio requerido, según formato.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 74: sistemas de información geográfica y funcionalidad.'}
],edits[6885],'La formulación original decía que el volumen era inversamente proporcional al tamaño de celda, lo cual no es exacto sin especificar dimensión y superficie; para una región bidimensional depende aproximadamente del área de celda (el inverso del cuadrado del lado). Se pregunta por la propiedad definitoria: rejilla regular con un valor por celda. La topología explícita y la representación por vértices son propias del modelo vectorial.', 'corregida']
];
aplicar({numero:'1312',fecha:'2026-11-15',records,edits});
