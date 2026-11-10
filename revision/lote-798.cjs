require('./aplicar-lote.cjs')({
  numero: '798', fecha: '2026-11-09',
  records: [
    [4311, [72], [], ['SAP ERP', 'SAP R/3', 'CO', 'centro de coste', 'controlling area'], [
      { url: 'https://help.sap.com/docs/SAP_ERP/b42281c1645049a4b07c0ab25ec8b899/a30ad553088f4308e10000000a174cb4.html', referencia: 'SAP Help, Cost Centers: unidad organizativa dentro de un área de controlling que representa un lugar delimitado donde se producen costes.' },
      { url: 'https://drive.google.com/file/d/1lkbdZvGxPTwyjhiOf6VsglMWYe4RI6sL/view?usp=drivesdk', referencia: 'ITIC Academy, Tema 072 (2026): sistemas ERP, módulos de contabilidad y control de costes; cotejo curricular.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria TIC AGE 2025, programa A1, tema 72.' }
    ], null, 'La definición de A es correcta con la precisión de que el ámbito superior es el área de controlling (CO), no una “sociedad CO”. Se corrige esa traducción para conservar una respuesta inequívoca. Las cuentas de mayor y el plan de cuentas pertenecen a contabilidad financiera y no definen un centro de coste.', 'corregida'],
    [4312, [72], [], ['ERP', 'integración', 'modularidad', 'adaptabilidad', 'parametrización'], [
      { url: 'https://www.sap.com/products/erp/what-is-erp.html', referencia: 'SAP: ERP integra procesos de negocio en una solución y base de datos comunes; presenta capacidades modulares y adaptables.' },
      { url: 'https://learning.sap.com/courses/extending-cloud-solutions-with-sap-cloud-applications-studio/understanding-the-business-configuration-concept_a0463369-3db5-47ab-84a0-dd08039bd715', referencia: 'SAP Learning: la configuración empresarial adapta opciones estándar a requisitos organizativos.' },
      { url: 'https://drive.google.com/file/d/1lkbdZvGxPTwyjhiOf6VsglMWYe4RI6sL/view?usp=drivesdk', referencia: 'ITIC Academy, Tema 072 (2026): características ERP, modularidad, integridad de datos y adaptabilidad/parametrización.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria TIC AGE 2025, programa A1, tema 72.' }
    ], null, 'La lista pretendía nombrar integración, modularidad y adaptabilidad. Se corrige “Integridad” por “Integración” —no son sinónimos en este contexto— para que “Todas son correctas” sea válido sin confundir integridad de datos con integración de procesos. Se conserva C.', 'corregida'],
    [4313, [72], [], ['CRM', 'software libre', 'SugarCRM Community Edition', 'histórica'], [
      { url: 'https://github.com/sugarai-archive/sugarcrm_dev', referencia: 'Archivo de SugarCRM: anuncio de que Sugar Community Edition dejó de desarrollarse y mantener; se trata de un producto histórico, no una oferta abierta vigente.' },
      { url: 'https://github.com/matthewpoer/SugarCRM-Community-Edition', referencia: 'Repositorio de preservación de instaladores y documentación de la edición comunitaria antigua, que indica que el proveedor la retiró y dejó sin soporte.' },
      { url: 'https://www.sugarcrm.com/wp-content/uploads/legal/sugar-outfitters-isv-agreement.pdf', referencia: 'Contrato actual de SugarCRM: distingue expresamente el producto comercial de la edición open-source histórica conocida como SugarCRM Community Edition.' },
      { url: 'https://drive.google.com/file/d/1lkbdZvGxPTwyjhiOf6VsglMWYe4RI6sL/view?usp=drivesdk', referencia: 'ITIC Academy, Tema 072 (2026): fabricantes/soluciones CRM; cotejo curricular. Se etiqueta la referencia de SugarCRM CE como histórica.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria TIC AGE 2025, programa A1, tema 72.' }
    ], null, 'SugarCRM Community Edition fue una solución CRM de código abierto, pero el proveedor anunció el fin de su desarrollo y mantenimiento. Se acota el enunciado a la edición comunitaria histórica para que no se interprete que la oferta Sugar vigente es open source. La clave B se conserva como respuesta histórica, no como recomendación actual.', 'historica'],
    [4314, [72], ['II-12'], ['CRM', 'ERP', 'relaciones con clientes', 'procesos de negocio', 'integración'], [
      { url: 'https://learn.microsoft.com/en-us/dynamics365/guidance/business-processes/glossary', referencia: 'Microsoft Learn: CRM organiza relaciones, cuentas, contactos y oportunidades para procesos de venta y servicio.' },
      { url: 'https://www.sap.com/products/erp/what-is-erp.html', referencia: 'SAP: ERP integra procesos y recursos empresariales como finanzas, operaciones y cadena de suministro; puede integrar sistemas CRM.' },
      { url: 'https://drive.google.com/file/d/1lkbdZvGxPTwyjhiOf6VsglMWYe4RI6sL/view?usp=drivesdk', referencia: 'ITIC Academy, Tema 072 (2026): diferencias y complementariedad entre CRM y ERP.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria TIC AGE 2025, programa A1, tema 72.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria GSI AGE 2025, programa A2, tema II-12 (atención y CRM).' }
    ], null, 'La distinción es correcta como función principal: CRM se centra en las relaciones/interacciones con clientes y ERP integra procesos y recursos de la organización. No se afirma que ERP solo gestione procesos “internos” ni que las plataformas no puedan integrarse. Se mantiene D.', 'corregida'],
    [4315, [72], ['II-12'], ['CRM', 'ERP', 'CRM analítico', 'data mining', 'CRM operacional', 'actualización'], [
      { url: 'https://learn.microsoft.com/en-us/dynamics365/sales/relationship-analytics-overview', referencia: 'Microsoft Learn: analítica de relaciones convierte datos de ventas e interacciones en señales e indicadores para entender tendencias y relaciones.' },
      { url: 'https://www.sap.com/products/erp/what-is-erp.html', referencia: 'SAP: ERP integra procesos empresariales, incluyendo finanzas, mientras que CRM se centra en relaciones con clientes.' },
      { url: 'https://drive.google.com/file/d/1lkbdZvGxPTwyjhiOf6VsglMWYe4RI6sL/view?usp=drivesdk', referencia: 'ITIC Academy, Tema 072 (2026), apartados CRM analítico, operacional y ERP; cotejo del alcance funcional.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria TIC AGE 2025, programa A1, tema 72.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria GSI AGE 2025, programa A2, tema II-12 (CRM y atención a clientes).' }
    ], null, 'Ninguna opción original era inequívocamente verdadera: minería de datos para analizar tendencias es propia del CRM analítico, no una definición del operacional; ERP no queda limitado a cliente-servidor y la parametrización no impide por sí misma actualizar. Se corrige B para atribuir analítica/minería de datos al CRM analítico y se conserva esa clave.', 'corregida']
  ],
  edits: {
    4311: { opciones: [
      'Es la unidad organizativa, dentro de un área de controlling (CO), que representa un ámbito claramente delimitado donde se producen costes.',
      'Corresponde a una posición en el plan de cuentas relevante para el coste.',
      'Es el nivel jerárquico más alto en el Sistema SAP.',
      'Es una lista de todas las cuentas de mayor utilizadas por una o varias sociedades.'
    ] },
    4312: { opciones: ['Integración de procesos y datos', 'Modularidad', 'Todas son correctas', 'Adaptabilidad mediante configuración/parametrización'] },
    4313: {
      texto: '¿Qué producto tuvo una edición CRM de código abierto, actualmente histórica y sin mantenimiento del proveedor?',
      opcion: [1, 'SugarCRM Community Edition (edición histórica; el proveedor dejó de mantenerla)']
    },
    4314: { texto: '¿Qué afirmación distingue mejor la función principal de CRM y ERP, aunque ambos sistemas puedan integrarse?' },
    4315: {
      texto: 'Indique la frase correcta acerca de los sistemas CRM y ERP:',
      opcion: [1, 'El CRM analítico puede aplicar técnicas de minería de datos para identificar patrones y tendencias en la información de clientes.']
    }
  }
});
