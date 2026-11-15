const apply = require('./aplicar-lote.cjs');

const sources = {
  oasis: [{
    url: 'https://docs.oasis-open.org/wsbpel/2.0/OS/wsbpel-v2.0-OS.html',
    referencia: 'OASIS, Web Services Business Process Execution Language Version 2.0, OASIS Standard, 11-04-2007. La portada identifica el estándar aprobado por OASIS y el texto define WS-BPEL como lenguaje XML para especificar procesos de negocio ejecutables y abstractos.'
  }],
  metrica: [
    {
      url: 'https://administracionelectronica.gob.es/documentacion/metodologias-guias',
      referencia: 'Portal de Administración electrónica (PAe), catálogo oficial de Metodologías y Guías: identifica MÉTRICA v.3 (2001) como metodología publicada para sistematizar actividades del ciclo de vida del software.'
    },
    {
      url: 'https://www.academia.edu/10852911/METRICA_V3_Participantes_1',
      referencia: 'MÉTRICA v.3, documento Participantes, reproducción del manual del Ministerio de Administraciones Públicas: enumera como perfiles principales Directivo, Jefe de Proyecto, Consultor, Analista y Programador; incluye Técnico de Sistemas y Técnico de Comunicaciones dentro del perfil Consultor.'
    },
    {
      url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A7f366cd1-6759-42d9-9e0b-31edce0256d9/METRICA_V3_Diseno_del_Sistema_de_Informacion.pdf',
      referencia: 'PAe, MÉTRICA v.3, Diseño del Sistema de Información: documento oficial del proceso DSI, fuente primaria para el contexto de análisis estructurado y diseño.'
    }
  ],
  itil: [{
    url: 'https://www.peoplecert.org/news-and-announcements/2024/-/media/2048efb812304872960038ec981a791a.ashx',
    referencia: 'PeopleCert, infografía oficial ITIL 4 Guiding Principles: enumera “Progress iteratively with feedback” entre los siete principios guía.'
  }],
  ftps: [
    {
      url: 'https://www.rfc-editor.org/rfc/rfc4217.html',
      referencia: 'IETF RFC 4217, Securing FTP with TLS: describe la conexión persistente de control y la conexión separada de datos; AUTH negocia TLS para control y PROT determina por separado si el canal de datos va en claro o protegido. La consideración IANA conserva el puerto de control FTP 21.'
    },
    {
      url: 'https://learn.microsoft.com/en-us/iis/configuration/system.applicationHost/sites/site/ftpServer/security/ssl',
      referencia: 'Microsoft Learn, configuración SSL de FTP en IIS: distingue la exigencia de SSL para el canal de control y para el de datos; permite contrastar que la protección de ambos canales no es inherente ni siempre obligatoria.'
    }
  ]
};

