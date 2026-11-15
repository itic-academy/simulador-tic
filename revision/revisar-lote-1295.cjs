const aplicar=require('./aplicar-lote.cjs');
const docs={
  6796:{texto:'Según la Ley Orgánica del Poder Judicial, ¿qué cargo preside conjuntamente el Tribunal Supremo y el Consejo General del Poder Judicial?'},
  6797:{texto:'En una videoconferencia interactiva en tiempo real con audio y vídeo sincronizados, ¿qué aplicación es más sensible a la variación del retardo entre paquetes (jitter)?'},
  6798:{texto:'¿Cuál de estas tareas corresponde a definir el alcance del SGSI, y no a una actividad específica de elaborar e implantar un plan de continuidad del negocio?'},
  6799:{texto:'Según la guía de configuración VTP de Cisco IOS XE, ¿cuál de estas opciones no es un modo VTP documentado?'},
  6800:{texto:'Según el Real Decreto 1855/2009, en la redacción dada por el Real Decreto 796/2025, ¿qué afirmación sobre la OADIS es incorrecta?',opciones:[
    'Estudia y analiza las consultas, quejas o denuncias en materia de discriminación por razón de discapacidad.',
    'Presta asesoramiento con carácter vinculante.',
    'Propone al Pleno medidas preventivas y realiza el seguimiento de las medidas propuestas.',
    'Se organiza bajo la superior supervisión del Consejo Nacional de la Discapacidad.'
  ]},
};
const records=[
  [6796,[2],[],['constitución','poder judicial','cgpj'],[
    {url:'https://www.boe.es/buscar/act.php?id=BOE-A-1985-12666',referencia:'Ley Orgánica 6/1985, del Poder Judicial, art. 585: la presidencia del Tribunal Supremo y la del CGPJ son un único cargo.'},
    {url:'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229',referencia:'Constitución Española, art. 122.3: contempla la presidencia del Tribunal Supremo; la denominación conjunta del cargo se precisa en la LOPJ.'},
    {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Programa oficial A1 GSI 2025, tema A1-2: Poder Judicial y CGPJ.'}
  ],'LOPJ, art. 585. Se ajusta la pregunta: la Constitución menciona al presidente del Tribunal Supremo, mientras que la LOPJ expresa que preside conjuntamente Tribunal Supremo y CGPJ.','corregida'],
  [6797,[108,130],['IV-16'],['redes','calidad de servicio','jitter','videoconferencia'],[
    {url:'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-Y.1541-200205-S%21%21PDF-E&lang=f&type=items',referencia:'Recomendación ITU-T Y.1541, tabla 2: VoIP y videoconferencia (VTC) son tráfico en tiempo real sensible al jitter; el streaming de vídeo se trata como aplicación de baja pérdida.'},
    {url:'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-Y.1545-202105-I%21Cor1%21PDF-E&lang=e&type=items',referencia:'ITU-T Y.1545 Corr.1: identifica VTC y VoIP como aplicaciones interactivas sensibles al retardo variable.'},
    {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Programa oficial A1 GSI 2025, temas A1-108 (calidad de servicio en redes) y A1-130 (videoconferencia y dimensionamiento).'},
    {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Programa oficial A2 GSI 2025, tema A2-IV-16: videoconferencia y calidad de servicio.'}
  ],'La respuesta se refiere a videoconferencia interactiva en tiempo real. El vídeo bajo demanda usa almacenamiento en búfer y suele ser menos sensible al jitter que una conversación bidireccional; el correo y la mensajería asíncrona toleran aún más variación.','corregida'],
  [6798,[128],['II-13'],['seguridad','continuidad del negocio','sgsi','planes de contingencia'],[
    {url:'https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf',referencia:'NIST SP 800-34 Rev. 1: el plan de contingencia contiene política, análisis de impacto, controles preventivos, estrategias de recuperación, procedimientos, pruebas, formación y mantenimiento; definir el alcance del SGSI pertenece al sistema de gestión.'},
    {url:'https://www.iso.org/standard/27001',referencia:'ISO/IEC 27001:2022, ficha oficial del estándar de requisitos del SGSI; la determinación de su alcance es una cuestión del sistema de gestión (cláusula 4.3), distinta del contenido operativo del plan de continuidad.'},
    {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Programa oficial A1 GSI 2025, tema A1-128: gestión de continuidad del negocio y planes de continuidad y contingencia.'},
    {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Programa oficial A2 GSI 2025, tema A2-II-13: seguridad de sistemas de información y gestión de incidentes.'}
  ],'Se distingue la definición del alcance del SGSI —contexto y límites del sistema de gestión— de la preparación del plan de continuidad, que sí comprende organización, responsables, procedimientos, formación y pruebas.','corregida'],
  [6799,[108],['IV-8'],['redes','ethernet','vlan','vtp'],[
    {url:'https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vtp.html',referencia:'Cisco IOS XE 17, VLAN Configuration Guide, apartado Configure VTP: modos documentados server, client, transparent y off; "learning" no es uno de ellos.'},
    {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Programa oficial A1 GSI 2025, tema A1-108: redes, interconexión y calidad de servicio.'},
    {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Programa oficial A2 GSI 2025, tema A2-IV-8: redes locales, protocolos y dispositivos de interconexión.'}
  ],'La respuesta se acota a los modos documentados en la guía Cisco IOS XE citada, ya que la disponibilidad concreta puede variar por versión y plataforma.','corregida'],
  [6800,[16],['I-5'],['discapacidad','igualdad de trato','oadis','no discriminación'],[
    {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-17928',referencia:'Real Decreto 796/2025, de 9 de septiembre, art. cuarto, que modifica los arts. 11–15 del RD 1855/2009: art. 13.a atribuye a OADIS asesoramiento facultativo y no vinculante; arts. 13.b–d regulan estudio de quejas y propuesta/seguimiento de medidas; art. 12.1 mantiene la supervisión del Consejo Nacional de la Discapacidad.'},
    {url:'https://www.boe.es/buscar/act.php?id=BOE-A-2013-12632',referencia:'Real Decreto Legislativo 1/2013, texto refundido de la Ley General de derechos de las personas con discapacidad y de su inclusión social, marco legal de igualdad, no discriminación y accesibilidad universal.'},
    {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Programa oficial A1 GSI 2025, tema A1-16: discapacidad y políticas de igualdad y no discriminación.'},
    {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Programa oficial A2 GSI 2025, tema A2-I-5: discapacidad y dependencia, régimen jurídico.'}
  ],'El Real Decreto 796/2025 actualizó el estatuto del Consejo Nacional de la Discapacidad y de la OADIS: el asesoramiento es facultativo y no vinculante. La oficina estudia consultas, quejas o denuncias y propone/realiza seguimiento de medidas; permanece bajo supervisión superior del Consejo.','corregida']
];
const edits=Object.fromEntries(Object.entries(docs).map(([id,edit])=>[id,edit]));
const mapped=records.map(([id,...rest])=>[id,...rest.slice(0,4),edits[id],...rest.slice(4)]);
aplicar({numero:'1295',fecha:'2026-11-15',records:mapped});
