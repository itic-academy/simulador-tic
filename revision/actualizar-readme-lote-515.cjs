const fs=require('node:fs');
const file='revision/README.md',s=fs.readFileSync(file,'utf8');
const summary='Estado parcial, no revisión completa del banco. Publicación desde la rama `main`. Último lote secuencial aplicado: 515 (IDs 2891–2895). Acumulado: 2895 preguntas examinadas individualmente, 2823 verificadas (611 vigentes, 1978 corregidas y 234 históricas) y 72 pendientes documentadas (34 de fuente y 38 de ambigüedad); quedan 9228 sin revisar individualmente. Hay 2277 preguntas con cambios en enunciado, opciones o clave respecto del original, calculado comparando esos campos en los registros completos. Inventario estructural no equivale a revisión de contenido.';
const section=[
'## Lote 515 — 29 de octubre',
'',
'IDs 2891–2895 revisados individualmente con fuentes del fabricante, Bluetooth SIG, IETF, NIST/OWASP y literatura académica, y cotejo de los temarios de Academy en Drive. Los cinco originales se conservan en [cambios-lote-515.json](cambios-lote-515.json).',
'',
'- **2891 — vSuite y virtualización:** se corrige la clave original: ZTE documenta TECS vSuite como una solución de virtualización basada en KVM; se distingue producto de hipervisor y se pregunta por su denominación exacta. A1-57/A1-132/A2-IV-6; Academy, Sistemas Operativos y Bloque 26.',
'- **2892 — Bluetooth EDR:** se precisa que 3 Mbit/s es la tasa física bruta máxima de 8DPSK; π/4-DQPSK ofrece 2 Mbit/s y el caudal útil es menor. A1-114/A2-IV-11; Academy, Bloque 46.',
'- **2893 — almacenamiento SAN sobre IP:** se documentan iSCSI, FCIP e iFCP en las RFC correspondientes; «iFTP» no es una de esas siglas normalizadas. Se acota el marco de la pregunta. A1-56/A1-108/A2-IV-5/A2-IV-8; Academy, Bloques 26 y 43.',
'- **2894 — NOS y sistema distribuido:** se acota la respuesta a la distinción clásica: cada equipo de un NOS conserva su sistema operativo e identidad; un SO distribuido busca coordinación y transparencia. A1-59/A2-II-2; Academy, Sistemas Operativos.',
'- **2895 — NGFW frente a WAF:** se confirma NGFW para filtrar distintas aplicaciones con conciencia de capa 7; un WAF se especializa en HTTP y aplicaciones web. A1-125/A1-126/A2-IV-12; Academy, Seguridad en Redes y en el Nivel de Aplicación.',
'',
'Fuentes primarias: ZTE, [TECS vSuite](https://sdnfv.zte.com.cn/en/products/infrastructure/vsuite); Bluetooth SIG, [Core Specification 6.3, capa física BR/EDR](https://www.bluetooth.com/wp-content/uploads/Files/Specification/HTML/Core_v6.3/out/en/br-edr-controller/radio-physical-layer-specification.html) y [Core Specification 2.0+EDR](https://www.bluetooth.com/specifications/specs/core-specification-2-0-edr/); IETF, [RFC 3723](https://www.rfc-editor.org/rfc/rfc3723.html), [RFC 3821 FCIP](https://www.rfc-editor.org/rfc/rfc3821.html), [RFC 4172 iFCP](https://www.rfc-editor.org/rfc/rfc4172.html), [RFC 7143 iSCSI](https://www.rfc-editor.org/rfc/rfc7143.html); Tanenbaum y van Renesse, [Distributed Operating Systems](https://doi.org/10.1145/6041.6074), ACM Computing Surveys 17(4), 1985; NIST, [SP 800-215](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-215.pdf), §3.3; OWASP, [Web Application Firewall](https://community.owasp.org/Web_Application_Firewall).',
'',
'Cotejo curricular en Drive: [Sistemas Operativos 2026.1](https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view), [Bloque 26 Hardware, almacenamiento y virtualización](https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view), [Bloque 46 Redes inalámbricas y comunicaciones móviles](https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view), [Bloque 43 Protocolos](https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view) y [Seguridad en Redes y Nivel de Aplicación](https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view). Sus índices cubren los ámbitos de estudio indicados; las respuestas se basan en las fuentes técnicas citadas. Correspondencias oficiales validadas con `temario-oficial.json` y las convocatorias [A1 BOE-A-2025-25938](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI BOE-A-2025-26262](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262).',
'',
'`inventario.cjs`: 12.123 preguntas, cero errores; 2.895 revisadas individualmente, 2.823 verificadas, 72 pendientes documentadas y 9.228 sin revisión de contenido. `verificar.cjs`: banco válido, 2.895 cambios registrados y 9.228 preguntas restantes idénticas al original. El inventario estructural no acredita revisión individual.',
'',
'## Lote 514 — 29 de octubre'
].join('\n');
if(!s.includes('## Lote 514 — 29 de octubre'))throw Error('No se halló el lote 514.');
const updated=s.replace(/^Estado parcial,.*$/m,summary).replace('## Lote 514 — 29 de octubre',section);
fs.writeFileSync(file,updated.trimEnd()+'\n');
console.log('README actualizado para el lote 515.');
