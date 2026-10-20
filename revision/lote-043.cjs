const records=[
[531,[60],['II-2'],['tee','redireccion'],'https://www.gnu.org/software/gawk/manual/html_node/Tee-Program.html','GNU Awk, Tee Program','tee copia la entrada estándar a la salida estándar y a cada archivo indicado. No divide los datos en partes ni se limita necesariamente a un único archivo.'],
[532,[59,60],['II-2'],['PID','idle'],'https://people.kernel.org/linusw/','Linus Walleij, descripción de init_task y cpu_startup_entry','En Linux, init_task es la tarea inicial del núcleo con PID 0; tras el arranque ejecuta el bucle idle. No debe confundirse con init de espacio de usuario, PID 1. Se concreta Linux para evitar extender esta organización a cualquier UNIX.'],
[533,[60],['II-2'],['Pine','correo','historica'],'https://snebulos.mit.edu/htdocs/pine/','University of Washington, Getting Started With Email Using Pine, copia en MIT','El manual histórico de Pine describe un programa de correo electrónico con buzón de entrada y funciones de composición y envío. Se pregunta por su finalidad principal, sin negar que permita editar mensajes ni afirmar su vigencia como recomendación actual.','historica'],
[534,[60],['II-2'],['shell'],'https://www.gnu.org/software/bash/manual/html_node/What-is-a-shell_003f.html','GNU Bash, What is a shell?','La shell interpreta órdenes y permite automatizarlas mediante programas. Interfaz de usuario también era una descripción genérica válida: se elimina ese distractor solapado y se pregunta por el nombre del intérprete.'],
[535,[60],['II-2'],['sistemas-de-archivos','Bash'],'https://docs.kernel.org/filesystems/index.html','Linux Kernel Documentation, Filesystems','ext4, XFS y Btrfs son sistemas de archivos documentados por Linux. Bash es un intérprete de órdenes, según https://www.gnu.org/software/bash/manual/html_node/What-is-a-shell_003f.html. Se actualizan las opciones; no se certifica la inexistencia de la denominación imprecisa mini fs del original.']
];
const edits={
531:{opcion:[1,'Copia la entrada estándar a la salida estándar y a cada archivo indicado como argumento.']},
532:{texto:'En Linux, ¿qué representa la tarea inicial del núcleo con PID 0?',opciones:['La tarea que, tras el arranque, ejecuta el bucle idle.','El proceso init de espacio de usuario, con PID 1.','Un servidor de correo de usuario.','El intérprete de órdenes de cada sesión de usuario.']},
533:{texto:'Entre estos programas utilizados en entornos UNIX/Linux, ¿cuál se documentó históricamente como cliente de correo electrónico, siendo esa su finalidad principal?'},
534:{texto:'¿Cómo se denomina genéricamente el intérprete de órdenes que permite ejecutar comandos y scripts en UNIX/Linux?',opciones:['Kernel','Sistema de archivos','Shell','Controlador de dispositivo']},
535:{opciones:['ext4','Bash','XFS','Btrfs']}
};
require('./aplicar-lote.cjs')({numero:'043',fecha:'2026-10-20',records,edits});
