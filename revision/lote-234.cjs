const apply = require('./aplicar-lote.cjs');

const records = [
  [1486, [65], ['II-9', 'III-12'], ['PHP', 'CLI SAPI', 'línea de comandos', 'SAPI'], [
    {url: 'https://www.php.net/manual/en/features.commandline.php', referencia: 'PHP Manual, Command line usage: el CLI SAPI está diseñado para aplicaciones de shell; se distingue de CGI y otros SAPI.'},
    {url: 'https://www.php.net/manual/en/install.general.php', referencia: 'PHP Manual, General installation considerations: PHP contempla scripting de servidor web y scripting de línea de comandos.'}
  ], null, 'La respuesta correcta es el CLI SAPI (Server Application Programming Interface), que permite ejecutar scripts PHP desde la línea de comandos. Se corrige la expansión errónea «interfaz de programación de aplicaciones de servidor»: SAPI significa interfaz de programación de aplicaciones de servidor y CLI identifica su implementación de línea de comandos; CLI no es una interfaz API distinta. Las opciones que afirmaban que PHP se distribuye bajo GPLv3, que toda aplicación debe compilarse previamente a bytecode o que PHP 6 es su última versión son falsas. Cotejo curricular con ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026.1 (31-08-2026), y bloque 33 E-learning y GIS, versión 2026.1 (31-07-2026), solo como marco de desarrollo/scripting; temas oficiales A1-65/A2-II-9/A2-III-12.', 'corregida'],
  [1487, [69], ['II-14'], ['GNU', 'GPL', 'licencias', 'copyleft', 'software libre'], [
    {url: 'https://www.gnu.org/licenses/gpl-faq.en.html#DoesAllGNUSoftwareUseTheGNUGPL', referencia: 'GNU GPL FAQ, «Does all GNU software use the GNU GPL?»: la mayoría de los paquetes GNU usa GPL, pero algunos programas o partes usan licencias más laxas como LGPL.'},
    {url: 'https://www.gnu.org/prep/maintain/html_node/Licensing-of-GNU-Packages.html', referencia: 'GNU maintainer manual, Licensing of GNU Packages: explica la política general de licencias para paquetes GNU y excepciones para bibliotecas.'}
  ], null, 'Se precisa el alcance. GNU GPL es la licencia copyleft característica y la utilizada por la mayoría del software GNU, pero no es correcto afirmar que todo el software del proyecto GNU se distribuye bajo GPL: ciertos programas, bibliotecas o componentes usan LGPL u otras licencias. El enunciado se ajusta a «la mayoría de los programas GNU», por lo que GPL es la opción única. La versión concreta depende del paquete y de su aviso de licencia. Cotejo curricular con ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026.1 (31-08-2026), y bloque 33 E-learning y GIS, versión 2026.1 (31-07-2026), como contexto de software y tecnologías digitales; correspondencia oficial A1-69 (software libre) y A2-II-14 (software libre, propietario y licencias).', 'corregida'],
  [1488, [71], ['III-15'], ['ciencia de datos', 'data squashing', 'resumen de datos', 'compresión con pérdida', 'datasets'], [
    {url: 'https://www.cs.princeton.edu/courses/archive/spr04/cos598B/bib/DuMouchel.pdf', referencia: 'William DuMouchel, Data Squashing: Constructing Summary Data Sets: define la construcción de un conjunto sustituto más pequeño que conserva aproximadamente los resultados del análisis estadístico del conjunto grande; es una compresión con pérdida orientada a preservar información estadística.'},
    {url: 'https://doi.org/10.1007/978-3-642-33486-3_8', referencia: 'Fister et al., Data Squashing as Preprocessing in Association Rule Mining, capítulo de investigación sobre reducción de conjuntos de datos conservando resultados analíticos aproximados.'}
  ], null, '«Data squashing» es una técnica específica de resumen/reducción de datos: construye un conjunto menor que intenta conservar aproximadamente la información estadística y los resultados analíticos del conjunto grande. No es el nombre genérico de cualquier partición, muestreo, limpieza o rastreo de datos. Se reescribe el enunciado para reflejar esa definición técnica y evitar que «crear sets más pequeños» abarque técnicas distintas. Cotejo curricular con ITIC Academy, bloque 32 Inteligencia Artificial y Ciencia de Datos, versión 2026 (actualizado el 19-10-2026), y bloque 34 Business Intelligence y Big Data, versión 2026 (20-09-2026); temas oficiales A1-71/A2-III-15.', 'corregida'],
  [1489, [71], ['II-4'], ['visualización de datos', 'Data Visualization Developer', 'dashboards', 'analítica', 'roles profesionales'], [
    {url: 'https://www.snowflake.com/en/analytics/business-intelligence/roles/', referencia: 'Snowflake, Analytics and BI Roles: describe el foco de un data visualization developer en la presentación y usabilidad de dashboards y analítica visual interactiva; la nomenclatura de puestos varía entre organizaciones.'}
  ], null, 'El título «Data Visualization Developer» no es una categoría profesional normalizada y la descripción original era demasiado amplia: elaborar informes operativos también puede corresponder a analistas, desarrolladores BI o report developers. Se reformula para preguntar por la función más característica del puesto: desarrollar la presentación y usabilidad de cuadros de mando y visualizaciones analíticas interactivas. La fuente se usa como ejemplo de taxonomía empresarial, no como estándar universal. Cotejo curricular con ITIC Academy, bloque 34 Business Intelligence y Big Data, versión 2026 (20-09-2026), y bloque 32 Inteligencia Artificial y Ciencia de Datos, versión 2026 (actualizado el 19-10-2026); temas oficiales A1-71/A2-II-4.', 'corregida'],
  [1490, [73], ['III-6'], ['SCORM', 'ADL', 'SCORM 2004 4th Edition', 'xAPI', 'Tin Can API', 'e-learning'], [
    {url: 'https://adlnet.gov/assets/uploads/ChoosingAuthoringTools.pdf', referencia: 'ADL Instructional Design Team, Choosing Authoring Tools, §4.10.1.3: enumera SCORM 2004 4th Edition como versión actual dentro de las cinco versiones SCORM y explica la dependencia de la conformidad del LMS/curso.'},
    {url: 'https://www.adlnet.gov/assets/uploads/SCORM_Users_Guide_for_Programmers.pdf', referencia: 'ADL, SCORM Best Practices Guide for Programmers, recursos de SCORM 2004 4th Edition y arquitectura de sus libros CAM, RTE y Sequencing and Navigation.'},
    {url: 'https://www.adlnet.gov/executive-summary/', referencia: 'ADL Initiative, resumen de Total Learning Architecture: xAPI fue desarrollado por ADL en 2012 como especificación para registrar actividad de aprendizaje; se presenta como iniciativa/especificación posterior, no como una revisión de SCORM.'}
  ], null, 'SCORM significa Shareable Content Object Reference Model y su cuarta edición de SCORM 2004 es la revisión más reciente de SCORM citada por ADL. xAPI (inicialmente conocida como Tin Can API) es una especificación posterior y distinta para registrar experiencias de aprendizaje; no sustituyó formalmente a SCORM como una nueva versión de este. También se corrige la atribución institucional: ADL es una iniciativa del Departamento de Defensa de EE. UU., no del Departamento de Educación ni de la Casa Blanca. La respuesta «SCORM 2004, 4.ª edición» queda como correcta entre las opciones. Cotejo curricular con ITIC Academy, bloque 33 E-learning y GIS, versión 2026.1 (31-07-2026), §1.8 sobre estándares; temas oficiales A1-73/A2-III-6.', 'vigente']
];

