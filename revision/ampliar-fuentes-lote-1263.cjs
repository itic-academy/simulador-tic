const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1263.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const sources=[
 {url:'https://docs.openstack.org/nova/latest/admin/architecture',referencia:'Documentación mantenida de Nova: el servicio Compute administra instancias y comunica sus componentes con hipervisores y máquinas virtuales.'},
 {url:'https://docs.openstack.org/cinder/2026.2/configuration/block-storage/block-storage-overview.html',referencia:'Documentación OpenStack Cinder 2026.2: el servicio Block Storage proporciona almacenamiento persistente de bloques a instancias de cómputo.'},
 {url:'https://docs.openstack.org/swift/latest/',referencia:'Documentación mantenida de Swift: Object Storage es un almacén distribuido de objetos/blobs accesible por API REST.'},
 {url:'https://docs.openstack.org/glance/2026.2/install/install-ubuntu.html',referencia:'Documentación OpenStack Glance 2026.2: identifica Glance como Image service para instalar y configurar el servicio de imágenes.'}
];
const change=log.cambios.find(c=>c.id===6638),q=bank.preguntas.find(x=>x.id===6638);if(!change||!q)throw Error('No se encontró la pregunta 6638 en el registro y el banco.');
const seen=new Set(q.revision.fuentes.map(x=>x.url));for(const source of sources)if(!seen.has(source.url)){q.revision.fuentes.push(source);change.actualizada.revision.fuentes.push(source);}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Fuentes OpenStack actuales añadidas al registro de 6638.');
