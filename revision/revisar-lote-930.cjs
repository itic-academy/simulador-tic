const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const w3c = 'https://www.w3.org/standards/';
const eni = 'https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331&p=20241106&tn=0';
const pilar = 'https://pilar.ccn-cert.cni.es/pilar/';
const pilarMethod = 'https://pilar.ccn-cert.cni.es/index.php/metodologia/metodologia-pilar';
const magerit = 'https://www.ccn-cert.cni.es/es/component/content/article/551-nueva-version-de-magerit.html?Itemid=11827&catid=23';
const lucia = 'https://www.ccn-cert.cni.es/es/soluciones-seguridad/lucia.html';
const incidentReporting = 'https://www.ccn-cert.cni.es/es/gestion-de-incidentes/notificacion-de-incidentes.html';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academyWeb = 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const academyEni = 'https://drive.google.com/file/d/1zdx_PRBfKM9tRy61Boz_yPekU-D-b_6S/view?usp=drivesdk';
const academySecurity = 'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk';
const refs = entries => entries.map(([url, referencia]) => ({ url, referencia }));

const records = [
  [4971, ['77'], ['II-9', 'III-12'], ['W3C', 'estándares web', 'arquitectura de la Web'], refs([
    [w3c, 'W3C, Web Standards: sus recomendaciones son estándares web; entre los ámbitos de aplicación enumerados está la arquitectura de la Web.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 77: HTML, CSS, XML, navegadores y compatibilidad con estándares.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema II.9 (lenguajes de marca) y III.12 (aplicaciones web y estándares asociados).'],
    [academyWeb, 'ITIC Academy 2026, bloque 30, versión 2026.1 (31/08/2026): arquitectura de desarrollo web y lenguajes de marca/compatibilidad con estándares; cotejo curricular.']
  ]), null, 'Respuesta C. W3C desarrolla especificaciones y estándares de la plataforma web; entre los ámbitos que enumera el propio consorcio está la arquitectura de la Web. Se precisa el enunciado para que pregunte por un ámbito incluido, no para dar a entender que W3C normaliza una única materia.', 'corregida'],
  [4972, ['45'], ['I-9'], ['Real Decreto 4/2010', 'ENI', 'dimensiones de interoperabilidad', 'dimensión temporal'], refs([
    [eni, 'Real Decreto 4/2010, texto consolidado BOE (última actualización publicada 06/11/2024), art. 6: nombra dimensiones organizativa, semántica y técnica; además manda no olvidar la dimensión temporal para asegurar acceso a largo plazo.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 45: ENI y dimensiones de interoperabilidad.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema I.9: ENS, ENI y normas técnicas de interoperabilidad.'],
    [academyEni, 'ITIC Academy 2026, bloque 20, versión 2026.2 (14/08/2026): ENI, dimensiones y dimensión temporal; cotejo curricular.']
  ]), null, 'Respuesta A. El artículo 6 del Real Decreto 4/2010 enumera las dimensiones organizativa, semántica y técnica. El mismo artículo también recuerda la dimensión temporal para garantizar el acceso a la información a lo largo del tiempo, de modo que el enunciado se delimita a las tres dimensiones expresamente enumeradas y no oculta esa consideración temporal.', 'corregida'],
  [4973, ['47'], ['I-9', 'III-13'], ['MAGERIT', 'PILAR', 'CCN', 'análisis y gestión de riesgos'], refs([
    [pilar, 'Portal oficial de PILAR/CCN: PILAR es un entorno de análisis y gestión de riesgos de sistemas de información que sigue MAGERIT y está desarrollado y financiado parcialmente por el CCN.'],
    [pilarMethod, 'PILAR, metodología: describe análisis de activos, amenazas, impacto, salvaguardas y riesgo residual según MAGERIT.'],
    [magerit, 'CCN-CERT: MAGERIT es la metodología de análisis y gestión de riesgos de los sistemas de información, elaborada como respuesta a la dependencia de las TIC.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 47: análisis y gestión de riesgos de sistemas y herramientas.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema I.9 (ENS/CCN-STIC) y III.13 (herramientas de ciberseguridad).'],
    [academySecurity, 'ITIC Academy 2026, bloque 22, versión 2026.2 (26/08/2026), secciones 1.5 y 8.4: gestión de riesgos/MAGERIT y PILAR; cotejo curricular.']
  ]), null, 'Respuesta C. PILAR es el entorno de análisis y gestión de riesgos del CCN que implementa MAGERIT. La metodología no elimina el riesgo: identifica activos y dependencias, evalúa amenazas e impactos, considera salvaguardas y permite estimar riesgo residual. LORETO se refiere a almacenamiento en la nube; LUCIA, a gestión federada de incidentes; INES, al estado de seguridad ENS.', 'vigente'],
  [4974, ['47'], ['I-9', 'III-13'], ['MAGERIT', 'análisis de riesgos', 'sistemas de información'], refs([
    [magerit, 'CCN-CERT, Nueva versión de MAGERIT: define la metodología de análisis y gestión de riesgos de los sistemas de información y explica su finalidad ante la dependencia de las TIC.'],
    [pilarMethod, 'PILAR, metodología MAGERIT: analiza activos, amenazas, impacto, salvaguardas y riesgo residual; no es una metodología de eliminación absoluta del riesgo.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 47: análisis y gestión de riesgos de sistemas y herramientas.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema I.9 (ENS/CCN-STIC) y III.13 (herramientas de ciberseguridad).'],
    [academySecurity, 'ITIC Academy 2026, bloque 22, versión 2026.2 (26/08/2026), sección 1.5: gestión de riesgos y MAGERIT; cotejo curricular.']
  ]), null, 'Respuesta C. MAGERIT proporciona un método para analizar y gestionar los riesgos de los sistemas de información. Eliminar completamente los riesgos físicos no es su objetivo; tampoco es una plataforma de notificación de incidentes ni reduce la exposición suprimiendo activos como regla metodológica.', 'vigente'],
  [4975, ['127'], ['III-13'], ['LUCIA', 'CCN-CERT', 'notificación de incidentes', 'gestión federada de tickets'], refs([
    [lucia, 'CCN-CERT, LUCIA: herramienta del CCN-CERT para gestionar ciberincidentes en entidades sujetas al ENS y coordinar su seguimiento y comunicación.'],
    [incidentReporting, 'CCN-CERT, Notificación de incidentes: indica expresamente LUCIA para las entidades del ámbito del ENS y recoge también el correo electrónico como vía de notificación.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 127: ciberseguridad y respuesta ante incidentes.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema III.13: herramientas en ciberseguridad y gestión de incidentes.'],
    [academySecurity, 'ITIC Academy 2026, bloque 22, versión 2026.2 (26/08/2026), secciones 8.5 y 9: LUCIA y proceso de gestión de incidentes; cotejo curricular.']
  ]), null, 'Respuesta B. LUCIA permite la gestión y notificación/coordinación de incidentes para organismos del ámbito del Esquema Nacional de Seguridad; el CCN-CERT también indica el correo electrónico como otro canal, por lo que no es la única vía posible. INES informa del estado de seguridad ENS, PILAR analiza riesgos y LORETO ofrece almacenamiento en nube.', 'vigente']
];

