const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const jrc='https://publications.jrc.ec.europa.eu/repository/bitstream/JRC128942/JRC128942_01.pdf';
const etsi5g='https://www.etsi.org/deliver/etsi_ts/138300_138399/138300/19.04.00_60/ts_138300v190400p.pdf';
const oracle26='https://docs.oracle.com/en/java/javase/26/specs/jvms26.pdf';
const oracleApplets='https://docs.oracle.com/javase/tutorial/deployment/applet/appletExecutionEnv.html';
const appletRemoval='https://openjdk.org/jeps/504';
const bitcoin='https://bitcoin.org/bitcoin.pdf';
const academy={
 alternatives:'https://drive.google.com/file/d/1DH-igjyag_aw_p36LaNS1djSWTKTakxb/view?usp=drivesdk',
 radio:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',
 java:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
 blockchain:'https://drive.google.com/file/d/1XPK5LQ9c2kW6a2jqY4Yf9Q366BBcSlGd/view?usp=drivesdk'
};
const records=[
 [7011,[40,41],['II-15'],['TOPSIS','alternativas','solución ideal positiva','solución ideal negativa'],[
  {url:jrc,referencia:'European Commission Joint Research Centre, informe metodológico TOPSIS: la mejor alternativa es la más cercana a la solución ideal positiva y la más lejana de la ideal negativa.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, temas 40 y 41: evaluación de viabilidad, toma de decisión y alternativas de equipamiento.'},
  {url:a2,referencia:'Convocatoria oficial A2 GSI 2025, tema II.15: técnicas de evaluación de alternativas y análisis de viabilidad.'},
  {url:academy.alternatives,referencia:'ITIC Academy, temas 40–42, Alternativas y Rentabilidad de las Inversiones, versión 3.2: sección «Método TOPSIS» formula literalmente la proximidad al ideal positivo y lejanía del ideal negativo.'}
 ],undefined,'Vigente A. TOPSIS ordena alternativas según su cercanía a la solución ideal positiva y su lejanía de la solución ideal negativa. La guía curricular de Academy incluye el método expresamente; se mantienen las otras opciones como descripciones de métodos multicriterio diferentes.','vigente'],
 [7012,[123],['IV-15'],['5G','SA','NSA','5G Core','LTE','EPC'],[
  {url:etsi5g,referencia:'ETSI TS 138 300 / 3GPP TS 38.300 v19.4.0 (Release 19), arquitectura global de 5G NR/NG-RAN; describe opciones de despliegue con 5GC y conectividad NR.'},
  {url:'https://www.gsma.com/solutions-and-impact/technologies/networks/gsma_resources/operator-requirements-for-5g-core-connectivity-options/',referencia:'GSMA, opciones de conectividad 5G definidas por 3GPP: SA conecta NR al núcleo 5G; las opciones NSA emplean dual connectivity LTE/NR y núcleo EPC.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 123: generaciones de tecnologías de comunicaciones móviles.'},
  {url:a2,referencia:'Convocatoria oficial A2 GSI 2025, tema IV.15: generaciones de tecnologías móviles.'},
  {url:academy.radio,referencia:'ITIC Academy, bloque 46 Redes inalámbricas y comunicaciones móviles, versión 2026.1: incluye arquitectura 5G SA/NSA y 5G-Advanced.'}
 ],undefined,'Corregida C. La distinción técnica es de arquitectura: en despliegue SA, NR se conecta al núcleo 5G (5GC); NSA utiliza una arquitectura anclada en LTE/EPC y conectividad dual LTE/NR. Se sustituyó «no requiere ninguna infraestructura 4G» —afirmación absoluta que podía incluir dependencias ajenas a la arquitectura— por una comparación explícita de núcleo y ancla.','corregida'],
 [7013,[67],['III-10'],['Java','bytecode','JVM','class file','código intermedio'],[
  {url:oracle26,referencia:'Especificación Java Virtual Machine (Java SE 26), capítulos 2 y 4: el bytecode reside en el formato class y es representado/ejecutado por la JVM.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 67: entorno de desarrollo Java.'},
  {url:a2,referencia:'Convocatoria oficial A2 GSI 2025, tema III.10: arquitectura Java EE/Jakarta EE, herramientas y funcionamiento.'},
  {url:academy.java,referencia:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, versión 2026.2: separa JVM, bytecode, JDK y javac en el apartado de Java.'}
 ],undefined,'Corregida A. Bytecode es un término genérico para código intermedio de varias plataformas. Para que la clave sea inequívoca, se pregunta por bytecode de Java almacenado en archivos class: lo ejecuta/consume la máquina virtual Java (JVM). No se afirma que la palabra bytecode sea exclusiva de Java.','corregida'],
 [7014,[85],[],['Bitcoin','Proof of Work','PoW','minería','consenso'],[
  {url:bitcoin,referencia:'Satoshi Nakamoto, Bitcoin: A Peer-to-Peer Electronic Cash System: describe la cadena de bloques mediante prueba de trabajo basada en hashing y la decisión de mayoría.'},
  {url:'https://developer.bitcoin.org/devguide/block_chain.html',referencia:'Bitcoin Developer Guide, Block Chain: describe la prueba de trabajo y la selección/validación de la cadena de bloques de Bitcoin.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 85: blockchain y algoritmos de consenso.'},
  {url:academy.blockchain,referencia:'ITIC Academy, bloque 85 Blockchain, versión 2026: explica Proof of Work como el algoritmo usado por Bitcoin y lo diferencia de Proof of Stake.'}
 ],undefined,'Vigente D. Bitcoin utiliza prueba de trabajo (PoW) para proponer bloques y proteger la cadena; sus reglas de selección permiten que los nodos acuerden el historial válido. Se formula como mecanismo de consenso/minería, sin sugerir que PoW por sí solo describa toda la lógica de consenso distribuido. No se asigna epígrafe A2 directamente equivalente.','vigente'],
 [7015,[67],['III-10'],['applets Java','ejecución en cliente','Java Plug-in','histórico','JDK 26'],[
  {url:oracleApplets,referencia:'Oracle Java Tutorials (JDK 8, histórico): un applet se ejecutaba en el contexto del navegador mediante Java Plug-in y una JVM/JRE del cliente.'},
  {url:appletRemoval,referencia:'OpenJDK JEP 504: la API java.applet se elimina en JDK 26; los navegadores ya habían retirado los plug-ins Java. El modelo de applets web es legado.'},
  {url:'https://docs.oracle.com/en/java/javase/26/migrate/significant-changes-jdk-26-release.html',referencia:'Oracle JDK 26 Migration Guide: confirma que el Applet API, deprecado para eliminación en JDK 17, se elimina en JDK 26.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 67: entorno de desarrollo Java.'},
  {url:a2,referencia:'Convocatoria oficial A2 GSI 2025, tema III.10: arquitectura Java EE/Jakarta EE.'},
  {url:academy.java,referencia:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, versión 2026.2: trata la plataforma Java/JVM; no presenta applets como tecnología web vigente. Cotejo de contexto, no de contenido concreto.'}
 ],undefined,'Histórica B. En el modelo clásico, el applet se cargaba en el cliente y el plug-in del navegador lo ejecutaba en una JVM/JRE cliente, no en el servidor web. La pregunta se acota explícitamente a applets Java legados: Java Applet API se eliminó en JDK 26 y los navegadores ya habían dejado de admitir el plug-in, por lo que no se presenta como arquitectura actual.','historica']
];
const edits={
 7011:{texto:'En el método TOPSIS de decisión entre alternativas, ¿qué característica debe reunir la alternativa preferida?',opciones:['Estar lo más cerca posible de la solución ideal positiva y lo más lejos posible de la solución ideal negativa.','Comparar únicamente permutaciones con evaluaciones ordinales, sin distancia a soluciones de referencia.','Usar índices de concordancia y discordancia para comparar pares de alternativas.','Ignorar la magnitud de las diferencias entre alternativas y considerar solo si existen.'],respuesta_correcta:0},
 7012:{texto:'En la arquitectura 5G, ¿qué modo conecta la red de acceso NR al núcleo 5G (5GC), sin usar LTE/EPC como ancla de acceso?',opciones:['5G woLTE.','5G NLTE.','5G Standalone (SA).','5G Non-Standalone (NSA).'],respuesta_correcta:2},
 7013:{texto:'En la compilación estándar de Java, ¿qué componente ejecuta el bytecode contenido en los archivos .class?',opciones:['La máquina virtual Java (JVM).','Common Language Runtime (CLR) de .NET.','Un intérprete de JavaScript del navegador.','El servidor de bases de datos.'],respuesta_correcta:0},
 7014:{texto:'¿Qué mecanismo utiliza Bitcoin desde sus primeros bloques para demostrar el trabajo realizado al proponer bloques y proteger la cadena?',opciones:['Proof of Consensus (PoC).','Proof of Partnership (PoP).','Proof of Job (PoJ).','Proof of Work (PoW).'],respuesta_correcta:3},
 7015:{texto:'En la arquitectura histórica de applets Java web, ¿dónde se ejecutaba el código del applet?',opciones:['En el servidor web.','En el cliente, mediante el plug-in y una JVM/JRE cliente.','En el servidor de bases de datos.','En el servidor de webmail.'],respuesta_correcta:1}
};
aplicar({numero:'1338',fecha:'2026-11-15',records,edits});
