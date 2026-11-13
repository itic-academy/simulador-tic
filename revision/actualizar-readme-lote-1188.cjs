const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const old='Último lote secuencial: 1187 (IDs 6256–6260). Acumulado: 6.255 preguntas examinadas individualmente; 6.145 verificadas (1.209 vigentes, 4.489 corregidas y 447 históricas); 110 pendientes documentadas (45 de fuente y 65 de ambigüedad); 5.868 sin revisar individualmente.';
const neu='Último lote secuencial: 1188 (IDs 6261–6265). Acumulado: 6.260 preguntas examinadas individualmente; 6.150 verificadas (1.211 vigentes, 4.492 corregidas y 447 históricas); 110 pendientes documentadas (45 de fuente y 65 de ambigüedad); 5.863 sin revisar individualmente.';
const section=`## Lote 1188 — 13 de noviembre de 2026

Revisadas individualmente las preguntas 6261–6265 sobre métricas de gestión de cambios ITIL, fibra óptica, NNTP, cableado Ethernet y topologías LAN. Se confirman 6261 y 6263; se corrigen 6262, 6264 y 6265.

- **6261 — KPI de gestión de cambios:** **vigente**, respuesta C. El propietario del proceso define los indicadores que evalúan eficacia/eficiencia; CAB y ECAB asesoran o participan en decisiones sobre cambios. Reactivo limitado expresamente a ITIL v3. A1-106/A2-IV.4.
- **6262 — fibra óptica:** **corregida**, respuesta B. La fibra multimodo de índice gradual reduce dispersión modal y normalmente ofrece mayor ancho de banda que la de índice escalonado comparable. Se distinguen ventanas usuales multimodo (850 nm) y monomodo (1310/1550 nm). A1-108/112/A2-IV.7.
- **6263 — NNTP:** **vigente**, respuesta A. IANA registra NNTP en TCP 119; 563 se usa habitualmente para NNTP sobre TLS. A1-109/A2-IV.13.
- **6264 — cable PC-switch:** **corregida**, respuesta A. Se acota al esquema clásico cuando no hay Auto-MDIX: PC a switch usa cable directo. Con Auto-MDIX algunos equipos admiten también cable cruzado. A1-118/A2-IV.8.
- **6265 — topologías LAN:** **corregida**, respuesta C. Se corrige el problema de opciones que eran subconjuntos también válidos. La opción correcta agrupa los seis tipos enumerados en el propio enunciado, sin afirmar que la taxonomía sea universal/exhaustiva. A1-118/A2-IV.8.

Fuentes técnicas/primarias: [NATO, procedimiento de gestión de cambios ITIL y responsabilidades del Process Owner](https://www.mindev.gov.gr/wp-content/uploads/2023/04/03-NCIA-ACQ-2023-06756.pdf) y [U.S. DoD Enterprise ITSM Framework](https://dodcio.defense.gov/Portals/0/Documents/DESMF%20EDITION%20III%20Signed%20June2016.pdf); [ITU-T G.651.1, fibra multimodo de índice gradual](https://www.itu.int/rec/T-REC-G.651.1-201811-I/en), [ITU-T G.652 (08/2024), monomodo](https://www.itu.int/epublications/publication/itu-t-g-652-2024-08-characteristics-of-a-single-mode-optical-fibre-and-cable) y [ITU-T G.651, definición de ancho de banda/efectos modales](https://www.itu.int/rec/dologin_pub.asp?id=T-REC-G.651-199802-W%21%21PDF-E&lang=e&type=items); [IANA NNTP/TCP](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml?search=nntp) y [RFC 3977](https://www.rfc-editor.org/rfc/rfc3977.html); [Cisco, cable directo y Auto-MDIX](https://www.cisco.com/c/en/us/support/docs/lan-switching/ethernet/10561-3.html); [AWS, topologías de red](https://aws.amazon.com/what-is/network-topology/) e [IBM, tipos de topología](https://www.ibm.com/think/topics/network-topology).

Convocatorias cotejadas: [GSI A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), anexo I, temas 106, 108, 109, 112 y 118; [GSI A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), anexo IX, temas IV.4, IV.7, IV.8 y IV.13.

Cotejo de cobertura ITIC Academy (no evidencia de respuestas): [bloque 41 ITIL y COBIT](https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk), 6261; [bloque 42 Redes](https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk), 6262, 6264–6265; [bloque 43 Protocolos](https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk), 6263. Los códigos históricos C2/C5/C6/C13 se normalizan al temario A2 vigente IV.4/IV.7/IV.8/IV.13.

Ejecutados revisar-lote-1188.cjs, academia-lote-1188.cjs, inventario.cjs, verificar.cjs y git diff --check. Inventario esperado: 12.123 preguntas; 6.260 examinadas; 6.150 verificadas; 110 pendientes documentadas; 5.863 aún sin revisar individualmente; cero errores estructurales.

`;
assert.ok(s.includes(old),'No coincide resumen previo a 1188');assert.ok(s.includes('## Lote 1187 — 13 de noviembre de 2026'),'No se encontró el lote anterior');
s=s.replace(old,neu).replace('## Lote 1187 — 13 de noviembre de 2026',section+'## Lote 1187 — 13 de noviembre de 2026');
fs.writeFileSync(file,s);console.log('README actualizado para lote 1188.');
