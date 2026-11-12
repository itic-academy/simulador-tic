const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const drive={dotnet:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',licencias:'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk',gis:'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk',bi:'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk',datos:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk'};
const rec=[
[5551,[66],['III-11'],['ADO.NET','Data Provider','DataSet','acceso y manipulación de datos'],[
{url:'https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/ado-net-architecture',referencia:'Microsoft Learn, ADO.NET Architecture: identifica explícitamente como dos componentes principales los proveedores de datos .NET Framework y DataSet; los proveedores conectan/ejecutan comandos/recuperan resultados y DataSet los mantiene/desconecta.'},
{url:'https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/ado-net-overview',referencia:'Microsoft Learn, ADO.NET Overview: describe la separación entre acceso a datos y manipulación de datos.'},
{url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 66: entorno de desarrollo Microsoft .NET.'},
{url:a2,referencia:'Convocatoria oficial A2 GSI 2025, tema III.11: plataforma .NET, modelo de programación, servicios y herramientas.'},
{url:drive.dotnet,referencia:'ITIC Academy 2026, bloque 30 Tecnologías de Sistemas de Información, apartado de plataforma .NET; cotejo temático A1-66/A2-III.11.'}
],null,'Microsoft Learn nombra expresamente los dos componentes principales de ADO.NET: .NET Framework Data Providers y DataSet. Los primeros conectan con las fuentes y recuperan resultados; DataSet permite el modelo desconectado y la manipulación de los datos. La clave D es correcta.'],
[5552,[43,69],['II-14'],['software libre','código abierto','licencias','Adobe Acrobat Reader'],[
{url:'https://www.adobe.com/cc-shared/assets/pdf/legal/licenses-terms/pdf/reader-eula-en-us-20181207.pdf',referencia:'Adobe, Reader Software License Agreement: concede una licencia de uso y reserva derechos de propiedad intelectual sobre la estructura, organización y código del software; no lo distribuye con licencia de código abierto.'},
{url:'https://www.mozilla.org/en-US/about/legal/terms/thunderbird/',referencia:'Mozilla, Thunderbird About Your Rights: declara que es software libre y de código abierto bajo MPL.'},
{url:'https://www.mozilla.org/en-US/about/legal/terms/firefox/',referencia:'Mozilla, Firefox Terms of Use (vigentes desde septiembre de 2026): describe Firefox como navegador libre y de código abierto y licencia su código bajo licencias abiertas.'},
{url:'https://www.openoffice.org/license.html',referencia:'Apache OpenOffice, Licensing: distribuye el producto bajo Apache License 2.0.'},
{url:a1,referencia:'Convocatoria oficial A1 GSI 2025, temas 43 y 69: protección jurídica de programas y software de código abierto/libre.'},
{url:a2,referencia:'Convocatoria oficial A2 GSI 2025, tema II.14: software libre y propietario, licencias y protección jurídica.'},
{url:drive.licencias,referencia:'ITIC Academy 2026, bloque 18 Protección Jurídica del Software, apartado de licencias y software libre; encaje curricular, no fuente de la licencia concreta de Adobe.'}
],null,'La opción B es la única que no es software de código abierto: Adobe Acrobat Reader se distribuye mediante licencia propietaria, aunque el uso del lector pueda ofrecerse sin coste. Thunderbird y Firefox son software abierto según Mozilla; Apache OpenOffice se licencia bajo Apache 2.0. Se actualiza el nombre comercial de Reader sin alterar la clave.'],
[5553,[74],[],['SIG','ISO 19115-1','metadatos geográficos','normas ISO 19100'],[
{url:'https://www.iso.org/standard/53798.html',referencia:'ISO, ficha oficial ISO 19115-1:2014, Geographic information — Metadata — Part 1: Fundamentals; la ficha indica que la edición sigue vigente y describe el esquema para metadatos de información y servicios geográficos.'},
{url:'https://www.iso.org/standard/57303.html',referencia:'ISO, ficha oficial ISO 19110:2016: metodología para catalogar tipos de entidades geográficas; permite distinguirla de 19115-1, que trata metadatos.'},
{url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 74: conceptos y funcionalidad básica de los sistemas de información geográfica.'},
{url:drive.gis,referencia:'ITIC Academy 2026, bloque 33 E-learning y Sistemas de Información Geográfica, tema A1-74; el propio cotejo académico declara no aplicable A2 directo a SIG.'}
],null,'La familia ISO 19115 define metadatos de información geográfica; su parte 1, ISO 19115-1:2014, establece los fundamentos y continúa vigente según ISO. Se precisa la parte actual, pues el ítem antiguo citaba solo “ISO 19115”. ISO 19110 corresponde a catalogación de tipos de entidades, no al estándar general de metadatos. No se asigna correspondencia A2 directa para SIG tras cotejar el programa oficial.'],
[5554,[75],['II-4','III-15'],['data warehouse','almacén de datos','Inmon','orientado a temas','integrado','no volátil','variante temporal'],[
{url:'https://www.oreilly.com/library/view/building-the-data/9780764599446/ch02.html',referencia:'Bill Inmon, Building the Data Warehouse, capítulo 2, texto de la definición clásica: subject-oriented, integrated, nonvolatile y time-variant.'},
{url:'https://docs.oracle.com/html/E25554_01/concept.htm',referencia:'Oracle Data Warehousing Concepts: resume las características de Inmon y diferencia la orientación de almacén analítico de sistemas operacionales/transaccionales.'},
{url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 75: data warehouse y tecnologías de explotación de datos.'},
{url:a2,referencia:'Convocatoria oficial A2 GSI 2025, tema II.4 (BI, almacenes, OLTP/OLAP) y III.15 (minería, OLAP y big data).'},
{url:drive.bi,referencia:'ITIC Academy 2026, bloque 34 Business Intelligence y Big Data, apartado Data Warehouse/OLTP-OLAP; cobertura temática.'}
],null,'La definición clásica atribuida a Bill Inmon caracteriza el almacén como orientado a temas, integrado, variante en el tiempo y no volátil. “Transaccional” caracteriza típicamente los sistemas OLTP que alimentan el almacén, no una de las cuatro propiedades. La afirmación B es falsa.'],
[5555,[27,82,125],['I-7','II-11','IV-12'],['acceso remoto','datos personales','cifrado','registro de accesos','RGPD'],[
{url:'https://www.boe.es/buscar/act.php?id=BOE-A-2008-979',referencia:'RD 1720/2007, texto consolidado, arts. 85, 103 y 104: acceso por redes con seguridad equivalente a acceso local; registro detallado para ficheros con nivel alto; cifrado en transmisión por redes públicas/inalámbricas cuando correspondían medidas de nivel alto. El reglamento desarrollaba la derogada LO 15/1999 y no es el régimen vigente.'},
{url:'https://www.aepd.es/preguntas-frecuentes/2-tus-obligaciones-como-responsable-del-tratamiento/9-analisis-de-riesgos',referencia:'AEPD, FAQ de análisis de riesgos: aclara que el modelo obligatorio de medidas del RLOPD dejó de ser válido al aplicarse plenamente el RGPD en 2018 y que las medidas se seleccionan según riesgo.'},
{url:'https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=es',referencia:'Reglamento (UE) 2016/679, art. 32: exige medidas técnicas y organizativas apropiadas según riesgo; menciona cifrado cuando proceda, pero no impone ese mecanismo de forma universal para todo tratamiento.'},
{url:'https://www.boe.es/eli/es/lo/2018/12/05/3/con',referencia:'Ley Orgánica 3/2018 consolidada, régimen español vigente de protección de datos personales y derechos digitales.'},
{url:a1,referencia:'Convocatoria oficial A1 GSI 2025, temas 27, 82 y 125: protección de datos, aplicación de seguridad y seguridad de redes.'},
{url:a2,referencia:'Convocatoria oficial A2 GSI 2025, I.7, II.11 e IV.12: protección de datos, auditoría y seguridad de redes.'},
{url:drive.datos,referencia:'ITIC Academy 2026, bloque 36 Seguridad, criptografía, identificación y firma, apartado RGPD/protección de datos; cotejo curricular, no fuente legal.'}
],null,'Se conserva la clave B, pero el ítem se marca histórico: reproduce medidas del RD 1720/2007, reglamento de la ya derogada LO 15/1999. Incluso bajo ese reglamento la obligación de cifrar no era universal (art. 104: supuestos de nivel alto y redes públicas/inalámbricas) y el registro extenso del art. 103 era propio del nivel alto. El art. 85 sí establecía para accesos por red un nivel equivalente al local. Actualmente, el RGPD art. 32 impone medidas proporcionadas al riesgo y contempla el cifrado cuando sea apropiado; no se presenta la opción B como regla jurídica actual autónoma.','historica']
];
const edits={
5551:{texto:'¿Cuáles son los dos componentes principales de ADO.NET para acceder a datos y manipularlos?',respuesta_correcta:3},
5552:{texto:'¿Cuál de los siguientes productos no se distribuye como software de código abierto?',opciones:['Mozilla Thunderbird.','Adobe Acrobat Reader.','Apache OpenOffice.','Mozilla Firefox.'],respuesta_correcta:1},
5553:{texto:'¿Qué norma de la familia ISO 19100 establece fundamentos y un esquema para los metadatos de información geográfica?',opciones:['ISO 19110:2016','ISO 19125','ISO 19115-1:2014','ISO 19122'],respuesta_correcta:2},
5554:{texto:'Según la definición clásica de Bill Inmon, ¿cuál NO es una característica definitoria de un almacén de datos (data warehouse)?',respuesta_correcta:1},
5555:{texto:'En el régimen histórico del RD 1720/2007 sobre acceso a datos personales a través de redes de comunicaciones, ¿qué medida general exigía su artículo 85?',respuesta_correcta:1}
};
aplicar({numero:'1046',fecha:'2026-11-12',records:rec,edits});
