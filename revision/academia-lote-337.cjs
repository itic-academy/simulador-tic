const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-337.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 audit:{url:'https://drive.google.com/file/d/1D93MNUzOWGwD6IyuWdxIMnHaL7aXvYhp/view?usp=drivesdk',label:'ITIC Academy, Auditoría Informática A1-38/A2-T11, versión 2026.2'},
 ip:{url:'https://docs.google.com/document/d/1idLNt7OqjLIr_pxoBcGeW2vi9Kldm8Z1/edit?usp=drivesdk',label:'ITIC Academy, Tema 043 Protección jurídica de programas y propiedad intelectual, A1-43/A2-II-14'},
 protocols:{url:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',label:'ITIC Academy, Bloque 43 Protocolos, edición 2026'},
 services:{url:'https://drive.google.com/file/d/1NWEg_hd3iDIC0kIitK-u8BpmJ20Jecmw/view?usp=drivesdk',label:'ITIC Academy, Tema 049 Servicios Comunes A1/A2, edición 2026'}
};
const map={
 2001:{doc:'audit',topics:['A1-38','A2-II-11'],detail:'incluye el marco de las tres E en auditoría de desempeño y diferencia economía, eficiencia y eficacia.'},
 2002:{doc:'ip',topics:['A1-43','A2-II-14'],detail:'cubre el TRLPI, Comisión de Propiedad Intelectual y protección jurídica; se ha actualizado la denominación ministerial con fuentes BOE.'},
 2003:{doc:'protocols',topics:['A1-108','A2-IV-7'],detail:'cubre tecnologías de acceso/transmisión y estándares de telecomunicaciones; la condición “en vigor” de G.992.2 se contrasta con ITU.'},
 2004:{doc:'services',topics:['A1-46','A1-49','A2-I-10'],detail:'incluye SCSP y Plataforma de Intermediación de Datos como especificaciones/servicios comunes de intercambio interadministrativo.'},
 2005:{doc:'protocols',topics:['A1-115','A2-IV-10'],detail:'incluye protocolos de encaminamiento IP y OSPF; la taxonomía ABR/ASBR se confirma con RFC 2328.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);
 assert.deepEqual(q.clasificacion.A1,m.topics.filter(t=>t.startsWith('A1-')));assert.deepEqual(q.clasificacion.A2,m.topics.filter(t=>t.startsWith('A2-')));assert.ok(m.topics.every(t=>official.has(t)));
 const d=docs[m.doc];q.clasificacion.bloque_academia=`${d.label}; ${m.detail}`;
 q.clasificacion.nota=`Correspondencia contrastada con revision/temario-oficial.json y las convocatorias vigentes: A1 BOE-A-2025-25938 y A2 BOE-A-2025-26262. La cobertura académica contextualiza el temario, no sustituye la fuente primaria. ${c.actualizada.revision.observaciones}`;
 q.revision.observaciones=q.clasificacion.nota;q.comentarios=q.clasificacion.nota;
 q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo específico de tema, examen y correspondencia curricular.`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo académico, temario oficial y convocatorias actualizado para IDs 2001–2005.');
