const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1207.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const b3='https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const b48='https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const map={
6356:{url:b3,desc:'ITIC Academy, bloque 03 Administración Digital, actualización 2026: el cuadro de gobernanza distingue CETIC y órganos directivos y resume sus funciones estratégicas/cooperativas; cotejo curricular directo, con atribución legal comprobada separadamente en el RD 806/2014.'},
6357:{url:b3,desc:'ITIC Academy, bloque 03 Administración Digital, actualización 2026: cobertura temática de accesibilidad y administración digital; el nombre y naturaleza del Observatorio se contrastan en PAe y RD 1112/2018.'},
6358:{url:b3,desc:'ITIC Academy, bloque 03 Administración Digital, actualización 2026: contextualiza accesibilidad web y WCAG 2.1; el nivel y el umbral exactos se verifican directamente en el criterio 2.3.1 de W3C.'},
6359:{url:b48,desc:'ITIC Academy, bloque 48 Seguridad en redes y nivel de aplicación, actualización 2026: cubre MAGERIT v3 y análisis de riesgos, sin localizar el rol “enlace operacional”; la definición exacta se contrasta con el Libro I oficial de MAGERIT.'},
6360:{url:b48,desc:'ITIC Academy, bloque 48 Seguridad en redes y nivel de aplicación, actualización 2026: enumera evitar/eliminar, reducir/mitigar, aceptar/asumir y compartir/transferir; contempla el seguro como ejemplo de transferencia, lo que confirma el solapamiento de opciones y justifica mantenerla pendiente.'}
};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m);q.clasificacion.bloque_academia=m.desc;const note='Cotejo curricular de ITIC Academy: '+m.desc+' La academia sirve de contraste curricular y no sustituye las fuentes oficiales.';q.clasificacion.nota=(q.clasificacion.nota+' '+note).trim();q.comentarios=(q.comentarios+' '+note).trim();q.revision.observaciones=(q.revision.observaciones+' '+note).trim();q.revision.fuentes.push({url:m.url,referencia:'ITIC Academy/Drive: '+m.desc});c.actualizada=structuredClone(q);}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular Academy/Drive actualizado para IDs 6356–6360.');
