const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1068.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const redes='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const movil='https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk';
const protocolos='https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk';
const mapa={
 5661:{a1:[108],a2:[],desc:'ITIC Academy, bloque 46 Redes inalámbricas 2026: la radiodifusión/TDT aparece como aplicación de radiocomunicación y se estudian bandas liberadas por los dividendos digitales. No localiza la especificación del códec H.264/AVC; esta se acredita con el RD 250/2025. El tema A1-108 es correspondencia general de telecomunicaciones; no se fuerza una etiqueta A2 sin epígrafe de radiodifusión.'},
 5662:{a1:[123],a2:['IV-15'],desc:'ITIC Academy, bloque 46 Redes inalámbricas 2026, § 12.4: identifica HSPA+ (releases 7–8) y cita MIMO entre las mejoras junto con 64-QAM y portadora doble. Correspondencia directa con generaciones móviles A1-123/A2-IV-15.'},
 5663:{a1:[123],a2:['IV-15'],desc:'ITIC Academy, bloque 46 Redes inalámbricas 2026, § 12.4 y cuadro comparativo: sitúa HSDPA en 3G y resume su pico habitual como 14,4 Mbit/s. Se contrastó con 3GPP TS 25.306, tabla 5.1a: para categoría 10 la cifra del bloque es 13,976 Mbit/s, que el reactivo redondea a 14 Mbit/s. Correspondencia directa con A1-123/A2-IV-15.'},
 5664:{a1:[125],a2:['IV-12'],desc:'ITIC Academy, bloque 42 Redes 2026, § 4.8, trata seguridad de redes LAN, y bloque 46 trata seguridad/autenticación inalámbrica; ninguno desarrolla específicamente la semántica de SPI o su tabla de estado. Se usa esa cobertura general para clasificación, y NIST SP 800-41 para fundamentar inspección con estado. Correspondencia A1-125/A2-IV-12.'},
 5665:{a1:[116],a2:['IV-14'],desc:'ITIC Academy, bloque 43 Protocolos 2026, sección de voz/VoIP, identifica G.711 como PCM a 64 kbit/s y G.729 como CS-ACELP a 8 kbit/s. No se encontraron en esa unidad referencias directas a G.728 o G.726; sus tasas/denominaciones se comprobaron en UIT-T. Correspondencia por el contexto NGN/IMS/VoIP A1-116/A2-IV-14.'}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mapa[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const marker='Cotejo curricular ITIC Academy:';
 const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
 q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc}${tags?` Temas oficiales asociados: ${tags}.`:''} Los materiales de academia orientan cobertura; la evidencia técnica primaria está citada aparte.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();
 q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();
 q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 q.revision.fuentes=q.revision.fuentes.filter(f=>![redes,movil,protocolos].includes(f.url));
 const url=({5661:movil,5662:movil,5663:movil,5664:redes,5665:protocolos})[c.id];
 q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular y clasificación A1/A2 actualizado para IDs 5661–5665.');
