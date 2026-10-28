const aplicar = require('./aplicar-lote.cjs');

const records = [
  [2236, [64], ['III-4'], ['Codd', 'regla 2', 'acceso garantizado', 'modelo relacional'], [
    { url: 'https://reldb.org/c/index.php/twelve-rules/', referencia: 'E. F. Codd, Is Your DBMS Really Relational?; reimpresión de la regla 2, Guaranteed Access, a partir de Computerworld (14 de octubre de 1985).' },
    { url: 'https://www.csd.uoc.gr/~hy460/pdf/HistoryandComparisonofRelationalDatabaseManagementSystems.pdf', referencia: 'University of Crete, History and Comparison of Relational Database Management Systems, apéndice A: regla 2, Guaranteed Access; cada dato se accede sin ambigüedad mediante tabla, clave y columna.' }
  ], 'Codd, Twelve Rules, regla 2: Guaranteed Access', 'Se confirma «Acceso garantizado»: la regla 2 de Codd exige que cada valor sea accesible sin ambigüedad identificando relación, clave y atributo. Se distingue de la regla 3, que trata sistemáticamente los valores nulos.', 'vigente'],
  [2237, [65, 77], ['III-12'], ['AJAX', 'XMLHttpRequest', 'XHR', 'Fetch API', 'peticiones asíncronas'], [
    { url: 'https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest', referencia: 'MDN Web Docs, XMLHttpRequest: los objetos XHR interactúan con servidores y recuperan datos sin recargar toda la página; pese al nombre pueden recibir datos de cualquier tipo, no solo XML.' },
    { url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API', referencia: 'MDN Web Docs, Fetch API: ofrece una interfaz más potente y flexible que XMLHttpRequest para obtener recursos de red.' }
  ], 'MDN Web Docs, XMLHttpRequest y Fetch API', 'Se precisa el alcance histórico del reactivo: en el patrón AJAX clásico, el objeto para realizar la petición asíncrona es XMLHttpRequest (XHR). Aunque el nombre incluya XML, puede recibir distintos formatos. En desarrollo actual, Fetch es una alternativa moderna; la pregunta no afirma que sea el único mecanismo de red.', 'corregida'],
  [2238, [89], ['III-9'], ['Ley de Demeter', 'acoplamiento', 'encapsulación', 'modularidad', 'principio del menor conocimiento'], [
    { url: 'https://www2.ccs.neu.edu/research/demeter/papers/law-of-demeter/oopsla88-law-of-demeter.pdf', referencia: 'Lieberherr, Holland y Riel, Object-Oriented Programming: An Objective Sense of Style, OOPSLA 1988: formula la Ley de Demeter como regla de estilo independiente del lenguaje que codifica encapsulación y modularidad.' },
    { url: 'https://khoury.northeastern.edu/home/lieber/LoD.html', referencia: 'Northeastern University, Law of Demeter: Principle of Least Knowledge; la regla «only talk to your friends» limita el conocimiento entre objetos y promueve modularidad.' }
  ], 'Northeastern University, artículo original OOPSLA 1988 y página del proyecto Demeter', 'Se reformula para identificar el principio por su regla característica: un objeto debe comunicarse directamente solo con sus colaboradores inmediatos («solo hablar con sus amigos»). La Ley de Demeter favorece encapsulación y modularidad y limita el acoplamiento; no se presenta como una ley general de la física o de complejidad.', 'corregida'],
  [2239, [96], ['III-7'], ['ISO/IEC/IEEE 29119', 'pruebas de software', 'procesos', 'técnicas', 'documentación'], [
    { url: 'https://www.iso.org/obp/ui?_escaped_fragment_=iso%3Astd%3Aiso-iec-ieee%3A29119%3A-1%3Aed-2%3Av1%3Aen', referencia: 'ISO/IEC/IEEE 29119-1:2022, General concepts: la serie define estándares internacionalmente acordados de pruebas de software; la parte 1 introduce conceptos generales, la parte 2 procesos, la parte 3 documentación y la parte 4 técnicas.' }
  ], 'ISO/IEC/IEEE 29119-1:2022 y estructura de la serie', 'Se confirma ISO/IEC/IEEE 29119. La edición vigente consultada de la parte 1 es 2022; la norma presenta conceptos y terminología generales. La serie reparte procesos, documentación y técnicas en sus partes 2, 3 y 4 respectivamente; no debe atribuirse todo ese detalle a la parte 1.', 'vigente'],
  [2240, [115], ['II-8'], ['Mobile IPv6', 'RFC 3775', 'L3 handover', 'correspondent node', 'home agent', 'care-of address'], [
    { url: 'https://www.rfc-editor.org/rfc/rfc3775.html', referencia: 'RFC Editor, RFC 3775, Mobility Support in IPv6, §3, Terminology: define L3 handover, correspondent node y home agent; contiene el término care-of address y describe su registro.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc6275.html', referencia: 'RFC Editor, RFC 6275, Mobility Support in IPv6: sucesor que declara obsoleto RFC 3775 y mantiene el modelo de registro de care-of address.' }
  ], 'IETF RFC Editor, RFC 3775 y su sucesor RFC 6275', 'Se matiza el reactivo como pregunta léxica: en la terminología definida de RFC 3775 aparecen «L3 handover», «correspondent node» y «home agent», pero no la expresión exacta «care-of registration». El documento sí trata el registro de una care-of address; por tanto, la opción no debe entenderse como ausencia del concepto. RFC 3775 fue reemplazado por RFC 6275 en 2011 y se conserva explícitamente el contexto histórico.', 'historica']
];

const edits = {
  2237: { texto: 'En el patrón AJAX clásico basado en XMLHttpRequest, ¿qué objeto permite realizar una petición asíncrona al servidor web?' },
  2238: { texto: '¿Qué ley de diseño orientado a objetos prescribe que un objeto se comunique solo con sus colaboradores inmediatos («solo hablar con sus amigos»)?' },
  2240: { texto: 'En la terminología definida literalmente en el RFC 3775 «Mobility Support in IPv6», ¿cuál de estas expresiones exactas NO aparece como término?' }
};

aplicar({ numero: '384', fecha: '2026-10-28', records, edits });
