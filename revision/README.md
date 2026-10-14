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

11.833 preguntas sin revisión de contenido. Siguiente ID: 291. Completar el estudio por bloques, las correspondencias de cada pregunta y las explicaciones; resolver las 23 dudas abiertas; revisar los grupos repetidos y los candidatos de vigencia. La revisión completa no está terminada.

GitHub Pages publica desde `main`, carpeta raíz. La vista de revisión está disponible en `/simulador-tic/revision.html` después del despliegue de estos cambios. Publicar un lote no certifica las preguntas pendientes ni las que siguen sin revisar.

Pendientes de fuente: 11, 32, 38, 48, 52, 54, 67, 73, 76, 77, 94, 95 y 108. Pendientes por ambigüedad: 13, 31, 60, 68, 80, 86, 88, 99, 105 y 111. Las observaciones de revisión de cada pregunta explican el motivo concreto. Son trabajo pendiente del revisor, no una petición de revisión al usuario.

Correcciones destacadas de esta continuación: LDAP (64) contenía dos respuestas defendibles; Java static (79) cambia la respuesta correcta de A a B; la fecha del artículo 6.d de la Orden ETD/465/2021 (89) pasa a 1 de marzo de 2023 conforme a la modificación de 2022; WebAssembly (98) admite ejecución fuera del navegador; Data Act (100) se actualiza a su aplicación general desde septiembre de 2025. Se conservan los originales completos.

En los IDs 101–200 destacan: snapshot frente a copia independiente (101); regresión y caja blanca con distractores solapados (102, 114); TCP frente a sockets genéricos (109); Wi-Fi 6E (112); DEHú (115); EIGRP (120); plazo de alzada de actos expresos (142); CETIC según RD 1125/2024 (154); denominación de la NTI de firma y sello (157); requisitos ENS según RD 311/2022 (161); modalidades Cl@ve y REG (163–164); mantenimiento concurrente Tier III (166); traducciones TLB (174); Jakarta Pages (183); firma digital sin equipararla genéricamente a cifrado (193); EER con dos respuestas equivalentes en el original (197). Las preguntas de EPA 2022 (150) y arquitectura clásica iOS (178) se delimitan como históricas.

## Vista local y comprobaciones

Desde la raíz del repositorio, ejecutar `node revision/servidor.cjs` y abrir `http://127.0.0.1:8765/revision.html`. El servidor solo escucha en este equipo. Debe permanecer abierto para consultar la vista.

En una comprobación anterior en navegador se verificaron la carga del banco, la búsqueda por ID, el despliegue del original y el filtro de preguntas con dudas. En esta continuación se han ejecutado el inventario y el verificador: comprueban los 290 registros de cambios y las 11.833 preguntas intactas frente al commit original. El inventario no detecta errores estructurales; señala 16 grupos con enunciados repetidos y 58 candidatos por referencias potencialmente antiguas, pendientes de revisión contextual. La reducción de un grupo repetido se debe a reformular un enunciado, no a eliminar preguntas. Los scripts de lote se aplican una sola vez; abortan si detectan preguntas ya revisadas.

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
