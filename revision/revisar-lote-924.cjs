const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const itu = 'https://www.itu.int/en/ITU-T/publications/pages/structure.aspx';
const ctt = 'https://administracionelectronica.gob.es/ctt/ccd/infoadicional';
const carpeta = 'https://estaticoscarpeta.carpetaciudadana.gob.es/';
const datos = 'https://masinformacioncarpeta.carpetaciudadana.gob.es/infocc/masInformacion/mis-datos';
const notifica = 'https://administracionelectronica.gob.es/pae_Home/solucion-notifica.html';
const kpi = 'https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-kpi';
const nistIds = 'https://csrc.nist.gov/glossary/term/intrusion_detection_system';
const nistIdps = 'https://csrc.nist.gov/glossary/term/intrusion_detection_and_prevention_system';
const nistGuide = 'https://csrc.nist.gov/pubs/sp/800/94/final';
const academyProtocols = 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk';
const academyServices = 'https://drive.google.com/file/d/1NWEg_hd3iDIC0kIitK-u8BpmJ20Jecmw/view?usp=drivesdk';
const academyKpi = 'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk';
const academyBi = 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk';
const academySecurity = 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const refs = items => items.map(([url, referencia]) => ({ url, referencia }));

const records = [
  [4941, ['50', '108'], [], ['UIT-T', 'recomendaciones', 'series', 'telecomunicaciones'], refs([
    [itu, 'UIT-T, estructura de las series de Recomendaciones: E trata operación de redes/telefonía y factores humanos; G, sistemas y medios de transmisión, sistemas digitales y redes; I, RDSI; V, comunicación de datos sobre red telefónica; X, redes de datos y comunicación entre sistemas abiertos. Por ello la descripción atribuida a la serie E corresponde a G.'],
    [a1, 'Convocatoria A1 GSI 2025, temas 50 (normalización y organismos) y 108 (redes y comunicaciones).'],
    [a2, 'Convocatoria A2 GSI AGE 2025, temas IV.7 e IV.15: medios y sistemas de comunicaciones; cotejo curricular general.']
  ]), null,
  'Respuesta C. La opción mezcla la materia de la serie G de UIT-T con la letra E. En el enunciado corregido se conservan las correspondencias V, X e I y se identifica la falsa: E se refiere a operación de redes y servicios telefónicos, no a transmisión y redes digitales.', 'corregida'],
  [4942, ['49'], ['I-9', 'I-10'], ['Carpeta Ciudadana', 'Cl@ve', 'HCDSNS', 'REG', 'interoperabilidad'], refs([
    [ctt, 'PAe/CTT, solución Carpeta Ciudadana, información adicional: Carpeta Ciudadana no almacena la información; consulta a petición del ciudadano los datos mantenidos en las sedes y sistemas de origen. Permite presentar escritos mediante el Registro Electrónico General de la AGE.'],
    [carpeta, 'Portal oficial Mi Carpeta Ciudadana: identifica los medios de acceso e identificación electrónica; usar el servicio exige autenticación con Cl@ve o certificado admitido, aunque no haya que darse de alta previamente en la aplicación.'],
    [datos, 'Portal oficial, sección Mis datos: catálogo vigente de datos consultables, incluidos servicios de salud y acceso a HCDSNS. La disponibilidad depende de los organismos y sistemas fuente integrados.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 49: servicios comunes, identidad y Carpeta Ciudadana.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, temas I.9 (administración electrónica y NTI) e I.10 (cooperación e interoperabilidad).']
  ]), null,
  'Respuesta A. La Carpeta Ciudadana no guarda centralizadamente una copia de los datos: consulta la información que conservan los organismos y sistemas de origen. “Sin registro previo” significa que no es necesario crear una cuenta separada en la aplicación; sí se requiere identificarse electrónicamente mediante Cl@ve o certificado. Se acota HCDSNS a los datos disponibles en los sistemas participantes y REG a REG-AGE.', 'corregida'],
  [4943, ['49'], ['I-9', 'I-10'], ['Notifica', 'DEHú', 'notificaciones', 'comparecencia electrónica', 'plazos'], refs([
    [notifica, 'PAe, servicio común Notifica: permite gestionar el ciclo de notificaciones; la comparecencia electrónica se entrega en la Dirección Electrónica Habilitada única (DEHú) y/o en papel; el servicio controla plazos según parámetros del envío y expiración.'],
    [academyServices, 'ITIC Academy 2026, bloque 23 «Servicios comunes»: cotejo curricular de Notifica, DEH y DEHú. Las referencias a DEN/DEH clásica se tratan como denominación histórica, no como el canal vigente.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 49: servicios comunes de administración electrónica y notificaciones.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, temas I.9 e I.10: procedimiento electrónico, servicios comunes y cooperación administrativa.']
  ]), null,
  'Respuesta C. La opción corregida se identifica como desactualizada: el canal electrónico vigente de comparecencia indicado por el servicio es DEHú, no la antigua DEN/DEH. Notifica sí gestiona los plazos conforme a los parámetros de envío y expiración, por lo que la opción que lo negaba también era falsa y se elimina para dejar una sola respuesta.', 'corregida'],
  [4944, ['33'], ['II-4'], ['KPI', 'cuadro de mando', 'indicadores', 'BI', 'gestión'], refs([
    [kpi, 'Microsoft Learn, visualización KPI en Power BI: un KPI comunica visualmente el progreso hacia un objetivo medible y compara una medida con un destino/umbral.'],
    [academyKpi, 'ITIC Academy 2026, bloque 12 «Estrategias y herramientas del directivo público TIC», §3.3: KPI, KGI y diseño de indicadores en cuadros de mando; cotejo curricular.'],
    [academyBi, 'ITIC Academy 2026, bloque 34 «Business Intelligence»: indicadores y cuadros de mando para seguimiento y decisión; cotejo curricular A2-II.4.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 33: planificación, dirección y control de sistemas de información; cuadros de mando.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema II.4: inteligencia de negocio, cuadros de mando y apoyo a la decisión.']
  ]), null,
  'Respuesta A. “Indicadores propios” no determina una sigla única. La pregunta ahora precisa que solicita el nombre del indicador que mide el avance hacia un objetivo: KPI, Key Performance Indicator. Un KPI compara una medida con un objetivo o umbral y comunica el progreso; no es una categoría universal para cualquier indicador definido localmente.', 'corregida'],
  [4945, ['125'], ['II-13', 'IV-12'], ['IDS', 'IPS', 'IDPS', 'detección de intrusiones', 'prevención'], refs([
    [nistIds, 'NIST CSRC Glossary, Intrusion Detection System: sistema que monitoriza y analiza eventos para detectar intentos de acceso/uso no autorizado y generar alertas.'],
    [nistIdps, 'NIST CSRC Glossary, Intrusion Detection and Prevention System: además de detectar, puede intentar detener incidentes.'],
    [nistGuide, 'NIST SP 800-94, Guide to Intrusion Detection and Prevention Systems: explica clases y capacidades IDS/IDPS; se usa como guía técnica de referencia y se complementa con el glosario vigente.'],
    [academySecurity, 'ITIC Academy 2026, bloque 48 «Seguridad en redes y aplicaciones», §7.1: IDS/IPS; cotejo curricular.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 125: seguridad en redes y sistemas, detección y respuesta ante intrusiones.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, temas II.13 y IV.12: herramientas de seguridad y técnicas de protección de redes.']
  ]), null,
  'Respuesta A. Un IDS monitoriza y analiza eventos para detectar actividad no autorizada y alertar; por sí solo, detectar no implica bloquear. Las capacidades de prevención o intento de detener incidentes corresponden a IDPS/IPS. Se eliminan afirmaciones absolutas sobre la inmunidad del IDS frente a DDoS.', 'corregida']
];

