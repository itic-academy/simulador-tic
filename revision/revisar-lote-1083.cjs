const aplicar=require('./aplicar-lote.cjs');
const ref=(url,referencia)=>({url,referencia});
const docker='https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/';
const dockerRun='https://docs.docker.com/engine/containers/run/';
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const rtarticle='https://dialnet.unirioja.es/servlet/articulo?codigo=5895140';
const rtthesis='https://idus.us.es/server/api/core/bitstreams/4a2bfbe5-47ae-4e5d-96a1-b2cbd2e800f0/content';
const rd='https://www.boe.es/buscar/act.php?id=BOE-A-2014-8132';
const lo='https://www.boe.es/buscar/act.php?id=BOE-A-2012-5730';
const ontsi='https://www.ontsi.es/sites/ontsi/files/2022-01/tecnologiasociedadespa%C3%B1a2021.pdf';
const lopd='https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673';
const gdpr='https://eur-lex.europa.eu/eli/reg/2016/679/oj';
const records=[
 [5736,[132],['II-7'],['contenedores','Docker','Kubernetes','virtualización','procesos aislados'],[
  ref(docker,'Docker Docs, “What is a container?”: un contenedor es un proceso aislado con los archivos que necesita; varios contenedores comparten kernel, a diferencia de máquinas virtuales completas.'),
  ref(dockerRun,'Docker Engine: ejecuta procesos en contenedores aislados con sistema de archivos, red y árbol de procesos propios.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 132: virtualización de sistemas/centros de datos y puestos de trabajo; encaje por contenedores, no equivalencia con una VM.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, II.7: modelo de desarrollo de aplicaciones basado en contenedores y microservicios.'),
 ],null,'Corregida, respuesta A (Docker). Se corrige la errata “Kubernete” y se precisa que la descripción corresponde a contenedores de procesos, tecnología que Docker ofrece. Kubernetes orquesta contenedores, VirtualBox ejecuta máquinas virtuales y Portainer es una interfaz de gestión. Los contenedores comparten el kernel del sistema anfitrión y no son una máquina virtual con sistema operativo/kernel propio. A1-132/A2-II-7.','corregida'],
 [5737,[133],['II-16'],['marketing digital','Real Time Marketing','redes sociales','comunicación digital','contenido oportuno'],[
  ref(rtarticle,'Purita, G. (2016), “Real Time Marketing”, Harvard Deusto Marketing & Ventas: trata la creación de contenido en tiempo real a partir de noticias/eventos que generan una oportunidad de relevancia.'),
  ref(rtthesis,'Trabajo académico depositado en idUS: analiza el RTM digital apoyado en acontecimientos, noticias o tendencias del momento.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 133: herramientas colaborativas, redes sociales y Guía de comunicación digital de la AGE.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, II.16: herramientas de trabajo colaborativo y redes sociales; asociación temática.'),
 ],null,'Corregida, respuesta A. El real time marketing aprovecha de forma oportuna un tema, noticia o acontecimiento que surge espontáneamente para publicar contenido relevante. La opción B es interacción en directo, C es planificación editorial y D describe atención/respuesta rápida, que por sí sola no define RTM. La publicación en tiempo real requiere pertinencia y cuidado reputacional; rapidez no basta. A1-133/A2-II-16.','corregida'],
 [5738,[],[],['periodo medio de pago','morosidad','administraciones públicas','facturas','RD 635/2014'],[
  ref(rd,'Real Decreto 635/2014 consolidado, arts. 3.1 y 4: el cálculo incluye facturas expedidas desde 1-1-2014 (no 2015), y el PMP global es una media ponderada de los PMP de entidades por el importe de sus operaciones.'),
  ref(lo,'Ley Orgánica 2/2012, art. 4.2: define sostenibilidad de la deuda comercial vinculándola a que el periodo medio de pago no supere el plazo máximo de la normativa sobre morosidad.'),
 ],null,'Corregida, respuesta C (es falsa). El art. 3.1 del RD 635/2014 fija el 1 de enero de 2014 como fecha inicial de las facturas/certificaciones computables, no 2015. El art. 4 establece el promedio ponderado descrito en D; la LO 2/2012, art. 4.2, contiene la regla de sostenibilidad comercial reflejada en A. B resume la finalidad del seguimiento. No se asigna epígrafe GSI A1/A2 por analogía: es materia de gestión económico-financiera general, no un tema TIC explícito de los programas cotejados.','corregida'],
 [5739,[109],['IV-13'],['Internet','usos de Internet','ONTSI','Tecnología y Sociedad en España 2021','estadística histórica'],[
  ref(ontsi,'ONTSI, Tecnología + Sociedad en España 2021, gráfico 9 (p. 22): para España y datos INE 2020, comunicación ocupa el primer lugar (98,6%), seguida de información (92,9%) y entretenimiento (89,9%).'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 109: Internet y servicios básicos; encaje temático, no fuente de la estadística.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, IV.13: Internet, servicios, evolución y estado actual; encaje temático.'),
 ],null,'Histórica, respuesta A (Comunicación). El informe ONTSI citado presenta una comparación con base en la Encuesta TIC-H del INE de 2020: comunicación es el uso más extendido, con 98,6%. Se mantiene la fecha y la fuente en el enunciado porque describe una estadística histórica; no debe interpretarse como dato vigente de 2026. A1-109/A2-IV-13.','historica'],
 [5740,[27],['I-7'],['protección de datos','LOPDGDD','códigos de conducta','RGPD','artículo 38'],[
  ref(lopd,'LO 3/2018, art. 38.2 consolidado: además de asociaciones/organismos del RGPD art. 40.2, pueden promover códigos empresas/grupos de empresas, responsables/encargados del art. 77.1 LOPDGDD y organismos/entidades que asumen las funciones del RGPD art. 41.'),
  ref(gdpr,'Reglamento (UE) 2016/679, arts. 40.2 y 41: categorías a las que remite el art. 38.2 LOPDGDD para promoción y supervisión de códigos.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 27: régimen jurídico de protección de datos, obligaciones y autoridades.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, I.7: protección de datos personales, responsable/encargado y autoridades.'),
 ],null,'Corregida, respuesta C. La opción elegida omitía la segunda frase del art. 38.2, que habilita también a los organismos o entidades que asuman supervisión y resolución extrajudicial de conflictos según el art. 41 RGPD. Se amplía la opción C para incluir ese supuesto; las alternativas “solo” son incompletas. A1-27/A2-I.7.','corregida'],
];
const edits={
 5736:{texto:'En un sistema GNU/Linux anfitrión, ¿qué tecnología se utiliza para ejecutar aplicaciones como procesos aislados que comparten el kernel del servidor físico?',opciones:['Docker','Kubernetes','VirtualBox','Portainer'],respuesta_correcta:0},
 5737:{texto:'En comunicación digital, ¿qué describe mejor el Real Time Marketing?',opciones:['Crear y publicar contenido oportuno y pertinente que aprovecha una noticia, acontecimiento o conversación que surge en ese momento','Responder con rapidez a cualquier consulta de atención al cliente, aunque no tenga relación con un acontecimiento o tema actual','Seguir un calendario editorial para publicar contenidos planificados con antelación','Interactuar durante una retransmisión en directo, con independencia de que se adapte a un tema o acontecimiento de actualidad'],respuesta_correcta:0},
 5738:{texto:'De acuerdo con la metodología del Real Decreto 635/2014, señale la afirmación falsa sobre el período medio de pago a proveedores de las Administraciones Públicas:',respuesta_correcta:2},
 5739:{texto:'Según el informe ONTSI «Tecnología + Sociedad en España 2021» (gráfico basado en datos de España de 2020), ¿qué categoría de uso de servicios de Internet presenta el porcentaje más alto?',respuesta_correcta:0},
 5740:{texto:'Según el artículo 38.2 de la Ley Orgánica 3/2018, ¿quiénes pueden promover códigos de conducta en materia de protección de datos?',opciones:['Solo las asociaciones y organismos del artículo 40.2 del Reglamento (UE) 2016/679','Solo las empresas o grupos de empresas y los responsables o encargados del artículo 77.1 de la Ley Orgánica 3/2018','Las asociaciones y organismos del artículo 40.2 del Reglamento; las empresas o grupos de empresas; los responsables o encargados del artículo 77.1 de la Ley Orgánica 3/2018; y los organismos o entidades que asuman las funciones del artículo 41 del Reglamento','Solo los organismos o entidades que asuman las funciones de supervisión y resolución extrajudicial previstas en el artículo 41 del Reglamento (UE) 2016/679'],respuesta_correcta:2},
};
aplicar({numero:'1083',fecha:'2026-11-12',records,edits});
