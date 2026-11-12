const fs=require('node:fs'),path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const records=[
 [5396,[79],['IV-12'],['DES','cifrado simétrico','56 bits','histórico','16 rondas'],[
  {url:'https://csrc.nist.gov/pubs/fips/46-3/final',referencia:'NIST FIPS 46-3: documenta DES y TDEA; DES usa bloques de 64 bits, clave efectiva de 56 bits y estructura de 16 rondas. NIST retiró el estándar en 2005.'},
  {url:'https://csrc.nist.gov/news/2005/withdrawal-of-fips-46-3-fips-74-and-fips-81',referencia:'NIST, aviso de retirada: DES ya no proporcionaba la seguridad necesaria para proteger información gubernamental.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 79: algoritmos simétricos y asimétricos de cifrado.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema IV.12: técnicas criptográficas y protocolos seguros.'},
  {url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',referencia:'ITIC Academy, bloque 36 Seguridad y Criptografía 2026: algoritmos de cifrado simétrico; cotejo curricular directo.'}
 ],null,'DES es un cifrador simétrico de clave secreta compartida entre emisor y receptor; emplea 56 bits efectivos y 16 rondas. La única afirmación no aplicable es que sea de clave pública (D). Se clasifica como histórico: NIST retiró FIPS 46-3 en 2005 por insuficiente seguridad; no se presenta como algoritmo seguro de uso actual.','historica'],
 [5397,[54],['II-1'],['ratón inalámbrico','radiofrecuencia 2,4 GHz','Bluetooth'],[
  {url:'https://support.logi.com/hc/en-us/articles/360053565493-Specification-MX-Anywhere-3-Wireless-Mouse',referencia:'Especificaciones Logitech MX Anywhere 3: enlaces inalámbricos con receptor USB a 2,4 GHz y Bluetooth Low Energy.'},
  {url:'https://support.logi.com/hc/en-us/articles/360024700233-Pebble-M350-Technical-Specifications',referencia:'Logitech Pebble M350: radio de 2,4 GHz y BLE figuran como modos de conexión; ejemplifica que Bluetooth también utiliza radio en 2,4 GHz.'},
  {url:'https://www.bluetooth.com/wp-content/uploads/Files/Specification/HTML/Core_v6.3/out/en/br-edr-controller/radio-physical-layer-specification.html',referencia:'Bluetooth Core Specification 6.3: Bluetooth opera en la banda ISM de 2,4 GHz (2.400–2.483,5 MHz).'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 54: dispositivos personales y conectividad.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema II.1: tecnologías actuales de ordenadores y dispositivos.'},
  {url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',referencia:'ITIC Academy, bloque 26 Hardware, servidores y almacenamiento 2026: dispositivos y conectividad de equipos; cotejo curricular general, sin epígrafe localizado sobre ratones.'}
 ],null,'Los ratones inalámbricos actuales suelen conectarse mediante un enlace de radio propietario (a menudo con receptor USB en 2,4 GHz) o Bluetooth, que también opera en esa banda. Se elimina la clasificación ambigua y no exhaustiva del original, que mezclaba banda, protocolo y una técnica heredada de disponibilidad no generalizable. Respuesta A.','corregida'],
 [5398,[67,122],['III-10'],['JNDI','Java','nombres','servicios de directorio'],[
  {url:'https://www.oracle.com/java/technologies/jndi-overview.html',referencia:'Oracle JNDI Overview: API de Java que proporciona funcionalidades de naming y directorio; permite operaciones estándar de consulta y búsqueda de atributos.'},
  {url:'https://docs.oracle.com/javase/tutorial/jndi/overview/naming.html',referencia:'Oracle Java Tutorial, Naming Package: javax.naming define clases e interfaces para acceder a servicios de nombres; las operaciones centrales incluyen lookup, bind y renombrado.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 67 (Java) y tema 122 (servicios de directorio).'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema III.10: arquitectura y herramientas Java EE/Jakarta EE.'},
  {url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',referencia:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información 2026: Java/Jakarta EE; cotejo curricular directo del ámbito Java, sin lección específica de JNDI.'}
 ],null,'JNDI significa Java Naming and Directory Interface y ofrece a las aplicaciones Java acceso a servicios de nombres y directorio mediante una API común, independiente del proveedor del servicio. Se conserva la respuesta A.','vigente'],
 [5399,[65],['III-12'],['idempotencia','HTTP','REST','reintentos seguros'],[
  {url:'https://www.rfc-editor.org/rfc/rfc9110.html#section-9.2.2',referencia:'IETF RFC 9110 §9.2.2: un método es idempotente si el efecto previsto de múltiples solicitudes idénticas en el servidor es el mismo que el de una; PUT, DELETE y métodos seguros son idempotentes. Las respuestas y efectos secundarios de registro pueden variar.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 65: desarrollo web y conexión a servicios.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema III.12: aplicaciones web, protocolos y servicios.'},
  {url:'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk',referencia:'ITIC Academy, bloque 28 Arquitectura SOA y requisitos no funcionales 2026: procesamiento distribuido/servicios; cotejo contextual, sin epígrafe localizado sobre idempotencia HTTP.'}
 ],null,'Idempotencia significa que repetir una operación con la misma entrada produce el mismo efecto previsto que ejecutarla una sola vez; no que cualquier resultado o respuesta observada sea siempre idéntica. En HTTP, RFC 9110 clasifica como idempotentes PUT, DELETE y los métodos seguros, aunque pueden diferir registros internos o respuestas. Se precisa la definición.','corregida'],
 [5400,[83],['II-16'],['kerning','tipografía','espaciado entre caracteres','OCR'],[
  {url:'https://helpx.adobe.com/indesign/desktop/format-and-style-text/tabs-indents-and-spacing/about-kerning-and-tracking.html',referencia:'Adobe InDesign, Kerning and tracking: kerning ajusta el espaciado entre pares concretos de caracteres para controlar la apariencia tipográfica.'},
  {url:'https://helpx.adobe.com/illustrator/desktop/design-with-text/edit-format-text/adjust-kerning.html',referencia:'Adobe Illustrator: kerning controla el espacio entre pares específicos de caracteres; se distingue del tracking, aplicado a un conjunto de texto.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 83: tratamiento de imágenes y tecnologías de digitalización; relación contextual con el enunciado OCR.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema II.16: gestión documental y contenidos; relación contextual, sin epígrafe de tipografía.'},
  {url:'https://drive.google.com/file/d/1xTMCpPmwNi8hpb0nZ3sMqpgvrhLXT-yf/view?usp=drivesdk',referencia:'ITIC Academy, bloque 37 Imágenes, OCR, Biometría y Gestión de Contenidos 2026: OCR y tratamiento de imágenes; cobertura contextual, sin desarrollo localizado de kerning.'}
 ],null,'Kerning es un ajuste tipográfico de espacio entre pares específicos de caracteres (normalmente letras) para mejorar el equilibrio visual; no es una operación propia del reconocimiento OCR. Se conserva la opción D, pero se corrige la atribución: el enunciado ahora pregunta por tipografía. El programa A2 no incluye un tema específico de kerning y no se fuerza una equivalencia técnica.','corregida']
];
const edits={
 5397:{texto:'¿Qué conexiones inalámbricas suelen ofrecer los ratones para PC actuales?',opciones:['Radio propietaria, a menudo mediante receptor USB en 2,4 GHz, y Bluetooth.','Solo Wi-Fi Direct en 5 GHz e infrarrojos.','Únicamente infrarrojos con línea de visión.','No existen ratones inalámbricos por problemas de estabilidad.'],respuesta_correcta:0},
 5399:{texto:'En el contexto de una operación de servicio web/HTTP, ¿qué significa que repetir la misma operación sea idempotente?',opciones:['Que tiene prioridad sobre cualquier otra operación.','Que cualquier operación tiene más prioridad que ella.','Que el efecto previsto de repetir la misma solicitud es siempre distinto.','Que múltiples solicitudes idénticas tienen el mismo efecto previsto que una sola, aunque la respuesta observada pueda variar.']},
 5400:{texto:'En tipografía —no como etapa del reconocimiento óptico de caracteres—, el kerning consiste en ajustar el espacio entre:',opciones:['bloques en los que se encuentra dividida una página.','líneas de texto.','palabras de una línea de texto.','pares de caracteres, normalmente letras.']}
};
const academy={
 5396:'ITIC Academy, bloque 36 Seguridad y Criptografía 2026: cifradores simétricos; cotejo curricular directo. El material se usa como temario, no como recomendación de seguridad actual para DES.',
 5397:'ITIC Academy, bloque 26 Hardware y dispositivos 2026: conectividad de dispositivos personales; cotejo curricular general, sin epígrafe localizado de ratones.',
 5398:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información 2026: Java/Jakarta EE; cobertura curricular contextual, sin lección específica de JNDI.',
 5399:'ITIC Academy, bloque 28 Arquitectura SOA y requisitos no funcionales 2026: servicios y procesamiento distribuido; cobertura contextual, no se localizó epígrafe de idempotencia HTTP.',
 5400:'ITIC Academy, bloque 37 Imágenes, OCR, Biometría y Gestión de Contenidos 2026: OCR/tratamiento de imágenes; cobertura contextual, sin apartado localizado sobre kerning tipográfico.'
};
const logFile=path.join(__dirname,'cambios-lote-1015.json');
if(!fs.existsSync(logFile)) aplicar({numero:'1015',fecha:'2026-11-12',records,edits});
const bankFile=path.join(__dirname,'..','preguntas_preparatic.json'),data=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
for(const c of log.cambios){const q=data.preguntas.find(q=>q.id===c.id),record=records.find(r=>r[0]===c.id);q.revision.estado=record[7];q.revision.observaciones=record[6];q.comentarios=record[6];q.clasificacion.bloque_academia=academy[c.id];q.clasificacion.nota='Clasificación cotejada con el programa oficial; ITIC Academy se usa como mapa curricular cuando se indica, no como autoridad técnica o normativa.';c.actualizada=structuredClone(q)}
fs.writeFileSync(bankFile,JSON.stringify(data,null,2)+'\n');fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
