const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bp=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bp,'utf8'));
const lp=path.join(__dirname,'cambios-lote-598.json'),log=JSON.parse(fs.readFileSync(lp,'utf8'));
const docs={tech:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',label:'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», 2026'},bi:{url:'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk',label:'ITIC Academy, bloque 34 «Business Intelligence y Big Data», 2026'},security:{url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',label:'ITIC Academy, bloque 48 «Seguridad en redes y aplicaciones», 2026'},admin:{url:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',label:'ITIC Academy, bloque 03 «Actuación administrativa», 2026'}};
const rows={
3306:{A1:['A1-65','A1-66'],A2:['A2-III-10'],doc:docs.tech,detail:'el bloque desarrolla tecnologías de servidor Jakarta EE e incluye expresamente los apartados Servlet/JSP.'},
3307:{A1:['A1-75'],A2:['A2-II-4'],doc:docs.bi,detail:'el bloque 2026 contiene DWH y modelos dimensionales basados en hechos y dimensiones; la respuesta se formula sobre modelado analítico clásico, no como exclusión del almacenamiento relacional.'},
3308:{A1:['A1-125'],A2:['A2-IV-12'],doc:docs.security,detail:'el bloque incluye criptografía simétrica/asimétrica y longitudes de clave; el valor concreto RSA-1024 se contrasta con NIST y se marca como nivel insuficiente hoy.'},
3309:{A1:['A1-125'],A2:['A2-IV-12'],doc:docs.security,detail:'el bloque expone el principio de Kerckhoffs: el secreto debe residir en la clave, no en el algoritmo.'},
3310:{A1:['A1-80','A1-81'],A2:['A2-I-6'],doc:docs.admin,detail:'el bloque desarrolla identificación, firma y servicios electrónicos de confianza, y recoge Ley 6/2020/eIDAS; la atribución mínima actual se coteja con art. 27 del RD 203/2021.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación comparada con revision/temario-oficial.json y los programas GSI vigentes publicados en BOE: A1 BOE-A-2025-25938 (anexo I) y A2 BOE-A-2025-26262 (anexo IX).';
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=rows[c.id];assert.ok(q&&r);for(const t of [...r.A1,...r.A2])assert.ok(official.has(t),`Tema oficial inexistente: ${t}`);
 q.clasificacion={A1:r.A1,A2:r.A2,bloque_academia:`${r.doc.label}; ${r.detail} ${r.doc.url}`,estado:'revisada',nota:`${q.revision.estado}. ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy en Drive: ${r.doc.label}; ${r.detail} ${r.doc.url} ${calls}`;
 q.revision.fuentes.push({url:r.doc.url,referencia:`${r.doc.label}; cotejo curricular: ${r.detail} La academia se emplea para verificar encaje curricular, no como autoridad de la respuesta.`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(bp,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(lp,JSON.stringify(log,null,2)+'\n');console.log('Cotejo Academy y programas BOE aplicado al lote 598.');
