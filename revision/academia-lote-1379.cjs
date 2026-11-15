const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),file=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(file,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1379.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 copyright:{url:'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk',title:'ITIC Academy, bloque 18 Protección jurídica, licencias y control del software, versión 2026.1 (26-08-2026)',detail:'Cubre A1-43 y A2-II-14. El documento aborda originalidad, derechos y titularidad de programas; el requisito legal concreto se verificó en LPI art. 96 y Directiva 2009/24/CE.'},
 accessibility:{url:'https://drive.google.com/file/d/1fB8jeg7SA1k3gCCapKlWX1VLLksWb5qO/view?usp=drivesdk',title:'ITIC Academy, Tema 044 Accesibilidad y usabilidad',detail:'Cubre WCAG 2.1 y accesibilidad/usabilidad dentro de A1-44 y A2-III-14. La terminología exacta de las categorías y el inventario de técnicas ARIA se contrastaron en las páginas normativas/informativas W3C.'},
 security:{url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',title:'ITIC Academy, bloque 48 Seguridad en redes y nivel de aplicación, actualización 2026',detail:'Cubre A1-125 y A2-II-13, incluyendo continuidad, BCP y DRP. Se cotejó el apartado académico de recuperación, pero la definición precisa del DRP se contrasta con NIST SP 800-34 Rev. 1 y se documenta el solapamiento terminológico señalado por CCN.'},
 systems:{url:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',title:'ITIC Academy, bloque 27 Sistemas Operativos, temas A1 59–62/A2 II-2, actualización 2026',detail:'Cubre fundamentos de sistemas operativos, UNIX/Linux y estandarización POSIX; el nombre y edición actuales de las normas se comprobaron con IEEE SA e ISO/IEC/IEEE.'}
};
const academy={7216:docs.copyright,7217:docs.accessibility,7218:docs.accessibility,7219:docs.security,7220:docs.systems};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),d=academy[c.id];assert.ok(q?.revision&&d,`Falta pregunta/Drive ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(id),`Tema oficial inválido: ${id}`);
 const note=`Cotejo curricular ITIC Academy: ${d.title}. ${d.detail} El material sirve para comprobar el encaje y cobertura curricular; las respuestas y terminología se fundamentan en las fuentes primarias citadas.`;
 q.clasificacion.bloque_academia=note;q.clasificacion.nota=(q.clasificacion.nota+' '+note).trim();
 q.comentarios=(q.comentarios+' '+note).trim();q.revision.observaciones=(q.revision.observaciones+' '+note).trim();
 q.revision.fuentes.push({url:d.url,referencia:`${d.title}; cotejo: ${d.detail}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(file,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy/Drive registrado para IDs 7216–7220.');
