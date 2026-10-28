const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-402.json');
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 wifi:{url:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',label:'ITIC Academy, bloque 46 «Redes inalámbricas y comunicaciones móviles», versión 2026.1, §10.1 (WiMAX/IEEE 802.16); el propio índice ubica los contenidos WMAN en A1-114/A2-C9.'},
 admin:{url:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',label:'ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», versión 2026, apartado de ENI y Normas Técnicas de Interoperabilidad.'},
 network:{url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',label:'ITIC Academy, bloque 42 «Redes», versión 2026.1, sección de medios guiados, fibra y cableado estructurado; el índice declara A1-110 y A2-C5.'},
 java:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',label:'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1, arquitectura Java EE/Jakarta EE, JPA y persistencia (A1-67/A2-D10).'},
 gov:{url:'https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk',label:'ITIC Academy, bloque 10 «Gobernanza TIC, Administración digital, acceso electrónico y cooperación», versión 2026.4 (01-10-2026), transición normativa RD 806/2014–RD 1125/2024 y organización TIC.'}
};
const mapping={
 2326:{topics:['A1-112','A2-IV-11'],docs:['wifi'],detail:'A1-112 trata tecnologías de acceso inalámbricas; A2-IV-11 cubre redes inalámbricas, protocolos y características. El bloque 46 desarrolla expresamente IEEE 802.16/WiMAX en §10.1.'},
 2327:{topics:['A1-46','A2-I-9'],docs:['admin'],detail:'A1-46 cubre las Normas Técnicas de Interoperabilidad; A2-I-9 incluye ENI y NTI. El bloque 03 de Academy encuadra Administración digital, interoperabilidad y NTI.'},
 2328:{topics:['A1-110','A2-IV-7'],docs:['network'],detail:'A1-110 incluye cableado y equipos de interconexión; A2-IV-7 contempla medios guiados, parámetros significativos y cableado estructurado. El bloque 42 incluye fibra multimodo y categorías OM.'},
 2329:{topics:['A1-67','A2-III-10'],docs:['java'],detail:'A1-67 trata el entorno Java; A2-III-10 incluye Jakarta EE y persistencia. El bloque 30 de Academy desarrolla Java EE/Jakarta EE, JPA y almacenamiento persistente de entidades.'},
 2330:{topics:['A1-30','A2-I-10'],docs:['gov'],detail:'A1-30 cubre modelos de gobernanza TIC, organización e instrumentos operativos de la AGE; A2-I-10 comprende órganos e instrumentos de cooperación administrativa. El bloque 10 documenta la evolución desde el RD 806/2014 y la norma sucesora.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls=['https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'];
assert.equal(log.cambios.length,5);assert.deepEqual(log.cambios.map(c=>c.id),[2326,2327,2328,2329,2330]);
for(const change of log.cambios){
 const q=bank.preguntas.find(item=>item.id===change.id),map=mapping[change.id];assert.ok(q?.revision&&map,`Falta cotejo ${change.id}`);assert.ok(map.topics.every(t=>official.has(t)),`Tema oficial inexistente ${change.id}`);
 q.clasificacion.A1=map.topics.filter(t=>t.startsWith('A1-'));q.clasificacion.A2=map.topics.filter(t=>t.startsWith('A2-'));
 const curriculum=`${map.docs.map(key=>docs[key].label).join('; ')}. ${map.detail}`;
 const note=`Cotejo curricular: ${curriculum} Correspondencia oficial contrastada con revision/temario-oficial.json, el anexo I de la convocatoria A1 y el anexo IX de la convocatoria A2 GSI 2025 (${calls.join('; ')}). Academy sirve para el encuadre curricular; la decisión de contenido se fundamenta en las fuentes primarias de cada revisión.`;
 q.clasificacion.bloque_academia=curriculum;q.clasificacion.nota=note;q.revision.observaciones+=` ${note}`;q.comentarios=q.revision.observaciones;change.actualizada=structuredClone(q);
}
fs.writeFileSync(logPath,`${JSON.stringify(log,null,2)}\n`);fs.writeFileSync(bankPath,`${JSON.stringify(bank,null,2)}\n`);console.log('Cotejo Academy/temario oficial del lote 402 completado.');
