const aplicar = require('./aplicar-lote.cjs');
const path = require('node:path');
const fs = require('node:fs');
const ref = (url, referencia) => ({url, referencia});
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const drive48 = 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const drive26 = 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk';
const drive28 = 'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk';
const drive01 = 'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk';

const records = [
  [5161, ['80'], ['I-6','IV-12'], ['firma electrónica','AdES','BES','XL','firma longeva','validación a largo plazo'], [
    ref('https://firmaelectronica.gob.es/en/empresas/cosas-deberias-saber/formatos-firma', 'Portal oficial de Firma Electrónica: distingue la firma básica AdES-BES de AdES-XL, que incorpora certificados e información de revocación para validación a largo plazo.'),
    ref('https://www.etsi.org/deliver/etsi_ts/102800_102899/102853/01.01.02_60/ts_102853v010102p.pdf', 'ETSI TS 102 853, §9.3: AdES-A se construye sobre una firma XL e incorpora sellos de archivo; AdES-XL incorpora valores de datos de validación.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 80: formatos de firma electrónica.'),
    ref(a2, 'Convocatoria A2 GSI 2025, temas I.6 (identidad y firma electrónica) y IV.12 (mecanismos de firma digital).'),
    ref(drive48, 'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», versión 2026.1: PKI, formatos de firma y validación; cobertura curricular, con afirmaciones de formato comprobadas en fuentes oficiales.')
  ], null, 'Se acota el reactivo a la nomenclatura histórica de perfiles extendidos AdES. BES es el nivel básico y no incorpora el material de validación a largo plazo que caracteriza XL; A se construye sobre XL y añade preservación archivística. Las normas ETSI actuales emplean perfiles baseline B/T/LT/LTA, por lo que no se presentan BES/XL/A como la única nomenclatura vigente.', 'corregida'],
  [5162, ['53'], ['II-1'], ['CPD','infraestructura convergente','cómputo','almacenamiento','red'], [
    ref('https://www.dell.com/en-us/infohub/articles/dell-vxrail-tech-book', 'Dell Technologies, guía de infraestructura: diferencia plataformas convergentes preintegradas (servidores, almacenamiento y red) de hiperconvergencia, que añade almacenamiento definido por software en clúster.'),
    ref('https://www.dell.com/en-us/learn/learning-center/lp/end-user-computing', 'Dell Technologies, introducción a infraestructura convergente: integración de computación, almacenamiento y networking en un sistema.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 53: servidores y centros de proceso de datos, diseño, implantación y gestión.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.1: tecnologías de ordenadores, arquitecturas escalables y de altas prestaciones, componentes y capacidades.'),
    ref(drive26, 'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1: integra los temas oficiales A1 de hardware/CPD y A2 de tecnologías de ordenadores.')
  ], null, 'En un CPD, infraestructura convergente designa una solución preintegrada que reúne recursos de cómputo, almacenamiento y red. No significa integrar servicios de voz/datos, ni infraestructura de instalaciones (electricidad, refrigeración y cableado); la hiperconvergencia es una modalidad más estrechamente definida, normalmente con almacenamiento definido por software.', 'corregida'],
  [5163, ['54'], ['II-1'], ['USB','USB4','USB4 Version 2.0','80 Gbit/s','120/40 Gbit/s','tasa de transferencia'], [
    ref('https://usb.org/usb4', 'USB Implementers Forum, USB4: operación de dos carriles con hasta 80 Gbit/s en cables certificados USB 80Gbps; arquitectura compatible con USB 3.2 y 2.0.'),
    ref('https://www.usb.org/sites/default/files/2022-10/USB-IF%20USB%2080Gbps%20Announcement_FINAL_v2.pdf', 'USB-IF, publicación de USB4 Version 2.0: hasta 80 Gbit/s y modo asimétrico opcional de hasta 120 Gbit/s en una dirección para usos de vídeo.'),
    ref('https://www.usb.org/sites/default/files/usb_data_performance_language_usage_guidelines_jan_2024.pdf', 'USB-IF, Data Performance Language Usage Guidelines: tasas USB4 y USB 3.2, expresadas como velocidad de señalización/rendimiento nominal, no como caudal útil de aplicación.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 54: dispositivos personales y conectividad.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.1: tecnologías actuales de ordenadores y capacidades de sus componentes.'),
    ref(drive26, 'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1: conectividad y buses de dispositivos; el dato de velocidad se comprueba en USB-IF.')
  ], null, 'La pregunta original era obsoleta: USB 3.2 no llega a 20 Gbit/s full-duplex y la familia USB actual incluye USB4 Version 2.0. Se pregunta ahora por el mayor modo simétrico: USB4 v2 admite hasta 80 Gbit/s agregados bidireccionales. Existe además un modo asimétrico de hasta 120/40 Gbit/s, por lo que 120 no se confunde con una tasa simétrica ni con caudal útil garantizado.', 'corregida'],
  [5164, ['58'], ['II-6'], ['BPEL','WS-BPEL','OASIS','orquestación','servicios web','procesos de negocio'], [
    ref('https://docs.oasis-open.org/wsbpel/2.0/wsbpel-v2.0.html', 'OASIS Standard WS-BPEL 2.0: lenguaje ejecutable basado en XML para especificar procesos de negocio que usan servicios web.'),
    ref('https://www.oasis-open.org/committees/wsbpel/faq.php', 'OASIS WS-BPEL FAQ: WS-BPEL es un estándar OASIS de lenguaje de orquestación de servicios.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 58: procesamiento cooperativo, arquitectura cliente-servidor y SOA.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.6: arquitectura cliente-servidor, interoperabilidad y arquitectura de servicios web.'),
    ref(drive28, 'ITIC Academy, bloque 28 «Arquitectura SOA y requisitos no funcionales», versión 2026.1: servicios web, orquestación de procesos y arquitectura SOA.')
  ], null, 'WS-BPEL 2.0 (habitualmente llamado BPEL) es un lenguaje de procesos de negocio basado en XML y un estándar OASIS; permite definir procesos ejecutables que orquestan servicios web. No es WSDL (descripción de interfaces), SOAP (mensajería) ni la organización OASIS.', 'corregida'],
  [5165, ['3'], ['I-1'], ['Constitución Española','artículo 141.1','provincia','límites provinciales','ley orgánica'], [
    ref('https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229', 'BOE, Constitución Española, artículo 141.1: cualquier alteración de los límites provinciales habrá de aprobarse por las Cortes Generales mediante ley orgánica.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 3: Constitución, Comunidades Autónomas y Administración local.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema I.1: Constitución Española; encaje constitucional general, sin epígrafe A2 específico de alteración de límites provinciales.'),
    ref(drive01, 'ITIC Academy, bloque 01 «Constitución, organización del Estado y AGE», versión 2026.2: organización territorial y Administración local; cotejo curricular, con literal comprobado en BOE.')
  ], null, 'La respuesta se verifica en el texto consolidado del artículo 141.1 de la Constitución: las Cortes Generales mediante ley orgánica. El encaje directo A1 es el tema 3, sobre Administración local; A2-I.1 es el tema general de Constitución y no se atribuye a su programa un subtema local inexistente.', 'vigente']
];

