const records=[
[501,[60],['II-2'],['chmod'],'https://www.gnu.org/software/coreutils/manual/html_node/chmod-invocation.html','GNU Coreutils, chmod','chmod modifica los bits de permisos del archivo, sujeto a autorización. pwd muestra el directorio actual, rmdir elimina directorios vacíos y cat concatena o muestra archivos.'],
[502,[60,62],['II-2'],['UNIX','OpenVMS'],'https://www.opengroup.org/membership/forums/platform/unix','The Open Group, The UNIX Standard','AIX, HP-UX y Solaris pertenecen a UNIX. OpenVMS constituye otra familia de sistemas operativos: disponer de utilidades de compatibilidad UNIX no lo convierte en UNIX. VSI documenta esa capa de compatibilidad en https://vmssoftware.com/docs/VSI_OVMS_SPD_QS_V842L1.pdf.'],
[503,[60],['II-2'],['SystemV','historica'],'https://www.kernel.org/doc/html/v6.9/filesystems/sysv-fs.html','Linux Kernel, SystemV Filesystem: General layout','El formato histórico SystemV FS separa bloque de arranque, superbloque, área de inodos y área de directorios/datos. No se generaliza a cualquier sistema de archivos montable en System V ni a una lectura directa desde BIOS.','historica'],
[504,[60],['II-2'],['ln','enlaces'],'https://www.gnu.org/software/coreutils/manual/html_node/ln-invocation.html','GNU Coreutils, ln, opción -s','ln crea enlaces duros por defecto; con -s crea enlaces simbólicos. Se incorpora la opción para que la respuesta indique la invocación adecuada.'],
[505,[60],['II-2'],['KDE','KWin'],'https://github.com/KDE/kwin','KDE, repositorio KWin, descripción del proyecto','KWin es el compositor Wayland de KDE Plasma y gestiona las ventanas. La pregunta se concreta en Wayland y nombra el componente; se evita confundir KDE, la comunidad, con el nombre actual del escritorio Plasma.']
];
const edits={
503:{texto:'¿Qué descripción corresponde a la organización del formato histórico SystemV FS?',opcion:[2,'Distingue bloque de arranque, superbloque y áreas separadas para inodos y para directorios/datos.']},
504:{opcion:[0,'ln -s']},
505:{texto:'En una sesión Wayland de KDE Plasma, ¿qué componente realiza la composición y gestión de ventanas?',opciones:['KWin','Dolphin','Konsole','Kate']}
};
require('./aplicar-lote.cjs')({numero:'037',fecha:'2026-10-20',records,edits});
