const records=[
[571,[60],['II-2'],['ext4','ext3','extents'],'https://cdn.kernel.org/doc/html/latest/admin-guide/ext4.html','Linux Kernel Documentation, ext4 General Information','Ext4 incorpora extents y permite convertir mapas indirectos de ext3. Se sustituyen límites numéricos sin tamaño de bloque ni distinción TB/TiB por una diferencia estructural: las cifras originales podían hacer defendibles varias opciones. Ext3 ya disponía de journaling.'],
[572,[59,60],['II-2'],['kernel','arquitectura'],'https://www.kernel.org/doc/mirror/ols2007v1.pdf','Proceedings of the Linux Symposium 2007, vol. 1, p. 255','La publicación describe Linux como sistema monolítico. Se concreta Linux, pues UNIX designa una familia y no impone una única arquitectura de núcleo. Monolítico no significa que carezca de módulos cargables.'],
[573,[60],['II-2'],['Metacity','KDE','escritorios'],'https://wiki.gnome.org/Projects/Metacity','GNOME, Projects/Metacity','Metacity es un gestor de ventanas utilizado en GNOME Flashback, no un entorno de escritorio completo. Se precisa KDE Plasma y se normaliza GNOME.'],
[574,[60],['II-2'],['Bourne','historia'],'https://www.gnu.org/software/bash/manual/html_node/What-is-Bash_003f.html','GNU Bash Reference Manual, What is Bash?','El manual de Bash identifica el shell de Stephen Bourne en la séptima edición de UNIX de Bell Labs. Se sustituye el superlativo absoluto del original por esta referencia histórica comprobable.','historica'],
[575,[60],['II-2'],['WebDAV','cadaver'],'https://notroj.github.io/cadaver/','Joe Orton, cadaver','El autor describe cadaver como cliente WebDAV de línea de comandos para UNIX, con operaciones de transferencia, edición, colecciones y bloqueo de recursos. Se mantiene A.']
];
const edits={
571:{opciones:['Ext3 carece de soporte para directorios.','Toda migración de ext3 a ext4 exige obligatoriamente reformatear.','Ext4 incorpora extents para representar rangos contiguos de bloques, frente al esquema de mapas indirectos de ext3.','Ext4 introduce por primera vez el journaling, ausente en ext3.']},
572:{texto:'¿Cómo se clasifica la arquitectura del núcleo Linux, aunque admita módulos cargables?',opciones:['Microkernel con todos los controladores en procesos de usuario.','Exokernel que delega todos los servicios en bibliotecas de aplicaciones.','Intérprete de órdenes sin gestión de memoria.','Núcleo monolítico.']},
573:{opciones:['Xfce','GNOME','KDE Plasma','Metacity']},
574:{opciones:['Es exclusivamente un shell de Linux.','Fue creado como parte de Microsoft Windows.','Es el nombre del gestor de ventanas de UNIX.','Es el shell de Stephen Bourne que apareció en la séptima edición de UNIX de Bell Labs.']}
};
require('./aplicar-lote.cjs')({numero:'051',fecha:'2026-10-21',records,edits});
