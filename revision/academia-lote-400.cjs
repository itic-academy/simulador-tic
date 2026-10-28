const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-400.json');
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
  oo:{url:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',label:'ITIC Academy, bloque 38, Análisis, diseño y construcción de sistemas de información, versión 2026: análisis/diseño OO, herencia, UML y patrones.'},
  protocols:{url:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',label:'ITIC Academy, bloque 43, Protocolos, versión 2026.1: redes IP y protocolos; encuadre de IPv6.'},
  ens:{url:'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk',label:'ITIC Academy, bloque 22, Esquema Nacional de Seguridad, versión 2026.2: auditoría, categorías, conformidad y autoevaluación.'},
  admin:{url:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',label:'ITIC Academy, bloque 03, Actuación administrativa y Administración digital: ENI, interoperabilidad y reutilización de aplicaciones.'}
};
const mapping={
  2316:{topics:['A2-III-9'],docs:['oo'],detail:'A2-III-9 incluye análisis y diseño orientado a objetos; el bloque 38 aborda expresamente clases, herencia y diseño OO. No se asigna A1: los epígrafes A1 consultados no nombran herencia múltiple.'},
  2317:{topics:['A1-115','A2-II-8'],docs:['protocols'],detail:'IPv6 y sus funcionalidades específicas aparecen en A1-115; arquitectura, protocolos y direccionamiento TCP/IP aparecen en A2-II-8. El bloque 43 de Academy aporta el encuadre curricular de redes y protocolos.'},
  2318:{topics:['A1-93','A2-III-9'],docs:['oo'],detail:'A1-93 menciona expresamente patrones de diseño; A2-III-9 incluye diseño orientado a objetos y patrones. El bloque 38 de Academy desarrolla diseño OO y catálogo de patrones.'},
  2319:{topics:['A1-38','A1-48','A2-II-11'],docs:['ens'],detail:'A1-38 cubre auditoría informática; A1-48 el ENS; A2-II-11 incluye auditoría del ENS. El bloque 22 de Academy trata auditoría y conformidad ENS. Los matices legales se contrastan con RD 311/2022, art. 31 y anexo III.'},
  2320:{topics:['A1-45','A2-I-9'],docs:['admin'],detail:'A1-45 trata el ENI; A2-I-9 incluye ENI y reutilización de información del sector público. El bloque 03 de Academy encuadra Administración digital, interoperabilidad y reutilización. La obligación concreta se valida en el texto consolidado del RD 4/2010, art. 17.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);assert.deepEqual(log.cambios.map(c=>c.id),[2316,2317,2318,2319,2320]);
for(const change of log.cambios){
 const q=bank.preguntas.find(item=>item.id===change.id),map=mapping[change.id];assert.ok(q?.revision&&map,`Falta cotejo ${change.id}`);assert.ok(map.topics.every(t=>official.has(t)),`Tema oficial inexistente ${change.id}`);
 q.clasificacion.A1=map.topics.filter(t=>t.startsWith('A1-'));q.clasificacion.A2=map.topics.filter(t=>t.startsWith('A2-'));
 const curriculum=`${map.docs.map(key=>docs[key].label).join('; ')}. ${map.detail}`;
 const note=`Cotejo curricular: ${curriculum} Correspondencia contrastada con revision/temario-oficial.json y los anexos de las convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2). ITIC Academy se usa para encuadre curricular; la comprobación de contenido se apoya en las fuentes primarias.`;
 q.clasificacion.bloque_academia=curriculum;q.clasificacion.nota=note;q.revision.observaciones+=` ${note}`;q.comentarios=q.revision.observaciones;change.actualizada=structuredClone(q);
}
fs.writeFileSync(logPath,`${JSON.stringify(log,null,2)}\n`);fs.writeFileSync(bankPath,`${JSON.stringify(bank,null,2)}\n`);console.log('Cotejo Academy/temario oficial del lote 400 completado.');
