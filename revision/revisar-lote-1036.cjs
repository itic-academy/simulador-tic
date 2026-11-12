const fs=require('node:fs'),path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const drive={
  cyber:'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk',
  networks:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',
  standards:'https://drive.google.com/file/d/10bE0F9kG3MYWW8IxeOCsPX8W1U5Rd0qK/view?usp=drivesdk',
  databases:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk'
};

// Ajusta tres etiquetas A2 del lote anterior al programa vigente del Cuerpo
// de Gestión de Sistemas e Informática: los epígrafes correctos son III.1,
// III.7 e IV.8. Se conservan las instantáneas de cambio y se deja traza.
const bankFile=path.join(__dirname,'..','preguntas_preparatic.json');
let bank=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const previousFile=path.join(__dirname,'cambios-lote-1035.json');
const previous=JSON.parse(fs.readFileSync(previousFile,'utf8'));
const reclass={5497:['A2-III-1'],5498:['A2-III-7'],5500:['A2-IV-8']};
const reclassNote='Reclasificación cotejada con el anexo IX, programa del Cuerpo de Gestión de Sistemas e Informática, de la convocatoria BOE-A-2025-26262: III.1 modelado de datos; III.7 aplicaciones web multiplataforma/multidispositivo; IV.8 redes locales. Se retiraron etiquetas de otros epígrafes que no corresponden a ese programa.';
for(const [id,topics] of Object.entries(reclass)){
  const q=bank.preguntas.find(x=>x.id===Number(id));
  q.clasificacion.A2=topics;
  q.clasificacion.nota += ' '+reclassNote;
  const c=previous.cambios.find(x=>x.id===Number(id));
  if(c)c.actualizada=structuredClone(q);
}
previous.reclasificaciones=previous.reclasificaciones||[];
for(const id of Object.keys(reclass).map(Number)){
  if(!previous.reclasificaciones.some(x=>x.id===id))previous.reclasificaciones.push({id,fecha:'2026-11-12',antes:id===5497?'A2-III-4':id===5498?'A2-III-12':'A2-II-8; A2-IV-8',despues:reclass[id].join(', '),motivo:reclassNote});
}
fs.writeFileSync(previousFile,JSON.stringify(previous,null,2)+'\n');
fs.writeFileSync(bankFile,JSON.stringify(bank,null,2)+'\n');

