const records=[
[561,[60],['II-2'],['distribuciones','IRIX'],'https://irix7.com/techpubs/007-2476-001.pdf','Silicon Graphics, Programming on Silicon Graphics, copia archivada','IRIX es la implementación de UNIX de Silicon Graphics, no una distribución de Linux. Se mantiene D. La referencia a Red Hat se entiende como su distribución Linux, no como el nombre de cualquier producto de la empresa.'],
[562,[60],['II-2'],['enlaces','ln'],'https://www.gnu.org/software/coreutils/manual/coreutils.html','GNU Coreutils, ln invocation','ln crea enlaces duros por defecto; -s selecciona enlaces simbólicos. Se especifican origen y destino y se sustituye hardlink, nombre de una utilidad real de deduplicación que podía hacer ambiguo el original.'],
[563,[60],['II-2'],['GNOME','historia'],'https://www.gnu.org/gnu/the-gnu-project.en.html','GNU Project, The GNU Project','GNU documenta la expansión GNU Network Object Model Environment. Se pregunta por el significado original del nombre: no se presenta esa expansión como definición obligatoria de la marca actual.','historica'],
[564,[60],['II-2'],['chmod','permisos'],'https://www.gnu.org/s/coreutils/manual/html_node/Numeric-Modes.html','GNU Coreutils, Numeric Modes','En los bits tradicionales del modo 457, el primer dígito 4 concede lectura al propietario; 5 y 7 se refieren al grupo y a los demás usuarios. Se mantiene C. La pregunta se interpreta como permisos del modo, no como evaluación de accesos privilegiados.'],
[565,[60],['II-2'],['shell','Bourne','historia'],'https://www.gnu.org/software/bash/manual/html_node/What-is-Bash_003f.html','GNU Bash Reference Manual, What is Bash?','El manual identifica a Stephen Bourne como autor del shell de la séptima edición de UNIX de Bell Labs. Se reformula para obtener una única respuesta: el original mezclaba una atribución institucional de Bourne Shell y una atribución personal de Korn Shell, sin hacerlas excluyentes.','historica']
];
const edits={
562:{texto:'Con permisos suficientes, un archivo regular origen existente y un nombre destino libre en el mismo sistema de archivos, ¿qué comando crea un enlace duro llamado destino?',opciones:['ln -s origen destino','ln origen destino','cp origen destino','mv origen destino']},
563:{texto:'¿Cuál fue la expansión original del nombre GNOME?'},
565:{texto:'¿Qué shell fue desarrollado por Stephen Bourne y apareció en la séptima edición de UNIX de Bell Labs?',opciones:['Bourne Shell (sh).','Korn Shell (ksh).','C Shell (csh).','Bourne Again Shell (bash).']}
};
require('./aplicar-lote.cjs')({numero:'049',fecha:'2026-10-21',records,edits});
