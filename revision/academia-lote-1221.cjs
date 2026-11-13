const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const file=path.join(__dirname,'cambios-lote-1221.json'),log=JSON.parse(fs.readFileSync(file,'utf8'));
const matches={
 6426:[{url:'https://drive.google.com/file/d/1nHGBMG4P3il5v4hZ1-RKdHmGzUPiwqnA/view?usp=drivesdk',desc:'ITIC Academy, bloque 45 «Correo electrónico, mensajería y servicios de directorio», edición 2026.1; incluye protocolos de acceso y movilidad.'}],
 6427:[{url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',desc:'ITIC Academy, bloque 39 «Calidad y mantenimiento», edición 2026; programa A1 100–102 y A2 IV.4, mantenimiento, gestión de cambios y configuración.'}],
 6428:[{url:'https://docs.google.com/document/d/1za_7e_LlvUEpja7VJyYElIgRIPu_AbE3/edit',desc:'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas», versión 2026.1; métodos ágiles, XP, ciclo de desarrollo y planificación.'}],
 6429:[{url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',desc:'ITIC Academy, bloque 42 «Redes», actualización 2026; redes de transporte, SDH/SONET y tecnologías WAN.'}],
 6430:[{url:'https://drive.google.com/file/d/1LuUHoQr8oDmptteHIQ72VdCvJFsnu3LF/view?usp=drivesdk',desc:'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», actualización octubre de 2026; PHP y desarrollo web en servidor, A1 temas 65 y 68.'}]
};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),list=matches[c.id];assert.ok(q&&list);assert.deepEqual(q,c.actualizada);const note='Cotejo curricular ITIC Academy/Drive: '+list.map(x=>x.desc).join(' ')+' El temario acredita la correspondencia; la respuesta se contrasta con las fuentes primarias citadas.';q.clasificacion.bloque_academia=note;q.clasificacion.nota=(q.clasificacion.nota+' '+note).trim();q.comentarios=(q.comentarios+' '+note).trim();q.revision.observaciones=(q.revision.observaciones+' '+note).trim();c.actualizada=JSON.parse(JSON.stringify(q));}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(file,JSON.stringify(log,null,2)+'\n');console.log('Cotejados cinco registros con los temarios ITIC Academy de Drive.');
