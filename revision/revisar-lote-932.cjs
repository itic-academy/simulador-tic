const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const portafirmas = 'https://administracionelectronica.gob.es/ctt/portafirmas';
const desi = 'https://digital-strategy.ec.europa.eu/en/policies/desi';
const desi2022 = 'https://digital-decade-desi.digital-strategy.ec.europa.eu/datasets/desi-2022/charts/desi-composite?indicator=desi_hc';
const ibmSoa = 'https://www.ibm.com/docs/en/rbd/9.7.0?topic=overview-service-oriented-architecture-soa';
const windowsKms = 'https://learn.microsoft.com/en-us/windows/deployment/volume-activation/activate-windows-clients';
const microservices = 'https://learn.microsoft.com/en-us/azure/architecture/microservices/';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academyCommon = 'https://drive.google.com/file/d/1wf9xQtg-rFSu_6YPmeUc_Y9J3bq1Lb-q/view?usp=drivesdk';
const academyEconomy = 'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk';
const academySoa = 'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk';
const academyOs = 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk';
const refs = entries => entries.map(([url, referencia]) => ({ url, referencia }));

const records = [
  [4981, ['49'], ['I-10'], ['Portafirmas', 'flujos de firma', 'firmas en paralelo', 'firmas en cascada', 'visto bueno'], refs([
    [portafirmas, 'PAe-CTT, solución Portafirmas: en producción; permite flujos con varios firmantes en paralelo o en cascada, usuarios que otorgan visto bueno e integración mediante servicios web.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 49: infraestructuras y servicios comunes para la interoperabilidad y tramitación entre Administraciones.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema I.10: infraestructuras y servicios comunes y plataformas de validación e interconexión.'],
    [academyCommon, 'ITIC Academy, bloque 49 «Servicios Comunes», versión del archivo 2026, sección de servicios comunes de firma electrónica: Portafirmas y flujos paralelos/en cascada con visto bueno; cotejo curricular.']
  ]), null, 'Respuesta A. La ficha actual del CTT describe Portafirmas como un componente de los flujos de trabajo organizativos que admite varios firmantes en paralelo o en cascada, así como usuarios de visto bueno. No se anulan por el mero hecho de añadirse firmas posteriores: cada firma del flujo puede coexistir y validarse conforme al formato y a la política de firma aplicables.', 'corregida'],
  [4982, ['18', '19'], ['I-6'], ['DESI', 'Índice de Economía y Sociedad Digitales', 'DESI 2022', 'indicadores digitales', 'referencia histórica'], refs([
    [desi, 'Comisión Europea, DESI: el índice independiente se publicó de 2014 a 2022; desde 2023 sus indicadores se integran en el informe sobre el estado de la Década Digital. La pregunta debe identificarse como histórica.'],
    [desi2022, 'Comisión Europea, base DESI 2022: las cuatro dimensiones de esa edición son capital humano, conectividad, integración de la tecnología digital y servicios públicos digitales.'],
    [a1, 'Convocatoria A1 GSI 2025, temas 18 y 19: impacto de las TIC en la sociedad, economía y empleo; el DESI se coteja como indicador contextual de la digitalización europea.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema I.6: sociedad de la información y Agenda Digital para España; no incluye una pregunta autónoma de DESI.'],
    [academyEconomy, 'ITIC Academy 2026, bloque 06 «Economía, sociedad, empleo y transformación digital», versión 2026.2 (01/10/2026): impacto de las TIC en sociedad/economía y actualización de la Década Digital. Cotejo temático general; la vigencia y la edición histórica DESI se determinan con la Comisión Europea.']
  ]), null, 'Respuesta A para la edición DESI 2022. Esa metodología agrupó indicadores en capital humano, conectividad, integración de la tecnología digital y servicios públicos digitales. El reactivo se fecha expresamente: la Comisión dejó de publicar DESI como índice independiente después de 2022 y, desde 2023, integra sus indicadores en el informe del estado de la Década Digital; no debe presentarse como un índice independiente actual.', 'historica'],
  [4983, ['58'], ['II-6'], ['SOA', 'arquitectura orientada a servicios', 'bajo acoplamiento', 'autonomía', 'reutilización'], refs([
    [ibmSoa, 'IBM Documentation, Service-oriented architecture: la independencia relativa entre un servicio y otros programas se denomina bajo acoplamiento; SOA fomenta modularidad y reutilización. La opción de acoplamiento fuerte contradice ese objetivo.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 58: procesamiento cooperativo, arquitectura cliente-servidor y SOA.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema II.6: arquitecturas cliente-servidor, multicapas, interoperabilidad y servicios web.'],
    [academySoa, 'ITIC Academy 2026, bloque 28 «Arquitectura SOA y requisitos no funcionales», versión 2026.1 (25/09/2026): identifica bajo acoplamiento, reutilización y autonomía como principios SOA; cotejo curricular.']
  ]), null, 'Respuesta D. SOA busca que los servicios sean relativamente independientes, reutilizables y autónomos. La gestión sin estado conversacional persistente es un objetivo frecuente, aunque no una regla absoluta para cualquier diseño. El enunciado se precisa como un principio común, y la opción C se formula como minimización del estado conversacional; un acoplamiento fuerte no es un principio SOA.', 'corregida'],
  [4984, ['61'], ['II-2', 'IV-1'], ['Windows', 'Key Management Service', 'KMS', 'activación por volumen'], refs([
    [windowsKms, 'Microsoft Learn, Activate clients running Windows: el servicio Key Management Service (KMS) usa una topología cliente-servidor; los clientes con GVLK localizan un host KMS en la red y pueden activarse automáticamente cuando se cumplen los requisitos y el umbral de activación.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 61: sistemas operativos Microsoft, fundamentos, instalación, administración y gestión.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, temas II.2 (sistemas operativos, incluido Windows) y IV.1 (administración del sistema operativo y software de base).'],
    [academyOs, 'ITIC Academy 2026, bloque 27 «Sistemas Operativos», versión 2026.1 (14/08/2026): fundamentos, instalación y administración de Windows dentro de A1-61 y A2-II.2/IV.1; cotejo curricular.']
  ]), null, 'Respuesta C. KMS (Key Management Service) es el servicio de activación por volumen con arquitectura cliente-servidor. En equipos Windows con licencia por volumen y clave de cliente GVLK, el sistema puede descubrir el host KMS por DNS y activarse automáticamente si se satisfacen el umbral y los requisitos de conectividad; esto no elimina las condiciones de licencia ni se aplica a toda instalación de Windows.', 'corregida'],
  [4985, ['58'], ['II-7'], ['microservicios', 'servicios independientes', 'API', 'arquitectura de software'], refs([
    [microservices, 'Microsoft Learn, Azure Architecture Center, Microservices architecture style: una arquitectura de microservicios consta de servicios pequeños y autónomos que se comunican mediante API bien definidas; pueden desplegarse y escalarse independientemente.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 58: procesamiento cooperativo y arquitectura SOA, ámbito próximo de arquitectura de servicios.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema II.7: modelo de desarrollo basado en contenedores y microservicios, arquitectura, despliegue, monitorización y escalado.'],
    [academySoa, 'ITIC Academy 2026, bloque 28 «Arquitectura SOA y requisitos no funcionales», versión 2026.1 (25/09/2026): microservicios autónomos e independientemente desplegables que se apoyan en API y mensajería; cotejo curricular.']
  ]), null, 'Respuesta C. Los microservicios son un enfoque arquitectónico y organizativo en el que una aplicación se descompone en servicios pequeños, autónomos y desplegables de forma independiente, comunicados mediante interfaces o API bien definidas. Las opciones A y B convierten en universales costes o ralentizaciones que no definen el enfoque.', 'vigente']
];

