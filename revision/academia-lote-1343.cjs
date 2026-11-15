const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1343.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 os:{url:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',label:'ITIC Academy, bloque 27 «Sistemas operativos», versión 2026.1 (14/08/2026)'},
 hardware:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1 (31/08/2026)'},
 wireless:{url:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',label:'ITIC Academy, bloque 46 «Redes inalámbricas y comunicaciones móviles», versión 2026.1 (30/09/2026)'}
};
const notes={
 7036:{keys:['os'],desc:'§4.2 trata interrupciones, DMA y E/S mapeada en memoria; el apartado sitúa acceso directo a memoria en fundamentos de E/S del SO.'},
 7037:{keys:['wireless'],desc:'§9.4 cubre Bluetooth Low Energy y §9.3 el bajo consumo; el bloque mapea Bluetooth a A1-114/A2-IV-11. La modulación y el balance energético concretos se validan con la especificación primaria de Bluetooth SIG.'},
 7038:{keys:['hardware','os'],desc:'Bloque 26 aporta el encuadre curricular de equipos/componentes de PC (A1-52/54 y A2-II-1); bloque 27 desarrolla fundamentos y gestión de memoria del sistema operativo. No se presenta el material académico como fuente técnica específica de la distinción SRAM/DRAM.'},
 7039:{keys:['wireless'],desc:'§16 cubre MDM, EMM y UEM, ciclo de vida y gestión segura de dispositivos; el bloque mapea estas materias a A1-54/A1-125 y A2-IV-15. El alcance de borrado y controles se coteja con NIST SP 800-124 Rev. 2.'},
 7040:{keys:['os'],desc:'§4.1 aborda dispositivos, controladores y drivers; corresponde a fundamentos de SO y administración del software de base.'}
};
const codes={7036:'A1-59/A2-II-2/A2-IV-1',7037:'A1-114/A2-IV-11',7038:'A1-52/A1-54/A2-II-1',7039:'A1-54/A1-125/A2-IV-15',7040:'A1-59/A2-II-2/A2-IV-1'};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=notes[c.id];assert.ok(q?.revision&&r,`Falta cotejo ${c.id}`);const selections=r.keys.map(k=>docs[k]);assert.ok(selections.every(Boolean));for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(id),id);const note=`Cotejo curricular ITIC Academy: ${selections.map(d=>d.label).join('; ')}; ${r.desc} Correspondencia con el programa oficial: ${codes[c.id]}. El material académico sirve de contraste curricular; la validación factual se apoya en las fuentes técnicas primarias citadas.`;q.clasificacion.bloque_academia=note;q.clasificacion.nota=`${q.clasificacion.nota} ${note}`;q.comentarios=`${q.comentarios} ${note}`;q.revision.observaciones=`${q.revision.observaciones} ${note}`;for(const d of selections)q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo de cobertura curricular. ${r.desc}`});c.actualizada=structuredClone(q)}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo de academia, temario oficial y convocatorias actualizado para IDs 7036–7040.');
