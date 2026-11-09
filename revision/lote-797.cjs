require('./aplicar-lote.cjs')({
  numero: '797',
  fecha: '2026-11-09',
  records: [
    [4306, [65, 77], ['II-6'], ['AJAX', 'XMLHttpRequest', 'XHR', 'JavaScript', 'historial de navegación', 'estándares web'], [
      { url: 'https://developer.mozilla.org/en-US/docs/Glossary/AJAX', referencia: 'MDN: AJAX es un enfoque de desarrollo para realizar solicitudes asíncronas y actualizar la interfaz sin cargar de nuevo el documento completo; XMLHttpRequest fue la API usada originalmente.' },
      { url: 'https://xhr.spec.whatwg.org/', referencia: 'WHATWG, XMLHttpRequest Standard: especificación vigente de la API que permite a scripts transferir datos entre cliente y servidor.' },
      { url: 'https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API', referencia: 'MDN: pushState() y replaceState() son las operaciones que permiten a una aplicación modificar entradas del historial; la llamada XHR por sí sola no las crea.' },
      { url: 'https://www.w3.org/standards/history/XMLHttpRequest/', referencia: 'W3C: historial de publicaciones de XMLHttpRequest Level 1; sus documentos publicados fueron borradores, no una Recomendación W3C. Por eso se evita sostener la distinción en la fase del proceso W3C.' },
      { url: 'https://drive.google.com/file/d/1zk8UbyZCGo2GZrgnrA4aiwQxa8zi6S7U/view?usp=drivesdk', referencia: 'ITIC Academy, temario de tecnologías de sistemas de información: A1-65 (arquitectura de desarrollo web y scripts de cliente) y A1-77 (estándares web); se coteja la materia, sin atribuirle esta pregunta.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria TIC AGE 2025, programa A1, temas 65 y 77.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria GSI AGE 2025, programa A2, tema II-6 (arquitectura cliente-servidor/multicapa y servicios web).' }
    ], null, 'Se distingue AJAX como enfoque de desarrollo de la API XHR estandarizada en WHATWG; se elimina la formulación histórica ambigua sobre una Recomendación W3C. La petición XHR por sí sola no modifica el historial; para eso la aplicación puede usar History API. AJAX no obliga a recargar el documento completo: la opción falsa se cambia a esa afirmación. Se conserva la clave C.', 'corregida'],
    [4307, [72], [], ['SAP R/3', 'ERP', 'MM', 'CO', 'PM', 'SD', 'compras', 'módulos'], [
      { url: 'https://help.sap.com/docs/SAP_ERP/967e1c2a6a8c4183b7e07d28e7574445/257eb65334e6b54ce10000000a174cb4.html', referencia: 'SAP Help, Purchasing (MM-PUR): compras es un componente de Materials Management (MM).' },
      { url: 'https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/e72f747389b340229f7fa343975bfa57/b97cb6535fe6b74ce10000000a174cb4.html', referencia: 'SAP Help, Maintenance Management: PM corresponde a mantenimiento de planta (inspección, mantenimiento preventivo y reparación).' },
      { url: 'https://help.sap.com/docs/SUPPORT_CONTENT/sd/3362915149.html', referencia: 'SAP Help, Sales and Distribution: SD es la solución de gestión de ventas/distribución, desde pedidos hasta facturación, integrada con otros módulos.' },
      { url: 'https://drive.google.com/file/d/1lkbdZvGxPTwyjhiOf6VsglMWYe4RI6sL/view?usp=drivesdk', referencia: 'ITIC Academy, Tema 072 (2026): sistemas ERP, módulos, integración y soluciones SAP; cotejo temático.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria TIC AGE 2025, programa A1, tema 72 (CRM/ERP).' }
    ], null, 'La pregunta original no tenía ninguna alternativa cierta: compras corresponde a MM, PM es Plant Maintenance y SD es Sales and Distribution. Se corrige la opción A para que exprese MM y se mantiene como clave única; las otras dos afirmaciones siguen siendo falsas. R/3 se trata como producto histórico, sin implicar que la taxonomía de módulos deje de ser útil.', 'corregida'],
    [4308, [72], [], ['ERP', 'parametrización', 'configuración', 'modularidad', 'adaptabilidad'], [
      { url: 'https://learning.sap.com/courses/extending-cloud-solutions-with-sap-cloud-applications-studio/understanding-the-business-configuration-concept_a0463369-3db5-47ab-84a0-dd08039bd715', referencia: 'SAP Learning: la configuración empresarial adapta el software estándar a requisitos organizativos dentro de las posibilidades del producto.' },
      { url: 'https://www.oracle.com/erp/erp-modules/', referencia: 'Oracle: el ERP se compone de módulos y la organización puede elegir los que necesita y planificar su implantación.' },
      { url: 'https://www.sap.com/products/erp/what-is-erp.html', referencia: 'SAP: ERP integra procesos y puede configurarse para necesidades de la organización.' },
      { url: 'https://drive.google.com/file/d/1lkbdZvGxPTwyjhiOf6VsglMWYe4RI6sL/view?usp=drivesdk', referencia: 'ITIC Academy, Tema 072 (2026): modularidad, parametrización/adaptabilidad y soluciones ERP estándar.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria TIC AGE 2025, programa A1, tema 72.' }
    ], null, 'La opción B es la correcta: los ERP empaquetados suelen ofrecer configuración/parametrización y modularidad para adaptarse a distintos procesos. Eso no significa que cualquier requisito se resuelva sin desarrollo ni que todas las instalaciones sean idénticas; las opciones absolutas restantes son falsas. Se conserva B.', 'corregida'],
    [4309, [72], [], ['ERP', 'HCM', 'servidor de aplicaciones', 'IBM WebSphere', 'META4', 'PeopleNet'], [
      { url: 'https://www.ibm.com/products/websphere-application-server', referencia: 'IBM: WebSphere Application Server es un entorno de ejecución/servidor para aplicaciones Java empresariales, no un paquete ERP.' },
      { url: 'https://www.oracle.com/erp/financial-management/', referencia: 'Oracle: Oracle Financials se ofrece como parte de aplicaciones de gestión financiera ERP.' },
      { url: 'https://www.cegid.com/global/meta4-es-joins-cegid/', referencia: 'Cegid: Meta4 se integra en Cegid y sus soluciones de gestión de capital humano; no se clasifica como ERP genérico.' },
      { url: 'https://www.cegid.com/ib/es/academy-iberia/programa-certificacion-peoplenet-hr/', referencia: 'Cegid Academy: PeopleNet HR es una solución de recursos humanos/HCM.' },
      { url: 'https://drive.google.com/file/d/1lkbdZvGxPTwyjhiOf6VsglMWYe4RI6sL/view?usp=drivesdk', referencia: 'ITIC Academy, Tema 072 (2026): soluciones y proveedores ERP; cotejo de contenidos del epígrafe.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria TIC AGE 2025, programa A1, tema 72.' }
    ], null, 'La expresión original “relacionado con ERP” era demasiado amplia: META4/PeopleNet es HCM y Oracle Financials es ERP. Se especifica que se busca un servidor de aplicaciones Java, categoría funcional claramente distinta; WebSphere es la opción C. Se conservan los nombres originales, aclarando la naturaleza de cada producto.', 'corregida'],
    [4310, [72], ['II-12'], ['CRM', 'HCM', 'recursos humanos', 'gestión de clientes', 'marketing', 'ventas'], [
      { url: 'https://learn.microsoft.com/en-us/dynamics365/guidance/business-processes/glossary', referencia: 'Microsoft Learn: CRM gestiona clientes, oportunidades e interacciones comerciales/de servicio; el alcance y módulos varían por producto.' },
      { url: 'https://learn.microsoft.com/en-us/dynamics365/guidance/business-processes/prospect-to-quote-manage-customer-relationships', referencia: 'Microsoft Learn: gestión de relaciones, actividades de ventas y procesos con clientes.' },
      { url: 'https://www.cegid.com/ib/es/academy-iberia/programa-certificacion-peoplenet-hr/', referencia: 'Cegid Academy: PeopleNet HR como solución de gestión de recursos humanos/HCM, área diferenciada del CRM habitual.' },
      { url: 'https://drive.google.com/file/d/1lkbdZvGxPTwyjhiOf6VsglMWYe4RI6sL/view?usp=drivesdk', referencia: 'ITIC Academy, Tema 072 (2026): CRM, áreas de ventas/marketing/servicio al cliente y relación con ERP; cotejo de materia.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria TIC AGE 2025, programa A1, tema 72.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria GSI AGE 2025, programa A2, tema II-12 (gestión de atención, CRM y canales).' }
    ], null, 'La opción B (gestión de RR. HH.) se separa del alcance habitual de CRM y corresponde normalmente a ERP/HCM. Se reformula el enunciado para reconocer que el CRM puede incluir funciones de ventas, análisis y marketing y que el alcance concreto varía entre productos; se conserva B.', 'corregida']
  ],
  edits: {
    4306: {
      texto: 'Respecto a AJAX y XMLHttpRequest (XHR), ¿cuál de estas afirmaciones es falsa?',
      opcion: [1, 'La técnica AJAX es una especificación única del W3C que define por sí sola todas las tecnologías necesarias para una aplicación web.'],
      opciones: [
        'Una petición XHR, por sí sola, no crea una entrada en el historial de navegación; el código de la aplicación puede modificarlo mediante History API.',
        'La técnica AJAX es una especificación única del W3C que define por sí sola todas las tecnologías necesarias para una aplicación web.',
        'El uso de AJAX puede actualizar datos de la página sin obligar a recargar el documento completo.'
      ]
    },
    4307: {
      opciones: [
        'En SAP R/3, las compras se gestionan en el componente MM (Materials Management).',
        'El módulo PM se encarga de gestionar proyectos empresariales.',
        'El módulo SD forma parte de Contabilidad Financiera.'
      ]
    },
    4308: {
      opciones: [
        'Los datos de un ERP no pueden almacenarse en sistemas de bases de datos de propósito general.',
        'La configuración y parametrización de las funciones estándar y la selección de módulos permiten adaptar muchos ERP a organizaciones distintas.',
        'Los ERP no admiten configuración: cada producto está diseñado para un único tipo de empresa.',
        'Para que funcione un ERP siempre hay que implantar todos los módulos y todas sus funcionalidades.'
      ]
    },
    4309: {
      texto: '¿Cuál de estas opciones es un servidor de aplicaciones Java, no un paquete ERP o HCM?',
      opciones: [
        'Oracle Financials (aplicaciones financieras ERP)',
        'SAP (soluciones ERP)',
        'IBM WebSphere Application Server (servidor de aplicaciones Java)',
        'META4 / Cegid PeopleNet HR (gestión de recursos humanos/HCM)'
      ]
    },
    4310: {
      texto: 'Dentro del alcance funcional habitual de un CRM, ¿qué área corresponde principalmente a un sistema HCM/ERP y no a CRM?',
      opciones: [
        'Consultar el historial de interacciones y gestiones con clientes.',
        'Gestionar los procesos internos de recursos humanos de la organización.',
        'Planificar y seguir oportunidades y actividades de ventas.',
        'Analizar campañas y actividades de marketing dirigidas a clientes.'
      ]
    }
  }
});
