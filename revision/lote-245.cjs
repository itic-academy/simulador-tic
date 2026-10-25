const apply = require('./aplicar-lote.cjs');

const records = [
  [1541, [80], ['I-6'], ['X.500', 'X.509 v3', 'LDAP', 'directorio', 'certificado digital'], [
    {url: 'https://www.itu.int/itu-t/recommendations/rec.aspx?rec=X.500', referencia: 'ITU-T X.500 (10/2019), en vigor: Recomendación de la serie X.500 sobre conceptos, modelos y servicios de directorio.'},
    {url: 'https://www.itu.int/rec/t-rec-x.509/en', referencia: 'ITU-T X.509: marco de certificados y directorio; la ficha identifica la recomendación de ITU-T en vigor.'},
    {url: 'https://www.rfc-editor.org/rfc/rfc5280.html', referencia: 'RFC 5280, §4.1: X.509 v3 amplía el formato v2 con campos de extensión.'},
    {url: 'https://www.rfc-editor.org/rfc/rfc4511.html', referencia: 'RFC 4511: LDAP es un protocolo de la IETF que accede a servicios de directorio conforme a modelos de datos/servicio X.500.'}
  ], null, 'La afirmación correcta es la segunda: el formato X.509 v3 añade campos de extensiones. La familia X.500 es una serie de recomendaciones ITU-T (y normas ISO/IEC), no un estándar de IETF. LDAP es un protocolo normalizado en RFC de IETF, no un protocolo “de la ITU”; se diseñó para acceder a servicios de directorio con modelos de datos/servicio X.500. Se reformula el enunciado para evaluar la atribución institucional y técnica sin llamar protocolo a toda la serie X.500.', 'corregida'],
  [1542, [63, 64], ['II-5', 'III-4'], ['datamart', 'modelo dimensional', 'tabla de dimensiones', 'esquema estrella'], 'https://docs.oracle.com/database/26/tgsql/query-transformations.html', 'Oracle Database 26, “About Star Schemas”: los hechos son medidas de eventos; las dimensiones representan categorías que los describen y funcionan como tablas de referencia para filtrar/consultar.', 'La respuesta correcta es “Tabla de Dimensiones”. En un modelo dimensional, una dimensión representa categorías/descriptores (por ejemplo, producto, fecha o ubicación) que dan contexto a las medidas de la tabla de hechos y permiten filtrar o agrupar los datos. Se conserva la clave original.', 'vigente'],
  [1543, [66], ['III-11'], ['Microsoft .NET', 'Azure', 'framework', 'runtime', 'tecnología histórica'], [
    {url: 'https://learn.microsoft.com/en-us/dotnet/framework/install/versions-and-dependencies', referencia: 'Microsoft Learn: .NET Framework 3.0 incorpora Windows Presentation Foundation y Windows Communication Foundation; documentación de versiones y componentes del framework.'},
    {url: 'https://learn.microsoft.com/en-us/dotnet/framework/windows-workflow-foundation/migration-guidance', referencia: 'Microsoft Learn: identifica WinFX como nombre histórico de WF3 y relaciona sus tipos con .NET Framework.'},
    {url: 'https://learn.microsoft.com/en-us/lifecycle/announcements/silverlight-end-of-support', referencia: 'Microsoft Lifecycle: Silverlight fue un framework de desarrollo y terminó su soporte el 12-10-2021.'},
    {url: 'https://learn.microsoft.com/en-gb/azure/developer/javascript/what-is-azure-for-javascript-development', referencia: 'Microsoft Learn: Azure es una plataforma cloud que ofrece alojamiento y servicios; puede ejecutar aplicaciones de distintos ecosistemas, incluido .NET.'}
  ], null, 'La clave original C no era correcta: Silverlight sí fue un framework basado en .NET y WinFX fue una denominación/nombre de desarrollo de tecnologías que pasaron a .NET Framework 3.0. Azure, en cambio, es la plataforma cloud de Microsoft y puede alojar aplicaciones .NET, pero no es por sí misma un framework o runtime .NET. Se reescribe el reactivo para separar explícitamente plataforma de alojamiento y plataforma de desarrollo, evitando usar “tecnología .NET” como categoría ambigua. Silverlight y WinFX se conservan como referencias históricas, no como opciones recomendadas para desarrollo actual.', 'corregida'],
  [1544, [64], ['II-5', 'III-4'], ['modelo relacional', 'clave ajena', 'clave foránea', 'integridad referencial'], 'https://www.postgresql.org/docs/18/ddl-constraints.html', 'PostgreSQL 18, §5.5.5: una foreign key exige correspondencia con valores de otra tabla; puede referenciar clave primaria o columnas con restricción UNIQUE y admite conjuntos de columnas.', 'La respuesta es “Clave ajena” (también llamada foránea). El enunciado original restringía innecesariamente el destino a una clave primaria: en SQL una clave ajena puede referenciar una clave primaria o una clave única, y puede ser simple o compuesta. Se corrige la definición para expresar la regla de integridad referencial sin esa limitación.', 'corregida'],
  [1545, [57, 132], ['IV-1', 'IV-6'], ['VMware ESXi', 'virtualización', 'hipervisor tipo 1', 'bare metal'], 'https://www.vmware.com/topics/bare-metal-hypervisor', 'Broadcom/VMware, “What is a Hypervisor?”: distingue hipervisores de tipo 1 (bare metal, sobre hardware) y tipo 2 (alojados sobre un sistema operativo).', '“VMware” designa un proveedor y una familia de productos, no un único sistema operativo. ESXi es un hipervisor de tipo 1 que se ejecuta sobre el hardware; otros productos de VMware, como Workstation, son hipervisores alojados de tipo 2. Se especifica ESXi y se reemplaza la taxonomía imprecisa de sistemas operativos por la clasificación aplicable a la virtualización.', 'corregida']
];

const edits = {
  1541: {texto: 'Señale la afirmación correcta sobre X.500, X.509 y LDAP:', opciones: [
    'X.500 es una familia de estándares de directorio publicada por la IETF.',
    'El formato de certificado X.509 v3 amplía el formato v2 añadiendo campos de extensión.',
    'LDAP es un protocolo de directorio de la ITU-T.',
    'Ninguna de las anteriores.'
  ]},
  1543: {texto: '¿Cuál de las siguientes es una plataforma de computación en la nube y no un framework o runtime de desarrollo .NET?', opciones: [
    'ASP.NET Core, framework para aplicaciones y servicios web.',
    'Windows Forms/WPF, tecnologías de interfaz de escritorio para .NET.',
    'Silverlight y las API históricas conocidas como WinFX, tecnologías vinculadas al ecosistema .NET.',
    'Microsoft Azure, plataforma cloud que puede alojar aplicaciones .NET.'
  ], respuesta_correcta: 3},
  1544: {texto: 'En el modelo relacional, ¿cómo se denomina el atributo o conjunto de atributos de una relación cuyos valores deben corresponder a una clave candidata/única de otra relación para mantener la integridad referencial?', respuesta_correcta: 3},
  1545: {texto: 'VMware ESXi se clasifica como:', opciones: [
    'Un hipervisor de tipo 1 (bare metal), que se ejecuta directamente sobre el hardware.',
    'Un hipervisor de tipo 2, que se ejecuta como una aplicación sobre un sistema operativo anfitrión.',
    'Un motor de contenedores que comparte el kernel del sistema anfitrión.',
    'Un sistema operativo de microkernel de propósito general.'
  ], respuesta_correcta: 0}
};

apply({numero: '245', fecha: '2026-10-25', records, edits});
