const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1065.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const redes='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const mapa={
 5646:{a1:[108],a2:['IV-7'],desc:'ITIC Academy, bloque 42 Redes 2026.1, sección 8 «Infraestructuras de acceso»: incluye xDSL (ADSL2+, VDSL2 y G.fast), pero lo resume como asimétrico; no se halló la precisión de que G.993.2 admite transmisión simétrica y asimétrica. Esa precisión se valida con UIT-T.'},
 5647:{a1:[108],a2:['II-8'],desc:'ITIC Academy, bloque 42 Redes 2026.1: el programa cubre modelos/protocolos de red e Internet/servicios básicos. No se localizó DHCPv4 ni los puertos 67/68 de forma específica; la encapsulación se fundamenta en RFC 2131.'},
 5648:{a1:[112],a2:['IV-11'],desc:'ITIC Academy, bloque 42 Redes 2026.1, apartado de medios no guiados y WLAN: ofrece cobertura general de radio/redes inalámbricas, sin una explicación específica de la interfaz IEEE 802.16/WirelessMAN o de WiMAX. La definición se comprueba en IEEE.'},
 5649:{a1:[114],a2:['IV-11','IV-12'],desc:'ITIC Academy, bloque 42 Redes 2026.1, sección «Seguridad Wi-Fi»: identifica WEP/RC4 y WPA-TKIP como inseguros, WPA2/AES-CCMP y la evolución a WPA3. Coincide con la corrección; para la distinción histórica y la relación de 802.11i/RSN se consultaron NIST e IEEE.'},
 5650:{a1:[112],a2:['IV-11'],desc:'ITIC Academy, bloque 42 Redes 2026.1: cubre tecnologías inalámbricas de forma general, pero no se localizó el desarrollo de IEEE 802.16e o los perfiles Mobile WiMAX. La clasificación sigue el programa oficial A1-112/A2-IV.11 y el dato se verifica en IEEE.'}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mapa[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const marker='Cotejo curricular ITIC Academy:';
 const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
 q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc} Temas oficiales asociados: ${tags}. La academia orienta cobertura/clasificación; la evidencia factual principal se cita por separado.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();
 q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();
 q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 q.revision.fuentes=q.revision.fuentes.filter(f=>f.url!==redes);q.revision.fuentes.push({url:redes,referencia:`ITIC Academy, bloque 42 Redes: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo ITIC Academy y clasificación oficial actualizado para IDs 5646–5650; se anotan los detalles ausentes y las diferencias del temario.');
