const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');
const ref = (url, referencia) => ({ url, referencia });

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const pilar = 'https://pilar.ccn-cert.cni.es/';
const upilar = 'https://www.ccn-cert.cni.es/es/guias-futuro.html?catid=11&id=58%3Aupilar&view=article';
const ccn827 = 'https://www.ccn-cert.cni.es/publico/seriesCCN-STIC/series/800-Esquema_Nacional_de_Seguridad/827-Gestion_dispositivos_moviles_ENS/827-Gestion_dispositivos_moviles_ENS-may14.pdf';
const rd311 = 'https://www.boe.es/eli/es/rd/2022/05/03/311/con';
const ccn825 = 'https://www.ccn-cert.cni.es/es/series-ccn-stic/guias/series-ccn-stic/800-guia-esquema-nacional-de-seguridad/543-ccn-stic-825-ens-iso27001/file.html';
const ccn825news = 'https://www.ccn-cert.cni.es/es/seguridad-al-dia/novedades-ccn-cert/12666-actualizada-la-guia-ccn-stic-825-sobre-el-esquema-nacional-de-seguridad-y-la-certificacion-27001.html';
const ccn887 = 'https://www.ccn-cert.cni.es/es/seguridad-al-dia/novedades-ccn-cert/12360-nueva-guia-ccn-stic-887g-de-configuracion-segura-para-monitorizacion-y-gestion-de-aws.html';
const ccn887list = 'https://www.ccn-cert.cni.es/es/pdf/guias/series-ccn-stic/800-guia-esquema-nacional-de-seguridad?format=html&limit=20&limitstart=140';
const aenor = 'https://www.aenor.com/es/conocenos';
const une = 'https://www.une.org/';
const academy48 = 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const academy22 = 'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk';
const academy26 = 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk';
const academy24 = 'https://drive.google.com/file/d/1HKwUIuFhm-wVG0e8kZfFm1R8qI1rGS2G/view?usp=drivesdk';

