const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1306.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const current='https://drive.google.com/file/d/1w3UwQPDtDE9GXacSYNUGUcO6KirAQ8xf/view?usp=drivesdk';
const historical='https://drive.google.com/file/d/1ZtRlafrnnXbfxgJYiQBwYdRSOWstnqEK/view?usp=drivesdk';
const docs={
6851:{text:'ITIC Academy, bloque 44, iniciativas Industria 4.0/transformación digital (edición 2026), cotejo del alcance de I4MS. El material histórico del tema 116 diferencia I4MS de CREMA y del proyecto Industry 4.0 for SMEs; para la naturaleza y denominación oficial se usan las fichas CORDIS.',url:historical},
6852:{text:'ITIC Academy, bloque 44, tabla comparativa de conectividad IoT: NB-IoT 3GPP Rel. 13, decenas de kbit/s y alcance típico aproximado de 15 km. El caudal de referencia de 62 kbit/s se comprueba en GSMA; la cifra de distancia se elimina del enunciado porque no es garantizada.',url:current},
6853:{text:'ITIC Academy, bloque 44, Industria 4.0 y principios de diseño; cotejo curricular. Los tres principios concretos se comprueban en el trabajo original de Hermann, Pentek y Otto, no se atribuye a los apuntes condición normativa.',url:current},
6854:{text:'ITIC Academy, bloque 44, ciudades inteligentes/plataformas: repasa UNE 178104 y el modelo por capas. La denominación exacta se coteja con material institucional de la biblioteca de ciudades inteligentes y la ficha AENOR.',url:current},
6855:{text:'ITIC Academy, tema 116 de ciudades inteligentes/DTI (material histórico): diferencia UNE 178502, Indicadores y herramientas de los DTI, de UNE 178501, sistema de gestión. El título y edición vigente se comprueban en AENOR.',url:historical}
};
const marker='Cotejo curricular ITIC Academy:';
const trim=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return(i<0?s:s.slice(0,i)).trim()};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),d=docs[c.id];assert.ok(q&&d,'Falta ID '+c.id);
 const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin epígrafe A2 directamente equivalente';
 const note=marker+' '+d.text+' Correspondencia oficial: '+topics+'. ITIC Academy se usa para cotejar el temario y vocabulario, no como fuente normativa o técnica.';
 q.clasificacion.bloque_academia=d.text;
 q.clasificacion.nota=(trim(q.clasificacion.nota)+' '+note).trim();
 q.comentarios=(trim(q.comentarios)+' '+note).trim();
 q.revision.observaciones=(trim(q.revision.observaciones)+' '+note).trim();
 q.revision.fuentes=q.revision.fuentes.filter(s=>s.url!==d.url);q.revision.fuentes.push({url:d.url,referencia:d.text});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular aplicado a los IDs 6851–6855.');
