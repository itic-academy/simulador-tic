const apply = require('./aplicar-lote.cjs');

const sources = {
  dir3: [
    {
      url: 'https://administracionelectronica.gob.es/ctt/dir3/infoadicional',
      referencia: 'Portal de Administración Electrónica, servicio DIR3: directorio con codificación única y estructura jerárquica, actualizado de forma corresponsable por las Administraciones participantes.'
    }
  ],
  cloud: [
    {
      url: 'https://csrc.nist.gov/pubs/sp/500/325/final',
      referencia: 'NIST SP 500-325, Fog Computing Conceptual Model: sitúa los nodos fog entre la capa edge con dispositivos finales y los recursos de computación centralizados en la nube.'
    },
    {
      url: 'https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=934390',
      referencia: 'NIST-hosted IEEE Cloud Continuum: caracteriza el cloud/core/center como instalaciones consolidadas y el edge cerca de las fuentes de datos; reconoce que el despliegue real puede variar a lo largo del continuo.'
    }
  ],
  driver: [
    {
      url: 'https://learn.microsoft.com/en-us/windows-hardware/drivers/gettingstarted/what-is-a-driver-',
      referencia: 'Microsoft Learn, What is a driver?: un controlador es un componente software que permite la comunicación entre el sistema operativo y un dispositivo.'
    }
  ],
  firefox: [
    {
      url: 'https://wiki.mozilla.org/Gaia',
      referencia: 'MozillaWiki, Gaia: conjunto de aplicaciones web que forman el frontend de Firefox OS.'
    },
    {
      url: 'https://blog.mozilla.org/press-uk/2016/02/05/update-on-firefox-os-smartphones-and-next-steps-for-connected-devices/',
      referencia: 'Mozilla Press Centre, 5 de febrero de 2016: anunció el plan de fin de vida del proyecto de smartphones Firefox OS tras la versión 2.6; se mantiene solo como arquitectura histórica.'
    }
  ],
  codd: [
    {
      url: 'https://doi.org/10.1145/362384.362685',
      referencia: 'E. F. Codd, A Relational Model of Data for Large Shared Data Banks, Communications of the ACM 13(6), 1970: persigue que usuarios y programas no dependan de la representación y organización interna de los datos en máquina.'
    }
  ]
};

apply({
  numero: '1407',
  fecha: '2026-11-15',
  records: [
    [7336, [49], ['I-10'], ['DIR3', 'directorio común', 'codificación única'], sources.dir3, {}, 'DIR3 es el Directorio Común de Unidades Orgánicas y Oficinas, con códigos únicos y mantenimiento corresponsable por las Administraciones participantes. La opción A expresa la función y el modelo de actualización confirmados en la ficha oficial del servicio. Se mantiene la clave.', 'vigente'],
    [7337, [55], ['II-1'], ['cloud computing', 'fog', 'edge', 'continuo cloud-edge'], sources.cloud, {
      texto: 'En el continuo cloud–fog–edge, ¿qué nivel suele procesar datos en centros centralizados, más alejados de los dispositivos que los generan?',
      opciones: [
        'Device computing, en el propio dispositivo.',
        'Edge computing, cerca del origen de los datos.',
        'Fog computing, en nodos intermedios entre el edge y la nube.',
        'Cloud computing, en centros de datos centralizados.'
      ],
      respuesta_correcta: 3
    }, 'Corregida D. La formulación inicial “el punto más lejano” era absoluta: el procesamiento puede distribuirse en distintos puntos del continuo y la nube no siempre está geográficamente más lejos. Se pregunta ahora por el nivel que normalmente representa los centros de datos centralizados, frente a device/edge locales y fog intermedio.', 'corregida'],
    [7338, [59], ['II-2'], ['sistema operativo', 'controlador de dispositivo', 'driver'], sources.driver, {
      texto: 'En un sistema operativo, ¿qué es un controlador de dispositivo (device driver)?',
      opciones: [
        'Un programa de usuario final que gestiona documentos.',
        'El propio hardware que controla eléctricamente el periférico.',
        'Un componente de software que permite al sistema operativo comunicarse con un dispositivo.',
        'Cualquier aplicación que use los datos del periférico, aunque no gestione la comunicación.'
      ],
      respuesta_correcta: 2
    }, 'Corregida C. Se sustituye “manejador” por el término técnico habitual “controlador de dispositivo” y se diferencia el software driver del controlador hardware del periférico y de una aplicación de usuario.', 'corregida'],
    [7339, [62], ['II-2'], ['Firefox OS', 'Gaia', 'arquitectura histórica'], sources.firefox, {
      texto: 'En la arquitectura histórica del sistema operativo móvil Firefox OS, ¿cómo se llamaba la capa de interfaz de usuario?',
      opciones: ['Gonk.', 'Gamma.', 'Gecko.', 'Gaia.'],
      respuesta_correcta: 3
    }, 'Histórica D. Gaia fue la capa de interfaz de Firefox OS; Gonk proporcionaba la base Linux/HAL y Gecko el motor web y runtime. Mozilla cerró el proyecto de smartphones Firefox OS en 2016; se conserva la pregunta solo como conocimiento histórico.', 'historica'],
    [7340, [63], ['II-5'], ['Codd', 'modelo relacional', 'independencia de datos'], sources.codd, {
      texto: 'Según la motivación de Codd para el modelo relacional, ¿qué dependencia debía reducirse al separar los programas de la representación y organización interna de los datos?',
      opciones: [
        'La dependencia de las aplicaciones respecto de la representación física interna de los datos.',
        'La posibilidad de consultar los datos mediante un lenguaje de alto nivel.',
        'La necesidad de representar las relaciones mediante tablas.',
        'La separación entre los programas de aplicación y los datos almacenados.'
      ],
      respuesta_correcta: 0
    }, 'Corregida A. La lista original atribuía a Codd un resumen amplio de objetivos (independencia física y lógica, flexibilidad, uniformidad y sencillez) sin identificar una fuente ni delimitar el sentido. Se formula el objetivo directamente documentado en el artículo de 1970: proteger a los usuarios y programas de conocer la representación y organización internas de los datos.', 'corregida']
  ]
});
