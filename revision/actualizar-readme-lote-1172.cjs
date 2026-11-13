const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const old='Último lote secuencial: 1171 (IDs 6176–6180). Acumulado: 6.175 preguntas examinadas individualmente; 6.065 verificadas (1.188 vigentes, 4.432 corregidas y 445 históricas); 110 pendientes documentadas (45 de fuente y 65 de ambigüedad); 5.948 sin revisar individualmente.';
const neu='Último lote secuencial: 1172 (IDs 6181–6185). Acumulado: 6.180 preguntas examinadas individualmente; 6.070 verificadas (1.190 vigentes, 4.435 corregidas y 445 históricas); 110 pendientes documentadas (45 de fuente y 65 de ambigüedad); 5.943 sin revisar individualmente.';
const section=`## Lote 1172 — 13 de noviembre de 2026

Revisadas individualmente las preguntas 6181–6185 sobre objetivos de servicios web, publicación UDDI, MTOM, roles cliente/servidor y estándares W3C/OASIS. Dos se verifican como vigentes y tres se corrigen para acotar el alcance, no atribuir requisitos universales y eliminar afirmaciones dependientes del despliegue.

- **6181 — objetivo de servicios web:** **vigente**, respuesta A. La interoperabilidad entre aplicaciones de plataformas y marcos distintos es un objetivo explícito de la arquitectura de servicios web del W3C. A1-65/A2-III.12.
- **6182 — publicación UDDI:** **corregida**, respuesta B (falsa). Para el modelo clásico SOAP/WSDL, UDDI permite publicar/descubrir, pero el registro no es requisito universal para invocar servicios. A1-65/A2-III.12.
- **6183 — envío binario SOAP:** **corregida**, respuesta C (MTOM). MTOM/XOP optimiza contenido binario base64 dentro de mensajes SOAP mediante serialización MIME; no se caracteriza como mecanismo de ficheros independiente de SOAP. A1-65/A2-III.12.
- **6184 — topología cliente-servidor:** **corregida**, respuesta A (falsa). Cliente y servidor son roles/procesos; no se exige que residan en máquinas físicas distintas. Se elimina la generalización sobre el sentido del mayor volumen de tráfico, que depende de cada aplicación. A1-58/A2-II.6.
- **6185 — organismo de normalización:** **vigente**, respuesta A (UDDI). UDDI fue desarrollado en OASIS; SOAP 1.2, WSDL 2.0 y XML 1.0 son Recomendaciones W3C. Se explicita que se compara el organismo normalizador, no si XML es una tecnología específica de servicios web. A1-65/A2-III.12.

Fuentes primarias: [W3C Web Services Architecture](https://www.w3.org/TR/ws-arch/); [W3C WSDL 2.0](https://www.w3.org/TR/wsdl/), [SOAP 1.2](https://www.w3.org/TR/soap12-part1/), [MTOM](https://www.w3.org/TR/soap12-mtom/) y [XOP](https://www.w3.org/TR/2005/REC-xop10-20050125/); [OASIS UDDI TC](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=uddi-spec); [Oracle, modelo cliente-servidor](https://docs.oracle.com/cd/E19620-01/805-4041/6j3r8iu2c/index.html) y [Microsoft Learn, conexiones cliente/servidor](https://learn.microsoft.com/en-us/windows/win32/termserv/client-server-application-guidelines).

Convocatorias cotejadas: [GSI A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), temas 58 y 65; [GSI A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), anexo IX, temas II.6 y III.12. Cotejo de ITIC Academy: [bloque 28 Arquitectura SOA, versión 2026.1 (25-09-2026)](https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk), apartados de interoperabilidad, cliente-servidor, SOAP/WSDL y registro/descubrimiento. La academia ubica los contenidos; las fuentes técnicas primarias justifican las respuestas.

Ejecutados revisar-lote-1172.cjs, academia-lote-1172.cjs, inventario.cjs, verificar.cjs y git diff --check. Inventario: 12.123 preguntas; 6.180 examinadas; 6.070 verificadas; 110 pendientes documentadas (45 de fuente y 65 de ambigüedad); 5.943 sin revisar individualmente; cero errores estructurales.

`;
assert.ok(s.includes(old),'No coincide el resumen previo al lote 1172');assert.ok(s.includes('## Lote 1171 — 13 de noviembre de 2026'),'No se encontró el lote anterior');s=s.replace(old,neu).replace('## Lote 1171 — 13 de noviembre de 2026',section+'## Lote 1171 — 13 de noviembre de 2026');fs.writeFileSync(file,s);console.log('README actualizado para el lote 1172.');
