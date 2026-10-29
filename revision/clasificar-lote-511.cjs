const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');

const root=path.join(__dirname,'..');
const bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-511.json');
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const academy={
  2871:{A1:['A1-115'],A2:['A2-II-8'],academy:'ITIC Academy, Bloque 42 Redes 2026.1 (direccionamiento IPv4, clases históricas y CIDR): https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk. El material sirve como mapa curricular; la vigencia del direccionamiento classful se contrasta con RFC 4632.'},
  2872:{A1:['A1-14','A1-53'],A2:['A2-IV-3'],academy:'ITIC Academy, Bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización 2026.1: https://docs.google.com/document/d/1i7gM8fFljlK2jLDlCxr_h0titV5bPo5U/edit?usp=drivesdk. Se coteja como contexto de equipos y sostenibilidad; la diferencia jurídica entre RoHS y RAEE procede de las directivas de la UE.'},
  2873:{A1:['A1-47'],A2:['A2-II-10'],academy:'ITIC Academy, Bloque 22 Seguridad, ENS y Ciberseguridad 2026.2: https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk, como contexto curricular general de seguridad. La terminología concreta de impacto/riesgo se coteja con MAGERIT v3 y CCN-STIC 401.'},
  2874:{A1:['A1-110'],A2:['A2-II-8','A2-IV-7'],academy:'ITIC Academy, Bloque 42 Redes 2026.1 (OSI, interfaces y transmisión): https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk. El programa se usa como mapa curricular; el mapeo conceptual se apoya en ITU-T X.200 y la guía técnica gubernamental de RS-232-C.'},
  2875:{A1:['A1-54'],A2:['A2-IV-7'],academy:'ITIC Academy, Bloque 26 Hardware y dispositivos personales 2026.1: https://docs.google.com/document/d/1i7gM8fFljlK2jLDlCxr_h0titV5bPo5U/edit?usp=drivesdk, y Bloque 42 Redes 2026.1: https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk. Se coteja el contexto de conectividad USB; las tasas se verifican en USB-IF.'}
};
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const change of log.cambios){
  const q=bank.preguntas.find(x=>x.id===change.id),m=academy[change.id];
  assert.ok(q&&m,`ID ${change.id}`);
  for(const id of [...m.A1,...m.A2])assert.ok(topics.has(id),`Tema no oficial: ${id}`);
  q.clasificacion={...q.clasificacion,A1:m.A1,A2:m.A2,bloque_academia:m.academy,estado:'revisada',nota:`${q.revision.estado}. ${m.academy}`};
  q.revision.observaciones+=` Cotejo curricular: ${m.academy} La academia se usa como mapa de estudio, no como autoridad legal o técnica.`;
  q.comentarios=q.revision.observaciones;
  change.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Clasificación A1/A2 cotejada contra temario-oficial.json y mapa curricular de Academy para IDs 2871–2875.');
