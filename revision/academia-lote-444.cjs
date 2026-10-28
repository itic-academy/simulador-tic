const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const root=path.join(__dirname,'..');
const bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-444.json');
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
  security:{url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',label:'ITIC Academy, bloque 48 Seguridad en redes y en el nivel de aplicación, versión 2026; seguridad de redes, riesgos y controles.'},
  networks:{url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',label:'ITIC Academy, bloque 42 Redes, versión 2026.1; servicios de Internet y distribución de contenido.'},
  admin:{url:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',label:'ITIC Academy, bloque 03 Actuación Administrativa y Administración Digital, versión 2026.2; administración electrónica y marco del ENI.'},
  telecom:{url:'https://drive.google.com/file/d/1yNoGRQ6orxdHGYBQ-RW4lFzaexftWnIm/view?usp=drivesdk',label:'ITIC Academy, bloque 49 Telecomunicaciones, regulación y CNMC; temario de telecomunicaciones y organización sectorial.'}
};
const map={
  2531:{docs:['security'],detail:'el bloque aporta contexto curricular de seguridad y controles; eficacia se fundamenta en el glosario NIST CSRC y las directrices ISO/IEC 27004, no en el material de academia',topics:['A1-125','A2-II-13','A2-IV-12']},
  2532:{docs:['security'],detail:'el bloque encuadra el análisis de riesgos y la seguridad; la identificación de conceptos MAGERIT se comprueba directamente en la metodología y catálogo oficiales del PAe',topics:['A1-125','A2-II-13','A2-IV-12']},
  2533:{docs:['networks'],detail:'el bloque de redes da encaje a servicios de Internet; la definición de CDN se comprueba en documentación técnica del proveedor y no se atribuye al temario de academia',topics:['A1-109','A2-IV-13']},
  2534:{docs:['admin'],detail:'el bloque de administración digital contextualiza el ENI; la relación exacta de NTI y su diferencia frente a la regla de destrucción se cotejan con la disposición adicional primera y el art. 53 del RD 203/2021',topics:['A1-22','A2-I-9']},
  2535:{docs:['telecom'],detail:'el bloque ofrece correspondencia curricular con el sector de telecomunicaciones; la denominación y adscripción ministerial actuales se comprueban exclusivamente en el RD 210/2024 consolidado',topics:['A1-4']}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
for(const change of log.cambios){
  const q=bank.preguntas.find(x=>x.id===change.id),row=map[change.id];
  assert.ok(q?.revision&&row,`Falta revisión o cotejo para ${change.id}`);
  for(const t of [...q.clasificacion.A1,...q.clasificacion.A2,...row.topics])assert.ok(official.has(t),`Tema oficial inexistente: ${t}`);
  q.clasificacion.A1=row.topics.filter(x=>x.startsWith('A1-'));
  q.clasificacion.A2=row.topics.filter(x=>x.startsWith('A2-'));
  const refs=row.docs.map(k=>({url:docs[k].url,referencia:`${docs[k].label}; ${row.detail}. Correspondencia contrastada con revision/temario-oficial.json y convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2 GSI).`}));
  const curriculum=row.docs.map(k=>docs[k].label).join('; ');
  const note=`Cotejo curricular: ${curriculum}; ${row.detail}. Epígrafes ${row.topics.join(', ')} contrastados con revision/temario-oficial.json y las convocatorias BOE-A-2025-25938/BOE-A-2025-26262. La academia orienta el encaje curricular; las fuentes primarias registradas sostienen la respuesta.`;
  q.clasificacion.bloque_academia=curriculum;
  q.clasificacion.nota=note;
  if(!q.revision.observaciones.includes(note))q.revision.observaciones+=` ${note}`;
  q.comentarios=q.revision.observaciones;
  for(const ref of refs)if(!q.revision.fuentes.some(f=>f.url===ref.url))q.revision.fuentes.push(ref);
  change.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy y clasificación oficial añadido para 2531–2535.');
