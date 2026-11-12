const fs=require('node:fs'),path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const records=[
 [5371,[47,125],['II-13'],['fijación de sesión','session fixation','XSS','HTTPS'],[
  {url:'https://owasp.org/www-community/attacks/Session_fixation',referencia:'OWASP Session Fixation: the attacker causes a victim to use a session identifier known to the attacker; XSS may be one way of setting/injecting it.'},
  {url:'https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html',referencia:'OWASP Session Management Cheat Sheet: TLS protects against some in-transit manipulation but is not a complete defense against all session-fixation paths; renew the session ID after authentication.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, temas 47 (riesgos de seguridad) y 125 (ataques y seguridad de red).'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema II.13, seguridad lógica y herramientas de ciberseguridad.'},
  {url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',referencia:'ITIC Academy, bloque 48 Seguridad de redes y aplicación, 2026: XSS y ataques de gestión de sesión; cotejo curricular directo.'}
 ],null,'La respuesta falsa sigue siendo D, ahora formulada como «HTTPS por sí solo impide cualquier fijación». TLS puede frustrar manipulación del identificador en tránsito, pero no toda fijación; además de XSS, pueden existir otros vectores. La defensa fundamental es renovar el identificador al autenticar y proteger el ciclo de vida de sesión.','corregida'],
 [5372,[116],['IV-14'],['SIP','VoIP','señalización'],[
  {url:'https://www.rfc-editor.org/rfc/rfc3261.html',referencia:'IETF RFC 3261, SIP: Session Initiation Protocol, estándar de señalización/control de capa de aplicación para crear, modificar y terminar sesiones, incluidas llamadas de telefonía por Internet.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 116: NGN/IMS, VoIP y comunicaciones convergentes.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema IV.14: NGN/IMS y servicios convergentes.'},
  {url:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',referencia:'ITIC Academy, bloque 43 Protocolos 2026: señalización SIP, VoIP y redes convergentes; cotejo curricular directo.'}
 ],null,'Respuesta A. SIP es un protocolo de señalización/control para establecer, modificar y terminar sesiones multimedia; VDSL es acceso de banda ancha, IMAP es acceso a correo y POTS es telefonía analógica tradicional.','vigente'],
 [5373,[80,81],['IV-12'],['sellado de tiempo','TSA','firma electrónica','PKI'],[
  {url:'https://www.rfc-editor.org/rfc/rfc3161.html',referencia:'IETF RFC 3161, §2: una Time-Stamp Authority (TSA), tercera parte de confianza, emite tokens que prueban que un dato existía antes de un instante determinado.'},
  {url:'https://eur-lex.europa.eu/eli/reg/2014/910/oj',referencia:'Reglamento eIDAS (UE) 910/2014, art. 3.33–3.34 y art. 41: define sello electrónico de tiempo y sus efectos; en el régimen jurídico, el proveedor de servicios de confianza crea y expide sellos cualificados.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, temas 80–81: identificación y firma electrónica, servicios de confianza y PKI.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema IV.12: técnicas criptográficas, protocolos seguros y mecanismos de firma digital.'},
  {url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',referencia:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma 2026.1: PKI, certificados, firma y servicios de confianza; cotejo curricular directo.'}
 ],null,'Respuesta C: Time Stamp Authority (TSA). Se corrige la grafía inglesa de las opciones. En eIDAS la figura jurídica es el prestador de servicios de confianza que crea y expide sellos; TSA es el término técnico de RFC 3161 para el emisor de tokens de sellado.','corregida'],
 [5374,[59],[ 'II-2'],['dispatching','dispatcher','planificación de CPU','sistemas operativos'],[
  {url:'https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched.pdf',referencia:'Arpaci-Dusseau y Arpaci-Dusseau, Operating Systems: Three Easy Pieces, capítulo CPU Scheduling: el scheduler selecciona el proceso; el dispatcher materializa la decisión y transfiere el control.'},
  {url:'https://pages.cs.wisc.edu/~bart/537/lecturenotes/s3.html',referencia:'University of Wisconsin CS 537, notas de Dispatching: separa la política de selección del scheduler del mecanismo de cambio/transferencia del dispatcher.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 59: conceptos y fundamentos de sistemas operativos.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema II.2: sistemas operativos y sus fundamentos.'},
  {url:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',referencia:'ITIC Academy, bloque Sistemas Operativos 59–62, actualización 2026: procesos, planificación y fundamentos de SO; cotejo curricular directo.'}
 ],null,'Se precisa la distinción: el planificador elige el proceso; el despachador realiza el traspaso de CPU al seleccionado (cambio de contexto, modo usuario y reanudación). La respuesta A se reescribe para definir el mecanismo, no la decisión de planificación.','corregida'],
 [5375,[70],['III-5'],['Sobel','detección de bordes','visión artificial','procesamiento de imágenes'],[
  {url:'https://homepages.inf.ed.ac.uk/rbf/HIPR2/sobel.htm',referencia:'University of Edinburgh, HIPR: el operador Sobel calcula el gradiente espacial 2D y resalta regiones de alta frecuencia espacial que corresponden a bordes.'},
  {url:'https://ai.stanford.edu/~nilsson/QAI/qai.pdf',referencia:'Nils J. Nilsson, The Quest for Artificial Intelligence, §9.3: describe los dos kernels Sobel para gradientes horizontal y vertical y detección de cambios abruptos de intensidad.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 70: visión artificial y áreas de aplicación de IA.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema III.5: fundamentos de IA, tecnologías asociadas y áreas de aplicación.'},
  {url:'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk',referencia:'ITIC Academy, bloque 32 Inteligencia Artificial y Ciencia de Datos, temario 2026: visión artificial; cotejo curricular directo.'}
 ],null,'Respuesta D. Sobel estima derivadas horizontales y verticales de intensidad; su magnitud permite localizar transiciones que se interpretan como bordes. No es, por sí solo, un filtro de eliminación de ruido ni un método de esqueletización.','vigente']
];
const edits={
 5371:{texto:'¿Cuál de las siguientes afirmaciones sobre la fijación de sesión es FALSA?',opciones:['Un atacante puede intentar fijar un identificador de sesión conocido antes de que la víctima se autentique.','El ataque puede aprovechar XSS u otro vector para hacer que el navegador use un identificador elegido o conocido por el atacante.','Si la aplicación no renueva el identificador al autenticar, el atacante puede reutilizar la sesión fijada.','Usar HTTPS por sí solo impide cualquier ataque de fijación de sesión.']},
 5373:{texto:'Según RFC 3161, ¿cómo se denomina la autoridad técnica que emite tokens de sellado de tiempo para acreditar que un dato existía antes de un instante?',opciones:['Time Public Key Infrastructure (Time PKI).','Time Certificate Authority (TCA).','Time-Stamp Authority (TSA).','Time Escrow Infrastructure (TEI).']},
 5374:{texto:'En sistemas operativos, ¿qué describe el mecanismo de dispatching (despacho de procesos)?',opciones:['Transfiere el control de la CPU al proceso elegido por el planificador, mediante el cambio de contexto y la reanudación de su ejecución.','Decide la política y el orden con que el planificador de corto plazo selecciona procesos.','Gestiona todas las colas de peticiones de entrada/salida del ordenador.','Asigna cada instrucción a un procesador concreto en sistemas multiprocesador.']}
};
const logFile=path.join(__dirname,'cambios-lote-1010.json');
if(!fs.existsSync(logFile))aplicar({numero:'1010',fecha:'2026-11-12',records,edits});
const bankFile=path.join(__dirname,'..','preguntas_preparatic.json'),data=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
const academy={
 5371:'ITIC Academy, bloque 48 Seguridad de redes y aplicación 2026: XSS, ataques web y seguridad de gestión de sesión; cotejo curricular directo.',
 5372:'ITIC Academy, bloque 43 Protocolos 2026: señalización SIP, VoIP y redes convergentes; cotejo curricular directo.',
 5373:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma 2026.1: PKI, firma y servicios de confianza; cotejo curricular directo.',
 5374:'ITIC Academy, bloque Sistemas Operativos 59–62, actualización 2026: procesos, planificación y fundamentos de SO; cotejo curricular directo.',
 5375:'ITIC Academy, bloque 32 Inteligencia Artificial y Ciencia de Datos, temario 2026: visión artificial; cotejo curricular directo.'
};
for(const c of log.cambios){const q=data.preguntas.find(q=>q.id===c.id),record=records.find(r=>r[0]===c.id);q.revision.estado=record[7];q.revision.observaciones=record[6];q.comentarios=record[6];q.clasificacion.bloque_academia=academy[c.id];q.clasificacion.nota='Cotejo curricular directo en el material académico de ITIC Academy indicado en revision/README.md; la respuesta se contrastó con las fuentes técnicas de la ficha.';c.actualizada=structuredClone(q)}
fs.writeFileSync(bankFile,JSON.stringify(data,null,2)+'\n');fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
