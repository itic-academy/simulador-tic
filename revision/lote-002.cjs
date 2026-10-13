const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const file = path.join(__dirname, '..', 'preguntas_preparatic.json');
const raw = fs.readFileSync(file, 'utf8');
const data = JSON.parse(raw);
const boe = id => `https://www.boe.es/buscar/act.php?id=${id}`;
const ce = boe('BOE-A-1978-31229'), lcsp = boe('BOE-A-2017-12902'), lpac = boe('BOE-A-2015-10565');
const records = [
  [13, [14], [], 6, ['economia', 'series-historicas'], null, '', 'El enunciado no define crecimiento anual, acumulado, PIB real o ciclo expansivo. No se certifica la respuesta hasta contrastar la serie y el criterio del temario.', 'pendiente_ambiguedad'],
  [14, [13], [], 5, ['subvenciones', 'concurrencia-competitiva'], boe('BOE-A-2003-20977'), '24.4', 'La propuesta provisional se notifica y abre diez días para alegaciones. Si concurren los requisitos para omitir la audiencia, la propuesta tiene carácter definitivo.'],
  [15, [1], ['I-2'], 1, ['constitucion', 'cortes-generales'], ce, '66.2 y 97', 'Las Cortes legislan, aprueban los presupuestos y controlan al Gobierno. La potestad reglamentaria general corresponde al Gobierno.'],
  [16, [11], [], 5, ['contratacion-publica', 'principios'], lcsp, '132.1', 'El artículo exige transparencia y proporcionalidad, junto con igualdad de trato y no discriminación.'],
  [17, [22], ['I-6'], 35, ['LSSI', 'comercio-electronico'], boe('BOE-A-2002-13758'), 'Denominación de la ley', 'La norma es la Ley 34/2002, de 11 de julio. La antigüedad de su fecha no supone que esté derogada.'],
  [18, [5, 14], [], 2, ['fondos-europeos', 'FEDER', 'FSE+'], 'https://commission.europa.eu/publications/partnership-agreement-spain-2021-2027_en', 'Acuerdo de Asociación de España 2021–2027', 'España recibe financiación del FEDER y del FSE+ en el marco 2021–2027. Se precisa el periodo y se actualiza la denominación del fondo social.'],
  [19, [27], ['I-7'], 8, ['proteccion-datos', 'base-juridica'], boe('BOE-A-2018-16673'), '8.2', 'Para esta base jurídica, la competencia debe estar atribuida por una norma con rango de ley. El enunciado anterior generalizaba las cesiones sin precisar finalidad ni base del tratamiento.'],
  [20, [5], [], 2, ['union-europea', 'comision-europea'], 'https://eur-lex.europa.eu/eli/treaty/tfeu_2016/2015-12-25/spa/pdf', 'TFUE, artículo 250', 'El tratado exige mayoría de los miembros de la Comisión. Se sustituye «mayoría simple» por la formulación precisa, sin confundirla con mayoría de presentes o votos emitidos.'],
  [21, [80], ['I-6'], 36, ['eIDAS', 'firma-avanzada'], 'https://www.boe.es/boe/dias/2025/12/19/pdfs/BOE-A-2025-26088.pdf', 'Reproducción oficial del artículo 26 de eIDAS', 'El control exclusivo de los datos de creación es requisito de la firma avanzada. El vínculo que permite detectar cambios se refiere a los datos firmados, no a los datos del certificado.'],
  [22, [2], [], 1, ['constitucion', 'poder-judicial'], ce, '122.1', 'La Constitución reserva a la Ley Orgánica del Poder Judicial la organización y funcionamiento de juzgados y tribunales.'],
  [23, [9], ['I-8'], 4, ['procedimiento-administrativo', 'reposicion'], lpac, '124.2', 'El plazo para dictar y notificar la resolución del recurso potestativo de reposición es un mes.'],
  [24, [8], ['I-8', 'I-9'], 3, ['representacion', 'apoderamientos'], lpac, '5.3, 5.5, 5.6 y 6.2', 'La consulta documentada al registro acredita la representación. La falta de acreditación es subsanable; la interoperabilidad de los registros es obligatoria y la representación no impide actuar personalmente.'],
  [25, [5], [], 2, ['union-europea', 'presidencia-consejo', 'historica-2023'], 'https://www.consilium.europa.eu/es/council-eu/presidency-council-eu/timeline-presidencies-of-the-council-of-the-eu/', 'Segundo semestre de 2023', 'España presidió el Consejo entre julio y diciembre de 2023. Se conserva como pregunta histórica con periodo explícito.', 'historica'],
  [26, [11], [], 5, ['contratacion-publica', 'suministros'], lcsp, '16.3.a', 'La entrega sucesiva por precios unitarios, según las necesidades del adquirente, es un supuesto de contrato de suministro.'],
  [27, [24], ['I-8'], 7, ['empleo-publico', 'interinos'], boe('BOE-A-2015-11719'), '10.1.d', 'El límite es nueve meses dentro de dieciocho. Se corrige el rango de la norma: Real Decreto Legislativo, no Real Decreto.'],
  [28, [11], [], 5, ['contratacion-publica', 'suministros'], lcsp, '300.4', 'Tras la recepción conforme, la Administración asume gestión, uso y caducidad. El suministrador conserva su responsabilidad por defectos ocultos.'],
  [29, [22], ['I-9'], 3, ['administracion-electronica', 'sedes'], boe('BOE-A-2021-5032'), 'Disposición adicional sexta.1', 'Las sedes de la AGE pasan a ser asociadas a la sede del PAGe. El apartado segundo establece una regla distinta para las sedes de organismos públicos y entidades dependientes.'],
  [30, [60], ['II-2', 'IV-1'], 27, ['linux', 'comandos', 'who'], 'https://www.gnu.org/software/coreutils/manual/html_node/who-invocation.html', 'GNU Coreutils, who invocation', 'who muestra usuarios conectados y fecha/hora de inicio de sesión. «Tiempo de conexión» podía confundirse con la duración transcurrida.'],
  [31, [93, 98], ['III-13'], 38, ['metricas-software', 'fan-in'], null, '', 'La relación del fan-in con reutilización y complejidad depende de la métrica y del modelo utilizados. Falta precisar el contexto para excluir la opción «las dos anteriores».', 'pendiente_ambiguedad'],
  [32, [86], ['III-1'], 15, ['ciclo-vida', 'espiral'], null, '', 'Clasificada. Pendiente de cotejo con el artículo original de Boehm; no se modifica ni se certifica aún la respuesta.', 'pendiente_fuente'],
  [33, [66], ['III-11'], 30, ['dotnet-framework', 'ASMX', 'tecnologia-legada'], 'https://learn.microsoft.com/en-us/dotnet/framework/wcf/feature-details/comparing-aspnet-web-services-to-wcf-based-on-development', 'ASP.NET Web Services: archivo de servicio', 'La extensión .asmx y la directiva WebService corresponden a los servicios XML clásicos de ASP.NET en .NET Framework. Se delimita esa tecnología para no generalizarlo a todos los servicios de .NET.'],
  [34, [115, 118], ['II-8'], 43, ['redes', 'ARP', 'IPv4'], 'https://www.rfc-editor.org/rfc/rfc826.html', 'RFC 826: resolución de direcciones Ethernet', 'En una red Ethernet con IPv4, ARP obtiene la dirección de enlace a partir de una dirección de protocolo. Se concreta IPv4: IPv6 utiliza Neighbor Discovery.'],
  [35, [93], ['II-3', 'III-9'], 38, ['programacion', 'orientacion-objetos'], 'https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/tutorials/oop', 'Cuatro principios básicos de POO', 'La formulación habitual de los cuatro principios es abstracción, encapsulamiento, herencia y polimorfismo. Se pide expresamente ese conjunto para distinguirlo de los elementos del modelo.'],
  [36, [80], ['I-6'], 36, ['servicios-confianza', 'certificados'], boe('BOE-A-2020-14046'), '9.3.a', 'El plazo de conservación es quince años desde la extinción del certificado o la finalización del servicio. Se añade el inicio del cómputo que faltaba.'],
  [37, [108], ['II-8'], 42, ['redes', 'OSI', 'presentacion'], 'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.200-199407-I!!PDF-S&lang=e&type=items', 'UIT-T X.200, apartados 7.2.3 y 7.2.4', 'La capa de presentación negocia la sintaxis de transferencia y representa los datos en ella. Se reformula para evitar mezclar funciones de aplicación y sesión en distractores ambiguos.'],
  [38, [89, 95], ['III-4'], 38, ['modelado-datos', 'entidad-relacion', 'metrica'], null, '', 'Clasificada. La copia oficial de MÉTRICA no pudo recuperarse; queda pendiente de cotejar la terminología con el documento de técnicas y prácticas.', 'pendiente_fuente'],
  [39, [88], ['III-3'], 38, ['requisitos', 'trazabilidad'], 'https://www.nasa.gov/reference/6-2-requirements-management/', '6.2.1.2.3: trazabilidad de requisitos', 'La trazabilidad permite seguir las relaciones entre requisitos, sus fuentes y los productos de diseño, implementación y prueba.'],
  [40, [69, 43], ['II-14'], 18, ['software-libre', 'GPL', 'copyleft'], 'https://www.gnu.org/licenses/quick-guide-gplv3.en.html', 'The Foundations of the GPL', 'La GPL permite usar, estudiar, modificar y distribuir, manteniendo el copyleft al distribuir obras derivadas conforme a la licencia. No autoriza convertir una obra derivada distribuida en privativa.']
];
const edits = {
  14: {texto: 'Según el artículo 24.4 de la Ley 38/2003, notificada la propuesta de resolución provisional en una subvención por concurrencia competitiva, ¿qué trámite se abre, cuando no se ha prescindido legalmente de la audiencia?'},
  16: {texto: 'Según el artículo 132.1 de la Ley 9/2017, los órganos de contratación darán a los licitadores y candidatos un tratamiento igualitario y no discriminatorio y ajustarán su actuación a los principios de:', opcion: [1, 'Concurrencia y no arbitrariedad.']},
  18: {texto: 'En el marco financiero 2021–2027, ¿de cuáles de los siguientes fondos europeos recibe financiación España?', opciones: ['FEDER (Fondo Europeo de Desarrollo Regional).', 'FSE+ (Fondo Social Europeo Plus).', 'De ambos: FEDER y FSE+.', 'De ninguno de los anteriores.']},
  19: {texto: 'Según el artículo 8.2 de la Ley Orgánica 3/2018, ¿qué exige que un tratamiento de datos se base en una misión de interés público o en el ejercicio de poderes públicos?', opciones: ['Que el responsable sea una Administración, sin ningún requisito adicional.', 'Que derive de una competencia atribuida por una norma con rango de ley.', 'Que exista únicamente una instrucción interna del responsable.', 'Que todos los afectados presten necesariamente su consentimiento.']},
  20: {texto: 'Según el artículo 250 del Tratado de Funcionamiento de la Unión Europea, los acuerdos de la Comisión Europea se adoptan por:', opciones: ['Mayoría de los votos emitidos, aunque no alcance la mayoría de miembros.', 'Unanimidad en todos los casos.', 'Mayoría cualificada de Estados que represente el 65 % de la población.', 'Mayoría de sus miembros.']},
  24: {texto: 'Sobre la representación y los registros electrónicos de apoderamientos regulados en los artículos 5 y 6 de la Ley 39/2015, señale la afirmación correcta:'},
  25: {texto: '¿Qué país ejerció la Presidencia del Consejo de la Unión Europea del 1 de julio al 31 de diciembre de 2023?'},
  27: {texto: 'Según el artículo 10.1.d del Real Decreto Legislativo 5/2015, que aprueba el texto refundido del Estatuto Básico del Empleado Público, el nombramiento de personal funcionario interino por exceso o acumulación de tareas puede durar como máximo:'},
  28: {opcion: [3, 'La Administración responsable de su gestión, uso o caducidad, sin perjuicio de la responsabilidad del suministrador por los vicios o defectos ocultos en los mismos.']},
  30: {texto: 'En Linux con GNU Coreutils, ¿qué comando muestra los usuarios conectados, el terminal y la fecha y hora de inicio de sesión?'},
  33: {texto: 'En ASP.NET clásico sobre .NET Framework, ¿qué archivo y directiva se utilizan para definir un servicio web XML ASMX?', opciones: ['Un archivo .asmx que contiene la directiva WebService.', 'Un archivo .css con una directiva WebService.', 'Un archivo .json que sustituye obligatoriamente a la clase del servicio.', 'Un archivo .sql que expone directamente los métodos del servicio.']},
  34: {texto: 'En una red local Ethernet con IPv4, ¿qué afirmación sobre ARP es correcta?', opcion: [1, 'ARP permite obtener la dirección MAC correspondiente a una dirección IPv4.']},
  35: {texto: '¿Qué conjunto enumera los cuatro principios básicos habitualmente asociados a la programación orientada a objetos?'},
  36: {texto: 'Según el artículo 9.3.a de la Ley 6/2020, ¿durante cuánto tiempo desde la extinción del certificado o la finalización del servicio deben los prestadores cualificados conservar la información relativa a los servicios prestados?'},
  37: {texto: 'Según el modelo OSI de la recomendación UIT-T X.200, ¿qué función corresponde a la capa de presentación?', opciones: ['Encaminar paquetes entre redes.', 'Transmitir bits por el medio físico.', 'Negociar la sintaxis de transferencia y representar los datos en la sintaxis acordada.', 'Proporcionar el direccionamiento y encaminamiento IP.']}
};
const changes = [];
for (const [id, a1, a2, academia, etiquetas, url, referencia, note, state] of records) {
  const q = data.preguntas.find(q => q.id === id);
  assert.ok(q && !q.revision, `Pregunta ${id} ausente o ya revisada`);
  const original = structuredClone(q);
  const {opcion, ...edit} = edits[id] || {};
  Object.assign(q, edit);
  if (opcion) q.opciones[opcion[0]] = opcion[1];
  q.clasificacion = {A1: a1.map(n => `A1-${n}`), A2: a2.map(n => `A2-${n}`), bloque_academia: academia, estado: 'revisada', nota: a2.length ? '' : 'Sin correspondencia directa asignada en el programa A2; no implica exclusión absoluta.'};
  q.etiquetas = etiquetas;
  q.revision = {estado: state || (edits[id] ? 'corregida' : 'vigente'), fecha: '2026-10-01', fuentes: url ? [{url, referencia}] : [], observaciones: note};
  if (url) q.comentarios = note;
  changes.push({id, original, actualizada: structuredClone(q)});
}
const byId = new Map(changes.map(c => [c.id, c]));
let count = 0;
const output = raw.replace(/^    \{[\s\S]*?^    \}/gm, block => {
  const old = JSON.parse(block);
  const change = byId.get(old.id);
  if (!change) return block;
  assert.deepEqual(old, change.original);
  count++;
  return JSON.stringify(change.actualizada, null, 2).split('\n').map(l => '    ' + l).join('\n');
});
assert.equal(count, records.length);
assert.deepEqual(JSON.parse(output), data);
fs.writeFileSync(file, output);
fs.writeFileSync(path.join(__dirname, 'cambios-lote-002.json'), JSON.stringify({fecha: '2026-10-01', alcance: 'IDs 13–40; verificación individual y clasificación editorial', cambios: changes}, null, 2) + '\n');
console.log(`Lote 002 aplicado: ${count} preguntas.`);
