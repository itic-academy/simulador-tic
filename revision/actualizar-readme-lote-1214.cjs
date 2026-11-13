const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const old='Último lote secuencial: 1213 (IDs 6386–6390). Acumulado: 6.385 preguntas examinadas individualmente; 6.271 verificadas (1.242 vigentes, 4.571 corregidas y 458 históricas); 114 pendientes documentadas (45 de fuente y 69 de ambigüedad); 5.738 sin revisar individualmente.';
const neu='Último lote secuencial: 1214 (IDs 6391–6395). Acumulado: 6.390 preguntas examinadas individualmente; 6.276 verificadas (1.243 vigentes, 4.575 corregidas y 458 históricas); 114 pendientes documentadas (45 de fuente y 69 de ambigüedad); 5.733 sin revisar individualmente.';
const section=`## Lote 1214 — 13 de noviembre de 2026

Revisión individual de los IDs 6391–6395: cuatro corregidos y uno vigente. Se conservan los textos y opciones originales en el registro del lote.

- **6391 — funciones OSI:** **corregida**, respuesta A. X.200 asigna el formato/sintaxis de datos a presentación; encaminamiento se asocia a red y la multiplexación de conexiones de transporte no corresponde a enlace de datos.
- **6392 — interfaz ATM NNI:** **vigente**, respuesta A. NNI conecta nodos/switches ATM; UNI conecta el sistema final ATM con el switch.
- **6393 — par telefónico y xDSL:** **corregida**, respuesta D. Ruido impulsivo, ruido de fondo y diafonía afectan al canal; el coste de instalación es un factor económico, no una perturbación física de la señal. Se precisó el enunciado que antes mezclaba ambas clases.
- **6394 — Bluetooth:** **corregida**, respuesta C. El límite se define ahora para una piconet BR/EDR clásica: hasta siete periféricos activos además del Central, ocho dispositivos en total. No se generaliza ese límite a Bluetooth LE, cuyo número de conexiones depende de la implementación.
- **6395 — IEEE 802.11be/Wi-Fi 7:** **corregida**, respuesta D. Se reemplazó la cifra de 48 Gbit/s por la formulación medible de IEEE 802.11be-2024: un modo EHT puede alcanzar un rendimiento máximo de al menos 30 Gbit/s medido en MAC SAP. Wi-Fi Alliance denomina Wi-Fi 7 a su programa CERTIFIED 7, e incluye MLO entre sus capacidades; no se confunde rendimiento teórico estandarizado con velocidad de usuario.

Fuentes técnicas primarias: [ITU-T X.200 / ISO/IEC 7498-1, modelo OSI](https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.200-199407-I%21%21PDF-E&lang=e&type=items); [Cisco, señalización ATM, UNI y NNI](https://www.cisco.com/c/en/us/tech/asynchronous-transfer-mode-atm/atm-signaling/index.html) y [ITU-T I.150](https://www.itu.int/rec/T-REC-I.150/en); [ITU-T G.992, xDSL sobre par metálico](https://www.itu.int/rec/t-rec-g) y [ITU-T L.75, ensayos de pares de cobre](https://www.itu.int/rec/dologin_pub.asp?id=T-REC-L.75-200805-I%21%21PDF-E&lang=e&type=items); [Bluetooth Core Specification v7.0, arquitectura](https://www.bluetooth.com/wp-content/uploads/Files/Specification/HTML/Core_v7.0/out/en/architecture%2C-change-history%2C-and-conventions/architecture--arch-.html) y [Baseband v6.2](https://www.bluetooth.com/wp-content/uploads/Files/Specification/HTML/Core-62/out/en/br-edr-controller/baseband-specification.html); [IEEE 802.11be-2024](https://standards.ieee.org/ieee/802.11be/7516/), [AOSP, MLO en Wi-Fi 7](https://source.android.com/docs/core/connect/wifi-7) y [Wi-Fi Alliance, Wi-Fi CERTIFIED 7](https://www.wi-fi.org/news-events/newsroom/wi-fi-alliance-introduces-wi-fi-certified-7).

Convocatorias cotejadas: [GSI A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), anexo I, temas 108 (ATM, medios y redes), 111 (OSI), 114 (Bluetooth/Wi-Fi) y 118 (LAN); [GSI A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), anexo IX, temas II-8 (OSI), IV-7 (medios guiados), IV-8 (LAN), IV-10 (WAN/ATM) y IV-11 (Bluetooth/Wi-Fi). Se registra el encaje de temario sin afirmar una auditoría exhaustiva de modificaciones posteriores.

Cotejo de academia en Drive: [ITIC Academy, Bloque 42 Redes, edición 2026](https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk) cubre OSI, xDSL/pares, ATM, LAN y VLAN, Bluetooth y evolución 802.11; se consultó para el mapa curricular y se verificaron las afirmaciones con las fuentes primarias anteriores.

Ejecutados revisar-lote-1214.cjs, academia-lote-1214.cjs, inventario.cjs, verificar.cjs y git diff --check. Inventario: 12.123 preguntas, 6.390 examinadas individualmente; 6.276 verificadas (1.243 vigentes, 4.575 corregidas, 458 históricas); 114 pendientes documentadas (45 de fuente, 69 de ambigüedad); 5.733 sin revisar individualmente; cero errores estructurales.

`;
assert.ok(s.includes(old),'Resumen anterior no coincide');assert.ok(s.includes('## Lote 1213 — 13 de noviembre de 2026'),'Sección 1213 ausente');
s=s.replace(old,neu).replace('## Lote 1213 — 13 de noviembre de 2026',section+'## Lote 1213 — 13 de noviembre de 2026');
fs.writeFileSync(file,s);console.log('README actualizado para lote 1214.');
