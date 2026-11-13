const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1208.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const b48='https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const b3='https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const hw='https://drive.google.com/file/d/12heek9CTZHiGHjtWvLjdjOE7vIQdlYFm/view?usp=drivesdk';
const os='https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk';
const map={
6361:{url:b48,desc:'ITIC Academy, bloque 48 Seguridad en redes y nivel de aplicación, actualización 2026: identifica ISO/IEC 27002:2022 como código de buenas prácticas y resume sus 93 controles en cuatro temas.'},
6362:{url:b48,desc:'ITIC Academy, bloque 48 Seguridad en redes y nivel de aplicación, actualización 2026: trata continuidad, BCP y DRP. No define la separación rígida del enunciado; el glosario oficial CCN muestra usos solapados de plan de contingencia y recuperación.'},
6363:{url:b3,desc:'ITIC Academy, bloque 03 Administración Digital, actualización 2026: cobertura general de sociedad de la información/administración digital; la búsqueda del documento no localizó el Reglamento (UE) 2018/302 ni geobloqueo, por lo que no se atribuye cobertura específica.'},
6364:{url:hw,desc:'ITIC Academy, paquete Hardware v2/2026 (temas 52, 53, 54, 56 y 57): incluye explícitamente microprocesador, ALU y el epígrafe serie frente a paralelo; cotejo directo de los conceptos.'},
6365:{url:os,desc:'ITIC Academy, bloque Sistemas Operativos 2026.1, temas A1-59–62/A2-T2: cobertura curricular de Unix/Linux y sistemas de archivos a nivel de sistema operativo; la definición técnica concreta de inode se verifica con Linux man-pages.'}
};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m);q.clasificacion.bloque_academia=m.desc;const note='Cotejo curricular de ITIC Academy: '+m.desc+' La academia se utiliza como contraste curricular, no como sustituto de la fuente normativa/técnica oficial.';q.clasificacion.nota=(q.clasificacion.nota+' '+note).trim();q.comentarios=(q.comentarios+' '+note).trim();q.revision.observaciones=(q.revision.observaciones+' '+note).trim();q.revision.fuentes.push({url:m.url,referencia:'ITIC Academy/Drive: '+m.desc});c.actualizada=structuredClone(q);}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular Academy/Drive actualizado para IDs 6361–6365.');
