# Revisión del banco TIC — estado al 24 de octubre de 2026

Estado parcial, no revisión completa del banco. Publicación desde la rama `main`. Último lote aplicado: 168 (IDs 1156–1160). Acumulado: 1.160 preguntas revisadas, 1.118 verificadas (286 vigentes, 729 corregidas y 103 históricas) y 42 pendientes de resolver (24 de fuente y 18 de ambigüedad); quedan 10.963 sin revisar de contenido. Hay 847 preguntas con cambios en enunciado, opciones o clave respecto del original. La cobertura total sigue pendiente.

## Entregables

- `temario-oficial.json`: catálogo literal de 133 temas A1 (anexo I, BOE-A-2025-25938) y 57 temas A2 de ingreso libre (anexo IX, BOE-A-2025-26262). Los temas A2 reinician numeración por bloque; se identifican con bloque romano.
- `cambios-lote-001.json`: original y resultado de los IDs 1–12, con etiquetas, correspondencias oficiales, fuentes, artículos, fecha y estado. Once verificadas, una pendiente de fuente (ID 11). Cinco preguntas reformuladas para concretar el supuesto o eliminar ambigüedades (4, 6, 8, 10, 12). Se conservan los índices de respuesta.
- `cambios-lote-002.json`: original y resultado de los IDs 13–40.
- `cambios-lote-003.json` y `cambios-lote-004.json`: IDs 41–100.
- `cambios-lote-005.json` a `cambios-lote-009.json`: IDs 101–200, examinadas individualmente el 13 de octubre. Total acumulado: 200 clasificadas; 177 verificadas (66 vigentes, 105 corregidas y 6 históricas); 23 con dudas abiertas. El bloque de academia de los IDs 41–200 sigue pendiente de cotejo.
- `lote-132.cjs` y `cambios-lote-132.json`: IDs 976–980, con el original íntegro, clasificación, fuentes, cotejo de apartados pertinentes de academia y resultado revisado.
- `lote-135.cjs` y `cambios-lote-135.json`: IDs 991–995, con originales, revisión individual, fuentes y cotejo de temario.
- lote-136.cjs y cambios-lote-136.json: IDs 996–1000, con originales, revisión individual, fuentes primarias y cotejo del bloque 32 de academia.
- `lote-131.cjs` y `cambios-lote-131.json`: IDs 971–975, con el original íntegro, clasificación, fuentes, comprobación temática del material pertinente de academia y resultado revisado.
- `lote-127.cjs` y `cambios-lote-127.json`: IDs 951–955, con el original íntegro, clasificación, fuentes y resultado revisado.
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

## Lote 151 — 24 de octubre

