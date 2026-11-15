const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1320.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
contracts:'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk',
employment:'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk',
leadership:'https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk'
};
const notes={
6921:['contracts','ITIC Academy, bloque 05 Contratación/Presupuestos/Convenios/Compra TIC (2026): estudia la LCSP y los procedimientos de adjudicación; el temario señala el negociado sin publicidad como excepcional y limitado a supuestos tasados. Alineación oficial A1-11; no hay tema A2 equivalente.'],
6922:['contracts','ITIC Academy, bloque 05 (2026): desarrolla convenios, su régimen, formalización y delimitación respecto de los contratos públicos. Alineación oficial A1-13; el régimen general de la Ley 40/2015 conecta con A2-I.8.'],
6923:['employment','ITIC Academy, bloque 06 Economía/Sociedad/Empleo/Transformación Digital (2026): diferencia políticas activas —orientación, formación, intermediación e incentivos— de las pasivas —prestaciones y subsidios— y explica la Ley 3/2023. Alineación oficial A1-17; sin tema A2 específico.'],
6924:['employment','ITIC Academy, bloque 06 (2026): cubre cambio tecnológico, automatización, empleo, cambio de tareas y habilidades, así como desigualdad/distribución de renta. Se usa como cotejo curricular; el efecto distributivo se sustenta en la OCDE. Alineación oficial A1-17; sin tema A2 específico.'],
6925:['leadership','ITIC Academy, bloque 07 Dirección Pública/Empleo/Transparencia (2026): tema 21, liderazgo, competencias y personas e inteligencia emocional; incluye la lista popular de cinco componentes y competencias relacionadas con habilidades sociales. Alineación oficial A1-21; sin tema A2 específico.']
};
const marker='Cotejo curricular ITIC Academy:';
const strip=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return i<0?s:s.slice(0,i).trim()};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),[key,desc]=notes[c.id];assert.ok(q&&desc,`Falta cotejo ${c.id}`);const note=`${marker} ${desc} Correspondencia: ${[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin epígrafe A2 específico'}. La cobertura académica no reemplaza la fuente primaria.`;q.clasificacion.bloque_academia=desc;q.clasificacion.nota=`${strip(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${strip(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${strip(q.revision.observaciones)} ${note}`.trim();const url=docs[key];if(!q.revision.fuentes.some(x=>x.url===url))q.revision.fuentes.push({url,referencia:`Cotejo curricular ITIC Academy: ${desc}`});c.actualizada=structuredClone(q)}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo Academy aplicado a 6921–6925.');
