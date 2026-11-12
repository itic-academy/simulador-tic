const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const ref=(url,referencia)=>({url,referencia});
const records=[
 [5616,[71],['III-15'],['minería de datos','SQL Server Analysis Services','data mining','OLAP','vigencia histórica'],[
  ref('https://learn.microsoft.com/en-us/analysis-services/data-mining/data-mining-wizard-analysis-services-data-mining?view=asallproducts-allversions','Microsoft Learn, Data Mining Wizard: Analysis Services Data Mining ofrecía estructuras y modelos de minería de datos; la documentación limita su aplicabilidad a SSAS 2019 y anteriores.'),
  ref('https://learn.microsoft.com/en-us/analysis-services/analysis-services-backward-compatibility','Microsoft Learn, compatibilidad de Analysis Services: la minería de datos se declaró obsoleta en SSAS 2017 y fue retirada en SSAS 2022.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 71: ciencia de datos, ciclo de modelado, aprendizaje automático y herramientas.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema D15: minería de datos, tecnología y algoritmos; también OLAP.')
 ],null,'Pregunta actualizada y contextualizada históricamente: SQL Server Analysis Services incluía capacidades de minería de datos en sus versiones hasta SSAS 2019; Microsoft las declaró obsoletas en SSAS 2017 y las retiró en SSAS 2022. Los cubos OLAP sirven al procesamiento analítico multidimensional, concepto relacionado pero distinto de crear modelos de minería de datos. Se sustituyó la referencia ambigua a JDataMiner y el texto corrupto «Extract to Learnt» por distractores inequívocos.','historica'],
 [5617,[75],['II-4'],['MDX','OLAP','lenguaje de consulta multidimensional','servidor OLAP'],[
  ref('https://learn.microsoft.com/en-us/sql/analysis-services/multidimensional-models/mdx/mdx-query-fundamentals-analysis-services','Microsoft Learn, MDX Query Fundamentals: MDX (Multidimensional Expressions) permite consultar objetos multidimensionales, como cubos; es un lenguaje de consulta y no un servidor OLAP.'),
  ref('https://learn.microsoft.com/en-us/analysis-services/multidimensional-models/mdx/mdx-query-the-basic-query?view=sql-analysis-services-2025','Microsoft Learn, consulta MDX básica: la cláusula FROM identifica el cubo sobre el que opera la consulta.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 75: tecnologías de explotación de datos y almacenes de datos.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema T4: inteligencia de negocios, almacenes de datos y OLAP.')
 ],null,'Corregida. MDX significa Multidimensional Expressions y es un lenguaje para consultar cubos multidimensionales, no un servidor. Se reformula la pregunta para que la diferencia entre tecnología/consulta y producto servidor sea explícita, conservando la opción B como clave.','corregida'],
 [5618,[75],['II-4'],['WOLAP','Web OLAP','OLAP','terminología histórica'],[
  ref('https://mkotan.sakarya.edu.tr/sites/mkotan.sakarya.edu.tr/file/EKO469_VM_H05_VeriAmbarlariveOLAP.pdf','Material universitario de Sakarya sobre almacenes y OLAP: clasifica como WOLAP (Web OLAP) los cubos accedidos a través de la web; distingue MOLAP, DOLAP y ROLAP.'),
  ref('https://citeseerx.ist.psu.edu/document?doi=a62ffd9fb2c8fef3c6f8fffdbe2d7c6342eff6b9&repid=rep1&type=pdf','Olson y colaboradores, Data Warehouse Systems: enumera Web OLAP (WOLAP) entre las variantes de OLAP.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 75: explotación y análisis de datos.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema T4: inteligencia de negocios y procesamiento OLAP.')
 ],null,'Histórica, respuesta C. WOLAP se empleó en taxonomías didácticas para describir OLAP accesible mediante navegador o tecnología web. Se especifica que es terminología de clasificación histórica, no un estándar actual de arquitectura ni una categoría exclusiva: la pregunta no debe tomarse como taxonomía exhaustiva de las plataformas OLAP modernas.','historica'],
 [5619,[80,81],['I-6'],['DNIe','chip','datos de filiación','fotografía','certificados de autenticación y firma'],[
  ref('https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1001','DNI electrónico, conceptos básicos, FAQ 8–10: el chip incorpora los datos impresos (incluida filiación y fotografía) junto con certificados de autenticación y firma; la FAQ distingue la finalidad de ambos.'),
  ref('https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_240','DNI electrónico, características del chip: describe los datos de filiación y fotografía, certificados separados de autenticación y firma y diferentes zonas de acceso.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, temas 80–81: certificados, identificación y firma electrónica; PKI y DNI electrónico.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.6: identidad y firma electrónica, régimen jurídico y DNI electrónico.')
 ],null,'Corregida y acotada al contenido documentado oficialmente: el chip incorpora datos personales que figuran en el soporte físico, incluida filiación y fotografía, y también certificados distintos para autenticación y firma (además de otros elementos criptográficos y de componente). Se conserva B, se elimina la falsa idea de un único certificado con doble función y se evita afirmar que todos los datos solo pueden leerse con PIN: existen zonas con diferentes condiciones de acceso.','corregida'],
 [5620,[79,80],['IV-12'],['DNIe','firma electrónica','modo raw','PKCS#1','criptografía RSA'],[
  ref('https://www.dnielectronico.es/PDFs/Guia_de_Referencia_DNIe_con_NFC.pdf','FNMT/Dirección General de la Policía, Guía de referencia DNIe con NFC, § 9.1.4: la tarjeta puede realizar firmas en modo raw y modo con relleno PKCS#1.'),
  ref('https://www.dnielectronico.es/PDFs/Manual_de_Comandos_para_Desarrolladores_102.pdf','DNI electrónico, Descripción de la tarjeta DNIe-DSCF, § Funcionalidades criptográficas: documenta modo raw y modo relleno PKCS#1.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, temas 79–80: criptografía, algoritmos, certificados y formatos de firma.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.12: técnicas criptográficas y mecanismos de firma digital.')
 ],null,'Corregida. La tarjeta admite firmas en modo raw y con relleno PKCS#1. El enunciado original escribía PKCS#11 (interfaz criptográfica) donde la fuente técnica especifica PKCS#1 (formato de codificación/padding RSA); se corrige ese error manteniendo la opción A.','corregida']
];
const edits={
 5616:{texto:'En las versiones de SQL Server Analysis Services hasta 2019, ¿qué componente de Microsoft proporcionaba funciones de minería de datos?',opciones:['Data Mining de SQL Server Analysis Services.','VNC (Virtual Network Computing).','Los cubos OLAP de Excel, que son por sí mismos un motor de minería de datos.','Una utilidad de SQL Server denominada «Extract to Learnt».'],respuesta_correcta:0},
 5617:{texto:'¿Cuál de las siguientes opciones es un lenguaje para consultar cubos multidimensionales, no un servidor o producto OLAP?',opciones:['MicroStrategy OLAP Services.','MDX (Multidimensional Expressions).','Oracle Database OLAP.','Mondrian OLAP Server.'],respuesta_correcta:1},
 5618:{texto:'En la terminología histórica de las modalidades de acceso a OLAP, ¿qué sigla se utilizaba para el OLAP accesible a través de la web?',opciones:['SOLAP.','DOLAP.','WOLAP.','RTOLAP.'],respuesta_correcta:2},
 5619:{texto:'Según la información oficial del DNI electrónico, ¿qué afirmación describe correctamente parte del contenido del chip?',opciones:['Un único certificado electrónico que combina las funciones de autenticación y firma.','Incluye datos de filiación y fotografía que también aparecen en el documento físico, junto con certificados diferenciados de autenticación y firma.','Todos los datos del chip solo pueden leerse por el titular después de introducir el PIN.','El chip no contiene una imagen de la fotografía.'],respuesta_correcta:1},
 5620:{texto:'Según la guía técnica del DNIe, ¿en qué modos puede realizar firmas electrónicas la tarjeta?',opciones:['Modo raw y modo con relleno PKCS#1.','Únicamente en modo raw.','Únicamente en modo con relleno PKCS#1.','Ninguna de las anteriores.'],respuesta_correcta:0}
};
aplicar({numero:'1059',fecha:'2026-11-12',records,edits});

