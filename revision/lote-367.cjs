const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2151, [60], ['II-2'], ['vi', 'Vim', 'Unix', 'comandos Ex', 'guardar y salir'],
    [
      { url: 'https://vimhelp.org/editing.txt.html#write-quit', referencia: 'Vim Reference Manual, “Writing and quitting”: `:x` es como `:wq`, pero escribe solo si se han hecho cambios; al terminar, cierra la ventana o sale de Vim si era la última.' }
    ],
    'Vim Reference Manual, apartado Writing and quitting',
    'Se precisa Vim en modo Ex para evitar generalizar el comportamiento a cualquier editor o implementación de vi. `:x` guarda si el búfer ha cambiado y termina la edición; `:wq` también guarda y sale, pero no figura entre las opciones.',
    'corregida'
  ],
  [
    2152, [69], ['II-14'], ['GNU GPLv3', 'software libre', 'libertad frente a precio', 'redistribución'],
    [
      { url: 'https://www.gnu.org/licenses/gpl-3.0.en.html', referencia: 'GNU GPL versión 3, preámbulo y §4: el software libre trata de libertad, no de precio; quien distribuye copias puede cobrar cualquier precio o no cobrar.' },
      { url: 'https://www.gnu.org/philosophy/free-sw.en.html', referencia: 'Free Software Foundation, What is Free Software?: define las libertades de ejecutar, estudiar, modificar y redistribuir, incluso cobrando por las copias.' }
    ],
    'GNU GPLv3 y definición de software libre de la Free Software Foundation',
    'Se ancla la pregunta a GPLv3. La afirmación falsa es que no se pueda cobrar por el software libre: el preámbulo y §4 permiten cobrar cualquier precio o distribuir sin cobrar. La libertad se refiere a los derechos sobre el programa, no a que la copia tenga coste cero.',
    'corregida'
  ],
  [
    2153, [54], ['II-1'], ['memoria', 'direccionamiento por palabra', 'capacidad direccionable', 'MiB', 'bus de direcciones'],
    [
      { url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-FA/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 26, hardware y tecnologías de ordenadores: encuadre curricular de memoria y arquitectura; la capacidad se calcula directamente a partir de las hipótesis explicitadas en el enunciado.' }
    ],
    'Cálculo del espacio direccionable a partir del direccionamiento por palabra',
    'El original no indicaba si cada dirección identifica un byte o una palabra: con 24 bits serían 16 MiB en direccionamiento por byte, pero 32 MiB si cada dirección identifica una palabra de 16 bits. Se especifica direccionamiento por palabra. El tiempo de acceso y ECC no cambian el espacio de direcciones y se eliminan del enunciado.',
    'corregida'
  ],
  [
    2154, [41], ['II-1'], ['arquitectura de computadores', 'unidad de control', 'microprogramación', 'microinstrucción', 'señales de control'],
    [
      { url: 'https://technav.ieee.org/topic/microprogramming/', referencia: 'IEEE Technology Navigator, Microprogramming: describe las microinstrucciones como secuencias de señales de control de bajo nivel guardadas en una memoria de control; la unidad microprogramada las lee para activar las líneas de control del procesador.' }
    ],
    'IEEE Technology Navigator, Microprogramming',
    'Se sustituye la definición circular de que cada instrucción «es un microprograma» por la unidad conceptual preguntada: una microinstrucción codifica señales de control y operaciones elementales de una etapa de la unidad de control microprogramada. No es una función de lenguaje de alto nivel ni una orden del sistema operativo.',
    'corregida'
  ],
  [
    2155, [69], ['II-14'], ['FLOSS', 'software libre', 'FSF', 'libertades del software', 'precio'],
    [
      { url: 'https://www.gnu.org/philosophy/free-sw.en.html', referencia: 'Free Software Foundation, What is Free Software?: las libertades de ejecutar, copiar, distribuir, estudiar, cambiar y mejorar no significan que el software deba ser gratuito; se pueden vender copias.' },
      { url: 'https://www.gnu.org/licenses/gpl-3.0.en.html', referencia: 'GNU GPLv3, preámbulo y §4: permite redistribuir copias cobrando cualquier precio o sin precio.' }
    ],
    'Free Software Foundation, definición de software libre y GNU GPLv3',
    'La afirmación «software libre es lo mismo que software gratuito» es falsa: libre alude a las libertades de uso, estudio, modificación y distribución, no a precio cero. La FSF explica que se puede haber pagado por una copia y que las copias pueden venderse. El resto de opciones reproduce las libertades esenciales de ejecución, modificación y redistribución.',
    'vigente'
  ]
];

const edits = {
  2151: {
    texto: 'En Vim, desde el modo Ex, ¿qué comando escribe el búfer actual si ha cambiado y termina la edición?',
    respuesta_correcta: 1
  },
  2152: {
    texto: 'Según la GNU GPL versión 3, ¿cuál de estas afirmaciones no es correcta?',
    respuesta_correcta: 3
  },
  2153: {
    texto: 'Una memoria direccionada por palabra tiene palabras de 16 bits y usa 24 bits para identificar cada palabra. ¿Qué capacidad máxima direccionable representa, expresada en MiB?',
    opciones: ['8 MiB', '16 MiB', '32 MiB', '64 MiB'],
    respuesta_correcta: 2
  },
  2154: {
    texto: 'En una unidad de control microprogramada, ¿qué es una microinstrucción?',
    opciones: [
      'Una función de un lenguaje de programación convencional que acepta pocos parámetros.',
      'Una palabra de control que especifica señales u operaciones elementales para una etapa del microprograma.',
      'Un comando pequeño del sistema operativo que se mantiene siempre en memoria principal.',
      'Una instrucción del lenguaje máquina que no puede descomponerse en operaciones de control.'
    ],
    respuesta_correcta: 1
  }
};

aplicar({ numero: '367', fecha: '2026-10-28', records, edits });
