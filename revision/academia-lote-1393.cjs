const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),file=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(file,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1393.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 networks:{url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',title:'ITIC Academy, bloque 42 Redes, edición 2026',detail:'Se coteja como ubicación general de tecnologías de red y transporte ATM (7286); la respuesta concreta se apoya en ITU-T I.363.1.'},
 wifi:{url:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',title:'ITIC Academy, bloque 46 Redes inalámbricas, edición 2026',detail:'Cubre el ámbito curricular de WLAN y estándares IEEE 802.11/A1-114 y A2-IV-11 (7287); la banda exacta se valida con el IEEE.'},
 none:{url:null,title:'Búsqueda de cobertura APR/pantallas táctiles en ITIC Academy/Drive (15-11-2026)',detail:'Las búsquedas de APR, reconocimiento acústico y pantallas táctiles no localizaron un bloque académico 2026 directamente identificable. No se asigna un documento por aproximación; la clasificación se basa en A1-34 (microinformática/atención a usuarios) y A2-II-1 (dispositivos y sistemas de ordenador), y el carácter retirado se prueba con Elo.'},
 itil:{url:'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk',title:'ITIC Academy, bloque 41 ITIL y COBIT, edición 2026',detail:'Cubre la gestión de servicios e incidencias de A1-106 (7289); la definición del término se contrasta con material oficial de PeopleCert.'},
 drm:{url:'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk',title:'ITIC Academy, tema 43 Protección Jurídica del Software, Licencias y DRM, edición 2026',detail:'Cubre protección jurídica de software/DRM, A1-43 y A2-II-14 (7290); la expansión de XrML y el estándar MPEG-21 se verifican por separado en Microsoft e ISO.'}
};
const assignments={7286:docs.networks,7287:docs.wifi,7288:docs.none,7289:docs.itil,7290:docs.drm};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id);assert.ok(q?.revision,`Falta revisión ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(id),`Tema oficial inválido: ${id}`);
 const doc=assignments[c.id];assert.ok(doc);
 const note=`Cotejo curricular ITIC Academy/Drive: ${doc.title}. ${doc.detail}`;
 q.clasificacion.bloque_academia=note;q.clasificacion.nota=(q.clasificacion.nota+' '+note).trim();
 q.comentarios=(q.comentarios+' '+note).trim();q.revision.observaciones=(q.revision.observaciones+' '+note).trim();
 if(doc.url)q.revision.fuentes.push({url:doc.url,referencia:`${doc.title}; cotejo: ${doc.detail}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(file,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy/Drive registrado para 7286–7290; se documenta que no apareció material directo para APR.');
