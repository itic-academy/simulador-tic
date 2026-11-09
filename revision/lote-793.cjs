require('./aplicar-lote.cjs')({
  numero: '793',
  fecha: '2026-11-09',
  records: [
    [4286, [33], ['II-4'], ['cuadro de mando integral', 'KPI', 'control de gestión'], [
      { url: 'https://hbr.org/1992/01/the-balanced-scorecard-measures-that-drive-performance-2', referencia: 'Kaplan y Norton, Harvard Business Review (1992): el cuadro de mando combina medidas financieras y no financieras para seguir el desempeño y la estrategia.' },
      { url: 'https://balancedscorecard.org/staging/bsc-basics-overview/', referencia: 'Balanced Scorecard Institute: las medidas/KPI se seleccionan por objetivo estratégico y siguen su avance frente a metas.' },
      { url: 'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk', referencia: 'ITIC Academy 2026, Bloque 12, Dirección TIC y planificación estratégica; cotejo curricular del cuadro de mando.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria TIC AGE 2025, programa A1, tema 33: herramientas de planificación y control de gestión; el cuadro de mando.' }
    ], null, 'Se acota “preferentemente”: un cuadro de mando integral selecciona KPI alineados con objetivos y perspectivas de la organización. RPO/RTO o SLA pueden ser medidas pertinentes en ciertos objetivos (continuidad o servicios), pero no constituyen el contenido preferente universal de un CMI.', 'corregida'],
    [4287, [72], [], ['ERP', 'módulos', 'marketing', 'CRM'], [
      { url: 'https://drive.google.com/file/d/1lkbdZvGxPTwyjhiOf6VsglMWYe4RI6sL/view?usp=drivesdk', referencia: 'ITIC Academy, Tema 072 (2026), ERP y CRM: procesos y módulos ERP; distingue aplicaciones ERP y CRM complementarias.' },
      { url: 'https://www.sap.com/products/erp/what-is-erp.html', referencia: 'SAP, What is ERP?: enumera como procesos habituales finanzas, RR. HH., fabricación, cadena de suministro, ventas y compras; las extensiones pueden atender necesidades sectoriales.' },
      { url: 'https://www.oracle.com/erp/', referencia: 'Oracle Fusion Cloud ERP: módulos principales ERP de finanzas, compras, gestión de proyectos y rendimiento; sus catálogos separan CX/marketing como solución relacionada.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria TIC AGE 2025, programa A1, tema 72: sistemas CRM y ERP.' }
    ], null, 'Se delimita a los módulos transversales habituales del núcleo ERP. Finanzas, producción/fabricación y RR. HH. son áreas ERP comunes; marketing/publicidad suele formar parte de CRM/CX o de una solución integrada, pero no es un módulo nuclear universal. Los catálogos comerciales varían, por lo que no se afirma que ningún ERP pueda incorporar funciones de marketing.', 'corregida'],
    [4288, [72, 93], ['II-6'], ['ERP', 'arquitectura de tres capas', 'lógica de negocio'], [
      { url: 'https://learn.microsoft.com/en-us/windows/win32/cossdk/using-a-three-tier-architecture-model', referencia: 'Microsoft Learn, Three-Tier Architecture Model: la capa intermedia o de servicios de negocio contiene reglas y lógica de negocio.' },
      { url: 'https://download.oracle.com/otn_hosted_doc/jdeveloper/1012/bc4j/intro/bc_amultitier.html', referencia: 'Oracle JDeveloper, arquitectura multicapa: identifica una capa de negocio que contiene la lógica empresarial, junto con las capas cliente/presentación y datos.' },
      { url: 'https://www.sap.com/products/erp/what-is-erp.html', referencia: 'SAP, ERP: el sistema gestiona procesos empresariales centrales mediante módulos integrados; el enunciado se refiere a la capa lógica en el modelo didáctico de tres capas.' },
      { url: 'https://drive.google.com/file/d/1lkbdZvGxPTwyjhiOf6VsglMWYe4RI6sL/view?usp=drivesdk', referencia: 'ITIC Academy, Tema 072 (2026), ERP y procesos empresariales; cotejo curricular.' },
      { url: 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk', referencia: 'ITIC Academy, Bloque 38 (2026), análisis/diseño/construcción de sistemas; cotejo curricular de arquitectura y capas.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria TIC AGE 2025, programa A1, tema 72.' }
    ], null, 'El ERP como aplicación completa puede desplegar componentes en varias capas; por eso se sustituye la afirmación absoluta. En el modelo lógico de tres capas, la respuesta es la capa de lógica/servicios de negocio, donde residen las reglas de los procesos que automatiza el ERP. No implica que el producto carezca de capa de presentación o persistencia.', 'corregida'],
    [4289, [72], ['II-12'], ['ERP', 'CRM', 'integración', 'sistemas complementarios'], [
      { url: 'https://drive.google.com/file/d/1lkbdZvGxPTwyjhiOf6VsglMWYe4RI6sL/view?usp=drivesdk', referencia: 'ITIC Academy, Tema 072 (2026), test 4.1, pregunta 5: ERP y CRM se consideran complementarios, no equivalentes.' },
      { url: 'https://www.sap.com/products/erp/what-is-erp.html', referencia: 'SAP, ERP: las suites ERP deben sincronizarse e integrarse con aplicaciones como CRM y HCM; no presenta CRM como ajeno a toda integración ERP.' },
      { url: 'https://learn.microsoft.com/en-us/dynamics365/guidance/business-processes/prospect-to-quote-manage-customer-relationships', referencia: 'Microsoft Learn: CRM gestiona interacciones con clientes a través de ventas, servicio, marketing y operaciones.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria TIC AGE 2025, programa A1, tema 72.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria GSI AGE 2025, programa A2, tema II-12: atención a clientes y usuarios y CRM.' }
    ], null, 'La redacción original trataba CRM como módulo que nunca puede encontrarse dentro de ERP; es demasiado absoluta, porque algunas suites integran funciones CRM. Se pregunta ahora por la clasificación funcional: CRM es el sistema complementario orientado a las relaciones con clientes y puede integrarse con procesos ERP. Se conserva la opción CRM sin negar integraciones o módulos de producto.', 'corregida'],
    [4290, [72], ['II-12'], ['CRM', 'relaciones con clientes'], [
      { url: 'https://learn.microsoft.com/en-us/dynamics365/guidance/business-processes/glossary', referencia: 'Microsoft Learn, glosario Dynamics 365: CRM es el sistema/proceso de gestión de interacciones con leads, prospectos y clientes a lo largo del ciclo de relación.' },
      { url: 'https://www.salesforce.com/crm/what-is-crm/', referencia: 'Salesforce, What is CRM?: gestión de relaciones e interacciones con clientes actuales y potenciales.' },
      { url: 'https://drive.google.com/file/d/1lkbdZvGxPTwyjhiOf6VsglMWYe4RI6sL/view?usp=drivesdk', referencia: 'ITIC Academy, Tema 072 (2026), definición y tipos de CRM.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria TIC AGE 2025, programa A1, tema 72.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria GSI AGE 2025, programa A2, tema II-12.' }
    ], null, 'CRM gestiona la relación e interacciones con clientes actuales y potenciales. La planificación de recursos internos corresponde a ERP y la cartera de proyectos a herramientas de gestión de proyectos; A es la única respuesta correcta.', 'vigente']
  ],
  edits: {
    4286: {
      texto: 'En un cuadro de mando integral, ¿qué tipo de medidas se selecciona en función de los objetivos estratégicos para seguir su avance?',
      opcion: [0, 'Deben incluir exclusivamente los parámetros RPO y RTO del plan de continuidad de negocio.']
    },
    4287: {
      texto: 'En la clasificación habitual de módulos transversales del núcleo de un ERP, ¿cuál no es un módulo común, aunque pueda integrarse como solución relacionada?',
      opcion: [2, 'Módulo de marketing/publicidad (habitualmente asociado a CRM/CX, no al núcleo transversal ERP).']
    },
    4288: { texto: 'En una arquitectura lógica de tres capas, ¿en cuál se implementa principalmente la lógica de los procesos empresariales que automatiza un ERP?' },
    4289: { texto: 'En una clasificación funcional de sistemas empresariales, ¿cuál es complementario al ERP porque se centra en las relaciones con clientes y puede integrarse con él?' }
  }
});
