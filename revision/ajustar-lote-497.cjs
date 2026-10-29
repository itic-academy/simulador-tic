const fs=require('node:fs'),path=require('node:path');
const fp=path.join(__dirname,'..','preguntas_preparatic.json'),lp=path.join(__dirname,'cambios-lote-497.json');
const bank=JSON.parse(fs.readFileSync(fp,'utf8')),log=JSON.parse(fs.readFileSync(lp,'utf8'));
const states={2801:'historica',2802:'corregida',2803:'corregida',2804:'historica',2805:'historica'};
const notes={
 2801:'Reactivo histórico basado en las enmiendas IEEE 802.11a/b/g/e/i, hoy incorporadas o sustituidas por revisiones del estándar consolidado. La afirmación incorrecta es la segunda: 802.11g alcanza hasta 54 Mbit/s, no 11 Mbit/s; 11 Mbit/s corresponde a 802.11b. Se precisa que las cifras son máximos PHY teóricos.',
 2802:'Se confirma UDP: es un protocolo de transporte. NFS, SMTP y RPC son protocolos de aplicación en la clasificación TCP/IP usual, aunque NFS/RPC usen TCP o UDP como transporte subyacente.',
 2803:'Se precisa el alcance a una apertura activa TCP: el primer segmento enviado por el iniciador contiene SYN=1. No se generaliza a cualquier protocolo o tipo de sesión.',
 2804:'El enunciado original no indicaba máscara y se apoyaba en el direccionamiento classful obsoleto. Se explicita la hipótesis histórica /8 sin subnetting; dentro de 100.0.0.0/8, el broadcast es 100.255.255.255. En redes CIDR reales, el broadcast depende del prefijo configurado. El host citado no cae en el bloque especial 100.64.0.0/10.',
 2805:'Reactivo histórico. IEEE 802.9 fue el grupo/estándar Integrated Services LAN (ISLAN), con el objetivo de ofrecer servicios integrados sobre LAN; IEEE 802.9-1994 se retiró en 2000 y el grupo está disuelto. Se conserva la clave solo como identificación histórica, no como grupo vigente.'
};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),s=states[c.id];q.revision.estado=s;q.revision.observaciones=notes[c.id];q.comentarios=notes[c.id];q.clasificacion.nota=`${s}. ${q.clasificacion.bloque_academia}`;c.actualizada=structuredClone(q);}
fs.writeFileSync(fp,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(lp,JSON.stringify(log,null,2)+'\n');
console.log('Estados históricos y observaciones afinados en el banco y el log.');
