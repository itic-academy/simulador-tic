const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const log=JSON.parse(fs.readFileSync(path.join(__dirname,'cambios-lote-1219.json'),'utf8'));
const matches={
 6416:[{url:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',desc:'ITIC Academy, bloque 27 «Sistemas operativos», edición 2026.1: A1 temas 59–62 y A2 II.2/IV.1, con procesos, hilos y memoria.'}],
 6417:[
  {url:'https://docs.google.com/document/d/1i7gM8fFljlK2jLDlCxr_h0titV5bPo5U/edit',desc:'ITIC Academy, bloque 26 «Hardware, CPD y computación en nube», edición 2026.1: incluye computación en nube e infraestructura.'},
  {url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',desc:'ITIC Academy, bloque 42 «Redes», actualización 2026: redes públicas, WAN, transporte e interconexión.'}],
 6418:[
  {url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',desc:'ITIC Academy, bloque 42 «Redes», edición 2026: incluye Red SARA y redes públicas.'},
  {url:'https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk',desc:'ITIC Academy, bloque 10 «Gobernanza TIC y Administración Digital», edición 2026.4: incluye Red SARA e infraestructuras y servicios comunes.'}],
 6419:[{url:'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk',desc:'ITIC Academy, bloque 01 «Constitución, organización del Estado y AGE», actualización 2026.2: comprende Cortes Generales y arts. 87–89.'}],
 6420:[{url:'https://docs.google.com/document/d/1za_7e_LlvUEpja7VJyYElIgRIPu_AbE3/edit',desc:'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas», versión 2026.1: integración continua, despliegue, contenedores, infraestructura como código y DevOps.'}]
};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),list=matches[c.id];assert.ok(q&&list);assert.deepEqual(q,c.actualizada);const note='Cotejo curricular ITIC Academy/Drive: '+list.map(x=>x.desc).join(' ')+' El temario establece la correspondencia curricular; las respuestas se validan con las fuentes primarias citadas.';q.clasificacion.bloque_academia=note;q.clasificacion.nota=(q.clasificacion.nota+' '+note).trim();q.comentarios=(q.comentarios+' '+note).trim();q.revision.observaciones=(q.revision.observaciones+' '+note).trim();c.actualizada=JSON.parse(JSON.stringify(q));}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(path.join(__dirname,'cambios-lote-1219.json'),JSON.stringify(log,null,2)+'\n');console.log('Cotejados cinco registros con los temarios ITIC Academy de Drive.');
