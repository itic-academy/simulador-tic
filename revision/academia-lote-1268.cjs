const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1268.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const network='12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH',protocol='1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw';
const map={
 6661:{a1:[109],a2:['II-8'],files:[protocol],desc:'ITIC Academy, bloque Protocolos 2026.1: incluye TFTP como transferencia de ficheros sobre UDP/69 sin autenticación; se contrasta el destino inicial UDP/69 y los TIDs posteriores con RFC 1350/IANA. Corresponde al servicio Internet básico y al estudio de protocolos TCP/IP.'},
 6662:{a1:[115],a2:['II-8'],files:[protocol],desc:'ITIC Academy, bloque Protocolos 2026.1, §4.4: separa TCP/UDP/QUIC y HTTP/3; define QUIC como transporte sobre UDP y a HTTP/3 como protocolo de aplicación. Corresponde al tema de redes IP y a los modelos TCP/IP/OSI.'},
 6663:{a1:[113],a2:['II-8','IV-8'],files:[network,protocol],desc:'ITIC Academy, bloque Redes 2026.1, §7.5: MPLS y conmutación por etiquetas; se encuentra en A1-113 y A2-C8. El bloque Protocolos ilustra el shim/capa didáctica 2.5; el orden exacto de cabeceras se comprueba en RFC 3031/3032.'},
 6664:{a1:[112],a2:['IV-11'],files:[network],desc:'ITIC Academy, bloque Redes 2026.1: cubre medios no guiados y tecnologías de acceso inalámbricas; la correspondencia es A1-112/A2-IV.11. IEEE 802.16 y la relación con WiMAX se verifican en fuentes oficiales IEEE.'},
 6665:{a1:[112],a2:['IV-11'],files:[network],desc:'ITIC Academy, bloque Redes 2026.1: encaje curricular en tecnologías de acceso inalámbricas (A1-112/A2-IV.11). El material actual no convierte 802.16e en estándar vigente independiente; el carácter histórico y la consolidación posterior se verifican en IEEE.'}
};
for(const c of log.cambios){const m=map[c.id],q=bank.preguntas.find(x=>x.id===c.id);if(!m||!q)throw Error(`Falta ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=`Cotejo curricular ITIC Academy: ${m.desc} Correspondencia oficial asociada: ${topics}. La academia orienta cobertura y prioridad, no sustituye a la fuente primaria.`;
 q.clasificacion.bloque_academia=m.desc;q.clasificacion.nota=note;
 q.comentarios=`${q.comentarios||''} ${note}`.trim();q.revision.observaciones=`${q.revision.observaciones||''} ${note}`.trim();
 q.revision.fuentes=q.revision.fuentes.filter(f=>!f.url.includes('drive.google.com'));
 for(const id of m.files)q.revision.fuentes.push({url:`https://drive.google.com/file/d/${id}/view?usp=drivesdk`,referencia:m.desc});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular ITIC Academy añadido para 6661–6665.');
