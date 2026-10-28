const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-385.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
  hardware:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26, Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1'},
  security:{url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',label:'ITIC Academy, bloque 36, Seguridad, criptografía, identificación y firma, versión 2026.1'}
};
const map={
  2241:{topics:['A1-50'],docs:[],detail:'la pregunta aborda la normalización internacional y la licencia de uso de la simbología QR. No se identificó un apartado QR específico en los materiales académicos cotejados; A1-50 cubre organismos de normalización, estándares y certificación, y no se fuerza una equivalencia A2.'},
  2242:{topics:['A1-57','A2-II-1'],docs:['hardware'],detail:'virtualización de sistemas y ejecución de máquinas virtuales; el bloque 26 trata servidores, hardware y virtualización. El ejemplo es virtualización de escritorio, así que no se etiqueta como consolidación de servidores.'},
  2243:{topics:['A1-81','A2-I-6','A2-IV-12'],docs:['security'],detail:'tarjetas inteligentes/sin contacto como dispositivos de identificación y su uso seguro; el bloque 36 cubre smart cards, identificación y medios criptográficos. Los detalles de las clases proximity/vicinity se comprueban en ISO.'},
  2244:{topics:['A1-80','A2-I-6','A2-IV-12'],docs:['security'],detail:'certificados digitales, PKI y mecanismos de revocación; el bloque 36 desarrolla certificados y revocación. La definición exacta de alcance de CRL se verifica en RFC 5280.'},
  2245:{topics:['A1-81','A2-I-6','A2-IV-12'],docs:['security'],detail:'tarjetas inteligentes y su interfaz/protocolos como mecanismo técnico de identificación; el bloque 36 contextualiza smart cards, y la separación entre interfaz ISO 7816-3 y comandos ISO 7816-4 se comprueba con ISO.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
  const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta revisión/cotejo para ${c.id}`);
  assert.ok(m.topics.every(t=>official.has(t)),`Tema oficial inexistente para ${c.id}`);
  q.clasificacion.A1=m.topics.filter(t=>t.startsWith('A1-'));
  q.clasificacion.A2=m.topics.filter(t=>t.startsWith('A2-'));
  const labels=m.docs.map(k=>docs[k].label);
  const curricular=labels.length?`${labels.join('; ')}; ${m.detail}.`:`Material académico ITIC Academy cotejado; ${m.detail}`;
  const codes=m.topics.join(', ')||'sin correspondencia específica';
  const note=`Cotejo curricular: ${curricular} Correspondencia ${codes} contrastada con revision/temario-oficial.json y convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2). La academia proporciona encuadre; las fuentes normativas/técnicas primarias sustentan la ficha.`;
  q.clasificacion.bloque_academia=curricular;q.clasificacion.nota=note;
  q.revision.observaciones+=` ${note}`;q.comentarios=q.revision.observaciones;
  for(const k of m.docs)q.revision.fuentes.push({url:docs[k].url,referencia:`${docs[k].label}; cotejo curricular, no autoridad técnica ni normativa.`});
  q.revision.fuentes.push({url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:`Convocatoria A1 consultada; anexo de programa, tema(s) ${m.topics.filter(t=>t.startsWith('A1-')).join(', ')}.`});
  q.revision.fuentes.push({url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:`Convocatoria A2 GSI consultada; anexo de programa, tema(s) ${m.topics.filter(t=>t.startsWith('A2-')).join(', ')||'sin correspondencia específica'}; no se asigna tema A2 cuando el programa no cubre directamente el contenido.`});
  c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular Drive, temas oficiales y convocatorias actualizado para IDs 2241–2245.');
