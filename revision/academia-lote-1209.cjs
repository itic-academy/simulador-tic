const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1209.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const mobile='https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk';
const systems='https://drive.google.com/file/d/1zk8UbyZCGo2GZrgnrA4aiwQxa8zi6S7U/view?usp=drivesdk';
const map={
6366:{url:systems,desc:'ITIC Academy, bloque Sistemas Operativos 2026.1, A1-60 y A2-II-2: incluye administración Unix/Linux; systemd y su mapeo de runlevels no se desarrollan en el extracto consultado. A2-IV-1 también cubre administración de sistemas, pero no se asigna porque la pregunta examina el significado de un alias de compatibilidad.'},
6367:{url:mobile,desc:'ITIC Academy, bloque temático Aplicaciones móviles y sistemas operativos, versión 2026.1: cubre Android, ART frente a Dalvik, versiones del sistema y el tema A1-124; la comparación Android 9/2018 se contrasta con los anuncios oficiales de Google.'},
6368:{url:systems,desc:'ITIC Academy, bloque Tecnologías de sistemas de información, temas A1-66/A1-67 y A2-III-11: el apartado 2.6.1 describe Entity Framework como ORM objeto-relacional de ADO.NET. El material mantiene referencias históricas de .NET Framework; se contrastan las definiciones actuales de Microsoft Learn.'},
6369:{url:systems,desc:'ITIC Academy, bloque Tecnologías de sistemas de información, tema A1-67: cubre el entorno Java, pero no se localiza en el texto el nombre del paquete java.lang; para este detalle se usa la API de Oracle.'},
6370:{url:systems,desc:'ITIC Academy, bloque Tecnologías de sistemas de información: menciona software libre en el contexto de XAMPP/servidores, sin formular que deba ser gratuito. El principio definitorio se verifica con la definición primaria GNU/FSF.'}
};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m);q.clasificacion.bloque_academia=m.desc;const note='Cotejo curricular de ITIC Academy: '+m.desc+' La academia se usa como contraste del programa, no como sustituto de las fuentes oficiales.';q.clasificacion.nota=(q.clasificacion.nota+' '+note).trim();q.comentarios=(q.comentarios+' '+note).trim();q.revision.observaciones=(q.revision.observaciones+' '+note).trim();q.revision.fuentes.push({url:m.url,referencia:'ITIC Academy/Drive: '+m.desc});c.actualizada=structuredClone(q);}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular Academy/Drive actualizado para IDs 6366–6370.');
