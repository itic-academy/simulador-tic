const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bp=path.join(__dirname,'..','preguntas_preparatic.json'),lp=path.join(__dirname,'cambios-lote-606.json');
const bank=JSON.parse(fs.readFileSync(bp,'utf8')),log=JSON.parse(fs.readFileSync(lp,'utf8'));
const refinements={
 3346:{texto:'¿En qué capítulo del título I de la Ley 40/2015 se regula la organización territorial de la Administración General del Estado?',opciones:['Capítulo II.','Capítulo III.','Capítulo IV.','En ninguno de los anteriores.'],respuesta_correcta:1},
 3349:{texto:'Según el artículo 122.2 de la Ley 9/2017, ¿en qué documento se incluyen los criterios de solvencia y adjudicación del contrato?',opciones:['En el pliego de cláusulas administrativas particulares.','En el pliego de cláusulas administrativas generales.','En el pliego de prescripciones técnicas particulares.','En el pliego de prescripciones técnicas generales.'],respuesta_correcta:0},
 3350:{texto:'Según el artículo 223 de la Ley 9/2017, señale la afirmación correcta sobre los sistemas dinámicos de adquisición.',opciones:['Solo pueden utilizarse para contratos de obras.','Son procesos totalmente electrónicos, con duración limitada fijada en los pliegos y abiertos durante su vigencia a las empresas interesadas que cumplan los criterios de selección.','Su duración no puede superar, con carácter general, dos años.','Puede cobrarse a las empresas un 0,5 % del importe de cada contrato por participar en el sistema.'],respuesta_correcta:1}
};
for(const c of log.cambios){const e=refinements[c.id];if(!e)continue;const q=bank.preguntas.find(x=>x.id===c.id);assert.ok(q&&q.revision?.estado==='vigente');Object.assign(q,e);Object.assign(c.actualizada,e);}
fs.writeFileSync(bp,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(lp,JSON.stringify(log,null,2)+'\n');
console.log('Se precisaron 3346 (referencia a título/capítulo), 3349 (art. 122.2) y 3350 (art. 223 y sus límites).');
