const aplicar = require('./aplicar-lote.cjs');
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy = {
  images: 'https://drive.google.com/file/d/1xTMCpPmwNi8hpb0nZ3sMqpgvrhLXT-yf/view?usp=drivesdk',
  lifecycle: 'https://drive.google.com/file/d/1D62OE6Sw-ZB46S_2tvGophVTKgS3ip22/view?usp=drivesdk',
  systems: 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk'
};
const metricav3 = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf';
const records = [
  [5556, [83], [], ['compresión de imágenes', 'JPEG-1', 'DCT', 'JPEG 2000'], [
    {url:'https://www.itu.int/ITU-T/recommendations/rec.aspx?lang=en&rec=2633', referencia:'ITU-T T.81 (idéntica a ISO/IEC 10918-1), ficha oficial: codificación de imágenes fijas JPEG-1; edición vigente.'},
    {url:'https://www.w3.org/Graphics/JPEG/itu-t81.pdf', referencia:'ITU-T T.81, anexo A, proceso JPEG con pérdida y transformada DCT; la norma también define procesos lossless predictivos, por eso se acota el enunciado al proceso con pérdida habitual.'},
    {url:'https://www.itu.int/rec/T-REC-T.800/en', referencia:'ITU-T T.800 / JPEG 2000, sistema de codificación separado; contraste con JPEG-1.'},
    {url:a1, referencia:'Convocatoria oficial A1 GSI 2025, tema 83: tratamiento de imágenes, tecnologías de digitalización e impresión.'},
    {url:academy.images, referencia:'ITIC Academy 2026, bloque 37, imágenes/OCR: cotejo curricular, no fuente del funcionamiento del estándar.'}
  ], null, 'Se precisa el concepto en el enunciado: la respuesta JPEG se refiere al proceso con pérdida de JPEG-1, cuyo T.81 especifica la DCT. T.81 incluye además un proceso sin pérdida predictivo; por eso no se generaliza la DCT a todos sus modos. JPEG 2000 (ITU-T T.800) utiliza otra familia de transformadas. Se conserva la opción A.', 'corregida'],
  [5557, [86], ['III-2'], ['gestión de riesgos', 'Boehm', 'ciclo de vida', 'planificación de proyectos'], [
    {url:'https://www.cs.virginia.edu/~sherriff/papers/Boehm%20-%201991.pdf', referencia:'Barry W. Boehm, “Software Risk Management: Principles and Practices”, IEEE Software 8(1), 1991, tabla 1, Top 10 Software Risk Items. Enumera shortfalls de personal, calendario/presupuesto irrealistas y shortfalls de componentes externos; no incluye calidad de hardware.'},
    {url:a1, referencia:'Convocatoria oficial A1 GSI 2025, tema 86: ciclo de vida y modelos.'},
    {url:a2, referencia:'Convocatoria oficial A2 GSI 2025, tema III.2: gestión del proceso de desarrollo y metodologías.'},
    {url:academy.lifecycle, referencia:'ITIC Academy 2026, bloque 15, ciclo de vida y metodologías: correspondencia curricular.'}
  ], null, 'Boehm publica los diez riesgos de software más relevantes en su tabla 1. Entre ellos están las carencias de personal, calendarios/presupuestos no realistas y componentes suministrados externamente deficientes. La calidad de los componentes hardware no figura como uno de esos diez ítems; la opción C es la excepción. Se corrige la concordancia de la opción y se fija la referencia del modelo en espiral a la lista de riesgos de Boehm.', 'corregida'],
  [5558, [93], ['III-9'], ['programación orientada a objetos', 'métodos', 'clases', 'operaciones'], [
    {url:'https://docs.oracle.com/javase/specs/jvms/se6/html/Concepts.doc.html', referencia:'Java Virtual Machine Specification, §2.10: un método declara código ejecutable y cada declaración pertenece a una clase; los métodos de instancia se invocan con respecto a un objeto.'},
    {url:'https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html', referencia:'Oracle Java Tutorials, definición de declaraciones, cuerpo y operación de método como miembro de clase.'},
    {url:a1, referencia:'Convocatoria oficial A1 GSI 2025, tema 93: técnicas de diseño de software y patrones.'},
    {url:a2, referencia:'Convocatoria oficial A2 GSI 2025, tema III.9: análisis y diseño orientado a objetos, elementos y UML.'},
    {url:academy.systems, referencia:'ITIC Academy 2026, bloque 38, análisis/diseño/construcción y orientación a objetos: cotejo curricular.'}
  ], null, 'La clave A se conserva, pero se concreta: en POO un método es una operación/comportamiento definido como miembro de una clase, ejecutable sobre sus instancias (si es de instancia). No es necesariamente sinónimo de un algoritmo abstracto, ni atributo ni conjunto de objetos.', 'corregida'],
  [5559, [95], ['III-2'], ['MÉTRICA 2.1', 'análisis estructurado', 'HVE', 'entidades de datos', 'histórica'], [
    {url:'https://iealbacetenses.dipualba.es/high.raw?id=0000081553&name=00000001.original.pdf', referencia:'Boletín Oficial de la Provincia de Albacete, convocatoria/programa publicado en 1997: incluye expresamente “Historia de la vida de las entidades”, su relación con la técnica de eventos y su utilización en Métrica 2. Es fuente primaria para el encuadre histórico, no contiene la definición íntegra.'},
    {url:metricav3, referencia:'Ministerio para las Administraciones Públicas, MÉTRICA v3, Análisis del Sistema de Información, ASI 7: define el DFD como técnica para elaborar el modelo de procesos; no presenta HVE como técnica de MÉTRICA v3.'},
    {url:'https://biblat.unam.mx/hevila/Cienciasdelainformacion/2000/vol31/no1-2/3.pdf', referencia:'Artículo académico secundario sobre MÉTRICA: describe HVE como técnica para describir la evolución temporal de entidades de datos. Se aporta solo como pista; no basta para verificar la clave sin consultar MÉTRICA 2.1 primaria.'},
    {url:a1, referencia:'Convocatoria oficial A1 GSI 2025, tema 95: MÉTRICA; contexto curricular actual, sin afirmar que HVE forme parte de v3.'},
    {url:a2, referencia:'Convocatoria oficial A2 GSI 2025, tema III.2: metodologías de desarrollo.'},
    {url:academy.systems, referencia:'ITIC Academy 2026, bloque 38, análisis/diseño de sistemas: cotejo curricular general; no acredita una definición histórica de HVE.'}
  ], null, 'Se acota el enunciado a MÉTRICA 2.1 para evitar presentarla como técnica vigente de MÉTRICA v3. El material oficial accesible confirma que HVE era materia del programa de 1997; la documentación oficial v3 consultada describe DFD/modelo de procesos, pero no permite verificar la definición concreta de HVE. Una fuente académica secundaria atribuye a HVE la descripción de la evolución temporal de las entidades. Por no disponer de la fuente primaria de MÉTRICA 2.1 que confirme ese detalle, se conserva provisionalmente la clave C y queda pendiente de fuente; no se marca como verificada.', 'pendiente_fuente'],
  [5560, [90, 95], ['III-2', 'III-3'], ['MÉTRICA v3', 'análisis estructurado', 'DFD', 'modelo de procesos', 'flujos de datos'], [
    {url:metricav3, referencia:'Ministerio para las Administraciones Públicas, MÉTRICA v3, Análisis del Sistema de Información, ASI 7.1 (pp. 26–27): establece el conjunto de procesos y recomienda DFD para elaborar el modelo de procesos mediante descomposición en niveles.'},
    {url:a1, referencia:'Convocatoria oficial A1 GSI 2025, temas 90 (modelado de procesos) y 95 (MÉTRICA).'},
    {url:a2, referencia:'Convocatoria oficial A2 GSI 2025, temas III.2 (metodologías) y III.3 (requisitos y análisis).'},
    {url:academy.systems, referencia:'ITIC Academy 2026, bloque 38, análisis/modelado funcional y DFD: correspondencia curricular.'}
  ], null, 'En MÉTRICA v3, el DFD es una técnica del análisis estructurado para elaborar el modelo de procesos mediante descomposición lógica. No pretende describir el entorno físico; la respuesta correcta es B. Se sustituye la expresión vaga “modelo funcional” por la descripción más precisa del modelo de procesos y sus flujos de datos.', 'corregida']
];
const edits = {
  5556: {texto:'En el proceso con pérdida habitual de JPEG-1 (ITU-T T.81), ¿qué estándar de compresión de imágenes se basa en la transformada discreta del coseno?', opciones:['JPEG-1 (JPEG habitual).','LZW.','RLE.','JPEG 2000.'], respuesta_correcta:0},
  5557: {texto:'¿Cuál de los siguientes no figura entre los diez principales riesgos de software enumerados por Boehm en su modelo de gestión de riesgos?', opciones:['Escasez de personal.','Calendario o presupuesto no realista.','Baja calidad de componentes hardware.','Deficiencias de componentes suministrados externamente.'], respuesta_correcta:2},
  5558: {texto:'En programación orientada a objetos, ¿qué describe mejor un método como miembro de una clase?', opciones:['Una operación o comportamiento definido por la clase y ejecutable sobre sus objetos.','Un algoritmo independiente de cualquier clase u objeto.','Un conjunto de objetos.','Un atributo de un objeto.'], respuesta_correcta:0},
  5559: {texto:'En el análisis estructurado de MÉTRICA 2.1, ¿cuál es el objetivo de la técnica histórica “Historia de la Vida de las Entidades” (HVE)?', respuesta_correcta:2},
  5560: {texto:'En MÉTRICA v3, ¿qué objetivo cumple un diagrama de flujo de datos (DFD) en el análisis estructurado?', opciones:['Describir el entorno físico de ejecución.','Representar lógicamente el modelo de procesos y sus flujos de datos.','Ninguna de las anteriores.'], respuesta_correcta:1}
};
aplicar({numero:'1047', fecha:'2026-11-12', records, edits});
