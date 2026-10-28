const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-389.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 web:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',label:'ITIC Academy, bloque 30, Tecnologías de Sistemas de Información, versión 2026.1'},
 network:{url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',label:'ITIC Academy, bloque 42, Redes, actualización 2026'},
 procurement:{url:'https://drive.google.com/file/d/15iDnkvIJUZS9SV3-acSMi10Ta0lwsLbV/view?usp=drivesdk',label:'ITIC Academy, temas 11 y 39, Contratación Pública, versión 3.1, octubre de 2026'},
 os:{url:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',label:'ITIC Academy, bloque 27, Sistemas Operativos, versión 2026.1'},
 software:{url:'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk',label:'ITIC Academy, bloque 18, Protección jurídica, licencias y control del software, versión 2026.1'},
 design:{url:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',label:'ITIC Academy, bloque 38, Análisis, Diseño y Construcción de Sistemas de Información, versión 2026'}
};
const map={
 2261:{topics:['A1-77','A2-II-9','A2-III-12'],docs:['web'],detail:'El bloque 30 trata HTML, estándares y tecnologías web; corresponde a A1-77 y, por los lenguajes de marca y aplicaciones web, A2-II-9/A2-III-12.'},
 2262:{topics:['A1-118','A2-II-8'],docs:['network'],detail:'El bloque 42 incluye LAN y transporte; corresponde a A1-118 y al modelo TCP/IP e interconexión del A2-II-8. La definición del umbral jumbo se verifica con Cisco, pues el programa no fija tamaños.'},
 2263:{topics:['A1-11','A1-39','A2-II-15'],docs:['procurement'],detail:'El bloque 11/39 cubre contratación pública y gestión de compra pública TIC (A1-11/A1-39); A2-II-15 ofrece encuadre relacionado con evaluación de alternativas y viabilidad. La vigencia del AM se verifica en la DGRCC, no en el temario.'},
 2264:{topics:['A1-60','A1-69','A2-II-2','A2-II-14','A2-IV-1'],docs:['os','software'],detail:'Los bloques 27 y 18 aportan contexto de administración de sistemas operativos y de software libre/licencias. La función concreta de automatización y la licencia del proyecto Ansible se contrastan con su documentación y repositorio oficiales.'},
 2265:{topics:['A1-94','A2-III-3'],docs:['design'],detail:'El bloque 38 incluye prototipos y diseño de interfaces; se corresponde con A1-94 y con las estrategias de requisitos y prototipos de A2-III-3. La atribución de una conclusión concreta a Gordon y Bieman queda pendiente de identificar el pasaje.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);assert.ok(m.topics.every(t=>official.has(t)),`Tema oficial inexistente para ${c.id}`);
 q.clasificacion.A1=m.topics.filter(t=>t.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(t=>t.startsWith('A2-'));
 const curricular=`${m.docs.map(k=>docs[k].label).join('; ')}. ${m.detail}`;
 const note=`Cotejo curricular: ${curricular} Correspondencias ${m.topics.join(', ')} contrastadas con revision/temario-oficial.json y los anexos de las convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2). La academia aporta encuadre temático, no constituye autoridad técnica ni normativa.`;
 q.clasificacion.bloque_academia=curricular;q.clasificacion.nota=note;q.revision.observaciones+=` ${note}`;q.comentarios=q.revision.observaciones;
 for(const k of m.docs)q.revision.fuentes.push({url:docs[k].url,referencia:`${docs[k].label}; cotejo curricular, no autoridad técnica ni normativa.`});
 q.revision.fuentes.push({url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:`Convocatoria A1 consultada; anexo de programa, tema(s) ${m.topics.filter(t=>t.startsWith('A1-')).join(', ')}.`});
 q.revision.fuentes.push({url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:`Convocatoria A2 GSI consultada; anexo de programa, tema(s) ${m.topics.filter(t=>t.startsWith('A2-')).join(', ')}.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular Drive, temas oficiales y convocatorias actualizado para IDs 2261–2265.');