const edits = {
  4981: { texto: 'En Portafirmas, respecto a los flujos de trabajo con varios firmantes, ¿qué afirmación es correcta?' },
  4982: { texto: 'En la metodología del Índice de Economía y Sociedad Digitales (DESI) de 2022, ¿qué cuatro dimensiones se comparaban entre los países?' },
  4983: { texto: 'Entre los principios de diseño comúnmente asociados a la arquitectura orientada a servicios (SOA), ¿cuál no es un objetivo?' , opcion: [2, 'Que los servicios minimicen la conservación del estado conversacional entre solicitudes.'] },
  4984: { texto: 'En equipos cliente Windows con licencia por volumen, ¿qué servicio permite la activación automática a través de la red y evita activarlos manualmente uno por uno?' }
};

aplicar({ numero: '932', fecha: '2026-11-11', records, edits });

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-932.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academyById = {
  4981: 'ITIC Academy, bloque 49 «Servicios Comunes», sección de servicios comunes de firma electrónica: Portafirmas y flujos paralelos/en cascada con visto bueno; cotejo curricular.',
  4982: 'ITIC Academy 2026, bloque 06 «Economía, sociedad, empleo y transformación digital», versión 2026.2 (01/10/2026): impacto de las TIC en sociedad/economía y actualización de la Década Digital; cotejo temático general.',
  4983: 'ITIC Academy 2026, bloque 28 «Arquitectura SOA y requisitos no funcionales», versión 2026.1 (25/09/2026): principios SOA, bajo acoplamiento, reutilización y autonomía; cotejo curricular.',
  4984: 'ITIC Academy 2026, bloque 27 «Sistemas Operativos», versión 2026.1 (14/08/2026): fundamentos, instalación y administración de Windows dentro de A1-61 y A2-II.2/IV.1; cotejo curricular.',
  4985: 'ITIC Academy 2026, bloque 28 «Arquitectura SOA y requisitos no funcionales», versión 2026.1 (25/09/2026): microservicios autónomos y desplegables independientemente; cotejo curricular.'
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const detail = academyById[change.id];
  q.clasificacion.bloque_academia = `${detail} No sustituye la fuente técnica primaria.`;
  q.clasificacion.nota = `${q.revision.estado}. ${detail} Fundamento y vigencia documentados en revision.fuentes y en el registro del lote.`;
  q.revision.observaciones += ` ${detail} Cotejo curricular, no fuente primaria.`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: change.id === 4981 ? academyCommon : change.id === 4982 ? academyEconomy : change.id === 4984 ? academyOs : academySoa, referencia: `${detail} Cotejo curricular.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de ITIC Academy añadido al lote 932.');
