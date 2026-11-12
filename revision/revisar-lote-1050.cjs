const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const isoOSI='https://www.iso.org/standard/20269.html';
const rfc9293='https://www.rfc-editor.org/rfc/rfc9293.html';
const rfc2018='https://www.rfc-editor.org/rfc/rfc2018.html';
const nistLaser='https://www.nist.gov/history/nists-role-laser-measurements-and-applications/what-laser';
const oshaLaser='https://www.osha.gov/otm/section-3-health-hazards/chapter-6';
const mef='https://www.mef.net/wp-content/uploads/2010/10/MEF-Presentation-Overview-of-MEF-28.pdf';
const rfc3031='https://www.rfc-editor.org/rfc/rfc3031.html';
const rfc3032='https://www.rfc-editor.org/rfc/rfc3032.html';
const rfc5036='https://www.rfc-editor.org/rfc/rfc5036.html';
const rfc3209='https://www.rfc-editor.org/rfc/rfc3209.html';
const net='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const records=[
 [5571,[111],['IV-8'],['OSI','ISO/IEC 7498-1','modelo de referencia'],[
  {url:isoOSI,referencia:'Ficha oficial ISO/IEC 7498-1:1994, Open Systems Interconnection — Basic Reference Model: The Basic Model; ISO indica que la edición sigue vigente.'},
  {url:'https://www.itu.int/rec/T-REC-X.200',referencia:'UIT-T X.200, modelo de referencia básico de interconexión de sistemas abiertos (OSI), recomendación técnicamente alineada con ISO/IEC 7498-1.'},
  {url:a1,referencia:'Convocatoria GSI A1 2025, anexo I, tema 111: arquitectura, capas, interfaces y protocolos del modelo OSI de ISO.'},
  {url:a2,referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.8: protocolos y técnicas de transmisión en redes.'},
  {url:net,referencia:'ITIC Academy 2026, bloque 42 Redes, apartado 1.2: atribuye expresamente el modelo OSI a ISO/IEC 7498-1 y señala su equivalente UIT-T X.200; cotejo curricular.'}
 ],null,'Se confirma A. Se concreta que se pregunta por la norma ISO del modelo básico OSI; ISO/IEC 7498-1:1994 es la edición vigente confirmada. X.200 es la recomendación UIT-T equivalente, pero no figura entre las opciones.', 'vigente'],
 [5572,[108],['IV-8'],['TCP','ventana deslizante','control de flujo','ACK'],[
  {url:rfc9293,referencia:'RFC 9293, Transmission Control Protocol, especificación vigente de TCP: números de secuencia, ventana de envío/recepción y control de flujo; la ventana limita los datos en tránsito en unidades de secuencia, no necesariamente en paquetes completos.'},
  {url:rfc2018,referencia:'RFC 2018, TCP Selective Acknowledgment Options: distingue las confirmaciones acumulativas de los bloques recibidos fuera de orden; los ACK selectivos no son condición definitoria de toda ventana deslizante.'},
  {url:a1,referencia:'Convocatoria GSI A1 2025, anexo I, tema 108: protocolos de red, transmisión y encaminamiento.'},
  {url:a2,referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.8: protocolos y técnicas de transmisión.'},
  {url:net,referencia:'ITIC Academy 2026, bloque 42 Redes, apartado sobre TCP (RFC 9293) y control de flujo mediante ventana deslizante; cotejo curricular.'}
 ],null,'Se corrige la clave múltiple original. En TCP la ventana limita el intervalo de datos que pueden enviarse sin confirmación y sus límites se actualizan con ACK y ventana anunciada; los números de secuencia se refieren a bytes. No es necesariamente un recuento de paquetes completos ni exige ACK fuera de orden. Respuesta única B.', 'corregida'],
 [5573,[108],['IV-7'],['láser','emisión estimulada','medio activo','cavidad óptica'],[
  {url:nistLaser,referencia:'NIST, What Is a Laser?: describe la emisión estimulada, el medio excitado, la amplificación óptica en la cavidad de espejos y la salida del haz.'},
  {url:oshaLaser,referencia:'OSHA Technical Manual, sección III, capítulo 6: un láser está formado por cavidad óptica, sistema de bombeo y medio activo; define el acrónimo LASER.'},
  {url:a1,referencia:'Convocatoria GSI A1 2025, anexo I, tema 108: medios de transmisión y redes de telecomunicaciones.'},
  {url:a2,referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.7: medios de transmisión guiados y parámetros.'},
  {url:net,referencia:'ITIC Academy 2026, bloque 42 Redes, sección de fibra óptica y fuentes (LED/VCSEL y láseres); cotejo curricular.'}
 ],null,'Se reformula para dar la definición física correcta: el láser amplifica luz mediante emisión estimulada en un medio activo excitado y una cavidad óptica. Se conserva A como respuesta, pero se eliminan las imprecisiones de “onda confinada” como definición suficiente.', 'corregida'],
 [5574,[108,113],['IV-8'],['Carrier Ethernet','MEF','atributos','QoS','gestión del servicio'],[
  {url:mef,referencia:'MEF, presentación oficial de especificaciones (MEF 28), diapositiva 7: enumera los cinco atributos Carrier Ethernet: escalabilidad, gestión del servicio, fiabilidad, QoS y servicios estandarizados.'},
  {url:'https://www.mef.net/wp-content/uploads/2016/09/MEF-white-paper-Understanding-Carrier-Ethernet-Service-Assurance-Part-II.pdf',referencia:'MEF, Understanding Carrier Ethernet Service Assurance, parte II: diferencia los atributos de servicio y rendimiento de Ethernet Carrier.'},
  {url:a1,referencia:'Convocatoria GSI A1 2025, anexo I, temas 108 y 113: interconexión/calidad de servicio y redes de transporte/agregación, incluidos Carrier Ethernet y VPLS.'},
  {url:a2,referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.8: redes locales, protocolos, técnicas y servicios.'},
  {url:net,referencia:'ITIC Academy 2026, bloque 42 Redes, apartado 7 y temario oficial sobre Carrier Ethernet-VPLS; cotejo curricular.'}
 ],null,'Se mantiene C como excepción, precisando que se pregunta por los cinco atributos definidos por MEF. La lista es: servicios estandarizados, escalabilidad, fiabilidad, calidad de servicio (QoS) y gestión del servicio. “Gestión de la calidad” no es un atributo adicional con ese nombre; no debe confundirse QoS con service management.', 'corregida'],
 [5575,[108,113],['IV-8','IV-13'],['MPLS','FEC','LSR','distribución de etiquetas','encaminamiento'],[
  {url:rfc3031,referencia:'RFC 3031, MPLS Architecture: define FEC, conmutación por etiquetas y distribución de bindings; contempla interacción con rutas IGP/BGP y distintos procedimientos/protocolos para distribuir etiquetas, no un protocolo único obligatorio.'},
  {url:rfc3032,referencia:'RFC 3032, MPLS Label Stack Encoding: define el formato y encapsulado de la pila de etiquetas; se evita generalizar a todos los medios la posición de una cabecera shim Ethernet.'},
  {url:rfc5036,referencia:'RFC 5036, LDP Specification: un protocolo de distribución de etiquetas definido para MPLS, no el único mecanismo posible en toda la arquitectura.'},
  {url:rfc3209,referencia:'RFC 3209, RSVP-TE: especifica extensiones de RSVP para señalización de LSPs con ingeniería de tráfico, ejemplo de mecanismos distintos a LDP.'},
  {url:a1,referencia:'Convocatoria GSI A1 2025, anexo I, temas 108 y 113: encaminamiento e infraestructura de redes de transporte, MPLS.'},
  {url:a2,referencia:'Convocatoria GSI A2 2025, anexo IX, temas IV.8 y IV.13: protocolos de red e Internet.'},
  {url:net,referencia:'ITIC Academy 2026, bloque 42 Redes, apartado 7.5 MPLS: FEC, etiquetas, LER/LSR, encaminamiento y distribución de etiquetas; cotejo curricular.'}
 ],null,'Se concreta el contexto arquitectónico para evitar la ambigüedad de la opción antigua (“MPLS no necesita OSPF o BGP”), que depende del plano de control y del despliegue. La afirmación inequívocamente falsa pasa a ser D: RFC 3031 no impone OSPF ni un único protocolo de distribución; contempla varios procedimientos y mecanismos (por ejemplo LDP y RSVP-TE). Las FEC agrupan paquetes con el mismo tratamiento de reenvío y se asocian a etiquetas.', 'corregida']
];
const edits={
 5571:{texto:'¿Qué norma ISO define el modelo de referencia básico de Interconexión de Sistemas Abiertos (OSI)?',opciones:['ISO/IEC 7498-1.','IEEE 802.16.','RFC 2460.','ISO/IEC 27000.'],respuesta_correcta:0},
 5572:{texto:'En el control de flujo de TCP, ¿qué describe correctamente la ventana deslizante?',opciones:['Siempre representa un número fijo de segmentos completos, independientemente de sus bytes.','Limita el intervalo de datos que puede enviarse sin confirmación; el emisor actualiza sus límites conforme recibe ACK y la ventana anunciada.','Obliga a detener el envío tras cada segmento hasta recibir su ACK, como en parada y espera.','Solo funciona cuando el receptor confirma los datos en orden inverso.'],respuesta_correcta:1},
 5573:{texto:'¿Qué caracteriza a un láser como fuente de luz?',opciones:['Amplifica luz mediante emisión estimulada en un medio activo excitado dentro de una cavidad óptica.','Emite necesariamente un espectro amplio de frecuencias incoherentes en todas las direcciones.','Es un diodo de avalancha que selecciona una frecuencia de una señal eléctrica.','Es un filtro óptico pasivo que elimina todas las longitudes de onda salvo una.'],respuesta_correcta:0},
 5574:{texto:'¿Cuál de las siguientes opciones NO es uno de los cinco atributos de Carrier Ethernet definidos por MEF?',opciones:['Servicios estandarizados.','Escalabilidad.','Un atributo denominado “gestión de la calidad”, separado de QoS y de la gestión del servicio.','Fiabilidad.'],respuesta_correcta:2},
 5575:{texto:'Según la arquitectura MPLS de RFC 3031, señale la afirmación INCORRECTA.',opciones:['Una FEC agrupa paquetes que reciben el mismo tratamiento de reenvío.','En el encaminamiento salto a salto, los LSR asocian etiquetas a FEC y distribuyen sus bindings mediante mecanismos de distribución de etiquetas.','MPLS puede interoperar con rutas aprendidas mediante protocolos de encaminamiento y emplear distintos mecanismos de señalización/distribución.','La arquitectura exige OSPF como único protocolo de encaminamiento y LDP como único mecanismo de señalización de LSP.'],respuesta_correcta:3}
};
aplicar({numero:'1050',fecha:'2026-11-12',records,edits});
