require('./aplicar-lote.cjs')({
  numero: '792',
  fecha: '2026-11-09',
  records: [
    [4281, [72], ['II-12'], ['CRM', 'CRM operacional', 'back-office'], [
      { url: 'https://drive.google.com/file/d/1lkbdZvGxPTwyjhiOf6VsglMWYe4RI6sL/view?usp=drivesdk', referencia: 'ITIC Academy, Tema 072 (2026), apartado de tipos de CRM: el operacional integra ventas/marketing/atención con herramientas de back-office.' },
      { url: 'https://learn.microsoft.com/en-us/dynamics365/sales/relationship-analytics-overview', referencia: 'Microsoft Learn, Relationship analytics and KPIs overview: las funciones analíticas explotan el historial de interacciones para indicadores y decisiones.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria TIC AGE 2025, programa A1, tema 72: sistemas CRM y ERP.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria GSI AGE 2025, programa A2, tema II-12: atención a clientes y usuarios, centros de contacto y CRM.' }
    ], null, 'Academy 2026 y documentación de producto distinguen CRM operacional (apoyo e integración de procesos de relación y atención) del analítico (información para conocimiento/decisiones) y colaborativo (canales e intercambio). B es la única afirmación correcta; la palabra “integrar” debe entenderse como soporte e integración operativa con back-office, no como que CRM sustituya al ERP.', 'vigente'],
    [4282, [72], ['II-12'], ['CRM', 'CRM ciudadano', 'administración electrónica', 'protección de datos'], [
      { url: 'https://drive.google.com/file/d/1lkbdZvGxPTwyjhiOf6VsglMWYe4RI6sL/view?usp=drivesdk', referencia: 'ITIC Academy, Tema 072 (2026), CRM y aplicaciones en el sector público: gestión de contactos e interacciones para prestar servicios.' },
      { url: 'https://learn.microsoft.com/en-us/dynamics365/sales/relationship-analytics-overview', referencia: 'Microsoft Learn: CRM puede organizar interacciones con contactos y cuentas y producir indicadores a partir de interacciones configuradas.' },
      { url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj/spa', referencia: 'Reglamento (UE) 2016/679, artículo 5: limitación de finalidad y minimización de datos, aplicables al tratamiento de datos personales.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria TIC AGE 2025, programa A1, tema 72.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria GSI AGE 2025, programa A2, tema II-12.' }
    ], null, 'Se retira “anotando todas las relaciones establecidas” y “configurar su personalidad administrativa digital”: son expresiones imprecisas y podrían sugerir una recopilación indiscriminada. CRM es la opción adecuada para gestionar los datos de contacto y las interacciones necesarias para la atención ciudadana, sujeto a finalidad, base jurídica, transparencia y minimización. No se afirma que una plataforma deba registrar todas las interacciones de una persona.', 'corregida'],
    [4283, [72], [], ['ERP', 'modularidad', 'ERP horizontal', 'ERP vertical'], [
      { url: 'https://drive.google.com/file/d/1lkbdZvGxPTwyjhiOf6VsglMWYe4RI6sL/view?usp=drivesdk', referencia: 'ITIC Academy, Tema 072 (2026), ERP: módulos, procesos comunes y diferencias entre soluciones horizontales y verticales.' },
      { url: 'https://www.sap.com/products/erp/what-is-erp.html', referencia: 'SAP, What is ERP?: módulos integrados y posibilidad de incorporar extensiones para requisitos específicos de sector.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria TIC AGE 2025, programa A1, tema 72.' }
    ], null, 'Se acota la opción C: una base ERP horizontal puede servir a organizaciones de distintos sectores en procesos comunes, pero no se presupone que la misma configuración o módulos cubran todas las necesidades sectoriales. Un ERP puede implantarse modularmente; la duplicación no es requisito de integración, y existen herramientas de personalización/desarrollo. El epígrafe ERP figura en A1-72; no se asigna tema A2 específico porque II-12 trata CRM y atención, no ERP.', 'corregida'],
    [4284, [72], [], ['ERP', 'software libre', 'Compiere', 'histórica'], [
      { url: 'https://www.compiere.com/products/download/download-thanks.php', referencia: 'Compiere, descarga de Community Edition: la identifica expresamente como solución ERP de código abierto.' },
      { url: 'https://www.compiere.com/services/support-programs.php', referencia: 'Compiere, support programs/licensing: Community Edition distribuida bajo GPLv2; también existieron ediciones/licencias comerciales.' },
      { url: 'https://sourceforge.net/projects/compiere/', referencia: 'Ficha del proyecto Compiere ERP+CRM: distribución GPLv2 y última actualización del proyecto indicada en 2016, evidencia de que es una referencia histórica.' },
      { url: 'https://drive.google.com/file/d/1lkbdZvGxPTwyjhiOf6VsglMWYe4RI6sL/view?usp=drivesdk', referencia: 'ITIC Academy, Tema 072 (2026), panorama actual de ERP: incluye Odoo Community entre los ejemplos actuales; no presenta Compiere como recomendación vigente.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria TIC AGE 2025, programa A1, tema 72.' }
    ], null, 'La clave Compiere se conserva solo como conocimiento histórico: su Community Edition se ofreció bajo GPLv2, pero el proyecto y su ficha de SourceForge llevan años sin actualización. Se cambia el enunciado para no presentarlo como la opción libre actual. El material Academy 2026 cita soluciones contemporáneas, entre ellas Odoo Community; eso no convierte por sí solo a una herramienta en recomendación universal.', 'historica'],
    [4285, [72], ['II-12'], ['CRM', 'CRM analítico', 'inteligencia de negocio', 'informes'], [
      { url: 'https://drive.google.com/file/d/1lkbdZvGxPTwyjhiOf6VsglMWYe4RI6sL/view?usp=drivesdk', referencia: 'ITIC Academy, Tema 072 (2026), §4 y test: CRM analítico, explotación de información y reporting; la pregunta de test equivalente se resuelve como CRM analítico.' },
      { url: 'https://learn.microsoft.com/en-us/dynamics365/sales/relationship-analytics-overview', referencia: 'Microsoft Learn, analítica de relaciones e indicadores generados a partir del historial de interacciones para apoyar decisiones.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria TIC AGE 2025, programa A1, tema 72.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria GSI AGE 2025, programa A2, tema II-12.' }
    ], null, 'Se formula como pregunta directa sobre la tipología. El CRM analítico integra, procesa y explota datos de relación para informes, indicadores y apoyo a la decisión; operacional automatiza procesos cotidianos y colaborativo facilita canales e intercambio. La respuesta A se confirma también en el test de Academy 2026, Tema 072, preguntas 6–7.', 'corregida']
  ],
  edits: {
    4282: { texto: '¿Qué tipo de sistema ayuda a una administración pública a gestionar la información de contacto y las interacciones necesarias para prestar servicios a la ciudadanía?' },
    4283: { opcion: [2, 'Una solución ERP horizontal puede cubrir procesos comunes de organizaciones de distintos sectores, aunque las particularidades de cada sector pueden requerir configuración o extensiones.'] },
    4284: { texto: 'Como referencia histórica, ¿qué herramienta ERP ofreció una Community Edition de código abierto?' },
    4285: { texto: '¿Qué tipo de CRM se orienta al conocimiento y a la toma de decisiones mediante el almacenamiento, procesamiento y explotación de información, por ejemplo, con informes?' }
  }
});
