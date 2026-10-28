// Corrige la llamada posicional del revisor antes de publicar y conserva la instantánea final.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-402.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const notes={
 2326:'La afirmación falsa es que 802.16 solo opera en bandas licenciadas: IEEE documenta la extensión 802.16a a 2–11 GHz e incluye bandas licenciadas y exentas. WirelessMAN está concebido para redes metropolitanas; su MAC contempla QoS y la familia soporta TDD y FDD. Se precisa que los modos dependen de la versión y configuración. Se corrige el enunciado para referirlo a la familia IEEE WirelessMAN y no a una implementación WiMAX comercial concreta.',
 2327:'La respuesta es Política de firma electrónica y de certificados en el ámbito estatal, añadida como NTI mediante la modificación del ENI hecha por el RD 203/2021. No se confunde con la NTI de Política de firma electrónica y certificados de la Administración, que ya existía en la lista. Se reformula el enunciado para citar directamente la modificación normativa.',
 2328:'La afirmación falsa es que OM4 permite 100GBASE-SR4 hasta 850 m: IEEE 802.3bm, cláusula 95, fija un alcance de 100 m sobre OM4. Se corrigen los errores tipográficos «0M2/0M3» a «OM2/OM3» y se expresan las unidades como MHz·km y dB/km; en OM3, 1.500 MHz·km corresponde al ancho modal OFL a 850 nm, no al ancho efectivo láser.',
 2329:'El enunciado original no definía persistencia con precisión: ocupar memoria y tener un tiempo de vida describe cualquier objeto en ejecución. Se reformula para preguntar por el estado que se almacena y conserva fuera de la ejecución que lo creó; la respuesta es persistencia. Jakarta Persistence normaliza la gestión y el mapeo a base de datos de ese estado.',
 2330:'El artículo 12.2 histórico sí incluye soporte/operación/gestión de sistemas o redes, desarrollo multiusuario e innovación. La opción original «Todas las anteriores son correctas» también era verdadera, así que el reactivo negativo no permitía una respuesta única. Se sustituye por un distractor no incluido en la lista. Es pregunta histórica: el RD 806/2014 fue derogado por RD 1125/2024 el 7-11-2024.'
};
assert.equal(log.cambios.length,5);assert.deepEqual(log.cambios.map(c=>c.id),[2326,2327,2328,2329,2330]);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id);assert.ok(q&&notes[c.id]);
 q.revision.estado=c.id===2330?'historica':'corregida';
 q.revision.observaciones=`${notes[c.id]} ${q.clasificacion.nota}`;
 q.comentarios=q.revision.observaciones;
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,`${JSON.stringify(bank,null,2)}\n`);fs.writeFileSync(logPath,`${JSON.stringify(log,null,2)}\n`);
console.log('Notas, estados y snapshots del lote 402 normalizados.');
