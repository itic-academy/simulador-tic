const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1318.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
protocols:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',
videoconf:'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk',
hardware:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',
security:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',
constitution:'https://docs.google.com/document/d/1xBMfULSkmKGKsCPZLqmkEoU-eqJ9ymd4/edit?usp=drivesdk&ouid=107088454749630873035&rtp=1'
};
const notes={
6911:['videoconf','ITIC Academy 2026, bloque 50 Videoconferencia, §1.3: H.323 y códecs vocales, incluida tabla G.711/G.726/G.729; el bloque 43 contextualiza voz sobre IP. El material identifica G.711 como PCM de 64 kbit/s. No sustituye a las Recomendaciones UIT-T ni al RFC que fija la tasa de iLBC.'],
6912:['security','ITIC Academy 2026, bloque 48 Seguridad en redes y en el nivel de aplicación: amenazas, ataques y herramientas de prevención. La unidad ofrece cobertura de la categoría general, no una ficha sobre Winword/Snicker; el tipo de virus macro se acredita con el catálogo histórico Sophos.'],
6913:['security','ITIC Academy 2026, bloque 48 Seguridad en redes y en el nivel de aplicación: monitorización y herramientas de seguridad. No se encontró mención literal a Carnivore/DCS 1000; la naturaleza y situación histórica se verifican con el informe del DOJ y documentación presentada por el FBI al Congreso.'],
6914:['hardware','ITIC Academy 2026, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización: incluye virtualización de sistemas/servidores y diferencia contenedores de máquinas virtuales. La precisión del kernel compartido se coteja con documentación técnica oficial de Docker.'],
6915:['constitution','ITIC Academy, unidad constitucional disponible: organización territorial/autonómica y local; no trata de forma específica el artículo 162 CE ni la legitimación para el recurso de inconstitucionalidad. Por ello, se declara la laguna de cobertura concreta y se usa el texto consolidado oficial del BOE para la respuesta.']
};
const marker='Cotejo curricular ITIC Academy:';
const strip=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return i<0?s:s.slice(0,i).trim()};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),[key,desc]=notes[c.id];assert.ok(q&&desc,`Falta cotejo ${c.id}`);const note=`${marker} ${desc} Correspondencia oficial: ${[...q.clasificacion.A1,...q.clasificacion.A2].join('/')}. Se coteja la cobertura temática sin sustituir a la fuente primaria.`;q.clasificacion.bloque_academia=desc;q.clasificacion.nota=`${strip(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${strip(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${strip(q.revision.observaciones)} ${note}`.trim();const url=docs[key];if(!q.revision.fuentes.some(x=>x.url===url))q.revision.fuentes.push({url,referencia:`Cotejo curricular ITIC Academy: ${desc}`});c.actualizada=structuredClone(q)}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo Academy aplicado a 6911–6915.');
