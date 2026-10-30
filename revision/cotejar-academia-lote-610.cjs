const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bp=path.join(__dirname,'..','preguntas_preparatic.json'),lp=path.join(__dirname,'cambios-lote-610.json');
const bank=JSON.parse(fs.readFileSync(bp,'utf8')),log=JSON.parse(fs.readFileSync(lp,'utf8'));
const docs={
 audit:{url:'https://drive.google.com/file/d/1D93MNUzOWGwD6IyuWdxIMnHaL7aXvYhp/view?usp=drivesdk',title:'ITIC Academy, bloque 16 «Auditoría informática», versión 2026.2'},
 contract:{url:'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk',title:'ITIC Academy, bloque 17 «Adquisición de sistemas, alternativas y rentabilidad de inversiones», versión 2026.2'},
 copyright:{url:'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk',title:'ITIC Academy, bloque 18 «Protección jurídica, licencias y control del software», versión 2026.1'},
 admin:{url:'https://drive.google.com/file/d/1dW2ffNhCduFHJ1hI2nT6fqs_G8DeNpo3/view?usp=drivesdk',title:'ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», edición 2026'},
 web:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',title:'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1'},
 interop:{url:'https://drive.google.com/file/d/1zdx_PRBfKM9tRy61Boz_yPekU-D-b_6S/view?usp=drivesdk',title:'ITIC Academy, bloque 20 «Interoperabilidad de sistemas», versión 2026.2'}
};
const details={
 3366:{docs:[docs.audit],detail:'el bloque 16 actualizado trata concepto, objetivos, alcance, criterios, evidencia y normas de auditoría. El enunciado queda explícitamente limitado al propósito de una edición anterior de ISO/IEC/IEEE 12207; la academia clasifica como histórica la materia desactualizada.'},
 3367:{docs:[docs.contract],detail:'el bloque 17 recoge evaluación de alternativas, contratación TIC y marco de adquisición, pero no es la autoridad para el importe o las fechas del AM 26/2015; estos datos se validaron en el PCAP y las resoluciones oficiales de contratación.'},
 3368:{docs:[docs.copyright],detail:'el bloque 18 contiene protección jurídica del software y una sección sobre duración de los derechos; la regla exacta de la persona jurídica se contrastó en el artículo 98.2 del texto consolidado del TRLPI.'},
 3369:{docs:[docs.admin,docs.web],detail:'los bloques 03 (Administración digital y calidad/TIC en servicios públicos) y 30 (estándares web) dan contexto curricular. La referencia armonizada y la presunción legal se determinaron en la disposición BOE y la Decisión de Ejecución UE.'},
 3370:{docs:[docs.interop],detail:'el bloque 20 cubre interoperabilidad, ENI y correspondencia del A2 O9. La denominación exacta del principio se cotejó con la Comunicación de la Comisión del EIF 2017, no con un resumen de academia.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación verificada contra los programas oficiales A1 (BOE-A-2025-25938, anexo I) y A2 (BOE-A-2025-26262, anexo IX), y revision/temario-oficial.json.';
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=details[c.id];assert.ok(q&&r&&q.revision);const A1=c.actualizada.clasificacion.A1,A2=c.actualizada.clasificacion.A2;for(const id of [...A1,...A2])assert.ok(official.has(id),`Tema oficial inexistente: ${id}`);
 const academy=r.docs.map(d=>`${d.title}; ${r.detail} ${d.url}`).join(' | ');
 q.clasificacion={...q.clasificacion,A1,A2,bloque_academia:academy,estado:'revisada',nota:`${q.revision.estado}. ${A2.length?'La correspondencia A2 sigue el epígrafe oficial directamente relacionado.':'No se fuerza una correspondencia A2 que el programa no formula.'} ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy: ${academy} ${calls}`;
 for(const d of r.docs)q.revision.fuentes.push({url:d.url,referencia:`${d.title}; cotejo curricular: ${r.detail} El material de academia es auxiliar; los hechos se verificaron en las fuentes primarias registradas.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bp,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(lp,JSON.stringify(log,null,2)+'\n');console.log('Cotejadas las cinco preguntas del lote 610 con material ITIC Academy 2026 y los programas A1/A2 del BOE.');
