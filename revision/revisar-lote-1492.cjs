const apply=require('./aplicar-lote.cjs');
const ad='https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/active-directory-domain-services';
const thunder='https://www.apple.com/newsroom/2011/05/03Apple-Announces-New-iMac-With-Next-Generation-Quad-Core-Processors-Graphics-Thunderbolt-I-O-Technology/';
const android='https://source.android.com/docs/core/architecture/kernel';
const isolation='https://learn.microsoft.com/en-us/sql/relational-databases/sql-server-transaction-locking-and-row-versioning-guide';
const nunit='https://docs.nunit.org/articles/nunit/intro.html';
const records=[
 [7761,[80],['I-6'],['servicio de directorio','LDAP','usuarios','recursos de red','control de acceso'],[
  {url:ad,referencia:'Microsoft Learn, Active Directory Domain Services overview: un servicio de directorio almacena y publica datos de directorio sobre cuentas/recursos y permite a administradores y usuarios autorizados gestionarlos o acceder a ellos.'}
 ],{texto:'La aplicación o conjunto de aplicaciones que almacena y organiza información sobre usuarios y recursos de una red y ayuda a administrar el acceso a esos recursos se denomina:',opciones:['Sistema de ficheros.','Servicio de nombres.','Servicio de agente remoto.','Servicio de directorio.'],respuesta_correcta:3},'Vigente D. La descripción corresponde a un servicio de directorio; LDAP y X.500 son tecnologías/protocolos asociados, pero no sinónimos del concepto general.', 'vigente'],
 [7762,[52,56],['II-1'],['Thunderbolt','Apple','2011','interfaz de E/S','FireWire 800','USB 2.0','histórico'],[
  {url:thunder,referencia:'Apple Newsroom, 3 de mayo de 2011, anuncio del iMac: documenta la incorporación de Thunderbolt, hasta 10 Gbit/s por canal y el soporte de dispositivos FireWire/USB mediante adaptadores.'}
 ],{texto:'¿Qué tecnología de E/S incorporó Apple a determinados iMac en 2011 y que entonces ofrecía una velocidad superior a FireWire 800 y USB 2.0?',opciones:['Thunderbolt.','Lightningbolt.','Applebolt.','Strikingbolt.'],respuesta_correcta:0},'Histórica A. Apple anunció Thunderbolt en el iMac de mayo de 2011, con canales de hasta 10 Gbit/s, superiores a FireWire 800 y USB 2.0 de la época. El enunciado se fecha explícitamente para no sugerir que esa comparación describa interfaces actuales.', 'historica'],
 [7763,[62],['II-2'],['Android','Linux kernel','AOSP','sistema operativo móvil'],[
  {url:android,referencia:'Android Open Source Project, Kernel overview: el kernel de Android se basa en un kernel Linux LTS upstream, con parches específicos de Android que forman Android Common Kernels.'}
 ],{texto:'El kernel del sistema operativo Android se basa en:',opciones:['UNIX System V como kernel directo.','Palm OS.','El sistema operativo de escritorio de Google.','Un kernel Linux LTS, con modificaciones específicas de Android.'],respuesta_correcta:3},'Corregida D. Se precisa que Android se basa en el kernel Linux, no que sea simplemente una distribución Linux convencional; AOSP explica la base upstream LTS y las modificaciones Android Common Kernel.', 'corregida'],
 [7764,[64],['II-5'],['SQL','aislamiento de transacciones','Read Uncommitted','Read Committed','Repeatable Read','Serializable'],[
  {url:isolation,referencia:'Microsoft Learn, SQL Server transaction isolation levels: enumera los niveles del estándar ISO y define READ UNCOMMITTED como el nivel de aislamiento más bajo; permite lecturas sucias.'}
 ],{texto:'Entre los niveles estándar de aislamiento de transacciones SQL enumerados, ¿cuál proporciona el menor aislamiento?',opciones:['READ COMMITTED (lectura confirmada).','REPEATABLE READ (lectura repetible).','SERIALIZABLE.','READ UNCOMMITTED (lectura no confirmada).'],respuesta_correcta:3},'Corregida D. En la jerarquía estándar de SQL, READ UNCOMMITTED es el nivel más bajo y permite lecturas de cambios aún no confirmados. Los motores pueden implementarlo de forma distinta; en PostgreSQL, por ejemplo, equivale a READ COMMITTED.', 'corregida'],
 [7765,[96],['III-7'],['NUnit','pruebas unitarias','framework .NET','test'],[
  {url:nunit,referencia:'Documentación oficial NUnit: presenta NUnit como framework de pruebas unitarias para código .NET.'},
  {url:'https://learn.microsoft.com/en-us/dotnet/core/testing/',referencia:'Microsoft Learn, Testing in .NET: incluye NUnit entre los frameworks populares de pruebas en .NET.'}
 ],{texto:'¿Qué framework se utiliza para realizar pruebas unitarias en aplicaciones .NET?',opciones:['NetProof.','JUnit.','NUnit.','Jproof.'],respuesta_correcta:2},'Vigente C. NUnit es un framework de unit testing para .NET; JUnit se asocia principalmente al ecosistema Java. Se normaliza la grafía oficial NUnit.', 'vigente']
];
apply({numero:'1492',fecha:'2026-11-16',records});
