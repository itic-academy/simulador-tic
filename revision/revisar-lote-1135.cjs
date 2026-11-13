require('./aplicar-lote.cjs')({
 numero:'1135',fecha:'2026-11-13',
 records:[
  [5996,[65,67],['II-6','III-10','III-12'],['Java','SAAJ','Jakarta SOAP with Attachments','SOAP','adjuntos'],[
   {url:'https://jakarta.ee/specifications/soap-attachments/3.0/apidocs/jakarta.xml.soap/jakarta/xml/soap/package-summary',referencia:'Jakarta SOAP with Attachments API, documentación oficial: API para crear/procesar mensajes SOAP y añadir partes adjuntas.'},
   {url:'https://jakarta.ee/specifications/soap-attachments/2.0/apidocs/jakarta.xml.soap/jakarta/xml/soap/soapmessage',referencia:'Jakarta SOAP with Attachments API, SOAPMessage: el mensaje puede contener partes AttachmentPart.'}
  ],null,'La API identificada en la pregunta es SAAJ (SOAP with Attachments API for Java), hoy denominada Jakarta SOAP with Attachments API. JAXR es el registro de servicios; la referencia actual confirma la función de crear/procesar mensajes y añadir adjuntos. Se actualiza el enunciado para mostrar la continuidad de nombre y tecnología.','corregida'],
  [5997,[65],['II-6','III-12'],['cookies HTTP','estado de sesión','seguimiento web','privacidad'],[
   {url:'https://www.rfc-editor.org/rfc/rfc10025.html',referencia:'IETF RFC 10025 (julio de 2026), Cookies: HTTP State Management Mechanism, sucesora de RFC 6265. Define el almacenamiento y retorno de cookies entre servidor y navegador y trata la correlación de actividad/seguimiento de usuarios como riesgo de privacidad.'}
  ],null,'Se precisa que las cookies son datos que el navegador devuelve en peticiones posteriores. El servidor puede usarlas para reconocer visitas y realizar seguimiento de actividad; no son código ejecutable por sí mismas ni generan ventanas emergentes. RFC 10025, vigente desde julio de 2026, reemplaza RFC 6265 y confirma tanto el mecanismo de estado como los riesgos de correlación de actividad.','corregida'],
  [5998,[8,49],['I-8','I-9'],['Plataforma de Intermediación de Datos','Servicio de Verificación y Consulta de Datos','artículo 28 Ley 39/2015','supresión de documentos'],[
   {url:'https://administracionelectronica.gob.es/ctt/verPestanaGeneral.htm?idIniciativa=svd&idioma=es',referencia:'PAe/CTT, Servicio de Verificación y Consulta de Datos: sus objetivos incluyen hacer efectivo el derecho del art. 28.2 de la Ley 39/2015, evitar solicitar documentos acreditativos de identidad/empadronamiento y simplificar procedimientos.'},
   {url:'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565',referencia:'Ley 39/2015 consolidada, art. 28: derecho a no aportar documentos que obren en poder de las AAPP o hayan sido elaborados por estas, con el régimen vigente de consulta y oposición.'}
  ],null,'Se mantiene la clave C: la Plataforma de Intermediación/SVD permite consultar o verificar datos para evitar requerir al interesado documentos en papel. El art. 28.2 de la Ley 39/2015 vigente regula la consulta de documentos; se evita repetir como regla actual la redacción histórica de consentimiento que fue modificada.','vigente'],
  [5999,[93],['III-9'],['patrones de diseño','Singleton','diseño orientado a objetos'],[
   {url:'https://docs.oracle.com/javase/tutorial/ext/basics/spi.html',referencia:'Oracle Java Tutorials, Singleton Design Pattern: una sola instancia de la clase, con constructor controlado y método de acceso como getInstance.'},
   {url:'https://www.oracle.com/technical-resources/articles/java/singleton.html',referencia:'Oracle, When is a Singleton not a Singleton?: delimita las condiciones y advierte que múltiples cargadores de clases o máquinas virtuales pueden producir instancias distintas.'}
  ],null,'La respuesta es Singleton. Para que «una única instancia» no se entienda como garantía distribuida/global entre procesos, se limita el ámbito a una ejecución de aplicación y una definición/cargador de clase; distintos cargadores o máquinas virtuales pueden tener instancias independientes.','corregida'],
  [6000,[49,80],['I-6','I-9'],['Cl@ve','Cl@ve Firma','firma centralizada','certificados electrónicos'],[
   {url:'https://clave.gob.es/dnin/que-es',referencia:'Portal oficial Cl@ve Firma: los certificados centralizados necesarios para firmar son emitidos y custodiados por la Dirección General de la Policía; la GISS es prestador de servicios de confianza y guarda una copia de seguridad.'},
   {url:'https://clave.gob.es/dnin/funcionamiento.html',referencia:'Portal oficial Cl@ve, emisión y uso: identifica a la DGP como entidad que emite y custodia los certificados centralizados y describe las responsabilidades de GISS.'}
  ],null,'Se confirma DGP (opción C). La ficha distingue la emisión y custodia principal por la Dirección General de la Policía de la función de GISS como prestador de servicios y custodio de respaldo; por eso las opciones FNMT e IGAE no son correctas.','vigente']
 ],
 edits:{
  5996:{texto:'La API Java SAAJ (hoy Jakarta SOAP with Attachments API) que permite crear y procesar mensajes SOAP con ficheros adjuntos es:'},
  5997:{texto:'¿Para qué puede utilizar un servidor HTTP las cookies, datos que el navegador devuelve en peticiones posteriores?',opciones:[
   'Reconocer visitas y, cuando se usan para seguimiento, obtener información sobre los hábitos de navegación del usuario.',
   'Enviar código embebido en la página HTML que se ejecutará en el cliente.',
   'Generar por sí mismas ventanas emergentes (pop-ups).',
   'Contener y ejecutar código junto con los datos.'
  ]},
  5998:{texto:'El Servicio de Verificación y Consulta de Datos de la Plataforma de Intermediación no tiene por objetivo:'},
  5999:{texto:'En el contexto de una única ejecución de una aplicación y una misma definición de clase, ¿qué patrón de diseño limita la clase a una sola instancia y ofrece un punto de acceso común a ella?'},
  6000:{texto:'En Cl@ve Firma, los certificados electrónicos centralizados necesarios para la firma de los ciudadanos son emitidos y custodiados por:'}
 }
});
