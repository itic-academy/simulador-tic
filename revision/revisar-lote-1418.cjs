const apply = require('./aplicar-lote.cjs');

const refs = {
  satellite: [{
    url: 'https://www.itu.int/dms_pubrec/itu-r/rec/v/R-REC-V.431-8-201508-I%21%21PDF-E.pdf',
    referencia: 'ITU-R Recommendation V.431-8, table 4: explains that letter-band designations are not universally standardized and, for information on space radiocommunications, lists nominal L, S, C, X, Ku, K/Ka, V and Q/V ranges/examples; D is not listed as a nominal space-radiocommunication designation. This does not assert that no experimental or special satellite link can ever use frequencies called D band.'
  }, {
    url: 'https://www.itu.int/en/ITU-R/space/snl/Pages/explanationSatStatus.aspx',
    referencia: 'ITU Space Network Systems database help, frequency table: records actual satellite networks and their notified L, S, C, X, Ku and Ka frequency designations; naming/frequency limits must be interpreted in the context of the ITU filing.'
  }],
  sdh: [{
    url: 'https://www.itu.int/rec/T-REC-G.707/en/',
    referencia: 'ITU-T G.707/Y.1322 (01/2007), vigente: define SDH Network Node Interface; higher STM-N capacities are multiples of STM-1 and the defined N values include 4, 16, 64 and 256, not 128. STM-256 is defined; STM-128 is not.'
  }, {
    url: 'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-G.707-200701-I%21%21PDF-E&lang=e&type=items',
    referencia: 'ITU-T G.707/Y.1322 (01/2007), figure 6-1 and §3: shows the STM-256 multiplexing hierarchy and identifies STM-1 as the basic rate.'
  }],
  hfc: [{
    url: 'https://www.etsi.org/deliver/etsi_ts/102800_102899/102866/01.01.01_60/ts_102866v010101p.pdf',
    referencia: 'ETSI TS 102 866 V1.1.1 (2014-07), §4/figures: for a European cable network, an example uses upstream 5–65 MHz and downstream beginning at 87.5 MHz, leaving 65–87.5 MHz between those used bands.'
  }, {
    url: 'https://www.etsi.org/deliver/etsi_tr/102800_102899/102881/01.01.01_60/tr_102881v010101p.pdf',
    referencia: 'ETSI TR 102 881 V1.1.1 (2010-06), §5.1: most European HFC upstream plans extend 5–65 MHz; European downstream typically starts near 80.6 MHz. The exact split is implementation/regional-plan dependent.'
  }, {
    url: 'https://www.iteh.fr/catalog/standards/iec/15da3244-6cee-450a-b952-8144dacbfadb/iec-60728-7-1-2003',
    referencia: 'IEC 60728-7-1, §4.2 and table 3: defines the guard band as unused spectrum between return and forward bands and shows different regional boundaries. The question is explicitly scoped to the European 5–65/87.5 MHz plan; other HFC splits have different guard bands.'
  }],
  ieee80210: [{
    url: 'https://standards.ieee.org/ieee/802.10/1154/',
    referencia: 'IEEE SA, IEEE 802.10-1998, Standard for Interoperable LAN/MAN Security (SILS): specifies a data-link security protocol and associated services; IEEE currently labels it Inactive-Withdrawn, with withdrawal date 2004-01-16.'
  }, {
    url: 'https://standards.ieee.org/ieee/802.10/1153/',
    referencia: 'IEEE SA, original IEEE 802.10-1992 scope: describes a security protocol applicable to IEEE 802 LANs and MANs; used to establish the historical intent of the standard.'
  }],
  fddi: [{
    url: 'https://www.iso.org/standard/16975.html',
    referencia: 'ISO 9314-2:1989, FDDI Token Ring MAC: specifies FDDI Media Access Control and describes the network as a token-ring architecture. ISO confirms it was reviewed and remains current.'
  }, {
    url: 'https://www.iso.org/standard/3345.html',
    referencia: 'ISO/IEC 9314-8:1998, FDDI MAC-2: confirms the FDDI Token Ring MAC architecture and services.'
  }]
};

