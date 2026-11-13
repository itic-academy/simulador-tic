require('./aplicar-lote.cjs')({
 numero:'1165',fecha:'2026-11-13',
 records:[
  [6146,[118],['IV-8'],['100BASE-TX','100 Mbit/s','UTP','categoría 5','cableado LAN'],[
   {url:'https://www.cisco.com/c/en/us/support/docs/routers/10000-series-routers/46792-ethbase.html',referencia:'Cisco Ethernet Cabling Guidelines: para 100BASE-TX por RJ-45 especifica UTP categoría 5 (o STP apropiado) y un segmento de hasta 100 m; Cat 3 corresponde a 10BASE-T.'},
   {url:'https://grouper.ieee.org/groups/802/3/maint/requests/revision_history.html',referencia:'IEEE 802.3 maintenance history: identifica Category 5 UTP como canal conforme para 100BASE-TX.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 118: redes LAN y cableado.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.8: LAN y medios de conexión.'}
  ],null,'La opción C es correcta: UTP categoría 5 admite 100BASE-TX a 100 Mbit/s; categoría 6 también supera el requisito. La documentación distingue Cat 3, asociado a 10BASE-T, de Cat 5 requerido para 100BASE-TX.','vigente'],
  [6147,[118],['IV-7','IV-8'],['S/FTP','apantallamiento','malla global','lámina por par','ISO/IEC 11801'],[
   {url:'https://www.ieee802.org/3/bq/public/may13/flatman_01_0513_40GBT.pdf',referencia:'Contribución técnica presentada al grupo IEEE 802.3: representa las designaciones de apantallamiento ISO/IEC, incluida S/FTP, con pantalla global trenzada y pantalla de lámina en cada par.'},
   {url:'https://webstore.iec.ch/en/publication/69057',referencia:'IEC 61156-7:2023, especificación para cables de pares simétricos: cubre pares individualmente apantallados S/FTP y permite pantalla común global sobre el núcleo del cable.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 118: cableado y LAN.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, temas IV.7/IV.8: medios y cableado LAN.'}
  ],null,'La opción B es correcta. En la notación X/YTP, X describe la pantalla global y Y la de los pares; S/FTP indica pantalla global de trenza (S) y lámina (F) en cada par. No debe confundirse con F/UTP, que solo lleva lámina global, ni U/FTP, que apantalla pares individuales sin pantalla global.','vigente'],
  [6148,[118],['IV-8'],['hub','concentrador','cableado de LAN','capa física','repetición'],[
   {url:'https://www.cisco.com/en/US/docs/internetworking/troubleshooting/guide/tr1923.html',referencia:'Cisco, Troubleshooting LAN Switching Environments: hub como dispositivo de capa 1 que repite señales y conecta dispositivos LAN.'},
   {url:'https://www.cisco.com/site/us/en/learn/topics/networking/what-is-an-ethernet-switch.html',referencia:'Cisco: hub como punto central/agregador de dispositivos de una LAN, sin gestión selectiva del tráfico.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 118: LAN y equipos de interconexión.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.8: dispositivos de redes locales.'}
  ],null,'La opción C es la correcta: el hub concentra conexiones y organiza el cableado en una LAN; no enruta entre LAN, no es una pasarela multiprotocolo ni aplica políticas de firewall. Es un equipo de capa física heredado, hoy normalmente reemplazado por switches.','vigente'],
  [6149,[118],['IV-8'],['EPHOS-2','SCE','ISO 802.11','ISO/IEC 8802','pendiente de fuente'],[
   {url:'https://cordis.europa.eu/article/id/3680-european-procurement-handbook-for-open-systems/es',referencia:'CORDIS/Comisión Europea: acredita la existencia y alcance temático de EPHOS, incluido cableado, pero no reproduce las cláusulas SCE preguntadas.'},
   {url:'https://www.iso.org/standard/73721.html',referencia:'ISO/IEC 8802-11:2022, LAN inalámbricas; confirma que 802.11 trata WLAN, no los requisitos del cableado horizontal/backbone de un SCE. No prueba por sí solo el contenido de la cláusula EPHOS.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 118: cableado LAN, como encaje curricular general.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.8: cableado LAN, como encaje curricular general.'}
  ],null,'Se conserva íntegro el enunciado y la clave A heredada, pero queda pendiente de fuente: no se ha localizado un ejemplar primario de EPHOS-2 con las cláusulas de contratación SCE que permita certificar qué cláusula recoge cada requisito. Que ISO/IEC 8802-11 sea WLAN hace plausible que el distractor se refiera a otro medio, pero esa comprobación externa no demuestra el texto concreto de EPHOS-2.','pendiente_fuente'],
  [6150,[118],['IV-8'],['dimensionamiento de capacidad','100BASE-TX','1000BASE-SX','10GBASE-SR/SW','Wi-Fi','topología','ambigüedad'],[
   {url:'https://www.cisco.com/c/en/us/support/docs/routers/10000-series-routers/46792-ethbase.html',referencia:'Cisco: 100BASE-TX ofrece 100 Mbit/s y sus especificaciones de cableado; sirve para identificar la limitación nominal de la infraestructura descrita.'},
   {url:'https://www.cisco.com/c/en/us/products/collateral/interfaces-modules/transceiver-modules/data_sheet_c78-660083.html',referencia:'Cisco 40G/100G modules data sheet: ilustra que la capacidad y alcance dependen del transceptor/medio y del diseño de enlaces, no solo del medio óptico.'},
   {url:'https://www.cisco.com/c/en/us/support/docs/availability/high-availability/20769-performwp.html',referencia:'Cisco Capacity and Performance Management: la capacidad debe dimensionarse según demanda, recursos, colas y latencia; el modelo no se selecciona sin requisitos medidos.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 118: arquitectura y tecnología LAN.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.8: redes locales y dispositivos.'}
  ],null,'No se confirma la clave D como solución de capacidad: tender más enlaces 100BASE-TX entre puertos libres no aumenta por sí solo la capacidad de los enlaces de acceso/ascendentes y puede crear problemas de topología. Tampoco se puede elegir entre 1 Gb/s y 10 Gb/s sin demanda agregada medida/proyectada, topología, compatibilidad de puertos y criterio de coste. Se conserva enunciado y clave heredados como pendiente de ambigüedad.','pendiente_ambiguedad']
 ]
});
