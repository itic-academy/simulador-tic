const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bp=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bp,'utf8'));
const lp=path.join(__dirname,'cambios-lote-592.json'),log=JSON.parse(fs.readFileSync(lp,'utf8'));
const net={url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',label:'ITIC Academy, bloque 42 «Redes», versión 2026.1, 29-09-2026'};
const protocols={url:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',label:'ITIC Academy, bloque 43 «Protocolos», versión 2026.1, 29-09-2026'};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación comprobada contra revision/temario-oficial.json y los programas GSI publicados en BOE: A1 BOE-A-2025-25938 (anexo I) y A2 BOE-A-2025-26262 (anexo IX).';
const rows={
 3276:{A1:['A1-110','A1-115'],A2:['A2-II-8','A2-IV-8'],academy:protocols,detail:'el índice del bloque 43 incluye ARP (apartado 3.6), TCP/IP, direccionamiento, protocolos de enlace y redes locales. La respuesta concreta se acredita con RFC 826, no con el apunte académico.'},
 3277:{A1:['A1-108','A1-115'],A2:['A2-II-8'],academy:protocols,detail:'el bloque 43 desarrolla TCP, retransmisión, pérdidas, control de congestión y arquitecturas de protocolos. El estándar vigente IETF es la fuente de la conducta de TCP.'},
 3278:{A1:['A1-108','A1-113'],A2:['A2-IV-10'],academy:net,detail:'el bloque 42, apartado 7.3 «Jerarquías digitales: PDH, SDH (JDS) y OTN», explica las denominaciones normalizadas. ITU-T G.707/G.703 resuelven la terminología del enunciado.'},
 3279:{A1:['A1-110','A1-118'],A2:['A2-IV-8'],academy:net,detail:'el bloque 42 cubre arquitectura LAN e IEEE 802 en el apartado 4.1, pero no desarrolla específicamente la antigua IEEE 802.9. Se registra esa limitación y se contrasta el alcance y retirada únicamente en la ficha primaria IEEE SA.'},
 3280:{A1:['A1-108'],A2:['A2-IV-7'],academy:net,detail:'el bloque 42 presenta medios de transmisión y telecomunicaciones; su índice no identifica DVB-T/TDT como contenido específico. Se marca como encaje curricular general —no cobertura explícita— y se resuelve con ACMA y ETSI.'}
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=rows[c.id];assert.ok(q&&r);for(const t of [...r.A1,...r.A2])assert.ok(official.has(t),`Tema inexistente ${t}`);
 q.clasificacion={A1:r.A1,A2:r.A2,bloque_academia:`${r.academy.label}; ${r.detail} ${r.academy.url}`,estado:'revisada',nota:`${q.revision.estado}. ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy en Drive: ${r.academy.label}; ${r.detail} ${r.academy.url} ${calls}`;
 q.revision.fuentes.push({url:r.academy.url,referencia:`${r.academy.label}; cotejo curricular: ${r.detail} Este material orienta la clasificación y no sustituye la fuente primaria de la respuesta.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bp,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(lp,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo ITIC Academy en Drive y temas oficiales GSI A1/A2 completado para 3276–3280; se registran límites de cobertura para IEEE 802.9 y TDT.');
