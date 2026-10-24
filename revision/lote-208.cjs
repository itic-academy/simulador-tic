const apply = require('./aplicar-lote.cjs');

const sources = {
  software: [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930', referencia: 'BOE, Real Decreto Legislativo 1/1996, texto refundido de la Ley de Propiedad Intelectual, art. 96.1–4: los programas comprenden su documentación preparatoria y técnica; la protección requiere originalidad, alcanza las formas de expresión y versiones sucesivas, y no cubre las ideas o principios subyacentes.' }
  ],
  sia: [
    { url: 'https://administracionelectronica.gob.es/ctt/sia', referencia: 'Portal de Administración Electrónica, Sistema de Información Administrativa (SIA): inventario de información administrativa de la AGE, con relación de procedimientos y servicios de la AGE y de las Administraciones participantes; el ENI lo regula en su art. 9.' },
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331', referencia: 'BOE, Real Decreto 4/2010, Esquema Nacional de Interoperabilidad, art. 9, inventarios de información administrativa; para la AGE, Sistema de Información Administrativa.' }
  ],
  eif: [
    { url: 'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:52017DC0134', referencia: 'Comisión Europea, COM(2017) 134 final, Marco Europeo de Interoperabilidad, §3.5: la interoperabilidad semántica conserva y hace comprensible el significado preciso de los datos intercambiados entre las partes.' }
  ],
  emgde: [
    { url: 'https://administracionelectronica.gob.es/ctt/eemgde', referencia: 'Portal de Administración Electrónica, e-EMGDE, Esquema de Metadatos para la Gestión del Documento Electrónico: esquema que reúne metadatos mínimos obligatorios del documento y expediente electrónicos y otros metadatos complementarios de gestión y conservación; actualización publicada versión 3.1.' },
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2012-10048', referencia: 'BOE, Resolución de 28 de junio de 2012, NTI de Política de gestión de documentos electrónicos, apartado VII.4, que contempla el e-EMGDE como referencia y herramienta de apoyo.' }
  ],
  sicres: [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-13749', referencia: 'BOE, Resolución de 22 de julio de 2021, NTI SICRES4: apartado segundo, entrada en aplicación el día siguiente a su publicación y período de un año para adaptar la versión anterior, durante el cual ambas versiones estaban vigentes. Publicada en BOE el 10-08-2021; la transición es un dato histórico.' }
  ]
};

const records = [
  [1356, [43], ['II-14'], ['propiedad intelectual', 'programas de ordenador', 'documentación preparatoria', 'artículo 96 LPI'], sources.software, null,
    'La opción sobre documentación preparatoria, documentación técnica y manuales es la recogida en el art. 96.1 TRLPI: se protegen como parte de la expresión del programa. El artículo exige originalidad (apdo. 2), excluye las ideas y principios subyacentes, incluidas las interfaces (apdo. 4), y extiende la protección a las versiones sucesivas (apdo. 3). Cotejo con ITIC Academy, bloque 18 «Protección jurídica del software», versión 2026.1 (26-08-2026), tema A1-43/A2-II-14; la formulación se contrasta con el texto legal consolidado, no solo con el material de estudio.', 'vigente'],
  [1357, [49], ['I-9'], ['SIA', 'Sistema de Información Administrativa', 'inventario administrativo', 'procedimientos y servicios'], sources.sia, null,
    'SIA es el inventario/catálogo de información administrativa que recoge procedimientos y servicios de la AGE y de las Administraciones participantes; no es el Punto de Acceso General ni un portal de sedes. Se precisa la opción para no atribuirle la integración universal de todo servicio electrónico existente. Cotejo con ITIC Academy, bloque 23 «Infraestructuras y servicios comunes», versión 2026.1 (31-08-2026), apartado SIA, y bloque 03 «Actuación administrativa», versión 2026.2. Correspondencia A1-49/A2-I-9.', 'corregida'],
  [1358, [45], ['I-9'], ['Marco Europeo de Interoperabilidad', 'interoperabilidad semántica', 'significado de la información'], sources.eif, null,
    'En el Marco Europeo de Interoperabilidad, la dimensión semántica permite conservar y comprender el significado de la información intercambiada; por ello la opción correcta es «Semántica». Se reemplaza la paráfrasis confusa sobre “procesar de manera inteligible” por el criterio explícito de preservación/comprensión del significado. Cotejo con ITIC Academy, bloque 20 «Interoperabilidad de sistemas», versión 2026.2 (14-08-2026), §5.3; correspondencia A1-45/A2-I-9.', 'corregida'],
  [1359, [104], ['II-16'], ['e-EMGDE', 'gestión documental', 'metadatos', 'documento electrónico'], sources.emgde, null,
    'e-EMGDE significa Esquema de Metadatos para la Gestión del Documento Electrónico. No es un formato XML médico, metadatos de firma web ni un lenguaje de scripting. El Portal de Administración Electrónica publica la actualización del esquema a la versión 3.1; la identidad y función documental se mantienen. Cotejo con ITIC Academy, bloque 40 «Gestión documental», versión 2026.1 (23-09-2026), y bloque 20 de interoperabilidad, apartado e-EMGDE. Correspondencia A1-104/A2-II-16.', 'vigente'],
  [1360, [46], ['I-9'], ['SICRES 3.0', 'SICRES 4.0', 'NTI', 'período transitorio', 'pregunta histórica'], sources.sicres, null,
    'La Resolución de 22-07-2021 (publicada en BOE el 10-08-2021) aprobó SICRES 4.0 y dispuso un año para adaptar SICRES 3.0; ambas versiones estuvieron vigentes durante ese período de transición. El plazo concluyó en agosto de 2022: se clasifica como histórica y no debe leerse como una descripción del régimen vigente actual. Cotejo con ITIC Academy, bloque 20 «Interoperabilidad de sistemas», versión 2026.2 (14-08-2026), apartado SICRES y SIR. Correspondencia A1-46/A2-I-9.', 'historica']
];

