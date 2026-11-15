const aplicar=require('./aplicar-lote.cjs');
const edits={
6841:{texto:'¿Cuál de las siguientes opciones NO es un protocolo de capa de aplicación para transferir datos en entornos IoT?',opciones:['MQTT, protocolo de mensajería publish/subscribe.','CoAP, protocolo web para dispositivos restringidos.','Thread, red mallada IPv6 de baja potencia.','HTTP, protocolo de transferencia de hipertexto.']},
6842:{texto:'En el modelo de ciudad inteligente de seis dimensiones de Giffinger, ¿cuál de las siguientes NO es una dimensión?',opciones:['Iluminación inteligente.','Movilidad inteligente.','Personas inteligentes.','Vida inteligente.']},
6843:{texto:'¿Cuál de estas opciones NO es una tecnología inalámbrica de comunicación utilizada para conectar dispositivos IoT?',opciones:['IEEE 802.11 (Wi-Fi).','LonWorks, tecnología de red de control que puede usar medios cableados.','Bluetooth 5.0.','IEEE 802.15.4, estándar de redes inalámbricas de bajo consumo.']},
6844:{texto:'¿Qué Recomendación UIT-T establece requisitos de interoperabilidad para plataformas de ciudades inteligentes?',opciones:['ITU-T Y.7200.','ITU-T Y.3307.','ITU-T Y.4200.','Ninguna de las anteriores.']},
6845:{texto:'¿Cómo se denomina la automatización y el control de los sistemas de una vivienda para mejorar, entre otros aspectos, el confort y la seguridad?',opciones:['Infordomótica.','Domotelemática.','Domótica.','Telemática urbanística.']}
};
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const rec=[
[6841,[117],['IV-13'],['IoT','protocolos de aplicación','MQTT','CoAP','HTTP','Thread','capas de red'],[
{url:'https://www.rfc-editor.org/rfc/rfc9019.html',referencia:'IETF RFC 9019 señala MQTT, CoAP y HTTP entre los protocolos de capa de aplicación usados por dispositivos IoT.'},
{url:'https://threadgroup.org/Home/lang/en',referencia:'Thread Group define Thread como protocolo/red mallada inalámbrica IP de bajo consumo para IoT, no como protocolo de aplicación para transferencia de datos.'},
{url:'https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html',referencia:'OASIS MQTT Version 5.0: especificación del protocolo de mensajería publish/subscribe.'},
{url:'https://www.rfc-editor.org/rfc/rfc7252.html',referencia:'IETF RFC 7252: CoAP, protocolo web especializado para nodos y redes restringidos.'},
{url:'https://www.rfc-editor.org/rfc/rfc9110.html',referencia:'IETF RFC 9110: semántica HTTP.'},
{url:a1,referencia:'Convocatoria estatal A1 GSI 2025, anexo I, tema 117: IoT.'},{url:a2,referencia:'Convocatoria estatal A2 GSI 2025, anexo, tema IV.13: Internet e IoT.'}
],edits[6841],'Se mantiene C, pero se corrige la categoría conceptual: MQTT, CoAP y HTTP son protocolos de aplicación; Thread proporciona conectividad IP mallada para los nodos y no es un protocolo de transferencia de datos de aplicación. La nueva redacción elimina la confusión entre transporte de aplicación y comunicación de red.', 'corregida'],
[6842,[117],['IV-13'],['ciudad inteligente','modelo de Giffinger','seis dimensiones','smart mobility','smart people','smart living'],[
{url:'https://repositum.tuwien.at/handle/20.500.12708/153435',referencia:'Informe original Giffinger et al. (2007), repositorio de TU Wien: desarrolla el modelo de ciudad inteligente de seis características/dimensiones.'},
{url:'https://www.smart-city.uliege.be/cms/c_6946640/en/the-smart-city-in-6-dimensions',referencia:'Universidad de Lieja resume las seis dimensiones de Giffinger: economía, personas, gobernanza, movilidad, medio ambiente y vida.'},
{url:a1,referencia:'Convocatoria estatal A1 GSI 2025, anexo I, tema 117: ciudades inteligentes.'},{url:a2,referencia:'Convocatoria estatal A2 GSI 2025, anexo, tema IV.13: Internet e IoT.'}
],edits[6842],'Se mantiene A. Se explicita que la pregunta se refiere al modelo de seis dimensiones de Giffinger: smart economy, people, governance, mobility, environment y living. Iluminación inteligente puede ser una solución de ciudad, pero no es una de las seis categorías del modelo. No se afirma que sea una taxonomía universal única.', 'corregida'],
[6843,[117],['IV-13'],['IoT','conectividad inalámbrica','IEEE 802.11','Bluetooth','IEEE 802.15.4','LonWorks','automatización de edificios'],[
{url:'https://www.iso.org/standard/60203.html',referencia:'ISO/IEC 14908-1 especifica un protocolo de comunicaciones para redes locales de control; la familia contempla varios medios físicos, no es una tecnología exclusivamente inalámbrica.'},
{url:'https://www.lonmark.org/technology/lon-technology/standards/',referencia:'LonMark enumera los estándares LonWorks ISO/IEC 14908 para medios de par trenzado y línea eléctrica, además de IP tunneling.'},
{url:'https://www.ieee802.org/11/',referencia:'IEEE 802.11: familia de estándares para redes LAN inalámbricas.'},
{url:'https://www.bluetooth.com/specifications/specs/',referencia:'Bluetooth SIG publica las especificaciones Bluetooth, incluidas Bluetooth Core 5.0 y posteriores.'},
{url:'https://standards.ieee.org/ieee/802.15.4/7029/',referencia:'IEEE 802.15.4: estándar de redes inalámbricas de baja tasa de datos para dispositivos de baja potencia.'},
{url:a1,referencia:'Convocatoria estatal A1 GSI 2025, anexo I, tema 117: ciudades inteligentes e IoT.'},{url:a2,referencia:'Convocatoria estatal A2 GSI 2025, anexo, tema IV.13: Internet e IoT.'}
],edits[6843],'Se mantiene B y se acota «tecnología básica» a tecnologías inalámbricas. LonWorks es una red/protocolo de control normalizado que opera en medios como par trenzado o línea eléctrica; no es, en su definición, una tecnología radioeléctrica, aunque la familia de soluciones pueda interoperar con redes y extensiones inalámbricas. Así se evita presentar a LonWorks como si no fuera tecnología de comunicación en IoT/building automation.', 'corregida'],
[6844,[117],['IV-13'],['ITU-T Y.4200','ciudades inteligentes','plataformas','interoperabilidad','UIT-T'],[
{url:'https://www.itu.int/rec/T-REC-Y.4200/en',referencia:'Ficha oficial UIT-T: Y.4200 (02/2018), «Requirements for the interoperability of smart city platforms», estado en vigor.'},
{url:'https://www.itu.int/itu-t/recommendations/rec.aspx?rec=13387',referencia:'Registro de recomendaciones UIT-T: Y.4200 define requisitos de interoperabilidad y puntos de referencia para plataformas de ciudades inteligentes.'},
{url:a1,referencia:'Convocatoria estatal A1 GSI 2025, anexo I, tema 117: ciudades inteligentes.'},{url:a2,referencia:'Convocatoria estatal A2 GSI 2025, anexo, tema IV.13: Internet e IoT.'}
],edits[6844],'Se mantiene C, Y.4200. La pregunta queda en los términos del título oficial de la recomendación: requisitos de interoperabilidad para plataformas de ciudad inteligente. No se confunde con recomendaciones cercanas de la serie Y.4200.', 'corregida'],
[6845,[117],['IV-13'],['domótica','automatización de viviendas','confort','seguridad','gestión energética'],[
{url:'https://www.idae.es/tecnologias/eficiencia-energetica/edificacion/domotica',referencia:'IDAE define domótica como automatización y control aplicados a la vivienda, y menciona mejoras de calidad de vida, bienestar, seguridad y consumo energético.'},
{url:'https://www.boe.es/buscar/act.php?id=BOE-A-2011-5834',referencia:'Real Decreto 346/2011, anexo: concepto de hogar digital y servicios de control del entorno para seguridad, eficiencia energética y confort.'},
{url:a1,referencia:'Convocatoria estatal A1 GSI 2025, anexo I, tema 117; encuadre curricular indirecto en ciudades inteligentes e IoT, no epígrafe específico de domótica.'},{url:a2,referencia:'Convocatoria estatal A2 GSI 2025, anexo, tema IV.13; encuadre curricular indirecto por IoT, no epígrafe específico de domótica.'}
],edits[6845],'Se mantiene C. La definición coincide con IDAE: automatización y control de equipos de vivienda, con beneficios posibles en confort, seguridad y energía. Se hace explícito que domótica es la denominación del concepto, sin equipararla a la red pública ni reducirla a telecomunicación urbana.', 'corregida']
];
aplicar({numero:'1304',fecha:'2026-11-15',records:rec});
