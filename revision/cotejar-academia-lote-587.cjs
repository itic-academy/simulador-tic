const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-587.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const academy={url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',label:'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», versión 2026.1 (30-09-2026), apartados 3.4 (hash/MAC), 3.5 (firma digital), 4.1 (PKI/certificados) y pregunta 22 (OCSP frente a CRL)'};
const mappings={
 3251:{A1:['A1-80','A1-125'],A2:['A2-IV-12'],detail:'el bloque incluye hash, difusión, algoritmos de resumen y criptografía; la longitud fija del digest se coteja además con NIST FIPS 180-4.'},
 3252:{A1:['A1-47','A1-48','A1-80','A1-81','A1-125'],A2:['A2-II-13','A2-IV-12'],detail:'el temario trata las dimensiones de seguridad, la criptografía y la integridad como servicio de seguridad.'},
 3253:{A1:['A1-80','A1-81'],A2:['A2-I-6','A2-IV-12'],detail:'el material contrasta firma e identificación, integridad de datos y firma electrónica; eIDAS arts. 25–26 y NIST FIPS 186-5 sustentan el alcance y los límites.'},
 3254:{A1:['A1-80'],A2:['A2-I-6'],detail:'el apartado sobre marco jurídico de firma electrónica y eIDAS aborda el Reglamento 910/2014; la derogación concreta se coteja con su artículo 50 consolidado en EUR-Lex.'},
 3255:{A1:['A1-80','A1-81'],A2:['A2-I-6','A2-IV-12'],detail:'el bloque explica PKI/certificados y OCSP frente a CRL; RFC 6960 y RFC 5280 sustentan la diferencia técnica.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
const calls='Clasificación contrastada con revision/temario-oficial.json y los programas de las convocatorias GSI de acceso libre más recientes identificadas en BOE: A1, BOE-A-2025-25938; A2, BOE-A-2025-26262. La academia orienta el encaje, no sustituye las fuentes técnicas o jurídicas primarias.';
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=mappings[c.id];assert.ok(q?.revision&&m);for(const id of [...m.A1,...m.A2])assert.ok(official.has(id),`Tema no oficial ${id}`);const academyText=`${academy.label}; ${m.detail} ${academy.url}`;q.clasificacion={A1:m.A1,A2:m.A2,bloque_academia:academyText,estado:'revisada',nota:`${q.revision.estado}. ${calls}`};q.revision.observaciones+=` Cotejo académico: ${academyText} ${calls}`;q.revision.fuentes.push({url:academy.url,referencia:`${academy.label}; ${m.detail}`});c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo del bloque 48, clasificación A1/A2 y convocatorias: 5/5.');
