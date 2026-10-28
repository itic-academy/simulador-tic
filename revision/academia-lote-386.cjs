const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-386.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={security:{url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',label:'ITIC Academy, bloque 36, Seguridad, criptografía, identificación y firma, versión 2026.1'}};
const map={
 2246:{topics:['A1-81','A2-I-6'],docs:['security'],detail:'dimensiones físicas normalizadas de la tarjeta DNIe como tarjeta inteligente de identificación; el bloque 36 contextualiza el documento electrónico y su soporte. La medida exacta se apoya en la fuente del Portal DNIe.'},
 2247:{topics:['A1-81','A2-I-6','A2-IV-12'],docs:['security'],detail:'contactos e interfaz eléctrica de una tarjeta inteligente para identificación segura; bloque 36. La asignación precisa de C3 a CLK se sustenta en ISO/IEC 7816-3.'},
 2248:{topics:['A1-81','A2-I-6'],docs:['security'],detail:'uso y gestión del PIN de la tarjeta DNIe como medio de autenticación; bloque 36. El procedimiento operativo se verifica en la información oficial de la Policía Nacional.'},
 2249:{topics:['A1-80','A2-I-6'],docs:['security'],detail:'marco jurídico de expedición y certificados electrónicos del DNIe; bloque 36 como encuadre de identidad/firma. La norma aplicable y la derogación se determinan mediante el BOE.'},
 2250:{topics:['A1-80','A2-I-6','A2-IV-12'],docs:['security'],detail:'PKI, certificados, identidad digital y revocación; bloque 36. Se limita expresamente el supuesto a certificados alojados en la tarjeta DNIe; no se extrapola a otras PKI ni al certificado centralizado.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta revisión/cotejo para ${c.id}`);
 assert.ok(m.topics.every(t=>official.has(t)),`Tema oficial inexistente para ${c.id}`);
 q.clasificacion.A1=m.topics.filter(t=>t.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(t=>t.startsWith('A2-'));
 const labels=m.docs.map(k=>docs[k].label),curricular=`${labels.join('; ')}; ${m.detail}.`;
 const codes=m.topics.join(', '),note=`Cotejo curricular: ${curricular} Correspondencia ${codes} contrastada con revision/temario-oficial.json y convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2). La academia proporciona encuadre; las fuentes normativas/técnicas primarias sustentan la ficha.`;
 q.clasificacion.bloque_academia=curricular;q.clasificacion.nota=note;q.revision.observaciones+=` ${note}`;q.comentarios=q.revision.observaciones;
 for(const k of m.docs)q.revision.fuentes.push({url:docs[k].url,referencia:`${docs[k].label}; cotejo curricular, no autoridad técnica ni normativa.`});
 q.revision.fuentes.push({url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:`Convocatoria A1 consultada; anexo de programa, tema(s) ${m.topics.filter(t=>t.startsWith('A1-')).join(', ')}.`});
 q.revision.fuentes.push({url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:`Convocatoria A2 GSI consultada; anexo de programa, tema(s) ${m.topics.filter(t=>t.startsWith('A2-')).join(', ')}.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular Drive, temas oficiales y convocatorias actualizado para IDs 2246–2250.');
