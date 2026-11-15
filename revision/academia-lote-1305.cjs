const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1305.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const url='https://drive.google.com/file/d/1w3UwQPDtDE9GXacSYNUGUcO6KirAQ8xf/view?usp=drivesdk';
const docs={
6846:'ITIC Academy, bloque 44, IoT (2026): contrasta protocolos LPWAN y especifica LoRaWAN con LoRa Alliance, banda, caudal y alcance. Cotejo directo del contenido de LoRaWAN; la distinción física LoRa/protocolo LoRaWAN se apoya también en LoRa Alliance.',
6847:'ITIC Academy, bloque 44, IoT/ciudades inteligentes (2026): sitúa el PNTI como instrumento de 2017–2020 y sus actuaciones. Se comprobó en el Plan oficial que IoT para servicios es acción complementaria; no se reproduce como hecho la etiqueta imprecisa «plan vigente» que aparece en una frase del material académico.',
6848:'ITIC Academy, bloque 44, Industria Conectada 4.0: aborda los 12 retos de la estrategia industrial general. Se contrasta con la página oficial de EOI, que distingue el programa específico «12 Retos de Industria 4.0» (retos tecnológicos de empresas industriales y matching con startups); son iniciativas relacionadas, no descripciones intercambiables.',
6849:'ITIC Academy, bloque 44, IoT/ciudades inteligentes: cubre FIWARE, Context Broker y NGSI-LD/ETSI. Las denominaciones de los componentes se verifican en el catálogo FIWARE; no se atribuye a FIWARE el carácter de norma UIT-T o UNE.',
6850:'ITIC Academy, bloque 44, IoT/Industria 4.0: explica las seis C de analítica Big Data (connection, cloud, cyber, content/context, community, customization); cotejo directo con la formulación de la pregunta.'
};
const marker='Cotejo curricular ITIC Academy:';
const trim=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return(i<0?s:s.slice(0,i)).trim()};
for(const change of log.cambios){
 const q=bank.preguntas.find(x=>x.id===change.id);assert.ok(q&&docs[change.id],'Falta ID '+change.id);
 const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin epígrafe A2 directamente equivalente';
 const note=marker+' '+docs[change.id]+' Correspondencia oficial: '+topics+'. ITIC Academy se usa como cotejo curricular, no como autoridad normativa ni técnica.';
 q.clasificacion.bloque_academia=docs[change.id];q.clasificacion.nota=(trim(q.clasificacion.nota)+' '+note).trim();
 q.comentarios=(trim(q.comentarios)+' '+note).trim();q.revision.observaciones=(trim(q.revision.observaciones)+' '+note).trim();
 q.revision.fuentes=q.revision.fuentes.filter(s=>s.url!==url);q.revision.fuentes.push({url,referencia:docs[change.id]});
 change.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular aplicado a los IDs 6846–6850.');
