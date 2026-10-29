const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-566.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));

const rows = {
  3146: {A1:['A1-53','A1-54','A1-125'], A2:['A2-II-13'], url:['https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view','https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view'], note:'ITIC Academy Bloque 26 Hardware, versión 2026.1 (31/08/2026), §§6.1 y 6.4 incluye EDR en el inventario de controles y gestión segura del endpoint; Bloque 48 Seguridad en redes y aplicación (actualizado 04/10/2026), §7.2 trata EDR/XDR. El material se coteja con los temas oficiales de seguridad de servidores/dispositivos y herramientas de ciberseguridad; el despliegue concreto se contrasta con Microsoft Learn.'},
  3147: {A1:['A1-52'], A2:['A2-II-1'], url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view', note:'ITIC Academy Bloque 26 Hardware, versión 2026.1 (31/08/2026), §§2.1–2.2 cubre arquitectura de CPU, ISA y multiprocesamiento. Se coteja con A1-52 (sistemas de altas prestaciones/arquitecturas) y A2-II-1 (tecnologías y arquitecturas actuales); la explicación de HT y sus límites procede de Intel.'},
  3148: {A1:['A1-55'], A2:['A2-II-1'], url:'https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view', note:'ITIC Academy Bloque 25 Cloud Computing, versión 2026 (actualizado 21/08/2026), trata IaaS, PaaS y SaaS y las nubes públicas, privadas e híbridas. Cotejo directo con A1-55 y A2-II-1. La asignación de Heroku, Microsoft 365 y OpenStack a sus modelos se verifica en la documentación de los proveedores/proyecto, no se atribuye al temario.'},
  3149: {A1:['A1-56'], A2:['A2-IV-5'], url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view', note:'ITIC Academy Bloque 26 Hardware, versión 2026.1 (31/08/2026), §§7–8 desarrolla almacenamiento, SAN, iSCSI y NVMe/NVMe-oF. Cotejo directo con A1-56 y A2-IV-5. La distinción normativa/técnica entre formato M.2, interfaz PCIe y protocolo NVMe se comprueba con SNIA.'},
  3150: {A1:['A1-58'], A2:['A2-II-6'], url:'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view', note:'ITIC Academy Bloque 28 Arquitectura SOA y requisitos no funcionales, versión 2026 (actualizado 26/09/2026), apartados de SOA recogen bajo acoplamiento, reutilización, autonomía, interoperabilidad, contratos y composición. Correspondencia directa con A1-58 y A2-II-6. Para que el enunciado tenga una referencia concreta, la selección de componibilidad, descubribilidad y reutilización se coteja con el catálogo de Thomas Erl.'}
};

const contentNotes = {
  3146:'EDR significa Endpoint Detection and Response. La capacidad se basa en incorporar los endpoints incluidos en el alcance y soportados para que remitan telemetría; el equipo de seguridad obtiene visibilidad y puede investigar o ejecutar respuestas desde una consola central. No basta con instalar algo en el cortafuegos perimetral ni con un servidor central sin incorporar endpoints. EDR es un control de detección y respuesta, no una garantía por sí solo de que se cumplen todas las medidas de seguridad. Se reformula para evitar “asegurar” y el alcance absoluto “cada dispositivo”.',
  3147:'Hyper-Threading (HT) es la implementación de Intel de multihilo simultáneo que, en las CPU que la admiten, expone dos procesadores lógicos por núcleo físico, compartiendo recursos del núcleo. Puede mejorar el uso de recursos ociosos y el rendimiento/throughput de ciertas cargas, pero no duplica necesariamente el rendimiento y no está disponible en todos los modelos Intel. Se acota la pregunta para no sugerir compatibilidad universal ni ganancia garantizada.',
  3148:'Heroku es PaaS; Microsoft 365 es un ejemplo de SaaS y OpenStack ofrece una solución IaaS. Se conserva la clave, se actualiza “Office 365” al nombre vigente “Microsoft 365” y se hace explícito que se pregunta por un ejemplo de servicio.',
  3149:'M.2 designa un factor de forma, PCIe una interfaz/bus y NVMe un protocolo de acceso a SSD no volátil sobre PCIe. No son tres “tipos de conexión” homogéneos y M.2 también puede alojar unidades SATA; por eso se acota la pregunta a identificar correctamente los tres conceptos de una unidad NVMe M.2 sobre PCIe. La opción B conserva la clave correcta; las restantes mezclan protocolos/servicios de otras clases.',
  3150:'No hay un catálogo único universal de “principios SOA”; para hacer comprobable la pregunta se acota al catálogo de principios de orientación a servicios de Thomas Erl. En ese catálogo son principios la reutilización, la descubribilidad y la componibilidad; “alto acoplamiento” y “baja cohesión” no son los principios descritos. La lista incluye también contrato de servicio, bajo acoplamiento, abstracción, autonomía, ausencia de estado e interoperabilidad.'
};

assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), row = rows[c.id];
  assert.ok(q && row && q.revision, `Pregunta ${c.id} o cotejo incompletos`);
  for (const id of [...row.A1, ...row.A2]) assert.ok(official.has(id), `Tema oficial inexistente: ${id}`);
  const links = Array.isArray(row.url) ? row.url : [row.url];
  const academy = `${row.note} ${links.join(' ')} Correspondencia comprobada en revision/temario-oficial.json y en los anexos oficiales de las convocatorias GSI A1/A2 2025 (BOE-A-2025-25938 y BOE-A-2025-26262). El material de academia orienta el cotejo curricular, no sustituye las fuentes técnicas primarias.`;
  q.clasificacion = {A1:row.A1, A2:row.A2, bloque_academia:academy, estado:'revisada', nota:`${q.revision.estado}. ${academy}`};
  q.revision.observaciones = `${contentNotes[c.id]} A1 ${row.A1.join('/')} y A2 ${row.A2.join('/')}. Cotejo curricular: ${academy}`;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Clasificación oficial y cotejo Drive guardados para el lote 566.');
