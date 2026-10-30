const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bp=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bp,'utf8'));
const lp=path.join(__dirname,'cambios-lote-590.json'),log=JSON.parse(fs.readFileSync(lp,'utf8'));
const block38={url:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',label:'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas de información», versión 2026.1, 18-09-2026'};
const block42={url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',label:'ITIC Academy, bloque 42 «Redes», versión 2026, 04-10-2026'};
const block43={url:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',label:'ITIC Academy, bloque 43 «Protocolos», versión 2026, 29-09-2026'};
const current=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación cotejada con revision/temario-oficial.json y los programas de las convocatorias GSI: A1 BOE-A-2025-25938 (anexo I) y A2 BOE-A-2025-26262 (anexo IX). Los BOE fijan el temario oficial; Academy solo sirve de apoyo para ubicar el contenido docente.';
const rows={
 3266:{A1:['A1-96'],A2:['A2-III-7'],academy:block38,detail:'el bloque 38 de 2026.1 incluye planificación y tipos de pruebas de software en A2 III-7; se usa como encaje didáctico, no como evidencia de que esas herramientas sean/ no sean de carga. La clasificación de herramientas se verifica con los proyectos/fabricantes oficiales.'},
 3267:{A1:['A1-95','A1-101'],A2:['A2-III-8'],academy:block38,detail:'el bloque 38 incluye MÉTRICA v3, ciclo de mantenimiento y distingue correctivo, evolutivo, adaptativo y perfectivo; el límite exacto de ámbito se acredita con el manual oficial de MÉTRICA.'},
 3268:{A1:['A1-100','A1-102'],A2:['A2-IV-4'],academy:block38,detail:'el bloque 38 2026.1 contiene un apartado de control de versiones/fuentes y herramientas de CI/CD; la semántica del comando se verifica con la documentación de Git.'},
 3269:{A1:['A1-65'],A2:['A2-III-12'],academy:block38,detail:'el programa ubica portlets dentro de arquitectura y aplicaciones web; el bloque 38 aporta contexto de desarrollo web. La especificación/versión se valida directamente en el Java Community Process, no en Academy.'},
 3270:{A1:['A1-108','A1-115'],A2:['A2-II-8','A2-IV-10'],academy:block43,detail:'el bloque 43 2026 cubre el modelo TCP/IP, los protocolos de encaminamiento y desarrolla RIP, OSPF e IS-IS; el bloque 42 incluye también el encaje A1-115/A2 T8. SMTP se identifica como protocolo de correo mediante RFC 5321.'}
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=rows[c.id];assert.ok(q&&r);for(const t of [...r.A1,...r.A2])assert.ok(current.has(t),`Tema inexistente ${t}`);
 q.clasificacion={A1:r.A1,A2:r.A2,bloque_academia:`${r.academy.label}; ${r.detail} ${r.academy.url}`,estado:'revisada',nota:`${q.revision.estado}. ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy: ${r.academy.label}; ${r.detail} ${r.academy.url} ${calls}`;
 q.revision.fuentes.push({url:r.academy.url,referencia:`${r.academy.label}; material consultado para verificar alineación curricular. ${r.detail}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bp,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(lp,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo ITIC Academy 2026 y clasificación oficial A1/A2 completados para 3266–3270; fuentes técnicas primarias preservadas como respaldo de las respuestas.');
