const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const old='Último lote secuencial: 1188 (IDs 6261–6265). Acumulado: 6.260 preguntas examinadas individualmente; 6.150 verificadas (1.211 vigentes, 4.492 corregidas y 447 históricas); 110 pendientes documentadas (45 de fuente y 65 de ambigüedad); 5.863 sin revisar individualmente.';
const neu='Último lote secuencial: 1189 (IDs 6266–6270). Acumulado: 6.265 preguntas examinadas individualmente; 6.155 verificadas (1.211 vigentes, 4.497 corregidas y 447 históricas); 110 pendientes documentadas (45 de fuente y 65 de ambigüedad); 5.858 sin revisar individualmente.';
const section=`## Lote 1189 — 13 de noviembre de 2026

Revisadas individualmente las preguntas 6266–6270 sobre la API sockets, mapeo de transporte SNMP, adaptación ATM, IEEE 802.11k y modo ad hoc. Se reformulan las cinco para eliminar afirmaciones no delimitadas o desactualizadas; las cinco quedan corregidas con respuesta y fundamento documentados.

- **6266 — API sockets:** **corregida**, respuesta D. La interfaz admite diferentes dominios y tipos, entre ellos AF_INET con SOCK_STREAM/SOCK_DGRAM y AF_UNIX. Se eliminan las generalizaciones de que solo valga para TCP/IP o solo UNIX. A1-111/A2-II.8.
- **6267 — SNMP y UDP:** **corregida**, respuesta A. RFC 3417 define UDP/IPv4 como mapeo preferido y de implementación obligatoria en sistemas IPv4; RFC 3430 añade un mapeo opcional sobre TCP, por lo que se explicita el contexto del enunciado. A1-118/A2-IV.9.
- **6268 — subcapa SAR:** **corregida**, respuesta D. SAR es parte de la capa de adaptación ATM (AAL), que segmenta y reensambla unidades de datos. PDH y SDH son jerarquías de transmisión que pueden transportar celdas ATM; se sustituye el ambiguo término “nivel de acceso”. A1-113/A2-IV.10.
- **6269 — IEEE 802.11k:** **corregida**, respuesta D. La enmienda especifica mecanismos de Radio Resource Measurement; la opción anterior describía vagamente intercambio de información de capacidad. QoS y mayores caudales corresponden a otros aspectos/enmiendas. A1-114/A2-IV.11.
- **6270 — modo ad hoc:** **corregida**, respuesta C. Un IBSS permite comunicación directa entre estaciones sin punto de acceso. Se aclara que dos es el mínimo, no el máximo número de estaciones. A1-114/A2-IV.11.

Fuentes técnicas primarias: [RFC 3493](https://www.rfc-editor.org/rfc/rfc3493.html), [POSIX/The Open Group](https://posix.opengroup.org/docs/PX1.html), [RFC 3417](https://www.rfc-editor.org/rfc/rfc3417.html), [RFC 3430](https://www.rfc-editor.org/rfc/rfc3430.html), [RFC 6120](https://www.rfc-editor.org/rfc/rfc6120.html), [RFC 5321](https://www.rfc-editor.org/rfc/rfc5321.html), [ITU-T I.150](https://www.itu.int/rec/dologin_pub.asp?id=T-REC-I.150-199303-S%21%21PDF-E&lang=e&type=items), [ITU-T I.363.1](https://www.itu.int/rec/dologin_pub.asp?id=T-REC-I.363.1-199608-I%21%21PDF-E&lang=e&type=items), [ITU-T G.804](https://www.itu.int/rec/dologin_pub.asp?id=T-REC-G.804-200406-I%21%21PDF-E&lang=s&type=items), [IEEE 802.11k](https://standards.ieee.org/ieee/802.11k/3951/) y [grupo de trabajo IEEE 802.11, arquitectura IBSS/ad hoc](https://grouper.ieee.org/groups/802/11/main.html).

Convocatorias cotejadas: [GSI A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), anexo I, temas 111, 113, 114 y 118; [GSI A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), anexo IX, temas II.8, IV.9, IV.10 e IV.11.

Cotejo curricular de ITIC Academy, solo para cobertura y no como prueba de respuestas: [bloque 42 Redes](https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk), IDs 6267–6268; [bloque 43 Protocolos](https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk), 6266; [bloque 46 Redes inalámbricas](https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk), 6269–6270. Se actualiza la nomenclatura curricular A2 a los temas vigentes del anexo IX.

Ejecutados revisar-lote-1189.cjs, academia-lote-1189.cjs, inventario.cjs, verificar.cjs y git diff --check. Inventario esperado: 12.123 preguntas; 6.265 examinadas; 6.155 verificadas; 110 pendientes documentadas; 5.858 sin revisar individualmente; cero errores estructurales.

`;
assert.ok(s.includes(old),'No coincide resumen previo a 1189');assert.ok(s.includes('## Lote 1188 — 13 de noviembre de 2026'),'No se encontró el lote anterior');
s=s.replace(old,neu).replace('## Lote 1188 — 13 de noviembre de 2026',section+'## Lote 1188 — 13 de noviembre de 2026');
fs.writeFileSync(file,s);console.log('README actualizado para lote 1189.');