apply({
  numero: '1410',
  fecha: '2026-11-15',
  records: [
    [7351, [50, 65, 77], ['II-6', 'II-9', 'III-12'], ['BPEL', 'WS-BPEL', 'OASIS', 'estandarización', 'orquestación', 'XML', 'servicios web'], sources.oasis, {
      texto: '¿Qué organización publicó WS-BPEL 2.0 como estándar para describir procesos de negocio basados en servicios web?',
      opciones: ['Business Process Management Initiative (BPMI).', 'Workflow Management Coalition (WfMC).', 'OASIS.', 'Object Management Group (OMG).'],
      respuesta_correcta: 2
    }, 'Corregida C. Se concreta que la pregunta trata de WS-BPEL 2.0: el documento normativo primario lo identifica como OASIS Standard (11-04-2007) y describe el lenguaje XML para procesos de negocio ejecutables o abstractos. OASIS es, por tanto, la organización que estandarizó esta versión; no se confunde el desarrollo original de BPEL4WS con la publicación del estándar WS-BPEL 2.0.', 'corregida'],
    [7352, [35, 95], ['III-2'], ['MÉTRICA v3', 'perfiles', 'participantes', 'Consultor', 'Técnico'], sources.metrica, {
      texto: 'En la Guía de Participantes de MÉTRICA v3, ¿cuál de estas opciones NO es uno de los cinco perfiles principales? (La guía puede enumerar especialidades técnicas como participantes dentro de otro perfil.)',
      opciones: ['Directivo.', 'Consultor.', 'Técnico.', 'Programador.'],
      respuesta_correcta: 2
    }, 'Corregida C. Los perfiles principales de MÉTRICA v3 son Directivo, Jefe de Proyecto, Consultor, Analista y Programador. “Técnico” no es un perfil principal autónomo, aunque Técnico de Sistemas y Técnico de Comunicaciones figuran como participantes dentro del perfil Consultor. La precisión evita interpretar “no incluido” como que no exista ninguna función técnica en la metodología.', 'corregida'],
    [7353, [88, 95], ['III-2', 'III-3'], ['MÉTRICA v3', 'DFD', 'análisis de transformación', 'análisis de transacción', 'diseño estructurado'], sources.metrica, {
      texto: 'En las técnicas de MÉTRICA v3 para derivar el diagrama de estructura a partir de un DFD, ¿qué distingue el análisis de transformación del análisis de transacción?',
      opciones: [
        'No existe diferencia: ambos nombres designan la misma estrategia aplicada a DFD.',
        'El de transformación identifica un flujo de entrada, un centro de transformación y un flujo de salida; el de transacción identifica un centro que selecciona una de varias ramas según la transacción o flujo de llegada.',
        'El de transacción identifica el flujo de entrada, el centro de transformación y el flujo de salida; el de transformación selecciona ramas según el flujo de llegada.',
        'El de transacción se ocupa solo de los resultados y el de transformación solo de documentar los cambios.'
      ],
      respuesta_correcta: 1
    }, 'Corregida B. Se reemplaza la imprecisa afirmación de que el centro de transformación actúa “independientemente de la entrada y la salida”. En análisis de transformación se reconoce la secuencia entrada–centro de transformación–salida para derivar módulos; en análisis de transacción, un centro dirige el flujo a una de varias ramas según el tipo de transacción/evento. La clave B expresa la distinción estructural.', 'corregida'],
    [7354, [37, 88, 106], ['III-2'], ['ITIL 4', 'principios guía', 'desarrollo iterativo', 'retroalimentación', 'MVP'], sources.itil, {
      texto: 'En un desarrollo ágil, el equipo entrega el producto en incrementos pequeños, comprueba el resultado de cada iteración y ajusta el trabajo con la retroalimentación obtenida. ¿Qué principio guía de ITIL 4 aplica?',
      opciones: ['Colaborar y promover la visibilidad.', 'Pensar y trabajar holísticamente.', 'Progresar iterativamente con retroalimentación.', 'Mantenerlo simple y práctico.'],
      respuesta_correcta: 2
    }, 'Corregida C. El principio se denomina “Progresar iterativamente con retroalimentación”: el equipo entrega trabajo en piezas pequeñas y gestionables y usa la retroalimentación para ajustar el siguiente paso. Se elimina la referencia aislada al producto mínimo viable, que no define por sí sola el principio ni equivale a que cada iteración deba producir un MVP.', 'corregida'],
    [7355, [108, 109], ['IV-12', 'IV-13'], ['FTPS', 'FTP', 'TLS', 'canal de control', 'canal de datos', 'seguridad de redes'], sources.ftps, {
      texto: '¿Qué afirmación describe correctamente FTPS (FTP protegido mediante TLS)?',
      opciones: [
        'Mantiene conexiones separadas de control y de datos, y la protección TLS de cada canal puede negociarse/configurarse por separado.',
        'Es SFTP y transfiere ficheros mediante SSH por el puerto 22.',
        'Toda conexión FTPS explícita debe iniciar directamente en TCP 990.',
        'La especificación obliga siempre a cifrar tanto el canal de control como el de datos.'
      ],
      respuesta_correcta: 0
    }, 'Corregida A. FTPS conserva el modelo FTP de conexión de control y conexión de datos separadas. RFC 4217 define AUTH para negociar TLS en el canal de control y PROT para seleccionar el nivel de protección del canal de datos; PROT C permite datos sin TLS y PROT P solicita TLS. El puerto de control FTP indicado por IANA es 21; el puerto 22 corresponde a SSH/SFTP, y el inicio implícito en 990 no debe confundirse con FTPS explícito.', 'corregida']
  ]
});
