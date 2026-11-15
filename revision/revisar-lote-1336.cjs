const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const edits={
 7001:{texto:'En una matriz de prioridad de incidentes utilizada en una gestión de servicios alineada con ITIL, ¿qué dos factores se combinan habitualmente para determinar la prioridad?',opciones:['El volumen de negocio afectado y la duración ya transcurrida.','El tiempo de recuperación y la valoración posterior de los usuarios.','El impacto y la urgencia.','El número de incidentes y el número de veces que ocurren.'],respuesta_correcta:2},
 7002:{texto:'¿Cuál descripción del Standard Widget Toolkit (SWT) es correcta?',opciones:['Es una biblioteca gráfica para Java con API portable que, cuando es posible, integra widgets nativos del sistema operativo; la utiliza Eclipse.','Es una extensión exclusiva de AWT que solo funciona dentro del IDE Eclipse.','Es un motor gráfico web basado en HTML y CSS, sin integración con widgets del sistema.','Está implementado únicamente en Java puro y no utiliza bibliotecas nativas.'],respuesta_correcta:0},
 7004:{texto:'Entre estas herramientas históricas de directorio, ¿cuál es un metadirectorio que centraliza y propaga cambios a varios servicios de directorio?',opciones:['Novell Directory Services (NDS).','OpenDS, servidor de directorio LDAP.','Ganymede Network Directory Management System.','Ninguna de las anteriores.'],respuesta_correcta:2},
 7005:{texto:'En la antigua familia Adobe LiveCycle, ¿cuál de estas ediciones era una plataforma de formularios y no, por sí misma, un gestor documental?',opciones:['OpenKM.','Adobe LiveCycle Forms ES4.','Alfresco.','KnowledgeTree.'],respuesta_correcta:1}
};
const itil='https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk';
const tecnologias='https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const datos='https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk';
const directorios='https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk';
const documental='https://drive.google.com/file/d/17UpEFvYfjQ4iUrx8UNNTJIFcj5xO4vlz/view?usp=drivesdk';
const records=[
 [7001,[106],['IV-3'],['ITIL','incidentes','prioridad','impacto','urgencia'],[
  {url:'https://www.servicenow.com/docs/r/it-service-management/incident-management/def-prio-lookup-rules.html',referencia:'Documentación oficial de ServiceNow, reglas de prioridad: en su matriz de incidentes, las reglas configurables combinan impacto y urgencia para determinar prioridad. Se acotó el enunciado a una matriz ITIL habitual, no a un algoritmo universal.'},
  {url:'https://www.servicenow.com/docs/r/it-service-management/incident-management/incident-management-process.html',referencia:'Documentación oficial de Incident Management: la prioridad se determina por el impacto en usuarios/negocio y la urgencia; las reglas conducen priorización y objetivos de servicio.'},
  {url:itil,referencia:'ITIC Academy, bloque 41 ITIL y COBIT, actualización 2026: gestión de servicios e incidentes; cotejo curricular.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 106: gestión de servicios TIC, incidencias e ITIL.'},
  {url:a2,referencia:'Convocatoria oficial A2 GSI 2025, tema IV.3: gestión de incidencias.'}
 ],undefined,'Corregida C. En la matriz habitual de priorización de incidentes alineada con ITIL se usan impacto y urgencia. La prioridad concreta resulta de una matriz definida por la organización; ITIL/las herramientas no prescriben un único cálculo aplicable universalmente. El texto original mezclaba incidentes, solicitudes, problemas y cambios como si todos usaran obligatoriamente la misma matriz; se acotó al caso de incidentes.','corregida'],
 [7002,[67],['II-3'],['SWT','Java','Eclipse','widgets nativos','JNI','API portable'],[
  {url:'https://help.eclipse.org/latest/topic/org.eclipse.platform.doc.isv/guide/swt.htm',referencia:'Documentación oficial Eclipse: SWT es un toolkit de widgets para Java con API portable e integración con la GUI nativa; implementa widgets nativos donde están disponibles.'},
  {url:'https://wiki.eclipse.org/SWT/Developer_Guide',referencia:'Guía de desarrollo SWT de Eclipse: describe los toolkits nativos de los sistemas operativos y la interfaz JNI usada para invocarlos.'},
  {url:tecnologias,referencia:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, actualización 2026: incluye entorno Java del temario A1-67; cotejo curricular. No se encontró material específico sobre SWT.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 67: entorno de desarrollo Java.'},
  {url:a2,referencia:'Convocatoria oficial A2 GSI 2025, tema II.3: características de lenguajes y paradigmas actuales de programación.'}
 ],undefined,'Corregida A. SWT ofrece una API Java portable y usa controles nativos del sistema operativo cuando es posible, apoyándose en código nativo/JNI. No puede afirmarse que toda la implementación sea «Java puro» ni que AWT sea universalmente más rápido. Se sustituyeron opciones generales o dependientes de la plataforma por una descripción inequívoca. El temario Academy consultado cubre Java, pero no se localizó una lección específica sobre SWT.','corregida'],
 [7003,[71],['III-15'],['ciencia de datos','analítica diagnóstica','análisis descriptivo','análisis predictivo','causa raíz'],[
  {url:'https://www.ibm.com/think/topics/diagnostic-analytics',referencia:'IBM, analítica diagnóstica: analiza datos históricos para averiguar por qué ocurrió un resultado, identificando patrones, relaciones y causas raíz.'},
  {url:'https://www.ibm.com/think/topics/prescriptive-analytics',referencia:'IBM, tipos de analítica: descriptiva responde qué ocurrió, diagnóstica por qué, predictiva qué podría ocurrir y prescriptiva qué conviene hacer.'},
  {url:datos,referencia:'ITIC Academy, bloque 32 Inteligencia Artificial y Ciencia de Datos, nuevo temario 2026: ciencia de datos y analítica; cotejo curricular.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 71: ciencia de datos y ciclo de vida de procesos de modelado.'},
  {url:a2,referencia:'Convocatoria oficial A2 GSI 2025, tema III.15: minería de datos, Big Data y analítica.'}
 ],undefined,'Vigente B. El análisis diagnóstico examina datos para explicar por qué ocurrió un hecho; descriptivo resume qué pasó, predictivo estima qué puede pasar y prescriptivo recomienda qué hacer. La clave original coincide.','vigente'],
 [7004,[80],['IV-9'],['Ganymede','metadirectorio','servicios de directorio','LDAP','NIS','DNS'],[
  {url:'https://github.com/jonabbey/Ganymede',referencia:'Repositorio/mirror del desarrollador de Ganymede: sistema Java de gestión de directorios de red, con base central y propagación a servicios como NIS y DNS.'},
  {url:'https://github.com/jonabbey/Ganymede/blob/master/FAQ',referencia:'FAQ del proyecto: explica su función de gestión central de información que se propaga a LDAP, DNS, NIS y otros servicios; corresponde al concepto de metadirectorio.'},
  {url:'https://openldap.org/faq/data/cache/515.html',referencia:'FAQ de OpenLDAP, categoría de aplicaciones LDAP: identifica Ganymede como metadirectorio que centraliza la gestión de información de varios servicios de directorio.'},
  {url:directorios,referencia:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma, actualización 2026: incluye protocolos de directorio LDAP/X.500; cotejo temático. La búsqueda no localizó Ganymede en concreto.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 80: protocolos de directorio basados en LDAP y X.500.'},
  {url:a2,referencia:'Convocatoria oficial A2 GSI 2025, tema IV.9: administración de usuarios y dispositivos en redes locales.'}
 ],undefined,'Histórica C. Ganymede era un sistema de metadirectorio: conservaba datos de administración centralizados y propagaba cambios a varios servicios (p. ej., NIS, DNS y LDAP). Se precisa el nombre completo para distinguirlo de otras herramientas llamadas Ganymede; el registro del proyecto y sus documentos son históricos. La clasificación curricular es por servicios de directorio y gestión de usuarios, no porque el temario mencione el producto.','historica'],
 [7005,[104],['II-16'],['Adobe LiveCycle','Forms ES4','gestión documental','Content Services','ciclo de vida fin de soporte'],[
  {url:'https://help.adobe.com/en_US/livecycle/10.0/Overview/lc_overview_ds.pdf',referencia:'Documentación oficial de Adobe LiveCycle ES3: LiveCycle Content Services era un módulo separado de gestión de contenidos/documentos, marcado como deprecated; no se atribuye esa función a Forms ES4.'},
  {url:'https://www.adobe.com/support/documentation/en/livecycle/documentation.html',referencia:'Centro oficial de documentación Adobe LiveCycle: identifica Forms y servicios de gestión documental como componentes diferenciados.'},
  {url:'https://helpx.adobe.com/africa/support/programs/eol-matrix.html',referencia:'Matriz oficial de fin de soporte Adobe: LiveCycle Forms ES4 terminó soporte principal el 31/03/2018 y ampliado el 31/03/2020.'},
  {url:documental,referencia:'ITIC Academy, bloque 40 Gestión Documental, actualización 2026: gestión documental, CMS y DMS; cotejo curricular. La búsqueda no encontró Adobe LiveCycle Forms como producto concreto.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 104: gestión documental, CMS y DMS.'},
  {url:a2,referencia:'Convocatoria oficial A2 GSI 2025, tema II.16: sistemas de gestión documental y de contenidos.'}
 ],undefined,'Histórica B. La marca genérica Adobe LiveCycle abarcaba módulos distintos: Content Services sí ofrecía gestión de contenidos/documentos, pero Forms ES4 era una plataforma de formularios. El enunciado original era ambiguo y podía tener más de una lectura; se acotó a LiveCycle Forms ES4. La suite quedó sin soporte principal en 2018 y sin soporte ampliado en 2020.','historica']
];
aplicar({numero:'1336',fecha:'2026-11-15',records,edits});
