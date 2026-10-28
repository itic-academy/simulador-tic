const aplicar = require('./aplicar-lote.cjs');

const records = [
  [2231, [65, 77], ['III-12'], ['AJAX', 'Asynchronous JavaScript and XML', 'XML', 'JSON', 'solicitudes asíncronas'], [
    { url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Network_requests', referencia: 'MDN, Making network requests with JavaScript: Fetch puede solicitar JSON, HTML o texto; AJAX es el nombre histórico de la técnica, no una restricción a XML.' }
  ], 'MDN, Making network requests with JavaScript', 'Se mantiene como afirmación incorrecta que los datos solo pueden intercambiarse en XML. AJAX es un nombre histórico; las solicitudes asíncronas pueden intercambiar JSON, HTML, texto y otros formatos. Se corrige la capitalización de JavaScript y se explicita que AJAX no implica exclusividad de XML.', 'corregida'],
  [2232, [66], ['III-11'], ['Microsoft .NET', 'aplicación de escritorio', 'ASP.NET Core', 'e-learning'], [
    { url: 'https://learn.microsoft.com/en-us/dotnet/desktop/wpf/overview/', referencia: 'Microsoft Learn, WPF overview: tecnología de .NET para aplicaciones de escritorio Windows.' },
    { url: 'https://learn.microsoft.com/en-us/aspnet/core/overview?view=aspnetcore-10.0', referencia: 'Microsoft Learn, ASP.NET Core: framework para crear aplicaciones web dinámicas y servicios.' }
  ], 'Microsoft Learn, WPF y ASP.NET Core', 'Se conserva “Todas las anteriores” y se concreta la alternativa ambigua: .NET permite aplicaciones de escritorio con C#, sitios web dinámicos y plataformas formativas web. La opción original mencionaba C++ sin precisar el puente C++/CLI; se sustituye por C# para que las tres categorías sean inequívocamente aplicaciones .NET.', 'corregida'],
  [2233, [79], ['IV-12'], ['criptografía', 'clave pública', 'RSA', 'DES', 'IDEA', 'LOKI'], [
    { url: 'https://csrc.nist.gov/glossary/term/RSA', referencia: 'NIST CSRC Glossary, RSA: identifica RSA como algoritmo de clave pública usado para establecimiento de claves y firmas.' },
    { url: 'https://csrc.nist.gov/pubs/fips/46-3/final', referencia: 'NIST FIPS 46-3: especifica DES; algoritmo histórico de cifrado, distinto de RSA.' },
    { url: 'https://cris.biu.ac.il/en/publications/new-cryptanalytic-results-on-idea-3/', referencia: 'Bar-Ilan University, New Cryptanalytic Results on IDEA: describe IDEA como cifrado de bloque de clave secreta/simétrica.' },
    { url: 'https://tidsskrift.dk/daimipb/article/view/6637', referencia: 'Knudsen, Cryptanalysis of LOKI, DAIMI Report Series: describe LOKI como cifrado de bloque que usa una clave compartida.' }
  ], 'NIST, Bar-Ilan University y DAIMI Report Series, clasificación de algoritmos', 'Se confirma RSA como algoritmo de clave pública; DES, IDEA y LOKI son cifrados simétricos. Se corrige además el apellido de Adleman (el banco decía “Adelman”). La pregunta distingue la familia del algoritmo, no su conveniencia actual: DES está retirado y no debe usarse para proteger información nueva.', 'corregida'],
  [2234, [79, 80], ['I-6', 'IV-12'], ['firma digital', 'criptografía asimétrica', 'integridad', 'autenticidad', 'confidencialidad', 'certificado'], [
    { url: 'https://csrc.nist.gov/pubs/fips/186-5/final', referencia: 'NIST FIPS 186-5, Digital Signature Standard: define generación y verificación de firmas digitales con claves públicas y privadas.' },
    { url: 'https://csrc.nist.gov/glossary/term/digital_signature', referencia: 'NIST CSRC Glossary, digital signature: la firma, correctamente implementada, permite verificar autenticación del origen e integridad; no proporciona confidencialidad.' },
    { url: 'https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18', referencia: 'Reglamento eIDAS, texto consolidado: artículos 3 y 26 distinguen firma, vinculación del firmante, identificación y detección de cambios.' }
  ], 'NIST FIPS 186-5 y Reglamento eIDAS, firma y verificación', 'Se corrige la opción para no atribuir a una firma aislada la identificación civil del firmante: la verificación criptográfica comprueba integridad y que la firma se generó con la clave privada correspondiente; vincular esa clave a una identidad requiere un certificado u otro mecanismo de confianza. La firma no cifra ni aporta confidencialidad.', 'corregida'],
  [2235, [64], ['III-4'], ['modelo relacional', 'superclave', 'clave candidata', 'clave primaria', 'unicidad'], [
    { url: 'https://www.cs.uic.edu/~bglavic/cs480/2024-spring/pdfs/slides/ch02-relational-model.pdf', referencia: 'University of Illinois Chicago, CS 480 Database Systems, Relational Data Model: una superclave identifica unívocamente tuplas; una clave candidata es una superclave mínima.' },
    { url: 'https://www.cs.emory.edu/~cheung/Courses/377/Syllabus/3-Relation/intro2.html', referencia: 'Emory University, The Relational Model: formaliza superclave como conjunto de atributos cuyos valores distinguen todas las tuplas.' }
  ], 'University of Illinois Chicago y Emory University, modelo relacional y claves', 'Se confirma la definición de superclave como atributo o conjunto de atributos que identifica unívocamente cada tupla. A diferencia de una clave candidata, puede contener atributos redundantes; no implica por sí sola una clave primaria generada por el gestor.', 'vigente']
];

const edits = {
  2231: { texto: 'Respecto a Ajax (nombre histórico: Asynchronous JavaScript and XML), indique cuál afirmación NO es correcta:', opciones: undefined },
  2232: { opciones: ['Aplicación de escritorio escrita en C#.', 'Sitio web dinámico.', 'Plataforma de e-learning web.', 'Todas las anteriores.'] },
  2233: { opciones: ['DES (Data Encryption Standard)', 'RSA (Rivest, Shamir y Adleman)', 'IDEA (International Data Encryption Algorithm)', 'LOKI'] },
  2234: { opciones: ['Es un certificado electrónico que vincula una clave pública con la identidad de su titular.', 'Se sirve de criptografía asimétrica para garantizar la confidencialidad y la integridad del mensaje.', 'Permite comprobar la integridad del mensaje y que la firma se generó con la clave privada correspondiente; vincularla a una identidad requiere un mecanismo de confianza.', 'Es el resumen del mensaje cifrado con la clave pública del firmante.'] }
};
delete edits[2231].opciones;

aplicar({ numero: '383', fecha: '2026-10-28', records, edits });