const edits = {
  5161: { texto: 'En la nomenclatura clásica de perfiles extendidos AdES, ¿qué formato corresponde a la firma básica y no incorpora datos de validación a largo plazo?', opciones: ['AdES-BES','AdES-A','AdES-XL'], respuesta_correcta: 0, comentarios: 'AdES-BES es el perfil básico; XL incorpora certificados y datos de revocación, y A añade preservación archivística sobre una firma XL. La nomenclatura ETSI actual también incluye perfiles baseline B, T, LT y LTA.' },
  5162: { texto: 'En un centro de proceso de datos, ¿qué reúne una solución de infraestructura convergente?', opciones: ['Servicios de voz, datos y multimedia en una misma red de comunicaciones.','Electricidad, refrigeración y cableado de las instalaciones.','Recursos de cómputo, almacenamiento y red preintegrados como una solución.','Una nube híbrida que abstrae mediante orquestación la ubicación física de los servicios.'], respuesta_correcta: 2, comentarios: 'La integración convergente reúne cómputo, almacenamiento y red en una solución preintegrada. No debe confundirse con la convergencia de comunicaciones ni con las instalaciones del CPD; la hiperconvergencia es una modalidad con características adicionales.' },
  5163: { texto: '¿Cuál es la mayor tasa agregada simétrica de transferencia que ofrece la especificación USB4 Version 2.0?', opciones: ['10 Gbit/s por USB 3.0.','10 Gbit/s en semidúplex por USB 3.1.','80 Gbit/s en operación agregada bidireccional por USB4 v2.','20 Gbit/s full-duplex por USB 3.2.'], respuesta_correcta: 2, comentarios: 'USB4 v2 permite hasta 80 Gbit/s agregados en el modo simétrico de dos carriles. También define hasta 120/40 Gbit/s asimétricos para ciertos usos de vídeo. La pregunta original, que afirmaba el máximo de toda la familia USB, estaba obsoleta y empleaba mal full-duplex.' },
  5164: { texto: '¿Qué es WS-BPEL 2.0 (BPEL)?', opciones: ['Un lenguaje ejecutable basado en XML y estandarizado por OASIS para definir procesos de negocio que orquestan servicios web.','Un lenguaje XML que describe las interfaces y operaciones de un servicio web.','Un protocolo de mensajería XML para comunicar servicios web.','La organización internacional sin ánimo de lucro que desarrolla estándares de e-business.'], respuesta_correcta: 0, comentarios: 'WS-BPEL 2.0 es el estándar OASIS para lenguaje de ejecución/orquestación de procesos de negocio con servicios web; WSDL describe interfaces, SOAP define mensajería y OASIS es la organización.' },
  5165: { texto: 'Según el artículo 141.1 de la Constitución Española, ¿cómo debe aprobarse cualquier alteración de los límites provinciales?', opciones: ['Por el Gobierno mediante decreto.','Por el Congreso de los Diputados mediante ley ordinaria.','Por las Cortes Generales mediante ley orgánica.','Por el Congreso de los Diputados mediante decreto legislativo.'], respuesta_correcta: 2, comentarios: 'El artículo 141.1 lo establece expresamente: Cortes Generales mediante ley orgánica.' }
};