const records = [
  [5331, ['47'], ['II-13'], ['PILAR', 'μPILAR', 'MAGERIT', 'análisis de riesgos'], [
    ref(pilar, 'Portal oficial CCN-CERT/PILAR: distingue PILAR, PILAR Basic, μPILAR (versión reducida) y RMAT.'),
    ref(upilar, 'CCN-CERT, ficha de μPILAR: herramienta reducida a la mínima expresión para realizar análisis de riesgos muy rápidos; la fuente coincide con la opción C.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 47: análisis y gestión de riesgos y herramientas.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.13: seguridad de sistemas y gestión de riesgos.'),
    ref(academy48, 'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», §1.2: MAGERIT/PILAR y sus variantes, incluida μPILAR.'),
  ], null, 'La respuesta C (μPILAR) es correcta: el CCN la identifica como la versión reducida para análisis de riesgos muy rápidos. Se contrasta con la ficha de producto vigente y el portal de PILAR, no solo con una descripción histórica.', 'vigente'],
  [5332, ['48', '54'], ['I-9'], ['CCN-STIC 827', 'dispositivos móviles', 'BYOD', 'MDM', 'seguridad móvil'], [
    ref(ccn827, 'CCN-STIC 827, edición de mayo de 2014: §5.1, Grupo 3, exige autenticación, bloqueo automático tras inactividad y permite el bloqueo remoto por el administrador (pp. 21–22); §§5.1–5.2 y anexos B/C contemplan modelos BYOD controlados, restricciones por nivel de acceso y análisis de sus riesgos (pp. 23–28, 55–64). No declara que todo BYOD esté «intensamente desaconsejado».'),
    ref(rd311, 'Real Decreto 311/2022, ENS vigente: derogó el RD 3/2010 citado por la guía original; la pregunta se acota expresamente a lo que dice la edición de 2014.'),
    ref(a1, 'Convocatoria A1 GSI 2025, temas 48 (ENS/CCN-STIC) y 54 (dispositivos móviles y medidas de seguridad).'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema I.9: ENS y guías CCN-STIC serie 800.'),
    ref(academy48, 'ITIC Academy, bloque 48 «Seguridad, ENS y ciberseguridad», actualización 2026.2; cubre ENS y guías CCN-STIC.'),
    ref(academy26, 'ITIC Academy, bloque A1.54 «Hardware, servidores, CPD, almacenamiento y virtualización», edición 2026; incluye medidas de seguridad y gestión de dispositivos móviles.'),
  ], null, 'La respuesta C es la incorrecta: CCN-STIC 827 no formula una prohibición o desaconsejamiento general de BYOD; analiza riesgos y contempla su adopción bajo políticas, controles MDM y niveles de acceso. A, B y D reproducen medidas del Grupo 3. La guía es de 2014 y se basaba en el RD 3/2010, hoy derogado por el RD 311/2022; se mantiene el reactivo como comprobación histórica de aquella guía, no como una política universal vigente.', 'historica'],
  [5333, ['48'], ['I-9'], ['ENS', 'ISO/IEC 27001', 'CCN-STIC 825', 'certificación', 'conformidad'], [
    ref(rd311, 'Real Decreto 311/2022, texto consolidado: el cumplimiento del ENS se determina para el sistema comprendido en su ámbito, según requisitos, categoría y medidas aplicables; una certificación ISO del SGSI no es por sí sola una declaración o certificación ENS del sistema.'),
    ref(ccn825, 'CCN-STIC 825, edición alineada con ISO/IEC 27001:2022 y RD 311/2022: presenta un análisis de compatibilidad y mapeo de medidas; aclara que la correspondencia no es una equivalencia aritmética y que hay que verificar lo exigido por la categoría ENS.'),
    ref(ccn825news, 'CCN-CERT, actualización de CCN-STIC 825 (17/07/2023): describe el mapeo como análisis de compatibilidad, recomienda particularizar el análisis y contempla usarlo para validar conformidad con RD 311/2022.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 48: Esquema Nacional de Seguridad y adecuación.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema I.9: ENS y guías CCN-STIC serie 800.'),
    ref(academy22, 'ITIC Academy, bloque 22 «Seguridad, ENS y ciberseguridad», edición 2026.2: marco ENS y guías CCN-STIC; cotejo curricular, no sustituto de la norma.'),
  ], null, 'La respuesta A (No) es correcta: disponer de certificación ISO/IEC 27001 del sistema de gestión no implica automáticamente la conformidad ENS del sistema de información. CCN-STIC 825 ofrece un mapeo de compatibilidad, no equivalencia automática; se debe verificar el alcance y las medidas según la categoría ENS. Se sustituye la opción C por una afirmación inequívocamente falsa para que no replique, con más detalle, la misma respuesta negativa.', 'corregida'],
  [5334, ['48'], ['I-9'], ['CCN-STIC 887G', 'AWS', 'configuración segura', 'cloud', 'guías CCN-STIC'], [
    ref(ccn887, 'CCN-CERT: anuncio de CCN-STIC 887G, «Guía de Configuración segura para Monitorización y gestión AWS».'),
    ref(ccn887list, 'Catálogo oficial CCN-STIC 800: el título de CCN-STIC 887G identifica AWS como plataforma objeto de la guía; ficha modificada el 01/03/2024.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 48: ENS y guías CCN-STIC.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema I.9: ENS y guías CCN-STIC serie 800.'),
    ref(academy22, 'ITIC Academy, bloque 22 «Seguridad, ENS y ciberseguridad», apartado de guías CCN-STIC y ENS, edición 2026.2.'),
  ], null, 'La respuesta A (AWS) es correcta. Se ajusta el enunciado al título oficial «Guía de configuración segura para monitorización y gestión AWS»; el original hablaba de cargas de trabajo, expresión que no reproduce con precisión el nombre y objeto publicados por el CCN.', 'corregida'],
  [5335, ['50'], [], ['AENOR', 'UNE', 'normalización', 'certificación', 'evaluación de la conformidad'], [
    ref(aenor, 'AENOR, apartado «Conócenos»: hoy los servicios de certificación, ensayos e inspección del grupo los presta AENOR Confía, S.A.U. (y sus filiales); la entidad legalmente responsable de la normalización nacional es UNE.'),
    ref(une, 'UNE, Asociación Española de Normalización: entidad legalmente responsable del desarrollo de la normalización en España.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 50: organizaciones nacionales e internacionales de normalización, conformidad y certificación.'),
    ref(academy24, 'ITIC Academy, bloque «Organismos de normalización», A1.50, versión 2026.1: corrige la separación institucional UNE/AENOR y cubre conformidad y certificación.'),
  ], null, 'Se conserva la opción C como respuesta, pero se corrige su descripción institucional obsoleta. Desde la separación de actividades, UNE es la entidad responsable de la normalización española; los servicios de evaluación de la conformidad del Grupo AENOR los presta actualmente AENOR Confía, S.A.U. La opción evita atribuir a la misma entidad jurídica la normalización y la certificación.', 'corregida'],
];

const edits = {
  5332: { texto: 'En la edición de mayo de 2014 de la guía CCN-STIC 827, «Gestión y uso de dispositivos móviles», señale la afirmación INCORRECTA sobre sus recomendaciones:', comentarios: 'La respuesta C es la incorrecta. La edición de 2014 no desaconseja de forma general todo modelo BYOD: considera sus riesgos y contempla su implantación con políticas específicas, gestión centralizada y restricciones según nivel de acceso. Las demás afirmaciones aparecen en el Grupo 3 del apartado 5.1. Se acota la pregunta a esa edición, basada entonces en el RD 3/2010; el marco ENS vigente es el RD 311/2022.' },
  5333: { texto: '¿La certificación ISO/IEC 27001 de un sistema de gestión de seguridad de la información basta, por sí sola, para acreditar la conformidad de un sistema de información con el ENS?', opciones: [
    'No; el alcance de ISO/IEC 27001 y el cumplimiento del ENS se evalúan de forma distinta, y hay que verificar las medidas aplicables según el alcance y la categoría del sistema.',
    'Sí; cualquier certificación ISO/IEC 27001 acredita automáticamente el cumplimiento completo del ENS.',
    'Sí; basta la certificación ISO/IEC 27001 y no se requiere declaración ni certificación de conformidad con el ENS.',
  ], comentarios: 'La respuesta A (No) es correcta. ISO/IEC 27001 certifica un sistema de gestión; no sustituye automáticamente la declaración o certificación de conformidad ENS del sistema. La guía CCN-STIC 825 proporciona una correspondencia de compatibilidad, no una equivalencia automática, y exige verificar los requisitos aplicables según la categoría. Se reformulan las opciones para que solo haya una respuesta negativa inequívoca.' },
  5334: { texto: 'La CCN-STIC 887G es la «Guía de configuración segura para monitorización y gestión» de qué plataforma?', comentarios: 'La respuesta A (AWS) es correcta. El título del documento publicado por el CCN es «Guía de configuración segura para monitorización y gestión AWS»; se reemplaza la expresión no literal «cargas de trabajo» del enunciado original.' },
  5335: { texto: 'En la estructura institucional española actual, señale la afirmación correcta sobre normalización y certificación:', opciones: [
    'La normalización española corresponde a una entidad pública y la certificación es una función reservada al sector público.',
    'AENOR desarrolla la normalización nacional y certifica exclusivamente a Administraciones públicas.',
    'UNE es responsable del desarrollo de la normalización en España; AENOR Confía, S.A.U. presta servicios de certificación y evaluación de la conformidad dentro del Grupo AENOR.',
    'AENOR es un organismo público internacional responsable de elaborar las normas ISO/IEC.',
  ], comentarios: 'La respuesta C es correcta. La descripción original de AENOR como entidad sin ánimo de lucro que certifica quedó obsoleta tras la separación de la normalización y la evaluación de la conformidad. UNE es la entidad legalmente responsable de la normalización en España; AENOR indica que sus servicios de certificación, ensayos e inspección los presta AENOR Confía, S.A.U. Se actualizan el enunciado y las opciones a la estructura institucional vigente.' }
};

if (!fs.existsSync(path.join(__dirname, 'cambios-lote-1002.json'))) aplicar({ numero: '1002', fecha: '2026-11-12', records, edits });

const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-1002.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5331: ['ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», §1.2: MAGERIT/PILAR y variantes, incluida μPILAR.', 'Cotejo curricular con A1.47/A2.II.13; μPILAR es la versión reducida para análisis rápidos.'],
  5332: ['ITIC Academy, bloque 48 «Seguridad, ENS y ciberseguridad», edición 2026.2, y bloque A1.54 sobre seguridad/gestión de dispositivos móviles; el bloque 22 recoge ENS y guías CCN-STIC.', 'Reactivo contextualizado en la guía histórica CCN-STIC 827 (2014); el ENS vigente es RD 311/2022. A1.48/A1.54 y A2.I.9.'],
  5333: ['ITIC Academy, bloque 22 «Seguridad, ENS y ciberseguridad», actualización 2026.2: alcance y conformidad ENS, mapeos CCN-STIC y relación con ISO 27001.', 'Cotejo curricular con A1.48/A2.I.9; la certificación ISO no equivale automáticamente a conformidad ENS.'],
  5334: ['ITIC Academy, bloque 22 «Seguridad, ENS y ciberseguridad», actualización 2026.2, apartado de guías CCN-STIC serie 800.', 'Cotejo curricular con A1.48/A2.I.9; la designación 887G corresponde a la guía oficial para AWS.'],
  5335: ['ITIC Academy, bloque «Organismos de normalización», versión 2026.1, A1.50: UNE, AENOR, ENAC, evaluación de la conformidad y certificación.', 'Cotejo curricular con A1.50. La separación institucional actual distingue normalización (UNE) de certificación (AENOR Confía, S.A.U.).']
};
const reason = 'Cotejo curricular individual con ITIC Academy en Drive y programas oficiales A1/A2.';
for (const [key, [block, note]] of Object.entries(academy)) {
  const id = Number(key), q = bank.preguntas.find(x => x.id === id), change = log.cambios.find(x => x.id === id);
  if (!q || !change) throw new Error(`Falta registro de ${id}`);
  const before = { bloque_academia: q.clasificacion.bloque_academia, nota: q.clasificacion.nota };
  q.clasificacion.bloque_academia = block; q.clasificacion.nota = note;
  const later = change.correcciones_posteriores || [];
  if (!later.some(x => x.motivo === reason)) later.push({ fecha: '2026-11-12', motivo: reason, clasificacion_anterior: before, clasificacion_actualizada: { bloque_academia: block, nota: note } });
  change.correcciones_posteriores = later; change.actualizada = structuredClone(q);
}
const byId = new Map(log.cambios.map(c => [c.id, c]));
const raw = fs.readFileSync(bankPath, 'utf8'); let replaced = 0;
const output = raw.replace(/^    \{[\s\S]*?^    \}/gm, block => {
  const old = JSON.parse(block), change = byId.get(old.id); if (!change) return block;
  replaced++; return JSON.stringify(change.actualizada, null, 2).split('\n').map(line => `    ${line}`).join('\n');
});
if (replaced !== 5) throw new Error(`Se esperaban 5 cambios; encontrados ${replaced}`);
JSON.parse(output); fs.writeFileSync(bankPath, output); fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Lote 1002 enriquecido con cotejo curricular y trazabilidad de las cinco preguntas.');