apply({ numero: '208', fecha: '2026-10-24', records, edits: {
  1357: {
    opcion: [3, 'Inventario de información administrativa que recoge procedimientos y servicios de la AGE y de las Administraciones participantes.'],
    respuesta_correcta: 3
  },
  1358: {
    texto: 'En el Marco Europeo de Interoperabilidad de la Comisión Europea, ¿qué nivel permite conservar y comprender el significado de la información intercambiada entre organizaciones?',
    respuesta_correcta: 3
  },
  1360: {
    texto: 'Según la disposición transitoria de la NTI SICRES4, aprobada en 2021, ¿qué versiones estuvieron vigentes simultáneamente durante el año concedido para la adaptación?',
    opciones: ['SICRES 3.0 y SICRES 4.0.', 'SICRES 5.0.', 'SICRES 4.0 y SICRES 5.0.', 'Solo SICRES 4.0.'],
    respuesta_correcta: 0
  }
}});

const fs = require('node:fs');
const path = require('node:path');
const bank = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-208.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  1356: { source: 'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view', block: 'Bloque 18, Protección jurídica del software, versión 2026.1 (26-08-2026), tema A1-43/A2-II-14.', topics: 'A1-43/A2-II-14' },
  1357: { source: 'https://drive.google.com/file/d/1NWEg_hd3iDIC0kIitK-u8BpmJ20Jecmw/view', block: 'Bloque 23, Infraestructuras y servicios comunes, versión 2026.1 (31-08-2026), apartado SIA; cotejo adicional con bloque 03 Actuación administrativa, versión 2026.2.', topics: 'A1-49/A2-I-9' },
  1358: { source: 'https://drive.google.com/file/d/1zdx_PRBfKM9tRy61Boz_yPekU-D-b_6S/view', block: 'Bloque 20, Interoperabilidad de sistemas, versión 2026.2 (14-08-2026), §5.3 sobre interoperabilidad semántica.', topics: 'A1-45/A2-I-9' },
  1359: { source: 'https://drive.google.com/file/d/17UpEFvYfjQ4iUrx8UNNTJIFcj5xO4vlz/view', block: 'Bloque 40, Gestión documental, versión 2026.1 (23-09-2026), e-EMGDE; cotejo con bloque 20 de interoperabilidad.', topics: 'A1-104/A2-II-16' },
  1360: { source: 'https://drive.google.com/file/d/1zdx_PRBfKM9tRy61Boz_yPekU-D-b_6S/view', block: 'Bloque 20, Interoperabilidad de sistemas, versión 2026.2 (14-08-2026), SICRES 4.0 y transición desde SICRES 3.0.', topics: 'A1-46/A2-I-9' }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const m = academy[q.id];
  q.clasificacion.bloque_academia = m.block;
  q.clasificacion.nota = `Cotejo temático con ITIC Academy: ${m.block} Correspondencia orientativa con el temario oficial: ${m.topics}.`;
  const comment = ` Cotejo temático con ITIC Academy: ${m.block} Correspondencia orientativa con el temario oficial: ${m.topics}.`;
  q.comentarios = (q.comentarios || '') + comment;
  q.revision.observaciones += comment;
  q.revision.fuentes.push({ url: m.source, referencia: `ITIC Academy, ${m.block} Correspondencia: ${m.topics}.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(__dirname, '..', 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de ITIC Academy añadido al lote 208.');
