const aplicar = require('./aplicar-lote.cjs');

const records = [
  [2221, [66], ['III-11'], ['.NET Framework', 'CLR', 'JIT', 'biblioteca de clases'], [
    { url: 'https://learn.microsoft.com/dotnet/framework/get-started/overview', referencia: 'Microsoft Learn, Overview of .NET Framework: declara que consta de CLR y .NET Framework Class Library; el JIT es una función/servicio del CLR.' }
  ], 'Microsoft Learn, Overview of .NET Framework', 'Se confirma la opción 1 (índice 0): .NET Framework consta de CLR y biblioteca de clases. La compilación JIT pertenece a las funciones del CLR, no es un tercer componente principal independiente; CLS es una especificación de interoperabilidad lingüística.', 'vigente'],
  [2222, [63], ['II-5'], ['ANSI/SPARC', 'arquitectura de tres niveles', 'externo', 'conceptual', 'interno'], [
    { url: 'https://www.govinfo.gov/content/pkg/GOVPUB-C13-3cac9cb7d048b38f397af01be9ccd220/pdf/GOVPUB-C13-3cac9cb7d048b38f397af01be9ccd220.pdf', referencia: 'NBS/ANSI-SPARC DBMS Study Group Architecture: representa los niveles/esquemas externo, conceptual e interno y sus procesadores/mapeos.' }
  ], 'NBS, Database Architectures, diagrama de la arquitectura ANSI/SPARC', 'Se sustituye la lista ambigua de interfaces heterogéneas por una pregunta inequívoca sobre los tres niveles ANSI/SPARC: externo, conceptual e interno. «Interfaz DML» es un lenguaje/interfaz de acceso, no uno de los niveles de esquema.', 'corregida'],
  [2223, [77], ['II-9', 'III-12'], ['XML', 'DTD', 'XML Schema', 'namespaces', 'W3C'], [
    { url: 'https://www.w3.org/TR/xml-names/', referencia: 'W3C, Namespaces in XML: DTD valida nombres no interpretados como pares namespace/local y no es plenamente consciente de namespaces.' },
    { url: 'https://www.w3.org/TR/xmlschema-0/', referencia: 'W3C, XML Schema Primer: los esquemas tienen target namespace y permiten distinguir vocabularios; XML Schema se expresa mediante sintaxis XML.' }
  ], 'W3C, Namespaces in XML y XML Schema Primer', 'Se confirma que la afirmación falsa es «XML Schemas no están basados en namespaces»: los namespaces son parte de XML Schema. DTD tiene una notación menos expresiva y soporte limitado de namespaces; XML Schema usa sintaxis XML y tipado más rico.', 'vigente'],
  [2224, [64], ['II-5', 'III-4'], ['primera forma normal', '1FN', 'grupos repetitivos', 'normalización'], [
    { url: 'https://www.ibm.com/docs/en/informix-servers/15.0.x?topic=model-first-normal-form', referencia: 'IBM Informix, First Normal Form: describe 1FN como ausencia de grupos/columnas repetitivos en una entidad/tabla relacional.' },
    { url: 'https://www.ibm.com/docs/en/db2-for-zos/13.0.0?topic=modeling-normalization-in-database-design', referencia: 'IBM Db2, Normalization in database design: una entidad 1FN almacena un único valor por instancia y no atributos repetidos.' }
  ], 'IBM Informix y IBM Db2, documentación de normalización', 'Se confirma «no contiene grupos repetitivos» en el sentido clásico de 1FN usado por el reactivo. La redacción conserva la terminología del temario; en enfoques formales también se exige que cada atributo contenga valores atómicos y que no haya atributos multivaluados.', 'vigente'],
  [2225, [59], ['II-2'], ['sistema operativo', 'grado de multiprogramación', 'procesos', 'memoria principal'], [
    { url: 'https://mis.alagappauniversity.ac.in/siteAdmin/dde-admin/uploads/5/__UG_B.Sc._Information%20Technology_129%2052_Operating%20Systems_CRC_3159.pdf', referencia: 'Alagappa University, Introduction to Operating Systems: define el grado de multiprogramación como la cantidad de trabajos que compiten por recursos; muestra que los trabajos activos se mantienen en memoria principal.' },
    { url: 'https://owd.tcnj.edu/~coburn/os', referencia: 'The College of New Jersey, Operating Systems: vincula el grado de multiprogramación con la cantidad de procesos simultáneamente residentes en memoria.' }
  ], 'Alagappa University y The College of New Jersey, materiales universitarios de sistemas operativos', 'Se confirma el número de procesos residentes simultáneamente en memoria principal (bajo el modelo clásico) como medida del grado de multiprogramación. No se refiere al máximo de tareas de E/S, archivos ni variables compartidas.', 'vigente']
];

const edits = {
  2222: { texto: '¿Cuál de las siguientes opciones NO es uno de los tres niveles de esquema de la arquitectura ANSI/SPARC?', opciones: ['Nivel externo.', 'Nivel conceptual.', 'Interfaz del lenguaje de manipulación de datos (DML).', 'Nivel interno.'], respuesta_correcta: 2 }
};

aplicar({ numero: '381', fecha: '2026-10-28', records, edits });
