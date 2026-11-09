const apply=require('./aplicar-lote.cjs');
const academy42='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const academy46='https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk';
const academyTema2='https://docs.google.com/document/d/1mmhJ_LcwTpTxtPBN25s26iU-TXwyctII/edit?usp=drivesdk&ouid=107088454749630873035&rtpof=true&sd=true';
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const g702='https://www.itu.int/rec/T-REC-G.702/en';
const m1400='https://www.itu.int/rec/dologin_pub.asp?id=T-REC-M.1400-201303-S%21%21PDF-E&lang=s&type=items';
const g703='https://www.itu.int/rec/dologin_pub.asp?id=T-REC-G.703-201604-I%21%21PDF-E&lang=e&type=items';
const g707='https://www.itu.int/rec/T-REC-G.707/en';
const h222current='https://www.itu.int/rec/T-REC-H.222.0-202504-I';
const h222detail='https://www.itu.int/rec/dologin_pub.asp?id=T-REC-H.222.0-202308-S%21%21PDF-E&lang=e&type=items';
const j1='https://www.itu.int/epublications/publication/itu-t-j-1-2024-01-terms-definitions-and-acronyms-for-television-and-sound-transmission-and-integrated-broadband-cable-networks';
const umts='https://www.itu.int/ITU-D/ict/statistics/at_glance/UMTS2001.html';
const imt='https://www.itu.int/ITU-D/tech/FORMER_PAGE_IMT2000/index.html';
const etsi='https://portal.etsi.org/Portals/0/TBpages/3GPP/Docs/TSG_RAN/TSGRAN_106/Docs/RP-242850.zip';
const k100='https://www.itu.int/epublications/publication/itu-t-k-100-2024-08-measurement-of-radio-frequency-electromagnetic-fields-to-determine-compliance-with-human-exposure-limits-when-a-base-station-is-put-into-operation';
const ce='https://www.boe.es/eli/es/c/1978/12/27/(1)/con/20260520';
const lopj='https://www.boe.es/buscar/act.php?id=BOE-A-1985-12666';
const records=[
 [4186,['113'],['IV-10'],['PDH','SDH','JDS','E1','E3','STM-1','G.702','G.707'],[
  {url:g702,referencia:'ITU-T G.702, ficha oficial: recomendación sobre velocidades binarias de las jerarquías digitales; la edición 11/1988 figura en vigor.'},
  {url:m1400,referencia:'ITU-T M.1400 (03/2013), §17.1: enumera los bloques G.702 de 2 048 y 34 368 kbit/s; permite descartar las opciones de 4 y 32 Mbit/s.'},
  {url:g703,referencia:'ITU-T G.703 (04/2016), §17.1: interfaz STM-1 con velocidad nominal de 155 520 kbit/s.'},
  {url:g707,referencia:'ITU-T G.707, recomendación sobre velocidades y estructura de la JDS/SDH; se cita para identificar STM-1 como nivel de transporte síncrono.'},
  {url:academy42,referencia:'ITIC Academy, bloque 42 «Redes», actualización 2026, §7.3: PDH/SDH; indica que STM-1 transmite 155,52 Mbit/s.'},
  {url:boeA1,referencia:'Convocatoria oficial A1 GSI 2025, anexo I, tema 113: redes de transporte JDS/WDM y redes de agregación.'},
  {url:boeA2,referencia:'Convocatoria oficial A2 GSI 2025, anexo IX, tema IV-10: redes de área extensa y tecnologías de transporte/encaminamiento.'}
 ],'En la jerarquía PDH europea, E1 es 2,048 Mbit/s y E3 es 34,368 Mbit/s; en SDH/JDS, STM-1 es 155,520 Mbit/s. “155 Mbps” es un redondeo usual, pero se fija la tasa nominal exacta en la opción correcta. La edición vigente de G.702 confirma que la serie normativa sigue catalogada, aunque PDH/SDH sean tecnologías heredadas en muchas redes.', 'Se corrigen las velocidades erróneas de E1, E3 y STM-1 y se expresa en la pregunta que se busca la opción correcta con tasas nominales exactas en Mbit/s.', 'corregida'],
 [4187,['108','121'],[],['MPEG-2','Transport Stream','TS','188 bytes','adaptation field','CATV'],[
  {url:h222current,referencia:'ITU-T H.222.0 (04/2025) | ISO/IEC 13818-1:2023, ficha vigente; norma actual del sistema MPEG-2.'},
  {url:h222detail,referencia:'ITU-T H.222.0 v9 (08/2023), §§2.4.3.2–2.4.3.4: el paquete TS tiene 188 bytes; su cabecera tiene 4 bytes; adaptation_field_control permite adaptación sola, payload solo o ambos; payload data_bytes puede ser PES, secciones TS, stuffing o datos privados.'},
  {url:j1,referencia:'ITU-T J.1 (01/2024), glosario de televisión/cable: define el paquete MPEG-2 TS como 188 bytes en total, incluidos 4 bytes de cabecera.'},
  {url:academy42,referencia:'ITIC Academy, bloque 42 «Redes», actualización 2026, §8.3: CATV/HFC y servicios de televisión por cable; aporta contexto de aplicación del transporte digital, no sustituye H.222.0.'}
 ],'Un paquete de transporte MPEG-2 mide 188 bytes y comienza con una cabecera de 4 bytes. El campo de control permite que después haya solo payload, solo campo de adaptación, o campo de adaptación seguido de payload. Por ello no todo paquete contiene exactamente 184 bytes útiles ni todos los bytes de payload son necesariamente paquetes PES: también pueden llevar secciones, stuffing o datos privados. La afirmación “toda la carga útil está formada por PES” hacía falsa la opción «todas», así que se sustituye por una descripción completa e inequívoca.', 'La clave anterior «todas son ciertas» no era válida: generalizaba el contenido de payload y omitía el campo de adaptación opcional. Se reformula para comprobar tamaño, cabecera y estructura sin exigir una interpretación ambigua de carga útil.', 'corregida'],
 [4188,['123'],['IV-15'],['UMTS','3G','IMT-2000','telefonía móvil','ETSI','3GPP'],[
  {url:umts,referencia:'ITU-D: UMTS pertenece a la familia IMT-2000 de sistemas móviles de tercera generación (3G) y su desarrollo europeo.'},
  {url:imt,referencia:'ITU, IMT-2000: denominación marco de sistemas de tercera generación; aporta contexto global de 3G.'},
  {url:'https://www.etsi.org/deliver/etsi_ts/125300_125399/125301/18.00.00_60/ts_125301v180000p.pdf',referencia:'ETSI TS 125 301 V18.0.0 (2024-05), 3GPP TS 25.301 Release 18: título completo «Universal Mobile Telecommunications System (UMTS)».'},
  {url:academy46,referencia:'ITIC Academy, bloque 46 «Redes inalámbricas», versión 2026.1 (30/09/2026), §12.3: tercera generación (3G), UMTS; la revisión también incorpora el apagado del 3G en España, por lo que se presenta como sistema heredado.'}
 ],'UMTS (Universal Mobile Telecommunications System) es el nombre del sistema europeo de tercera generación, encuadrado en la familia IMT-2000. EDGE se asocia a la evolución de GSM/2G (3GPP lo clasifica como GERAN), DCS-1800 es GSM en la banda de 1800 MHz y PHS es otro sistema. Se marca como histórica por su carácter de generación legada y el apagado comercial en España que ya recoge el material académico 2026; esto no significa que UMTS deje de ser el nombre correcto ni que se haya retirado globalmente toda especificación 3G.', 'Se explicita que el reactivo pregunta por la denominación histórica del sistema europeo 3G y que el estado histórico se refiere a su ciclo comercial en España, no a que el término técnico UMTS sea incorrecto.', 'historica'],
 [4189,['114'],['IV-7','IV-11'],['PIRE','EIRP','PRA','ganancia isotrópica','antenas','radiocomunicación'],[
  {url:k100,referencia:'ITU-T K.100 (08/2024), §3.1.15: define EIRP como producto de la potencia de entrada a la antena por su ganancia, en una dirección, referida a antena isotrópica.'},
  {url:academy46,referencia:'ITIC Academy, bloque 46 «Redes inalámbricas», versión 2026.1, §§1.2–1.3 y pregunta de repaso: explica PIRE = potencia entregada a la antena × ganancia isotrópica (en dB se suma la ganancia y se restan pérdidas de feeder).'},
  {url:boeA1,referencia:'Convocatoria oficial A1 GSI 2025, anexo I, tema 114: redes inalámbricas y sus parámetros/características técnicas.'},
  {url:boeA2,referencia:'Convocatoria oficial A2 GSI 2025, anexo IX, temas IV-7 (medios inalámbricos y parámetros) y IV-11 (redes inalámbricas).'}
 ],'PIRE (potencia isótropa radiada equivalente; EIRP en inglés) equivale, en una dirección, al producto de la potencia de entrada a la antena por su ganancia respecto de una antena isotrópica. En unidades logarítmicas se suma la ganancia expresada en dBi a la potencia de entrada en dBW/dBm y se restan las pérdidas de alimentación que procedan. No es solo la ganancia ni la potencia interna del elemento radiante.', 'Se corrigen las erratas y se sustituye «ganancia isotópica» por «ganancia respecto a una antena isotrópica», con precisión de que la ganancia se considera en una dirección.', 'corregida'],
 [4190,['2'],[],['Constitución Española','Poder Judicial','CGPJ','mandato','cinco años'],[
  {url:ce,referencia:'Constitución Española, artículo 122.3: los veinte miembros del CGPJ son nombrados por cinco años.'},
  {url:lopj,referencia:'Ley Orgánica 6/1985 del Poder Judicial, artículo 568.1: renovación íntegra del CGPJ cada cinco años; artículos 570 y siguientes regulan la continuidad excepcional en funciones si no se renueva a tiempo.'},
  {url:academyTema2,referencia:'ITIC Academy, «Tema 002 - Resumen_v2.docx», apartado 1.2, Composición: reproduce el art. 122.3 CE y señala período de cinco años; A1 tema 2 incluye expresamente CGPJ. El epígrafe A2-I-1 solo enumera derechos y deberes y Corona, no el Poder Judicial.'},
  {url:boeA1,referencia:'Convocatoria oficial A1 GSI 2025, anexo I, tema 2: Constitución Española (II), Poder Judicial y Consejo General del Poder Judicial.'},
  {url:boeA2,referencia:'Convocatoria oficial A2 GSI 2025, anexo IX, epígrafes de organización del Estado; no se asigna un tema A2 específico sobre CGPJ, que no aparece en su epígrafe constitucional I-1.'}
 ],'La duración constitucional del mandato de los vocales del CGPJ es de cinco años (art. 122.3 CE), y la LOPJ prevé su renovación íntegra cada cinco años. El retraso de una renovación no convierte el mandato ordinario en seis, cuatro o tres años: la ley regula por separado la continuidad excepcional del Consejo en funciones hasta la toma de posesión del nuevo. Encaje directo A1 tema 2. En A2 el tema I-1 aborda derechos/deberes y Corona; I-2 trata Cortes, Tribunal Constitucional y Defensor del Pueblo, sin un epígrafe específico de Poder Judicial/CGPJ, por lo que no se fuerza una clasificación A2.', 'Se mantiene la clave de cinco años; el comentario diferencia duración estatutaria del mandato y continuidad excepcional en funciones, y registra el encaje oficial sin extender artificialmente el tema A2.', 'vigente']
];
const edits={
 4186:{texto:'¿Qué pareja de tecnología y velocidad nominal es correcta?',opciones:['En la jerarquía PDH, E1 funciona a 2,048 Mbit/s.','En la jerarquía PDH, E3 funciona a 32 Mbit/s.','En la jerarquía SDH/JDS, STM-1 funciona a 155,520 Mbit/s.','En la jerarquía SDH/JDS, STM-1 funciona a 140 Mbit/s.'],respuesta_correcta:2},
 4187:{texto:'¿Qué descripción de un paquete MPEG-2 Transport Stream (TS) es correcta?',opciones:['Tiene 188 bytes en total, con una cabecera de 4 bytes; el resto puede incluir un campo de adaptación, payload o ambos, y el payload no tiene por qué ser exclusivamente PES.','Tiene 188 bytes de payload además de una cabecera de 4 bytes.','Su cabecera mide 184 bytes y el payload siempre contiene exactamente un paquete PES completo.','Cada paquete TS debe contener exclusivamente bytes de un único flujo elemental y no admite campos de adaptación.'],respuesta_correcta:0},
 4188:{texto:'¿Qué nombre recibió el sistema europeo de comunicaciones móviles de tercera generación, normalizado en el marco de ETSI/3GPP e integrado en la familia IMT-2000?',opciones:['UMTS','EDGE','DCS-1800','PHS'],respuesta_correcta:0},
 4189:{texto:'En radiocomunicaciones, ¿qué magnitud expresa la PIRE (potencia isótropa radiada equivalente)?',opciones:['La ganancia de la antena, sin considerar la potencia que la alimenta.','La potencia interna del elemento radiante, con independencia de la antena.','El producto de la potencia suministrada a la antena por la ganancia de esta, referida a una antena isotrópica y en una dirección determinada.','La probabilidad de interferencia debida a la reflexión de la señal emitida.'],respuesta_correcta:2}
};
apply({numero:'773',fecha:'2026-11-09',records,edits});
