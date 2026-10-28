const aplicar = require('./aplicar-lote.cjs');

const records = [
  [2206, [63], ['II-5'], ['SGBD', 'base de datos orientada a objetos', 'Versant', 'persistencia de objetos'], [
    { url: 'https://www.actian.com/wp-content/uploads/2023/12/DS22-Versant-Object-Database-0415.pdf', referencia: 'Actian, ficha de Versant Object Database: describe su base de datos orientada a objetos, persistencia y consultas de objetos.' }
  ], 'Actian, ficha de producto Versant Object Database', 'Versant es un gestor de base de datos orientada a objetos. SQL Server y MySQL son gestores relacionales; la clasificación se refiere al modelo de datos principal del producto.', 'vigente'],
  [2207, [8, 80], ['I-8', 'I-9'], ['Ley 39/2015', 'artículo 27', 'copia auténtica', 'documento electrónico'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565&lang=es', referencia: 'BOE, Ley 39/2015, artículo 27.3.a-d y 27.4: distingue copias electrónicas, copias en papel de documentos electrónicos, copias en papel de originales en papel y el derecho a solicitar copias auténticas.' }
  ], 'BOE, Ley 39/2015, artículo 27, texto consolidado', 'Se confirma la opción 4 (índice 3): el artículo 27.4 permite solicitar en cualquier momento la expedición de copias auténticas, con las excepciones y plazo previstos allí. Las otras opciones mezclan soportes: 27.3.a dice «condición de copia», no de original; la exigencia de código/verificación es para copias en papel de documentos electrónicos; y 27.3.d prevé copia auténtica en papel del documento electrónico en poder de la Administración o puesta de manifiesto electrónica del original en papel.', 'vigente'],
  [2208, [60], ['II-2'], ['Unix', 'Linux', 'permisos rwx', 'propietario grupo otros'], [
    { url: 'https://docs.oracle.com/cd/E19120-01/open.solaris/819-3321/secfile-18/index.html', referencia: 'Oracle Solaris System Administration Guide: los permisos de archivos/directorios se aplican por clases de usuario (propietario, grupo y otros), con diferencias entre el significado de r, w y x en archivos y directorios.' },
    { url: 'https://www.gnu.org/software/coreutils/manual/html_node/Mode-Structure.html', referencia: 'GNU Coreutils, Mode Structure: bits de modo, permisos de lectura/escritura/ejecución y categorías de propietario, grupo y demás usuarios.' }
  ], 'Oracle Solaris System Administration Guide; GNU Coreutils, Mode Structure', 'La clave original «directorios» no es correcta: los permisos tradicionales se asocian a cada archivo o directorio y se organizan por propietario, grupo y otros; no se implementan únicamente a nivel de directorio, microkernel o bibliotecas. Se reformula el enunciado para preguntar por las clases de usuarios y se corrige la respuesta.', 'corregida'],
  [2209, [43, 69], ['II-14'], ['EUPL', 'MPL 2.0', 'licencia compatible', 'software libre'], [
    { url: 'https://eupl.eu/1.2/es/', referencia: 'Texto oficial en español de EUPL 1.2, artículo 5 y apéndice: incluye expresamente Mozilla Public License versión 2 entre las licencias compatibles.' }
  ], 'European Union Public Licence (EUPL) 1.2, artículo 5 y apéndice', 'Se confirma MPL 2.0: aparece expresamente en el apéndice de licencias compatibles de EUPL 1.2. La compatibilidad opera bajo la cláusula y condiciones allí previstas; no significa que todas las licencias de las opciones sean compatibles ni que el documento académico sustituya al texto de licencia.', 'vigente'],
  [2210, [27, 82], ['I-7'], ['AEPD', 'Evalúa-Riesgo RGPD', 'EIPD', 'análisis de riesgos'], [
    { url: 'https://www.aepd.es/guias-y-herramientas/herramientas/evalua-riesgo-rgpd', referencia: 'AEPD, Evalúa-Riesgo RGPD v2: herramienta para análisis de necesidad de una EIPD, evaluación inicial de riesgos y estimación del riesgo residual.' },
    { url: 'https://www.aepd.es/guias-y-herramientas/herramientas', referencia: 'AEPD, catálogo oficial de herramientas: identifica Evalúa-Riesgo RGPD v2 como herramienta para analizar la necesidad de una Evaluación de Impacto en Protección de Datos.' }
  ], 'AEPD, herramienta Evalúa-Riesgo RGPD v2', 'Se confirma la opción Evalúa-Riesgo RGPD. La denominación vigente del recurso de la AEPD es Evalúa-Riesgo RGPD v2, y su propósito incluye una primera valoración sobre la necesidad de realizar una EIPD. Se actualiza el nombre mostrado para reflejar la herramienta vigente; no sustituye la valoración y responsabilidad del responsable del tratamiento.', 'corregida']
];

const edits = {
  2208: {
    texto: 'En el modelo tradicional de permisos UNIX, ¿qué grupos de usuarios se distinguen para asignar los permisos de lectura, escritura y ejecución?',
    opciones: ['Propietario, grupo y otros usuarios.', 'Librerías del sistema.', 'Microkernel y procesos del sistema.', 'Directorios, sin permisos asociados a cada archivo.'],
    respuesta_correcta: 0
  },
  2210: { opcion: [0, 'Evalúa-Riesgo RGPD v2.'], respuesta_correcta: 3 }
};

aplicar({ numero: '378', fecha: '2026-10-28', records, edits });
