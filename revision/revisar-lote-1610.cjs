const apply = require('./aplicar-lote.cjs');

const records = [
  [8351,[125],['IV-12'],['S-HTTP','SSL','protocolos históricos'],[
    {url:'https://www.rfc-editor.org/rfc/rfc2660.html#section-1.1',referencia:'RFC 2660, §1.1: S-HTTP protege mensajes HTTP individualmente.'},
    {url:'https://www.rfc-editor.org/rfc/rfc6101.html#section-1',referencia:'RFC 6101, §1: SSL permite que protocolos de nivel superior operen sobre su capa de registro.'}
  ],{texto:'¿Qué diferencia arquitectónica había entre S-HTTP y SSL 3.0?',opciones:['Ambos solo podían proteger mensajes HTTP individuales.','S-HTTP cifraba pero carecía de autenticación.','SSL se diseñó exclusivamente para el protocolo HTTP.','S-HTTP protegía mensajes HTTP individuales y SSL proporcionaba un canal a protocolos de aplicación.']},'Histórica D. S-HTTP operaba sobre mensajes HTTP y SSL ofrecía protección para una conexión bajo protocolos de aplicación.','historica'],
  [8352,[96],['III-7'],['AWStats','pruebas de carga','registros web'],[
    {url:'https://www.awstats.org/',referencia:'Proyecto AWStats: analizador de registros de servidores.'},
    {url:'https://jmeter.apache.org/',referencia:'Apache JMeter: genera carga y mide el rendimiento.'}
  ],{texto:'¿Qué herramienta se dedica a analizar registros web en lugar de generar carga de prueba contra la aplicación?',opciones:['AWStats','Siege','LoadRunner','JMeter']},'Corregida A. AWStats genera estadísticas a partir de registros existentes. Siege, LoadRunner y JMeter pueden generar solicitudes para pruebas de carga.','corregida'],
  [8353,[115],['IV-9'],['MPLS','etiqueta','pila'],[
    {url:'https://www.rfc-editor.org/rfc/rfc3032.html#section-2.1',referencia:'RFC 3032, §2.1: cada entrada de pila de etiquetas ocupa cuatro octetos.'}
  ],{texto:'Según el RFC 3032, ¿cuánto ocupa cada entrada de la pila de etiquetas MPLS?'},'Corregida A. Cada entrada ocupa 32 bits: etiqueta de 20 bits, campo de 3 bits, indicador de fondo de pila de 1 bit y TTL de 8 bits. La pila puede contener varias entradas.','corregida'],
  [8354,[98],['III-13'],['ISO 9000-3','calidad del software'],[
    {url:'https://www.iso.org/standard/26364.html',referencia:'Catálogo ISO: alcance y retirada de ISO 9000-3:1997.'}
  ],{texto:'¿Cuál era la finalidad de la guía histórica ISO 9000-3:1997?',opciones:['Orientar la aplicación de ISO 9001:1994 al desarrollo, suministro, instalación y mantenimiento de software.','Definir un protocolo de repetición de pruebas.','Regular la destrucción de resultados de pruebas.','Normalizar el versionado continuo.']},'Histórica A. La edición de 1997 era una guía para aplicar ISO 9001:1994 al software. ISO la retiró en 2004. Se pregunta por su alcance oficial, comprobable en el catálogo ISO.','historica'],
  [8355,[103],[],['EFQM','excelencia','modelo 2013'],[
    {url:'https://digital.gob.es/content/dam/sgad/sefp/es/portalsefp/gobernanza-publica/calidad/Metodolog-as-y-Guias/EFQM_GUIA_DE_INTERPRETACION_EFQM_2013.pdf',referencia:'Guía oficial española del Modelo EFQM 2013: criterios 1, 2 y 8.'}
  ],null,'Histórica C. Liderazgo y Estrategia eran criterios facilitadores y Resultados en la sociedad era un criterio de resultados. Organización no era el nombre de un criterio de esa edición.','historica']
];

apply({numero:'1610',fecha:'2026-11-26',records});