IDs 1071–1075 revisados individualmente: cinco corregidas. Acumulado: 1.075 examinadas, 1.033 verificadas (276 vigentes, 661 corregidas y 96 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 770 preguntas con cambios de contenido. Quedan 11.048 sin revisar; siguiente ID 1.076.

Se corrige la generalización de que los sistemas expertos solo operan con conocimiento completo: MYCIN podía representar grados de certeza y razonar con evidencia clínica incierta (1071). Se concreta la señal de recompensa en aprendizaje por refuerzo y su objetivo de retorno acumulado esperado, sin extender la afirmación a todos los algoritmos de ML (1072). Se separa Adaptive Resonance Theory como familia arquitectónica distinta de Perceptron/ADALINE y MADALINE (1073). Se identifica la escalada por máxima pendiente como mejora local iterativa, diferenciándola de búsqueda en árbol y A* (1074). Se completa ciclo hamiltoniano como recorrido que visita cada vértice una vez y vuelve al inicial (1075). Se conservan íntegros los cinco originales en `cambios-lote-151.json`.

Cotejo con Drive: ITIC Academy, bloque 32, versión 2026.1, §§ 1 y 6 (IA simbólica y sistemas expertos), § 2.10 (grafos), §§ 4–5 (diseño de algoritmos y búsqueda), § 8.4 (aprendizaje por refuerzo) y § 10 (redes neuronales). El material cubre las áreas temáticas; para MYCIN, ART, hill climbing y ciclos hamiltonianos se contrastaron las afirmaciones específicas con sus publicaciones/documentación técnica y universitaria citadas en las fichas. Correspondencias revisadas contra BOE-A-2025-25938, anexo I, A1-70, y BOE-A-2025-26262, anexo IX, bloque III, tema 5.

Fuentes: Buchanan y Shortliffe, *Rule-Based Expert Systems* (1984), capítulos 10–11 sobre MYCIN y factores de certeza; Sutton y Barto, *Reinforcement Learning: An Introduction*, 2.ª ed., capítulos 1 y 3; publicaciones de Bernard Widrow (Stanford) sobre ADALINE/MADALINE y Carpenter/Grossberg sobre ART; UC Berkeley CS188 y Poole/Mackworth, § 4.6, sobre hill climbing/mejora local; Hamilton, *Account of the Icosian Calculus* (1858), y Carnegie Mellon sobre ciclos hamiltonianos. `inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados tras el lote: 12.123 preguntas estructuralmente válidas, 1.075 registros de revisión y 11.048 preguntas restantes idénticas al commit original.

## Lote 152 — 24 de octubre

IDs 1076–1080 revisados individualmente: cinco corregidas. Acumulado: 1.080 examinadas, 1.038 verificadas (276 vigentes, 666 corregidas y 96 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 775 preguntas con cambios de contenido. Quedan 11.043 sin revisar; siguiente ID 1.081.

Se precisan como mecanismos comunes y no exhaustivos la herencia/recorrido de relaciones en redes semánticas, el razonamiento con slots y procedimientos ligados en marcos y los dos sentidos de encadenamiento en sistemas de reglas (1076). Se sustituye una secuencia universal y dependiente de implementación para consultar slots por la semántica estable de IF-NEEDED: intentar calcular u obtener un filler cuando se solicita y no hay uno disponible (1077). Se conserva greedy best-first como búsqueda heurística y se explica su prioridad por h(n), frente a g(n) en coste uniforme y g(n)+h(n) en A* (1078). Se corrige una pregunta negativa que admitía varias respuestas: Prolog se identifica positivamente como lenguaje de programación lógica; Common Lisp es multiparadigma y CLOS es su sistema de objetos (1079). Se delimita BFS/primero en anchura como método no informado que expande niveles sin estimación heurística de distancia a la meta (1080). Se guardan los cinco originales íntegros en `cambios-lote-152.json`.

Cotejo con Drive: ITIC Academy, bloque 32, versión 2026.1, §§ 5.8–5.9 (BFS, búsqueda heurística y diferencias entre g(n), h(n) y g(n)+h(n)); §§ 6.2–6.6 (Prolog, redes semánticas, sistemas expertos y encadenamientos). La academia no fija el orden operativo general para valores de slot y procedimientos IF-NEEDED; ese detalle se contrastó con el informe original de FRL y las referencias universitarias. Correspondencias: A1-70 y A2-III-5 en todos los ítems.

Fuentes: ITIC Academy, bloque 32, §§ 5.8–5.9 y 6.2–6.6; MIT AI Memo 408, Roberts y Goldstein, *The FRL Primer* (1977); materiales universitarios de University of Perugia sobre representación con marcos; UC Berkeley CS188 y Poole/Mackworth sobre búsqueda informada; SWI-Prolog Reference Manual sobre programación declarativa/lógica; *Common Lisp the Language*, capítulo 28, especificación de CLOS; Carnegie Mellon y Poole/Mackworth sobre BFS y búsqueda no informada. `inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados tras el lote: 12.123 preguntas estructuralmente válidas, 1.080 registros de revisión y 11.043 preguntas restantes idénticas al commit original.

## Lote 153 — 24 de octubre

IDs 1081–1085 revisados individualmente: cuatro corregidas y una histórica. Acumulado: 1.085 examinadas, 1.043 verificadas (276 vigentes, 670 corregidas y 97 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 780 preguntas con cambios de contenido. Quedan 11.038 sin revisar; siguiente ID 1.086.

Se acota 1081 a la finalidad estándar de LinearRegression (objetivo continuo), sin afirmar que nunca pueda adaptarse a clasificación. En 1082 se conserva la respuesta tradicional “serie de términos sin conexiones”, pero se limita expresamente a esa taxonomía bibliográfica, que no es una clasificación normativa de ISO 25964; el PDF de academia describe tesauros funcionales como vocabularios jerárquicos con relaciones. La 1083 queda como pregunta histórica sobre el documento ENIA publicado en 2020: seis ejes para 2020–2025; la pregunta original mezclaba esa estructura con una caracterización errónea de España Digital 2025 y con datos que cambiaron. En 1084 se sustituyen características universales infundadas por la arquitectura clásica de base de conocimiento y mecanismo de inferencia. En 1085 se corrige la clave: RDF Schema 1.1 admite varias declaraciones `rdfs:range`, y los valores se infieren como miembros de todas las clases (conjunción); la antigua opción sobre dominio/email, fecha e identificador corresponde al esquema `tag:` de RFC 4151, no a RDF Schema. Se conserva cada original íntegro en `cambios-lote-153.json`.

Cotejo con Drive: ITIC Academy, bloque 32, versión 2026.1, §§ 6.3–6.4 (RDF, ontologías y sistemas expertos) y § 8 (clasificación/regresión). También se consultó el PDF “Tema 103 y 104 - Gestión Documental v2”, edición 2026, § 2.4: presenta el tesauro como vocabulario controlado con relaciones jerárquicas/asociativas. Se registró que la taxonomía lineal/arborescente/reticular es bibliográfica tradicional y no ISO 25964. Correspondencias revisadas contra BOE-A-2025-25938, anexo I, temas 70, 105 y 107, y BOE-A-2025-26262, anexo IX, bloques II tema 16 y III tema 5.

Fuentes: scikit-learn, Linear Models (regresión lineal y clasificación logística); Estrategia Nacional de Inteligencia Artificial, documento oficial de 2020, y BOE-A-2021-10680; NIST, An Overview of Expert Systems (NBSIR 82-2505); W3C Recommendation, RDF Schema 1.1, §§ 3.1 y 6.1; IETF RFC 4151, The “tag” URI Scheme; NISO, descripción de ISO 25964-1; repositorio institucional Universidad del Azuay sobre la tipología bibliográfica de estructuras de tesauro. `inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 1.085 registros de revisión y 11.038 preguntas restantes idénticas al commit original.
## Lote 154 — 24 de octubre

IDs 1086–1090 revisados individualmente: cuatro corregidas y una histórica. Acumulado: 1.090 examinadas, 1.048 verificadas (276 vigentes, 674 corregidas y 98 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 785 preguntas con cambios de contenido. Quedan 11.033 sin revisar; siguiente ID 1.091.

Se precisa la oposición introductoria entre técnicas simbólicas explícitas y el paradigma conexionista/subsimbólico para clasificar las redes neuronales, con la cautela de que el resultado depende del nivel de análisis y ambos enfoques pueden coexistir (1086). Se resuelve la pregunta negativa ambigua del encadenamiento hacia delante: la academia advierte que “selección” y “resolución de conflictos” pueden agruparse de formas distintas; se pregunta ahora por el ciclo positivo dirigido por datos (1087). En OCR se elimina como distractor universal la afirmación de que el reconocimiento neuronal no usa vectores de características —NIST documenta una arquitectura que sí los emplea— y se pregunta por la dificultad de obtener directamente una explicación simbólica de los parámetros aprendidos, sin afirmar que no existan métodos de interpretación (1088). Se concreta la encapsulación como separación entre interfaz pública y detalles internos de implementación (1089). El Ayudante de Office se acota al componente de Microsoft Office 97 que daba asistencia contextual y admitía consultas en palabras propias; la afirmación queda histórica y deja de atribuirse a todos los productos Office actuales o a un sistema experto clásico (1090). Se conservan íntegros los cinco originales en `cambios-lote-154.json`.

Cotejo con Drive: ITIC Academy, bloque 32, versión 2026.1, §§ 6.1 (IA simbólica frente a aprendizaje estadístico), 6.4–6.6 (sistemas expertos y encadenamientos), 10 (redes neuronales), 12 (visión/OCR) y 19.3 (explicabilidad). El § 6.5 alerta expresamente de la ambigüedad del formato original de la pregunta 1087. Correspondencias consultadas contra BOE-A-2025-25938, anexo I, A1-70 (1086–1087 y 1090), A1-70/A1-84 (1088) y A1-70/A1-93 (1089); BOE-A-2025-26262, anexo IX, A2-III-5/D5 (1086–1088 y 1090) y A2-II-3 (1089).

Fuentes: Smolensky, “On the Proper Treatment of Connectionism”, *Behavioral and Brain Sciences* 11 (1988), para la distinción simbólico/subsimbólico y sus límites; University of Texas at Austin CS343 y W3C RIF Production Rule Dialect para equiparación, conjunto de conflicto, selección y disparo; Benítez, Castro y Requena, “Are Artificial Neural Networks Black Boxes?”, *IEEE Transactions on Neural Networks* 8(5) (1997), y NISTIR 4824 de Grother para interpretabilidad y OCR neuronal con vectores de características; Stanford CS108, “OOP Encapsulation”, para interfaz e implementación; Microsoft Source (16-01-1997) y Eric Horvitz/Microsoft Research, proyecto Lumiere, para el Ayudante de Office de Office 97. `inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 1.090 registros de revisión y 11.033 preguntas restantes idénticas al commit original.

## Lote 155 — 24 de octubre

IDs 1091–1095 revisados individualmente: cinco corregidas. Acumulado: 1.095 examinadas, 1.053 verificadas (276 vigentes, 679 corregidas y 98 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 790 preguntas con cambios de contenido. Quedan 11.028 sin revisar; siguiente ID 1.096.

Se concreta retropropagación como el cálculo propagado de los gradientes del error en la red, separándolo de la regla de optimización que actualiza los pesos (1091). La distinción de inferencia en marcos Z/N queda expresamente atribuida a la edición 2023 de ITIC Academy: Z agota primero las facetas locales y N asciende por la faceta actual antes de cambiar de faceta; no se eleva esa nomenclatura a clasificación universal, pues la edición 2026.1 no la reproduce (1092). Se separan los mecanismos de control de inferencia (encadenamiento hacia delante/atrás) de las representaciones y herramientas que mezclaba el original (1093). Se sustituye «eficiencia» como supuesto distractor absoluto por la falta de garantía de que cualquier sistema experto mejore la eficiencia total de cualquier tarea; la utilidad depende de dominio, recursos y validación (1094). En RPA se precisa que OCR y capacidades de IA/NLP pueden integrarse en algunas soluciones, sin implicar que sean requisitos de todas ellas; se comprueba además el uso de RPA en un caso de atención al cliente (1095). Se conservan los cinco originales completos en `cambios-lote-155.json`.

Cotejo con Drive: ITIC Academy, bloque 32, versión 2026.1, §§ 1.3, 6, 10 y 12, para IA simbólica, sistemas expertos, redes neuronales y OCR. Para 1092 se consultó también «Tema 070 y 71 Inteligencia Artificial y Ciencia de datos», versión 2023, donde se describen expresamente las estrategias Z/N; se documenta que la edición actual conserva el tema de marcos, pero no esos nombres. El material actual no desarrolla RPA como epígrafe independiente: en 1095 solo se usa para encuadre con IA/OCR/procesos y se contrasta el detalle técnico con documentación de producto. Correspondencias BOE-A-2025-25938, anexo I: A1-70 (1091–1094), A1-70/A1-84/A1-90 (1095); BOE-A-2025-26262, anexo IX: A2-III-5 (1091–1094) y A2-II-16 (1095, correspondencia contextual con flujos de trabajo, no mención literal de RPA).

Fuentes: Rumelhart, Hinton y Williams, «Learning representations by back-propagating errors», *Nature* 323 (1986), DOI 10.1038/323533a0; ITIC Academy, bloque 32, ediciones 2023 y 2026.1; NIST SP 500-188, sobre arquitectura, estrategias de inferencia, selección del problema y recursos de desarrollo de sistemas expertos; FHWA, *Verification, Validation and Evaluation of Expert Systems* (1995); Microsoft Learn sobre capacidades de AI Builder en Power Automate y sobre automatización RPA de tareas de contact center; IBM Robotic Process Automation, documentación de OCR integrado durante la automatización.

`inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 1.095 registros de revisión y 11.028 preguntas restantes idénticas al commit original. Las 42 dudas anteriores y la comprobación global de modificaciones de las convocatorias siguen pendientes.

## Pendiente

10.963 preguntas sin revisión de contenido. Siguiente ID: 1161. Completar el estudio por bloques, las correspondencias de cada pregunta y las explicaciones; resolver las 42 dudas abiertas; revisar los grupos repetidos y los candidatos de vigencia. La revisión completa no está terminada.

GitHub Pages publica desde `main`, carpeta raíz. La vista de revisión está disponible en `/simulador-tic/revision.html` después del despliegue de estos cambios. Publicar un lote no certifica las preguntas pendientes ni las que siguen sin revisar.

Pendientes de fuente: 11, 32, 38, 48, 52, 54, 67, 73, 76, 77, 94, 95, 108, 306, 323, 428, 438, 489, 635, 692, 805, 842 y 910. Pendientes por ambigüedad: 13, 31, 60, 68, 80, 86, 88, 99, 105, 111, 700, 792, 810, 821, 822, 881, 899 y 909. Las observaciones de revisión de cada pregunta explican el motivo concreto. Son trabajo pendiente del revisor, no una petición de revisión al usuario.

Correcciones destacadas de esta continuación: LDAP (64) contenía dos respuestas defendibles; Java static (79) cambia la respuesta correcta de A a B; la fecha del artículo 6.d de la Orden ETD/465/2021 (89) pasa a 1 de marzo de 2023 conforme a la modificación de 2022; WebAssembly (98) admite ejecución fuera del navegador; Data Act (100) se actualiza a su aplicación general desde septiembre de 2025. Se conservan los originales completos.

En los IDs 101–200 destacan: snapshot frente a copia independiente (101); regresión y caja blanca con distractores solapados (102, 114); TCP frente a sockets genéricos (109); Wi-Fi 6E (112); DEHú (115); EIGRP (120); plazo de alzada de actos expresos (142); CETIC según RD 1125/2024 (154); denominación de la NTI de firma y sello (157); requisitos ENS según RD 311/2022 (161); modalidades Cl@ve y REG (163–164); mantenimiento concurrente Tier III (166); traducciones TLB (174); Jakarta Pages (183); firma digital sin equipararla genéricamente a cifrado (193); EER con dos respuestas equivalentes en el original (197). Las preguntas de EPA 2022 (150) y arquitectura clásica iOS (178) se delimitan como históricas.

En los IDs 911–915 se delimitan como históricas las taxonomías de CMMI v1.3 (911) y el cubo de COBIT 4.1 (912), se corrige el año de publicación inicial de COBIT a 1996 según ISACA (913), se precisa el ciclo incremental mediante builds sucesivos (914) y se corrige la clave del DFD, que modela procesos/funciones y flujos de datos, no el modelo conceptual de datos (915). Fuentes primarias: Software Engineering Institute/CMMI Institute, ISACA/IT Governance Institute, NASA y MÉTRICA v3 del Ministerio de Administraciones Públicas. Continúan sin resolver las dudas previas; no se han estudiado en este lote nuevos PDFs de academia ni cotejado las correcciones de las convocatorias.

## Lote 131 — 24 de octubre

IDs 971–975 revisados individualmente: dos vigentes y tres corregidas. Acumulado: 975 examinadas, 933 verificadas (263 vigentes, 581 corregidas y 89 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 683 preguntas con cambios de contenido. Quedan 11.148 sin revisar; siguiente ID 976.

Se acota la técnica de factores críticos de éxito a la planificación PSI de MÉTRICA v3, evitando presentarla como técnica general de obtención de requisitos en análisis (971). Se mantiene como vigente la atribución de los programas de calidad de servicios públicos a la Dirección General de Gobernanza Pública, añadiendo la cita al artículo 11.1.e del Real Decreto 210/2024 y la comprobación del texto consolidado (972). En el modelo entidad-relación se corrige la clave «todas»: las cardinalidades mínimas y máximas expresan límites de participación, mientras que el tipo de correspondencia no se deduce únicamente de las entidades, sin reglas de negocio (973). Se confirma la definición del Sistema de Valor del Servicio de ITIL 4 Foundation (974). Se corrige el diagrama de contexto de MÉTRICA v3: en el DFD de nivel 0 se representa el sistema con un proceso único y las entidades externas, no almacenes de datos (975).

Cotejo temático con Drive: el bloque 12 de planificación estratégica incluye PSI y FCE; el bloque 03 trata calidad en los servicios públicos; el bloque 29 de bases de datos desarrolla ER y cardinalidades; el bloque 41 cubre ITIL 4; y el bloque 38 recoge análisis estructurado y MÉTRICA. Se cotejaron esos apartados concretos y se contrastaron con las fuentes primarias, no se auditó todo Drive. Correspondencias revisadas contra BOE-A-2025-25938, anexo I, y BOE-A-2025-26262, anexo IX: A1-87/A1-95 y A2-III-2 (971); A1-22 (972); A1-89/A2-III-4 (973); A1-106 (974); A1-90/A1-95 y A2-III-2/A2-III-3 (975). No se revisaron en este lote correcciones posteriores de las convocatorias; la comprobación global sigue pendiente.

Fuentes: Ministerio de Administraciones Públicas, MÉTRICA v3, PSI, ASI 1.1 y Técnicas; Real Decreto 210/2024, texto consolidado, art. 11.1.e; PeopleCert y AXELOS, ITIL 4 Foundation, §4.1; grupo ALARCOS-UCLM, notación DFD de MÉTRICA v3. `inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados tras el lote: 12.123 preguntas estructuralmente válidas, 975 registros de revisión y 11.148 preguntas restantes idénticas al commit original.

## Lote 132 — 24 de octubre

IDs 976–980 revisados individualmente: una vigente, dos corregidas y dos históricas. Acumulado: 980 examinadas, 938 verificadas (264 vigentes, 583 corregidas y 91 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 688 preguntas con cambios de contenido. Quedan 11.143 sin revisar; siguiente ID 981.

Se limita la relación entre el modelo funcional y el de objetos al método OMT de Rumbaugh: las afirmaciones del original son aceptables dentro de esa metodología histórica, no como regla universal de diseño OO (976). Se conserva la finalidad de PSI de MÉTRICA v3 y se descartan dos distractores que confundían planificación estratégica con programación temporal del proyecto (977). PMP se describe según PMI como certificación que reconoce experiencia y pericia en liderazgo de proyectos, sujeta a elegibilidad; se evita afirmar que sea una habilitación legal necesaria y se reemplaza «CMP» por un distractor identificable (978). CMMI v1.2 queda delimitado a capacidad 4 de la representación continua y marcado histórico frente a la evolución posterior del modelo (979). El atributo en centímetros se clasifica como derivado solo después de establecer que se calcula desde metros y no se almacena independientemente (980).

Cotejo temático con Drive: el bloque 38 de análisis/diseño recoge DFD y modelos OO; el bloque 12 expone la finalidad y actividades PSI de MÉTRICA v3; el bloque 39 compara CMMI V3.0 actual con referencias anteriores; y el bloque 29 trata los atributos almacenados/derivados y el modelado E/R. Se revisaron esos apartados concretos, no todo Drive. Correspondencias comprobadas contra BOE-A-2025-25938, anexo I, y BOE-A-2025-26262, anexo IX: A1-89/A1-93 y A2-III-9 (976); A1-87/A1-95 y A2-III-2 (977); A1-35/A2-III-2 (978); A1-98/A2-III-13 (979); A1-89/A2-III-4 (980). No se comprobó en este lote si las convocatorias han recibido correcciones o modificaciones posteriores; la comprobación global sigue pendiente.

Fuentes: Rumbaugh et al., *Object-Oriented Modeling and Design* (1991), OMT; Ministerio de Administraciones Públicas, MÉTRICA v3, PSI y Técnicas; Project Management Institute, PMP certification; Software Engineering Institute, *CMMI for Development v1.2*; Elmasri y Navathe, *Fundamentals of Database Systems*, modelado ER. `inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados tras el lote: 12.123 preguntas estructuralmente válidas, 980 registros de revisión y 11.143 preguntas restantes idénticas al commit original.

## Lote 127 — 22 de octubre

IDs 951–955 revisados individualmente: una vigente y cuatro corregidas. Acumulado: 955 examinadas, 914 verificadas (259 vigentes, 567 corregidas y 88 históricas) y 41 pendientes (23 de fuente y 18 de ambigüedad); 664 preguntas con cambios de contenido. Quedan 11.168 sin revisar; siguiente ID 956.

Se sustituye el beneficio impreciso de la gestión de cambios de ITIL v3 por el propósito de Change Enablement en ITIL 4: aumentar los cambios exitosos mediante evaluación de riesgos, autorización y programación (951). Se confirma que limitar el trabajo en curso es una práctica general del método Kanban (952). La pregunta de ayuda de Git tenía dos distractores incorrectos y ninguna combinación válida; se reformula distinguiendo `git help add` y `man git-add` de la opción mal formada `git add -help` (953). En el DFD de MÉTRICA v3 se retira la recomendación infundada de mostrar entidades externas solo en el nivel cero; se pregunta por la conexión inválida entre entidad externa y almacén sin proceso intermedio (954). Se conserva la definición de ingeniería inversa y se atribuye con precisión a la taxonomía de Chikofsky y Cross citada por IEEE (955).

Cotejo temático con Drive: el bloque «41_Bloque_41_Tema_ITIL_y_COBIT_2026» cubre la práctica de Change Enablement; «38_ITIC_Academy_Analisis_Diseno_Construccion_SI_2026» trata Kanban, Git y la distinción entre ingeniería inversa y directa; «Tema 093 - Métrica v3» cubre el DFD. Se han contrastado estos materiales de academia con las fuentes técnicas primarias, no se ha auditado todo Drive. Para el programa se revisaron los anexos I y IX de BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2): la materia corresponde, respectivamente, a A1-106/A2-IV-4 (951), A1-37 y A1-88/A2-III-2 (952), A1-100 y A1-102/A2-IV-4 (953), A1-95/A2-III-3 (954) y A1-100/A1-101/A2-III-8 (955). Las búsquedas exploratorias en BOE por referencia y por «corrección de errores» no localizaron una corrección de los anexos del programa; sí devolvieron publicaciones posteriores de tramitación y composición de tribunales. No se toma esa búsqueda como prueba exhaustiva de que no exista una disposición posterior, ni como auditoría de todas las modificaciones normativas del banco.

Fuentes técnicas: PeopleCert, práctica ITIL 4 Change Enablement; Kanban University, Official Guide to The Kanban Method; manual oficial Git `git-help`; directrices DFD de MÉTRICA v3 del grupo ALARCOS-UCLM; IEEE Technology Navigator y Chikofsky/Cross, IEEE Software 7(1), DOI 10.1109/52.43044. `inventario.cjs` y `verificar.cjs` ejecutados tras el lote: 12.123 preguntas estructuralmente válidas, 955 cambios registrados y 11.168 preguntas restantes idénticas al commit original.

## Lote 144 — 24 de octubre

IDs 1036–1040 revisados individualmente: cinco corregidas. Acumulado: 1.040 examinadas, 998 verificadas (274 vigentes, 629 corregidas y 95 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 736 preguntas con cambios de contenido. Quedan 11.083 sin revisar; siguiente ID 1.041.

Se aclara que ID3 induce árboles de decisión desde ejemplos etiquetados y selecciona divisiones mediante ganancia de información/entropía, no produce genéricamente «reglas» por deducción (1036). Prolog se acota a programación lógica históricamente asociada a la IA simbólica, sin presentarlo como lenguaje exclusivo de IA (1037). Se sustituye una afirmación negativa y absoluta sobre ingeniería del conocimiento por el principio KADS que separa conocimiento de dominio y de control (1038). Se define el retroceso en backtracking de CSP como poda de una rama incompatible y vuelta a una decisión anterior (1039). La pregunta sobre KADS queda delimitada al artículo de Wielinga, Schreiber y Breuker y sus dos fases para construir el primer modelo de experiencia: identificación y modelado del conocimiento (1040). Se conservan íntegros los originales en `cambios-lote-144.json`.

Cotejo temático con Drive: bloque 32 de ITIC Academy, versión 2026.1; apartados 4.6 (backtracking), 6.2 (lógica y Prolog) y 8.10 (árboles de decisión), además del resumen y las soluciones. El documento no desarrolla expresamente KADS; esa parte se verificó con las fuentes universitarias y el artículo académico citado. Correspondencias: A1-70 y A2-III-5/D5 (1036–1038 y 1040); A2-III-5/D5 (1039). El programa oficial se consultó en BOE-A-2025-25938, anexo I, y BOE-A-2025-26262, anexo IX. La revisión global de modificaciones/correcciones de las convocatorias y las 42 dudas abiertas siguen pendientes.

Fuentes: Quinlan, «Induction of decision trees», *Machine Learning* 1 (1986), DOI 10.1007/BF00116251; University of Waikato sobre ID3 y ganancia de información; manual de SWI-Prolog sobre programas lógicos; University of Calgary, modelo conceptual KADS; Wielinga, Schreiber y Breuker, «KADS: a modelling approach to knowledge engineering», *Knowledge Acquisition* 4 (1992), DOI 10.1016/1042-8143(92)90013-Q; Poole y Mackworth, University of British Columbia, algoritmos de backtracking. ITIC Academy, bloque 32 versión 2026.1, solo en los apartados indicados.

`inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 1.040 registros de revisión y 11.083 preguntas restantes idénticas al commit original.

## Lote 145 — 24 de octubre

IDs 1041–1045 revisados individualmente: cinco corregidas. Acumulado: 1.045 examinadas, 1.003 verificadas (274 vigentes, 634 corregidas y 95 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 741 preguntas con cambios de contenido. Quedan 11.078 sin revisar; siguiente ID 1.046.

Se elimina la ambigüedad sobre si una regla activada puede borrar hechos y se precisa el encadenamiento hacia delante monótono: añade la conclusión a los hechos conocidos y puede habilitar reglas posteriores (1041). «Método uniformado» se corrige por el concepto estándar de búsqueda de coste uniforme, y la denominación errónea queda como única opción no estándar (1042). Se distingue el motor de inferencia de la base de conocimiento, la interfaz/memoria de trabajo y la adquisición de conocimiento (1043). Se concreta la afirmación histórica sobre MARC: la Library of Congress lo desarrolló a finales de los años sesenta para codificar fichas catalográficas en forma legible por máquina; no fue sustituido por ISBD (1044). Se reemplaza la expresión imprecisa «el conocimiento no varía» por la propiedad formal de monotonía: añadir premisas no elimina conclusiones ya derivadas (1045). Se conservan íntegros los originales en `cambios-lote-145.json`.

Cotejo temático con Drive: bloque 32 de ITIC Academy, versión 2026.1, apartados 4.6 (backtracking) y 6.2, 6.4–6.6 (lógica, sistemas expertos, motor de inferencia y encadenamientos). El bloque 40, versión 2026.1, sección 3, se consultó por su marco de gestión documental/metadatos, aunque no contiene MARC específicamente. La propiedad formal de monotonía se contrastó con Stanford Encyclopedia of Philosophy, no con el material de academia. Correspondencias: A1-70 y A2-III-5/D5 (1041–1043 y 1045); A1-105 y A2-II-16 (1044). El programa oficial se consultó en BOE-A-2025-25938, anexo I, y BOE-A-2025-26262, anexo IX. La revisión global de modificaciones/correcciones de las convocatorias y las 42 dudas abiertas siguen pendientes.

Fuentes: UC Berkeley CS188, encadenamiento hacia delante y estrategias de búsqueda; IEEE Technology Navigator y Negnevitsky, *Artificial Intelligence: A Guide to Intelligent Systems*, para motores de inferencia; Library of Congress, historia y formatos MARC 21; IFLA, documentación de UNIMARC; Stanford Encyclopedia of Philosophy, «Non-monotonic Logic» (revisión de 2024), para monotonía de la consecuencia. ITIC Academy, bloques 32 y 40, solo en los apartados especificados.

`inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 1.045 registros de revisión y 11.078 preguntas restantes idénticas al commit original.

## Lote 146 — 24 de octubre

IDs 1046–1050 revisados individualmente: cuatro corregidas y una vigente. Acumulado: 1.050 examinadas, 1.008 verificadas (275 vigentes, 638 corregidas y 95 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 745 preguntas con cambios de contenido. Quedan 11.073 sin revisar; siguiente ID 1.051.

Se amplía la definición de base de conocimiento de un sistema experto para incluir la representación del dominio (hechos, reglas y, según el formalismo, otras estructuras), separándola del motor de inferencia (1046). Se delimita la representación simbólica de IA frente a los diagramas de flujo de datos de análisis estructurado (1047). Se acota la detección heurística de antimalware como posibilidad basada en rasgos similares a malware conocido, sin firma exacta ni garantía absoluta (1048). Se especifica qué guarda un slot de un marco: valores/instancias, restricciones o referencias asociados a una característica (1049). Se confirma la estructura de redes semánticas mediante nodos para conceptos y arcos para relaciones; se conserva el original y su clave (1050). Se conservan íntegros los originales en `cambios-lote-146.json`.

Cotejo temático con Drive: bloque 32 de ITIC Academy, versión 2026.1, secciones 6.1–6.4 para IA simbólica, representación del conocimiento, redes semánticas y sistemas expertos; 6.5 para encadenamiento hacia delante. El material no trata específicamente DFD ni desarrolla la estructura interna de marcos. Bloque 48, versión 2026.1, para seguridad del puesto, antimalware/EDR y detección por firmas, heurística y comportamiento (1048). Se cotejaron esos apartados pertinentes, no todo Drive. Correspondencias comprobadas contra BOE-A-2025-25938, anexo I, A1-70 (1046, 1047, 1049 y 1050) y A1-54 (1048), y BOE-A-2025-26262, anexo IX, A2-III-5 (1046, 1047, 1049 y 1050) y A2-IV-12/C10 (1048). Las 42 dudas previas y la comprobación global de correcciones posteriores de las convocatorias siguen pendientes.

Fuentes: IEEE Technology Navigator y CLIPS 6.4 User’s Guide para bases de conocimiento/motor de inferencia; University of Pisa sobre redes semánticas y representación simbólica; University of Colorado Boulder sobre DFD; Microsoft Learn sobre heurística de Microsoft Defender; Marvin Minsky, MIT AI Laboratory Memo 306 (1974), para marcos y slots; University at Buffalo sobre redes semánticas. ITIC Academy, bloques 32 y 48, solo en los apartados indicados.

`inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 1.050 registros de revisión y 11.073 preguntas restantes idénticas al commit original.

## Lote 147 — 24 de octubre

IDs 1051–1055 revisados individualmente: cinco corregidas. Acumulado: 1.055 examinadas, 1.013 verificadas (275 vigentes, 643 corregidas y 95 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 750 preguntas con cambios de contenido. Quedan 11.068 sin revisar; siguiente ID 1.056.

Se aclara que un perceptrón multicapa puede tener una o más capas ocultas, entre la entrada y la salida; no tiene que limitarse a una sola (1051). Se resuelve la ambigüedad de «plataforma de Google»: TensorFlow se pregunta expresamente como plataforma abierta para crear y entrenar modelos, mientras Vertex AI se identifica como servicio gestionado de Google Cloud (1052). Se añade el supuesto de conocimiento completo que hace válida la hipótesis del mundo cerrado: si un hecho no se deriva de la base que se considera completa, se trata por defecto como falso (1053). Se distinguen las cuatro conversiones SECI de la creación de conocimiento, que es el proceso general que describe el modelo (1054). Se delimita la pregunta de Chomsky a la etiqueta asignada a las gramáticas de tipo 2, llamadas independientes del contexto; tipo 3 es regular, tipo 1 sensible al contexto y tipo 0 no restringida (1055). Se conservan íntegros los originales en `cambios-lote-147.json`.

Cotejo con Drive: bloque 32 de ITIC Academy, versión 2026.1, §§ 10.1–10.2 (perceptrón y MLP) y § 17.1 (TensorFlow frente a otros marcos), para 1051–1052; bloque 07, versión 2026, § 2.5 «Gestión del conocimiento», presenta el modelo SECI como espiral de cuatro fases para 1054. Esos materiales se usaron para el cotejo temático, y la respuesta se contrastó con documentación técnica y el artículo fuente. El bloque 32 no desarrolla la hipótesis del mundo cerrado ni la jerarquía de Chomsky; se deja constancia y se contrastan con Poole/Mackworth y Chomsky. Correspondencias consultadas contra BOE-A-2025-25938, anexo I: A1-70 (1051–1053) y A1-29 (1054); BOE-A-2025-26262, anexo IX: A2-III-5 (1051–1053) y A2-II-3 (1055). No se asigna A2 a SECI por falta de correspondencia directa.

Fuentes: TensorFlow Core y Google Cloud Vertex AI para distinguir arquitectura neuronal, framework abierto y plataforma gestionada; Poole y Mackworth, *Artificial Intelligence: Foundations of Computational Agents*, §§ 5.7 y 15.9, para mundo cerrado/abierto; Nonaka, «A Dynamic Theory of Organizational Knowledge Creation», *Organization Science* 5(1), 1994, DOI 10.1287/orsc.5.1.14; Chomsky, «On Certain Formal Properties of Grammars», *Information and Control* 2(2), 1959, DOI 10.1016/S0019-9958(59)90362-6, y University of Waterloo, jerarquía de Chomsky. ITIC Academy, bloques 32 y 07, solo en los apartados indicados.

`inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 1.055 registros de revisión y 11.068 preguntas restantes idénticas al commit original.

## Lote 148 — 24 de octubre

IDs 1056–1060 revisados individualmente: una vigente y cuatro corregidas. Acumulado: 1.060 examinadas, 1.018 verificadas (276 vigentes, 647 corregidas y 95 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 755 preguntas con cambios de contenido. Quedan 11.063 sin revisar; siguiente ID 1.061.

Se acota la falta de garantía de optimalidad a greedy best-first, que prioriza h(n), sin extenderla a toda búsqueda heurística: A* puede ser óptimo con heurística admisible y las condiciones apropiadas (1056). Se especifica el modelo de actores como abstracción para sistemas concurrentes/distribuidos que también puede utilizarse en sistemas multiagente, evitando presentarlo como método de IA en sí mismo (1057). Se confirma O(log n) para búsqueda binaria en una tabla ordenada con acceso por índice (1058). Se alinea la distinción de conocimiento estratégico e inferencial con la taxonomía publicada: pasos de la tarea frente a deducción de hechos/hipótesis nuevos; la academia cubre el tema de sistemas expertos, pero no desarrolla expresamente esta taxonomía (1059). Se reescribe en positivo la pregunta de ámbitos de IA para eliminar la doble negación y no mezclar métodos con aplicaciones como si fueran una categoría única (1060).

Cotejo con Drive: bloque 32 de ITIC Academy, versión 2026.1, § 5.9 (greedy y A*), § 5.7 (búsqueda binaria), § 7.3 (IA distribuida y sistemas multiagente), §§ 6.4–6.6 (sistemas basados en conocimiento e inferencia) y § 1 más §§ 6, 7 y 13 (ámbitos de IA). El material no desarrolla expresamente el modelo de actores ni la taxonomía estratégico/inferencial, limitaciones documentadas en las preguntas; se completan con fuentes técnicas. Correspondencias: A1-70/A2-III-5 (1056, 1057, 1059 y 1060); A2-III-5 (1058). La comprobación global de modificaciones posteriores de las convocatorias y las 42 dudas anteriores siguen pendientes.

Fuentes: Poole y Mackworth, *Artificial Intelligence: Foundations of Computational Agents*, § 3.6; Akka, guía del modelo de actores, y Hewitt, “Viewing control structures as patterns of passing messages” (1977); Princeton Algorithms, 4.ª ed., clase `BinarySearch`, y Cornell CS2110 sobre O(log n); “Intelligent Monitoring and Control”, clasificación de conocimiento estratégico/inferencial; Rice University y University of Maryland sobre ámbitos y aplicaciones de IA; bloque 32 de ITIC Academy; anexos I y IX de BOE-A-2025-25938 y BOE-A-2025-26262.

`inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 1.060 registros de revisión y 11.063 preguntas restantes idénticas al commit original.

## Lote 149 — 24 de octubre

IDs 1061–1065 revisados individualmente y corregidos. Acumulado: 1.065 examinadas, 1.023 verificadas (276 vigentes, 652 corregidas y 95 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 760 preguntas con cambios de contenido. Quedan 11.058 sin revisar; siguiente ID 1.066.

Se sustituye una referencia oscura y ambigua a “sistemas de Kleene” por la distinción verificable entre sistemas formales de prueba (sintaxis/teoría de la demostración) y semántica de modelos e interpretaciones (1061). Se concreta Prolog como lenguaje declarativo de programación lógica asociado históricamente a IA simbólica; la etiqueta genérica «lenguaje específico» permitía objetar que C++ y Java también se usan en ingeniería del conocimiento (1062). Se explica el aprendizaje neuronal mediante ajuste de pesos y sesgos a partir de ejemplos y una función de pérdida, reemplazando «en base a la experiencia» por el mecanismo de entrenamiento (1063). Se limita la pareja base de conocimiento/motor de inferencia a los componentes nucleares de sistemas expertos clásicos, sin generalizarla a cualquier paradigma de representación (1064–1065).

Cotejo con Drive: ITIC Academy, bloque 32, versión 2026.1: § 6.2 (IA simbólica, lógica y Prolog), § 6.4 (base de conocimiento y motor de inferencia) y §§ 10.1–10.2 (neurona artificial y aprendizaje de redes). El documento no formula expresamente la distinción teoría de la demostración/semántica; ese alcance se contrastó con material universitario de lógica. Correspondencias: A1-70/A2-III-5 en los cinco ítems. La comprobación global de modificaciones posteriores de las convocatorias y las 42 dudas anteriores siguen pendientes.

Fuentes: University of Cambridge, *Logic and Proof*; Umeå University, *Foundations of Logic and Model Theory*; Colmerauer y Roussel, «The Birth of Prolog», HOPL-II/ACM (1993); Rumelhart, Hinton y Williams, «Learning representations by back-propagating errors», *Nature* 323 (1986), DOI 10.1038/323533a0; documentación TensorFlow sobre entrenamiento; Stanford HAI sobre sistemas expertos; Buchanan y Shortliffe (eds.), *Rule-Based Expert Systems* (1984); bloque 32 de ITIC Academy; anexos I y IX de BOE-A-2025-25938 y BOE-A-2025-26262.

`inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 1.065 registros de revisión y 11.058 preguntas restantes idénticas al commit original.

## Lote 150 — 24 de octubre

IDs 1066–1070 revisados individualmente: cuatro corregidas y una histórica reformulada. Acumulado: 1.070 examinadas, 1.028 verificadas (276 vigentes, 656 corregidas y 96 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 765 preguntas con cambios de contenido. Quedan 11.053 sin revisar; siguiente ID 1.071.

Se corrige la descripción de los CSP: restricciones especifican combinaciones permitidas de valores de variables, y una solución satisface el conjunto, no expresan necesariamente causalidad o sincronización (1066). Se acota MINIMAX a decisiones adversarias alternas, dos jugadores y suma cero, especificando el sentido de maximizar la utilidad mínima garantizable (1067). Se generalizan las redes semánticas a grafos de conceptos y relaciones, sin reducirlas a conocimiento lingüístico ni confundirlas con redes neuronales ponderadas (1068–1069). Se sustituye una periodización no definida de la IA por una pregunta histórica acotada: la búsqueda heurística es fundacional en la IA simbólica temprana (GPS, años cincuenta), aunque sigue usándose actualmente; por ello el registro queda histórico y no afirma exclusividad temporal (1070).

Cotejo con Drive: ITIC Academy, bloque 32, versión 2026.1: § 4.6 (backtracking y CSP), §§ 5.9–5.10 (búsqueda heurística y MINIMAX), § 6.3 (redes semánticas). El bloque presenta la búsqueda heurística como técnica vigente, pero no define una periodización histórica; se usaron fuentes primarias de GPS y A*. Correspondencias: A1-70/A2-III-5 para todos los ítems. Siguen pendientes el cotejo global de modificaciones posteriores de las convocatorias y las 42 dudas previas.

Fuentes: Poole y Mackworth, *Artificial Intelligence: Foundations of Computational Agents*, §§ 4.1 y 5.10; Mackworth, «Consistency in Networks of Relations», *Artificial Intelligence* 8(1), 1977; Shapiro, «Associative Networks: The SNePS Semantic Network Processing System» (1979); Quillian, «Word Concepts: A Theory and Simulation of Some Basic Semantic Capabilities», *Behavioral Science* 12(5), 1967, DOI 10.1002/bs.3830120511; Newell, Shaw y Simon, «A General Problem-Solving Program for a Computer» (1959); Hart, Nilsson y Raphael, «A Formal Basis for the Heuristic Determination of Minimum Cost Paths» (1968); bloque 32 de ITIC Academy; anexos I y IX de BOE-A-2025-25938 y BOE-A-2025-26262.

`inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 1.070 registros de revisión y 11.053 preguntas restantes idénticas al commit original.

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

## Lote 117 — 22 de octubre

IDs 901–905 revisados individualmente. Una pregunta se conserva vigente y cuatro se corrigen/formulan con mayor precisión. Acumulado: 905 examinadas, 866 verificadas y 39 pendientes (22 de fuente y 17 de ambigüedad); 625 preguntas con cambios de contenido. Estados: 249 vigentes, 537 corregidas, 80 históricas y 39 pendientes. Quedan 11.218 sin revisar; siguiente ID 906.

Se confirma la ingeniería hacia delante como paso desde abstracciones y diseños independientes de implementación hasta la implementación física, según Chikofsky y Cross (901). Se ajusta la pregunta 902 al primer paso exacto del modelo de mejora continua ITIL 4: comprender la visión y objetivos. En MÉTRICA v3, ASI 2.4 valida requisitos y casos de uso como válidos, consistentes y completos; integridad no aparece entre esos criterios (903). Se especifica «Mean Time To Recovery» para evitar la expansión alternativa de MTTR y se distingue recuperación de tiempo entre fallos y reparación (904). Se delimita Calidad Total/TQM frente a la familia de normas ISO 9000 con una definición centrada en cliente, mejora continua y participación organizativa (905).

Fuentes consultadas: artículo de Chikofsky y Cross en IEEE Software (DOI 10.1109/52.43044); PeopleCert, guía oficial ITIL 4 y modelo de mejora continua; Ministerio de Administraciones Públicas, MÉTRICA v3, ASI 2.4; NIST CSRC Glossary y SP 800-55v1 (2024); American Society for Quality (TQM) e ISO (familia ISO 9000). No se han estudiado nuevos PDFs de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote; ambos pendientes permanecen documentados. `inventario.cjs` y `verificar.cjs` ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 905 cambios registrados y 11.218 preguntas sin revisión de contenido idénticas al commit original.

## Lote 118 — 22 de octubre

IDs 906–910 revisados individualmente: tres verificadas/corregidas y dos pendientes de resolver (una por fuente y otra por ambigüedad). Acumulado: 910 examinadas, 869 verificadas y 41 pendientes (23 de fuente y 18 de ambigüedad); 627 preguntas con cambios de contenido. Estados: 250 vigentes, 539 corregidas, 80 históricas y 41 pendientes. Quedan 11.213 sin revisar; siguiente ID 911.

Se confirman en McCall las tres perspectivas operación, revisión y transición del producto (906). La pregunta de niveles de prueba se limita al sistema completo e integrado: ISTQB reconoce que las pruebas de características no funcionales pueden ejecutarse en varios niveles; se excluye «despliegue», que puede designar instalación o aceptación (907). MÉTRICA v3 ubica CSI-CAL 4, revisión de formación a usuarios finales, dentro de Construcción del Sistema de Información (908). La pregunta genérica de gestor documental no se certifica: sin producto o requisitos explícitos, tanto la restricción de formatos como el volumen/velocidad son capacidades dependientes de la solución (909). La clasificación de prototipos atribuida a J. Whitten queda pendiente porque no se localizó edición y página que sustenten la taxonomía específica (910).

Fuentes consultadas: McCall, Richards y Walters (RADC-TR-77-369, 1977), verificado mediante la síntesis técnica de NIST; ISTQB CTFL Syllabus v4.0.1 (2024); Ministerio de Administraciones Públicas, MÉTRICA v3, Aseguramiento de la Calidad; ISO 19475 e ISO/TC 46/SC 11. Para Whitten no se halló la fuente primaria precisa y se conserva sin validar. No se han estudiado nuevos PDFs de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote; esos pendientes continúan abiertos. `inventario.cjs` y `verificar.cjs` ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 910 cambios registrados y 11.213 preguntas sin revisión de contenido idénticas al commit original.

## Lote 119 — 22 de octubre

IDs 911–915 revisados individualmente. Tres corregidos y dos delimitados como históricos. Acumulado: 915 examinadas, 874 verificadas y 41 pendientes (23 de fuente y 18 de ambigüedad); 632 preguntas con cambios de contenido. Estados: 250 vigentes, 542 corregidas, 82 históricas y 41 pendientes. Quedan 11.208 sin revisar; siguiente ID 916.

Se restringe CMMI a la suite v1.3, cuyos modelos eran Development, Acquisition y Services; la taxonomía actual CMMI v3.0 tiene ocho dominios (911). COBIT 4.1 se limita a los tres ejes clásicos del cubo; «personas» integra los recursos de TI, no es un eje adicional (912). ISACA fecha la primera publicación de COBIT en 1996, por lo que se corrige «finales de 1995» (913). Se formula con mayor precisión el desarrollo incremental por construcciones sucesivas (914). Se corrige la clave del DFD: representa procesos/funciones y flujos de datos, no el modelo conceptual de datos (915).

Fuentes consultadas: Software Engineering Institute (CMMI v1.3) y CMMI Institute (dominios v3.0); ISACA e IT Governance Institute (COBIT y COBIT 4.1); NASA Software Engineering Handbook (ciclo incremental); Ministerio de Administraciones Públicas (MÉTRICA v3, Análisis del Sistema) y directriz DFD de MÉTRICA alojada por la Universidad de Castilla-La Mancha. No se han estudiado nuevos PDFs de academia ni cotejado correcciones posteriores de convocatorias en este lote. `inventario.cjs` y `verificar.cjs` ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 915 cambios registrados y 11.208 preguntas restantes idénticas al commit original.

## Lote 120 — 22 de octubre

IDs 916–920 revisados individualmente. Dos se conservan vigentes, dos se corrigen y una queda delimitada como histórica. Acumulado: 920 examinadas, 879 verificadas y 41 pendientes (23 de fuente y 18 de ambigüedad); 635 preguntas con cambios de contenido. Estados: 252 vigentes, 544 corregidas, 83 históricas y 41 pendientes. Quedan 11.203 sin revisar; siguiente ID 921.

Se confirma en la especificación OMG que UML 2.5.1 clasifica los diagramas principalmente en estructurales y de comportamiento, con constructos suplementarios que pueden mezclar aspectos (916). La estructura por fases y la centralidad de Service Strategy se acotan a ITIL v3; «marco de control de amplio alcance» corresponde a COBIT (917). El Daily Scrum se alinea con la Scrum Guide 2020: inspeccionar el progreso hacia el Sprint Goal y adaptar el Sprint Backlog; la resolución detallada de problemas se hace fuera de la reunión (918). El modelo de agrupamiento se contrasta con Bertrand Meyer: un cluster es un conjunto de clases lógicamente relacionadas (919). En entrega incremental, Sommerville establece priorizar primero los servicios de mayor valor; se completa el supuesto para justificar que la gestión básica de documentos sea la prioridad del primer incremento (920).

Fuentes consultadas: OMG UML 2.5.1; Office of Government Commerce/AXELOS, Foundations of ITIL v3, e ISACA; Scrum Guide 2020 de Schwaber y Sutherland; Bertrand Meyer, Object-Oriented Software Construction, 2.ª ed.; Ian Sommerville, Software Engineering, 10.ª ed., §2.3.2. No se han estudiado nuevos PDFs de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote. `inventario.cjs` y `verificar.cjs` ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 920 cambios registrados y 11.203 preguntas restantes idénticas al commit original.

## Lote 121 — 22 de octubre

IDs 921–925 revisados individualmente y corregidos. Acumulado: 925 examinadas, 884 verificadas (252 vigentes, 549 corregidas y 83 históricas) y 41 pendientes (23 de fuente y 18 de ambigüedad); 640 preguntas con cambios de contenido. Quedan 11.198 sin revisar; siguiente ID 926.

Se corrige la última fase de RUP a transición y se evita equiparar fase con iteración (921). Se identifica cobertura de ramas como técnica estructural de caja blanca y se reemplaza un distractor de regresión que podía admitir técnicas de ambos tipos (922). Se matiza el objetivo de coste en gestión de servicios para evitar prometer reducción absoluta (923). Se define el indicador ANS con población y periodo explícitos (924). Se precisa Planning Poker como estimación privada con revelado simultáneo y discusión; Fibonacci modificada es frecuente, no obligatoria (925).

Fuentes consultadas: documentación IBM Rational sobre las fases RUP; ISTQB CTFL v4.0.1; ISO/IEC 20000-2 y PeopleCert ITIL 4; ejemplo de KPI de cumplimiento de SLA de ServiceNow; artículo original de Planning Poker de James Grenning y nota de Mike Cohn sobre escalas Fibonacci modificadas. No se han estudiado nuevos PDFs de academia ni cotejado correcciones posteriores de convocatorias en este lote. `inventario.cjs` y `verificar.cjs` ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 925 cambios registrados y 11.198 preguntas restantes idénticas al commit original.
## Lote 122 — 22 de octubre

IDs 926–930 revisados individualmente: cuatro corregidos y uno histórico con atribución y alcance versionados. Acumulado: 930 examinadas, 889 verificadas (252 vigentes, 553 corregidas y 84 históricas) y 41 pendientes (23 de fuente y 18 de ambigüedad); 645 preguntas con cambios de contenido. Quedan 11.193 sin revisar; siguiente ID 931.

Se rectifica la atribución a ITIL de la definición de plan de contingencia, que corresponde a lineamientos de AGETIC, y se reformula la pregunta citando esa fuente (926). Se aclara la jerarquía DFD de MÉTRICA v3: funciones en nivel 2 y subfunciones en nivel 3 (927). JAD se describe como taller facilitado de obtención/acuerdo de requisitos y se precisa que puede usarse en DSDM sin ser exclusiva de ese método (928). Se distinguen los ejemplos de flujos de consulta, actualización y diálogo de MÉTRICA frente al distractor de sincronización (929). En COBIT 5, «cubrir la empresa de extremo a extremo» sí es principio; se reemplaza la opción para dejar una única afirmación falsa y se marca la taxonomía como histórica frente a COBIT 2019 (930).

Fuentes consultadas: AGETIC, lineamientos para planes de contingencia tecnológica; Ministerio de Administraciones Públicas, MÉTRICA v3, Técnicas y Prácticas (jerarquía y notación DFD); Centre for Software Engineering (DSDM) y PMI (JAD); ISACA (principios de COBIT 5 y comparación con COBIT 2019). No se han estudiado nuevos PDFs de academia ni cotejado correcciones posteriores de convocatorias en este lote. `inventario.cjs` y `verificar.cjs` ejecutados sin errores: 12.123 preguntas estructuralmente válidas, 930 cambios registrados y 11.193 preguntas restantes idénticas al commit original.
## Lote 123 — 22 de octubre

IDs 931–935 revisados individualmente: una se conserva vigente, tres se corrigen y una queda delimitada como histórica. Acumulado: 935 examinadas, 894 verificadas y 41 pendientes (23 de fuente y 18 de ambigüedad); 649 preguntas con cambios de contenido. Estados: 253 vigentes, 556 corregidas, 85 históricas y 41 pendientes. Quedan 11.188 sin revisar; siguiente ID 936.

Se distingue la prueba de regresión de la prueba de confirmación tras un cambio (931). Se acota el uso del diagrama de despliegue de MÉTRICA v3 a DSI 1.1 y al particionamiento físico para eliminar respuestas defendibles en otras tareas (932). EFQM criterio 9 se marca histórico para la versión de 2013 y se diferencia del modelo actual de siete criterios (933). Se corrige la relación esfuerzo/plazo de la ecuación de Putnam/SLIM, explicitando sus supuestos y la dependencia aproximada de T⁻⁴ (934). Se precisa el prototipado como apoyo al descubrimiento y validación de requisitos poco claros, no como práctica universal ni evidencia suficiente de seguridad (935).

Fuentes consultadas: ISTQB CTFL Syllabus v4.0.1; MÉTRICA v3 del Ministerio de Administraciones Públicas; guías EFQM 2013 de Club Excelencia en Gestión/AEVAL y modelo EFQM actual; Putnam y Myers y explicación de QSM; Ian Sommerville, *Software Engineering*, 10.ª edición. No se han estudiado nuevos PDFs de academia ni cotejado posibles correcciones posteriores de convocatorias en este lote; ambos pendientes siguen abiertos. `inventario.cjs` y `verificar.cjs` ejecutados tras el lote: 12.123 preguntas estructuralmente válidas, 935 cambios registrados y 11.188 preguntas restantes idénticas al commit original.

## Lote 124 — 22 de octubre

IDs 936–940 revisados individualmente: una vigente y cuatro corregidas. Acumulado: 940 examinadas, 899 verificadas (254 vigentes, 560 corregidas y 85 históricas) y 41 pendientes (23 de fuente y 18 de ambigüedad); 653 preguntas con cambios de contenido. Quedan 11.183 sin revisar; siguiente ID 941.

Se documenta la CMDB como repositorio de elementos de configuración y sus relaciones (936); se corrige la definición de rama Git como referencia móvil a commits, sin implicar copia física del repositorio (937); se corrige la clave y se distingue tamaño funcional en puntos de función de productividad por unidad de esfuerzo (938); y se delimitan dos cuestiones de MÉTRICA v3: derivación del modelo físico desde el modelo lógico normalizado en DSI 6 (939), y pruebas de regresión para evitar el efecto onda en MSI 3.3 (940).

Cotejo parcial con materiales de Drive: el bloque 41 «ITIL y COBIT» (2026) explica que los CI y sus relaciones se registran en la CMDB; el tema 93 de MÉTRICA v3 recoge DSI y técnicas de prueba; el bloque 38 «Análisis, diseño y construcción» (2026) define regresión como detección de roturas del comportamiento previamente válido y recoge Git como control de versiones. El bloque 9 de organización y gestión trata productividad/throughput, pero no fundamenta por sí mismo el cálculo de puntos de función; para la pregunta 938 se usa la referencia primaria de IFPUG. Esto es cotejo de materiales pertinentes, no revisión exhaustiva de todos los PDFs de academia.

Se consultó la convocatoria oficial BOE-A-2025-25938 (Cuerpo Superior TIC, 16 de diciembre de 2025), de la que procede el programa A1, y la BOE-A-2025-26262 para el programa A2, junto con búsquedas de correcciones posteriores por identificador/título; no se localizó una corrección de esas convocatorias en los resultados oficiales consultados. La comprobación global de modificaciones y correcciones de convocatorias sigue pendiente.

Fuentes técnicas: PeopleCert/ITIL; documentación oficial de Git; IFPUG, Function Point Analysis y MetricViews (agosto de 2015); Ministerio de Administraciones Públicas, MÉTRICA v3, Diseño del Sistema de Información, Participantes y Mantenimiento de Sistemas de Información. `inventario.cjs` y `verificar.cjs` ejecutados tras el lote: 12.123 preguntas estructuralmente válidas, 940 cambios registrados y 11.183 preguntas restantes idénticas al commit original.

## Lote 125 — 22 de octubre

IDs 941–945 revisados individualmente: dos vigentes, dos corregidas y una histórica. Acumulado: 945 examinadas, 904 verificadas (256 vigentes, 562 corregidas y 86 históricas) y 41 pendientes (23 de fuente y 18 de ambigüedad); 656 preguntas con cambios de contenido. Quedan 11.178 sin revisar; siguiente ID 946.

Se corrige el emparejamiento de estándares: IEEE 1219-1998 era la norma de mantenimiento y 610.12-1990 el glosario de ingeniería del software; 610.13-1993 era un glosario de lenguajes y se retiró (941). Se marca la pregunta como histórica porque 1219 fue sustituida por ISO/IEC 14764 y 610.12 por ISO/IEC/IEEE 24765. Se rectifica la confusión entre corrección y fiabilidad en McCall (942); se mantiene el modelo Entidad-Relación para expresar datos y sus relaciones (943); se verifica que usabilidad es factor de operación y mantenibilidad/reutilización pertenecen a otras perspectivas de McCall (944). En lenguajes OO se corrige la ambigüedad: COBOL, Fortran y Ada tienen características OO en estándares posteriores, por lo que la opción A original también podía sostenerse. Se introducen distractores con C para dejar una única opción íntegramente OO (945).

Cotejo de academia en Drive: «39_Bloque_39_ITIC_Academy_Calidad_Mantenimiento_2026» enumera correctamente las perspectivas de McCall (operación, revisión y transición) y separa puntos de función/tamaño funcional de razones de productividad; el tema «Calidad_2021» cubre McCall, productividad y los estándares de mantenimiento, pero conserva referencias históricas que se contrastaron con las fichas actuales de IEEE SA. «Tema 093 - Métrica v3» contiene el modelo Entidad/Relación y la obtención del modelo físico desde el lógico; «Tema BBDD v1.1» trata el modelo ER. Este cotejo temático no supone revisar todos los materiales de Drive.

Se volvieron a consultar en BOE las convocatorias A1 BOE-A-2025-25938 y A2 BOE-A-2025-26262 y se buscaron correcciones por número y título; no se encontró una corrección de errores de esas dos convocatorias en los resultados oficiales consultados. La comprobación exhaustiva de todas las modificaciones de convocatorias y normas continúa pendiente.

Fuentes técnicas: IEEE Standards Association (fichas de IEEE 1219, 610.12 y 610.13); McCall, Richards y Walters, informe original RADC-TR-77-369; Ministerio de Administraciones Públicas, MÉTRICA v3, Análisis del Sistema de Información; ISO C++ draft, Oracle JLS, ECMA-367 Eiffel, GNU Smalltalk. `inventario.cjs` y `verificar.cjs` ejecutados tras el lote: 12.123 preguntas estructuralmente válidas, 945 cambios registrados y 11.178 preguntas restantes idénticas al commit original.

## Lote 126 — 22 de octubre

IDs 946–950 revisados individualmente: dos vigentes, una corregida y dos históricas. Acumulado: 950 examinadas, 909 verificadas (258 vigentes, 563 corregidas y 88 históricas) y 41 pendientes (23 de fuente y 18 de ambigüedad); 660 preguntas con cambios de enunciado, opciones o clave. Quedan 11.173 sin revisar; siguiente ID 951.

Se acota la escala de madurez de ISO 9004 como referencia histórica: el nivel 3 corresponde a «aproximación del sistema formal estable», pero se señala que el descriptor de cinco niveles procede de materiales basados en el anexo A de ISO 9004:2000, y que las ediciones 2009 y 2000 están retiradas y cuentan con versiones sucesoras (946). Para ITIL 4, se comprueba que la definición describe la cadena de valor del servicio, no el SVS ni las cuatro dimensiones (947). MÉTRICA v3 llama «proceso primitivo» al proceso terminal que se especifica a partir de los niveles de un DFD (948). Se concreta que la prueba de bucles es estructural/de caja blanca y se ajusta el enunciado para evitar confundirla con pruebas basadas en grafos (949). La clasificación de tres posturas coste/calidad de la pregunta 950 se delimita al tema académico histórico que la enumera, sin presentarla como taxonomía normalizada o consenso actual.

Cotejo con Drive: «41_Bloque_41_Tema_ITIL_y_COBIT_2026» cubre el tema oficial A1-106 y sitúa ITIL 4/gestión del servicio; «088.pdf» (Carlos Corral Mata, 2007) trata la calidad del software, cita el artículo de Lawler de 1981 y enumera las hipótesis de productividad, coste libre, calidad/coste y modelo compuesto; «test_temas_2_0003.pdf» reproduce una pregunta sobre el modelo compuesto. La búsqueda de la carpeta 2026 también localizó material separado de MÉTRICA y pruebas/calidad; el contraste con los documentos pertinentes es parcial, no una auditoría de todo Drive.

Se consultaron nuevamente las fichas BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2) y se buscaron en los textos de ambas las menciones a correcciones de errores; esas consultas no mostraron una corrección dentro de las propias resoluciones. Esto no descarta una disposición posterior publicada por separado: la comprobación exhaustiva de modificaciones de convocatorias y normativa sigue pendiente.

Fuentes técnicas: ISO, ficha de ISO 9004:2009 y artículo alojado en iso.org sobre la escala histórica; PeopleCert, ITIL 4 Foundation; Administración Electrónica, MÉTRICA v3, ASI; ISTQB Glossary, técnica de caja blanca. Los materiales de Drive citados se contrastaron solo como apoyo curricular. `inventario.cjs` y `verificar.cjs` ejecutados tras el lote: 12.123 preguntas estructuralmente válidas, 950 cambios registrados y 11.173 preguntas restantes idénticas al commit original.

## Lote 128 — 24 de octubre

IDs 956–960 revisados individualmente: cuatro corregidas y una pendiente de fuente. Acumulado: 960 examinadas, 918 verificadas (259 vigentes, 571 corregidas y 88 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 669 preguntas con cambios de contenido. Quedan 11.163 sin revisar; siguiente ID 961.

Se corrige el error ortográfico de throughput y se delimita como caudal efectivo por unidad de tiempo, distinguiéndolo de latencia y ancho de banda teórico (956). Se actualiza la definición de mantenibilidad a ISO/IEC 25010:2023, que sustituyó técnicamente a la edición 2011 (957). Se aclara el modelo espiral de cuatro fases según NASA: la evaluación revisa la iteración y replantea la siguiente espiral (958). La pregunta de benchmark se precisa como medición y comparación de sistemas con una carga definida y comparable (960). La pregunta 959 se moderniza a ITIL (Version 5), pero queda pendiente de fuente: la documentación pública oficial confirma que Version 5 es el marco actual y contiene la práctica de incidentes, pero no se localizó una fuente primaria pública que certifique el detalle de la regla de prioridad para esa versión. La guía disponible de ITIL 4 y el material de academia 2026 no bastan para trasladar la afirmación como verificada a Version 5.

Cotejo temático con Drive: el bloque 39 «Calidad y mantenimiento» presenta ISO/IEC 25010:2023 y mantenibilidad; el tema 15 de metodologías/ciclo de vida trata la espiral; el bloque 41 ITIL/COBIT recoge incidentes, impacto y urgencia y actualiza el material a Version 5; el bloque 9 de organización y gestión trata evaluación del rendimiento, benchmark y throughput. Los PDFs se cotejaron en esos apartados y se contrastaron con fuentes técnicas primarias; no se auditó todo Drive. La clasificación se comprobó en BOE-A-2025-25938, anexo I (A1-91, A1-98, A1-86 y A1-106) y BOE-A-2025-26262, anexo IX (A2-IV-4, A2-III-13, A2-III-1 y A2-IV-3). No se localizaron correcciones de esas convocatorias en las búsquedas oficiales efectuadas para el lote; la comprobación global y exhaustiva sigue pendiente.

Fuentes técnicas: IETF RFC 6349 y RFC 1242; ISO/IEC 25010:2023; NASA Software Engineering Handbook SWE-019 y Boehm (1988); PeopleCert/ITIL.com para el marco ITIL Version 5; guía ITIL 4 únicamente como referencia histórica y no como verificación de la regla en Version 5; SPEC CPU2026 y CPU2000. `inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados tras el lote: banco estructuralmente válido, 960 registros de revisión y 11.163 preguntas sin cambios frente al commit original. Una pregunta permanece pendiente de fuente.

## Lote 129 — 24 de octubre

IDs 961–965 revisados individualmente: una vigente, tres corregidas y una histórica. Acumulado: 965 examinadas, 923 verificadas (260 vigentes, 574 corregidas y 89 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 673 preguntas con cambios de contenido. Quedan 11.158 sin revisar; siguiente ID 966.

Se aclara la dependencia UML entre la clase que declara una operación y el tipo usado por uno de sus parámetros, separándola de la comunicación entre instancias (961). La garantía de calidad se actualiza a la definición de ISO 9000:2015 y se distingue del control de calidad (962). La estrategia DAFO se especifica como FA: fortalezas internas para responder a amenazas externas, frente a FO, DO y DA (963). Se confirma la definición literal de las pruebas de regresión de MÉTRICA v3, tarea MSI 3.3 (964). EFQM se delimita a la edición 2013: se completa el quinto criterio facilitador como «procesos, productos y servicios» y se marca histórica porque el modelo vigente se estructura en Direction, Execution y Results (965).

Cotejo temático con Drive: el bloque 38 de análisis/diseño incluye dependencia, aseguramiento de calidad y regresión; el bloque 39 de calidad separa aseguramiento y control; el bloque 12 de dirección TIC identifica explícitamente F+A como estrategia defensiva; el bloque 3 actualizado distingue el EFQM vigente del CAF 2020. Se estudiaron los apartados pertinentes de esos documentos, no todos los materiales de academia. Correspondencias del BOE: A1-89/A2-III-9 (961), A1-96/A1-98/A2-III-13 (962), A1-35/A1-87 (963; sin tema A2 directo), A1-95/A1-96/A2-III-7 (964) y A1-103 (965; sin tema A2 directo). Se consultaron las convocatorias A1 BOE-A-2025-25938 y A2 BOE-A-2025-26262; la revisión exhaustiva de correcciones y modificaciones posteriores sigue pendiente.

Fuentes técnicas: OMG UML 2.5.1; ISO 9000:2015, términos 3.2.7–3.2.8; Weihrich, «The TOWS Matrix», Long Range Planning 15(2), 1982, DOI 10.1016/0024-6301(82)90120-0; Ministerio de Administraciones Públicas, MÉTRICA v3, MSI 3.3; Ministerio para la Transformación Digital y de la Función Pública, guía EFQM 2013; EFQM, modelo vigente. `inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados tras el lote: banco estructuralmente válido, 965 registros de revisión y 11.158 preguntas restantes idénticas al commit original.

## Lote 130 — 24 de octubre

IDs 966–970 revisados individualmente: cuatro corregidos y uno confirmado vigente. Acumulado: 970 examinadas, 928 verificadas (261 vigentes, 578 corregidas y 89 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 678 preguntas con cambios de contenido. Quedan 11.153 sin revisar; siguiente ID 971.

Se acota la comparación cascada/prototipado a un modelo secuencial estricto de una pasada, para que las tres limitaciones y la respuesta «todas» no se presenten como universales para cualquier variante (966). La pregunta de documentación en MÉTRICA v3 se reescribe porque «tareas de documentación» podía referirse a actividades o a productos: se pregunta por la generación y mantenimiento de documentos en procesos distintos, con ejemplos de DSI, IAS y aseguramiento de calidad a lo largo del desarrollo y mantenimiento (967). Caja gris deja de identificarse con un empleado interno necesariamente carente de privilegios; se usa la definición de conocimiento parcial sobre la estructura o implementación del sistema (968). Se confirma la taxonomía GoF creacional, estructural y de comportamiento, limitando la afirmación a ese catálogo (969). El modelo espiral se formula como un enfoque guiado recurrentemente por el análisis de riesgos, dentro de los objetivos y restricciones de cada ciclo (970).

Cotejo temático con Drive: el tema 15 de metodologías/ciclo de vida recoge los modelos iterativos y el ciclo de vida; el bloque 38 trata MÉTRICA v3, diseño y patrones, incluida la clasificación GoF; el bloque 48 incluye seguridad de aplicaciones y pruebas de intrusión. Se revisaron los apartados pertinentes de esos PDFs, no todo Drive. Correspondencias contrastadas con BOE-A-2025-25938, anexo I, y BOE-A-2025-26262, anexo IX: A1-86/A2-III-1 (966 y 970), A1-95/A2-III-2 (967), A1-47/A1-125/A1-126 y A2-II-13/A2-IV-12 (968), A1-93/A2-III-9 (969). La comprobación exhaustiva de correcciones y modificaciones posteriores de las convocatorias continúa pendiente.

Fuentes primarias: Royce, «Managing the Development of Large Software Systems» (1970); NASA Software Engineering Handbook, SWE-019; MÉTRICA v3 del Ministerio de Administraciones Públicas (Aseguramiento de la Calidad, DSI, IAS y Gestión de Proyectos); NIST CSRC Glossary y OWASP Web Security Testing Guide; Pearson/Addison-Wesley, índice de *Design Patterns* de Gamma, Helm, Johnson y Vlissides; Boehm (1988), IEEE Computer 21(5). `inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados tras el lote: 12.123 preguntas estructuralmente válidas, 970 registros de revisión y 11.153 preguntas restantes idénticas al commit original.

## Lote 133 — 24 de octubre

IDs 981–985 revisados individualmente: dos vigentes, dos corregidos y uno histórico. Acumulado: 985 examinadas, 943 verificadas (266 vigentes, 585 corregidas y 92 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 690 preguntas con cambios de contenido. Quedan 11.138 sin revisar; siguiente ID 986.

Se confirma en la tabla de participantes de MÉTRICA v3 que el Comité de Dirección interviene en PSI 1, PSI 2 y PSI 9, pero no en PSI 7, arquitectura tecnológica (981). RUP utiliza UML como lenguaje de modelado: se distingue el proceso de desarrollo del lenguaje de notación (982). La pregunta sobre «acoplamiento normal» se acota a la taxonomía clásica que lo distingue de los subtipos por datos, estampado y control; allí consiste en llamada y retorno de control sin parámetros. Se advierte que el rótulo no es uniforme entre textos (983). Se conserva ISO/IEC 15504 como respuesta histórica a SPICE, aclarando que está retirada y que la familia actual es ISO/IEC 330xx (984). La definición de wireframe se precisa como representación esquemática de baja fidelidad de la estructura y disposición de una página o interfaz, evitando confundirla con un mapa del sitio (985).

Cotejo con Drive: el bloque 12 de ITIC Academy describe las nueve actividades PSI y ubica arquitectura tecnológica en PSI 7; el bloque 38 trata proceso unificado, UML, acoplamiento y wireframes/prototipos; el bloque 39 identifica la asociación histórica SPICE–ISO/IEC 15504 y recomienda la familia 330xx actual. Se consultaron los apartados pertinentes, no la totalidad de esos PDFs. Correspondencias del BOE: A1-95/A2-III-2 (981), A1-88/A1-93/A2-III-9 (982), A1-93/A2-III-9 (983), A1-98/A2-III-13 (984) y A1-94/A2-III-3/A2-III-12 (985). Se mantienen pendientes la revisión exhaustiva de modificaciones posteriores de las convocatorias y los 42 casos señalados.

Fuentes: MÉTRICA v3 del Ministerio de Administraciones Públicas (tabla de participantes PSI); OMG, especificaciones UML e IBM Rational; artículo académico LACCEI 2009 sobre acoplamiento normal y guía de conceptos de MÉTRICA v3; ISO, fichas oficiales de ISO/IEC 15504-2:2003 (retirada), 33001:2015 y 33020:2019 (vigentes/confirmadas en 2026); Digital.gov y Comisión Europea, definiciones de wireframe. `inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados tras el lote: banco válido, 985 registros de revisión y 11.138 preguntas restantes idénticas al commit original.

## Lote 134 — 24 de octubre

IDs 986–990 revisados individualmente: una histórica y cuatro corregidas. Acumulado: 990 examinadas, 948 verificadas (266 vigentes, 589 corregidas y 93 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 695 preguntas con cambios de contenido. Quedan 11.133 sin revisar; siguiente ID 991.

La secuencia RAD se acota a las cinco fases de Pressman (modelado del negocio, datos, procesos, generación de aplicaciones y pruebas/entrega), sin presentarla como única definición del método (986, histórica). Se precisa el alcance de COBIT 2019 como gobierno y gestión de I&T empresarial frente a marcos centrados en ITSM, conservando la clave D con un supuesto explícito (987). En MÉTRICA v3, GPS 11.2 extrapola resultados del seguimiento para estimar la evolución futura si continúa la situación actual; se ajusta la opción correcta a esa definición y a su producto Diagrama de extrapolación (988). Se corrige la clave de C a A: IF-ADDED se dispara al añadir un valor a un slot; IF-NEEDED al solicitar un valor que debe calcularse (989). La pregunta sobre tendencias de SBC se reformula para distinguir una característica definitoria de una tendencia discutible; se conserva C como descripción del sistema basado en conocimiento (990).

Cotejo con Drive: el bloque 15 de ITIC Academy cubre modelos del ciclo de vida y RAD; el bloque 41 versión 2026.1 diferencia gestión de servicios de TI y gobierno/gestión empresarial de I&T; el bloque de proyectos Gantt/PERT incluye seguimiento y extrapolación; el bloque 32 versión 2026.1 cubre IA simbólica, sistemas expertos y fundamentos de IA. Se consultaron los apartados relacionados, no la totalidad de los materiales. Correspondencias verificadas contra los anexos I y IX de las convocatorias BOE-A-2025-25938 y BOE-A-2025-26262: A1-86/A2-III-1 (986); A1-106 (987); A1-95/A2-III-2 (988); A1-70/A2-III-5 (989 y 990). No se asigna A2 directo a 987. Sigue pendiente el cotejo exhaustivo de modificaciones posteriores de las convocatorias; las 42 dudas abiertas previas permanecen sin resolver.

Fuentes: Pressman, *Software Engineering: A Practitioner’s Approach*, 5.ª ed., cap. 2, fig. 2.6; McGraw Hill, ficha bibliográfica de la obra; ISACA, COBIT 2019 Framework y glosario; VeriSM, FitSM y The Open Group IT4IT; Ministerio de Administraciones Públicas, MÉTRICA v3, Gestión de Proyectos, GPS 11.2; Brachman y Levesque, *Knowledge Representation and Reasoning*, sección de marcos y procedimientos IF-ADDED/IF-NEEDED; ITIC Academy, bloques 15, 32 y 41. `inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 990 registros de revisión y 11.133 preguntas restantes idénticas al commit original.

## Lote 135 — 24 de octubre

IDs 991–995 revisados individualmente y corregidos. Acumulado: 995 examinadas, 953 verificadas (266 vigentes, 594 corregidas y 93 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 700 preguntas con cambios de contenido. Quedan 11.128 sin revisar; siguiente ID 996.

Se precisan cinco conceptos de IA: KQML como formato de mensajes y protocolo de comunicación entre agentes, sin atribuirle una justificación genérica de “generalidad y ortogonalidad” (991); búsqueda voraz por menor h(n), diferenciada de A* y de los costes acumulados g(n) (992); evaluación booleana de proposiciones atómicas y composición mediante conectivas (993); definición de árbol binario perfectamente equilibrado de Wirth, con diferencia máxima de un nodo entre los tamaños de los subárboles (994); y representación paramétrica del conocimiento aprendido en pesos y sesgos de redes neuronales (995).

Cotejo con Drive: el bloque 32 de ITIC Academy, versión 2026, cubre KIF/KQML, búsqueda heurística, árboles, IA simbólica y redes neuronales; se revisaron los apartados pertinentes, no el PDF completo. Correspondencias temáticas: A1-70/A2-III-5 para 991–993 y 995; A2-III-5 para 994. Las preguntas y respuestas se contrastaron con las fuentes técnicas citadas en sus fichas. Sigue pendiente la revisión exhaustiva de modificaciones posteriores de las convocatorias y permanecen abiertas las 42 dudas anteriores.

Fuentes principales: informe original de KQML de UMBC y especificación DARPA; libro abierto de Poole y Mackworth y CS188 de Berkeley para búsqueda informada; Stanford Encyclopedia of Philosophy para lógica proposicional; Wirth, *Algorithms and Data Structures*, para la definición de árbol perfectamente equilibrado; informe técnico de NASA sobre redes conexionistas y McClelland et al. sobre pesos como representación del conocimiento. ITIC Academy, bloque 32 versión 2026.

`inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 995 registros de revisión y 11.128 preguntas restantes idénticas al commit original.


## Lote 136 — 24 de octubre

IDs 996–1000 revisados individualmente: una vigente y cuatro corregidas. Acumulado: 1.000 examinadas, 958 verificadas (267 vigentes, 598 corregidas y 93 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 704 preguntas con cambios de contenido. Quedan 11.123 sin revisar; siguiente ID 1.001.

Se corrige la atribución de MYCIN: su tratamiento de incertidumbre emplea factores de certeza, no la teoría de Dempster–Shafer (996). La pregunta sobre marcos se reformula para que la afirmación falsa sea inequívoca: los marcos sí agrupan slots/valores y admiten relaciones y herencia (997). Se conserva como vigente la secuencia de preorden raíz, subárbol izquierdo y derecho (998). La dirección de inferencia no es una ventaja fijada por la representación mediante reglas: los motores pueden encadenar hacia delante o hacia atrás (999). Se reformula la pregunta de minería para distinguir tareas supervisadas concretas de clustering sin etiquetas, evitando generalizar que una familia de redes o árboles es siempre supervisada (1000).

Cotejo con Drive: el bloque 32 de ITIC Academy, versión 2026.1, cubre IA simbólica y sistemas expertos, tipos de aprendizaje, clustering y recorridos de árboles (apartados 2.6, 6 y 8 y preguntas razonadas). No atribuye a MYCIN el formalismo técnico exacto de factores de certeza; esto se contrastó con los artículos de Shortliffe y Buchanan. Correspondencias: A1-70/A2-III-5 (996, 997, 999); A2-III-5 (998); A1-71/A2-III-15 (1000). Sigue pendiente el cotejo exhaustivo de modificaciones posteriores de las convocatorias y permanecen abiertas las 42 dudas anteriores.

Fuentes: Shortliffe, «Mycin: A Knowledge-Based Computer Program Applied to Infectious Diseases» (1977), y Shortliffe y Buchanan, «A model of inexact reasoning in medicine» (1975); materiales universitarios de Johns Hopkins, Washington y Northwestern sobre marcos; University of Alberta y OpenDSA sobre recorridos; Brachman y Levesque y la referencia de O’Reilly sobre reglas y estrategias de encadenamiento; University of Iowa y Waikato sobre aprendizaje supervisado/no supervisado e IBM sobre clustering. ITIC Academy, bloque 32 versión 2026.1.

`inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 1.000 registros de revisión y 11.123 preguntas restantes idénticas al commit original.


## Lote 137 — 24 de octubre

IDs 1001–1005 revisados individualmente: tres corregidas, una vigente y una histórica. Acumulado: 1.005 examinadas, 963 verificadas (268 vigentes, 601 corregidas y 94 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 708 preguntas con cambios de contenido. Quedan 11.118 sin revisar; siguiente ID 1.006.

Se diferencia la representación mediante marcos, con slots y valores, de una red semántica, que expresa conceptos y relaciones como grafo (1001). Se corrige «descendientes» por «hijos directos» en la definición del árbol binario; las tres definiciones de grado quedan correctas (1002). Se confirma con el artículo original de Fikes y Nilsson la expansión Stanford Research Institute Problem Solver (1003). La antigua referencia a «Web Semántica 3.0» se reemplaza por una pregunta histórica verificable: WDML es la iniciativa World Digital Mathematics Library, mientras SHOE, DAML+OIL y RDF son tecnologías/lenguajes en la historia de la Web Semántica (1004). Se aclara el encadenamiento hacia delante como razonamiento desde hechos hacia reglas cuyas premisas coinciden, distinguiéndolo de encadenamiento hacia atrás y de la resolución de conflictos (1005).

Cotejo con Drive: bloque 32 de ITIC Academy, versión 2026.1, apartados 2.6 (árboles y recorridos), 6 (IA simbólica y representación del conocimiento) y preguntas razonadas. Correspondencias: A1-70/A2-III-5 (1001, 1003–1005); A2-III-5 (1002). La referencia histórica a WDML se verificó en la International Mathematical Union y las denominaciones SHOE/RDF/DAML+OIL en materiales de W3C. Sigue pendiente el cotejo exhaustivo de modificaciones posteriores de las convocatorias y permanecen abiertas las 42 dudas anteriores.

Fuentes principales: Johns Hopkins University y University of Washington sobre marcos y redes semánticas; OpenDSA y Cornell sobre árboles; Fikes y Nilsson (1971) sobre STRIPS; W3C sobre la historia de ontologías Web y DAML+OIL; International Mathematical Union sobre WDML; Brachman y Levesque y Middlesex University sobre sistemas expertos y encadenamiento. ITIC Academy, bloque 32 versión 2026.1.

`inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 1.005 registros de revisión y 11.118 preguntas restantes idénticas al commit original.


## Lote 138 — 24 de octubre

IDs 1006–1010 revisados individualmente: cinco corregidas. Acumulado: 1.010 examinadas, 968 verificadas (268 vigentes, 606 corregidas y 94 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 713 preguntas con cambios de contenido. Quedan 11.113 sin revisar; siguiente ID 1.011.

Se precisa que la búsqueda no informada no utiliza h(n) y que puede sufrir explosión combinatoria, sin afirmar que toda ejecución explore exhaustivamente el espacio (1006). Se aclara la dirección del vínculo parte-todo en marcos: desde «Cuerpo humano» a «Cabeza/Tronco/Extremidades» corresponde «Compuesto de» (1007). Se concreta softmax como normalización de logits a valores no negativos que suman 1, sin confundirlos con una etiqueta elegida ni garantizar calibración (1008). Se sustituye la metáfora de que las redes neuronales «emulan el cerebro» por una definición de modelos computacionales inspirados de forma simplificada en redes biológicas (1009). Se corrige la pregunta RPA para exigir pasos estables, repetitivos, basados en reglas, estructurados y de volumen alto; la interacción entre aplicaciones no basta por sí sola (1010).

Cotejo con Drive: bloque 32 de ITIC Academy, versión 2026.1, apartados 5, 2.6, 6 y 10. El bloque no desarrolla RPA; para ese ítem se consultaron Microsoft Learn y UiPath, que describen procesos estables, repetitivos, con datos estructurados y excepciones limitadas. Correspondencias: A1-70/A2-III-5 (1006–1009); A1-90/A2-II-16 (1010). Las 42 dudas previas y el cotejo exhaustivo de modificaciones posteriores de las convocatorias siguen pendientes.

Fuentes principales: Poole y Mackworth y UC Berkeley CS188 para búsqueda no informada; Johns Hopkins y Washington para marcos; PyTorch y Google for Developers para softmax; Stanford HAI y Queensland Brain Institute para redes neuronales; Microsoft Learn y UiPath para idoneidad de RPA. ITIC Academy, bloque 32 versión 2026.1, solo en los apartados citados.

`inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 1.010 registros de revisión y 11.113 preguntas restantes idénticas al commit original.


## Lote 139 — 24 de octubre

IDs 1011–1015 revisados individualmente: una vigente y cuatro corregidas. Acumulado: 1.015 examinadas, 973 verificadas (269 vigentes, 610 corregidas y 94 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 717 preguntas con cambios de contenido. Quedan 11.108 sin revisar; siguiente ID 1.016.

Se confirma que el aprendizaje por refuerzo busca maximizar la recompensa acumulada esperada, no solo la recompensa inmediata (1011). La pregunta de agentes se reformula: el original contenía dos opciones incorrectas —descripción del control de la pizarra y roles de Contract Net invertidos—, así que ahora pregunta directamente por Contract Net y distingue manager de contractor (1012). Se acota la comparación de lógica a una diferencia comprobable entre interpretación semántica y derivación mediante reglas formales, eliminando afirmaciones discutibles sobre Kleene y eficiencia de búsqueda (1013). Se corrige la descripción contradictoria de una shell: la base de reglas es parte de la base de conocimiento; se define el shell como entorno reutilizable con mecanismo de inferencia al que se incorpora conocimiento del dominio (1014). Se sustituye una pregunta de «afirmación falsa» con generalizaciones incompatibles sobre enfoques declarativos/procedimentales por una pregunta positiva sobre adquisición, representación y validación del conocimiento junto con expertos (1015). Se conservan los cinco originales completos en `cambios-lote-139.json`.

Cotejo con Drive: bloque 32 de ITIC Academy, versión 2026.1, apartados de aprendizaje por refuerzo, agentes y coordinación, lógica y sistemas expertos/representación del conocimiento. Correspondencias oficiales revisadas contra BOE-A-2025-25938, anexo I, A1-70, y BOE-A-2025-26262, anexo IX, A2-III-5. El bloque de academia se utilizó para comprobar la cobertura temática, no como fuente normativa o autoridad técnica. Siguen pendientes el cotejo exhaustivo de modificaciones posteriores de las convocatorias y las 42 dudas previas.

Fuentes: Sutton y Barto, *Reinforcement Learning: An Introduction*, 2.ª ed., MIT Press, para retorno acumulado; Smith, «The Contract Net Protocol», *IEEE Transactions on Computers* 29(12), 1980, y NASA para roles y control en blackboard; Stanford Encyclopedia of Philosophy y Cambridge para semántica/demostración; UMBC CLIPS User’s Guide y University of Calgary para shells; Purdue y Brian Gaines (University of Victoria) para adquisición, modelado y validación del conocimiento. ITIC Academy, bloque 32, versión 2026.1, solo en los apartados indicados.

`inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 1.015 registros de revisión y 11.108 preguntas restantes idénticas al commit original.


## Lote 140 — 24 de octubre

IDs 1016–1020 revisados individualmente: tres corregidas, una vigente y una histórica. Acumulado: 1.020 examinadas, 978 verificadas (270 vigentes, 613 corregidas y 95 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 720 preguntas con cambios de contenido. Quedan 11.103 sin revisar; siguiente ID 1.021.

Se corrige la notación tipográfica de la complejidad temporal de heapsort a O(n log n), que es la cota del peor caso (1016). Se confirma la atribución del perceptrón a Rosenblatt mediante su informe técnico de enero de 1957 y se conserva como pregunta histórica (1017). Se matiza que las taxonomías de agentes varían según su eje; se conserva la terna de tipos de aplicación interfaz, información y virtuales como selección reconocida, no como clasificación universal ni exhaustiva (1018). Se verifica que OpenAI presentó ChatGPT en 2022 (1019). Se precisa que una jerarquía de herencia ISA entre marcos debe ser acíclica; la herencia múltiple no es por sí misma inválida, y las relaciones cíclicas ajenas a esa taxonomía quedan fuera del supuesto (1020). Se guardan los cinco originales en `cambios-lote-140.json`.

Cotejo temático con Drive: bloque 32 de ITIC Academy, versión 2026.1, contenidos de algoritmos de ordenación, IA/redes neuronales, agentes y representación del conocimiento; se consultaron solo los apartados pertinentes. Correspondencias: A2-III-5 para heapsort (1016); A1-70/A2-III-5 para perceptrón, agentes y marcos (1017, 1018 y 1020); A1-70 para ChatGPT (1019). Fuentes: University of Waterloo y University of São Paulo sobre heapsort; el informe de Rosenblatt de Cornell y su publicación de 1958; Luck y d’Inverno, Carnegie Mellon, Carleton University y la literatura sobre taxonomías de agentes; anuncio oficial de OpenAI; University of Nijmegen, Universidad de Düsseldorf y Northwestern sobre marcos y herencia. Las taxonomías de agentes son diversas, por lo que la pregunta se formula deliberadamente sin presentar una lista como exhaustiva.

`inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 1.020 registros de revisión y 11.103 preguntas restantes idénticas al commit original.

## Lote 141 — 24 de octubre

IDs 1021–1025 revisados individualmente: dos vigentes y tres corregidas. Acumulado: 1.025 examinadas, 983 verificadas (272 vigentes, 616 corregidas y 95 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 723 preguntas con cambios de contenido. Quedan 11.098 sin revisar; siguiente ID 1.026.

Se confirma scikit-learn como biblioteca de aprendizaje automático en Python (1021). Se acota la inferencia en sistemas de producción a encadenamiento hacia adelante o atrás, sustituyendo la opción «todas» del original que mezclaba propiedades generales de redes semánticas, marcos y reglas (1022). Se separa el número de clases del tipo de características: la clasificación binaria no exige predictores booleanos; la variante Naïve Bayes establece el modelo de distribución de las características (1023). Se confirma A* como búsqueda informada guiada por heurística, con f(n)=g(n)+h(n) (1024). Se reformula GPS para preguntar por el análisis medios-fines y la selección recursiva de operadores que reducen una diferencia, con subobjetivos cuando faltan precondiciones (1025). Se conservan íntegros los originales en `cambios-lote-141.json`.

Cotejo con Drive: en ITIC Academy, «32_Bloque_32_Inteligencia_Artificial_Ciencia_de_Datos_nuevo_temario_2026», versión 2026.1, se consultaron los apartados de IA/herramientas, IA simbólica y sistemas expertos, aprendizaje automático, ordenación y búsqueda, y sus soluciones. El documento ubica A* en A2 D5 y define Naïve Bayes por las distribuciones de características; se usa para verificar cobertura, no como autoridad técnica. Correspondencias con BOE-A-2025-25938, anexo I (A1-70), y BOE-A-2025-26262, anexo IX (A2-III-5/D5). Fuentes técnicas: documentación oficial scikit-learn (Python y variantes Gaussian, Multinomial, Bernoulli y Categorical Naïve Bayes); UC Berkeley CS188, búsqueda informada; Brachman y Levesque, *Knowledge Representation and Reasoning*, cap. 7; y Newell y Simon, «GPS, a Program that Simulates Human Thought» (1961). `inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 1.025 registros de revisión y 11.098 preguntas restantes idénticas al commit original. Las 42 dudas anteriores y la comprobación global de correcciones de convocatoria siguen pendientes.

## Lote 142 — 24 de octubre

IDs 1026–1030 revisados individualmente: dos vigentes y tres corregidas. Acumulado: 1.030 examinadas, 988 verificadas (274 vigentes, 619 corregidas y 95 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 726 preguntas con cambios de contenido. Quedan 11.093 sin revisar; siguiente ID 1.031.

Se corrige el identificador malformado del estándar Dublin Core y se distingue DCMI del W3C: el conjunto simple tiene 15 elementos y se normaliza como ANSI/NISO Z39.85 (1026). Se confirma la representación mediante marcos con slots y valores/enlaces (1027). Se verifica que preorden, inorden y postorden son recorridos en profundidad de árboles binarios (1028). Como «if asked» e «if required» podían parafrasear IF-NEEDED, se acota la pregunta al disparador exacto: calcular un valor de slot cuando se solicita y no está definido (1029). Se sustituye la definición imprecisa de agente por la formulación estándar de percepción mediante sensores y actuación mediante actuadores, sin exigir encargo de un usuario o aprendizaje (1030). Se conservan íntegros los originales en `cambios-lote-142.json`.

Cotejo con Drive: ITIC Academy, bloque 40 «Gestión Documental», sección 8.3, expone Dublin Core, los 15 elementos de ISO 15836-1 y el significado de `dc:format`; bloque 32 «Inteligencia Artificial y Ciencia de Datos», apartados de árboles, IA simbólica, búsqueda y agentes, cubre los IDs 1027–1030. Se revisaron solo esos apartados pertinentes. Correspondencias con BOE-A-2025-25938, anexo I: A1-105 (1026) y A1-70 (1027, 1029, 1030); BOE-A-2025-26262, anexo IX: A2-II-16 (1026) y A2-III-5/D5 (1027–1030). Fuentes primarias/técnicas: DCMI (historia, elementos básicos y codificación HTML); Marvin Minsky, *A Framework for Representing Knowledge* (1974); materiales universitarios de University of Pisa y University of Calgary sobre marcos y recorridos; Russell y Norvig, *Artificial Intelligence: A Modern Approach*, capítulo 2. `inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 1.030 registros de revisión y 11.093 preguntas restantes idénticas al commit original. Las 42 dudas anteriores y la comprobación global de correcciones de convocatoria siguen pendientes.

## Lote 143 — 24 de octubre

IDs 1031–1035 revisados individualmente: cinco corregidas. Acumulado: 1.035 examinadas, 993 verificadas (274 vigentes, 624 corregidas y 95 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 731 preguntas con cambios de contenido. Quedan 11.088 sin revisar; siguiente ID 1.036.

Se reformula la comparación entre búsqueda heurística y MINIMAX para distinguir expresamente la búsqueda adversaria de árbol de juego (1031). Se sustituye una opción negativa dudosa sobre agentes «dependientes» por una pregunta positiva sobre coordinación de agentes autónomos, que es un problema central de IAD (1032). Se retira «aprendizaje singular» como distractor terminológico y se pregunta por la definición comprobable del aprendizaje supervisado con etiquetas/objetivos conocidos (1033). Se corrige la relación de expresividad: OWL añade constructores a RDF/RDFS, no es un subconjunto de RDFS (1034). Se reemplaza la afirmación de que los sistemas expertos no tienen procesos algorítmicos por una pregunta sobre dónde se almacenan hechos y reglas del dominio: la base de conocimiento (1035). Se conservan íntegros los originales en `cambios-lote-143.json`.

Cotejo con Drive: ITIC Academy, bloque 32, secciones de búsqueda/MINIMAX, agentes e IA distribuida, paradigmas de aprendizaje, ontologías y sistemas expertos; se consultaron además sus preguntas y soluciones pertinentes. Correspondencias con BOE-A-2025-25938, anexo I, A1-70, y BOE-A-2025-26262, anexo IX, A2-III-5/D5. Fuentes: UC Berkeley CS188 sobre MINIMAX; material docente del profesor Michael Wooldridge (University of Oxford) sobre sistemas multiagente, coordinación y planificación; documentación scikit-learn y Sutton/Barto sobre aprendizaje supervisado y por refuerzo; recomendaciones W3C OWL 2 y RDF Schema; Middlesex University sobre componentes de sistemas expertos. `inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 1.035 registros de revisión y 11.088 preguntas restantes idénticas al commit original. Las 42 dudas anteriores y la comprobación global de correcciones de convocatoria siguen pendientes.



## Lote 156 — 24 de octubre

IDs 1096–1100 revisados individualmente: cinco corregidas. Acumulado: 1.100 examinadas, 1.058 verificadas (276 vigentes, 684 corregidas y 98 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 795 preguntas con cambios de contenido. Quedan 11.023 sin revisar; siguiente ID 1.101.

Se acota el perceptrón a la regla clásica binaria supervisada con etiquetas, evitando generalizar sobre modelos adaptativos tempranos de Rosenblatt (1096). Se elimina como supuesto universal que los agentes distribuidos deban ser benevolentes y compartir metas; la literatura admite cooperación, competencia y objetivos incompatibles (1097). Se precisa que los sistemas multiagente son el paradigma que modela explícitamente agentes autónomos que interactúan, sin afirmar que otras técnicas no puedan desplegarse de forma distribuida (1098). Se reemplaza la clasificación amplia de «comparación de patrones» por una pregunta precisa sobre la alineación temporal con programación dinámica de DTW; HMM se distingue como método estadístico secuencial y se conserva el contexto histórico de la fuente académica de 2009 (1099). La lista de inferencia en marcos se atribuye expresamente a la edición ITIC Academy 2023, que enumera deducción y actualización de valores de slots y equiparación de marcos (1100). Se guardan los cinco originales completos en revision/cambios-lote-156.json.

Cotejo con Drive: bloque 32 de ITIC Academy, edición 2026.1, §§ 7.1 y 7.3 para agentes y resolución distribuida, § 10 para perceptrón/redes neuronales y cobertura general de IA; el tema 94 de 2009 para la taxonomía histórica de reconocimiento de voz; y el bloque 32 de 2023 para la lista específica de inferencia en marcos. Correspondencias oficiales: A1-70 y A2-III-5 para los cinco IDs. Fuentes técnicas: MIT 6.036 sobre el perceptrón con ejemplos etiquetados; Rosenblatt (1958) como contexto histórico; Durfee, “Coordination of Distributed Problem Solvers” (Springer, 1988) y Wooldridge sobre agentes; Sakoe y Chiba (1978) sobre DTW; Rabiner (1989) sobre HMM en reconocimiento de voz; Minsky (1974) como antecedente de marcos. Se reparó además una inconsistencia de metadatos en las clasificaciones oficiales de los IDs 1091–1095: se restablecieron los identificadores completos del catálogo y quedaron reflejados en los registros de ambos lotes.

inventario.cjs, verificar.cjs y git diff --check ejecutados: 12.123 preguntas, cero errores estructurales, 1.100 registros de revisión y 11.023 preguntas restantes idénticas al original. Siguen pendientes las 42 dudas anteriores y la comprobación global de correcciones de convocatorias.


## Lote 157 — 24 de octubre

IDs 1101–1105 revisados individualmente: cuatro corregidas y una vigente. Acumulado: 1.105 examinadas, 1.063 verificadas (277 vigentes, 688 corregidas y 98 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 799 preguntas con cambios de contenido. Quedan 11.018 sin revisar; siguiente ID 1.106.

La expresión «representación paramétrica del conocimiento» se concreta al contraste vigente entre reglas simbólicas explícitas y modelos de aprendizaje que ajustan parámetros con datos; las redes neuronales son la opción pertinente entre las ofrecidas, sin afirmar que sean la única familia paramétrica (1101). Se reformula la pregunta sobre marcos para evaluar la herencia de un slot desde la clase superior cuando el marco hijo no aporta un valor local, en lugar de tratar la herencia como ajena a la inferencia (1102). «Diagramas» se limita a una representación genérica no especificada y se compara con tres formalismos concretos (redes semánticas, marcos y guiones) (1103). Se distingue el árbol de Merkle, estructura criptográfica para hashes y pruebas de integridad, de los algoritmos supervisados SVM, Naive Bayes y árboles de decisión (1104). La pregunta de Bubble Sort se conserva porque la definición original de comparaciones e intercambios adyacentes es correcta (1105). Se conservan íntegros los originales en revision/cambios-lote-157.json.

Cotejo con Drive: bloque 32 de ITIC Academy, edición 2026.1, §§ 1.3, 5, 6.1 y 8.8–8.10; la edición 2023, sección 4, detalla redes semánticas, marcos, guiones y herencia de slots. Correspondencias oficiales: A1-70/A2-III-5 para 1101–1104 y A2-III-5 para ordenación 1105. Fuentes: Goodfellow, Bengio y Courville, Deep Learning, cap. 5; Minsky, “A Framework for Representing Knowledge” (1974); RFC 6962 § 2.1 para árboles de Merkle; guía oficial scikit-learn para SVM, Naive Bayes y árboles de decisión; OpenDSA, Virginia Tech, para Bubble Sort.

inventario.cjs, verificar.cjs y git diff --check ejecutados: 12.123 preguntas, cero errores estructurales, 1.105 registros de revisión y 11.018 preguntas restantes idénticas al original. Siguen pendientes las 42 dudas anteriores y la comprobación global de correcciones de convocatorias.


## Lote 158 — 24 de octubre

IDs 1106–1110 revisados individualmente: cuatro corregidas y una vigente. Acumulado: 1.110 examinadas, 1.068 verificadas (278 vigentes, 692 corregidas y 98 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 803 preguntas con cambios de contenido. Quedan 11.013 sin revisar; siguiente ID 1.111.

Se acota la comparación SSL/SET al plano histórico: SSL 3.0 proporciona protección genérica sobre transporte fiable, mientras que SET se diseñó específicamente para pagos con tarjeta; se avisa de que SSL está obsoleto (1106). Se precisa que AWT es principalmente una API de escritorio, frente a JAXB, Axis y WSE, vinculados a XML/SOAP/servicios web; no se niega que un programa de escritorio pueda ser cliente web (1107). Se aclara la diferencia jurídica entre la competencia exclusiva del Ministerio del Interior y su ejercicio por la Dirección General de la Policía (1108). Se diferencia LCMS, orientado a contenido y objetos formativos, de LMS, que administra cursos/participantes, SCORM como modelo de interoperabilidad y CRM (1109). Se confirma que LDAPv3 se codifica con ASN.1/BER, define transporte sobre TCP y exige atomicidad para cambios agrupados en una petición Modify sobre una entrada; no se generaliza a transacciones entre varias peticiones (1110). Se conservan los originales íntegros en revision/cambios-lote-158.json.

Cotejo con Drive: ITIC Academy tema 78 para pagos/comercio electrónico; ASTIC tema 64 para Java; material sobre DNIe como contexto histórico; ITIC Academy tema 73, edición 2026.1, para LCMS/LMS (sin correspondencia A2 según el material); ITIC Academy tema 121 para directorios/LDAP. Correspondencias oficiales: 1106 A1-78/A1-125 y A2-IV-12; 1107 A1-67/A1-77 y A2-III-10/A2-III-12; 1108 A1-81 y A2-I-6; 1109 A1-73; 1110 A1-80/A1-122 y A2-II-8. Fuentes: IETF RFC 6101, RFC 2828 y OWASP para SSL/SET; Oracle Java API, Apache Axis/JAXB y Microsoft Learn para las tecnologías web; LO 4/2015 art. 10; RFC 4511 §§ 4.6, 5.1–5.2; y el material del tema 73 para el vocabulario LMS/LCMS.

inventario.cjs, verificar.cjs y git diff --check ejecutados: 12.123 preguntas, cero errores estructurales, 1.110 registros de revisión y 11.013 preguntas restantes idénticas al original. Siguen pendientes las 42 dudas anteriores y la comprobación global de correcciones de convocatorias.

## Lote 159 — 24 de octubre

IDs 1111–1115 revisados individualmente: tres corregidas, una vigente y una histórica. Acumulado: 1.115 examinadas, 1.073 verificadas (279 vigentes, 695 corregidas y 99 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 807 preguntas con cambios de contenido. Quedan 11.008 sin revisar; siguiente ID 1.116.

Se concreta ERP como sistema que integra y automatiza procesos de varias áreas empresariales, distinguiéndolo de CRM y de la categoría general MIS (1111). Se corrige la terminología imprecisa sobre qué “describe” el DDL: define la estructura del esquema y sus objetos; DML actúa sobre las filas almacenadas (1112). Se confirma ETRS89 para la Península Ibérica conforme al artículo 3 del RD 1071/2007, con REGCAN95 para Canarias (1113). La taxonomía original de SIG mezclaba despliegue, aplicaciones funcionales y productos; se pregunta por modalidades de despliegue/interacción, dejando claro que es una clasificación didáctica y no una taxonomía universal (1114). Se confirma el bloque DES de 64 bits y se distingue de sus 56 bits efectivos de clave; se conserva como conocimiento histórico porque NIST retiró el estándar en 2005 (1115). Los originales completos están en `revision/cambios-lote-159.json`.

Cotejo con Drive: ITIC Academy, bloque 30, edición 2026.1, tema A1-72, para ERP/CRM; bloque 29, edición 2026.1, A1-63/64 y A2-II-5, para bases de datos/SQL; ASTIC, tema 074, para SIG; e ITIC Academy, bloque 36, edición 2026.1, para criptografía. El temario SIG consultado no impone una taxonomía de productos: la delimitación de la pregunta 1114 se apoya además en ejemplos documentados por Esri de GIS empresarial, ArcGIS Pro de escritorio y aplicaciones web. Correspondencias: 1111 A1-72; 1112 A1-63/A1-64 y A2-II-5; 1113–1114 A1-74; 1115 A1-79 y A2-IV-12.

Fuentes técnicas y primarias: Microsoft Learn, ERP y categorías DDL/DML de SQL Server; Oracle Database Concepts, DDL y objetos de esquema; BOE, RD 1071/2007, art. 3; ASTIC, tema 074; documentación Esri de ArcGIS Enterprise y sus aplicaciones; NIST FIPS PUB 46 y FIPS 81 (bloque DES y longitud de clave) y ficha NIST de retirada de FIPS 46-3.

`inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 1.115 registros de revisión y 11.008 preguntas restantes idénticas al commit original. Siguen pendientes las 42 dudas previas y la comprobación global de correcciones posteriores de las convocatorias.

## Lote 160 — 24 de octubre

IDs 1116–1120 revisados individualmente: tres corregidas, una vigente y una histórica. Acumulado: 1.120 examinadas, 1.078 verificadas (280 vigentes, 698 corregidas y 100 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 811 preguntas con cambios de contenido. Quedan 11.003 sin revisar; siguiente ID 1.121.

En ADO.NET se reemplazan varias afirmaciones ambiguas o falsas por una pregunta directa sobre el papel del DataAdapter como puente entre DataSet y origen; DataReader es un flujo de lectura y DataSet incluye relaciones y restricciones (1116). Kotlin se confirma como lenguaje de programación interoperable con Java y se mantiene el ítem sin cambios de contenido (1117). Se corrige la afirmación de que BCL carece de APIs de seguridad y se pregunta por el .NET Framework clásico, distinguiendo BCL/FCL de una arquitectura por capas (1118). iBATIS se identifica como nombre histórico del framework de persistencia que continuó como MyBatis (1119). La pregunta de funciones digest tenía dos respuestas problemáticas: HMAC es una construcción MAC y MD8 no es un algoritmo hash estándar; ahora se pregunta por la diferencia MAC/hash con distractores hash inequívocos y se advierte del riesgo actual de MD5 (1120). Los originales íntegros están en `revision/cambios-lote-160.json`.

Cotejo con Drive: ITIC Academy, bloque 30, edición 2026.1, § 7.5 ADO.NET/Entity Framework Core y § 7.2 BCL/FCL; para Kotlin, el mismo bloque aporta contexto Java/JVM y la propiedad de interoperabilidad se comprueba en JetBrains; ASTIC, tema 62, § 6.2.2 (actualización 2017), documenta iBATIS/MyBatis y la capa de persistencia; ITIC Academy, bloque 36, edición 2026.1, A1-79, cubre criptografía y hashes. Correspondencias: 1116 A1-66/A2-III-11; 1117 A1-67/A2-II-3; 1118 A1-66/A2-III-11; 1119 A1-67/A2-III-10; 1120 A1-79/A2-IV-12.

Fuentes primarias: Microsoft Learn, arquitectura y proveedores ADO.NET, DataSet constraints, Entity Framework, System.Security y bibliotecas .NET; JetBrains, documentación oficial de Kotlin; historia y guía oficial de MyBatis; NIST FIPS 198-1 y CSRC Hash Functions; IETF RFC 1321 y RFC 6151 para MD5 y sus límites.

`inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 1.120 registros de revisión y 11.003 preguntas restantes idénticas al commit original. Siguen pendientes las 42 dudas previas y la comprobación global de correcciones posteriores de las convocatorias.

## Lote 161 — 24 de octubre

IDs 1121–1125 revisados individualmente: una vigente y cuatro corregidas. Acumulado: 1.125 examinadas, 1.083 verificadas (281 vigentes, 702 corregidas y 100 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 815 preguntas con cambios de contenido. Quedan 10.998 sin revisar; siguiente ID 1.126.

Se reescribe la explicación de «nivel medio» en C para reflejar que es una clasificación pedagógica informal basada en la combinación de abstracciones estructuradas y acceso de bajo nivel, sin atribuir al estándar una categoría oficial ni afirmar superioridad de velocidad frente a ensamblador (1121). En e-learning se elimina la falsa dicotomía entre formación en línea e interacción: la opción incorrecta ahora afirma que la modalidad íntegramente en línea garantiza interacción física presencial, mientras se acotan las demás ventajas (1122). Javadoc se mantiene como respuesta y se confirma con la guía Oracle Java SE 26 vigente (1123). La revisión por pares se restringe al procedimiento documentado por edX Open Response Assessment: participantes evalúan entregas de otros participantes (1124). La pregunta de criptografía se limita a la combinatoria de claves simétricas en una malla completa; así se evita la fórmula antigua tipográficamente ambigua y las afirmaciones incompatibles sobre algoritmos por bloques y de flujo (1125). Se guardan los cinco originales íntegros en `cambios-lote-161.json`.

Cotejo con Drive: ITIC Academy, bloque 33, edición 2026.1, A1-73, §§ 1.1–1.5 (conceptos, ventajas y modalidades de e-learning); bloque 30, A1-67 (contexto Java); bloque 36, A1-79 (criptografía). Para los ítems de lenguajes se contrastó la correspondencia con A2-II-3; para documentación/formación y peer assessment, con A2-III-6; para la gestión de claves, con A2-IV-12. El material de academia se usó para cotejar alcance del temario, y no como sustituto de fuentes técnicas: OpenStax explicita el carácter docente de «middle-level» para C; Oracle documenta Javadoc; edX describe el proceso de evaluación entre pares; Open University deriva el recuento de claves simétricas y NIST define las parejas pública/privada.

Fuentes primarias/técnicas consultadas: guía oficial Oracle Javadoc de Java SE 26; documentación del centro de ayuda de edX sobre evaluación de respuestas por pares; glosario NIST CSRC para claves públicas y privadas; Open University OpenLearn para el recuento combinatorio de claves compartidas. Para el término no normalizado de C se cita el texto educativo OpenStax de informática introductoria, aclarando expresamente que no es una categoría normativa. Temario vigente cotejado con BOE-A-2025-25938 (A1) y BOE-A-2025-26262, anexo IX (A2). `inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados tras el lote: 12.123 preguntas estructuralmente válidas, 1.125 registros revisados y 10.998 preguntas restantes idénticas al commit original.

## Lote 162 — 24 de octubre

IDs 1126–1130 revisados individualmente: cuatro corregidas y una vigente. Acumulado: 1.130 examinadas, 1.088 verificadas (282 vigentes, 706 corregidas y 100 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 819 preguntas con cambios de contenido. Quedan 10.993 sin revisar; siguiente ID 1.131.

Se acota la desnormalización a tablas de dimensión en un modelo dimensional en estrella, indicando snowflake como alternativa normalizada (1126). Se explica la alternancia por intervalos y cambios de contexto en multitarea sobre un único procesador lógico, separándola de la ejecución simultánea real (1127). Se precisan los ámbitos predominantes CRM/front-office y ERP/back-office y su posible integración (1128). Se confirma NAS como acceso normalmente a nivel de fichero (1129). Se corrige la definición excesivamente amplia de LUN y se especifica su ámbito de direccionamiento dentro de SCSI/target/host (1130). Los originales se conservan en `cambios-lote-162.json`.

Cotejo con ITIC Academy: bloque 12, edición 2026.2, A2-T4 para data warehouse/OLAP; bloque 47, edición 2026.1, A2-C2 para sistemas operativos; bloque 30, edición 2026.1, A1-72 para ERP/CRM; bloque 26, edición 2026.1, A1-56/A2-C5 para almacenamiento. Fuentes técnicas: Microsoft Learn sobre modelado dimensional y multitarea; Oracle sobre CRM/ERP; NetApp sobre NAS/SAN y asignación LUN; SNIA Dictionary sobre LUN. Correspondencias: 1126 A1-75/A2-II-4; 1127 A1-59/A2-IV-1; 1128 A1-72; 1129–1130 A1-56/A2-IV-5.

## Lote 163 — 24 de octubre

IDs 1131–1135 revisados individualmente: una vigente y cuatro corregidas. Acumulado: 1.135 examinadas, 1.093 verificadas (283 vigentes, 710 corregidas y 100 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 823 preguntas con cambios de contenido. Quedan 10.988 sin revisar; siguiente ID 1.136.

Se confirma el máximo de cinco años para certificados cualificados, conforme al art. 4.2 de la Ley 6/2020 (1131). Se separa SJF, que planifica trabajos/procesador, de FIFO, aleatoria y NRU como algoritmos de reemplazo de páginas (1132). Se limita la comparación clásica RISC/CISC a la complejidad y amplitud del conjunto de instrucciones, sin presentar como universales las afirmaciones de rendimiento o número de registros (1133). Se distingue ECMA-262, especificación del lenguaje ECMAScript, de ECMA-402, API de internacionalización, con las ediciones de junio de 2026 (1134). Se elimina «nueva» del enunciado legal y se formula de acuerdo con el art. 28.1 consolidado de la LOPDGDD, que incluye la valoración de evaluación de impacto y consulta previa (1135). Los originales íntegros se conservan en `cambios-lote-163.json`.

Cotejo con ITIC Academy: bloque 36, edición 2026.1, A1-80/A2-I-6 para certificados; bloque 47, edición 2026.1, A2-C2 para fundamentos de sistemas operativos; bloque 26, edición 2026.1, A1-52/A2-T1 para arquitectura; bloque 30, edición 2026.1, A1-65/A1-77/A2-T3/T9 para lenguajes y estándares web; bloque 8, versión 2026.3 (01/10/2026), A1-27/A2-O7 para protección de datos. La verificación normativa/técnica se apoya en BOE, Microsoft Learn, Patterson y Ditzel (1980), Ecma International y material universitario de sistemas operativos. Correspondencias: 1131 A1-80/A2-I-6; 1132 A1-59/A2-IV-1; 1133 A1-52/A2-II-1; 1134 A1-65/A1-77 y A2-II-3/A2-III-12; 1135 A1-27/A2-I-7.

`inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 1.135 registros de revisión y 10.988 preguntas restantes idénticas al commit original. Las 42 dudas anteriores y la comprobación global de correcciones de convocatoria siguen pendientes.

## Lote 164 — 24 de octubre

IDs 1136–1140 revisados individualmente: una vigente, dos corregidas y dos históricas. Acumulado: 1.140 examinadas, 1.098 verificadas (284 vigentes, 712 corregidas y 102 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 827 preguntas con cambios de contenido. Quedan 10.983 sin revisar; siguiente ID 1.141.

Se fija la pregunta sobre el formato XML a la versión histórica Visa 3DS 1.0.2 y se explica que EMV 3DS v2 usa JSON/JWE/JWS (1136). Se sustituyen combinaciones ambiguas de herramientas SIG por una pareja enteramente abierta: gvSIG Desktop y Leaflet; ArcMap/ArcGIS son propietarios y ArcMap se retiró en marzo de 2026 (1137). Se confirma que los recursos instrumentados con JMX se exponen mediante MBeans registrados en un MBean Server (1138). Se corrige la confusión entre Dispose y Finalize y se distingue la liberación determinista de recursos de la reclamación no inmediata de memoria administrada por el GC (1139). Se acota la lista de topologías Fibre Channel a la clasificación básica —punto a punto, arbitrated loop y fabric— y se etiqueta como contenido histórico/técnico, sin sugerir que FC-AL sea la topología predominante actual (1140). Los originales completos están en `cambios-lote-164.json`.

Cotejo con ITIC Academy: tema 78 para comercio electrónico/pagos; bloque 33, A1-74, para SIG; bloque 30, A1-67/A2-III-10 para Java/JMX y A1-66/A2-III-11 para .NET; bloque 26, A1-56/A2-C5 para SAN/almacenamiento. Correspondencias oficiales: 1136 A1-78; 1137 A1-74/A2-II-14; 1138 A1-67/A2-III-10; 1139 A1-66/A2-III-11; 1140 A1-56/A2-IV-5. Las respuestas se contrastaron con Visa/EMVCo, OSGeo, Leaflet y Esri, Oracle Java SE 26, Microsoft Learn y Fibre Channel Industry Association.

`inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 1.140 registros de revisión y 10.983 preguntas restantes idénticas al commit original. Las 42 dudas anteriores y la comprobación global de correcciones de convocatoria siguen pendientes.

## Lote 165 — 24 de octubre

IDs 1141–1145 revisados individualmente: cuatro corregidas y una vigente. Acumulado: 1.145 examinadas, 1.103 verificadas (285 vigentes, 716 corregidas y 102 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 832 preguntas con cambios de contenido. Quedan 10.978 sin revisar; siguiente ID 1.146.

Se corrige la descripción de Bash: no es el shell original de Unix, sino el shell de GNU, compatible en gran medida con `sh` y con mejoras interactivas/de programación (1141). UTM queda formulada como conteo de zonas longitudinales numeradas, 60 de seis grados cada una, sin decir que la proyección cubra las regiones polares (1142). Se desambigua cliente-servidor preguntando explícitamente por el número de niveles; capas lógicas y niveles físicos de despliegue no son equivalentes (1143). WSUS permanece como clave para administrar actualizaciones en una instalación existente, añadiendo que está obsoleto/deprecated y sin nuevas funciones, aunque mantiene soporte para producción conforme al ciclo de vida (1144). Se conserva la clave de firma no criptográfica y se añade la condición omitida: la normativa reguladora aplicable debe disponer su uso; categoría básica ENS y media cuando no se requiera firma avanzada (1145). Se conservan los cinco originales íntegros en `cambios-lote-165.json`.

Cotejo con Drive: ITIC Academy, bloque 47, edición 2026.1, A1-60/A2-II-2 (Bash y SO) y A1-61/A2-II-2 (actualización de sistemas); bloque 33, edición 2026.1, A1-74 (SIG y UTM); bloque 30, edición 2026.1, A1-58/A2-II-6 (cliente-servidor y multicapas); bloque 36, edición 2026.1, A1-80/A2-I-6 (identificación y firma electrónica). Las características específicas de Bash, UTM, arquitectura n-tier, el estado de WSUS y la condición normativa de firma se cotejaron además con fuentes primarias oficiales.

Fuentes: GNU Bash Reference Manual, “What is Bash?”; U.S. Geological Survey, “How are UTM coordinates measured on USGS topographic maps?”; Microsoft Learn, “Designing Multi-Tier IIS Applications” y “Windows Server Update Services (WSUS) overview”; Resolución SGAD de 20 de octubre de 2022, BOE-A-2022-17170, apartado tercero. `inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 1.145 registros de revisión y 10.978 preguntas restantes idénticas al commit original.
## Lote 166 — 24 de octubre

IDs 1146–1150 revisados individualmente: cuatro corregidas y una histórica. Acumulado: 1.150 examinadas, 1.108 verificadas (285 vigentes, 720 corregidas y 103 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 837 preguntas con cambios de contenido. Quedan 10.973 sin revisar; siguiente ID 1.151.

La comparación filosófica del API Unix/Win32 se reemplaza por una distinción documentable: POSIX normaliza interfaces para portabilidad y Windows mantiene su API de plataforma; no hay regla general que limite todas las operaciones Unix a una sola función o asigne tres/cuatro formas a Win32 (1146). Se conserva `Throwable` como clase de `java.lang` y superclase de errores/excepciones, pero se quita la referencia de versión Java SE 7 (1147). Se sustituye la pregunta negativa ambigua de técnicas de configuración por la confirmación directa de que el balanceo puede realizarse con software o appliances hardware (1148). En C# se acota boxing a conversiones de tipos valor a `object` o interfaces implementadas, no de «cualquier tipo» indistintamente (1149). EDSAC y ENIAC se identifican como ordenadores electrónicos digitales tempranos de los años 1940; se mantiene su clasificación histórica sin reclamar primacía (1150). Se conservan los cinco originales íntegros en `cambios-lote-166.json`.

Cotejo con Drive: ITIC Academy, bloque 47, edición 2026.1, A1-59/A1-60/A2-II-2 (sistemas Unix/Linux y fundamentos); bloque 30, A1-67/A2-III-10 (Java) y A1-66/A2-III-11 (.NET); bloque 26, A1-53/A1-57/A1-132/A2-IV-6 (servidores, CPD, balanceo y virtualización) y A1-52/A2-II-1 (hardware y ordenadores). Las formulaciones específicas se contrastaron con The Open Group, Microsoft Learn, Oracle Java SE API y Computer History Museum.

Fuentes: The Open Group Base Specifications Issue 8 (POSIX.1-2024); Microsoft Learn, Windows API index; Oracle Java SE 26 API Specification, `java.lang.Throwable`; Microsoft Learn, Windows Server VMM load balancing, y documentación C# sobre boxing; Computer History Museum, “1949: EDSAC computer employs delay-line storage” y Timeline of Computer History. `inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 1.150 registros de revisión y 10.973 preguntas restantes idénticas al commit original.
## Lote 167 — 24 de octubre

IDs 1151–1155 revisados individualmente: cuatro corregidas, una vigente. Acumulado: 1.155 examinadas, 1.113 verificadas (286 vigentes, 724 corregidas y 103 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 842 preguntas con cambios de contenido. Quedan 10.968 sin revisar; siguiente ID 1.156.

Se separa correctamente la impresión láser de inyección, sublimación e impresión por impacto: el láser usa tóner en polvo transferido desde un tambor y fijado por calor, no barras enceradas (1151). Se precisa que Unix no está restringido a procesadores de más de 32 bits; la interoperabilidad POSIX se formula como interfaz estandarizada para sistemas conformes, sin prometer compatibilidad de cada implementación con todo el hardware (1152). Se sustituye la interpretación impropia de accountability como obligación universal de auditoría por el texto del RGPD: responsabilidad del responsable y capacidad de demostrar el cumplimiento (1153). Se explica el cifrado como transformación criptográfica de texto en claro a cifrado, independientemente de si el soporte es manuscrito o digital, evitando confundir código con criptografía (1154). La sigla CLR se mantiene y se delimita como entorno de ejecución de código administrado .NET, diferenciándolo de CIL (1155). Se preservan los cinco originales íntegros en `cambios-lote-167.json`.

Cotejo con Drive: ITIC Academy, bloque 26, edición 2026.1, periféricos y almacenamiento (A1-56/A2-IV-5), seguridad/criptografía (A1-79/A2-IV-12) y arquitectura de ordenadores (A1-52/A2-II-1); bloque 47, edición 2026.1, sistemas Unix (A1-59/A1-60/A2-II-2) y seguridad; bloque 36, edición 2026.1, RGPD y protección de datos (A1-27/A2-I-7); bloque 30, edición 2026.1, Java y .NET (A1-67/A2-III-10 y A1-66/A2-III-11). Las afirmaciones se cotejaron con The Open Group, Microsoft Learn, EUR-Lex, NIST, HP, Xerox, Oracle y Computer History Museum.

Fuentes: HP, explicación de impresoras láser e inyección; Xerox, *Solid Ink White Paper*; The Open Group Base Specifications Issue 8 (POSIX.1-2024); Oracle Java SE 26 API Specification; Microsoft Learn, integración de load balancing hardware, boxing en C# y Common Language Runtime; Reglamento (UE) 2016/679, art. 5.2, EUR-Lex; NIST SP 800-21, § 1.5; Computer History Museum, ENIAC y EDSAC. `inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 1.155 registros de revisión y 10.968 preguntas restantes idénticas al commit original.
## Lote 168 — 24 de octubre

IDs 1156–1160 revisados individualmente: cinco corregidas. Acumulado: 1.160 examinadas, 1.118 verificadas (286 vigentes, 729 corregidas y 103 históricas) y 42 pendientes (24 de fuente y 18 de ambigüedad); 847 preguntas con cambios de contenido. Quedan 10.963 sin revisar; siguiente ID 1.161.

Se despeja la ambigüedad de «impresión por inyección»: la fabricación aditiva (estereolitografía, extrusión/material jetting) se diferencia del moldeo por inyección convencional (1156). Se fija XML 1.0 y se advierte que `--` no puede aparecer dentro de comentarios (1157). Se precisa que la afirmación sobre revocaciones de varias CA solo describe una CRL indirecta; RFC 5280 admite ese alcance, mientras cada entrada identifica el certificado por número de serie y fecha y no proporciona una consulta de estado en tiempo real (1158). Pipeline mejora la productividad solapando etapas, pero no la latencia inherente de una instrucción individual (1159). Se formula la libertad excluida con claridad: impedir la redistribución no es una libertad del usuario; vender software libre sí está permitido (1160). Se conservan íntegros los cinco originales en `cambios-lote-168.json`.

Cotejo con Drive: ITIC Academy, bloque 26, edición 2026.1, impresión 3D (A1-83) y procesadores (A1-52/A2-II-1); bloque 36, edición 2026.1, XML (A1-77/A2-II-9), certificados (A1-80/A2-I-6) y software libre (A1-69/A2-II-14). Las afirmaciones técnicas se cotejaron con NIST, W3C, IETF RFC Editor, material universitario de arquitectura, y GNU/FSF.

Fuentes: NIST, “What is Additive Manufacturing?”; W3C Recommendation, XML 1.0, § 2.5; IETF RFC 5280, §§ 5.1 y 5.2.5; MC732 Computer Systems Design, Universidade Estadual de Campinas, pipelining/latency/throughput; GNU Project/FSF, “What is Free Software?”. `inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas estructuralmente válidas, 1.160 registros de revisión y 10.963 preguntas restantes idénticas al commit original.