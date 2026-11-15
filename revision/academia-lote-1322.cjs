const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1322.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={governance:'https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk',
  systems:'https://docs.google.com/document/d/1BRLBHuHySkuHV-P7dta8o0I_Rn6BznrB/edit',
  planning:'https://drive.google.com/file/d/1IaGnVBua1JTQqOGPaK_0SuKG4tttfDPU/view?usp=drivesdk',
  agile:'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk',
  ssd:'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk'};
const notes={
  6931:['governance','ITIC Academy, bloque 10 Gobernanza TIC (tema del Consejo Consultivo): cubre el órgano bajo la denominación ministerial histórica. La pregunta se actualiza con la sucesión de competencias digitales; la presidencia concreta se contrasta con la Orden ETD/920/2020 y la estructura ministerial vigente, no se toma el material antiguo como autoridad normativa.'],
  6932:['systems','ITIC Academy, tema 34 Organización y gestión de sistemas de información: distingue las funciones de administración de sistemas y de bases de datos. La premisa de equipos con responsabilidades separadas se explicita porque la asignación práctica depende del tamaño y organización de cada entidad; el alcance del DBA se apoya también en documentación oficial del fabricante.'],
  6933:['planning','ITIC Academy, bloque de planificación y control de gestión: cubre objetivos y herramientas de dirección, aunque el material usa una expansión posterior de SMART (attainable/relevant). Se identifica expresamente la formulación original de Doran (1981), para evitar presentar variantes como si fueran la misma lista.'],
  6934:['agile','ITIC Academy, bloque Metodologías ágiles y ciclo de vida: aborda retroalimentación, aprendizaje y adaptación de equipos ágiles. La definición se concreta con el Manifiesto Ágil y la Guía Scrum oficiales.'],
  6935:['ssd','ITIC Academy, bloque 17 de análisis de alternativas: distingue métodos para ponderar criterios (Delphi, utilidades relativas y entropía) de la normalización de puntuaciones de alternativas por fracción del ideal/máximo. El propio SSD-AAPP confirma esa separación metodológica.']
};
const marker='Cotejo curricular ITIC Academy:';
const strip=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return i<0?s:s.slice(0,i).trim()};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),entry=notes[c.id];assert.ok(q&&entry,`Falta pregunta o nota ${c.id}`);
 const code=[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin epígrafe A2 específico';
 const note=`${marker} ${entry[1]} Correspondencia oficial: ${code}. El material de academia coteja cobertura, no sustituye la fuente primaria.`;
 q.clasificacion.bloque_academia=entry[1];q.clasificacion.nota=`${strip(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${strip(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${strip(q.revision.observaciones)} ${note}`.trim();
 if(!q.revision.fuentes.some(x=>x.url===docs[entry[0]]))q.revision.fuentes.push({url:docs[entry[0]],referencia:`Cotejo curricular ITIC Academy: ${entry[1]}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo de ITIC Academy aplicado a las preguntas 6931–6935.');
