const ce='https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229';
const records=[
[646,[104,105],['II-16'],['gestión-documental','búsqueda'],'https://github.com/Alfresco/alfresco-client-sdk/blob/master/docs/openapi/alfresco-search.yaml','Alfresco Search API, consultas y atributos de texto','Un gestor documental puede ofrecer búsquedas por palabras clave, texto completo y campos indexados. Son mecanismos compatibles y no categorías excluyentes. Se explicita que dependen de la configuración, sin exigir que todo producto implemente todas las posibilidades.'],
[647,[1],['I-1'],['Constitución','título-preliminar'],ce+'#tpreliminar','Constitución, título preliminar y comienzo del título I','El título preliminar comprende los artículos 1 a 9; el artículo 10 inicia el título I. Se simplifica el enunciado para preguntar por su extensión sin sugerir que todos los principios constitucionales se agotan en él.'],
[648,[1],['I-2'],['Congreso','elecciones'],ce+'#a68','Constitución, artículo 68.6','A es correcta: el artículo 68.6 establece elecciones entre 30 y 60 días desde el fin del mandato y convocatoria del Congreso electo dentro de los 25 días siguientes a las elecciones. Se identifica expresamente la norma constitucional.'],
[649,[1],['I-3'],['Gobierno','cese'],ce+'#a101','Constitución, artículos 99.5, 100, 101 y 102.1','A reproduce las causas de cese del artículo 101.1. La responsabilidad penal corresponde a la Sala de lo Penal del Supremo. El Rey nombra y separa ministros a propuesta del Presidente. La investidura fallida se computa por dos meses; disuelve el Rey con refrendo del Presidente del Congreso.'],
[650,[1],['I-1'],['Corona','sucesión'],ce+'#a57','Constitución, artículos 57.3, 57.5, 58 y 59.3','C coincide con el artículo 57.3. La excepción para consortes es la Regencia, no la tutela. Las abdicaciones, renuncias y dudas sucesorias se resuelven por ley orgánica. La Regencia nombrada por las Cortes se integra por una, tres o cinco personas.']
];
const edits={
646:{texto:'Según sus funcionalidades y configuración, ¿qué mecanismos puede ofrecer un sistema de gestión documental para recuperar información?',opciones:['Búsqueda por palabras clave.','Búsqueda en texto completo.','Consulta de campos indexados.','Todas las anteriores.']},
647:{texto:'¿Qué artículos comprende el título preliminar de la Constitución Española de 1978?'},
648:{texto:'Según el artículo 68.6 de la Constitución Española, las elecciones al Congreso de los Diputados tendrán lugar:'}
};
require('./aplicar-lote.cjs')({numero:'066',fecha:'2026-10-21',records,edits});
