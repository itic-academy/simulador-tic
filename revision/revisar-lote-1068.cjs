const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const rdtdt='https://www.boe.es/eli/es/rd/2025/03/25/250/con';
const etsi25306='https://www.etsi.org/deliver/etsi_ts/125300_125399/125306/10.02.00_60/ts_125306v100200p.pdf';
const gpprelease='https://www.3gpp.org/img/pdf/2009_10_3gpp_imt.pdf';
const nist='https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-41r1.pdf';
const itu711='https://www.itu.int/rec/T-REC-G.711/en';
const ituvoice='https://www.itu.int/rec/dologin_pub.asp?id=T-REC-P.833-200102-I%21%21PDF-S&lang=e&type=items';
const ref=(url,referencia)=>({url,referencia});
const records=[
 [5661,[108],[],['TDT','televisión digital terrestre','HD','H.264','MPEG-4 AVC'],[
  ref(rdtdt,'Real Decreto 250/2025, arts. 9.3 y 10.1.b: para TDT HD (DVB-T) prescribe UIT-T H.264, equivalente a ISO/IEC 14496-10 y conocido como H.264/MPEG-4 AVC; diferencia UHD/DVB-T2 y H.265/HEVC.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 108 (redes de telecomunicaciones e infraestructuras de acceso): correspondencia general; el programa no enumera un tema específico de codec de radiodifusión TDT.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX: no se identifica epígrafe específico de radiodifusión digital/codec TDT; no se fuerza una clasificación A2.')
 ],null,'Corregida, respuesta B tras precisar su alcance. La denominación genérica «MPEG-4» era ambigua: para emisiones TDT HD el requisito es H.264/AVC, también denominado MPEG-4 Part 10 o MPEG-4 AVC (ISO/IEC 14496-10). No debe confundirse con UHD, que el plan técnico asocia a DVB-T2 y H.265/HEVC. El tema A1-108 es una correspondencia general de telecomunicaciones, no una mención expresa a TDT; no se asigna tema A2 por falta de epígrafe directo.','corregida'],
 [5662,[123],['IV-15'],['HSPA+','HSPA evolucionado','MIMO','Release 7','comunicaciones móviles'],[
  ref(gpprelease,'3GPP, presentación de evolución de releases: identifica HSPA+ en Release 7 con MIMO y modulación de orden superior.'),
  ref('https://portal.3gpp.org/Specifications.aspx?WiUid=340039&q=1','3GPP Specification Portal, TS 25.306 UE Radio Access capabilities y TS 25.308 HSDPA; la especificación define capacidades de terminal HSPA/HS-DSCH, incluyendo operación MIMO en las categorías aplicables.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 123: comunicaciones móviles y generaciones de tecnologías de telefonía móvil.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.15: sistemas de comunicaciones móviles y generaciones de tecnologías móviles.')
 ],null,'Corregida, respuesta A. MIMO (Multiple-Input Multiple-Output) es una de las mejoras asociadas a HSPA evolucionado/HSPA+ en las releases 7 y 8, junto con modulación de orden superior; el reactivo pregunta por una de ellas, no por una característica exclusiva. Se elimina la afirmación confusa de simetría de enlaces y se evita presentar una velocidad pico como universal, pues depende de categoría, release y configuración.','corregida'],
 [5663,[123],['IV-15'],['HSDPA','HS-DSCH','categoría 10','Release 5','caudal descendente'],[
  ref(etsi25306,'ETSI TS 125 306 / 3GPP TS 25.306 v10.2.0, tabla 5.1a: la categoría FDD HS-DSCH 10 permite hasta 27.952 bits por TTI, con intervalo mínimo de 1 TTI de 2 ms; equivale a 13,976 Mbit/s, aproximadamente 14 Mbit/s.'),
  ref('https://www.etsi.org/deliver/etsi_ts/125300_125399/125308/10.02.00_60/ts_125308v100200p.pdf','ETSI TS 125 308 / 3GPP TS 25.308, descripción general de HSDPA, canal HS-DSCH y operación de la interfaz radio.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 123: generaciones de tecnologías de telefonía móvil.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.15: sistemas de comunicaciones móviles.')
 ],null,'Corregida, respuesta B. Se acota a la capacidad teórica descendente del UE FDD HSDPA categoría 10 de la tabla 5.1a de 3GPP TS 25.306: 27.952 bits cada 2 ms = 13,976 Mbit/s, que se redondea a aproximadamente 14 Mbit/s. La cifra de 14,4 Mbit/s aparece en resúmenes comerciales/históricos, pero no es el cálculo del bloque de transporte máximo de esa categoría; «máxima» sin indicar categoría o release era ambiguo.','corregida'],
 [5664,[125],['IV-12'],['cortafuegos','SPI','stateful inspection','tabla de estado','TCP','UDP','seguridad perimetral'],[
  ref(nist,'NIST SP 800-41 Rev. 1, § 2.1.2: la inspección con estado conserva una tabla por conexión, comprueba el estado esperado y puede seguir también flujos UDP aunque UDP no tenga handshake TCP.'),
  ref('https://csrc.nist.gov/glossary/term/stateful_inspection','NIST CSRC Glossary: stateful inspection sigue el estado de las conexiones y bloquea paquetes que se apartan del estado esperado.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 125: seguridad en redes, cortafuegos, control de accesos y prevención de intrusiones.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.12: seguridad de redes y seguridad perimetral.')
 ],null,'Corregida, respuesta C. Un firewall SPI mantiene estado de los flujos y contrasta paquetes con una tabla/reglas de conexión. En TCP puede observar establecimiento, uso y cierre —incluido el three-way handshake—, pero el concepto no se limita a ese handshake: también hay seguimiento de pseudosesiones UDP. No opera exclusivamente en capa 3, no está limitado al puerto 80 ni impide por definición SSH por estar cifrado.','corregida'],
 [5665,[116],['IV-14'],['voz','PCM','G.711','LD-CELP','G.728','CS-ACELP','G.729','ADPCM','G.726'],[
  ref(itu711,'UIT-T G.711 vigente: especifica codificación MIC/PCM de frecuencias vocales (A-law y μ-law), con la referencia clásica de 64 kbit/s.'),
  ref(ituvoice,'UIT-T P.833, tabla de códecs: G.711/PCM 64 kbit/s; G.726/ADPCM 16–40 kbit/s; G.728/LD-CELP 16 kbit/s; G.729/CS-ACELP 8 kbit/s.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 116: NGN/IMS, VoIP, ToIP y comunicaciones unificadas; clasificación por el contexto de codificación de voz en servicios convergentes.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.14: redes de nueva generación, VoIP/ToIP y convergencia de telefonía.')
 ],null,'Verificada, respuesta C. Entre las opciones, la codificación de voz PCM clásica es G.711, a 64 kbit/s; los otros métodos nombrados son vocoders de menor tasa: LD-CELP (G.728), CS-ACELP (G.729) y ADPCM (G.726). En sentido estricto, G.711 aplica compansión logarítmica A-law/μ-law antes/después de PCM, pero no reduce la señal a una tasa inferior como los códecs de voz comprimidos citados; por eso la pregunta se formula como comparación de esos métodos y se explica el uso coloquial de «sin compresión».','verificada']
];
const edits={
 5661:{texto:'Según el Plan Técnico Nacional de la TDT de España, ¿qué sistema de codificación de vídeo se exige para una emisión en alta definición (HD)?',opciones:['Huffyuv.','H.264/AVC (MPEG-4 Part 10, ISO/IEC 14496-10).','MPEG-2 Video.','Sorenson Video.'],respuesta_correcta:1},
 5662:{texto:'HSPA evolucionado (HSPA+) incorpora varias mejoras. ¿Cuál de las siguientes es una de ellas?',opciones:['Operación MIMO (Multiple-Input Multiple-Output).','Una capacidad pico universal de 100 Mbit/s en cualquier terminal y configuración.','La obligación de que los caudales ascendente y descendente sean simétricos.','El uso de GMSK como modulación característica de HSPA+.'],respuesta_correcta:0},
 5663:{texto:'En la interfaz FDD de HSDPA, la categoría de terminal 10 de 3GPP TS 25.306 permite recibir hasta 27.952 bits por TTI de 2 ms (≈13,976 Mbit/s). ¿A qué caudal teórico descendente aproximado se redondea?',opciones:['10,8 Mbit/s.','14 Mbit/s.','2 Mbit/s.','384 kbit/s.'],respuesta_correcta:1},
 5664:{texto:'¿Qué describe correctamente la inspección de paquetes con estado (SPI) de un cortafuegos?',opciones:['Examina exclusivamente la capa de red (capa 3) y no conserva información entre paquetes.','Solo permite tráfico dirigido al puerto HTTP 80.','Mantiene información del estado de los flujos y contrasta cada paquete con reglas/estado esperado; para TCP puede seguir su establecimiento, y también puede seguir pseudosesiones UDP.','No puede permitir SSH porque el contenido de esa conexión está cifrado.'],respuesta_correcta:2},
 5665:{texto:'Entre estos métodos clásicos de codificación de voz, ¿cuál usa PCM de 64 kbit/s (G.711) en vez de un vocoder de menor tasa como G.728, G.729 o G.726?',opciones:['LD-CELP (G.728).','CS-ACELP (G.729).','PCM G.711 (MIC de 64 kbit/s).','ADPCM (G.726).'],respuesta_correcta:2}
};
aplicar({numero:'1068',fecha:'2026-11-12',records,edits});
