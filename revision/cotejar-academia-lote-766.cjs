const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-766.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const convA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',convA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy={
 security:{url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',name:'ITIC Academy, bloque 36 «Seguridad, criptografía, identificación y firma», versión 2026.1'},
 image:{url:'https://drive.google.com/file/d/1xTMCpPmwNi8hpb0nZ3sMqpgvrhLXT-yf/view?usp=drivesdk',name:'ITIC Academy, bloque 37 «Tratamiento de imágenes, OCR, biometría y gestión de contenidos», versión 2026.1'}
};
const map={
 4151:{a1:['80'],a2:['IV-12'],sources:[['security','§1.1 diferencia autenticidad como confianza en el origen de la información de integridad y confidencialidad.']]},
 4152:{a1:['81'],a2:['I-6'],sources:[['security','apartados de identidad electrónica, smart cards y DNIe; distingue la interfaz de contacto y NFC.']]},
 4153:{a1:['80'],a2:['IV-12'],sources:[['security','apartados PKI, certificados y mecanismos/protocolos de estado y validación de certificados.']]},
 4154:{a1:['83'],a2:[],sources:[['image','§9 y tabla de fabricación aditiva: separa SLS de técnicas de fusión de lecho de polvo metálico.']]},
 4155:{a1:['84'],a2:[],sources:[['image','cabecera del bloque y §§1–3 sobre tratamiento de imagen, digitalización y OCR; el detalle de unidades tipográficas se verifica en Adobe.']]}
};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&q.clasificacion&&m,'Falta revisión/cotejo '+c.id);for(const id of [...m.a1.map(n=>'A1-'+n),...m.a2.map(n=>'A2-'+n)])assert.ok(official.has(id),'Tema desconocido '+id);q.clasificacion.A1=m.a1.map(n=>'A1-'+n);q.clasificacion.A2=m.a2.map(n=>'A2-'+n);q.clasificacion.bloque_academia=m.sources.map(([key,note])=>academy[key].name+'; '+note).join(' ')+` Correspondencia con convocatoria A1 GSI 2025, anexo I (${m.a1.map(n=>'tema '+n).join(', ')}).`+(m.a2.length?` Correspondencia A2 GSI 2025, anexo IX (${m.a2.map(n=>'tema '+n).join(', ')}).`:' No se asigna tema A2: el contenido concreto no tiene correspondencia temática directa en el programa oficial A2.');q.clasificacion.nota='Cotejo curricular directo con ITIC Academy en Drive y los temas oficiales de las convocatorias; Academy aporta contexto, no sustituye las fuentes técnicas primarias.';q.revision.observaciones+=' '+q.clasificacion.bloque_academia;const refs=[...m.sources.map(([key,referencia])=>({url:academy[key].url,referencia:academy[key].name+'; '+referencia})),{url:convA1,referencia:'Convocatoria oficial A1 GSI 2025, anexo I: '+m.a1.map(n=>'tema '+n).join(', ')+'.'}];if(m.a2.length)refs.push({url:convA2,referencia:'Convocatoria oficial A2 GSI 2025, anexo IX: '+m.a2.map(n=>'tema '+n).join(', ')+'.'});for(const f of refs)if(!q.revision.fuentes.some(x=>x.url===f.url))q.revision.fuentes.push(f);c.actualizada=structuredClone(q)}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo Academy y convocatorias aplicado a 4151–4155.');
