# Revisión del banco TIC — 14 de octubre de 2026

Estado parcial, no revisión completa del banco. Publicación desde la rama `main`.

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

11.503 preguntas sin revisión de contenido. Siguiente ID: 621. Completar el estudio por bloques, las correspondencias de cada pregunta y las explicaciones; resolver las 28 dudas abiertas; revisar los grupos repetidos y los candidatos de vigencia. La revisión completa no está terminada.

GitHub Pages publica desde `main`, carpeta raíz. La vista de revisión está disponible en `/simulador-tic/revision.html` después del despliegue de estos cambios. Publicar un lote no certifica las preguntas pendientes ni las que siguen sin revisar.

Pendientes de fuente: 11, 32, 38, 48, 52, 54, 67, 73, 76, 77, 94, 95, 108, 306, 323, 428, 438 y 489. Pendientes por ambigüedad: 13, 31, 60, 68, 80, 86, 88, 99, 105 y 111. Las observaciones de revisión de cada pregunta explican el motivo concreto. Son trabajo pendiente del revisor, no una petición de revisión al usuario.

Correcciones destacadas de esta continuación: LDAP (64) contenía dos respuestas defendibles; Java static (79) cambia la respuesta correcta de A a B; la fecha del artículo 6.d de la Orden ETD/465/2021 (89) pasa a 1 de marzo de 2023 conforme a la modificación de 2022; WebAssembly (98) admite ejecución fuera del navegador; Data Act (100) se actualiza a su aplicación general desde septiembre de 2025. Se conservan los originales completos.

En los IDs 101–200 destacan: snapshot frente a copia independiente (101); regresión y caja blanca con distractores solapados (102, 114); TCP frente a sockets genéricos (109); Wi-Fi 6E (112); DEHú (115); EIGRP (120); plazo de alzada de actos expresos (142); CETIC según RD 1125/2024 (154); denominación de la NTI de firma y sello (157); requisitos ENS según RD 311/2022 (161); modalidades Cl@ve y REG (163–164); mantenimiento concurrente Tier III (166); traducciones TLB (174); Jakarta Pages (183); firma digital sin equipararla genéricamente a cifrado (193); EER con dos respuestas equivalentes en el original (197). Las preguntas de EPA 2022 (150) y arquitectura clásica iOS (178) se delimitan como históricas.

## Vista local y comprobaciones

Desde la raíz del repositorio, ejecutar `node revision/servidor.cjs` y abrir `http://127.0.0.1:8765/revision.html`. El servidor solo escucha en este equipo. Debe permanecer abierto para consultar la vista.

En una comprobación anterior en navegador se verificaron la carga del banco, la búsqueda por ID, el despliegue del original y el filtro de preguntas con dudas. En esta continuación se han ejecutado el inventario y el verificador: comprueban los 620 registros de cambios y las 11.503 preguntas intactas frente al commit original. El inventario no detecta errores estructurales; señala 16 grupos con enunciados repetidos y 57 candidatos por referencias potencialmente antiguas, pendientes de revisión contextual. La reducción de un grupo repetido se debe a reformular un enunciado, no a eliminar preguntas. Los scripts de lote se aplican una sola vez; abortan si detectan preguntas ya revisadas.

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