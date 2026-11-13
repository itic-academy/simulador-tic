const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const old='Último lote secuencial: 1189 (IDs 6266–6270). Acumulado: 6.265 preguntas examinadas individualmente; 6.155 verificadas (1.211 vigentes, 4.497 corregidas y 447 históricas); 110 pendientes documentadas (45 de fuente y 65 de ambigüedad); 5.858 sin revisar individualmente.';
const neu='Último lote secuencial: 1190 (IDs 6271–6275). Acumulado: 6.270 preguntas examinadas individualmente; 6.160 verificadas (1.211 vigentes, 4.500 corregidas y 449 históricas); 110 pendientes documentadas (45 de fuente y 65 de ambigüedad); 5.853 sin revisar individualmente.';
const section=`## Lote 1190 — 13 de noviembre de 2026

Revisadas individualmente las preguntas 6271–6275 sobre transportes DNS, IPv4 no especificada en la inicialización, clases IEEE 802.17 RPR, algoritmos de balanceo y velocidad pico HSDPA. Todas quedan verificadas; se acotan enunciados para hacer explícitos el estándar, plataforma o generación técnica.

- **6271 — DNS sobre UDP y TCP:** **corregida**, respuesta C. RFC 7766/9210 requiere que las implementaciones completas soporten ambos transportes; DNS no se limita a UDP. TFTP usa UDP y FTP usa TCP. A1-109/A2-IV.13.
- **6272 — 0.0.0.0:** **corregida**, respuesta C. En el arranque/configuración IPv4, un host sin dirección asignada puede usar 0.0.0.0 como origen no especificado (p. ej., DHCP). No es broadcast ni loopback. A1-115/A2-II.8.
- **6273 — clases RPR:** **histórica**, respuesta B. IEEE 802.17: A prioriza retardo/jitter bajos; B ofrece límites para el CIR y puede cursar el exceso como best-effort; C es best-effort. IEEE registra la revisión 802.17-2011 fuera de estado activo, por lo que se conserva explícitamente como contenido histórico. A1-113/A2-IV.10.
- **6274 — algoritmos de balanceo:** **corregida**, respuesta D. La lista original no especificaba producto y algoritmos similares varían por proveedor. Se delimita a AWS Application Load Balancer: documenta round robin, least outstanding requests y weighted random, no “least weighted time”. A1-119/A2-IV.6.
- **6275 — HSDPA:** **histórica**, respuesta B. Se identifica HSDPA UMTS clásico de un portador; 3GPP publica 14,4 Mbit/s como pico teórico de referencia. No se extrapola a evoluciones HSPA+ ni multiportador posteriores. A1-123/A2-IV.15.

Fuentes primarias/técnicas: [RFC 1035](https://www.rfc-editor.org/rfc/rfc1035.html), [RFC 7766](https://www.rfc-editor.org/rfc/rfc7766.html), [RFC 9210](https://www.rfc-editor.org/rfc/rfc9210.html), [RFC 1350](https://www.rfc-editor.org/rfc/rfc1350.html), [RFC 1122](https://www.rfc-editor.org/rfc/rfc1122.html), [RFC 2131](https://www.rfc-editor.org/rfc/rfc2131.html), [IEEE 802.17 status](https://standards.ieee.org/ieee/802.17/3155/), [IEEE 802.17 WG draft on RPR service classes](https://ieee802.org/17/email/pdf00069.pdf), [AWS ALB algorithms](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/edit-target-group-attributes.html), [3GPP HSDPA overview](https://www.3gpp.org/ftp/pcg/pcg_15/docs/pdf/PCG15_22.pdf), [3GPP TS 25.306](https://portal.3gpp.org/Specifications.aspx?q=1&number=25.306).

Convocatorias cotejadas: [GSI A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), anexo I, temas 109, 113, 115, 119 y 123; [GSI A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), anexo IX, temas II.8, IV.6, IV.10, IV.13 e IV.15.

Cotejo curricular ITIC Academy (cobertura del temario, no verificación de respuestas): [bloque 43 Protocolos](https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk), 6271–6272; [bloque 42 Redes](https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk), 6273 (el resumen no detalla RPR); [bloque 26 Hardware/servidores/CPD](https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk), 6274; [bloque 46 Redes inalámbricas y móviles](https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk), 6275. Se normalizan los códigos antiguos A2-C6 al tema vigente IV.6 y la nomenclatura heredada al temario A2 2025.

Ejecutados revisar-lote-1190.cjs, academia-lote-1190.cjs, inventario.cjs, verificar.cjs y git diff --check. Inventario esperado: 12.123 preguntas; 6.270 examinadas; 6.160 verificadas; 110 pendientes documentadas; 5.853 sin revisar individualmente; cero errores estructurales.

`;
assert.ok(s.includes(old),'No coincide resumen previo a 1190');assert.ok(s.includes('## Lote 1189 — 13 de noviembre de 2026'),'No se encontró lote anterior');
s=s.replace(old,neu).replace('## Lote 1189 — 13 de noviembre de 2026',section+'## Lote 1189 — 13 de noviembre de 2026');
fs.writeFileSync(file,s);console.log('README actualizado para lote 1190.');
