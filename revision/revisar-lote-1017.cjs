const fs=require('node:fs'),path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const records=[
 [5406,[59],['II-2'],['Linux','X Window System','gestores de ventanas','IceWM','Fluxbox','FVWM'],[
  {url:'https://ice-wm.org/',referencia:'Proyecto IceWM: se define expresamente como window manager del X Window System.'},
  {url:'https://fluxbox.org/',referencia:'Proyecto Fluxbox: window manager para X, derivado de Blackbox.'},
  {url:'https://www.fvwm.org/',referencia:'Proyecto FVWM: virtual window manager para el sistema X Window.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 59: sistemas operativos y fundamentos.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema II.2: sistemas operativos, Linux y administración.'},
  {url:'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk',referencia:'ITIC Academy, bloque 47 Aplicaciones Móviles y Sistemas Operativos 2026: Linux y fundamentos de sistemas operativos; cotejo curricular contextual, sin tratamiento localizado de esos gestores concretos.'}
 ],null,'IceWM, Fluxbox y FVWM son gestores (window managers) de ventanas para X Window System; no son sistemas de ayuda de KDE ni, por sí solos, entornos de escritorio completos. Se formula como categoría del sistema X, sin limitar el uso exclusivamente a Linux. Respuesta D.','vigente'],
 [5407,[56],['IV-5'],['Blu-ray','velocidad 1X','transferencia de datos','discos ópticos'],[
  {url:'https://docs.connect.panasonic.com/blu-ray_disc/',referencia:'Panasonic, especificaciones Blu-ray: tasa de transferencia de datos 36 Mb/s (1X), equivalente a 4,5 MB/s usando 8 bits por byte.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 56: dispositivos de almacenamiento y tratamiento de información.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema IV.5: almacenamiento de datos, tipos, componentes y administración.'},
  {url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',referencia:'ITIC Academy, bloque 26 Hardware, CPD y almacenamiento 2026: medios/dispositivos de almacenamiento; cotejo contextual, sin referencia localizada a la tasa concreta Blu-ray 1X.'}
 ],null,'La tasa base de Blu-ray 1X es 36 Mbit/s; dividida entre ocho equivale a 4,5 MB/s (unidades decimales). Se mantiene B y se explicita la equivalencia para evitar confusión entre bits y bytes.','vigente'],
 [5408,[80,122],[],['LDAP','X.500','ASN.1','BER','TCP/IP','directorio'],[
  {url:'https://www.rfc-editor.org/rfc/rfc4511.html',referencia:'IETF RFC 4511: LDAPv3 expresa los mensajes mediante ASN.1, codifica con BER y define LDAP sobre TCP; el diseño no requiere una infraestructura de red OSI.'},
  {url:'https://www.itu.int/rec/T-REC-X.500-201910-I',referencia:'ITU-T Recommendation X.500 (2019): especificación de Directory, conceptos, modelos y servicios en el marco OSI.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 80 incluye protocolos de directorio basados en LDAP y X.500; tema 122, servicios de directorio.'},
  {url:'https://drive.google.com/file/d/1nHGBMG4P3il5v4hZ1-RKdHmGzUPiwqnA/view?usp=drivesdk',referencia:'ITIC Academy, bloque 45 Correo, Mensajería y Servicios de Directorio 2026: X.500 y LDAP; cotejo curricular directo.'}
 ],null,'La opción D es incorrecta: aunque X.500 nació en el entorno OSI, LDAP se diseñó como protocolo ligero de acceso a directorio sobre TCP/IP; RFC 4511 define su transporte por TCP. Las opciones A y B describen correctamente los organismos responsables y la codificación ASN.1/BER. Se afina el enunciado para fijar LDAPv3. No se fuerza clasificación A2, cuyo programa no contiene un tema específico de X.500/LDAP.','corregida'],
 [5409,[65,67],['III-10','III-12'],['Jakarta Servlet','cookies','Cookie','HttpServletRequest','HttpServletResponse'],[
  {url:'https://jakarta.ee/specifications/servlet/6.1/apidocs/jakarta.servlet/jakarta/servlet/http/Cookie.html',referencia:'Jakarta Servlet 6.1 API, Cookie: constructor para crear una cookie y propiedades para configurar sus atributos.'},
  {url:'https://jakarta.ee/specifications/servlet/6.1/apidocs/jakarta.servlet/jakarta/servlet/http/HttpServletResponse.html',referencia:'Jakarta Servlet 6.1 API, HttpServletResponse.addCookie: añade la cookie a las cabeceras de respuesta para enviarla al cliente.'},
  {url:'https://jakarta.ee/specifications/servlet/6.1/apidocs/jakarta.servlet/jakarta/servlet/http/HttpServletRequest.html',referencia:'Jakarta Servlet 6.1 API, HttpServletRequest.getCookies: recupera las cookies que envía el cliente en la solicitud.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, temas 65 y 67: desarrollo web en servidor y plataforma Java.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, temas III.10 y III.12: Jakarta EE y aplicaciones web.'},
  {url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',referencia:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información 2026: Jakarta EE, servlets y aplicaciones web; cotejo curricular directo.'}
 ],null,'La API Servlet permite crear una Cookie (constructor), configurar sus atributos y agregarla a la respuesta con HttpServletResponse.addCookie; el cliente devuelve cookies que pueden leerse con HttpServletRequest.getCookies. Por tanto no se limita a leerlas y la respuesta C es correcta. Se interpreta «crear» como crear y enviar una cookie HTTP mediante la API.','vigente'],
 [5410,[74],[],['SIG','ráster','celdas','píxeles','modelo vectorial'],[
  {url:'https://support.esri.com/en-us/gis-dictionary/raster',referencia:'Esri GIS Dictionary, raster: matriz de celdas/píxeles de igual tamaño dispuestas en filas y columnas; cada celda representa una localización y almacena un valor.'},
  {url:'https://doc.esri.com/en/arcgis-pro/latest/help/data/imagery/introduction-to-raster-data.html',referencia:'ArcGIS Pro Documentation: el ráster es una matriz regular de píxeles/celdas en filas y columnas; contrasta con datos vectoriales geométricos.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 74: sistemas de información geográfica, conceptos y funcionalidad.'},
  {url:'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk',referencia:'ITIC Academy, bloque 33 E-learning y Sistemas de Información Geográfica 2026: modelos de datos GIS, ráster y vectorial; cotejo curricular directo.'}
 ],null,'La realidad representada como matriz regular de celdas/píxeles, cada una asociada a una localización y un valor, es el modelo ráster. El vectorial almacena geometrías como puntos, líneas y polígonos; la imagen multiespectral describe bandas/espectro y no la estructura de teselado. Se conserva la respuesta B.','vigente']
];
const edits={
 5406:{texto:'En el X Window System, ¿qué categoría de software representan IceWM, Fluxbox y FVWM?',opciones:['Sistemas de ayuda de KDE.','Interfaz gráfica completa de usuario.','Entornos de escritorio completos.','Gestores de ventanas (window managers).']},
 5407:{texto:'¿Cuál es la velocidad de transferencia base de Blu-ray 1X, expresada en megabytes decimales por segundo (MB/s)?',opciones:['54 Mbit/s.','4,5 MB/s.','36 MB/s.','9 MB/s.']},
 5408:{texto:'Sobre LDAPv3 y X.500, señale la afirmación incorrecta:',opciones:['LDAP es una especificación de IETF y X.500 pertenece a la serie de recomendaciones ITU-T.','LDAP define sus mensajes con ASN.1 y utiliza BER para codificarlos.','X.500 define servicios y modelos de directorio en el marco de referencia OSI.','LDAP se diseñó para requerir las capas y la pila de red OSI de X.500.']},
 5410:{texto:'En un SIG, ¿cómo se denomina el modelo que representa la realidad como una matriz regular de celdas o píxeles, cada uno con un valor asociado?',opciones:['Proyección cartográfica.','Ráster.','Vectorial.','Imagen multiespectral.']}
};
const academy={
 5406:'ITIC Academy, bloque 47 Aplicaciones Móviles y Sistemas Operativos 2026: Linux y fundamentos de SO; cotejo contextual, sin contenido específico de IceWM/Fluxbox/FVWM.',
 5407:'ITIC Academy, bloque 26 Hardware, CPD y almacenamiento 2026: medios de almacenamiento; cobertura contextual, sin dato localizado sobre Blu-ray 1X.',
 5408:'ITIC Academy, bloque 45 Correo, Mensajería y Servicios de Directorio 2026: X.500 y LDAP; cotejo curricular directo.',
 5409:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información 2026: Jakarta EE, servlets y aplicaciones web; cotejo curricular directo.',
 5410:'ITIC Academy, bloque 33 E-learning y Sistemas de Información Geográfica 2026: modelos GIS raster/vector; cotejo curricular directo.'
};
const logFile=path.join(__dirname,'cambios-lote-1017.json');
if(!fs.existsSync(logFile)) aplicar({numero:'1017',fecha:'2026-11-12',records,edits});
const bankFile=path.join(__dirname,'..','preguntas_preparatic.json'),data=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
for(const c of log.cambios){const q=data.preguntas.find(q=>q.id===c.id),record=records.find(r=>r[0]===c.id);q.revision.estado=record[7];q.revision.observaciones=record[6];q.comentarios=record[6];q.clasificacion.bloque_academia=academy[c.id];q.clasificacion.nota='Clasificación cotejada con el programa oficial; ITIC Academy se usa como mapa curricular cuando se indica, no como autoridad técnica o normativa.';c.actualizada=structuredClone(q)}
fs.writeFileSync(bankFile,JSON.stringify(data,null,2)+'\n');fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