const records = [
  [7391, [108, 113], ['IV-10'], ['bandas satelitales', 'ITU-R V.431-8', 'L', 'Ku', 'Ka', 'D'], refs.satellite, {
    texto: 'Según las designaciones nominales para radiocomunicaciones espaciales enumeradas en ITU-R V.431-8, ¿cuál no figura en la tabla como banda nominal satelital?',
    opciones: ['Banda L', 'Banda Ku', 'Banda Ka', 'Banda D'],
    respuesta_correcta: 3
  }, 'Corregida. Se conserva D solo dentro del alcance explícito de la tabla 4 de ITU-R V.431-8: no la enumera entre sus designaciones nominales de bandas para radiocomunicaciones espaciales. ITU advierte que las letras de banda no tienen correspondencia universal; «banda D» puede emplearse en otros sistemas de nomenclatura y existen estudios experimentales de enlaces no terrestres en rangos llamados D. No se afirma que ninguna comunicación satelital pueda usar jamás esas frecuencias.', 'corregida'],
  [7392, [108, 113], ['IV-10'], ['SDH', 'STM-1', 'STM-16', 'STM-128', 'STM-256', 'ITU-T G.707'], refs.sdh, {
    texto: '¿Cuál de estos niveles STM-N no está definido por ITU-T G.707 para SDH?',
    opciones: ['STM-1', 'STM-16', 'STM-128', 'STM-256'],
    respuesta_correcta: 2
  }, 'Vigente C. Se reemplaza «contenedor» —el término técnico no corresponde a STM-N— por «nivel STM-N». G.707 define STM-1 y múltiplos jerárquicos N=4, 16, 64 y 256; incluye STM-256, pero no STM-128.', 'vigente'],
  [7393, [110, 121], ['IV-7'], ['HFC', 'CATV', 'banda de guarda', 'retorno 5-65 MHz', 'downstream 87.5 MHz'], refs.hfc, {
    texto: 'En el plan europeo HFC que reserva 5–65 MHz para el canal de retorno y comienza el canal descendente en 87,5 MHz, ¿qué intervalo queda como banda de guarda?',
    opciones: ['5–55 MHz.', '86–108 MHz.', '606–862 MHz.', '65–87,5 MHz.'],
    respuesta_correcta: 3
  }, 'Corregida D. La banda de guarda queda entre el borde superior del retorno (65 MHz) y el inicio del descendente (87,5 MHz). Se explicita el plan porque las redes HFC admiten distintos cortes regionales y tecnológicos: 55–86 MHz no es una respuesta universal para HFC.', 'corregida'],
  [7394, [118, 125], ['IV-8'], ['IEEE 802.10', 'SILS', 'seguridad LAN/MAN', 'estándar retirado'], refs.ieee80210, {
    texto: '¿Qué estándar histórico de IEEE especificó seguridad interoperable para redes LAN/MAN y figura actualmente como retirado?',
    opciones: ['IEEE 802.10.', 'IEEE 802.11.', 'IEEE 802.12.', 'IEEE 802.13.'],
    respuesta_correcta: 0
  }, 'Corregida A. IEEE 802.10 fue el estándar de seguridad interoperable para LAN/MAN (SILS), pero IEEE lo clasifica como Inactive-Withdrawn y registra su retirada en 2004. Por ello se presenta como referencia histórica, no como una recomendación de seguridad vigente. IEEE 802.11 es la familia WLAN; 802.12 se asoció a Demand Priority; 802.13 no es la norma de SILS.', 'corregida'],
  [7395, [118], ['IV-8'], ['FDDI', 'Token Ring', 'Token Passing', 'método de acceso al medio'], refs.fddi, {
    texto: '¿Qué método de acceso al medio utiliza FDDI?',
    opciones: [
      'CSMA/CD: las estaciones transmiten y detectan colisiones.',
      'Paso de testigo (token passing): una estación transmite cuando posee el testigo.',
      'TDM: se asignan intervalos temporales fijos a cada estación.',
      'FDM: cada estación transmite en una frecuencia óptica distinta.'
    ],
    respuesta_correcta: 1
  }, 'Vigente B. Se conserva el paso de testigo y se corrige la formulación confusa que llamaba «topología» al estándar FDDI. ISO 9314-2 define la MAC de FDDI como arquitectura de anillo con token passing; no es CSMA/CD, TDM ni multiplexación por frecuencias ópticas.', 'vigente']
];

apply({ numero: '1418', fecha: '2026-11-15', records });
