const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bp=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bp,'utf8'));
const lp=path.join(__dirname,'cambios-lote-602.json'),log=JSON.parse(fs.readFileSync(lp,'utf8'));
const docs={quality:{url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',label:'ITIC Academy, bloque 39 «Calidad y mantenimiento», versión 2026.1'},protocols:{url:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',label:'ITIC Academy, bloque 43 «Protocolos», versión 2026'}};
const rows={
3326:{A1:['A1-96','A1-98'],A2:['A2-III-13'],doc:docs.quality,detail:'el apartado 3.4 trata CMMI y modelos de madurez/capacidad, y distingue los niveles definidos y cuantitativamente gestionados; la formulación exacta del nivel 4 se confirma en CMMI Institute.'},
3327:{A1:['A1-96','A1-98'],A2:['A2-III-13'],doc:docs.quality,detail:'el bloque incluye CMMI como modelo para evaluar/mejorar capacidad de procesos y desempeño; la definición precisa se contrasta con la fuente del propio CMMI Institute.'},
3328:{A1:['A1-108','A1-112'],A2:['A2-IV-7'],doc:docs.protocols,detail:'el bloque cubre tecnologías de acceso inalámbricas y parámetros de transmisión; la definición de antena isotrópica se contrasta con UIT-T K.100.'},
3329:{A1:['A1-111','A1-115'],A2:['A2-II-8'],doc:docs.protocols,detail:'el bloque trata los modelos OSI/TCP/IP y la arquitectura por capas; la comparación de capas se verifica en RFC 1122/1123.'},
3330:{A1:['A1-116'],A2:['A2-IV-14'],doc:docs.protocols,detail:'el bloque cubre SIP, VoIP y protocolos de señalización; la función de registrar se confirma con RFC 3261.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación cotejada con revision/temario-oficial.json y convocatorias BOE: A1 BOE-A-2025-25938 (anexo I) y A2 BOE-A-2025-26262 (anexo IX).';
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=rows[c.id];assert.ok(q&&r);for(const t of [...r.A1,...r.A2])assert.ok(official.has(t),`Tema oficial inexistente: ${t}`);
 q.clasificacion={A1:r.A1,A2:r.A2,bloque_academia:`${r.doc.label}; ${r.detail} ${r.doc.url}`,estado:'revisada',nota:`${q.revision.estado}. ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy: ${r.doc.label}; ${r.detail} ${r.doc.url} ${calls}`;
 q.revision.fuentes.push({url:r.doc.url,referencia:`${r.doc.label}; cotejo curricular: ${r.detail} La academia ayuda a comprobar la cobertura del temario, pero no reemplaza la especificación/fuente primaria de la respuesta.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bp,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(lp,JSON.stringify(log,null,2)+'\n');console.log('Cotejo de Academy y programas BOE aplicado al lote 602.');
