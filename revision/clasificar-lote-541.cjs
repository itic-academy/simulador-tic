const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-541.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const redes='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',wireless='https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',security='https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const academy={
 3021:{A1:['A1-114','A1-123'],A2:['A2-IV-7'],note:`ITIC Academy, Bloque 46 «Redes inalámbricas» (2026.1), §§9 y 12: Bluetooth y comunicaciones radio; se conserva 24 Mb/s como dato histórico Bluetooth 3.0+HS/AMP, indicando que AMP se retiró en especificaciones posteriores. ${wireless}`},
 3022:{A1:['A1-108','A1-118'],A2:['A2-IV-10'],note:`ITIC Academy, Bloque 42 «Redes» (2026.1), §7.9, redes definidas por software (SDN) y NFV; se contrasta la separación control/datos con ONF y el encuadre de redes WAN/SD-WAN A2-IV-10. ${redes}`},
 3023:{A1:['A1-113'],A2:['A2-IV-10'],note:`ITIC Academy, Bloque 42 «Redes» (2026.1), §7.3, jerarquías PDH/SDH y E1=2,048 Mbit/s; programa oficial de redes de transporte y WAN A1-113/A2-IV-10. ${redes}`},
 3024:{A1:['A1-125'],A2:['A2-IV-12'],note:`ITIC Academy, Bloque 48 «Seguridad en redes y en el nivel» (2026), §§1.1 y 2.4: dimensiones de seguridad y ataques de disponibilidad/denegación de servicio; programa oficial A1-125 y A2-IV-12. ${security}`},
 3025:{A1:['A1-108'],A2:['A2-IV-7'],note:`ITIC Academy, Bloque 46 «Redes inalámbricas» (2026.1), apartado sobre relación señal/ruido y capacidad de Shannon C=B·log₂(1+S/N); se relaciona con parámetros de transmisión A1-108/A2-IV-7. ${wireless}`}
};
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m);for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),t);q.revision.observaciones+=` Cotejo curricular: ${m.note} Correspondencias contrastadas con revision/temario-oficial.json y los anexos I (A1) y IX (A2 GSI) de las convocatorias BOE-A-2025-25938 y BOE-A-2025-26262; los apuntes de academia son apoyo, no sustituyen el programa oficial ni las fuentes primarias.`;q.clasificacion={...q.clasificacion,A1:m.A1,A2:m.A2,bloque_academia:m.note,estado:'revisada',nota:`${q.revision.estado}. ${m.note}`};q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Clasificación oficial A1/A2 y correspondencia Academy cotejadas para lote 541.');
