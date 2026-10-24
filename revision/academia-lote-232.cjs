const fs=require('node:fs');
const path=require('node:path');
const root=path.join(__dirname,'..');
const bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-232.json');
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 hardware:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26 Hardware, Servidores, CPD, Almacenamiento y Virtualización, versión 2026.1 (31-08-2026)'},
 os:{url:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',label:'ITIC Academy, bloque 27 Sistemas Operativos, versión 2026.1 (14-08-2026)'},
 mobile:{url:'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk',label:'ITIC Academy, bloque 47 Aplicaciones Móviles y Sistemas Operativos, versión 2026.1 (30-09-2026)'},
 database:{url:'https://drive.google.com/file/d/13XibsJF_be1OreQKV3JU4tFNqgjyLph5/view?usp=drivesdk',label:'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado de Datos, versión 2026.1 (31-08-2026)'}
};
const sections={
 1476:{doc:'hardware',detail:'§3.3 sobre grid/cómputo distribuido; correspondencia curricular A1-52/A2-II-1.'},
 1477:{doc:'hardware',detail:'§§2.1–2.2 sobre CPU, ciclos y arquitectura; correspondencia A1-52/A2-II-1.'},
 1478:{doc:'os',detail:'administración de UNIX/Linux y utilidades de almacenamiento; correspondencia A1-60/A2-II-2.'},
 1479:{doc:'mobile',detail:'tabla de versiones Android, nombres de versión y API levels; correspondencia A1-62/A2-II-2.'},
 1480:{doc:'database',detail:'modelo relacional, álgebra relacional y estándar SQL; correspondencia A1-64/A2-II-5.'}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),s=sections[c.id],d=docs[s?.doc];
 if(!q?.revision||!s)throw new Error(`Falta revisión o mapeo curricular ${c.id}`);
 const note=`Cotejo temático con ${d.label}, ${s.detail} Correspondencia comprobada frente a los programas A1 (BOE-A-2025-25938) y A2 (BOE-A-2025-26262); la academia sirve de encaje curricular, no sustituye la fuente primaria de la revisión.`;
 q.clasificacion.bloque_academia=`${d.label}, ${s.detail}`;
 q.clasificacion.nota=note;
 q.revision.observaciones+=` ${note}`;
 q.comentarios=q.revision.observaciones;
 q.revision.fuentes.push({url:d.url,referencia:`${d.label}, ${s.detail}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo con los bloques ITIC Academy 26, 27, 47 y 29 y correspondencia curricular oficial añadidos a 1476–1480.');
