require('./aplicar-lote.cjs')({
 numero:'1163',fecha:'2026-11-13',
 records:[
  [6136,[118],['IV-8'],['hub','concentrador','repetidor multipuerto','capa física','LAN'],[
   {url:'https://www.cisco.com/en/US/docs/internetworking/troubleshooting/guide/tr1923.html',referencia:'Cisco, Troubleshooting LAN Switching Environments: caracteriza el hub como dispositivo de capa física que repite señales recibidas hacia los demás puertos.'},
   {url:'https://www.cisco.com/site/us/en/learn/topics/networking/what-is-an-ethernet-switch.html',referencia:'Cisco: distingue el hub como punto central/agregador que no administra el tráfico de los puertos.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 118: redes LAN y dispositivos de interconexión.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.8: redes locales y dispositivos.'}
  ],null,'La opción B es correcta: el hub es un concentrador multipuerto que conecta los segmentos físicos de una LAN y repite la señal recibida a los demás puertos; no es un conector, balun ni terminador. En redes Ethernet actuales se emplean normalmente switches, pero eso no invalida la definición del equipo hub.','vigente'],
  [6137,[118],['IV-8'],['cableado estructurado','subsistema horizontal','distribuidor de planta','toma de telecomunicaciones'],[
   {url:'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-L.76-200805-I%21%21PDF-E&lang=f&type=items',referencia:'Recomendación UIT-T L.76, §6.4: define el subsistema horizontal como el que se extiende desde el distribuidor de planta hasta las tomas de telecomunicaciones conectadas.'},
   {url:'https://www.iso.org/standard/66182.html',referencia:'ISO/IEC 11801-1:2017, requisitos generales de cableado genérico de cliente; marco internacional vigente de subsistemas y componentes de cableado.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 118: LAN y cableado estructurado.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.8: redes locales y cableado.'}
  ],null,'La opción B es correcta. El subsistema horizontal enlaza el distribuidor de planta (floor distributor) con las tomas de telecomunicaciones del área de trabajo; los enlaces entre plantas o edificios son cableado troncal/backbone.','vigente'],
  [6138,[108],['IV-7'],['retardo de propagación','ancho de banda','producto ancho de banda-retardo','octetos en tránsito','unidades SI'],[
   {url:'https://www.rfc-editor.org/rfc/rfc6349.html',referencia:'IETF RFC 6349, §3.3.1: define el producto ancho de banda-retardo en bits como ancho de banda (bit/s) multiplicado por el retardo (s), y convierte a bytes dividiendo entre ocho; para este enunciado se usa el retardo unidireccional hasta la llegada del primer bit, no RTT.'},
   {url:'https://www.rfc-editor.org/rfc/rfc7323.html',referencia:'IETF RFC 7323: formaliza el producto ancho de banda × retardo en los enlaces y su importancia para los datos que pueden estar en tránsito.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 108: características y parámetros de transmisión.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.7: medios y parámetros de transmisión.'}
  ],null,'La respuesta C (16.000 octetos) es correcta bajo unidades decimales de la tasa: 64.000.000 bit/s × 0,002 s = 128.000 bit; dividido entre 8 = 16.000 octetos. Se trata de los bits que ya salieron del transmisor cuando el primer bit alcanza B; no depende del tamaño total de 15 MB mientras el fichero siga transmitiéndose.','vigente'],
  [6139,[118],['IV-8'],['Ethernet','MDI','MDI-X','cable directo','auto-MDI-X','hub'],[
   {url:'https://www.cisco.com/c/dam/en/us/td/docs/switches/lan/hubs/hphub/install_reference/guide/j3188001.pdf',referencia:'Cisco/HP Hub installation guide: conecta un PC a un puerto de hub MDI-X mediante cable straight-through; la selección MDI/MDI-X determina cuándo se cruza.'},
   {url:'https://www.cisco.com/c/en/us/support/docs/lan-switching/ethernet/10561-3.html',referencia:'Cisco, Ethernet cable types: identifica cable directo para un MDI a MDI-X y advierte de puertos MDI y auto-MDIX como excepciones.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 118: redes LAN y dispositivos.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.8: redes locales, cableado y dispositivos.'}
  ],null,'Se conserva la respuesta A bajo la convención clásica: PC con puerto MDI conectado a puerto MDI-X de hub sin auto-MDI-X requiere cable directo (straight-through). Se explicita el supuesto porque equipos actuales con auto-MDI-X pueden aceptar cable directo o cruzado, y algunos hubs incorporan un puerto MDI seleccionable.','corregida'],
  [6140,[118],['IV-8'],['EPHOS 2','compras públicas','cableado estructurado','ISO/IEC 11801','pendiente de fuente'],[
   {url:'https://cordis.europa.eu/article/id/3680-european-procurement-handbook-for-open-systems/es',referencia:'CORDIS/Comisión Europea: confirma la existencia y propósito de EPHOS como manual europeo de orientación a compras públicas de sistemas abiertos e incluye cableado entre sus materias; no reproduce la cláusula 1 ni permite comprobar la clave heredada.'},
   {url:'https://www.iso.org/standard/20035.html',referencia:'ISO, ficha oficial de la primera edición ISO/IEC 11801:1995, antecedente temporal del cableado genérico de cliente; no acredita el texto de la cláusula EPHOS.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 118: cableado y redes locales, como encaje curricular general.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.8: cableado y redes locales, como encaje curricular general.'}
  ],null,'La referencia EPHOS 2 es histórica. Se conserva sin cambios el enunciado y la clave heredada C, pero no se ha localizado el texto primario de la cláusula 1 que permita certificarla: CORDIS confirma el manual y su ámbito, no el contenido concreto de esa cláusula. Estado pendiente de fuente; no se presenta la clave antigua como verificada.','pendiente_fuente']
 ],
 edits:{
 6137:{texto:'En el cableado estructurado de un edificio, ¿qué tramo constituye el subsistema horizontal?',opciones:['El que interconecta distribuidores de edificio y de planta (cableado troncal).','El que enlaza el distribuidor de planta con las tomas de telecomunicaciones del área de trabajo.','El que interconecta edificios dentro de un campus.','El conjunto de todo el cableado del edificio.'],respuesta_correcta:1},
 6138:{texto:'Un sistema A transmite a B por un enlace de 64 Mbit/s con retardo de propagación unidireccional de 2 ms. Ignorando cabeceras y usando unidades decimales, ¿cuántos octetos han salido de A cuando el primer bit llega a B?',opciones:['128.000.','32.000.','16.000.','4.000.'],respuesta_correcta:2},
 6139:{texto:'Se conecta un PC con puerto MDI a un puerto MDI-X de un hub Ethernet, sin auto-MDI-X. ¿Qué tipo de cable se usa según el cableado clásico?',opciones:['Cable directo (straight-through).','Cable de consola.','Cable cruzado (crossover).','Cable RJ-11.'],respuesta_correcta:0}
 }
});
