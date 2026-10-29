const fs=require('node:fs'),assert=require('node:assert/strict');
const script='revision/revisar-lote-575.cjs',source=fs.readFileSync(script,'utf8');
assert.ok(source.includes('A1-90/A1-95/A2-III-3.'));
let updated=source.replaceAll('A1-90/A1-95/A2-III-3.','A1-90/A1-95/A2-III-2.');
updated=updated.replace('Se precisa la adscripción metodológica de los DFD: MÉTRICA v3 los utiliza en el Análisis del Sistema de Información (ASI), no como técnica propia de Diseño del Sistema de Información (DSI). Se mantiene la definición básica de entidades externas, procesos, almacenes y flujos; la notación ampliada puede representar también control/eventos. A1-90/A1-95/A2-III-2.','Se reformula la pregunta para contrastar en qué proceso de MÉTRICA v3 se utiliza la técnica DFD: Análisis del Sistema de Información (ASI), no Diseño (DSI). La guía ministerial ubica el modelado y especificación de procesos con DFD en las actividades ASI. A1-90/A1-95/A2-III-2.');
fs.writeFileSync(script,updated);
const bankPath='preguntas_preparatic.json',logPath='revision/cambios-lote-575.json';
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const notes={
 3192:'Se conserva la clave «proceso», pero se identifica DFD como diagrama de flujo de datos y se formula la definición con precisión: el proceso transforma los datos recibidos y produce datos de salida. «Programa» es una posible implementación, no el símbolo/elemento de modelado; nodo y entidad no describen esa transformación. A1-90/A1-95/A2-III-2.',
 3194:'Se reformula la pregunta para contrastar en qué proceso de MÉTRICA v3 se utiliza la técnica DFD: Análisis del Sistema de Información (ASI), no Diseño (DSI). La guía ministerial ubica el modelado y especificación de procesos con DFD en las actividades ASI. A1-90/A1-95/A2-III-2.'
};
for(const [id,note] of Object.entries(notes)){
 const q=bank.preguntas.find(x=>x.id===Number(id)),change=log.cambios.find(x=>x.id===Number(id));assert.ok(q&&change);
 q.revision.observaciones=q.revision.observaciones.replace(/Se conserva la clave «proceso»[\s\S]*?A2-III-3\./,notes[3192]).replace(/Se precisa la adscripción metodológica de los DFD[\s\S]*?A2-III-3\./,notes[3194]);
 q.comentarios=q.revision.observaciones;change.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Notas de trazabilidad de 3192 y 3194 corregidas; originales preservados.');
