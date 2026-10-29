const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-559.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={
3111:{A1:['A1-108'],A2:['A2-IV-14'],note:'ITIC Academy, Bloque 42 Redes, edición 2026, redes de telecomunicaciones; Bloque 50 Videoconferencia, SSO y colaboración, temario 2026.1. Son cotejos curriculares generales; PSTN se valida con la definición de UIT-T, no con la academia.'},
3112:{A1:['A1-108'],A2:['A2-IV-7','A2-IV-10'],note:'ITIC Academy, Bloque 42 Redes, edición 2026: medios/multiplexación y transmisión; se coteja curricularmente, mientras la explicación sobre bandas de guarda procede de ITU-R BT.2140-13.'},
3113:{A1:['A1-125'],A2:['A2-II-13','A2-IV-12'],note:'ITIC Academy, Bloque 48 Seguridad en redes y aplicaciones, versión 2026.1: ataques, amenazas y medidas de protección.'},
3114:{A1:['A1-115'],A2:['A2-II-8'],note:'ITIC Academy, Bloque 43 Protocolos, edición 2026.1: direccionamiento IPv4, CIDR y subnetting; Bloque 42 Redes como referencia transversal.'},
3115:{A1:['A1-116'],A2:['A2-IV-16'],note:'ITIC Academy, Bloque 50 Videoconferencia, Single Sign-On y herramientas de trabajo colaborativo, versión 2026.1: protocolos y seguridad de videoconferencia.'}
};
const links={
3111:['https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk','https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk'],
3112:['https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk'],
3113:['https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk'],
3114:['https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view','https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk'],
3115:['https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk']
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m,'Falta pregunta o clasificación '+c.id);
 for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),'Tema oficial inexistente '+t);
 const note=m.note+' '+links[c.id].join(' ')+' Correspondencias contrastadas con revision/temario-oficial.json y los anexos I y IX de las convocatorias oficiales A1 y A2 GSI de 2025 (BOE-A-2025-25938 y BOE-A-2025-26262). ITIC Academy sirve como cotejo curricular, no como fuente normativa.';
 q.revision.observaciones+=' Cotejo curricular: '+note;
 q.clasificacion={A1:m.A1,A2:m.A2,bloque_academia:note,estado:'revisada',nota:q.revision.estado+'. '+note};
 q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Clasificación A1/A2 y cotejo Academy añadidos a lote 559.');
