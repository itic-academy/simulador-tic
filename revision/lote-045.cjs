const records=[
[541,[60],['II-2'],['daemons','procesos'],'https://www.man7.org/linux/man-pages/man7/daemon.7.html','Linux man-pages, daemon(7)','Un daemon es un proceso de servicio que se ejecuta en segundo plano. No todo trabajo lanzado en background ni todo proceso no interactivo es necesariamente un daemon; se elimina esa equivalencia del enunciado.'],
[542,[60],['II-2'],['pwd'],'https://www.gnu.org/s/coreutils/manual/html_node/pwd-invocation.html','GNU Coreutils, pwd invocation','pwd muestra el nombre del directorio de trabajo actual. La respuesta B se mantiene; no cambia contraseñas ni configura impresoras.'],
[543,[59,60],['II-2'],['GNU','Hurd','microkernel'],'https://www.gnu.org/software/hurd/doc/hurd_1.html','GNU Hurd Reference Manual, Introduction','GNU Hurd es un conjunto de servidores sobre el microkernel Mach que implementan funciones de sistema de archivos, red y control de acceso. Se precisa su arquitectura para no confundir esos servidores con GNU Mach ni con el núcleo Linux empleado en GNU/Linux.'],
[544,[60],['II-2'],['ReiserFS','tail-packing','historica'],'https://www.man7.org/linux/man-pages/man8/mount.8.html','util-linux, mount(8), Mount options for reiserfs: notail','La documentación de ReiserFS describe almacenamiento de archivos pequeños y colas de archivos en su árbol; notail desactiva ese empaquetado. Se conserva como cuestión histórica, sin recomendar su implantación actual ni afirmar que escriba datos dentro de otros archivos.','historica'],
[545,[60],['II-2'],['Wine','compatibilidad'],'https://www.winehq.org/about','WineHQ, About Wine','Wine es una capa de compatibilidad para ejecutar aplicaciones Windows en sistemas como Linux. Se elimina la dependencia genérica de X11 de la definición y no se garantiza compatibilidad con todas las aplicaciones.']
];
const edits={
541:{texto:'En UNIX/Linux, ¿cómo se denomina habitualmente un proceso de servicio que se ejecuta en segundo plano?'},
543:{texto:'¿Qué componente del proyecto GNU consiste en un conjunto de servidores sobre el microkernel Mach?',opciones:['Linux','MINIX','GNU Hurd','GRUB']},
544:{texto:'En el diseño histórico de ReiserFS, ¿qué función tiene el empaquetado de colas de archivos (tail packing)?',opciones:['Asignar letras de unidad a las particiones.','Eliminar siempre la necesidad de metadatos.','Almacenar archivos pequeños y fragmentos finales de archivos en el árbol del sistema de archivos.','Convertir automáticamente todos los archivos a formato ext4.']},
545:{opcion:[2,'Una capa de compatibilidad de código abierto que permite ejecutar aplicaciones de Windows en sistemas como Linux.']}
};
require('./aplicar-lote.cjs')({numero:'045',fecha:'2026-10-20',records,edits});
