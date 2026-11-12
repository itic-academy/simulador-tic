const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const oracle='https://docs.oracle.com/en/database/oracle/oracle-database/26/cncpt/concepts-for-database-administrators.html';
const acid='https://www.postgresql.org/docs/current/glossary.html';
const ansi='https://www.govinfo.gov/content/pkg/GOVPUB-C13-3cac9cb7d048b38f397af01be9ccd220/pdf/GOVPUB-C13-3cac9cb7d048b38f397af01be9ccd220.pdf';
const norm='https://opentextbc.ca/dbdesign01/chapter/chapter-12-normalization/';
const dotnet='https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/dataset-datatable-dataview/index';
const ref=(url,referencia)=>({url,referencia});
const records=[
 [5606,[34],['II-5'],['administrador de bases de datos','DBA','gestión de almacenamiento','balanceo de carga','responsabilidades'],[
  ref(oracle,'Oracle Database Concepts, “Duties of Database Administrators”: administración incluye diseño de base de datos, almacenamiento de la base, seguridad/usuarios y rendimiento; la coordinación de recursos físicos se realiza con administradores de sistemas. El balanceo de una granja de aplicaciones es una tarea de arquitectura/plataforma, no una función propia de DBA.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 34: organización y funcionamiento de centros de sistemas, funciones de bases de datos y sistemas.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.5: SGBD relacionales y administración/arquitectura de bases de datos.')
 ],null,'Corregida y delimitada a las responsabilidades propias de DBA. Administración de almacenamiento asignado a la base, distribución de datos y permisos/roles sí pueden corresponder al DBA. Diseñar el balanceo de carga de aplicaciones en una granja de servidores pertenece al ámbito de arquitectura y administración de aplicaciones/plataforma; el DBA colabora para dimensionar recursos, pero no es una tarea intrínseca de administración de la base. La separación de funciones depende de la organización.','corregida'],
 [5607,[63],['II-5'],['transacciones','ACID','atomicidad','consistencia','aislamiento','durabilidad'],[
  ref(acid,'Documentación oficial de PostgreSQL, glosario ACID: Atomicity, Consistency, Isolation, Durability; explica la finalidad de estas propiedades para transacciones concurrentes y ante fallos.'),
  ref('https://www.postgresql.org/files/developer/transactions.pdf','PostgreSQL, Transaction Processing: define por separado atomicidad, consistencia, aislamiento y durabilidad de las transacciones.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 63: sistemas gestores de bases de datos.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.5: SGBD relacionales.')
 ],null,'Se conserva C. Las propiedades ACID son atomicidad, consistencia, aislamiento y durabilidad (en algunos textos, persistencia). Autenticación, confidencialidad, integridad y disponibilidad son objetivos de seguridad —a menudo resumidos como CIA—, no las cuatro propiedades ACID de las transacciones.','corregida'],
 [5608,[63],['II-5'],['ANSI/SPARC','independencia física','esquema interno','esquema conceptual','arquitectura de bases de datos'],[
  ref(ansi,'NIST/NBS, Database architectures, exposición de la arquitectura ANSI/X3/SPARC: distingue niveles interno, conceptual y externo y define la transformación entre interno y conceptual.'),
  ref('https://lmsspada.kemdiktisaintek.go.id/pluginfile.php/79424/mod_folder/content/0/Database-System-A-Practical-Approach-to-Design-Implementation-and-Management-by-T-Connoly-C-Begg.pdf?forcedownload=1','Connolly y Begg, Database Systems: A Practical Approach, resumen del capítulo de arquitectura ANSI-SPARC: independencia física significa inmunidad del esquema conceptual frente a cambios en el esquema interno.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 63: SGBD y modelo de referencia.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.5: arquitectura ANSI/SPARC.')
 ],null,'Se conserva A: la independencia física permite modificar el esquema interno (organización física, índices o estructuras de almacenamiento) sin tener que cambiar el esquema conceptual ni los externos. La independencia lógica es la inmunidad de las vistas externas ante cambios del esquema conceptual; son conceptos distintos.','corregida'],
 [5609,[64],['III-4'],['segunda forma normal','2FN','dependencia funcional parcial','clave candidata compuesta','normalización','descomposición'],[
  ref(norm,'OpenTextBC, Database Design, capítulo Normalization: 2FN requiere ausencia de dependencias parciales de atributos no clave respecto de una clave compuesta; la descomposición separa la dependencia sobre un subconjunto de la clave.'),
  ref('https://cvw.cornell.edu/RelationalDBs/design-create/second_normal_form','Cornell Virtual Workshop, Second Normal Form: la 2FN exige que los atributos no clave dependan de la clave candidata completa, no de una parte de ella.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 64: modelo relacional y lenguaje SQL.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.4: modelo lógico relacional, normalización y diseño de bases de datos.')
 ],null,'Corregida para declarar que la relación está en 1FN, que (A,B) es la única clave candidata, que C depende de AB y que B→D es la única dependencia parcial relevante. D no es atributo primo y depende solo de una parte propia de la clave compuesta; para alcanzar 2FN se descompone en R1(A,B,C) y R2(B,D), opción B. La combinación conserva la dependencia y es sin pérdida porque la intersección B determina R2.','corregida'],
 [5610,[66],['III-11'],['ADO.NET','.NET','DataSet','DataTable','DataRelation','datos en memoria'],[
  ref(dotnet,'Microsoft Learn, ADO.NET DataSets/DataTables/DataViews: DataSet es una representación relacional residente en memoria que agrupa DataTable, restricciones y relaciones; DataTable representa una tabla individual y DataRelation conecta tablas.'),
  ref('https://learn.microsoft.com/en-us/dotnet/api/system.data.dataset?view=net-6.0','Microsoft Learn, clase System.Data.DataSet: caché en memoria con colección de DataTable relacionadas mediante DataRelation.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 66: entorno de desarrollo Microsoft .NET.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.11: plataforma .NET, modelo de programación y persistencia.')
 ],null,'Se conserva D. DataSet es el objeto ADO.NET que representa en memoria un conjunto de tablas y sus relaciones; DataTable es una tabla individual, DataView una vista filtrada/ordenada sobre una tabla y DataTableRelation no es el tipo de objeto del framework (la clase de relación se denomina DataRelation).','corregida']
];
const edits={
 5606:{texto:'¿Cuál de estas tareas no es una responsabilidad propia de administración de bases de datos (DBA), aunque el DBA pueda colaborar con los equipos responsables?',opciones:['Diseñar el balanceo de carga de las aplicaciones desplegadas en una granja de servidores.','Planificar y administrar cómo se distribuyen los datos de la base entre los dispositivos de almacenamiento asignados.','Optimizar cargas masivas de datos, iniciales o parciales.','Gestionar usuarios, roles y permisos de la base de datos conforme a sus funciones.'],respuesta_correcta:0},
 5607:{texto:'¿Cuáles son las cuatro propiedades ACID de las transacciones de bases de datos?',opciones:['Autenticación, confidencialidad, integridad y disponibilidad.','Eficiencia, eficacia, rapidez y estabilidad.','Atomicidad, consistencia, aislamiento y durabilidad.','Serialización, indexación, independencia y transparencia.'],respuesta_correcta:2},
 5608:{texto:'En la arquitectura ANSI/SPARC, ¿cómo se denomina la capacidad de cambiar el esquema interno sin modificar el esquema conceptual ni los esquemas externos?',opciones:['Independencia física de los datos.','Independencia lógica de los datos.','Integridad de entidad.','Integridad referencial.'],respuesta_correcta:0},
 5609:{texto:'Sea R(A,B,C,D) en primera forma normal, con clave candidata única (A,B) y dependencias funcionales (A,B)→C y B→D. Suponiendo que no hay otras dependencias, ¿qué descomposición elimina la dependencia parcial y lleva R a segunda forma normal?',opciones:['R1(A,B,C) y R2(A,B,D).','R1(A,B,C) y R2(B,D).','R1(A,B,C) y R2(A,D).','No se descompone: ya está en segunda forma normal.'],respuesta_correcta:1},
 5610:{texto:'En ADO.NET, ¿qué objeto reúne en memoria varias tablas de datos y puede mantener las relaciones entre ellas?',opciones:['DataTableRelation.','DataView.','DataTable.','DataSet.'],respuesta_correcta:3}
};
aplicar({numero:'1057',fecha:'2026-11-12',records,edits});
