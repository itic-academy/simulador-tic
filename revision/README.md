# Revisión del banco TIC — estado al 22 de octubre de 2026

Estado parcial, no revisión completa del banco. Publicación desde la rama `main`. Último lote aplicado: 116 (IDs 896–900). Acumulado: 900 preguntas revisadas, 861 verificadas (248 vigentes, 533 corregidas y 80 históricas) y 39 pendientes de resolver (22 de fuente y 17 de ambigüedad); quedan 11.223 sin revisión de contenido. Hay 621 preguntas con cambios en enunciado, opciones o clave respecto del original. La cobertura total sigue pendiente.

## Entregables

- `temario-oficial.json`: catálogo literal de 133 temas A1 (anexo I, BOE-A-2025-25938) y 57 temas A2 de ingreso libre (anexo IX, BOE-A-2025-26262). Los temas A2 reinician numeración por bloque; se identifican con bloque romano.
- `cambios-lote-001.json`: original y resultado de los IDs 1–12, con etiquetas, correspondencias oficiales, fuentes, artículos, fecha y estado. Once verificadas, una pendiente de fuente (ID 11). Cinco preguntas reformuladas para concretar el supuesto o eliminar ambigüedades (4, 6, 8, 10, 12). Se conservan los índices de respuesta.
- `cambios-lote-002.json`: original y resultado de los IDs 13–40.
- `cambios-lote-003.json` y `cambios-lote-004.json`: IDs 41–100.
- `cambios-lote-005.json` a `cambios-lote-009.json`: IDs 101–200, examinadas individualmente el 13 de octubre. Total acumulado: 200 clasificadas; 177 verificadas (66 vigentes, 105 corregidas y 6 históricas); 23 con dudas abiertas. El bloque de academia de los IDs 41–200 sigue pendiente de cotejo.
- 109 preguntas tienen cambios en enunciado, opciones o respuesta respecto al banco original: 57 en los IDs 101–200. Este recuento excluye cambios solo de etiquetas y comentarios e incluye las preguntas históricas cuyo enunciado se ha precisado. Por eso no coincide con el estado «corregida».
- `inventario.json`: comprobación estructural de las 12.123 preguntas, grupos con enunciado repetido y referencias que necesitan revisión contextual. Las coincidencias de palabras no demuestran obsolescencia. No se elimina ningún duplicado automáticamente.
- El simulador muestra los temas y estado; su pantalla de revisión muestra explicaciones y enlaces de este lote.
- `revision.html`: vista de consulta con búsqueda por ID, texto, etiqueta o tema oficial; filtros por estado y cuerpo, fuentes y comparación con el original.

## Criterios

Una tecnología antigua puede formar parte del programa. No actualizar por antigüedad sin estudiar el supuesto. La fuente normativa primaria prevalece frente al material de academia. Una clasificación no demuestra que la respuesta esté verificada.

Los antiguos campos `tema` y `bloque` se conservan por compatibilidad; la clasificación nueva usa `clasificacion.A1`, `clasificacion.A2` y `bloque_academia`. Una lista vacía de A2 significa que no se ha asignado correspondencia directa; no certifica que la pregunta sea ajena al programa. Las preguntas sin `revision` están sin revisar. Las preguntas pendientes siguen en el banco y su respuesta no está certificada.

El material de Drive está accesible y se ha inspeccionado su inventario; todavía no se han estudiado todos los PDFs. En este lote se han usado las fuentes oficiales. El catálogo recoge la convocatoria indicada, no afirma que no existan correcciones posteriores. Antes de cerrar la revisión global se comprobarán correcciones y modificaciones de la convocatoria y de las normas.

## Reproducibilidad

Desde la raíz: `node revision/catalogo.cjs` reconstruye el mapa desde las copias HTML; `node revision/inventario.cjs` valida el banco y actualiza el informe. `node revision/lote-001.cjs` solo debe ejecutarse sobre el banco original: impide aplicar el lote dos veces. `node revision/verificar.cjs` comprueba que los cambios estén registrados y que las preguntas fuera del lote permanezcan iguales al commit inicial.

## Pendiente

11.223 preguntas sin revisión de contenido. Siguiente ID: 901. Completar el estudio por bloques, las correspondencias de cada pregunta y las explicaciones; resolver las 39 dudas abiertas; revisar los grupos repetidos y los candidatos de vigencia. La revisión completa no está terminada.

GitHub Pages publica desde `main`, carpeta raíz. La vista de revisión está disponible en `/simulador-tic/revision.html` después del despliegue de estos cambios. Publicar un lote no certifica las preguntas pendientes ni las que siguen sin revisar.

Pendientes de fuente: 11, 32, 38, 48, 52, 54, 67, 73, 76, 77, 94, 95, 108, 306, 323, 428, 438, 489, 635, 692, 805 y 842. Pendientes por ambigüedad: 13, 31, 60, 68, 80, 86, 88, 99, 105, 111, 700, 792, 810, 821, 822, 881 y 899. Las observaciones de revisión de cada pregunta explican el motivo concreto. Son trabajo pendiente del revisor, no una petición de revisión al usuario.

Correcciones destacadas de esta continuación: LDAP (64) contenía dos respuestas defendibles; Java static (79) cambia la respuesta correcta de A a B; la fecha del artículo 6.d de la Orden ETD/465/2021 (89) pasa a 1 de marzo de 2023 conforme a la modificación de 2022; WebAssembly (98) admite ejecución fuera del navegador; Data Act (100) se actualiza a su aplicación general desde septiembre de 2025. Se conservan los originales completos.

En los IDs 101–200 destacan: snapshot frente a copia independiente (101); regresión y caja blanca con distractores solapados (102, 114); TCP frente a sockets genéricos (109); Wi-Fi 6E (112); DEHú (115); EIGRP (120); plazo de alzada de actos expresos (142); CETIC según RD 1125/2024 (154); denominación de la NTI de firma y sello (157); requisitos ENS según RD 311/2022 (161); modalidades Cl@ve y REG (163–164); mantenimiento concurrente Tier III (166); traducciones TLB (174); Jakarta Pages (183); firma digital sin equipararla genéricamente a cifrado (193); EER con dos respuestas equivalentes en el original (197). Las preguntas de EPA 2022 (150) y arquitectura clásica iOS (178) se delimitan como históricas.

## Vista local y comprobaciones

Desde la raíz del repositorio, ejecutar `node revision/servidor.cjs` y abrir `http://127.0.0.1:8765/revision.html`. El servidor solo escucha en este equipo. Debe permanecer abierto para consultar la vista.

En una comprobación anterior en navegador se verificaron la carga del banco, la búsqueda por ID, el despliegue del original y el filtro de preguntas con dudas. Tras el lote 082 se han ejecutado el inventario y el verificador: comprueban los 735 registros de cambios y las 11.388 preguntas intactas frente al commit original. El inventario no detecta errores estructurales; señala 14 grupos con enunciados repetidos y 57 candidatos por referencias potencialmente antiguas, pendientes de revisión contextual. La reducción de un grupo repetido se debe a reformular un enunciado, no a eliminar preguntas. Los scripts de lote se aplican una sola vez; abortan si detectan preguntas ya revisadas.

## Lote 010 — 14 de octubre

IDs 201–220 contrastados y clasificados. Doce preguntas modificadas y ocho conservadas con explicación y fuente. Acumulado: 220 examinadas, 197 verificadas y 23 pendientes de resolver; 121 preguntas con cambios de contenido (117 con estado corregida y cuatro históricas reformuladas). Estados: 74 vigentes, 117 corregidas, seis históricas y 23 pendientes. Quedan 11.903 sin revisar.

Se precisan Scrum, el marco APM de Highsmith, protocolos de objetos, normalización relacional y prototipos desechables; se distingue ISTQB de herramientas, wrapping de interoperabilidad y commit en SVN de commit en Git. ISO 9001:2015 queda acotada frente a 2008, sin presentarla como una versión nueva. La compatibilidad de PHP se separa de los requisitos de una versión concreta de Drupal.

## Lote 011 — 14 de octubre

IDs 221–250: 30 preguntas examinadas y 18 con cambios de contenido. Acumulado: 250 examinadas, 227 verificadas y 23 pendientes de resolver; 139 preguntas con cambios de contenido. Estados: 85 vigentes, 134 corregidas, ocho históricas y 23 pendientes. Quedan 11.873 sin revisar; siguiente ID 251.

Se corrigen cohesión frente a acoplamiento (248), varias respuestas válidas en UML (241), herencia múltiple de clases frente a interfaces Java (242), nombres de lenguajes deteriorados (246) y referencias de desarrollo móvil (230). Se precisa el alcance de RFC 1918, Ethernet full-duplex, SAML y las dimensiones ENS. ITIL v3 y WannaCry se conservan con contexto histórico explícito.

El usuario ha autorizado expresamente continuar automáticamente cada diez minutos en este mismo chat, incluidos commits y publicación. Automatización activa: completar-revisi-n-del-banco-tic-a1-y-a2. Retomar desde el primer ID sin revisión, preservar trazabilidad y resolver las dudas antiguas. No confundir el estado clasificada con una verificación de contenido.

## Lote 012 — 14 de octubre

IDs 251–270: 20 preguntas verificadas, siete con correcciones de contenido. Total acumulado: 270 examinadas, 247 verificadas, 23 pendientes y 146 con cambios de contenido. Estados: 98 vigentes, 141 corregidas, ocho históricas y 23 pendientes. Siguiente ID 271; quedan 11.853 sin revisar.

Se aclaran polimorfismo, clases abstractas, IPC, comunicación en UML 2, estructuras de control, MVC y el papel de los casos de uso en la obtención de requisitos de datos. Se confirma la definición de herencia estricta con una publicación académica primaria.

## Lote 013 — 14 de octubre

IDs 271–280: diez preguntas verificadas, seis con correcciones de contenido. Acumulado: 280 examinadas, 257 verificadas, 23 pendientes y 152 con cambios de contenido. Estados: 102 vigentes, 147 corregidas, ocho históricas y 23 pendientes. Quedan 11.843 sin revisar; siguiente ID 281.

Se separa el modelo 4+1 de la notación UML, se precisan caminos de comunicación entre nodos, invocación estática CORBA y sobrecarga Java, y se distingue herencia de implementación de interfaces. Adapter se identifica como patrón GoF. No se han revisado nuevos PDFs de academia en este lote.

## Lote 014 — 14 de octubre

IDs 281–290: diez preguntas verificadas, siete modificadas. Acumulado: 290 examinadas, 267 verificadas, 23 pendientes y 159 con cambios de contenido. Estados: 105 vigentes, 154 corregidas, ocho históricas y 23 pendientes. Quedan 11.833 sin revisar; siguiente ID 291.

La pregunta 281 cambia la clave de C a D: los métodos de clase Java son static, no constructores y destructores. Se eliminan ambigüedades de cohesión (283) y acceso a miembros privados (285), se precisa MVC y el concepto de excepción y se retira un recuento antiguo innecesario de diagramas UML. No se han estudiado nuevos PDFs de academia en este lote.


## Lote 015 — 14 de octubre

IDs 291–300: diez preguntas verificadas, cinco modificadas. Acumulado: 300 examinadas, 277 verificadas, 23 pendientes y 164 con cambios de contenido. Estados: 110 vigentes, 159 corregidas, ocho históricas y 23 pendientes. Quedan 11.823 sin revisar; siguiente ID 301.

Se sustituye la arquitectura antigua de RMI por la función del stub, se precisa acoplamiento de marca y agregación compartida y se actualiza la referencia de perfiles UML. La pregunta CRC (297) cambia la clave de D a B al separar responsabilidades de detalles de implementación y colaboradores. Fuentes primarias: Oracle, OMG, publicación original de Beck y Cunningham y material docente universitario. No se han estudiado nuevos PDFs de academia en este lote.


## Lote 016 — 15 de octubre

IDs 301–310: diez examinadas, nueve verificadas y ocho corregidas. Acumulado: 310 examinadas, 286 verificadas, 24 pendientes y 172 con cambios de contenido. Estados: 111 vigentes, 167 corregidas, ocho históricas y 24 pendientes. Quedan 11.813 sin revisar; siguiente ID 311.

Se precisa mock, middleware, MVC, despliegue UML, RPC y clase abstracta. Se elimina PL/SQL como distractor supuestamente no orientado a objetos. La pregunta 306 conserva su original y queda pendiente de fuente: la URL oficial https://administracionelectronica.gob.es/pae_Home/dam/jcr:da7d91fa-d6bd-467c-be32-a72e27c603b3/METRICA_V3_Tecnicas.pdf devuelve Request Rejected; NIST confirma ICOM para IDEF0, pero no se certifica con ello la redacción concreta de MÉTRICA/SADT. No se han estudiado nuevos PDFs de academia en este lote.


## Lote 017 — 15 de octubre

IDs 311–320: diez verificadas y seis corregidas. Acumulado: 320 examinadas, 296 verificadas, 24 pendientes y 178 con cambios de contenido. Estados: 115 vigentes, 173 corregidas, ocho históricas y 24 pendientes. Quedan 11.803 sin revisar; siguiente ID 321.

La pregunta 311 cambia de D a C: un caso de uso no es un actor. Se precisa middleware, se distinguen relaciones entre clases de relaciones entre instancias, se mejora la definición de clase y se sustituye cardinalidad por multiplicidad al preguntar por límites UML. Se elimina una taxonomía didáctica imprecisa sobre tres bloques UML. No se han estudiado nuevos PDFs de academia en este lote; continúan los pendientes documentados.


## Lote 018 — 15 de octubre

IDs 321–330: diez examinadas, nueve verificadas y seis corregidas. Acumulado: 330 examinadas, 305 verificadas, 25 pendientes y 184 con cambios de contenido. Estados: 118 vigentes, 179 corregidas, ocho históricas y 25 pendientes. Quedan 11.793 sin revisar; siguiente ID 331.

