const aplicar = require('./aplicar-lote.cjs');

const ref = (url, referencia) => ({ url, referencia });
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262';
const academy03 = 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const academy30 = 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const academy42 = 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const academy50 = 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk';
const h323 = 'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-H.323-202203-I%21%21PDF-E&lang=e&type=items';
const h225 = 'https://www.itu.int/dms_pubrec/itu-t/rec/h/T-REC-H.225.0-200605-S%21%21TOC-HTM-E.htm';
const sip = 'https://www.rfc-editor.org/rfc/rfc3261.html';
const eni = 'https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331&lang=es&p=&tn=1';
const agency = 'https://www.boe.es/eli/es/rd/2024/11/05/1118/con';
const org = 'https://www.boe.es/eli/es/rd/2024/02/27/210/con/20241129';
const saraCatalog = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A13e555d1-c679-4a72-8f80-da41a645168c/Catalogo-servicios-administracion-digital-v2_0.pdf';
const saraCtt = 'https://administracionelectronica.gob.es/ctt/redsara/abstract';
const jls = 'https://docs.oracle.com/javase/specs/jls/se26/html/jls-8.html';
const ens = 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191&p=20220504&tn=1';

const records = [
  [5066, ['130'], ['IV-16'], ['H.323', 'SIP', 'H.225.0', 'ASN.1 PER', 'señalización multimedia'], [
    ref(h323, 'UIT-T, Recomendación H.323 (03/2022), versión vigente localizada: define sistemas de comunicación multimedia sobre redes de paquetes; H.323 es una recomendación UIT-T, no una RFC de la IETF.'),
    ref(h225, 'UIT-T, H.225.0: define mensajes de señalización de llamada basados en Q.931 y sintaxis ASN.1, coherente con la codificación compacta de H.323.'),
    ref(sip, 'IETF RFC 3261, §§1 y 7: SIP es un protocolo de señalización de capa de aplicación, basado en texto y codificado en UTF-8; no es una especificación de la UIT-T.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 130: sistemas de videoconferencia, streaming y herramientas de grupo.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema IV.16: sistemas de videoconferencia y protocolos.'),
    ref(academy50, 'ITIC Academy, bloque 50 «Videoconferencia, SSO y trabajo colaborativo», versión 2026.1: H.323, SIP y protocolos de videoconferencia; mapa curricular.')
  ], null, 'Respuesta C. H.323 está normalizado por UIT-T; la señalización H.225.0 usa estructuras ASN.1 con codificación compacta, mientras RFC 3261 especifica SIP como protocolo textual UTF-8. Se delimita la comparación a los mensajes de señalización para no afirmar que todo elemento de una solución H.323 tenga una única codificación.', 'corregida'],
  [5067, ['80'], ['I-6'], ['ENI', 'firma electrónica', 'RD 4/2010', 'Secretaría General de Administración Digital', 'Agencia Estatal de Administración Digital'], [
    ref(eni, 'BOE, texto consolidado del RD 4/2010, art. 18.1–5: el apartado 1 identifica a la Secretaría General de Administración Digital como órgano que autoriza excepciones a la política marco; el apartado 4 regula la comunicación de otras políticas.'),
    ref(agency, 'BOE, RD 1118/2024: crea el Estatuto de la Agencia Estatal de Administración Digital y establece la sucesión institucional respecto de la SGAD.'),
    ref(org, 'BOE, RD 210/2024, art. 13.2 y disposiciones de estructura: las referencias normativas a órganos suprimidos se entienden hechas a los órganos que asumen sus competencias; tener en cuenta la constitución efectiva de la Agencia.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 80: identidad y firma electrónica y marco jurídico.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema I.6: sociedad de la información e identidad y firma electrónica.'),
    ref(academy03, 'ITIC Academy, bloque 03 «Actuación administrativa y administración digital», versión 2026: ENI y administración electrónica; correspondencia curricular.')
  ], null, 'Respuesta A como falsa según el tenor del artículo 18.1 citado: no atribuye la autorización a la Secretaría de Estado de Digitalización e Inteligencia Artificial, sino a la SGAD. Se precisa que es una referencia orgánica histórica: tras la constitución efectiva de la Agencia Estatal de Administración Digital, las referencias normativas al órgano suprimido se entienden hechas al órgano sucesor competente. Las denominaciones ministeriales del artículo 18.4 deben leerse como cita literal del texto consolidado, no como organigrama actual.', 'historica'],
  [5068, ['120'], ['I-3'], ['Red SARA', 'capacidad', 'ancho de banda', 'servicios comunes'], [
    ref(saraCatalog, 'PAe, Catálogo de Servicios de Administración Digital v2.0, ficha Red SARA: publica para esa descripción 10 Gbps en Ministerios y 100 Mbps en Comunidades Autónomas.'),
    ref(saraCtt, 'Centro de Transferencia de Tecnología, ficha Red SARA: describe la red y publica capacidades por tipo de organismo; muestra que las cifras dependen del punto/ámbito de conexión y del catálogo consultado.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 120: redes públicas de transmisión de datos, Red SARA y sTESTA.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema I.3: ENS/ENI, normas técnicas e infraestructuras y servicios comunes de administración electrónica.'),
    ref(academy42, 'ITIC Academy, bloque 42 «Redes», versión 2026: redes públicas y Red SARA; mapa curricular.')
  ], null, 'La opción A es la que figura en el Catálogo de Servicios de Administración Digital v2.0 citado. Se etiqueta como dato de una ficha/versión, no como capacidad universal inmutable: las descripciones oficiales de Red SARA presentan capacidad por ámbito y punto de conexión y pueden actualizarse. Se incorpora la referencia al catálogo al enunciado para hacer evaluable la cifra.', 'historica'],
  [5069, ['67'], ['III-4'], ['Java', 'POO', 'clase abstracta', 'instanciación', 'herencia'], [
    ref(jls, 'Java Language Specification, §8.1.1.1: es error de compilación crear directamente una instancia de una clase abstracta; una subclase concreta sí puede instanciarse.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 67: entorno de desarrollo Java.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema III.4: programación orientada a objetos, clases y herencia.'),
    ref(academy30, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1: Java y conceptos de programación; mapa curricular.')
  ], null, 'Respuesta C: una clase abstracta no puede instanciarse directamente. Sí puede implementar interfaces, actuar como superclase y contener métodos concretos; una subclase no abstracta puede crear instancias.', 'vigente'],
  [5070, ['48'], ['I-3'], ['ENS', 'RD 311/2022', 'auditoría', 'autoevaluación', 'categoría básica'], [
    ref(ens, 'BOE, RD 311/2022, anexo III, apartado 2.1.a–b: los sistemas de categoría BÁSICA no necesitan auditoría; basta autoevaluación documentada, cuyo informe analiza el responsable de seguridad competente.'),
    ref(ens, 'BOE, RD 311/2022, art. 38: para declaración de conformidad, la categoría BÁSICA requiere autoevaluación; MEDIA/ALTA precisan auditoría para certificación.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 48: Esquema Nacional de Seguridad y adecuación al ENS.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema I.3: ENS, ENI y guías CCN-STIC.'),
    ref(academy03, 'ITIC Academy, bloque 03 «Actuación administrativa y administración digital», versión 2026: ENS y administración electrónica; correspondencia curricular.')
  ], null, 'Respuesta B. El anexo III.2.1 del RD 311/2022 permite que la autoevaluación baste para los sistemas de categoría BÁSICA. Debe documentarse con el estado de implantación, revisión y evidencias, y el responsable de seguridad competente analiza el informe; no se trata de una exención de documentar o supervisar.', 'vigente']
];

const edits = {
  5066: { texto: 'En la señalización de llamadas, ¿qué afirmación distingue correctamente H.323 y SIP?', opcion: [2, 'H.323 utiliza señalización H.225.0 basada en estructuras ASN.1 con codificación compacta; SIP es un protocolo de señalización textual UTF-8 especificado por la IETF.'] },
  5067: { texto: 'Según el tenor del artículo 18 del RD 4/2010 (ENI), ¿qué afirmación sobre la política de firma electrónica es falsa?' },
  5068: { texto: 'Según la ficha de Red SARA del Catálogo de Servicios de Administración Digital v2.0, ¿qué capacidad de ancho de banda se indica?', opciones: ['10 Gbps en Ministerios y 100 Mbps en Comunidades Autónomas', '1 Gbps en Ministerios y 100 Mbps en Comunidades Autónomas', '10 Gbps en Ministerios y 1 Gbps en Comunidades Autónomas', '1 Gbps en Ministerios y en Comunidades Autónomas'] },
  5070: { texto: '¿Para qué categoría de sistema de información el anexo III del RD 311/2022 permite que baste una autoevaluación como modalidad ordinaria de evaluación ENS?' }
};

aplicar({ numero: '949', fecha: '2026-11-11', records, edits });
