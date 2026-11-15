const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
apply({numero:'1293',fecha:'2026-11-15',records:[
  [6786,[103],[],['ciclo PDCA','ciclo de Deming','mejora continua','planificar','hacer','verificar','actuar'],[
    src('https://asq.org/quality-resources/pdca-cycle/','ASQ Quality Resources, PDCA Cycle: define las cuatro fases como Plan, Do, Check y Act; Check consiste en revisar resultados y extraer aprendizaje.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 103: calidad en servicios de información, Modelo EFQM y guía ISO 9004.'),
    src('https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk','ITIC Academy, bloque 39, Calidad y Mantenimiento, edición 2026: cotejo del ámbito de calidad de servicios y mejora continua; el ciclo PDCA se verifica con ASQ.')
  ],{texto:'En el ciclo PDCA (o ciclo de Deming), ¿cuál es la secuencia de sus cuatro fases?',opciones:[
    'Planificar, medir, monitorizar e informar.','Planificar, revisar, reaccionar e implementar.','Planificar, hacer, actuar y auditar.','Planificar, hacer, verificar (revisar resultados) y actuar.'
  ],respuesta_correcta:3},'Se conserva D. «Revisar» se concreta como verificar resultados (Check); las cuatro fases estándar son Plan, Do, Check y Act. La fuente educativa de calidad ASQ respalda esta secuencia.','corregida'],

  [6787,[108],[ 'IV-16'],['tráfico telefónico','hora cargada','Erlang','intensidad de tráfico','ocupación media'],[
    src('https://www.itu.int/rec/T-REC-E.600/en','ITU-T Recommendation E.600, Terms and definitions of traffic engineering: la intensidad media es el promedio temporal del número de recursos ocupados; su unidad es el Erlang y 1 E equivale a un recurso continuamente ocupado.'),
    src('https://www.itu.int/rec/T-REC-E.500/en','ITU-T Recommendation E.500, Traffic intensity measurement principles: define los principios de medición de la intensidad de tráfico en circuitos.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 108: redes de telecomunicaciones, tráfico y calidad de servicio.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema IV.16: dimensionamiento y calidad de servicio en comunicaciones.'),
    src('https://drive.google.com/file/d/1U-Iu2ye08XugMEaUfHNmUcWd5oBlGJxw/view?usp=drivesdk','ITIC Academy, bloques 130, 131 y 133 (2026): cotejo del tráfico y dimensionamiento de comunicaciones; fórmula y unidad se verifican en ITU-T E.600/E.500.')
  ],{texto:'Durante la hora cargada de una hora, cada uno de 50 circuitos presenta, en promedio, 30 minutos de ocupación efectiva. ¿Qué intensidad media de tráfico cursado representan, en Erlangs?',opciones:[
    '50 E.','25 E.','0,5 E.','45 E.'
  ],respuesta_correcta:1},'Se conserva B. La intensidad media es la suma de tiempos de ocupación dividida por la duración del intervalo: 50 × 0,5 h / 1 h = 25 E. Se elimina el dato original de probabilidad de bloqueo del 10 %, que no permite deducir el tráfico cursado con este cálculo y podía cambiar la interpretación entre tráfico ofrecido y cursado.','corregida'],

  [6788,[61],[ 'II-2','IV-1'],['WSUS','Windows Server Update Services','gestión de actualizaciones','aprobación de parches','Windows'],[
    src('https://learn.microsoft.com/en-us/windows-server/administration/windows-server-update-services/manage/updates-operations','Microsoft Learn, Updates Operations (WSUS): sincroniza actualizaciones y permite aprobarlas o rechazarlas por grupos de equipos y programar su instalación.'),
    src('https://learn.microsoft.com/en-gb/windows/deployment/update/waas-manage-updates-wsus','Microsoft Learn, Deploy updates using WSUS: describe descarga, aprobación y despliegue centralizado de actualizaciones Windows y advierte que WSUS está obsoleto para nuevas funciones, aunque sigue soportado para despliegues existentes.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 61: sistemas operativos Microsoft, administración e instalación.'),
    src(a2,'BOE-A-2025-26262, anexo IX, temas II.2 (administración de Windows) y IV.1 (administración de sistemas operativos).'),
    src('https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk','ITIC Academy, bloque 27, Sistemas Operativos, edición 2026: cotejo curricular de administración de sistemas Microsoft; la función y estado de WSUS se contrastan con Microsoft Learn.')
  ],{texto:'¿Cuál es la función de Windows Server Update Services (WSUS) en una organización que lo mantiene desplegado?',opciones:[
    'Analizar registros avanzados de rendimiento de Windows Mobile.','Crear canales de conversación y videoconferencia para los usuarios.','Centralizar la sincronización y permitir aprobar, programar y distribuir selectivamente actualizaciones de Windows a equipos administrados.','Administrar buzones y reglas de flujo de correo de Microsoft 365.'
  ],respuesta_correcta:2},'Se conserva C. Se especifica el contexto de una organización que ya lo mantiene desplegado: WSUS sincroniza y gestiona aprobaciones/despliegues selectivos de actualizaciones Windows. Microsoft indica que está obsoleto para nuevas funciones, pero continúa soportado en despliegues existentes; no debe describirse como producto en evolución activa.','corregida'],

  [6789,[46,49],[ 'I-10'],['SIR','SICRES 4.0','registro electrónico','interoperabilidad','intercambio de asientos registrales'],[
    src('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2021-13749','BOE-A-2021-13749, NTI de Modelo de Datos para intercambio de asientos: SICRES 4.0 sustituye a SICRES 3.0 y define el modelo para intercambiar asientos registrales; SIR garantiza compatibilidad entre aplicaciones que usen versiones distintas durante la transición.'),
    src('https://administracionelectronica.gob.es/ctt/verPestanaDescargas.htm?idIniciativa=sir&idioma=c','PAe/CTT, descargas de SIR, listado de instalaciones en producción certificadas SICRES 4.0-SIR, actualizado el 03-10-2026.'),
    src(a1,'BOE-A-2025-25938, anexo I, temas 46 (NTI e intercambio de datos) y 49 (servicios comunes, incluido SIR).'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema I.10: cooperación interadministrativa, infraestructuras y servicios comunes de interoperabilidad.'),
    src('https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk','ITIC Academy, bloque 10, Gobernanza TIC y Administración Digital, edición 2026.4: cotejo de SIR como servicio común y SICRES como modelo de datos; la versión vigente se contrasta con BOE y el catálogo PAe.')
  ],{texto:'¿Qué modelo de datos define actualmente la Norma Técnica de Interoperabilidad para el intercambio de asientos entre entidades registrales, utilizado en la interoperabilidad con SIR?',opciones:[
    'ORVE 3.1.','GEISER 3.0.','SICRES 4.0.','SIR 3.0.'
  ],respuesta_correcta:2},'Se conserva C y se diferencia el modelo de datos del servicio: SICRES 4.0 es la NTI vigente que sustituye a SICRES 3.0; SIR es la plataforma de intercambio. La norma previó interoperabilidad entre versiones durante la transición, por lo que no se afirma que cualquier aplicación se conecte por el solo hecho de implementar SICRES: debe cumplir el proceso de certificación e integración publicado por PAe.','corregida'],

  [6790,[5,14],[],['NextGenerationEU','Mecanismo de Recuperación y Resiliencia','Plan de Recuperación','España','Unión Europea','actualización 2026'],[
    src('https://reforms-investments.ec.europa.eu/recovery-and-resilience-facility-1/country-pages/spains-recovery-and-resilience-plan_en','Comisión Europea, Spain’s recovery and resilience plan, ficha vigente consultada el 15-11-2026: muestra un valor de 102.000 millones de euros para el plan español (79.000 millones en subvenciones y 21.400 millones en préstamos del MRR) y recoge las actualizaciones del plan hasta julio de 2026.'),
    src('https://eur-lex.europa.eu/eli/reg/2020/2094/oj','Reglamento (UE) 2020/2094: establece el Instrumento de Recuperación de la Unión Europea NextGenerationEU y su importe global; no debe confundirse con el valor del plan español ni con la asignación máxima anunciada en una fecha anterior.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 5: Unión Europea, políticas, instituciones e instrumentos; tema 14 como contexto económico general.'),
    src('https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk','ITIC Academy, bloque 6, Economía, Sociedad y Empleo, edición 2026: cotejo del contexto económico y de políticas europeas de recuperación; la cuantía del plan se toma de la ficha vigente de la Comisión Europea.' )
  ],{texto:'Según la ficha vigente de la Comisión Europea consultada en noviembre de 2026, ¿qué valor tiene el Plan de Recuperación y Resiliencia de España?',opciones:[
    '750.000 millones de euros.','102.000 millones de euros.','140.000 millones de euros.','163.000 millones de euros.'
  ],respuesta_correcta:1},'Se actualiza la respuesta a B conforme a la ficha vigente de la Comisión: 102.000 millones de euros (79.000 millones en subvenciones y 21.400 millones en préstamos del MRR). La pregunta original confundía una estimación/asignación difundida en años anteriores con la cuantía del plan vigente y con el instrumento NextGenerationEU en su conjunto; se ancla a una fuente y fecha de consulta para que no sea una cifra intemporal. No se presenta el valor del PRR como el presupuesto global de NextGenerationEU.','corregida']
]});
