const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const old='Último lote secuencial: 1173 (IDs 6186–6190). Acumulado: 6.185 preguntas examinadas individualmente; 6.075 verificadas (1.191 vigentes, 4.439 corregidas y 445 históricas); 110 pendientes documentadas (45 de fuente y 65 de ambigüedad); 5.938 sin revisar individualmente.';
const neu='Último lote secuencial: 1174 (IDs 6191–6195). Acumulado: 6.190 preguntas examinadas individualmente; 6.080 verificadas (1.192 vigentes, 4.443 corregidas y 445 históricas); 110 pendientes documentadas (45 de fuente y 65 de ambigüedad); 5.933 sin revisar individualmente.';
const section=`## Lote 1174 — 13 de noviembre de 2026

Revisadas individualmente las preguntas 6191–6195 sobre SOAP/WSDL/UDDI, descripción de servicios, mensajería en colas y ventajas de sistemas distribuidos. Cuatro se corrigen (6191, 6193–6195); 6192 se mantiene vigente.

- **6191 — estándares de servicios web:** **corregida**, respuesta D (incorrecta). El original incluía dos errores: la expansión «Web Service Definition Language» para WSDL y la denominación no estándar WSSL. Se corrige WSDL a *Web Services Description Language* y se aísla la afirmación falsa sobre WSSL. SOAP intercambia mensajes; WSDL describe servicios y UDDI sirve para publicación/consulta en registros. A1-65/A2-III.12.
- **6192 — expansión de WSDL:** **vigente**, respuesta A: *Web Services Description Language*. WSDL describe servicios web; no es un lenguaje de datos, una definición de SOAP ni un lenguaje distribuido. A1-65/A2-III.12.
- **6193 — función de WSDL:** **corregida**, respuesta C. Se sustituyen distractores imprecisos sobre extensiones .NET, IDL y un supuesto XLAN por las funciones diferenciadas de UDDI, SOAP, WSDL y XML Schema. WSDL describe interfaces y bindings de servicios. A1-65/A2-III.12.
- **6194 — colas y consumidores competidores:** **corregida**, respuesta C. En un patrón punto a punto, cada mensaje se entrega normalmente a un consumidor competidor; si falla el procesamiento antes de confirmar, puede haber reentrega. «Una sola vez» no es una garantía universal y depende del modo de recepción/broker. A1-58/A2-II.6.
- **6195 — sistemas distribuidos:** **corregida**, respuesta A. Se repara el enunciado gramaticalmente defectuoso. Compartir recursos, repartir carga y ganar escalabilidad o disponibilidad por redundancia son beneficios posibles, no garantías automáticas. Se distingue sistema distribuido débilmente acoplado de multiprocesador con memoria compartida. A1-58/A2-II.6.

Fuentes primarias: [W3C SOAP 1.2](https://www.w3.org/TR/soap12-part1/), [W3C WSDL 2.0](https://www.w3.org/TR/wsdl/), [catálogo oficial OASIS](https://www.oasis-open.org/specs/) para UDDI; [Microsoft Azure Service Bus: colas y topics](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions), que diferencia entrega punto a punto frente a pub/sub y describe confirmación/reentrega; [IBM Documentation sobre procesamiento distribuido](https://www.ibm.com/docs/en/cics-ts/5.6.0?topic=programs-distributed-computing) y [sistemas distribuidos](https://www.ibm.com/docs/en/txseries/10.1.0?topic=concepts-what-is-distributed-computing); [Oracle, arquitectura de hardware paralelo](https://docs.oracle.com/cd/A57673_01/DOC/server/doc/SPS73/chap3.htm), para la distinción histórica entre acoplamiento estrecho y débil.

Convocatorias cotejadas: [GSI A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), temas 58 y 65; [GSI A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), anexo IX, temas II.6 y III.12. Cotejo curricular ITIC Academy: [bloque 28 Arquitectura SOA y requisitos no funcionales, versión 2026.1](https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk), con contenido explícito de servicios web/SOAP/WSDL, mensajería y arquitectura distribuida/cliente-servidor. La academia sirve para el encaje temático; las especificaciones y documentación técnica primaria sustentan las respuestas.

Ejecutados revisar-lote-1174.cjs, academia-lote-1174.cjs, inventario.cjs, verificar.cjs y git diff --check. Inventario esperado: 12.123 preguntas; 6.190 examinadas; 6.080 verificadas; 110 pendientes documentadas; 5.933 sin revisar individualmente; cero errores estructurales.

`;
assert.ok(s.includes(old),'No coincide el resumen previo al lote 1174');
assert.ok(s.includes('## Lote 1173 — 13 de noviembre de 2026'),'No se encontró el lote anterior');
s=s.replace(old,neu).replace('## Lote 1173 — 13 de noviembre de 2026',section+'## Lote 1173 — 13 de noviembre de 2026');
fs.writeFileSync(file,s);console.log('README actualizado para el lote 1174.');