const records=[
 [5501,[127],['IV-5'],['Estrategia Nacional de Ciberseguridad 2019','principios rectores','unidad de acción','anticipación','eficiencia','resiliencia','eficacia'],[
  {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2019-6347',referencia:'Orden PCI/487/2019 y Estrategia Nacional de Ciberseguridad 2019, capítulo 3: enumera unidad de acción, anticipación, eficiencia y resiliencia; “eficacia” aparece en la descripción, pero no es el nombre de un principio.'},
  {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-10371',referencia:'Orden PJC/522/2025: publica el procedimiento para elaborar una nueva Estrategia Nacional de Ciberseguridad. La pregunta se limita expresamente a la edición de 2019 y no afirma que sea una actualización de los principios actuales.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 127: Ciberseguridad y Estrategia Nacional de Ciberseguridad.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema IV.5: seguridad de sistemas, amenazas, vulnerabilidades, criptografía y protocolos seguros.'},
  {url:drive.cyber,referencia:'ITIC Academy 2026, bloque 22 Seguridad, ENS y Ciberseguridad; incluye el mapa de A1-48/A1-127 y material de referencia.'}
 ],null,'La opción B (Eficacia) no es uno de los cuatro principios rectores nombrados por la Estrategia 2019: son unidad de acción, anticipación, eficiencia y resiliencia. “Eficaz/eficacia” se usa en la explicación de unidad de acción, pero no es la denominación del principio. En 2025 se inició el procedimiento para elaborar una nueva estrategia; el enunciado conserva de forma deliberada la referencia histórica a 2019.', 'corregida'],
 [5502,[112,113,120],['IV-6','IV-10'],['redes públicas de datos','redes IP','MPLS','conmutación de paquetes','conmutación de circuitos','fibra óptica','SDH','DWDM','xDSL','FTTx','HFC'],[
  {url:'https://www.rfc-editor.org/rfc/rfc3031.html',referencia:'RFC 3031, arquitectura MPLS: el tráfico se asigna a clases de equivalencia y se reenvía mediante etiquetas; explica su operación sobre redes de paquetes.'},
  {url:'https://www.itu.int/rec/T-REC-G.707',referencia:'ITU-T G.707/Y.1322: interfaz de nodo y estructuras de transporte de la Jerarquía Digital Síncrona (SDH); ficha oficial indica el componente aplicable en vigor.'},
  {url:'https://www.itu.int/rec/T-REC-G.694.1',referencia:'ITU-T G.694.1: rejilla de frecuencias DWDM para sistemas de transporte óptico; recomendación vigente.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, temas 112 (tecnologías de acceso), 113 (WDM/MPLS y agregación) y 120 (redes públicas de transmisión de datos).'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, temas IV.6 (comunicaciones y redes) y IV.10 (WAN, WDM y MPLS).'},
  {url:drive.networks,referencia:'ITIC Academy 2026, bloque 42 Redes, apartados de conmutación, transporte SDH/WDM, MPLS, redes públicas e infraestructuras de acceso.'}
 ],null,'Se conserva B como afirmación que no caracteriza una troncal pública de datos IP: no es indistinto afirmar que su backbone se base a la vez en conmutación de circuitos y de paquetes. El enunciado ahora acota el caso a una red pública actual con núcleo IP. MPLS reenvía paquetes etiquetados; el transporte óptico puede emplear SDH y DWDM, y el acceso puede variar por cobertura y operador. No se presenta MPLS como mejora automática de rendimiento.', 'corregida'],
 [5503,[50,118],['IV-8'],['IEEE','IEEE 802','802.13','Bluetooth','802.15.1','WiMAX','802.16','Wireless USB'],[
  {url:'https://www.ieee802.org/15/pub/TG1.html',referencia:'IEEE 802.15.1 TG1: el proyecto publicó el estándar WPAN derivado de Bluetooth v1.1; identifica la familia aplicable a la opción Bluetooth.'},
  {url:'https://www.ieee802.org/16/index.html',referencia:'IEEE 802.16 Working Group: grupo de estándares WirelessMAN/broadband wireless access; la documentación del grupo identifica el ámbito técnico, distinto de 802.13.'},
  {url:'https://www.ieee802.org/',referencia:'IEEE 802 LMSC: catálogo institucional de grupos de trabajo y familias LAN/MAN; no identifica 802.13 como una de las tecnologías de las opciones.'},
  {url:'https://www.usb.org/documents?items_per_page=50&order=name&search=wireless',referencia:'USB Implementers Forum, biblioteca de documentos: mantiene la especificación Wireless USB, separada de la numeración de estándares IEEE 802.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, temas 50 (normalización), 114 (estándares de redes inalámbricas) y 118 (LAN y equipos de interconexión).'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema IV.8: redes locales, protocolos, dispositivos de interconexión y normativa.'},
  {url:drive.networks,referencia:'ITIC Academy 2026, bloque 42 Redes: arquitectura IEEE 802, LAN y tecnologías inalámbricas como mapa temático.'}
 ],null,'La respuesta D es correcta entre las opciones. Bluetooth se asoció a IEEE 802.15.1, WiMAX se basa en perfiles de IEEE 802.16 y Wireless USB dispone de especificación de USB-IF; ninguna de esas tecnologías se identifica como “IEEE 802.13”. Se evita atribuir a 802.13 una tecnología concreta por confundir la numeración de la familia.', 'corregida'],
 [5504,[50],['IV-7'],['IETF','Internet Engineering Task Force','IANA','IESG','RFC','normalización de Internet'],[
  {url:'https://www.rfc-editor.org/authors/rfc-how-to/',referencia:'RFC Editor, How RFCs Are Created: el IETF desarrolla estándares de Internet y documentos técnicos mediante un proceso abierto de discusión, revisión y consenso.'},
  {url:'https://www.rfc-editor.org/rfc/rfc2026.html',referencia:'RFC 2026, BCP 9, sección 6.1.2: el IESG determina si una especificación satisface criterios para entrar o avanzar por el standards track; distingue ese acto de la labor técnica de desarrollo de la comunidad/IETF.'},
  {url:'https://www.rfc-editor.org/rfc/rfc3935.html',referencia:'RFC 3935, declaración de misión del IETF: normalización técnica para interoperabilidad y funcionamiento de Internet.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 50: organizaciones de normalización y certificación.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema IV.7: arquitectura TCP/IP, protocolos y modelo OSI.'},
  {url:drive.standards,referencia:'Material ITIC Academy de referencia, Tema 050 Organismos de normalización: IETF, IANA y organizaciones técnicas; el temario 2026 reorganiza el contenido por bloques.'}
 ],null,'Se corrige la errata IEFT → IETF y se conserva D con alcance preciso: el IETF desarrolla especificaciones y estándares técnicos abiertos para Internet. La asignación de recursos numéricos corresponde a IANA; el IESG revisa/aprueba las acciones de avance del standards track. “Especificación de estándares” se expresa como actividad de desarrollo técnico, no como adjudicación de recursos ni aprobación administrativa.', 'corregida'],
 [5505,[63],['III-1'],['modelo entidad-relación','tipo de interrelación','grado','cardinalidad','tipo de correspondencia','1:1','1:N','N:M'],[
  {url:'https://doi.org/10.1145/320434.320440',referencia:'Peter P.-S. Chen, “The Entity-Relationship Model—Toward a Unified View of Data”, ACM TODS 1(1), 1976: presenta tipos de relación y restricciones de correspondencia entre conjuntos de entidades.'},
  {url:'https://dspace.mit.edu/entities/publication/3324116b-72fd-415b-877e-90c6e1bfd3b3',referencia:'MIT DSpace, registro y copia del artículo original de Chen: fuente primaria de la notación y modelo E/R.'},
  {url:'https://opendsa-server.cs.vt.edu/ODSA/Books/Database/html/ERDRelationships.html',referencia:'OpenDSA, Virginia Tech: grado como número de conjuntos de entidades participantes y restricciones de cardinalidad/participación; material universitario de apoyo conceptual.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 63: SGBD y modelado de datos; relación curricular con el modelo E/R.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, anexo IX, tema III.1: modelado de datos, entidades, atributos, relaciones y diseño de bases de datos.'},
  {url:drive.databases,referencia:'ITIC Academy 2026, bloque 29 Bases de Datos, modelo entidad-relación, grado y cardinalidad; mapa curricular.'}
 ],null,'La opción B reúne las tres propiedades que suelen describir una interrelación en el modelo E/R introductorio: nombre, grado (número de tipos de entidad participantes) y tipo de correspondencia o cardinalidad (por ejemplo 1:1, 1:N o N:M). Se conserva la respuesta y se explicitan los términos para evitar confundir grado con cardinalidad.', 'corregida']
];

const edits={
 5501:{texto:'Según la Estrategia Nacional de Ciberseguridad de España de 2019, ¿cuál de las siguientes opciones no es uno de los cuatro principios rectores que esta enumera?',opciones:['Unidad de acción.','Eficacia.','Anticipación.','Resiliencia.'],respuesta_correcta:1},
 5502:{texto:'En una red pública actual de transmisión de datos cuyo núcleo es IP, ¿cuál de estas afirmaciones no describe correctamente una característica de la red?',opciones:['Puede usar routers IP y MPLS para encaminar paquetes mediante etiquetas.','Su backbone combina indistintamente conmutación de circuitos y conmutación de paquetes como si fueran una misma técnica.','El transporte sobre fibra óptica puede utilizar sistemas SDH o DWDM.','El acceso puede apoyarse, según cobertura y operador, en xDSL, FTTx, HFC o redes móviles.'],respuesta_correcta:1},
 5503:{texto:'¿Qué tecnología corresponde al estándar IEEE 802.13 entre las opciones propuestas?',opciones:['Wireless USB.','WiMAX.','Bluetooth.','Ninguna de las anteriores.'],respuesta_correcta:3},
 5504:{texto:'¿Cuál es la actividad principal del IETF (Internet Engineering Task Force) en el desarrollo de Internet?',opciones:['Coordinar entre sí a organizaciones como el IETF y la IANA.','Asignar recursos numéricos de Internet, como direcciones IP y números de sistema autónomo.','Aprobar las decisiones para que una especificación avance por el proceso formal de estándares.','Desarrollar especificaciones y estándares técnicos abiertos para los protocolos de Internet.'],respuesta_correcta:3},
 5505:{texto:'En el modelo entidad-relación clásico, ¿qué rasgos describen una interrelación?',opciones:['Su nombre y su tipo de correspondencia.','Su nombre, su grado y su tipo de correspondencia.','Su nombre, su nivel y su tipo de correspondencia.','Su nombre y su grado.'],respuesta_correcta:1}
};
const logFile=path.join(__dirname,'cambios-lote-1036.json');
if(!fs.existsSync(logFile))aplicar({numero:'1036',fecha:'2026-11-12',records,edits});
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
bank=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const academy={
  5501:'ITIC Academy 2026, bloque 22 Seguridad, ENS y Ciberseguridad: mapa para Estrategia Nacional de Ciberseguridad y principios estratégicos.',
  5502:'ITIC Academy 2026, bloque 42 Redes: conmutación, transporte óptico, MPLS, redes públicas y acceso.',
  5503:'ITIC Academy 2026, bloque 42 Redes: arquitectura IEEE 802, redes LAN y tecnologías inalámbricas.',
  5504:'ITIC Academy, material de referencia Tema 050 Organismos de normalización; la organización del temario 2026 ha cambiado, por lo que se usa solo como mapa de la materia.',
  5505:'ITIC Academy 2026, bloque 29 Bases de Datos: modelado entidad-relación, tipos de relación, grado y cardinalidades.'
};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id);q.clasificacion.bloque_academia=academy[c.id];q.clasificacion.nota='Cotejado con el programa oficial A1/A2 2025 y el temario de academia 2026 indicado como mapa curricular; la conclusión se apoya en las fuentes técnicas/primarias citadas.';c.actualizada=structuredClone(q)}
fs.writeFileSync(bankFile,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
