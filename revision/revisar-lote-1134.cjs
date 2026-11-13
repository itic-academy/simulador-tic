require('./aplicar-lote.cjs')({
 numero:'1134',fecha:'2026-11-13',
 records:[
  [5991,[5],[],['Comisión Europea','Tratado de la Unión Europea','dimisión de comisarios'],[
   {url:'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:12016M017',referencia:'Tratado de la Unión Europea consolidado, art. 17.6: un miembro presentará su dimisión si se lo pide el Presidente de la Comisión; no exige aprobación previa del Colegio.'},
   {url:'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:12001C004',referencia:'Tratado CE consolidado tras Niza, art. 217: régimen histórico que sí condicionaba la exigencia de dimisión a la aprobación previa de la Comisión.'}
  ],null,'Se cambia la clave a C conforme al art. 17.6 TUE vigente. La opción original A reflejaba el régimen anterior del Tratado CE; se reformula para que diga expresamente que la aprobación previa es requisito exclusivo, evitando que pueda interpretarse como una posibilidad adicional compatible con el texto actual.','corregida'],
  [5992,[5],[],['Estrategia Europa 2020','prioridades de crecimiento de la Unión Europea','pregunta histórica'],[
   {url:'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:52010DC2020',referencia:'Comunicación de la Comisión COM(2010) 2020 final, Europa 2020: sus tres prioridades son crecimiento inteligente, sostenible e integrador.'}
  ],null,'Se delimita expresamente el período 2010–2020. Las prioridades eran crecimiento inteligente, sostenible e integrador; la estrategia ha concluido, por lo que se conserva como contenido histórico y la clave A sigue siendo correcta.','historica'],
  [5993,[108],['IV-8'],['pasarelas','modelo OSI','nivel de aplicación','redes'],[
   {url:'https://learn.microsoft.com/en-us/azure/application-gateway/overview',referencia:'Microsoft Learn, Azure Application Gateway: el gateway de aplicaciones trabaja en el nivel 7 del modelo OSI.'},
   {url:'https://learn.microsoft.com/en-us/azure/application-gateway/application-gateway-components',referencia:'Microsoft Learn, componentes de Application Gateway: el proxy para HTTP/HTTPS, HTTP/2 y WebSocket opera en la capa 7; el producto también admite proxy L4 para TLS/TCP.'}
  ],null,'La palabra gateway sin contexto es demasiado amplia: existen pasarelas de distintos niveles. Se especifica una pasarela de aplicación que procesa o traduce protocolos de aplicación; para ese tipo, la respuesta es nivel de aplicación (OSI 7).','corregida'],
  [5994,[132],['IV-6'],['virtualización','VMware Workstation Player','hipervisores','vigencia tecnológica'],[
   {url:'https://knowledge.broadcom.com/external/article?legacyId=80807',referencia:'Broadcom Knowledge Base, sistemas anfitriones admitidos por Workstation Player/Workstation Pro: Workstation se ejecuta en sistemas anfitriones Windows o Linux de 64 bits, no en cualquier sistema operativo.'},
   {url:'https://blogs.vmware.com/cloud-foundation/2024/11/11/vmware-fusion-and-workstation-are-now-free-for-all-users/',referencia:'VMware Cloud Foundation, 11-11-2024: Workstation Pro y Fusion Pro pasan a estar disponibles gratuitamente y Player deja de ser una distribución independiente.'},
   {url:'https://access.redhat.com/articles/1344173',referencia:'Red Hat Customer Portal, virtualización KVM/Libvirt en Red Hat Enterprise Linux: acredita la infraestructura de virtualización ofrecida por Red Hat para Linux.'}
  ],null,'La afirmación falsa continúa siendo la opción D: la disponibilidad para anfitriones de VMware Workstation Player no era universal, sino para Windows/Linux x64. Se contextualiza la pregunta en el ciclo del producto Player porque desde 2024 dejó de distribuirse por separado y Workstation Pro lo sustituyó como oferta gratuita; no se presenta Player como producto actual independiente. También se corrige el error tipográfico de la opción C.','historica'],
  [5995,[22,46],['I-10'],['SIR','Sistema de Interconexión de Registros','interoperabilidad','intercambio registral'],[
   {url:'https://administracionelectronica.gob.es/ctt/sir',referencia:'Portal de Administración Electrónica, CTT, Sistema de Interconexión de Registros: identifica SIR como infraestructura básica para intercambiar asientos electrónicos de registro entre las AAPP; admite aplicaciones registrales certificadas conforme a SICRES.'},
   {url:'https://administracionelectronica.gob.es/ctt/sir/descargas',referencia:'Portal de Administración Electrónica, descargas SIR: recoge la evolución y convivencia con las versiones de la Norma Técnica SICRES.'}
  ],null,'Se confirma SIR como infraestructura de intercambio; SICRES es la norma/formato de interoperabilidad que deben cumplir las aplicaciones registrales certificadas, mientras GEISER y ORVE son soluciones de registro que pueden operar conectadas a SIR.','vigente']
 ],
 edits:{
  5991:{opciones:[
   'El Presidente de la Comisión solo puede exigir la dimisión de un Comisario si el Colegio aprueba previamente esa decisión.',
   'La Comisión por mayoría de dos tercios de sus miembros puede exigir la dimisión de un Comisario.',
   'El Presidente, sin necesidad de contar con la Comisión, puede exigir la dimisión de un Comisario.',
   'Únicamente el Presidente del Consejo puede exigir la dimisión de un Comisario.'
  ],respuesta_correcta:2},
  5992:{texto:'En la Estrategia Europa 2020 de la Unión Europea (2010–2020), ¿cuál de las siguientes opciones NO era una de sus tres prioridades?'},
  5993:{texto:'Una pasarela de aplicación (application-layer gateway), que procesa o traduce protocolos de aplicación, opera en qué nivel del modelo OSI?'},
  5994:{texto:'Respecto a las soluciones de virtualización de escritorio durante el ciclo de VMware Workstation Player, señale la afirmación falsa.',opciones:[
   'VirtualBox es un producto de Oracle.',
   'Hyper-V es un producto de Microsoft.',
   'Red Hat mantiene una infraestructura de virtualización propia para Linux.',
   'VMware Workstation Player podía ejecutarse como sistema anfitrión en cualquier sistema operativo.'
  ],respuesta_correcta:3}
 }
});
