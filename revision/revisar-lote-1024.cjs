const fs=require('node:fs'),path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const records=[
 [5441,[79],['IV-12'],['contraseñas','salt','sal criptográfica','KDF','resistencia a ataques offline'],[
  {url:'https://pages.nist.gov/800-63-4/sp800-63b.html',referencia:'NIST SP 800-63B-4 final, §3.1.1.2: almacenar secretos memorizados con salt y función adecuada de derivación de claves; la función y su factor de coste encarecen cada intento de adivinación. La sal debe minimizar colisiones y almacenarse con el resumen.'},
  {url:'https://csrc.nist.gov/glossary/term/hash_function',referencia:'NIST CSRC Glossary: define la función hash criptográfica y su salida de longitud fija; no atribuye al salt la lentitud del algoritmo.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 79: funciones hash y criptografía.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema IV.12: técnicas criptográficas y protocolos seguros.'},
  {url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',referencia:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma 2026.1, sección 4: funciones hash y KDF de contraseñas; cobertura directa.'}
 ],null,'Se corrige la respuesta a B. Una sal se combina con la contraseña antes de calcular el hash/KDF, debe ser distinta por secreto y no necesita ser secreta. Su función principal es impedir que hashes iguales revelen contraseñas repetidas y neutralizar tablas precalculadas; no hace por sí sola más costoso cada intento. El coste de una función apropiada de derivación/hash de contraseñas (parámetros de memoria/iteraciones) es lo que ralentiza la adivinación.','corregida'],
 [5442,[80],['I-6'],['XAdES','firmas XML','ETSI EN 319 132-1','formatos de firma electrónica'],[
  {url:'https://www.etsi.org/deliver/etsi_en/319100_319199/31913201/01.03.01_60/en_31913201v010301p.pdf',referencia:'ETSI EN 319 132-1 V1.3.1, Building blocks and XAdES baseline signatures: perfiles de firma electrónica avanzada basados en XML.'},
  {url:'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32026R0248',referencia:'Reglamento de Ejecución (UE) 2026/248: identifica el perfil XAdES Baseline como ETSI EN 319 132-1.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 80: formatos de firma electrónica y servicios de confianza.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema I.6: firma electrónica, eIDAS y marco nacional.'},
  {url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',referencia:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma 2026.1, apartado 8: formatos CAdES, XAdES, PAdES y ASiC; cotejo directo.'}
 ],null,'La respuesta C, XAdES, es correcta para las firmas XML. Se reemplazan las grafías incorrectas de los distractores por familias reales para que la discriminación dependa del formato: CAdES se basa en CMS, PAdES se orienta a PDF, XAdES a XML y ASiC a contenedores asociados. ETSI y el acto europeo citado reconocen el perfil XAdES actual.','corregida'],
 [5443,[80],['I-6'],['DNI electrónico','OCSP','Online Certificate Status Protocol','validación de certificados','Autoridad de Validación'],[
  {url:'https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_290',referencia:'Portal oficial DNIe, Verificación: la prestación de validación de certificados DNIe se realiza mediante OCSP; describe la consulta de estado a la Autoridad de Validación.'},
  {url:'https://www.rfc-editor.org/rfc/rfc6960.html',referencia:'IETF RFC 6960: especificación del protocolo Online Certificate Status Protocol (OCSP) para obtener el estado de certificados X.509.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 80: certificados digitales, validación e identificación electrónica.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema I.6: DNI electrónico, identidad y firma electrónica.'},
  {url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',referencia:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma 2026.1, apartados 9 y 11: certificados, OCSP/CRL, DNIe y VALIDe.'}
 ],null,'La respuesta A es correcta: el portal del DNIe indica que sus servicios de validación consultan el estado del certificado mediante OCSP. OCSP obtiene el estado de un certificado concreto a través de una Autoridad de Validación; no es un protocolo genérico llamado “Online Services Protocol”.','vigente'],
 [5444,[118],['II-2','IV-1','IV-9'],['Active Directory','GPO','Preferencias de directiva de grupo','Usuarios y grupos locales','Windows LAPS'],[
  {url:'https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/group-policy/group-policy-preferences',referencia:'Microsoft Learn, Group Policy preferences: la extensión Local Users and Groups permite crear, modificar o eliminar cuentas y grupos locales; configuración de equipo aplica a los equipos objetivo.'},
  {url:'https://techcommunity.microsoft.com/blog/coreinfrastructureandsecurityblog/using-group-policy-preferences-to-manage-the-local-administrator-group/259223/',referencia:'Microsoft Core Infrastructure and Security Blog: ruta del editor GPO Computer Configuration > Preferences > Control Panel Settings para gestionar pertenencia al grupo local Administrators.'},
  {url:'https://learn.microsoft.com/en-us/security-updates/SecurityBulletins/2014/ms14-025',referencia:'Microsoft Security Bulletin MS14-025: la actualización eliminó la capacidad de configurar/distribuir contraseñas en preferencias afectadas, incluidas Local Users and Groups, por exposición de credenciales.'},
  {url:'https://learn.microsoft.com/en-us/windows-server/identity/laps/laps-overview',referencia:'Microsoft Learn, Windows LAPS: administra y respalda automáticamente contraseñas únicas de cuentas de administrador local en equipos unidos a AD DS o Entra.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 118: administración de redes LAN y gestión de usuarios en redes locales.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, temas II.2 (administración de Windows) y IV.9 (gestión de usuarios y dispositivos en redes locales).'},
  {url:'https://drive.google.com/file/d/1nHGBMG4P3il5v4hZ1-RKdHmGzUPiwqnA/view?usp=drivesdk',referencia:'ITIC Academy, bloque 45 Correo, mensajería y servicios de directorio 2026.1, sección 11: AD DS y Group Policy; cotejo contextual, sin detalle de esta ruta de GPMC.'}
 ],null,'Se mantiene A, y se concreta la ruta vigente del editor de administración de directivas de grupo: Configuración del equipo > Preferencias > Configuración del panel de control > Usuarios y grupos locales. Esta preferencia puede crear/modificar usuarios y grupos, pero no debe usarse para distribuir contraseñas: MS14-025 retiró esa capacidad por riesgo de exposición. Para gestionar credenciales de administrador local, Windows LAPS es la solución de Microsoft.','corregida'],
 [5445,[27],['I-7'],['RGPD','Delegado de Protección de Datos','responsable del tratamiento','encargado del tratamiento','artículo 37'],[
  {url:'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32016R0679',referencia:'Reglamento (UE) 2016/679, art. 37.1: el responsable y el encargado designarán un DPD en los supuestos enumerados; el art. 37.4 permite/designa además según Derecho UE o nacional.'},
  {url:'https://www.aepd.es/guias/guia-delegado-de-proteccion-de-datos.pdf',referencia:'AEPD, Guía del Delegado de Protección de Datos: explica designación por responsables y encargados y cuándo es obligatoria.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 27: RGPD, responsables, encargados y obligaciones de protección de datos.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema I.7: régimen de protección de datos personales, responsables, encargados y delegado.'},
  {url:'https://drive.google.com/file/d/18DW7dfPPYpOM1G2Ds8BMMHy782Ce6oZ9/view?usp=drivesdk',referencia:'ITIC Academy, bloque 27 RGPD 2026: art. 37, designación del DPD por responsable o encargado y supuestos de obligación; cotejo directo.'}
 ],null,'Se mantiene C. El art. 37.1 RGPD asigna la obligación de designar DPD tanto al responsable como al encargado cuando se dé cualquiera de los supuestos allí enumerados; el apartado 4 contempla también designación cuando lo exijan el Derecho de la Unión o nacional y permite designación voluntaria. Se precisa que no implica que ambos deban nombrar conjuntamente un único delegado en cada tratamiento.','vigente']
];
const edits={
 5441:{texto:'En el almacenamiento de contraseñas, ¿qué afirmación sobre la sal (*salt*) es correcta?',opciones:['Es un algoritmo de cifrado de bloques.','Es un valor no secreto, normalmente aleatorio y distinto por contraseña, que se combina con ella como entrada de la función hash o KDF.','Por sí sola, sin una función de derivación con coste adecuado, hace que cada intento de fuerza bruta sea mucho más lento.','Es una clave secreta que debe almacenarse separada del hash.'],respuesta_correcta:1},
 5442:{texto:'¿Cuál de estos perfiles ETSI define firmas electrónicas avanzadas basadas en XML?',opciones:['CAdES.','PAdES.','XAdES.','ASiC.']},
 5443:{texto:'¿Qué protocolo indica el portal oficial del DNIe que utilizan sus servicios para consultar el estado de los certificados?',opciones:['Online Certificate Status Protocol (OCSP).','Online Services Protocol (OSP).','Services Status Protocol (SSP).','Online Status Services Certificate (OSSC).']},
 5444:{texto:'En el Editor de administración de directivas de grupo, ¿qué ruta abre la preferencia para administrar usuarios y grupos locales de los equipos objetivo?',opciones:['Objeto GPO > Configuración del equipo > Preferencias > Configuración del panel de control > Usuarios y grupos locales.','Objeto GPO > Configuración de usuario > Directivas > Plantillas administrativas > Panel de control > Cuentas de usuario.','Objeto GPO > Configuración del equipo > Directivas > Plantillas administrativas > Panel de control > Cuentas de usuario.','Objeto GPO > Configuración de usuario > Preferencias > Configuración del panel de control > Sistema > Usuarios y grupos locales.']},
 5445:{texto:'Según el artículo 37.1 del RGPD, ¿a quién corresponde designar un Delegado de Protección de Datos cuando concurra alguno de los supuestos que enumera?',opciones:['Al responsable del tratamiento.','Al encargado del tratamiento.','Al responsable y al encargado del tratamiento, cada uno cuando le resulte aplicable.','A ninguna de las partes anteriores.']}
};
const academy={
 5441:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma 2026.1, sección 4: propiedades de hash y KDF para contraseñas; cotejo directo.',
 5442:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma 2026.1, sección 8: CAdES, XAdES, PAdES y ASiC; cotejo directo.',
 5443:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma 2026.1, apartados 9 y 11: certificados, OCSP/CRL, DNIe y VALIDe; cobertura directa.',
 5444:'ITIC Academy, bloque 45 Correo, mensajería y servicios de directorio 2026.1, sección 11: Active Directory y Group Policy; cobertura de contexto, pero no la ruta de GPMC.',
 5445:'ITIC Academy, bloque 27 RGPD 2026: artículo 37 y designación del DPD por responsables y encargados; cotejo directo.'
};
const logFile=path.join(__dirname,'cambios-lote-1024.json');
if(!fs.existsSync(logFile)) aplicar({numero:'1024',fecha:'2026-11-12',records,edits});
const bankFile=path.join(__dirname,'..','preguntas_preparatic.json'),data=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
for(const c of log.cambios){const q=data.preguntas.find(q=>q.id===c.id),record=records.find(r=>r[0]===c.id);q.revision.estado=record[7];q.revision.observaciones=record[6];q.comentarios=record[6];q.clasificacion.bloque_academia=academy[c.id];q.clasificacion.nota='Clasificación cotejada con el programa oficial; ITIC Academy se usa como mapa curricular cuando se indica, no como autoridad técnica o normativa.';c.actualizada=structuredClone(q)}
fs.writeFileSync(bankFile,JSON.stringify(data,null,2)+'\n');fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