const edits = {
  4941: {
    texto: 'Según la clasificación de series de Recomendaciones UIT-T, señale la correspondencia incorrecta:',
    opciones: [
      'Serie V: comunicación de datos por la red telefónica.',
      'Serie X: redes de datos y comunicación de sistemas abiertos.',
      'Serie E: sistemas y medios de transmisión, sistemas digitales y redes.',
      'Serie I: red digital de servicios integrados (RDSI).'
    ],
    respuesta_correcta: 2
  },
  4942: {
    texto: 'Sobre el funcionamiento actual de Mi Carpeta Ciudadana, señale la afirmación incorrecta:',
    opciones: [
      'Almacena centralizadamente una copia de los datos personales y expedientes, y permite consultarla sin autenticarse con Cl@ve o certificado.',
      'Permite acceder a los datos de salud disponibles en los sistemas participantes y al servicio HCDSNS; los datos se ofrecen desde los sistemas de origen integrados.',
      'Permite consultar la situación de los expedientes que ponen a disposición las administraciones conectadas o adheridas.',
      'Permite presentar escritos y solicitudes mediante el Registro Electrónico General de la AGE y acceder a servicios de diferentes administraciones.'
    ],
    respuesta_correcta: 0
  },
  4943: {
    texto: 'Según la descripción vigente del servicio común Notifica, señale la afirmación desactualizada o incorrecta:',
    opciones: [
      'Proporciona una plataforma común para gestionar el envío y la práctica de notificaciones y comunicaciones.',
      'Puede utilizarse mediante interfaz para las personas usuarias o integrarse con las aplicaciones de los organismos emisores.',
      'La comparecencia electrónica vigente se realiza en la antigua Dirección Electrónica Habilitada (DEH), y no en DEHú.',
      'Controla los plazos según los parámetros del envío y la expiración de la notificación.'
    ],
    respuesta_correcta: 2
  },
  4944: {
    texto: 'En un cuadro de mando, ¿qué sigla designa el indicador que comunica el progreso hacia un objetivo medible?',
    opciones: [
      'KPI (Key Performance Indicator).',
      'KLI (Key Level Index).',
      'KCI (Key Control Item).',
      'KMI (Key Management Input).'
    ],
    respuesta_correcta: 0
  },
  4945: {
    texto: '¿Qué afirmación distingue correctamente un IDS de un sistema de prevención de intrusiones (IPS/IDPS)?',
    opciones: [
      'Un IDS monitoriza y analiza eventos para detectar actividad no autorizada y generar alertas; la detección por sí sola no implica bloquearla.',
      'Un IDS siempre bloquea el tráfico malicioso antes de que llegue al sistema protegido.',
      'Un IPS solo registra eventos y no incorpora funciones de prevención o respuesta.',
      'Un IDS no puede verse afectado por ataques de denegación de servicio distribuido (DDoS).'
    ],
    respuesta_correcta: 0
  }
};

