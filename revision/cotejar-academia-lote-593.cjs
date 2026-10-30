const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bp=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bp,'utf8'));
const lp=path.join(__dirname,'cambios-lote-593.json'),log=JSON.parse(fs.readFileSync(lp,'utf8'));
const apps={url:'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk',label:'ITIC Academy, bloque 47 «Aplicaciones móviles», versión 2026 (actualización de octubre de 2026)'};
const protocols={url:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',label:'ITIC Academy, bloque 43 «Protocolos», versión 2026.1, 29-09-2026'};
const security={url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',label:'ITIC Academy, bloque 48 «Seguridad de redes y aplicaciones», versión 2026, 04-10-2026'};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación cotejada contra revision/temario-oficial.json y los programas GSI vigentes publicados en BOE: A1 BOE-A-2025-25938 (anexo I) y A2 BOE-A-2025-26262 (anexo IX).';
const rows={
 3281:{A1:['A1-65','A1-124'],A2:['A2-III-12'],academy:apps,detail:'el bloque 47 § 2.2 describe HTTPS, service worker y manifiesto como piezas de una PWA; la pregunta original convertía esa explicación pedagógica en un «mínimo» universal discutible. Se reformuló sobre el evento fetch del service worker y se verifica la API en W3C.'},
 3282:{A1:['A1-115','A1-125'],A2:['A2-II-8','A2-IV-12'],academy:protocols,detail:'el bloque 43 desarrolla IP, IPv6 y túneles en § 9.2; el bloque 48 cubre VPN/IPsec. Las distinciones entre tunneling, VPN e IPsec se verifican con las RFC.'},
 3283:{A1:['A1-48','A1-125'],A2:['A2-I-9','A2-II-13'],academy:security,detail:'el bloque 48 trata ENS, CCN-CERT y respuesta a incidentes en el sector público. La atribución se fija exclusivamente con los arts. 2 y 34 del RD 311/2022.'},
 3284:{A1:['A1-128'],A2:['A2-IV-6'],academy:security,detail:'el bloque 48 cubre continuidad de negocio y recuperación ante desastres (§ 10.4), así como procesos de seguridad y resiliencia. La respuesta se contrasta con ISO 22301/22313.'},
 3285:{A1:['A1-128'],A2:['A2-IV-6'],academy:security,detail:'el bloque 48 incluye continuidad de negocio y recuperación ante desastres (§ 10.4); se revisa la diferencia entre objetivos temporales de recuperación y tolerancia a la interrupción con NIST/ISO.'}
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=rows[c.id];assert.ok(q&&r);for(const t of [...r.A1,...r.A2])assert.ok(official.has(t),`Tema inexistente ${t}`);
 q.clasificacion={A1:r.A1,A2:r.A2,bloque_academia:`${r.academy.label}; ${r.detail} ${r.academy.url}`,estado:'revisada',nota:`${q.revision.estado}. ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy en Drive: ${r.academy.label}; ${r.detail} ${r.academy.url} ${calls}`;
 q.revision.fuentes.push({url:r.academy.url,referencia:`${r.academy.label}; cotejo curricular: ${r.detail} El material de Academy orienta el temario, no sustituye las fuentes normativas/técnicas primarias citadas en la revisión.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bp,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(lp,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo ITIC Academy en Drive y clasificación oficial A1/A2 completados para 3281–3285.');
