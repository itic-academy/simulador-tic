const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1114.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const doc='https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk';
const desc='ITIC Academy, bloque 15 «Metodologías ágiles y ciclo de vida», versión 2026: contenidos sobre manifiesto/principios ágiles, Scrum e impedimentos, además de DFD y modelado de procesos. Para Scrum se cotejó la Guía oficial 2020; para DFD, las reglas del manual del IRS. «AGILD» no aparece en la nomenclatura del bloque ni en las fuentes de Scrum, XP y DSDM consultadas; se formula el enunciado dentro de ese alcance.';
const map={
 5891:{a1:[37],a2:['III-2']},
 5892:{a1:[37],a2:['III-2']},
 5893:{a1:[37],a2:['III-2']},
 5894:{a1:[90],a2:['III-2']},
 5895:{a1:[90],a2:['III-2']}
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const raw=(v||'').trim(),i=raw.indexOf(marker),base=(i<0?raw:raw.slice(0,i)).trim();return base.replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim();};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=desc;
 const note=`Cotejo curricular ITIC Academy: ${desc} Temas oficiales asociados: ${tags}. La academia orienta el encaje; los principios y reglas se verifican en fuentes primarias.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 if(!q.revision.fuentes.some(f=>f.url===doc))q.revision.fuentes.push({url:doc,referencia:`ITIC Academy: ${desc}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular A1/A2 actualizado para IDs 5891–5895.');
