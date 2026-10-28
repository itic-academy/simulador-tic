const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-338.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 protocols:{url:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',label:'ITIC Academy, Bloque 43 Protocolos, edición 2026'},
 audit:{url:'https://drive.google.com/file/d/1D93MNUzOWGwD6IyuWdxIMnHaL7aXvYhp/view?usp=drivesdk',label:'ITIC Academy, Auditoría Informática A1-38/A2-T11, versión 2026.2'},
 signature:{url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',label:'ITIC Academy, Seguridad, Criptografía, Identificación y Firma, temas A1-79/80/81, edición 2026'},
 development:{url:'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk',label:'ITIC Academy, Metodologías ágiles y ciclo de vida, temas A1-37/86/88, A2-III, edición 2026'},
 governance:{url:'https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk',label:'ITIC Academy, Bloque 10 Gobernanza TIC y Administración Digital, versión 2026.3 (26-08-2026)'}
};
const map={
 2006:{doc:'protocols',topics:['A1-116','A2-IV-14'],detail:'incluye convergencia de servicios de voz/datos, NGN/IMS y convergencia entre acceso fijo, móvil y Wi‑Fi.'},
 2007:{doc:'audit',topics:['A1-38','A2-II-11'],detail:'incluye normas y estándares de auditoría informática; la referencia al estándar actual se deja pendiente hasta cotejar la edición 5 de ITAF.'},
 2008:{doc:'signature',topics:['A1-80','A2-I-6'],detail:'incluye el marco eIDAS y diferencia firma electrónica, firma avanzada, firma cualificada y certificados.'},
 2009:{doc:'development',topics:['A1-88','A2-III-3'],detail:'cubre análisis funcional, requisitos, casos de uso y desarrollo de sistemas; la tarea concreta ASI 2 se verifica en la metodología oficial.'},
 2010:{doc:'governance',topics:['A1-30'],detail:'trata modelos de gobernanza TIC, alineación de estrategia, estructuras y coordinación de la transformación digital de la AGE.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);assert.deepEqual(q.clasificacion.A1,m.topics.filter(t=>t.startsWith('A1-')));assert.deepEqual(q.clasificacion.A2,m.topics.filter(t=>t.startsWith('A2-')));assert.ok(m.topics.every(t=>official.has(t)));const d=docs[m.doc];q.clasificacion.bloque_academia=`${d.label}; ${m.detail}`;q.clasificacion.nota=`Correspondencia contrastada con revision/temario-oficial.json y las convocatorias vigentes: A1 BOE-A-2025-25938 y A2 BOE-A-2025-26262. La academia sirve de cotejo curricular, no sustituye a las fuentes primarias. ${c.actualizada.revision.observaciones}`;q.revision.observaciones=q.clasificacion.nota;q.comentarios=q.clasificacion.nota;q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo específico del contenido y del programa oficial.`});c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo académico, temario oficial y convocatorias actualizado para IDs 2006–2010.');
