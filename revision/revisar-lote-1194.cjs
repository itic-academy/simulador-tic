const apply=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const src=(url,referencia)=>({url,referencia});
apply({numero:'1194',fecha:'2026-11-13',records:[
 [6291,['5','45'],['I-9'],['interoperabilidad','EIF','Marco Europeo de Interoperabilidad','principios','Interoperable Europe Act'],[
  src('https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52017DC0134','Comisión Europea, COM(2017) 134 final, anexo, capítulo 2: EIF 2017 (versión 2) enumera 12 principios; cooperación intergubernamental no figura como principio independiente.'),
  src('https://eur-lex.europa.eu/eli/reg/2024/903','Reglamento (UE) 2024/903 (Interoperable Europe Act), arts. 5–6: establece el marco jurídico vigente y prevé que el Consejo de Interoperabilidad desarrolle el EIF que la Comisión puede adoptar; se distingue del listado histórico de 2017.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, temas 5 y 45: Unión Europea e interoperabilidad de sistemas.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.9: ENI, interoperabilidad y normas técnicas.')
 ],null,'La opción D es la que no aparece entre los 12 principios del EIF 2017: la lista incluye multilingüismo, seguridad y privacidad, y subsidiariedad y proporcionalidad. Se acota expresamente la pregunta al documento COM(2017) 134 para no presentar aquel marco como la regulación vigente completa: el Reglamento (UE) 2024/903 establece ahora el marco de Interoperable Europe y dispone el desarrollo/adopción del EIF previsto en su artículo 6.','historica'],
 [6292,['56'],[],['MPEG','ISO/IEC','vídeo','codificación','estándares multimedia'],[
  src('https://www.iso.org/standard/22411.html','ISO/IEC 11172-2:1993, parte 2: vídeo de MPEG-1; ficha oficial ISO, edición confirmada vigente en 2021.'),
  src('https://www.iso.org/standard/39259.html','ISO/IEC 14496-2:2004, parte Visual de MPEG-4; ficha oficial ISO.'),
  src('https://www.iso.org/committee/45316/x/catalogue/','Catálogo oficial ISO/IEC JTC 1/SC 29 de estándares de codificación audiovisual; se comprueba el uso de MPEG-1, MPEG-2 y MPEG-4 y que MPEG-3 no identifica una parte de vídeo normalizada en esa serie.'),
  src('https://www.loc.gov/preservation/digital/formats/content/video_preferences','Library of Congress, preferencias de formatos de vídeo: la recomendación depende del uso y del formato concreto; MPEG-2 y MPEG-4 figuran en sus preferencias actuales. Esto muestra por qué el enunciado original, sin identificar quién recomienda, era indeterminado.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 56: dispositivos para tratamiento de información multimedia.'),
  src(a2,'El temario GSI A2 2025 no contiene un epígrafe específico de formatos de codificación de vídeo; se deja A2 sin asignar.')
 ],null,'Se corrige el enunciado: «recomendado» carecía de sujeto y criterio verificable (las recomendaciones de conservación varían según institución y finalidad). La opción B queda como la respuesta única al preguntar por un nombre de estándar de vídeo: ISO identifica MPEG-1 vídeo como ISO/IEC 11172-2 y MPEG-4 Visual como ISO/IEC 14496-2; el catálogo MPEG de ISO no define MPEG-3 vídeo como parte normalizada. No se equipara MPEG-3 con MP3, que es audio.','corregida'],
 [6293,['125'],['IV-12'],['seguridad','control de acceso','RBAC','roles','NIST'],[
  src('https://csrc.nist.gov/glossary/term/role_based_access_control','NIST CSRC Glossary, role-based access control (RBAC): las acciones permitidas se asocian a roles, no a identidades individuales; también define asignación de roles a usuarios.'),
  src('https://csrc.nist.gov/projects/role-based-access-control/faqs','NIST RBAC FAQ: presenta RBAC como modelo diferenciado de MAC y DAC; la pregunta se limita a la asignación de permisos por roles, sin generalizar que todo control no discrecional sea RBAC.'),
  src('https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk','ITIC Academy, bloque 22 Seguridad, ENS y Ciberseguridad (2026.2): seguridad, mínimo privilegio y controles; cotejo temático, no validación de la respuesta.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 125: seguridad en redes y control de accesos.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.12: seguridad en redes y control de accesos.')
 ],null,'Se sustituye la expresión imprecisa «modelo no discrecional»: según la taxonomía empleada puede abarcar varios controles, como MAC o RBAC, por lo que no determinaba una respuesta única. Ahora se pregunta por el modelo que vincula permisos a roles y asigna usuarios a esos roles; la opción B (RBAC) es la única que coincide con la definición NIST.','corregida'],
 [6294,['111','115'],['II-8'],['OSI','TCP/IP','capa de red','servicio orientado a conexión','servicio sin conexión'],[
  src('https://www.itu.int/rec/T-REC-X.200-199407-I/en','ITU-T X.200 (07/1994), modelo básico OSI: incorpora la transmisión sin conexión además del servicio orientado a conexión; la capa de red puede ofrecer ambos modos.'),
  src('https://www.rfc-editor.org/rfc/rfc791.html','RFC 791, Internet Protocol: IP proporciona datagramas y un servicio de red sin conexión.'),
  src('https://www.rfc-editor.org/rfc/rfc793.html','RFC 793, TCP: protocolo de transporte orientado a conexión; el enunciado no afirma que sea el único modo de transporte.'),
  src('https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk','ITIC Academy, bloque 43 Protocolos (actualización 2026): OSI, TCP/IP, transporte y encaminamiento; cotejo de cobertura temática.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, temas 111 y 115: modelo OSI y redes IP.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.8: modelos TCP/IP y OSI.')
 ],null,'La opción A es falsa: el modelo OSI no restringe la capa de red al servicio orientado a conexión; contempla también servicio de red sin conexión. Se precisa la opción C como servicio IP de la capa Internet sin conexión. La opción B afirma únicamente que el transporte ofrece modalidad orientada a conexión, no que sea la única; D es falsa porque A lo es.','corregida'],
 [6295,['56'],['IV-5'],['iSCSI','RFC 7143','CHAP','autenticación','almacenamiento'],[
  src('https://www.rfc-editor.org/rfc/rfc7143.html#section-9.2.1','RFC 7143, §9.2.1: iniciadores y destinos iSCSI conformes DEBEN implementar CHAP; la implementación obligatoria no equivale a exigir su uso en toda sesión.'),
  src('https://www.rfc-editor.org/rfc/rfc7143.html#section-4.2.7.3','RFC 7143, §4.2.7.3: el nombre iSCSI tiene dos partes —designador de tipo y cadena de nombre único— y define tres designadores: iqn., naa. y eui.'),
  src('https://www.rfc-editor.org/rfc/rfc7143.html#section-4','RFC 7143, §4, descubrimiento de destinos: iSNS es un mecanismo de descubrimiento descrito por el protocolo, no un requisito universal para localizar destinos.'),
  src('https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk','ITIC Academy, bloque Hardware, servidores, CPD, almacenamiento y virtualización (2026): almacenamiento y protocolo iSCSI; cotejo temático A1-56/A2-IV-5.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 56: almacenamiento para sistemas grandes y departamentales.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.5: almacenamiento de datos y protocolos.')
 ],null,'La opción A es correcta como requisito de implementación: RFC 7143 §9.2.1 exige que iniciadores y destinos conformes implementen CHAP, pero no que toda sesión deba autenticarse efectivamente mediante CHAP. B es falsa porque el nombre iSCSI se compone de dos partes, no tres; C omite naa.; D hace obligatorio un mecanismo iSNS que el RFC no exige para todo descubrimiento.','vigente']
],edits:{
 6291:{texto:'Según el anexo de la Comunicación COM(2017) 134 final, que presenta la versión 2017 del Marco Europeo de Interoperabilidad (EIF 2.0), ¿cuál de las siguientes opciones no es uno de sus 12 principios?'},
 6292:{texto:'¿Cuál de estos nombres no corresponde a una parte normalizada de codificación de vídeo de la serie MPEG de ISO/IEC?',opciones:['MPEG-1 vídeo (ISO/IEC 11172-2)','MPEG-3 vídeo como estándar ISO/IEC','MPEG-2 vídeo (ISO/IEC 13818-2)','MPEG-4 Visual (ISO/IEC 14496-2)'],respuesta_correcta:1},
 6293:{texto:'¿Qué modelo de control de acceso asocia los permisos a roles predefinidos y asigna los usuarios a esos roles?',opciones:['Control basado en reglas (Rule-Based Access Control).','Control basado en roles (Role-Based Access Control, RBAC).','Control basado en identidades individuales (IBAC).','Control de acceso obligatorio basado en etiquetas de seguridad (MAC).'],respuesta_correcta:1},
 6294:{texto:'Indique la opción falsa sobre los servicios de red y transporte:',opciones:['El modelo OSI sólo admite servicio orientado a conexión en la capa de red.','La capa de transporte puede ofrecer un servicio orientado a conexión.','El protocolo IP presta un servicio de red sin conexión.','Todas las afirmaciones anteriores son verdaderas.'],respuesta_correcta:0},
 6295:{texto:'Según los requisitos de implementación de la RFC 7143 para iSCSI, ¿cuál de las siguientes afirmaciones es correcta?',opciones:['Los iniciadores y destinos conformes deben implementar CHAP, aunque eso no obliga a usarlo en cada sesión.','El nombre iSCSI consta de tres campos: designador de tipo, espacio de nombres y nombre de dispositivo asignado por la IETF.','La RFC 7143 define únicamente los designadores de tipo «iqn.» y «eui.».','Todos los destinos deben localizarse obligatoriamente mediante iSNS.'],respuesta_correcta:0}
}});
