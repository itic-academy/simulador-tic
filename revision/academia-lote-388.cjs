const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-388.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 design:{url:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',label:'ITIC Academy, bloque 38, Análisis, Diseño y Construcción de Sistemas de Información, versión 2026'},
 iot:{url:'https://drive.google.com/file/d/1w3UwQPDtDE9GXacSYNUGUcO6KirAQ8xf/view?usp=drivesdk',label:'ITIC Academy, bloque 44, Transformación Digital, Industria 4.0, Ciudades Inteligentes e IoT, actualización 2026'},
 rup:{url:'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk',label:'ITIC Academy, bloque 15, Metodologías Ágiles y Modelos de Ciclo de Vida, versión 2026.1'},
 os:{url:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',label:'ITIC Academy, bloque 27, Sistemas Operativos, versión 2026.1'}
};
const map={
 2256:{topics:['A1-93','A2-III-9'],docs:['design'],detail:'El bloque 38 incluye análisis y diseño orientado a objetos, técnicas de diseño de software y patrones (A1-93/A2-III-9); SOLID se coteja como marco conceptual de diseño, no como contenido normativo.'},
 2257:{topics:['A1-117','A2-IV-13'],docs:['iot'],detail:'El bloque 44 cubre hogares/entornos conectados dentro del contexto IoT y de la transformación digital; se usa como encuadre curricular próximo, no como fuente que equipare domótica e IoT. No se localizó un documento académico específico de domótica.'},
 2258:{topics:['A1-117','A2-IV-13'],docs:['iot'],detail:'El bloque 44 incluye IoT y tecnologías de conectividad; sus secciones de tecnologías inalámbricas/LPWAN permiten situar Zigbee frente a soluciones de mayor cobertura. La especificación CSA sustenta la topología y la relación con IEEE 802.15.4.'},
 2259:{topics:['A1-86','A1-88','A2-III-1','A2-III-9'],docs:['rup','design'],detail:'Los bloques 15 y 38 cubren modelos del ciclo de vida, casos de uso, metodología y proceso unificado. La propiedad exacta «dirigido por casos de uso» se valida con IBM Rational/IBM Redbooks.'},
 2260:{topics:['A1-60','A2-II-2'],docs:['os'],detail:'El bloque 27 cubre administración y permisos de UNIX/Linux dentro de A1-60/A2-II-2. La semántica del bit SUID y sus restricciones se determina mediante GNU Coreutils y POSIX, no mediante el material académico.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta revisión/cotejo para ${c.id}`);
 assert.ok(m.topics.every(t=>official.has(t)),`Tema oficial inexistente para ${c.id}`);
 q.clasificacion.A1=m.topics.filter(t=>t.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(t=>t.startsWith('A2-'));
 const labels=m.docs.map(k=>docs[k].label),curricular=`${labels.join('; ')}; ${m.detail}.`;
 const codes=m.topics.join(', '),note=`Cotejo curricular: ${curricular} Correspondencia ${codes} contrastada con revision/temario-oficial.json y convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2). La academia aporta encuadre temático; las fuentes técnicas primarias sustentan la respuesta.`;
 q.clasificacion.bloque_academia=curricular;q.clasificacion.nota=note;q.revision.observaciones+=` ${note}`;q.comentarios=q.revision.observaciones;
 for(const k of m.docs)q.revision.fuentes.push({url:docs[k].url,referencia:`${docs[k].label}; cotejo curricular, no autoridad técnica ni normativa.`});
 q.revision.fuentes.push({url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:`Convocatoria A1 consultada; anexo de programa, tema(s) ${m.topics.filter(t=>t.startsWith('A1-')).join(', ')}.`});
 q.revision.fuentes.push({url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:`Convocatoria A2 GSI consultada; anexo de programa, tema(s) ${m.topics.filter(t=>t.startsWith('A2-')).join(', ')}.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular Drive, temas oficiales y convocatorias actualizado para IDs 2256–2260.');
