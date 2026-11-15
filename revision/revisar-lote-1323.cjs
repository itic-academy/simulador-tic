const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const ssd='https://administracionelectronica.gob.es/ctt/ssd/infoadicional';
const manual='https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A8f02ab0e-f573-4c4c-a65f-9b4bf69309ee/ManualSSDAAPPv4.pdf';
const lpi='https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930&p=20200708';
const wcag='https://www.w3.org/TR/wcag/';
const eni='https://www.boe.es/eli/es/rd/2010/01/08/4/con';
const rd203='https://www.boe.es/buscar/act.php?id=BOE-A-2021-5032';
const inap='https://www.inap.es/documents/59312/2061887/20220514%2BPrimer%2BExamen%2B28%2BTribunal%2BCSSTIAE%2BRESUELTO.pdf/704705d6-1a02-e56c-9082-7f67520f9bda';
const urjc='https://www.urjc.es/images/Universidad/Facultades/fcjs/programas/direccion%20financiera_diplomado_ciencias_empresariales.pdf';
const drive17='https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk';
const drive17old='https://drive.google.com/file/d/1eUycEwRk8zA8IIrGWS-tJqNXpajQQR8S/view?usp=drivesdk';
const drive43='https://docs.google.com/document/d/1idLNt7OqjLIr_pxoBcGeW2vi9Kldm8Z1/edit';
const drive3844='https://drive.google.com/file/d/1za_7e_LlvUEpja7VJyYElIgRIPu_AbE3/view?usp=drivesdk';
const drive4546='https://drive.google.com/file/d/1zdx_PRBfKM9tRy61Boz_yPekU-D-b_6S/view?usp=drivesdk';
const edits={
  6936:{
    texto:'Según la metodología elegida para SSD-AAPP versión 4, ¿qué combinación describe correctamente la normalización de puntuaciones y la ordenación de alternativas?',
    opciones:['Normalización por fracción del máximo y ordenación QUALIFLEX.','Normalización por fracción del ideal y ordenación por ponderación lineal.','Normalización por fracción de la suma y ordenación por utilidad multiatributo.','Normalización por fracción del ideal y ordenación QUALIFLEX.'],
    respuesta_correcta:1
  },
  6937:{
    texto:'En la clasificación convencional de los métodos de inversión, se considera índice de rentabilidad el cociente entre el valor actual de los flujos de caja futuros descontados y el desembolso inicial. Con esta definición, ¿cuál de los siguientes métodos NO es estático?',
    opciones:['Comparación de costes mediante importes nominales, sin actualizar los flujos.','Pay-back simple, sin actualizar los flujos de caja.','Índice de rentabilidad calculado con flujos de caja descontados.','Tasa de rendimiento contable calculada sin actualizar los flujos.'],
    respuesta_correcta:2
  },
  6939:{
    texto:'Según los cuatro principios de accesibilidad de las WCAG (POUR), ¿cuál completa la lista «perceptible, comprensible, robusto y …»?',
    opciones:['Operable.','Inclusivo.','Transversal.','Universal.'],
    respuesta_correcta:0
  }
};
const records=[
  [6936,[40],['II-15'],['SSD-AAPP','decisión multicriterio discreta','fracción del ideal','ponderación lineal','normalización','ordenación de alternativas'],[
    {url:ssd,referencia:'PAe/CTT, SSD-AAPP, información adicional: identifica expresamente, para la metodología elegida, la normalización por fracción del ideal y la ordenación por ponderación lineal.'},
    {url:manual,referencia:'Manual oficial SSD-AAPP v4, apartado de metodología: explica que la versión 4 se centra en un método de cálculo y enumera asignación directa de pesos, normalización por fracción del ideal y ordenación por ponderación lineal.'},
    {url:a1,referencia:'Programa oficial A1 GSI 2025, tema 40: adquisición de sistemas, estudio de alternativas, evaluación de viabilidad y toma de decisión.'},
    {url:a2,referencia:'Programa oficial A2 GSI 2025, tema II.15: técnicas de evaluación de alternativas y análisis de viabilidad.'}
  ],undefined,'Corregida B. El enunciado original era demasiado amplio: mezclaba una técnica de normalización con métodos de ordenación que pueden existir en la teoría multicriterio y no delimitaba qué combinación adopta la herramienta. Se precisa que pregunta por la metodología elegida para SSD-AAPP v4. Su documentación oficial fija fracción del ideal para normalizar y ponderación lineal para ordenar; no QUALIFLEX ni utilidad multiatributo.', 'corregida'],
  [6937,[42],['II-15'],['rentabilidad de inversiones','métodos estáticos','métodos dinámicos','índice de rentabilidad','descuento de flujos'],[
    {url:drive17,referencia:'ITIC Academy, bloque 17, versión 2026.2 (02-10-2026), apartados 7.2–7.5: clasifica los métodos estáticos y define el índice de rentabilidad con flujos descontados dentro de los indicadores dinámicos; se usa como cotejo curricular.'},
    {url:urjc,referencia:'Universidad Rey Juan Carlos, programa de Dirección Financiera: separa los métodos estáticos de los dinámicos y sitúa VAN, índice de rentabilidad y TIR en el bloque dinámico.'},
    {url:a1,referencia:'Programa oficial A1 GSI 2025, tema 42: rentabilidad de inversiones en proyectos TIC.'},
    {url:a2,referencia:'Programa oficial A2 GSI 2025, tema II.15: evaluación de alternativas, viabilidad y control de costes de proyectos informáticos.'}
  ],undefined,'Corregida C. «Índice de rentabilidad» puede usarse con definiciones distintas; sin especificar la fórmula, la pregunta no excluía una interpretación no descontada. Ahora se identifica como índice dinámico el cociente entre el valor actual de los flujos futuros y la inversión inicial. Las otras tres opciones se definen como criterios sin actualización temporal. El indicador también se denomina profitability index y es una ratio de flujos descontados.', 'corregida'],
  [6938,[43],['II-14'],['propiedad intelectual','programas de ordenador','software creado por empleado','derechos de explotación','TRLPI artículo 97.4'],[
    {url:lpi,referencia:'Real Decreto Legislativo 1/1996, texto consolidado, art. 97.4: cuando un trabajador asalariado crea el programa en el ejercicio de sus funciones o siguiendo instrucciones, los derechos de explotación sobre fuente y objeto corresponden exclusivamente al empresario, salvo pacto en contrario.'},
    {url:a1,referencia:'Programa oficial A1 GSI 2025, tema 43: protección jurídica de programas de ordenador.'},
    {url:a2,referencia:'Programa oficial A2 GSI 2025, tema II.14: protección jurídica de programas y licencias.'}
  ],undefined,'Vigente C. La pregunta reproduce sustancialmente la regla del artículo 97.4 del TRLPI: los derechos de explotación corresponden al empresario, con la salvedad expresa de pacto en contrario. La disposición se refiere a derechos de explotación del programa fuente y objeto, no elimina la condición de autor ni los derechos morales reconocidos por la Ley.', 'vigente'],
  [6939,[44],['III-14'],['accesibilidad web','WCAG','principios POUR','operabilidad','perceptible','comprensible','robustez'],[
    {url:wcag,referencia:'W3C Recommendation, Web Content Accessibility Guidelines (WCAG) 2.2, introducción y principios: Perceivable, Operable, Understandable y Robust.'},
    {url:a1,referencia:'Programa oficial A1 GSI 2025, tema 44: accesibilidad, usabilidad, W3C, diseño universal y web adaptativa.'},
    {url:a2,referencia:'Programa oficial A2 GSI 2025, tema III.14: accesibilidad, diseño universal, usabilidad y tecnologías de sociedad de la información.'}
  ],undefined,'Corregida A. Se nombra el marco WCAG/POUR y se emplean equivalentes españoles coherentes con sus cuatro principios (perceptible, operable, comprensible y robusto). La respuesta correcta es «operable»; inclusividad, transversalidad y universalidad son conceptos relevantes, pero no sustituyen el segundo principio WCAG.', 'corregida'],
  [6940,[45,46],['I-9'],['ENI','interoperabilidad organizativa','inventarios de información administrativa','SIA','DIR3','Real Decreto 4/2010','artículo 9'],[
    {url:eni,referencia:'Real Decreto 4/2010, texto consolidado, art. 9: cada Administración Pública mantendrá actualizado el conjunto de inventarios de información administrativa, con procedimientos/servicios, órganos y oficinas y conexiones con SIA y DIR3.'},
    {url:rd203,referencia:'Real Decreto 203/2021, disposición final segunda: dio nueva redacción al artículo 9 del RD 4/2010, incluida la obligación de mantener actualizados estos inventarios.'},
    {url:a1,referencia:'Programa oficial A1 GSI 2025, temas 45 y 46: ENI, interoperabilidad organizativa y normas técnicas.'},
    {url:a2,referencia:'Programa oficial A2 GSI 2025, tema I.9: ENI y normas técnicas de interoperabilidad.'}
  ],undefined,'Vigente C. La obligación está en el artículo 9 del Real Decreto 4/2010, de 8 de enero, que regula el Esquema Nacional de Interoperabilidad. Su redacción vigente fue actualizada por el Real Decreto 203/2021: comprende procedimientos y servicios, y órganos y oficinas, con conexión a SIA y DIR3. No deriva del ENS, del RGPD ni de la Ley 40/2015.', 'vigente']
];
aplicar({numero:'1323',fecha:'2026-11-15',records,edits});
