const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-387.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 security:{url:'https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk',label:'ITIC Academy, bloque 36, Seguridad, criptografía, identificación y firma, versión 2026.1'},
 projects:{url:'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk',label:'ITIC Academy, bloque 17, Adquisición de sistemas y rentabilidad de inversiones, versión 2026.2'},
 privacy:{url:'https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk',label:'ITIC Academy, bloque 8, Protección de datos, actualización 2026'}
};
const map={
 2251:{topics:['A1-80','A2-I-6'],docs:['security'],detail:'tarjetas inteligentes como dispositivos seguros de creación de firma e interfaz de aplicación; bloque 36. La especificación CWA se marca histórica porque fue sustituida.'},
 2252:{topics:['A1-80','A2-I-6','A2-IV-12'],docs:['security'],detail:'estructura del certificado digital X.509 como componente de PKI; bloque 36. Los campos concretos se verifican con RFC 5280.'},
 2253:{topics:['A1-80','A2-I-6','A2-IV-12'],docs:['security'],detail:'validación de certificados y consultas de estado en una PKI; bloque 36. El comportamiento exacto del protocolo se determina con RFC 6960.'},
 2254:{topics:['A1-35','A1-99','A2-II-15','A2-III-2'],docs:['projects'],detail:'planificación y estimación de esfuerzo/coste; bloque 17 cubre planificación, estimación y control presupuestario, pero no establece una secuencia única de tres hitos del ciclo tradicional.'},
 2255:{topics:['A1-27','A2-I-7'],docs:['privacy'],detail:'definición jurídica de seudonimización y distinción respecto de anonimización; bloque 8 desarrolla el RGPD y la protección de datos.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta revisión/cotejo para ${c.id}`);
 assert.ok(m.topics.every(t=>official.has(t)),`Tema oficial inexistente para ${c.id}`);
 q.clasificacion.A1=m.topics.filter(t=>t.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(t=>t.startsWith('A2-'));
 const labels=m.docs.map(k=>docs[k].label),curricular=`${labels.join('; ')}; ${m.detail}.`;
 const codes=m.topics.join(', '),note=`Cotejo curricular: ${curricular} Correspondencia ${codes} contrastada con revision/temario-oficial.json y convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2). La academia aporta encuadre temático; las fuentes normativas/técnicas primarias sustentan la ficha.`;
 q.clasificacion.bloque_academia=curricular;q.clasificacion.nota=note;q.revision.observaciones+=` ${note}`;q.comentarios=q.revision.observaciones;
 for(const k of m.docs)q.revision.fuentes.push({url:docs[k].url,referencia:`${docs[k].label}; cotejo curricular, no autoridad técnica ni normativa.`});
 q.revision.fuentes.push({url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:`Convocatoria A1 consultada; anexo de programa, tema(s) ${m.topics.filter(t=>t.startsWith('A1-')).join(', ')}.`});
 q.revision.fuentes.push({url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:`Convocatoria A2 GSI consultada; anexo de programa, tema(s) ${m.topics.filter(t=>t.startsWith('A2-')).join(', ')}.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular Drive, temas oficiales y convocatorias actualizado para IDs 2251–2255.');
