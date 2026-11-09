const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-782.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={
 web:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',name:'ITIC Academy, bloque 30, Tecnologías de sistemas de información, versión 2026.'},
 org:{url:'https://drive.google.com/file/d/1-xmHgvxArWY8GroFD1eSdyPrAQjkBpzo/view?usp=drivesdk',name:'ITIC Academy, bloque 9, Organización y gestión de los sistemas de información, versión 2026.3.'},
 legal:{url:'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk',name:'ITIC Academy, bloque 18, Protección jurídica del software, licencias y DRM.'},
 security:{url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',name:'ITIC Academy, bloque 36, Seguridad, criptografía, identificación y firma, versión 2026.1.'}
};
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const map={
 4231:{a1:['43','69'],a2:['II-14'],academy:[['legal','El bloque aborda licencias libres/propietarias y protección jurídica; se contrasta la compatibilidad específica con FSF y ASF.']]},
 4232:{a1:['72'],a2:['II-12'],academy:[['web','El bloque 30 incluye A1-72 (CRM/ERP) y explica funciones de los sistemas de información; cotejo curricular.'],['org','El bloque 9 identifica ERP/CRM entre conceptos preguntados en A2 y los sitúa junto a la gestión organizativa; cotejo curricular.']]},
 4233:{a1:['65','77'],a2:['II-9','III-12'],academy:[['web','El bloque detalla Web Storage como localStorage/sessionStorage y marca Application Cache como obsoleta/sustituida por Service Workers.']]},
 4234:{a1:['48','79','125'],a2:['I-9','IV-12'],academy:[['security','El bloque distingue MD5 (colisiones prácticas; no apto como hash criptográfico de seguridad) y advierte que la autorización depende de la política y del mecanismo. La respuesta normativa se comprueba en la edición CCN-STIC-807 de 2022.']]},
 4235:{a1:['79','80','81'],a2:['I-6','IV-12'],academy:[['security','El bloque diferencia confidencialidad, integridad, autenticidad, trazabilidad/no repudio y firma electrónica; el enunciado aclara que la confidencialidad se añade mediante cifrado.']]}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&q.clasificacion&&m,'Falta revisión/cotejo '+c.id);
 const a1=m.a1.map(n=>'A1-'+n),a2=m.a2.map(n=>'A2-'+n);for(const id of [...a1,...a2])assert.ok(official.has(id),'Tema oficial inexistente: '+id);
 q.clasificacion.A1=a1;q.clasificacion.A2=a2;
 q.clasificacion.bloque_academia=m.academy.map(([key,note])=>`${academy[key].name} ${note}`).join(' ')+` Correspondencia oficial: ${a1.join(', ')}; ${a2.join(', ')}.`;
 q.clasificacion.nota='Los documentos de ITIC Academy se usan como contraste de cobertura curricular, no como autoridad técnica, de licencias o normativa.';
 q.revision.observaciones+=' Cotejo curricular Academy/BOE: '+q.clasificacion.bloque_academia;
 for(const [key,nota] of m.academy){const f={url:academy[key].url,referencia:`${academy[key].name} ${nota}`};if(!q.revision.fuentes.some(x=>x.url===f.url))q.revision.fuentes.push(f)}
 for(const f of [{url:boeA1,referencia:`Convocatoria A1 GSI 2025, anexo I; temas ${m.a1.join(', ')}.`},{url:boeA2,referencia:`Convocatoria A2 GSI 2025, anexo IX; temas ${m.a2.join(', ')}.`}])if(!q.revision.fuentes.some(x=>x.url===f.url))q.revision.fuentes.push(f);
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy/BOE lote 782 aplicado: '+log.cambios.length+' preguntas.');
