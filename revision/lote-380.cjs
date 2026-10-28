const aplicar = require('./aplicar-lote.cjs');

const records = [
  [2216, [80], ['I-6'], ['DNI electrónico', 'DGP', 'Dirección General de la Policía', 'autoridad de certificación'], [
    { url: 'https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?id_menu=32&pag=REF_800', referencia: 'Portal oficial DNIe, Autoridades de Validación: identifica expresamente a Ministerio del Interior–Dirección General de la Policía como Autoridad de Certificación de los certificados DNI.' },
    { url: 'https://www.dnielectronico.es/PDFs/Politicas_de_certificacion_v2.13.pdf', referencia: 'Dirección General de la Policía, Declaración de Prácticas de Certificación DNIe, versión 2.13: identifica a la DGP como órgano responsable del DNI y sus certificados.' }
  ], 'Portal oficial del DNI electrónico y DPC de la Dirección General de la Policía', 'Se confirma Ministerio del Interior–Dirección General de la Policía como Autoridad de Certificación de los certificados DNIe. El portal distingue esa función de las Autoridades de Validación, entre ellas FNMT y Hacienda, que prestan servicios para consultar vigencia.', 'vigente'],
  [2217, [70], ['III-15'], ['Big Data', 'volumen', 'variedad', 'velocidad', 'tres V'], [
    { url: 'https://public.dhe.ibm.com/software/data/sw-library/big-data/understanding-big-data.pdf', referencia: 'IBM, Understanding Big Data: presenta volumen, variedad y velocidad como las tres características principales (V³) en el marco de la publicación.' },
    { url: 'https://www.ibm.com/think/topics/big-data', referencia: 'IBM, What Is Big Data?: mantiene volumen, velocidad y variedad entre las características centrales, junto con otras V añadidas posteriormente, como veracidad y valor.' }
  ], 'IBM, Understanding Big Data y descripción actual de Big Data', 'Se confirma la combinación clásica volumen, variedad y velocidad. Las fuentes actuales también utilizan listas ampliadas (veracidad, valor); el enunciado se interpreta como las tres V clásicas y no como una lista universalmente cerrada.', 'vigente'],
  [2218, [65, 67], ['III-10', 'III-12'], ['Jakarta Faces', 'JSF', 'AJAX', 'interfaz de usuario'], [
    { url: 'https://jakarta.ee/specifications/faces/', referencia: 'Eclipse Foundation/Jakarta EE, Jakarta Faces (continuación de JSF): framework MVC para aplicaciones web con componentes de interfaz, gestión de estado y eventos.' },
    { url: 'https://developer.mozilla.org/en-US/docs/Glossary/AJAX', referencia: 'MDN, Ajax: técnica para realizar solicitudes asíncronas y actualizar partes de una página web sin recargarla por completo.' }
  ], 'Jakarta EE, Jakarta Faces; MDN, Ajax', 'Se confirma que ambas tecnologías son útiles para construir interfaces: JSF/Jakarta Faces aporta componentes y ciclo de vida de interfaz en servidor; AJAX permite intercambios asíncronos y actualizar partes de la página. No son tecnologías equivalentes ni excluyentes.', 'vigente'],
  [2219, [64], ['II-5', 'III-4'], ['ACID', 'atomicidad', 'consistencia', 'aislamiento', 'durabilidad'], [
    { url: 'https://www.postgresql.org/docs/current/transaction-iso.html', referencia: 'PostgreSQL documentation, Transaction Isolation: describe los niveles de aislamiento y la propiedad de aislamiento de transacciones.' },
    { url: 'https://www.ibm.com/docs/en/db2/11.5?topic=design-acid-properties-transactions', referencia: 'IBM Db2, ACID properties of transactions: enumera atomicidad, consistencia, aislamiento y durabilidad.' }
  ], 'PostgreSQL y IBM Db2, documentación de transacciones ACID', 'La pregunta se expresa con los nombres canónicos de ACID: atomicidad, consistencia, aislamiento y durabilidad. «Independencia» no es una propiedad ACID distinta; la I corresponde a isolation/aislamiento. Se conserva la alternativa que no pertenece a la lista.', 'corregida'],
  [2220, [58], ['II-6'], ['RMI', 'DCOM', 'CORBA', 'RPC', 'sistemas distribuidos'], [
    { url: 'https://docs.oracle.com/en/java/javase/27/rmi/index.html', referencia: 'Oracle Java RMI API Guide: Java RMI permite invocar métodos de objetos remotos Java en aplicaciones distribuidas.' },
    { url: 'https://www.omg.org/spec/CORBA/', referencia: 'OMG, CORBA: arquitectura para objetos distribuidos e interoperabilidad mediante ORB/IIOP.' },
    { url: 'https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-dcom/', referencia: 'Microsoft Open Specifications, DCOM: especificación del protocolo Distributed Component Object Model para comunicación entre componentes distribuidos.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc5531', referencia: 'IETF RFC 5531, ONC RPC version 2: especificación de llamadas a procedimientos remotos en sistemas distribuidos.' }
  ], 'Oracle RMI, OMG CORBA, Microsoft DCOM e IETF ONC RPC', 'Se reformula para evitar la afirmación demasiado amplia de que todos son igualmente heterogéneos o precursores directos de servicios web. Su rasgo común comprobable es que permiten invocaciones o comunicación entre componentes/procesos distribuidos; varían en modelos, lenguajes y protocolos.', 'corregida']
];

const edits = {
  2219: { texto: 'En el modelo ACID de las transacciones, ¿cuál de las siguientes opciones NO es una propiedad?', opciones: ['Independencia de los datos.', 'Atomicidad.', 'Durabilidad.', 'Consistencia.'], respuesta_correcta: 0 },
  2220: { texto: '¿Qué tienen en común RMI, DCOM, CORBA y RPC?', opciones: [
    'Son mecanismos o arquitecturas para invocar operaciones o comunicarse entre componentes distribuidos.',
    'Son protocolos web basados todos en HTTP y XML.',
    'Son implementaciones exclusivamente Java de la misma API.',
    'Son formatos de serialización de bases de datos relacionales.'
  ], respuesta_correcta: 0 }
};

aplicar({ numero: '380', fecha: '2026-10-28', records, edits });
