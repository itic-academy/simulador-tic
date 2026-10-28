const aplicar = require('./aplicar-lote.cjs');

const records = [
  [2211, [65, 66], ['III-11', 'III-12'], ['ASP.NET', 'Web Forms', 'ciclo de vida', 'PreRender'], [
    { url: 'https://learn.microsoft.com/en-us/previous-versions/aspnet/ms178472%28v%3Dvs.100%29', referencia: 'Microsoft Learn, ASP.NET Page Life Cycle Overview: PreRender se usa para cambios finales antes de comenzar el renderizado; Unload se produce después de renderizar.' }
  ], 'Microsoft Learn, ASP.NET Page Life Cycle Overview', 'Se confirma Page_PreRender: Microsoft sitúa ese evento antes de renderizar y lo indica para realizar cambios finales en el contenido/controles. Unload se ejecuta una vez renderizada y enviada la página, por lo que es demasiado tarde para modificar la respuesta.', 'vigente'],
  [2212, [66], ['III-11'], ['.NET', 'BCL', 'Base Class Library', 'librerías base'], [
    { url: 'https://learn.microsoft.com/en-us/dotnet/standard/glossary', referencia: 'Microsoft Learn, .NET glossary: la BCL es un conjunto de bibliotecas, principalmente en espacios de nombres System.*, de propósito general y base de otras bibliotecas.' },
    { url: 'https://learn.microsoft.com/en-us/dotnet/standard/runtime-libraries-overview', referencia: 'Microsoft Learn, runtime libraries overview: las bibliotecas de ejecución/BCL proporcionan tipos fundacionales y funcionalidad de utilidad; no son el CLR ni el proceso de compilación a CIL.' }
  ], 'Microsoft Learn, glosario de .NET y bibliotecas de ejecución', 'Se reformula la definición: la BCL es el conjunto de bibliotecas fundamentales de .NET con tipos y utilidades de propósito general. No es una API de alto nivel para acceder al CLR, una biblioteca exclusivamente de acceso a datos ni el compilador que produce CIL.', 'corregida'],
  [2213, [60], ['II-2'], ['Unix', 'inodo', 'bloques de indirección', 'sistema de ficheros'], [
    { url: 'https://man7.org/linux/man-pages/man7/inode.7.html', referencia: 'Linux man-pages, inode(7): describe los metadatos y referencias del inodo; el diseño concreto de punteros directos/indirectos depende del sistema de ficheros.' },
    { url: 'https://www.kernel.org/doc/html/latest/filesystems/ext4/dynamic.html', referencia: 'Linux kernel documentation, ext4: describe extents como mecanismo de mapeo de bloques del sistema ext4; para este ejercicio se mantienen las hipótesis explícitas del esquema clásico de punteros indirectos.' }
  ], 'Linux man-pages inode(7) y documentación del kernel sobre ext4; cálculo según el modelo clásico indicado por el enunciado', 'Se explicita 2 MiB para evitar la ambigüedad entre MB decimal y MiB binario. Con bloques de 2 KiB hay 1.024 bloques de datos; 12 son directos y 512 caben en la indirección simple, por lo que quedan 500. Se requieren una raíz doble y un bloque de segundo nivel: un bloque simple y dos de indirección doble. La clave original (opción 2) se mantiene.', 'corregida'],
  [2214, [80], ['I-9'], ['NTI Digitalización', 'resolución', '200 píxeles por pulgada', 'ENI'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2011-13168', referencia: 'BOE, Norma Técnica de Interoperabilidad de Digitalización de Documentos, apartado IV.2: resolución mínima de 200 píxeles por pulgada para imágenes en blanco y negro, color o escala de grises.' }
  ], 'BOE, NTI de Digitalización de Documentos, apartado IV.2', 'Se confirma 200 píxeles por pulgada como mínimo, conforme al apartado IV.2 de la NTI. Se conserva «píxeles por pulgada» como la unidad textual de la norma.', 'vigente'],
  [2215, [79, 80], ['I-6', 'IV-12'], ['X.509', 'CRL', 'CRL delta', 'revocación de certificados'], [
    { url: 'https://datatracker.ietf.org/doc/rfc5280/', referencia: 'IETF RFC 5280, §§ 5.2.4 y 5.2.5: las delta CRL expresan actualizaciones del estado de revocación respecto de una CRL base; la combinación con la base permite construir una CRL completa vigente para el ámbito correspondiente.' }
  ], 'IETF RFC 5280, Internet X.509 PKI Certificate and CRL Profile', 'Se precisa la opción de CRL delta: no son simplemente listas independientes que contengan solo certificados revocados nuevos. Contienen actualizaciones del estado de revocación respecto de una CRL base y se combinan con ella; incluso pueden incluir el motivo removeFromCRL para reflejar la liberación de una suspensión.', 'corregida']
];

const edits = {
  2212: { texto: 'En .NET, ¿qué describe correctamente la Biblioteca de Clases Base (BCL)?', opciones: [
    'El conjunto de bibliotecas fundamentales de .NET que ofrece tipos y servicios de propósito general, base de otras bibliotecas.',
    'La máquina virtual que ejecuta el código administrado y proporciona servicios de ejecución.',
    'El formato de código intermedio al que compilan los lenguajes de .NET.',
    'El framework web de servidor para construir aplicaciones ASP.NET.'
  ], respuesta_correcta: 0 },
  2213: { texto: 'Un sistema de ficheros usa bloques de 2 KiB y un esquema clásico de inodo con 12 direcciones directas, una indirecta simple, una doble y una triple. Cada dirección ocupa 4 bytes. Para un fichero de 2 MiB, ¿qué bloques de indexación indirecta se necesitan?', respuesta_correcta: 1 },
  2215: { opciones: [
    'Permiten consultar en tiempo real el estado actual del certificado en el instante de cada consulta.',
    'Incluyen necesariamente para cada certificado revocado su nombre y su clave pública.',
    'Solo pueden ser expedidas por la misma autoridad que emitió cada certificado revocado.',
    'Una CRL delta contiene actualizaciones del estado de revocación respecto de una CRL base y se combina con esta para obtener una lista completa.'
  ], respuesta_correcta: 3 }
};

aplicar({ numero: '379', fecha: '2026-10-28', records, edits });
