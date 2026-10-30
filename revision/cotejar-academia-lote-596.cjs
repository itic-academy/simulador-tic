const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-596.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={license:{url:'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk',label:'ITIC Academy, tema 43 «Protección jurídica, licencias y control del software», 2026'},security:{url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',label:'ITIC Academy, bloque 48 «Seguridad en redes y aplicaciones», 2026'},standards:{url:'https://drive.google.com/file/d/1HKwUIuFhm-wVG0e8kZfFm1R8qI1rGS2G/view?usp=drivesdk',label:'ITIC Academy, tema 24 «Normalización», A1-50/A2-C8/C11, 2026'}};
const rows={
3296:{A1:['A1-43'],A2:['A2-II-14'],doc:docs.license,detail:'el temario identifica expresamente la protección jurídica del software y los tipos de licencias; el alcance concreto de las licencias Creative Commons se verifica con Creative Commons.'},
3297:{A1:['A1-48','A1-50'],A2:['A2-II-11'],doc:docs.security,detail:'incluye los requisitos y certificación de SGSI/ISO 27001 en seguridad; el encaje se completa con el tema oficial de normalización, conformidad y certificación.'},
3298:{A1:['A1-47'],A2:['A2-II-10'],doc:docs.security,detail:'su apartado de análisis y gestión de riesgos incluye MAGERIT v3/PILAR, activos, amenazas, riesgos y productos del análisis.'},
3299:{A1:['A1-47','A1-48'],A2:['A2-II-10','A2-II-13'],doc:docs.security,detail:'cubre análisis de riesgos y propiedades de seguridad, incluido MAGERIT v3, además de seguridad de los sistemas; la lista exacta se contrasta con MAGERIT/CCN-CERT.'},
3300:{A1:['A1-50'],A2:['A2-II-11'],doc:docs.standards,detail:'el bloque trata organismos internacionales/nacionales de normalización y estándares de seguridad; la atribución conjunta ISO/IEC se verifica con el comité oficial ISO/IEC JTC 1/SC 27.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación comparada con el temario-oficial.json y los programas GSI vigentes publicados en BOE: A1 BOE-A-2025-25938 (anexo I) y A2 BOE-A-2025-26262 (anexo IX).';
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=rows[c.id];assert.ok(q&&r);for(const t of [...r.A1,...r.A2])assert.ok(official.has(t),`Tema oficial inexistente: ${t}`);
 q.clasificacion={A1:r.A1,A2:r.A2,bloque_academia:`${r.doc.label}; ${r.detail} ${r.doc.url}`,estado:'revisada',nota:`${q.revision.estado}. ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy en Drive: ${r.doc.label}; ${r.detail} ${r.doc.url} ${calls}`;
 q.revision.fuentes.push({url:r.doc.url,referencia:`${r.doc.label}; cotejo curricular: ${r.detail} El temario de academia sirve para ubicar la materia, no se usa como autoridad normativa o técnica para validar la clave.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular en Drive y clasificación A1/A2 del lote 596 completados.');
