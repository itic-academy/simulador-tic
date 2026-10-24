const apply = require('./aplicar-lote.cjs');

const records = [
  [1511, [96, 98], ['III-7', 'III-13'], ['pruebas de regresión', 'defectos de regresión', 'calidad del software'], [
    {url: 'https://glossary.istqb.org/en_US/search?attributes=%5B%22name%22,%22abbreviation%22,%22definition%22,%22synonyms%22,%22reference%22%5D&exact_matches_first=true&keywords_only=true&syllabus_id=23&term=', referencia: 'ISTQB, Certified Tester Glossary: regression/regression testing; una regresión es degradación de calidad por un cambio y las pruebas buscan defectos introducidos o descubiertos en áreas no modificadas.'}
  ], null, 'En pruebas de regresión, el defecto relevante es una degradación o fallo introducido o dejado al descubierto por un cambio, a menudo en una zona que antes funcionaba. Se sustituye la definición confusa de «fallo que aparece espontáneamente» y se diferencia el defecto del tipo de prueba que lo detecta.', 'corregida'],
  [1512, [98], ['III-13'], ['portabilidad', 'calidad del software', 'transferencia entre entornos'], [
    {url: 'https://www.iso.org/obp/ui/?_escaped_fragment_=iso%3Astd%3Aiso-iec%3A25010%3Aed-1%3Av1%3Aen', referencia: 'ISO/IEC 25010:2011, apartado 4.2.8: portability era el grado de eficacia y eficiencia con que un sistema podía transferirse entre entornos; la edición 2011 está retirada.'},
    {url: 'https://www.iso.org/standard/78176.html', referencia: 'ISO/IEC 25010:2023, edición publicada vigente que reemplaza a la edición de 2011 y define el modelo actual de calidad de producto; no se presenta aquí la portabilidad como característica independiente vigente.'}
  ], null, 'La portabilidad es la capacidad de trasladar un sistema eficaz y eficientemente entre entornos. Se precisa la definición clásica y se evita atribuirla como característica independiente al modelo ISO/IEC 25010:2023: la edición de 2011 que la enumeraba está retirada y la edición vigente reorganiza el modelo.', 'corregida'],
  [1513, [97], ['III-6'], ['entorno de producción', 'roles', 'operación', 'despliegue'], null, '', 'Pendiente: la pregunta no identifica una organización, modelo operativo ni marco (por ejemplo, ITIL, DevOps o una estructura de soporte). Las funciones y responsabilidades de producción varían; la lista de opciones no puede afirmarse como universal ni verificarse sin ese contexto. Se conserva intacto el enunciado, las opciones y la clave original.', 'pendiente_ambiguedad'],
  [1514, [95, 102], ['III-2', 'III-6'], ['MÉTRICA v3', 'gestión de configuración', 'interfaces de gestión', 'control de cambios'], [
    {url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A1f321d6d-fb6a-46ed-a369-617c0080c51d/METRICA_V3_Gestion_de_Configuracion.pdf', referencia: 'Ministerio de Administraciones Públicas, MÉTRICA v3, Gestión de la Configuración: interfaz relacionada con ASI, DSI, CSI e IAS, con actividades repetidas en los procesos de desarrollo y continuidad en mantenimiento.'}
  ], null, 'MÉTRICA v3 define la gestión de configuración como una interfaz de apoyo que opera a lo largo de los procesos de desarrollo (ASI, DSI, CSI e IAS) y continúa en mantenimiento; no es un proceso interno exclusivo de DSI ni una actividad previa aislada. Se corrigen la errata «interface» y el alcance limitado del original.', 'corregida'],
  [1515, [23], [], ['EFQM', 'calidad total', 'excelencia organizativa', 'modelo EFQM 2025'], [
    {url: 'https://efqm.org/es/el-modelo-efqm/', referencia: 'EFQM, El Modelo EFQM: su estructura responde a Por qué/Dirección, Cómo/Ejecución y Qué/Resultados.'}
  ], null, 'El enunciado original no indica edición y describe la estructura histórica de agentes y resultados. Se actualiza expresamente a EFQM 2025: sus tres dimensiones son Dirección, Ejecución y Resultados. La formulación antigua solo sería válida al especificar una edición previa del modelo.', 'corregida']
];

const edits = {
  1511: {texto: 'En un sistema previamente probado, ¿qué describe mejor un defecto de regresión asociado a una modificación?', opciones: [
    'Un defecto que parece corregirse espontáneamente, sin que pueda conocerse su origen.',
    'Un defecto necesariamente causado por un bucle infinito o una llamada recursiva infinita.',
    'Un defecto necesariamente causado por una condición de carrera o un interbloqueo.',
    'Un defecto introducido o descubierto a raíz de un cambio, incluso en una zona que antes funcionaba correctamente.'
  ], respuesta_correcta: 3},
  1512: {texto: '¿Qué concepto describe el grado de eficacia y eficiencia con que un sistema puede transferirse de un entorno hardware, software u operativo a otro?', opciones: [
    'Portabilidad.',
    'Reusabilidad.',
    'Interoperabilidad.',
    'Mantenibilidad.'
  ], respuesta_correcta: 0},
  1514: {texto: 'Según MÉTRICA v3, ¿cómo se integra la interfaz de gestión de configuración?', opciones: [
    'Como interfaz de apoyo a lo largo de los procesos de desarrollo y que continúa durante el mantenimiento.',
    'Como un proceso interno exclusivo de DSI.',
    'Como una técnica que solo se aplica antes de iniciar DSI.',
    'Como una actividad previa al desarrollo, sin actuación durante ASI, DSI, CSI o IAS.'
  ], respuesta_correcta: 0},
  1515: {texto: 'En el Modelo EFQM 2025, ¿cuáles son sus tres dimensiones principales?', opciones: [
    'Agentes, acciones y satisfacción.',
    'Agentes y resultados.',
    'Dirección, ejecución y resultados.',
    'Resultados y acciones.'
  ], respuesta_correcta: 2}
};

apply({numero: '239', fecha: '2026-10-25', records, edits});