const edits = {
  4971: {
    texto: '¿Cuál de los siguientes ámbitos está incluido entre aquellos para los que el W3C desarrolla especificaciones y estándares web?',
    opciones: ['Diseño de sistemas operativos.', 'Bases de datos.', 'Arquitectura de la Web.', 'Inteligencia Artificial.'],
    respuesta_correcta: 2
  },
  4972: {
    texto: 'Según el artículo 6 del Real Decreto 4/2010, ¿cuáles son las tres dimensiones de interoperabilidad que se enumeran expresamente, sin perjuicio de la dimensión temporal que el propio artículo también recuerda?',
    respuesta_correcta: 0
  },
  4975: {
    texto: 'Para las entidades del ámbito de aplicación del Esquema Nacional de Seguridad, ¿qué herramienta del CCN-CERT permite gestionar y notificar ciberincidentes?',
    respuesta_correcta: 1
  }
};

aplicar({ numero: '930', fecha: '2026-11-11', records, edits });

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-930.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academyById = {
  4971: [academyWeb, 'ITIC Academy 2026, bloque 30, versión 2026.1: arquitectura web, HTML/XML y compatibilidad con estándares; A1-77 y A2-II.9/III.12.'],
  4972: [academyEni, 'ITIC Academy 2026, bloque 20, versión 2026.2: ENI, dimensiones de interoperabilidad y dimensión temporal; A1-45 y A2-I.9.'],
  4973: [academySecurity, 'ITIC Academy 2026, bloque 22, versión 2026.2, secciones 1.5 y 8.4: MAGERIT y herramienta PILAR; A1-47 y A2-I.9/III.13.'],
  4974: [academySecurity, 'ITIC Academy 2026, bloque 22, versión 2026.2, sección 1.5: análisis y gestión del riesgo mediante MAGERIT; A1-47 y A2-I.9/III.13.'],
  4975: [academySecurity, 'ITIC Academy 2026, bloque 22, versión 2026.2, sección 8.5: LUCIA y gestión/notificación de incidentes; A1-127 y A2-III.13.']
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const [url, detail] = academyById[change.id];
  q.clasificacion.bloque_academia = `${detail} Cotejo curricular, no autoridad normativa.`;
  q.clasificacion.nota = `${q.revision.estado}. ${detail} El fundamento técnico se aporta en revision.fuentes y en el registro del lote.`;
  q.revision.observaciones += ` ${detail}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `${detail} Cotejo curricular.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy añadido al lote 930.');
