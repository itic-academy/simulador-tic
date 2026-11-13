const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const f=path.join(__dirname,'README.md');let s=fs.readFileSync(f,'utf8');
const old='Último lote secuencial: 1162 (IDs 6131–6135). Acumulado: 6.130 preguntas examinadas individualmente; 6.025 verificadas (1.175 vigentes, 4.408 corregidas y 442 históricas); 105 pendientes documentadas (42 de fuente y 63 de ambigüedad); 5.993 sin revisar individualmente.';
const neu='Último lote secuencial: 1163 (IDs 6136–6140). Acumulado: 6.135 preguntas examinadas individualmente; 6.029 verificadas (1.178 vigentes, 4.409 corregidas y 442 históricas); 106 pendientes documentadas (43 de fuente y 63 de ambigüedad); 5.988 sin revisar individualmente.';
const section=`## Lote 1163 — 13 de noviembre de 2026

Revisadas individualmente las preguntas 6136–6140. Se explicaron los hubs como concentradores de capa física; se delimitó el subsistema horizontal; se explicitó el supuesto unidireccional y decimal del cálculo ancho de banda-retardo; se acotó el uso del cable directo a puertos MDI/MDI-X clásicos; la cláusula histórica de EPHOS 2 queda pendiente de fuente primaria.

- **6136 — hub en una LAN:** **vigente**, respuesta B. Es un concentrador multipuerto que conecta el cableado y repite la señal física recibida a otros puertos; no es un conector, balun ni terminador. A1-118/A2-IV.8.
- **6137 — subsistema horizontal:** **vigente**, respuesta B. Se precisa que enlaza el distribuidor de planta con las tomas de telecomunicaciones; plantas/edificios pertenecen al backbone. A1-118/A2-IV.8.
- **6138 — bits enviados al llegar el primer bit:** **vigente**, respuesta C, 16.000 octetos. Con unidades decimales: 64.000.000 bit/s × 0,002 s ÷ 8 = 16.000 octetos. Se aclara que es propagación unidireccional y no RTT; se ignoran cabeceras. A1-108/A2-IV.7.
- **6139 — PC a hub:** **corregida**, respuesta A, cable directo. La nueva redacción especifica PC MDI, puerto hub MDI-X clásico y ausencia de auto-MDI-X; con auto-MDI-X la regla no es universal. A1-118/A2-IV.8.
- **6140 — cláusula 1 de EPHOS 2:** **pendiente de fuente**. Se conserva íntegro el enunciado y la clave heredada C. CORDIS confirma la existencia y el ámbito del manual, pero no se localizó el texto primario de la cláusula que permita verificar esa respuesta; el encaje curricular no sustituye esa evidencia. A1-118/A2-IV.8.

Fuentes técnicas: [Cisco, hub como dispositivo físico de repetición](https://www.cisco.com/en/US/docs/internetworking/troubleshooting/guide/tr1923.html) y [descripción Cisco de hub/switch](https://www.cisco.com/site/us/en/learn/topics/networking/what-is-an-ethernet-switch.html); [UIT-T L.76, §6.4, subsistema horizontal](https://www.itu.int/rec/dologin_pub.asp?id=T-REC-L.76-200805-I%21%21PDF-E&lang=f&type=items) e [ISO/IEC 11801-1](https://www.iso.org/standard/66182.html); [IETF RFC 6349, §3.3.1](https://www.rfc-editor.org/rfc/rfc6349.html) y [RFC 7323](https://www.rfc-editor.org/rfc/rfc7323.html), producto ancho de banda-retardo; [guía de instalación de hub Cisco/HP](https://www.cisco.com/c/dam/en/us/td/docs/switches/lan/hubs/hphub/install_reference/guide/j3188001.pdf) y [Cisco sobre cableado Ethernet/auto-MDIX](https://www.cisco.com/c/en/us/support/docs/lan-switching/ethernet/10561-3.html). Fuente primaria de contexto para EPHOS: [CORDIS, Comisión Europea](https://cordis.europa.eu/article/id/3680-european-procurement-handbook-for-open-systems/es), que no incluye el texto de la cláusula 1; por ello se mantiene el pendiente.

Convocatorias cotejadas: [GSI A1 2025, anexo I, temas 108 y 118](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [GSI A2 2025, anexo IX, temas IV.7 y IV.8](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262). Cotejo curricular ITIC Academy: [bloque 42 Redes, actualización 2026](https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk); el bloque sitúa estos conceptos en dispositivos LAN, cableado y parámetros de transmisión. Esa correspondencia sirve para clasificar, no para sustituir la fuente técnica ni acreditar la cláusula EPHOS pendiente.

Ejecutados revisar-lote-1163.cjs, academia-lote-1163.cjs, inventario.cjs, verificar.cjs y git diff --check. Inventario: 12.123 total; 6.135 examinadas individualmente; 6.029 verificadas; 106 pendientes (43 de fuente, 63 de ambigüedad); 5.988 sin revisar; cero errores estructurales.

`;
assert.ok(s.includes(old),'No coincide el resumen superior previo al lote 1163');
assert.ok(s.includes('**Publicación verificada:** el commit de datos `d5a307b1dfacb2d247ce74697da47d5cbf9f90c1`'),'No se conserva la evidencia pública del lote anterior');
assert.ok(s.includes('## Lote 1162 — 13 de noviembre de 2026'),'No se encontró la ubicación del lote previo');
s=s.replace(old,neu).replace('## Lote 1162 — 13 de noviembre de 2026',section+'## Lote 1162 — 13 de noviembre de 2026');
fs.writeFileSync(f,s);console.log('README del lote 1163 actualizado.');
