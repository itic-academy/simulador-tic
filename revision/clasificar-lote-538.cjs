const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-538.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const links={
 video:'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk',
 radio:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',
 hardware:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk'
};
const academy={
 3006:{A1:['A1-130'],A2:['A2-IV-16'],note:`ITIC Academy, Bloque 50 «Videoconferencia, Single Sign-On y herramientas de trabajo colaborativo» (2026.1), apartado H.323/H.225.0 y T.120; corresponde al programa oficial de videoconferencia A1-130/A2-IV-16. ${links.video}`},
 3007:{A1:['A1-131'],A2:[],note:`ITIC Academy, Bloque 50 «Videoconferencia, Single Sign-On y herramientas de trabajo colaborativo» (2026.1), incluye acceso remoto y teletrabajo, tema oficial A1-131. El detalle normativo de contenido mínimo se contrasta con la Ley 10/2021 y no se atribuye a la academia. ${links.video}`},
 3008:{A1:['A1-132'],A2:['A2-II-7'],note:`ITIC Academy, Bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización» (2026), §13 contenedores/Kubernetes; cubre A1-132 y el programa A2-II-7 de contenedores y microservicios. La sintaxis concreta Dockerfile se valida contra Docker Docs. ${links.hardware}`},
 3009:{A1:['A1-65','A1-133'],A2:['A2-II-6','A2-III-12'],note:`ITIC Academy, Bloque 50 (2026.1), trabajo colaborativo, redes sociales y web/participación; el material de administración digital complementa las herramientas web colaborativas. Se alinea con A1-133 y con los temas oficiales A1-65/A2-II-6/III-12 sobre arquitectura y servicios multidispositivo/web. ${links.video}`},
 3010:{A1:['A1-123'],A2:['A2-IV-15'],note:`ITIC Academy, Bloque 46 «Redes inalámbricas y comunicaciones móviles» (2026.1), GSM y extensión de paquetes GPRS; corresponde a comunicaciones móviles A1-123/A2-IV-15. ${links.radio}`}
};
const programs=JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8'));
const topics=new Set(programs.programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m);for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),t);q.revision.observaciones+=` Cotejo curricular: ${m.note} Correspondencias cotejadas con revision/temario-oficial.json y anexos I (A1) y IX (A2 GSI) de las convocatorias BOE-A-2025-25938 y BOE-A-2025-26262; la academia orienta y no sustituye el programa oficial ni las fuentes primarias.`;q.clasificacion={...q.clasificacion,A1:m.A1,A2:m.A2,bloque_academia:m.note,estado:'revisada',nota:`${q.revision.estado}. ${m.note}`};q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Clasificación oficial A1/A2 y correspondencia Academy cotejadas para lote 538.');