aplicar({ numero: '924', fecha: '2026-11-11', records, edits });

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-924.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academyById = {
  4941: [academyProtocols, 'ITIC Academy 2026, bloque 43 «Protocolos»: cotejo curricular del contexto UIT-T y telecomunicaciones; las correspondencias exactas de series se verifican con UIT-T.'],
  4942: [academyServices, 'ITIC Academy 2026, bloque 23 «Servicios comunes»: Carpeta Ciudadana, Cl@ve y servicios de administración electrónica; cotejo curricular, con funcionamiento comprobado en PAe/CTT.'],
  4943: [academyServices, 'ITIC Academy 2026, bloque 23 «Servicios comunes»: Notifica y evolución de DEH a DEHú; cotejo curricular, con canal y plazos comprobados en PAe.'],
  4944: [academyKpi, 'ITIC Academy 2026, bloque 12, §3.3: KPI/KGI y diseño de indicadores de cuadro de mando; y bloque 34, Business Intelligence. Cotejo curricular, definición contrastada con Microsoft Learn.'],
  4945: [academySecurity, 'ITIC Academy 2026, bloque 48, §7.1: IDS/IPS. Cotejo curricular, distinción verificada con glosario NIST.']
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const [url, detail] = academyById[change.id];
  q.clasificacion.bloque_academia = `${detail} Se cita como cotejo curricular, no como fuente primaria.`;
  q.clasificacion.nota = `${q.revision.estado}. ${detail} La explicación y referencias técnicas oficiales constan en el registro del lote.`;
  q.revision.observaciones += ` ${detail}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `ITIC Academy: ${detail}` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy añadido al lote 924.');
