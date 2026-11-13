const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const esp='https://digital.gob.es/ministerio/programas/programas-avance-digital/espana-digital-2026';
const espPdf='https://portal.mineco.gob.es/RecursosArticulo/mineco/ministerio/ficheros/EspanaDigital_2026.pdf';
const biAcademy='https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk';
const digitalAcademy='https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk';
const oracle='https://docs.oracle.com/en/database/oracle/oracle-database/26/cncpt/topics-for-database-administrators-and-developers.html';
const boeOld='https://www.boe.es/buscar/act.php?id=BOE-A-2009-18358&p=20150718&tn=1';
const boeCurrent='https://www.boe.es/buscar/act.php?id=BOE-A-2021-5032&p=20210331&tn=0';
const academyRD='https://drive.google.com/file/d/11QuUqAYlruKySMYUekcJmSOjuIr4fQhv/view?usp=drivesdk';
const academyOldRD='https://drive.google.com/file/d/0Bw-rS_kOHzMKYnQtWndCMWZvc3M/view?usp=drivesdk&resourcekey=0-hjAPQToWY0YA9fwHrXUN1w';
const iso='https://www.iso.org/standard/50457.html';
const rfc='https://www.rfc-editor.org/rfc/rfc3161.html';
const cryptoAcademy='https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk';
const designAcademy='https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const uclm='https://www.inf-cr.uclm.es/www/mpolo/asig/is4/tema08.pdf';
const examArchive='https://www.preparatic.org/material/20090620/sesion7_test.pdf';
apply({numero:'1210',fecha:'2026-11-13',records:[
 [6371,['51','71'],['I-6','III-15'],['España Digital 2026','Eje 4','economía del dato','Big Data'],[
  src(esp,'Ministerio para la Transformación Digital y de la Función Pública, ficha oficial España Digital 2026: Eje 4, Economía del Dato e Inteligencia Artificial.'),
  src(espPdf,'España Digital 2026, texto oficial del Plan: estructura de ejes y actuaciones sobre economía del dato e inteligencia artificial.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 51 (agenda digital española) y tema 71 (ciencia de datos).'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.6 (sociedad de la información y Agenda Digital para España) y III.15 (Big Data).'),
  src(digitalAcademy,'ITIC Academy, Bloque 6 Economía y transformación digital, actualizado 1/10/2026: coteja España Digital 2026 y la numeración de ejes; distingue actuaciones sobre datos de los ejes sectoriales.')
 ],null,'La opción A es correcta: el documento oficial sitúa la economía del dato y la inteligencia artificial en el Eje 4. Se explicita el nombre del eje para evitar memorizar solo su cifra. El Plan tiene horizonte 2026; la respuesta se refiere a su estructura documental.','vigente'],
 [6372,['75'],['II-4'],['Data Warehouse','Inmon','no volátil','integrado','variante en el tiempo'],[
  src(oracle,'Oracle Database Concepts 26, Data Warehousing and OLTP: enumera las cuatro características de Inmon y explica time-variant como análisis del cambio a lo largo del tiempo y nonvolatile como no cambiar los datos una vez incorporados.'),
  src(biAcademy,'ITIC Academy, bloque 34 Business Intelligence y Big Data 2026, §2.1: definición y propiedades del Data Warehouse; distingue no volatilidad de la perspectiva histórica/temporal.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 75: tecnologías de explotación de datos, incluido Data Warehouse.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.4: almacenes de datos e inteligencia de negocios.')
 ],null,'La clave D conserva las cuatro propiedades clásicas de Inmon: orientado a temas, integrado, no volátil y variante en el tiempo. Se rehacen enunciado y distractores: el original usaba “cambiante en el tiempo” sin distinguir la perspectiva histórica del análisis de la modificación de registros, y contenía una opción parcial que también parecía correcta.','corregida'],
 [6373,['22','80'],['I-9'],['sede electrónica','RD 1671/2009','RD 203/2021','certificado','histórica','derogación'],[
  src(boeOld,'Real Decreto 1671/2009, art. 18, texto consolidado del BOE: entre los datos identificativos enumeraba el nombre de dominio y la denominación descriptiva de la sede electrónica.'),
  src(boeCurrent,'Real Decreto 203/2021, disposición derogatoria única: deroga expresamente el RD 1671/2009. Su articulado vigente regula identificación de sedes y sellos en otros términos, sin reproducir aquella lista de cinco campos.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, temas 22 (actuación administrativa electrónica) y 80 (identificación y firma electrónica).'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.9: sedes electrónicas, identificación/autenticación y ENS/ENI.'),
  src(academyRD,'ITIC Academy, material TIC del RD 203/2021: identifica expresamente que el Reglamento derogó el RD 1671/2009; cotejo de vigencia normativa.'),
  src(academyOldRD,'ITIC Academy, material histórico del RD 1671/2009: reproduce el contexto normativo anterior al reglamento de 2021.')
 ],null,'Se conserva la clave D, pero la pregunta queda situada en el art. 18 del RD 1671/2009, ya derogado, y pregunta por dos datos que figuraban entre los enumerados (no por la lista completa). No debe presentarse como requisito literal vigente: el RD 203/2021 derogó aquella disposición.','historica'],
 [6374,['79','80'],['IV-12'],['sellado de tiempo','timestamp','ISO/IEC 18014-3','hash','RFC 3161','TSA'],[
  src(iso,'ISO/IEC 18014-3:2009, ficha oficial ISO, edición confirmada en 2021: en el encadenamiento lineal se concatena el enlace anterior con el hash de la representación del evento y se aplica una función hash resistente a colisiones.'),
  src(rfc,'IETF RFC 3161, Time-Stamp Protocol: el solicitante envía un MessageImprint (resumen/hash) y la TSA devuelve un token firmado; el protocolo no exige que conozca el documento íntegro ni que firme el documento original.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, temas 79 (funciones hash y notariado) y 80 (certificados, firma y otros servicios).'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.12: técnicas criptográficas y mecanismos de firma digital.'),
  src(cryptoAcademy,'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma, versión 2026.1: apartados de notariado electrónico, sellado de tiempo, timestamps y firma longeva; el algoritmo de enlace se contrasta directamente con ISO/IEC 18014-3.')
 ],null,'La opción B es correcta cuando “registros encadenados” se refiere al mecanismo de tokens enlazados de ISO/IEC 18014-3: el enlace actual se calcula a partir del enlace anterior y el resumen del evento mediante hash resistente a colisiones. Se precisa el stem y la opción con la denominación normativa “tokens enlazados”; en RFC 3161 la TSA recibe el resumen del mensaje, no el documento íntegro.','corregida'],
 [6375,['93'],[],['diseño estructurado','diagramas de estructura','análisis de transformación','fan-in','fan-out','cohesión','acoplamiento'],[
  src(uclm,'Universidad de Castilla-La Mancha, apuntes de Diseño Estructurado: el análisis de transformación identifica entrada, centro y salida como pasos para derivar la estructura; el refinamiento posterior usa medidas y guías de diseño.'),
  src(designAcademy,'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información 2026: apartado de diagramas de estructura, proceso estructurado y guías de diseño; separa análisis de transformación y refinamiento mediante fan-in/fan-out.'),
  src(examArchive,'PreparaTIC, test de la sesión 7 (2009), pregunta 16: antecedente textual de esta cuestión; se contrasta con los apuntes universitarios y el programa vigente.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 93: técnicas de diseño de software.')
 ],null,'La opción A es la clave: aislar el centro de transformación y fijar los límites de entrada/salida es un paso del análisis de transformación aplicado al DFD para obtener la estructura inicial, no una guía de refinamiento del diagrama ya obtenido. Se reescriben los distractores para expresar heurísticas reconocibles: evitar acoplamiento común por globales, favorecer fan-in con fan-out controlado y no transferir datos innecesariamente. El programa A2 vigente no contiene un tema de diseño estructurado equivalente; no se fuerza la asignación a A2-III-9, que trata diseño orientado a objetos/UML.','corregida']
],edits:{
 6371:{texto:'En la estructura del Plan España Digital 2026, ¿en qué eje se encuadra mejor Big Data?',opcion:[0,'Eje 4: Economía del Dato e Inteligencia Artificial']},
 6372:{texto:'En la definición clásica de Bill Inmon, un Data Warehouse se caracteriza por ser:',opciones:[
  'Orientado a temas, integrado, volátil y centrado en las operaciones actuales.',
  'Orientado a temas, integrado, no volátil y sin perspectiva de evolución temporal.',
  'Orientado a aplicaciones, integrado, volátil y variante en el tiempo.',
  'Orientado a temas, integrado, no volátil y variante en el tiempo, para analizar cambios históricos.'
  ]},
 6373:{texto:'Según el artículo 18 del ya derogado Real Decreto 1671/2009, ¿qué dos datos figuraban entre los enumerados para identificar una sede electrónica?',opciones:[
  'La URL de publicación y la huella digital del certificado raíz.',
  'El NIF de la autoridad de certificación y la fecha de caducidad del certificado.',
  'La dirección postal de la sede y el código de su registro electrónico.',
  'El nombre de dominio de la sede y su denominación descriptiva.'
  ],respuesta_correcta:3},
 6374:{texto:'Según ISO/IEC 18014-3:2009, en el encadenamiento lineal de tokens de sellado temporal, ¿cómo se obtiene un nuevo enlace?',opciones:[
  'La TSA debe recibir y conservar íntegro el documento original para expedir cada token.',
  'Se concatena el enlace anterior con el hash de la representación del evento y se aplica una función hash resistente a colisiones.',
  'La TSA firma digitalmente la concatenación del documento íntegro con la hora local.',
  'No se enlazan los tokens: cada uno se calcula de forma independiente y sin un valor hash anterior.'
  ],respuesta_correcta:1},
  6375:{texto:'En diseño estructurado, ¿cuál opción describe un paso del análisis de transformación para obtener la estructura inicial desde un DFD, y no una heurística para refinar el diagrama resultante?',opciones:[
  'Aislar el centro de transformación y fijar los límites de los flujos de entrada y salida.',
  'Evitar el acoplamiento común que se introduce mediante variables globales.',
  'Favorecer la reutilización mediante fan-in y mantener controlado el fan-out de los módulos.',
  'Evitar el intercambio de datos entre módulos cuando no sea necesario.'
  ],respuesta_correcta:0}
}});
