const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const systemd='https://www.freedesktop.org/software/systemd/man/257/runlevel.html';
const android9='https://blog.google/products-and-platforms/platforms/android/introducing-android-9-pie/';
const androidPower='https://developer.android.com/about/versions/pie/power';
const androidRuntime='https://developer.android.com/guide/platform';
const android5='https://developer.android.com/about/versions/lollipop';
const ef='https://learn.microsoft.com/en-us/ef/';
const java='https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/package-summary.html';
const gnu='https://www.gnu.org/philosophy/free-sw.html';
const mobile='https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk';
const systems='https://drive.google.com/file/d/1zk8UbyZCGo2GZrgnrA4aiwQxa8zi6S7U/view?usp=drivesdk';
apply({numero:'1209',fecha:'2026-11-13',records:[
 [6366,['60'],['II-2','IV-1'],['Linux','SysV init','runlevel','systemd','reboot'],[
  src(systemd,'Freedesktop systemd.special/runlevel: runlevel6.target es alias de reboot.target por compatibilidad SysV; la página de runlevel califica el mecanismo como obsoleto y mapea nivel 6 a reboot.target.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 60: sistemas operativos Unix/Linux, administración e instalación.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.2: fundamentos y administración de sistemas operativos Linux/Unix.')
 ],null,'Se acota el enunciado al mapeo de compatibilidad SysV de systemd. En ese contexto, el nivel 6 equivale al target de reinicio. Runlevels son una interfaz heredada; no describen el modelo nativo de systemd.','corregida'],
 [6367,['62','124'],['II-2'],['Android 9 Pie','ART','Dalvik','App Actions','bienestar digital','histórica'],[
  src(android9,'Google, anuncio oficial Android 9 Pie (6 agosto 2018): presenta Adaptive Battery, App Actions y las funciones de Bienestar Digital, incluidas Dashboard, temporizador de aplicaciones, Do Not Disturb y Wind Down.'),
  src(androidPower,'Android Developers, Android 9 power management: sitúa en Android 9 las nuevas funciones de gestión de batería (incluidos App Standby Buckets).'),
  src(androidRuntime,'Android Developers, platform architecture: Android 5.0/API 21 y posteriores usan ART; antes se usaba Dalvik.'),
  src(android5,'Android Developers, Android 5.0 Lollipop: Android pasa a ejecutar exclusivamente sobre ART.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, temas 62 (otros sistemas y móviles) y 124 (aplicaciones móviles).'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.2: sistemas operativos para dispositivos móviles.'),
  src(mobile,'ITIC Academy, bloque temático Aplicaciones móviles y sistemas operativos, versión 2026.1: desarrolla ART frente a Dalvik, sus versiones y el tema A1-124.')
 ],null,'Se conserva C: Dalvik ya había sido reemplazado como runtime predeterminado en Android 5.0 Lollipop, no en Pie. Se reformula el marco temporal como la versión publicada en agosto de 2018 y se reemplaza la expresión imprecisa “dos modos adicionales” por las funciones concretas de Bienestar Digital. Estado histórica: pregunta válida solo como comparación de versiones en su contexto de lanzamiento.','historica'],
 [6368,['66'],['III-11'],['.NET','Entity Framework','ORM','mapeo objeto-relacional'],[
  src(ef,'Microsoft Learn, documentación oficial de Entity Framework: EF6 se define como un mapeador objeto-relacional (O/RM) para .NET; la documentación también distingue EF Core.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 66: entorno de desarrollo Microsoft .NET.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.11: plataforma .NET, modelo de programación, servicios, persistencia y seguridad.'),
  src(systems,'ITIC Academy, bloque Tecnologías de sistemas de información, temas 65–67/2026: capítulo 2.6.1 describe Entity Framework como API de mapeo ORM objeto-relacional para ADO.NET y el trabajo con objetos de dominio.')
 ],null,'La respuesta A es correcta: Entity Framework es una tecnología ORM que permite trabajar con objetos de dominio y persistirlos en bases relacionales. El capítulo Academy conserva terminología del antiguo .NET Framework/ADO.NET; la referencia actual de Microsoft incluye EF Core. La propiedad esencial preguntada no cambia.','vigente'],
 [6369,['67'],[],['Java','Java SE','java.lang','paquete estándar'],[
  src(java,'Oracle Java SE API, resumen oficial del paquete java.lang: contiene clases fundamentales del lenguaje, entre ellas Object y Class.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 67: entorno de desarrollo Java.'),
  src(systems,'ITIC Academy, bloque Tecnologías de sistemas de información, tema A1-67: desarrolla el entorno Java; para la descripción normativa del paquete se contrasta la API oficial de Oracle.')
 ],null,'La respuesta A es correcta: java.lang proporciona clases e interfaces fundamentales de Java y sus tipos públicos se importan implícitamente en cada unidad de compilación. No se asocia a A2-III-10, cuyo ámbito específico es Java EE/Jakarta EE.','vigente'],
 [6370,['69'],['II-14'],['software libre','libertad frente a precio','licencias'],[
  src(gnu,'GNU/FSF, definición de software libre: las libertades de uso, estudio, modificación y redistribución no dependen de que la copia se ofrezca sin coste; el software libre puede distribuirse cobrando.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 69: software de código abierto y software libre, conceptos y aplicaciones.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.14: software libre y propietario y características de licencias.'),
  src(systems,'ITIC Academy, bloque Tecnologías de sistemas de información, actualizado 2025: presenta software libre en el contexto de servidores (p. ej., XAMPP), sin equipararlo con la gratuidad; la definición de libertades se contrasta con GNU/FSF.')
 ],null,'Se conserva C, pero se precisa el alcance: que se distribuya sin coste no es condición definitoria del software libre. “Libre” describe las libertades concedidas por la licencia, no el precio; puede ser gratis o cobrarse por las copias.','corregida']
],edits:{
 6366:{texto:'En systemd, en su mapeo de compatibilidad con los runlevels de SysV, el runlevel 6:',opcion:[2,'Se corresponde con reboot.target (reinicio del sistema)']},
 6367:{texto:'En el lanzamiento de Android 9 Pie (2018), ¿cuál de las siguientes características NO era una novedad de esa versión?',opcion:[3,'Funciones de Bienestar Digital como Dashboard, temporizador de aplicaciones, Do Not Disturb y Wind Down']},
 6370:{texto:'Señale qué afirmación NO describe una libertad definitoria del software libre:',opcion:[2,'Que la copia se distribuya siempre sin coste']}
}});
