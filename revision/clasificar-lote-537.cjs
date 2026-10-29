const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-537.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const links={
  tetra:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',
  auth:'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk',
  security:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',
  protocols:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk'
};
const academy={
  3001:{A1:['A1-123'],A2:['A2-IV-15'],note:`ITIC Academy, Bloque 46 «Redes inalámbricas y comunicaciones móviles» (2026.1), §10.3 radio profesional/PMR y TETRA. ${links.tetra}`},
  3002:{A1:['A1-125'],A2:['A2-II-13','A2-IV-12'],note:`ITIC Academy, Bloque 50 «Videoconferencia, Single Sign-On y herramientas de trabajo colaborativo» (2026), §3.4 protocolos AAA y Kerberos; encaje complementario en Bloque 48 de seguridad de redes y aplicaciones. ${links.auth} ${links.security}`},
  3003:{A1:['A1-125'],A2:['A2-IV-12'],note:`ITIC Academy, Bloque 48 «Seguridad en redes y aplicaciones» (2026), §8.1 IPsec; Bloque 42 «Redes» (2026), IPsec/TLS por capas. ${links.security} https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk`},
  3004:{A1:['A1-126'],A2:['A2-II-13','A2-III-12'],note:`ITIC Academy, Bloque 48 «Seguridad en redes y aplicaciones» (2026), §14.3 CSRF/SSRF y ataques del lado cliente y servidor. ${links.security}`},
  3005:{A1:['A1-116'],A2:['A2-IV-14','A2-IV-16'],note:`ITIC Academy, Bloque 43 «Protocolos» (2026), §13.2 SIP; Bloque 50 «Videoconferencia, Single Sign-On y herramientas de trabajo colaborativo» (2026), SIP/SDP y protocolos de videoconferencia. ${links.protocols} https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk`}
};
const programs=JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8'));
const topics=new Set(programs.programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m);for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),t);q.revision.observaciones+=` Cotejo curricular: ${m.note} Correspondencias contrastadas con revision/temario-oficial.json y los anexos I (A1) y IX (A2 GSI) de las convocatorias BOE-A-2025-25938 y BOE-A-2025-26262; el material académico se usa como apoyo de estudio y no sustituye el programa oficial ni las fuentes primarias.`;q.clasificacion={...q.clasificacion,A1:m.A1,A2:m.A2,bloque_academia:m.note,estado:'revisada',nota:`${q.revision.estado}. ${m.note}`};q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Clasificación oficial A1/A2 y correspondencia Academy cotejadas para lote 537.');