Se distingue 4+1 de UML, se corrige el rol de una asociación y se actualiza el recuento a UML 2.5. Se precisan herencia múltiple y stub cliente. La 323 queda pendiente: se localizó un fragmento de Distributed Systems: Concepts and Design sobre CORBA/Persistent Java, pero no se pudo abrir el documento completo (bucle de redirección en https://ftp.utcluj.ro/pub/users/civan/CPD/3.RESURSE/6.Book_2012_Distributed%20systems%20_Couloris.pdf). Falta acotar el esquema histórico; no se certifica la afirmación genérica. No se han estudiado nuevos PDFs de academia en este lote.


## Lote 019 — 15 de octubre

IDs 331–340: diez verificadas y ocho corregidas. Acumulado: 340 examinadas, 315 verificadas, 25 pendientes y 192 con cambios de contenido. Estados: 120 vigentes, 187 corregidas, ocho históricas y 25 pendientes. Quedan 11.783 sin revisar; siguiente ID 341.

Se corrige la premisa de modificación arbitraria de UML, se precisa despacho dinámico y sobrecarga, se acota el finalizador a C# y se rehace la pregunta de tecnologías de vista con HTML, CSS y Razor. Se distingue contrato de implementación y se define IIOP con su relación con GIOP/TCP. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.


## Lote 020 — 15 de octubre

IDs 341–350: diez verificadas y siete corregidas. Acumulado: 350 examinadas, 325 verificadas, 25 pendientes y 199 con cambios de contenido. Estados: 123 vigentes, 194 corregidas, ocho históricas y 25 pendientes. Quedan 11.773 sin revisar; siguiente ID 351.

Se corrige la confusión entre métodos de clase y constructores, se concreta la salida HTML de Razor, se precisan las condiciones de los árboles de expansión y se reformula una pregunta incompleta sobre semántica RPC. Se identifica la API Jini de RemoteEventListener y se distingue operación de método en UML. La clasificación A1 de grafos queda sin asignación directa; no supone excluirla del programa. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.


## Lote 021 — 15 de octubre

IDs 351–360: diez verificadas y seis con cambios de contenido (cinco corregidas y una histórica reformulada). Acumulado: 360 examinadas, 335 verificadas, 25 pendientes y 205 con cambios de contenido. Estados: 127 vigentes, 199 corregidas, nueve históricas y 25 pendientes. Quedan 11.763 sin revisar; siguiente ID 361.

Se actualizan las clasificaciones de comportamiento e interacción de UML, se precisa MVC y se reformula modularidad según el informe original de McCall (copia consultada en Scribd, no sus preguntas generadas). PGGC queda acotado a la edición de 1991: el extracto indexado de la fuente oficial confirma siete riesgos, aunque la descarga directa es rechazada. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.

## Lote 022 — 15 de octubre

IDs 361–370: diez verificadas y nueve con cambios de contenido (seis corregidas y tres históricas reformuladas). Acumulado: 370 examinadas, 345 verificadas, 25 pendientes y 214 con cambios de contenido. Estados: 128 vigentes, 205 corregidas, doce históricas y 25 pendientes. Quedan 11.753 sin revisar; siguiente ID 371.

Se distingue la longitud observada de Halstead de otras métricas, se precisa el nombre de SQuaRE y se retira una afirmación genérica sobre certificación. PGGC y COCOMO quedan acotados a sus modelos históricos. Se confirma la dependencia de la CSAE en la disposición adicional novena de la Ley 40/2015 y la taxonomía de mantenimiento de MÉTRICA v3. Las fuentes oficiales de PGGC y MÉTRICA se contrastaron mediante sus extractos indexados; no se afirma haber descargado íntegros los documentos rechazados. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 023 — 15 de octubre

IDs 371–380: diez verificadas y diez con cambios de contenido (nueve corregidas y una histórica reformulada). Acumulado: 380 examinadas, 355 verificadas, 25 pendientes y 224 con cambios de contenido. Estados: 128 vigentes, 214 corregidas, trece históricas y 25 pendientes. Quedan 11.743 sin revisar; siguiente ID 381.

Se corrige la expansión de CAAT, se precisa la finalidad de Gantt y se acota la clasificación de áreas PMBOK a 2013. Se contrasta el artículo 96 de propiedad intelectual. Se eliminan afirmaciones absolutas sobre costes RAID, ahorro del 99 % por deduplicación y ausencia del sistema operativo en todo el arranque. Se distinguen sector direccionable, copia incremental y capacidades convencionales de Blu-ray. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 024 — 15 de octubre

IDs 381–390: diez verificadas y ocho corregidas. Acumulado: 390 examinadas, 365 verificadas, 25 pendientes y 232 con cambios de contenido. Estados: 130 vigentes, 222 corregidas, trece históricas y 25 pendientes. Quedan 11.733 sin revisar; siguiente ID 391.

Se precisan quantum round-robin, hashes y marcadores de shadow e inodos. Se elimina la garantía absoluta de portabilidad por ODBC y la independencia del diseño conceptual respecto de los usuarios. Se reformula la pregunta de distribuciones sobre el patrocinio de Fedora, y se distinguen los esquemas conceptual y externo ANSI/SPARC. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 025 — 15 de octubre

IDs 391–400: diez verificadas y siete con cambios de contenido (cinco corregidas y dos históricas reformuladas). Acumulado: 400 examinadas, 375 verificadas, 25 pendientes y 239 con cambios de contenido. Estados: 133 vigentes, 227 corregidas, quince históricas y 25 pendientes. Quedan 11.723 sin revisar; siguiente ID 401.

Se actualizan JTA y Enterprise Beans a la nomenclatura Jakarta, se precisa la función de JNI y se elimina la clasificación ambigua de Tomcat. Kodo y applets quedan expresamente históricos; se distingue la JVM cliente del proceso del navegador. Se precisa Rampart como módulo de Axis2. El inventario encuentra 57 candidatos léxicos, que siguen sin ser una comprobación de vigencia. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 026 — 15 de octubre

IDs 401–410: diez verificadas y siete corregidas. Acumulado: 410 examinadas, 385 verificadas, 25 pendientes y 246 con cambios de contenido. Estados: 136 vigentes, 234 corregidas, quince históricas y 25 pendientes. Quedan 11.713 sin revisar; siguiente ID 411.

La 401 cambia de D a B tras concretar la compatibilidad de Apache 2.0 con GPLv3 frente a GPLv2. Se corrige la definición de OLTP y se eliminan absolutos sobre rendimiento OLAP y modificación de un data warehouse. Se precisan los data marts independientes, Atom y XLink. Se contrastan ID3 con el artículo original, JSON con RFC 8259 y AES con NIST. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 027 — 15 de octubre

IDs 411–420: diez verificadas y ocho con cambios de contenido (siete corregidas y una histórica reformulada). Acumulado: 420 examinadas, 395 verificadas, 25 pendientes y 254 con cambios de contenido. Estados: 138 vigentes, 241 corregidas, dieciséis históricas y 25 pendientes. Quedan 11.703 sin revisar; siguiente ID 421.

La pregunta 413 cambia de D a A: el artículo 11.3 del RD 255/2025 fija dos años para los certificados del DNI, frente a los 60 meses del banco. Se precisan formato físico del DNI, funciones CA/RA y criptoanálisis. Se acotan remolino y RAD y se corrige Merise; se contrastó además su enfoque sistémico en https://www.cnam.fr/formation/methodes-pour-linformatisation. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 028 — 15 de octubre

IDs 421–430: diez examinadas, nueve verificadas, una pendiente y seis corregidas. Acumulado: 430 examinadas, 404 verificadas, 26 pendientes y 260 con cambios de contenido. Estados: 141 vigentes, 247 corregidas, dieciséis históricas y 26 pendientes. Quedan 11.693 sin revisar; siguiente ID 431.

Se precisan el perfil de analista de MÉTRICA, DataRow, clase abstracta C#, despliegue UML, diccionario Oracle y proceso frente a almacén en DFD. La 428 conserva su original y queda pendiente: no se ha contrastado la regla de consistencia DFD/modelo de datos y el PDF oficial de técnicas sigue rechazando el acceso. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 029 — 16 de octubre

IDs 431–440: diez examinadas, nueve verificadas, una pendiente y cinco corregidas. Acumulado: 440 examinadas, 413 verificadas, 27 pendientes y 265 con cambios de contenido. Estados: 145 vigentes, 252 corregidas, dieciséis históricas y 27 pendientes. Quedan 11.683 sin revisar; siguiente ID 441.

Se elimina la ambigüedad del acoplamiento de marca frente a herencia, se precisa el orden parcial de eventos UML y se distingue actividad de tarea en PSI 7. Se aclaran cobertura de caja blanca e independencia lineal de caminos básicos. Memento, Singleton, gestión de configuración y DSI 11.2 se conservan con explicación y fuente. La 438 queda pendiente por rechazo de acceso al PDF oficial de técnicas; tampoco se ha resuelto la 428 mediante ese documento. Los pasajes de PSI, DSI y configuración se contrastaron con extractos indexados oficiales. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.

## Lote 030 — 16 de octubre

IDs 441–450: diez verificadas y nueve con cambios de contenido (siete corregidas y dos históricas reformuladas). Acumulado: 450 examinadas, 423 verificadas, 27 pendientes y 274 con cambios de contenido. Estados: 146 vigentes, 259 corregidas, dieciocho históricas y 27 pendientes. Quedan 11.673 sin revisar; siguiente ID 451.

COCOMO 81 y CMMI 1.3 quedan delimitados históricamente. Se sustituye la referencia ITIL sin versión por el propósito de Deployment Management en ITIL 4. Se precisa el cometido de IANA y se retiran garantías universales sobre ahorro documental y cortafuegos FTP. La pregunta de fibra tenía distractores problemáticos: se elimina la supuesta imposibilidad de interceptación y se distingue vidrio de conductores metálicos. Se precisan TC y encapsulación MPLS según RFC 3032 y 5462. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.

## Lote 031 — 16 de octubre

IDs 451–460: diez verificadas y nueve con cambios de contenido (siete corregidas y dos históricas reformuladas). Acumulado: 460 examinadas, 433 verificadas, 27 pendientes y 283 con cambios de contenido. Estados: 147 vigentes, 266 corregidas, veinte históricas y 27 pendientes. Quedan 11.663 sin revisar; siguiente ID 461.

Se corrige xDSL, se delimitan Mobile WiMAX y clases IPv4 como referencias históricas, se distingue Bluetooth Classic de LE y tasa física de caudal útil. Se eliminan distractores ambiguos de ADSL2plus, se actualiza TCP a RFC 9293 y se corrige UDP: datagramas sin garantía de entrega u orden, no flujo unidireccional. Se precisan FTP básico y host privado; la máscara /20 se confirma contando los bits. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.

## Lote 032 — 16 de octubre

IDs 461–470: diez verificadas y nueve con cambios de contenido (ocho corregidas y una histórica reformulada). Acumulado: 470 examinadas, 443 verificadas, 27 pendientes y 292 con cambios de contenido. Estados: 148 vigentes, 274 corregidas, veintiuna históricas y 27 pendientes. Quedan 11.653 sin revisar; siguiente ID 471.

Se actualiza la referencia IPv6 a RFC 4291 y se precisa FF00::/8; NGN deja de describirse como una promesa futura. Se corrige el primer dividendo digital a 790–862 MHz con contexto histórico y se sustituye la falsa diferencia de bidireccionalidad POP/IMAP por gestión y sincronización de buzones. RADIUS queda acotado a RFC 2865, sin atribuirle PPP obligatorio; se precisa el filtrado por cabeceras y se contrasta la adscripción CCN–CNI en el artículo 1.3 del RD 421/2004. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.

## Lote 033 — 17 de octubre

IDs 471–480: diez verificadas y diez con cambios de contenido (nueve corregidas y una histórica reformulada). Acumulado: 480 examinadas, 453 verificadas, 27 pendientes y 302 con cambios de contenido. Estados: 148 vigentes, 283 corregidas, veintidós históricas y 27 pendientes. Quedan 11.643 sin revisar; siguiente ID 481.

Se corrige H.325 por H.235, se elimina la duplicidad hipervisor/VMM y se precisan las propiedades de Popek y Goldberg. Se retiran generalizaciones sobre primeros pasos y ventajas de virtualización, se concreta la paravirtualización y se acota el superbloque a ext4. BSD se identifica sin atribuir SVR4 a todos los otros UNIX. Un fallo transitorio del lanzador impidió la primera escritura; se comprobó que no había cambios y se reintentó correctamente. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.

## Lote 034 — 18 de octubre

IDs 481–490: nueve verificadas y una pendiente de fuente (489); siete con cambios de contenido (seis corregidas y una histórica reformulada). Acumulado: 490 examinadas, 462 verificadas, 28 pendientes y 309 con cambios de contenido. Estados: 150 vigentes, 289 corregidas, 23 históricas y 28 pendientes. Quedan 11.633 sin revisar; siguiente ID 491.

Se distingue GTK de los gestores de ventanas, PID 0 de init de usuario y la portabilidad de Linux de una simple recompilación. Se elimina una pregunta defectuosa sobre arquitectura UNIX/MINIX mediante un supuesto explícito sobre MINIX 3; GNOME queda descrito sin valoraciones subjetivas. Kugar se delimita históricamente y POSIX como estándar de interfaces. DJL queda pendiente porque su sitio primario no ha podido consultarse; no se certifica su respuesta con fuentes secundarias. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 035 — 20 de octubre

IDs 491–495: cinco verificadas y cinco con cambios de contenido (cuatro corregidas y una histórica reformulada). Acumulado: 495 examinadas, 467 verificadas, 28 pendientes y 314 con cambios de contenido. Estados: 150 vigentes, 293 corregidas, 24 históricas y 28 pendientes. Quedan 11.628 sin revisar; siguiente ID 496.

Se acota el nivel 6 al esquema SysV, se precisa la publicación conjunta de POSIX y se distingue la derivación directa e indirecta de Debian. Ubuntu se describe con hechos comprobables en lugar de categorías subjetivas de usuarios. Se corrige la cronología implícita de las familias System V y BSD. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 036 — 20 de octubre

IDs 496–500: cinco verificadas y tres con cambios de contenido. Acumulado: 500 examinadas, 472 verificadas, 28 pendientes y 317 con cambios de contenido. Estados: 152 vigentes, 296 corregidas, 24 históricas y 28 pendientes. Quedan 11.623 sin revisar; siguiente ID 501.

Se confirma top y ls; se precisa POSIX y se delimita el inodo a ext4. Se corrige la ambigüedad de kill: terminar un proceso era también un uso válido entre las opciones originales, mientras que su función general es enviar señales. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 037 — 20 de octubre

IDs 501–505: cinco verificadas y tres con cambios de contenido (dos corregidas y una histórica reformulada). Acumulado: 505 examinadas, 477 verificadas, 28 pendientes y 320 con cambios de contenido. Estados: 154 vigentes, 298 corregidas, 25 históricas y 28 pendientes. Quedan 11.618 sin revisar; siguiente ID 506.

Se confirman chmod y la distinción de OpenVMS frente a UNIX. Se delimita el formato histórico SystemV FS, se añade -s a ln y se identifica KWin en KDE Plasma sobre Wayland. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 038 — 20 de octubre

IDs 506–510: cinco verificadas y cuatro con cambios de contenido (tres corregidas y una histórica reformulada). Acumulado: 510 examinadas, 482 verificadas, 28 pendientes y 324 con cambios de contenido. Estados: 155 vigentes, 301 corregidas, 26 históricas y 28 pendientes. Quedan 11.613 sin revisar; siguiente ID 511.

Se precisa la construcción de módulos Linux, se delimita el esquema de paquetes Shorewall/IPv6 y se explica el estado zombi reparando un distractor incompleto. En cargadores históricos se sustituye LIUL por una utilidad real verificable, chmod. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 039 — 20 de octubre

IDs 511–515: cinco verificadas y tres con cambios de contenido. Acumulado: 515 examinadas, 487 verificadas, 28 pendientes y 327 con cambios de contenido. Estados: 157 vigentes, 304 corregidas, 26 históricas y 28 pendientes. Quedan 11.608 sin revisar; siguiente ID 516.

Se corrige el falso distractor CFS, que sí es un sistema de archivos para Unix, sustituyéndolo por SSH. Se precisa el acceso restringido a shadow sin afirmar exclusividad universal de root y se aclaran PV/VG/LV. Se confirman RPM y RBAC en SELinux. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 040 — 20 de octubre

IDs 516–520: cinco verificadas y tres con cambios de contenido. Acumulado: 520 examinadas, 492 verificadas, 28 pendientes y 330 con cambios de contenido. Estados: 159 vigentes, 307 corregidas, 26 históricas y 28 pendientes. Quedan 11.603 sin revisar; siguiente ID 521.

Se confirman POSIX y Samba. Se explicita la regla sudoers que autoriza wheel, se sustituye un recuento universal de estados UNIX por el significado verificable de R en ps y se distingue el contenido lógico del archivo regular de su almacenamiento físico. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 041 — 20 de octubre

IDs 521–525: cinco verificadas y cuatro con cambios de contenido. Acumulado: 525 examinadas, 497 verificadas, 28 pendientes y 334 con cambios de contenido. Estados: 160 vigentes, 311 corregidas, 26 históricas y 28 pendientes. Quedan 11.598 sin revisar; siguiente ID 526.

Se confirma fork, se concreta GRUB 2 y se elimina la generalización de listas enlazadas para todos los sistemas de archivos. Se aclara la distinción entre código común y específico de arquitectura en Linux y se precisan límites y recursos como causas de fallo de fork. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 042 — 20 de octubre

IDs 526–530: cinco verificadas y cuatro con cambios de contenido (tres corregidas y una histórica reformulada). Acumulado: 530 examinadas, 502 verificadas, 28 pendientes y 338 con cambios de contenido. Estados: 161 vigentes, 314 corregidas, 27 históricas y 28 pendientes. Quedan 11.593 sin revisar; siguiente ID 531.

Se precisan señales y permisos 640, se confirma fork y se corrige XCFE por Xfce. La pregunta POSIX no podía excluir MVS sin concretar versión: IBM documenta MVS/ESA OpenEdition con interfaces POSIX. Se convierte en una referencia histórica explícita y se cambia la clave a B. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 043 — 20 de octubre

IDs 531–535: cinco verificadas y cinco con cambios de contenido (cuatro corregidas y una histórica reformulada). Acumulado: 535 examinadas, 507 verificadas, 28 pendientes y 343 con cambios de contenido. Estados: 161 vigentes, 318 corregidas, 28 históricas y 28 pendientes. Quedan 11.588 sin revisar; siguiente ID 536.

Se precisa que tee copia a todos los archivos indicados y se delimita PID 0 a Linux. Pine queda identificado históricamente por su función de correo. Se elimina el solapamiento entre shell e interfaz de usuario y se actualizan los distractores de sistemas de archivos con ext4, XFS, Btrfs y Bash. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 044 — 20 de octubre

IDs 536–540: cinco verificadas y cuatro con cambios de contenido. Acumulado: 540 examinadas, 512 verificadas, 28 pendientes y 347 con cambios de contenido. Estados: 162 vigentes, 322 corregidas, 28 históricas y 28 pendientes. Quedan 11.583 sin revisar; siguiente ID 541.

Se confirma /etc, se precisa la operación de tune2fs -j sin referencias a últimas versiones y se sustituye Mandeva por FreeBSD. Se acota resolv.conf al resolver de la biblioteca C y la relación nombre-inodo a entradas ext4, sin presentarla como lista exhaustiva de campos. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 045 — 20 de octubre

IDs 541–545: cinco verificadas y cuatro con cambios de contenido (tres corregidas y una histórica reformulada). Acumulado: 545 examinadas, 517 verificadas, 28 pendientes y 351 con cambios de contenido. Estados: 163 vigentes, 325 corregidas, 29 históricas y 28 pendientes. Quedan 11.578 sin revisar; siguiente ID 546.

Se distingue daemon de cualquier trabajo en background, se confirma pwd y se precisa la arquitectura de Hurd sobre Mach. El empaquetado de ReiserFS queda delimitado históricamente y Wine se define como capa de compatibilidad sin exigir X11. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 046 — 20 de octubre

IDs 546–550: cinco verificadas y tres con cambios de contenido (dos corregidas y una histórica reformulada). Acumulado: 550 examinadas, 522 verificadas, 28 pendientes y 354 con cambios de contenido. Estados: 165 vigentes, 327 corregidas, 30 históricas y 28 pendientes. Quedan 11.573 sin revisar; siguiente ID 551.

Se corrige la expansión de WMI, se acotan las trece direcciones al formato histórico System V y se confirma el emparejamiento ls/pwd/cat/more y el editor Kate. Se precisa que chmod 754 se refiere al grupo del archivo, no al del propietario. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 047 — 20 de octubre

IDs 551–555: cinco verificadas y tres con cambios de contenido. Acumulado: 555 examinadas, 527 verificadas, 28 pendientes y 357 con cambios de contenido. Estados: 167 vigentes, 330 corregidas, 30 históricas y 28 pendientes. Quedan 11.568 sin revisar; siguiente ID 556.

Se acota el esquema de punteros a ext2, se precisan los requisitos del arranque óptico y se confirma tee. Se contrasta la relación histórica de Linux con UNIX y MINIX mediante las notas originales de Torvalds. La comunicación por mensajes se reformula como recepción bloqueante de msgrcv, evitando confundir colas con rendezvous. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 048 — 21 de octubre

IDs 556–560: cinco verificadas y cinco con cambios de contenido (tres corregidas y dos históricas reformuladas). Acumulado: 560 examinadas, 532 verificadas, 28 pendientes y 362 con cambios de contenido. Estados: 167 vigentes, 333 corregidas, 32 históricas y 28 pendientes. Quedan 11.563 sin revisar; siguiente ID 561.

Se distingue registro textual de formato binario sin universalizar nombres de archivos, se sustituye un ranking ofimático sin fundamento y se elimina la errata Genome. Se corrige la clave de RFS de AT&T: D, no NFS de Sun. Se concreta el acceso a un recurso NFS montado. El despliegue del lote 047, cuya comprobación quedó bloqueada por el límite temporal del revisor automático, se ha confirmado satisfactorio. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 049 — 21 de octubre

IDs 561–565: cinco verificadas y tres con cambios de contenido (una corregida y dos históricas reformuladas). Acumulado: 565 examinadas, 537 verificadas, 28 pendientes y 365 con cambios de contenido. Estados: 169 vigentes, 334 corregidas, 34 históricas y 28 pendientes. Quedan 11.558 sin revisar; siguiente ID 566.

Se confirma IRIX y la lectura del modo 457. Se concreta ln con argumentos y se elimina hardlink como distractor ambiguo. GNOME se pregunta por su expansión original; la pregunta de shells se centra en Stephen Bourne para evitar dos atribuciones compatibles. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 050 — 21 de octubre

IDs 566–570: cinco verificadas y cinco con cambios de contenido. Acumulado: 570 examinadas, 542 verificadas, 28 pendientes y 370 con cambios de contenido. Estados: 169 vigentes, 339 corregidas, 34 históricas y 28 pendientes. Quedan 11.553 sin revisar; siguiente ID 571.

Se distingue distribución binaria de compilación obligatoria, se concreta la planificación SCHED_RR y se sustituye una clasificación genérica de UNIX por la licencia del núcleo Linux. Se precisan los supuestos de ldd y la arquitectura de Hurd sobre Mach. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 051 — 21 de octubre

IDs 571–575: cinco verificadas y cuatro con cambios de contenido (tres corregidas y una histórica reformulada). Acumulado: 575 examinadas, 547 verificadas, 28 pendientes y 374 con cambios de contenido. Estados: 170 vigentes, 342 corregidas, 35 históricas y 28 pendientes. Quedan 11.548 sin revisar; siguiente ID 576.

Se sustituyen límites ambiguos ext3/ext4 por extents, se concreta la arquitectura monolítica de Linux y se distingue Metacity de un escritorio completo. Bourne se identifica mediante UNIX séptima edición, eliminando la afirmación absoluta de shell más antiguo. Se confirma cadaver con el sitio del autor. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 052 — 21 de octubre

IDs 576–580: cinco verificadas y tres con cambios de contenido (dos corregidas y una histórica reformulada). Acumulado: 580 examinadas, 552 verificadas, 28 pendientes y 377 con cambios de contenido. Estados: 172 vigentes, 344 corregidas, 36 históricas y 28 pendientes. Quedan 11.543 sin revisar; siguiente ID 581.

Se delimita históricamente la regla par/impar de versiones Linux y se confirman cp -R y la arquitectura monolítica. Se actualiza la consulta de direcciones a iproute2 y se precisa el grupo del archivo en los permisos UNIX. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 053 — 21 de octubre

IDs 581–585: cinco verificadas y cuatro con cambios de contenido. Acumulado: 585 examinadas, 557 verificadas, 28 pendientes y 381 con cambios de contenido. Estados: 173 vigentes, 348 corregidas, 36 históricas y 28 pendientes. Quedan 11.538 sin revisar; siguiente ID 586.

Se corrige iwconfig, se precisa la relación entre root y prioridad de planificación y se delimita procfs a Linux. Se confirma la denominación root. Se corrige la inversión de cliente y servidor X en la pregunta sobre DISPLAY. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 054 — 21 de octubre

IDs 586–590: cinco verificadas y dos con cambios de contenido. Acumulado: 590 examinadas, 562 verificadas, 28 pendientes y 383 con cambios de contenido. Estados: 176 vigentes, 350 corregidas, 36 históricas y 28 pendientes. Quedan 11.533 sin revisar; siguiente ID 591.

Se confirma sed y la separación entre inodo y nombre en el directorio. Se precisa main de Ubuntu sin atribuir una licencia única a todos sus paquetes. Se confirma IRIX y se registra su equivalencia con la pregunta 561. Se pregunta por passwd sin universalizar su ruta de instalación. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 055 — 21 de octubre

IDs 591–595: cinco verificadas y cinco con cambios de contenido. Acumulado: 595 examinadas, 567 verificadas, 28 pendientes y 388 con cambios de contenido. Estados: 176 vigentes, 355 corregidas, 36 históricas y 28 pendientes. Quedan 11.528 sin revisar; siguiente ID 596.

Se concreta el intervalo del tiempo de respuesta en colas, se sustituye un ranking infundado de protocolos Linux por familias de sockets y se precisa la función de Cairo. Se elimina una atribución no fundamentada sobre el objetivo de Google y se definen precisión y exhaustividad con sus denominadores correctos. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 056 — 21 de octubre

IDs 596–600: cinco verificadas y tres con cambios de contenido. Acumulado: 600 examinadas, 572 verificadas, 28 pendientes y 391 con cambios de contenido. Estados: 178 vigentes, 358 corregidas, 36 históricas y 28 pendientes. Quedan 11.523 sin revisar; siguiente ID 601.

Se acota el ciclo documental al modelo NARA, se elimina la atribución estadística al modelo booleano y se confirma la función de las palabras vacías. Se precisa activo-pasivo por servicio y se elimina un distractor compatible con ese esquema. Proximal Nodes se contrasta con el artículo de sus autores. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 057 — 21 de octubre

IDs 601–605: cinco verificadas y cinco con cambios de contenido. Acumulado: 605 examinadas, 577 verificadas, 28 pendientes y 396 con cambios de contenido. Estados: 178 vigentes, 363 corregidas, 36 históricas y 28 pendientes. Quedan 11.518 sin revisar; siguiente ID 606.

Se sustituye la exclusión del análisis morfológico por lematización, se precisa la propiedad de los conjuntos borrosos y se separa deduplicación de disponibilidad. Se elimina un distractor ambiguo sobre lenguajes recuperativos y se define RTO como objetivo de recuperación. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 058 — 21 de octubre

IDs 606–610: cinco verificadas y cuatro con cambios de contenido. Acumulado: 610 examinadas, 582 verificadas, 28 pendientes y 400 con cambios de contenido. Estados: 179 vigentes, 367 corregidas, 36 históricas y 28 pendientes. Quedan 11.513 sin revisar; siguiente ID 611.

Se confirma la precisión y se distingue el objetivo RPO de la antigüedad real de una copia. Se precisa el análisis sintáctico, se acota la búsqueda a índices invertidos y se define la proporción de ruido para expresar su relación con la precisión. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 059 — 21 de octubre

IDs 611–615: cinco verificadas y cuatro con cambios de contenido. Acumulado: 615 examinadas, 587 verificadas, 28 pendientes y 404 con cambios de contenido. Estados: 180 vigentes, 371 corregidas, 36 históricas y 28 pendientes. Quedan 11.508 sin revisar; siguiente ID 616.

Se precisan los modelos vectorial y probabilístico, se hace explícita la exclusión opcional de palabras vacías y se confirma la evaluación postfix con pilas. Se define recuperación estructurada sin depender de una taxonomía no atribuida y se eliminan distractores ambiguos del modelo vectorial. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 060 — 21 de octubre

IDs 616–620: cinco verificadas y cinco con cambios de contenido. Acumulado: 620 examinadas, 592 verificadas, 28 pendientes y 409 con cambios de contenido. Estados: 180 vigentes, 376 corregidas, 36 históricas y 28 pendientes. Quedan 11.503 sin revisar; siguiente ID 621.

Se elimina la identificación exclusiva por frecuencias del modelo vectorial y se sustituye una afirmación sin fuente sobre la principal línea de investigación por una propiedad concreta de LSI. Se corrige el objetivo de recuperación documental y el significado de antidiccionario. Se diferencia CBT de RCT y se precisa su utilidad para copias incrementales. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 061 — 21 de octubre

IDs 621–625: cinco verificadas y dos con cambios de contenido. Acumulado: 625 examinadas, 597 verificadas, 28 pendientes y 411 con cambios de contenido. Estados: 183 vigentes, 378 corregidas, 36 históricas y 28 pendientes. Quedan 11.498 sin revisar; siguiente ID 626.

Se precisa el modelo probabilístico que aplica Bayes y se elimina una falsa diferencia entre bases documentales y relacionales: estas también pueden indexar texto completo. Se confirman las categorías de consultas web, la precisión y los productos con CMS mediante fuentes primarias. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 062 — 21 de octubre

IDs 626–630: cinco verificadas y tres con cambios de contenido. Acumulado: 630 examinadas, 602 verificadas, 28 pendientes y 414 con cambios de contenido. Estados: 185 vigentes, 381 corregidas, 36 históricas y 28 pendientes. Quedan 11.493 sin revisar; siguiente ID 631.

Se confirma heapsort, se distinguen precisión y exhaustividad y se sustituye la comparación imprecisa sobre ficheros inversos por su función. Se concreta el alcance de PDF/A-1 con la ficha ISO vigente y se confirma Bayes en el modelo probabilístico clásico. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 063 — 21 de octubre

IDs 631–635: cuatro verificadas, cuatro con cambios de contenido y una pendiente de fuente. Acumulado: 635 examinadas, 606 verificadas, 29 pendientes y 418 con cambios de contenido. Estados: 185 vigentes, 385 corregidas, 36 históricas y 29 pendientes. Quedan 11.488 sin revisar; siguiente ID 636.

Se distingue el índice invertido de los modelos que lo utilizan, se acota la justificación de replicación por RPO y se precisa la exclusión opcional de palabras vacías. Se aclara que browsing y consultas pueden combinarse. El ID 635 conserva la clave original sin certificar: falta una fuente primaria que identifique las denominadas Normas Gamma; las búsquedas exactas no localizaron una definición pertinente. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 064 — 21 de octubre

IDs 636–640: cinco verificadas y cuatro con cambios de contenido. Acumulado: 640 examinadas, 611 verificadas, 29 pendientes y 422 con cambios de contenido. Estados: 186 vigentes, 389 corregidas, 36 históricas y 29 pendientes. Quedan 11.483 sin revisar; siguiente ID 641.

Se corrige la limitación de recuperación a bases documentales, se acota el esquema incremental y se sustituye una comparación de rendimiento sin condiciones por propiedades del modelo vectorial. Se distingue reducción del vocabulario de compresión sin pérdida y se matiza stemming frente a lematización. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 065 — 21 de octubre

IDs 641–645: cinco verificadas y cuatro con cambios de contenido. Acumulado: 645 examinadas, 616 verificadas, 29 pendientes y 426 con cambios de contenido. Estados: 187 vigentes, 393 corregidas, 36 históricas y 29 pendientes. Quedan 11.478 sin revisar; siguiente ID 646.

Se confirma la retroalimentación explícita de relevancia, se concreta una limitación del modelo booleano y se elimina una valoración de complejidad sin fundamento sobre browsing. Se corrigen las relaciones de tesauro y la atribución exclusiva de índices invertidos a bases documentales. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 066 — 21 de octubre

IDs 646–650: cinco verificadas y tres con cambios de contenido. Acumulado: 650 examinadas, 621 verificadas, 29 pendientes y 429 con cambios de contenido. Estados: 189 vigentes, 396 corregidas, 36 históricas y 29 pendientes. Quedan 11.473 sin revisar; siguiente ID 651.

Se acotan los mecanismos de búsqueda documental a las funcionalidades disponibles. Se precisa la extensión del título preliminar y la referencia constitucional de los plazos electorales. Se contrastan las respuestas y distractores sobre Gobierno y Corona con los artículos 57–59, 68 y 99–102 del BOE. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 067 — 21 de octubre

IDs 651–655: cinco verificadas y tres con cambios de contenido. Acumulado: 655 examinadas, 626 verificadas, 29 pendientes y 432 con cambios de contenido. Estados: 191 vigentes, 399 corregidas, 36 históricas y 29 pendientes. Quedan 11.468 sin revisar; siguiente ID 656.

Se concreta la rigidez constitucional y el límite material de la transferencia del artículo 150.2. Se confirman el título del Poder Judicial y la enumeración del personal local del artículo 89. Se elimina la afirmación absoluta sobre la presidencia del Pleno en grandes municipios y se contrastan sus competencias. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.
## Lote 068 — 21 de octubre

IDs 656–660: cinco verificadas y dos con cambios de contenido. Acumulado: 660 examinadas, 631 verificadas, 29 pendientes y 434 con cambios de contenido. Estados: 194 vigentes, 401 corregidas, 36 históricas y 29 pendientes. Quedan 11.463 sin revisar; siguiente ID 661.

Se sustituye una clasificación doctrinal ambigua del Estado por la organización territorial del artículo 137 y se acota la enumeración de entidades locales al artículo 3 de la LBRL. Se distinguen procedimiento y expediente, se confirma la descentralización funcional de los organismos autónomos y se contrasta la fase de instrucción. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.

## Lote 069 — 21 de octubre

IDs 661–665: cinco verificadas y cuatro con cambios de contenido. Acumulado: 665 examinadas, 636 verificadas, 29 pendientes y 438 con cambios de contenido. Estados: 195 vigentes, 405 corregidas, 36 históricas y 29 pendientes. Quedan 11.458 sin revisar; siguiente ID 666.

Se confirma el plazo del certificado de silencio, se precisa la denominación del acoso por razón de sexo y se acota la exclusión sancionadora del delegado de protección de datos al título IX. Se distingue detalle adecuado de detalle máximo y se concreta el enfoque probabilístico de PERT eliminando un distractor compatible. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.

## Lote 070 — 21 de octubre

IDs 666–670: cinco verificadas y tres con cambios de contenido. Acumulado: 670 examinadas, 641 verificadas, 29 pendientes y 441 con cambios de contenido. Estados: 197 vigentes, 408 corregidas, 36 históricas y 29 pendientes. Quedan 11.453 sin revisar; siguiente ID 671.

Se matiza el desperdicio eliminable en Lean y se reemplaza una afirmación universal sobre inexistencia de herramientas por una propiedad documentada de axe-core. Se identifica la versión del logotipo WCAG y se confirma su carácter de declaración del proveedor. Se contrastan la resolución mínima de digitalización y los campos obligatorios y opcionales del índice electrónico. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.

## Lote 071 — 21 de octubre

IDs 671–675: cinco examinadas, cuatro verificadas y una histórica con contexto. Acumulado: 675 examinadas, 641 verificadas, 29 pendientes y 445 con cambios de contenido. Estados: 198 vigentes, 411 corregidas, 37 históricas y 29 pendientes. Quedan 11.448 sin revisar; siguiente ID 676.

Se contrasta la clasificación ENS del marco operacional, se contextualiza STORK como proyecto concluido, y se actualiza la interoperabilidad registral desde SICRES 3.0 a la NTI SICRES 4.0 con conexión certificada a SIR. Se delimitan las versiones W3C y OASIS en los estándares de servicios web y se aclara que no todo RFC constituye un estándar de Internet. Los conteos de revisión reflejan el estado corregido de STORK como histórica. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.

## Lote 072 — 21 de octubre

IDs 676–680: cinco verificadas, dos históricas con contexto y tres con cambios de contenido. Acumulado: 680 examinadas, 651 verificadas, 29 pendientes y 448 con cambios de contenido. Estados: 200 vigentes, 414 corregidas, 37 históricas y 29 pendientes. Quedan 11.443 sin revisar; siguiente ID 681.

Se sustituye una generalización sobre portabilidad de servicios web por la definición de interoperabilidad de W3C. Se contextualizan BitLocker To Go y los antiguos codenames de Android; ambos datos se etiquetan como históricos. Se confirma la arquitectura ANSI/SPARC de tres esquemas y la palabra clave EXCEPTION de PL/SQL. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.

## Lote 073 — 21 de octubre

IDs 681–685: cinco verificadas, dos históricas con contexto y tres con cambios de contenido. Acumulado: 685 examinadas, 656 verificadas, 29 pendientes y 451 con cambios de contenido. Estados: 201 vigentes, 416 corregidas, 39 históricas y 29 pendientes. Quedan 11.438 sin revisar; siguiente ID 686.

Se confirma WHEN OTHERS en PL/SQL, se acotan los atributos de jQuery Mobile 1.4 y se corrige WebDAV conforme al RFC 4918. Se contextualizan las denominaciones antiguas de .NET Core y se confirma la obligación de las subclases concretas Java ante métodos abstractos heredados. jQuery Mobile y .NET Core como denominación anterior se registran como históricos. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.

## Lote 074 — 21 de octubre

IDs 686–690: cinco examinadas, dos verificadas como vigentes, una corregida y dos históricas contextualizadas. Acumulado: 690 examinadas, 661 verificadas y 29 pendientes; 455 preguntas con cambios de contenido. Estados: 202 vigentes, 420 corregidas, 40 históricas y 29 pendientes. Quedan 11.433 sin revisar; siguiente ID 691.

Se concreta la secuencia de niveles estándar de Log4j 2 y se distingue gravedad de detalle. Se acotan los EJB al contenedor de negocio y los servlets al contenedor web en la arquitectura Java EE/J2EE; se marca esa nomenclatura como histórica. Apache Struts mantiene el patrón MVC, aunque la denominación Struts 2 corresponde a una generación anterior. Se corrige la errata de «corno» y se delimita la pregunta sobre bytecode PHP: OPcache, APC y versiones antiguas de WinCache se contrastan con sus fuentes, mientras que Memcached es un almacén genérico de objetos y valores; los cambios de versión se registran como contexto histórico. No se han estudiado nuevos PDFs de academia ni resuelto pendientes anteriores en este lote.

## Lote 075 — 21 de octubre

IDs 691–695: cinco examinadas, cuatro verificadas y una pendiente de fuente. Acumulado: 695 examinadas, 665 verificadas y 30 pendientes; 459 preguntas con cambios de contenido. Estados: 201 vigentes, 424 corregidas, 40 históricas y 30 pendientes. Quedan 11.428 sin revisar; siguiente ID 696.

Se distinguen los tipos MIME de ODF y OOXML conforme a OASIS e IANA (691); la atribución a «ePupil» queda pendiente al no localizar respaldo primario, sin dar por cierta su inexistencia (692). Se separan los datos vectoriales de los ráster (693) y se acota la función del almacén de datos en una arquitectura clásica de BI (694). XML puede almacenarse en tipos nativos de bases de datos, conforme a W3C y la documentación de Microsoft (695). No se han estudiado nuevos PDFs de academia ni cotejado las posibles correcciones posteriores de las convocatorias.

## Lote 076 — 21 de octubre

IDs 696–700: cinco examinadas, cuatro verificadas y una pendiente de ambigüedad. Acumulado: 700 examinadas, 669 verificadas y 31 pendientes; 463 preguntas con cambios de contenido. Estados: 201 vigentes, 428 corregidas, 40 históricas y 31 pendientes. Quedan 11.423 sin revisar; siguiente ID 701.

Se precisa que el resumen hash de longitud fija sirve para comprobar integridad solo comparándolo con un valor confiable o protegiéndolo mediante firma/MAC (696). El CSV se delimita como posible sistema de firma en las condiciones de la Ley 40/2015 y el RD 203/2021 (697). Se descarta que FNMT sea el único proveedor, conforme a las listas de confianza previstas en la Ley 6/2020 (698). El modelo en cascada se acota como modelo secuencial clásico con requisitos definidos antes de cerrar el diseño, considerando la realimentación que ya contempla Royce (699). El contenido de un “Plan de Sistemas” no tiene definición inequívoca en el enunciado ni se ha localizado aún el marco de academia que originó la pregunta 700; se conserva sin validar y queda pendiente de cotejo.

## Lote 077 — 21 de octubre

IDs 701–705: cinco verificadas, todas con cambios de contenido. Acumulado: 705 examinadas, 674 verificadas y 31 pendientes; 468 preguntas con cambios de contenido. Estados: 201 vigentes, 433 corregidas, 40 históricas y 31 pendientes. Quedan 11.418 sin revisar; siguiente ID 706.

Se contrasta la notación de composición UML con la especificación OMG (701), y la definición canónica de Singleton con el texto de GoF (702). El ocultamiento de información se documenta como criterio modular aplicable también al diseño estructurado (703). La documentación oficial de MÉTRICA v3 confirma su enfoque por procesos (704). Se distingue la definición inicial y validación de requisitos de las tareas de mantenimiento según MÉTRICA MSI, que sí contempla análisis de peticiones, pruebas de regresión y aceptación de cambios (705). No se han estudiado nuevos PDFs de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote.

## Lote 078 — 22 de octubre

IDs 706–710: cinco examinadas y verificadas, con dos correcciones y tres referencias históricas contextualizadas. Acumulado: 710 examinadas, 679 verificadas y 31 pendientes; 473 preguntas con cambios de contenido. Estados: 201 vigentes, 435 corregidas, 43 históricas y 31 pendientes. Quedan 11.413 sin revisar; siguiente ID 711.

Se delimita EFQM a la edición 2013: además de sus nueve criterios, admitía autoevaluación y no se basaba exclusivamente en evaluación externa; la pregunta se etiqueta histórica frente a las guías EFQM 2020/2025 (706). Se confirma que LLC y MAC son subcapas de enlace de datos (707), y se precisa el papel de ingreso/egreso de los LER de MPLS (708). IEEE 802.11i-2004 se registra como enmienda histórica de seguridad posteriormente sustituida (709). En 802.16-2004 se acotan las PHY OFDM/OFDMA, las cargas MAC de longitud variable y la capacidad de funcionamiento NLOS, lo que invalida la exigencia absoluta de línea de visión (710). No se han cotejado nuevos PDFs de academia ni las posibles correcciones posteriores de convocatorias en este lote.

## Lote 080 — 22 de octubre

IDs 716–720: cinco verificadas, cuatro corregidas y una histórica contextualizada. Acumulado: 720 examinadas, 689 verificadas y 31 pendientes; 483 preguntas con cambios de contenido. Estados: 201 vigentes, 444 corregidas, 44 históricas y 31 pendientes. Quedan 11.403 sin revisar; siguiente ID 721.

IEEE 802.4 se confirma como Token Bus (anillo lógico en bus físico) y se marca histórica porque IEEE la clasifica inactiva-retirada (716). Se identifica GetBulkRequest en las operaciones SNMPv2 vigentes, corrigiendo la pregunta que pedía varias PDU aunque daba opciones singulares (717). Se delimita la pregunta SNMPv3 a los servicios de seguridad USM y se evita confundir detección de errores con integridad/autenticación (718). Se coteja el cifrado de Red SARA y su SAT con la ficha oficial vigente, actualizando distractores institucionales (719). UIT-T X.400 corresponde a tratamiento de mensajes MHS, con componente 1999 en vigor (720). No se han cotejado nuevos PDFs de academia ni las posibles correcciones posteriores de convocatorias en este lote.
## Lote 085 — 22 de octubre

IDs 741–745: cinco preguntas examinadas y verificadas, una corregida y cuatro contextualizadas como históricas. Acumulado: 745 examinadas, 714 verificadas y 31 pendientes; 508 preguntas con cambios de contenido. Estados: 201 vigentes, 458 corregidas, 55 históricas y 31 pendientes. Quedan 11.378 sin revisar; siguiente ID 746.

Se confirma que la adopción de banda ancha fija de al menos 1 Gbps era el indicador muy por debajo de la media europea en el DESI 2022 (741). El enunciado sobre la actualización de España Digital tenía varias respuestas ciertas; se sustituye por una pregunta precisa sobre sus dos ejes transversales, PERTE y RETECH (742). Se verifica la meta histórica de preparar el 100 % del espectro para 5G en España Digital 2025 (743). Se evita la expresión ordinal «principal dimensión» y se pregunta por la infrarrepresentación de las mujeres en formación STEM que describe ONTSI (744). Se confirma el tercer puesto de España en conectividad en DESI 2022, por segundo año consecutivo (745). La publicación previa del lote 084 quedó desplegada y comprobada: Pages completó correctamente el workflow `39689839931` para el commit `2b5a5c98b9f8034ee40687163a0f516d8cadcee8` y el JSON público contiene los cambios 736–740.

## Lote 084 — 22 de octubre

IDs 736–740: cinco preguntas examinadas y verificadas, dos corregidas y tres históricas. Acumulado: 740 examinadas, 709 verificadas y 31 pendientes; 503 preguntas con cambios de contenido. Estados: 201 vigentes, 457 corregidas, 51 históricas y 31 pendientes. Quedan 11.383 sin revisar; siguiente ID 741.

Se coteja el 75,4 % de uso del smartphone entre compradores online con el informe de Fundación Telefónica; se reemplaza el distractor de pymes por una afirmación temporal con cifra inequívocamente falsa (736). Se verifican en el ONTSI las cifras de teletrabajo España/UE de 2021–2022 y se conservan como históricas (737). Se contrasta la edición 2023 de la brecha digital de género: el dato del 17,8 % es correcto; las otras opciones contradicen diferencias de uso y cifras de empleo TIC del informe (738). La brecha digital se precisa como fenómeno multifactorial, apoyado en investigación académica sobre factores económicos, políticos, educativos y de género (739). La Decisión (UE) 2022/2481 respalda las cuatro áreas de la Década Digital (740). No se han cotejado PDFs adicionales de academia ni las posibles correcciones posteriores de las convocatorias en este lote.

## Lote 086 — 22 de octubre

IDs 746–750: cinco preguntas examinadas y verificadas; una corregida y tres acotadas como históricas. Acumulado: 750 examinadas, 719 verificadas y 31 pendientes; 512 preguntas con cambios de contenido. Estados: 202 vigentes, 459 corregidas, 58 históricas y 31 pendientes. Quedan 11.373 sin revisar; siguiente ID 751.

Se confirma el esquema de diez ejes estratégicos y dos transversales de España Digital 2026 (746). En DESI 2022 se precisa que España estaba por debajo de la media en especialistas TIC (4,1 % frente a 4,5 %) y ligeramente por encima en titulados TIC (4,0 % frente a 3,9 %), con denominadores diferenciados (747). El informe ONTSI de 2021 registra al smartphone como dispositivo más señalado para consumir contenidos digitales (76,7 %) (748). Se corrige la pregunta sobre la Década Digital: la Decisión (UE) 2022/2481 fija tres metas del 100 % para servicios clave en línea, acceso a historiales médicos electrónicos y acceso a identificación electrónica segura y reconocida; el 80 % de uso de identidad electrónica no era la meta final (749). Se concreta la dimensión mejor situada de España en DESI 2021 como conectividad, donde ocupó el tercer puesto (750). No se han cotejado nuevos PDFs de academia ni las posibles correcciones posteriores de las convocatorias en este lote.

## Lote 087 — 22 de octubre

IDs 751–755: cinco preguntas examinadas y verificadas; una corregida y tres contextualizadas como históricas. Acumulado: 755 examinadas, 724 verificadas y 31 pendientes; 517 preguntas con cambios de contenido. Estados: 203 vigentes, 460 corregidas, 61 históricas y 31 pendientes. Quedan 11.368 sin revisar; siguiente ID 756.

Se corrige la atribución de la Secretaría del Consejo Consultivo para la Transformación Digital: la Orden ETD/920/2020 señala a la Subdirección General de Ordenación de las Telecomunicaciones, no a la SGAD (751). Se confirma que los cuatro ejes transversales del PRTR son transición ecológica, transformación digital, cohesión social y territorial e igualdad de género (752). Los datos EPA de ONTSI para 2021 muestran una adopción del teletrabajo habitual superior entre mujeres ocupadas; el enunciado se limita al segundo trimestre para fijar el periodo (753). Se distingue la lista oficial de diez políticas palanca de las medidas concretas contra brechas digitales (754). Se precisan las metas de España Digital 2026: app móvil para el 50 % de los servicios públicos en 2025, transformación digital de entidades regionales y locales con horizonte 2026, y objetivo de 25 % de empresas usuarias de IA y Big Data (755). No se han cotejado nuevos PDFs de academia ni las posibles correcciones posteriores de las convocatorias en este lote.

## Lote 083 — 22 de octubre

IDs 731–735: cinco preguntas examinadas y verificadas, cuatro precisadas y una contextualizada como histórica. Acumulado: 735 examinadas, 704 verificadas y 31 pendientes; 498 preguntas con cambios de contenido. Estados: 201 vigentes, 455 corregidas, 48 históricas y 31 pendientes. Quedan 11.388 sin revisar; siguiente ID 736.

Se documenta como meta histórica el 50 % de servicios públicos disponibles en app móvil que España Digital 2025 fijó para 2025 (731). La meta europea del 80 % de población de 16–74 años con capacidades digitales básicas para 2030 se verifica en la Decisión (UE) 2022/2481 (732). Se distingue el Plan de Digitalización de AAPP del Plan Nacional de Competencias Digitales: App Factory, puesto de trabajo inteligente y SOC pertenecen al primero; el fomento de especialistas TIC aparece como línea del segundo (733). Se atribuyen a Kemly Camacho los enfoques infraestructura/capacitación/uso de recursos y la tipología acceso/uso/calidad del uso, señalando que son marcos concretos y no una clasificación única universal (734–735). No se han cotejado PDFs adicionales de academia ni las posibles correcciones posteriores de las convocatorias en este lote.

## Lote 082 — 22 de octubre

IDs 726–730: cinco preguntas examinadas y verificadas, dos con estado corregida y tres históricas. Acumulado: 730 examinadas, 699 verificadas y 31 pendientes; 493 preguntas con cambios de contenido. Estados: 201 vigentes, 451 corregidas, 47 históricas y 31 pendientes. Quedan 11.393 sin revisar; siguiente ID 731.

La pregunta de virtualización (726) deja claro que consolidar servidores puede ahorrar energía, pero no reduce necesariamente la RAM total. El RFC 4287 define Atom como formato XML para sindicación y metadatos web (727). Se contextualizan como datos de 2022 el informe de Fundación Telefónica publicado en 2023 (728), el Índice de Acceso Digital de la UIT lanzado en 2003 (729) y la posición de España en DESI 2022, edición anterior a su integración en los informes State of the Digital Decade (730). Fuentes primarias: IBM, U.S. Department of Energy, University of Cambridge, IETF, Fundación Telefónica, UIT y Comisión Europea. No se han cotejado PDFs adicionales de academia ni las posibles correcciones posteriores de las convocatorias en este lote.

## Lote 081 — 22 de octubre

IDs 721–725: cinco verificadas, todas corregidas para concretar el supuesto o eliminar ambigüedades. Acumulado: 725 examinadas, 694 verificadas y 31 pendientes; 488 preguntas con cambios de contenido. Estados: 201 vigentes, 449 corregidas, 44 históricas y 31 pendientes. Quedan 11.398 sin revisar; siguiente ID 726.

Se precisa Info.plist como archivo de información del bundle iOS, teniendo en cuenta su generación durante la compilación (721). Se confirman los modos transporte y túnel de IPsec según RFC 4301 (722); la búsqueda exhaustiva de claves se identifica como fuerza bruta con definición NIST (723). Se acota jitter a variación del retardo de paquetes en redes IP multimedia, pues RFC 3393 advierte de sus varios usos técnicos (724). SSO se define como autenticación integrada para varias aplicaciones, sin equipararlo a almacenar contraseñas o a conceder automáticamente autorización (725). No se han cotejado nuevos PDFs de academia ni las posibles correcciones posteriores de convocatorias en este lote.

## Lote 088 — 22 de octubre

IDs 756–760: cinco preguntas examinadas y verificadas, tres con cambios de contenido. Acumulado: 760 examinadas, 729 verificadas y 31 pendientes; 520 preguntas con cambios de contenido. Estados: 204 vigentes, 461 corregidas, 64 históricas y 31 pendientes. Quedan 11.363 sin revisar; siguiente ID 761.

La pregunta 756 se corrige porque todas las opciones originales podían guardar relación con la brecha digital; ahora distingue el acceso a habilidades del acceso material y los factores sociales, con el modelo de Van Dijk. En DESI 2022 (757) se confirma que las tres afirmaciones son ciertas: España fue tercera en datos abiertos, quinta en servicios públicos digitales y superó ligeramente a la UE en titulados TIC (4,0 % frente a 3,9 %); se conserva D como respuesta histórica. La 758 se reformula como pregunta conceptual: blogs, redes, vídeo y sindicación son ejemplos asociados a Web 2.0, etiqueta sin definición técnica cerrada. En España Digital 2025 (759), la fuente oficial dice «cerca de 50 medidas», no exactamente 48; se conserva el dato inequívoco de diez ejes. Horizonte Europa (760) se confirma para 2021–2027 mediante la Comisión y la Decisión (UE) 2021/764. No se han cotejado nuevos PDFs de academia ni las posibles correcciones posteriores de convocatorias en este lote.
## Lote 089 — 22 de octubre

IDs 761–765: cinco preguntas verificadas, tres reformuladas para precisar el supuesto. Acumulado: 765 examinadas, 734 verificadas y 31 pendientes; 523 preguntas con cambios de contenido. Estados: 207 vigentes, 463 corregidas, 64 históricas y 31 pendientes. Quedan 11.358 sin revisar; siguiente ID 766.

Se cotejan en el texto constitucional vigente la delegación legislativa y la composición del Congreso (761–762). La 763 se reformula para incluir tanto el nombramiento formal por el Rey como la propuesta del CGPJ, de acuerdo con el artículo 123.2. La 764 concreta la función consultiva y representativa del Comité Europeo de las Regiones según el TFUE. La 765 acota la composición del Consejo Europeo al artículo 15.2 TUE y distingue a sus miembros del Alto Representante, que participa en sus trabajos. Fuentes primarias: BOE, EUR-Lex, Comisión/Consejo de la UE y Comité Europeo de las Regiones. No se han cotejado nuevos PDFs de academia ni las posibles correcciones posteriores de convocatorias en este lote.
## Lote 090 — 22 de octubre

IDs 766–770: cinco preguntas verificadas, cuatro con reformulación o corrección de contenido. Acumulado: 770 examinadas, 739 verificadas y 31 pendientes; 527 preguntas con cambios de contenido. Estados: 208 vigentes, 465 corregidas, 66 históricas y 31 pendientes. Quedan 11.353 sin revisar; siguiente ID 771.

En Europa 2020 (766) la versión española de la Comisión denomina la prioridad «crecimiento integrador»; «inclusivo» no era un distractor inequívocamente falso, por lo que se sustituye por «expansivo» y se conserva la etiqueta histórica de la estrategia con horizonte 2020. La regla general de entrada en vigor de la Ley 39/2015 (767) fue un año, con efectos diferidos de algunas previsiones electrónicas hasta 2021; se contextualiza como fecha pasada. La representación administrativa (768) se verifica con el artículo 5.4 y el RD 203/2021. La 769 se precisa como artículo 2.2.b de la Ley 40/2015. La 770 cambia su respuesta: la sede electrónica se identifica mediante certificados de autenticación de sitio web reconocidos o cualificados, o medio equivalente, no mediante certificados de firma electrónica. Fuentes primarias: Comisión Europea/EUR-Lex y BOE.
## Lote 091 — 22 de octubre

IDs 771–775: cinco preguntas examinadas y verificadas; tres conservan respuesta y dos se corrigen para reflejar requisitos inequívocos y normativa vigente. Acumulado: 775 examinadas, 744 verificadas y 31 pendientes; 529 preguntas con cambios de contenido. Estados: 211 vigentes, 467 corregidas, 66 históricas y 31 pendientes. Quedan 11.348 sin revisar; siguiente ID 776.

La Ley 39/2015 confirma la definición de documento público administrativo (771), los metadatos visibles de las copias electrónicas auténticas (772) y el silencio desestimatorio del recurso extraordinario de revisión tras tres meses (773). La 774 se acota al artículo 118.3 porque el enunciado previo pedía un requisito genérico con afirmaciones discutibles; se contrasta además la publicación trimestral de los contratos menores del artículo 63.4. En la 775 se actualiza el umbral armonizado de obras y concesiones a 5.404.000 euros, en vigor desde el 1 de enero de 2026, conforme a la Orden HAC/1517/2025 y el Reglamento Delegado (UE) 2025/2151.

No se han estudiado nuevos PDFs de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote. El inventario y el verificador se ejecutaron correctamente: 12.123 preguntas estructuralmente válidas, 775 cambios registrados y 11.348 preguntas sin revisión de contenido idénticas al commit original.

## Lote 092 — 22 de octubre

IDs 776–780: cinco preguntas examinadas y verificadas; dos históricas contextualizadas y dos enunciados reformulados para evitar errores de fecha y ambigüedad. Acumulado: 780 examinadas, 749 verificadas y 31 pendientes; 531 preguntas con cambios de contenido. Estados: 214 vigentes, 467 corregidas, 68 históricas y 31 pendientes. Quedan 11.343 sin revisar; siguiente ID 781.

La Ley General de Subvenciones atribuye la concesión en la AGE a ministros y secretarios de Estado y exige autorización previa para importes superiores a 12 millones (776). El INE confirma que Cataluña recibió más turistas internacionales en 2022 (777), dato histórico. La PPC mantiene como marco básico la reforma del Reglamento (UE) 1380/2013, aplicada desde enero de 2014 (778). El artículo 11 de la LO 3/2007 regula las acciones positivas (779). La pregunta 780 se precisa al principio de igualdad retributiva del artículo 119 del Tratado CEE y distingue la firma en 1957 de su entrada en vigor en 1958.

No se han estudiado nuevos PDFs de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote. Inventario y verificador completados sin errores: 12.123 preguntas estructuralmente válidas, 780 cambios registrados y 11.343 preguntas todavía sin revisión de contenido intactas frente al commit original.

## Lote 093 — 22 de octubre

IDs 781–785: cinco preguntas examinadas y verificadas; dos reformuladas para corregir terminología y actualización institucional. Acumulado: 785 examinadas, 754 verificadas y 31 pendientes; 533 preguntas con cambios de contenido. Estados: 217 vigentes, 469 corregidas, 68 históricas y 31 pendientes. Quedan 11.338 sin revisar; siguiente ID 786.

Se corrige la tipología social de Weber a clase, estatus y partido, en vez de sustituir esas dimensiones por riqueza y poder (781). La LO 3/2007 respalda la identificación de las personas responsables en los protocolos de acoso (782) y define la discriminación directa por razón de sexo (783). La pregunta sobre medios compartidos se actualiza: tras el RD 1125/2024 son «transversales» y, como regla general, la AEAD desarrolla e implanta estos servicios; la CETIC realiza su declaración (784). El artículo 79 del TREBEP mantiene el concurso como procedimiento normal de provisión (785).

No se han estudiado nuevos PDFs de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote. Inventario y verificador completados sin errores: 12.123 preguntas estructuralmente válidas, 785 cambios registrados y 11.338 preguntas aún sin revisión de contenido intactas frente al commit original.

## Lote 094 — 22 de octubre

IDs 786–790 examinados individualmente. Cinco verificadas; tres corregidas/reformuladas y dos contextualizadas como históricas. Acumulado: 790 examinadas, 759 verificadas y 31 pendientes; 538 preguntas con cambios de contenido. Estados: 218 vigentes, 471 corregidas, 70 históricas y 31 pendientes. Quedan 11.333 sin revisar; siguiente ID 791.

Se distingue el objeto histórico del RD 1720/2007 de la vigencia actual, limitada por incompatibilidad con el RGPD y la LO 3/2018 (786). La primacía del Derecho de la Unión se formula solo ante incompatibilidad irreconciliable, no como regla para cualquier solapamiento del RGPD y la LOPDGDD (787). El ciclo elemental de procesamiento se delimita como entrada, procesamiento, almacenamiento y salida; la copia de seguridad no es una fase independiente (788). La cifra de 3.165 millones se vincula a la referencia gubernamental de julio de 2022 sobre el Plan de Digitalización de las Administraciones Públicas y se etiqueta como dato histórico, sin confundirla con el presupuesto total del Componente 11 (789). La disposición adicional novena de la Ley 40/2015 confirma que la Comisión Sectorial de Administración Electrónica es el órgano técnico de cooperación (790).

Fuentes primarias consultadas: BOE (RD 1720/2007, LO 3/2018 y Ley 40/2015), EUR-Lex (primacía del Derecho de la Unión y artículo 288 TFUE), portal oficial PRTR y referencia del Consejo de Ministros de 5 de julio de 2022. Para el modelo de ciclo de procesamiento se consultó el texto educativo universitario abierto de OpenStax. No se han estudiado nuevos PDFs de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote. Inventario y verificador ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 790 cambios registrados y 11.333 preguntas sin revisión de contenido idénticas al commit original.
## Lote 095 — 22 de octubre

IDs 791–795: cuatro verificadas y corregidas; la 792 queda pendiente por ambigüedad porque no se cita un marco que permita excluir la planificación financiera como función directiva. Acumulado: 795 examinadas, 763 verificadas y 32 pendientes; 542 preguntas con cambios de contenido. Estados: 218 vigentes, 475 corregidas, 70 históricas y 32 pendientes. Quedan 11.328 sin revisar; siguiente ID 796.

La Ley 37/2007, artículo 11.1.b, califica como grave en el ámbito de la AGE reutilizar información con una finalidad distinta de la concedida (791). La pregunta genérica sobre funciones directivas se conserva sin certificar mientras no se identifique su fuente o se precise un modelo funcional (792). El artículo 100.1 del TRLPI contempla reproducción o transformación, incluida la corrección de errores, si es necesaria para el uso por el usuario legítimo conforme a la finalidad propuesta, con la salvedad contractual legal (793). Se concreta que la EUPL puede usarla cualquier persona u organización en todo el mundo y se separa compatibilidad condicionada con GPL de equivalencia entre licencias (794). En SICRES 4.0 se cambia la respuesta de A a B: la NTI reemplaza el envío de ficheros por referencias a los documentos adjuntos, mientras sí incorpora metadatos para automatizar el tratamiento (795).

Fuentes oficiales: BOE (Ley 37/2007, TRLPI y resolución de 22 de julio de 2021 SICRES 4.0), Comisión Europea/Interoperable Europe Portal (texto y FAQ de la EUPL). No se han estudiado nuevos PDFs de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote. Inventario y verificador ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 795 cambios registrados y 11.328 preguntas sin revisión de contenido idénticas al commit original.

## Lote 096 — 22 de octubre

IDs 796–800 examinados individualmente y verificados. Se mantienen las respuestas de 796 y 797; se precisan y actualizan 798–800 para evitar referencias normativas obsoletas y afirmaciones ambiguas. Acumulado: 800 examinadas, 768 verificadas y 32 pendientes; 545 preguntas con cambios de contenido. Estados: 220 vigentes, 478 corregidas, 70 históricas y 32 pendientes. Quedan 11.323 sin revisar; siguiente ID 801.

El RPO limita la pérdida de datos al indicar el punto temporal al que deben recuperarse tras una interrupción (796). MAGERIT v3 identifica los árboles de ataque como técnica para representar distintas vías para alcanzar un objetivo (797). La serie CCN-STIC-800 trata las guías de implementación de medidas ENS; el enunciado se actualiza al RD 311/2022 vigente y se advierte que la página informativa del CCN conserva una referencia histórica al RD 3/2010 (798). SIA incluye procedimientos y servicios tanto de AGE como de las administraciones participantes, incluidas CCAA y entidades locales (799). Se reformula la pregunta sobre normalización europea: una EN no es obligatoria por sí sola, aunque la legislación puede hacer vinculante su cumplimiento en el ámbito correspondiente; se elimina la referencia histórica a ENV para evitar una segunda lectura (800).

Fuentes oficiales: NIST CSRC (RPO); MAGERIT v3, Libro III, Guía de técnicas, portal PILAR/CCN; CCN-CERT y BOE (serie 800 y RD 311/2022); PAe/CTT (ficha SIA); CEN-CENELEC (FAQ sobre adopción nacional, voluntariedad y relación con la legislación). No se han estudiado nuevos PDFs de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote. Inventario y verificador ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 800 cambios registrados y 11.323 preguntas sin revisión de contenido idénticas al commit original.

## Lote 097 — 22 de octubre

IDs 801–805 examinados individualmente. Cuatro verificadas —tres corregidas y una vigente—; la 805 queda pendiente de fuente porque sus afirmaciones sobre costes y usuarios no se pueden certificar con el marco citado. Acumulado: 805 examinadas, 772 verificadas y 33 pendientes; 548 preguntas con cambios de contenido. Estados: 221 vigentes, 481 corregidas, 70 históricas y 33 pendientes (21 de fuente y 12 de ambigüedad). Quedan 11.318 sin revisar; siguiente ID 806.

Se reformula la definición de RFC para distinguir la serie archivística y sus diversos estados de la categoría de Internet Standard (801). La Comisión Europea confirma que Horizonte Europa sucedió al programa Horizonte 2020 y cubre 2021–2027 (802). Se corrige SMP a «Symmetric Multiprocessing» y se elimina una descripción subjetiva de rendimiento (803). Se actualizan los tipos de tablespace de Oracle a permanente, temporal y undo, diferenciándolos de nombres concretos como SYSTEM y SYSAUX (804). La 805 se conserva íntegra y pendiente: las opciones de costes no son universalmente válidas y «usuarios inoperativos» parece una errata; se cotejará con el temario de academia antes de alterar texto o clave.

Fuentes consultadas: RFC Editor (definición y estados de RFC); Comisión Europea (fichas oficiales de Horizonte 2020 y Horizonte Europa); IBM Documentation (SMP); Oracle Database 26ai Administrator’s Guide (tablespaces). No se han consultado nuevos documentos de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote. Inventario y verificador ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 805 cambios registrados y 11.318 preguntas sin revisión de contenido idénticas al commit original.

## Lote 098 — 22 de octubre

IDs 806–810 examinados individualmente. Cuatro verificadas y corregidas; la 810 queda pendiente por ambigüedad histórica entre creación de un CD arrancable y escritura de imágenes de arranque para medios distintos. Acumulado: 810 examinadas, 776 verificadas y 34 pendientes; 552 preguntas con cambios de contenido. Estados: 221 vigentes, 485 corregidas, 70 históricas y 34 pendientes (21 de fuente y 13 de ambigüedad). Quedan 11.313 sin revisar; siguiente ID 811.

REST y SOAP se distinguen como estilo arquitectónico y marco de mensajería XML, respectivamente (806). Se delimita la ubicación lógica de la presentación al modelo clásico de tres niveles, sin exigir que cada nivel sea una máquina física diferente (807). Se separa la sintaxis JSON de ECMA-404 del objeto y métodos JSON definidos por ECMA-262 y se corrige el distractor XML (808). Se elimina la generalización errónea de que RPC usa solo transporte no orientado a conexión: ONC RPC puede operar sobre UDP y TCP (809). La 810 se conserva sin certificar porque no concreta distribución, época ni medio de arranque y `dd`, `rawrite` y `mkbootdisk` no describen un procedimiento único intercambiable.

Fuentes consultadas: Roy Fielding (tesis doctoral sobre REST) y W3C (SOAP 1.2); Microsoft Learn (arquitectura lógica de tres niveles); Ecma International (ECMA-404 y ECMA-262); RFC Editor (RFC 5531); Oracle se consultó en el lote anterior. No se han cotejado PDFs de academia ni posibles correcciones posteriores de convocatorias en este lote. Inventario y verificador ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 810 cambios registrados y 11.313 preguntas sin revisión de contenido idénticas al commit original.

## Lote 099 — 22 de octubre

IDs 811–815 examinados individualmente y verificados. Tres se corrigieron o precisaron, la 814 se contextualiza como histórica y la 811 y la 813 se mantienen vigentes. Acumulado: 815 examinadas, 781 verificadas y 34 pendientes; 555 preguntas con cambios de contenido. Estados: 223 vigentes, 487 corregidas, 71 históricas y 34 pendientes (21 de fuente y 13 de ambigüedad). Quedan 11.308 sin revisar; siguiente ID 816.

UUCP se describe como una suite que transfiere ficheros y programa órdenes remotas mediante sus utilidades diferenciadas (811). WinRM se acota al listener predeterminado HTTP; puede configurarse HTTPS y utiliza WS-Management (812). ACID se confirma como atomicidad, consistencia, aislamiento y durabilidad (813). La extensión de módulo de menú Oracle Forms 4.5 se precisa como .mmb antes de compilar y .mmx para el ejecutable; se conserva como pregunta histórica por tratar de una versión sin soporte (814). Se corrige la respuesta de CRUD a «Create, Read/Retrieve, Update, Delete» y se eliminan las generalizaciones sobre REST y SQL (815).

Fuentes oficiales consultadas: IBM Documentation (UUCP); Microsoft Learn (WinRM, WS-Management y puertos por defecto); PostgreSQL Documentation (ACID); Oracle (módulos de menú MMB/MMX y archivo de documentación legado); Microsoft Learn (CRUD). No se han cotejado PDFs de academia ni posibles correcciones posteriores de convocatorias en este lote. Inventario y verificador ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 815 cambios registrados y 11.308 preguntas sin revisión de contenido idénticas al commit original.

## Lote 100 — 22 de octubre

IDs 816–820 examinados individualmente y verificados. Tres se reformularon para precisar conceptos o eliminar ambigüedades; la 816 se mantiene como histórica por referirse a complementos de navegador. Acumulado: 820 examinadas, 786 verificadas y 34 pendientes; 558 preguntas con cambios de contenido. Estados: 225 vigentes, 489 corregidas, 72 históricas y 34 pendientes (21 de fuente y 13 de ambigüedad). Quedan 11.303 sin revisar; siguiente ID 821.

La 816 se acota a las RIA históricas basadas en complementos como Silverlight: el cliente ejecutaba presentación y parte de la lógica, sin elevarlo a característica universal de las RIA. La 817 se precisa como CIL/IL de .NET, distinto del bytecode de Java. La especificación de Jakarta confirma el propósito de JSTL para JSP (818). Oracle y la JLS confirman el uso de `@Override` y la búsqueda dinámica de métodos sobrescritos en Java (819). La FSF define las cuatro libertades y permite distribuir copias gratis o a cambio de precio; por ello la restricción no comercial de la 820 no es una libertad esencial.

Fuentes primarias: Microsoft Learn (archivo de arquitectura RIA Silverlight y proceso de ejecución .NET); Eclipse Foundation/Jakarta (especificación JSTL); Oracle (Java Tutorials) y Java Language Specification; GNU Project/Free Software Foundation (definición de software libre). No se han estudiado nuevos PDFs de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote. Inventario y verificador ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 820 cambios registrados y 11.303 preguntas sin revisión de contenido idénticas al commit original.

## Lote 101 — 22 de octubre

IDs 821–825 examinados individualmente. Tres verificadas y corregidas; dos quedan pendientes por ambigüedad en la fuente o el marco conceptual. Acumulado: 825 examinadas, 789 verificadas y 36 pendientes; 561 preguntas con cambios de contenido. Estados: 225 vigentes, 492 corregidas, 72 históricas y 36 pendientes (21 de fuente y 15 de ambigüedad). Quedan 11.298 sin revisar; siguiente ID 826.

La 821 queda pendiente porque el acrónimo «MADL» no está definido y XML es un estándar general que puede serializar RDF, pero no un lenguaje de ontologías por sí solo. La 822 también queda pendiente: la herencia es clásica en redes semánticas, pero el emparejamiento y la afirmación de que ambos son los mecanismos universales dependen del formalismo. En la 823 se concreta que se pregunta por modelización predictiva: regresión bayesiana, regresión lineal y SVM son métodos posibles. La 824 corrige CMS por LMS, la categoría que Moodle asigna a su plataforma. La 825 elimina la confusión entre proyección cartográfica y geocodificación, y distingue esta última de la simbolización de mapas.

Fuentes primarias consultadas: W3C (OWL, RDF/XML y XML); John F. Sowa y Stanford Encyclopedia of Philosophy (redes semánticas y herencia); documentación de scikit-learn (modelos lineales, regresión bayesiana y SVM); MoodleDocs (LMS); OGC Location Services y OGC API - Maps, y Comisión Europea GISCO (geocodificación y representación cartográfica). No se han estudiado nuevos PDFs de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote. Inventario y verificador ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 825 cambios registrados y 11.298 preguntas sin revisión de contenido idénticas al commit original.

## Lote 102 — 22 de octubre

IDs 826–830 examinados individualmente y verificados. Dos se precisaron con cambios de contenido y tres conservan la clave con contexto actualizado. Acumulado: 830 examinadas, 794 verificadas y 36 pendientes; 564 preguntas con cambios de contenido. Estados: 227 vigentes, 495 corregidas, 72 históricas y 36 pendientes (21 de fuente y 15 de ambigüedad). Quedan 11.293 sin revisar; siguiente ID 831.

Se aclara que OLAP puede producir informes de apoyo a decisiones sin ser minería de datos y no requiere necesariamente un hipercubo en todas las implementaciones (826). HTTP/2 se especifica actualmente en RFC 9113, que reemplaza RFC 7540 (827). La Ley 56/2007 recoge expresamente la obligatoriedad en el ámbito contractual estatal; la Ley 25/2013 desarrolla la presentación de factura electrónica ante las Administraciones Públicas (828). Whirlpool produce 512 bits, longitud superior a las otras opciones, sin que longitud aislada sea medida suficiente de seguridad (829). En 830 se elimina la afirmación excesiva de garantía absoluta: la igualdad de hashes es una comprobación práctica, no prueba de identidad libre de colisiones ni mecanismo de autenticación o confidencialidad.

Fuentes primarias consultadas: Microsoft Learn (OLAP y data mining); RFC Editor (RFC 9113 y RFC 7540); BOE (Ley 56/2007 y Ley 25/2013); ETSI (Whirlpool y su resumen de 512 bits), NIST (FIPS 180-4, RFC 1321 y guía/glosario sobre hashes). No se han cotejado nuevos PDFs de academia ni posibles correcciones posteriores de convocatorias en este lote. Inventario y verificador ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 830 cambios registrados y 11.293 preguntas sin revisión de contenido idénticas al commit original.

## Lote 103 — 22 de octubre

IDs 831–835 examinados individualmente. Tres verificadas como vigentes y dos corregidas para delimitar el supuesto y evitar combinar categorías sin definirlas. Acumulado: 835 examinadas, 799 verificadas y 36 pendientes; 566 preguntas con cambios de contenido. Estados: 230 vigentes, 497 corregidas, 72 históricas y 36 pendientes (21 de fuente y 15 de ambigüedad). Quedan 11.288 sin revisar; siguiente ID 836.

Se confirma DN como Distinguished Name en LDAP (831). Se actualiza la pregunta DNIe al marco vigente y se distingue la renovación de la tarjeta de la renovación voluntaria de certificados; una tarjeta aún vigente puede conservarse al renovar certificados, de modo que la opción que obliga a renovar el DNI al caducar aquellos es falsa (832). La ISCA documenta «synthesis by rule» como denominación clásica de síntesis por formantes (833). La 834 explicita que el nombre «léxico-sintáctico» agrupa dos tareas relacionadas pero distintas: reconocimiento morfológico de unidades y análisis sintáctico de su combinación. Se confirma evento como mecanismo de notificación entre objetos (835).

Fuentes primarias consultadas: IETF RFC 4512/4514; Dirección General de la Policía, DPC DNIe v3.2 (05-05-2025), portal DNIe y Real Decreto 255/2025 en BOE; ISCA, Classic Speech Synthesis; Universal Dependencies y Stanford NLP Group; Microsoft Learn (.NET events). No se han estudiado nuevos PDFs de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote. `inventario.cjs` y `verificar.cjs` ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 835 cambios registrados y 11.288 preguntas aún no revisadas idénticas al commit original.

## Lote 104 — 22 de octubre

IDs 836–840 examinados individualmente. Cuatro se corrigieron y una se mantiene vigente con el contexto de MÉTRICA v3. Acumulado: 840 examinadas, 804 verificadas y 36 pendientes; 570 preguntas con cambios de contenido. Estados: 231 vigentes, 501 corregidas, 72 históricas y 36 pendientes (21 de fuente y 15 de ambigüedad). Quedan 11.283 sin revisar; siguiente ID 841.

Se formaliza la diferencia entre especialización EER total y solapada y la consecuencia de retirar la última pertenencia de subtipo (836). Se corrige la comparación de BPMN y XPDL para reflejar que BPMN 2.0 ya define una serialización XML, además de la notación gráfica (837). SPEM se define como metamodelo de OMG basado en MOF y alineado con UML 2, no como un simple lenguaje que extiende UML (838). Se actualiza la taxonomía de mantenimiento a ISO/IEC/IEEE 14764:2022: agregar funciones es mantenimiento aditivo (839). Se conserva correcta y acotada a MÉTRICA v3 la combinación de catalogación, diagrama de clases y DFD en EVS 2 (840).

Fuentes primarias consultadas: Elmasri y Navathe, *Fundamentals of Database Systems*, cap. EER; OMG (BPMN 2.0.2 y SPEM 2.0); Workflow Management Coalition (XPDL); ISO/IEC/IEEE 14764:2022 y vista previa de SIST; MÉTRICA v3, copia del documento ministerial y transcripción de sus tareas EVS. No se han estudiado nuevos PDFs de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote. `inventario.cjs` y `verificar.cjs` ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 840 cambios registrados y 11.283 preguntas aún no revisadas idénticas al commit original.

## Lote 105 — 22 de octubre

IDs 841–845 examinados individualmente. Cuatro verificadas —una vigente y tres corregidas—; la 842 queda pendiente de fuente. Acumulado: 845 examinadas, 808 verificadas y 37 pendientes (22 de fuente y 15 de ambigüedad); 573 preguntas con cambios de contenido. Estados: 232 vigentes, 504 corregidas, 72 históricas y 37 pendientes. Quedan 11.278 sin revisar; siguiente ID 846.

Se confirma en MÉTRICA v3 que EVS 3 reúne al Jefe de Proyecto, Analistas y Usuarios Expertos (841). La 842 no se certifica: el PDF ministerial identificado devuelve rechazo de acceso y falta cotejar la formulación precisa sobre DFD y flujos de control en la fuente metodológica. Se actualiza TFS a su denominación contemporánea y se distingue el control de versiones Git/TFVC de Apache Tomcat, que es un contenedor web (843). Se corrige la clasificación de verificación y validación: auditorías y revisiones son análisis estático en NIST SP 500-234, mientras el análisis formal es una categoría diferenciada (844). Se concreta qué significa «cobertura de texto» para que no se confunda con líneas o sentencias ejecutables, preservando la clave sobre cobertura estructural (845).

Fuentes consultadas: MÉTRICA v3, documento ministerial de EVS identificado y tabla transcrita; Microsoft Learn (repositorios Git/TFVC); Apache Software Foundation (Tomcat); NIST SP 500-234; ISTQB CTFL v4.0.1. No se han estudiado nuevos PDFs de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote. `inventario.cjs` y `verificar.cjs` ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 845 cambios registrados y 11.278 preguntas sin revisión de contenido idénticas al commit original.

## Lote 106 — 22 de octubre

IDs 846–850 examinados individualmente y verificados. Una se delimita como histórica y cuatro se corrigieron. Acumulado: 850 examinadas, 813 verificadas y 37 pendientes (22 de fuente y 15 de ambigüedad); 577 preguntas con cambios de contenido. Estados: 233 vigentes, 507 corregidas, 73 históricas y 37 pendientes. Quedan 11.273 sin revisar; siguiente ID 851.

Se acota la clasificación orgánico/semiacoplado/empotrado al COCOMO original de 1981 y se distingue esta edición de COCOMO II/III (846). Se corrige el distractor «puntos función de Boehm»: los 3D Function Points son una extensión desarrollada en Boeing y Boehm creó COCOMO (847). Se delimita COCOMO como modelo algorítmico de esfuerzo/coste/calendario (848). Se sustituye una definición demasiado amplia de documentación por los elementos de información del ciclo de vida, planificados para los procesos y productos de cada sistema (849). La pregunta sobre la versión actual de ITIL cambia de ITIL 4 a ITIL (Version 5), que PeopleCert publica desde 2026; ITIL 4 continúa disponible durante el periodo de transición (850).

Fuentes primarias consultadas: PeopleCert (ITIL Version 5); Barry Boehm, *Software Engineering Economics* (COCOMO 81); NASA y USC (estimación con COCOMO II); IFPUG (FPA de Albrecht); ISO/IEC 20968:2002 (MkII FPA); Boeing/Whitmire (3D Function Points); Gustav Karner (Use Case Points); ISO/IEC/IEEE 15289:2019 y MÉTRICA v3 (documentación de ciclo de vida). No se han estudiado nuevos PDFs de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote. `inventario.cjs` y `verificar.cjs` ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 850 cambios registrados y 11.273 preguntas sin revisión de contenido idénticas al commit original.

## Lote 107 — 22 de octubre

IDs 851–855 examinados individualmente y verificados. Una se conserva como histórica y cuatro se corrigieron. Acumulado: 855 examinadas, 818 verificadas y 37 pendientes (22 de fuente y 15 de ambigüedad); 581 preguntas con cambios de contenido. Estados: 234 vigentes, 510 corregidas, 74 históricas y 37 pendientes. Quedan 11.268 sin revisar; siguiente ID 856.

Se acota la pregunta ITIL a la versión 4 y se identifica «focalizarse en la planificación» como distractor ajeno a sus siete principios guía (851). Se especifica que store-and-forward recibe la trama Ethernet completa y comprueba su CRC/FCS (852). Se corrige «ISO/EIS DIS» a ISO/IEC 11801, serie vigente de cableado genérico y clases de enlace/canal (853). Se sustituye «distancia entre estaciones» por longitud máxima de segmento 10BASE-T, 100 m entre estación y repetidor/concentrador, evitando confundirlo con una trayectoria a través de dos enlaces (854). Se corrige la clave de Bluetooth: emplea FHSS, no DSSS más FHSS (855).

Fuentes primarias consultadas: PeopleCert (ITIL 4 Foundation y FAQ de transición a ITIL Version 5); Cisco (métodos de conmutación y especificaciones de Ethernet 10BASE-T); ISO/IEC 11801-1:2017 con AMD1:2025; Bluetooth SIG Core Specification v6.3 y Technology Overview. No se han estudiado nuevos PDFs de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote. `inventario.cjs` y `verificar.cjs` ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 855 cambios registrados y 11.268 preguntas sin revisión de contenido idénticas al commit original.

## Lote 108 — 22 de octubre

IDs 856–860 examinados individualmente y verificados. Tres se conservan como históricas y dos se corrigieron. Acumulado: 860 examinadas, 823 verificadas y 37 pendientes (22 de fuente y 15 de ambigüedad); 586 preguntas con cambios de contenido. Estados: 234 vigentes, 512 corregidas, 77 históricas y 37 pendientes. Quedan 11.263 sin revisar; siguiente ID 861.

Se delimita 802.11p como la enmienda WLAN para entorno vehicular y se advierte que IEEE la marca como sustituida/integrada en ediciones posteriores de 802.11 (856). Se confirma 802.5 como Token Ring y se conserva el dato con estado histórico, pues el estándar se retiró (857). Se distingue IEEE 802.20/MBWA de 802.16/WiMAX y se documenta que 802.20-2008 fue retirado en 2018 (858). Se concreta STP clásico IEEE 802.1D: enlace/capa 2, sin encaminamiento IP y con convergencia más lenta que RSTP en las condiciones apropiadas (859). Se reescribe DOCSIS 3.1 para hacer inequívoca su opción correcta: OFDM en bajada y OFDMA en subida; la especificación inicial fue publicada en 2013, conserva interoperabilidad con SC-QAM heredado y no define un certificado EuroDOCSIS 3.1 separado (860).

Fuentes primarias consultadas: IEEE SA (802.11p, 802.11-2024, 802.5-1997 y 802.20-2008); Cisco (STP/RSTP); CableLabs (DOCSIS 3.1 PHY, historia de especificación y PKI). No se han estudiado nuevos PDFs de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote. `inventario.cjs` y `verificar.cjs` ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 860 cambios registrados y 11.263 preguntas sin revisión de contenido idénticas al commit original.

## Lote 109 — 22 de octubre

IDs 861–865 examinados individualmente y verificados. Dos se conservan vigentes y tres se corrigieron. Acumulado: 865 examinadas, 828 verificadas y 37 pendientes (22 de fuente y 15 de ambigüedad); 591 preguntas con cambios de contenido. Estados: 236 vigentes, 515 corregidas, 77 históricas y 37 pendientes. Quedan 11.258 sin revisar; siguiente ID 866.

Se confirma CMTS como sistema de cabecera que intercambia datos con cable módems DOCSIS (861). Se delimita S/MIME: el contenido MIME, cuerpo y adjuntos se cifran normalmente; las cabeceras externas quedan visibles salvo encapsulación expresa de un mensaje completo (862). DECT se mantiene como tecnología de telefonía inalámbrica para hogares, empresas y despliegues densos; ETSI sigue manteniendo tanto DECT clásico como DECT-2020 NR (863). Se concreta el diseño celular en dividir cobertura en celdas planificadas y reutilizar grupos de frecuencias separados para evitar interferencias (864). Se precisa que la afirmación falsa sobre 5G es que equipos LTE exclusivos acceden a 5G NR por retrocompatibilidad; se acotan beamforming y la meta radio de 1 ms a sus condiciones, sin presentarlas como absolutos (865).

Fuentes primarias consultadas: CableLabs (CMTS/Remote PHY); IETF RFC 8551 y 9787 (S/MIME); ETSI DECT y TR 101 178; Rappaport, *Wireless Communications: Principles and Practice*, y UIT (planificación celular e IMT-2020/5G). No se han estudiado nuevos PDFs de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote. `inventario.cjs` y `verificar.cjs` ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 865 cambios registrados y 11.258 preguntas sin revisión de contenido idénticas al commit original.

## Lote 110 — 22 de octubre

IDs 866–870 examinados individualmente. Cuatro preguntas verificadas y corregidas; la de IPsec se conserva con estado vigente. Acumulado: 870 examinadas, 833 verificadas y 37 pendientes (22 de fuente y 15 de ambigüedad); 595 preguntas con cambios de contenido. Estados: 237 vigentes, 519 corregidas, 77 históricas y 37 pendientes. Quedan 11.253 sin revisar; siguiente ID 871.

Se desambigua el alcance de PPP: transporta datagramas multiprotocolo sobre enlaces punto a punto, sin constituir cifrado extremo a extremo por sí mismo (866). La opción falsa de IPsec es que ESP no admita modo transporte; RFC 4301 define ambos modos para hosts (867). Se corrige el error ortográfico de «inocuo» y se precisa la definición NIST de troyano (868). La copia incremental se presenta como la que suele minimizar el volumen por ejecución, con sus supuestos y coste de restauración en cadena (869). Se alinea la finalidad del BCP con la definición NIST de mantener procesos de misión/negocio durante y después de una interrupción (870).

Fuentes primarias consultadas: IETF RFC 1661, 4301, 4302, 4303 y 7296; IANA, registro vigente de números de protocolo IP; NIST CSRC Glossary y SP 800-209; IBM, documentación de tipos de copia y restauración; ISO 22301:2019. No se han estudiado nuevos PDFs de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote. `inventario.cjs` y `verificar.cjs` ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 870 cambios registrados y 11.253 preguntas sin revisión de contenido idénticas al commit original.

## Lote 111 — 22 de octubre

IDs 871–875 examinados individualmente y verificados. Cinco preguntas reformuladas para fijar su alcance y evitar confusiones. Acumulado: 875 examinadas, 838 verificadas y 37 pendientes (22 de fuente y 15 de ambigüedad); 600 preguntas con cambios de contenido. Estados: 237 vigentes, 524 corregidas, 77 históricas y 37 pendientes. Quedan 11.248 sin revisar; siguiente ID 876.

Se acota la medida ENS op.cont.2, de aplicación al nivel ALTO según RD 311/2022 (871). Se sitúa BS 25999 como antecedente británico de ISO 22301 y se distingue la edición actual ISO 22301:2019 (872). Se separa OAuth 2.0, marco de autorización delegada, de OpenID Connect, capa de identidad, y se eliminan afirmaciones falsas sobre Twitter, aplicaciones de escritorio y entrega de credenciales (873). Se determina el orden LVM para un dispositivo de bloques nuevo, advirtiendo que una conversión P2V puede conservar metadatos previos (874). Se vincula la descripción histórica de Schwaber con su artículo original de 1996 y se confirma el enfoque iterativo e incremental de Scrum (875).

Fuentes consultadas: BOE, RD 311/2022 consolidado; ISO (historia y edición 2019 de ISO 22301); IETF RFC 6749 y OpenID Foundation (OpenID Connect Core 1.0); Red Hat Enterprise Linux 10 (LVM); Ken Schwaber/Scrum.org (artículo original sobre Scrum) y Scrum Guide. No se han estudiado nuevos PDFs de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote. `inventario.cjs` y `verificar.cjs` ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 875 cambios registrados y 11.248 preguntas sin revisión de contenido idénticas al commit original.

## Lote 112 — 22 de octubre

IDs 876–880 examinados individualmente y verificados. Tres se reformularon para delimitar las definiciones; dos se corrigieron. Acumulado: 880 examinadas, 843 verificadas y 37 pendientes (22 de fuente y 15 de ambigüedad); 603 preguntas con cambios de contenido. Estados: 239 vigentes, 527 corregidas, 77 históricas y 37 pendientes. Quedan 11.243 sin revisar; siguiente ID 881.

Se identifica como dependencia UML la flecha discontinua abierta que señala al proveedor (876). Se precisa Haskell como lenguaje funcional puro y se distingue su sistema de type classes de la orientación a objetos (877). Se concreta la evaluación de calidad del software como adecuación a requisitos funcionales y necesidades de usuarios (878). Se verifica en el documento ministerial de MÉTRICA v3 que CSI, tarea 8.2, genera los procedimientos de migración y carga inicial (879); la estructura metodológica se desglosa en procesos, actividades y tareas (880).

Fuentes primarias consultadas: OMG UML 2.5.1; Haskell 2010 Language Report; ISO/IEC 25010:2011 y 2023; documentos oficiales del Ministerio de Administraciones Públicas sobre MÉTRICA v3 (Gestión de Proyectos y Construcción del Sistema de Información). No se han estudiado nuevos PDFs de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote. `inventario.cjs` y `verificar.cjs` ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 880 cambios registrados y 11.243 preguntas sin revisión de contenido idénticas al commit original.

## Lote 113 — 22 de octubre

IDs 881–885 examinados individualmente: cuatro verificadas (240 vigentes, 529 corregidas y 78 históricas) y una pendiente por ambigüedad de fuente. Acumulado: 885 examinadas, 847 verificadas y 38 pendientes (22 de fuente y 16 de ambigüedad); 608 preguntas con cambios de contenido. Quedan 11.238 sin revisar; siguiente ID 886.

Se deja sin certificar la conversión entre puntos de función, DSI y nivel del lenguaje de la pregunta 881: la relación circula como conversión empírica para estimar líneas, pero el enunciado la atribuye a COCOMO y no se localizó la fuente primaria exacta que sustenta el coeficiente. Se mantiene el original sin modificar y se registra la duda en vez de heredar la clave como verificada. Se confirma el acrónimo ACID (882); se aclara la distinción UML entre clase ordinaria y activa frente a «clase pasiva» como metaclase independiente (883). La definición de política de calidad se conserva como histórica porque la pregunta cita ISO 9000:2000, ya sustituida (884). Se concreta en el modelo E-R el límite máximo de participación como cardinalidad, diferenciándolo del grado y de participación total/parcial (885).

Fuentes primarias consultadas: Microsoft Learn (ACID); OMG UML 2.5.1; ISO 9000 vigente; Peter Chen (MIT Sloan, artículo fundacional del modelo E-R). Para la pregunta 881 se revisaron conversiones de puntos de función/DSI, pero falta una fuente primaria verificable y queda pendiente. No se han estudiado nuevos PDFs de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote. `inventario.cjs` y `verificar.cjs` ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 885 cambios registrados y 11.238 preguntas sin revisión de contenido idénticas al commit original.

## Lote 114 — 22 de octubre

IDs 886–890 revisados individualmente. Tres preguntas verificadas y corregidas, una vigente conservada y una histórica delimitada a una edición concreta. Acumulado: 890 examinadas, 851 verificadas y 38 pendientes (22 de fuente y 16 de ambigüedad); 613 preguntas con cambios de contenido. Estados: 243 vigentes, 530 corregidas, 79 históricas y 38 pendientes. Quedan 11.233 sin revisar; siguiente ID 891.

Se precisa que la pregunta EFQM se refiere al modelo clásico de 2013 y se conserva como histórica, explicitando REDER/RADAR, su visión holística y la capacidad de adaptación del ciclo de evaluación y mejora (886). El modelo de referencia WfMC distingue funciones de control en tiempo de ejecución, interacción con actividades y distribución/interfaces; el «lanzamiento programado» no es categoría del modelo (887). En MÉTRICA v3 se corrige la respuesta de D a A: los grupos son inicio, seguimiento/control y finalización, que incluye el registro documental de gestión (888). Se confirma la limitación del trabajo en curso como práctica Kanban, sin exigir iteraciones fijas ni roles de Scrum (889). «Línea base» se define como la configuración aprobada que sirve de referencia y se cambia mediante control formal (890).

Fuentes primarias consultadas: Ministerio de Administraciones Públicas (MÉTRICA v3, Gestión de Proyectos); Workflow Management Coalition (Workflow Reference Model TC00-1003); Kanban University y Scrum.org (límites WIP); NASA Systems Engineering Handbook e ISO 10007:2017 (gestión de configuración); Ministerio para la Transformación Digital, EFQM España, EFQM e INSST (modelo EFQM y lógica REDER/RADAR). No se han estudiado nuevos PDFs de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote. `inventario.cjs` y `verificar.cjs` ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 890 cambios registrados y 11.233 preguntas sin revisión de contenido idénticas al commit original.

## Lote 115 — 22 de octubre

IDs 891–895 revisados individualmente y verificados. Tres reformulados/corregidos y dos conservados vigentes. Acumulado: 895 examinadas, 857 verificadas y 38 pendientes (22 de fuente y 16 de ambigüedad); 617 preguntas con cambios de contenido. Estados: 245 vigentes, 533 corregidas, 79 históricas y 38 pendientes. Quedan 11.228 sin revisar; siguiente ID 896.

Se precisan las dos actividades DSI que hacen correcta la opción conjunta en la pregunta de MÉTRICA (891). Acoplamiento es la manera/grado de interdependencia entre módulos, según el glosario IEEE 610.12 (892). Se acota PUDS al Proceso Unificado de Rational: Pruebas es flujo de ingeniería, mientras configuración/cambios, gestión de proyectos y entorno son flujos de soporte (893). En MÉTRICA, las pruebas unitarias se ejecutan en CSI; DSI genera especificaciones de construcción y la incorporación en operación corresponde a implantación (894). Se corrige la pareja terminológica atribuida a Sommerville: requisitos de usuario y requisitos del sistema, no «de sistema y de software» (895).

Fuentes primarias consultadas: documentos ministeriales de MÉTRICA v3 (Diseño y Construcción del Sistema de Información); IEEE Std 610.12-1990, alojado por NIST y ficha IEEE Xplore; IBM Rational Unified Process; Ian Sommerville, *Software Engineering*, 9.ª edición, capítulo 4, y ficha editorial Pearson de la 10.ª edición. No se han estudiado nuevos PDFs de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote. `inventario.cjs` y `verificar.cjs` ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 895 cambios registrados y 11.228 preguntas sin revisión de contenido idénticas al commit original.

## Lote 116 — 22 de octubre

IDs 896–900 revisados individualmente: tres verificadas y dos pendientes (una histórica y una por ambigüedad). Acumulado: 900 examinadas, 861 verificadas y 39 pendientes (22 de fuente y 17 de ambigüedad); 621 preguntas con cambios de contenido. Estados: 248 vigentes, 533 corregidas, 80 históricas y 39 pendientes. Quedan 11.223 sin revisar; siguiente ID 901.

Se corrige la caracterización de ITIL v3: era un conjunto de publicaciones/buenas prácticas y no una norma ISO ni una escala de madurez; se conserva como contenido histórico versionado (896). Se confirma que en MÉTRICA v3 los casos de uso expresan funciones del sistema y perspectiva de actores (897); para su técnica DFD, MÉTRICA nombra el nivel 0 como diagrama de contexto (898). No se certifica la pregunta genérica sobre sistemas de gestión documental: ISO define captura, almacenamiento, control y entrega, pero no convierte el envío directo por fax/correo ni la capacidad de «millones en segundos» en propiedades universales; el enunciado no especifica estándar o producto para descartar una sola opción (899). Se precisa la respuesta sobre principios guía en ITIL 4: orientan decisiones en cualquier circunstancia; ITIL 4 mantiene guía y certificaciones y PeopleCert comunica que ITIL 5 conserva esos conceptos (900).

Fuentes primarias consultadas: AXELOS y PeopleCert (ITIL); Ministerio de Administraciones Públicas, MÉTRICA v3 (Análisis del Sistema y Técnicas/Prácticas); ISO 19475:2021 e ISO/TC 46/SC 11 (gestión documental). La URL ministerial de Técnicas está publicada en el portal pero puede responder «Request Rejected» al acceso automatizado; el fragmento indexado del documento oficial confirma la denominación DFD nivel 0/contexto. No se han estudiado nuevos PDFs de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote. `inventario.cjs` y `verificar.cjs` ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 900 cambios registrados y 11.223 preguntas sin revisión de contenido idénticas al commit original.