const logPath = path.join(__dirname, 'cambios-lote-968.json');
if (!fs.existsSync(logPath)) aplicar({numero:'968',fecha:'2026-11-12',records,edits});
const bankPath = path.join(__dirname,'..','preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath,'utf8'));
const log = JSON.parse(fs.readFileSync(logPath,'utf8'));
const academy = {
  5161: ['ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», versión 2026.1: PKI y formatos de firma electrónica; BES/XL/A se comprueban además con el portal oficial y ETSI.', 'Cotejo A1-80/A2-I.6 y IV.12. Se aclara que BES/XL/A es nomenclatura histórica extendida; no se hace pasar por los perfiles baseline actuales.'],
  5162: ['ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1: tema A1-53 y componentes de infraestructuras TIC.', 'Cotejo A1-53/A2-II.1. La expresión convergente se delimita con documentación técnica; el programa cubre CPD y componentes, no prescribe una definición comercial única.'],
  5163: ['ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1: conectividad/buses de dispositivos; las tasas nominales se contrastan con USB-IF.', 'Cotejo A1-54/A2-II.1. Se explicita el alcance de tasa simétrica y el modo asimétrico para evitar perpetuar el máximo USB 3.x desactualizado.'],
  5164: ['ITIC Academy, bloque 28 «Arquitectura SOA y requisitos no funcionales», versión 2026.1: arquitectura SOA, servicios web y orquestación de procesos.', 'Cotejo directo A1-58/A2-II.6; se distingue BPEL de WSDL, SOAP y de OASIS como organismo.'],
  5165: ['ITIC Academy, bloque 01 «Constitución, organización del Estado y AGE», versión 2026.2: Constitución, organización territorial y Administración local.', 'Cotejo A1-3 directo; A2-I.1 es encaje general de Constitución, no un epígrafe específico de Administración local. Literal cotejado en BOE.']
};
const entries = new Map(log.cambios.map(item=>[item.id,item]));
const motive = 'Cotejo del temario ITIC Academy accesible en Drive, delimitación de cobertura curricular y contraste con fuentes primarias.';
for (const [key,[block,note]] of Object.entries(academy)) {
  const id=Number(key), q=bank.preguntas.find(item=>item.id===id), entry=entries.get(id);
  if (!q||!entry) throw new Error(`Falta la pregunta o el registro ${id}`);
  const before={bloque_academia:q.clasificacion.bloque_academia,nota:q.clasificacion.nota};
  q.clasificacion.bloque_academia=block; q.clasificacion.nota=note;
  const corrections=entry.correcciones_posteriores||[];
  if(!corrections.some(item=>item.motivo===motive)) corrections.push({fecha:'2026-11-12',motivo:motive,clasificacion_anterior:before,clasificacion_actualizada:{bloque_academia:block,nota:note}});
  entry.correcciones_posteriores=corrections; entry.actualizada=structuredClone(q);
}
const byId=new Map(log.cambios.map(c=>[c.id,c])); let replaced=0;
const raw=fs.readFileSync(bankPath,'utf8');
const output=raw.replace(/^    \{[\s\S]*?^    \}/gm,block=>{const old=JSON.parse(block),entry=byId.get(old.id);if(!entry)return block;replaced++;return JSON.stringify(entry.actualizada,null,2).split('\n').map(line=>`    ${line}`).join('\n');});
if(replaced!==5) throw new Error(`Se esperaban 5 preguntas actualizadas, se encontraron ${replaced}`);
fs.writeFileSync(bankPath,output); fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