const edits = {
  1486: {
    texto: '¿Qué afirmación sobre PHP es correcta?',
    opciones: [
      'El proyecto PHP distribuye el lenguaje bajo la GNU GPL versión 3.',
      'Toda aplicación PHP web debe compilarse a bytecode antes de desplegarse.',
      'PHP dispone de un SAPI CLI que permite ejecutar scripts desde la línea de comandos.',
      'PHP 6 es la última versión publicada del lenguaje.'
    ],
    respuesta_correcta: 2
  },
  1487: {
    texto: '¿Qué licencia copyleft utiliza la mayoría de los programas del proyecto GNU?',
    opciones: ['Mozilla Public License (MPL).', 'Licencia BSD.', 'GNU General Public License (GNU GPL).', 'Public Project License (PPL).']
  },
  1488: {
    texto: 'En ciencia de datos, ¿qué describe específicamente la técnica denominada «data squashing»?',
    opciones: [
      'Construir un conjunto de datos más pequeño que conserve aproximadamente la información estadística relevante del conjunto original.',
      'Eliminar sistemáticamente filas incompletas durante la limpieza de datos.',
      'Recopilar páginas web mediante rastreadores automáticos.',
      'Dividir una tabla en particiones para distribuirla entre varios servidores.'
    ],
    respuesta_correcta: 0
  },
  1489: {
    texto: '¿Qué función caracteriza mejor a un Data Visualization Developer en una taxonomía habitual de puestos de analítica?',
    opciones: [
      'Auditar la calidad de cada transacción de una base de datos OLTP.',
      'Diseñar y desarrollar la presentación y usabilidad de cuadros de mando y visualizaciones analíticas interactivas.',
      'Administrar exclusivamente clústeres de almacenamiento distribuido.',
      'Aprobar la estrategia corporativa de gobierno del dato.'
    ],
    respuesta_correcta: 1
  },
  1490: {
    texto: '¿Qué afirmación sobre SCORM y las especificaciones de aprendizaje digital es correcta?',
    opciones: [
      'SCORM significa «Shareable Course Object Reference Model».',
      'La iniciativa ADL pertenece al Departamento de Educación de Estados Unidos.',
      'SCORM 2004, 4.ª edición, es la edición más reciente de la especificación SCORM.',
      'xAPI es una edición de SCORM que sustituyó a SCORM 2004.'
    ],
    respuesta_correcta: 2
  }
};

apply({numero: '234', fecha: '2026-10-25', records, edits});
