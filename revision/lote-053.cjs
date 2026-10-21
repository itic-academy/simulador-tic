const records=[
[581,[60],['II-2'],['iptables','cortafuegos'],'https://man7.org/linux/man-pages/man8/iptables.8.html','iptables(8), DESCRIPTION','iptables administra reglas de filtrado IPv4 en Linux; se mantiene B. No es la única herramienta para cortafuegos. Se corrige la errata del distractor iwconfig.'],
[582,[60],['II-2'],['procesos','nice','root'],'https://man7.org/linux/man-pages/man2/nice.2.html','Linux man-pages, nice(2), DESCRIPTION','Ser root no impone la máxima prioridad de planificación. Un valor nice mayor representa menor prioridad; también puede aplicarse a un proceso privilegiado. Se mantiene B y se eliminan distractores ambiguos sobre acceso directo a recursos.'],
[583,[60],['II-2'],['procfs','sistemas-de-archivos'],'https://man7.org/linux/man-pages/man5/proc.5.html','Linux man-pages, proc(5), DESCRIPTION y Overview','procfs es un pseudosistema de archivos que expone información de procesos y del sistema, normalmente en /proc. Algunos archivos permiten modificar parámetros del núcleo. Se concreta Linux para no universalizar detalles entre variantes UNIX.'],
[584,[60],['II-2'],['root','usuarios'],'https://www.man7.org/linux/man-pages/man7/capabilities.7.html','Linux man-pages, capabilities(7), DESCRIPTION','El superusuario se denomina convencionalmente root. Se mantiene B; en el modelo tradicional de permisos se asocia al identificador efectivo de usuario cero.'],
[585,[60],['II-2'],['X11','DISPLAY'],'https://xorg.freedesktop.org/archive/X11R6.7.0/doc/startx.1.html','X.Org, startx(1), Environment Variables','DISPLAY identifica el display al que se conectan los clientes X. El enunciado original invertía cliente y servidor: la aplicación es cliente y utiliza los servicios del servidor X. Se mantiene A y se corrige esa inversión.']
];
const edits={
581:{opcion:[3,'iwconfig']},
582:{texto:'¿Cuál de las siguientes afirmaciones sobre la prioridad de planificación de los procesos de root en Linux es correcta?',opciones:['Todos deben ejecutarse siempre con la máxima prioridad de tiempo real.','Pueden ejecutarse con menos prioridad de planificación que un proceso de usuario normal.','No pueden aumentar su valor nice para reducir su prioridad.','Su prioridad de planificación se determina exclusivamente por el UID y no puede modificarse.']},
583:{texto:'¿Qué es procfs en Linux?'},
585:{texto:'En X Window System (X11), ¿qué variable de entorno indica a una aplicación cliente el display del servidor X al que debe conectarse?'}
};
require('./aplicar-lote.cjs')({numero:'053',fecha:'2026-10-21',records,edits});
